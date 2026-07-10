/* 1899 铁路转换器 v0.9 — 渲染与交互。
   数据唯一来源 window.V09（data.js，机器生成自 edge ledger）。
   实现独立于 run 草模（preview2）：事件委托、断口为卡片子元素、丝束由 V09.flows 表驱动。 */
(function () {
  'use strict';
  const V = window.V09;
  const $ = (sel, el) => (el || document).querySelector(sel);
  const TIERS_EL = $('#tiers'), FLOWS = $('#flows'), PANEL = $('#panel'), BODY = $('#panel-body');
  const NARROW = () => window.matchMedia('(max-width:720px)').matches;
  const cardIndex = {}, tierOfCard = {};

  /* ---------- 定锚段 ---------- */
  $('#anchor').innerHTML = '<b>' + V.anchor.title + '</b><p>' + V.anchor.body + '</p>';

  /* ---------- 五层与卡片 ---------- */
  const gapsByCard = {};
  V.gaps.forEach(g => { (gapsByCard[g.at] = gapsByCard[g.at] || []).push(g); });

  V.tiers.forEach((tier, ti) => {
    const row = document.createElement('div');
    row.className = 'tier';
    row.style.setProperty('--tc', 'var(--' + tier.key + ')');

    const label = document.createElement('div');
    label.className = 'tier-label';
    label.style.setProperty('--tc', 'var(--' + tier.key + ')');
    label.innerHTML = '<span class="zh">' + tier.zh + '</span><span class="en">' + tier.en + '</span>';
    row.appendChild(label);

    const cards = document.createElement('div');
    cards.className = 'cards';
    tier.cards.forEach(card => {
      cardIndex[card.id] = card; tierOfCard[card.id] = tier;
      const el = document.createElement('div');
      el.className = 'card';
      el.dataset.card = card.id;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-pressed', 'false');
      el.style.setProperty('--tc', 'var(--' + tier.key + ')');
      let html = '<div class="k">' + card.zh + '<i>' + card.en + '</i></div>' +
                 '<div class="v">' + card.value.disp + '</div>';
      if (card.bar != null) {
        html += '<div class="bar' + (card.bar_concept ? ' concept' : '') + '"><i style="width:' + (card.bar * 100) + '%"></i></div>';
      }
      if (card.warn) html += '<span class="warn">人工读数已双录 · hand-read, double-entered</span>';
      el.innerHTML = html;
      (gapsByCard[card.id] || []).forEach(g => {
        const d = document.createElement('span');
        d.className = 'gapdot ' + g.side;
        d.dataset.gap = g.id;
        d.setAttribute('role', 'button');
        d.setAttribute('aria-label', '数据断口，点击看原因 · Open data gap, click for the reason');
        el.appendChild(d);
      });
      cards.appendChild(el);
    });
    row.appendChild(cards);

    /* 窄屏衔接条（指向上一层的颜色），最顶层之外每层一条 */
    if (ti < V.tiers.length - 1) {
      const conn = document.createElement('div');
      conn.className = 'conn';
      conn.style.setProperty('--cc', 'var(--' + tier.key + ')');
      row.prepend(conn);
    }
    TIERS_EL.appendChild(row);
  });

  /* ---------- 详解面板 ---------- */
  function fmtVal(v) {
    if (v.cls === 'ref_external') return '<div class="ref">' + v.disp + '</div><div class="refsrc">折算依据 · Conversion basis：' + v.source + '</div>';
    if (v.cls === 'derived') return '<div class="ref">' + v.disp + '</div><div class="refsrc">算式 · Formula：' + v.formula + '</div>';
    return '<div class="ref">' + v.disp + '</div>';
  }
  function openCard(id) {
    const c = cardIndex[id], t = tierOfCard[id];
    PANEL.classList.remove('gapmode');
    BODY.innerHTML =
      '<div class="cat">' + t.zh + ' · ' + t.en + '</div>' +
      '<h2>' + c.zh + '</h2><div class="en">' + c.en + '</div>' +
      '<p class="claim" style="--ac:var(--' + t.key + ')">' + c.claim + '</p>' +
      '<div class="facts">' + c.facts.map(function (f) {
        return '<div class="fact"><div class="fk">' + f[0] + '</div><div class="fv">' + f[1].disp + '</div></div>';
      }).join('') + '</div>' +
      (c.ref && c.ref.cls !== 'none' ? fmtVal(c.ref) : (c.ref ? '<div class="ref">' + c.ref.disp + '</div>' : '')) +
      (c.warn ? '<span class="warnbadge">人工读数已双录、待页级复核 · hand-read, double-entered; page-level recheck pending</span>' : '') +
      '<div class="src">' + c.src + '</div>';
    document.querySelectorAll('.card[aria-pressed="true"]').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
    const el = document.querySelector('[data-card="' + id + '"]');
    if (el) el.setAttribute('aria-pressed', 'true');
    if (NARROW()) PANEL.classList.add('open');
  }
  function openGap(id) {
    const g = V.gaps.find(function (x) { return x.id === id; });
    if (!g) return;
    PANEL.classList.add('gapmode');
    BODY.innerHTML =
      '<div class="cat">数据断口 · Open gap</div>' +
      '<h2>为什么这里是断的</h2><div class="en">Why this link is broken</div>' +
      '<p class="claim">' + g.plain + '</p>';
    if (NARROW()) PANEL.classList.add('open');
  }
  TIERS_EL.addEventListener('pointerdown', function (e) {
    const gd = e.target.closest('[data-gap]');
    if (gd) { e.stopPropagation(); openGap(gd.dataset.gap); return; }
    const cd = e.target.closest('[data-card]');
    if (cd) openCard(cd.dataset.card);
  });
  $('#panel-close').addEventListener('pointerdown', function () { PANEL.classList.remove('open'); });

  /* ---------- 丝束引擎（V09.flows 表驱动） ---------- */
  const NS = 'http://www.w3.org/2000/svg';
  function rectOf(id) {
    const el = document.querySelector('[data-card="' + id + '"]');
    const r = el.getBoundingClientRect(), s = $('#stage').getBoundingClientRect();
    return { l: r.left - s.left, r: r.right - s.left, t: r.top - s.top, b: r.bottom - s.top,
             cx: r.left - s.left + r.width / 2, cy: r.top - s.top + r.height / 2, w: r.width, sw: s.width };
  }
  function drawFlows() {
    FLOWS.innerHTML = '';
    if (NARROW()) return;
    const s = $('#stage').getBoundingClientRect();
    FLOWS.setAttribute('viewBox', '0 0 ' + s.width + ' ' + s.height);
    const SPM = V.flows.spacing.measured, SPC = V.flows.spacing.concept;
    V.flows.bundles.forEach(function (b) {
      const sp = b.concept ? SPC : SPM;
      const w = (b.n - 1) * sp;
      const colour = getComputedStyle(document.documentElement).getPropertyValue('--' + b.color).trim();
      const from = rectOf(b.from);
      const g = document.createElementNS(NS, 'g');
      g.dataset.bundle = b.id;
      for (let i = 0; i < b.n; i++) {
        const off = b.n === 1 ? 0 : (i / (b.n - 1) - 0.5) * w;
        const p = document.createElementNS(NS, 'path');
        let d;
        if (b.to === '@left') {
          /* 运营支出：从卡上缘向左排出回路 */
          const y1 = from.t, x1 = from.cx + off, y2 = from.t - 46 - off * 0.2, x2 = from.l - 90;
          d = 'M ' + x1 + ' ' + y1 + ' C ' + x1 + ' ' + (y1 - 30) + ', ' + (x2 + 60) + ' ' + y2 + ', ' + x2 + ' ' + y2;
        } else if (b.to === '@right-machine') {
          /* 资本回流：右缘下行入机器层（路径起点在资本卡，向下画 → 丝向下流） */
          const cap = from, mach = rectOf('route');
          const x1 = cap.r + 4, y1 = cap.t + 18 + Math.abs(off) * 0.3;
          const xe = mach.r - 28 + off, ye = mach.t - 4;
          const xm = cap.sw - 4 + off * 0.3;
          d = 'M ' + x1 + ' ' + y1 + ' C ' + xm + ' ' + (y1 + 110) + ', ' + xm + ' ' + (ye - 120) + ', ' + xe + ' ' + ye;
        } else {
          const to = rectOf(b.to);
          const x1 = from.cx + off, y1 = from.t;
          /* 多束汇入同一目标卡时按束横向错位 */
          const lane = { 'minerals-gross': 0.24, 'merch-gross': 0.44, 'pax-gross': 0.62, 'tm-gross': 0.82 }[b.id];
          const x2 = lane != null ? to.l + to.w * lane + off * 0.45 : to.cx + off;
          const y2 = to.b;
          const my = (y1 + y2) / 2;
          d = 'M ' + x1 + ' ' + y1 + ' C ' + x1 + ' ' + my + ', ' + x2 + ' ' + my + ', ' + x2 + ' ' + y2;
        }
        p.setAttribute('d', d);
        p.setAttribute('class', 'fil');
        p.setAttribute('stroke', colour);
        p.setAttribute('stroke-width', b.concept ? 1.5 : 1.9);
        p.setAttribute('stroke-dasharray', b.concept ? '4 10' : '7 7');
        p.setAttribute('opacity', (b.concept ? 0.30 : 0.46) + 0.18 * Math.abs(Math.sin(i * 2.4)));
        p.style.animationDuration = (2.6 + (i * 0.37) % 1.3) + 's';
        p.style.animationDelay = (-(i * 0.23) % 2) + 's';
        g.appendChild(p);
      }
      FLOWS.appendChild(g);
    });
  }
  if ('ResizeObserver' in window) new ResizeObserver(drawFlows).observe(TIERS_EL);
  window.addEventListener('resize', drawFlows);
  requestAnimationFrame(drawFlows);
})();
