
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
const maps = {};
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
  if (maps[k]) setTimeout(() => maps[k].invalidateSize(), 50);
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
  <div class="kpane" style="grid-template-columns:1fr"><div class="map" id="m_${T.key}" style="height:560px"></div><div class="metro-legend" id="mlegend_${T.key}"></div></div>
  <details class="metro-wrap" style="margin-top:12px"><summary style="cursor:pointer;font-size:13px;color:var(--ink2)">${t('metro_schematic')}</summary><svg id="metro_${T.key}" class="metro" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet"></svg></details>` : ''}
  ${T.nodes ? `<h2>${t('nodes_h2')} <small>${t('nodes_sub')}</small></h2>
  <div class="kpane" style="grid-template-columns:1fr">
    <div class="nodes" id="nodes_${T.key}" style="flex-direction:row;flex-wrap:wrap;max-height:none">${T.nodes.map(n => `<div class="node s-${n.status}" id="nd_${T.key}_${n.num}" onclick="event.stopPropagation();selectNode('${T.key}',${n.num})"><h3><span class="n">${n.num}</span>${esc(tv(n.name))} <span class="chip st-${n.status}">${esc(tv(n.status_zh))}</span></h3><div class="k">${esc(tv(n.kind))}</div>
      <div class="e">${n.evidence.slice(0, 3).map(e => `${esc(nz(e.item))}${LANG === 'en' ? ': ' : '：'}${esc(tv(e.value))}`).join('<br>')}</div></div>`).join('')}</div></div>
  <div class="kdetail" id="kd_${T.key}"></div>` : ''}
  <h2>${T.nodes ? t('tiles_h2') : t('map_tiles_h2')} <small>${t('tiles_sub')}</small></h2>
  <div class="row">${T.nodes ? '' : `<div class="map" id="m_${T.key}"></div>`}<div class="tiles">${tiles}</div></div>
  <h2>${t('aligned_h2')} <small>${t('aligned_sub')}</small></h2>
  <div class="multi">${charts}</div>
  <h2>${t('ba_h2')} <small>${t('ba_sub')}</small></h2>
  ${ba}
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
    (geoLines[T.key] || []).forEach(o => o.pl.setStyle({opacity: (on && o.line !== sp.dataset.line) ? 0.08 : (o.kind === 'bypass' ? 0.9 : 0.95)})); }));
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
    <div class="u" style="margin-top:3px">${tzf(r, 'reason')}</div>
    ${r.manual_text ? `<div class="mread">${tzf(r, 'manual_text')} <span class="u">${t('manual_date', {d: esc(r.manual_date || '')})}</span></div>` : ''}
  </div>`;
}
function s2Card(r, compact) {
  const cols = 2 + (r.png_blocks ? 1 : 0) + (r.png_diff && !compact ? 1 : 0);
  return `<div class="tile" style="padding:8px${compact ? ';margin-bottom:8px' : ''}">
    <div class="l" style="min-height:auto"><b>${esc(nz(r.site))}</b> ${r.country ? '· ' + esc(ccT(r.country)) : ''}</div>
    ${verdictBlock(r)}
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

