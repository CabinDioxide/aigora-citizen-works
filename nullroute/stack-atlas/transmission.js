"use strict";
/* Stack Atlas · 传导链独立页运行时（2026-07-07 WP1：从 app.js 真搬，不是 CSS 隐藏）。
 * 承载两块从主页撤出的内容：
 *   1) 两栈并列舞台（v2 redesign · T2/T3，含跨栈线层/政治侧链/五问纪律）；
 *   2) 跨栈重叠（overlap-lab，结构重叠 + 情景流）。
 * 本页没有世界地图和栈栅格：点节点/对象按钮 → 以 target=_top 跳回仪表盘 #sel=type:id，由仪表盘打开栈抽屉或定位咽喉点。
 * 中英文：transmission.html 是中文页、transmission-en.html 是英文页，由 <html lang> 定；数据在本文件里，每段中文旁边是同一段的英文（*_en），
 *   不复制第二份数据。中文页只出中文（缩写照旧），英文页只出英文。
 * 依赖：atlas-data.js（全局 window.ATLAS_DATA，普通脚本，无 fetch/ESM，file:// 直开可用）。 */

const D = window.ATLAS_DATA;
const LANG = String(document.documentElement.lang || "zh").toLowerCase().startsWith("en") ? "en" : "zh";
const L = (zh, en) => (LANG === "en" ? en : zh);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
const DASH = L("./index.html", "./en.html");

const nodeById = new Map();
D.stacks.forEach(stk => stk.nodes.forEach(n => nodeById.set(n.id, n)));
const politicalNodeById = new Map();
(D.politicalStacks || []).forEach(stk => stk.nodes.forEach(n => politicalNodeById.set(n.id, n)));
const chokeById = new Map(D.chokepoints.map(c => [c.id, c]));
const companyById = new Map(D.companies.map(c => [c.id, c]));
const countryByCode = new Map(D.countries.map(c => [c.code, c]));

/* 状态词与证据档：中文页出中文，英文页照原码 */
const ST = { controlled: "受控", dependent: "依赖", contested: "争夺中", blocked: "受阻", fallback: "备用", unknown: "未知" };
const EV = { verified: "已核", "source-linked": "有出处", "query-designed": "查询已设计", "needs-review": "待核", unknown: "未知", measured: "实测" };
const stT = s => (LANG === "en" ? s : (ST[s] || s));
const evT = s => (LANG === "en" ? s : (EV[s] || s));
const ROLE = { "技术断点": "Technical break", "政治控制面": "Political control plane", "MAG": "Magnitude", "替代路径": "Alternative path", "反馈层": "Feedback layer" };
const roleT = r => (LANG === "en" ? (ROLE[r] || r) : (r === "MAG" ? "数量级" : r));

function evidenceClass(status) {
  if (status === "verified" || status === "source-linked" || status === "query-designed" || status === "needs-review" || status === "unknown") return status;
  if (status === "blocked" || status === "needs-api-key" || status === "needs-extraction" || status === "source-limited") return "unknown";
  if (status === "lead-only") return "needs-review";
  return "unknown";
}

function targetLabel(target) {
  if (!target) return "";
  if (target.type === "country") { const c = countryByCode.get(target.id); return c ? L(c.name_zh, c.name_en) : target.id; }
  if (target.type === "node") { const n = nodeById.get(target.id); return n ? L(n.label_zh, n.label_en || n.label_zh) : target.id; }
  if (target.type === "polnode") { const n = politicalNodeById.get(target.id); return n ? L(n.label_zh, n.label_en || n.label_zh) : target.id; }
  if (target.type === "chokepoint") { const c = chokeById.get(target.id); return c ? L(c.name_zh, c.name_en || c.name_zh) : target.id; }
  if (target.type === "company") return companyById.get(target.id)?.name || target.id;
  if (target.type === "alert") { const a = (D.candidateAlerts || []).find(a => a.id === target.id); return a ? L(a.title_zh, a.title_en || a.title_zh) : target.id; }
  return target.id;
}
// 跳回仪表盘选中：本页无地图，联动交给仪表盘的 #sel 深链（boot() 末尾处理）。
function atlasHref(type, id){ return `${DASH}#sel=${encodeURIComponent(type)}:${encodeURIComponent(id)}`; }
const OPEN_TITLE = L("回仪表盘选中这个对象", "Open this object on the dashboard");

