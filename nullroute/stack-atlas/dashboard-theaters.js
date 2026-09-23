
let D = null;  // 由 dashboard.js 读 data/monitor/latest.json 后赋值
/* 界面文字走 i18n.js 的 t(key)；latest.json 里可枚举的中文值走 tv(s)（中文页里把英文专名换成中文，英文页查表译英）；自由文本走 tzf(o, k, i, max)：英文页取同名 _en 字段，没有英文才原样显示并加 (zh) 标注。
 * 站点类型码、国家码、证据档、来源文件走 kindT / ccT / evT / srcT / listT。GDELT 与 SEC 的原文字段（地点、行为者、公司登记名）不翻，表上标 class rawsrc；枚举表原文的格标 class verbatim。 */
const VRANK = {'影像可见受损迹象': 0, '疑似受损，需核': 0, '整幅变化，非局部': 1, '影像有局部变化，无热异常': 2, '有热异常，影像无可见变化': 3, '无可见结构变化': 4, '无可见变化': 4, '后景不可判读': 5, '不可判读': 5};
const VCLASS = {'影像可见受损迹象': 'v-red', '疑似受损，需核': 'v-red', '整幅变化，非局部': 'v-amber', '影像有局部变化，无热异常': 'v-amber', '有热异常，影像无可见变化': 'v-blue', '无可见变化': 'v-green', '不可判读': 'v-gray', '无可见结构变化': 'v-green', '后景不可判读': 'v-gray'};
const C = getComputedStyle(document.documentElement);
const col = n => C.getPropertyValue(n).trim();
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmt = v => v == null ? '' : (Math.abs(v) >= 1000 ? Math.round(v).toLocaleString('en-US') : v);
Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;
Chart.defaults.color = col('--ink2');
// vertical marker at the break date on every aligned chart
const markerPlugin = {id: 'brk', afterDraw(chart, args, opts) {
  if (!opts.index && opts.index !== 0) return;
  const x = chart.scales.x, y = chart.scales.y, ctx = chart.ctx;
  const px = x.getPixelForValue(opts.index);
  ctx.save(); ctx.strokeStyle = col('--s8'); ctx.setLineDash([4, 3]); ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(px, y.top); ctx.lineTo(px, y.bottom); ctx.stroke();
  if (opts.label) { ctx.fillStyle = col('--s8'); ctx.font = '11px sans-serif'; ctx.fillText(opts.label, px + 4, y.top + 10); }
  ctx.restore();
}};
Chart.register(markerPlugin);

const nav = document.getElementById('nav'), root = document.getElementById('root');
const maps = {}; window.__maps = maps;  // 调试用：浏览器控制台能拿到各战区的 Leaflet 地图
const viewHooks = {};  // 非战区视图的懒构建：dashboard.js 登记 {key: fn}
const pageCharts = [];  // 战区页对齐图的 Chart 实例，整页重绘时销毁
const STZ = st => ({stopped: t('st_halted'), narrowed: t('st_narrowed'), inuse: t('st_inuse'), damaged: t('st_damaged'), unknown: ''}[st] || '');
function initTheaters(data) {
  D = data;
  D.theaters.forEach((T, i) => {
    const b = document.createElement('button'); b.textContent = tv(T.title) + (T.built ? '' : t('todo')); b.dataset.k = T.key;
    b.onclick = () => show(T.key); nav.appendChild(b);
    const sec = document.createElement('section'); sec.className = 'theater'; sec.id = 't_' + T.key;
    sec.innerHTML = T.built ? renderBuilt(T) : renderPlan(T);
    root.appendChild(sec);
  });
}
function show(k) {
  document.querySelectorAll('.theater').forEach(s => s.classList.toggle('on', s.id === 't_' + k));
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('on', b.dataset.k === k));
  const T = D.theaters.find(t => t.key === k);
  if (T) {
    if (T.built && !maps[k]) { buildMap(T); buildCharts(T); if (T.metro) buildMetro(T); }
  } else if (viewHooks[k] && !viewHooks[k].done) { viewHooks[k].fn(); viewHooks[k].done = true; }
  // 2026-09-23：地图在标签切换的同一刻建好并 fitBounds，那时容器还没量出尺寸，缩放算成整个世界，海湾缩成一团、点不到；
  // 主人「卫星图哪去了」的直接原因。改成量好尺寸后再对准战区一次（只在第一次显示时做，之后保留用户自己的缩放）。
  if (maps[k]) setTimeout(() => { maps[k].invalidateSize(); if (T && !maps[k]._fitted) { maps[k]._fitted = true; maps[k].fitBounds(focusBounds(T)); } }, 50);
  const anchor = k === 'cost' && window.COST_SEL ? 'cost=' + window.COST_SEL : k;  // 代价视图带上当前那一条链（2026-09-21）
  history.replaceState(null, '', '#' + anchor);
  const a = document.getElementById('langlink'); if (a) a.href = t('lang_href') + '#' + anchor;  // 语言链接带上当前视图
}
function renderPlan(T) {
  return `<h2>${esc(tv(T.title))} <small>${t('plan_sub')}</small></h2><div class="plan">${tzf(T, 'plan')}</div>`;
}
function chartTitle(s) { return tv(s.label) + (s.unit ? (LANG === 'en' ? ', ' : '，') + tv(s.unit) : ''); }
function renderBuilt(T) {
  const tiles = T.tiles.map(t_ => {
    const cls = t_.ratio == null ? '' : (t_.ratio < 0.85 ? 'down' : (t_.ratio > 1.15 ? 'up' : ''));
    return `<div class="tile"><div class="l">${esc(tv(t_.label))}</div><div class="v">${fmt(t_.value)}</div><div class="u">${esc(tv(t_.unit))}</div>
      <div class="b">${esc(tv(t_.base_label))} ${fmt(t_.base)} · ${t('ratio')} <span class="r ${cls}">${t_.ratio ?? ''}</span></div></div>`;
  }).join('');
  const groups = [...new Set(T.series.map(s => s.group))];
  const charts = groups.map(g => `<div class="glabel">${esc(tv(g))}</div>` + T.series.filter(s => s.group === g).map(s => `<div class="chart ${s.kind === 'line' ? 'tall' : ''}"><canvas id="c_${T.key}_${cssid(s.id)}"></canvas></div>`).join('')).join('');
  const ba = T.before_after.length ? `<table><tr><th>${t('th_kind')}</th><th>${t('th_indicator')}</th><th class="num">${t('th_before90')}</th><th class="num">${t('th_after')}</th><th class="num">${t('th_change')}</th></tr>` +
    T.before_after.map(r => `<tr><td>${esc(tv(r.cat))}</td><td>${esc(tv(r.name))}</td><td class="num">${fmt(r.before)}</td><td class="num">${fmt(r.after)}</td><td class="num ${r.change_pct < 0 ? 'neg' : (r.change_pct > 0 ? 'pos' : '')}">${r.change_pct ?? ''}</td></tr>`).join('') + '</table>' : `<p class="legend">${t('ba_none')}</p>`;
  const gd = T.gdelt_cc ? Object.entries(T.gdelt_cc).map(([k, v]) => `<tr><td title="${esc(k)}">${esc(ccT(k))}</td><td class="num">${v}</td></tr>`).join('') : '';
  const gtop = (T.gdelt_top || []).map(r => {
    const pl = rawT(r.place); const a1 = actorT(r.a1), a2 = actorT(r.a2);
    const actors = LANG === 'zh' ? [a1, a2].filter(Boolean).join(' → ') : [nn(r.a1), nn(r.a2)].filter(Boolean).join(' → ');
    const rawActors = [nn(r.a1), nn(r.a2)].filter(Boolean).join(' → ');
    return `<tr><td title="${esc(pl.title)}">${esc(pl.text || ccT(r.cc))}</td><td title="${esc(actors === rawActors ? '' : rawActors)}">${esc(actors)}</td><td class="num">${r.n}</td><td><a href="${esc(r.url)}" target="_blank">${t('source_link')}</a></td></tr>`;
  }).join('');
  const uc = (T.ucdp || []).map(r => `<tr><td title="${esc(r.country)}">${esc(ccT(r.country))}</td><td class="num">${r.n}</td><td class="num">${r.deaths}</td></tr>`).join('');
  const sec = (T.sec || []).map((r, i) => { const co = rawT(r.company); return `<tr><td title="${esc(co.title)}">${esc(co.text || t('company_n', {n: i + 1}))}</td><td class="num">${r.n}</td><td class="num">${r.rev_bn ?? ''}</td></tr>`; }).join('');
  return `
  <h2>${esc(tv(T.title))} <small>${t('break_target', {ck: esc(nz(T.break.chokepoint))})}${T.break.date ? t('break_on', {d: T.break.date}) : t('break_none')}</small></h2>
  <div class="reading">${T.reading.map((p, i) => `<p>${tzf(T, 'reading', i)}</p>`).join('')}</div>
  ${T.metro ? `<h2>${t('metro_h2')} <small>${t('metro_sub', {n: T.metro.lines.length})}</small></h2>
  <div class="kpane" style="grid-template-columns:1fr"><div class="map" id="m_${T.key}" style="height:640px"></div><div class="map-legend" id="legend_${T.key}"></div><div class="focus-strip" id="focus_${T.key}"></div><div class="metro-legend off" id="mlegend_${T.key}"></div><div class="anom-legend" id="alegend_${T.key}">${anomLegend(T)}</div></div>
  <details class="metro-wrap" style="margin-top:12px"><summary style="cursor:pointer;font-size:13px;color:var(--ink2)">${t('metro_schematic')}</summary><svg id="metro_${T.key}" class="metro" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet"></svg></details>` : ''}
  ${T.nodes ? `<h2>${t('nodes_h2')} <small>${t('nodes_sub')}</small></h2>
  <div class="kpane" style="grid-template-columns:1fr">
    <div class="nodes" id="nodes_${T.key}" style="flex-direction:row;flex-wrap:wrap;max-height:none">${T.nodes.map(n => `<div class="node s-${n.status}" id="nd_${T.key}_${n.num}" onclick="event.stopPropagation();selectNode('${T.key}',${n.num})"><h3><span class="n">${n.num}</span>${esc(tv(n.name))} <span class="chip st-${n.status}" title="${esc(t('st_manual', {d: n.status_date || ''}))}">${esc(tv(n.status_zh))}</span></h3><div class="k">${esc(tv(n.kind))}</div>
      <div class="e">${n.evidence.slice(0, 3).map(e => `${esc(nz(e.item))}${LANG === 'en' ? ': ' : '：'}${esc(tv(e.value))}`).join('<br>')}</div></div>`).join('')}</div></div>
  <div class="kdetail" id="kd_${T.key}"></div>` : ''}
  <h2>${T.nodes ? t('tiles_h2') : t('map_tiles_h2')} <small>${t('tiles_sub')}</small></h2>
  <div class="row">${T.nodes ? '' : `<div class="map" id="m_${T.key}"></div>`}<div class="tiles">${tiles}</div></div>
  <h2>${t('aligned_h2')} <small>${t('aligned_sub')}</small></h2>
  <div class="multi">${charts}</div>
  <h2>${t('ba_h2')} <small>${t('ba_sub')}</small></h2>
  ${ba}
  ${renderVesselsAir(T)}
  ${renderSupplyAttacks(T)}
  ${renderStrikes(T)}
  ${renderS2(T)}
  ${renderChains(T)}
  <div class="grid2">
    <div><h2>${t('conflict_h2')} <small>${t('conflict_sub')}</small></h2>
      <table><tr><th>${t('th_cc')}</th><th class="num">${t('th_count')}</th></tr>${gd}</table><br>
      <table class="rawsrc"><tr><th>${t('th_place')}</th><th>${t('th_actors')}</th><th class="num">${t('th_mentions')}</th><th></th></tr>${gtop}</table>
      ${uc ? `<h2>${t('ucdp_h2')} <small>${(T.ucdp_span || []).join(t('ucdp_span_sep'))}</small></h2><table><tr><th>${t('th_country')}</th><th class="num">${t('th_events')}</th><th class="num">${t('th_deaths')}</th></tr>${uc}</table>` : ''}
    </div>
    <div><h2>${t('company_h2')} <small>${t('company_sub', {p: esc(nz((T.sec_summary || {}).phrase || ''))})}</small></h2>
      <table class="rawsrc"><tr><th>${t('th_company')}</th><th class="num">${t('th_filings')}</th><th class="num">${t('th_revenue')}</th></tr>${sec || `<tr><td colspan="3">${t('none')}</td></tr>`}</table>
      <p class="legend">${t('company_note')}</p>
    </div>
  </div>`;
}
function cssid(s) { let h = 0; for (const ch of String(s)) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return String(s).replace(/[^A-Za-z0-9_]/g, '_') + '_' + h.toString(36); }
const STC = {stopped: '#ff3b30', narrowed: '#ff9500', inuse: '#34c759', damaged: '#5856d6', unknown: '#c7c7cc'};
/* 建 Leaflet 地图：缩放钮、图层钮、署名的提示文字按页面语言给（Leaflet 自带的是英文）。 */
/* 地图打开时对准「有东西的点」：关键节点、影像判读有变化的站、异常航迹，而不是整个战区的框（中东的框从苏丹到印度，海湾只占一角，
   点根本点不到；2026-09-23 主人「卫星图哪去了」）。没有这些点时退回战区框。 */
function focusBounds(T) {
  const pts = [];
  (T.nodes || []).forEach(n => { if (n.lat != null && n.lon != null) pts.push([n.lat, n.lon]); });
  const sp = Object.fromEntries((T.site_points || []).map(p => [p.name, p]));
  (T.s2_change || []).forEach(r => { const v = r.manual_verdict || r.verdict, p = sp[r.site]; if ((VRANK[v] ?? 9) <= 3 && p) pts.push([p.lat, p.lon]); });
  ((T.track_anomalies || {}).items || []).forEach(a => { if (a.lat != null && a.lon != null) pts.push([a.lat, a.lon]); });
  return pts.length > 1 ? L.latLngBounds(pts).pad(0.08) : (T.map_bounds || T.bbox);
}
/* 图下的统一图例（2026-09-23 主人：「图例不清楚，不知道不同形状的点代表什么」）：地图上每一种记号一行，图标用画地图的同一套函数画。 */
function anomCounts(T) { const tot = {}; ((T.track_anomalies || {}).areas || []).forEach(a => Object.entries(a.counts || {}).forEach(([k, n]) => { tot[k] = (tot[k] || 0) + n; })); return tot; }
function mapLegend(T) {
  const row = lgRow;
  const ring = (c, sev) => s2Svg(c, 18, sev);
  const arrow = c => `<svg width="16" height="16" viewBox="0 0 16 16" style="transform:rotate(45deg)"><path d="M8 1 L13 14 L8 11 L3 14 Z" fill="${c}" stroke="#fff" stroke-width="1"/></svg>`;
  const dot = c => `<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="3.5" fill="${c}"/></svg>`;
  const tot = anomCounts(T);
  const groups = [];
  groups.push({h: t('lg_h_sites'), rows: [
    row(nodePinSvg(1, 'stopped', 16), t('lg_node'), t('lg_node_note')),
    row(`<span class="lg-pins">${nodePinSvg('', 'stopped', 12)}${nodePinSvg('', 'narrowed', 12)}${nodePinSvg('', 'damaged', 12)}${nodePinSvg('', 'inuse', 12)}</span>`, t('lg_node_colors'), t('lg_node_colors_note')),
    row(ring('#d70015', true), t('lg_s2_red'), t('lg_s2_note')),
    row(ring('#ff9500'), t('lg_s2_amber')),
    row(ring('#0071e3'), t('lg_s2_blue')),
    row(`<svg width="18" height="18" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" fill="#fff" stroke="#8e8e93" stroke-width="1.8"/></svg>`, t('lg_strat'))]});
  if (T.ais && (T.ais.ships || []).length) groups.push({h: t('lg_h_ais'), rows: [
    row(arrow('#1f6feb'), t('lg_ais_moving')), row(dot('#1f6feb'), t('lg_ais_still')),
    `<div class="lg-keys">${['tank', 'cargo', 'pass', 'fish', 'other', 'unk'].map(k => `<span class="ais-key"><i style="background:${AIS_COLOR[k]}"></i>${esc(aisL(AIS_CAT_T[k]))}</span>`).join('')}</div>`]});
  if (T.track_anomalies && (T.track_anomalies.items || []).length) groups.push({h: t('lg_h_anom'), rows:
    Object.keys(ANOM_STYLE).map(k => row(anomSvg(ANOM_STYLE[k], 18), t('anom_' + k), t('lg_anom_' + k), tot[k] ?? 0))
    .concat([row(`<svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="7" fill="none" stroke="#1f6feb" stroke-width="1.2" stroke-dasharray="3 3"/></svg>`, t('lg_anom_area'))])});
  if (T.aircraft && T.aircraft.circles && T.aircraft.circles.length) groups.push({h: t('lg_h_air'), rows: [
    row(`<svg width="18" height="18" viewBox="0 0 18 18"><circle cx="9" cy="9" r="7" fill="none" stroke="#5856d6" stroke-width="1.5" stroke-dasharray="4 3"/></svg>`, t('lg_air_circle'))]});
  return `<div class="lg-hint">${t('lg_hint')}</div>` + groups.map(g => `<div class="lg-group"><div class="lg-h">${g.h}</div>${g.rows.join('')}</div>`).join('');
}
/* 地图上的卫星图弹窗（2026-09-23 主人：「弹窗太大，不拖动就看不完整」）：只放站名、结论、这是哪／做什么／受打击意味着、前后两景；判读依据与像素统计不进弹窗，
   要看细节按「详细」跳到下方卡片。 */
