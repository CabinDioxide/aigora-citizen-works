"use strict";
/* Stack Atlas · 传导链独立页运行时（2026-07-07 WP1：从 app.js 真搬，不是 CSS 隐藏）。
 * 承载两块从主页撤出的内容：
 *   1) DUAL-STACK TRANSMISSION 两栈并列舞台（v2 redesign · T2/T3，含跨栈线层/政治侧链/五问纪律）；
 *   2) Cross-stack Overlap（overlap-lab，结构重叠 + Scenario Flow）。
 * 本页没有世界地图和栈栅格：点节点/对象按钮 → 跳回 index.html#sel=type:id，由主页选中并三图点亮。
 * 依赖：atlas-data.js（全局 window.ATLAS_DATA，普通脚本，无 fetch/ESM，file:// 直开可用）。 */

const D = window.ATLAS_DATA;
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

const nodeById = new Map();
D.stacks.forEach(stk => stk.nodes.forEach(n => nodeById.set(n.id, n)));
const politicalNodeById = new Map();
(D.politicalStacks || []).forEach(stk => stk.nodes.forEach(n => politicalNodeById.set(n.id, n)));
const chokeById = new Map(D.chokepoints.map(c => [c.id, c]));
const companyById = new Map(D.companies.map(c => [c.id, c]));
const countryByCode = new Map(D.countries.map(c => [c.code, c]));

function evidenceClass(status) {
  if (status === "verified" || status === "source-linked" || status === "query-designed" || status === "needs-review" || status === "unknown") return status;
  if (status === "blocked" || status === "needs-api-key" || status === "needs-extraction" || status === "source-limited") return "unknown";
  if (status === "lead-only") return "needs-review";
  return "unknown";
}

function targetLabel(target) {
  if (!target) return "";
  if (target.type === "country") { const c = countryByCode.get(target.id); return c ? `${c.name_zh}/${c.name_en}` : target.id; }
  if (target.type === "node") return nodeById.get(target.id)?.label_zh || target.id;
  if (target.type === "polnode") return politicalNodeById.get(target.id)?.label_zh || target.id;
  if (target.type === "chokepoint") return chokeById.get(target.id)?.name_zh || target.id;
  if (target.type === "company") return companyById.get(target.id)?.name || target.id;
  if (target.type === "alert") return (D.candidateAlerts || []).find(a => a.id === target.id)?.title_zh || target.id;
  return target.id;
}
// 跳回主页选中：本页无地图，联动交给 index.html 的 #sel 深链。
function atlasHref(type, id){ return `index.html#sel=${encodeURIComponent(type)}:${encodeURIComponent(id)}`; }

