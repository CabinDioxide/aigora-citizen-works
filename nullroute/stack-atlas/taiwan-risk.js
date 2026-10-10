/* 台海风险（2026-10-10 加）。数据是 data/monitor/taiwan_strait_risk.json，独立于 latest.json，
 * 由台海监控管线生成（build_index.py，见仓库外的 README / METHODOLOGY）：
 *   台湾国防部每日通报（军机、舰艇、公务船，1645/1743 天）
 *   Global Fishing Watch 的 AIS 存在量、SAR 检测、港口访问事件（197 万条，福建与台湾共 11 港）
 *   NGA 航行警告（只有当前生效快照，没有历史，所以不参与回测）
 * 指标按「必要性 × 提前量 × 不可伪装性」分三层加权：A 动员与不可逆投送 0.55、B 作战准备 0.30、C 活动强度 0.15。
 * 这一层划分是整个视图的要点：演习会把 C 层打高，但登陆作战必须征用民用滚装运力，那是 A 层；
 * 六次已知演习里 A 层从未脱离常态区间，所以「分层结构」比「综合分」更有判别力。
 * 界面文字不进 i18n.js 的大字典，就近放在本文件的 TW_T 表里，仍按 i18n.js 的 LANG 取中英。 */
const TW_RISK_URL = 'data/monitor/taiwan_strait_risk.json';
let TWD = null;

const TW_T = {
  nav: ['台海风险指数', 'Strait risk index'],
  h2: ['台湾海峡风险指数', 'Taiwan Strait risk index'],
  sub: ['多源公开指标相对自身历史基线的偏离。它不估计开战概率。',
        'Deviation of open-source indicators from their own historical baseline. It does not estimate the probability of war.'],
  k_score: ['综合风险指数', 'Composite risk index'],
  k_level: ['等级', 'Level'],
  k_tierA: ['A 动员层', 'Tier A mobilisation'],
  k_ship: ['航运中断指数', 'Shipping disruption'],
  k_asof: ['完整数据截至', 'Complete data through'],
  prov: ['最近 {n} 天为暂定值：AIS 有 2–3 天处理延迟，期间动员层缺少输入。此时的低分表示<b>尚无数据</b>，不表示已确认无异常。上方读数取自最后一个完整日 {d}。',
         'The last {n} days are provisional: AIS lands 2–3 days late, leaving the mobilisation tier without inputs. A low score then means <b>no data yet</b>, not a confirmed all-clear. The figures above are from the last complete day, {d}.'],
  c_index: ['综合指数与已知演习', 'Composite index against known exercises'],
  c_tiers: ['分层分解（7 日均）', 'Tier decomposition (7-day mean)'],
  c_ship: ['海峡商船通航量相对 90 日基线的缺口', 'Merchant traffic shortfall against the 90-day baseline'],
  tierA: ['A 动员与不可逆投送', 'A Mobilisation and irreversible deployment'],
  tierB: ['B 作战准备', 'B Operational preparation'],
  tierC: ['C 活动强度', 'C Activity intensity'],
  finding: ['六次已知演习期间，活动强度（C 层）从基线 {c0} 升到 {c1}–{c2}，而动员层（A 层）峰值只有 {a1}–{a2}，全部低于其常态 P99（{ap99}）。即演习期间福建七港的民用运力调动没有异常——<b>活动强度与入侵准备可以用公开数据分开</b>，这是本指数判别力的来源。',
             'Across the six known exercises, activity intensity (tier C) rose from a baseline of {c0} to {c1}–{c2}, while the mobilisation tier (A) peaked at only {a1}–{a2} — all below its routine P99 of {ap99}. Civilian sealift patterns at the seven Fujian ports did not move. <b>Activity intensity and invasion preparation are separable in open data</b>, and that separation is where this index gets its discriminating power.'],
  h_drivers: ['当前得分的构成', 'What drives the current score'],
  h_bt: ['历史回测', 'Backtest'],
  bt_event: ['事件', 'Event'], bt_peak: ['指数峰值', 'Peak index'], bt_level: ['等级', 'Level'],
  bt_note: ['只用有外部来源认定的演习作为标签。数据自身按阈值挑出的「高强度日」未用于回测——那是循环论证。',
            'Only externally sourced exercises are used as labels. High-intensity days selected by the index\u2019s own threshold are excluded; using them would be circular.'],
  h_limits: ['局限', 'Limits'],
  limits: [
    ['提前量有限：指数对演习基本是同步反应（提前 2–5 天），因为演习通常在政治触发后数小时内宣布。',
     'Limited lead time: the index is near-coincident with exercises (2–5 days), because they are typically announced within hours of a political trigger.'],
    ['入侵预警能力无法验证：历史上没有发生过入侵，A 层从未被真实事件激活过。该层的有效性只能靠物理逻辑论证，不能靠数据证明。',
     'Invasion warning cannot be validated: no invasion has occurred, so tier A has never been activated by a real event. Its validity rests on physical reasoning, not evidence.'],
    ['封锁/隔离检疫的准备期可短至数天，所需资源平时即已就位，本系统对这种形态的提前量最小——而它恰恰是概率最高的选项。',
     'A blockade or quarantine needs only days of preparation with forces already in place; this is where the system has the least lead time — and it is the most likely option.'],
    ['「临战」档（≥70）从未出现，历史最高分 45.4。该档是预留余量，不是校准出来的类别。',
     'The "Imminent" band (\u226570) has never been reached; the historical maximum is 45.4. It is headroom, not a calibrated class.']],
  lv_counts: ['全区间 {n} 天：{s}', 'Over {n} days: {s}'],
  src: ['数据来源', 'Sources'],
  loading: ['载入台海风险数据 …', 'Loading Taiwan Strait risk data …'],
  fail: ['台海风险数据读不到：{e}', 'Cannot read Taiwan Strait risk data: {e}'],
};
const twT = (k, vars) => {
  let s = (TW_T[k] || ['', ''])[LANG === 'en' ? 1 : 0];
  if (vars) Object.keys(vars).forEach(v => { s = s.split('{' + v + '}').join(vars[v]); });
  return s;
};
const twLevel = (score, bands) => {
  const b = bands.find(x => score >= x[0] && score < x[1]) || bands[0];
  return LANG === 'en' ? b[3] : b[2];
};
const TW_BAND_FILL = ['rgba(52,199,89,.07)', 'rgba(255,149,0,.10)', 'rgba(255,149,0,.18)',
                      'rgba(215,0,21,.16)', 'rgba(215,0,21,.28)'];
