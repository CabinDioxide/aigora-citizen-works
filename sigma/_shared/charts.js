/* Σ 页面用的小图表库：线图、分组条形、区间对比。每张图画成 SVG，悬停或点按显示读数，图下可展开数据表。
   用法见各页末尾的 SigmaCharts.line / .bars / .ranges 调用。不依赖外部库。 */
(function () {
  const NS = "http://www.w3.org/2000/svg";
  // 页面 <html lang> 以 en 开头时，图里的固定文字用英文
  const EN = /^en/i.test(document.documentElement.lang || "");
  const T = EN ? { table: "Show data table", year: "Year", group: "Group", colon: ": ", lp: " (", rp: ")" }
               : { table: "展开数据表", year: "年份", group: "组", colon: "：", lp: "（", rp: "）" };
  const fmt = (v, d) => (v == null ? "—" : Number(v).toLocaleString(EN ? "en-US" : "zh-CN", { maximumFractionDigits: d == null ? 2 : d }));
  function el(tag, attrs, parent) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function niceTicks(lo, hi, n) {
    const span = hi - lo || 1, step0 = span / (n || 5);
    const mag = Math.pow(10, Math.floor(Math.log10(step0)));
    const step = [1, 2, 2.5, 5, 10].map(m => m * mag).find(s => s >= step0);
    const out = [];
    for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-9; v += step) out.push(+v.toFixed(10));
    return out;
  }
  // 按容器的实际宽度画图，手机上字不会被整体缩小
  function width(host) { return Math.round(Math.min(760, Math.max(320, host.clientWidth || 760))); }
  function tipBox(host) {
    let t = host.querySelector(".ctip");
    if (!t) { t = document.createElement("div"); t.className = "ctip"; t.hidden = true; host.appendChild(t); }
    return t;
  }
  function showTip(host, html, x, y) {
    const t = tipBox(host); t.innerHTML = html; t.hidden = false;
    const w = host.clientWidth, tw = t.offsetWidth;
    t.style.left = Math.max(4, Math.min(w - tw - 4, x + 14)) + "px";
    t.style.top = Math.max(0, y - 10) + "px";
  }
  function hideTip(host) { tipBox(host).hidden = true; }
  function table(host, cols, rows) {
    const d = document.createElement("details"); d.className = "ctab";
    d.innerHTML = "<summary>" + T.table + "</summary>";
    const tb = document.createElement("table");
    tb.innerHTML = "<thead><tr>" + cols.map(c => "<th>" + c + "</th>").join("") + "</tr></thead><tbody>" +
      rows.map(r => "<tr>" + r.map(c => "<td>" + (c == null ? "—" : c) + "</td>").join("") + "</tr>").join("") + "</tbody>";
    d.appendChild(tb); host.appendChild(d);
  }
  function legend(host, series) {
    if (series.length < 2) return;
    const lg = document.createElement("div"); lg.className = "clg";
    lg.innerHTML = series.map(s => '<span><i style="background:' + s.color + (s.dash ? ';background:repeating-linear-gradient(90deg,' + s.color + ' 0 5px,transparent 5px 8px)' : '') + '"></i>' + s.name + "</span>").join("");
    host.appendChild(lg);
  }

  /* 线图。opt: {el, series:[{name,color,points:[[x,y],...],dash,unit}], xLabel, yLabel, yMin, yMax, xMin, xMax,
     xFmt, yDigits, bands:[{x0,x1,label}], hlines:[{y,label}], vmarks:[{x,label}], labelEnd:true} */
  function line(opt) {
    const host = typeof opt.el === "string" ? document.querySelector(opt.el) : opt.el;
    host.classList.add("chart");
    const W = width(host), H = opt.height || (W < 600 ? 280 : 340), m = { l: 50, r: opt.labelEnd ? 120 : 16, t: 16, b: 40 };
    const all = opt.series.flatMap(s => s.points);
    const xs = all.map(p => p[0]), ys = all.map(p => p[1]).filter(v => v != null);
    const x0 = opt.xMin != null ? opt.xMin : Math.min(...xs), x1 = opt.xMax != null ? opt.xMax : Math.max(...xs);
    const y0 = opt.yMin != null ? opt.yMin : Math.min(0, ...ys), y1 = opt.yMax != null ? opt.yMax : Math.max(...ys) * 1.08;
    const X = v => m.l + (v - x0) / (x1 - x0) * (W - m.l - m.r);
    const L = opt.log ? v => Math.log10(v) : v => v;
    const Y = v => H - m.b - (L(v) - L(y0)) / (L(y1) - L(y0)) * (H - m.t - m.b);
    const svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": opt.aria || "" });
    (opt.bands || []).forEach(b => {
      el("rect", { x: X(b.x0), y: m.t, width: X(b.x1) - X(b.x0), height: H - m.t - m.b, class: "band" }, svg);
      if (b.label) { const t = el("text", { x: X(b.x0) + 4, y: m.t + 13, class: "bandlab" }, svg); t.textContent = b.label; }
    });
    (opt.yTicks || niceTicks(y0, y1, 5)).forEach(v => {
      el("line", { x1: m.l, x2: W - m.r, y1: Y(v), y2: Y(v), class: "grid" }, svg);
      const t = el("text", { x: m.l - 8, y: Y(v) + 4, class: "tick", "text-anchor": "end" }, svg); t.textContent = fmt(v);
    });
    (opt.xTicks || niceTicks(x0, x1, 7)).forEach(v => {
      const t = el("text", { x: X(v), y: H - m.b + 18, class: "tick", "text-anchor": "middle" }, svg);
      t.textContent = opt.xFmt ? opt.xFmt(v) : v;
    });
    el("line", { x1: m.l, x2: W - m.r, y1: Y(y0), y2: Y(y0), class: "axis" }, svg);
    (opt.hlines || []).forEach(h => {
      el("line", { x1: m.l, x2: W - m.r, y1: Y(h.y), y2: Y(h.y), class: "ref" }, svg);
      const t = el("text", { x: W - m.r - 4, y: Y(h.y) - 5, class: "reflab", "text-anchor": "end" }, svg); t.textContent = h.label;
    });
    (opt.vmarks || []).forEach(h => {
      el("line", { x1: X(h.x), x2: X(h.x), y1: m.t, y2: H - m.b, class: "ref" }, svg);
      const t = el("text", { x: X(h.x) + 4, y: m.t + 26 + (h.dy || 0), class: "reflab" }, svg); t.textContent = h.label;
    });
    if (opt.yLabel) { const t = el("text", { x: m.l, y: m.t - 4, class: "axlab" }, svg); t.textContent = opt.yLabel; }
    if (opt.xLabel) { const t = el("text", { x: W - m.r, y: H - 6, class: "axlab", "text-anchor": "end" }, svg); t.textContent = opt.xLabel; }
    // area：{lo:[[x,y]...], hi:[[x,y]...], color}，在两条边之间填一块浅色区域（例如估计范围）
    (opt.areas || []).forEach(ar => {
      const d = ar.hi.map((p, i) => (i ? "L" : "M") + X(p[0]).toFixed(1) + "," + Y(p[1]).toFixed(1)).join("") +
        ar.lo.slice().reverse().map(p => "L" + X(p[0]).toFixed(1) + "," + Y(p[1]).toFixed(1)).join("") + "Z";
      el("path", { d: d, fill: ar.color, "fill-opacity": ar.opacity || 0.18, stroke: "none" }, svg);
    });
    opt.series.forEach(s => {
      const pts = s.points.filter(p => p[1] != null);
      // maxGap：相邻两点的横坐标相差超过它就断开，缺数据的年份不连线
      el("path", { d: pts.map((p, i) => (i && !((s.maxGap != null ? s.maxGap : opt.maxGap) && p[0] - pts[i - 1][0] > (s.maxGap != null ? s.maxGap : opt.maxGap)) ? "L" : "M") + X(p[0]).toFixed(1) + "," + Y(p[1]).toFixed(1)).join(""),
        fill: "none", stroke: s.color, "stroke-width": 2, "stroke-dasharray": s.dash ? "5 4" : "none", "stroke-linejoin": "round" }, svg);
      if (s.dots !== false) pts.forEach(p => el("circle", { cx: X(p[0]), cy: Y(p[1]), r: 4, fill: s.color, stroke: "#0d1117", "stroke-width": 2 }, svg));
      if (opt.labelEnd && pts.length) {
        const p = pts[pts.length - 1];
        const t = el("text", { x: X(p[0]) + 8, y: Y(p[1]) + 4 + (s.labelDy || 0), class: "endlab" }, svg); t.textContent = s.name;
      }
    });
    const cross = el("line", { y1: m.t, y2: H - m.b, class: "cross", visibility: "hidden" }, svg);
    const hit = el("rect", { x: m.l, y: m.t, width: W - m.l - m.r, height: H - m.t - m.b, fill: "transparent" }, svg);
    const xsU = [...new Set(xs)].sort((a, b) => a - b);
    function move(ev) {
      const r = svg.getBoundingClientRect(), sx = (ev.clientX - r.left) / r.width * W;
      let best = xsU[0]; xsU.forEach(v => { if (Math.abs(X(v) - sx) < Math.abs(X(best) - sx)) best = v; });
      cross.setAttribute("x1", X(best)); cross.setAttribute("x2", X(best)); cross.setAttribute("visibility", "visible");
      const rows = opt.series.map(s => { const p = s.points.find(q => q[0] === best); return p && p[1] != null ?
        '<div><i style="background:' + s.color + '"></i>' + s.name + T.colon + "<b>" + fmt(p[1], opt.yDigits) + "</b>" + (s.unit || opt.unit || "") + (p[2] ? '<em>' + p[2] + '</em>' : "") + "</div>" : ""; }).join("");
      const hr = host.getBoundingClientRect();
      showTip(host, "<h5>" + (opt.xFmt ? opt.xFmt(best) : best) + "</h5>" + rows, ev.clientX - hr.left, ev.clientY - hr.top);
    }
    hit.addEventListener("pointermove", move);
    hit.addEventListener("pointerdown", move);
    hit.addEventListener("pointerleave", () => { cross.setAttribute("visibility", "hidden"); hideTip(host); });
    legend(host, opt.series);
    host.appendChild(svg);
    const xsT = xsU;
    table(host, [opt.xName || T.year].concat(opt.series.map(s => s.name + (s.unit || opt.unit ? T.lp + (s.unit || opt.unit) + T.rp : ""))),
      xsT.map(v => [opt.xFmt ? opt.xFmt(v) : v].concat(opt.series.map(s => { const p = s.points.find(q => q[0] === v); return p ? fmt(p[1], opt.yDigits) : null; }))));
  }

  /* 横向分组条形。opt: {el, groups:[{label, values:[v...], notes:[...]}], series:[{name,color}], unit, max} */
  function bars(opt) {
    const host = typeof opt.el === "string" ? document.querySelector(opt.el) : opt.el;
    host.classList.add("chart");
    const W = width(host), ns = opt.series.length, bh = 16, gap = 2, gpad = 18, lw = Math.min(opt.labelWidth || 150, Math.round(W * 0.3));
    const H = 20 + opt.groups.length * (ns * (bh + gap) + gpad);
    const max = opt.max || Math.max(...opt.groups.flatMap(g => g.values).filter(v => v != null)) * 1.1;
    const X = v => lw + v / max * (W - lw - 70);
    const svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": opt.aria || "" });
    niceTicks(0, max, 5).forEach(v => {
      el("line", { x1: X(v), x2: X(v), y1: 6, y2: H - 4, class: "grid" }, svg);
    });
    let y = 14;
    opt.groups.forEach(g => {
      const t = el("text", { x: lw - 10, y: y + (ns * (bh + gap)) / 2 + 3, class: "glab", "text-anchor": "end" }, svg); t.textContent = g.label;
      g.values.forEach((v, i) => {
        if (v == null) { y += bh + gap; return; }
        const s = opt.series[i], w = Math.max(X(Math.max(v, 0)) - lw, v > 0 ? 4 : 0);
        if (v > 0) el("rect", { x: lw, y: y, width: w, height: bh, rx: 3, fill: s.color }, svg);
        else el("line", { x1: lw, x2: lw, y1: y, y2: y + bh, stroke: s.color, "stroke-width": 3 }, svg);
        const vt = el("text", { x: lw + w + 6, y: y + bh - 3, class: "val" }, svg); vt.textContent = fmt(v, opt.digits) + (opt.unitShort || "");
        const hit = el("rect", { x: lw - 4, y: y - 1, width: W - lw, height: bh + 2, fill: "transparent" }, svg);
        const show = ev => { const hr = host.getBoundingClientRect();
          showTip(host, "<h5>" + g.label + "</h5><div><i style='background:" + s.color + "'></i>" + s.name + T.colon + "<b>" + fmt(v, opt.digits) + "</b>" + (opt.unit || "") + "</div>" + (g.notes && g.notes[i] ? "<p>" + g.notes[i] + "</p>" : ""), ev.clientX - hr.left, ev.clientY - hr.top); };
        hit.addEventListener("pointermove", show); hit.addEventListener("pointerdown", show);
        hit.addEventListener("pointerleave", () => hideTip(host));
        y += bh + gap;
      });
      y += gpad;
    });
    legend(host, opt.series);
    host.appendChild(svg);
    table(host, [opt.groupName || T.group].concat(opt.series.map(s => s.name + (opt.unit ? T.lp + opt.unit + T.rp : ""))),
      opt.groups.map(g => [g.label].concat(g.values.map(v => fmt(v, opt.digits)))));
  }

  /* 区间对比：每行若干条区间 [lo,hi]。opt: {el, rows:[{label, unit, items:[{name,color,lo,hi,note}]}]}，每行自己的刻度 */
  function ranges(opt) {
    const host = typeof opt.el === "string" ? document.querySelector(opt.el) : opt.el;
    host.classList.add("chart");
    const W = width(host), narrow = W < 600, lw = narrow ? 16 : 170, rowH = narrow ? 40 : 26, rpad = 34;
    const H = 10 + opt.rows.reduce((a, r) => a + r.items.length * rowH + rpad, 0);
    const svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": opt.aria || "" });
    let y = 10;
    opt.rows.forEach(r => {
      const max = r.max || Math.max(...r.items.map(i => i.hi)) * 1.15;
      const X = v => lw + v / max * (W - lw - 90);
      const t = el("text", { x: 0, y: y + 10, class: "glab2" }, svg); t.textContent = r.label;
      niceTicks(0, max, 4).forEach(v => {
        el("line", { x1: X(v), x2: X(v), y1: y + 14, y2: y + 14 + r.items.length * rowH, class: "grid" }, svg);
        const tt = el("text", { x: X(v), y: y + 26 + r.items.length * rowH, class: "tick", "text-anchor": "middle" }, svg); tt.textContent = fmt(v) + (r.unitShort || "");
      });
      r.items.forEach((it, k) => {
        const yy = y + 16 + k * rowH + (narrow ? 14 : 0);
        const nm = narrow ? el("text", { x: lw, y: yy - 3, class: "glab" }, svg) : el("text", { x: lw - 10, y: yy + 11, class: "glab", "text-anchor": "end" }, svg); nm.textContent = it.name;
        const w = Math.max(X(it.hi) - X(it.lo), 8);
        el("rect", { x: X(it.lo) - (it.hi === it.lo ? 4 : 0), y: yy + 2, width: w, height: 12, rx: 6, fill: it.color }, svg);
        const vt = el("text", { x: X(it.lo) + w + 6, y: yy + 12, class: "val" }, svg);
        vt.textContent = it.lo === it.hi ? fmt(it.lo) : fmt(it.lo) + "–" + fmt(it.hi);
        const hit = el("rect", { x: lw - 4, y: yy, width: W - lw, height: rowH - 4, fill: "transparent" }, svg);
        const show = ev => { const hr = host.getBoundingClientRect();
          showTip(host, "<h5>" + r.label + "</h5><div><i style='background:" + it.color + "'></i>" + it.name + "：<b>" + vt.textContent + "</b>" + (r.unit || "") + "</div>" + (it.note ? "<p>" + it.note + "</p>" : ""), ev.clientX - hr.left, ev.clientY - hr.top); };
        hit.addEventListener("pointermove", show); hit.addEventListener("pointerdown", show);
        hit.addEventListener("pointerleave", () => hideTip(host));
      });
      y += r.items.length * rowH + rpad;
    });
    host.appendChild(svg);
    table(host, ["量", "来源", "下限", "上限", "说明"],
      opt.rows.flatMap(r => r.items.map(it => [r.label, it.name, fmt(it.lo), fmt(it.hi), it.note || ""])));
  }

  window.SigmaCharts = { line, bars, ranges, util: { el, fmt, width, showTip, hideTip, table, legend, EN, T } };
})();
