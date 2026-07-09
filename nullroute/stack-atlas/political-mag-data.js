"use strict";
/* Political MAG 数据（原 app.js 内嵌 POLITICAL_MAG_PLACEHOLDERS，2026-07-07 外置）。
 * 两处共用：index.html 政治节点详情里的 Political MAG 内嵌卡 + political-mag.html 独立页。
 * 纪律不变：先摊开需要什么量纲、可能来源和证据状态，不把未知数填成结论。 */
window.POLITICAL_MAG_DATA = [
  {
    id: "pmag-export-control",
    polnode: "ps-export-control",
    metric: "许可/实体清单/最终用途规则规模",
    scale_family: "permission_scope / listing_count / license_path",
    candidate_sources: "BIS CSL (verified): EL 3420 / DPL 1596 / UVL 222 / MEU 70 / ITAR 787；eCFR §734.9(h) 全文（2025-11-12）",
    why: "把 AI 算力断点从\"有无硬件\"转成\"哪些主体、产品、服务和最终用途被许可\"。EL 3420 条是规模基线，不是管制强度；§734.9(h) 是 HBM 对华法律管辖链的文本锚。",
    evidence_status: "verified",
    next_action: "EU FSD 令牌等 Root；NL/JP/KR 各自清单需单独工单；H20 = letter 触发，无 FR 规则，可随时逆转。"
  },
  {
    id: "pmag-sanctions-service",
    polnode: "ps-sanctions-service",
    metric: "制裁、支付、保险、云服务可达性范围",
    scale_family: "service_availability / sanction_scope / payment_insurance_gate",
    candidate_sources: "OFAC SDN 19,066 / SSI 286 / CMIC 68（CSL + SDN.csv 交叉验证）；UK FCDO 6,194 个实体（2026-06-10）",
    why: "政治栈可以不移动货物，却改变结算、保险、维修、云服务和持续使用权。SDN 19,066 条是美国制裁基线；UK FCDO 6,194 是多边叠加的一个量纲。",
    evidence_status: "verified",
    next_action: "EU FSD 令牌等 Root；JWC 战险保险为商业来源（lead only）；云服务条款为 source-linked，不混入 verified 行。"
  },
  {
    id: "pmag-naval-transit",
    polnode: "ps-naval-transit",
    metric: "护航容量、维修船、通道安全承诺",
    scale_family: "escort_capacity / repair_vessel_availability / transit_security",
    candidate_sources: "public naval posture, shipping advisories, cable repair fleet references",
    why: "霍尔木兹/马六甲不是只看物理宽度，还要看谁能维持通行和维修。",
    evidence_status: "unknown",
    next_action: "不要做军事能力评分；先列公开可审计的通道支持指标。"
  },
  {
    id: "pmag-industrial-policy",
    polnode: "ps-industrial-policy",
    metric: "补贴金额、项目状态、许可/并网进度、替代滞后",
    scale_family: "subsidy_amount / project_status / substitution_lag",
    candidate_sources: "CHIPS Act awards, EU/Japan/Korea/Taiwan industrial-policy notices, company IR",
    why: "产业政策是政治系统试图改写技术依赖的主要慢变量。",
    evidence_status: "unknown",
    next_action: "按项目建立 status row，避免把公告金额当作已落地产能。"
  },
  {
    id: "pmag-domestic-price",
    polnode: "ps-domestic-price",
    metric: "价格敏感度、储备天数、就业/选区暴露",
    scale_family: "price_sensitivity / reserve_days / employment_exposure",
    candidate_sources: "IEA/EIA reserve data, national statistics, price series, election geography",
    why: "国内政治压力决定 P1/P2 的政策能持续多久。",
    evidence_status: "unknown",
    next_action: "先从能源储备和价格序列做低风险量纲，不碰主观政治评分。"
  }
];
