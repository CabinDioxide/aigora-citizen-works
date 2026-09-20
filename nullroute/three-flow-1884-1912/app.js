/* 英国铁路三流循环 1884–1912：比值面板、制度日历、折点与双向对照。
   数据只从 data.js（window.TF）来；本文件不含任何手抄的数字。
   语言由 <html lang> 决定：zh-CN 读中文标签，en 读英文标签。 */
(function () {
  'use strict';
  var D = window.TF;
  var LANG = (document.documentElement.lang || 'zh').slice(0, 2) === 'en' ? 'en' : 'zh';
  var T = LANG === 'zh' ? {
    title: '英国铁路三流循环 1884 至 1912 年：比值面板、制度日历与双向对照',
    v1: '一、比值面板', v2: '二、制度日历', v3: '三、折点与双向对照',
    family: '比值族', ratio: '比值', companies: '公司', national: '全国汇总层（不是公司）',
    single: '去掉单源行', showBreaks: '标出折点年', setting: '折点判据（最短段 × 罚项）',
    selAll: '全选公司', selNone: '清空', selMajor: '只留六家大公司',
    yearAxis: '年份', unit: '单位', value: '值', numerator: '分子', denominator: '分母',
    numPage: '分子页码', denPage: '分母页码', tier: '档位', layer: '层', denKind: '分母类型',
    singleRow: '单源行（分子或分母只有一个来源）', coef: '系数', printed: '印刷比值（原页直接印出，无分子分母格）',
    breakAt: '折点', meanBefore: '折前均值', meanAfter: '折后均值', delta: '变化', deltaNorm: '相对变化',
    span: '序列跨度', nobs: '观测数', source: '来源段', direction: '方向', setting2: '判据',
    nSingle: '序列中单源行数', ruleNote: '当前高亮的规则', clear: '清除高亮', expects: '预期动的族',
    effLine: '生效年（实线）', passLine: '通过年（虚线）', notInAxis: '生效年在面板窗口之外，图上不画竖线',
    nodata: '这个比值在所选公司里没有数据；换一家公司或换一个比值。',
    missing: '没有点的年份就是面板里没有这一格，不插值。',
    cal: '日历', rid: '编号', name: '名称', passed: '通过', effective: '生效', srcKind: '出处档',
    expected: '预期动的比值族与方向', click: '点一行，在比值面板里高亮它预期的族并画竖线',
    panelBand: '面板窗口 1884–1912', unbuilt: '（面板未建这一族）',
    cands: '候选事件', pairs: '双向对照主表', gapRules: '没配上的规则', gapFolds: '无规则可对的折点',
    rank: '序', year: '年', share: '覆盖面', effect: '效应', main: '主事件', evDir: '事件方向',
    rule: '规则', verdict: '判词', matchDir: '方向', kindCol: '类别', window: '窗口', families: '预期族',
    same: '同族同向', yearOnly: '只对上年份', rev: '同族反向', trace: '有痕',
    yes: '是', no: '否', up: '上行', down: '下行',
    lswitch: 'English', lhref: 'en.html',
    legendPoint: '实心圆：分子分母都不是单源；空心菱形：单源行。折点年用三角标出（上行朝上、下行朝下）。',
    chartTitle: function (r, f) { return f + '：' + r; },
    footer: '数据生成',
    checkOk: '检查层：'
  } : {
    title: 'British railways, the three-flow circuit 1884–1912: ratio panel, institutional calendar and two-way matching',
    v1: '1. Ratio panel', v2: '2. Institutional calendar', v3: '3. Folds and two-way matching',
    family: 'Ratio family', ratio: 'Ratio', companies: 'Companies', national: 'National totals (not companies)',
    single: 'Drop single-source rows', showBreaks: 'Mark fold years', setting: 'Fold criterion (min segment × penalty)',
    selAll: 'Select all', selNone: 'Clear', selMajor: 'Six large companies only',
    yearAxis: 'Year', unit: 'Unit', value: 'Value', numerator: 'Numerator', denominator: 'Denominator',
    numPage: 'Numerator page', denPage: 'Denominator page', tier: 'Tier', layer: 'Layer', denKind: 'Denominator kind',
    singleRow: 'Single-source row (numerator or denominator has one source only)', coef: 'Coefficient', printed: 'Printed ratio (as printed; no numerator/denominator cells)',
    breakAt: 'Fold', meanBefore: 'Mean before', meanAfter: 'Mean after', delta: 'Change', deltaNorm: 'Relative change',
    span: 'Series span', nobs: 'Observations', source: 'Source segment', direction: 'Direction', setting2: 'Criterion',
    nSingle: 'Single-source rows in series', ruleNote: 'Highlighted rule', clear: 'Clear', expects: 'Expected families',
    effLine: 'effective year (solid)', passLine: 'passing year (dashed)', notInAxis: 'effective year outside the panel window; no vertical line drawn',
    nodata: 'No data for this ratio in the selected companies; choose another company or ratio.',
    missing: 'A year without a point is a cell missing from the panel; nothing is interpolated.',
    cal: 'Calendar', rid: 'Code', name: 'Name', passed: 'Passed', effective: 'Effective', srcKind: 'Source class',
    expected: 'Expected families and direction', click: 'Click a row to highlight its expected families in the ratio panel and draw vertical lines',
    panelBand: 'Panel window 1884–1912', unbuilt: '(family not built in the panel)',
    cands: 'Candidate events', pairs: 'Two-way matching, main table', gapRules: 'Rules not matched', gapFolds: 'Folds with no rule to match',
    rank: 'Rank', year: 'Year', share: 'Share', effect: 'Effect', main: 'Main event', evDir: 'Event direction',
    rule: 'Rule', verdict: 'Verdict', matchDir: 'Direction', kindCol: 'Class', window: 'Window', families: 'Expected families',
    same: 'same family, same direction', yearOnly: 'year only', rev: 'same family, opposite direction', trace: 'trace found',
    yes: 'yes', no: 'no', up: 'up', down: 'down',
    lswitch: '中文', lhref: 'index.html',
    legendPoint: 'Filled circle: neither numerator nor denominator is single-source; hollow diamond: single-source row. Fold years are marked with triangles (up or down).',
    chartTitle: function (r, f) { return f + ': ' + r; },
    footer: 'Data built',
    checkOk: 'Check layer: '
  };
  var L = function (o) { return o ? (o[LANG] || o.zh || '') : ''; };
  var PL = LANG === 'zh' ? '（' : ' (', PR = LANG === 'zh' ? '）' : ')';

  // ------------------------------------------------------------ 索引
  var C = D.row_cols, RC = {}; C.forEach(function (k, i) { RC[k] = i; });
  var B = D.break_cols, BC = {}; B.forEach(function (k, i) { BC[k] = i; });
  var famById = {}; D.families.forEach(function (f) { famById[f.id] = f; });
  var ratioById = {}; D.ratios.forEach(function (r) { ratioById[r.id] = r; });
  var ratioIdx = {}; D.ratios.forEach(function (r, i) { ratioIdx[r.id] = i; });
  var calById = {}; D.calendar.forEach(function (c) { calById[c.rid] = c; });
  var IDX = D.idx;
  var fmt = function (v, d) { if (v === null || v === undefined) return '—'; d = d === undefined ? 2 : d; return Number(v).toLocaleString(LANG === 'zh' ? 'zh-CN' : 'en-GB', { maximumFractionDigits: d, minimumFractionDigits: 0 }); };
  var fmtInt = function (v) { return v === null || v === undefined ? '—' : Number(v).toLocaleString('en-GB'); };
  var famName = function (id) { return id in famById ? L(famById[id]) : (LANG === 'zh' ? id : id); };
  var famNameAny = function (id) { if (id in famById) return L(famById[id]); return LANG === 'zh' ? id : (D.calendar.some(function (c) { return c.unbuilt.indexOf(id) >= 0; }) ? 'Capital per route mile' : id); };
  var dirName = function (d) { return d === 'up' ? T.up : d === 'down' ? T.down : d; };
  var unitName = function (u) { return L(IDX.units[u]); };
  var verdictClass = function (v) { return v.indexOf('同向') >= 0 ? 'same' : v.indexOf('反向') >= 0 ? 'rev' : v === '有痕' ? 'trace' : 'year'; };
  var verdictName = function (v) { return L(IDX.verdicts[v]); };

  // 行按 (比值, 公司) 分桶
  var byRatioCo = {};
  D.rows.forEach(function (r) {
    var k = r[RC.ratio] + '|' + r[RC.company];
    (byRatioCo[k] = byRatioCo[k] || []).push(r);
  });
  Object.keys(byRatioCo).forEach(function (k) { byRatioCo[k].sort(function (a, b) { return a[RC.year] - b[RC.year]; }); });
  var breaksByRatioCo = {};
  D.breaks.forEach(function (b) {
    var k = b[BC.ratio] + '|' + b[BC.company];
    (breaksByRatioCo[k] = breaksByRatioCo[k] || []).push(b);
  });

  var PALETTE = ['#3f4a52', '#8d8358', '#6f7f74', '#8a5a3c', '#5d7d88', '#8a7d98', '#9c7358', '#4f7a5a', '#a0522d', '#5b6b8f',
    '#7a6f3f', '#8d3a2a', '#556b2f', '#7b5e7b', '#2f6f6f', '#b08968', '#6b6152', '#3d6b9a', '#9a6a1a', '#4d7f5e',
    '#7d4e57', '#5c7a9a', '#8b7355', '#4a6d7c', '#6d6d6d', '#a3785a', '#3a5a40'];
  var coColor = function (ci) { return PALETTE[ci % PALETTE.length]; };

  // ------------------------------------------------------------ 状态
  var S = {
    family: D.facts.event1893.family,
    ratio: null,
    companies: {},
    dropSingle: false,
    showBreaks: true,
    setting: 0,
    rule: null
  };
  var MAJOR = ['great-western', 'midland', 'london-and-north-western', 'north-eastern', 'caledonian', 'great-northern'];
  var coIndex = {}; D.companies.forEach(function (c, i) { coIndex[c.id] = i; });
  MAJOR.forEach(function (id) { if (id in coIndex) S.companies[coIndex[id]] = true; });
  S.ratio = famById[S.family].ratios[0];

  // ------------------------------------------------------------ 工具
  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, attrs, kids) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { if (k === 'text') e.textContent = attrs[k]; else if (k === 'html') e.innerHTML = attrs[k]; else e.setAttribute(k, attrs[k]); });
    (kids || []).forEach(function (k) { if (k) e.appendChild(typeof k === 'string' ? document.createTextNode(k) : k); });
    return e;
  };
  var svgNS = 'http://www.w3.org/2000/svg';
  var sv = function (tag, attrs, text) {
    var e = document.createElementNS(svgNS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (text !== undefined) e.textContent = text;
    return e;
  };
  var tip = $('tip');
  function showTip(html, ev) {
    tip.innerHTML = html; tip.style.display = 'block';
    var x = ev.clientX + 14, y = ev.clientY + 14;
    var w = tip.offsetWidth, h = tip.offsetHeight;
    if (x + w > window.innerWidth - 8) x = Math.max(4, ev.clientX - w - 14);
    if (y + h > window.innerHeight - 8) y = Math.max(4, ev.clientY - h - 14);
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
  }
  function hideTip() { tip.style.display = 'none'; }
  function niceTicks(lo, hi, n) {
    if (hi === lo) { hi = lo + 1; lo = lo - 1; }
    var span = hi - lo, step = Math.pow(10, Math.floor(Math.log10(span / n)));
    var err = span / n / step;
    step *= err >= 7.5 ? 10 : err >= 3.5 ? 5 : err >= 1.5 ? 2 : 1;
    var t = [], v = Math.ceil(lo / step) * step;
    for (; v <= hi + 1e-9; v += step) t.push(+v.toFixed(10));
    return t;
  }

  // ------------------------------------------------------------ 头部文字（数字全部来自 D.facts）
  function intro() {
    var F = D.facts, e = F.event1893, V = F.verdict_a;
    var ridList = e.candidates.map(function (c) { return c.rid; }).join(LANG === 'zh' ? '、' : ', ');
    var same = V['对上（同族同向）'] || 0, year = V['只对上年份（该族不在这条规则的预期内）'] || 0, rev = V['对上（同族反向）'] || 0;
    if (LANG === 'zh') {
      return '比值面板 ' + fmtInt(F.n_rows) + ' 行、' + F.n_families + ' 个比值族、' + F.year0() + ' 至 ' + F.year1() + ' 年逐公司；折点表 ' + fmtInt(F.n_breaks) + ' 条，聚成候选事件 ' + F.n_candidates + ' 个、主事件 ' + F.n_main_events + ' 个；制度日历 ' + F.n_calendar + ' 条。' +
        '甲向（从折点找规则）配上 ' + F.n_pairs_a + ' 条：同族同向 ' + same + '、只对上年份 ' + year + '、同族反向 ' + rev + '；另有 ' + F.n_gap_folds + ' 个折点在日历里找不到可对的条目。乙向（从规则找折点）配上 ' + F.n_pairs_b + ' 条，没配上的 ' + F.n_gap_rules + ' 条。' +
        '<b>一个折点常常同时对得上好几条规则</b>：' + F.n_events_with_candidates + ' 个有候选的事件里 ' + F.n_events_multi + ' 个候选多于一条。最要紧的一个是 ' + e.year + ' 年' + famName(e.family) + '的' + dirName(e.direction) + '折点：' + e.candidates.length + ' 条规则都对得上（' + ridList + '），其中 ' + e.n_same_dir + ' 条同族同向，' + e.n_year_only + ' 条（' + e.candidates.filter(function (c) { return c.verdict.indexOf('只对上') === 0; }).map(function (c) { return c.rid; }).join('、') + '）只对上年份；主表里只留了 ' + e.in_main_table.join('、') + '。' +
        '折点落在哪一年是能定的，但这个折点是哪条规则造成的，面板这一侧分辨不了，配对判据的分辨力不够。要分辨 1893 说与 1899 说，要测的量得往前挪一步：从折点年份改成 ' + e.year + ' 年之后几年的形状，是回补还是走平。';
    }
    return 'The ratio panel has ' + fmtInt(F.n_rows) + ' rows, ' + F.n_families + ' ratio families, company by company for ' + F.year0() + '–' + F.year1() + '; the fold table has ' + fmtInt(F.n_breaks) + ' entries, aggregated into ' + F.n_candidates + ' candidate events and ' + F.n_main_events + ' main events; the institutional calendar has ' + F.n_calendar + ' entries. ' +
      'Direction A (from folds to rules) matched ' + F.n_pairs_a + ' pairs: ' + same + ' same family and direction, ' + year + ' year only, ' + rev + ' same family opposite direction; ' + F.n_gap_folds + ' further folds have no calendar entry to match. Direction B (from rules to folds) matched ' + F.n_pairs_b + '; ' + F.n_gap_rules + ' rules were not matched. ' +
      '<b>One fold often matches several rules at once</b>: of the ' + F.n_events_with_candidates + ' events with candidates, ' + F.n_events_multi + ' have more than one. The one that matters most is the ' + e.year + ' ' + dirName(e.direction) + ' fold in ' + famName(e.family).toLowerCase() + ': all ' + e.candidates.length + ' rules match it (' + ridList + '), ' + e.n_same_dir + ' of them same family and direction and ' + e.n_year_only + ' (' + e.candidates.filter(function (c) { return c.verdict.indexOf('只对上') === 0; }).map(function (c) { return c.rid; }).join(', ') + ') by year only; the main table keeps only ' + e.in_main_table.join(', ') + '. ' +
      'The year of a fold can be fixed, but which rule produced it cannot be told from the panel side; the matching criterion does not have that resolution. To separate the 1893 reading from the 1899 reading, the quantity to measure has to move one step forward: from the year of the fold to the shape of the few years after ' + e.year + ', whether the level recovers or stays flat.';
  }
  D.facts.year0 = function () { return D.meta.year0; };
  D.facts.year1 = function () { return D.meta.year1; };

  function scalesStrip() {
    var F = D.facts, s = $('scales');
    var items = LANG === 'zh' ? [
      ['显示的公司', F.n_companies_shown + ' 个键（含 ' + D.companies.filter(function (c) { return c.national; }).length + ' 个全国汇总层）'],
      ['进图的行', fmtInt(F.n_rows_shown) + ' ／ ' + fmtInt(F.n_rows)],
      ['单源行', fmtInt(F.n_single_shown)],
      ['不进选择器的机读键', F.n_hidden_keys + ' 个键、' + F.n_hidden_rows + ' 行、' + F.n_breaks_hidden + ' 条折点（每键少于 ' + D.meta.min_rows_for_picker + ' 行，或裁定为短键）'],
      ['1885 至 1887 年', '进图的行各 ' + F.per_year_shown['1885'] + '、' + F.per_year_shown['1886'] + '、' + F.per_year_shown['1887'] + ' 行']
    ] : [
      ['Keys shown', F.n_companies_shown + ' (incl. ' + D.companies.filter(function (c) { return c.national; }).length + ' national totals)'],
      ['Rows charted', fmtInt(F.n_rows_shown) + ' of ' + fmtInt(F.n_rows)],
      ['Single-source rows', fmtInt(F.n_single_shown)],
      ['Machine-read keys left out of the picker', F.n_hidden_keys + ' keys, ' + F.n_hidden_rows + ' rows, ' + F.n_breaks_hidden + ' folds (fewer than ' + D.meta.min_rows_for_picker + ' rows each, or ruled a truncated key)'],
      ['Years 1885–1887', 'rows charted: ' + F.per_year_shown['1885'] + ', ' + F.per_year_shown['1886'] + ', ' + F.per_year_shown['1887']]
    ];
    items.forEach(function (it) { s.appendChild(el('span', null, [it[0] + ' ', el('b', { text: it[1] })])); });
  }

  // ------------------------------------------------------------ 视图一：控件
  function buildControls() {
    var fs = $('family');
    D.families.forEach(function (f) { fs.appendChild(el('option', { value: f.id, text: L(f) })); });
    fs.value = S.family;
    fs.addEventListener('change', function () { S.family = fs.value; S.ratio = famById[S.family].ratios[0]; fillRatios(); render(); });
    fillRatios();
    $('ratio').addEventListener('change', function () { S.ratio = $('ratio').value; render(); });
    var box = $('cochecks');
    var addGroup = function (label, list) {
      box.appendChild(el('span', { 'class': 'grp', text: label }));
      list.forEach(function (c) {
        var i = coIndex[c.id];
        var cb = el('input', { type: 'checkbox', 'data-co': i });
        cb.checked = !!S.companies[i];
        cb.addEventListener('change', function () { S.companies[i] = cb.checked; render(); });
        box.appendChild(el('label', null, [cb, el('span', { 'class': 'sw', style: 'background:' + coColor(i) }), L(c)]));
      });
    };
    addGroup(T.companies, D.companies.filter(function (c) { return !c.national; }));
    addGroup(T.national, D.companies.filter(function (c) { return c.national; }));
    var setAll = function (fn) { D.companies.forEach(function (c, i) { S.companies[i] = fn(c, i); }); syncChecks(); render(); };
    $('selAll').addEventListener('click', function () { setAll(function () { return true; }); });
    $('selNone').addEventListener('click', function () { setAll(function () { return false; }); });
    $('selMajor').addEventListener('click', function () { setAll(function (c) { return MAJOR.indexOf(c.id) >= 0; }); });
    $('single').addEventListener('change', function () { S.dropSingle = $('single').checked; render(); });
    $('showBreaks').checked = S.showBreaks;
    $('showBreaks').addEventListener('change', function () { S.showBreaks = $('showBreaks').checked; render(); });
    var st = $('setting');
    IDX.settings.forEach(function (s, i) { st.appendChild(el('option', { value: i, text: s.min_size + ' × ' + s.penalty })); });
    st.value = S.setting;
    st.addEventListener('change', function () { S.setting = +st.value; render(); });
    $('clearRule').addEventListener('click', function () { setRule(null); });
  }
  function syncChecks() {
    var cbs = $('cochecks').querySelectorAll('input[type=checkbox]');
    for (var i = 0; i < cbs.length; i++) cbs[i].checked = !!S.companies[+cbs[i].getAttribute('data-co')];
  }
  function fillRatios() {
    var rs = $('ratio'); rs.innerHTML = '';
    famById[S.family].ratios.forEach(function (rid) { rs.appendChild(el('option', { value: rid, text: L(ratioById[rid]) + PL + ratioById[rid].n + PR })); });
    rs.value = S.ratio;
    // 族选择器里标出高亮规则预期的族
    var fs = $('family');
    for (var i = 0; i < fs.options.length; i++) {
      var o = fs.options[i], base = L(famById[o.value]);
      o.textContent = (S.rule && calById[S.rule].families.indexOf(o.value) >= 0 ? '★ ' : '') + base;
    }
  }

  // ------------------------------------------------------------ 视图一：折线图
  var lastPoints = 0;
  function render() {
    var host = $('chart'); host.innerHTML = '';
    var W = Math.max(300, host.clientWidth || 900), H = Math.min(460, Math.max(280, Math.round(W * 0.5)));
    var m = { l: 62, r: 16, t: 44, b: 40 }, iw = W - m.l - m.r, ih = H - m.t - m.b;
    var years = D.years, y0 = years[0], y1 = years[years.length - 1];
    var xs = function (y) { return m.l + (y - y0) / (y1 - y0) * iw; };
    var ratio = ratioById[S.ratio], unit = ratio.unit;
    var svg = sv('svg', { width: W, height: H, viewBox: '0 0 ' + W + ' ' + H, role: 'img' });
    svg.appendChild(sv('text', { x: m.l, y: 16, 'class': 'ctitle' }, W < 520 ? L(ratio) : T.chartTitle(L(ratio), L(famById[S.family]))));
    // 收集序列
    var series = [], allVals = [];
    D.companies.forEach(function (c, ci) {
      if (!S.companies[ci]) return;
      var rows = byRatioCo[ratioIdx[S.ratio] + '|' + ci] || [];
      if (S.dropSingle) rows = rows.filter(function (r) { return !r[RC.single]; });
      if (!rows.length) return;
      rows.forEach(function (r) { allVals.push(r[RC.value]); });
      series.push({ ci: ci, rows: rows });
    });
    var g = sv('g');
    if (!allVals.length) {
      svg.appendChild(sv('text', { x: m.l, y: m.t + 40, 'class': 'nodata' }, T.nodata));
      host.appendChild(svg); lastPoints = 0; return;
    }
    var lo = Math.min.apply(null, allVals), hi = Math.max.apply(null, allVals);
    var pad = (hi - lo) * 0.08 || Math.abs(hi) * 0.1 || 1;
    lo -= pad; hi += pad;
    if (lo > 0 && lo < (hi - lo) * 0.5) lo = 0;
    var ys = function (v) { return m.t + ih - (v - lo) / (hi - lo) * ih; };
    // 网格与坐标轴
    var grid = sv('g', { 'class': 'grid' }), axis = sv('g', { 'class': 'axis' });
    niceTicks(lo, hi, 5).forEach(function (t) {
      grid.appendChild(sv('line', { x1: m.l, x2: m.l + iw, y1: ys(t), y2: ys(t) }));
      axis.appendChild(sv('text', { x: m.l - 6, y: ys(t) + 4, 'text-anchor': 'end' }, fmt(t, 2)));
    });
    var step = W < 520 ? 4 : 2;
    years.forEach(function (y) {
      if ((y - y0) % step) return;
      axis.appendChild(sv('line', { x1: xs(y), x2: xs(y), y1: m.t + ih, y2: m.t + ih + 4 }));
      axis.appendChild(sv('text', { x: xs(y), y: m.t + ih + 16, 'text-anchor': 'middle' }, String(y)));
    });
    axis.appendChild(sv('path', { d: 'M' + m.l + ',' + m.t + 'V' + (m.t + ih) + 'H' + (m.l + iw) }));
    svg.appendChild(grid); svg.appendChild(axis);
    svg.appendChild(sv('text', { x: m.l + iw, y: H - 6, 'text-anchor': 'end', 'class': 'axlab' }, T.yearAxis));
    svg.appendChild(sv('text', { x: 12, y: m.t - 10, 'class': 'axlab' }, unitName(unit)));
    // 规则竖线
    if (S.rule) {
      var c = calById[S.rule];
      var drawV = function (y, cls, label) {
        if (y < y0 || y > y1) return false;
        svg.appendChild(sv('line', { x1: xs(y), x2: xs(y), y1: m.t, y2: m.t + ih, 'class': 'rulev ' + cls }));
        svg.appendChild(sv('text', { x: xs(y) + 3, y: m.t + 10, 'class': 'rulelab' }, label));
        return true;
      };
      var drewE = drawV(c.eff_year, 'eff', c.rid + ' ' + c.eff_year);
      if (c.pass_year && c.pass_year !== c.eff_year) drawV(c.pass_year, 'pass', c.pass_year);
      $('ruleAxisNote').textContent = drewE ? '' : T.notInAxis;
    }
    // 折线与点
    var n = 0;
    var brkSet = IDX.settings[S.setting];
    series.forEach(function (s) {
      var col = coColor(s.ci), prev = null;
      s.rows.forEach(function (r) {
        if (prev && r[RC.year] === prev[RC.year] + 1) {
          var dashed = r[RC.single] || prev[RC.single];
          g.appendChild(sv('line', { x1: xs(prev[RC.year]), y1: ys(prev[RC.value]), x2: xs(r[RC.year]), y2: ys(r[RC.value]), 'class': 'sline' + (dashed ? ' dash' : ''), stroke: col }));
        }
        prev = r;
      });
      s.rows.forEach(function (r) {
        var x = xs(r[RC.year]), y = ys(r[RC.value]), p;
        if (r[RC.single]) p = sv('path', { d: 'M' + x + ',' + (y - 4.5) + 'l4.5,4.5l-4.5,4.5l-4.5,-4.5z', 'class': 'pt single', stroke: col });
        else p = sv('circle', { cx: x, cy: y, r: 3.2, 'class': 'pt', fill: col });
        p.setAttribute('data-pt', '1');
        p.addEventListener('mousemove', function (ev) { showTip(pointTip(r, s.ci), ev); });
        p.addEventListener('mouseleave', hideTip);
        g.appendChild(p); n++;
      });
      if (S.showBreaks) {
        var bs = (breaksByRatioCo[ratioIdx[S.ratio] + '|' + s.ci] || []).filter(function (b) { return IDX.settings[b[BC.setting]].id === brkSet.id; });
        bs.forEach(function (b) {
          var row = s.rows.filter(function (r) { return r[RC.year] === b[BC.year]; })[0];
          var x = xs(b[BC.year]), y = row ? ys(row[RC.value]) : m.t + ih - 8;
          var up = b[BC.direction] === 'up';
          var t = sv('path', { d: up ? 'M' + x + ',' + (y - 11) + 'l5,8h-10z' : 'M' + x + ',' + (y + 11) + 'l5,-8h-10z', 'class': 'brk', fill: up ? 'var(--up)' : 'var(--down)' });
          t.addEventListener('mousemove', function (ev) { showTip(breakTip(b, s.ci), ev); });
          t.addEventListener('mouseleave', hideTip);
          g.appendChild(t);
        });
      }
    });
    svg.appendChild(g);
    host.appendChild(svg);
    lastPoints = n;
    // 图例
    var lg = $('chartLegend'); lg.innerHTML = '';
    series.forEach(function (s) {
      lg.appendChild(el('span', { style: 'margin-right:14px;white-space:nowrap' }, [el('span', { 'class': 'swatch', style: 'background:' + coColor(s.ci) }), L(D.companies[s.ci]) + PL + s.rows.length + PR]));
    });
  }
  function pointTip(r, ci) {
    var ratio = D.ratios[r[RC.ratio]];
    var f = IDX.fields, tiers = IDX.tiers, pg = IDX.pages;
    var h = '<b>' + L(D.companies[ci]) + ' · ' + r[RC.year] + '</b><br>' + L(ratio) + '：<b>' + fmt(r[RC.value], 4) + ' ' + unitName(ratio.unit) + '</b>';
    if (r[RC.single]) h += '<br>' + T.singleRow;
    var nf = f[r[RC.num_field]], df = f[r[RC.den_field]];
    if (nf.id === '（印刷比值）') {
      h += '<br>' + T.printed;
      h += '<br>' + T.tier + '：' + L(tiers[r[RC.num_tier]]) + ' ／ ' + L(tiers[r[RC.den_tier]]);
    } else {
      h += '<br>' + T.numerator + '：' + L(nf) + ' = ' + fmt(r[RC.num_value], 2) + '（' + T.tier + '：' + L(tiers[r[RC.num_tier]]) + '；' + T.numPage + '：' + L(pg[r[RC.num_page]]) + '）';
      h += '<br>' + T.denominator + '：' + L(df) + ' = ' + fmt(r[RC.den_value], 2) + '（' + T.tier + '：' + L(tiers[r[RC.den_tier]]) + '；' + T.denPage + '：' + L(pg[r[RC.den_page]]) + '）';
      h += '<br>' + T.coef + '：' + fmt(r[RC.coef], 2);
    }
    h += '<br>' + T.layer + '：' + L(IDX.layers[r[RC.layer]]) + '；' + T.denKind + '：' + L(IDX.den_kinds[r[RC.den_kind]]);
    return h;
  }
  function breakTip(b, ci) {
    var st = IDX.settings[b[BC.setting]];
    return '<b>' + T.breakAt + ' ' + b[BC.year] + ' · ' + dirName(b[BC.direction]) + '</b><br>' + L(D.companies[ci]) + ' · ' + L(ratioById[D.ratios[b[BC.ratio]].id]) +
      '<br>' + T.meanBefore + ' ' + fmt(b[BC.mean_before], 4) + ' → ' + T.meanAfter + ' ' + fmt(b[BC.mean_after], 4) +
      '<br>' + T.delta + ' ' + fmt(b[BC.delta], 4) + '；' + T.deltaNorm + ' ' + fmt(b[BC.delta_norm], 4) +
      '<br>' + T.span + ' ' + b[BC.span] + '；' + T.nobs + ' ' + b[BC.n_obs] + '（' + b[BC.n_before] + ' + ' + b[BC.n_after] + '）' +
      '<br>' + T.setting2 + ' ' + st.min_size + ' × ' + st.penalty + '；' + T.source + ' ' + L(IDX.sources[b[BC.source]]) + '；' + T.denKind + ' ' + L(IDX.den_kinds[b[BC.den_kind]]) +
      '<br>' + T.nSingle + ' ' + b[BC.n_single];
  }

  // ------------------------------------------------------------ 规则高亮
  function setRule(rid, scroll) {
    S.rule = rid;
    var note = $('rulenote');
    if (!rid) { note.style.display = 'none'; $('ruleAxisNote').textContent = ''; }
    else {
      var c = calById[rid];
      $('ruleText').innerHTML = '<b>' + c.rid + '</b> ' + L(c) + ' — ' + T.expects + '：' +
        c.families.map(function (f) { return famNameAny(f) + (c.unbuilt.indexOf(f) >= 0 ? ' ' + T.unbuilt : ''); }).join(LANG === 'zh' ? '、' : ', ') +
        '；' + T.effLine + ' ' + c.eff_year + (c.pass_year && c.pass_year !== c.eff_year ? '，' + T.passLine + ' ' + c.pass_year : '');
      note.style.display = 'block';
      var built = c.families.filter(function (f) { return f in famById; });
      if (built.length && built.indexOf(S.family) < 0) { S.family = built[0]; S.ratio = famById[S.family].ratios[0]; $('family').value = S.family; }
    }
    fillRatios(); render(); markCalendar();
    if (rid && scroll !== false) $('v1').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ------------------------------------------------------------ 视图二：日历
  var calRows = [];
  function buildCalendar() {
    var host = $('caltimeline'); host.innerHTML = '';
    var cal = D.calendar, rowH = 22;
    var W = Math.max(300, host.clientWidth || 900), labW = W < 560 ? 70 : 250;
    var m = { l: labW, r: 14, t: 24, b: 8 }, iw = W - m.l - m.r, H = m.t + cal.length * rowH + m.b;
    var yA = 1868, yB = 1913;
    var xs = function (y) { return m.l + (y - yA) / (yB - yA) * iw; };
    var svg = sv('svg', { width: W, height: H, viewBox: '0 0 ' + W + ' ' + H, 'class': 'cal' });
    svg.appendChild(sv('rect', { x: xs(D.meta.year0), y: m.t - 4, width: xs(D.meta.year1) - xs(D.meta.year0), height: cal.length * rowH + 4, 'class': 'band' }));
    svg.appendChild(sv('text', { x: W < 560 ? xs(D.meta.year1) : xs(D.meta.year0) + 4, y: m.t - 8, 'class': 'ytick', 'text-anchor': W < 560 ? 'end' : 'start' }, T.panelBand));
    for (var y = 1870; y <= 1910; y += (W < 560 ? 10 : 5)) {
      svg.appendChild(sv('line', { x1: xs(y), x2: xs(y), y1: m.t - 2, y2: H - m.b, 'class': 'rowline' }));
      svg.appendChild(sv('text', { x: xs(y), y: H - m.b + 4, 'text-anchor': 'middle', 'class': 'ytick', dy: '.7em' }, String(y)));
    }
    svg.setAttribute('height', H + 16);
    cal.forEach(function (c, i) {
      var yy = m.t + i * rowH + rowH / 2;
      var col = c.direction === 'up' ? 'var(--up)' : c.direction === 'down' ? 'var(--down)' : 'var(--rule)';
      svg.appendChild(sv('line', { x1: m.l, x2: W - m.r, y1: yy + rowH / 2, y2: yy + rowH / 2, 'class': 'rowline' }));
      var lab = sv('text', { x: 4, y: yy + 4, 'class': 'rlab', 'data-rid': c.rid }, c.rid);
      svg.appendChild(lab);
      if (W >= 560) svg.appendChild(sv('text', { x: 60, y: yy + 4, 'class': 'rname', 'data-rid': c.rid }, L(c).length > 26 ? L(c).slice(0, 25) + '…' : L(c)));
      if (c.pass_year && c.pass_year !== c.eff_year) {
        svg.appendChild(sv('line', { x1: xs(c.pass_year), x2: xs(c.eff_year), y1: yy, y2: yy, 'class': 'link', stroke: col }));
        svg.appendChild(sv('circle', { cx: xs(c.pass_year), cy: yy, r: 4, 'class': 'pass', stroke: col, 'data-rid': c.rid }));
      }
      if (c.lag && c.lag[1] > c.lag[0]) svg.appendChild(sv('rect', { x: xs(c.eff_year + c.lag[0]), y: yy - 3, width: Math.max(2, xs(c.eff_year + c.lag[1]) - xs(c.eff_year + c.lag[0])), height: 6, 'class': 'lagbar', fill: col }));
      svg.appendChild(sv('circle', { cx: xs(c.eff_year), cy: yy, r: 4.5, 'class': 'eff', fill: col, 'data-rid': c.rid }));
      var hit = sv('rect', { x: 0, y: yy - rowH / 2, width: W, height: rowH, fill: 'transparent', 'data-rid': c.rid, style: 'cursor:pointer' });
      hit.addEventListener('click', function () { setRule(c.rid); });
      hit.addEventListener('mousemove', function (ev) { showTip('<b>' + c.rid + '</b> ' + L(c) + '<br>' + T.passed + '：' + (LANG === 'zh' ? c.passed_zh : c.passed_en) + '<br>' + T.effective + '：' + (LANG === 'zh' ? c.effective_zh : c.effective_en) + '<br>' + T.expected + '：' + (LANG === 'zh' ? c.expected_zh : c.expected_en), ev); });
      hit.addEventListener('mouseleave', hideTip);
      svg.appendChild(hit);
    });
    host.appendChild(svg);
    // 表
    var tb = $('caltable'); tb.innerHTML = ''; calRows = [];
    var heads = [T.rid, T.cal === 'Calendar' ? 'Section' : '节', T.name, T.passed, T.effective, T.srcKind, T.expected];
    var thead = el('thead', null, [el('tr', null, heads.map(function (h) { return el('th', { 'class': 'l', text: h }); }))]);
    var tbody = el('tbody'); tb.className = 'stack';
    cal.forEach(function (c) {
      var tr = el('tr', { 'class': 'clickable', 'data-rid': c.rid }, [
        el('td', { 'class': 'l rid', 'data-th': heads[0], text: c.rid }),
        el('td', { 'class': 'l', 'data-th': heads[1], text: LANG === 'zh' ? c.section_zh : c.section_en }),
        el('td', { 'class': 'l w', 'data-th': heads[2], text: L(c) }),
        el('td', { 'class': 'l', 'data-th': heads[3], text: LANG === 'zh' ? c.passed_zh : (c.passed_en || '—') }),
        el('td', { 'class': 'l', 'data-th': heads[4], text: LANG === 'zh' ? c.effective_zh : c.effective_en }),
        el('td', { 'class': 'l', 'data-th': heads[5], text: LANG === 'zh' ? c.source_zh : c.source_en }),
        el('td', { 'class': 'l w', 'data-th': heads[6], text: LANG === 'zh' ? c.expected_zh : c.expected_en })
      ]);
      tr.addEventListener('click', function () { setRule(c.rid); });
      tbody.appendChild(tr); calRows.push(tr);
    });
    tb.appendChild(thead); tb.appendChild(tbody);
    markCalendar();
  }
  function markCalendar() {
    calRows.forEach(function (tr) { tr.className = 'clickable' + (tr.getAttribute('data-rid') === S.rule ? ' sel' : ''); });
    var ts = $('caltimeline').querySelectorAll('[data-rid]');
    for (var i = 0; i < ts.length; i++) {
      var e = ts[i], on = e.getAttribute('data-rid') === S.rule;
      var cls = (e.getAttribute('class') || '').replace(/ ?sel/g, '');
      if (cls) e.setAttribute('class', cls + (on ? ' sel' : ''));
    }
  }

  // ------------------------------------------------------------ 视图三：表
  function ruleCell(rid) {
    var c = calById[rid];
    var s = el('span', null, [el('b', { 'class': 'rid', text: rid }), ' ' + L(c)]);
    var a = el('a', { href: '#v1', style: 'margin-left:6px;font-size:11.5px;color:var(--rule)', text: LANG === 'zh' ? '高亮' : 'highlight' });
    a.addEventListener('click', function (ev) { ev.preventDefault(); setRule(rid); });
    var d = el('span', null, [s, a]);
    return d;
  }
  // 表里列同族比值时去掉与族名重复的前缀（每列车英里支出·机车动力 → 机车动力）
  function shortRatio(rid, fam) {
    var n = L(ratioById[rid]), f = L(famById[fam]);
    if (n.indexOf(f + '·') === 0) return n.slice(f.length + 1);
    if (n.indexOf(f + ': ') === 0) return n.slice(f.length + 2);
    return n;
  }
  function verdictCell(v) { return el('span', { 'class': 'vd ' + verdictClass(v), text: verdictName(v) }); }
  function dirCell(d) { return el('span', { 'class': 'dir ' + d, text: dirName(d) }); }
  function table(id, heads, rows) {
    var t = $(id); t.innerHTML = '';
    t.appendChild(el('thead', null, [el('tr', null, heads.map(function (h) { return el('th', { 'class': 'l', text: h }); }))]));
    var tb = el('tbody');
    rows.forEach(function (r) { tb.appendChild(el('tr', null, r.map(function (c, i) { return el('td', { 'class': (typeof c === 'object' && c && c.w) ? 'l w' : 'l', 'data-th': heads[i] }, [typeof c === 'object' && c && c.w ? c.w : (typeof c === 'string' || typeof c === 'number') ? String(c) : c]); }))); });
    t.appendChild(tb); t.className = 'stack';
  }
  function buildTables() {
    table('tCands', [T.rank, T.family, T.year, T.direction, T.share, T.effect, T.main, T.ratio],
      D.events.map(function (e) {
        return [e.rank, famName(e.family), e.year, dirCell(e.direction), fmt(e.share, 4), fmt(e.effect, 4),
          e.main ? el('span', { 'class': 'main', text: T.yes }) : T.no,
          { w: el('span', { text: e.ratios.map(function (r) { return shortRatio(r, e.family); }).join(LANG === 'zh' ? '、' : '; ') }) }];
      }));
    table('tPairs', [T.matchDir, T.rank, T.family, T.year, T.evDir, T.share, T.rule, T.effective, T.verdict],
      D.pairs.map(function (p) {
        var c = calById[p.rid];
        return [L(IDX.match_dirs[p.dir]), p.rank, famName(p.family), p.year, dirCell(p.event_direction), fmt(p.share, 4),
          { w: ruleCell(p.rid) }, LANG === 'zh' ? c.effective_zh : c.effective_en, verdictCell(p.verdict)];
      }));
    table('tGapRules', [T.rid, T.name, T.families, T.kindCol, T.window, T.verdict],
      D.gap_rules.map(function (g) {
        return [{ w: ruleCell(g.rid) }, '', g.families.map(famNameAny).join(LANG === 'zh' ? '、' : ', '),
          el('span', { 'class': 'kind', text: L(IDX.gap_kinds[g.kind]) }), g.window || '—', { w: el('span', { text: LANG === 'zh' ? g.verdict_zh : g.verdict_en }) }];
      }));
    // 第二列合并进规则格，去掉空列
    var t = $('tGapRules'); var trs = t.querySelectorAll('tr'); for (var i = 0; i < trs.length; i++) trs[i].removeChild(trs[i].children[1]);
    var tds = t.querySelectorAll('tbody td:first-child'); for (var j = 0; j < tds.length; j++) tds[j].setAttribute('data-th', T.rule);
    table('tGapFolds', [T.rank, T.family, T.year, T.direction, T.share, T.effect, T.verdict],
      D.gap_folds.map(function (g) {
        var v = g.kind === 'none' ? (LANG === 'zh' ? g.verdict_zh : 'No rule to match (no calendar entry with an effective or passing year within ±1 year)')
          : (LANG === 'zh' ? g.verdict_zh : 'Year matches ' + g.rid + ' but the family is not in its expectation');
        return [g.rank, famName(g.family), g.year, dirCell(g.direction), fmt(g.share, 4), fmt(g.effect, 4), { w: g.rid ? el('span', null, [v + ' ', ruleCell(g.rid)]) : el('span', { text: v }) }];
      }));
  }

  // ------------------------------------------------------------ 检查层（按需：window.__check()；首屏后空闲时跑一次）
  function checkLayer(opt) {
    opt = opt || {};
    var t0 = performance.now(), groups = [];
    var G = function (name, ok, detail) { groups.push({ name: name, ok: !!ok, detail: detail }); };
    var F = D.facts;
    // 1 数据层计数
    G('rows', F.n_rows_shown + F.n_hidden_rows === F.n_rows && D.rows.length === F.n_rows_shown, D.rows.length + '+' + F.n_hidden_rows + '=' + F.n_rows);
    G('breaks', D.breaks.length === F.n_breaks_shown && F.n_breaks_shown + F.n_breaks_hidden === F.n_breaks, D.breaks.length + '+' + F.n_breaks_hidden + '=' + F.n_breaks);
    G('pairs', D.pairs.length === F.n_pairs && F.n_pairs_a + F.n_pairs_b === F.n_pairs, D.pairs.length);
    G('calendar', D.calendar.length === F.n_calendar && D.families.length === F.n_families, D.calendar.length + '/' + D.families.length);
    G('gaps', D.gap_rules.length === F.n_gap_rules && D.gap_folds.length === F.n_gap_folds, D.gap_rules.length + '/' + D.gap_folds.length);
    G('refs', D.pairs.every(function (p) { return p.rid in calById; }) && D.breaks.every(function (b) { return b[BC.company] < D.companies.length && b[BC.ratio] < D.ratios.length; }), 'rid/company/ratio');
    // 2 渲染层：图上的点数 = 当前选择的行数
    var expect = 0;
    D.companies.forEach(function (c, ci) { if (!S.companies[ci]) return; (byRatioCo[ratioIdx[S.ratio] + '|' + ci] || []).forEach(function (r) { if (!(S.dropSingle && r[RC.single])) expect++; }); });
    var drawn = $('chart').querySelectorAll('[data-pt]').length;
    var removed = null, removedFrom = null;
    if (opt.inject === 'drop_point') { removed = $('chart').querySelector('[data-pt]'); if (removed) { removedFrom = removed.parentNode; removedFrom.removeChild(removed); } drawn = $('chart').querySelectorAll('[data-pt]').length - (removed ? 0 : 1); }
    G('points', drawn === expect, drawn + '/' + expect);
    if (removed) removedFrom.appendChild(removed);   // 负对照只借用一次计数，计完放回
    G('tables', $('tPairs').querySelectorAll('tbody tr').length === D.pairs.length && $('tCands').querySelectorAll('tbody tr').length === D.events.length &&
      $('tGapRules').querySelectorAll('tbody tr').length === D.gap_rules.length && $('tGapFolds').querySelectorAll('tbody tr').length === D.gap_folds.length &&
      $('caltable').querySelectorAll('tbody tr').length === D.calendar.length, 'pairs/cands/gapRules/gapFolds/cal');
    G('controls', ['family', 'ratio', 'single', 'showBreaks', 'setting', 'selAll', 'selNone', 'selMajor', 'clearRule'].every(function (id) { return !!$(id); }) && $('cochecks').querySelectorAll('input').length === D.companies.length, 'ids + ' + D.companies.length + ' checkboxes');
    // 3 语言层：中文页正文不含拉丁词（放过规则编号、BIC、单位）；英文页不含汉字
    var txt = document.querySelector('.wrap').innerText || '';
    // 悬停提示不在 DOM 里，逐行生成一遍再扫（去掉标签）
    var tmp = document.createElement('div'), tt = [];
    D.rows.forEach(function (r) { tt.push(pointTip(r, r[RC.company])); });
    D.breaks.forEach(function (b) { tt.push(breakTip(b, b[BC.company])); });
    D.calendar.forEach(function (c) { tt.push(L(c) + ' ' + (LANG === 'zh' ? c.passed_zh + ' ' + c.effective_zh + ' ' + c.expected_zh + ' ' + c.source_zh : c.passed_en + ' ' + c.effective_en + ' ' + c.expected_en + ' ' + c.source_en)); });
    tmp.innerHTML = tt.join('<br>'); txt += '\n' + tmp.innerText;
    if (opt.inject === 'latin') txt += ' Midland ';
    if (opt.inject === 'cjk') txt += ' 米德兰 ';
    var bad;
    if (LANG === 'zh') {
      var allow = /^(R|RCH|F|X)\d{4}[A-Z]?$|^m?BIC$|^d$|^pp$|^No$/;
      bad = (txt.match(/[A-Za-z][A-Za-z0-9&'.-]*/g) || []).filter(function (w) { return !allow.test(w); });
    } else {
      bad = txt.match(/[㐀-鿿]+/g) || [];
    }
    var uniq = {}; bad.forEach(function (w) { uniq[w] = 1; });
    G('language', !bad.length, Object.keys(uniq).slice(0, 12).join(' '));
    var ok = groups.every(function (g) { return g.ok; }), ms = Math.round(performance.now() - t0);
    var res = { ok: ok, groups: groups, ms: ms, inject: opt.inject || null, lang: LANG };
    if (!opt.inject) {
      window.__checkResult = res;
      var failed = groups.filter(function (g) { return !g.ok; }).map(function (g) { return g.name; });
      var line = 'TF-CHECK ok=' + ok + ' groups=' + groups.length + ' failed=' + failed.join(',') + ' ms=' + ms;
      $('checkok').textContent = T.checkOk + (LANG === 'zh' ? (ok ? '通过' : '未通过') + '，' + groups.length + ' 组，' + ms + ' 毫秒' : (ok ? 'passed' : 'failed') + ', ' + groups.length + ' groups, ' + ms + ' ms');
      $('checkok').setAttribute('data-sentinel', line);
      $('checkfail').style.display = ok ? 'none' : 'block';
      $('checkfail').textContent = ok ? '' : (LANG === 'zh' ? '检查层未通过：' + failed.join('，') : 'Check layer failed: ' + failed.join(', '));
      console.log(line);
    }
    return res;
  }
  window.__check = checkLayer;
  window.__negative = function () { return ['drop_point', LANG === 'zh' ? 'latin' : 'cjk'].map(function (k) { var r = checkLayer({ inject: k }); return { inject: k, ok: r.ok, failed: r.groups.filter(function (g) { return !g.ok; }).map(function (g) { return g.name; }) }; }); };
  // 控件逐个点一遍并计时（验收用）
  window.__selftest = function () {
    var out = [], tm = function (name, fn) { var t = performance.now(); fn(); out.push({ control: name, ms: Math.round((performance.now() - t) * 10) / 10 }); };
    var fire = function (e, type) { e.dispatchEvent(new Event(type, { bubbles: true })); };
    tm('family→每列车英里支出', function () { $('family').value = '每列车英里支出'; fire($('family'), 'change'); });
    tm('ratio→second', function () { var r = $('ratio'); if (r.options.length > 1) { r.selectedIndex = 1; fire(r, 'change'); } });
    tm('single on', function () { $('single').checked = true; fire($('single'), 'change'); });
    tm('single off', function () { $('single').checked = false; fire($('single'), 'change'); });
    tm('showBreaks off', function () { $('showBreaks').checked = false; fire($('showBreaks'), 'change'); });
    tm('showBreaks on', function () { $('showBreaks').checked = true; fire($('showBreaks'), 'change'); });
    tm('setting→4×mBIC', function () { $('setting').value = 3; fire($('setting'), 'change'); });
    tm('setting→3×BIC', function () { $('setting').value = 0; fire($('setting'), 'change'); });
    tm('selAll', function () { $('selAll').click(); });
    tm('selNone', function () { $('selNone').click(); });
    tm('selMajor', function () { $('selMajor').click(); });
    tm('checkbox toggle', function () { var cb = $('cochecks').querySelector('input'); cb.checked = !cb.checked; fire(cb, 'change'); cb.checked = !cb.checked; fire(cb, 'change'); });
    tm('calendar row click R1888A', function () { $('caltable').querySelector('tr[data-rid="R1888A"]').click(); });
    tm('timeline click X1899J', function () { $('caltimeline').querySelector('rect[data-rid="X1899J"]').dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    tm('pairs highlight link', function () { $('tPairs').querySelector('a').click(); });
    tm('clearRule', function () { $('clearRule').click(); });
    tm('family→每吨收入', function () { $('family').value = '每吨收入'; fire($('family'), 'change'); });
    tm('nav tab v3', function () { document.querySelector('nav.tabs a[href="#v3"]').click(); });
    tm('hover point', function () { var p = $('chart').querySelector('[data-pt]'); if (p) { p.dispatchEvent(new MouseEvent('mousemove', { clientX: 200, clientY: 200, bubbles: true })); p.dispatchEvent(new MouseEvent('mouseleave')); } });
    tm('hover break', function () { var p = $('chart').querySelector('.brk'); if (p) { p.dispatchEvent(new MouseEvent('mousemove', { clientX: 200, clientY: 200, bubbles: true })); p.dispatchEvent(new MouseEvent('mouseleave')); } });
    window.__selftestResult = out;
    return out;
  };

  // ------------------------------------------------------------ 启动
  function init() {
    // 标题与 h1 由页面本身写定（2026-09-20 起是结论句），脚本不再覆盖。
    $('intro').innerHTML = intro();
    $('langsw').textContent = T.lswitch; $('langsw').href = T.lhref;
    scalesStrip();
    buildControls();
    buildCalendar();
    buildTables();
    render();
    var f = $('footer');
    f.textContent = LANG === 'zh' ? '数据生成于 ' + D.meta.built + '；输入件与它们的校验码列在说明文件里。' : T.footer + ' ' + D.meta.built + ' · ' + D.meta.builder + ' · ' + Object.keys(D.meta.inputs).map(function (k) { return k + ' sha256 ' + D.meta.inputs[k].sha256.slice(0, 12); }).join(' · ');
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { render(); buildCalendar(); }, 150); });
    var idle = window.requestIdleCallback || function (fn) { setTimeout(fn, 300); };
    idle(function () { checkLayer(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