const TW_TIER_COLOR = {tier_A: '#c1121f', tier_B: '#f3a712', tier_C: '#8d99ae'};

function twDates(start, n) {
  const out = []; const d = new Date(start + 'T00:00:00Z');
  for (let i = 0; i < n; i++) { out.push(d.toISOString().slice(0, 10)); d.setUTCDate(d.getUTCDate() + 1); }
  return out;
}
function twRoll(a, w) {
  return a.map((_, i) => {
    const s = a.slice(Math.max(0, i - w + 1), i + 1).filter(x => x != null);
    return s.length >= 3 ? s.reduce((p, c) => p + c, 0) / s.length : null;
  });
}
/* 演习区间画成竖带：Chart.js 没有内置的 x 轴区间高亮，用插件在绘图区底下涂。 */
const twBandPlugin = {id: 'twband', beforeDatasetsDraw(chart, args, opts) {
  const {ctx, chartArea: ca, scales: {x, y}} = chart;
  if (!ca) return;
  (opts.bands || []).forEach(b => {
    const y0 = y.getPixelForValue(b.hi), y1 = y.getPixelForValue(b.lo);
    ctx.save(); ctx.fillStyle = b.fill; ctx.fillRect(ca.left, y0, ca.right - ca.left, y1 - y0); ctx.restore();
  });
  (opts.spans || []).forEach(sp => {
    // category 轴的 getPixelForValue 吃的是索引，不是标签字符串；传日期会落空。
    const a = x.getPixelForValue(sp.i0), c = x.getPixelForValue(sp.i1);
    ctx.save(); ctx.fillStyle = 'rgba(43,108,176,.28)';
    ctx.fillRect(a, ca.top, Math.max(c - a, 2.5), ca.bottom - ca.top); ctx.restore();
  });
}};
if (window.Chart && !Chart.registry.plugins.get('twband')) Chart.register(twBandPlugin);