function s2Popup(r) {
  const v = r.manual_verdict || r.verdict;
  return `<div class="s2pop"><div class="l"><b>${esc(nz(r.site))}</b> ${r.country ? '· ' + esc(ccT(r.country)) : ''} <span class="vb ${VCLASS[v] || 'v-gray'}">${esc(tv(v))}</span></div>
    ${r.ctx_where ? `<div class="ctx"><div><b>${t('ctx_where')}</b>${tzf(r, 'ctx_where')}</div><div><b>${t('ctx_what')}</b>${tzf(r, 'ctx_what')}</div><div><b>${t('ctx_if_hit')}</b>${tzf(r, 'ctx_if_hit')}</div></div>` : ''}
    <div class="s2pop-imgs">${r.png_before ? `<div><img src="${r.png_before}"><div class="u">${t('before_scene')} ${esc(r.before_date || '')}</div></div>` : ''}${r.png_after ? `<div><img src="${r.png_after}"><div class="u">${t('after_scene')} ${esc(r.after_date || '')}</div></div>` : ''}</div>
    <div class="u"><a href="#" onclick="event.preventDefault();const el=document.getElementById('s2card_${cssid(r.site)}');if(el){el.scrollIntoView({block:'start'});el.classList.add('hl');setTimeout(()=>el.classList.remove('hl'),2500)}">${t('s2pop_more')}</a></div></div>`;
}
/* 关键节点记号（2026-09-23 主人「关键节点改一下，更突出更警告一点」）：由黑色圆点改成按状态上色的定位针，针身里是编号，
   中断（红）与受损（紫）的针外面再套一圈同色光晕并缓慢呼吸；针尖落在坐标上。地图与图例共用。 */
const NODE_PIN_COLOR = {stopped: '#d70015', narrowed: '#ff9500', inuse: '#34c759', damaged: '#5856d6', unknown: '#6e6e73'};
function nodePinSvg(num, status, w = 34) {
  const c = NODE_PIN_COLOR[status] || NODE_PIN_COLOR.unknown, alert = status === 'stopped' || status === 'damaged';
  const h = Math.round(w * 1.3);
  return `<svg width="${w}" height="${h}" viewBox="0 0 34 44" class="${alert ? 'pin-alert' : ''}">
    ${alert ? `<circle class="pin-halo" cx="17" cy="17" r="15" fill="${c}" fill-opacity=".22"/>` : ''}
    <path d="M17 42 C17 42 4 27 4 16 A13 13 0 0 1 30 16 C30 27 17 42 17 42 Z" fill="${c}" stroke="#fff" stroke-width="2.4"/>
    <text x="17" y="21.5" text-anchor="middle" font-size="15" font-weight="800" fill="#fff" font-family="-apple-system,'SF Pro Text','Helvetica Neue',Arial,sans-serif">${num}</text></svg>`;
}
const nodePinIcon = (n, w = 34) => { const h = Math.round(w * 1.3); return L.divIcon({className: 'anom-ic node-pin', html: nodePinSvg(n.num, n.status, w), iconSize: [w, h], iconAnchor: [w / 2, h - 2], tooltipAnchor: [0, -h + 6]}); };
/* 关键节点的地图弹窗（2026-09-23 主人「点关键节点能弹卫星图和分析说明吗」）：编号、名称、状态与判定日；「为什么重要」的头两段是分析；
   该节点下每个有影像的站给结论徽章、前后两景、「受打击意味着」一句；最后一行「详细」打开完整的节点详情。 */
