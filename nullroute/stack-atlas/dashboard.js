/* 综合仪表盘壳。读 data/monitor/latest.json（build_monitor.py 每天重建），组装四个视图：
 * 总览（本文件）、战区三个（dashboard-theaters.js）、栈（本文件，读 atlas-data.js）、传导链（chain-view.html 五段联动视图，读 data/monitor/five_stage.json；2026-09-21 起替换六月的 transmission.html）、
 * 代价（analysis/cost-chain-{taiwan,europe,middle-east,egypt}*.html，同样用 iframe 嵌，视图顶部四个按钮切换，选择写进 #cost=tw|eu|me|eg；中东 2026-09-21 加）。
 * 选中逻辑：selectNode(theater, num) 在战区页内；栈节点 → openDrawer(id)；总览地图上的站、咽喉点、战区框各自跳到对应视图。
 * 中英文：index.html 是中文页、en.html 是英文页，语言由 <html lang> 定（i18n.js 的 LANG）；两页共用本脚本与同一份数据，页头的语言按钮是链接，带着当前视图的锚过去。
 * 报告（analysis/report-{war-shock,blocs}*.html，2026-09-24 加）：两篇专题分析，同样用 iframe 嵌，两个按钮切换，选择写进 #report=shock|bloc。
 * 传导链页里点节点会以 #sel=type:id 回到本页（target=_top），boot() 末尾按它打开栈抽屉或定位咽喉点；#cost=tw|eu|me|eg 打开代价视图的那一条链。 */
const COST_PAGES = {tw: 'cost-chain-taiwan', eu: 'cost-chain-europe', me: 'cost-chain-middle-east', eg: 'cost-chain-egypt'};
const COST_TITLE = {tw: 'cost_iframe_title', eu: 'cost_iframe_title_eu', me: 'cost_iframe_title_me', eg: 'cost_iframe_title_eg'};
window.COST_SEL = 'tw';
const REPORT_PAGES = {shock: 'report-war-shock', bloc: 'report-blocs'};
window.REPORT_SEL = 'shock';
const A = window.ATLAS_DATA;
const STATUS_T = st => ({stopped: t('st_stopped'), narrowed: t('st_narrowed'), inuse: t('st_inuse'), nodata: t('st_nodata'), damaged: t('st_damaged'), unknown: t('st_unknown')}[st] || '');
const LEVEL_T = lv => ({red: t('lv_red'), amber: t('lv_amber'), green: t('lv_green'), gray: t('lv_gray'), info: t('lv_info')}[lv] || '');
let ovMap = null;
window.RAW = null;

applyStatic();
document.getElementById('meta').textContent = t('meta_loading');
document.querySelector('#t_overview .legend').textContent = t('loading_json');

fetch('data/monitor/latest.json', {cache: 'no-store'}).then(r => r.json()).then(data => { window.RAW = data; setNames(data.names); boot(); })
  .catch(e => { document.getElementById('t_overview').innerHTML = `<p class="legend" style="padding:20px">${t('load_fail', {e: esc(e.message)})}</p>`; });

