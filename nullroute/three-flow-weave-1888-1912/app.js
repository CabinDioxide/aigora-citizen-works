/* 每列车英里收进的便士去了哪里 · 交互与检查层
   写法沿用 Sigma 十二年织图的 app_B.js：$()、showTip/hideTip/#tip、openProv/#provcard、
   parseD/bandEdges 回读几何、CHECKS 数组 + runAll() + 哨兵 window.__checkResult、__check/__neg 负对照。
   本页数据小（25 年 × ≤15 家 × ≤3 条带），几何由脚本按当前年份即时画，不预渲染；
   检查层首屏后在空闲时只查当前年，__check() 才逐年全查。 */
(function () {
'use strict';
var D = window.__DATA;
var LANG = (document.documentElement.getAttribute('lang') || 'zh').indexOf('zh') === 0 ? 'zh' : 'en';
var T = function (zh, en) { return LANG === 'zh' ? zh : en; };
var $ = function (id) { return document.getElementById(id); };
var svgEl = $('weave');
var NS = 'http://www.w3.org/2000/svg';
var LY = D.layout, S = LY.px_per_d, NH = LY.node_h;
var YEARS = D.years.map(function (y) { return y.year; });
var state = { yi: YEARS.length - 1, lastRenderMs: null };
var CAL = {}; D.calendar.forEach(function (c) { CAL[c.year] = c; });
var CO = D.companies;
var NSAMP = 28;
function coName(k) { return CO[k][LANG]; }
function fmtD(v) { return (Math.round(v * 100) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
function fmtPct(v) { return (Math.round(v * 100) / 100).toFixed(2) + '%'; }
function unit() { return T('便士', 'd'); }

/* ── 几何 ── */
function smoothstep(t) { return t * t * (3 - 2 * t); }
function edge(xb, xt, yb, yt) {
  var pts = [];
  for (var i = 0; i < NSAMP; i++) {
    var t = i / (NSAMP - 1);
    pts.push([xb + (xt - xb) * smoothstep(t), yb + (yt - yb) * t]);
  }
  return pts;
}
/* 织带：两条边各自走 S 形（同一 y 上水平宽度恒等于 amount×尺），从下端 (xb..xb+w, yb) 到上端 (xt..xt+w, yt)。
   路径前半是左边自下而上，后半是右边自上而下，回读时 bandEdges 拆回两条边。 */
function ribbonPath(xb, xt, w, yb, yt) {
  var A = edge(xb, xt, yb, yt), B = edge(xb + w, xt + w, yb, yt);
  var d = 'M' + A.map(function (p) { return p[0].toFixed(3) + ',' + p[1].toFixed(3); }).join(' L');
  d += ' L' + B.slice().reverse().map(function (p) { return p[0].toFixed(3) + ',' + p[1].toFixed(3); }).join(' L') + ' Z';
  return d;
}
function el(tag, attrs, text) {
  var e = document.createElementNS(NS, tag);
  Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
  if (text != null) e.textContent = text;
  return e;
}
/* 当前年的布局：返回 bands（含应有宽度）与 nodes（含应有宽度），画进 svg */
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
function render() {
  var t0 = performance.now();
  var yd = D.years[state.yi];
  var L = layoutYear(yd);
  while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);
  var g = el('g', { id: 'L-' + yd.year, 'class': 'yearlayer' });
  /* 分界线 */
  g.appendChild(el('line', { 'class': 'splitline', x1: 8, x2: LY.w - 8, y1: LY.y_split, y2: LY.y_split }));
  /* 带子（先画，节点与文字在上） */
  L.bands.forEach(function (b) {
    var p = el('path', { id: b.id, 'class': 'ribbon ' + b.cls, d: b.d });
    attachBand(p, b);
    g.appendChild(p);
  });
  /* 顶部节点或虚线空框 */
  if (yd.split) {
    L.nodes.filter(function (nd) { return nd.kind === 'E' || nd.kind === 'N'; }).forEach(function (nd) {
      var r = el('rect', { id: nd.id, 'class': nd.kind === 'E' ? 'expnode' : 'netnode', x: nd.x, y: nd.y, width: nd.w, height: NH });
      attachNode(r, nd); g.appendChild(r);
      var lab = nd.kind === 'E' ? D.text['nodeE_' + LANG] : D.text['nodeN_' + LANG];
      g.appendChild(el('text', { 'class': 'nodelab', x: nd.x, y: nd.y - 18 }, lab));
      g.appendChild(el('text', { 'class': 'nodeval', x: nd.x, y: nd.y - 5 },
        T('各公司便士之和 ' + fmtD(nd.amount) + ' 便士（' + yd.n_split + ' 家）', 'Sum over companies ' + fmtD(nd.amount) + ' d (' + yd.n_split + ' companies)')));
    });
  } else {
    var fw = 220, fx = LY.w / 2 - fw - LY.top_gap / 2;
    [[fx, D.text['nodeE_' + LANG]], [fx + fw + LY.top_gap, D.text['nodeN_' + LANG]]].forEach(function (f) {
      g.appendChild(el('rect', { 'class': 'noframe', x: f[0], y: LY.y_top, width: fw, height: NH }));
      g.appendChild(el('text', { 'class': 'nodelab', x: f[0], y: LY.y_top - 18 }, f[1]));
      g.appendChild(el('text', { 'class': 'framelab', x: f[0], y: LY.y_top - 5 }, T('本年无每列车英里支出值', 'no expenditure per train mile this year')));
    });
  }
  /* 公司节点与标签（标签在节点下方，竖排） */
  L.nodes.filter(function (nd) { return nd.kind === 'co'; }).forEach(function (nd) {
    var r = el('rect', { id: nd.id, 'class': 'conode', x: nd.x, y: nd.y, width: nd.w, height: NH });
    attachNode(r, nd); g.appendChild(r);
    var cx = nd.x + nd.w / 2, ty = nd.y + NH + 8;
    var t1 = el('text', { 'class': 'coname', x: cx, y: ty, transform: 'rotate(90 ' + cx + ' ' + ty + ')', 'text-anchor': 'start', dy: '0.35em' }, coName(nd.co));
    g.appendChild(t1);
    var vtxt = nd.c.E != null
      ? T('收 ' + fmtD(nd.c.R) + '　支 ' + fmtD(nd.c.E) + '　净 ' + fmtD(nd.c.N), 'R ' + fmtD(nd.c.R) + '  E ' + fmtD(nd.c.E) + '  N ' + fmtD(nd.c.N))
      : T('收 ' + fmtD(nd.c.R), 'R ' + fmtD(nd.c.R));
    var t2 = el('text', { 'class': 'coval', x: cx + 13, y: ty, transform: 'rotate(90 ' + (cx + 13) + ' ' + ty + ')', 'text-anchor': 'start', dy: '0.35em' }, vtxt);
    g.appendChild(t2);
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
    sp.textContent = ' ' + T('本年制度事件：', 'Institutional event this year: ') + c['name_' + LANG];
    $('yearnote').appendChild(sp);
  }
}

/* ── 悬停与出处 ── */
var tip = $('tip');
function showTip(ev, h) {
  tip.innerHTML = h; tip.style.display = 'block';
  var x = ev.clientX + 14, y = ev.clientY + 14;
  if (x + tip.offsetWidth > window.innerWidth - 8) x = ev.clientX - tip.offsetWidth - 10;
  if (y + tip.offsetHeight > window.innerHeight - 8) y = ev.clientY - tip.offsetHeight - 10;
  tip.style.left = x + 'px'; tip.style.top = y + 'px';
}
function hideTip() { tip.style.display = 'none'; }
function bandTip(b) {
  var c = b.c, y = CUR.year, kind = { R: T('收入带', 'receipts band'), E: T('营运支出', 'working expenditure'), N: T('净收入', 'net receipts') }[b.kind];
  var h = '<b>' + coName(b.co) + ' · ' + y + '</b> · ' + kind + '<br>';
  h += T('每列车英里收入 ', 'Receipts per train mile ') + fmtD(c.R) + ' ' + unit() + '<br>';
  if (c.E != null) {
    h += T('每列车英里营运支出 ', 'Working expenditure per train mile ') + fmtD(c.E) + ' ' + unit() + '<br>';
    h += T('净收入（差值）', 'Net receipts (difference) ') + fmtD(c.N) + ' ' + unit() + '<br>';
    h += T('支出占收入比 ', 'Expenditure as share of receipts ') + fmtPct(c.share) + '<br>';
  } else {
    h += T('本年无支出值，不分股', 'No expenditure value this year; no split') + '<br>';
  }
  h += T('来源页码：收入 ', 'Source page: receipts ') + c.rows.R['page_' + LANG];
  if (c.rows.E) h += T('；支出 ', '; expenditure ') + c.rows.E['page_' + LANG];
  return h;
}
function nodeTip(nd) {
  if (nd.kind === 'co') return bandTip({ c: nd.c, co: nd.co, kind: 'R' });
  var lab = nd.kind === 'E' ? D.text['nodeE_' + LANG] : D.text['nodeN_' + LANG];
  return '<b>' + lab + ' · ' + CUR.year + '</b><br>' + T('各公司便士之和 ', 'Sum of pence over companies ') + fmtD(nd.amount) + ' ' + unit()
    + '<br>' + T('这个和没有经济含义，只为把带子汇拢；各公司之间按同一把尺比较的是各自带宽。', 'This sum has no economic meaning; it only gathers the bands. What is comparable across companies, on one scale, is each band\'s own width.');
}
function attachBand(p, b) {
  p.addEventListener('mousemove', function (ev) { showTip(ev, bandTip(b)); });
  p.addEventListener('mouseleave', hideTip);
  p.addEventListener('click', function () { openProv(b.c, b.co); });
}
function attachNode(r, nd) {
  r.addEventListener('mousemove', function (ev) { showTip(ev, nodeTip(nd)); });
  r.addEventListener('mouseleave', hideTip);
  if (nd.kind === 'co') r.addEventListener('click', function () { openProv(nd.c, nd.co); });
}
var pc = $('provcard');
function provHtml(c, co) {
  var y = CUR.year;
  function row(k, v) { return '<tr><td>' + k + '</td><td>' + v + '</td></tr>'; }
  function rowset(title, r) {
    var h = '<tr><td colspan="2"><b>' + title + '</b></td></tr>';
    h += row(T('印刷值', 'printed value'), fmtD(r.value) + ' ' + unit());
    h += row(T('比值', 'ratio'), r.ratio === 'receipts_per_train_mile_total_d' ? T('全部列车每英里收入', 'Total receipts per train mile') : T('每列车英里支出·合计', 'Expenditure per train mile: total'));
    h += row(T('分子／分母', 'numerator / denominator'), r.numerator === '（印刷比值）' ? T('印刷比值（原页直接印出）', 'printed ratio (as printed on the page)') : T('分子与分母各自转录后相除', 'numerator and denominator transcribed separately'));
    h += row(T('层', 'layer'), LANG === 'zh' ? r.layer : r.layer_en);
    h += row(T('档位', 'tier'), LANG === 'zh' ? r.tier : r.tier_en);
    h += row(T('页码', 'page'), r['page_' + LANG]);
    return h;
  }
  var h = '<h4>' + coName(co) + ' · ' + y + '</h4><table>';
  h += rowset(T('每列车英里收入', 'Receipts per train mile'), c.rows.R);
  if (c.rows.E) {
    h += rowset(T('每列车英里营运支出', 'Working expenditure per train mile'), c.rows.E);
    h += row(T('净收入 ＝ 两个印刷值之差', 'Net receipts = difference of the two printed values'), fmtD(c.N) + ' ' + unit());
    h += row(T('支出占收入比', 'Expenditure as share of receipts'), fmtPct(c.share));
  }
  h += '</table>';
  h += '<div class="pc-file">' + T('来源：任务 010 回件箱的比值表（数据脚本读的那一份）；行取法见说明。', 'Source: task 010 return box, ' + D.meta.source.file + ' (sha256 ' + D.meta.source.sha256.slice(0, 12) + '…); row selection rule in README.') + '</div>';
  return h;
}
function openProv(c, co) { $('pc-body').innerHTML = provHtml(c, co); pc.style.display = 'block'; }
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
    /* 相邻年份（1893、1894）的标签错开一行，免得互压 */
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
function scales() {
  $('scales').innerHTML = '<span><b>' + T('尺', 'Scale') + '</b>' + T('：', ': ') + '1 ' + T('像素', 'px') + ' = ' + (1 / S).toFixed(4) + ' ' + T('便士／列车英里', 'd per train mile')
    + T('（' + S.toFixed(4) + ' 像素 = 1 便士；同一把尺贯穿 25 年与全部带子）', ' (' + S.toFixed(4) + ' px = 1 d; one scale across all 25 years and all bands)') + '</span>'
    + '<span>' + T('收入带（米色）宽 = 每列车英里收入；灰股宽 = 每列车英里营运支出；蓝股宽 = 两者之差', 'Receipts band (beige) width = receipts per train mile; grey strand = working expenditure per train mile; blue strand = the difference') + '</span>';
}

/* ── 检查层 ── */
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
/* 1. 带宽回读：每条带子每个采样行的水平宽度 |B.x − A.x| 等于 amount × 尺，且两边同一行的 y 相等 */
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
/* 2. 分股闭合：数据层每家 E + N = R；分股年的两股宽度之和应等于收入带宽度（按数据算） */
function checkSplit() {
  var bad = [];
  CUR.yd.companies.forEach(function (c) {
    if (c.E == null) return;
    if (Math.abs(c.E + c.N - c.R) > 1e-6) bad.push(c.co + ' E+N−R=' + (c.E + c.N - c.R));
    if (Math.abs(c.E * S + c.N * S - c.R * S) > 1e-6) bad.push(c.co + ' 像素不闭合');
  });
  return { ok: bad.length === 0, companies: CUR.yd.n_split, detail: bad };
}
/* 3. 顶部节点宽度 = 各公司便士之和 × 尺（读节点 rect 的 width） */
function checkTopNodes() {
  if (!CUR.yd.split) return { ok: !$('n-E') && !$('n-N'), note: '非分股年，不应有顶部节点' };
  var bad = [], sE = 0, sN = 0;
  CUR.yd.companies.forEach(function (c) { if (c.E != null) { sE += c.E; sN += c.N; } });
  var e = $('n-E'), n = $('n-N');
  if (!e || !n) return { ok: false, detail: ['缺顶部节点'] };
  if (Math.abs(+e.getAttribute('width') - sE * S) > 0.01) bad.push('n-E ' + e.getAttribute('width') + ' vs ' + (sE * S));
  if (Math.abs(+n.getAttribute('width') - sN * S) > 0.01) bad.push('n-N ' + n.getAttribute('width') + ' vs ' + (sN * S));
  if (Math.abs(sE - CUR.yd.sumE) > 1e-6 || Math.abs(sN - CUR.yd.sumN) > 1e-6) bad.push('与数据层 sumE/sumN 不一致');
  /* 每家公司柱宽 */
  CUR.yd.companies.forEach(function (c) { var r = $('n-co-' + c.co); if (!r || Math.abs(+r.getAttribute('width') - c.R * S) > 0.01) bad.push('柱宽 ' + c.co); });
  return { ok: bad.length === 0, sumE: sE, sumN: sN, detail: bad };
}
/* 4. 公司自左向右按收入递减 */
function checkOrder() {
  var xs = CUR.yd.companies.map(function (c) { return { x: +$('n-co-' + c.co).getAttribute('x'), R: c.R }; });
  var bad = 0; for (var i = 1; i < xs.length; i++) if (!(xs[i].x > xs[i - 1].x) || xs[i].R > xs[i - 1].R + 1e-9) bad++;
  return { ok: bad === 0, n: xs.length, violations: bad };
}
/* 5. 文字不压带：每个 text 的包围盒（含旋转）取九点，不得落进任何带子 */
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
    if (hit) bad.n = (bad.n || 0) + 1;
  });
  return { ok: bad.length === 0, texts: texts.length, detail: bad };
}
/* 6. id 唯一 */
function checkIds() {
  var seen = {}, dup = 0; Array.prototype.forEach.call(document.querySelectorAll('[id]'), function (e) { if (seen[e.id]) dup++; seen[e.id] = 1; });
  return { ok: dup === 0, duplicates: dup };
}
/* 7. 锚定值：data.js 里的 anchors 与 years 里的值互核（两份都由脚本写，防止一份被换） */
function checkAnchors() {
  var bad = [];
  Object.keys(D.anchors).forEach(function (k) {
    var m = /^(\d{4})-(.+)-([RE])$/.exec(k), yd = D.years.filter(function (y) { return y.year === m[1]; })[0];
    var c = yd && yd.companies.filter(function (c) { return c.co === m[2]; })[0];
    if (!c || Math.abs(c[m[3]] - D.anchors[k]) > 1e-9) bad.push(k);
  });
  return { ok: bad.length === 0, anchors: Object.keys(D.anchors).length, detail: bad };
}
/* 8. 语言扫描：中文页正文无拉丁字母（切换链接除外），英文页无汉字；悬停与出处文字也扫 */
function visibleText() {
  var sw = $('langsw'), keep = sw ? sw.textContent : '';
  var t = document.body.innerText || '';
  if (keep) t = t.replace(keep, '');
  CUR.bands.forEach(function (b) { t += '\n' + bandTip(b).replace(/<[^>]+>/g, ' ') + '\n' + provHtml(b.c, b.co).replace(/<[^>]+>/g, ' '); });
  CUR.nodes.forEach(function (nd) { t += '\n' + nodeTip(nd).replace(/<[^>]+>/g, ' '); });
  return t;
}
function checkLang() {
  var t = visibleText(), bad;
  if (LANG === 'zh') bad = t.match(/[A-Za-z][A-Za-z0-9&'.\-]*/g) || [];
  else bad = t.match(/[㐀-鿿（）：、「」]+/g) || [];
  var uniq = []; bad.forEach(function (w) { if (uniq.indexOf(w) < 0) uniq.push(w); });
  return { ok: bad.length === 0, lang: LANG, hits: bad.length, detail: uniq.slice(0, 12) };
}
/* 9. 滑杆上的四个制度年份在场并带名称 */
function checkMarks() {
  var bad = [];
  D.calendar.forEach(function (c) {
    var m = document.querySelector('#marks .mk[data-year="' + c.year + '"]'), l = document.querySelector('#markslist li[data-year="' + c.year + '"]');
    if (!m || m.textContent.indexOf(c['short_' + LANG]) < 0) bad.push('行内 ' + c.year);
    if (!l || l.textContent.indexOf(c['short_' + LANG]) < 0) bad.push('列表 ' + c.year);
  });
  return { ok: bad.length === 0, marks: D.calendar.length, detail: bad };
}
/* 10. 渲染耗时 */
function checkPerf() { return { ok: state.lastRenderMs != null && state.lastRenderMs < 200, lastRenderMs: +(state.lastRenderMs || 0).toFixed(1) }; }
/* 11. 数据层：行数与 meta 一致、每年公司数与 companies 长度一致、分股年顶部两节点和等于收入带和 */
function checkData() {
  var bad = [], rows = 0;
  D.years.forEach(function (y) {
    if (y.n !== y.companies.length) bad.push(y.year + ' n');
    var sR = 0, sE = 0, sN = 0, ns = 0;
    y.companies.forEach(function (c) { rows += 1 + (c.E != null ? 1 : 0); sR += c.R; if (c.E != null) { sE += c.E; sN += c.N; ns++; } });
    if (Math.abs(sR - y.sumR) > 1e-3) bad.push(y.year + ' sumR');
    if (ns !== y.n_split) bad.push(y.year + ' n_split');
    if (y.split && Math.abs(sE + sN - y.sumR_split) > 1e-3) bad.push(y.year + ' E+N≠R(split)');
  });
  if (rows !== D.meta.source.rows_used) bad.push('rows_used ' + rows + ' vs ' + D.meta.source.rows_used);
  return { ok: bad.length === 0, rowsUsed: rows, detail: bad };
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
/* 负对照：改一条带子的宽度只让带宽回读失败；塞一个外文词只让语言扫描失败 */
window.__neg = function () {
  var out = {};
  var b = CUR.bands[0], p = $(b.id), d0 = p.getAttribute('d');
  var ed = bandEdges(p);
  var d1 = 'M' + ed.A.map(function (q) { return q[0] + ',' + q[1]; }).join(' L') + ' L' + ed.B.slice().reverse().map(function (q) { return (q[0] + 3) + ',' + q[1]; }).join(' L') + ' Z';
  p.setAttribute('d', d1);
  var r1 = runAll('current'); p.setAttribute('d', d0);
  out.widthFailed = r1.groups.filter(function (g) { return !g.ok; }).map(function (g) { return g.id; });
  out.widthOnly = out.widthFailed.length === 1 && out.widthFailed[0] === 'widths';
  var sp = document.createElement('span'); sp.id = 'neg-inject'; sp.textContent = LANG === 'zh' ? ' Foreign ' : ' 外文 ';
  $('yearnote').appendChild(sp);
  var r2 = runAll('current'); sp.parentNode.removeChild(sp);
  out.langFailed = r2.groups.filter(function (g) { return !g.ok; }).map(function (g) { return g.id; });
  out.langOnly = out.langFailed.length === 1 && out.langFailed[0] === 'lang';
  var r3 = runAll('current'); out.cleanAfter = r3.ok;
  out.ok = out.widthOnly && out.langOnly && out.cleanAfter;
  return out;
};
window.__state = state;

/* ── 启动 ── */
marks(); scales(); render();
(window.requestIdleCallback || function (f) { setTimeout(f, 50); })(function () { runAll('current'); });
})();