function nodePopup(T, n) {
  const ctx = {}; (T.s2_change || []).forEach(r => { ctx[r.site] = r; });
  const why = (LANG === 'en' && n.why_en && n.why_en.length ? n.why_en : (n.why || [])).slice(0, 2);
  const imgs = (n.images || []).map(r => { const c = ctx[r.site] || {}; const v = r.manual_verdict || r.verdict;
    return `<div class="np-site"><div class="l"><b>${esc(nz(r.site))}</b> ${v ? `<span class="vb ${VCLASS[v] || 'v-gray'}">${esc(tv(v))}</span>` : ''}</div>
      <div class="s2pop-imgs">${r.png_before ? `<div><img src="${r.png_before}"><div class="u">${t('before_scene')} ${esc(r.before_date || '')}</div></div>` : ''}${r.png_after ? `<div><img src="${r.png_after}"><div class="u">${t('after_scene')} ${esc(r.after_date || '')}</div></div>` : ''}</div>
      ${c.ctx_if_hit ? `<div class="ctx"><div><b>${t('ctx_if_hit')}</b>${tzf(c, 'ctx_if_hit')}</div></div>` : ''}</div>`; }).join('');
  return `<div class="s2pop nodepop"><div class="l"><span class="np-num" style="background:${NODE_PIN_COLOR[n.status] || NODE_PIN_COLOR.unknown}">${n.num}</span><b>${esc(tv(n.name))}</b> <span class="chip st-${n.status}">${esc(tv(n.status_zh))}</span> <span class="u">${esc(t('st_manual', {d: n.status_date || ''}))}</span></div>
    <div class="np-why">${why.map(w => `<p>${esc(w)}</p>`).join('')}</div>
    ${imgs || `<p class="u">${t('no_images')}</p>`}
    <div class="u"><a href="#" onclick="event.preventDefault();selectNode('${T.key}',${n.num})">${t('np_more')}</a></div></div>`;
}
function mkMap(id, opts) {
  const map = L.map(id, Object.assign({zoomControl: false, attributionControl: false}, opts || {}));
  L.control.zoom({zoomInTitle: t('zoom_in'), zoomOutTitle: t('zoom_out')}).addTo(map);
  L.control.attribution({prefix: '<a href="https://leafletjs.com" title="Leaflet">Leaflet</a>'}).addTo(map);
  return map;
}
function layersTitle(map) { const el = map.getContainer().querySelector('.leaflet-control-layers-toggle'); if (el) el.title = t('layers_ctl'); }
function buildMetro(T) {
  const svg = document.getElementById('metro_' + T.key); if (!svg || svg.dataset.built) return; svg.dataset.built = '1';
  const S = T.metro.stations, NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); (parent || svg).appendChild(e); return e; };
  const gSeg = el('g', {}), gSt = el('g', {}), gLbl = el('g', {});
  // 每站经过的线数，用来把并行线错开
  const passes = {}; T.metro.lines.forEach(l => [...l.route, ...l.bypass].forEach(([a, b]) => { [a, b].forEach(x => { passes[x] = passes[x] || new Set(); passes[x].add(l.id); }); }));
  const offsetOf = (st, lid) => { const arr = [...passes[st]]; const i = arr.indexOf(lid); return (i - (arr.length - 1) / 2) * 6; };
  const path = (a, b, lid) => { const A = S[a], B = S[b]; const oa = offsetOf(a, lid), ob = offsetOf(b, lid);
    const x1 = A.x, y1 = A.y + oa, x2 = B.x, y2 = B.y + ob; const mx = x1 + (x2 - x1) * 0.55;
    return `M${x1},${y1} L${mx - 18},${y1} Q${mx},${y1} ${mx},${y1 + Math.sign(y2 - y1) * Math.min(18, Math.abs(y2 - y1) / 2)} L${mx},${y2 - Math.sign(y2 - y1) * Math.min(18, Math.abs(y2 - y1) / 2)} Q${mx},${y2} ${mx + 18},${y2} L${x2},${y2}`; };
  T.metro.lines.forEach(l => {
    l.route.forEach(([a, b]) => { const p = el('path', {d: path(a, b, l.id), class: 'seg', stroke: l.color, 'data-line': l.id}, gSeg); if (S[a].status === 'stopped' || S[b].status === 'stopped') p.setAttribute('stroke-dasharray', '2 9'); });
    l.bypass.forEach(([a, b]) => el('path', {d: path(a, b, l.id), class: 'seg bypass', stroke: l.color, 'data-line': l.id}, gSeg));
  });
  Object.entries(S).forEach(([id, st]) => {
    const n = (passes[id] || new Set()).size, xfer = n > 1;
    if (st.status) el('circle', {cx: st.x, cy: st.y, r: xfer ? 15 : 11, class: 'ring', stroke: STC[st.status] || STC.unknown}, gSt);
    const c = el('circle', {cx: st.x, cy: st.y, r: xfer ? 9 : 6, class: 'st' + (xfer ? ' xfer' : '') + (st.num ? ' clickable' : ''), 'data-st': id}, gSt);
    if (st.num) { c.setAttribute('fill', '#1d1d1f'); el('text', {x: st.x, y: st.y, class: 'num'}, gSt).textContent = st.num; c.addEventListener('click', e => { e.stopPropagation(); selectNode(T.key, st.num); }); }
    const stz = STZ(st.status);
    if (st.label === 'above') {
      el('text', {x: st.x, y: st.y - 24, 'text-anchor': 'middle', style: 'font-weight:700;font-size:13.5px'}, gLbl).textContent = tv(st.name);
      el('text', {x: st.x, y: st.y - 10, 'text-anchor': 'middle', class: 'kind'}, gLbl).textContent = tv(st.kind) + (stz ? ' · ' + stz : '');
    } else {
      const right = st.x < 850; const tx = right ? st.x + (xfer ? 20 : 15) : st.x - 15; const anchor = right ? 'start' : 'end';
      el('text', {x: tx, y: st.y - 3, 'text-anchor': anchor}, gLbl).textContent = tv(st.name);
      el('text', {x: tx, y: st.y + 11, 'text-anchor': anchor, class: 'kind'}, gLbl).textContent = tv(st.kind) + (stz ? ' · ' + stz : '');
    }
  });
  const leg = document.getElementById('mlegend_' + T.key);
  if (!leg || leg.dataset.built) return; leg.dataset.built = '1';
  leg.innerHTML = T.metro.lines.map(l => `<span class="l" data-line="${l.id}"><i style="border-color:${l.color}"></i>${esc(tv(l.name))}</span>`).join('') + `<span style="margin-left:auto">${t('metro_legend_note')}</span>`;
  leg.querySelectorAll('.l').forEach(sp => sp.addEventListener('click', () => { const on = sp.classList.toggle('on'); leg.querySelectorAll('.l').forEach(o => { if (o !== sp) o.classList.remove('on'); });
    svg.querySelectorAll('.seg').forEach(p => p.classList.toggle('dim', on && p.dataset.line !== sp.dataset.line));
    if (metroOvs[T.key]) metroOvs[T.key].highlight(on ? sp.dataset.line : null); }));
}
/* 援乌武器供应链在欧洲境内遭袭（乌克兰战区，2026-09-21）。数据是 latest.json 的 theaters[ukraine].supply_attacks（monitor/supply_attacks.py）：
 * 事件表人工维护、逐行出处；范围 A 直接针对援乌设施，B 通用设施单列；归因照官方与检方原话分四档，tier 1 最强。英文页取 *_en 字段；
 * names_orig（外文原名）只放在对象格的 title 里，中文页正文不出现拉丁字母。 */