// ─────────────────────────────────────────────────────────────────────────────
// 数据：三条双栈传导链（06-21 交付验收内容，原 app.js DUAL_STACK_TRANSMISSIONS，不回退）。每段中文旁是同一段的英文。
// ─────────────────────────────────────────────────────────────────────────────
const DUAL_STACK_TRANSMISSIONS = [
  {
    id: "dst-compute-permission",
    title_zh: "AI 算力：物理制造之外的许可失效",
    title_en: "AI compute: permission failure above physical manufacturing",
    thesis: "GPU、EDA、EUV 和云容量的断点，很多时候先通过 P1 法域/规则层表现出来，而不是通过仓库断货表现出来。",
    thesis_en: "Breaks in GPUs, EDA, EUV and cloud capacity usually show up first at the P1 jurisdiction/rules layer, not as empty warehouses.",
    chain: [
      { role: "技术断点", type: "node", id: "ac-gpu", label: "GPU / EDA / EUV / 云容量", label_en: "GPU / EDA / EUV / cloud capacity", body: "技术栈里看似是硬件、工具和云资源的组合依赖。", body_en: "In the technology stack this looks like a combined dependency on hardware, tools and cloud resources.",
        tr: "available", edge_label: "GPU 芯片本身能造能用，真正被卡住的是「谁有资格买」——实体清单从政治这一侧锁死了购买行为。", edge_label_en: "The GPU itself can be made and used; what is actually blocked is who is allowed to buy it. The Entity List locks the purchase from the political side." },
      { role: "政治控制面", type: "polnode", id: "ps-export-control", label: "出口管制/许可", label_en: "Export controls / licensing", body: "许可、实体清单、最终用途和服务条款把技术调用转成可达性问题。", body_en: "Licenses, entity lists, end-use rules and terms of service turn a technical call into a question of reachability.",
        tr: "active", seam: true, edge_label: "美国的出口管制（§734.9(h) 外国直接产品规则）把含美国技术的先进 HBM/GPU 都纳入许可——管的是「准不准调用」，不是货物有没有发出去。", edge_label_en: "US export controls (the §734.9(h) foreign direct product rule) put advanced HBM and GPUs containing US technology under license. What is governed is whether the call is permitted, not whether the goods have shipped." },
      { role: "MAG", type: "node", id: "ac-euv", label: "设备、产能、清单规模", label_en: "Equipment, capacity, list size", body: "要补的不是一条关系，而是 EUV 安装基础、GPU/HBM 供应、许可/清单规模和替代滞后。", body_en: "What has to be filled in is not one relation but the EUV installed base, GPU/HBM supply, the size of licenses and lists, and the lag of substitutes.",
        tr: "conditional", edge_label: "EUV 光刻设备的出口是有条件地受限的，其中防护薄膜（pellicle）被单列为明文管制项；卡不卡，看随附的口径怎么认定。", edge_label_en: "Exports of EUV lithography equipment are restricted conditionally, with the pellicle listed as an explicitly controlled item on its own; whether it is blocked depends on how the accompanying classification is read." },
      { role: "替代路径", type: "polnode", id: "ps-industrial-policy", label: "产业政策/本土替代", label_en: "Industrial policy / domestic substitution", magPending: true, body: "替代需要工具链、制造、封装、云服务和支持网络同时移动，不能只看单点国产化。", body_en: "Substitution needs the toolchain, manufacturing, packaging, cloud services and support networks to move together; localizing one point is not enough.",
        tr: "reroute", edge_label: "本土替代不是现成的退路：替代哪一层、多久能接上、卡在哪个环节、谁有权限、现场有没有执行力，这五件没有一件有把握，所以它只是一条「也许能绕」的路，不是已经验证的退路。", edge_label_en: "Domestic substitution is not a ready fallback: which layer it replaces, how long it takes to connect, where it gets stuck, who has the authority and whether it can be executed on the ground. None of the five is settled, so it is only a possible reroute, not a verified fallback." },
      { role: "反馈层", type: "polnode", id: "ps-legitimacy-narratives", label: "技术主权/国家安全叙事", label_en: "Technological sovereignty / national security narrative", body: "P4 叙事给 P1 管制和 P3 补贴提供持续合法性，也会限制妥协空间。", body_en: "The P4 narrative supplies continuing legitimacy to P1 controls and P3 subsidies, and also narrows the room for compromise.",
        tr: "available", edge_label: "技术主权和国家安全的叙事，为上游的管制和补贴提供持续的合法性，也压缩了让步妥协的空间。", edge_label_en: "The narrative of technological sovereignty and national security keeps the upstream controls and subsidies legitimate, and squeezes the room for concessions." }
    ]
  },
  {
    id: "dst-hormuz-expensive-mode",
    title_zh: "霍尔木兹：从物理通道到价格政治",
    title_en: "Hormuz: from physical chokepoint to price politics",
    thesis: "霍尔木兹冲击通常不是先变成「没油」，而是进入高成本模式：保险、绕航、护航、储备释放和国内价格压力同步重定价。",
    thesis_en: "A Hormuz shock usually does not first become \"no oil\"; it enters an expensive mode in which insurance, rerouting, escorts, reserve releases and domestic price pressure are repriced together.",
    chain: [
      { role: "技术断点", type: "chokepoint", id: "hormuz", label: "霍尔木兹通道摩擦", label_en: "Friction in the Hormuz passage", body: "能源栈的 L0/L1 流量被同一个海峡聚合。", body_en: "The L0/L1 flows of the energy stack are aggregated by a single strait.",
        tr: "conditional", edge_label: "霍尔木兹一旦出事，通常先是保险、绕航、护航、动用储备这些成本同步涨价，不一定马上就「没油」。", edge_label_en: "When Hormuz is hit, the first thing that happens is that insurance, rerouting, escorts and reserve draws all get more expensive at once; it does not necessarily mean no oil right away." },
      { role: "政治控制面", type: "polnode", id: "ps-naval-transit", label: "海上通道强制/护航能力", label_en: "Sea-lane enforcement / escort capacity", magPending: true, body: "通道能否维持，不只取决于航运市场，也取决于护航能力和安全承诺。", body_en: "Whether the passage holds depends not only on the shipping market but on escort capacity and security commitments.",
        tr: "conditional", seam: true, edge_label: "海峡还能不能维持通行，取决于护航力量和安全承诺——航道这条技术线在这里跳成了政治控制面；护航到底能撑多大规模，目前没有公开可核的数字，不硬填一个能力评分。", edge_label_en: "Whether the strait stays open depends on escort forces and security commitments; here the technical line of the sea lane becomes a political control plane. How much escorting can be sustained has no publicly checkable number, so no capacity score is invented." },
      { role: "MAG", type: "node", id: "en-tanker", label: "流量份额 / 绕航时间 / 保险成本", label_en: "Flow share / rerouting time / insurance cost", body: "数量级应该追踪承载流量、替代管道能力、重航时间、保险和运价变化。", body_en: "The magnitude should track carried flow, substitute pipeline capacity, rerouting time, insurance and freight-rate changes.",
        tr: "available", edge_label: "承载多少流量、绕航要多久、保险成本涨多少，是衡量这轮涨价到底有多大的几把尺子。", edge_label_en: "How much flow is carried, how long rerouting takes and how much insurance rises are the rulers for measuring how large this repricing really is." },
      { role: "替代路径", type: "node", id: "en-reserve", label: "战略储备 / 替代供应", label_en: "Strategic reserves / substitute supply", body: "储备释放、买家转向、炼厂适配和长期合约决定高成本模式能撑多久。", body_en: "Reserve releases, buyer switching, refinery adaptation and long-term contracts decide how long the expensive mode can last.",
        tr: "reroute", edge_label: "战略储备和替代供应也不是现成的退路：替代哪一层、多久接上、卡在哪、谁有权限、现场能不能执行，这五件都没把握，所以只是一条「也许能绕」的路。", edge_label_en: "Strategic reserves and substitute supply are not a ready fallback either: which layer they replace, how long they take to connect, where they get stuck, who has the authority and whether they can be executed on the ground are all unsettled, so this is only a possible reroute." },
      { role: "反馈层", type: "polnode", id: "ps-domestic-price", label: "国内价格/就业/选举压力", label_en: "Domestic price / employment / electoral pressure", body: "油气价格会把外部通道问题转换为国内政治承受力问题。", body_en: "Oil and gas prices convert an external passage problem into a question of domestic political tolerance.",
        tr: "available", edge_label: "油气价格会把「海外通道出问题」变成「国内政治扛不扛得住」，最终绕回到国内压力上。", edge_label_en: "Oil and gas prices turn \"a passage abroad is in trouble\" into \"can domestic politics bear it\", and the loop closes on domestic pressure." }
    ]
  },
  {
    id: "dst-malacca-overlap",
    title_zh: "马六甲：一个地理瓶颈，两条技术栈，多个政治接口",
    title_en: "Malacca: one geography, two tech stacks, multiple political interfaces",
    thesis: "马六甲同时承载能源航道和互联网物理底盘；真正的风险是多系统共用一个地理瓶颈后，维修、护航、港口准入和备用路径一起受限。",
    thesis_en: "Malacca carries both the energy sea lane and the physical base of the internet; the real risk is that once several systems share one geographic bottleneck, repair, escorts, port access and backup paths are constrained together.",
    chain: [
      { role: "技术断点", type: "chokepoint", id: "malacca", label: "能源航道 + 海底光缆走廊", label_en: "Energy lane plus submarine-cable corridor", body: "能源栈和可达性栈在同一段地理通道上重叠。", body_en: "The energy stack and the reachability stack overlap on the same stretch of geography.",
        tr: "conditional", edge_label: "同一段海峡同时跑着能源航道和海底光缆走廊，两条技术线共用一个地理瓶颈——出事时先是处处变难、成本抬高，而不是立刻断流。", edge_label_en: "The same strait carries the energy lane and the cable corridor; two technical lines share one geographic bottleneck. When something happens, everything first gets harder and dearer rather than stopping outright." },
      { role: "政治控制面", type: "polnode", id: "ps-port-access", label: "港口/登陆点准入", label_en: "Port / landing-station access", body: "港口、登陆点、维修船和区域准入规则决定替代路径是否真的可用。", body_en: "Ports, landing stations, repair ships and regional access rules decide whether the alternative paths are really usable.",
        tr: "conditional", seam: true, edge_label: "港口准入、登陆点许可、维修船调度，决定了绕航和备用线路到底能不能用——能源和网络两条分支在这里收束到同一个政治接口，技术一下子跳成了政治控制面。", edge_label_en: "Port access, landing permits and repair-ship scheduling decide whether rerouting and backup routes can actually be used. The energy and network branches converge here on one political interface; the technical line becomes a political control plane." },
      { role: "MAG", type: "node", id: "re-cable", label: "海缆路线数 / 维修能力 / 航运流量", label_en: "Cable route count / repair capacity / shipping flow", body: "需要把海缆路线数、登陆点、维修船、能源流量和绕航时间分开计量。", body_en: "Cable routes, landing stations, repair ships, energy flow and rerouting time have to be measured separately.",
        tr: "available", edge_label: "海缆有几条路线、几个登陆点、几条维修船、过多少能源流量、绕航要多久——这些要分开各看各的尺度，不能糊成一根粗箭头。", edge_label_en: "How many cable routes, how many landing stations, how many repair ships, how much energy flow, how long a detour: each has its own scale and they cannot be smeared into one thick arrow." },
      { role: "替代路径", type: "node", id: "en-tanker", label: "绕航与备用路由", label_en: "Rerouting and backup routing", body: "能源侧绕航，网络侧走备用路由；两者都不是免费替代。", body_en: "The energy side reroutes ships, the network side uses backup routes; neither is a free substitute.",
        tr: "reroute", edge_label: "能源侧绕航、网络侧走备用线路，都不是不花代价的替代：替代哪一层、多久接上、卡在哪、谁有权限、现场能不能执行，这五件都没把握，所以只是一条「也许能绕」的路。", edge_label_en: "Rerouting on the energy side and backup lines on the network side are not costless substitutes: which layer they replace, how long they take to connect, where they get stuck, who has the authority and whether they can be executed on the ground are all unsettled, so this is only a possible reroute." },
      { role: "反馈层", type: "polnode", id: "ps-alliance-regimes", label: "联盟协调/区域安全承诺", label_en: "Alliance coordination / regional security commitments", body: "区域安全承诺和盟友协调决定谁承担护航、维修、优先通行和成本转嫁。", body_en: "Regional security commitments and allied coordination decide who carries escorts, repairs, priority passage and cost shifting.",
        tr: "available", edge_label: "区域安全承诺和盟友之间的协调，决定了护航、维修、优先通行和成本最后由谁来扛。", edge_label_en: "Regional security commitments and coordination among allies decide who in the end carries the escorts, the repairs, priority passage and the cost." }
    ]
  }
];