/* 整页构建。先拆：抽屉、节点详情、Leaflet 地图、Chart 实例、导航与各视图的 DOM（只在载入时调一次，保留拆的步骤是为了重复调用也安全）。 */
function boot() {
  const t0 = performance.now();
  const prev = (document.querySelector('nav button.on') || {}).dataset; const cur = (prev && prev.k) || (location.hash || '').slice(1) || 'overview';
  closeDrawer(); closeModal();
  Object.keys(maps).forEach(k => { maps[k].remove(); delete maps[k]; }); ovMap = null;
  pageCharts.forEach(c => c.destroy()); pageCharts.length = 0;
  Object.keys(viewHooks).forEach(k => delete viewHooks[k]);
  Object.keys(nodeMarkers).forEach(k => delete nodeMarkers[k]); geoLines = {}; metroOvs = {};
  nav.innerHTML = ''; root.innerHTML = '';
  applyStatic();
  const bo = document.createElement('button'); bo.textContent = t('nav_overview'); bo.dataset.k = 'overview'; bo.onclick = () => show('overview'); nav.appendChild(bo);
  const so = document.createElement('section'); so.className = 'theater'; so.id = 't_overview'; root.appendChild(so);
  initTheaters(window.RAW);
  document.getElementById('meta').textContent = t('meta', {date: D.date, built: D.built});
  const bs = document.createElement('button'); bs.textContent = t('nav_stack'); bs.dataset.k = 'stack'; bs.onclick = () => show('stack'); nav.appendChild(bs);
  const bt = document.createElement('button'); bt.textContent = t('nav_transmission'); bt.dataset.k = 'transmission'; bt.onclick = () => show('transmission'); nav.appendChild(bt);
  const bc = document.createElement('button'); bc.textContent = t('nav_cost'); bc.dataset.k = 'cost'; bc.onclick = () => show('cost'); nav.appendChild(bc);
  const br = document.createElement('button'); br.textContent = t('nav_report'); br.dataset.k = 'report'; br.onclick = () => show('report'); nav.appendChild(br);
  const ss = document.createElement('section'); ss.className = 'theater'; ss.id = 't_stack'; ss.innerHTML = `<p class="legend">${t('built_on_show')}</p>`; root.appendChild(ss);
  const st = document.createElement('section'); st.className = 'theater'; st.id = 't_transmission'; st.innerHTML = `<iframe src="./chain-view${LANG === 'en' ? '-en' : ''}.html" title="${t('iframe_title')}"></iframe>`; root.appendChild(st);
  const cm = /^cost=(tw|eu|me|eg)$/.exec(cur); if (cm) window.COST_SEL = cm[1];
  const sc = document.createElement('section'); sc.className = 'theater'; sc.id = 't_cost';
  sc.innerHTML = `<div class="costpick" role="group" aria-label="${t('cost_pick')}">${['tw', 'eu', 'me', 'eg'].map(k => `<button data-cost="${k}" onclick="pickCost('${k}')">${t('cost_' + k)}</button>`).join('')}</div><iframe id="costframe" title=""></iframe>`;
  root.appendChild(sc);
  pickCost(window.COST_SEL, true);
  const rm = /^report=(shock|bloc)$/.exec(cur); if (rm) window.REPORT_SEL = rm[1];
  const sr = document.createElement('section'); sr.className = 'theater'; sr.id = 't_report';
  sr.innerHTML = `<div class="costpick reportpick" role="group" aria-label="${t('report_pick')}">${['shock', 'bloc'].map(k => `<button data-report="${k}" onclick="pickReport('${k}')">${t('report_' + k)}</button>`).join('')}</div><iframe id="reportframe" title=""></iframe>`;
  root.appendChild(sr);
  pickReport(window.REPORT_SEL, true);
  viewHooks.report = {fn: () => {}, done: false};
  viewHooks.stack = {fn: buildStack, done: false};
  viewHooks.transmission = {fn: () => {}, done: false};
  viewHooks.cost = {fn: () => {}, done: false};
  renderOverview();
  show(cm ? 'cost' : (rm ? 'report' : (document.getElementById('t_' + cur) ? cur : 'overview')));
  if (cur.startsWith('sel=')) openSel(cur);
  window.__lastBootMs = Math.round(performance.now() - t0);
}