const SA_TIER_COLOR = {1: '#7f1d1d', 2: '#c0392b', 3: '#e8836f', 4: '#f2ab99'};
const saL = (o, k) => (LANG === 'en' ? (o[k + '_en'] || o[k]) : o[k]) ?? '';
function saDate(e) {
  if (e.date_precision === 'month') return esc(e.date.slice(0, 7)) + `<span class="u">${t('date_month_note')}</span>`;
  if (e.date_precision === 'year') return esc(e.date.slice(0, 4));
  if (e.date_precision === 'report') return esc(e.date) + `<span class="u">${t('date_report_note')}</span>`;
  return esc(e.date);
}
function saBars(monthly, narrow) {  // narrow：窄屏另出一份宽 380 的图，字不随整图缩小到看不清
  const W = narrow ? 380 : 760, H = narrow ? 170 : 150, L_ = 26, B = 22, T_ = 14, n = monthly.length, mx = Math.max(1, ...monthly.map(m => m.n)), fs = narrow ? 12 : 10.5;
  const step = (W - L_ - 6) / n, bw = step * 0.7;
  let o = '';
  for (let g = 0; g <= mx; g++) { const y = T_ + (H - T_ - B) * (1 - g / mx); o += `<line x1="${L_}" x2="${W - 6}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}" stroke="#ececE8"/><text x="${L_ - 5}" y="${(y + 4).toFixed(1)}" text-anchor="end" font-size="${fs}" fill="#86868b">${g}</text>`; }
  monthly.forEach((m, i) => { const x = L_ + i * step + (step - bw) / 2, h = (H - T_ - B) * m.n / mx, y = H - B - h;
    o += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${Math.max(h, 0).toFixed(1)}" fill="#c0392b" rx="2"><title>${esc(m.month)}: ${m.n}</title></rect>`;
    if (m.n) o += `<text x="${(x + bw / 2).toFixed(1)}" y="${(y - 3).toFixed(1)}" text-anchor="middle" font-size="${fs}" fill="#7f1d1d">${m.n}</text>`;
    if (i % (narrow ? 6 : 3) === 0) o += `<text x="${(x + bw / 2).toFixed(1)}" y="${H - 6}" text-anchor="${narrow && i === 0 ? 'start' : 'middle'}" font-size="${fs}" fill="#86868b">${esc(m.month)}</text>`; });
  return `<svg class="${narrow ? 'sa-n' : 'sa-w'}" viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px">${o}</svg>`;
}
function saRow(e, compact) {
  const tier = `<span class="sa-tier t${e.tier}" title="${esc(saL(e, 'attribution_note'))}">${esc(saL(e, 'attribution'))}</span>`;
  const src = `<a href="${esc(e.source_url)}" target="_blank" rel="noopener">${t('src_link')}</a>${e.source_url2 ? ` · <a href="${esc(e.source_url2)}" target="_blank" rel="noopener">${t('src_link2')}</a>` : ''}`;
  const cells = [
    [t('th_date'), saDate(e)], [t('th_country'), esc(saL(e, 'country'))], [t('th_place'), esc(saL(e, 'place'))],
    [t('th_target'), `<span title="${esc(nn(e.names_orig))}">${esc(saL(e, 'target'))}</span>`], [t('th_role'), esc(saL(e, 'supply_role'))],
    [t('th_act'), esc(saL(e, 'act'))], [t('th_outcome'), `<span title="${esc(saL(e, 'damage'))}">${esc(saL(e, 'outcome'))}</span>`],
    [t('th_legal'), esc(saL(e, 'legal_status'))], [t('th_attr'), tier], [t('th_src'), src]];
  return `<tr>${cells.map(([h, v]) => `<td data-h="${esc(h)}">${v}</td>`).join('')}</tr>`;
}
function renderSupplyAttacks(T) {
  const SA = T.supply_attacks; if (!SA) return '';
  const s = SA.summary, tiers = s.by_tier || {}, tn = s.tier_names || {};
  const tierName = k => (tn[k] || [])[LANG === 'en' ? 1 : 0] || '';
  const A = SA.events.filter(e => e.scope === 'A'), B = SA.events.filter(e => e.scope !== 'A');
  const tile = (label, v, sub) => `<div class="tile"><div class="l">${label}</div><div class="v">${esc(v)}</div><div class="u">${t('sa_unit')}${sub ? ' · ' + sub : ''}</div></div>`;
  const head = [t('th_date'), t('th_country'), t('th_place'), t('th_target'), t('th_role'), t('th_act'), t('th_outcome'), t('th_legal'), t('th_attr'), t('th_src')].map(h => `<th>${h}</th>`).join('');
  const legend = [1, 2, 3, 4].map(k => `<span class="sa-tier t${k}">${esc(tierName(k))}</span>`).join(' ');
  const ag = (SA.aggregates || []).map(r => `<tr><td data-h="${esc(t('th_metric'))}">${esc(saL(r, 'metric'))}</td><td data-h="${esc(t('th_value'))}" class="num">${esc(r.value)}</td><td data-h="${esc(t('th_unit'))}">${esc(saL(r, 'unit'))}</td><td data-h="${esc(t('th_period'))}">${esc(LANG === 'en' ? String(r.period).replace(' 至 ', ' to ').replace(/(\d{4}) 年全年/, 'full year $1') : r.period)}</td><td data-h="${esc(t('th_geo'))}">${esc(saL(r, 'geo'))}</td><td data-h="${esc(t('th_note'))}">${esc(saL(r, 'note'))}</td><td data-h="${esc(t('th_src'))}"><a href="${esc(r.source_url)}" target="_blank" rel="noopener" title="${esc(LANG === 'en' ? '' : '')}">${t('src_link')}</a></td></tr>`).join('');
  return `<section class="sa" id="sa_${T.key}">
  <h2>${t('sa_h2')}</h2>
  <p class="legend sa-note">${tzh(SA.scope_note, SA.scope_note_en)}</p>
  <div class="tiles sa-tiles">${tile(t('sa_n_A'), s.n_A, A.length ? t('sa_since', {y: A.map(e => e.date.slice(0, 4)).sort()[0]}) : '')}${tile(t('sa_last30'), s.n_A_last30)}${tile(esc(tierName(1)), tiers['1'] ?? tiers[1] ?? 0)}${tile(t('sa_plants'), (s.by_kind || {})['军工厂'] ?? 0)}</div>
  <div class="multi sa-bars"><div class="legend" style="margin-bottom:4px">${t('sa_monthly')}</div>${saBars(s.monthly_A || [])}${saBars(s.monthly_A || [], true)}<p class="legend sa-caveat">${t('sa_trend_note')}</p></div>
  <p class="legend">${t('sa_tiers')}${legend}</p>
  <p class="legend">${t('sa_map_hint')}</p>
  <h3 class="sa-h3">${t('sa_events_h')}</h3>
  <div class="sa-scroll"><table class="sa-tbl"><tr>${head}</tr>${A.map(e => saRow(e)).join('')}</table></div>
  ${B.length ? `<h3 class="sa-h3">${t('sa_b_h')}</h3><div class="sa-scroll"><table class="sa-tbl sa-b"><tr>${head}</tr>${B.map(e => saRow(e)).join('')}</table></div>` : ''}
  <h3 class="sa-h3">${t('sa_agg_h')}</h3>
  <div class="sa-scroll"><table class="sa-tbl sa-agg"><tr><th>${t('th_metric')}</th><th class="num">${t('th_value')}</th><th>${t('th_unit')}</th><th>${t('th_period')}</th><th>${t('th_geo')}</th><th>${t('th_note')}</th><th>${t('th_src')}</th></tr>${ag}</table></div>
  </section>`;
}
/* 地图图层：每件一个点，按归因分档上色；位置只到国家或地区的画空心圈。默认视野不改，另给一个「看全部遭袭点」按钮。 */
function addSupplyAttackLayer(T, map) {
  const SA = T.supply_attacks; if (!SA || !SA.events || !SA.events.length) return null;
  const g = L.layerGroup(), pts = [];
  SA.events.forEach(e => {
    if (e.lat == null || e.lon == null) return;
    const coarse = e.loc_precision === 'country' || e.loc_precision === 'region';
    const c = SA_TIER_COLOR[e.tier] || '#888';
    pts.push([e.lat, e.lon]);
    L.circleMarker([e.lat, e.lon], coarse ? {radius: 9, color: c, weight: 3.5, fill: false} : {radius: 7, color: '#5b1a0e', weight: 1.2, fillColor: c, fillOpacity: 0.95})
      .bindTooltip(`${e.date.slice(0, e.date_precision === 'year' ? 4 : e.date_precision === 'month' ? 7 : 10)} · ${saL(e, 'place')} · ${saL(e, 'target')}`, {direction: 'top', className: 'lbl'})
      .bindPopup(`<b>${esc(saL(e, 'target'))}</b><br>${saDate(e)} · ${esc(saL(e, 'country'))} · ${esc(saL(e, 'place'))}<br>${esc(saL(e, 'act'))} · ${esc(saL(e, 'outcome'))}<br><span class="sa-tier t${e.tier}">${esc(saL(e, 'attribution'))}</span>${e.scope !== 'A' ? `<br><span class="u">${t('sa_b_h')}</span>` : ''}${coarse ? `<br><span class="u">${t('ua_loc_approx')}</span>` : ''}<br><a href="${esc(e.source_url)}" target="_blank" rel="noopener">${t('src_link')}</a>`)
      .addTo(g);
  });
  const Fit = L.Control.extend({options: {position: 'topright'}, onAdd() {
    const b = L.DomUtil.create('button', 'sa-fit'); b.type = 'button'; b.textContent = t('ua_fit_all'); b.title = t('ua_fit_all');
    L.DomEvent.disableClickPropagation(b); L.DomEvent.on(b, 'click', () => { if (!map.hasLayer(g)) g.addTo(map); map.fitBounds(L.latLngBounds(pts).pad(0.12)); }); return b; }});
  new Fit().addTo(map);
  map.__saBounds = pts;
  return g;
}
function renderStrikes(T) {
  if (!T.fire_sites) return `<h2>${t('strikes_h2')} <small>${t('strikes_sub_short')}</small></h2><p class="legend">${t('strikes_none')}</p>`;
  const zh = {site: 'col_site', kind: 'col_kind', country: 'col_country', site_file: 'col_list', baseline_p95: 'col_p95', 'n_anomalous_days_after_2026-03-01': 'col_anom', first_anomalous_day: 'col_first', max_anomalous_day_frp: 'col_maxanom', max_daily_frp: 'col_maxfrp', max_day: 'col_maxday'};
  const cols = T.fire_sites_cols.filter(c => c !== 'site_file');
  const head = cols.map(c => `<th>${esc(zh[c] ? t(zh[c]) : c)}</th>`).join('');
  const cell = (c, v) => c === 'site' ? esc(nz(v)) : c === 'kind' ? esc(kindT(v)) : c === 'country' ? esc(ccT(v)) : esc(v);
  const rows = T.fire_sites.map(r => `<tr class="${/strategic/.test(r.site_file || '') ? 'strat' : ''}">` + cols.map(c => `<td class="${typeof r[c] === 'number' ? 'num' : ''}">${r[c] == null ? '' : (typeof r[c] === 'number' ? fmt(Math.round(r[c] * 10) / 10) : cell(c, r[c]))}</td>`).join('') + '</tr>').join('');
  return `<h2>${t('strikes_h2')} <small>${T.fire_sites_n_total != null ? t('strikes_total', {n: T.fire_sites_n_total}) : ''}${t('strikes_sub')}</small></h2>
  <div style="overflow-x:auto"><table><tr>${head}</tr>${rows}</table></div>`;
}
function verdictBlock(r) {
  if (!r.verdict) return '';
  const auto = `<span class="vb ${VCLASS[r.verdict] || 'v-gray'}">${esc(tv(r.verdict))}</span>`;
  const man = r.manual_verdict ? `<span class="vb ${VCLASS[r.manual_verdict] || 'v-gray'}">${t('manual_reading')}${esc(tv(r.manual_verdict))}</span>` : '';
  return `<div class="verdict">${man || auto}${man ? ' <span class="u">' + t('algo') + esc(tv(r.verdict)) + '</span>' : ''}
    <details class="basis"><summary>${t('basis_toggle')}</summary><div class="u" style="margin-top:3px">${tzf(r, 'reason')}</div>
    ${r.manual_text ? `<div class="mread">${tzf(r, 'manual_text')} <span class="u">${t('manual_date', {d: esc(r.manual_date || '')})}</span></div>` : ''}</details>
  </div>`;
}
function s2Card(r, compact) {
  const cols = 2 + (r.png_blocks ? 1 : 0) + (r.png_diff && !compact ? 1 : 0);
  return `<div class="tile" id="s2card_${cssid(r.site)}" style="padding:8px${compact ? ';margin-bottom:8px' : ''}">
    <div class="l" style="min-height:auto"><b>${esc(nz(r.site))}</b> ${r.country ? '· ' + esc(ccT(r.country)) : ''}</div>
    ${verdictBlock(r)}
    ${r.ctx_where ? `<div class="ctx"><div><b>${t('ctx_where')}</b>${tzf(r, 'ctx_where')}</div><div><b>${t('ctx_what')}</b>${tzf(r, 'ctx_what')}</div><div><b>${t('ctx_if_hit')}</b>${tzf(r, 'ctx_if_hit')}</div></div>` : ''}
    <div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:4px;margin:6px 0">
      ${r.png_before ? `<div><img src="${r.png_before}" style="width:100%;border-radius:3px"><div class="u">${t('before_scene')} ${esc(r.before_date || r.date_before || '')}</div></div>` : ''}
      ${r.png_after ? `<div><img src="${r.png_after}" style="width:100%;border-radius:3px"><div class="u">${t('after_scene')} ${esc(r.after_date || r.date_after || '')}</div></div>` : ''}
      ${r.png_blocks ? `<div><img src="${r.png_blocks}" style="width:100%;border-radius:3px"><div class="u">${t('change_blocks')} <i class="sw" style="border-color:#ff2828"></i>${r.blocks ?? 0} · ${t('cloud_blocks')} <i class="sw" style="border-color:#4682ff"></i>${r.cloud_blocks ?? 0}</div></div>` : ''}
      ${r.png_diff && !compact ? `<div><img src="${r.png_diff}" style="width:100%;border-radius:3px"><div class="u">${t('pixel_diff')}</div></div>` : ''}
    </div>
    ${r.n_clean != null ? `<div class="u">${t('scenes_line', {n: r.n_scenes, c: r.n_clean, b: r.n_clean_before ?? '', z: r.z_mean ?? '—', f: r.fire_anom_days ?? 0})}${r.fire_max_day ? t('max_paren', {d: esc(r.fire_max_day)}) : ''}</div>` : ''}
    <div class="b">${t('stats_line', {a: fmt(r.dark_frac_before ?? r.dark_before), b: fmt(r.dark_frac_after ?? r.dark_after), c: fmt(r.mean_rgb_before ?? r.mean_before), d: fmt(r.mean_rgb_after ?? r.mean_after), e: fmt(r.mean_abs_diff ?? r.mad)})}</div>
  </div>`;
}
function renderS2(T) {
  if (!T.s2_change) return `<h2>${t('s2_h2_short')} <small>${t('s2_sub_short')}</small></h2><p class="legend">${t('s2_none')}</p>`;
  const counts = {};
  T.s2_change.forEach(r => { const k = r.manual_verdict || r.verdict || '未判'; counts[k] = (counts[k] || 0) + 1; });
  const summary = Object.entries(counts).sort((a, b) => (VRANK[a[0]] ?? 9) - (VRANK[b[0]] ?? 9)).map(([k, n]) => `<span class="vb ${VCLASS[k] || 'v-gray'}">${esc(tv(k))} ${n}</span>`).join(' ');
  const cards = T.s2_change.map(r => s2Card(r, false)).join('');
  return `<h2>${t('s2_h2')} <small>${t('s2_sub')}</small></h2>
  <p class="legend">${summary}</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:10px">${cards}</div>`;
}
function renderChains(T) {
  if (!T.chains || !T.chains.length) return `<h2>${t('chains_h2')} <small>Stack Atlas</small></h2><p class="legend">${t('chains_none')}</p>`;
  const order = {'即时型': 0, '滞后型': 1, '': 2};
  const rows = [...T.chains].sort((a, b) => order[a.window_type] - order[b.window_type] || a.num - b.num).map(c => `<tr>
    <td>${c.num}</td><td><b>${esc(tv(c.name))}</b><div class="u">${tzf(c, 'header', null, 90)}</div></td>
    <td>${esc(tv(c.window_type || '—'))}</td>
    <td>${tzf(c, '停摆窗口', null, 140)}</td>
    <td>${tzf(c, '下游', null, 120)}</td>
    <td>${tzf(c, '重建时间', null, 90)}</td>
    <td>${tzf(c, '价格弹性', null, 80)}</td>
    <td>${tzf(c, '对谁而言', null, 110)}</td></tr>`).join('');
  return `<h2>${t('chains_h2')} <small>${t('chains_sub', {n: T.chains.length, d: T.days_since_break ?? '—'})}</small></h2>
  <div style="overflow-x:auto"><table class="verbatim"><tr><th>#</th><th style="min-width:120px">${t('th_chain')}</th><th style="min-width:64px">${t('th_window_type')}</th><th>${t('th_window')}</th><th>${t('th_downstream')}</th><th>${t('th_rebuild')}</th><th>${t('th_elasticity')}</th><th>${t('th_forwhom')}</th></tr>${rows}</table></div>
  <p class="legend">${t('chains_note')}</p>`;
}