// 跨栈边集，按情景 id 索引（T11：三情景各自一套）。端点 id 必须是在两栈舞台上真渲染的节点
// (role-based 链)，不引用未上台的节点(宁缺勿凑：有真实机制才连、连了不糊，Nullroute 06-25 标准)。
// kind:law=已发生法条(金实线) / derived=机制推演(橙虚线)；dir:right=技术→政治 / left=政治反向伸入技术。
const TRANSMISSION_CROSS_EDGES_BY_SCENARIO = {
  "dst-compute-permission": [
    { from: "ac-gpu", to: "ps-export-control", kind: "law", dir: "right",
      mech: "§734.9(h) 外国直接产品规则", mech_en: "§734.9(h) foreign direct product rule", note: "含美技术先进 HBM/GPU 出口须美国许可——审「被允许调用」，不审货物流动", note_en: "Advanced HBM/GPUs containing US technology need a US license; what is reviewed is permission to call, not the movement of goods",
      grade: "有出处 · 已发生法条", grade_en: "source-linked · enacted law" },
    { from: "ac-euv", to: "ps-export-control", kind: "derived", dir: "right",
      mech: "EUV / 防护薄膜出口管制", mech_en: "EUV / pellicle export controls", note: "防护薄膜为明文独立管制项，条件触发取决于随附口径", note_en: "The pellicle is an explicitly listed item on its own; the conditional trigger depends on the accompanying classification",
      grade: "有出处 · 条件性", grade_en: "source-linked · conditional" }
  ],
  "dst-hormuz-expensive-mode": [
    { from: "hormuz", to: "ps-naval-transit", kind: "derived", dir: "right",
      mech: "护航 / 通道安全承诺", mech_en: "Escorts / passage security commitments", note: "海峡能否维持通行不只看航运市场，取决于护航能力与安全承诺——技术航道在此跳成政治控制面", note_en: "Whether the strait stays open depends on escort capacity and security commitments, not only the shipping market; the technical lane becomes a political control plane here",
      grade: "有出处 · 条件性（数量级待填）", grade_en: "source-linked · conditional (magnitude pending)" },
    { from: "ps-domestic-price", to: "en-reserve", kind: "derived", dir: "left",
      mech: "储备释放 / 价格政治", mech_en: "Reserve releases / price politics", note: "国内价格压力反向作用到替代供应——储备释放与买家转向由政治层决定，不是纯市场行为", note_en: "Domestic price pressure acts back on substitute supply; reserve releases and buyer switching are decided at the political layer, not purely by the market",
      grade: "有出处 · 机制推演", grade_en: "source-linked · mechanism inference" }
  ],
  "dst-malacca-overlap": [
    { from: "re-cable", to: "ps-port-access", kind: "derived", dir: "right",
      mech: "海缆维修 / 登陆点准入", mech_en: "Cable repair / landing-station access", note: "海缆维修船调度与登陆点同受港口/区域准入制度约束——网络分支收束到政治接口", note_en: "Repair-ship scheduling and landing stations are both bound by port and regional access rules; the network branch converges on the political interface",
      grade: "有出处 · 机制推演（Y 合流·网络分支）", grade_en: "source-linked · mechanism inference (Y-merge, network branch)" },
    { from: "en-tanker", to: "ps-port-access", kind: "derived", dir: "right",
      mech: "绕航 / 护航 / 港口补给", mech_en: "Rerouting / escorts / port resupply", note: "能源航道分支的绕航与备用补给同受同一套港口/登陆点准入约束——能源分支收束到同一个政治接口（Y 合流）", note_en: "Rerouting and backup resupply on the energy branch are bound by the same port and landing-station access rules; the energy branch converges on the same political interface (Y-merge)",
      grade: "有出处 · 机制推演（Y 合流·能源分支）", grade_en: "source-linked · mechanism inference (Y-merge, energy branch)" }
  ]
};

