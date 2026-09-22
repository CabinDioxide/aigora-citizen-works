/* 供应链依赖关系的地铁图层（2026-09-22 起，主人：「供应链依赖关系做成一个单独的图层，默认不显示，点击相应按钮才会显示」
 * 「地铁图是这些之上的另外一层，点击才有」）。
 *
 * 底图照旧是真实地图；这一层是叠在最上面的一张 SVG，站放在真实经纬度上，线只走横、竖、45 度斜线，
 * 几条链共用一对站时平行排开；屏幕上挤在一起的站按真实方位稍微摊开，灰色细线指回真实位置；
 * 视野外的站贴在地图边缘，写成「往某地」的终点牌。地图每次移动、缩放都按当前像素重排。
 *
 * 用法：const ov = new MetroOverlay({stations, lines, onStation, stationTip, lineTip}); ov 是一个 Leaflet 图层，
 * map.addLayer(ov) 显示、map.removeLayer(ov) 收起；ov.highlight(lineId) 只看一条链，传 null 恢复。
 * stations：{id: {name, lat, lon, status, num, kind}}（name 已按语言转好）；lines：[{id, name, color, route, bypass}]。
 */
const METRO_STC = {stopped: '#ff3b30', narrowed: '#ff9500', damaged: '#5856d6', inuse: '#34c759', unknown: '#8e8e93'};
const MetroOverlay = L.Layer.extend({
  initialize(opts) {
    this.o = opts; this.focus = null;
    const S = opts.stations;
    this.ids = Object.keys(S).filter(k => S[k].lat != null && S[k].lon != null);
    this.edges = {};
    opts.lines.forEach((l, li) => {
      [['route', l.route || []], ['bypass', l.bypass || []]].forEach(([kind, arr]) => arr.forEach(([a, b]) => {
        if (!S[a] || !S[b]) return;
        const [x, y] = [a, b].sort(), k = x + '|' + y;
        (this.edges[k] = this.edges[k] || {a: x, b: y, lines: []}).lines.push({l, li, kind});
      }));
    });
    this.passes = {};
    opts.lines.forEach(l => [...(l.route || []), ...(l.bypass || [])].forEach(([a, b]) => [a, b].forEach(x => (this.passes[x] = this.passes[x] || new Set()).add(l.id))));
    this._render = this._render.bind(this);
  },
  onAdd(map) {
    this._map = map;
    const NS = 'http://www.w3.org/2000/svg';
    this._svg = document.createElementNS(NS, 'svg'); this._svg.setAttribute('class', 'metro-ov');
    this._tip = document.createElement('div'); this._tip.className = 'metro-tip';
    map.getContainer().appendChild(this._svg); map.getContainer().appendChild(this._tip);
    map.on('move zoom resize viewreset', this._render);
    // 战区图打开时把视野移到这张地铁图的主体：有编号的站的平均位置周围 30 度以内的站（更远的仍贴边写「往某地」）
    if (this.o.fitOnShow) { const S = this.o.stations, numd = this.ids.filter(k => S[k].num);
      if (numd.length) { const c = [numd.reduce((a, k) => a + S[k].lat, 0) / numd.length, numd.reduce((a, k) => a + S[k].lon, 0) / numd.length];
        const near = this.ids.filter(k => Math.abs(S[k].lat - c[0]) < 30 && Math.abs(S[k].lon - c[1]) < 30);
        if (near.length > 1) map.fitBounds(L.latLngBounds(near.map(k => [S[k].lat, S[k].lon])), {padding: [50, 60]}); } }
    this._render();
  },
  onRemove(map) {
    map.off('move zoom resize viewreset', this._render);
    this._svg.remove(); this._tip.remove(); this._svg = null;
  },
  highlight(id) { this.focus = id; if (this._svg) this._render(); },
  _layout() {
    const S = this.o.stations, map = this._map, sz = map.getSize(), M = 34, P = {};
    this.ids.forEach(k => { const p = map.latLngToContainerPoint([S[k].lat, S[k].lon]); P[k] = {x: p.x, y: p.y, tx: p.x, ty: p.y}; });
    // 视野外的站：沿「视野中心→真实位置」的方向贴到边缘
    const cx0 = sz.x / 2, cy0 = sz.y / 2;
    this.ids.forEach(k => { const p = P[k]; if (p.x >= M && p.x <= sz.x - M && p.y >= M && p.y <= sz.y - M) return;
      const dx = p.x - cx0, dy = p.y - cy0;
      const tt = Math.min(dx ? (dx > 0 ? (sz.x - M - cx0) / dx : (M - cx0) / dx) : 1e9, dy ? (dy > 0 ? (sz.y - M - cy0) / dy : (M - cy0) / dy) : 1e9);
      p.x = cx0 + dx * tt; p.y = cy0 + dy * tt; p.tx = p.x; p.ty = p.y; p.edge = true; });
    // 屏幕上 40 像素以内的站并成一组，按真实方位等比例放大摊开（最多四倍），形状不变
    const GAP = 40, seen = new Set();
    this.ids.forEach(k => { if (seen.has(k) || P[k].edge) return; const g = [k]; seen.add(k);
      for (let i = 0; i < g.length; i++) this.ids.forEach(j => { if (!seen.has(j) && !P[j].edge && Math.hypot(P[g[i]].tx - P[j].tx, P[g[i]].ty - P[j].ty) < GAP) { g.push(j); seen.add(j); } });
      if (g.length < 2) return;
      const cx = g.reduce((s, q) => s + P[q].tx, 0) / g.length, cy = g.reduce((s, q) => s + P[q].ty, 0) / g.length;
      let dmin = 1e9; g.forEach(a => g.forEach(b => { if (a < b) dmin = Math.min(dmin, Math.hypot(P[a].tx - P[b].tx, P[a].ty - P[b].ty)); }));
      const f = Math.min(GAP * 1.2 / Math.max(dmin, .5), 4);
      g.forEach(q => { P[q].x = cx + (P[q].tx - cx) * f; P[q].y = cy + (P[q].ty - cy) * f; P[q].moved = true; }); });
    return P;
  },
  _render() {
    if (!this._svg) return;
    const NS = 'http://www.w3.org/2000/svg', svg = this._svg, S = this.o.stations, sz = this._map.getSize(), focus = this.focus, passes = this.passes;
    const el = (tag, at, par) => { const e = document.createElementNS(NS, tag); for (const k in at) e.setAttribute(k, at[k]); (par || svg).appendChild(e); return e; };
    svg.setAttribute('width', sz.x); svg.setAttribute('height', sz.y); svg.innerHTML = '';
    svg.classList.toggle('fade', !!focus);
    el('rect', {x: 0, y: 0, width: sz.x, height: sz.y, class: 'veil'});  // 压淡下面的船、影像、异常各层，地铁图浮在上面
    const P = this._layout(), W = 5, SP = 6.5;
    this.ids.forEach(k => { const p = P[k]; if (p.moved) { el('line', {x1: p.x, y1: p.y, x2: p.tx, y2: p.ty, class: 'lead'}); el('circle', {cx: p.tx, cy: p.ty, r: 2.2, class: 'lead-dot'}); } });
    const stopped = new Set(this.ids.filter(k => S[k].status === 'stopped'));
    const drawn = [];
    Object.values(this.edges).forEach(e => {
      const A = P[e.a], B = P[e.b]; if (!A || !B) return;
      const base = MetroOverlay.octi(A, B), n = e.lines.length;
      e.lines.sort((x, y) => x.li - y.li).forEach((o, i) => drawn.push({d: MetroOverlay.rounded(MetroOverlay.offset(base, (i - (n - 1) / 2) * SP)), o, stopped: stopped.has(e.a) || stopped.has(e.b)}));
    });
    drawn.forEach(x => el('path', {d: x.d, class: 'halo'}));
    drawn.forEach(x => {
      const p = el('path', {d: x.d, stroke: x.o.l.color, 'stroke-width': W, 'stroke-linecap': x.o.kind === 'bypass' ? 'butt' : 'round',
        'stroke-dasharray': x.o.kind === 'bypass' ? '9 6' : (x.stopped ? '1 9' : ''), class: 'ln' + (focus === x.o.l.id ? ' on' : '')});
      p.addEventListener('mousemove', ev => this._showTip(ev, this.o.lineTip ? this.o.lineTip(x.o.l, x.o.kind) : x.o.l.name));
      p.addEventListener('mouseleave', () => { this._tip.style.display = 'none'; });
      p.addEventListener('click', ev => { ev.stopPropagation(); this.highlight(this.focus === x.o.l.id ? null : x.o.l.id); if (this.o.onFocus) this.o.onFocus(this.focus); });
    });
    // 站：有编号的先放，站名依次试八个位置，取第一个不压别的字、不压站、不出边的
    const boxes = this.ids.map(k => { const r = (passes[k] && passes[k].size > 1) ? 12 : 9.5; return [P[k].x - r, P[k].y - r, 2 * r, 2 * r]; });
    const hit = b => boxes.some(o => b[0] < o[0] + o[2] && b[0] + b[2] > o[0] && b[1] < o[1] + o[3] && b[1] + b[3] > o[1]) || b[0] < 2 || b[0] + b[2] > sz.x - 2 || b[1] < 2 || b[1] + b[3] > sz.y - 2;
    [...this.ids].sort((a, b) => (S[b].num ? 1 : 0) - (S[a].num ? 1 : 0)).forEach(k => {
      const s = S[k], p = P[k], xfer = passes[k] && passes[k].size > 1, on = !focus || (passes[k] && passes[k].has(focus));
      const g = el('g', {class: 'st lbl' + (on ? ' on' : '')});
      if (p.edge) {
        el('rect', {x: p.x - 7, y: p.y - 7, width: 14, height: 14, rx: 3, class: 'term'}, g);
        const ang = Math.atan2(p.y - sz.y / 2, p.x - sz.x / 2) * 180 / Math.PI;
        el('path', {d: 'M-3,-4 L3,0 L-3,4', class: 'term-arrow', transform: `translate(${p.x},${p.y}) rotate(${ang})`}, g);
      } else {
        if (s.status) el('circle', {cx: p.x, cy: p.y, r: xfer ? 12 : 9.5, class: 'ring', stroke: METRO_STC[s.status] || METRO_STC.unknown}, g);
        el('circle', {cx: p.x, cy: p.y, r: xfer ? 7.5 : 5.5, class: 'dot' + (xfer ? ' xfer' : '') + (s.num ? ' num' : '')}, g);
      }
      const txt = (p.edge && this.o.toWord ? this.o.toWord : '') + (s.num ? s.num + ' ' : '') + s.name;
      const tw = [...txt].reduce((w, c) => w + (c.charCodeAt(0) > 255 ? 12 : 6.8), 0), th = 14, rr = xfer ? 15 : 12;
      const cands = [[p.x + rr, p.y - th / 2], [p.x - rr - tw, p.y - th / 2], [p.x - tw / 2, p.y - rr - th], [p.x - tw / 2, p.y + rr],
        [p.x + rr * .7, p.y - rr - th * .8], [p.x + rr * .7, p.y + rr * .6], [p.x - rr * .7 - tw, p.y - rr - th * .8], [p.x - rr * .7 - tw, p.y + rr * .6]];
      // 八个位置都放不下：有编号的站和边缘终点牌仍写在右边，其余站不写名字，鼠标移上去看提示
      let pick = cands.map(c => [c[0], c[1], tw, th]).find(b => !hit(b));
      const inside = b => b[0] >= 2 && b[0] + b[2] <= sz.x - 2 && b[1] >= 2 && b[1] + b[3] <= sz.y - 2;
      if (!pick && (s.num || p.edge)) pick = cands.map(c => [c[0], c[1], tw, th]).find(inside) || [cands[0][0], cands[0][1], tw, th];
      if (pick) { boxes.push(pick); el('text', {x: pick[0], y: pick[1] + th - 3}, g).textContent = txt; }
      g.addEventListener('mousemove', ev => this._showTip(ev, this.o.stationTip ? this.o.stationTip(k, s, [...(passes[k] || [])]) : s.name));
      g.addEventListener('mouseleave', () => { this._tip.style.display = 'none'; });
      g.addEventListener('click', ev => { ev.stopPropagation(); if (s.num && this.o.onStation) this.o.onStation(k, s); });
    });
  },
  _showTip(ev, html) {
    const r = this._map.getContainer().getBoundingClientRect();
    this._tip.innerHTML = html; this._tip.style.display = 'block';
    this._tip.style.left = Math.min(ev.clientX - r.left + 12, r.width - 240) + 'px'; this._tip.style.top = (ev.clientY - r.top + 12) + 'px';
  }
});
// 两端各一段 45 度斜线，中间一段横线或竖线
MetroOverlay.octi = (A, B) => {
  const dx = B.x - A.x, dy = B.y - A.y, ax = Math.abs(dx), ay = Math.abs(dy), sx = Math.sign(dx) || 1, sy = Math.sign(dy) || 1;
  if (ax < 1 || ay < 1) return [[A.x, A.y], [B.x, B.y]];
  const d = Math.min(ax, ay) / 2;
  return [[A.x, A.y], [A.x + sx * d, A.y + sy * d], [B.x - sx * d, B.y - sy * d], [B.x, B.y]];
};
// 折线整体平移 off 像素（拐点按两段法线的平均方向移，保持平行）
MetroOverlay.offset = (pts, off) => {
  if (!off) return pts;
  const nrm = (p, q) => { const dx = q[0] - p[0], dy = q[1] - p[1], l = Math.hypot(dx, dy) || 1; return [-dy / l, dx / l]; };
  return pts.map((pt, i) => {
    const n1 = i > 0 ? nrm(pts[i - 1], pt) : null, n2 = i < pts.length - 1 ? nrm(pt, pts[i + 1]) : null;
    let m = n1 && n2 ? [n1[0] + n2[0], n1[1] + n2[1]] : (n1 || n2); const ml = Math.hypot(m[0], m[1]) || 1; m = [m[0] / ml, m[1] / ml];
    const cos = n1 && n2 ? Math.max(.5, m[0] * n1[0] + m[1] * n1[1]) : 1;
    return [pt[0] + m[0] * off / cos, pt[1] + m[1] * off / cos];
  });
};
// 拐角改成圆弧
MetroOverlay.rounded = (pts, r = 10) => {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i - 1], c = pts[i], q = pts[i + 1], l1 = Math.hypot(c[0] - p[0], c[1] - p[1]) || 1, l2 = Math.hypot(q[0] - c[0], q[1] - c[1]) || 1, rr = Math.min(r, l1 / 2, l2 / 2);
    d += ` L${c[0] + (p[0] - c[0]) * rr / l1},${c[1] + (p[1] - c[1]) * rr / l1} Q${c[0]},${c[1]} ${c[0] + (q[0] - c[0]) * rr / l2},${c[1] + (q[1] - c[1]) * rr / l2}`;
  }
  const e = pts[pts.length - 1]; return d + ` L${e[0]},${e[1]}`;
};
/* 地图左上角的开关按钮：点一下显示地铁图层，再点收起；图层控件里勾选也同步 */
function metroButton(map, layer, label, onToggle) {
  const C = L.Control.extend({options: {position: 'topleft'}, onAdd() {
    const b = L.DomUtil.create('button', 'metro-btn'); b.type = 'button'; b.innerHTML = `<i></i>${label}`;
    L.DomEvent.disableClickPropagation(b);
    b.onclick = () => { if (map.hasLayer(layer)) map.removeLayer(layer); else map.addLayer(layer); };
    const sync = () => { const on = map.hasLayer(layer); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); if (onToggle) onToggle(on); };
    map.on('layeradd layerremove', e => { if (e.layer === layer) sync(); }); sync();
    return b; }});
  return new C().addTo(map);
}