let modalMap = null, modalCharts = [], nodeMarkers = {}, currentNode = null, geoLines = {}, metroOvs = {};
function closeModal() {
  document.querySelectorAll('.kdetail').forEach(d => { d.classList.remove('on'); d.innerHTML = ''; });
  document.querySelectorAll('.node').forEach(c => c.classList.remove('hl', 'dim'));
  document.querySelectorAll('.metro .st').forEach(c => c.classList.remove('hl'));
  Object.values(nodeMarkers).forEach(list => list.forEach(m => m.getElement() && m.getElement().classList.remove('hl')));
  if (modalMap) { modalMap.remove(); modalMap = null; } modalCharts.forEach(c => c.destroy()); modalCharts = []; currentNode = null;
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function openNode(tkey, num) { selectNode(tkey, num); }
function selectNode(tkey, num) {
  const T = D.theaters.find(t => t.key === tkey); const n = T.nodes.find(x => x.num === num); if (!n) return;
  if (!document.getElementById('t_' + tkey).classList.contains('on')) { show(tkey); setTimeout(() => selectNode(tkey, num), 120); return; }
  closeModal(); currentNode = num;
  document.querySelectorAll(`#nodes_${tkey} .node`).forEach(c => c.classList.toggle('hl', c.id === `nd_${tkey}_${num}`) || c.classList.toggle('dim', c.id !== `nd_${tkey}_${num}`));
  (nodeMarkers[tkey] || []).forEach((m, i) => { const el = m.getElement(); if (el) el.classList.toggle('hl', i === num - 1); });
  document.querySelectorAll(`#metro_${tkey} .st`).forEach(c => { const st = (T.metro || {stations: {}}).stations[c.dataset.st]; c.classList.toggle('hl', !!(st && st.num === num)); });
  if (maps[tkey]) maps[tkey].panTo([n.lat, n.lon]);
  const ev = n.evidence.length ? `<table><tr><th>${t('th_kind')}</th><th>${t('th_object')}</th><th>${t('th_today_n')}</th><th>${t('th_note')}</th></tr>${n.evidence.map(e => `<tr><td>${esc(tv(e.kind))}</td><td>${esc(nz(e.item))}</td><td>${esc(tv(e.value))}</td><td>${esc(tv(e.detail))}</td></tr>`).join('')}</table>` : `<p class="legend">${t('no_count_evidence')}</p>`;
  const chains = n.chains.length ? `<table class="verbatim"><tr><th>#</th><th>${t('th_chain')}</th><th>${t('th_window_short')}</th><th>${t('th_window')}</th><th>${t('th_downstream')}</th></tr>${n.chains.map(c => `<tr><td>${c.num}</td><td><b>${esc(tv(c.name))}</b></td><td>${esc(tv(c.window_type || '—'))}</td><td>${tzf(c, '停摆窗口', null, 110)}</td><td>${tzf(c, '下游', null, 90)}</td></tr>`).join('')}</table>` : '';
  const imgs = n.images.length ? n.images.map(r => s2Card(r, true)).join('') : `<p class="legend">${t('no_images')}</p>`;
  const atlasChips = (n.atlas || []).length ? `<div style="margin:6px 0 2px"><span class="u">${t('atlas_nodes')}</span>${n.atlas.map(id => { const f = findNode(id); if (!f) return '';  /* 对照表指向的栈节点在 atlas-data.js 里不存在时不出片（点了也打不开） */ return `<span class="chip" onclick="openDrawer('${id}')" style="display:inline-block;background:rgba(0,0,0,.06);border-radius:999px;padding:2px 9px;font-size:12px;margin:2px 3px 2px 0;cursor:pointer">${esc(f ? nodeLabel(f.n) : id)}</span>`; }).join('')}</div>` : '';
  const charts = n.series.map((s, i) => `<div class="chart small"><canvas id="mc_${i}"></canvas></div>`).join('');
  const kd = document.getElementById('kd_' + tkey);
  kd.innerHTML = `
    <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap"><span class="n" style="display:inline-block;background:var(--hl);color:#0e1116;border-radius:50%;width:24px;height:24px;text-align:center;line-height:24px;font-size:13px;font-weight:700">${n.num}</span><h2 style="margin:0">${esc(tv(n.name))}</h2><span class="chip st-${n.status}">${esc(tv(n.status_zh))}</span><span class="u">${esc(t('st_manual', {d: n.status_date || ''}))}</span><span class="kind">${esc(tv(n.kind))}</span>
      <span style="margin-left:auto" class="legend"><span class="ev ev-measured">${t('ev_measured')}</span>${t('ev_measured_note')} <span class="ev ev-news">${t('ev_news')}</span>${t('ev_news_note')} <span class="ev ev-atlas">${t('ev_atlas')}</span>${t('ev_atlas_note')} · <a href="#" onclick="closeModal();return false">${t('collapse')}</a></span></div>
    <div class="m3" style="margin-top:10px">
      <div class="brief"><h4>${t('why_h')}</h4>${n.why.map((p, i) => `<p>${tzf(n, 'why', i)}</p>`).join('')}
        <h4>${t('today_ev_h')} <span class="ev ev-measured">${t('ev_measured')}</span></h4>${ev}
        <h4>${t('watch_h')}</h4>${n.watch.map((p, i) => `<p>${tzf(n, 'watch', i)}</p>`).join('')}
        <h4>${t('limits_h')}</h4>${n.limits.map((p, i) => `<p class="legend">${tzf(n, 'limits', i)}</p>`).join('')}</div>
      <div><h4 style="font-size:13px;margin:0 0 6px;color:var(--ink2)">${t('sat_h')} <span class="ev ev-measured">${t('ev_measured')}</span> <small>${t('sat_sub')}</small></h4>${imgs}</div>
      <div><h4 style="font-size:13px;margin:0 0 6px;color:var(--ink2)">${t('flow_h')} <small>${t('flow_sub')}</small></h4><div class="mmap" id="mmap"></div>
        <div class="mlegend"><i style="border-color:var(--s3)"></i>${t('flow_up')} <i style="border-color:var(--s1)"></i>${t('flow_down')} <i style="border-color:var(--s2);border-top-style:dashed"></i>${t('flow_bypass')}</div>
        <h4 style="font-size:13px;margin:12px 0 6px;color:var(--ink2)">${t('chains_on_node_h')} <span class="ev ev-atlas">${t('ev_atlas')}</span></h4>${atlasChips}${chains}</div>
    </div>
    ${charts ? `<h4 style="font-size:13px;margin:14px 0 6px;color:var(--ink2)">${t('series_h')} <span class="ev ev-measured">${t('ev_measured')}</span> <small>${t('series_sub')}</small></h4><div class="multi">${charts}</div>` : ''}`;
  kd.classList.add('on');
  // 流向图
  modalMap = mkMap('mmap', {preferCanvas: true});
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {maxZoom: 16, attribution: t('attr_tiles')}).addTo(modalMap);
  const all = [[n.lat, n.lon]];
  L.marker([n.lat, n.lon], {icon: nodePinIcon(n, 30)}).bindTooltip(tv(n.name)).addTo(modalMap);
  n.upstream.forEach(u => { all.push([u.lat, u.lon]); L.polyline([[u.lat, u.lon], [n.lat, n.lon]], {color: col('--s3'), weight: 2.5, opacity: .9}).addTo(modalMap); L.circleMarker([u.lat, u.lon], {radius: 5, color: col('--s3'), fillColor: col('--s3'), fillOpacity: .9}).bindTooltip(`${tv(u.name)}${u.chain ? ' · ' + tv(u.chain) : ''}`, {permanent: true, direction: 'right', className: 'lbl'}).addTo(modalMap); });
  n.downstream.forEach(d => { all.push([d.lat, d.lon]); L.polyline([[n.lat, n.lon], [d.lat, d.lon]], {color: col('--s1'), weight: 2, opacity: .8}).addTo(modalMap); L.circleMarker([d.lat, d.lon], {radius: 5, color: col('--s1'), fillColor: col('--s1'), fillOpacity: .9}).bindTooltip(`${tv(d.name)}${d.chain ? ' · ' + tv(d.chain) : ''}`, {permanent: true, direction: 'right', className: 'lbl'}).addTo(modalMap); });
  n.bypass.forEach(b => { b.points.forEach(p => all.push(p)); L.polyline(b.points, {color: col('--s2'), weight: 2.5, dashArray: '6 5'}).bindTooltip(tv(b.name)).addTo(modalMap); });
  modalMap.fitBounds(all, {padding: [20, 20]});
  setTimeout(() => modalMap.invalidateSize(), 100);
  const labels = T.dates.map(d => d.slice(2)); const bi = T.break.date ? T.dates.indexOf(T.break.date) : null;
  n.series.forEach((s, i) => {
    modalCharts.push(new Chart(document.getElementById(`mc_${i}`), {type: 'bar', data: {labels, datasets: [{data: s.values, backgroundColor: col('--s1'), borderWidth: 0, barPercentage: 1, categoryPercentage: 1}]},
      options: {responsive: true, maintainAspectRatio: false, animation: false, plugins: {legend: {display: false}, title: {display: true, text: tv(s.label), align: 'start', font: {size: 12}, color: col('--ink2')}, brk: {index: bi, label: i === 0 && T.break.date ? t('break_label', {d: T.break.date}) : ''}, tooltip: {mode: 'index', intersect: false}},
        scales: {x: {grid: {display: false}, ticks: {maxTicksLimit: 10, maxRotation: 0}}, y: {grid: {color: col('--line')}, beginAtZero: true, ticks: {maxTicksLimit: 4}}}}}));
  });
  kd.scrollIntoView({behavior: 'smooth', block: 'start'});
}
function buildMap(T) {
  const map = mkMap('m_' + T.key, {preferCanvas: true});
  maps[T.key] = map;
  const bases = {[t('base_gray')]: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {maxZoom: 16, attribution: t('attr_tiles')}),
    [t('base_sat')]: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {maxZoom: 18, attribution: t('attr_tiles')}),
    [t('base_street')]: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {maxZoom: 18, attribution: t('attr_tiles')})};
  bases[t('base_gray')].addTo(map);
  map.fitBounds(T.map_bounds || T.bbox);
  const fires = L.layerGroup(), gd = L.layerGroup(), uc = L.layerGroup(), pts = L.layerGroup();
  (T.firms || []).forEach(f => L.circleMarker([f[0], f[1]], {radius: 2, weight: 0, fillColor: col('--s8'), fillOpacity: 0.5}).bindPopup(t('fire_pop', {v: f[2]})).addTo(fires));
  (T.gdelt_points || []).forEach(g => L.circleMarker([g[0], g[1]], {radius: Math.max(3, Math.min(12, Math.sqrt(g[2]) * 1.3)), color: col('--s7'), weight: 1, fillColor: col('--s7'), fillOpacity: 0.35}).bindPopup(() => { const pl = rawT(g[3]); return `<b title="${esc(pl.title)}">${esc(pl.text || t('gdelt_event'))}</b> · ${t('mentions')} ${g[2]}<br><a href="${esc(g[4])}" target="_blank">${t('source_link')}</a>`; }, {className: 'rawsrc'}).addTo(gd));
  (T.ucdp_points || []).forEach(u => L.circleMarker([u[0], u[1]], {radius: Math.max(3, Math.min(12, Math.sqrt(u[2] + 1) * 1.5)), color: '#555', weight: 1, fillColor: '#888', fillOpacity: 0.4}).bindPopup(() => { const cn = rawT(u[4]); return `<b title="${esc(cn.title)}">${esc(cn.text || t('ucdp_event'))}</b><br>${esc(u[3])} · ${t('best_deaths')} ${u[2]}`; }, {className: 'rawsrc'}).addTo(uc));
  T.map_points.forEach(p => {
    const c = p.kind === 'chokepoint' ? col('--s1') : col('--s3');
    L.circleMarker([p.lat, p.lon], {radius: Math.max(6, Math.sqrt(p.value || 1) * 2), color: (p.ratio != null && p.ratio < 0.85) ? col('--s8') : c, weight: (p.ratio != null && p.ratio < 0.85) ? 3 : 1.5, fillColor: c, fillOpacity: 0.35})
      .bindPopup(`<b>${esc(nz(p.name))}</b><br>${t('pt_pop', {v: p.value, b: p.base, r: p.ratio ?? ''})}`).addTo(pts);
  });
  const strat = L.layerGroup(), infraHit = L.layerGroup(), infraRest = L.layerGroup();
  let nStrat = 0, nHit = 0, nRest = 0;
  (T.site_points || []).forEach(p => {
    const hit = (p.n || 0) > 0, isStrat = /strategic/.test(p.list || '');
    const m = L.circleMarker([p.lat, p.lon], {radius: isStrat ? 5 : (hit ? 4 : 3), color: isStrat ? '#8e8e93' : (hit ? col('--s8') : '#9a9a9a'), weight: isStrat ? 1.8 : (hit ? 2 : 1),
      fillColor: '#fff', fillOpacity: isStrat ? 1 : 0.85})
      .bindPopup(`<b>${esc(nz(p.name))}</b> · ${esc(kindT(p.kind))} · ${esc(ccT(p.country))}<br>${hit ? t('site_hit', {n: p.n, f: esc(p.first)}) : t('site_nohit')}<br><span style="color:#52514e" title="${esc(p.list)}">${esc(listT(p.list))}</span>`);
    if (isStrat) { m.addTo(strat); nStrat++; } else if (hit) { m.addTo(infraHit); nHit++; } else { m.addTo(infraRest); nRest++; }
  });
  const nodesLayer = L.layerGroup(); nodeMarkers[T.key] = [];
  (T.nodes || []).forEach(n => {
    const mk = L.marker([n.lat, n.lon], {icon: nodePinIcon(n), zIndexOffset: 1000})
      .bindTooltip(`${n.num} ${tv(n.name)}`, {direction: 'top'})
      .bindPopup(() => nodePopup(T, n), {maxWidth: 340, minWidth: 300, keepInView: true, autoPanPaddingTopLeft: [20, 40], autoPanPaddingBottomRight: [20, 20]})
      .on('popupopen', () => { (nodeMarkers[T.key] || []).forEach((m2, i) => { const el = m2.getElement(); if (el) el.classList.toggle('hl', i === n.num - 1); }); })
      .addTo(nodesLayer);
    nodeMarkers[T.key].push(mk);
  });
  // 卫星影像显著变化：影像判读里受损、局部或整幅变化、热异常的站点（无变化与不可判读的不画），默认显示
  const s2L = L.layerGroup(); const sp = Object.fromEntries((T.site_points || []).map(p => [p.name, p])); const focusPts = [];
  (T.s2_change || []).forEach(r => { const v = r.manual_verdict || r.verdict, rank = VRANK[v] ?? 9, p = sp[r.site];
    if (rank > 3 || !p) return;
    const c = {'v-red': '#d70015', 'v-amber': '#ff9500', 'v-blue': '#0071e3'}[VCLASS[v]] || '#8e8e93';
    const sev = rank === 0, isz = sev ? 26 : 22;
    const mk = L.marker([p.lat, p.lon], {icon: L.divIcon({className: 'anom-ic s2-ic', html: s2Svg(c, isz, sev), iconSize: [isz, isz], iconAnchor: [isz / 2, isz / 2]}), zIndexOffset: sev ? 600 : 400, keyboard: false})
      .bindTooltip(`${esc(nz(p.name))} · ${esc(tv(v))}`, {direction: 'top', className: 'lbl'})
      .bindPopup(() => s2Popup(r), {maxWidth: 330, minWidth: 300, keepInView: true, autoPanPaddingTopLeft: [20, 40], autoPanPaddingBottomRight: [20, 20]}).addTo(s2L);
    focusPts.push({rank, color: c, label: nz(p.name), verdict: tv(v), latlng: [p.lat, p.lon], marker: mk}); });
  // 地图下面一排「需要关注的站」：点一个，地图飞过去并打开它的卫星图（前后两景）。地图打开时对准的是整个战区，
  // 站点挤在一起点不到，这一排是给主人直接到图的入口（2026-09-23 主人：「如果有需要关注的点，我在地图上点击可以看到卫星图」）。
  // 图例放进地图左下角的浮动面板（2026-09-23 主人「图例的 ui 稍微设计一下」「没有任何变化」后改）：可折叠，滚动，宽 270 像素，不占图下版面
  addLegendControl(map, mapLegend(T));
  const lg = document.getElementById('legend_' + T.key); if (lg) lg.remove();
  const strip = document.getElementById('focus_' + T.key);
  if (strip) {
    focusPts.sort((a, b) => a.rank - b.rank || a.label.localeCompare(b.label));
    strip.innerHTML = focusPts.length ? `<span class="u">${t('focus_label')}</span>` + focusPts.map((f, i) =>
      `<button class="focus-btn" data-i="${i}" style="border-color:${f.color}"><i style="background:${f.color}"></i>${esc(f.label)} <span class="u">${esc(f.verdict)}</span></button>`).join('') : '';
    strip.querySelectorAll('.focus-btn').forEach(b => b.addEventListener('click', () => {
      const f = focusPts[+b.dataset.i]; map.flyTo(f.latlng, Math.max(map.getZoom(), 8), {duration: 0.8});
      map.once('moveend', () => f.marker.openPopup()); }));
  }
  const anomL = addAnomalyLayer(T);
  // 供应链依赖关系：地铁图层，叠在最上面，默认不显示，点地图左上角的按钮才出现
  let metroOv = null;
  if (T.metro) {
    const S0 = T.metro.stations, st = {};
    Object.entries(S0).forEach(([k, v]) => { st[k] = {name: tv(v.name), lat: v.lat, lon: v.lon, status: v.status, num: v.num, kind: v.kind}; });
    const lines = T.metro.lines.map(l => ({id: l.id, name: tv(l.name), color: l.color, route: l.route, bypass: l.bypass}));
    metroOv = new MetroOverlay({stations: st, lines, toWord: t('metro_to'), fitOnShow: true,
      lineTip: (l, kind) => `<b style="color:${l.color}">■</b> ${esc(l.name)}${kind === 'bypass' ? esc(t('bypass')) : ''}`,
      stationTip: (k, s_, ls) => `<b>${s_.num ? s_.num + ' · ' : ''}${esc(s_.name)}</b><br>${esc(tv(s_.kind))}${s_.status ? ' · ' + esc(STZ(s_.status)) : ''}<br>${t('metro_passes')}${ls.map(id => esc(lines.find(x => x.id === id).name)).join(LANG === 'en' ? ', ' : '、')}`,
      onStation: (k, s_) => selectNode(T.key, s_.num),
      onFocus: id => { const leg = document.getElementById('mlegend_' + T.key); if (leg) leg.querySelectorAll('.l').forEach(o => o.classList.toggle('on', o.dataset.line === id)); }});
    metroOvs[T.key] = metroOv;
    metroButton(map, metroOv, t('metro_btn'), on => { const leg = document.getElementById('mlegend_' + T.key); if (leg) leg.classList.toggle('off', !on); });
  }
  s2L.addTo(map); if (anomL) anomL.addTo(map);
  if (T.metro) { strat.addTo(map); nodesLayer.addTo(map); } else { pts.addTo(map); gd.addTo(map); uc.addTo(map); strat.addTo(map); infraHit.addTo(map); nodesLayer.addTo(map); }
  const overlays = {...(metroOv ? {[t('layer_metro')]: metroOv} : {}), [t('layer_s2')]: s2L, ...(anomL ? {[t('layer_anom')]: anomL} : {}), [t('layer_nodes')]: nodesLayer, [t('layer_pts')]: pts, [t('layer_strat', {n: nStrat})]: strat, [t('layer_hit', {n: nHit})]: infraHit, [t('layer_rest', {n: nRest})]: infraRest, [t('layer_gdelt')]: gd, [t('layer_ucdp')]: uc, [t('layer_fires')]: fires};
  const saLayer = addSupplyAttackLayer(T, map);
  if (saLayer) { saLayer.addTo(map); overlays[t('layer_ua_attacks')] = saLayer; }
  addVesselAirLayers(T, map, overlays);
  addAisLayer(T, map, overlays);
  L.control.layers(bases, overlays, {collapsed: true}).addTo(map); layersTitle(map);
  map.__overlays = overlays;  // 验收脚本按它遍历默认不显示的图层里的提示与弹窗
}
function buildCharts(T) {
  const labels = T.dates.map(d => d.slice(2));
  const bi = T.break.date ? T.dates.indexOf(T.break.date) : null;
  T.series.forEach(s => {
    const ctx = document.getElementById(`c_${T.key}_${cssid(s.id)}`);
    const ds = s.kind === 'line'
      ? {data: s.values, borderColor: col('--s1'), backgroundColor: col('--s1'), borderWidth: 1.8, pointRadius: 0, pointHitRadius: 6, spanGaps: true, tension: 0}
      : {data: s.values, backgroundColor: col('--s1'), borderWidth: 0, barPercentage: 1, categoryPercentage: 1};
    pageCharts.push(new Chart(ctx, {type: s.kind, data: {labels, datasets: [ds]}, options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      plugins: {legend: {display: false}, title: {display: true, text: chartTitle(s), align: 'start', font: {size: 12, weight: '500'}, color: col('--ink2'), padding: {bottom: 2}},
        tooltip: {mode: 'index', intersect: false}, brk: {index: bi, label: s === T.series[0] && T.break.date ? t('break_label', {d: T.break.date}) : ''}},
      interaction: {mode: 'index', intersect: false},
      scales: {x: {grid: {display: false}, ticks: {maxTicksLimit: 10, maxRotation: 0, autoSkip: true}}, y: {grid: {color: col('--line')}, beginAtZero: s.kind === 'bar', ticks: {maxTicksLimit: 4}}}
    }}));
  });
}
/* 海域船数与上空飞机两节（2026-09-21）。数据是 latest.json 每个战区的 vessels 与 aircraft（monitor/vessel_air.py）：
 * 船数来自全球渔业观察，每片海域逐日货船数与全部船数，基线 2026-01-01 至 02-27 日均，近况取最后 7 个有记录的日子的日均；
 * 飞机来自 adsb.fi，日更时一次快照。只做算术，不判断原因。船名、船旗码、呼号、注册号、机型代码是识别码，标 class ident，
 * 中文页照原样显示（语言扫描单列这一类）。点船数表一行：在战区地图上高亮这片海域的框（2026-09-21 委托改：不列具体船只，week_vessels 不上页）。 */