// T8 政治侧侧链：挂在政治主链节点下的辅助分支（合成节点，只读展示，不接详情）。
const POL_SIDE_CHAINS = {
  "ps-export-control": [
    { id: "lic-exc", title: "许可例外链", en: "License exceptions", layer: "POL P1",
      tr: "conditional", status: "contested", ev: "source-linked",
      body: "消费级、低算力的芯片往往能走许可例外放行，先进制程的不批；批不批要看具体档位和最终用途，不是一刀切。",
      body_en: "Consumer-grade, low-compute chips can often clear through license exceptions while advanced-node parts are refused; approval depends on the specific tier and end use, not a blanket rule." },
    { id: "enforce-tracks", title: "多执行路径（实体清单 / 制裁清单 / 外国直接产品规则）", en: "Multi-track enforcement (Entity List / SDN / FDP)", layer: "POL P1",
      tr: "active", status: "blocked", ev: "verified",
      body: "实体清单、美国财政部制裁清单（OFAC SDN）、外国直接产品规则——三条执行路径叠在一起，绕开一条还有另外两条卡着。",
      body_en: "The Entity List, the Treasury sanctions list (OFAC SDN) and the foreign direct product rule stack on top of one another; get around one and the other two still hold." }
  ],
  "ps-naval-transit": [
    { id: "escort-cap", title: "护航 / 维修执行分支", en: "Escort and repair tracks", layer: "POL P0",
      tr: "conditional", status: "contested", ev: "source-linked",
      body: "海峡在冲击下还能撑多久，取决于护航力量、维修船和安全承诺这几项；它们各有多大规模目前没有公开可核的数字，所以这里只列出该看哪些指标，不硬填一个能力评分。",
      body_en: "How long the strait holds under a shock depends on escort forces, repair ships and security commitments; none of these has a publicly checkable size, so only the indicators to watch are listed and no capacity score is invented." }
  ],
  "ps-port-access": [
    { id: "access-permit", title: "准入 / 维修许可分支", en: "Access and repair permits", layer: "POL P1",
      tr: "conditional", status: "contested", ev: "source-linked",
      body: "港口准入、登陆点许可、维修船调度都是分档发放的政治许可——能源能不能绕航、海缆断了能不能走备用线路，都卡在这一层，不是一个开关那么简单。",
      body_en: "Port access, landing permits and repair-ship scheduling are political permissions issued by tier; whether energy can reroute and whether a cut cable can fall back to a backup line are both held at this layer, not by a single switch." }
  ]
};