// ─────────────────────────────────────────────────────────────────────────────
// 数据：三条双栈传导链（06-21 交付验收内容，原 app.js DUAL_STACK_TRANSMISSIONS，不回退）
// ─────────────────────────────────────────────────────────────────────────────
const DUAL_STACK_TRANSMISSIONS = [
  {
    id: "dst-compute-permission",
    title_zh: "AI 算力：物理制造之外的 permission failure",
    title_en: "AI compute: permission failure above physical manufacturing",
    thesis: "GPU、EDA、EUV 和云容量的断点，很多时候先通过 P1 法域/规则层表现出来，而不是通过仓库断货表现出来。",
    chain: [
      { role: "技术断点", type: "node", id: "ac-gpu", label: "GPU / EDA / EUV / 云容量", body: "技术栈里看似是硬件、工具和云资源的组合依赖。",
        tr: "available", edge_label: "GPU 芯片本身能造能用，真正被卡住的是「谁有资格买」——实体清单从政治这一侧锁死了购买行为。" },
      { role: "政治控制面", type: "polnode", id: "ps-export-control", label: "出口管制/许可", body: "许可、实体清单、最终用途和服务条款把技术调用转成可达性问题。",
        tr: "active", seam: true, edge_label: "美国的出口管制（§734.9(h) 外国直接产品规则）把含美国技术的先进 HBM/GPU 都纳入许可——管的是「准不准调用」，不是货物有没有发出去。" },
      { role: "MAG", type: "node", id: "ac-euv", label: "设备、产能、清单规模", body: "要补的不是一条关系，而是 EUV 安装基础、GPU/HBM 供应、许可/清单规模和替代滞后。",
        tr: "conditional", edge_label: "EUV 光刻设备的出口是有条件地受限的，其中防护薄膜（pellicle）被单列为明文管制项；卡不卡，看随附的口径怎么认定。" },
      { role: "替代路径", type: "polnode", id: "ps-industrial-policy", label: "产业政策/本土替代", magPending: true, body: "替代需要工具链、制造、封装、云服务和支持网络同时移动，不能只看单点国产化。",
        tr: "reroute", edge_label: "本土替代不是现成的退路：替代哪一层、多久能接上、卡在哪个环节、谁有权限、现场有没有执行力，这五件没有一件有把握，所以它只是一条「也许能绕」的路，不是已经验证的退路。" },
      { role: "反馈层", type: "polnode", id: "ps-legitimacy-narratives", label: "技术主权/国家安全叙事", body: "P4 叙事给 P1 管制和 P3 补贴提供持续合法性，也会限制妥协空间。",
        tr: "available", edge_label: "技术主权和国家安全的叙事，为上游的管制和补贴提供持续的合法性，也压缩了让步妥协的空间。" }
    ]
  },
  {
    id: "dst-hormuz-expensive-mode",
    title_zh: "霍尔木兹：从物理通道到价格政治",
    title_en: "Hormuz: from physical chokepoint to price politics",
    thesis: "霍尔木兹冲击通常不是先变成“没油”，而是进入 expensive mode：保险、绕航、护航、储备释放和国内价格压力同步重定价。",
    chain: [
      { role: "技术断点", type: "chokepoint", id: "hormuz", label: "霍尔木兹通道摩擦", body: "能源栈的 L0/L1 流量被同一个海峡聚合。",
        tr: "conditional", edge_label: "霍尔木兹一旦出事，通常先是保险、绕航、护航、动用储备这些成本同步涨价，不一定马上就「没油」。" },
      { role: "政治控制面", type: "polnode", id: "ps-naval-transit", label: "海上通道强制/护航能力", magPending: true, body: "通道能否维持，不只取决于航运市场，也取决于护航能力和安全承诺。",
        tr: "conditional", seam: true, edge_label: "海峡还能不能维持通行，取决于护航力量和安全承诺——航道这条技术线在这里跳成了政治控制面；护航到底能撑多大规模，目前没有公开可核的数字，不硬填一个能力评分。" },
      { role: "MAG", type: "node", id: "en-tanker", label: "流量 share / 绕航时间 / 保险成本", body: "MAG 应该追踪承载流量、替代管道能力、重航时间、保险和运价变化。",
        tr: "available", edge_label: "承载多少流量、绕航要多久、保险成本涨多少，是衡量这轮涨价到底有多大的几把尺子。" },
      { role: "替代路径", type: "node", id: "en-reserve", label: "战略储备 / 替代供应", body: "储备释放、买家转向、炼厂适配和长期合约决定 expensive mode 能撑多久。",
        tr: "reroute", edge_label: "战略储备和替代供应也不是现成的退路：替代哪一层、多久接上、卡在哪、谁有权限、现场能不能执行，这五件都没把握，所以只是一条「也许能绕」的路。" },
      { role: "反馈层", type: "polnode", id: "ps-domestic-price", label: "国内价格/就业/选举压力", body: "油气价格会把外部通道问题转换为国内政治承受力问题。",
        tr: "available", edge_label: "油气价格会把「海外通道出问题」变成「国内政治扛不扛得住」，最终绕回到国内压力上。" }
    ]
  },
  {
    id: "dst-malacca-overlap",
    title_zh: "马六甲：一个地理瓶颈，两条技术栈，多个政治接口",
    title_en: "Malacca: one geography, two tech stacks, multiple political interfaces",
    thesis: "马六甲同时承载能源航道和互联网物理底盘；真正的风险是多系统共用一个地理瓶颈后，维修、护航、港口准入和备用路径一起受限。",
    chain: [
      { role: "技术断点", type: "chokepoint", id: "malacca", label: "能源航道 + 海底光缆走廊", body: "能源栈和 reachability 栈在同一段地理通道上重叠。",
        tr: "conditional", edge_label: "同一段海峡同时跑着能源航道和海底光缆走廊，两条技术线共用一个地理瓶颈——出事时先是处处变难、成本抬高，而不是立刻断流。" },
      { role: "政治控制面", type: "polnode", id: "ps-port-access", label: "港口/登陆点准入", body: "港口、登陆点、维修船和区域准入规则决定替代路径是否真的可用。",
        tr: "conditional", seam: true, edge_label: "港口准入、登陆点许可、维修船调度，决定了绕航和备用线路到底能不能用——能源和网络两条分支在这里收束到同一个政治接口，技术一下子跳成了政治控制面。" },
      { role: "MAG", type: "node", id: "re-cable", label: "cable route count / 维修能力 / 航运流量", body: "需要把海缆路线数、登陆点、维修船、能源流量和绕航时间分开计量。",
        tr: "available", edge_label: "海缆有几条路线、几个登陆点、几条维修船、过多少能源流量、绕航要多久——这些要分开各看各的尺度，不能糊成一根粗箭头。" },
      { role: "替代路径", type: "node", id: "en-tanker", label: "绕航与备用路由", body: "能源侧绕航，网络侧走备用路由；两者都不是免费替代。",
        tr: "reroute", edge_label: "能源侧绕航、网络侧走备用线路，都不是不花代价的替代：替代哪一层、多久接上、卡在哪、谁有权限、现场能不能执行，这五件都没把握，所以只是一条「也许能绕」的路。" },
      { role: "反馈层", type: "polnode", id: "ps-alliance-regimes", label: "联盟协调/区域安全承诺", body: "区域安全承诺和盟友协调决定谁承担护航、维修、优先通行和成本转嫁。",
        tr: "available", edge_label: "区域安全承诺和盟友之间的协调，决定了护航、维修、优先通行和成本最后由谁来扛。" }
    ]
  }
];