const VA_RATIO_CLS = r => r == null ? '' : r < 0.5 ? 'v-red' : r < 0.85 ? 'v-amber' : r > 1.15 ? 'v-blue' : '';
const VA_RATIO_COLOR = r => r == null ? '#86868b' : r < 0.5 ? '#d93025' : r < 0.85 ? '#e8a000' : r > 1.15 ? '#1a6fe0' : '#5a8f6a';
const vaPolys = {};  // {theater: {areaId: L.polygon}}
const vaLayers = {};  // {theater: {vessels, aircraft}}
const vaRatio = (a, b) => (b ? Math.round(a / b * 100) / 100 : null);
const vaNum = v => v == null ? '—' : String(v);
const vaMean = v => v == null ? '—' : Number(v).toFixed(1);  // 日均一律一位小数，与警报文字一致
const vaUtc = s => String(s || '').replace('T', ' ').replace(/:\d\dZ$/, '').replace(/Z$/, '');
const vaIdent = (s, title) => `<span class="ident"${title ? ` title="${esc(title)}"` : ''}>${esc(s)}</span>`;
/* 逐日货船数的小折线：横轴按日期（缺日断线），竖线 2026-02-28。 */
function vaSpark(daily, from, mark) {
  const W = 150, H = 32, day = s => Date.parse(s + 'T00:00:00Z') / 864e5;
  const pts = daily.filter(x => x.date >= from);
  if (pts.length < 2) return '';
  const x0 = day(from), x1 = day(pts[pts.length - 1].date), mx = Math.max(1, ...pts.map(x => x.cargo));
  const X = d => 1 + (day(d) - x0) / Math.max(1, x1 - x0) * (W - 2), Y = v => H - 2 - v / mx * (H - 4);
  let path = '', prev = null;
  pts.forEach(p => { const d = day(p.date); path += (prev == null || d - prev > 3 ? 'M' : 'L') + X(p.date).toFixed(1) + ',' + Y(p.cargo).toFixed(1); prev = d; });
  const mx_ = X(mark).toFixed(1);
  return `<svg class="va-spark" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><title>${esc(t('va_spark_title', {a: from, b: pts[pts.length - 1].date, m: mark, mx: mx}))}</title>` +
    `<line x1="${mx_}" x2="${mx_}" y1="0" y2="${H}" stroke="#ff3b30" stroke-dasharray="3 2" stroke-width="1"/><path d="${path}" fill="none" stroke="#0071e3" stroke-width="1.3"/></svg>`;
}
function vaHistSpark(h) {
  if (!h || h.length < 2) return '';
  const W = 120, H = 28, mx = Math.max(1, ...h.map(x => x.total));
  const pts = h.map((x, i) => `${(1 + i / (h.length - 1) * (W - 2)).toFixed(1)},${(H - 2 - x.total / mx * (H - 4)).toFixed(1)}`).join(' ');
  return `<svg class="va-spark" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><title>${esc(t('ac_hist_title', {n: h.length}))}</title><polyline points="${pts}" fill="none" stroke="#0071e3" stroke-width="1.3"/></svg>`;
}
function renderVessels(T) {
  const V = T.vessels; if (!V || !V.areas || !V.areas.length) return '';
  const pre = T.key === 'middle_east' ? t('va_pre') : t('va_base');
  const rows = V.areas.map(a => {
    const rAll = vaRatio(a.recent_all, a.baseline_all);
    const note = LANG === 'en' ? (VA_NOTE_EN[a.id] || '') : (a.note || '');
    const off = a.recent_to && a.recent_to !== V.data_through ? `<div class="u">${t('va_recent_span', {a: esc(a.recent_from), b: esc(a.recent_to)})}</div>` : '';
    return `<tr class="va-row" data-area="${esc(a.id)}" tabindex="0" onclick="vaPick('${T.key}','${esc(a.id)}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();vaPick('${T.key}','${esc(a.id)}')}">
      <td data-f="name"><b>${esc(LANG === 'en' ? a.en : a.zh)}</b></td><td class="va-note">${esc(note)}</td>
      <td class="num" data-f="baseline_cargo">${vaMean(a.baseline_cargo)}</td><td class="num" data-f="recent_cargo">${vaMean(a.recent_cargo)}${off}</td><td class="num" data-f="ratio_cargo"><span class="vb ${VA_RATIO_CLS(a.ratio_cargo)}">${vaNum(a.ratio_cargo)}</span></td>
      <td class="num" data-f="baseline_all">${vaMean(a.baseline_all)}</td><td class="num" data-f="recent_all">${vaMean(a.recent_all)}</td><td class="num" data-f="ratio_all"><span class="vb ${VA_RATIO_CLS(rAll)}">${vaNum(rAll)}</span></td>
      <td>${vaSpark(a.daily || [], '2026-01-01', '2026-02-28')}</td></tr>`;
  }).join('');
  return `<section class="va" id="va_${T.key}">
  <h2>${t('va_h2')}</h2>
  <p class="legend va-lead">${t('va_note', {d: esc(V.data_through), b0: esc(V.baseline[0]), b1: esc(V.baseline[1])})}</p>
  <div class="va-scroll"><table class="va-tbl" id="vat_${T.key}">
    <tr><th rowspan="2">${t('va_th_area')}</th><th rowspan="2" class="va-note">${t('th_note')}</th><th colspan="3" class="va-grp">${t('va_th_cargo')}</th><th colspan="3" class="va-grp">${t('va_th_all')}</th><th rowspan="2">${t('va_th_spark')}</th></tr>
    <tr><th class="num">${pre}</th><th class="num">${t('va_recent')}</th><th class="num">${t('th_ratio')}</th><th class="num">${pre}</th><th class="num">${t('va_recent')}</th><th class="num">${t('th_ratio')}</th></tr>
    ${rows}</table></div>
  <p class="legend">${t('va_legend')} <span class="vb v-red">&lt; 0.5</span> <span class="vb v-amber">0.5–0.85</span> <span class="vb v-blue">&gt; 1.15</span> · ${t('va_click')}</p>
  <p class="legend va-src">${t('va_src')}</p>
  ${aisNote(T)}
  </section>`;
}
/* 岸站船位快照（aisstream.io）：船型按 AIS 类型码分组，航行状态按 AIS 编码转文字。 */
const AIS_CAT = code => { const c = Number(code); if (!c) return 'unk'; if (c === 30) return 'fish'; if (c >= 60 && c <= 69) return 'pass'; if (c >= 70 && c <= 79) return 'cargo'; if (c >= 80 && c <= 89) return 'tank'; return 'other'; };
const AIS_CAT_T = {unk: ['未报', 'not reported'], fish: ['渔船', 'fishing'], pass: ['客船', 'passenger'], cargo: ['货船', 'cargo'], tank: ['油轮', 'tanker'], other: ['其他', 'other']};
const AIS_COLOR = {unk: '#6e6e73', fish: '#16a085', pass: '#8e44ad', cargo: '#1f6feb', tank: '#d9480f', other: '#8a6d3b'};
const AIS_NAV = {0: ['用发动机航行', 'under way using engine'], 1: ['锚泊', 'at anchor'], 2: ['失控', 'not under command'], 3: ['操纵能力受限', 'restricted manoeuvrability'],
  4: ['吃水受限', 'constrained by draught'], 5: ['系泊', 'moored'], 6: ['搁浅', 'aground'], 7: ['捕捞作业', 'engaged in fishing'], 8: ['帆船航行', 'under way sailing'], 15: ['未报', 'not reported']};