// T7 五问函数：没过五问的替代路径只能显示「也许能绕」，不许叫退路（防 UI 撒谎）。
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

// 舞台节点卡：本页无地图/栈栅格，点节点 = 跳回仪表盘选中（#sel=type:id）。
function tstageNodeCard(step) {
  const isPol = step.type === "polnode";
  const real = step.type === "node" ? nodeById.get(step.id)
             : isPol ? politicalNodeById.get(step.id) : null;
  const title = real ? L(real.label_zh, real.label_en || real.label_zh) : L(step.label, step.label_en || step.label);
  const layer = real ? real.layer : (step.type === "chokepoint" ? L("地理咽喉点", "geographic chokepoint") : "");
  const status = real ? real.status : null;
  const ev = real ? real.evidence : null;
  const tnodeType = isPol ? "polnode" : (step.type === "chokepoint" ? "chokepoint" : "node");
  const tr = resolveTr(step);
  return `<a class="tnode tr-${esc(tr)}${step.seam ? " seam-node" : ""}${step.magPending ? " mag-pending" : ""}" data-tnode-type="${tnodeType}" data-tnode-id="${esc(step.id)}" href="${atlasHref(tnodeType, step.id)}" target="_top" title="${esc(OPEN_TITLE)}">
    <div class="role">${esc(roleT(step.role))}</div>
    <div class="title">${esc(title)}</div>
    <div class="meta">
      ${layer ? `<span class="layerlab">${esc(layer)}</span>` : ""}
      ${step.seam ? `<span class="seam-tag">${esc(L("接缝 · P1 法域", "Seam · P1 jurisdiction"))}</span>` : ""}
      ${status ? `<span class="badge-st st-${esc(status)}">${esc(stT(status))}</span>` : ""}
      ${ev ? `<span class="badge-ev ev-${esc(evidenceClass(ev))}">${esc(evT(ev))}</span>` : ""}
      ${tr === "reroute" ? `<span class="reroute-flag">${esc(L("未过五问", "Not past the five questions"))}</span>` : ""}
      ${step.magPending ? `<span class="mag-flag">${esc(L("数量级待填", "Magnitude pending"))}</span>` : ""}
    </div>
  </a>`;
}
function tsideNodeCard(side) {
  return `<div class="tside-node tr-${esc(side.tr)}">
    <div class="title">${esc(L(side.title, side.en || side.title))}</div>
    <div class="meta">
      ${side.layer ? `<span class="layerlab">${esc(side.layer.replace(/^POL /, L("政治栈 ", "POL ")))}</span>` : ""}
      <span class="badge-st st-${esc(side.status)}">${esc(stT(side.status))}</span>
      <span class="badge-ev ev-${esc(evidenceClass(side.ev))}">${esc(evT(side.ev))}</span>
    </div>
    ${side.body ? `<div class="tside-body">${esc(L(side.body, side.body_en || side.body))}</div>` : ""}
  </div>`;
}
function polColumnEntry(step) {
  const card = tstageNodeCard(step);
  const sides = POL_SIDE_CHAINS[step.id];
  if (!sides || !sides.length) return card;
  return card + `<div class="pol-side"><div class="sidehdr">${esc(L("政治侧链 · 控制不是单点", "Political side chains · control is not a single point"))}</div>${sides.map(tsideNodeCard).join("")}</div>`;
}