/* 视图构建。dashboard.js 的 boot() 把本函数登记成 viewHooks.taiwan，切到这一页时才跑。 */
function buildTaiwanRisk() {
  const sec = document.getElementById('t_twrisk');
  if (!sec) return;
  sec.innerHTML = `<p class="legend">${esc(twT('loading'))}</p>`;
  fetch(TW_RISK_URL, {cache: 'no-store'}).then(r => r.json()).then(d => { TWD = d; twRender(sec, d); })
    .catch(e => { sec.innerHTML = `<p class="legend">${esc(twT('fail', {e: e.message}))}</p>`; });
}

function twRender(sec, d) {
  const S = d.series, n = S.score.length, labels = twDates(S.start, n);
  let li = -1;
  for (let i = n - 1; i >= 0; i--) if (!S.provisional[i] && S.score[i] != null) { li = i; break; }
  const nProv = S.provisional.slice(-10).reduce((p, c) => p + c, 0);
  const st = d.stats;
  const lvStr = Object.keys(st.level_counts).map(k => `${k} ${st.level_counts[k]}`).join(' · ');

  const tiles = [
    [twT('k_score'), S.score[li] != null ? S.score[li].toFixed(1) : '—'],
    [twT('k_level'), twLevel(S.score[li], d.bands)],
    [twT('k_tierA'), S.tier_A[li] != null ? S.tier_A[li].toFixed(2) : '—'],
    [twT('k_ship'), S.shipping[li] != null ? S.shipping[li].toFixed(1) : '—'],
    [twT('k_asof'), labels[li]],
  ].map(([l, v]) => `<div class="tile"><div class="l">${esc(l)}</div><div class="v">${esc(v)}</div></div>`).join('');

  const btRows = d.backtest.map(b => `<tr><td>${esc(b.event)}</td><td class="num">${b.peak.toFixed(1)}</td><td>${esc(LANG === 'en' ? twLevel(b.peak, d.bands) : b.level)}</td></tr>`).join('');

  const IL = d.indicators.labels, IV = d.indicators.values;
  const drv = Object.keys(IV).map(k => {
    const a = IV[k]; let v = null;
    for (let i = a.length - 1; i >= 0; i--) if (a[i] != null) { v = a[i]; break; }
    return {k, v, label: IL[k][LANG === 'en' ? 1 : 0], tier: k[0]};
  }).filter(x => x.v != null).sort((a, b) => b.v - a.v).slice(0, 8);
  const drvRows = drv.map(x => `<tr><td><b>${esc(x.tier)}</b></td><td>${esc(x.label)}</td><td class="num">${x.v.toFixed(2)}</td>
      <td style="width:46%"><div style="background:var(--line2);border-radius:3px;height:8px"><div style="width:${Math.round(x.v * 100)}%;height:8px;border-radius:3px;background:${TW_TIER_COLOR['tier_' + x.tier]}"></div></div></td></tr>`).join('');

  sec.innerHTML = `
    <h2>${esc(twT('h2'))} <small>${esc(twT('sub'))}</small></h2>
    <div class="tiles">${tiles}</div>
    ${nProv ? `<p class="legend" style="margin-top:10px">${twT('prov', {n: nProv, d: labels[li]})}</p>` : ''}
    <h2>${esc(twT('c_index'))}</h2>
    <div class="chart tall"><canvas id="tw_c1"></canvas></div>
    <p class="legend">${d.bands.slice(0, 4).map((b, i) => `<i style="background:${TW_BAND_FILL[i].replace(/[\d.]+\)$/, '.75)')}"></i>${esc(LANG === 'en' ? b[3] : b[2])} ${b[0]}–${b[1]}`).join('')}
      &nbsp;·&nbsp;${esc(twT('lv_counts', {n: d.meta.n_days, s: lvStr}))}</p>
    <h2>${esc(twT('c_tiers'))}</h2>
    <div class="chart tall"><canvas id="tw_c2"></canvas></div>
    <p class="legend">${twT('finding', {c0: st.tierC_offevent_mean, c1: st.tierC_event_min, c2: st.tierC_event_max,
      a1: st.tierA_event_min, a2: st.tierA_event_max, ap99: st.tierA_offevent_p99})}</p>
    <h2>${esc(twT('c_ship'))}</h2>
    <div class="chart"><canvas id="tw_c3"></canvas></div>
    <div class="grid2" style="margin-top:14px">
      <div><h2>${esc(twT('h_drivers'))}</h2><table><tbody>${drvRows}</tbody></table></div>
      <div><h2>${esc(twT('h_bt'))}</h2><table><thead><tr><th>${esc(twT('bt_event'))}</th><th class="num">${esc(twT('bt_peak'))}</th><th>${esc(twT('bt_level'))}</th></tr></thead><tbody>${btRows}</tbody></table>
        <p class="legend">${esc(twT('bt_note'))}</p></div>
    </div>
    <h2>${esc(twT('h_limits'))}</h2>
    <ul class="legend" style="line-height:1.7">${TW_T.limits.map(x => `<li>${esc(x[LANG === 'en' ? 1 : 0])}</li>`).join('')}</ul>
    <p class="legend">${esc(twT('src'))}：${esc(d.meta.attribution)}</p>`;

  const spans = d.events.map(e => ({i0: labels.indexOf(e.start), i1: labels.indexOf(e.end)}))
    .filter(sp => sp.i0 >= 0 && sp.i1 >= sp.i0);
  const bands = d.bands.slice(0, 4).map((b, i) => ({lo: b[0], hi: Math.min(b[1], 52), fill: TW_BAND_FILL[i]}));
  const baseOpt = {responsive: true, maintainAspectRatio: false, animation: false,
    interaction: {mode: 'index', intersect: false},
    scales: {x: {type: 'category', ticks: {maxTicksLimit: 8, autoSkip: true}, grid: {display: false}}},
    plugins: {legend: {display: false}, twband: {}}};

  pageCharts.push(new Chart(document.getElementById('tw_c1'), {
    type: 'line',
    data: {labels, datasets: [{data: S.score, borderColor: '#1a1a1a', borderWidth: 1, pointRadius: 0, tension: 0}]},
    options: {...baseOpt, scales: {...baseOpt.scales, y: {min: 0, max: 52, title: {display: false}}},
      plugins: {...baseOpt.plugins, twband: {bands, spans}}}}));

  pageCharts.push(new Chart(document.getElementById('tw_c2'), {
    type: 'line',
    data: {labels, datasets: ['tier_A', 'tier_B', 'tier_C'].map(k => ({
      label: twT(k === 'tier_A' ? 'tierA' : k === 'tier_B' ? 'tierB' : 'tierC'),
      data: twRoll(S[k], 7), borderColor: TW_TIER_COLOR[k], borderWidth: 1.2, pointRadius: 0, tension: 0}))},
    options: {...baseOpt, scales: {...baseOpt.scales, y: {min: 0, max: 1}},
      plugins: {...baseOpt.plugins, legend: {display: true, labels: {boxWidth: 10, font: {size: 11}}},
                twband: {spans}}}}));

  pageCharts.push(new Chart(document.getElementById('tw_c3'), {
    type: 'line',
    data: {labels, datasets: [{data: S.shipping, borderColor: '#005f73', borderWidth: 1, pointRadius: 0, tension: 0}]},
    options: {...baseOpt, scales: {...baseOpt.scales, y: {min: 0}}, plugins: {...baseOpt.plugins, twband: {spans}}}}));
}