/* 代价视图的四条链：换 iframe 的 src，选择写进地址 #cost=<tw|eu|me|eg>（show() 写锚时读 COST_SEL），刷新后保持。 */
function pickCost(k, quiet) {
  if (!COST_PAGES[k]) k = 'tw';
  window.COST_SEL = k;
  const f = document.getElementById('costframe'); if (!f) return;
  const src = `./analysis/${COST_PAGES[k]}${LANG === 'en' ? '-en' : ''}.html`;
  if (f.getAttribute('src') !== src) { f.setAttribute('src', src); f.title = t(COST_TITLE[k]); }
  document.querySelectorAll('.costpick button').forEach(b => { const on = b.dataset.cost === k; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  if (!quiet && document.getElementById('t_cost').classList.contains('on')) show('cost');
}

/* 报告视图的两篇：换 iframe 的 src，选择写进地址 #report=<shock|bloc>，刷新后保持（2026-09-24）。 */
function pickReport(k, quiet) {
  if (!REPORT_PAGES[k]) k = 'shock';
  window.REPORT_SEL = k;
  const f = document.getElementById('reportframe'); if (!f) return;
  const src = `./analysis/${REPORT_PAGES[k]}${LANG === 'en' ? '-en' : ''}.html`;
  if (f.getAttribute('src') !== src) { f.setAttribute('src', src); f.title = t('report_iframe_title_' + k); }
  document.querySelectorAll('.reportpick button').forEach(b => { const on = b.dataset.report === k; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  if (!quiet && document.getElementById('t_report').classList.contains('on')) show('report');
}

/* 传导链页的深链 #sel=type:id：node / polnode 开栈抽屉，chokepoint 到总览定位，其余到栈。
 * 传导链嵌在本页里时，它的链接指向的是同一份文档（只换锚），浏览器不会重新载入，所以还要听 hashchange。 */
function openSel(h) {
  const [type, id] = decodeURIComponent(h.slice(4)).split(':');
  if (type === 'chokepoint') { show('overview'); const row = D.chokepoints.find(x => x.atlas_id === id); if (row) setTimeout(() => ovMap.setView([row.lat, row.lon], 6), 150); }
  else { show('stack'); if (type === 'node' || type === 'polnode') setTimeout(() => openDrawer(id), 50); }
}
window.addEventListener('hashchange', () => {
  if (!window.RAW) return;
  const h = (location.hash || '').slice(1);
  if (h.startsWith('sel=')) openSel(h);
  else if (/^cost=(tw|eu|me|eg)$/.test(h)) { pickCost(h.slice(5), true); show('cost'); }
  else if (/^report=(shock|bloc)$/.test(h)) { pickReport(h.slice(7), true); show('report'); }
  else if (h && document.getElementById('t_' + h) && !document.getElementById('t_' + h).classList.contains('on')) show(h);
});

/* ---------- 总览 ---------- */
function renderOverview() {
  const sec = document.getElementById('t_overview');
  const groups = D.theaters.map(T => {
    const lvl = T.break && T.break.date ? 'red' : (T.tiles.some(x => x.ratio != null && (x.ratio < 0.85 || x.ratio > 1.15)) ? 'amber' : 'green');
    const tiles = T.tiles.slice(0, 4).map(x => {
      const cls = x.ratio == null ? '' : (x.ratio < 0.85 ? 'down' : (x.ratio > 1.15 ? 'up' : ''));
      return `<div class="tile"><div class="l">${esc(tv(x.label))}</div><div class="v">${fmt(x.value)}</div><div class="b">${t('baseline')} ${fmt(x.base)} · ${t('ratio')} <span class="r ${cls}">${x.ratio ?? ''}</span></div></div>`;
    }).join('');
    const rd = (T.reading || []).slice(0, 2).map((p, i) => `<div>${tzf(T, 'reading', i)}</div>`).join('');
    return `<div class="tgroup"><h3 onclick="show('${T.key}')"><span class="st lv ${lvl}" style="margin:0"></span>${esc(tv(T.title))} <span class="u" style="font-weight:400">${T.break && T.break.date ? t('break_at', {ck: esc(nz(T.break.chokepoint)), date: esc(T.break.date), n: T.days_since_break}) : t('no_break')} · ${t('open_arrow')}</span></h3>
      <div class="tiles">${tiles}</div><div class="rd">${rd}</div></div>`;
  }).join('');
  const thT = key => tv(D.theaters.find(x => x.key === key).title);
  const alerts = D.alerts.map(a => `<tr><td><span class="lv ${a.level}"></span>${esc(tv(a.kind))}</td><td>${esc(thT(a.theater))}</td><td>${LANG === 'en' && !a.title_en && a.detail_en && HAS_CJK(a.title) ? `<b>${esc(a.detail_en)}</b>` /* 援乌供应链遭袭的警报只带 detail_en（2026-09-21） */ : `<b>${a.title_en && LANG === 'en' ? esc(a.title_en) : esc(tv(a.title))}</b>${a.detail ? '<div class="u">' + (a.detail_en || a.kind === '影像判读' ? tzh(a.detail, a.detail_en) : esc(tv(a.detail))) + '</div>' : ''}`}</td><td><span class="ev measured">${t('ev_measured')}</span><div class="u" title="${esc(a.source)}">${esc(srcT(a.source))}</div></td></tr>`).join('');
  const cks = [...D.chokepoints].sort((a, b) => (a.ratio ?? 9) - (b.ratio ?? 9)).map(c => `<tr><td><span class="lv ${({stopped: 'red', narrowed: 'amber', inuse: 'green', nodata: 'gray'})[c.status]}"></span>${esc(nz(c.name))}</td><td class="num">${c.recent7 ?? ''}</td><td class="num">${c.baseline ?? ''}</td><td class="num">${c.ratio ?? ''}</td><td>${esc(c.break_date || '')}</td><td>${esc(c.last_date)}</td></tr>`).join('');
  sec.innerHTML = `<h2>${t('ov_h2')} <small>${t('ov_sub')}</small></h2>
  <div class="costbanner" role="link" tabindex="0" onclick="show('cost')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();show('cost')}"><span class="cb-tag">${t('cost_banner_tag')}</span><span class="cb-text">${t('cost_banner_text')}</span><span class="cb-cta">${t('cost_banner_cta')}</span></div>
  <div class="costbanner reportbanner" role="link" tabindex="0" onclick="show('report')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();show('report')}"><span class="cb-tag">${t('report_banner_tag')}</span><span class="cb-text">${t('report_banner_text')}</span><span class="cb-cta">${t('report_banner_cta')}</span></div>
  <div class="ov">
    <div class="mapwrap"><div id="m_overview"></div>
    </div>
    <div class="side">${groups}</div>
  </div>
  <div class="alerts"><h2 style="margin-top:0">${t('alerts_h2')} <small>${t('alerts_sub', {n: D.alerts.length})}</small></h2>
    <div style="overflow-x:auto"><table class="alerts-tbl"><tr><th>${t('th_kind')}</th><th>${t('th_theater')}</th><th>${t('th_content')}</th><th>${t('th_evidence')}</th></tr>${alerts}</table></div></div>
  <div class="alerts"><details><summary style="cursor:pointer;font-weight:600">${t('cks_summary', {n: D.chokepoints.length})}</summary>
    <div style="overflow-x:auto;margin-top:8px"><table><tr><th>${t('th_ck')}</th><th>${t('th_recent7')}</th><th>${t('th_baseline')}</th><th>${t('th_ratio')}</th><th>${t('th_break')}</th><th>${t('th_last')}</th></tr>${cks}</table></div></details></div>`;
  buildOverviewMap();
}

function toLatLon(pos) { return [90 - pos[1] / 500 * 180, pos[0] / 1000 * 360 - 180]; }

function buildOverviewMap() {
  const map = mkMap('m_overview', {preferCanvas: true, worldCopyJump: true});
  ovMap = map; maps.overview = map;
  const bases = {[t('base_gray')]: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {maxZoom: 16, attribution: t('attr_tiles')}),
    [t('base_sat')]: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {maxZoom: 18, attribution: t('attr_tiles')})};
  bases[t('base_gray')].addTo(map);
  map.fitBounds([[2, 15], [58, 150]]);
  // 容器在 boot() 重建时可能还没有尺寸，fitBounds 会按 0 尺寸算出最小缩放；布局稳定后再套一次范围（2026-09-19）
  setTimeout(() => { map.invalidateSize(); map.fitBounds([[2, 15], [58, 150]]); }, 80);
  const ckL = L.layerGroup(), siteL = L.layerGroup(), evL = L.layerGroup(), boxL = L.layerGroup();
  // 1. 咽喉点状态环
  D.chokepoints.forEach(c => {
    if (c.lat == null) return;
    const color = STC[c.status] || STC.unknown;
    // 2026-09-23：咽喉点记号改成与战区页同一套徽章（两岸夹一道水的图形），按状态上色；有 Stack Atlas 节点的咽喉点画大一号并常显名字
    const csz = c.atlas_id ? 26 : 20;
    const m = L.marker([c.lat, c.lon], {icon: L.divIcon({className: 'anom-ic ck-ic', html: ckSvg(color, csz, !!c.atlas_id), iconSize: [csz, csz], iconAnchor: [csz / 2, csz / 2]}), zIndexOffset: c.atlas_id ? 500 : 300, keyboard: false});
    m.bindTooltip(t('ck_tip', {name: nz(c.name), st: STATUS_T(c.status), r7: c.recent7 ?? '—', b: c.baseline, ratio: c.ratio ?? '—'}) + (c.break_date ? t('ck_tip_break', {d: c.break_date}) : ''), {direction: 'top', className: 'lbl'});
    m.bindPopup(() => { const el = document.createElement('div'); el.style.width = '260px'; el.innerHTML = `<b>${esc(nz(c.name))}</b> <span class="ev measured">${t('ev_measured')}</span><br>${t('ck_pop', {r7: c.recent7 ?? '—', b: c.baseline, ratio: c.ratio ?? '—'})}${c.break_date ? t('ck_pop_break', {d: c.break_date}) : ''}<canvas></canvas>`; setTimeout(() => sparkline(el.querySelector('canvas'), c.series.map(x => x[0]), c.series.map(x => x[1]), color), 0); return el; });
    m.addTo(ckL);
    if (c.atlas_id) L.tooltip({permanent: true, direction: 'right', className: 'lbl', offset: [8, 0]}).setLatLng([c.lat, c.lon]).setContent(nz(c.name)).addTo(ckL);
  });
  // 2. 三个战区的供应链依赖关系：地铁图层（metro-overlay.js），默认不显示，点左上角按钮出现；站与线的编号前加战区键，免得三区同名相撞
  const mst = {}, mlines = [], mth = {};
  D.theaters.forEach(T => { if (!T.metro) return;
    Object.entries(T.metro.stations).forEach(([k, v]) => { mst[T.key + ':' + k] = {name: tv(v.name), lat: v.lat, lon: v.lon, status: v.status, num: v.num, kind: v.kind}; mth[T.key + ':' + k] = T; });
    T.metro.lines.forEach(l => mlines.push({id: T.key + ':' + l.id, name: tv(l.name), theater: tv(T.title), color: l.color,
      route: l.route.map(([a, b]) => [T.key + ':' + a, T.key + ':' + b]), bypass: l.bypass.map(([a, b]) => [T.key + ':' + a, T.key + ':' + b])})); });
  const metroOv = mlines.length ? new MetroOverlay({stations: mst, lines: mlines, toWord: t('metro_to'),
    lineTip: (l, kind) => `<b style="color:${l.color}">■</b> ${esc(l.theater)} · ${esc(l.name)}${kind === 'bypass' ? esc(t('bypass')) : ''}`,
    stationTip: (k, s_, ls) => `<b>${esc(tv(mth[k].title))} · ${s_.num ? s_.num + ' · ' : ''}${esc(s_.name)}</b><br>${esc(tv(s_.kind))}${s_.status ? ' · ' + esc(STATUS_T(s_.status)) : ''}<br>${t('metro_passes')}${ls.map(id => esc(mlines.find(x => x.id === id).name)).join(LANG === 'en' ? ', ' : '、')}`,
    onStation: (k, s_) => selectNode(mth[k].key, s_.num)}) : null;
  if (metroOv) metroButton(map, metroOv, t('metro_btn'));
  // 3. 战略站点按影像判读着色
  D.theaters.forEach(T => {
    const verdict = {}; (T.s2_change || []).forEach(r => { verdict[r.site] = r.manual_verdict || r.verdict; });
    (T.site_points || []).forEach(p => {
      if (!/strategic/.test(p.list || '')) return;
      const v = verdict[p.name] || '';
      // 2026-09-23：站点记号与战区页同一套：有影像变化的画相框徽章（红＝受损迹象，橙＝局部或整幅变化，蓝＝热异常），无变化或不可判读的画小空心灰圈
      const rank = VRANK[v] ?? 9;
      const colr = {'v-red': '#d70015', 'v-amber': '#ff9500', 'v-blue': '#0071e3'}[VCLASS[v]];
      const icon = rank <= 3 && colr ? L.divIcon({className: 'anom-ic s2-ic', html: s2Svg(colr, rank === 0 ? 24 : 20, rank === 0), iconSize: [rank === 0 ? 24 : 20, rank === 0 ? 24 : 20], iconAnchor: [rank === 0 ? 12 : 10, rank === 0 ? 12 : 10]})
        : L.divIcon({className: 'anom-ic', html: `<svg width="12" height="12" viewBox="0 0 20 20"><circle cx="10" cy="10" r="6" fill="#fff" stroke="#8e8e93" stroke-width="2.2"/></svg>`, iconSize: [12, 12], iconAnchor: [6, 6]});
      L.marker([p.lat, p.lon], {icon, keyboard: false, zIndexOffset: rank <= 3 ? 400 : 100})
        .bindTooltip(`${nz(p.name)} · ${kindT(p.kind)}${v ? ' · ' + tv(v) : ''}${(p.n || 0) > 0 ? t('fire_days', {n: p.n}) : ''}`, {direction: 'top', className: 'lbl'})
        .on('click', () => show(T.key)).addTo(siteL);
    });
  });
  // 4. Stack Atlas 事件标记
  (window.ATLAS_EVENTS || []).forEach(ev => {
    const ll = toLatLon(ev.pos);
    const title = LANG === 'en' ? (ev.title_en || ev.title_zh) : ev.title_zh, summary = LANG === 'en' ? (ev.summary_en || ev.summary_zh) : ev.summary_zh;
    L.marker(ll, {icon: L.divIcon({className: 'anom-ic', html: badge('#1d1d1f', GLYPH.event, 20), iconSize: [20, 20], iconAnchor: [10, 10]}), keyboard: false}).bindPopup(`<b>${esc(title)}</b><br>${esc((summary || '').slice(0, 220))}${ev.link ? `<br><a href="${esc(LANG === 'en' ? ev.link.replace(/^transmission\.html/, 'transmission-en.html') : ev.link)}" target="_blank">${t('ev_topic')}</a>` : ''}<br><span class="ev">${esc(ev.evidence || '')}</span>`).addTo(evL);
  });
  // 5. 战区框
  D.theaters.forEach(T => {
    L.rectangle(T.bbox, {color: col('--ink3'), weight: 1.5, dashArray: '6 6', fill: true, fillOpacity: 0.02}).bindTooltip(t('box_tip', {t: tv(T.title)}), {sticky: true}).on('click', () => show(T.key)).addTo(boxL);
  });
  boxL.addTo(map); ckL.addTo(map); siteL.addTo(map); evL.addTo(map);
  // 图例：与战区页同一种左下角浮动面板（2026-09-23 主人「图标这不还是没变吗」：总览一直没换，这次一并换）
  addLegendControl(map, `<div class="lg-hint">${t('ov_lg_hint')}</div>
    <div class="lg-group"><div class="lg-h">${t('ov_lg_ck')}</div>
      ${lgRow(ckSvg(STC.stopped, 18, true), t('st_stopped'), t('ov_lg_ck_stopped'))}${lgRow(ckSvg(STC.narrowed, 18), t('st_narrowed'), t('ov_lg_ck_narrowed'))}${lgRow(ckSvg(STC.inuse, 18), t('st_inuse'), t('ov_lg_ck_inuse'))}${lgRow(ckSvg(STC.unknown, 18), t('st_nodata'), '')}
      <div class="lg-note" style="margin-left:30px">${t('ov_lg_ck_note')}</div></div>
    <div class="lg-group"><div class="lg-h">${t('lg_h_sites')}</div>
      ${lgRow(s2Svg('#d70015', 18, true), t('lg_s2_red'), t('ov_lg_site_note'))}${lgRow(s2Svg('#ff9500', 18), t('lg_s2_amber'), '')}${lgRow(s2Svg('#0071e3', 18), t('lg_s2_blue'), '')}
      ${lgRow(`<svg width="14" height="14" viewBox="0 0 20 20"><circle cx="10" cy="10" r="6" fill="#fff" stroke="#8e8e93" stroke-width="2.2"/></svg>`, t('lg_strat'), '')}</div>
    <div class="lg-group"><div class="lg-h">${t('ov_lg_other')}</div>
      ${lgRow(badge('#1d1d1f', GLYPH.event, 18), t('ov_lg_event'), t('ov_lg_event_note'))}
      ${lgRow(`<svg width="18" height="18" viewBox="0 0 20 20"><rect x="3" y="4" width="14" height="12" fill="none" stroke="#86868b" stroke-width="1.5" stroke-dasharray="3 2"/></svg>`, t('ov_lg_box'), t('ov_lg_box_note'))}</div>`);
  const overlays = {[t('layer_ck')]: ckL, ...(metroOv ? {[t('layer_metro')]: metroOv} : {}), [t('layer_sites')]: siteL, [t('layer_events')]: evL, [t('layer_boxes')]: boxL};
  L.control.layers(bases, overlays, {collapsed: true}).addTo(map); layersTitle(map);
  map.__overlays = overlays;
}

function sparkline(canvas, labels, values, color) {
  if (!canvas) return;
  canvas.height = 90; canvas.width = 250;
  new Chart(canvas, {type: 'line', data: {labels, datasets: [{data: values, borderColor: color, borderWidth: 1.5, pointRadius: 0, fill: false, tension: 0.2}]},
    options: {animation: false, plugins: {legend: {display: false}}, scales: {x: {display: false}, y: {ticks: {font: {size: 9}}}}}});
}

/* ---------- 栈 ---------- */
const nodeLabel = n => LANG === 'en' ? (n.label_en || n.label_zh) : n.label_zh;
const layerLabel = ly => LANG === 'en' ? (ly.label_en || ly.label_zh) : ly.label_zh;
const stackName = stk => LANG === 'en' ? (stk.name_en || stk.name_zh) : stk.name_zh;
function buildStack() {
  const sec = document.getElementById('t_stack');
  const ns = D.node_status || {};
  const colHtml = (stacks, layers, title) => `<div class="stackcol"><h3>${title}</h3>${stacks.map(stk => {
    const withStatus = stk.nodes.filter(n => ns[n.id]).length;
    const rows = layers.map(ly => { const nodes = stk.nodes.filter(n => n.layer === ly.id); if (!nodes.length) return '';
      return `<div class="lrow"><div class="ln">${esc(layerLabel(ly))}</div><div class="nodes">${nodes.map(n => `<span class="nd s-${esc(n.status)}" id="nd_${esc(n.id)}" onclick="openDrawer('${esc(n.id)}')" title="${esc(nstT(n.status))} · ${esc(evT(n.evidence))}">${esc(nodeLabel(n))}${ns[n.id] ? `<span class="dot ${ns[n.id].status}"></span>` : ''}</span>`).join('')}</div></div>`; }).join('');
    return `<div class="stk ${withStatus ? 'open' : ''}"><div class="sh" onclick="this.parentElement.classList.toggle('open')">${esc(stackName(stk))} <span class="cnt">${t('n_nodes', {n: stk.nodes.length})}${withStatus ? t('n_with_status', {n: withStatus}) : ''}</span></div><div class="rows">${rows}</div></div>`;
  }).join('')}</div>`;
  sec.innerHTML = `<h2>${t('stack_h2')} <small>${t('stack_sub')}</small></h2>
    <div class="stacks">${colHtml(A.stacks, A.layers, t('tech_col'))}${colHtml(A.politicalStacks, A.politicalLayers, t('pol_col'))}</div>`;
}

let drawerCharts = [];
function closeDrawer() { document.getElementById('drawer').classList.remove('on'); drawerCharts.forEach(c => c.destroy()); drawerCharts = []; document.querySelectorAll('.nd.hl').forEach(e => e.classList.remove('hl')); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

function findNode(id) {
  for (const stk of [...A.stacks, ...A.politicalStacks]) { const n = stk.nodes.find(x => x.id === id); if (n) return {n, stk}; }
  return null;
}

function openDrawer(id) {
  const f = findNode(id); if (!f) return;
  const {n, stk} = f;
  closeDrawer();
  document.querySelectorAll('.nd.hl').forEach(e => e.classList.remove('hl'));
  const el = document.getElementById('nd_' + id); if (el) el.classList.add('hl');
  const st = (D.node_status || {})[id];
  const thT = key => tv(D.theaters.find(x => x.key === key).title);
  const sig = st ? `<table><tr><th>${t('th_theater')}</th><th>${t('th_signal')}</th><th>${t('th_today')}</th><th>${t('th_baseline')}</th><th>${t('th_ratio')}</th><th>${t('th_status')}</th></tr>${st.signals.map(s => `<tr><td>${esc(thT(s.theater))}</td><td>${esc(LANG === 'en' && s.label_en ? s.label_en : tv(s.label))}</td><td>${esc(tv(s.value ?? ''))}</td><td>${esc(s.base ?? '')}</td><td>${esc(s.ratio ?? '')}</td><td><span class="lv ${s.level}"></span>${LEVEL_T(s.level)}</td></tr>`).join('')}</table>` : `<p class="legend">${t('no_signal')}</p>`;
  const tn = Object.entries(D.theater_nodes || {}).filter(([k, v]) => (v.atlas || []).includes(id));
  const tnHtml = tn.length ? tn.map(([k, v]) => `<span class="chip" onclick="closeDrawer(); selectNode('${v.theater}', ${v.num})">${esc(thT(v.theater))} · ${v.num} ${esc(tv(v.name))}</span>`).join('') : `<span class="u">${t('no_theater_node')}</span>`;
  const cks = (n.chokepoints || []).map(c => { const row = D.chokepoints.find(x => x.atlas_id === c); return row ? `<span class="chip" onclick="closeDrawer(); show('overview'); setTimeout(() => ovMap.setView([${row.lat}, ${row.lon}], 6), 100)"><span class="lv ${({stopped: 'red', narrowed: 'amber', inuse: 'green'})[row.status] || 'gray'}"></span>${esc(nz(row.name))} ${row.ratio ?? ''}</span>` : `<span class="chip">${esc(c)}</span>`; }).join('');
  const body = document.getElementById('drawer-body');
  const sep = LANG === 'en' ? ', ' : '、';
  const layer = [...A.layers, ...A.politicalLayers].find(x => x.id === n.layer);
  const cn = c => { const r = A.countries.find(x => x.code === c); return r ? (LANG === 'en' ? r.name_en : r.name_zh) : ccT(c); };  // atlas-data 的国家表没有的码（如 AU）退到 i18n 的 CC 码表
  const co = c => compT(c, (A.companies.find(x => x.id === c) || {}).name);
  body.innerHTML = `<div class="u">${esc(stackName(stk))} · ${esc(layer ? layerLabel(layer) : n.layer)} · ${t('status_w')} ${esc(nstT(n.status))} · ${t('evidence_w')} <span class="ev">${esc(evT(n.evidence))}</span></div>
    <h2>${esc(nodeLabel(n))} ${st ? `<span class="lv ${st.status}"></span>` : ''}</h2>
    <h4>${t('today_obs')} <span class="ev measured">${t('ev_measured')}</span></h4>${sig}<div id="drawer-charts"></div>
    <h4>${t('theater_nodes_h')}</h4>${tnHtml}
    <h4>${t('channels_h')}</h4>${cks || '<span class="u">—</span>'}
    <h4>${t('archive_h')}</h4><div class="u">${t('countries')}${LANG === 'en' ? ': ' : '：'}${esc((n.countries || []).map(cn).join(sep) || '—')} · ${t('companies')}${LANG === 'en' ? ': ' : '：'}${esc((n.companies || []).map(co).join(sep) || '—')}</div>
    ${n.gap_zh ? `<div class="u verbatim" style="margin-top:4px">${t('gap')}${LANG === 'en' ? ': ' : '：'}${tzh(n.gap_zh, n.gap_en)}</div>` : ''}
    <div style="margin-top:6px"><a href="decomposition/nodes/${esc(id)}.md" target="_blank" title="${esc(t('node_file_title', {id}))}">${t('node_file')}</a> <span class="u">${t('node_file_note')}</span></div>`;
  document.getElementById('drawer').classList.add('on');
  // 小图：咽喉点信号画 400 天序列；tile 信号在战区序列里按标签找
  if (st) {
    const holder = document.getElementById('drawer-charts');
    st.signals.forEach(s => {
      let labels = null, values = null;
      if (s.kind === 'chokepoint') { const row = D.chokepoints.find(x => x.name === s.label); if (row) { labels = row.series.map(x => x[0]); values = row.series.map(x => x[1]); } }
      else if (s.kind === 'tile' || s.kind === 'port') { const T = D.theaters.find(x => x.key === s.theater); const key = s.label.replace(' 港挂靠', '').split('，')[0]; const ser = (T.series || []).find(x => x.label.includes(key) || key.includes(x.label)); if (ser) { labels = T.dates; values = ser.values; } }
      if (!values) return;
      const wrap = document.createElement('div'); wrap.innerHTML = `<div class="u" style="margin-top:6px">${esc(tv(s.label))}</div><canvas></canvas>`; holder.appendChild(wrap);
      const cv = wrap.querySelector('canvas');
      const color = {red: col('--st-stopped'), amber: col('--st-narrowed'), green: col('--st-inuse'), gray: col('--st-unknown')}[s.level];
      drawerCharts.push(new Chart(cv, {type: 'line', data: {labels, datasets: [{data: values, borderColor: color, borderWidth: 1.5, pointRadius: 0, fill: false, tension: 0.2, spanGaps: true}]},
        options: {animation: false, plugins: {legend: {display: false}}, scales: {x: {ticks: {maxTicksLimit: 6, font: {size: 9}}}, y: {ticks: {font: {size: 9}}}}}}));
    });
  }
}