// 跨栈边集，按情景 id 索引（T11：三情景各自一套）。端点 id 必须是在两栈舞台上真渲染的节点
// (role-based 链)，不引用未上台的节点(宁缺勿凑：有真实机制才连、连了不糊，Nullroute 06-25 标准)。
// kind:law=已发生法条(金实线) / derived=机制推演(橙虚线)；dir:right=技术→政治 / left=政治反向伸入技术。
const TRANSMISSION_CROSS_EDGES_BY_SCENARIO = {
  "dst-compute-permission": [
    { from: "ac-gpu", to: "ps-export-control", kind: "law", dir: "right",
      mech: "§734.9(h) FDP", note: "含美技术先进 HBM/GPU 出口须美国许可——审「被允许调用」，不审货物流动",
      grade: "source-linked · 已发生法条" },
    { from: "ac-euv", to: "ps-export-control", kind: "derived", dir: "right",
      mech: "EUV / pellicle 出口管制", note: "pellicle 为明文独立管制项，条件触发取决于随附口径",
      grade: "source-linked · 条件性" }
  ],
  "dst-hormuz-expensive-mode": [
    { from: "hormuz", to: "ps-naval-transit", kind: "derived", dir: "right",
      mech: "护航 / 通道安全承诺", note: "海峡能否维持通行不只看航运市场，取决于护航能力与安全承诺——技术航道在此跳成政治控制面",
      grade: "source-linked · 条件性（MAG 待填）" },
    { from: "ps-domestic-price", to: "en-reserve", kind: "derived", dir: "left",
      mech: "储备释放 / 价格政治", note: "国内价格压力反向作用到替代供应——储备释放与买家转向由政治层决定，不是纯市场行为",
      grade: "source-linked · 机制推演" }
  ],
  "dst-malacca-overlap": [
    { from: "re-cable", to: "ps-port-access", kind: "derived", dir: "right",
      mech: "海缆维修 / 登陆点准入", note: "海缆维修船调度与登陆点同受港口/区域准入制度约束——网络分支收束到政治接口",
      grade: "source-linked · 机制推演（Y 合流·网络分支）" },
    { from: "en-tanker", to: "ps-port-access", kind: "derived", dir: "right",
      mech: "绕航 / 护航 / 港口补给", note: "能源航道分支的绕航与备用补给同受同一套港口/登陆点准入约束——能源分支收束到同一个政治接口（Y 合流）",
      grade: "source-linked · 机制推演（Y 合流·能源分支）" }
  ]
};