let modalMap = null, modalCharts = [], nodeMarkers = {}, currentNode = null, geoLines = {};
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
    <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap"><span class="n" style="display:inline-block;background:var(--hl);color:#0e1116;border-radius:50%;width:24px;height:24px;text-align:center;line-height:24px;font-size:13px;font-weight:700">${n.num}</span><h2 style="margin:0">${esc(tv(n.name))}</h2><span class="chip st-${n.status}">${esc(tv(n.status_zh))}</span><span class="kind">${esc(tv(n.kind))}</span>
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
  L.marker([n.lat, n.lon], {icon: L.divIcon({className: 'nodeicon', html: String(n.num), iconSize: [26, 26]})}).bindTooltip(tv(n.name)).addTo(modalMap);
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
    const m = L.circleMarker([p.lat, p.lon], {radius: isStrat ? 7 : (hit ? 5 : 3), color: hit ? col('--s8') : (isStrat ? '#7a5200' : '#9a9a9a'), weight: hit ? 2.5 : 1,
      fillColor: isStrat ? col('--s4') : (hit ? col('--s2') : '#cfcfcf'), fillOpacity: 0.85})
      .bindPopup(`<b>${esc(nz(p.name))}</b> · ${esc(kindT(p.kind))} · ${esc(ccT(p.country))}<br>${hit ? t('site_hit', {n: p.n, f: esc(p.first)}) : t('site_nohit')}<br><span style="color:#52514e" title="${esc(p.list)}">${esc(listT(p.list))}</span>`);
    if (isStrat) { m.addTo(strat); nStrat++; } else if (hit) { m.addTo(infraHit); nHit++; } else { m.addTo(infraRest); nRest++; }
  });
  const nodesLayer = L.layerGroup(); nodeMarkers[T.key] = [];
  (T.nodes || []).forEach(n => {
    const mk = L.marker([n.lat, n.lon], {icon: L.divIcon({className: 'nodeicon', html: String(n.num), iconSize: [26, 26]}), zIndexOffset: 1000})
      .bindTooltip(`${n.num} ${tv(n.name)}`, {direction: 'top'}).on('click', e => { L.DomEvent.stopPropagation(e); selectNode(T.key, n.num); }).addTo(nodesLayer);
    nodeMarkers[T.key].push(mk);
  });
  // 供应链线路：真实航路上的地铁式线
  const metroLayer = L.layerGroup(); geoLines[T.key] = [];
  if (T.metro && T.metro.routes) {
    const lineById = Object.fromEntries(T.metro.lines.map(l => [l.id, l]));
    const S = T.metro.stations;
    const stoppedNear = pts_ => pts_.some(p => Object.values(S).some(st => st.status === 'stopped' && st.lat != null && Math.abs(st.lat - p[0]) < 0.05 && Math.abs(st.lon - p[1]) < 0.05));
    T.metro.routes.forEach((r, ri) => { const l = lineById[r.id]; const off = (ri - 2.5) * 0.09;
      r.segs.forEach(seg => { const pts_ = seg.pts.map(p => [p[0] + off, p[1]]);
        L.polyline(pts_, {color: '#fff', weight: 9, opacity: .9, lineCap: 'round', lineJoin: 'round', interactive: false}).addTo(metroLayer);
        const pl = L.polyline(pts_, {color: l.color, weight: 5, opacity: seg.kind === 'bypass' ? .9 : .95, lineCap: 'round', lineJoin: 'round',
          dashArray: seg.kind === 'bypass' ? '10 8' : (stoppedNear(seg.pts) ? '1 10' : null)}).bindTooltip(`${tv(l.name)}${seg.kind === 'bypass' ? t('bypass') : ''}`, {sticky: true});
        pl.addTo(metroLayer); geoLines[T.key].push({pl, line: l.id, kind: seg.kind}); }); });
    Object.entries(S).forEach(([sid, st]) => { if (st.lat == null) return;
      const passes = T.metro.lines.filter(l => [...l.route, ...l.bypass].some(([a, b]) => a === sid || b === sid)).length; const xfer = passes > 1;
      if (st.status) L.circleMarker([st.lat, st.lon], {radius: xfer ? 14 : 10, color: STC[st.status] || STC.unknown, weight: 4, fill: false, interactive: false}).addTo(metroLayer);
      const c = L.circleMarker([st.lat, st.lon], {radius: xfer ? 8 : 5.5, color: '#1d1d1f', weight: xfer ? 3 : 2, fillColor: st.num ? '#1d1d1f' : '#fff', fillOpacity: 1});
      c.bindTooltip(`${st.num ? st.num + ' · ' : ''}${tv(st.name)} · ${tv(st.kind)}${st.status ? ' · ' + STZ(st.status) : ''}`, {direction: 'top', className: 'lbl'});
      if (st.num) c.on('click', e => { L.DomEvent.stopPropagation(e); selectNode(T.key, st.num); });
      c.addTo(metroLayer);
      if (st.kind === '咽喉点' || st.kind === '下游' || st.kind === '上游') L.tooltip({permanent: true, direction: st.kind === '下游' ? 'right' : 'top', className: 'lbl', offset: [0, st.kind === '下游' ? 0 : -10]}).setLatLng([st.lat, st.lon]).setContent(tv(st.name)).addTo(metroLayer);
    });
  }
  if (T.metro) { strat.addTo(map); nodesLayer.addTo(map); metroLayer.addTo(map); } else { pts.addTo(map); gd.addTo(map); uc.addTo(map); strat.addTo(map); infraHit.addTo(map); nodesLayer.addTo(map); }
  const overlays = {[t('layer_metro')]: metroLayer, [t('layer_nodes')]: nodesLayer, [t('layer_pts')]: pts, [t('layer_strat', {n: nStrat})]: strat, [t('layer_hit', {n: nHit})]: infraHit, [t('layer_rest', {n: nRest})]: infraRest, [t('layer_gdelt')]: gd, [t('layer_ucdp')]: uc, [t('layer_fires')]: fires};
  const saLayer = addSupplyAttackLayer(T, map);
  if (saLayer) { saLayer.addTo(map); overlays[t('layer_ua_attacks')] = saLayer; }
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
