/* 五段联动视图（chain-view.html 中文、chain-view-en.html 英文，共用本脚本）。
 * 数据只读 data/monitor/five_stage.json（monitor/build_five_stage.py 每天在 build_monitor 之后重建；字段说明见那个文件头）。
 * 行是四条链、列是六格（s1…s5、loop）；点一格：右侧抽屉（760px 以下在表下方）列出这一格全部的数与相连的联动，
 * 表上用 SVG 把相连的格连起来、其余格变淡；再点一次或按 Esc 取消。上方一排按联动类别过滤。
 * 深链：#cell=<链 id>.<格 key> 载入即打开那一格（仪表盘以后用它）。跳回仪表盘的链接都用 target=_top 与仪表盘既有的 #sel= / #cost= 锚。
 * 界面文字走 i18n.js 的 t()；数据文字英文页取同名 *_en 字段。 */
(function () {
  const EN = LANG === 'en';
  const DASH = EN ? './en.html' : './index.html';
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
  const L = (o, k) => (EN ? (o[k + '_en'] ?? o[k]) : o[k]) ?? '';
  const KIND_COLOR = {same_cause: '#0071e3', common_price: '#8e44ad', contrast: '#ff9500', transfer: '#1f9d55', offset: '#00a0a8', escalation: '#ff3b30', same_region: '#6e6e73'};
  const ST_LV = {stopped: 'red', narrowed: 'amber', inuse: 'green'};
  const ST_T = st => ({stopped: t('st_stopped'), narrowed: t('st_narrowed'), inuse: t('st_inuse')}[st] || t('st_nodata'));
  const EV = e => `<span class="ev ev-${esc(e)}">${esc(evT(e))}</span>`;
  const COST = {'analysis/cost-chain-taiwan.html': 'tw', 'analysis/cost-chain-europe.html': 'eu', 'analysis/cost-chain-egypt.html': 'eg'};
  const S = {d: null, sel: null, kind: null, cells: {}, stageName: {}, chainName: {}};
  const embedded = window.self !== window.top;
  if (embedded) document.body.classList.add('embedded');

  /* 分析页与出处：分析页一律回仪表盘的「代价」视图（#cost=tw|eu|eg）或战区视图；本机文件（.md、.csv）不直接给路径，改指它对应的分析页。 */
  function pageHref(p) {
    if (!p) return '';
    if (COST[p]) return `${DASH}#cost=${COST[p]}`;
    const m = /^index\.html(#.*)?$/.exec(p); if (m) return DASH + (m[1] || '');
    return '';
  }
  function srcLink(src) {
    if (!src) return '';
    if (/^https?:\/\//.test(src)) return `<a href="${esc(src)}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${t('src_link')}</a>`;
    let h = pageHref(src);
    if (!h && /台湾|taiwan/i.test(src)) h = `${DASH}#cost=tw`;
    if (!h && /ua_supply_attacks/.test(src)) h = `${DASH}#ukraine`;
    return h ? `<a href="${esc(h)}" target="_top" title="${esc(t('cv_src_page'))}" onclick="event.stopPropagation()">${t('src_link')}</a>` : '';
  }
  /* 文字型的数（未受影响、几乎全毁、未调）在数据里没有 value_en，英文页按 i18n.js 的 DV 表译 */
  const fmtVal = (v, u) => { let s = String(v ?? ''); if (EN && HAS_CJK(s)) s = tv(s); if (!u) return esc(s); return /^[%（(]/.test(u) ? esc(s) + `<small>${esc(u)}</small>` : esc(s) + ` <small>${esc(u)}</small>`; };

  fetch('data/monitor/five_stage.json', {cache: 'no-store'}).then(r => { if (!r.ok) throw new Error(r.status + ' ' + r.statusText); return r.json(); })
    .then(d => { S.d = d; render(); })
    .catch(e => { document.getElementById('cvroot').innerHTML = `<p class="legend" style="padding:20px">${esc(t('cv_load_fail', {e: e.message}))}</p>`; });

  function render() {
    const t0 = performance.now();
    const d = S.d;
    document.title = 'Stack Atlas · ' + t('cv_title');
    document.getElementById('cvdate').textContent = t('cv_date', {d: d.date});
    d.stages.forEach(s => { S.stageName[s.key] = EN ? s.en : s.zh; });
    d.chains.forEach(c => { S.chainName[c.id] = L(c, 'title'); });
    const linksOf = id => d.links.filter(l => l.from.join('.') === id || l.to.join('.') === id);
    const kinds = Object.keys(d.kinds);
    const kindName = k => (d.kinds[k] || [k, k])[EN ? 1 : 0];
    const legend = `<div class="cv-legends"><span class="grp">${t('cv_legend')}${['measured', 'verified', 'source-linked', 'needs-review'].map(EV).join('')}</span>
      <span class="grp">${t('cv_status_legend')}<i class="stl done"></i>${t('cv_st_done')}<i class="stl partial"></i>${t('cv_st_partial')}<i class="stl empty"></i>${t('cv_st_empty')}</span></div>`;
    const filter = `<div class="cv-filter" id="cvfilter">${t('cv_filter')}<button data-k="" class="on">${t('cv_filter_all')}</button>${kinds.map(k => `<button data-k="${esc(k)}"><i style="border-color:${KIND_COLOR[k] || '#888'}"></i>${esc(kindName(k))}</button>`).join('')}</div>`;
    const head = `<div class="cv-row cv-head"><div class="cv-lead">${t('cv_chain_col')}</div>${d.stages.map(s => `<div class="cv-sh"><b>${esc(EN ? s.en : s.zh)}</b><small>${esc(L(s, 'q'))}</small></div>`).join('')}</div>`;
    const rows = d.chains.map(c => {
      const state = EN ? (d.states[c.state] || c.state) : c.state;
      const tp = c.turning_point || {};
      const lead = `<div class="cv-lead"><div class="ct">${esc(L(c, 'title'))}</div><span class="stt" title="${esc(t('cv_state'))}">${esc(state)}</span>
        <div class="row2">${t('cv_now_at')}${EN ? ': ' : '：'}<b>${esc(S.stageName[c.current_stage] || '')}</b></div>
        <div class="tp"><b>${t('cv_turning')}${EN ? ': ' : '：'}</b>${esc(L(tp, 'text'))} ${tp.evidence ? EV(tp.evidence) : ''} ${srcLink(tp.source)}</div>
        ${pageHref(c.page) ? `<a class="go" href="${esc(pageHref(c.page))}" target="_top">${t('cv_see_analysis')}</a>` : ''}</div>`;
      return `<div class="cv-row" data-chain="${esc(c.id)}">${lead}${d.stages.map(s => cellHtml(c, s, linksOf(c.id + '.' + s.key).length)).join('')}</div>`;
    }).join('');
    document.getElementById('cvroot').innerHTML = `<p class="cv-note">${esc(L(d, 'note'))}</p>${legend}${filter}<p class="cv-hint">${t('cv_hint')}</p>
      <div class="cv-main" id="cvmain"><div class="cv-scroll"><div class="cv-table" id="cvtable">${head}${rows}<svg class="cv-links" id="cvsvg"></svg></div></div>
      <aside class="cv-drawer" id="cvdrawer" aria-live="polite"></aside></div>
      <div class="cv-foot"><a href="./transmission${EN ? '-en' : ''}.html">${t('cv_old')}</a></div>`;
    document.querySelectorAll('.cv-cell').forEach(el => {
      el.addEventListener('click', () => toggle(el.dataset.cell));
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(el.dataset.cell); } });
    });
    document.querySelectorAll('#cvfilter button').forEach(b => b.addEventListener('click', () => setKind(b.dataset.k || null)));
    const lang = document.getElementById('cvlang'); if (lang) lang.href = lang.getAttribute('href').split('#')[0] + (location.hash || '');
    if (window.ResizeObserver) new ResizeObserver(() => drawLinks()).observe(document.getElementById('cvtable'));
    window.addEventListener('resize', drawLinks);
    fromHash();
    window.__cvRenderMs = Math.round(performance.now() - t0);
  }

  function cellHtml(c, s, nLinks) {
    const x = (c.cells || {})[s.key] || {status: 'empty', figures: []};
    const id = c.id + '.' + s.key;
    S.cells[id] = {c, s, x};
    const figs = (x.figures || []).slice(0, 2).map(f => `<div class="fg"><span class="lb">${esc(L(f, 'label'))}</span><span class="vl">${fmtVal(EN && f.value_en != null ? f.value_en : f.value, L(f, 'unit'))}</span></div>`).join('');
    const more = (x.figures || []).length > 2 ? `<div class="more">${esc(x.figures.length === 3 ? t('cv_more_figs1') : t('cv_more_figs', {n: x.figures.length - 2}))}</div>` : '';
    const gap = x.status === 'empty' || (!x.figures || !x.figures.length) ? (x.gap || x.gap_en ? `<div class="gap"><b>${t('cv_gap')}${EN ? ': ' : '：'}</b>${esc(L(x, 'gap'))}</div>` : '') : '';
    return `<div class="cv-cell st-${esc(x.status)}${c.current_stage === s.key ? ' cur' : ''}" data-cell="${esc(id)}" tabindex="0" role="button" aria-label="${esc(S.chainName[c.id] + ' · ' + S.stageName[s.key])}">
      <div class="stn">${esc(S.stageName[s.key])}</div>${nLinks ? `<span class="lk">${esc(nLinks === 1 ? t('cv_links_1') : t('cv_links_n', {n: nLinks}))}</span>` : ''}
      <div class="hd">${esc(L(x, 'head'))}</div>${figs}${more}${gap}${liveHtml(x)}${attacksHtml(x)}</div>`;
  }

  function liveHtml(x) {
    if (!x.live || !x.live.length) return '';
    const items = x.live.map(n => { const r = (S.d.live || {})[n]; if (!r) return '';
      const nm = EN ? n : (r.name_zh || n);
      return `<a href="${DASH}#sel=chokepoint:${encodeURIComponent(r.atlas_id)}" target="_top" title="${esc(t('cv_live_go'))}" onclick="event.stopPropagation()" data-ck="${esc(r.atlas_id)}"><span class="lv ${ST_LV[r.status] || 'gray'}"></span>${esc(nm)} · <span class="r">${esc(r.ratio ?? '—')}</span> · ${esc(ST_T(r.status))}<br><span style="color:var(--ink3)">${t('cv_live_ratio')} · ${t('cv_live_date')} ${esc(r.last_date || '')}</span></a>`; }).join('');
    return `<div class="cv-live"><div class="lh">${t('cv_live_h')} ${EV('measured')}</div>${items}</div>`;
  }

  function barsSvg(monthly) {
    const W = 210, H = 54, B = 12, n = monthly.length, mx = Math.max(1, ...monthly.map(m => m.n));
    const bw = W / n;
    const bars = monthly.map((m, i) => { const h = (H - B - 4) * m.n / mx; return `<rect x="${(i * bw + 0.8).toFixed(1)}" y="${(H - B - h).toFixed(1)}" width="${(bw - 1.6).toFixed(1)}" height="${Math.max(h, m.n ? 1 : 0.6).toFixed(1)}" fill="${m.n ? '#c0392b' : '#d8d8dc'}"><title>${esc(m.month)}: ${m.n}</title></rect>`; }).join('');
    const ticks = monthly.map((m, i) => (m.month.endsWith('-01') ? `<text x="${(i * bw + bw / 2).toFixed(1)}" y="${H - 2}" font-size="8" fill="#86868b" text-anchor="middle">${esc(m.month.slice(0, 4))}</text>` : '')).join('');
    const peak = monthly.reduce((a, m, i) => (m.n > a.n ? {n: m.n, i} : a), {n: 0, i: 0});
    const lab = peak.n ? `<text x="${(peak.i * bw + bw / 2).toFixed(1)}" y="${(H - B - (H - B - 4) - 1).toFixed(1)}" font-size="8" fill="#7f1d1d" text-anchor="middle">${peak.n}</text>` : '';
    return `<svg viewBox="0 0 ${W} ${H}" role="img">${bars}${ticks}${lab}</svg>`;
  }
  function dateTxt(e) {
    if (e.date_precision === 'month') return esc(e.date.slice(0, 7)) + esc(t('date_month_note'));
    if (e.date_precision === 'year') return esc(e.date.slice(0, 4));
    if (e.date_precision === 'report') return esc(e.date) + esc(t('date_report_note'));
    return esc(e.date);
  }
  function attacksHtml(x) {
    if (!x.live_attacks || !S.d.attacks) return '';
    const a = S.d.attacks, recent = a.events.filter(e => e.scope === 'A').slice(0, 3);
    const list = recent.map(e => `<div>${dateTxt(e)} · ${esc(L(e, 'place'))} · ${esc(L(e, 'target'))} <span class="tier t${e.tier}">${esc(L(e, 'attribution'))}</span></div>`).join('');
    return `<div class="cv-atk"><div class="lh" style="font-size:11px;color:var(--ink3)">${t('cv_attacks_h')}</div>${barsSvg(a.summary.monthly_A)}
      <div class="caveat">${t('sa_trend_note')}</div><div class="ev-list"><div style="border:0;color:var(--ink3)">${t('cv_attacks_recent')}</div>${list}</div></div>`;
  }

  /* ---------- 联动 ---------- */
  function toggle(id) { if (S.sel === id) select(null); else select(id); }
  function setKind(k) {
    S.kind = k;
    document.querySelectorAll('#cvfilter button').forEach(b => b.classList.toggle('on', (b.dataset.k || null) === k));
    apply();
    if (S.sel) openDrawer(S.sel);
  }
  function select(id) {
    if (id && !S.cells[id]) id = null;
    S.sel = id;
    try { history.replaceState(null, '', id ? '#cell=' + id : location.pathname + location.search); } catch (e) {}
    const lang = document.getElementById('cvlang'); if (lang) lang.href = lang.getAttribute('href').split('#')[0] + (id ? '#cell=' + id : '');
    apply();
    if (id) openDrawer(id); else closeDrawer();
  }
  function activeLinks() {
    const d = S.d; let ls = d.links;
    if (S.sel) ls = ls.filter(l => l.from.join('.') === S.sel || l.to.join('.') === S.sel);
    if (S.kind) ls = ls.filter(l => l.kind === S.kind);
    return (S.sel || S.kind) ? ls : [];
  }
  function apply() {
    const ls = activeLinks();
    const hl = new Set(); ls.forEach(l => { hl.add(l.from.join('.')); hl.add(l.to.join('.')); });
    document.querySelectorAll('.cv-cell').forEach(el => { el.classList.toggle('sel', el.dataset.cell === S.sel); el.classList.toggle('hl', hl.has(el.dataset.cell) && el.dataset.cell !== S.sel); });
    document.getElementById('cvtable').classList.toggle('focus', !!(S.sel || S.kind));
    document.getElementById('cvmain').classList.toggle('open', !!S.sel);
    drawLinks();
  }
  function drawLinks() {
    const svg = document.getElementById('cvsvg'), tb = document.getElementById('cvtable');
    if (!svg || !tb) return;
    const ls = activeLinks();
    svg.setAttribute('width', tb.scrollWidth); svg.setAttribute('height', tb.scrollHeight);
    if (!ls.length || getComputedStyle(svg).display === 'none') { svg.innerHTML = ''; return; }
    const R = tb.getBoundingClientRect();
    const box = id => { const el = tb.querySelector(`.cv-cell[data-cell="${CSS.escape(id)}"]`); if (!el) return null; const r = el.getBoundingClientRect(); return {x: r.left - R.left, y: r.top - R.top, w: r.width, h: r.height, cx: r.left - R.left + r.width / 2, cy: r.top - R.top + r.height / 2}; };
    const marks = Object.entries(KIND_COLOR).map(([k, c]) => `<marker id="ar_${k}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${c}" stroke="none"/></marker>`).join('');
    const seen = {};
    const paths = ls.map(l => {
      const a = box(l.from.join('.')), b = box(l.to.join('.')); if (!a || !b) return '';
      const pair = [l.from.join('.'), l.to.join('.')].sort().join('|'); const nth = (seen[pair] = (seen[pair] || 0) + 1) - 1;
      const col = KIND_COLOR[l.kind] || '#888';
      let p1, p2, c1, c2;
      const sameRow = Math.abs(a.cy - b.cy) < 4, sameCol = Math.abs(a.cx - b.cx) < 4;
      if (sameRow) { const up = -34 - nth * 14; p1 = [a.cx, a.y]; p2 = [b.cx, b.y]; c1 = [a.cx, a.y + up]; c2 = [b.cx, b.y + up]; }
      else if (sameCol) { const dn = b.cy > a.cy; const off = 36 + nth * 16; p1 = [a.x + a.w, a.cy + (dn ? 8 : -8)]; p2 = [b.x + b.w, b.cy]; c1 = [a.x + a.w + off, p1[1]]; c2 = [b.x + b.w + off, b.cy]; }
      else { const dn = b.cy > a.cy; const dx = b.cx > a.cx; p1 = [a.cx + (dx ? a.w * 0.25 : -a.w * 0.25), dn ? a.y + a.h : a.y]; p2 = [b.cx + (dx ? -b.w * 0.25 : b.w * 0.25), dn ? b.y : b.y + b.h];
        const my = (p1[1] + p2[1]) / 2; c1 = [p1[0], my + nth * 10]; c2 = [p2[0], my + nth * 10]; }
      const dpath = `M${p1[0].toFixed(1)},${p1[1].toFixed(1)} C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
      return `<path d="${dpath}" stroke="${col}" class="${l.evidence === 'needs-review' ? 'nr' : ''}" marker-end="url(#ar_${l.kind})" data-kind="${esc(l.kind)}"/><circle cx="${p1[0].toFixed(1)}" cy="${p1[1].toFixed(1)}" r="4" fill="${col}"/>`;
    }).join('');
    svg.innerHTML = `<defs>${marks}</defs>${paths}`;
  }

  function openDrawer(id) {
    const {c, s, x} = S.cells[id]; const d = S.d;
    const kindName = k => (d.kinds[k] || [k, k])[EN ? 1 : 0];
    const cellName = cid => { const [ch, st] = cid.split('.'); return `${S.chainName[ch] || ch} · ${S.stageName[st] || st}`; };
    const figs = (x.figures || []).map(f => `<div class="f"><div>${esc(L(f, 'label'))}</div><div><span class="v">${fmtVal(EN && f.value_en != null ? f.value_en : f.value, L(f, 'unit'))}</span> ${EV(f.evidence)} ${srcLink(f.source)}</div>${L(f, 'note') ? `<div class="n">${esc(L(f, 'note'))}</div>` : ''}</div>`).join('');
    const live = (x.live || []).map(n => { const r = (d.live || {})[n]; if (!r || !r.fig) return ''; const f = r.fig;
      return `<div class="f"><div>${esc(L(f, 'label'))}</div><div><span class="v">${fmtVal(EN && f.value_en != null ? f.value_en : f.value, L(f, 'unit'))}</span> ${EV(f.evidence)} ${srcLink(f.source)} · <a href="${DASH}#sel=chokepoint:${encodeURIComponent(r.atlas_id)}" target="_top">${t('cv_live_go')}</a></div><div class="n">${esc(L(f, 'note'))}</div></div>`; }).join('');
    const atk = x.live_attacks && d.attacks ? d.attacks.events.filter(e => e.scope === 'A').slice(0, 3).map(e => `<div class="f"><div>${dateTxt(e)} · ${esc(L(e, 'country'))} · ${esc(L(e, 'place'))}</div><div>${esc(L(e, 'target'))} · ${esc(L(e, 'act'))} · ${esc(L(e, 'outcome'))}</div><div><span class="tier t${e.tier}">${esc(L(e, 'attribution'))}</span> ${srcLink(e.source_url)}</div></div>`).join('') : '';
    const rel = d.links.filter(l => l.from.join('.') === id || l.to.join('.') === id);
    const links = rel.length ? rel.map(l => { const other = l.from.join('.') === id ? l.to.join('.') : l.from.join('.');
      return `<div class="l${S.kind && l.kind !== S.kind ? ' off' : ''}"><span class="k"><i style="border-color:${KIND_COLOR[l.kind] || '#888'}"></i>${esc(kindName(l.kind))}</span> ${EV(l.evidence)}
        <div class="ends">${esc(cellName(l.from.join('.')))} → ${esc(cellName(l.to.join('.')))} · <a data-go="${esc(other)}" title="${esc(t('cv_goto_cell'))}">${t('cv_goto_cell')}</a></div><div>${esc(EN ? l.en : l.zh)}</div></div>`; }).join('')
      : `<p class="legend">${t('cv_no_links')}</p>`;
    const kindNote = S.kind && rel.length && !rel.some(l => l.kind === S.kind) ? `<p class="legend">${esc(t('cv_no_links_kind', {k: kindName(S.kind)}))}</p>` : '';
    const dr = document.getElementById('cvdrawer');
    dr.innerHTML = `<button class="x" id="cvclose" title="${esc(t('cv_close'))}">×</button>
      <div class="sub">${esc(L(c, 'title'))}</div><h2>${esc(S.stageName[s.key])}</h2><div class="sub">${esc(L(s, 'q'))}</div>
      <p class="summary"><b>${esc(L(x, 'head'))}</b></p>
      ${x.gap || x.gap_en ? `<p class="summary">${t('cv_gap')}${EN ? ': ' : '：'}${esc(L(x, 'gap'))}</p>` : ''}
      <h4>${t('cv_drawer_figs')}</h4>${figs || live || atk ? figs + live + atk : `<p class="legend">${t('cv_no_figs')}</p>`}
      <h4>${t('cv_drawer_links')}</h4>${kindNote}${links}
      <p class="summary" style="margin-top:14px">${esc(L(c, 'summary'))}</p>`;
    document.getElementById('cvclose').onclick = () => select(null);
    dr.querySelectorAll('a[data-go]').forEach(a => { a.href = '#cell=' + a.dataset.go; a.onclick = e => { e.preventDefault(); select(a.dataset.go); scrollToCell(a.dataset.go); }; });
    if (window.matchMedia('(max-width:760px)').matches) setTimeout(() => dr.scrollIntoView({behavior: 'smooth', block: 'start'}), 30);
  }
  function scrollToCell(id) { const el = document.querySelector(`.cv-cell[data-cell="${CSS.escape(id)}"]`); if (el) el.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'nearest'}); }
  function closeDrawer() { const dr = document.getElementById('cvdrawer'); if (dr) dr.innerHTML = ''; }
  function fromHash() {
    const m = /^#cell=([^&]+)/.exec(location.hash || '');
    const id = m ? decodeURIComponent(m[1]) : null;
    if (id && S.cells[id]) { select(id); setTimeout(() => scrollToCell(id), 60); }
  }
  window.addEventListener('hashchange', () => { if (S.d) { const m = /^#cell=([^&]+)/.exec(location.hash || ''); const id = m ? decodeURIComponent(m[1]) : null; if (id !== S.sel) select(id); } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && S.sel) select(null); else if (e.key === 'Escape' && S.kind) setKind(null); });
  window.__cv = S;  // 验收脚本读它
})();