let currentTransmissionIdx = 0;
const SCENARIO_LABELS = LANG === "en"
  ? ["Scenario 1 / 3 · AI compute", "Scenario 2 / 3 · Hormuz", "Scenario 3 / 3 · Malacca"]
  : ["情景一 / 3 · AI 算力", "情景二 / 3 · 霍尔木兹", "情景三 / 3 · 马六甲"];
function renderTransmissionStage() {
  const host = document.getElementById("transmission-stage");
  if (!host) return;
  if (currentTransmissionIdx < 0 || currentTransmissionIdx >= DUAL_STACK_TRANSMISSIONS.length) currentTransmissionIdx = 0;
  const scenario = DUAL_STACK_TRANSMISSIONS[currentTransmissionIdx];
  const techCards = scenario.chain.filter(s => s.type !== "polnode").map(tstageNodeCard).join("");
  const polCards  = scenario.chain.filter(s => s.type === "polnode").map(polColumnEntry).join("");
  const tabs = DUAL_STACK_TRANSMISSIONS.map((sc, i) =>
    `<button type="button" class="scenario-tab${i === currentTransmissionIdx ? " active" : ""}" data-scenario-idx="${i}" id="${esc(sc.id)}">${esc(SCENARIO_LABELS[i] || (L("情景", "Scenario ") + (i + 1)))}</button>`
  ).join("");
  host.innerHTML = `
    <div class="scenario-selector" role="tablist" aria-label="${esc(L("情景选择器", "Scenario selector"))}">${tabs}</div>
    <div class="tstage-scene">
      <h3>${esc(L(scenario.title_zh, scenario.title_en))}</h3>
      <span class="badge">${esc(SCENARIO_LABELS[currentTransmissionIdx] || L("情景", "Scenario"))} · ${esc(L("两栈并列 + 跨栈线", "two stacks side by side + cross-stack links"))}</span>
    </div>
    <p class="tstage-thesis">${esc(L(scenario.thesis, scenario.thesis_en))}</p>
    <div class="dual-stack">
      <section class="stack-tech">
        <div class="col-head"><span class="tag">${esc(L("技术栈", "Technology stack"))}</span><span class="rail"></span></div>
        ${techCards}
      </section>
      <div class="gutter"></div>
      <section class="stack-pol">
        <div class="col-head"><span class="tag">${esc(L("政治栈", "Political stack"))}</span><span class="rail"></span></div>
        ${polCards}
      </section>
    </div>
    <div class="tstage-legend">
      <span class="it"><span class="sw active"></span>${esc(L("已激活管制", "Control in force"))}</span>
      <span class="it"><span class="sw cond"></span>${esc(L("条件触发", "Conditional trigger"))}</span>
      <span class="it"><span class="sw"></span>${esc(L("当前可用", "Currently available"))}</span>
      <span class="it"><span class="sw rr"></span>${esc(L("也许能绕（未过五问）", "Possible reroute (not past the five questions)"))}</span>
      <span class="it"><span class="sw mag"></span>${esc(L("数量级待填", "Magnitude pending"))}</span>
      <span class="it"><span class="sw seam"></span>${esc(L("接缝（金 = P1 法域）", "Seam (gold = P1 jurisdiction)"))}</span>
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
    lab.innerHTML = `<span class="mech">${esc(L(edge.mech, edge.mech_en))}</span>${esc(L(edge.note, edge.note_en))}<span class="grade">${esc(L(edge.grade, edge.grade_en))}</span>`;
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
// 跨栈重叠（原主页 overlap-lab，并入本页）
// ─────────────────────────────────────────────────────────────────────────────
const CROSS_STACK_OVERLAPS = [
  {
    id: "malacca-energy-cable",
    title_zh: "马六甲：能源航道 + 海底光缆",
    title_en: "Malacca: energy lane plus cable reachability",
    stacks: ["energy", "reachability"],
    anchor: { type: "chokepoint", id: "malacca" },
    objects: [
      { type: "chokepoint", id: "malacca", label: "马六甲海峡", label_en: "Strait of Malacca" },
      { type: "node", id: "en-tanker", label: "油轮/LNG 航道", label_en: "Tanker / LNG lane" },
      { type: "node", id: "re-cable", label: "海底光缆", label_en: "Submarine cables" },
      { type: "polnode", id: "ps-naval-transit", label: "海上通道强制/护航能力", label_en: "Sea-lane enforcement / escort capacity" },
      { type: "polnode", id: "ps-port-access", label: "港口/登陆点准入", label_en: "Port / landing-station access" },
      { type: "country", id: "SG", label: "新加坡", label_en: "Singapore" },
      { type: "country", id: "JP", label: "日本", label_en: "Japan" },
      { type: "country", id: "CN", label: "中国", label_en: "China" }
    ],
    thesis: "同一个海峡不只是一条能源路线，也是一段互联网物理底盘。Stack Atlas 要看的就是这种跨栈重叠：一个地理瓶颈会把油气成本、维修能力、路由冗余和国家安全放到同一张图上。",
    thesis_en: "The same strait is not only an energy route but a piece of the internet's physical base. This cross-stack overlap is what Stack Atlas looks for: one geographic bottleneck puts oil and gas costs, repair capacity, routing redundancy and national security on the same map.",
    flow: [
      { label: "断点", label_en: "Break", body: "海峡通行、海缆维修或区域安全状态变差。", body_en: "Passage through the strait, cable repair or regional security deteriorates.", target: { type: "chokepoint", id: "malacca" } },
      { label: "直接影响", label_en: "Direct effect", body: "东亚油轮/LNG 航道和海底光缆走廊同时进入高摩擦状态。", body_en: "The East Asian tanker/LNG lane and the cable corridor enter high friction at the same time.", target: { type: "node", id: "en-tanker" } },
      { label: "政治控制面", label_en: "Political control plane", body: "护航能力、港口准入、维修船可用性和区域安全承诺决定摩擦能否被吸收。", body_en: "Escort capacity, port access, repair-ship availability and regional security commitments decide whether the friction can be absorbed.", target: { type: "polnode", id: "ps-naval-transit" } },
      { label: "数量级", label_en: "Magnitude", body: "能源流量、海缆路线数、维修能力和绕航时间不能合成一个粗箭头，要分量纲读。", body_en: "Energy flow, cable route count, repair capacity and rerouting time cannot be merged into one thick arrow; read them in their own units.", target: { type: "node", id: "re-cable" } },
      { label: "替代/反馈", label_en: "Substitute / feedback", body: "能源绕航和网络备用路由都不是免费替代；成本最后落到区域安全承诺和买家政策上。", body_en: "Energy rerouting and network backup routing are not free substitutes; the cost lands on regional security commitments and buyer policy.", target: { type: "country", id: "SG" } },
      { label: "证据边界", label_en: "Evidence boundary", body: "本版确认地理和结构重叠；逐条海缆业主、具体流量比例仍需有出处的数据。", body_en: "This version confirms the geographic and structural overlap; per-cable owners and specific flow shares still need source-linked data.", evidence: "needs-review" }
    ]
  },
  {
    id: "us-compute-control",
    title_zh: "美国：AI 算力的控制面叠加",
    title_en: "United States: layered compute control plane",
    stacks: ["ai-compute", "reachability"],
    anchor: { type: "country", id: "US" },
    objects: [
      { type: "country", id: "US", label: "美国", label_en: "United States" },
      { type: "node", id: "ac-gpu", label: "GPU", label_en: "GPU" },
      { type: "node", id: "ac-eda", label: "EDA 工具", label_en: "EDA tools" },
      { type: "node", id: "ac-cloud", label: "云 GPU 容量", label_en: "Cloud GPU capacity" },
      { type: "node", id: "ac-export", label: "出口管制", label_en: "Export controls" },
      { type: "node", id: "re-cloud", label: "云控制面", label_en: "Cloud control plane" },
      { type: "polnode", id: "ps-export-control", label: "出口管制/许可", label_en: "Export controls / licensing" },
      { type: "polnode", id: "ps-sanctions-service", label: "制裁/服务可达性", label_en: "Sanctions / service reachability" }
    ],
    thesis: "美国在图里不是单个供应商国家，而是多个许可闸门的叠加位置：芯片设计、EDA、云容量、出口管制和服务可达性会互相放大。",
    thesis_en: "On the map the United States is not a single supplier country but a stack of permission gates: chip design, EDA, cloud capacity, export controls and service reachability amplify one another.",
    flow: [
      { label: "断点", label_en: "Break", body: "出口管制、服务限制或云容量访问条件变化。", body_en: "Export controls, service restrictions or the conditions for cloud capacity access change.", target: { type: "node", id: "ac-export" } },
      { label: "政治控制面", label_en: "Political control plane", body: "许可、实体清单、制裁和服务条款把技术节点转换成可达/不可达问题。", body_en: "Licenses, entity lists, sanctions and terms of service turn technical nodes into a reachable-or-not question.", target: { type: "polnode", id: "ps-export-control" } },
      { label: "数量级", label_en: "Magnitude", body: "需要看 EUV 安装基础、GPU/HBM 供应、许可清单规模和替代滞后，而不是只看谁连着谁。", body_en: "Look at the EUV installed base, GPU/HBM supply, license-list size and substitution lag, not only at who is connected to whom.", target: { type: "country", id: "US" } },
      { label: "替代路径", label_en: "Alternative path", body: "替代不只是买别的硬件，还要替代工具链、云服务、许可和支持网络。", body_en: "Substitution is not just buying other hardware; the toolchain, cloud services, licenses and support networks have to be replaced too.", target: { type: "node", id: "ac-eda" } },
      { label: "反馈层", label_en: "Feedback layer", body: "技术主权和国家安全叙事会反过来支撑管制与补贴。", body_en: "The technological-sovereignty and national-security narrative in turn props up the controls and subsidies.", target: { type: "polnode", id: "ps-legitimacy-narratives" } },
      { label: "证据边界", label_en: "Evidence boundary", body: "本版展示结构依赖；逐条许可状态、区域云容量和实际替代进度要回原文核。", body_en: "This version shows the structural dependency; individual license status, regional cloud capacity and actual substitution progress must be checked against the sources.", evidence: "source-linked" }
    ]
  },
  {
    id: "taiwan-advanced-fab",
    title_zh: "台湾：先进制造的高密度落点",
    title_en: "Taiwan: dense anchor for advanced fabrication",
    stacks: ["ai-compute"],
    anchor: { type: "country", id: "TW" },
    objects: [
      { type: "country", id: "TW", label: "台湾", label_en: "Taiwan" },
      { type: "company", id: "tsmc", label: "台积电", label_en: "TSMC" },
      { type: "node", id: "ac-fab", label: "先进芯片制造", label_en: "Advanced chip fabrication" },
      { type: "node", id: "ac-gpu", label: "GPU", label_en: "GPU" },
      { type: "node", id: "ac-euv", label: "EUV 光刻设备", label_en: "EUV lithography equipment" },
      { type: "country", id: "NL", label: "荷兰（阿斯麦）", label_en: "Netherlands (ASML)" },
      { type: "polnode", id: "ps-industrial-policy", label: "产业政策/本土替代", label_en: "Industrial policy / domestic substitution" },
      { type: "polnode", id: "ps-alliance-regimes", label: "盟友协调机制", label_en: "Allied coordination mechanisms" }
    ],
    thesis: "台湾不是普通供应商点，而是设计、设备、材料、晶圆制造和安全环境压缩在一起的高密度落点。它说明 Stack Atlas 的国家节点要和公司、设备、控制规则一起读。",
    thesis_en: "Taiwan is not an ordinary supplier point but a dense anchor where design, equipment, materials, wafer fabrication and the security environment are compressed together. It shows that a Stack Atlas country node has to be read together with companies, equipment and control rules.",
    flow: [
      { label: "断点", label_en: "Break", body: "先进晶圆制造、设备服务或安全环境受到扰动。", body_en: "Advanced wafer fabrication, equipment service or the security environment is disturbed.", target: { type: "country", id: "TW" } },
      { label: "直接影响", label_en: "Direct effect", body: "AI GPU 交付、先进制程产能和客户排产被牵动。", body_en: "AI GPU deliveries, advanced-node capacity and customer scheduling are pulled along.", target: { type: "node", id: "ac-fab" } },
      { label: "上游闸门", label_en: "Upstream gate", body: "EUV 设备和服务把荷兰（阿斯麦）接入台湾制造节点。", body_en: "EUV equipment and service connect the Netherlands (ASML) to the Taiwan fabrication node.", target: { type: "company", id: "asml" } },
      { label: "政治控制面", label_en: "Political control plane", body: "产业政策、盟友协调和出口许可决定扩产、服务与替代路径的政治条件。", body_en: "Industrial policy, allied coordination and export licensing set the political conditions for expansion, service and alternative paths.", target: { type: "polnode", id: "ps-industrial-policy" } },
      { label: "反馈层", label_en: "Feedback layer", body: "先进算力不是只由一个国家控制；它是多个高密度技术节点和政治协调机制的组合。", body_en: "Advanced compute is not controlled by one country alone; it is a combination of several dense technical nodes and political coordination mechanisms.", target: { type: "node", id: "ac-gpu" } },
      { label: "证据边界", label_en: "Evidence boundary", body: "本版确认公司/国家/设备结构；产能、良率、客户占比和库存天数仍需数量级层补数。", body_en: "This version confirms the company/country/equipment structure; capacity, yield, customer shares and inventory days still need numbers from the magnitude layer.", evidence: "needs-review" }
    ]
  }
];
let activeOverlapId = CROSS_STACK_OVERLAPS[0]?.id || null;

function overlapStackChip(stackId) {
  const stack = D.stacks.find(s => s.id === stackId);
  return `<span class="overlap-stack">${esc(stack ? L(stack.name_zh, stack.name_en || stack.name_zh) : stackId)}</span>`;
}
function objectLink(obj) {
  return `<a class="obj-link" href="${atlasHref(obj.type, obj.id)}" target="_top" title="${esc(OPEN_TITLE)}">${esc(L(obj.label, obj.label_en) || targetLabel(obj))}</a>`;
}
function renderFlowStep(step, index) {
  const ev = step.evidence ? `<span class="ev ev-${evidenceClass(step.evidence)}">${esc(evT(step.evidence))}</span>` : "";
  const action = step.target ? `<div class="flow-action">${objectLink({ ...step.target, label: targetLabel(step.target), label_en: targetLabel(step.target) })}</div>` : "";
  return `<div class="flow-step">
    <div class="flow-num">${index + 1}</div>
    <div class="flow-copy">
      <div class="flow-label">${esc(L(step.label, step.label_en))} ${ev}</div>
      <p>${esc(L(step.body, step.body_en))}</p>
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
          <h3>${esc(L(overlap.title_zh, overlap.title_en))}</h3>
        </div>
        <button type="button" class="overlap-start" data-overlap="${esc(overlap.id)}">${esc(L("看传导流", "Show the flow"))}</button>
      </div>
      <div class="overlap-stacks">${overlap.stacks.map(overlapStackChip).join("")}</div>
      <p class="overlap-thesis">${esc(L(overlap.thesis, overlap.thesis_en))}</p>
      <div class="overlap-objects">${objects}</div>
    </article>`;
  }).join("");
  const active = CROSS_STACK_OVERLAPS.find(o => o.id === activeOverlapId) || CROSS_STACK_OVERLAPS[0];
  panel.innerHTML = active ? `<div class="flow-head">
      <span>${esc(L("情景流", "Scenario flow"))}</span>
      <strong>${esc(L(active.title_zh, active.title_en))}</strong>
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