const aisL = pair => pair ? (LANG === 'en' ? pair[1] : pair[0]) : '';
const aisMoving = s => Number(s.sog) >= 1;
function aisNote(T) {
  const A = T.ais; if (!A) return '';
  const n = (A.ships || []).length, m = (A.ships || []).filter(aisMoving).length;
  if (!n) return `<p class="legend">${t('ais_none')}</p>`;
  const leg = ['tank', 'cargo', 'pass', 'fish', 'other', 'unk'].map(k => `<span class="ais-key"><i style="background:${AIS_COLOR[k]}"></i>${esc(aisL(AIS_CAT_T[k]))}</span>`).join(' ');
  return `<p class="legend">${t('ais_note', {t: esc(vaUtc(A.taken_utc)), n, m})}</p><p class="legend">${t('ais_legend')}${leg}</p><p class="legend va-src">${t('ais_src')}</p>`;
}
function aisIcon(s) {
  const col = AIS_COLOR[AIS_CAT(s.type)];
  if (!aisMoving(s)) return L.divIcon({className: 'ais-pt', html: '<i class="ais-dot"></i>', iconSize: [8, 8], iconAnchor: [4, 4]});
  const rot = Number(s.cog) || 0;
  return L.divIcon({className: 'ais-pt', iconSize: [16, 16], iconAnchor: [8, 8],
    html: `<svg width="16" height="16" viewBox="0 0 16 16" style="transform:rotate(${rot}deg)"><path d="M8 1 L13 14 L8 11 L3 14 Z" fill="${col}" stroke="#fff" stroke-width="1"/></svg>`});
}
/* 异常航迹（2026-09-22）：数据是 latest.json 的 theaters[].track_anomalies（monitor/fetchers/track_anomalies.py，GFW 逐船航迹，滞后约 4 天）。
 * 六类各用一种记号；只标算出来的位置与数，不判断原因。 */
const ANOM_STYLE = {off_lane: {c: '#d9480f', k: 'off_lane'}, odd_stops: {c: '#1f6feb', k: 'odd_stops'}, dark_gaps: {c: '#5856d6', k: 'dark_gaps'},
  surges: {c: '#c92a2a', k: 'surges'}, on_land: {c: '#1d1d1f', k: 'on_land'}, far_from_lanes: {c: '#8a5a00', k: 'far_from_lanes'}};
/* 记号图标（2026-09-23 主人「不是图例本身，是那些图标」后重画）：所有点状记号统一为白底圆徽章、彩色细环、环内一个表意的小图形，
   20 像素画布，地图与图例共用。异常航迹六类各一个图形：偏离常走的路＝拐弯的箭头，异常停留＝锚，信号中断＝被划掉的信号波，
   船数陡增＝三根上升的柱，停在陆上＝船体压在地平线上，远离一切已知航迹＝虚线圈里一个点。卫星影像判读＝相框加镜头，按结论上色。 */