// T8 政治侧侧链：挂在政治主链节点下的辅助分支（合成节点，只读展示，不接详情）。
const POL_SIDE_CHAINS = {
  "ps-export-control": [
    { id: "lic-exc", title: "许可例外链", en: "License exceptions", layer: "POL P1",
      tr: "conditional", status: "contested", ev: "source-linked",
      body: "消费级、低算力的芯片往往能走许可例外放行，先进制程的不批；批不批要看具体档位和最终用途，不是一刀切。" },
    { id: "enforce-tracks", title: "多执行路径（EL / SDN / FDP）", en: "Multi-track enforcement", layer: "POL P1",
      tr: "active", status: "blocked", ev: "verified",
      body: "实体清单、美国财政部制裁清单（OFAC SDN）、外国直接产品规则——三条执行路径叠在一起，绕开一条还有另外两条卡着。" }
  ],
  "ps-naval-transit": [
    { id: "escort-cap", title: "护航 / 维修执行分支", en: "Escort & repair tracks", layer: "POL P0",
      tr: "conditional", status: "contested", ev: "source-linked",
      body: "海峡在冲击下还能撑多久，取决于护航力量、维修船和安全承诺这几项；它们各有多大规模目前没有公开可核的数字，所以这里只列出该看哪些指标，不硬填一个能力评分。" }
  ],
  "ps-port-access": [
    { id: "access-permit", title: "准入 / 维修许可分支", en: "Access & repair permits", layer: "POL P1",
      tr: "conditional", status: "contested", ev: "source-linked",
      body: "港口准入、登陆点许可、维修船调度都是分档发放的政治许可——能源能不能绕航、海缆断了能不能走备用线路，都卡在这一层，不是一个开关那么简单。" }
  ]
};

// T7 五问函数：没过五问的替代路径只能显示 possible reroute，不许叫 fallback（防 UI 撒谎）。
const FALLBACK_FIVE_Q = ["replacesLayer", "leadTime", "stuckAt", "authority", "fieldExecution"];
function isQualifiedFallback(step) {
  if (!step || !step.fallback5) return false;
  return FALLBACK_FIVE_Q.every(k => {
    const v = step.fallback5[k];
    return typeof v === "string" && v.trim() !== "";
  });
}
function resolveTr(step) {
  const raw = step.tr || "available";
  const isAltPath = step.role === "替代路径" || step.fallbackCandidate === true;
  if (isAltPath && !isQualifiedFallback(step)) return "reroute";
  return raw;
}

// 舞台节点卡：本页无地图/栈栅格，点节点 = 跳回主页选中（index.html#sel=type:id）。
function tstageNodeCard(step) {
  const isPol = step.type === "polnode";
  const real = step.type === "node" ? nodeById.get(step.id)
             : isPol ? politicalNodeById.get(step.id) : null;
  const title = real ? real.label_zh : step.label;
  const en = real ? real.label_en : "";
  const layer = real ? real.layer : (step.type === "chokepoint" ? "地理 chokepoint" : "");
  const status = real ? real.status : null;
  const ev = real ? real.evidence : null;
  const tnodeType = isPol ? "polnode" : (step.type === "chokepoint" ? "chokepoint" : "node");
  const tr = resolveTr(step);
  return `<a class="tnode tr-${esc(tr)}${step.seam ? " seam-node" : ""}${step.magPending ? " mag-pending" : ""}" data-tnode-type="${tnodeType}" data-tnode-id="${esc(step.id)}" href="${atlasHref(tnodeType, step.id)}" title="回主页地图选中 / open on the atlas map">
    <div class="role">${esc(step.role)}</div>
    <div class="title">${esc(title)}</div>
    ${en ? `<div class="en">${esc(en)}</div>` : ""}
    <div class="meta">
      ${layer ? `<span class="layerlab">${esc(layer)}</span>` : ""}
      ${step.seam ? `<span class="seam-tag">接缝 · P1 法域</span>` : ""}
      ${status ? `<span class="badge-st st-${esc(status)}">${esc(status)}</span>` : ""}
      ${ev ? `<span class="badge-ev ev-${esc(evidenceClass(ev))}">${esc(ev)}</span>` : ""}
      ${tr === "reroute" ? `<span class="reroute-flag">未过五问</span>` : ""}
      ${step.magPending ? `<span class="mag-flag">数量级待填</span>` : ""}
    </div>
  </a>`;
}
function tsideNodeCard(side) {
  return `<div class="tside-node tr-${esc(side.tr)}">
    <div class="title">${esc(side.title)}</div>
    ${side.en ? `<div class="en">${esc(side.en)}</div>` : ""}
    <div class="meta">
      ${side.layer ? `<span class="layerlab">${esc(side.layer)}</span>` : ""}
      <span class="badge-st st-${esc(side.status)}">${esc(side.status)}</span>
      <span class="badge-ev ev-${esc(evidenceClass(side.ev))}">${esc(side.ev)}</span>
    </div>
    ${side.body ? `<div class="tside-body">${esc(side.body)}</div>` : ""}
  </div>`;
}
function polColumnEntry(step) {
  const card = tstageNodeCard(step);
  const sides = POL_SIDE_CHAINS[step.id];
  if (!sides || !sides.length) return card;
  return card + `<div class="pol-side"><div class="sidehdr">政治侧链 · 控制不是单点</div>${sides.map(tsideNodeCard).join("")}</div>`;
}

