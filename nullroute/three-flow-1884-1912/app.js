/* 三流循环成页（八节）· 交互与检查层
   2026-09-24 加第四至第八节：支出分项堆叠与十四张柱图、营运比率逐家与其余公司四分位带、运量层十一张图、制度日历时间轴与三组列表、
   来源与缺口表；检查第 17 至 21 组各对应一节，window.__neg() 另为每一节跑一个只让本组失败的负对照。
   以下是样张阶段的原说明：
   织图部分（几何、悬停、出处卡、检查 1 至 11、负对照）沿用织图页 app.js；改动：公司标签横排两行错开、默认停在 1888 年、
   新增摘要卡、十四张逐家小图、字号四档检查、标签不重叠检查、小图回读检查、摘要卡对数检查、主语词检查。
   检查层首屏后在空闲时只查当前年（runAll('current')），window.__check() 逐年全查，window.__neg() 跑三个负对照。 */
(function () {
'use strict';
var D = window.__DATA;
var LANG = (document.documentElement.getAttribute('lang') || 'zh').indexOf('zh') === 0 ? 'zh' : 'en';
var T = function (zh, en) { return LANG === 'zh' ? zh : en; };
var $ = function (id) { return document.getElementById(id); };
var NS = 'http://www.w3.org/2000/svg';
var svgEl = $('weave');
var LY = D.layout, S = LY.px_per_d, NH = LY.node_h;
var YEARS = D.years.map(function (y) { return y.year; });
var state = { yi: 0, lastRenderMs: null };   // 默认停在 1888 年
var CAL = {}; D.calendar.forEach(function (c) { CAL[c.year] = c; });
var CO = D.companies;
var NSAMP = 28;
var TIERS = [26, 18, 15, 13];
function coName(k) { return CO[k][LANG]; }
function fmtD(v) { return (Math.round(v * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function fmt1(v) { return (Math.round(v * 10) / 10).toFixed(1); }
function fmtPct(v) { return (Math.round(v * 100) / 100).toFixed(2) + '%'; }
function unit() { return T('便士', 'd'); }
function el(tag, attrs, text) {
  var e = document.createElementNS(NS, tag);
  Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
  if (text != null) e.textContent = text;
  return e;
}
function hel(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

/* ══ 第一节：摘要卡 ══ */
function cards() {
  var c = D.summary.cards, box = $('cards'); box.innerHTML = '';
  var src_med = T('各公司当年数值的中位数；跨年区间为各年中位数的平均值。数据来自贸易部铁路年报。',
                  'Values printed in the Board of Trade returns; median over companies for each year, multi-year spans averaged over the yearly medians. Ratio table, task 010 return box.');
  var defs = [
    { cls: 'rpm', lab: T('每列车英里收入', 'Receipts per train mile'),
      fig: fmt1(c.rpm.v1) + ' → ' + fmt1(c.rpm.v2) + ' → ' + fmt1(c.rpm.v3),
      yrs: c.rpm.y1 + ' → ' + c.rpm.y2 + ' → ' + c.rpm.y3 + T('，便士', ', pence'), src: src_med },
    { cls: 'epm', lab: T('每列车英里营运支出', 'Working expenditure per train mile'),
      fig: fmt1(c.epm.v1) + ' → ' + fmt1(c.epm.v2) + ' → ' + fmt1(c.epm.v3),
      yrs: c.epm.y1 + ' → ' + c.epm.y2 + ' → ' + c.epm.y3 + T('，便士', ', pence'), src: src_med },
    { cls: 'opr', lab: T('营运比率（营运支出占收入的比例）', 'Expenditure as a share of receipts'),
      fig: Math.round(c.opr.v1) + '% → ' + Math.round(c.opr.v2) + '%',
      yrs: c.opr.y1 + ' → ' + c.opr.y2, src: src_med },
    { cls: 'up', lab: T('1900 年每列车英里支出上行的公司', 'Companies whose expenditure per train mile rose in 1900'),
      fig: c.up1900.n_up + T(' 家 ／ ', ' of ') + c.up1900.n_both + T(' 家', ''),
      yrs: c.up1900.y,
      src: T('1899 与 1900 两年均有数据的公司共 ' + c.up1900.n_both + ' 家，1900 年的营运支出全部高于 1899 年。数据来自贸易部铁路年报。',
             'Companies with an expenditure value in both 1899 and 1900: ' + c.up1900.n_both + ', all of them rising; expenditure per train mile as printed in the Board of Trade returns, task 010 ratio table.') },
  ];
  defs.forEach(function (d) {
    var card = hel('div', 'card'); card.setAttribute('data-card', d.cls);
    card.appendChild(hel('div', 'lab', d.lab));
    card.appendChild(hel('div', 'fig ' + d.cls, d.fig));
    card.appendChild(hel('div', 'yrs', d.yrs));
    card.appendChild(hel('div', 'src', d.src));
    box.appendChild(card);
  });
}

/* ══ 第二节：织图 ══ */
function smoothstep(t) { return t * t * (3 - 2 * t); }
function edge(xb, xt, yb, yt) {
  var pts = [];
  for (var i = 0; i < NSAMP; i++) { var t = i / (NSAMP - 1); pts.push([xb + (xt - xb) * smoothstep(t), yb + (yt - yb) * t]); }
  return pts;
}
function ribbonPath(xb, xt, w, yb, yt) {
  var A = edge(xb, xt, yb, yt), B = edge(xb + w, xt + w, yb, yt);
  var d = 'M' + A.map(function (p) { return p[0].toFixed(3) + ',' + p[1].toFixed(3); }).join(' L');
  d += ' L' + B.slice().reverse().map(function (p) { return p[0].toFixed(3) + ',' + p[1].toFixed(3); }).join(' L') + ' Z';
  return d;
}
var CUR = { bands: [], nodes: [], year: null };
function layoutYear(yd) {
  var cos = yd.companies, n = cos.length;
  var bottomW = cos.reduce(function (a, c) { return a + c.R * S; }, 0) + (n - 1) * LY.gap;
  var x0 = (LY.w - bottomW) / 2;
  var bands = [], nodes = [];
  var withE = cos.filter(function (c) { return c.E != null; });
  var sumE = withE.reduce(function (a, c) { return a + c.E; }, 0), sumN = withE.reduce(function (a, c) { return a + c.N; }, 0);
  var topW = (sumE + sumN) * S + LY.top_gap, tx0 = (LY.w - topW) / 2;
  var ex = tx0, nx = tx0 + sumE * S + LY.top_gap;
  var ecur = ex, ncur = nx, x = x0;
  cos.forEach(function (c) {
    var w = c.R * S;
    nodes.push({ id: 'n-co-' + c.co, kind: 'co', co: c.co, x: x, y: LY.y_co, w: w, amount: c.R, yd: yd, c: c });
    bands.push({ id: 'b-R-' + c.co, kind: 'R', co: c.co, amount: c.R, c: c, d: ribbonPath(x, x, w, LY.y_co, LY.y_split), cls: 'incr' });
    if (c.E != null) {
      bands.push({ id: 'b-E-' + c.co, kind: 'E', co: c.co, amount: c.E, c: c, d: ribbonPath(x, ecur, c.E * S, LY.y_split, LY.y_top + NH), cls: 'expr' });
      bands.push({ id: 'b-N-' + c.co, kind: 'N', co: c.co, amount: c.N, c: c, d: ribbonPath(x + c.E * S, ncur, c.N * S, LY.y_split, LY.y_top + NH), cls: 'netr' });
      ecur += c.E * S; ncur += c.N * S;
    }
    x += w + LY.gap;
  });
  if (yd.split) {
    nodes.push({ id: 'n-E', kind: 'E', x: ex, y: LY.y_top, w: sumE * S, amount: sumE, yd: yd });
    nodes.push({ id: 'n-N', kind: 'N', x: nx, y: LY.y_top, w: sumN * S, amount: sumN, yd: yd });
  }
  return { bands: bands, nodes: nodes, x0: x0, bottomW: bottomW, sumE: sumE, sumN: sumN };
}
/* 文字宽度：用画布量，字体与页面同（13px 图注档） */
var meas = document.createElement('canvas').getContext('2d');
function textW(s) {
  meas.font = '13px ' + getComputedStyle(document.body).fontFamily;
  return meas.measureText(s).width;
}
/* 公司名按可用宽度拆成最多两行：中文按字数对半，英文按空格找最平衡的断点 */
function wrapName(name, avail) {
  if (textW(name) <= avail) return [name];
  if (/\s/.test(name)) {
    var parts = name.split(' '), best = null;
    for (var i = 1; i < parts.length; i++) {
      var a = parts.slice(0, i).join(' '), b = parts.slice(i).join(' ');
      var wmax = Math.max(textW(a), textW(b));
      if (!best || wmax < best.w) best = { w: wmax, lines: [a, b] };
    }
    return best.lines;
  }
  var mid = Math.ceil(name.length / 2);
  return [name.slice(0, mid), name.slice(mid)];
}
var LINE_H = 16, ROW_H = 3 * LINE_H + 4;
function render() {
  var t0 = performance.now();
  var yd = D.years[state.yi];
  var L = layoutYear(yd);
  while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);
  var g = el('g', { id: 'L-' + yd.year, 'class': 'yearlayer' });
  g.appendChild(el('line', { 'class': 'splitline', x1: 8, x2: LY.w - 8, y1: LY.y_split, y2: LY.y_split }));
  L.bands.forEach(function (b) {
    var p = el('path', { id: b.id, 'class': 'ribbon ' + b.cls, d: b.d });
    attachBand(p, b); g.appendChild(p);
  });
  if (yd.split) {
    L.nodes.filter(function (nd) { return nd.kind === 'E' || nd.kind === 'N'; }).forEach(function (nd) {
      var r = el('rect', { id: nd.id, 'class': nd.kind === 'E' ? 'expnode' : 'netnode', x: nd.x, y: nd.y, width: nd.w, height: NH });
      attachNode(r, nd); g.appendChild(r);
      var lab = nd.kind === 'E' ? D.text['nodeE_' + LANG] : D.text['nodeN_' + LANG];
      g.appendChild(el('text', { 'class': 'nodelab', x: nd.x, y: nd.y - 22 }, lab));
      g.appendChild(el('text', { 'class': 'nodeval', x: nd.x, y: nd.y - 6 },
        T('各公司便士之和 ' + fmtD(nd.amount) + ' 便士（' + yd.n_split + ' 家）', 'Sum over companies ' + fmtD(nd.amount) + ' d (' + yd.n_split + ' companies)')));
    });
  } else {
    var fw = 220, fx = LY.w / 2 - fw - LY.top_gap / 2;
    [[fx, D.text['nodeE_' + LANG]], [fx + fw + LY.top_gap, D.text['nodeN_' + LANG]]].forEach(function (f) {
      g.appendChild(el('rect', { 'class': 'noframe', x: f[0], y: LY.y_top, width: fw, height: NH }));
      g.appendChild(el('text', { 'class': 'nodelab', x: f[0], y: LY.y_top - 22 }, f[1]));
      g.appendChild(el('text', { 'class': 'framelab', x: f[0], y: LY.y_top - 6 }, T('本年无营运支出数据', 'no expenditure per train mile this year')));
    });
  }
  /* 公司柱与横排标签：相邻公司的标签错开两行；每个标签的可用宽度是同一行左右邻居中心距的较小者 */
  var coNodes = L.nodes.filter(function (nd) { return nd.kind === 'co'; });
  var cxs = coNodes.map(function (nd) { return nd.x + nd.w / 2; });
  coNodes.forEach(function (nd, i) {
    var r = el('rect', { id: nd.id, 'class': 'conode', x: nd.x, y: nd.y, width: nd.w, height: NH });
    attachNode(r, nd); g.appendChild(r);
    var row = i % 2, cx = cxs[i];
    var avail = LY.w;
    if (i - 2 >= 0) avail = Math.min(avail, cx - cxs[i - 2]);
    if (i + 2 < cxs.length) avail = Math.min(avail, cxs[i + 2] - cx);
    avail -= 10;
    var lines = wrapName(coName(nd.co), avail);
    var vtxt = nd.c.E != null ? fmt1(nd.c.R) + ' · ' + fmt1(nd.c.E) + ' · ' + fmt1(nd.c.N) : fmt1(nd.c.R);
    lines.push(vtxt);
    var wmax = Math.max.apply(null, lines.map(textW));
    var ax = Math.min(Math.max(cx, wmax / 2 + 4), LY.w - wmax / 2 - 4);   // 边上的标签往里收，不出画框
    var top = nd.y + NH + 8 + row * ROW_H;
    if (row === 1) g.appendChild(el('line', { 'class': 'leader', x1: cx, x2: cx, y1: nd.y + NH, y2: top - 2 }));
    var tg = el('g', { 'class': 'colab', 'data-co': nd.co });
    lines.forEach(function (s, k) {
      tg.appendChild(el('text', { 'class': k === lines.length - 1 ? 'coval' : 'coname', x: ax, y: top + LINE_H * (k + 1) - 4, 'text-anchor': 'middle' }, s));
    });
    g.appendChild(tg);
  });
  svgEl.appendChild(g);
  CUR = { bands: L.bands, nodes: L.nodes, year: yd.year, yd: yd, L: L };
  $('ylabel').textContent = yd.year;
  $('yslider').value = state.yi;
  yearNote(yd);
  state.lastRenderMs = performance.now() - t0;
}
function yearNote(yd) {
  var s;
  if (yd.split) {
    s = T(yd.year + ' 年：有数的公司 ' + yd.n + ' 家，其中 ' + yd.n_split + ' 家有支出值；全体支出占收入比 ' + fmtPct(yd.share) + '（按有支出值的 ' + yd.n_split + ' 家的便士之和算）。',
          yd.year + ': ' + yd.n + ' companies with values, ' + yd.n_split + ' of them with an expenditure value; expenditure as a share of receipts for all ' + yd.n_split + ' together ' + fmtPct(yd.share) + ' (sum of pence over the companies that have both values).');
  } else {
    s = T(yd.year + ' 年：有收入值的公司 ' + yd.n + ' 家。' + D.text.noSplit_zh, yd.year + ': ' + yd.n + ' companies with a receipts value. ' + D.text.noSplit_en);
  }
  var c = CAL[yd.year];
  $('yearnote').innerHTML = '';
  $('yearnote').appendChild(document.createTextNode(s));
  if (c) {
    var sp = document.createElement('span'); sp.className = 'cal';
    sp.textContent = ' ' + T('这一年的制度事件：', 'Institutional event this year: ') + c['name_' + LANG];
    $('yearnote').appendChild(sp);
  }
}

/* ── 悬停与出处（织图与小图共用） ── */
var tip = $('tip');
function showTip(ev, h) {
  tip.innerHTML = h; tip.style.display = 'block';
  var x = ev.clientX + 14, y = ev.clientY + 14;
  if (x + tip.offsetWidth > window.innerWidth - 8) x = ev.clientX - tip.offsetWidth - 10;
  if (y + tip.offsetHeight > window.innerHeight - 8) y = ev.clientY - tip.offsetHeight - 10;
  tip.style.left = x + 'px'; tip.style.top = y + 'px';
}
function hideTip() { tip.style.display = 'none'; }
function valuesHtml(c, y, co) {
  var h = '';
  h += T('每列车英里收入 ', 'Receipts per train mile ') + fmtD(c.R) + ' ' + unit() + (c.rows.R.single ? T('（单一来源）', ' (single source)') : '') + '<br>';
  if (c.E != null) {
    h += T('每列车英里营运支出 ', 'Working expenditure per train mile ') + fmtD(c.E) + ' ' + unit() + (c.rows.E.single ? T('（单一来源）', ' (single source)') : '') + '<br>';
    h += T('净收入（差值）', 'Net receipts (difference) ') + fmtD(c.N) + ' ' + unit() + '<br>';
    h += T('营运比率 ', 'Expenditure as share of receipts ') + fmtPct(c.share) + '<br>';
  } else {
    h += T('本年无营运支出数据', 'No expenditure value this year; no split') + '<br>';
  }
  h += T('来源页码：收入 ', 'Source page: receipts ') + c.rows.R['page_' + LANG];
  if (c.rows.E) h += T('；支出 ', '; expenditure ') + c.rows.E['page_' + LANG];
  return h;
}
function bandTip(b) {
  var c = b.c, y = CUR.year, kind = { R: T('收入', 'receipts band'), E: T('营运支出', 'working expenditure'), N: T('净收入', 'net receipts') }[b.kind];
  return '<b>' + coName(b.co) + ' · ' + y + '</b> · ' + kind + '<br>' + valuesHtml(c, y, b.co);
}
function nodeTip(nd) {
  if (nd.kind === 'co') return bandTip({ c: nd.c, co: nd.co, kind: 'R' });
  var lab = nd.kind === 'E' ? D.text['nodeE_' + LANG] : D.text['nodeN_' + LANG];
  return '<b>' + lab + ' · ' + CUR.year + '</b><br>' + T('各公司便士之和 ', 'Sum of pence over companies ') + fmtD(nd.amount) + ' ' + unit()
    + '<br>' + T('各公司数值之和只用于汇合流带，不表示经济总量。', 'This sum has no economic meaning; it only gathers the bands. What is comparable across companies, on one scale, is each band\'s own width.');
}
function attachBand(p, b) {
  p.addEventListener('mousemove', function (ev) { showTip(ev, bandTip(b)); });
  p.addEventListener('mouseleave', hideTip);
  p.addEventListener('click', function () { openProv(b.c, b.co, CUR.year); });
}
function attachNode(r, nd) {
  r.addEventListener('mousemove', function (ev) { showTip(ev, nodeTip(nd)); });
  r.addEventListener('mouseleave', hideTip);
  if (nd.kind === 'co') r.addEventListener('click', function () { openProv(nd.c, nd.co, CUR.year); });
}
var pc = $('provcard');
function provHtml(c, co, y) {
  function row(k, v) { return '<tr><td>' + k + '</td><td>' + v + '</td></tr>'; }
  function rowset(title, r) {
    var h = '<tr><td colspan="2"><b>' + title + '</b></td></tr>';
    h += row(T('年报印出的数值', 'printed value'), fmtD(r.value) + ' ' + unit());
    h += row(T('比值', 'ratio'), r.ratio === 'receipts_per_train_mile_total_d' ? T('全部列车每英里收入', 'Total receipts per train mile') : T('每列车英里支出合计', 'Expenditure per train mile: total'));
    h += row(T('分子／分母', 'numerator / denominator'), r.numerator === '（印刷比值）' ? T('年报印出的比值', 'printed ratio (as printed on the page)') : T('分子与分母各自转录后相除', 'numerator and denominator transcribed separately'));
    h += row(T('层', 'layer'), LANG === 'zh' ? r.layer : r.layer_en);
    h += row(T('档位', 'tier'), LANG === 'zh' ? r.tier : r.tier_en);
    h += row(T('单一来源', 'single source'), r.single ? T('是', 'yes') : T('否', 'no'));
    h += row(T('页码', 'page'), r['page_' + LANG]);
    return h;
  }
  var h = '<h4>' + coName(co) + ' · ' + y + '</h4><table>';
  h += rowset(T('每列车英里收入', 'Receipts per train mile'), c.rows.R);
  if (c.rows.E) {
    h += rowset(T('每列车英里营运支出', 'Working expenditure per train mile'), c.rows.E);
    h += row(T('净收入 ＝ 两个数值之差', 'Net receipts = difference of the two printed values'), fmtD(c.N) + ' ' + unit());
    h += row(T('营运比率（营运支出占收入的比例）', 'Expenditure as share of receipts'), fmtPct(c.share));
  }
  h += '</table>';
  h += '<div class="pc-file">' + T('来源：贸易部铁路年报，经本项目转录并核对的比值表。', 'Source: task 010 return box, ' + D.meta.source.file + ' (sha256 ' + D.meta.source.sha256.slice(0, 12) + '…); row selection rule in README.') + '</div>';
  return h;
}
function openProv(c, co, y) { $('pc-body').innerHTML = provHtml(c, co, y); pc.style.display = 'block'; }
$('pc-close').addEventListener('click', function () { pc.style.display = 'none'; });

/* ── 控件 ── */
$('yslider').addEventListener('input', function () { state.yi = +this.value; render(); });
var timer = null;
function stopPlay() { if (timer) { clearInterval(timer); timer = null; $('play').textContent = T('▶ 播放', '▶ Play'); } }
$('play').addEventListener('click', function () {
  if (timer) { stopPlay(); return; }
  $('play').textContent = T('‖ 暂停', '‖ Pause');
  timer = setInterval(function () { state.yi = (state.yi + 1) % YEARS.length; render(); }, 900);
});
function marks() {
  var row = $('marks'), list = $('markslist'); row.innerHTML = ''; list.innerHTML = '';
  D.calendar.forEach(function (c, k) {
    var i = YEARS.indexOf(c.year), pct = 100 * i / (YEARS.length - 1);
    var m = document.createElement('div'); m.className = 'mk' + (k % 2 ? ' lo' : ''); m.style.left = pct + '%';
    m.innerHTML = '<i></i><b>' + c.year + '</b><br>' + c['short_' + LANG];
    m.setAttribute('data-year', c.year);
    m.addEventListener('click', function () { stopPlay(); state.yi = i; render(); });
    row.appendChild(m);
    var li = document.createElement('li'); li.textContent = c.year + ' ' + c['short_' + LANG]; li.setAttribute('data-year', c.year);
    li.addEventListener('click', function () { stopPlay(); state.yi = i; render(); });
    list.appendChild(li);
  });
}
function scaleLine() {
  $('scaleline').textContent = T('尺：' + S.toFixed(4) + ' 像素 = 1 便士／列车英里，同一把尺贯穿 25 年与全部带子；公司柱下的三个数依次是收入、营运支出、净收入，便士。',
    'Scale: ' + S.toFixed(4) + ' px = 1 d per train mile, one scale across all 25 years and all bands; the three figures under each column are receipts, working expenditure and net receipts, in pence.');
}

/* ══ 第三节：十四张小图 ══ */
var SM = { w: 288, h: 214, left: 36, right: 10, top: 28, bottom: 26 };
SM.x0 = SM.left; SM.x1 = SM.w - SM.right; SM.y0 = SM.top; SM.y1 = SM.h - SM.bottom;
function smX(year) { return SM.x0 + (SM.x1 - SM.x0) * (year - D.meta.year0) / (D.meta.year1 - D.meta.year0); }
function smY(v) { return SM.y1 - (SM.y1 - SM.y0) * v / LY.small.ymax; }
var SMALLS = [];
function smalls() {
  var grid = $('smalls'); grid.innerHTML = ''; SMALLS = [];
  D.series.forEach(function (s) {
    var box = hel('div', 'small'); box.setAttribute('data-panel', s.id);
    var svg = el('svg', { viewBox: '0 0 ' + SM.w + ' ' + SM.h, role: 'img', 'aria-label': s[LANG], id: 'sm-' + s.id });
    var gg = el('g', { 'class': 'grid' });
    LY.small.yticks.forEach(function (v) { gg.appendChild(el('line', { x1: SM.x0, x2: SM.x1, y1: smY(v), y2: smY(v) })); });
    svg.appendChild(gg);
    var ax = el('g', { 'class': 'axis' });
    ax.appendChild(el('line', { x1: SM.x0, x2: SM.x1, y1: SM.y1, y2: SM.y1 }));
    ax.appendChild(el('line', { x1: SM.x0, x2: SM.x0, y1: SM.y0, y2: SM.y1 }));
    svg.appendChild(ax);
    LY.small.yticks.forEach(function (v) { svg.appendChild(el('text', { 'class': 'tick', x: SM.x0 - 5, y: smY(v) + 4, 'text-anchor': 'end' }, String(v))); });
    LY.small.xticks.forEach(function (yr) { svg.appendChild(el('text', { 'class': 'tick', x: smX(yr), y: SM.y1 + 17, 'text-anchor': 'middle' }, String(yr))); });
    D.calendar.forEach(function (c) { svg.appendChild(el('line', { 'class': 'lawline', 'data-year': c.year, x1: smX(+c.year), x2: smX(+c.year), y1: SM.y0, y2: SM.y1 })); });
    svg.appendChild(el('text', { 'class': 'smtitle', x: SM.x0, y: 17 }, s[LANG]));
    svg.appendChild(el('text', { 'class': 'smunit', x: SM.x1, y: 17, 'text-anchor': 'end' }, T('便士／列车英里', 'd per train mile')));
    /* 三条线：缺年断开、东南与东南查塔姆的接缝断开 */
    var byYear = {}; s.points.forEach(function (p) { byYear[p.year] = p; });
    ['R', 'E', 'N'].forEach(function (k) {
      var seg = [], segs = [];
      for (var y = D.meta.year0; y <= D.meta.year1; y++) {
        var p = byYear[String(y)], has = p && p[k] != null;
        if (has) seg.push([smX(y), smY(p[k])]);
        if (!has || (s.join_break && String(y) === s.join_break)) { if (seg.length) segs.push(seg); seg = []; }
      }
      if (seg.length) segs.push(seg);
      segs.forEach(function (sg, i) {
        if (sg.length < 2) return;
        svg.appendChild(el('polyline', { 'class': 'sline ' + k, 'data-kind': k, points: sg.map(function (q) { return q[0].toFixed(2) + ',' + q[1].toFixed(2); }).join(' ') }));
      });
    });
    s.points.forEach(function (p) {
      ['R', 'E', 'N'].forEach(function (k) {
        if (p[k] == null) return;
        var single = (k === 'R' && p.singleR) || (k === 'E' && p.singleE) || (k === 'N' && (p.singleR || p.singleE));
        var c = el('circle', { 'class': 'pt ' + k + (single ? ' single' : ''), cx: smX(+p.year).toFixed(2), cy: smY(p[k]).toFixed(2), r: 2.6,
                               'data-year': p.year, 'data-kind': k, 'data-value': p[k], 'data-single': single ? 1 : 0 });
        svg.appendChild(c);
      });
    });
    var hair = el('line', { 'class': 'hair', x1: 0, x2: 0, y1: SM.y0, y2: SM.y1, style: 'display:none' });
    svg.appendChild(hair);
    var hv = el('rect', { 'class': 'hover', x: SM.x0, y: SM.y0, width: SM.x1 - SM.x0, height: SM.y1 - SM.y0 });
    function nearest(ev) {
      var r = svg.getBoundingClientRect(), fx = (ev.clientX - r.left) / r.width * SM.w;
      var yr = Math.round(D.meta.year0 + (fx - SM.x0) / (SM.x1 - SM.x0) * (D.meta.year1 - D.meta.year0));
      yr = Math.max(D.meta.year0, Math.min(D.meta.year1, yr));
      return byYear[String(yr)] || null;
    }
    hv.addEventListener('mousemove', function (ev) {
      var p = nearest(ev);
      if (!p) { hideTip(); hair.style.display = 'none'; return; }
      hair.setAttribute('x1', smX(+p.year)); hair.setAttribute('x2', smX(+p.year)); hair.style.display = '';
      showTip(ev, '<b>' + coName(p.co) + ' · ' + p.year + '</b><br>' + valuesHtml(p, p.year, p.co));
    });
    hv.addEventListener('mouseleave', function () { hideTip(); hair.style.display = 'none'; });
    hv.addEventListener('click', function (ev) { var p = nearest(ev); if (p) openProv(p, p.co, p.year); });
    svg.appendChild(hv);
    box.appendChild(svg); grid.appendChild(box);
    SMALLS.push({ s: s, svg: svg, byYear: byYear });
  });
}
function smallsLegend() {
  var lg = $('smlegend'); lg.innerHTML = '';
  var items = [
    ['<span class="swatch" style="background:#8d8358"></span>', T('收入', 'Receipts')],
    ['<span class="swatch" style="background:#5d6a71"></span>', T('营运支出', 'Working expenditure')],
    ['<span class="swatch" style="background:#4f6b86"></span>', T('净收入', 'Net receipts')],
    ['<span class="swatch" style="background:#fff;border:1.5px solid #5d6a71;width:9px;border-radius:50%"></span>', T('空心点：单一来源的数值', 'Hollow point: single-source row')],
    ['<span class="swatch law"></span>', T('法律生效年份 1893、1894、1898、1900', 'Legal years 1893, 1894, 1898, 1900')]
  ];
  items.forEach(function (it) { var sp = document.createElement('span'); sp.innerHTML = it[0] + it[1]; lg.appendChild(sp); });
}

/* ══ 第四至第八节（2026-09-24）══
   画法：图题用节标题档，图例在图上方，法律年份一像素朱红虚线，缺数不画、不跨缺年连线，单源画空心点。
   第五、六节的十四条线共用一套加深机制：悬停一条线临时加深，公司按钮固定加深。 */
var S4 = D.s4, S5 = D.s5, S6 = D.s6, S7 = D.s7, S8 = D.s8, PGS = D.pages, DI = D.dicts;
var LAWS = D.calendar.map(function (c) { return +c.year; });
function pgLab(i) { return i == null ? '' : PGS[i][LANG === 'zh' ? 0 : 1]; }
function tierLab(t) { return LANG === 'zh' ? t : (DI.tier[t] || t); }
function layerLab(l) { return LANG === 'zh' ? l : (DI.layer[l] || l); }
function dkLab(k) { if (k === '面板') return T('面板里的一格', 'a panel cell'); var d = DI.dk[k]; return d ? d[LANG === 'zh' ? 0 : 1] : k; }
function fmtN(v, dec) { return (+v).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }); }
function r2(k, v) { return '<tr><td>' + k + '</td><td>' + v + '</td></tr>'; }
function openCard(html) { $('pc-body').innerHTML = html; pc.style.display = 'block'; }
function panelName(p) { return p[LANG]; }
function lawLines(svg, x, y0, y1, lo, hi) {
  LAWS.forEach(function (yr) { if (yr < lo || yr > hi) return;
    svg.appendChild(el('line', { 'class': 'lawline', 'data-year': yr, x1: x(yr), x2: x(yr), y1: y0, y2: y1 })); });
}
function infoRows(info, unitTxt, dec) {
  var h = info.raw != null ? r2(T('面板里的数', 'value in the panel'), fmtN(info.raw, 0)) : r2(T('年报数值', 'value'), fmtN(info.v, dec) + ' ' + unitTxt);
  h += r2(T('来历', 'kind'), dkLab(info.dk));
  h += r2(T('层', 'layer'), layerLab(info.ly));
  h += r2(T('档位', 'tier'), tierLab(info.t) + (info.td && info.td !== info.t ? T('；分母 ', '; denominator ') + tierLab(info.td) : ''));
  h += r2(T('单一来源', 'single source'), info.s ? T('是', 'yes') : T('否', 'no'));
  h += r2(T('页码', 'page'), pgLab(info.p) + (info.pd != null && info.pd !== info.p ? T('；分母 ', '; denominator ') + pgLab(info.pd) : ''));
  if (info.tbl) h += r2(T('面板表', 'panel table'), DI.table[info.tbl] ? DI.table[info.tbl][LANG === 'zh' ? 0 : 1] : info.tbl);
  return h;
}
var SRC_RATIO = function () { return T('来源：贸易部铁路年报，经本项目转录并核对的比值表。', 'Source: task 010 return box, ' + D.meta.source.file + ' (sha256 ' + D.meta.source.sha256.slice(0, 12) + '…).'); };
var SRC_PANEL = function () { return T('来源：贸易部铁路年报，经本项目转录的面板；进分析的格按口径文件第一节判定。', 'Source: panel_all_v2.csv (sha256 a3bdfa249803…); cells in the analysis under section 1 of the definitions file.'); };
function axesSmall(svg, G, x, y, xticks, yticks, fmtTick) {
  var gg = el('g', { 'class': 'grid' });
  yticks.forEach(function (v) { gg.appendChild(el('line', { x1: G.l, x2: G.w - G.r, y1: y(v), y2: y(v) })); });
  svg.appendChild(gg);
  var ax = el('g', { 'class': 'axis' });
  ax.appendChild(el('line', { x1: G.l, x2: G.w - G.r, y1: G.h - G.b, y2: G.h - G.b }));
  ax.appendChild(el('line', { x1: G.l, x2: G.l, y1: G.t, y2: G.h - G.b }));
  svg.appendChild(ax);
  yticks.forEach(function (v) { svg.appendChild(el('text', { 'class': 'tick', x: G.l - 5, y: y(v) + 4, 'text-anchor': 'end' }, fmtTick ? fmtTick(v) : String(v))); });
  xticks.forEach(function (yr) { svg.appendChild(el('text', { 'class': 'tick', x: x(yr), y: G.h - G.b + 17, 'text-anchor': 'middle' }, String(yr))); });
}
/* 共用的斜线图案：只定义一次，免得页内标识重复 */
(function () {
  var s = el('svg', { width: 0, height: 0, style: 'position:absolute;width:0;height:0', 'aria-hidden': 'true' });
  var d = el('defs', {}), p = el('pattern', { id: 'hatch', patternUnits: 'userSpaceOnUse', width: 5, height: 5, patternTransform: 'rotate(45)' });
  p.appendChild(el('rect', { x: 0, y: 0, width: 5, height: 5, fill: '#ffffff' }));
  p.appendChild(el('line', { x1: 0, y1: 0, x2: 0, y2: 5, stroke: '#9aa2a6', 'stroke-width': 1.4 }));
  d.appendChild(p); s.appendChild(d); document.body.appendChild(s);
})();

/* ── 第四节 ── */
var S4C = { w: 1200, h: 420, l: 84, r: 18, t: 30, b: 64 };
var S4K = S4.items.map(function (i) { return i.k; });
var S4L = S4K.concat(['resid']);
function itemName(k) {
  if (k === 'resid') return T('未分项差额', 'Unitemised difference');
  var it = S4.items.filter(function (i) { return i.k === k; })[0];
  return it[LANG] + (k === 'duty' ? T('（栏名待核）', ' (column title not yet checked)') : '');
}
function s4x(y) { return S4C.l + (S4C.w - S4C.l - S4C.r) * (y - S4.y0) / (S4.y1 - S4.y0); }
function s4y(v) { return S4C.t + (S4C.h - S4C.t - S4C.b) * (1 - v / S4.ymax); }
function s4yearTip(yd) {
  var h = '<b>' + yd.year + ' · ' + T('全体中位数', 'median over companies') + '</b><br>';
  if (!yd.drawn) return h + T('五项与合计齐全的公司 ' + yd.n + ' 家，不足五家，不画；另有 ' + yd.n_total_only + ' 家只有合计。',
                               yd.n + ' companies with all five items and the total, fewer than five, not drawn; ' + yd.n_total_only + ' more have the total only.');
  h += T('用到的公司 ', 'companies used ') + yd.n + '<br>';
  S4L.slice().reverse().forEach(function (k) { h += itemName(k) + ' ' + fmtD(yd.med[k]) + ' ' + unit() + '<br>'; });
  h += T('六层中位数之和 ', 'sum of the six medians ') + fmtD(yd.sum_med) + ' ' + unit() + '<br>' + T('合计的中位数 ', 'median of the totals ') + fmtD(yd.total) + ' ' + unit();
  return h;
}
function s4yearCard(yd) {
  var in14 = yd.companies.filter(function (c) { return CO[c]; }), other = yd.companies.length - in14.length;
  var h = '<h4>' + yd.year + ' · ' + T('全体中位数', 'median over companies') + '</h4><table>';
  h += r2(T('五项与合计齐全的公司', 'companies with all five items and the total'), String(yd.n) + (yd.drawn ? '' : T('（不足五家，不画）', ' (fewer than five, not drawn)')));
  h += r2(T('其中十四家', 'of which among the fourteen'), in14.map(function (c) { return CO[c][LANG]; }).join(T('、', ', ')) || T('无', 'none'));
  h += r2(T('其余公司', 'other companies'), String(other));
  if (yd.n) {
    S4L.forEach(function (k) { h += r2(itemName(k), fmtD(yd.med[k]) + ' ' + unit()); });
    h += r2(T('六层中位数之和', 'sum of the six medians'), fmtD(yd.sum_med) + ' ' + unit());
    h += r2(T('合计的中位数', 'median of the totals'), fmtD(yd.total) + ' ' + unit());
  }
  return h + '</table><div class="pc-file">' + SRC_RATIO() + '</div>';
}
function s4stack() {
  var svg = $('s4stack'); while (svg.firstChild) svg.removeChild(svg.firstChild);
  var G = S4C, yt = S4.yticks;
  axesSmall(svg, G, s4x, s4y, [1896, 1900, 1905, 1910], yt);
  svg.appendChild(el('text', { 'class': 'smunit', x: 4, y: 16 }, T('便士／列车英里', 'd per train mile')));
  /* 连续画出的年份分段 */
  var segs = [], seg = [];
  S4.all.forEach(function (yd) { if (yd.drawn) seg.push(yd); else { if (seg.length) segs.push(seg); seg = []; } });
  if (seg.length) segs.push(seg);
  segs.forEach(function (sg, si) {
    var base = sg.map(function () { return 0; });
    S4L.forEach(function (k) {
      var top = sg.map(function (yd, i) { return base[i] + yd.med[k]; });
      var pts = sg.map(function (yd, i) { return s4x(+yd.year).toFixed(2) + ',' + s4y(top[i]).toFixed(2); })
        .concat(sg.slice().reverse().map(function (yd, j) { var i = sg.length - 1 - j; return s4x(+yd.year).toFixed(2) + ',' + s4y(base[i]).toFixed(2); }));
      svg.appendChild(el('polygon', { 'class': 'stk it-' + k, 'data-k': k, 'data-seg': si, points: pts.join(' ') }));
      base = top;
    });
    svg.appendChild(el('polyline', { 'class': 'totline', 'data-seg': si, points: sg.map(function (yd) { return s4x(+yd.year).toFixed(2) + ',' + s4y(yd.total).toFixed(2); }).join(' ') }));
    sg.forEach(function (yd) { svg.appendChild(el('circle', { 'class': 'totpt', cx: s4x(+yd.year).toFixed(2), cy: s4y(yd.total).toFixed(2), r: 2.6, 'data-year': yd.year })); });
  });
  lawLines(svg, s4x, G.t, G.h - G.b, S4.y0, S4.y1);   /* 画在面积之上，否则被盖住 */
  var und = S4.all.filter(function (yd) { return !yd.drawn; });
  if (und.length) {
    var xm = (s4x(+und[0].year) + s4x(+und[und.length - 1].year)) / 2, ym = s4y(S4.ymax * 0.55);
    svg.appendChild(el('text', { 'class': 'note', x: xm, y: ym, 'text-anchor': 'middle' }, T('齐全的公司', 'Fewer than five')));
    svg.appendChild(el('text', { 'class': 'note', x: xm, y: ym + 16, 'text-anchor': 'middle' }, T('不足五家，不画', 'complete companies')));
  }
  var step = s4x(S4.y0 + 1) - s4x(S4.y0);
  svg.appendChild(el('text', { 'class': 'cnt', x: 4, y: G.h - G.b + 38 }, T('家数', 'n')));
  S4.all.forEach(function (yd) {
    svg.appendChild(el('text', { 'class': 'cnt', 'data-year': yd.year, x: s4x(+yd.year), y: G.h - G.b + 38, 'text-anchor': 'middle' }, String(yd.n)));
    var hr = el('rect', { 'class': 'yhit', x: s4x(+yd.year) - step / 2, y: G.t, width: step, height: G.h - G.b - G.t });
    hr.addEventListener('mousemove', function (ev) { showTip(ev, s4yearTip(yd)); });
    hr.addEventListener('mouseleave', hideTip);
    hr.addEventListener('click', function () { openCard(s4yearCard(yd)); });
    svg.appendChild(hr);
  });
}
function s4legend() {
  var lg = $('s4legend'); lg.innerHTML = '';
  var items = S4L.slice().reverse().map(function (k) {
    return [k === 'resid' ? '<span class="swatch hatch"></span>' : '<span class="swatch" style="background:var(--it-' + k + ')"></span>', itemName(k)];
  });
  items.push(['<span class="swatch" style="background:#2f3a40;height:2px"></span>', T('合计的中位数（上图）', 'Median of the totals (upper chart)')]);
  items.push(['<span class="swatch" style="background:#fff;border:1px solid #5d6a71"></span>', T('分项不全，只画合计（小图）', 'Items incomplete, total only (small charts)')]);
  items.push(['<span class="swatch" style="background:#fff;border:1.5px solid #2f3a40;width:9px;border-radius:50%"></span>', T('柱内有单一来源的数值（小图）', 'Column contains a single-source value (small charts)')]);
  items.push(['<span class="swatch law"></span>', T('法律生效年份 1898、1900', 'Years Acts took effect: 1898, 1900')]);
  items.forEach(function (it) { var sp = document.createElement('span'); sp.innerHTML = it[0] + it[1]; lg.appendChild(sp); });
}
var SM4 = { w: 288, h: 214, l: 36, r: 10, t: 28, b: 26 };
function sm4x(y) { return SM4.l + (SM4.w - SM4.l - SM4.r) * (y - (S4.y0 - 0.5)) / (S4.y1 - S4.y0 + 1); }
function sm4y(v) { return (SM4.h - SM4.b) - (SM4.h - SM4.b - SM4.t) * v / S4.ymax; }
function s4ptTip(pm, p) {
  var h = '<b>' + CO[p.co][LANG] + ' · ' + p.year + '</b><br>';
  if (p.complete) S4L.slice().reverse().forEach(function (k) { h += itemName(k) + ' ' + fmtD(k === 'resid' ? p.resid : p.items[k]) + ' ' + unit() + (k !== 'resid' && p.rows[k].s ? T('（单一来源）', ' (single source)') : '') + '<br>'; });
  else h += T('分项不全，缺：', 'Items missing: ') + p.missing.map(itemName).join(T('、', ', ')) + '<br>';
  h += T('合计 ', 'Total ') + fmtD(p.total) + ' ' + unit() + (p.rows.total.s ? T('（单一来源）', ' (single source)') : '');
  return h;
}
function s4ptCard(pm, p) {
  var h = '<h4>' + CO[p.co][LANG] + ' · ' + p.year + '</h4><table>';
  S4K.concat(['total']).forEach(function (k) {
    if (!p.rows[k]) { h += '<tr><td colspan="2"><b>' + itemName(k) + '</b>' + T('：没有数', ': no value') + '</td></tr>'; return; }
    h += '<tr><td colspan="2"><b>' + (k === 'total' ? T('每列车英里营运支出合计', 'Working expenditure per train mile, total') : T('每列车英里支出：', 'Expenditure per train mile: ') + itemName(k)) + '</b></td></tr>';
    h += infoRows(p.rows[k], unit(), 2);
  });
  if (p.complete) h += r2(T('未分项差额 ＝ 合计减五项之和', 'Unitemised difference = total minus the five items'), fmtD(p.resid) + ' ' + unit());
  return h + '</table><div class="pc-file">' + SRC_RATIO() + '</div>';
}
var SMALLS4 = [];
function s4smalls() {
  var grid = $('s4smalls'); grid.innerHTML = ''; SMALLS4 = [];
  var bw = (sm4x(S4.y0 + 1) - sm4x(S4.y0)) * 0.66;
  S4.panels.forEach(function (pm) {
    var box = hel('div', 'small'); box.setAttribute('data-panel', pm.id);
    var svg = el('svg', { viewBox: '0 0 ' + SM4.w + ' ' + SM4.h, role: 'img', 'aria-label': pm[LANG], id: 's4-' + pm.id });
    axesSmall(svg, SM4, sm4x, sm4y, [1900, 1905, 1910], S4.yticks);
    svg.appendChild(el('text', { 'class': 'smtitle', x: SM4.l, y: 17 }, pm[LANG]));
    svg.appendChild(el('text', { 'class': 'smunit', x: SM4.w - SM4.r, y: 17, 'text-anchor': 'end' }, T('便士／列车英里', 'd per train mile')));
    pm.points.forEach(function (p) {
      var cx = sm4x(+p.year), g = el('g', { 'class': 'col', 'data-year': p.year });
      if (p.complete) {
        var base = 0;
        S4L.forEach(function (k) {
          var v = k === 'resid' ? p.resid : p.items[k];
          g.appendChild(el('rect', { 'class': 'stk it-' + k, 'data-k': k, 'data-v': v, x: (cx - bw / 2).toFixed(2), width: bw.toFixed(2), y: sm4y(base + v).toFixed(3), height: (sm4y(base) - sm4y(base + v)).toFixed(3) }));
          base += v;
        });
      } else {
        g.appendChild(el('rect', { 'class': 'outline', 'data-k': 'total', 'data-v': p.total, x: (cx - bw / 2).toFixed(2), width: bw.toFixed(2), y: sm4y(p.total).toFixed(3), height: (sm4y(0) - sm4y(p.total)).toFixed(3) }));
      }
      var anyS = Object.keys(p.rows).some(function (k) { return p.rows[k].s; });
      if (anyS) g.appendChild(el('circle', { 'class': 'hollowtop', cx: cx.toFixed(2), cy: (sm4y(p.total) - 5).toFixed(2), r: 2.6 }));
      var hr = el('rect', { 'class': 'yhit', x: (cx - bw / 2 - 2).toFixed(2), y: SM4.t, width: (bw + 4).toFixed(2), height: SM4.h - SM4.b - SM4.t });
      hr.addEventListener('mousemove', function (ev) { showTip(ev, s4ptTip(pm, p)); });
      hr.addEventListener('mouseleave', hideTip);
      hr.addEventListener('click', function () { openCard(s4ptCard(pm, p)); });
      g.appendChild(hr);
      svg.appendChild(g);
    });
    lawLines(svg, sm4x, SM4.t, SM4.h - SM4.b, S4.y0, S4.y1);   /* 画在柱之上 */
    box.appendChild(svg); grid.appendChild(box);
    SMALLS4.push({ pm: pm, svg: svg });
  });
}

/* ── 第五、六节共用：十四条线与加深 ── */
var HL = { pinned: null, cur: null, svgs: [], byCo: {} };
function topOf(svg) { return +svg.getAttribute('data-ymax'); }
function hlRegister(svg, co, e) { (HL.byCo[co] = HL.byCo[co] || []).push(e); }
function hlApply(co, force) {
  if (!force && HL.cur === co) return;
  if (HL.cur && HL.byCo[HL.cur]) HL.byCo[HL.cur].forEach(function (e) { e.classList.remove('on'); });
  HL.cur = co;
  HL.svgs.forEach(function (s) { s.classList.toggle('hl', !!co); });
  if (co && HL.byCo[co]) HL.byCo[co].forEach(function (e) { e.classList.add('on'); });
  Array.prototype.forEach.call(document.querySelectorAll('#copick button[data-co]'), function (b) { b.classList.toggle('on', b.getAttribute('data-co') === HL.pinned); });
}
function lineSet(svg, lines, x, y, tipFn, cardFn) {
  svg.classList.add('hlable'); HL.svgs.push(svg);
  var ptsLater = [];
  lines.forEach(function (ln) {
    var by = {}; ln.points.forEach(function (p) { by[p.year] = p; });
    var yrs = ln.points.map(function (p) { return +p.year; }), segs = [], seg = [];
    for (var yy = yrs[0]; yrs.length && yy <= yrs[yrs.length - 1]; yy++) {
      var p = by[String(yy)];
      if (p && !p.over) seg.push(p);
      if (!p || p.over || (ln.join_break && String(yy) === ln.join_break)) { if (seg.length) segs.push(seg); seg = []; }
    }
    if (seg.length) segs.push(seg);
    function near(ev) {
      var r = svg.getBoundingClientRect(), vb = svg.viewBox.baseVal, fx = (ev.clientX - r.left) / r.width * vb.width, best = null;
      ln.points.forEach(function (p) { var d = Math.abs(x(+p.year) - fx); if (!best || d < best.d) best = { d: d, p: p }; });
      return best && best.p;
    }
    segs.forEach(function (sg) {
      var pts = sg.map(function (p) { return x(+p.year).toFixed(2) + ',' + y(p.v).toFixed(2); }).join(' ');
      if (sg.length > 1) {
        var pl = el('polyline', { 'class': 'cline', 'data-co': ln.id, points: pts }); svg.appendChild(pl); hlRegister(svg, ln.id, pl);
        var hit = el('polyline', { 'class': 'chit', 'data-co': ln.id, points: pts });
        hit.addEventListener('mousemove', function (ev) { hlApply(ln.id); var p = near(ev); if (p) showTip(ev, tipFn(ln, p)); });
        hit.addEventListener('mouseleave', function () { hideTip(); hlApply(HL.pinned); });
        hit.addEventListener('click', function (ev) { var p = near(ev); if (p) openCard(cardFn(ln, p)); });
        svg.appendChild(hit);
      }
    });
    ln.points.forEach(function (p) {
      var c;
      if (p.over) {   /* 超出刻度：画在图顶的朝上三角，数值见悬停框 */
        var ox = x(+p.year), oy = y(topOf(svg));
        c = el('path', { 'class': 'cpt over', 'data-co': ln.id, 'data-year': p.year, 'data-top': oy.toFixed(2), d: 'M' + ox.toFixed(2) + ',' + (oy - 1).toFixed(2) + ' l4,7 l-8,0 Z' });
      } else c = el('circle', { 'class': 'cpt' + (p.s ? ' single' : ''), 'data-co': ln.id, 'data-year': p.year, cx: x(+p.year).toFixed(2), cy: y(p.v).toFixed(2), r: 2.4 });
      c.addEventListener('mousemove', function (ev) { hlApply(ln.id); showTip(ev, tipFn(ln, p)); });
      c.addEventListener('mouseleave', function () { hideTip(); hlApply(HL.pinned); });
      c.addEventListener('click', function () { openCard(cardFn(ln, p)); });
      ptsLater.push(c); hlRegister(svg, ln.id, c);
    });
  });
  /* 点放在全部线与感应线之上，悬停一个点总是落在它自己的公司上 */
  ptsLater.forEach(function (c) { svg.appendChild(c); });
}
function copick() {
  var box = $('copick'); box.innerHTML = '';
  box.appendChild(hel('span', null, T('固定加深一家公司（第五、六节全部图）：', 'Keep one company darkened (all charts in sections 5 and 6):')));
  S5.lines.forEach(function (ln) {
    var b = hel('button', null, ln[LANG]); b.type = 'button'; b.setAttribute('data-co', ln.id);
    b.addEventListener('click', function () { HL.pinned = HL.pinned === ln.id ? null : ln.id; hlApply(HL.pinned, true); });
    box.appendChild(b);
  });
  var c = hel('button', null, T('清除', 'Clear')); c.type = 'button'; c.id = 'copick-clear';
  c.addEventListener('click', function () { HL.pinned = null; hlApply(null, true); });
  box.appendChild(c);
}

/* ── 第五节 ── */
var S5C = { w: 1200, h: 470, l: 84, r: 18, t: 30, b: 70 };
function s5x(y) { return S5C.l + (S5C.w - S5C.l - S5C.r) * (y - S5.y0) / (S5.y1 - S5.y0); }
function s5y(v) { var sc = S5.scale; return S5C.t + (S5C.h - S5C.t - S5C.b) * (1 - (v - sc.min) / (sc.max - sc.min)); }
function s5tip(ln, p) {
  return '<b>' + CO[p.co][LANG] + ' · ' + p.year + '</b><br>' + T('营运支出占收入 ', 'Expenditure as share of receipts ') + fmtPct(p.v) + (p.s ? T('（单一来源）', ' (single source)') : '') + '<br>' + dkLab(p.dk);
}
function s5card(ln, p) {
  return '<h4>' + CO[p.co][LANG] + ' · ' + p.year + '</h4><table><tr><td colspan="2"><b>' + T('支出占收入比', 'Expenditure as share of receipts') + '</b></td></tr>'
    + infoRows(p, '%', 2) + '</table><div class="pc-file">' + SRC_RATIO() + '</div>';
}
function s5bandTip(b) {
  var h = '<b>' + b.year + ' · ' + T('其余公司', 'other companies') + ' ' + b.n + T(' 家', '') + '</b><br>';
  if (b.drawn) h += T('第 25 百分位 ', '25th percentile ') + fmtPct(b.q1) + '<br>' + T('中位数 ', 'median ') + fmtPct(b.med) + '<br>' + T('第 75 百分位 ', '75th percentile ') + fmtPct(b.q3) + '<br>';
  else h += T('少于五家，不画带', 'fewer than five, no band drawn') + '<br>';
  return h + T('十四家里有数的 ', 'of the fourteen, with a value: ') + b.n14 + T(' 家', '');
}
function s5chart() {
  var svg = $('s5chart'); while (svg.firstChild) svg.removeChild(svg.firstChild);
  var G = S5C; svg.setAttribute('data-ymax', S5.scale.max);
  axesSmall(svg, G, s5x, s5y, [1885, 1890, 1895, 1900, 1905, 1910], S5.scale.ticks, function (v) { return v + '%'; });
  svg.appendChild(el('text', { 'class': 'smunit', x: 4, y: 16 }, T('营运支出占收入的百分比', 'per cent of receipts')));
  var step = s5x(S5.y0 + 1) - s5x(S5.y0);
  S5.band.forEach(function (b) {
    var hr = el('rect', { 'class': 'yhit', x: s5x(+b.year) - step / 2, y: G.t, width: step, height: G.h - G.b - G.t });
    hr.addEventListener('mousemove', function (ev) { showTip(ev, s5bandTip(b)); });
    hr.addEventListener('mouseleave', hideTip);
    svg.appendChild(hr);
  });
  var segs = [], seg = [];
  S5.band.forEach(function (b) { if (b.drawn) seg.push(b); else { if (seg.length) segs.push(seg); seg = []; } });
  if (seg.length) segs.push(seg);
  segs.forEach(function (sg, si) {
    if (sg.length === 1) {
      var b = sg[0], cx = s5x(+b.year);
      svg.appendChild(el('rect', { 'class': 'band', 'data-seg': si, 'data-year': b.year, x: cx - 4, width: 8, y: s5y(b.q3).toFixed(2), height: (s5y(b.q1) - s5y(b.q3)).toFixed(2) }));
      svg.appendChild(el('line', { 'class': 'bandmed', 'data-seg': si, x1: cx - 4, x2: cx + 4, y1: s5y(b.med).toFixed(2), y2: s5y(b.med).toFixed(2) }));
      return;
    }
    var pts = sg.map(function (b) { return s5x(+b.year).toFixed(2) + ',' + s5y(b.q3).toFixed(2); })
      .concat(sg.slice().reverse().map(function (b) { return s5x(+b.year).toFixed(2) + ',' + s5y(b.q1).toFixed(2); }));
    svg.appendChild(el('polygon', { 'class': 'band', 'data-seg': si, points: pts.join(' ') }));
    svg.appendChild(el('polyline', { 'class': 'bandmed', 'data-seg': si, points: sg.map(function (b) { return s5x(+b.year).toFixed(2) + ',' + s5y(b.med).toFixed(2); }).join(' ') }));
  });
  lawLines(svg, s5x, G.t, G.h - G.b, S5.y0, S5.y1);
  lineSet(svg, S5.lines, s5x, s5y, s5tip, s5card);
  svg.appendChild(el('text', { 'class': 'cnt', x: 4, y: G.h - G.b + 38 }, T('其余家数', 'others')));
  S5.band.forEach(function (b) { svg.appendChild(el('text', { 'class': 'cnt', 'data-year': b.year, x: s5x(+b.year), y: G.h - G.b + 38, 'text-anchor': 'middle' }, String(b.n))); });
}
function s5legend() {
  var lg = $('s5legend'); lg.innerHTML = '';
  [['<span class="swatch" style="background:#5d6a71;height:2px"></span>', T('十四家公司，每条线一家', 'The fourteen companies, one line each')],
   ['<span class="swatch" style="background:#d6d9d6"></span>', T('其余公司的第 25 至第 75 百分位', 'Other companies, 25th to 75th percentile')],
   ['<span class="swatch" style="background:#8a949a;height:2px"></span>', T('其余公司的中位数', 'Other companies, median')],
   ['<span class="swatch" style="background:#fff;border:1.5px solid #5d6a71;width:9px;border-radius:50%"></span>', T('空心点：单一来源的数值', 'Hollow point: single-source value')],
   ['<span class="swatch law"></span>', T('法律生效年份 1893、1894、1898、1900', 'Years Acts took effect: 1893, 1894, 1898, 1900')]
  ].forEach(function (it) { var sp = document.createElement('span'); sp.innerHTML = it[0] + it[1]; lg.appendChild(sp); });
  var d = S5.dropped;
  $('s5cap').textContent = T('其余公司共 ' + S5.n_other_keys + ' 个键、' + S5.n_rows_other + ' 个值。去掉的行：大南方与西部（爱尔兰）的机读短键 ' + (d['短键'] || 0) + ' 行；分母为第二号表运输收入的 ' + (d['第二号表收入回退'] || 0) + ' 行；东南与东南查塔姆同年都有数时，东南的 ' + (d['东南与东南查塔姆同年'] || 0) + ' 行。',
    'Other companies: ' + S5.n_other_keys + ' keys, ' + S5.n_rows_other + ' values. Rows left out: ' + (d['短键'] || 0) + ' under the truncated key for Great Southern & Western (Ireland); ' + (d['第二号表收入回退'] || 0) + ' with Return No. 2 traffic receipts as the denominator; ' + (d['东南与东南查塔姆同年'] || 0) + ' South Eastern rows in years when the South Eastern & Chatham also has a value.');
}

/* ── 第六节 ── */
var SM6 = { w: 288, h: 214, l: 48, r: 10, t: 40, b: 26 };
function sm6x(y) { return SM6.l + (SM6.w - SM6.l - SM6.r) * (y - S6.y0) / (S6.y1 - S6.y0); }
var SMALLS6 = [];
function s6fmtTick(ch) { return function (v) { return ch.scale.max >= 1000 ? fmtN(v, 0) : String(v) + (ch.unit_en === '%' ? '%' : ''); }; }
function s6unit(ch) { return ch.unit_en === '%' ? '%' : (ch.kind === 'abs' ? ch['unit_' + LANG] : ' ' + ch['unit_' + LANG]); }
function s6tip(ch) { return function (ln, p) {
  var v = ch.kind === 'abs' ? fmtN(p.v, 2) + ' ' + ch['unit_' + LANG] + T('（', ' (') + fmtN(p.raw, 0) + T('）', ')')
                             : fmtN(p.v, 2) + (ch.unit_en === '%' ? '%' : ' ' + ch['unit_' + LANG]);
  return '<b>' + CO[p.co][LANG] + ' · ' + p.year + '</b><br>' + ch[LANG] + ' ' + v + (p.s ? T('（单一来源）', ' (single source)') : '')
    + (p.over ? '<br>' + T('超出刻度，画在图顶；这个值疑有转录错位，待核', 'Beyond the scale, drawn at the top; this value is suspected of a transcription misalignment and awaits checking') : '');
}; }
function s6card(ch) { return function (ln, p) {
  var h = '<h4>' + CO[p.co][LANG] + ' · ' + p.year + '</h4><table><tr><td colspan="2"><b>' + ch[LANG] + '</b></td></tr>';
  if (ch.kind === 'ratio') h += r2(T('算法', 'definition'), ch['numden_' + LANG]);
  else h += r2(T('图上的数', 'value drawn'), fmtN(p.v, 4) + ' ' + ch['unit_' + LANG]);
  h += infoRows(p, ch.unit_en === '%' ? '%' : ch['unit_' + LANG], 2);
  return h + '</table><div class="pc-file">' + (ch.kind === 'abs' ? SRC_PANEL() : SRC_RATIO()) + '</div>';
}; }
function s6charts() {
  SMALLS6 = [];
  [['s6ratio', 'ratio'], ['s6abs', 'abs']].forEach(function (gk) {
    var grid = $(gk[0]); grid.innerHTML = ''; grid.classList.add('s6');
    S6.charts.filter(function (ch) { return ch.kind === gk[1]; }).forEach(function (ch) {
      var box = hel('div', 'small small6'); box.setAttribute('data-chart', ch.id);
      var svg = el('svg', { viewBox: '0 0 ' + SM6.w + ' ' + SM6.h, role: 'img', 'aria-label': ch[LANG], id: 's6-' + ch.id, 'data-ymax': ch.scale.max });
      var sc = ch.scale, y = function (v) { return (SM6.h - SM6.b) - (SM6.h - SM6.b - SM6.t) * (v - sc.min) / (sc.max - sc.min); };
      axesSmall(svg, SM6, sm6x, y, [1890, 1895], sc.ticks, s6fmtTick(ch));
      lawLines(svg, sm6x, SM6.t, SM6.h - SM6.b, S6.y0, S6.y1);
      svg.appendChild(el('text', { 'class': 'smtitle', x: 4, y: 15 }, ch[LANG]));
      svg.appendChild(el('text', { 'class': 'smunit', x: 4, y: 32 }, ch.kind === 'abs' ? ch['unit_' + LANG] : (ch.unit_en === '%' ? T('百分比', 'per cent') : ch['unit_' + LANG])));
      lineSet(svg, ch.lines, sm6x, y, s6tip(ch), s6card(ch));
      box.appendChild(svg); grid.appendChild(box);
      SMALLS6.push({ ch: ch, svg: svg, y: y });
    });
  });
}
function sw6(inner) { return '<svg width="16" height="16" viewBox="0 0 16 16" style="vertical-align:middle;margin-right:6px">' + inner + '</svg>'; }
function s6legend() {
  var lg = $('s6legend'); lg.innerHTML = '';
  [['<span class="swatch" style="background:#5d6a71;height:2px"></span>', T('十四家公司，每条线一家；鼠标停在线上加深', 'The fourteen companies, one line each; hover to darken')],
   ['<span class="swatch" style="background:#fff;border:1.5px solid #5d6a71;width:9px;border-radius:50%"></span>', T('空心点：单一来源的数值', 'Hollow point: single-source value')],
   [sw6('<path d="M8,3 L13,12 L3,12 Z" fill="#5d6a71"/>'), T('超出刻度的值，画在图顶，数值见悬停框', 'Value beyond the scale, drawn at the top; see the tooltip')],
   ['<span class="swatch law"></span>', T('法律生效年份 1893、1894、1898', 'Years Acts took effect: 1893, 1894, 1898')]
  ].forEach(function (it) { var sp = document.createElement('span'); sp.innerHTML = it[0] + it[1]; lg.appendChild(sp); });
}

/* ── 第七节 ── */
var S7C = { w: 1200, h: 330, l: 40, r: 40, axisY: 176 };
function s7x(y) { return S7C.l + (S7C.w - S7C.l - S7C.r) * (y - S7.x0) / (S7.x1 - S7.x0); }
var CAT = {
  counter: ['反证', 'counter-evidence'], matched: ['对上', 'matched'], notrace: ['无痕', 'no trace'],
  untestable: ['没法检验', 'cannot be tested'], nottested: ['不检验', 'not tested'], yearonly: ['只对上年份', 'year only']
};
function dirLab(d) { return d === 'up' ? T('上行', 'up') : T('下行', 'down'); }
function famLab(zh, en) { return LANG === 'zh' ? zh : en; }
function ruleResultShort(r) {
  var parts = [], A = 0, Ay = 0, Ar = 0, B = 0;
  r.pairs.forEach(function (i) { var p = S7.pairs[i];
    if (p.dir === 'B') B++; else if (p.verdict === '对上（同族同向）') A++; else if (p.verdict === '对上（同族反向）') Ar++; else Ay++; });
  if (r.gap != null) { var g = S7.gaps[r.gap]; parts.push(LANG === 'zh' ? g.kind : g.kind_en); }
  if (A) parts.push(T('对上 ' + A + ' 处', A + ' matched'));
  if (B) parts.push(T('有痕 ' + B + ' 处', B + ' traces'));
  if (Ar) parts.push(T('同族反向 ' + Ar + ' 处', Ar + ' opposite direction'));
  if (Ay) parts.push(T('只对上年份 ' + Ay + ' 处', Ay + ' year only'));
  return parts.join(T('；', '; '));
}
function ruleDetail(r) {
  var h = '<table>';
  h += r2(T('类别', 'category'), LANG === 'zh' ? r.sec_zh : r.sec_en);
  if (r.passed_zh) h += r2(T('通过', 'passed'), LANG === 'zh' ? r.passed_zh : r.passed_en);
  h += r2(T('生效', 'in effect'), LANG === 'zh' ? r.eff_zh : r.eff_en);
  h += r2(T('出处档', 'source grade'), (LANG === 'zh' ? r.dsk_zh : r.dsk_en) + (r.src_zh !== r.dsk_zh ? T('；日历原文：', '; calendar: ') + (LANG === 'zh' ? r.src_zh : r.src_en) : ''));
  h += r2(T('预期', 'expected'), LANG === 'zh' ? r.exp_zh : r.exp_en);
  h += r2(T('预期动的比值族', 'expected families'), (LANG === 'zh' ? r.families : r.families_en).join(T('、', ', ')) || T('无', 'none'));
  if (r.gap != null) {
    var g = S7.gaps[r.gap];
    h += r2(T('没法检验或未配上', 'not tested or not matched'), (LANG === 'zh' ? g.kind + '。' + g.verdict_zh : g.kind_en + '. ' + g.verdict_en) + (g.shortfall_zh ? (LANG === 'zh' ? '（' + g.shortfall_zh + '）' : ' (' + g.shortfall_en + ')') : ''));
  }
  r.pairs.forEach(function (i) {
    var p = S7.pairs[i];
    var lab = p.dir === 'A' ? T('从折点找规则', 'fold to rule') : T('从规则找折点', 'rule to fold');
    h += r2(lab, T(p.family + ' ' + p.year + ' 年' + dirLab(p.evdir) + '折点，覆盖 ' + fmtN(p.share, 2) + '：' + p.verdict,
                   p.family_en + ', ' + dirLab(p.evdir) + ' fold in ' + p.year + ', share ' + fmtN(p.share, 2) + ': ' + p.verdict_en));
  });
  h += '</table>';
  if (r.note_zh) h += '<div class="lognote">' + T(r.note_zh, r.note_en) + '</div>';
  return h;
}
function foldDetail(f) {
  return '<table>' + r2(T('比值族', 'family'), famLab(f.family, f.family_en)) + r2(T('方向', 'direction'), dirLab(f.direction))
    + r2(T('同向公司', 'companies in the same direction'), f.n_same + T(' 家，可检验 ', ' of ') + f.n_elig + T(' 家', ' testable') + T('；覆盖 ', '; share ') + fmtN(f.share, 2))
    + r2(T('判语', 'verdict'), T(f.verdict_zh, f.verdict_en)) + '</table>';
}
function markerShape(cat, cx, cy) {
  if (cat === 'counter') return el('path', { 'class': 'mk mk-counter', d: 'M' + cx + ',' + (cy - 7) + ' L' + (cx + 7) + ',' + cy + ' L' + cx + ',' + (cy + 7) + ' L' + (cx - 7) + ',' + cy + ' Z' });
  if (cat === 'nottested') return el('path', { 'class': 'mk mk-nottested', d: 'M' + (cx - 5) + ',' + (cy - 5) + ' L' + (cx + 5) + ',' + (cy + 5) + ' M' + (cx + 5) + ',' + (cy - 5) + ' L' + (cx - 5) + ',' + (cy + 5) });
  return el('circle', { 'class': 'mk mk-' + cat, cx: cx, cy: cy, r: 5.5 });
}
function openRow(id) {
  var row = document.querySelector('.rrow[data-id="' + id + '"]'); if (!row) return;
  row.classList.add('open');
  Array.prototype.forEach.call(document.querySelectorAll('#s7axis .rmk, #s7axis .fmk'), function (m) { m.classList.toggle('sel', m.getAttribute('data-id') === id); });
  row.scrollIntoView({ block: 'nearest' });
}
function s7axis() {
  var svg = $('s7axis'); while (svg.firstChild) svg.removeChild(svg.firstChild);
  var G = S7C, ay = G.axisY;
  svg.appendChild(el('rect', { 'class': 'panelbg', x: s7x(1883.5), y: 22, width: s7x(1912.5) - s7x(1883.5), height: G.h - 30 }));
  svg.appendChild(el('text', { 'class': 'note', x: s7x(1883.5) + 6, y: 38 }, T('面板覆盖 1884 至 1912 年', 'Panel, 1884 to 1912')));
  LAWS.forEach(function (yr) { svg.appendChild(el('line', { 'class': 'lawline', 'data-year': yr, x1: s7x(yr), x2: s7x(yr), y1: 44, y2: ay })); });
  svg.appendChild(el('line', { 'class': 'axisline', x1: G.l, x2: G.w - G.r, y1: ay, y2: ay }));
  for (var yr = 1870; yr <= 1915; yr += 5) {
    svg.appendChild(el('line', { 'class': 'axisline', x1: s7x(yr), x2: s7x(yr), y1: ay, y2: ay + 5 }));
    svg.appendChild(el('text', { 'class': 'tick', x: s7x(yr), y: ay + 19, 'text-anchor': 'middle' }, String(yr)));
  }
  svg.appendChild(el('text', { 'class': 'note', x: G.l, y: 60 }, T('日历条目', 'Calendar entries')));
  svg.appendChild(el('text', { 'class': 'note', x: G.l, y: ay + 44 }, T('没有规则对应的折点', 'Folds with no matching rule')));
  var stack = {};
  S7.rules.forEach(function (r) {
    var k = stack[r.year] = (stack[r.year] || 0) + 1, cx = s7x(r.year), cy = ay - 14 - (k - 1) * 17;
    var g = el('g', { 'class': 'rmk', 'data-id': 'r-' + r.rid, 'data-cat': r.cat, 'data-year': r.year });
    g.appendChild(el('circle', { 'class': 'ring', cx: cx, cy: cy, r: 9 }));
    g.appendChild(markerShape(r.cat, cx, cy));
    g.appendChild(el('circle', { cx: cx, cy: cy, r: 9, fill: 'transparent' }));
    g.addEventListener('mousemove', function (ev) { showTip(ev, '<b>' + r.year + ' · ' + r[LANG] + '</b><br>' + T('检验结果：', 'Result: ') + ruleResultShort(r)); });
    g.addEventListener('mouseleave', hideTip);
    g.addEventListener('click', function () { openRow('r-' + r.rid); });
    svg.appendChild(g);
  });
  var fst = {};
  S7.folds.forEach(function (f) {
    var k = fst[f.year] = (fst[f.year] || 0) + 1, cx = s7x(f.year), cy = ay + 34 + (k - 1) * 15;
    var d = f.direction === 'up' ? 'M' + cx + ',' + (cy - 5) + ' L' + (cx + 5) + ',' + (cy + 4) + ' L' + (cx - 5) + ',' + (cy + 4) + ' Z'
                                 : 'M' + cx + ',' + (cy + 5) + ' L' + (cx + 5) + ',' + (cy - 4) + ' L' + (cx - 5) + ',' + (cy - 4) + ' Z';
    var g = el('g', { 'class': 'fmk', 'data-id': 'f-' + f.rank + '-' + f.family + '-' + f.year + '-' + f.direction, 'data-kind': f.kind, 'data-year': f.year });
    g.appendChild(el('path', { 'class': 'fmk-' + f.kind, d: d }));
    g.appendChild(el('circle', { cx: cx, cy: cy, r: 7, fill: 'transparent' }));
    g.addEventListener('mousemove', function (ev) { showTip(ev, '<b>' + f.year + ' · ' + famLab(f.family, f.family_en) + ' · ' + dirLab(f.direction) + '</b><br>' + T(f.verdict_zh, f.verdict_en)); });
    g.addEventListener('mouseleave', hideTip);
    g.addEventListener('click', function () { openRow(g.getAttribute('data-id')); });
    svg.appendChild(g);
  });
}
function s7lists() {
  var box = $('s7rules'); box.innerHTML = '';
  S7.rules.forEach(function (r) {
    var row = hel('div', 'rrow'); row.setAttribute('data-id', 'r-' + r.rid); row.setAttribute('data-cat', r.cat);
    var hd = hel('div', 'rhead');
    hd.appendChild(hel('span', 'ryr', String(r.year)));
    hd.appendChild(hel('span', 'rname', r[LANG]));
    hd.appendChild(hel('span', 'rres', ruleResultShort(r)));
    hd.addEventListener('click', function () { row.classList.toggle('open'); });
    var dt = hel('div', 'rdet'); dt.innerHTML = ruleDetail(r);
    row.appendChild(hd); row.appendChild(dt); box.appendChild(row);
  });
  var fb = $('s7folds'); fb.innerHTML = '';
  S7.folds.slice().sort(function (a, b) { return a.year - b.year || a.rank - b.rank; }).forEach(function (f) {
    var id = 'f-' + f.rank + '-' + f.family + '-' + f.year + '-' + f.direction;
    var row = hel('div', 'rrow'); row.setAttribute('data-id', id); row.setAttribute('data-kind', f.kind);
    var hd = hel('div', 'rhead');
    hd.appendChild(hel('span', 'ryr', String(f.year)));
    hd.appendChild(hel('span', 'rname', famLab(f.family, f.family_en) + T('，', ', ') + dirLab(f.direction)));
    hd.appendChild(hel('span', 'rres', f.kind === 'none' ? T('无规则可对', 'no rule to match') : T('只对上年份', 'year only')));
    hd.addEventListener('click', function () { row.classList.toggle('open'); });
    var dt = hel('div', 'rdet'); dt.innerHTML = foldDetail(f);
    row.appendChild(hd); row.appendChild(dt); fb.appendChild(row);
  });
}
function s7legend() {
  var lg = $('s7legend'); lg.innerHTML = '';
  function sw(svgInner) { return '<svg width="16" height="16" viewBox="0 0 16 16" style="vertical-align:middle;margin-right:6px">' + svgInner + '</svg>'; }
  [[sw('<circle cx="8" cy="8" r="5.5" fill="#4f6b86"/>'), T('对上：同族同向，或从规则找到有痕', 'Matched: same family and direction, or a trace found from the rule')],
   [sw('<path d="M8,1 L15,8 L8,15 L1,8 Z" fill="#2f3a40"/>'), T('反证', 'Counter-evidence')],
   [sw('<circle cx="8" cy="8" r="5.5" fill="#fff" stroke="#4f6b86" stroke-width="1.8"/>'), T('无痕', 'No trace')],
   [sw('<circle cx="8" cy="8" r="5.5" fill="#fff" stroke="#9aa2a6" stroke-width="1.5"/>'), T('没法检验：窗口在面板之外，或公司数不够', 'Cannot be tested: window outside the panel, or too few companies')],
   [sw('<path d="M3,3 L13,13 M13,3 L3,13" stroke="#9aa2a6" stroke-width="1.8"/>'), T('不检验：不预期影响任何比值', 'Not tested: no ratio expected to move')],
   [sw('<path d="M8,3 L13,12 L3,12 Z" fill="#5d6a71"/>'), T('轴下：无规则可对的折点，尖朝上为上行', 'Below the axis: fold with no rule to match, pointing up for an upward fold')],
   [sw('<path d="M8,3 L13,12 L3,12 Z" fill="#fff" stroke="#5d6a71" stroke-width="1.3"/>'), T('轴下：只对上年份的折点', 'Below the axis: fold matching a rule in year only')],
   ['<span class="swatch law"></span>', T('法律生效年份 1893、1894、1898、1900', 'Years Acts took effect: 1893, 1894, 1898, 1900')]
  ].forEach(function (it) { var sp = document.createElement('span'); sp.innerHTML = it[0] + it[1]; lg.appendChild(sp); });
}

/* ── 第八节 ── */
function s8table() {
  var tb = document.querySelector('#s8table tbody'); tb.innerHTML = '';
  S8.items.forEach(function (it) {
    var tr = document.createElement('tr'); tr.setAttribute('data-k', it.k);
    tr.appendChild(hel('td', null, it[LANG + '_h']));
    tr.appendChild(hel('td', null, it[LANG]));
    tr.appendChild(hel('td', null, it['where_' + LANG]));
    tb.appendChild(tr);
  });
}
/* 说明文字里的数字：一律从 data.js 填 */
function numVals() {
  var c = S7.counts;
  return {
    's4.resid.n': fmtN(S4.resid.n, 0), 's4.resid.min': fmtD(S4.resid.min), 's4.resid.max': fmtD(S4.resid.max), 's4.resid.med': fmtD(S4.resid.med),
    's4.years': S4.drawn_years[0] + T(' 至 ', '–') + S4.drawn_years[1], 's4.max_gap': fmtD(S4.max_gap),
    's7.n': String(c.rules), 's7.甲': String(c.by_sec['甲']), 's7.乙': String(c.by_sec['乙']), 's7.丙': String(c.by_sec['丙']), 's7.丁': String(c.by_sec['丁']),
    's7.pairs': String(c.pairs), 's7.pairsA': String(c.pairs_A), 's7.pairsB': String(c.pairs_B), 's7.gaps': String(c.gaps), 's7.folds': String(c.folds)
  };
}
function fillNums() {
  var v = numVals();
  Array.prototype.forEach.call(document.querySelectorAll('span[data-k]'), function (sp) { var k = sp.getAttribute('data-k'); if (k in v) sp.textContent = v[k]; });
}
/* 语言扫描用：新节所有悬停框、出处卡与展开说明的文字，只生成一次 */
var S48TEXT = null;
function s48Text() {
  if (S48TEXT != null) return S48TEXT;
  var strip = function (h) { return h.replace(/<[^>]+>/g, ' '); }, t = [];
  S4.all.forEach(function (yd) { t.push(strip(s4yearTip(yd)), strip(s4yearCard(yd))); });
  S4.panels.forEach(function (pm) { pm.points.forEach(function (p) { t.push(strip(s4ptTip(pm, p)), strip(s4ptCard(pm, p))); }); });
  S5.lines.forEach(function (ln) { ln.points.forEach(function (p) { t.push(strip(s5tip(ln, p)), strip(s5card(ln, p))); }); });
  S5.band.forEach(function (b) { t.push(strip(s5bandTip(b))); });
  S6.charts.forEach(function (ch) { var tf = s6tip(ch), cf = s6card(ch); ch.lines.forEach(function (ln) { ln.points.forEach(function (p) { t.push(strip(tf(ln, p)), strip(cf(ln, p))); }); }); });
  S7.rules.forEach(function (r) { t.push(strip(ruleDetail(r)), strip(ruleResultShort(r)), r[LANG]); });
  S7.folds.forEach(function (f) { t.push(strip(foldDetail(f)), T(f.verdict_zh, f.verdict_en)); });
  S48TEXT = t.join('\n');
  return S48TEXT;
}

/* ══ 新节的检查（第 17 至 21 组）══ */
function near2(a, b, tol) { return Math.abs(a - b) <= (tol || 0.02); }
function parsePts(s) { return s.trim().split(/\s+/).map(function (q) { var a = q.split(','); return [+a[0], +a[1]]; }); }
/* 17. 第四节回读：堆叠面积每层上下沿、合计中位数线、家数、十四张小图的每一段柱高与差额、空框、单源点、法律线 */
function checkS4() {
  var bad = [], nPoly = 0, nRect = 0, nOutline = 0, nHollow = 0, expHollow = 0;
  var svg = $('s4stack');
  var segs = [], seg = [];
  S4.all.forEach(function (yd) { if (yd.drawn) seg.push(yd); else { if (seg.length) segs.push(seg); seg = []; } });
  if (seg.length) segs.push(seg);
  segs.forEach(function (sg, si) {
    var base = sg.map(function () { return 0; });
    S4L.forEach(function (k) {
      var pg = svg.querySelector('polygon[data-seg="' + si + '"][data-k="' + k + '"]');
      if (!pg) { bad.push('缺层 ' + k); return; }
      nPoly++;
      var pts = parsePts(pg.getAttribute('points')), n = sg.length;
      if (pts.length !== 2 * n) { bad.push('层点数 ' + k); return; }
      sg.forEach(function (yd, i) {
        var top = base[i] + yd.med[k];
        if (!near2(pts[i][0], s4x(+yd.year)) || !near2(pts[i][1], s4y(top))) bad.push('上沿 ' + k + ' ' + yd.year);
        var j = 2 * n - 1 - i;
        if (!near2(pts[j][1], s4y(base[i]))) bad.push('下沿 ' + k + ' ' + yd.year);
      });
      base = base.map(function (b, i) { return b + sg[i].med[k]; });
    });
    /* 六层之和重算 */
    sg.forEach(function (yd, i) { if (!near2(base[i], yd.sum_med, 1e-3)) bad.push('层和 ' + yd.year); if (!near2(yd.sum_med - yd.total, yd.gap, 1e-3)) bad.push('差 ' + yd.year); });
    var tl = svg.querySelector('polyline.totline[data-seg="' + si + '"]'), tp = tl ? parsePts(tl.getAttribute('points')) : [];
    sg.forEach(function (yd, i) { if (!tp[i] || !near2(tp[i][1], s4y(yd.total))) bad.push('合计线 ' + yd.year); });
  });
  S4.all.forEach(function (yd) {
    var t = svg.querySelector('text.cnt[data-year="' + yd.year + '"]');
    if (!t || t.textContent !== String(yd.n)) bad.push('家数 ' + yd.year);
    if (yd.drawn !== (yd.n >= S4.min_n)) bad.push('门槛 ' + yd.year);
  });
  if (svg.querySelectorAll('polygon').length !== nPoly) bad.push('多出的层');
  SMALLS4.forEach(function (m) {
    m.pm.points.forEach(function (p) {
      var g = m.svg.querySelector('g.col[data-year="' + p.year + '"]');
      if (!g) { bad.push(m.pm.id + ' 缺柱 ' + p.year); return; }
      if (Object.keys(p.rows).some(function (k) { return p.rows[k].s; })) expHollow++;
      if (p.complete) {
        var sum5 = S4K.reduce(function (a, k) { return a + p.items[k]; }, 0);
        if (!near2(p.total - sum5, p.resid, 1e-3)) bad.push(m.pm.id + ' 差额 ' + p.year);
        var base = 0;
        S4L.forEach(function (k) {
          var v = k === 'resid' ? p.resid : p.items[k], r = g.querySelector('rect[data-k="' + k + '"]');
          if (!r) { bad.push(m.pm.id + ' 缺段 ' + p.year + k); return; }
          nRect++;
          if (!near2(+r.getAttribute('height'), sm4y(base) - sm4y(base + v), 0.01) || !near2(+r.getAttribute('y'), sm4y(base + v), 0.01)) bad.push(m.pm.id + ' 段高 ' + p.year + k);
          base += v;
        });
        if (!near2(sm4y(base), sm4y(p.total), 0.01)) bad.push(m.pm.id + ' 柱顶不等于合计 ' + p.year);
      } else {
        var o = g.querySelector('rect.outline'); nOutline++;
        if (!o || !near2(+o.getAttribute('height'), sm4y(0) - sm4y(p.total), 0.01)) bad.push(m.pm.id + ' 空框 ' + p.year);
        if (g.querySelectorAll('rect.stk').length) bad.push(m.pm.id + ' 不全却分段 ' + p.year);
      }
    });
    nHollow += m.svg.querySelectorAll('circle.hollowtop').length;
    if (m.svg.querySelectorAll('g.col').length !== m.pm.points.length) bad.push(m.pm.id + ' 柱数');
    [1898, 1900].forEach(function (yr) { var l = m.svg.querySelector('line.lawline[data-year="' + yr + '"]'); if (!l || !near2(+l.getAttribute('x1'), sm4x(yr))) bad.push(m.pm.id + ' 法律线 ' + yr); });
  });
  if (nHollow !== expHollow) bad.push('空心点 ' + nHollow + ' vs ' + expHollow);
  if (SMALLS4.length !== 14) bad.push('小图数 ' + SMALLS4.length);
  return { ok: bad.length === 0, layers: nPoly, segments: nRect, outlines: nOutline, hollow: nHollow, detail: bad.slice(0, 8) };
}
/* 18. 第五节回读：十四条线的点位与断线、其余公司四分位带用原值重算、家数 */
function pctl(v, p) { var s = v.slice().sort(function (a, b) { return a - b; }), pos = (s.length - 1) * p, lo = Math.floor(pos), hi = Math.ceil(pos); return s[lo] + (s[hi] - s[lo]) * (pos - lo); }
function checkLines(svg, lines, x, y, tag) {
  var bad = [], npts = 0, nsingle = 0, exp = 0, expS = 0, nover = 0;
  var step = x(2) - x(1);
  lines.forEach(function (ln) {
    ln.points.forEach(function (p) {
      if (p.over) {
        var o = svg.querySelector('path.over[data-co="' + ln.id + '"][data-year="' + p.year + '"]'), sc = +svg.getAttribute('data-ymax');
        if (!o || !near2(+o.getAttribute('data-top'), y(sc)) || p.v <= sc) bad.push(tag + ' 超刻度点 ' + ln.id + p.year);
        nover++; return;
      }
      exp++; if (p.s) expS++;
      var c = svg.querySelector('circle.cpt[data-co="' + ln.id + '"][data-year="' + p.year + '"]');
      if (!c) { bad.push(tag + ' 缺点 ' + ln.id + p.year); return; }
      if (!near2(+c.getAttribute('cx'), x(+p.year)) || !near2(+c.getAttribute('cy'), y(p.v))) bad.push(tag + ' 点位 ' + ln.id + p.year);
      if (c.classList.contains('single') !== !!p.s) bad.push(tag + ' 单源 ' + ln.id + p.year);
    });
    Array.prototype.forEach.call(svg.querySelectorAll('polyline.cline[data-co="' + ln.id + '"]'), function (pl) {
      var xs = parsePts(pl.getAttribute('points')).map(function (q) { return q[0]; });
      for (var i = 1; i < xs.length; i++) if (!near2(xs[i] - xs[i - 1], step)) bad.push(tag + ' 跨缺年 ' + ln.id);
      if (ln.join_break) for (var j = 1; j < xs.length; j++) if (near2(xs[j - 1], x(+ln.join_break)) && near2(xs[j], x(+ln.join_break + 1))) bad.push(tag + ' 接缝连线 ' + ln.id);
    });
  });
  npts = svg.querySelectorAll('circle.cpt').length; nsingle = svg.querySelectorAll('circle.cpt.single').length;
  if (npts !== exp) bad.push(tag + ' 点数 ' + npts + ' vs ' + exp);
  if (svg.querySelectorAll('path.over').length !== nover) bad.push(tag + ' 超刻度点数');
  if (nsingle !== expS) bad.push(tag + ' 空心点 ' + nsingle + ' vs ' + expS);
  return { bad: bad, points: npts, hollow: nsingle, over: nover };
}
function checkS5() {
  var svg = $('s5chart'), r = checkLines(svg, S5.lines, s5x, s5y, '五'), bad = r.bad, nb = 0;
  var segs = [], seg = [];
  S5.band.forEach(function (b) {
    var t = svg.querySelector('text.cnt[data-year="' + b.year + '"]');
    if (!t || t.textContent !== String(b.n)) bad.push('家数 ' + b.year);
    if (b.vals.length !== b.n) bad.push('值数 ' + b.year);
    if (b.drawn !== (b.n >= S5.min_n)) bad.push('门槛 ' + b.year);
    if (b.drawn) {
      if (!near2(pctl(b.vals, .25), b.q1, 1e-3) || !near2(pctl(b.vals, .5), b.med, 1e-3) || !near2(pctl(b.vals, .75), b.q3, 1e-3)) bad.push('四分位重算 ' + b.year);
      seg.push(b);
    } else { if (seg.length) segs.push(seg); seg = []; }
  });
  if (seg.length) segs.push(seg);
  segs.forEach(function (sg, si) {
    var poly = svg.querySelector('polygon.band[data-seg="' + si + '"]'), rect = svg.querySelector('rect.band[data-seg="' + si + '"]');
    if (sg.length === 1) {
      if (!rect || !near2(+rect.getAttribute('y'), s5y(sg[0].q3)) || !near2(+rect.getAttribute('height'), s5y(sg[0].q1) - s5y(sg[0].q3))) bad.push('单年带 ' + sg[0].year);
      nb++; return;
    }
    if (!poly) { bad.push('缺带 ' + si); return; }
    nb++;
    var pts = parsePts(poly.getAttribute('points')), n = sg.length;
    sg.forEach(function (b, i) { if (!near2(pts[i][1], s5y(b.q3)) || !near2(pts[2 * n - 1 - i][1], s5y(b.q1))) bad.push('带沿 ' + b.year); });
    var ml = parsePts(svg.querySelector('polyline.bandmed[data-seg="' + si + '"]').getAttribute('points'));
    sg.forEach(function (b, i) { if (!near2(ml[i][1], s5y(b.med))) bad.push('中位线 ' + b.year); });
  });
  LAWS.forEach(function (yr) { var l = svg.querySelector('line.lawline[data-year="' + yr + '"]'); if (!l || !near2(+l.getAttribute('x1'), s5x(yr))) bad.push('法律线 ' + yr); });
  if (S5.lines.length !== 14) bad.push('线数 ' + S5.lines.length);
  return { ok: bad.length === 0, lines: S5.lines.length, points: r.points, hollow: r.hollow, bandSegments: nb, detail: bad.slice(0, 8) };
}
/* 19. 第六节回读：十一张图的点位、断线、刻度；绝对量等于面板原值除以一百万 */
function checkS6() {
  var bad = [], np = 0, nh = 0, nov = 0;
  if (SMALLS6.length !== 11) bad.push('图数 ' + SMALLS6.length);
  SMALLS6.forEach(function (m) {
    var r = checkLines(m.svg, m.ch.lines, sm6x, m.y, m.ch.id); bad = bad.concat(r.bad); np += r.points; nh += r.hollow; nov += r.over;
    if (m.ch.kind === 'abs') m.ch.lines.forEach(function (ln) { ln.points.forEach(function (p) { if (!near2(p.raw / 1e6, p.v, 1e-4)) bad.push(m.ch.id + ' 百万换算 ' + p.year); }); });
    m.ch.lines.forEach(function (ln) { ln.points.forEach(function (p) { if (p.v < m.ch.scale.min || (p.v > m.ch.scale.max && !p.over)) bad.push(m.ch.id + ' 出刻度 ' + p.year); if (+p.year < S6.y0 || +p.year > S6.y1) bad.push(m.ch.id + ' 出年份 ' + p.year); }); });
    [1893, 1894, 1898].forEach(function (yr) { var l = m.svg.querySelector('line.lawline[data-year="' + yr + '"]'); if (!l || !near2(+l.getAttribute('x1'), sm6x(yr))) bad.push(m.ch.id + ' 法律线 ' + yr); });
    if (m.svg.querySelector('line.lawline[data-year="1900"]')) bad.push(m.ch.id + ' 画了窗口外的法律线');
  });
  return { ok: bad.length === 0, charts: SMALLS6.length, points: np, hollow: nh, over: nov, detail: bad.slice(0, 8) };
}
/* 20. 第七节：日历全部条目都上屏、每条的结果类别由三份表重算、出处档照表、三组行数、说明段的计数 */
function catOf(r) {
  var cats = {};
  if (r.gap != null) cats[{ '反证': 'counter', '无痕': 'notrace', '不检验': 'nottested', '窗口在面板之外': 'untestable', '公司数不够': 'untestable' }[S7.gaps[r.gap].kind]] = 1;
  r.pairs.forEach(function (i) { var v = S7.pairs[i].verdict; if (v === '对上（同族同向）' || v === '有痕') cats.matched = 1; else if (v.indexOf('只对上年份') === 0) cats.yearonly = 1; });
  return ['counter', 'matched', 'notrace', 'untestable', 'nottested', 'yearonly'].filter(function (c) { return cats[c]; })[0];
}
function checkS7() {
  var bad = [], c = S7.counts;
  var mk = document.querySelectorAll('#s7axis g.rmk'), rows = document.querySelectorAll('#s7rules .rrow');
  if (mk.length !== c.rules || rows.length !== c.rules) bad.push('条目数 ' + mk.length + '／' + rows.length + ' vs ' + c.rules);
  var usedPairs = {}, usedGaps = {};
  S7.rules.forEach(function (r) {
    var m = document.querySelector('#s7axis g.rmk[data-id="r-' + r.rid + '"]'), row = document.querySelector('#s7rules .rrow[data-id="r-' + r.rid + '"]');
    if (!m) { bad.push('缺点 ' + r.year); return; }
    if (m.getAttribute('data-cat') !== catOf(r) || r.cat !== catOf(r)) bad.push('类别 ' + r.year + ' ' + r[LANG]);
    var cx = +(m.querySelector('.mk').getAttribute('cx') || m.querySelector('.ring').getAttribute('cx'));
    if (!near2(cx, s7x(r.year))) bad.push('位置 ' + r.year);
    if (!row || row.querySelector('.rdet').textContent.indexOf(LANG === 'zh' ? r.dsk_zh : r.dsk_en) < 0) bad.push('出处档 ' + r.year);
    r.pairs.forEach(function (i) { usedPairs[i] = 1; }); if (r.gap != null) usedGaps[r.gap] = 1;
  });
  if (Object.keys(usedPairs).length !== c.pairs) bad.push('主表行未全挂上 ' + Object.keys(usedPairs).length);
  if (Object.keys(usedGaps).length !== c.gaps) bad.push('没法检验表未全挂上 ' + Object.keys(usedGaps).length);
  if (document.querySelectorAll('#s7axis g.fmk').length !== c.folds || document.querySelectorAll('#s7folds .rrow').length !== c.folds) bad.push('折点组行数');
  var v = numVals();
  Array.prototype.forEach.call(document.querySelectorAll('#s7 span[data-k]'), function (sp) { if (sp.textContent !== v[sp.getAttribute('data-k')]) bad.push('说明段计数 ' + sp.getAttribute('data-k')); });
  var s4sp = document.querySelectorAll('#s4 span[data-k]');
  Array.prototype.forEach.call(s4sp, function (sp) { if (sp.textContent !== v[sp.getAttribute('data-k')]) bad.push('第四节说明数 ' + sp.getAttribute('data-k')); });
  LAWS.forEach(function (yr) { if (!document.querySelector('#s7axis line.lawline[data-year="' + yr + '"]')) bad.push('法律线 ' + yr); });
  return { ok: bad.length === 0, rules: mk.length, pairs: c.pairs, gaps: c.gaps, folds: c.folds, cats: c.cats, detail: bad.slice(0, 8) };
}
/* 21. 第八节：表的每一行都在、每一行里的数出自 data.js */
function checkS8() {
  var bad = [], rows = document.querySelectorAll('#s8table tbody tr');
  if (rows.length !== S8.items.length) bad.push('行数 ' + rows.length);
  S8.items.forEach(function (it) {
    var tr = document.querySelector('#s8table tr[data-k="' + it.k + '"]');
    if (!tr) { bad.push('缺行 ' + it.k); return; }
    var txt = tr.children[1].textContent;
    if (txt !== it[LANG]) bad.push('文字 ' + it.k);
    it.nums.forEach(function (n) { if (txt.indexOf(fmtN(n, 0)) < 0 && txt.indexOf(String(n)) < 0) bad.push('数 ' + it.k + ' ' + n); });
  });
  return { ok: bad.length === 0, rows: rows.length, detail: bad.slice(0, 8) };
}

/* ══ 检查层 ══ */
function parseD(d) {
  var nums = d.replace(/[MLZ]/g, ' ').trim().split(/[\s,]+/).map(Number);
  var pts = []; for (var i = 0; i + 1 < nums.length; i += 2) pts.push([nums[i], nums[i + 1]]);
  return pts;
}
function bandEdges(pathEl) {
  var pts = parseD(pathEl.getAttribute('d')), n = pts.length / 2;
  return { A: pts.slice(0, n), B: pts.slice(n).reverse() };
}
function pt(x, y) { var p = svgEl.createSVGPoint(); p.x = x; p.y = y; return p; }
function checkWidths() {
  var viol = 0, maxDev = 0, checked = 0, detail = [];
  CUR.bands.forEach(function (b) {
    var e = $(b.id); if (!e) { viol++; detail.push('缺 ' + b.id); return; }
    var ed = bandEdges(e), bad = false;
    for (var i = 0; i < ed.A.length; i++) {
      var w = ed.B[i][0] - ed.A[i][0], dev = Math.abs(w - b.amount * S);
      if (dev > maxDev) maxDev = dev;
      if (dev > 0.01 || Math.abs(ed.B[i][1] - ed.A[i][1]) > 0.001) { bad = true; if (detail.length < 6) detail.push(b.id + ' dev=' + dev.toFixed(3)); break; }
    }
    if (bad) viol++; checked++;
  });
  return { ok: viol === 0, bandsChecked: checked, violations: viol, maxDev: +maxDev.toFixed(4), detail: detail };
}
function checkSplit() {
  var bad = [];
  CUR.yd.companies.forEach(function (c) {
    if (c.E == null) return;
    if (Math.abs(c.E + c.N - c.R) > 1e-6) bad.push(c.co + ' E+N−R=' + (c.E + c.N - c.R));
    if (Math.abs(c.E * S + c.N * S - c.R * S) > 1e-6) bad.push(c.co + ' 像素不闭合');
  });
  return { ok: bad.length === 0, companies: CUR.yd.n_split, detail: bad };
}
function checkTopNodes() {
  if (!CUR.yd.split) return { ok: !$('n-E') && !$('n-N'), note: '非分股年，不应有顶部节点' };
  var bad = [], sE = 0, sN = 0;
  CUR.yd.companies.forEach(function (c) { if (c.E != null) { sE += c.E; sN += c.N; } });
  var e = $('n-E'), n = $('n-N');
  if (!e || !n) return { ok: false, detail: ['缺顶部节点'] };
  if (Math.abs(+e.getAttribute('width') - sE * S) > 0.01) bad.push('n-E ' + e.getAttribute('width') + ' vs ' + (sE * S));
  if (Math.abs(+n.getAttribute('width') - sN * S) > 0.01) bad.push('n-N ' + n.getAttribute('width') + ' vs ' + (sN * S));
  if (Math.abs(sE - CUR.yd.sumE) > 1e-6 || Math.abs(sN - CUR.yd.sumN) > 1e-6) bad.push('与数据层 sumE/sumN 不一致');
  CUR.yd.companies.forEach(function (c) { var r = $('n-co-' + c.co); if (!r || Math.abs(+r.getAttribute('width') - c.R * S) > 0.01) bad.push('柱宽 ' + c.co); });
  return { ok: bad.length === 0, sumE: sE, sumN: sN, detail: bad };
}
function checkOrder() {
  var xs = CUR.yd.companies.map(function (c) { return { x: +$('n-co-' + c.co).getAttribute('x'), R: c.R }; });
  var bad = 0; for (var i = 1; i < xs.length; i++) if (!(xs[i].x > xs[i - 1].x) || xs[i].R > xs[i - 1].R + 1e-9) bad++;
  return { ok: bad === 0, n: xs.length, violations: bad };
}
function textBoxSvg(t) {
  var r = t.getBoundingClientRect(), m = svgEl.getScreenCTM().inverse();
  function conv(x, y) { var p = svgEl.createSVGPoint(); p.x = x; p.y = y; p = p.matrixTransform(m); return [p.x, p.y]; }
  var a = conv(r.left, r.top), b = conv(r.right, r.bottom);
  return { x0: a[0], y0: a[1], x1: b[0], y1: b[1] };
}
function checkTextBands() {
  var bad = [], texts = svgEl.querySelectorAll('text'), paths = CUR.bands.map(function (b) { return $(b.id); });
  Array.prototype.forEach.call(texts, function (t) {
    var bb = textBoxSvg(t), pts = [];
    [0, .5, 1].forEach(function (fx) { [0, .5, 1].forEach(function (fy) { pts.push([bb.x0 + (bb.x1 - bb.x0) * fx, bb.y0 + (bb.y1 - bb.y0) * fy]); }); });
    var hit = paths.some(function (p) { return pts.some(function (q) { try { return p.isPointInFill(pt(q[0], q[1])); } catch (e) { return false; } }); });
    if (hit && bad.length < 8) bad.push((t.textContent || '').slice(0, 20));
  });
  return { ok: bad.length === 0, texts: texts.length, detail: bad };
}
function checkIds() {
  var seen = {}, dup = 0; Array.prototype.forEach.call(document.querySelectorAll('[id]'), function (e) { if (seen[e.id]) dup++; seen[e.id] = 1; });
  return { ok: dup === 0, duplicates: dup };
}
function checkAnchors() {
  var bad = [];
  Object.keys(D.anchors).forEach(function (k) {
    var m = /^(\d{4})-(.+)-([RE])$/.exec(k), yd = D.years.filter(function (y) { return y.year === m[1]; })[0];
    var c = yd && yd.companies.filter(function (c) { return c.co === m[2]; })[0];
    if (!c || Math.abs(c[m[3]] - D.anchors[k]) > 1e-9) bad.push(k);
  });
  return { ok: bad.length === 0, anchors: Object.keys(D.anchors).length, detail: bad };
}
/* 语言扫描：正文、当前年带子与节点的悬停和出处文字、全部小图点的悬停与出处文字 */
function visibleText() {
  var sw = $('langsw'), keep = sw ? sw.textContent : '';
  var t = document.body.innerText || '';
  if (keep) t = t.replace(keep, '');
  CUR.bands.forEach(function (b) { t += '\n' + bandTip(b).replace(/<[^>]+>/g, ' ') + '\n' + provHtml(b.c, b.co, CUR.year).replace(/<[^>]+>/g, ' '); });
  CUR.nodes.forEach(function (nd) { t += '\n' + nodeTip(nd).replace(/<[^>]+>/g, ' '); });
  D.series.forEach(function (s) { s.points.forEach(function (p) { t += '\n' + valuesHtml(p, p.year, p.co).replace(/<[^>]+>/g, ' ') + '\n' + provHtml(p, p.co, p.year).replace(/<[^>]+>/g, ' '); }); });
  t += '\n' + s48Text();   // 第四至第八节：悬停框、出处卡、展开说明（只生成一次）
  return t;
}
function checkLang() {
  var t = visibleText(), bad;
  if (LANG === 'zh') bad = t.match(/[A-Za-z][A-Za-z0-9&'.\-]*/g) || [];
  else bad = t.match(/[㐀-鿿（）：、「」]+/g) || [];
  var uniq = []; bad.forEach(function (w) { if (uniq.indexOf(w) < 0) uniq.push(w); });
  return { ok: bad.length === 0, lang: LANG, hits: bad.length, detail: uniq.slice(0, 12) };
}
function checkMarks() {
  var bad = [];
  D.calendar.forEach(function (c) {
    var m = document.querySelector('#marks .mk[data-year="' + c.year + '"]'), l = document.querySelector('#markslist li[data-year="' + c.year + '"]');
    if (!m || m.textContent.indexOf(c['short_' + LANG]) < 0) bad.push('行内 ' + c.year);
    if (!l || l.textContent.indexOf(c['short_' + LANG]) < 0) bad.push('列表 ' + c.year);
  });
  return { ok: bad.length === 0, marks: D.calendar.length, detail: bad };
}
function checkPerf() { return { ok: state.lastRenderMs != null && state.lastRenderMs < 200, lastRenderMs: +(state.lastRenderMs || 0).toFixed(1) }; }
function checkData() {
  var bad = [], rows = 0, pts = 0;
  D.years.forEach(function (y) {
    if (y.n !== y.companies.length) bad.push(y.year + ' n');
    var sR = 0, sE = 0, sN = 0, ns = 0;
    y.companies.forEach(function (c) { rows += 1 + (c.E != null ? 1 : 0); sR += c.R; if (c.E != null) { sE += c.E; sN += c.N; ns++; } });
    if (Math.abs(sR - y.sumR) > 1e-3) bad.push(y.year + ' sumR');
    if (ns !== y.n_split) bad.push(y.year + ' n_split');
    if (y.split && Math.abs(sE + sN - y.sumR_split) > 1e-3) bad.push(y.year + ' E+N≠R(split)');
  });
  if (rows !== D.meta.source.rows_used) bad.push('rows_used ' + rows + ' vs ' + D.meta.source.rows_used);
  D.series.forEach(function (s) { pts += s.points.length; });
  if (pts !== D.meta.source.points) bad.push('series points ' + pts + ' vs ' + D.meta.source.points);
  /* 小图序列里每个点必须能在 years 里找到同公司同年同值 */
  D.series.forEach(function (s) { s.points.forEach(function (p) {
    var yd = D.years[+p.year - D.meta.year0], c = yd.companies.filter(function (c) { return c.co === p.co; })[0];
    if (!c || c.R !== p.R || (c.E != null) !== (p.E != null) || (c.E != null && c.E !== p.E)) bad.push('series ' + s.id + ' ' + p.year);
  }); });
  return { ok: bad.length === 0, rowsUsed: rows, points: pts, detail: bad };
}
/* 12. 公司标签互不重叠、不出画框 */
function checkLabels() {
  var groups = svgEl.querySelectorAll('g.colab'), boxes = [], bad = [];
  Array.prototype.forEach.call(groups, function (g) {
    var b = null;
    Array.prototype.forEach.call(g.querySelectorAll('text'), function (t) {
      var bb = textBoxSvg(t);
      b = b ? { x0: Math.min(b.x0, bb.x0), y0: Math.min(b.y0, bb.y0), x1: Math.max(b.x1, bb.x1), y1: Math.max(b.y1, bb.y1) } : bb;
    });
    b.co = g.getAttribute('data-co'); boxes.push(b);
    if (b.x0 < 0 || b.x1 > LY.w || b.y1 > LY.h) bad.push('出框 ' + b.co);
  });
  for (var i = 0; i < boxes.length; i++) for (var j = i + 1; j < boxes.length; j++) {
    var a = boxes[i], b = boxes[j];
    if (a.x0 < b.x1 - 0.5 && b.x0 < a.x1 - 0.5 && a.y0 < b.y1 - 0.5 && b.y0 < a.y1 - 0.5) bad.push(a.co + '×' + b.co);
  }
  return { ok: bad.length === 0, labels: boxes.length, detail: bad.slice(0, 8) };
}
/* 13. 字号只有四档：全页每个直接含文字的元素（含 svg text）的计算字号 */
function checkTiers() {
  var hist = {}, bad = [], n = 0;
  var all = document.querySelectorAll('body *');
  Array.prototype.forEach.call(all, function (e) {
    if (e.tagName === 'SCRIPT' || e.tagName === 'STYLE') return;
    var own = false;
    for (var k = 0; k < e.childNodes.length; k++) if (e.childNodes[k].nodeType === 3 && e.childNodes[k].textContent.trim()) own = true;
    if (!own) return;
    var fs = parseFloat(getComputedStyle(e).fontSize); n++;
    hist[fs] = (hist[fs] || 0) + 1;
    if (!TIERS.some(function (t) { return Math.abs(t - fs) < 0.01; }) && bad.length < 8) bad.push(fs + 'px ' + (e.tagName + '.' + e.className).slice(0, 30) + ' ' + (e.textContent || '').trim().slice(0, 14));
  });
  return { ok: bad.length === 0, elements: n, histogram: hist, detail: bad };
}
/* 14. 小图回读：14 张；每个点的 cx、cy 等于数据换算；点数等于序列点数、空心点数等于单源数；四条法律线 x 正确；线段不跨缺年 */
function checkSmalls() {
  var bad = [], npts = 0, nsingle = 0, expectPts = 0, expectSingle = 0;
  if (SMALLS.length !== 14) bad.push('小图数 ' + SMALLS.length);
  SMALLS.forEach(function (m) {
    var s = m.s;
    s.points.forEach(function (p) {
      ['R', 'E', 'N'].forEach(function (k) {
        if (p[k] == null) return; expectPts++;
        var single = (k === 'R' && p.singleR) || (k === 'E' && p.singleE) || (k === 'N' && (p.singleR || p.singleE));
        if (single) expectSingle++;
        var c = m.svg.querySelector('circle[data-year="' + p.year + '"][data-kind="' + k + '"]');
        if (!c) { bad.push(s.id + ' 缺点 ' + p.year + k); return; }
        if (Math.abs(+c.getAttribute('cx') - smX(+p.year)) > 0.01 || Math.abs(+c.getAttribute('cy') - smY(p[k])) > 0.01) bad.push(s.id + ' 点位 ' + p.year + k);
        if ((c.classList.contains('single') ? 1 : 0) !== (single ? 1 : 0)) bad.push(s.id + ' 单源标记 ' + p.year + k);
      });
    });
    var cs = m.svg.querySelectorAll('circle'); npts += cs.length;
    Array.prototype.forEach.call(cs, function (c) { if (c.classList.contains('single')) nsingle++; });
    D.calendar.forEach(function (c) {
      var l = m.svg.querySelector('line.lawline[data-year="' + c.year + '"]');
      if (!l || Math.abs(+l.getAttribute('x1') - smX(+c.year)) > 0.01) bad.push(s.id + ' 法律线 ' + c.year);
    });
    /* 每条折线相邻两点横向间距必须正好一年，即没有跨缺年连线 */
    var step = smX(D.meta.year0 + 1) - smX(D.meta.year0);
    Array.prototype.forEach.call(m.svg.querySelectorAll('polyline'), function (pl) {
      var xs = pl.getAttribute('points').split(' ').map(function (q) { return +q.split(',')[0]; });
      for (var i = 1; i < xs.length; i++) if (Math.abs(xs[i] - xs[i - 1] - step) > 0.02) bad.push(s.id + ' 跨缺年连线 ' + pl.getAttribute('data-kind'));
      if (s.join_break) { var xb = smX(+s.join_break), xa = smX(+s.join_break + 1);
        for (var j = 1; j < xs.length; j++) if (Math.abs(xs[j - 1] - xb) < 0.02 && Math.abs(xs[j] - xa) < 0.02) bad.push(s.id + ' 接缝处连线'); }
    });
  });
  if (npts !== expectPts) bad.push('点数 ' + npts + ' vs ' + expectPts);
  if (nsingle !== expectSingle) bad.push('空心点 ' + nsingle + ' vs ' + expectSingle);
  return { ok: bad.length === 0, panels: SMALLS.length, points: npts, hollow: nsingle, detail: bad.slice(0, 8) };
}
/* 15. 摘要卡对数：卡上的数字与 summary 里的中位数一致 */
function checkCards() {
  var c = D.summary.cards, bad = [];
  function fig(cls) { var e = document.querySelector('.card[data-card="' + cls + '"] .fig'); return e ? e.textContent : ''; }
  if (fig('rpm') !== fmt1(c.rpm.v1) + ' → ' + fmt1(c.rpm.v2) + ' → ' + fmt1(c.rpm.v3)) bad.push('rpm');
  if (fig('epm') !== fmt1(c.epm.v1) + ' → ' + fmt1(c.epm.v2) + ' → ' + fmt1(c.epm.v3)) bad.push('epm');
  if (fig('opr') !== Math.round(c.opr.v1) + '% → ' + Math.round(c.opr.v2) + '%') bad.push('opr');
  if (fig('up').indexOf(String(c.up1900.n_up)) < 0 || fig('up').indexOf(String(c.up1900.n_both)) < 0) bad.push('up');
  /* 中位数本身再核一遍：v1 是 1889–1891 三年中位数的平均 */
  var m = D.summary.rpm, avg = (m['1889'].median + m['1890'].median + m['1891'].median) / 3;
  if (Math.abs(avg - c.rpm.v1) > 0.05) bad.push('rpm.v1 重算 ' + avg.toFixed(2));
  if (Math.abs(D.summary.epm['1896'].median - c.epm.v1) > 0.05) bad.push('epm.v1 重算');
  return { ok: bad.length === 0, cards: document.querySelectorAll('.card').length, detail: bad };
}
/* 16. 说明文字里不出现「本页」「本图」 */
function checkSubject() {
  var t = (document.body.innerText || '') + '\n' + $('s7rules').textContent + '\n' + $('s7folds').textContent, hits = t.match(/本页|本图|这一节/g) || [];
  return { ok: hits.length === 0, hits: hits.length };
}
var CHECKS = [
  { id: 'widths', zh: '带宽回读', en: 'band widths read back', fn: checkWidths, perYear: true },
  { id: 'split', zh: '分股闭合', en: 'split closure', fn: checkSplit, perYear: true },
  { id: 'topnodes', zh: '节点宽度', en: 'node widths', fn: checkTopNodes, perYear: true },
  { id: 'order', zh: '公司排序', en: 'company order', fn: checkOrder, perYear: true },
  { id: 'text', zh: '文字不压带', en: 'text off bands', fn: checkTextBands, perYear: true },
  { id: 'ids', zh: '标识唯一', en: 'unique ids', fn: checkIds, perYear: false },
  { id: 'anchors', zh: '锚定值', en: 'anchors', fn: checkAnchors, perYear: false },
  { id: 'lang', zh: '语言扫描', en: 'language scan', fn: checkLang, perYear: true },
  { id: 'marks', zh: '制度年份标记', en: 'calendar marks', fn: checkMarks, perYear: false },
  { id: 'perf', zh: '渲染耗时', en: 'render time', fn: checkPerf, perYear: false },
  { id: 'data', zh: '数据层一致', en: 'data consistency', fn: checkData, perYear: false },
  { id: 'labels', zh: '公司标签不重叠', en: 'company labels do not overlap', fn: checkLabels, perYear: true },
  { id: 'tiers', zh: '字号四档', en: 'four font sizes only', fn: checkTiers, perYear: false },
  { id: 'smalls', zh: '小图回读', en: 'small multiples read back', fn: checkSmalls, perYear: false },
  { id: 'cards', zh: '摘要卡对数', en: 'summary cards match data', fn: checkCards, perYear: false },
  { id: 'subject', zh: '主语词', en: 'subject words', fn: checkSubject, perYear: false },
  { id: 's4', zh: '支出分项回读', en: 'expenditure items read back', fn: checkS4, perYear: false },
  { id: 's5', zh: '营运比率回读', en: 'operating ratio read back', fn: checkS5, perYear: false },
  { id: 's6', zh: '运量层回读', en: 'traffic charts read back', fn: checkS6, perYear: false },
  { id: 's7', zh: '日历与配对', en: 'calendar and matching', fn: checkS7, perYear: false },
  { id: 's8', zh: '来源与缺口表', en: 'sources and gaps table', fn: checkS8, perYear: false },
];
function runAll(scope) {
  var t0 = performance.now(), groups = [], keepYi = state.yi;
  var yis = scope === 'all' ? YEARS.map(function (_, i) { return i; }) : [state.yi];
  CHECKS.forEach(function (c) {
    var res = { id: c.id, name: c[LANG], ok: true, years: {} };
    if (!c.perYear) { var r = c.fn(); res.ok = r.ok; res.result = r; }
    else yis.forEach(function (i) {
      if (i !== state.yi) { state.yi = i; render(); }
      var r = c.fn(); res.years[YEARS[i]] = r; if (!r.ok) res.ok = false;
    });
    groups.push(res);
  });
  if (state.yi !== keepYi) { state.yi = keepYi; render(); }
  var ok = groups.every(function (g) { return g.ok; });
  var out = { ok: ok, scope: scope, year: YEARS[keepYi], groups: groups, ms: +(performance.now() - t0).toFixed(1), at: new Date().toISOString() };
  window.__checkResult = out;
  var cf = $('checkfail');
  cf.style.display = ok ? 'none' : 'block';
  if (!ok) cf.textContent = T('检查层未通过：', 'Checks failed: ') + groups.filter(function (g) { return !g.ok; }).map(function (g) { return g.name; }).join(T('、', ', '));
  $('checkline').textContent = T('检查层：' + groups.length + ' 组，' + (ok ? '全部通过' : '有未通过') + '，' + (scope === 'all' ? '逐年全查' : '当前年') + '，耗时 ' + out.ms + ' 毫秒',
    'Checks: ' + groups.length + ' groups, ' + (ok ? 'all passed' : 'failures') + ', ' + (scope === 'all' ? 'all years' : 'current year') + ', ' + out.ms + ' ms');
  return out;
}
window.__check = function () { return runAll('all'); };
/* 负对照：改一条带子的宽度只让带宽回读失败；塞一个外文词只让语言扫描失败；塞一个 14px 的词只让字号四档失败 */
window.__neg = function () {
  var out = {};
  function failed(r) { return r.groups.filter(function (g) { return !g.ok; }).map(function (g) { return g.id; }); }
  var b = CUR.bands[0], p = $(b.id), d0 = p.getAttribute('d');
  var ed = bandEdges(p);
  var d1 = 'M' + ed.A.map(function (q) { return q[0] + ',' + q[1]; }).join(' L') + ' L' + ed.B.slice().reverse().map(function (q) { return (q[0] + 3) + ',' + q[1]; }).join(' L') + ' Z';
  p.setAttribute('d', d1);
  out.widthFailed = failed(runAll('current')); p.setAttribute('d', d0);
  out.widthOnly = out.widthFailed.length === 1 && out.widthFailed[0] === 'widths';
  var sp = document.createElement('span'); sp.id = 'neg-inject'; sp.textContent = LANG === 'zh' ? ' Foreign ' : ' 外文 ';
  $('yearnote').appendChild(sp);
  out.langFailed = failed(runAll('current')); sp.parentNode.removeChild(sp);
  out.langOnly = out.langFailed.length === 1 && out.langFailed[0] === 'lang';
  var sp2 = document.createElement('span'); sp2.id = 'neg-inject2'; sp2.style.fontSize = '14px'; sp2.textContent = T('十四像素', 'fourteen');
  $('yearnote').appendChild(sp2);
  out.tierFailed = failed(runAll('current')); sp2.parentNode.removeChild(sp2);
  out.tierOnly = out.tierFailed.length === 1 && out.tierFailed[0] === 'tiers';
  /* 第四至第八节各一个负对照：每个只动这一节的一处，应只有这一组失败 */
  function only(id, mutate, restore) { mutate(); var f = failed(runAll('current')); restore(); return { failed: f, only: f.length === 1 && f[0] === id }; }
  var r4 = document.querySelector('#s4smalls rect.stk'), h4 = r4.getAttribute('height');
  out.s4 = only('s4', function () { r4.setAttribute('height', (+h4 + 3).toFixed(3)); }, function () { r4.setAttribute('height', h4); });
  var t5 = document.querySelector('#s5chart text.cnt[data-year="1899"]'), v5 = t5.textContent;
  out.s5 = only('s5', function () { t5.textContent = String(+v5 + 1); }, function () { t5.textContent = v5; });
  var c6 = document.querySelector('#s6abs circle.cpt'), y6 = c6.getAttribute('cy');
  out.s6 = only('s6', function () { c6.setAttribute('cy', (+y6 - 3).toFixed(2)); }, function () { c6.setAttribute('cy', y6); });
  var m7 = document.querySelector('#s7axis g.rmk'), p7 = m7.parentNode, n7 = m7.nextSibling;
  out.s7 = only('s7', function () { p7.removeChild(m7); }, function () { p7.insertBefore(m7, n7); });
  var td8 = document.querySelector('#s8table tr[data-k="cells"] td:nth-child(2)'), x8 = td8.textContent;
  out.s8 = only('s8', function () { td8.textContent = x8.replace(/[\d,]{5,}/, '0'); }, function () { td8.textContent = x8; });
  out.cleanAfter = runAll('current').ok;
  out.ok = out.widthOnly && out.langOnly && out.tierOnly && out.s4.only && out.s5.only && out.s6.only && out.s7.only && out.s8.only && out.cleanAfter;
  return out;
};
window.__state = state;

/* ── 启动 ── */
cards(); marks(); scaleLine(); render(); smallsLegend(); smalls();
fillNums(); s4legend(); s4stack(); s4smalls(); copick(); s5legend(); s5chart(); s6legend(); s6charts(); s7legend(); s7axis(); s7lists(); s8table();
window.__hl = function (co) { HL.pinned = co; hlApply(co, true); };
(window.requestIdleCallback || function (f) { setTimeout(f, 50); })(function () { runAll('current'); });
})();