const GLYPH = {
  off_lane: `<path d="M5 15 C5.5 9 10 6 14 6.5" fill="none" stroke="C" stroke-width="2" stroke-linecap="round"/><path d="M11.5 4 L15.5 6.5 L12 9.5" fill="none" stroke="C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
  odd_stops: `<circle cx="10" cy="5" r="1.8" fill="none" stroke="C" stroke-width="1.8"/><path d="M10 7 V16 M6.5 9.5 H13.5 M4.5 12.5 Q10 17.5 15.5 12.5" fill="none" stroke="C" stroke-width="1.8" stroke-linecap="round"/>`,
  dark_gaps: `<path d="M6.2 12.5 a3.8 3.8 0 0 1 7.6 0 M3.4 12.5 a6.6 6.6 0 0 1 13.2 0" fill="none" stroke="C" stroke-width="1.7" stroke-linecap="round"/><circle cx="10" cy="14.5" r="1.6" fill="C"/><path d="M4.5 16.5 L15.5 4.5" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M4.5 16.5 L15.5 4.5" stroke="C" stroke-width="1.8" stroke-linecap="round"/>`,
  surges: `<rect x="4" y="11.5" width="3" height="5" rx=".6" fill="C"/><rect x="8.5" y="8" width="3" height="8.5" rx=".6" fill="C"/><rect x="13" y="4" width="3" height="12.5" rx=".6" fill="C"/>`,
  on_land: `<path d="M3.5 15.5 H16.5" stroke="C" stroke-width="1.8" stroke-linecap="round"/><path d="M5 8.5 H15 L13 13 H7 Z" fill="C"/><path d="M10 5 V8.5" stroke="C" stroke-width="1.8" stroke-linecap="round"/>`,
  far_from_lanes: `<circle cx="10" cy="10" r="6" fill="none" stroke="C" stroke-width="1.6" stroke-dasharray="2.4 2"/><circle cx="10" cy="10" r="2" fill="C"/>`,
  imagery: `<rect x="4" y="5.5" width="12" height="9.5" rx="1.8" fill="none" stroke="C" stroke-width="1.8"/><circle cx="10" cy="10.2" r="2.4" fill="none" stroke="C" stroke-width="1.6"/><rect x="12.5" y="3.5" width="3" height="2.2" rx=".6" fill="C"/>`,
  chokepoint: `<path d="M6.5 3 C4.5 7.5 8 12 6.5 17 M13.5 3 C15.5 7.5 12 12 13.5 17" fill="none" stroke="C" stroke-width="1.9" stroke-linecap="round"/><path d="M8.5 10 H11.5" stroke="C" stroke-width="1.6" stroke-linecap="round" stroke-dasharray="1.2 1.4"/>`,
  event: `<path d="M10 4.5 V11.5" stroke="C" stroke-width="2.4" stroke-linecap="round"/><circle cx="10" cy="15" r="1.5" fill="C"/>`,
  node: ``,
};
/* 咽喉点记号：徽章加「两岸夹一道水」的图形，按通过量状态上色；大的是 Stack Atlas 里有节点的咽喉点 */
const ckSvg = (color, sz = 20, major = false) => badge(color, GLYPH.chokepoint, sz, major ? 2.6 : 2);
/* 地图左下角的浮动图例面板：三个战区页与总览共用（2026-09-23）。bodyHtml 是图例正文，折叠状态记在浏览器里。 */
function addLegendControl(map, bodyHtml) {
  const Ctl = L.Control.extend({onAdd() {
    const d = L.DomUtil.create('div', 'leaflet-bar map-legend-ctl');
    d.innerHTML = `<div class="lgc-head"><span class="lgc-title">${t('lg_title')}</span><button class="lgc-toggle" type="button" aria-label="toggle">▾</button></div><div class="lgc-body">${bodyHtml}</div>`;
    L.DomEvent.disableClickPropagation(d); L.DomEvent.disableScrollPropagation(d);
    d.querySelector('.lgc-toggle').addEventListener('click', () => { const on = d.classList.toggle('collapsed'); d.querySelector('.lgc-toggle').textContent = on ? '▸' : '▾'; try { localStorage.setItem('sa_legend_collapsed', on ? '1' : '0'); } catch (e) {} });
    try { if (localStorage.getItem('sa_legend_collapsed') === '1') { d.classList.add('collapsed'); d.querySelector('.lgc-toggle').textContent = '▸'; } } catch (e) {}
    return d; }});
  new Ctl({position: 'bottomleft'}).addTo(map);
}
/* 图例一行：图标 | 名称（可带计数小圆标）| 浅色判据 */
const lgRow = (icon, label, note, count) => `<div class="lg-row"><span class="lg-ic">${icon}</span><span class="lg-t"><span class="lg-l">${label}${count != null ? `<span class="lg-n">${count}</span>` : ''}</span>${note ? `<span class="lg-note">${note}</span>` : ''}</span></div>`;
/* 徽章：白底圆、彩色环、环内图形。sz 是输出像素，画布固定 20。 */
const badge = (color, glyph, sz = 20, ring = 2) => `<svg width="${sz}" height="${sz}" viewBox="0 0 20 20"><circle cx="10" cy="10" r="${9 - ring / 2}" fill="#fff" stroke="${color}" stroke-width="${ring}"/>${glyph.split('C"').join(color + '"')}</svg>`;
const anomSvg = (st, sz = 20) => badge(st.c, GLYPH[st.k] || '', sz);
/* 卫星影像判读的记号：徽章加相框，按结论上色；受损迹象的环加粗、外圈再套一层淡色光晕，好在一堆点里先看到它 */
const s2Svg = (color, sz = 22, severe = false) => `<svg width="${sz}" height="${sz}" viewBox="0 0 20 20">${severe ? `<circle cx="10" cy="10" r="9.5" fill="${color}" fill-opacity=".18"/>` : ''}<circle cx="10" cy="10" r="${severe ? 7.4 : 8}" fill="#fff" stroke="${color}" stroke-width="${severe ? 2.6 : 2}"/><g transform="translate(10 10) scale(.78) translate(-10 -10)">${GLYPH.imagery.split('C"').join(color + '"')}</g></svg>`;
function anomLegend(T) {
  const A = T.track_anomalies; if (!A || !A.areas.length) return '';
  const tot = {}; A.areas.forEach(a => Object.entries(a.counts || {}).forEach(([k, n]) => { tot[k] = (tot[k] || 0) + n; }));
  const days = [...new Set(A.areas.map(a => a.day))].join(', ');
  return `<span class="u">${t('anom_note', {d: esc(days)})}</span>` + anomReading(A);
}
/* 航迹判读（2026-09-23）：latest.json 的 track_anomalies.reading，我按海域写的判断与依据，跟在图例下面。 */
function anomReading(A) {
  const R = A.reading; if (!R) return '';
  const areaName = k => t('area_' + k) === 'area_' + k ? k : t('area_' + k);
  const blocks = Object.entries(R.areas).map(([k, a]) => `<div class="read-area"><b>${esc(areaName(k))}</b> ${esc(tzf(a, 'summary'))}
      <ul>${(LANG === 'en' ? a.items_en : a.items_zh).map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('');
  return `<div class="anom-reading"><div class="rh"><b>${t('reading_h')}</b> <span class="u">${t('reading_sub', {d: esc(R.day), w: esc(R.written || '')})}${R.stale ? t('reading_stale') : ''}</span></div>
    ${blocks}<div class="read-area"><b>${t('reading_concl')}</b> ${esc(tzf(R, 'conclusion'))}</div><div class="u">${t('reading_method')}${esc(tzf(R, 'method'))}</div></div>`;
}
function addAnomalyLayer(T) {
  const A = T.track_anomalies; if (!A || !A.items.length) return null;
  const g = L.layerGroup(), sep = LANG === 'en' ? ': ' : '：';
  A.items.forEach(x => { const st = ANOM_STYLE[x.cat]; if (!st) return;
    const who = x.name ? vaIdent(x.name) : (x.mmsi ? `${t('ais_mmsi')} ${vaIdent(x.mmsi)}` : esc(t('ais_noname')));
    const meta = [x.flag, x.type].filter(Boolean).map(v => vaIdent(v)).join(' · ');
    let body = '';
    if (x.cat === 'dark_gaps') {
      L.polyline([[x.lat, x.lon], [x.lat2, x.lon2]], {color: st.c, weight: 1.2, opacity: .45, dashArray: '4 5', interactive: false}).addTo(g);
      L.circleMarker([x.lat2, x.lon2], {radius: 4.5, color: st.c, weight: 2, fillColor: st.c, fillOpacity: 1}).bindTooltip(t('anom_gap_on'), {direction: 'top', className: 'lbl'}).addTo(g);
      body = t('anom_gap_pop', {h: x.hours, km: x.km, t1: esc(x.t1), t2: esc(x.t2)});
    } else if (x.cat === 'surges') body = t('anom_surge_pop', {vh: x.vh, b: x.base});
    else if (x.cat === 'odd_stops') body = t('anom_stop_pop', {h: x.hours, b: x.base ?? 0});
    else body = t('anom_hours_pop', {h: x.hours ?? '—'});
    const head = x.cat === 'surges' ? `<b>${t('anom_surges')}</b>` : `<b>${who}</b>${meta ? ' · ' + meta : ''}<br>${t('anom_' + x.cat)}`;
    L.marker([x.lat, x.lon], {icon: L.divIcon({className: 'anom-ic', html: anomSvg(st, 20), iconSize: [20, 20], iconAnchor: [10, 10]}), keyboard: false})
      .bindTooltip(x.cat === 'surges' ? t('anom_surges') : (x.name ? vaIdent(x.name) : t('anom_' + x.cat)), {direction: 'top', className: 'lbl'})
      .bindPopup(`${head}<br>${body}<br><span class="u">${t('anom_pop_src', {d: esc(x.day)})}</span>`).addTo(g);
  });
  return g;
}
function addAisLayer(T, map, overlays) {
  const A = T.ais; if (!A || !(A.ships || []).length) return;
  const g = L.layerGroup();
  A.ships.forEach(s => {
    const name = String(s.name || '').trim();
    const nav = AIS_NAV[s.nav_status] ? aisL(AIS_NAV[s.nav_status]) : String(s.nav_status ?? '');
    const pop = `<b>${name ? vaIdent(name) : esc(t('ais_noname'))}</b><br>${t('ais_mmsi')} ${vaIdent(String(s.mmsi))}<br>${t('ais_pop', {s: s.sog ?? '—', c: s.cog ?? '—'})}<br>${t('ais_nav')}${LANG === 'en' ? ': ' : '：'}${esc(nav)}<br>${t('ais_type')}${LANG === 'en' ? ': ' : '：'}${esc(aisL(AIS_CAT_T[AIS_CAT(s.type)]))}${s.dest ? `<br>${t('ais_dest')}${LANG === 'en' ? ': ' : '：'}${vaIdent(String(s.dest))}` : ''}<br><span class="u">${t('ais_time')}${LANG === 'en' ? ': ' : '：'}${esc(String(s.time_utc || '').slice(0, 19))}</span>`;
    L.marker([s.lat, s.lon], {icon: aisIcon(s), keyboard: false}).bindTooltip(name ? vaIdent(name) : esc(t('ais_noname')), {direction: 'top', className: 'lbl'}).bindPopup(pop).addTo(g);
  });
  g.addTo(map); overlays[t('layer_ais')] = g; (vaLayers[T.key] = vaLayers[T.key] || {}).ais = g;
}
/* 点一行：地图上这片海域的框加粗高亮，其余复原，地图移到框上；再点同一行取消。不滚动页面。 */
function vaPick(key, id) {
  const row = document.querySelector(`#vat_${key} tr.va-row[data-area="${id}"]`); if (!row) return;
  const on = !row.classList.contains('on');
  document.querySelectorAll(`#vat_${key} tr.va-row`).forEach(r => { r.classList.remove('on'); r.setAttribute('aria-pressed', 'false'); });
  if (on) { row.classList.add('on'); row.setAttribute('aria-pressed', 'true'); }
  vaHighlight(key, on ? id : null);
}
function vaHighlight(key, id) {
  const P = vaPolys[key] || {}, map = maps[key];
  Object.entries(P).forEach(([k, p]) => p.setStyle(k === id ? {weight: 4, color: '#1d1d1f', dashArray: null, fillOpacity: 0.45} : {weight: 1.5, color: p.options.baseColor, dashArray: null, fillOpacity: 0.25}));
  if (!id || !map || !P[id]) return;
  const L_ = (vaLayers[key] || {}).vessels; if (L_ && !map.hasLayer(L_)) L_.addTo(map);
  P[id].bringToFront();
  map.fitBounds(P[id].getBounds(), {maxZoom: 8, padding: [40, 40], animate: false});
}
function renderAircraft(T) {
  const A_ = T.aircraft; if (!A_ || !A_.circles) return '';
  const hasHist = A_.circles.some(c => (c.history || []).length >= 2);
  const rows = A_.circles.map(c => `<tr data-circle="${esc(c.id)}"><td><b>${esc(LANG === 'en' ? c.en : c.zh)}</b></td><td class="num" data-f="total">${vaNum(c.total)}</td><td class="num" data-f="military">${vaNum(c.military)}</td>${hasHist ? `<td>${vaHistSpark(c.history)}</td>` : ''}</tr>`).join('');
  const mil = vaMilList(A_);
  const alt = v => v == null ? '—' : (typeof v === 'number' ? v.toLocaleString('en-US') : (v === 'ground' ? t('ac_ground') : esc(v)));
  const milRows = mil.map(m => `<tr data-hex="${esc(m.hex)}"><td>${(m.flight || '').trim() ? vaIdent((m.flight || '').trim()) : '—'}</td><td>${m.t ? vaIdent(m.t, m.desc || '') : '—'}</td><td>${m.r ? vaIdent(m.r) : '—'}</td><td class="num">${alt(m.alt_baro)}</td><td class="num">${m.lat != null ? m.lat.toFixed(2) + ', ' + m.lon.toFixed(2) : '—'}</td></tr>`).join('');
  const rad = (A_.circles[0] || {}).dist_nm ?? '';
  return `<section class="va" id="ac_${T.key}">
  <h2>${t('ac_h2')}</h2>
  <p class="legend va-lead">${t('ac_note', {t: esc(vaUtc(A_.taken_utc)), r: esc(rad)})}</p>
  <div class="va-scroll"><table class="va-air" id="act_${T.key}"><tr><th>${t('ac_th_area')}</th><th class="num">${t('ac_th_total')}</th><th class="num">${t('ac_th_mil')}</th>${hasHist ? `<th>${t('ac_th_hist')}</th>` : ''}</tr>${rows}</table></div>
  ${hasHist ? '' : `<p class="legend">${t('ac_one_snap')}</p>`}
  <h3 class="sa-h3">${t('ac_mil_h', {n: mil.length})}</h3>
  ${mil.length ? `<div class="va-scroll"><table class="va-mil" id="acm_${T.key}"><tr><th>${t('ac_th_call')}</th><th>${t('ac_th_type')}</th><th>${t('ac_th_reg')}</th><th class="num">${t('ac_th_alt')}</th><th class="num">${t('ac_th_pos')}</th></tr>${milRows}</table></div>` : `<p class="legend">${t('ac_mil_none')}</p>`}
  <p class="legend va-src">${t('ac_src')}</p>
  </section>`;
}
/* 军机明细：各圆形区域的 military_list 在前，战区范围内的 mil_in_box 在后，按 hex 去重，先出现的留下。 */
function vaMilList(A_) {
  const seen = new Set(), out = [];
  [...A_.circles.flatMap(c => c.military_list || []), ...(A_.mil_in_box || [])].forEach(m => { if (!m || !m.hex || seen.has(m.hex)) return; seen.add(m.hex); out.push(m); });
  return out;
}
function renderVesselsAir(T) { return renderVessels(T) + renderAircraft(T); }
/* 战区地图的两个图层：海域框按货船比值上色；圆形区域画圆（只描边，不挡下面图层的点击），军机画点。 */
function addVesselAirLayers(T, map, overlays) {
  const V = T.vessels, A_ = T.aircraft;
  if (V && V.areas && V.areas.length) {
    const g = L.layerGroup(); vaPolys[T.key] = {};
    V.areas.forEach(a => {
      if (!a.polygon || !a.polygon.length) return;
      const c = VA_RATIO_COLOR(a.ratio_cargo), rAll = vaRatio(a.recent_all, a.baseline_all), name = LANG === 'en' ? a.en : a.zh;
      const p = L.polygon(a.polygon.map(([lon, lat]) => [lat, lon]), {color: c, baseColor: c, weight: 1.5, fillColor: c, fillOpacity: 0.25})
        .bindTooltip(name, {direction: 'top', className: 'lbl', sticky: true})
        .bindPopup(`<b>${esc(name)}</b><br>${t('va_pop_cargo', {b: vaMean(a.baseline_cargo), r: vaMean(a.recent_cargo), x: vaNum(a.ratio_cargo)})}<br>${t('va_pop_all', {b: vaMean(a.baseline_all), r: vaMean(a.recent_all), x: vaNum(rAll)})}<br><span class="u">${t('va_pop_base', {b0: esc(V.baseline[0]), b1: esc(V.baseline[1]), d: esc(V.data_through)})}</span>`)
        .addTo(g);
      vaPolys[T.key][a.id] = p;
    });
    g.addTo(map); overlays[t('layer_vessels')] = g; (vaLayers[T.key] = vaLayers[T.key] || {}).vessels = g;
  }
  if (A_ && A_.circles && A_.circles.length) {
    const g = L.layerGroup();
    A_.circles.forEach(c => {
      const name = LANG === 'en' ? c.en : c.zh;
      L.circle([c.lat, c.lon], {radius: c.dist_nm * 1852, color: '#5856d6', weight: 1.5, dashArray: '5 5', fill: false})
        .bindTooltip(name, {sticky: true, className: 'lbl'})
        .bindPopup(`<b>${esc(name)}</b><br>${t('ac_pop', {r: c.dist_nm, n: c.total, m: c.military})}<br><span class="u">${t('ac_pop_t', {t: esc(vaUtc(A_.taken_utc))})}</span>`).addTo(g);
    });
    vaMilList(A_).forEach(m => {
      if (m.lat == null || m.lon == null) return;
      const call = (m.flight || '').trim();
      L.circleMarker([m.lat, m.lon], {radius: 4.5, color: '#fff', weight: 1.2, fillColor: '#5856d6', fillOpacity: 0.95})
        .bindTooltip(`${t('ac_mil_pt')} ${call ? vaIdent(call) : ''} ${m.t ? vaIdent(m.t) : ''}`, {direction: 'top', className: 'lbl'}).addTo(g);
    });
    g.addTo(map); overlays[t('layer_aircraft')] = g; (vaLayers[T.key] = vaLayers[T.key] || {}).aircraft = g;
  }
}