let currentTransmissionIdx = 0;
const SCENARIO_LABELS = ["情景一 / 3 · AI 算力", "情景二 / 3 · 霍尔木兹", "情景三 / 3 · 马六甲"];
function renderTransmissionStage() {
  const host = document.getElementById("transmission-stage");
  if (!host) return;
  if (currentTransmissionIdx < 0 || currentTransmissionIdx >= DUAL_STACK_TRANSMISSIONS.length) currentTransmissionIdx = 0;
  const scenario = DUAL_STACK_TRANSMISSIONS[currentTransmissionIdx];
  const techCards = scenario.chain.filter(s => s.type !== "polnode").map(tstageNodeCard).join("");
  const polCards  = scenario.chain.filter(s => s.type === "polnode").map(polColumnEntry).join("");
  const tabs = DUAL_STACK_TRANSMISSIONS.map((sc, i) =>
    `<button type="button" class="scenario-tab${i === currentTransmissionIdx ? " active" : ""}" data-scenario-idx="${i}" id="${esc(sc.id)}">${esc(SCENARIO_LABELS[i] || ("情景" + (i + 1)))}</button>`
  ).join("");
  host.innerHTML = `
    <div class="scenario-selector" role="tablist" aria-label="情景选择器">${tabs}</div>
    <div class="tstage-scene">
      <h3>${esc(scenario.title_zh)}</h3>
      <span class="en">${esc(scenario.title_en)}</span>
      <span class="badge">${esc(SCENARIO_LABELS[currentTransmissionIdx] || "情景")} · 两栈并列 + 跨栈线</span>
    </div>
    <p class="tstage-thesis">${esc(scenario.thesis)}</p>
    <div class="dual-stack">
      <section class="stack-tech">
        <div class="col-head"><span class="tag">技术栈 TECH</span><span class="rail"></span></div>
        ${techCards}
      </section>
      <div class="gutter"></div>
      <section class="stack-pol">
        <div class="col-head"><span class="tag">政治栈 POL</span><span class="rail"></span></div>
        ${polCards}
      </section>
    </div>
    <div class="tstage-legend">
      <span class="it"><span class="sw active"></span>已激活管制</span>
      <span class="it"><span class="sw cond"></span>条件触发</span>
      <span class="it"><span class="sw"></span>当前可用</span>
      <span class="it"><span class="sw rr"></span>possible reroute(未过五问)</span>
      <span class="it"><span class="sw mag"></span>数量级待填(MAG 缺口)</span>
      <span class="it"><span class="sw seam"></span>接缝(金 = P1 法域)</span>
    </div>`;
  host.querySelectorAll("[data-scenario-idx]").forEach(tab => {
    tab.addEventListener("click", e => {
      e.stopPropagation();
      const idx = Number(tab.getAttribute("data-scenario-idx"));
      if (idx === currentTransmissionIdx) return;
      currentTransmissionIdx = idx;
      renderTransmissionStage();
      scheduleTransmissionLinkRedraw();
    });
  });
  // T5: 横向线层注入 .dual-stack(position:relative)。
  const dual = host.querySelector(".dual-stack");
  if (dual) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "links-layer");
    svg.setAttribute("aria-hidden", "true");
    const labels = document.createElement("div");
    labels.className = "link-labels";
    dual.appendChild(svg);
    dual.appendChild(labels);
  }
  drawTransmissionLinks();
}

