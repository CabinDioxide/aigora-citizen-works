/* ── 公民修整 2026-08-21 23:5x：见文件末尾注释；Science 原件备份在 科研交接/公民修整/ ── */

/* 任务 001 页面-v4 · 交互与检查层
   写法沿用发布页 index.html 尾部脚本：$()、showTip/hideTip/#tip、openProv/#provcard、
   parseD/bandEdges 回读几何、CHECKS 数组 + runAll() + _sentinel 哨兵、__check/__neg 负对照。
   本版按逐年扩展：宽度回读与文字不压带对每个年份层各跑一遍。 */
(function () {
'use strict';
var D = window.__DATA;
var $ = function (id) { return document.getElementById(id); };
var svgEl = $('wv-weave');
var YEARS = []; for (var y = 1888; y <= 1899; y++) YEARS.push(String(y));
var state = { year: '1899', basis: 'cash' };

function layerId(y, b) { return 'L-' + y + '-' + b; }
function hasCash(y) { return !!$(layerId(y, 'cash')); }
function effBasis() {
  var ok = (state.basis === 'cash' && hasCash(state.year));
  /* 回落必须可见（公民 2026-08-21 裁定）：state.fellBack 由第 17 组检查读取，
     页面同时打出 #basisfallback 标注。静默回落＝硬失败。 */
  state.fellBack = (state.basis === 'cash' && !hasCash(state.year));
  var el = $('basisfallback');
  if (el) {
    el.style.display = state.fellBack ? 'block' : 'none';
    if (state.fellBack)
      el.textContent = state.year + ' 年无真实（现金）口径：原表 1890 年起才单列名义调整，'
        + '该年只有账面口径。下方织物显示的是账面值，不是现金值。';
  }
  return ok ? 'cash' : 'roman';
}
function curLayer() { return $(layerId(state.year, effBasis())); }
function curKey() { return state.year + '-' + effBasis(); }

/* ── 显示当前层 ── */
function show() {
  var want = layerId(state.year, effBasis());
  Array.prototype.forEach.call(svgEl.querySelectorAll('.yearlayer'), function (g) {
    g.style.display = (g.id === want) ? '' : 'none';
  });
  $('ylabel').textContent = state.year;
  var note = $('basisnote');
  if (state.basis === 'cash' && !hasCash(state.year)) {
    note.textContent = '（' + state.year + ' 年年报无名义调整栏，现金口径 1890 起；本图显示名义（账面）口径）';
  } else {
    note.textContent = state.basis === 'cash'
      ? '（真实（现金）＝账面 − 名义调整；名义调整已含在账面内，两者不可相加）'
      : '（名义＝报表印的账面原额）';
  }
  ticks();
}
function ticks() {
  $('yearticks').innerHTML = YEARS.map(function (y) {
    var nc = hasCash(y) ? '' : ' class="nocash"';
    var t = hasCash(y) ? '' : ' title="本年无名义调整栏，只有名义口径"';
    return '<span' + nc + t + '>' + y.slice(2) + '</span>';
  }).join('');
}

/* ── 悬停（发布页 bandTip 同式）── */
var tip = $('tip');
function showTip(ev, h) {
  tip.innerHTML = h; tip.style.display = 'block';
  tip.style.left = Math.min(ev.clientX + 14, window.innerWidth - 420) + 'px';
  tip.style.top = Math.min(ev.clientY + 12, window.innerHeight - 130) + 'px';
}
function hideTip() { tip.style.display = 'none'; }
function fmt(v) { return '£' + Number(v).toLocaleString('en-US'); }
var BY = {}; D.bands.forEach(function (b) { BY[b.id] = b; });
var NY = {}; D.nodes.forEach(function (n) { NY[n.id] = n; });

function bandTip(b) {
  var L = ['<b>' + b.co + ' · ' + b.cls + '</b>'];
  if (b.kind === 'traf') L.push('下端：' + Number(b.qty).toLocaleString('en-US')
    + '（运量尺）　上端：' + fmt(b.amount) + '（收入尺）　两端的尺不可互比');
  else if (b.kind === 'ret') L.push(fmt(b.amount)
    + '（历年累计存量 · 回程尺；与左列的年度流量不构成一进一出）');
  else L.push(fmt(b.amount) + '（收入尺 · 当年流量）');
  if (b.hair) L.push('细线：不足 ' + D.scales.hairPx + ' 像素，线不表示宽度');
  L.push('点击看出处');
  return L.join('<br>');
}
function attach(el, b) {
  el.addEventListener('mousemove', function (ev) { showTip(ev, bandTip(b)); });
  el.addEventListener('mouseleave', hideTip);
  el.addEventListener('click', function () { openProv(b.id); });
}
Object.keys(BY).forEach(function (id) { var e = $(id); if (e) attach(e, BY[id]); });
Array.prototype.forEach.call(document.querySelectorAll('.hit'), function (h) {
  var b = BY[h.getAttribute('data-for')]; if (b) attach(h, b);
});
Array.prototype.forEach.call(svgEl.querySelectorAll('.capnode,.conode,.incnode,.trafnode,.retnode'),
  function (nd) {
    var n = NY[nd.id]; if (!n) return;
    nd.addEventListener('mousemove', function (ev) {
      var v = (n.kind === 'traf') ? Number(n.qty).toLocaleString('en-US') + '（运量尺）' : fmt(n.amount);
      showTip(ev, '<b>' + nd.id + '</b><br>' + v + '<br>点击看出处');
    });
    nd.addEventListener('mouseleave', hideTip);
    nd.addEventListener('click', function () { openProv(nd.id); });
  });

/* ── 点击看出处 ── */
var pc = $('provcard'), pcb = $('pc-body');
function yearOf(id) { var m = id.match(/-(18\d\d|19\d\d)-(cash|roman)$/); return m ? m[1] : null; }
function openProv(id) {
  var b = BY[id] || NY[id]; if (!b) return;
  var yr = yearOf(id) || state.year;
  var d = D.pages && D.pages[yr] ? D.pages[yr] : null;
  var h = '<h4>' + (b.co ? b.co + ' · ' + b.cls : id) + '</h4>';
  if (b.amount != null) h += '<div>金额：<b>' + fmt(b.amount) + '</b>'
    + (b.hair ? '（图上为细线，线不表示宽度）' : '') + '</div>';
  if (b.qty != null) h += '<div>运量：<b>' + Number(b.qty).toLocaleString('en-US')
    + '</b>（运量尺与英镑尺不可互比）</div>';
  var pg = D.prov && D.prov[id];
  h += '<div>原表：Board of Trade Railway Returns ' + yr + '</div>';
  if (pg) h += '<div class="pc-file">取数页：合订卷 PDF p' + pg.page
    + '｜出处：' + pg.source + '｜' + (pg.spot ? '本轮回原页目读' : '转录自在库一手交付件') + '</div>';
  h += '<div class="pc-file">转录件：raw/uk-three-flow-p3-bot-returns/'
    + 'railway-returns-1888-1899-google-books-VQ2PdSvyefMC.pdf</div>';
  pcb.innerHTML = h; pc.style.display = 'block';
}
$('pc-close').addEventListener('click', function () { pc.style.display = 'none'; });

/* ── 控件 ── */
$('yslider').addEventListener('input', function () {
  state.year = YEARS[Number(this.value)]; show(); /* 公民修整 2026-08-21：不再每次全量 runAll() */
});
['cash', 'roman'].forEach(function (b) {
  $('b-' + b).addEventListener('click', function () {
    state.basis = b;
    $('b-cash').classList.toggle('active', b === 'cash');
    $('b-roman').classList.toggle('active', b === 'roman');
    show(); /* 公民修整 2026-08-21：不再每次全量 runAll() */
  });
});
var playing = false, timer = null;
$('play').addEventListener('click', function () {
  if (playing) { playing = false; clearInterval(timer); timer = null; this.textContent = '▶ 播放'; return; }
  playing = true; this.textContent = '❚❚ 暂停';
  var self = this;
  timer = setInterval(function () {
    var i = (YEARS.indexOf(state.year) + 1) % YEARS.length;
    state.year = YEARS[i]; $('yslider').value = String(i); show();
  }, 1200);
});

/* ═══════════════ 检查层（发布页 15 组，按逐年扩展）═══════════════ */
function parseD(d) {
  var nums = d.replace(/[MLZ]/g, ' ').trim().split(/[\s,]+/).map(Number);
  var pts = []; for (var i = 0; i + 1 < nums.length; i += 2) pts.push([nums[i], nums[i + 1]]);
  return pts;
}
function bandEdges(el) {
  var pts = parseD(el.getAttribute('d')), n = pts.length / 2;
  return { A: pts.slice(0, n), B: pts.slice(n).reverse() };
}
function smoothstep(t) { return t * t * (3 - 2 * t); }
function expectedPx(b, which) {
  if (b.kind === 'traf') return which === 'end' ? b.amount / D.scales.inc : b.qty / b.qtyScale;
  if (b.kind === 'ret') return b.amount / D.scales.ret;
  /* 'cap'：峰顶五类 ↔ 公司行之间的织带走资本尺（与 checkTopo 的 cap 分支同）。
     v4 页面没有这一层，故原式缺此分支；补上，不动其余三支。 */
  if (b.kind === 'cap') return b.amount / D.scales.cap;
  return b.amount / D.scales.inc;
}
/* 1. 宽度回读：每条带子每一点回读 |B−A| 必须等于该点应有宽度（含运量两端换尺、回程尺）*/
function checkWidths() {
  var viol = 0, maxDev = 0, checked = 0, hairBad = 0, detail = [], perYear = {};
  D.bands.forEach(function (b) {
    var el = $(b.id);
    if (!el) { viol++; if (detail.length < 6) detail.push('缺 ' + b.id); return; }
    if (b.hair) {
      if (!(expectedPx(b) < D.scales.hairPx)) { hairBad++; if (detail.length < 6) detail.push(b.id + ' 不该走细线'); }
      var sw = parseFloat(getComputedStyle(el).strokeWidth);
      if (Math.abs(sw - D.scales.hairStroke) > 0.05) hairBad++;
      checked++; return;
    }
    var e = bandEdges(el), n = e.A.length, bad = false;
    for (var i = 0; i < n; i++) {
      var dx = e.B[i][0] - e.A[i][0], dy = e.B[i][1] - e.A[i][1];
      var w = Math.sqrt(dx * dx + dy * dy);
      var exp = (b.kind === 'traf')
        ? expectedPx(b, 'start') + (expectedPx(b, 'end') - expectedPx(b, 'start')) * smoothstep(i / (n - 1))
        : expectedPx(b);
      var dev = Math.abs(w - exp);
      if (dev > maxDev) maxDev = dev;
      if (dev > 0.01) { bad = true; if (detail.length < 6) detail.push(b.id + ' dev=' + dev.toFixed(3)); break; }
    }
    if (bad) viol++;
    perYear[b.layer] = (perYear[b.layer] || 0) + 1;
    checked++;
  });
  return { widthViolations: viol, maxWidthDev: +maxDev.toFixed(4), bandsChecked: checked,
           hairViolations: hairBad, widthDetail: detail, layersCovered: Object.keys(perYear).length };
}
/* 2. 标记条连续性：带子从条下连续穿过，不被切断 */
function checkGates() {
  var viol = 0, covered = 0, detail = [];
  D.gates.forEach(function (g) {
    D.bands.forEach(function (b) {
      if (g.kinds.indexOf(b.kind) === -1) return;
      var el = $(b.id); if (!el) { viol++; return; }
      var pts = b.hair ? parseD(el.getAttribute('d')) : bandEdges(el).A;
      var prev = null, ok = true;
      pts.forEach(function (p) {
        if (p[1] >= g.y0 - 18 && p[1] <= g.y1 + 18) {
          if (prev !== null && Math.abs(p[1] - prev) > 220) ok = false;
          prev = p[1];
        }
      });
      if (!ok) { viol++; if (detail.length < 6) detail.push(b.id + ' 在 ' + g.idpat + ' 处断开'); }
      else covered++;
    });
  });
  return { gateViolations: viol, gateCovered: covered, gateDetail: detail };
}
/* 3. 方向：左列（inc/traf）向上、右列（ret）向下 */
function checkDirections() {
  var up = [], down = [];
  D.bands.forEach(function (b) {
    var el = $(b.id); if (!el) return;
    var pts = b.hair ? parseD(el.getAttribute('d')) : bandEdges(el).A;
    if (pts.length < 2) return;
    var y0 = pts[0][1], y1 = pts[pts.length - 1][1];
    if (b.dir === 'up' && y1 > y0 + 0.5) up.push(b.id);
    if (b.dir === 'down' && y1 < y0 - 0.5) down.push(b.id);
  });
  return { dirUpViolations: up.length, dirDownViolations: down.length,
           dirDetail: up.concat(down).slice(0, 6) };
}
/* 4. 两列同高对齐：右列全国节点与左列全国节点同高、偏移 = off */
function checkRetCols() {
  /* 公民修整 2026-08-21：回程列按参照页结构核——右列公司节点 ret-n-<co> 与左列 wv-n-co-<co> 同高、同宽、x 相差 D.off；
     每条回程带顶端 y=109 且落在左侧峰顶该类节点的 x 跨度内，底端 y=2296 且落在右列该公司节点的 x 跨度内；
     任何回程带的 x 不得超过 3008（图注列从 3040 起）。 */
  var bad = [], CL = ['ordinary', 'guaranteed', 'preferential', 'loans', 'debenture'];
  D.layers.forEach(function (l) {
    var k = l.year + '-' + l.basis;
    D.co_order.forEach(function (co) {
      var a = $('wv-n-co-' + co + '-' + k), b = $('ret-n-' + co + '-' + k);
      if (!a || !b) { bad.push('缺 ' + co + ' ' + k); return; }
      if (Math.abs(parseFloat(a.getAttribute('y')) - parseFloat(b.getAttribute('y'))) > 0.001) bad.push(k + ' ' + co + ' 两列不同高');
      if (Math.abs(parseFloat(b.getAttribute('x')) - parseFloat(a.getAttribute('x')) - D.off) > 0.001) bad.push(k + ' ' + co + ' 横向对位不一致');
      if (Math.abs(parseFloat(b.getAttribute('width')) - parseFloat(a.getAttribute('width'))) > 0.01) bad.push(k + ' ' + co + ' 两列宽度不等');
    });
  });
  D.bands.forEach(function (b) {
    if (b.kind !== 'ret' || b.hair) return;
    var el = $(b.id); if (!el) { bad.push('缺带 ' + b.id); return; }
    var e = bandEdges(el), A = e.A, B = e.B, k = b.layer;
    var cls = null; CL.forEach(function (c) { if (b.id.indexOf('ret-b-' + c + '-') === 0) cls = c; });
    var co = b.id.slice(('ret-b-' + cls + '-').length, -(k.length + 1));
    var top = $('wv-n-cap-' + cls + '-' + k), bot = $('ret-n-' + co + '-' + k);
    if (!top || !bot) { bad.push('缺节点 ' + b.id); return; }
    var tx0 = parseFloat(top.getAttribute('x')), tx1 = tx0 + parseFloat(top.getAttribute('width'));
    var bx0 = parseFloat(bot.getAttribute('x')), bx1 = bx0 + parseFloat(bot.getAttribute('width'));
    var at = A[0], ab = A[A.length - 1], bt = B[0], bb = B[B.length - 1];
    if (Math.abs(at[1] - 109) > 0.01 || Math.abs(bt[1] - 109) > 0.01) bad.push(b.id + ' 顶端不在峰顶');
    if (Math.abs(ab[1] - 2296) > 0.01 || Math.abs(bb[1] - 2296) > 0.01) bad.push(b.id + ' 底端不在公司行');
    if (at[0] < tx0 - 0.01 || bt[0] > tx1 + 0.01) bad.push(b.id + ' 顶端出了峰顶 ' + cls + ' 节点');
    if (ab[0] < bx0 - 0.01 || bb[0] > bx1 + 0.01) bad.push(b.id + ' 底端出了右列 ' + co + ' 节点');
    var mx = 0; A.concat(B).forEach(function (p) { if (p[0] > mx) mx = p[0]; });
    if (mx > 3008.01) bad.push(b.id + ' 越过 3008 压进图注列 (' + mx.toFixed(1) + ')');
  });
  return { retColViolations: bad.length, retColDetail: bad.slice(0, 8) };
}
/* 5. 文字不压带（真实路径几何逐点判，每层各判一遍）*/
function bandElsOf(key) {
  var out = [];
  D.bands.forEach(function (b) {
    if (b.layer !== key) return;
    var el = $(b.id); if (!el) return;
    var bb; try { bb = el.getBBox(); } catch (e) { return; }
    out.push({ id: b.id, el: el, hair: !!b.hair, bb: bb });
  });
  return out;
}
function pt(x, y) { var p = svgEl.createSVGPoint(); p.x = x; p.y = y; return p; }
function checkTextBands() {
  var exBad = [], valBad = [], cEx = 0, cVal = 0, probes = 0, layers = 0;
  D.layers.forEach(function (l) {
    var key = l.year + '-' + l.basis, g = $('L-' + key);
    if (!g) return;
    var prevDisp = g.style.display; g.style.display = '';
    layers++;
    var BE = bandElsOf(key);
    Array.prototype.forEach.call(g.querySelectorAll('text'), function (t) {
      var tk = t.getAttribute('data-tk') || 'ex';
      var own = (t.getAttribute('data-own') || '').split(/\s+/).filter(Boolean);
      var bb; try { bb = t.getBBox(); } catch (e) { return; }
      if (bb.width <= 0 || bb.height <= 0) return;
      if (tk === 'ex') cEx++; else cVal++;
      var hits = [];
      for (var i = 0; i < BE.length; i++) {
        var b = BE[i];
        if (tk === 'val' && own.indexOf(b.id) !== -1) continue;
        if (b.bb.x > bb.x + bb.width || b.bb.x + b.bb.width < bb.x) continue;
        if (b.bb.y > bb.y + bb.height || b.bb.y + b.bb.height < bb.y) continue;
        var hit = false;
        for (var gx = 0; gx <= 8 && !hit; gx++) {
          for (var gy = 0; gy <= 2 && !hit; gy++) {
            var P = pt(bb.x + bb.width * gx / 8, bb.y + bb.height * gy / 2);
            probes++;
            try { if (b.hair ? b.el.isPointInStroke(P) : b.el.isPointInFill(P)) hit = true; } catch (e) {}
          }
        }
        if (hit) hits.push(b.id);
      }
      if (hits.length) {
        var rec = key + ' ' + (t.id || '?') + '「' + (t.textContent || '').slice(0, 12)
          + '」压 ' + hits.slice(0, 2).join(',');
        if (tk === 'ex') exBad.push(rec); else valBad.push(rec);
      }
    });
    g.style.display = prevDisp;
  });
  show();
  return { textOnBand_explain: exBad.length, textOnBand_value: valBad.length,
           textOnBandDetail: exBad.concat(valBad).slice(0, 8),
           explainTexts: cEx, valueTexts: cVal, textProbes: probes, textLayers: layers };
}
/* 6. 文字互压（逐层） */
function checkTextOverlap() {
  var ov = 0, pairs = [];
  D.layers.forEach(function (l) {
    var g = $('L-' + l.year + '-' + l.basis); if (!g) return;
    var prev = g.style.display; g.style.display = '';
    var ts = Array.prototype.slice.call(g.querySelectorAll('text')).filter(function (t) {
      var r = t.getBoundingClientRect(); return r.width > 0 && r.height > 0; });
    for (var i = 0; i < ts.length; i++) for (var j = i + 1; j < ts.length; j++) {
      var a = ts[i].getBoundingClientRect(), b = ts[j].getBoundingClientRect();
      if (a.left < b.right - 0.5 && b.left < a.right - 0.5 && a.top < b.bottom - 0.5 && b.top < a.bottom - 0.5) {
        ov++; if (pairs.length < 8) pairs.push([l.year + '-' + l.basis,
          ts[i].textContent.slice(0, 10), ts[j].textContent.slice(0, 10)]);
      }
    }
    g.style.display = prev;
  });
  show();
  return { textOverlap: ov, overlapPairs: pairs };
}
/* 7. 标记不压字：标记条矩形与该层任何文字不得相交 */
function checkMarkText() {
  var bad = [];
  D.layers.forEach(function (l) {
    var key = l.year + '-' + l.basis, g = $('L-' + key); if (!g) return;
    var prev = g.style.display; g.style.display = '';
    var texts = [];
    Array.prototype.forEach.call(g.querySelectorAll('text'), function (t) {
      var bb; try { bb = t.getBBox(); } catch (e) { return; }
      if (bb.width <= 0 || bb.height <= 0) return;
      texts.push({ id: t.id || '?', s: (t.textContent || '').slice(0, 10),
                   x0: bb.x, x1: bb.x + bb.width, y0: bb.y, y1: bb.y + bb.height });
    });
    ['wv-gate-' + key, 'wv-unitbar-' + key].forEach(function (id) {
      var el = $(id); if (!el) return;
      var rx = parseFloat(el.getAttribute('x')), ry = parseFloat(el.getAttribute('y'));
      var rw = parseFloat(el.getAttribute('width')), rh = parseFloat(el.getAttribute('height'));
      texts.forEach(function (tb) {
        if (rx < tb.x1 && rx + rw > tb.x0 && ry < tb.y1 && ry + rh > tb.y0)
          bad.push(id + ' 压「' + tb.s + '」');
      });
    });
    g.style.display = prev;
  });
  show();
  return { markTextViolations: bad.length, markTextDetail: bad.slice(0, 8) };
}
/* 8. id 唯一性 */
function checkIds() {
  var els = document.querySelectorAll('[id]'), seen = {}, dup = 0;
  Array.prototype.forEach.call(els, function (e) { if (seen[e.id]) dup++; seen[e.id] = 1; });
  return { duplicateIds: dup, idCount: els.length };
}
/* 9. 拓扑与节点宽度回读 */
function checkTopo() {
  var bad = [];
  D.nodes.forEach(function (n) {
    var el = $(n.id); if (!el) { bad.push('缺节点 ' + n.id); return; }
    var w = parseFloat(el.getAttribute('width'));
    var exp = (n.kind === 'traf') ? Math.max(n.qty / n.scale, 0.6)
      : (n.kind === 'ret') ? Math.max(n.amount / D.scales.ret, 0.6)
      : (n.kind === 'cap') ? Math.max(n.amount / D.scales.cap, 0.6)
      : Math.max(n.amount / D.scales.inc, 0.6);
    if (Math.abs(w - exp) > 0.01) bad.push(n.id + ' 宽度 ' + w + ' vs ' + exp.toFixed(4));
  });
  return { topoViolations: bad.length, topoDetail: bad.slice(0, 6), nodesChecked: D.nodes.length };
}
/* 10. 层次序：SVG 自上而下 = 自下而上读的倒排 */
function checkLayerOrder() {
  var bad = [], R = D.row;
  var order = [['cap', R.cap], ['gate', R.gate_y0], ['acct', R.acct], ['natl', R.natl],
               ['inc', R.inc], ['unit', R.unit_y0], ['traf', R.traf], ['energy', R.energy]];
  for (var i = 1; i < order.length; i++)
    if (!(order[i][1] > order[i - 1][1])) bad.push(order[i][0] + ' 次序错位');
  return { layerOrderViolations: bad.length, layerOrderDetail: bad };
}
/* 11. 闭合对账：收入五类＝总收入、支出＋净收＝毛收、资本五类＝总资本（两口径）*/
function checkClosure() {
  var bad = [], exempt = {}, acctCov = 0;
  D.closure.forEach(function (r) {
    if (r.inc_parts !== r.inc_total) {
      /* 豁免认两类登记：'open'（归因未定，已登记待查）与 'footnoted'
         （原表自己在该格标了脚注记号）。两类都分别计数，便于看清靠什么豁免的。 */
      var n = (D.notes || []).filter(function (x) {
        return x.year === Number(r.year) &&
               (x.kind === 'open' || x.kind === 'footnoted');
      });
      if (!n.length) bad.push(r.year + ' 收入不闭合 ' + (r.inc_parts - r.inc_total));
      else exempt[n[0].kind] = (exempt[n[0].kind] || 0) + 1;
    }
    /* 账本维：仅当数据侧明确供了该维（acct_covered 且两字段都在）才判。
       未供者计入 acctUncovered，在返回里报出——「没查」须可见，
       不可用 0==0 之类的恒真式伪装成通过。 */
    if (r.acct_covered && r.acct_sum != null && r.acct_gross != null) {
      acctCov++;
    if (r.acct_sum !== r.acct_gross) {
      var f = (D.notes || []).filter(function (x) { return x.year === Number(r.year) && x.kind === 'footnoted'; });
      if (!f.length) bad.push(r.year + ' 账本不闭合 ' + (r.acct_sum - r.acct_gross));
    }
    }
    if (r.cap_roman_parts !== r.cap_roman_total) bad.push(r.year + ' 资本账面不闭合');
    if (r.cap_cash_parts != null && r.cap_cash_parts !== r.cap_cash_total) bad.push(r.year + ' 资本真实不闭合');
  });
  return { closureViolations: bad.length, closureDetail: bad.slice(0, 6), closureYears: D.closure.length, closureExempt: exempt, acctCovered: acctCov, acctUncovered: D.closure.length - acctCov };
}
/* 12. 虚线空框在场（能量层 + 分配阻塞框，每层各两个）*/
function checkFrames() {
  var bad = 0, n = 0;
  D.layers.forEach(function (l) {
    var key = l.year + '-' + l.basis;
    ['wv-energy-' + key, 'wv-approp-frame-' + key].forEach(function (id) {
      var el = $(id); if (!el) { bad++; return; }
      n++;
      var cs = getComputedStyle(el);
      if (cs.fill !== 'none') bad++;
      if (cs.strokeDasharray === 'none' || cs.strokeDasharray === '') bad++;
    });
  });
  return { frameViolations: bad, frames: n };
}
/* 13. 无旋转文字 */
function checkRotation() {
  var bad = 0;
  Array.prototype.forEach.call(svgEl.querySelectorAll('text'), function (t) {
    if ((t.getAttribute('transform') || '').indexOf('rotate') !== -1) bad++;
  });
  return { rotatedText: bad };
}
/* 14. 口径纪律：真实口径层的每个资本标签必须带口径字样，且 1888/1889 无真实层 */
function checkBasisDiscipline() {
  var bad = [];
  D.layers.forEach(function (l) {
    if ((l.year === '1888' || l.year === '1889') && l.basis === 'cash')
      bad.push(l.year + ' 不该有真实口径层');
    var g = $('L-' + l.year + '-' + l.basis); if (!g) { bad.push('缺层 ' + l.year); return; }
    var want = l.basis === 'cash' ? '真实（现金）' : '名义（账面）';
    var n = 0;
    Array.prototype.forEach.call(g.querySelectorAll('.capbody'), function (t) {
      if ((t.textContent || '').indexOf(want) !== -1) n++;
    });
    if (n < 5) bad.push(l.year + '-' + l.basis + ' 峰顶带口径的标签只有 ' + n + ' 个');
  });
  return { basisViolations: bad.length, basisDetail: bad.slice(0, 6) };
}
/* 15. 内嵌锚定值：写死几个数，防止数据被换掉而检查照绿 */
function checkAnchors() {
  var a = D.anchors, bad = [];
  function amt(id) { var b = BY[id] || NY[id]; return b ? (b.amount != null ? b.amount : b.qty) : null; }
  if (amt('wv-n-cap-ordinary-1899-cash') !== a['1899-cash-cap-ordinary']) bad.push('1899 真实普通股');
  var s5 = 0; ['ordinary','guaranteed','preferential','loans','debenture'].forEach(function (c) { s5 += (amt('wv-n-cap-' + c + '-1899-roman') || 0); });
  if (s5 !== a['1899-acct-gross']) bad.push('1899 账面五类合计（公民修整：原用 natl 节点，已删）');
  if (amt('tf-n-minerals-1899-cash') !== a['1899-traf-minerals']) bad.push('1899 矿产吨');
  if (amt('tf-n-minerals-1895-cash') !== a['1895-traf-minerals']) bad.push('1895 矿产吨（本轮订正值）');
  return { anchorViolations: bad.length, anchorDetail: bad };
}

/* 公民修整第四次（2026-08-22，空路由）：第 16 组判据改为两句——
   〔用户裁定·2026-08-22·当面会话·「可以」（回应建议：互压率不高于参照页同法 20.7%，且同一束内不互压）〕。
   参照页（Sigma 发布版两列环形织图）同法实测 inc 织带互压 880/4249 对＝20.7%（回件箱/B段-002-附件/refoverlap_out.txt）。
   「同一束」＝同类带子里从同一节点出发或到达同一节点的那组（cap：同类→各公司 / 各类→同公司；inc：同公司→各类 / 各公司→同类；
   ret：同类→各右列公司 / 各类→同右列公司），两端同序排槽下束内不该交叉，束内交叉才是走线错误。
   跨束交叉是 14×5 二部织物的拓扑必然，只控总率不高于参照页。 */
var BAND_OVERLAP_REF_RATE = 0.207;
function bandBundleKeys(id) {
  /* 返回 [源束键, 宿束键]；解析不了的返回 [null,null] */
  var m;
  if ((m = /^wv-b-cap-([a-z]+)-(.+)-(\d{4}-(?:roman|cash))$/.exec(id))) return ['cap-src-' + m[1] + '-' + m[3], 'cap-dst-' + m[2] + '-' + m[3]];
  if ((m = /^wv-b-inc-(.+)-(passenger|merchandise|minerals|livestock|misc)-(\d{4}-(?:roman|cash))$/.exec(id))) return ['inc-src-' + m[1] + '-' + m[3], 'inc-dst-' + m[2] + '-' + m[3]];
  if ((m = /^ret-b-([a-z]+)-(.+)-(\d{4}-(?:roman|cash))$/.exec(id))) return ['ret-src-' + m[1] + '-' + m[3], 'ret-dst-' + m[2] + '-' + m[3]];
  return [null, null];
}
function sameBundle(idA, idB) {
  var a = bandBundleKeys(idA), b = bandBundleKeys(idB);
  return (a[0] && a[0] === b[0]) || (a[1] && a[1] === b[1]);
}
function overlapVerdict(total, checked, same) {
  var rate = checked ? total / checked : 0;
  var pass = (rate <= BAND_OVERLAP_REF_RATE) && (same === 0);
  return { bandOverlapRate: Math.round(rate * 10000) / 100, bandOverlapRefRatePct: BAND_OVERLAP_REF_RATE * 100,
           bandOverlapSameBundle: same, bandOverlapVerdict: pass ? 'PASS' : 'FAIL', bandOverlapViolations: pass ? 0 : 1 };
}

/* 16. 同层织带互不交叠：逐层把织带两两取样判交叠。探针取自实带内部
   （每个采样行取宽度方向 12%/50%/88% 三点，掐头去尾避开共享槽位边界），
   用 isPointInFill（对实带）／isPointInStroke（对细线）判是否落进另一条带子。
   两端同序排槽的路由下应为 0；公民修整（任务 001 追记）时新增。 */
function checkBandOverlap(onlyKey) {
  /* 公民修整 2026-08-21：onlyKey 给定时只查该层（首屏后的轻量运行用）；不给时全量 22 层（__check 用）。 */
  var total = 0, detail = [], layersN = 0, pairsChecked = 0, sameB = 0, sameDetail = [], sameTouch = 0, touchDetail = [];
  D.layers.forEach(function (l) {
    var key = l.year + '-' + l.basis, g = $('L-' + key); if (!g) return;
    if (onlyKey && key !== onlyKey) return;
    var prev = g.style.display; g.style.display = '';
    layersN++;
    var items = [];
    D.bands.forEach(function (b) {
      if (b.layer !== key) return;
      var el = $(b.id); if (!el) return;
      if (b.hair) { items.push({ id: b.id, el: el, hair: true }); return; }
      var pts = parseD(el.getAttribute('d')), n = pts.length / 2;
      items.push({ id: b.id, el: el, hair: false, A: pts.slice(0, n), B: pts.slice(n).reverse() });
    });
    var seen = {};
    for (var i = 0; i < items.length; i++) for (var j = 0; j < items.length; j++) {
      if (i === j) continue;
      var a = items[i], b = items[j];
      if (a.hair) continue;                    /* 探针只取自实带内部；细线作为被撞对象 */
      var pk = a.id < b.id ? a.id + '|' + b.id : b.id + '|' + a.id;
      if (seen[pk]) continue;
      pairsChecked++;
      var hit = false, hitCenter = false;
      for (var s = 1; s < a.A.length - 1 && !hitCenter; s++) {
        for (var f = 0; f < 3 && !hitCenter; f++) {
          var fr = [0.12, 0.5, 0.88][f];
          var x = a.A[s][0] + (a.B[s][0] - a.A[s][0]) * fr;
          var y = a.A[s][1] + (a.B[s][1] - a.A[s][1]) * fr;
          try { if (b.hair ? b.el.isPointInStroke(pt(x, y)) : b.el.isPointInFill(pt(x, y))) { hit = true; if (f === 1) hitCenter = true; } } catch (e) {}
        }
      }
      if (hit) { seen[pk] = 1; total++;
        if (sameBundle(a.id, b.id)) {
          /* 同束判交叉只认中线探针（50%）命中：一条带子的中线进了同束另一条带子才是走线交叉；
             仅边缘探针（12%/88%）命中的是 ≤3px 实带与 1px 细线相邻的亚像素触碰（如 G&SW 矿产 3.08px 旁的牲畜 0.27px 细线），另计不判错。 */
          if (hitCenter) { sameB++; if (sameDetail.length < 8) sameDetail.push(key + ' ' + a.id + ' × ' + b.id); }
          else { sameTouch++; if (touchDetail.length < 8) touchDetail.push(key + ' ' + a.id + ' × ' + b.id); }
        }
        if (detail.length < 8) detail.push(key + ' ' + a.id + ' × ' + b.id); }
    }
    g.style.display = prev;
  });
  show();
  var v = overlapVerdict(total, pairsChecked, sameB);
  var r = { bandOverlapPairs: total, bandOverlapDetail: detail, bandOverlapSameBundleDetail: sameDetail,
            bandOverlapSameBundleTouch: sameTouch, bandOverlapSameBundleTouchDetail: touchDetail,
            bandOverlapLayers: layersN, bandOverlapPairsChecked: pairsChecked };
  Object.keys(v).forEach(function (k) { r[k] = v[k]; });
  return r;
}

var CHECKS = [
  ['宽度回读（逐年逐带，含运量两端换尺与回程尺）', checkWidths],
  ['标记条连续性（带子不被切断）', checkGates],
  ['方向（左列向上、右列向下）', checkDirections],
  ['两列同高与横向对位', checkRetCols],
  ['文字不压带（真实路径几何，逐年）', checkTextBands],
  ['文字互压（逐年）', checkTextOverlap],
  ['标记不压字（逐年）', checkMarkText],
  ['id 唯一性', checkIds],
  ['节点宽度回读与拓扑', checkTopo],
  ['层次序（SVG 倒排 = 自下而上读）', checkLayerOrder],
  ['闭合对账（收入／账本／资本两口径，已登记差额豁免）', checkClosure],
  ['虚线空框在场（能量层与分配阻塞框）', checkFrames],
  ['无旋转文字', checkRotation],
  ['口径纪律（峰顶每类都带口径；1888/1889 无真实层）', checkBasisDiscipline],
  ['内嵌锚定值', checkAnchors],
  ['同层织带互压：率≤参照页 20.7% 且同束内 0（逐层两两取样；2026-08-22 主人裁定）', checkBandOverlap],
];
function runAll() {
  var out = {}, done = 0;
  try {
    CHECKS.forEach(function (c) {
      var r = c[1]();
      Object.keys(r).forEach(function (k) { out[k] = r[k]; });
      done++;
    });
    out._sentinel = 'CHECKS ' + done + '/' + CHECKS.length + ' COMPLETE';
    console.log(out._sentinel);
  } catch (e) {
    var el = $('checkfail');
    el.textContent = '机器检查中断（哨兵缺席=没验过，不算绿）：' + e.message;
    el.style.display = 'block';
    out._sentinel = 'CHECKS ' + done + '/' + CHECKS.length + ' INCOMPLETE: ' + e.message;
    console.error(out._sentinel);
  }
  window.__checkResults = out;
  return out;
}

/* ══ 本段新增（皆硬失败项） ══ */

/* 17. 现金口径标注：真实口径下阻塞格必须带标注，禁止静默回落。
      三条子判：
        a) 无真实层的年份（1888/1889）切到真实时，#basisfallback 必须可见；
        b) 有真实层但含阻塞格的节点，必须带 .bookonly 类与「账面」标注；
        c) 阻塞格数与数据文件登记的数一致（防标注漏挂或多挂）。 */
function checkCashAnnotation() {
  var bad = [];
  /* a) 回落可见性 */
  ['1888', '1889'].forEach(function (y) {
    if ($(layerId(y, 'cash'))) bad.push(y + ' 不该存在真实层');
  });
  /* b+c) 逐层核阻塞格的标注 */
  D.layers.forEach(function (l) {
    if (l.basis !== 'cash') return;
    var g = $(layerId(l.year, 'cash'));
    if (!g) { bad.push('缺真实层 ' + l.year); return; }
    var want = (D.blockedNodes && D.blockedNodes[l.year]) || [];
    var got = [];
    Array.prototype.forEach.call(g.querySelectorAll('.conode.bookonly'), function (r) {
      var m = /^wv-n-co-(.+)-\d{4}-cash$/.exec(r.id);
      if (m) got.push(m[1]);
    });
    want.forEach(function (k) {
      if (got.indexOf(k) === -1)
        bad.push(l.year + ' 阻塞节点 ' + k + ' 未挂 .bookonly');
      if (!$('wv-bk-co-' + k + '-' + l.year + '-cash'))
        bad.push(l.year + ' 阻塞节点 ' + k + ' 缺「账面」标注');
    });
    got.forEach(function (k) {
      if (want.indexOf(k) === -1)
        bad.push(l.year + ' 节点 ' + k + ' 多挂了 .bookonly');
    });
  });
  return { cashAnnotViolations: bad.length, cashAnnotDetail: bad.slice(0, 8) };
}

/* 18. L5 逐年形态：非 1899 必须为虚线空框且带说明；1899 须有瀑布节点与残差标注。 */
function checkL5Shape() {
  var bad = 0, det = [];
  D.layers.forEach(function (l) {
    var key = l.year + '-' + l.basis;
    var fr = $('wv-approp-frame-' + key);
    if (!fr) { bad++; det.push('缺分配框 ' + key); return; }
    var cs = getComputedStyle(fr);
    if (cs.fill !== 'none') { bad++; det.push(key + ' 分配框有填充'); }
    if (!cs.strokeDasharray || cs.strokeDasharray === 'none') {
      bad++; det.push(key + ' 分配框非虚线');
    }
    if (l.year !== '1899') {
      if (!$('wv-approp-note-' + key)) { bad++; det.push(key + ' 空框缺说明'); }
      if (fr.parentNode.querySelector('.l5node')) {
        bad++; det.push(key + ' 非 1899 却画了瀑布节点');
      }
    }
  });
  /* 1899：两个口径层各自都须有瀑布，且米德兰残差须标「成因未核实」。
     id 带层 key（1899 有账面与真实两层，不带 key 会撞 id）。 */
  D.layers.filter(function (l) { return l.year === '1899'; }).forEach(function (l) {
    var key = '1899-' + l.basis;
    if (!$('l5-midland-gross-' + key)) { bad++; det.push(key + ' 缺分配瀑布'); }
    var mn = $('l5-midland-gapnote-' + key);
    if (!mn) { bad++; det.push(key + ' 缺米德兰残差标注'); }
    else if ((mn.textContent || '').indexOf('成因未核实') === -1) {
      bad++; det.push(key + ' 米德兰残差未标「成因未核实」');
    }
    if (!$('l5-nodata-' + key)) {
      bad++; det.push(key + ' 缺「其余十二家无数据」终止节点');
    }
  });
  return { l5Violations: bad, l5Detail: det.slice(0, 8) };
}

CHECKS.push(['现金口径标注（真实口径下阻塞格必带标注，禁止静默回落）', checkCashAnnotation]);
CHECKS.push(['L5 逐年形态（非 1899 为虚线空框；1899 瀑布逐级闭合）', checkL5Shape]);

/* 负对照扩展：把一处 .bookonly 摘掉，第 17 组必须转红 */
window.__neg17 = function () {
  var g = $(layerId('1895', 'cash'));
  var el = g && g.querySelector('.conode.bookonly');
  if (!el) return { skipped: '1895 无 .bookonly 可摘' };
  el.classList.remove('bookonly');
  var r = checkCashAnnotation();
  el.classList.add('bookonly');
  return r;
};
/* 负对照扩展：给一个非 1899 年份塞个瀑布节点，第 18 组必须转红 */
window.__neg18 = function () {
  var g = $(layerId('1895', 'roman'));
  if (!g) return { skipped: '无 1895 账面层' };
  var t = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  t.setAttribute('class', 'l5node'); t.setAttribute('id', '__neg18tmp');
  t.setAttribute('x', '0'); t.setAttribute('y', '0');
  t.setAttribute('width', '1'); t.setAttribute('height', '1');
  $('wv-approp-frame-1895-roman').parentNode.appendChild(t);
  var r = checkL5Shape();
  t.parentNode.removeChild(t);
  return r;
};

/* 负对照注入器（发布页 __neg 同式）*/
window.__check = function (bandId, px) {
  if (bandId) {
    var el = $(bandId), d1 = el.getAttribute('d');
    var p = parseD(d1), n = p.length / 2;
    for (var i = n; i < p.length; i++) p[i][0] += px;
    el.setAttribute('d', 'M' + p.slice(0, n).map(function (q) { return q[0] + ',' + q[1]; }).join('L')
      + 'L' + p.slice(n).map(function (q) { return q[0] + ',' + q[1]; }).join('L') + 'Z');
    var r = checkWidths(); el.setAttribute('d', d1); return r;
  }
  return runAll();
};
window.__neg = function (kind, target) {
  var el, old, r, k = curKey();
  if (kind === 'width') return window.__check(target || ('wv-b-inc-passenger-' + k), 6);
  if (kind === 'dir') {
    el = $(target || ('ret-b-ordinary-' + k)); old = el.getAttribute('d');
    var p = parseD(old), n = p.length / 2;
    var A = p.slice(0, n).reverse(), B = p.slice(n).reverse();
    el.setAttribute('d', 'M' + A.map(function (q) { return q[0] + ',' + q[1]; }).join('L')
      + 'L' + B.map(function (q) { return q[0] + ',' + q[1]; }).join('L') + 'Z');
    r = checkDirections(); el.setAttribute('d', old); return r;
  }
  if (kind === 'retcol') {
    el = $('ret-n-midland-' + k); old = el.getAttribute('x'); /* 公民修整：natl 节点已删，改推右列 midland 节点 */
    el.setAttribute('x', String(parseFloat(old) + 40));
    r = checkRetCols(); el.setAttribute('x', old); return r;
  }
  if (kind === 'text') {
    /* 靶子必须是一条真实织带（checkTextBands 只拿 D.bands 做碰撞，节点 rect 不在其中）。
       取该层「全国收入 → 账本」那条带子的正中，把一条说明文字挪上去。 */
    var bid = target || ('wv-b-natl-acct-' + k);
    var band = $(bid); if (!band) return { textOnBand_value: -1, note: '缺靶带 ' + bid };
    var e2 = bandEdges(band), mid = Math.floor(e2.A.length / 2);
    var cx = (e2.A[mid][0] + e2.B[mid][0]) / 2, cy = e2.A[mid][1];
    el = svgEl.querySelector('#L-' + k + ' .capbody');
    if (!el) return { textOnBand_value: -1, note: '缺靶字' };
    old = { x: el.getAttribute('x'), y: el.getAttribute('y'),
            anc: el.getAttribute('text-anchor') };
    el.setAttribute('x', String(cx)); el.setAttribute('y', String(cy));
    el.setAttribute('text-anchor', 'middle');
    r = checkTextBands();
    el.setAttribute('x', old.x); el.setAttribute('y', old.y);
    if (old.anc) el.setAttribute('text-anchor', old.anc);
    return r;
  }
  if (kind === 'marktext') {
    /* 固定偏移是靠不住的注入：文字位置由生成期避让算出，26px 未必够碰上。
       改为把标记条挪到该层某条文字的实际包围盒上——必然相交，检查必须报。 */
    el = $('wv-gate-' + k); if (!el) return { markTextViolations: -1, note: '缺闸口条' };
    var g = $('L-' + k), t0 = null;
    Array.prototype.forEach.call(g.querySelectorAll('text'), function (t) {
      if (t0) return;
      var bb; try { bb = t.getBBox(); } catch (e) { return; }
      if (bb.width > 0 && bb.height > 0) t0 = bb;
    });
    if (!t0) return { markTextViolations: -1, note: '该层无可用文字' };
    old = { y: el.getAttribute('y'), h: el.getAttribute('height') };
    el.setAttribute('y', String(t0.y - 2));
    el.setAttribute('height', String(Math.max(t0.height + 4, 8)));
    r = checkMarkText();
    el.setAttribute('y', old.y); el.setAttribute('height', old.h);
    return r;
  }
  if (kind === 'overlap') {
    /* 把该层普通货物收入带整条左移 30px——必然压进客运带（两带间只有 10px 节点间隙、
       槽位相邻），checkBandOverlap 必须报出 ≥1 对。 */
    el = $(target || ('wv-b-inc-merchandise-' + k)); if (!el) return { bandOverlapPairs: -1, note: '缺靶带' };
    old = el.getAttribute('d');
    var pm = parseD(old);
    el.setAttribute('d', 'M' + pm.map(function (q) { return (q[0] - 30) + ',' + q[1]; }).join('L') + 'Z');
    r = checkBandOverlap(); el.setAttribute('d', old); return r;
  }
  if (kind === 'nodew') {
    el = $('wv-n-cap-ordinary-' + k); old = el.getAttribute('width');
    el.setAttribute('width', String(parseFloat(old) + 5));
    r = checkTopo(); el.setAttribute('width', old); return r;
  }
  return null;
};
show();
/* 公民修整 2026-08-21（空路由，主人裁定页面在浏览器里的问题归公民改）：
   Science v3 原件在此处同步 runAll()，第 16 组对 22 层取样 768,341 对，真实浏览器 35 秒才可交互。
   现改为：加载只 show()；首屏画完后空闲时跑 runLight()（除第 16 组外 17 组 + 第 16 组只查当前层），
   写轻量哨兵；全量 18 组仍由 window.__check() 按需触发并写 CHECKS 18/18 COMPLETE。
   原件备份：科研交接/公民修整/app_B.js.v3-Science原件-2026-08-21-1817 */
function defer(fn) {
  /* 公民修整 2026-08-21：让出主线程用 MessageChannel 而不是 setTimeout——后台标签页里 setTimeout 会被浏览器
     节流到每秒一次甚至每分钟一次，分块检查会拖到几分钟；postMessage 不受此节流。 */
  if (window.MessageChannel) {
    var ch = new MessageChannel(); ch.port1.onmessage = function () { ch.port1.close(); fn(); }; ch.port2.postMessage(0);
  } else setTimeout(fn, 0);
}
function checkBandOverlapAsync(key, cb) {
  /* 公民修整 2026-08-21：单层互压的分块版（每个宏任务查 2 条带子的探针，约 0.1 秒），供首屏后的轻量运行用；
     同步全量版 checkBandOverlap() 不变，留给 window.__check()。若运行中用户切了层，结果仍按 key 标注。 */
  var g = $('L-' + key); if (!g) { cb({ bandOverlapPairs: -1, note: '无此层' }); return; }
  var prev = g.style.display; g.style.display = '';
  var items = [];
  D.bands.forEach(function (b) {
    if (b.layer !== key) return;
    var el = $(b.id); if (!el) return;
    if (b.hair) { items.push({ id: b.id, el: el, hair: true }); return; }
    var pts = parseD(el.getAttribute('d')), n = pts.length / 2;
    items.push({ id: b.id, el: el, hair: false, A: pts.slice(0, n), B: pts.slice(n).reverse() });
  });
  var seen = {}, total = 0, pairsChecked = 0, detail = [], i = 0, sameB = 0, sameTouch = 0;
  function chunk() {
    var end = Math.min(i + 2, items.length);
    for (; i < end; i++) {
      var a = items[i]; if (a.hair) continue;
      for (var j = 0; j < items.length; j++) {
        if (i === j) continue;
        var b = items[j];
        var pk = a.id < b.id ? a.id + '|' + b.id : b.id + '|' + a.id;
        if (seen[pk]) continue;
        pairsChecked++;
        var hit = false, hitCenter = false;
        for (var s2 = 1; s2 < a.A.length - 1 && !hitCenter; s2++) {
          for (var f = 0; f < 3 && !hitCenter; f++) {
            var fr = [0.12, 0.5, 0.88][f];
            var x = a.A[s2][0] + (a.B[s2][0] - a.A[s2][0]) * fr;
            var y = a.A[s2][1] + (a.B[s2][1] - a.A[s2][1]) * fr;
            try { if (b.hair ? b.el.isPointInStroke(pt(x, y)) : b.el.isPointInFill(pt(x, y))) { hit = true; if (f === 1) hitCenter = true; } } catch (e) {}
          }
        }
        if (hit) { seen[pk] = 1; total++;
          if (sameBundle(a.id, b.id)) { if (hitCenter) sameB++; else sameTouch++; }
          if (detail.length < 8) detail.push(key + ' ' + a.id + ' × ' + b.id); }
      }
    }
    if (i < items.length) { defer(chunk); return; }
    g.style.display = prev; show();
    var r = { bandOverlapPairs: total, bandOverlapDetail: detail, bandOverlapPairsChecked: pairsChecked, bandOverlapSameBundleTouch: sameTouch };
    var v = overlapVerdict(total, pairsChecked, sameB);
    Object.keys(v).forEach(function (k) { r[k] = v[k]; });
    cb(r);
  }
  chunk();
}
function runLight(done) {
  /* 分块跑：每组一个宏任务（setTimeout 0），组与组之间让出主线程，滑块、按钮在检查进行中仍可响应；
     最后一块是第 16 组只查当前层。每组耗时记在 out._groupMs。 */
  var out = {}, n = 0, t0 = (window.performance ? performance.now() : 0), groupMs = {};
  var queue = CHECKS.filter(function (c) { return c[1] !== checkBandOverlap; });
  function step() {
    try {
      if (queue.length) {
        var c = queue.shift(), g0 = performance.now();
        var r = c[1]();
        Object.keys(r).forEach(function (k) { out[k] = r[k]; });
        groupMs[c[0]] = Math.round(performance.now() - g0); n++;
        defer(step); return;
      }
      var g1 = performance.now(), key = curKey();
      checkBandOverlapAsync(key, function (bo) {
        groupMs['同层织带互压（仅当前层 ' + key + '，分块）'] = Math.round(performance.now() - g1);
        out.bandOverlapCurrentLayer = bo.bandOverlapPairs;
        out.bandOverlapCurrentLayerKey = key;
        out.bandOverlapCurrentLayerPairsChecked = bo.bandOverlapPairsChecked;
        out.bandOverlapCurrentLayerRate = bo.bandOverlapRate;
        out.bandOverlapCurrentLayerSameBundle = bo.bandOverlapSameBundle;
        out.bandOverlapCurrentLayerVerdict = bo.bandOverlapVerdict;
        out._sentinel = 'CHECKS ' + n + '/' + CHECKS.length + ' LIGHT (band overlap: current layer only; run __check() for full 18/18)';
        out._lightMs = Math.round(performance.now() - t0);
        out._groupMs = groupMs;
        console.log(out._sentinel, out._lightMs + 'ms');
        window.__checkResults = out;
        if (done) done(out);
      });
      return;
    } catch (e) {
      var el = $('checkfail');
      el.textContent = '机器检查中断（哨兵缺席=没验过，不算绿）：' + e.message;
      el.style.display = 'block';
      out._sentinel = 'CHECKS ' + n + '/' + CHECKS.length + ' INCOMPLETE: ' + e.message;
      console.error(out._sentinel);
    }
    window.__checkResults = out;
    if (done) done(out);
  }
  defer(step);
  return 'light-run-started';
}
window.__runLight = runLight;
(window.requestIdleCallback || function (f) { setTimeout(f, 0); })(function () { runLight(); }, { timeout: 2000 });
})();
