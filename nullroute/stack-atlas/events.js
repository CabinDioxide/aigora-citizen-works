"use strict";
/* Stack Atlas 事件层数据（WP2）— 地图上的可点击事件入口。
 *
 * 坐标系：pos 为 1000x500 equirectangular 视箱坐标，与 atlas-data.js 的
 * chokepoints.pos 同一套投影（x=(lon+180)/360*1000, y=(90-lat)/180*500）。
 * 与既有 chokepoint 标记重合处（霍尔木兹/马六甲）做了几个像素的错位，两个标记都可点。
 *
 * countries / nodes 是显式白名单：点事件只点亮这份名单（一跳，不扩散，守 F-SC16）。
 * 白名单剔除记录（atlas-data.js 无此国家 id，按工单指示剔除、不硬加）：
 *   hormuz-2026: IR；malacca-structural: ID；redsea-2024: EG / YE / DJ（剔完为空，
 *   靠 nodes 点亮）；ai-power: IE。
 *
 * link 指向专题页（file:// 直开兼容：目录链接一律写到真实入口文件）；
 * linkNode 表示"进入专题页"改为打开该节点的详情抽屉（红海断缆 → re-cable）；
 * link2 是附带的第二个专题链接；related 是事件卡底部的相关事件轻导览。
 * evidence 为 Nullroute 供稿口径的证据等级标注。标题与摘要文案为 Nullroute 供稿，逐字采用。 */
window.ATLAS_EVENTS = [
  {
    id: "hormuz-2026",
    pos: [652.0, 190.0], // 霍尔木兹海峡（choke 标记在 [656.4,196.4]，错位避让）
    title_zh: "霍尔木兹海峡 2026 危机",
    title_en: "Strait of Hormuz Crisis 2026",
    summary_zh: "全球约五分之一的海运原油和四分之一的 LNG 经过这道最窄约 33 公里的海峡。2026 年伊朗危机把它从背景风险变成现实变量：运价、战争险保费与改道决策实时联动。",
    summary_en: "Roughly a fifth of seaborne crude and a quarter of global LNG pass through this chokepoint, ~33 km at its narrowest. The 2026 Iran crisis turned it from background risk into a live variable: freight rates, war-risk premiums and rerouting decisions now move together.",
    link: "observatory/iran-war/index.html",
    countries: ["SA", "QA", "AE", "JP", "KR", "CN"], // IR 不在 atlas 国家表，剔除
    nodes: ["en-tanker", "en-crude", "en-lng", "ps-energy-coordination", "ps-naval-transit"],
    related: ["malacca-structural", "redsea-2024"],
    evidence: "C3"
  },
  {
    id: "malacca-structural",
    pos: [792.0, 243.0], // 马六甲海峡（choke 标记在 [787.5,248.6]，错位避让）
    title_zh: "马六甲结构性瓶颈",
    title_en: "Malacca: the Structural Bottleneck",
    summary_zh: "东亚能源与货物进口的主通道，没有等价替代——绕行巽他或龙目要多花数天航程与相应成本。它不是正在发生的危机，而是一直在场的结构性约束：任何台海或南海情景都以它为底图。",
    summary_en: "The main artery for East Asia's energy and goods imports, with no equivalent substitute — rerouting via Sunda or Lombok adds days and cost. Not an unfolding crisis but a standing structural constraint: every Taiwan or South China Sea scenario is drawn on top of it.",
    link: "transmission.html#dst-malacca-overlap", // 传导链独立页情景三锚点
    countries: ["SG", "MY", "CN", "JP", "KR"], // ID 不在 atlas 国家表，剔除
    nodes: ["en-tanker", "ps-naval-transit"],
    related: ["hormuz-2026", "taiwan-semi"],
    evidence: "C3"
  },
  {
    id: "redsea-2024",
    pos: [618.1, 209.7], // 红海南段（lon 42.5, lat 14.5），曼德海峡 choke 标记北侧
    title_zh: "红海海缆中断 2024",
    title_en: "Red Sea Cable Cuts 2024",
    summary_zh: "2024 年 2 月，红海海底三条通信光缆被切断，欧亚之间约四分之一的互联网容量被迫改道。修缆船进入战区需要许可与保险——修复能力本身就是一个卡点。",
    summary_en: "In February 2024 three subsea telecom cables in the Red Sea were cut, forcing roughly a quarter of Europe–Asia internet capacity onto detours. Repair ships need permits and insurance to enter a war zone — repair capacity is itself a chokepoint.",
    linkNode: "re-cable", // 专题入口 = 打开节点 re-cable 的详情抽屉（档案接入后为档案页）
    countries: [], // EG / YE / DJ 均不在 atlas 国家表，剔除后为空
    nodes: ["re-cable", "re-bgp"],
    related: ["hormuz-2026"],
    evidence: "C3"
  },
  {
    id: "taiwan-semi",
    pos: [836.1, 183.9], // 台湾（lon 121, lat 23.8）
    title_zh: "台海半导体集中",
    title_en: "Taiwan Semiconductor Concentration",
    summary_zh: "全球九成以上最先进制程芯片产自台湾一地，先进产能的地理集中没有短期替代。任何台海情景的第一个传导层不是军事，是晶圆。",
    summary_en: "Over ninety percent of the world's most advanced chips are made in Taiwan, and that geographic concentration has no near-term substitute. In any Taiwan scenario the first transmission layer is not military — it is wafers.",
    link: "observatory/reports/semiconductor-supply-chain.html",
    link2: { href: "observatory/reports/TWN.html", label_zh: "台湾报告", label_en: "TWN report" },
    countries: ["TW", "US", "CN", "JP", "KR", "NL"],
    nodes: ["ac-fab", "ac-gpu", "ac-export", "ps-export-control"],
    related: ["malacca-structural", "ai-power"],
    evidence: "C3"
  },
  {
    id: "ai-power",
    pos: [284.7, 141.7], // 北弗吉尼亚（lon -77.5, lat 39）
    title_zh: "AI 电力基建瓶颈",
    title_en: "AI Power Infrastructure Crunch",
    summary_zh: "AI 数据中心的扩张撞上电网的接入队列：北弗吉尼亚与爱尔兰的并网等待以年计。算力的瓶颈正在从芯片转向电力与冷却。",
    summary_en: "AI datacenter buildout is colliding with grid interconnection queues: waits in Northern Virginia and Ireland run in years. The binding constraint on compute is shifting from chips to power and cooling.",
    link: "observatory/reports/ai-power-infrastructure.html",
    countries: ["US"], // IE 不在 atlas 国家表，剔除
    nodes: ["ac-power", "ac-gpu"],
    related: ["taiwan-semi"],
    evidence: "C3"
  }
];