// T5 横向跨栈线绘制：端点用真实 rect 相对 .dual-stack 量算，每次触发全量重算重绘。
function drawTransmissionLinks() {
  const stage = document.getElementById("transmission-stage");
  if (!stage) return;
  const dual = stage.querySelector(".dual-stack");
  const svg = stage.querySelector(".links-layer");
  const labels = stage.querySelector(".link-labels");
  if (!dual || !svg || !labels) return;
  if (dual.offsetParent === null) return;
  const base = dual.getBoundingClientRect();
  if (base.width === 0 || base.height === 0) return;
  svg.setAttribute("viewBox", `0 0 ${base.width} ${base.height}`);
  svg.innerHTML = "";
  labels.innerHTML = "";
  const NS = "http://www.w3.org/2000/svg";
  const scenario = DUAL_STACK_TRANSMISSIONS[currentTransmissionIdx];
  const edges = (scenario && TRANSMISSION_CROSS_EDGES_BY_SCENARIO[scenario.id]) || [];
  edges.forEach(edge => {
    const a = dual.querySelector(`[data-tnode-id="${edge.from}"]`);
    const b = dual.querySelector(`[data-tnode-id="${edge.to}"]`);
    if (!a || !b) return; // 端点未上台 → 不连(宁缺勿凑)
    const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
    const aIsLeft = ra.left < rb.left;
    const x1 = (aIsLeft ? ra.right : ra.left) - base.left, y1 = ra.top - base.top + ra.height / 2;
    const x2 = (aIsLeft ? rb.left : rb.right) - base.left, y2 = rb.top - base.top + rb.height / 2;
    const mx = (x1 + x2) / 2;
    const path = document.createElementNS(NS, "path");
    path.setAttribute("d", `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`);
    path.setAttribute("class", edge.kind === "law" ? "link-law" : "link-derived");
    svg.appendChild(path);
    const arrow = document.createElementNS(NS, "path");
    const ah = x2 >= x1 ? -8 : 8;
    arrow.setAttribute("d", `M${x2 + ah},${y2 - 5} L${x2},${y2} L${x2 + ah},${y2 + 5}`);
    arrow.setAttribute("class", edge.kind === "law" ? "link-law" : "link-derived");
    svg.appendChild(arrow);
    const lab = document.createElement("div");
    lab.className = "linklabel" + (edge.kind === "derived" ? " derived" : "");
    lab.style.left = mx + "px";
    lab.style.top = y1 + "px";
    lab.innerHTML = `<span class="mech">${esc(edge.mech)}</span>${esc(edge.note)}<span class="grade">${esc(edge.grade)}</span>`;
    labels.appendChild(lab);
  });
}

// T5 重算调度：rAF + setTimeout 双兜底（后台标签页 rAF 暂停）。幂等，重复画无害。
let _tlinkRaf = 0, _tlinkTimer = 0;
function scheduleTransmissionLinkRedraw() {
  if (typeof requestAnimationFrame === "function") {
    cancelAnimationFrame(_tlinkRaf);
    _tlinkRaf = requestAnimationFrame(drawTransmissionLinks);
  }
  clearTimeout(_tlinkTimer);
  _tlinkTimer = setTimeout(drawTransmissionLinks, 120);
}

// ─────────────────────────────────────────────────────────────────────────────
// Cross-stack Overlap（原主页 overlap-lab，并入本页）
// ─────────────────────────────────────────────────────────────────────────────
const CROSS_STACK_OVERLAPS = [
  {
    id: "malacca-energy-cable",
    title_zh: "马六甲：能源航道 + 海底光缆",
    title_en: "Malacca: energy lane plus cable reachability",
    stacks: ["energy", "reachability"],
    anchor: { type: "chokepoint", id: "malacca" },
    objects: [
      { type: "chokepoint", id: "malacca", label: "马六甲海峡" },
      { type: "node", id: "en-tanker", label: "油轮/LNG 航道" },
      { type: "node", id: "re-cable", label: "海底光缆" },
      { type: "polnode", id: "ps-naval-transit", label: "海上通道强制/护航能力" },
      { type: "polnode", id: "ps-port-access", label: "港口/登陆点准入" },
      { type: "country", id: "SG", label: "新加坡" },
      { type: "country", id: "JP", label: "日本" },
      { type: "country", id: "CN", label: "中国" }
    ],
    thesis: "同一个海峡不只是一条能源路线，也是一段互联网物理底盘。Stack Atlas 要看的就是这种跨栈重叠：一个地理瓶颈会把油气成本、维修能力、路由冗余和国家安全放到同一张图上。",
    flow: [
      { label: "断点", body: "海峡通行、海缆维修或区域安全状态变差。", target: { type: "chokepoint", id: "malacca" } },
      { label: "直接影响", body: "东亚油轮/LNG 航道和海底光缆走廊同时进入高摩擦状态。", target: { type: "node", id: "en-tanker" } },
      { label: "政治控制面", body: "护航能力、港口准入、维修船可用性和区域安全承诺决定摩擦能否被吸收。", target: { type: "polnode", id: "ps-naval-transit" } },
      { label: "MAG/数量级", body: "能源流量、海缆路线数、维修能力和绕航时间不能合成一个粗箭头，要分量纲读。", target: { type: "node", id: "re-cable" } },
      { label: "替代/反馈", body: "能源绕航和网络备用路由都不是免费替代；成本最后落到区域安全承诺和买家政策上。", target: { type: "country", id: "SG" } },
      { label: "证据边界", body: "本版确认地理和结构重叠；逐条 cable 业主、具体流量比例仍需 source-linked 数据。", evidence: "needs-review" }
    ]
  },
  {
    id: "us-compute-control",
    title_zh: "美国：AI 算力的控制面叠加",
    title_en: "United States: layered compute control plane",
    stacks: ["ai-compute", "reachability"],
    anchor: { type: "country", id: "US" },
    objects: [
      { type: "country", id: "US", label: "美国" },
      { type: "node", id: "ac-gpu", label: "GPU" },
      { type: "node", id: "ac-eda", label: "EDA 工具" },
      { type: "node", id: "ac-cloud", label: "云 GPU 容量" },
      { type: "node", id: "ac-export", label: "出口管制" },
      { type: "node", id: "re-cloud", label: "云控制面" },
      { type: "polnode", id: "ps-export-control", label: "出口管制/许可" },
      { type: "polnode", id: "ps-sanctions-service", label: "制裁/服务可达性" }
    ],
    thesis: "美国在图里不是单个供应商国家，而是多个 permission gate 的叠加位置：芯片设计、EDA、云容量、出口管制和服务可达性会互相放大。",
    flow: [
      { label: "断点", body: "出口管制、服务限制或云容量访问条件变化。", target: { type: "node", id: "ac-export" } },
      { label: "政治控制面", body: "许可、实体清单、制裁和服务条款把技术节点转换成可达/不可达问题。", target: { type: "polnode", id: "ps-export-control" } },
      { label: "MAG/数量级", body: "需要看 EUV 安装基础、GPU/HBM 供应、许可清单规模和替代滞后，而不是只看谁连着谁。", target: { type: "country", id: "US" } },
      { label: "替代路径", body: "替代不只是买别的硬件，还要替代工具链、云服务、许可和支持网络。", target: { type: "node", id: "ac-eda" } },
      { label: "反馈层", body: "技术主权和国家安全叙事会反过来支撑管制与补贴。", target: { type: "polnode", id: "ps-legitimacy-narratives" } },
      { label: "证据边界", body: "本版展示结构依赖；逐条许可状态、区域云容量和实际替代进度要回原文核。", evidence: "source-linked" }
    ]
  },
  {
    id: "taiwan-advanced-fab",
    title_zh: "台湾：先进制造的高密度落点",
    title_en: "Taiwan: dense anchor for advanced fabrication",
    stacks: ["ai-compute"],
    anchor: { type: "country", id: "TW" },
    objects: [
      { type: "country", id: "TW", label: "台湾" },
      { type: "company", id: "tsmc", label: "TSMC" },
      { type: "node", id: "ac-fab", label: "先进芯片制造" },
      { type: "node", id: "ac-gpu", label: "GPU" },
      { type: "node", id: "ac-euv", label: "EUV 光刻设备" },
      { type: "country", id: "NL", label: "荷兰/ASML" },
      { type: "polnode", id: "ps-industrial-policy", label: "产业政策/本土替代" },
      { type: "polnode", id: "ps-alliance-regimes", label: "盟友协调机制" }
    ],
    thesis: "台湾不是普通供应商点，而是设计、设备、材料、晶圆制造和安全环境压缩在一起的高密度落点。它说明 Stack Atlas 的国家节点要和公司、设备、控制规则一起读。",
    flow: [
      { label: "断点", body: "先进晶圆制造、设备服务或安全环境受到扰动。", target: { type: "country", id: "TW" } },
      { label: "直接影响", body: "AI GPU 交付、先进制程产能和客户排产被牵动。", target: { type: "node", id: "ac-fab" } },
      { label: "上游闸门", body: "EUV 设备和服务把荷兰/ASML 接入台湾制造节点。", target: { type: "company", id: "asml" } },
      { label: "政治控制面", body: "产业政策、盟友协调和出口许可决定扩产、服务与替代路径的政治条件。", target: { type: "polnode", id: "ps-industrial-policy" } },
      { label: "反馈层", body: "先进算力不是只由一个国家控制；它是多个高密度技术节点和政治协调机制的组合。", target: { type: "node", id: "ac-gpu" } },
      { label: "证据边界", body: "本版确认公司/国家/设备结构；产能、良率、客户占比和库存天数仍需 MAG v0.2 补数。", evidence: "needs-review" }
    ]
  }
];
let activeOverlapId = CROSS_STACK_OVERLAPS[0]?.id || null;

function overlapStackChip(stackId) {
  const stack = D.stacks.find(s => s.id === stackId);
  return `<span class="overlap-stack">${esc(stack ? stack.name_zh : stackId)}</span>`;
}
function objectLink(obj) {
  return `<a class="obj-link" href="${atlasHref(obj.type, obj.id)}" title="回主页地图选中 / open on the atlas map">${esc(obj.label || targetLabel(obj))}</a>`;
}
function renderFlowStep(step, index) {
  const ev = step.evidence ? `<span class="ev ev-${evidenceClass(step.evidence)}">${esc(step.evidence)}</span>` : "";
  const action = step.target ? `<div class="flow-action">${objectLink({ ...step.target, label: targetLabel(step.target) })}</div>` : "";
  return `<div class="flow-step">
    <div class="flow-num">${index + 1}</div>
    <div class="flow-copy">
      <div class="flow-label">${esc(step.label)} ${ev}</div>
      <p>${esc(step.body)}</p>
      ${action}
    </div>
  </div>`;
}
function renderOverlapLab() {
  const list = document.getElementById("overlap-list");
  const panel = document.getElementById("flow-panel");
  if (!list || !panel) return;
  list.innerHTML = CROSS_STACK_OVERLAPS.map(overlap => {
    const active = activeOverlapId === overlap.id;
    const objects = overlap.objects.slice(0, 5).map(objectLink).join("");
    return `<article class="overlap-card ${active ? "active" : ""}">
      <div class="overlap-card-head">
        <div>
          <h3>${esc(overlap.title_zh)}</h3>
          <p>${esc(overlap.title_en)}</p>
        </div>
        <button type="button" class="overlap-start" data-overlap="${esc(overlap.id)}">看传导 Flow</button>
      </div>
      <div class="overlap-stacks">${overlap.stacks.map(overlapStackChip).join("")}</div>
      <p class="overlap-thesis">${esc(overlap.thesis)}</p>
      <div class="overlap-objects">${objects}</div>
    </article>`;
  }).join("");
  const active = CROSS_STACK_OVERLAPS.find(o => o.id === activeOverlapId) || CROSS_STACK_OVERLAPS[0];
  panel.innerHTML = active ? `<div class="flow-head">
      <span>Scenario Flow</span>
      <strong>${esc(active.title_zh)}</strong>
    </div>
    <div class="flow-steps">${active.flow.map(renderFlowStep).join("")}</div>` : "";
  list.querySelectorAll("[data-overlap]").forEach(button => {
    button.addEventListener("click", e => {
      e.stopPropagation();
      activeOverlapId = button.getAttribute("data-overlap");
      renderOverlapLab();
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// init：支持事件卡/外链的情景锚点（#dst-<id> 或 #scenario-N，情景三 = 马六甲）
// ─────────────────────────────────────────────────────────────────────────────
(function initScenarioAnchor(){
  const h = (location.hash || "").replace(/^#/, "");
  if (/^scenario-\d+$/.test(h)) {
    const n = parseInt(h.slice("scenario-".length), 10) - 1;
    if (n >= 0 && n < DUAL_STACK_TRANSMISSIONS.length) currentTransmissionIdx = n;
  } else if (h) {
    const idx = DUAL_STACK_TRANSMISSIONS.findIndex(t => t.id === h);
    if (idx >= 0) currentTransmissionIdx = idx;
  }
})();
renderTransmissionStage();
renderOverlapLab();

// 线随布局重算：resize / 字体加载 / 内容尺寸变化 / 标签页切回。
(function setupTransmissionLinkRecompute() {
  const stage = document.getElementById("transmission-stage");
  if (!stage) return;
  const redraw = scheduleTransmissionLinkRedraw;
  window.addEventListener("resize", redraw);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(redraw);
  if (window.ResizeObserver) new ResizeObserver(redraw).observe(stage);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) redraw(); });
})();
