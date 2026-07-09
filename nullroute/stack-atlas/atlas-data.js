/* Stack Atlas data — hand-authored from public structural facts only.
 *
 * Evidence discipline (aligns with wiki/monitoring source-registry taxonomy):
 *   verified       — geographic / corporate-HQ / official-control facts
 *   source-linked  — well-reported structural dependency, Atlas is not the origin
 *   query-designed — a monitoring/query design layer, not validated commodity evidence
 *   needs-review   — candidate signal for Root to verify; NEVER a conclusion
 *   unknown        — relationship not established here; shown as a gap, not hidden
 *
 * Nothing uncertain is dressed up as verified. Where a relationship is not
 * defensible from public structural fact, it is left `unknown` / `needs source`.
 * Final evidence grading is Nullroute's, not the interface's.
 */
window.ATLAS_DATA = {
  meta: {
    title_zh: "Stack Atlas · 技术栈与世界的双地图",
    title_en: "Stack Atlas · dual map of stacks and the world",
    note_zh: "公共可读的依赖探索界面，不是结论预言机。candidate alert 只是待复查线索。",
    note_en: "A public dependency-exploration interface, not a conclusion oracle. Candidate alerts are leads to review.",
    liveDataHook: "wiki/monitoring/data/live/live-data.js", // future ingest target
    evidenceLevels: ["verified", "source-linked", "query-designed", "needs-review", "unknown"]
  },

  // node status vocabulary (per ticket)
  statusVocab: ["controlled", "dependent", "contested", "blocked", "fallback", "unknown"],

  layers: [
    { id: "L0", label_zh: "L0 物理层", label_en: "L0 Physical" },
    { id: "L1", label_zh: "L1 计算/系统", label_en: "L1 Compute / System" },
    { id: "L2", label_zh: "L2 组织", label_en: "L2 Organization" },
    { id: "L3", label_zh: "L3 法律/控制", label_en: "L3 Legal / Control" },
    { id: "L4", label_zh: "L4 叙事/市场", label_en: "L4 Narrative / Market" }
  ],

  politicalLayers: [
    { id: "P0", label_zh: "P0 物理强制层", label_en: "P0 Physical coercion" },
    { id: "P1", label_zh: "P1 法域/规则层", label_en: "P1 Jurisdiction / rules" },
    { id: "P2", label_zh: "P2 制度/联盟层", label_en: "P2 Institutions / alliances" },
    { id: "P3", label_zh: "P3 国内政治层", label_en: "P3 Domestic politics" },
    { id: "P4", label_zh: "P4 叙事/合法性层", label_en: "P4 Narrative / legitimacy" }
  ],

  // 13 countries. centroid: [x,y] in the 1000x500 world viewBox.
  // Most come from WORLD_CENTROIDS at runtime; SG is injected (too small for 110m).
  countries: [
    { code: "US", num: "840", name_zh: "美国", name_en: "United States" },
    { code: "CN", num: "156", name_zh: "中国", name_en: "China" },
    { code: "TW", num: "158", name_zh: "台湾", name_en: "Taiwan" },
    { code: "JP", num: "392", name_zh: "日本", name_en: "Japan" },
    { code: "KR", num: "410", name_zh: "韩国", name_en: "South Korea" },
    { code: "NL", num: "528", name_zh: "荷兰", name_en: "Netherlands" },
    { code: "DE", num: "276", name_zh: "德国", name_en: "Germany" },
    { code: "SG", num: "702", name_zh: "新加坡", name_en: "Singapore", centroidOverride: [788.3, 246.3] },
    { code: "MY", num: "458", name_zh: "马来西亚", name_en: "Malaysia" },
    { code: "SA", num: "682", name_zh: "沙特", name_en: "Saudi Arabia" },
    { code: "QA", num: "634", name_zh: "卡塔尔", name_en: "Qatar" },
    { code: "AE", num: "784", name_zh: "阿联酋", name_en: "UAE" },
    { code: "IN", num: "356", name_zh: "印度", name_en: "India" }
  ],

  // chokepoints: pos [x,y] projected from lon/lat (equirectangular, 1000x500).
  chokepoints: [
    { id: "hormuz",   name_zh: "霍尔木兹海峡",  name_en: "Strait of Hormuz",   pos: [656.4, 196.4], evidence: "verified",
      affectsCountries: ["SA","QA","AE","JP","KR","IN","CN"], affectsStacks: ["energy"],
      note_zh: "波斯湾原油/LNG 出海口；地理事实。具体流量依赖比例 needs source。",
      note_en: "Gulf crude/LNG outlet; geographic fact. Exact dependency shares: needs source." },
    { id: "malacca",  name_zh: "马六甲海峡",    name_en: "Strait of Malacca",  pos: [787.5, 248.6], evidence: "verified",
      affectsCountries: ["CN","JP","KR","SG","MY"], affectsStacks: ["energy","reachability"],
      note_zh: "东亚原油/LNG 主航道 + 主要海缆走廊；地理事实。",
      note_en: "Main East Asia crude/LNG lane + major submarine-cable corridor; geographic fact." },
    { id: "suez",     name_zh: "苏伊士运河",    name_en: "Suez Canal",         pos: [589.7, 167.8], evidence: "verified",
      affectsCountries: ["DE","NL","IN","SA"], affectsStacks: ["energy","reachability"],
      note_zh: "欧亚海运/海缆通道；地理事实。",
      note_en: "Europe–Asia shipping / cable corridor; geographic fact." },
    { id: "panama",   name_zh: "巴拿马运河",    name_en: "Panama Canal",       pos: [264.0, 270.0], evidence: "verified",
      affectsCountries: ["US"], affectsStacks: ["energy"],
      note_zh: "美洲两洋通道；与本版三 stack 关联较弱，列入供对照。",
      note_en: "Inter-ocean Americas route; weak link to these 3 stacks, shown for contrast." },
    { id: "babelmandeb", name_zh: "曼德海峡",   name_en: "Bab-el-Mandeb",      pos: [619.4, 219.4], evidence: "verified",
      affectsCountries: ["SA","IN","DE","NL"], affectsStacks: ["energy","reachability"],
      note_zh: "红海南口；原油与海缆通道。",
      note_en: "Red Sea southern gate; crude and cable corridor." }
  ],

  // representative, defensible companies only. Uncertain scope -> not invented.
  /* companies — products_zh 只写公开结构事实；keyFigures 的每条数字都来自
   * decomposition/nodes/ 已核档案，带证据等级（C4 官方原文在库 / C3 官方口径
   * 待回原文 / C2 行业推算），src 指向节点档案。没有已核数字的公司不编，留空。 */
  companies: [
    { id: "nvidia",   name: "NVIDIA",     country: "US", role_zh: "GPU 设计",      role_en: "GPU design",        evidence: "verified",
      products_zh: "数据中心 AI GPU（H100/B200 系）+ CUDA 软件生态；fabless，制造全押 TSMC",
      keyFigures: [
        { k: "AI 加速器市场份额", v: "约 80%+（2024 年估计高达 ~87%）", ev: "C2–C3", src: "nodes/ac-gpu.md，行业口径" },
        { k: "H20 对华特供版减记", v: "$5.5B（2025，出口管制直接代价）", ev: "C3", src: "nodes/ac-gpu.md，公司公告+广泛报道" }
      ] },
    { id: "tsmc",     name: "TSMC",       country: "TW", role_zh: "先进代工",      role_en: "Advanced foundry",  evidence: "verified",
      products_zh: "≤7nm 先进制程晶圆代工（3nm/5nm 量产）",
      keyFigures: [
        { k: "整体代工市场份额", v: "约 59–62%", ev: "C3", src: "nodes/ac-fab.md，TrendForce 口径" },
        { k: "先进节点（≤7nm）份额", v: "约 90% 量级", ev: "C2–C3", src: "nodes/ac-fab.md，行业共识待回原文" }
      ] },
    { id: "asml",     name: "ASML",       country: "NL", role_zh: "EUV 光刻",      role_en: "EUV lithography",   evidence: "verified",
      products_zh: "EUV 光刻机（NXE 系，全球独家）+ DUV（NXT 系，NXT:2050i/1980Di 已入荷兰管制清单）",
      keyFigures: [
        { k: "2023 年总营收", v: "约 €276 亿", ev: "C3", src: "nodes/ac-euv.md，待回年报" },
        { k: "单台 EUV 售价", v: "约 €1.5–2 亿", ev: "C2", src: "nodes/ac-euv.md，行业推算" },
        { k: "中国区营收 FY2024", v: "约 €90 亿 / 36%", ev: "C3", src: "nodes/ps-exportctrl.md 工作台" }
      ] },
    { id: "samsung",  name: "Samsung",    country: "KR", role_zh: "存储/代工",     role_en: "Memory / foundry",  evidence: "verified",
      products_zh: "DRAM/NAND、HBM、晶圆代工；HBM3e 对 NVIDIA 认证一度落后，宣称 2025 Q4 起交付 HBM4",
      keyFigures: [
        { k: "HBM 量产地位", v: "全球唯三量产者之一（与 SK 海力士、Micron）", ev: "C3", src: "nodes/ac-hbm.md" }
      ] },
    { id: "skhynix",  name: "SK Hynix",   country: "KR", role_zh: "HBM/存储",      role_en: "HBM / memory",      evidence: "verified",
      products_zh: "HBM3e（NVIDIA 高端加速器主供，MR-MUF 封装工艺领跑）、DRAM",
      keyFigures: [
        { k: "HBM 市场地位", v: "当前代际领跑者、份额第一（具体拆分为商业口径，不作一手引用）", ev: "C2", src: "nodes/ac-hbm.md" }
      ] },
    { id: "synopsys", name: "Synopsys",   country: "US", role_zh: "EDA",           role_en: "EDA",               evidence: "verified",
      products_zh: "芯片设计软件：逻辑综合（Design Compiler）、时序签核（PrimeTime）、验证（VCS）",
      keyFigures: [
        { k: "全球 EDA 市场份额", v: "约 30–35%（三寡头之首）", ev: "C3", src: "nodes/ac-eda.md，行业估算" }
      ] },
    { id: "cadence",  name: "Cadence",    country: "US", role_zh: "EDA",           role_en: "EDA",               evidence: "verified",
      products_zh: "芯片设计软件：模拟设计标杆（Virtuoso）、布局布线（Innovus）、仿真（Spectre）",
      keyFigures: [
        { k: "全球 EDA 市场份额", v: "约 25–30%（第二）", ev: "C3", src: "nodes/ac-eda.md，行业估算" }
      ] },
    { id: "aramco",   name: "Saudi Aramco", country: "SA", role_zh: "原油",        role_en: "Crude oil",         evidence: "verified",
      products_zh: "原油开采与出口（国有）",
      keyFigures: [] },
    { id: "qatargas", name: "QatarEnergy",  country: "QA", role_zh: "LNG",         role_en: "LNG",               evidence: "verified",
      products_zh: "LNG 与伴生氦气（North Dome 气田，Ras Laffan 工业港出口；与 Linde/Air Liquide 签长期供氦合同）",
      keyFigures: [
        { k: "卡塔尔氦气产量", v: "约 64 MCM ≈ 全球 36%（最大单一产地）", ev: "C3", src: "nodes/cm-helium.md，USGS MCS 2025" },
        { k: "2026-06-21 Barzan 事故", v: "重启作业爆炸，13 死 66 伤；官方定性操作事故非敌对，称 LNG/出口能力不受影响", ev: "C4", src: "nodes/cm-helium.md 2026 核验节，官网声明" }
      ] },
    { id: "adnoc",    name: "ADNOC",      country: "AE", role_zh: "原油/天然气",   role_en: "Crude / gas",       evidence: "verified",
      products_zh: "原油与天然气开采出口（阿布扎比国有）",
      keyFigures: [] },
    { id: "hyperscalers", name: "US hyperscalers (AWS/Azure/GCP)", country: "US", role_zh: "云控制面",  role_en: "Cloud control plane", evidence: "source-linked",
      products_zh: "云计算基础设施与大型数据中心（AI 算力最大新增电力负荷来源）",
      keyFigures: [] },
    { id: "lynas", name: "Lynas Rare Earths", country: "AU", role_zh: "稀土分离（中国外唯一商业级）", role_en: "REE separation (only commercial-scale ex-China)", evidence: "verified",
      products_zh: "轻稀土分离（Mt Weld 矿 + 马来西亚关丹分离厂在产；德州分离厂在建）",
      keyFigures: [
        { k: "非中分离产能地位", v: "最大非中商业级分离商；但重稀土分离+规模化磁体仍是 planned，不构成完整 fallback", ev: "C3", src: "nodes/cm-ree.md" }
      ] },
    { id: "lpt-makers", name: "大型变压器制造商（ABB / Siemens Energy / GE Vernova）", country: "US", role_zh: "电网接入设备", role_en: "Large power transformers", evidence: "source-linked",
      products_zh: "大型电力变压器（>100 MVA，数据中心园区并网的实物瓶颈设备）；多数在美国境外制造",
      keyFigures: [
        { k: "当前供货周期", v: "约 36 个月（最长 60 个月；历史水平 1–2 年已过时）", ev: "C4", src: "nodes/ac-power.md，DOE LPT Report to Congress 2024（PDF 在库）" },
        { k: "美国大型变压器进口依赖", v: "约 82%（2019 基期）", ev: "C4", src: "nodes/ac-power.md，DOE 2024 年报" }
      ] }
  ],

  // 3 stacks. Each node: layer, status, evidence, related countries/companies/chokepoints, gap.
  stacks: [
    {
      id: "ai-compute", name_zh: "AI 算力栈", name_en: "AI Compute Stack",
      nodes: [
        { id: "ac-power",   layer: "L0", label_zh: "数据中心电力/冷却", label_en: "DC power / cooling", status: "contested", evidence: "source-linked",
          countries: ["US","CN"], companies: ["hyperscalers","lpt-makers"], chokepoints: [], gap_zh: "各国具体并网/许可瓶颈 needs source；冷却设备商建档待补来源", gap_en: "Grid/permit bottlenecks per country: needs source; cooling-equipment vendors need sourcing" },
        { id: "ac-fab",     layer: "L0", label_zh: "先进芯片制造", label_en: "Advanced fab", status: "controlled", evidence: "verified",
          countries: ["TW","KR"], companies: ["tsmc","samsung"], chokepoints: [],
          gap_zh: "台积电 <10nm 产能份额约 92%（BCG×SIA 2021 Exhibit 17，产能口径）；产量口径约 92%（Rhodium 2022）；BIS IFR 节点阈值：先进逻辑 ≤16nm（全等效），NAND ≥128 层",
          gap_en: "TSMC <10nm capacity ~92% (BCG×SIA 2021 Ex.17, capacity basis); production ~92% (Rhodium 2022); BIS IFR threshold: advanced logic ≤16nm FEOL-equiv, NAND ≥128L" },
        { id: "ac-euv",     layer: "L0", label_zh: "EUV 光刻设备", label_en: "EUV lithography", status: "controlled", evidence: "verified",
          countries: ["NL"], companies: ["asml"], chokepoints: [],
          gap_zh: "EUV 保护膜（pellicle）为明文独立管制项，非随整机走：美国 ECCN 3B001.l（FR 2023-23049）、3B001.q（FR 2024-19633），荷兰 3B801.l（FR 原文 verified，与早前『随整机』判断相反）",
          gap_en: "EUV pellicle is a separately-listed control item, not bundled with the machine: US ECCN 3B001.l (FR 2023-23049), 3B001.q (FR 2024-19633), NL 3B801.l (FR text verified, reverses earlier 'rides-with-machine' assumption)" },
        { id: "ac-gpu",     layer: "L1", label_zh: "GPU", label_en: "GPU", status: "controlled", evidence: "verified",
          countries: ["US","TW"], companies: ["nvidia","tsmc"], chokepoints: [],
          polNodes: ["ps-export-control","ps-sanctions-service"],
          gap_zh: "NVIDIA 数据中心 FY2025 $115B；中国含港 13.1%。H20 限制无独立 FR 规则，2025-04-09 USG letter 触发（结构脆弱性：可随时逆转）；NVIDIA $5.5B charge 已核（8-K）",
          gap_en: "NVIDIA DC revenue FY2025 $115B; China incl. HK 13.1%. H20 restriction has no standalone FR rule — triggered by 2025-04-09 USG letter (structural fragility: reversible any day); $5.5B charge verified (8-K)" },
        { id: "ac-hbm",     layer: "L1", label_zh: "HBM 高带宽存储", label_en: "HBM memory", status: "dependent", evidence: "verified",
          countries: ["KR","US"], companies: ["skhynix","samsung"], chokepoints: [],
          polNodes: ["ps-export-control"],
          gap_zh: "Hanmi TC bonder 2017-2024 年近乎独占 HBM 封装，2025 Q3 营收市占 71.2%；BIS §734.9(h)：当前量产所有 HBM 均超阈值，适用 FDP 许可要求（2025-11-12 eCFR 全文 verified）；中国本土 HBM 替代进度仍需来源",
          gap_en: "Hanmi TC bonder near-monopoly 2017-2024, 71.2% revenue share Q3 2025; BIS §734.9(h): all HBM currently in production exceeds threshold, FDP license required (eCFR 2025-11-12 full text verified); China domestic HBM substitution still needs source" },
        { id: "ac-eda",     layer: "L1", label_zh: "EDA 工具", label_en: "EDA tools", status: "controlled", evidence: "verified",
          countries: ["US"], companies: ["synopsys","cadence"], chokepoints: [], gap_zh: "", gap_en: "" },
        { id: "ac-cloud",   layer: "L2", label_zh: "云 GPU 容量", label_en: "Cloud GPU capacity", status: "dependent", evidence: "source-linked",
          countries: ["US"], companies: ["hyperscalers"], chokepoints: [], gap_zh: "区域可用区分布 needs source", gap_en: "Regional AZ distribution: needs source" },
        { id: "ac-export",  layer: "L3", label_zh: "出口管制", label_en: "Export control", status: "blocked", evidence: "verified",
          countries: ["US","CN"], companies: [], chokepoints: [],
          gap_zh: "§734.9(h) FDP 全文 verified（2025-11-12 合并版）；EL 3420 条（CSL 机器计数，verified）；H20 = letter 触发非 FR 规则；NL / JP / KR 各自管制需单独工单",
          gap_en: "§734.9(h) FDP full text verified (2025-11-12 consolidated); EL 3420 entries (CSL machine count, verified); H20 = letter-triggered, no FR rule; NL / JP / KR controls need separate tickets" },
        { id: "cm-ree",     layer: "L0", label_zh: "稀土（开采→分离→磁体）", label_en: "Rare earth elements (mine→separate→magnet)", status: "controlled", evidence: "verified",
          countries: ["CN","AU","US"], companies: ["lynas"], chokepoints: [],
          gap_zh: "中国矿产量 71%（USGS MCS 2026）；精炼 91%、NdFeB 磁体 94%（IEA GCM 2025 p.172/175）；MOFCOM 18号（2025-04）：Sm/Gd/Tb/Dy/Lu/Sc/Y 7元素许可证制，无白名单，仍生效；美净进口依赖 53%，来源中国 71%",
          gap_en: "China mine share 71% (USGS MCS 2026); refining 91%, NdFeB magnet 94% (IEA GCM 2025 p.172/175); MOFCOM Order 18 (2025-04): 7 elements license required, no whitelist, still in effect; US net-import reliance 53%, China source 71%" },
        { id: "cm-gallium", layer: "L0", label_zh: "镓/锗（GaN/半导体）", label_en: "Gallium / germanium (GaN / semiconductor)", status: "controlled", evidence: "verified",
          countries: ["CN","DE"], companies: [], chokepoints: [],
          gap_zh: "MOFCOM 23号（2023-07，全球许可证）→ 46号（2024-12，对美不予许可）→ 72号（2025-11暂停至2026-11-27）；美钇进口 333→17 吨（8个月，CSIS）；锗净进口依赖 >50%，来源中国 41%，2025e进口 −67%（USGS）；镓全球份额% USGS 无成句",
          gap_en: "MOFCOM Order 23 (2023-07 global license) → 46 (2024-12 deny to US) → 72 (2025-11 suspends to 2026-11-27); US yttrium imports 333→17 MT (8-month disruption, CSIS); Ge net-import reliance >50%, China source 41%, 2025e import −67% (USGS); Ga global share % has no USGS verbatim" },
        /* 2026-07-07 新增：cm 关键矿产节点位（工单指示入现有 cm 组，与 cm-ree / cm-gallium 同排）。
         * 骨架节点：结构关系与状态待 Nullroute 定级，不预填；深度内容由 data/node-archives.js
         * 档案管道接入（详情抽屉自动加载 decomposition/nodes/<id>.md 的抽取结果）。 */
        { id: "cm-battery-li", layer: "L0", label_zh: "锂（采矿→精炼→电池化学品）", label_en: "Lithium (mine → refine → battery chemicals)", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "cm-battery-co", layer: "L0", label_zh: "钴（采矿→精炼→正极材料）", label_en: "Cobalt (mine → refine → cathode)", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "cm-helium",  layer: "L0", label_zh: "氦气", label_en: "Helium", status: "unknown", evidence: "source-linked",
          countries: ["QA"], companies: ["qatargas"], chokepoints: [],
          gap_zh: "骨架节点：卡塔尔≈36% 全球产量（USGS，见 qatargas 卡）；状态待 Nullroute 定级，深度内容见节点档案", gap_en: "Skeleton node: Qatar ≈36% of global output (USGS, see QatarEnergy card); status pending grading; depth loads from node archive" },
        { id: "ac-narr",    layer: "L4", label_zh: "算力主权叙事", label_en: "Compute-sovereignty narrative", status: "contested", evidence: "unknown",
          countries: ["US","CN"], companies: [], chokepoints: [], gap_zh: "叙事强度无可审计指标，标 unknown", gap_en: "No auditable metric for narrative; marked unknown" }
      ]
    },
    {
      id: "energy", name_zh: "东亚能源栈", name_en: "East Asia Energy Stack",
      nodes: [
        { id: "en-crude",   layer: "L0", label_zh: "原油生产", label_en: "Crude production", status: "dependent", evidence: "verified",
          countries: ["SA","AE"], companies: ["aramco","adnoc"], chokepoints: ["hormuz"], gap_zh: "", gap_en: "" },
        { id: "en-lng",     layer: "L0", label_zh: "LNG 生产", label_en: "LNG production", status: "dependent", evidence: "verified",
          countries: ["QA"], companies: ["qatargas"], chokepoints: ["hormuz"], gap_zh: "", gap_en: "" },
        { id: "en-tanker",  layer: "L1", label_zh: "油轮/LNG 航道", label_en: "Tanker / LNG routes", status: "contested", evidence: "source-linked",
          countries: ["JP","KR","CN","IN"], companies: [], chokepoints: ["hormuz","malacca","babelmandeb"], gap_zh: "保险/重航成本 needs source", gap_en: "Insurance / rerouting cost: needs source" },
        { id: "en-refinery",layer: "L1", label_zh: "炼厂", label_en: "Refining", status: "dependent", evidence: "unknown",
          countries: ["CN","IN","SG"], companies: [], chokepoints: [], gap_zh: "各国炼能与依赖度 needs source", gap_en: "Refining capacity & dependency: needs source" },
        { id: "en-reserve", layer: "L2", label_zh: "战略储备", label_en: "Strategic reserves", status: "unknown", evidence: "unknown",
          countries: ["CN","JP","KR","IN"], companies: [], chokepoints: [], gap_zh: "储备天数为非公开/估算，标 unknown", gap_en: "Reserve days are non-public/estimated; unknown" },
        { id: "en-sanction",layer: "L3", label_zh: "能源制裁/价格上限", label_en: "Energy sanctions / price cap", status: "contested", evidence: "source-linked",
          countries: ["US","DE","NL"], companies: [], chokepoints: [], gap_zh: "逐项措施回官方公告核", gap_en: "Per-measure: verify against official notices" },
        { id: "en-narr",    layer: "L4", label_zh: "能源安全叙事", label_en: "Energy-security narrative", status: "contested", evidence: "unknown",
          countries: ["JP","KR","CN"], companies: [], chokepoints: [], gap_zh: "无可审计指标，标 unknown", gap_en: "No auditable metric; unknown" }
      ]
    },
    {
      id: "reachability", name_zh: "互联网可达性栈", name_en: "Internet Reachability Stack",
      nodes: [
        { id: "re-cable",   layer: "L0", label_zh: "海底光缆", label_en: "Submarine cables", status: "contested", evidence: "source-linked",
          countries: ["SG","US","JP"], companies: [], chokepoints: ["malacca","suez","babelmandeb"], gap_zh: "逐条 cable 走向/业主 needs source", gap_en: "Per-cable route/owner: needs source" },
        { id: "re-bgp",     layer: "L1", label_zh: "BGP 路由", label_en: "BGP routing", status: "contested", evidence: "query-designed",
          countries: ["US","CN"], companies: [], chokepoints: [], gap_zh: "可由 RIPEstat watched ASN 监测；本版仅设计层", gap_en: "Monitorable via RIPEstat watched ASNs; design layer only here" },
        { id: "re-cloud",   layer: "L1", label_zh: "云控制面", label_en: "Cloud control plane", status: "dependent", evidence: "source-linked",
          countries: ["US"], companies: ["hyperscalers"], chokepoints: [], gap_zh: "各国主权云替代度 needs source", gap_en: "Sovereign-cloud substitution per country: needs source" },
        { id: "re-dns",     layer: "L1", label_zh: "DNS / CA", label_en: "DNS / CA", status: "dependent", evidence: "unknown",
          countries: ["US"], companies: [], chokepoints: [], gap_zh: "集中度证据 needs source", gap_en: "Concentration evidence: needs source" },
        { id: "re-cdn",     layer: "L2", label_zh: "CDN", label_en: "CDN", status: "dependent", evidence: "source-linked",
          countries: ["US"], companies: [], chokepoints: [], gap_zh: "可由 Cloudflare Radar 监测（needs token）", gap_en: "Monitorable via Cloudflare Radar (needs token)" },
        { id: "re-filter",  layer: "L3", label_zh: "可用性/制裁/过滤", label_en: "Availability / sanctions / filtering", status: "blocked", evidence: "query-designed",
          countries: ["CN"], companies: [], chokepoints: [], gap_zh: "可由 OONI 测量；本版仅设计层", gap_en: "Measurable via OONI; design layer only here" },
        { id: "re-narr",    layer: "L4", label_zh: "数字主权叙事", label_en: "Digital-sovereignty narrative", status: "contested", evidence: "unknown",
          countries: ["CN","DE"], companies: [], chokepoints: [], gap_zh: "无可审计指标，标 unknown", gap_en: "No auditable metric; unknown" }
      ]
    },

    /* ── 2026-07-07 新增分组（节点位骨架）─────────────────────────────────
     * 双语名取自 decomposition/nodes/<id>.md 档案标题；层位按同组类似节点类推。
     * 所有新节点为骨架：结构关系与状态待 Nullroute 定级（不预填、不编造），
     * 深度内容由 data/node-archives.js 档案管道接入详情抽屉。
     * 注意：新能源组节点保持档案原 re-* id，但与互联网可达性栈（reachability，
     * 同样 re-* 前缀）是两个独立分组，id 全局唯一、互不冲突。 */
    {
      id: "agriculture", name_zh: "农业/食品栈", name_en: "Agriculture / Food Stack",
      nodes: [
        { id: "ag-fertilizer-n",  layer: "L0", label_zh: "氮肥（合成氨/尿素/硝铵）", label_en: "Nitrogen fertilizer (ammonia / urea / AN)", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "ag-fertilizer-pk", layer: "L0", label_zh: "钾肥与磷肥（矿产型农业投入品）", label_en: "Potash & phosphate fertilizer (mineral inputs)", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "ag-grain",         layer: "L1", label_zh: "全球粮食贸易", label_en: "Global grain trade", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" }
      ]
    },
    {
      id: "finance", name_zh: "价值流/金融栈", name_en: "Value Flow / Finance Stack",
      nodes: [
        { id: "fi-usd",        layer: "L1", label_zh: "美元清算（CHIPS/Fedwire/代理行）", label_en: "USD clearing (CHIPS / Fedwire / correspondent)", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "fi-swift",      layer: "L1", label_zh: "SWIFT 跨境银行报文网络", label_en: "SWIFT interbank messaging network", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "fi-cips",       layer: "L1", label_zh: "CIPS（人民币跨境支付系统）", label_en: "CIPS (RMB cross-border payment system)", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "fi-card",       layer: "L2", label_zh: "卡组织（Visa/Mastercard 品牌支付网络）", label_en: "Card networks (Visa / Mastercard)", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "fi-stablecoin", layer: "L2", label_zh: "稳定币 / USDT", label_en: "Stablecoins / USDT", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" }
      ]
    },
    {
      id: "new-energy", name_zh: "新能源制造栈", name_en: "New Energy Manufacturing Stack",
      nodes: [
        { id: "re-battery-material", layer: "L0", label_zh: "电池四大材料（正极/负极/隔膜/电解液）", label_en: "Battery materials (cathode / anode / separator / electrolyte)", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "re-polysilicon",      layer: "L1", label_zh: "多晶硅（太阳能级）", label_en: "Polysilicon (solar grade)", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "re-battery-cell",     layer: "L1", label_zh: "动力电池电芯", label_en: "EV battery cells", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "re-solar-module",     layer: "L2", label_zh: "太阳能组件", label_en: "Solar modules", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案（档案层标 L3=组装，网页 L3 是法律层，按同组类推放 L2 组织/产能层）", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive (archive layer 'L3 assembly' mapped to web L2 organization)" }
      ]
    },
    {
      id: "telecom", name_zh: "通信栈", name_en: "Telecom Stack",
      nodes: [
        { id: "tc-optical",     layer: "L0", label_zh: "光纤/光缆制造", label_en: "Optical fiber / cable manufacturing", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" },
        { id: "tc-basestation", layer: "L1", label_zh: "5G 基站", label_en: "5G base stations", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案（档案层标 L0 物理·L1 系统，取 L1）", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive (archive 'L0/L1' mapped to L1)" },
        { id: "tc-mobile-chip", layer: "L1", label_zh: "移动芯片（智能手机 SoC）", label_en: "Mobile chips (smartphone SoC)", status: "unknown", evidence: "unknown",
          countries: [], companies: [], chokepoints: [],
          gap_zh: "骨架节点：关系/状态待 Nullroute 定级；深度内容见节点档案", gap_en: "Skeleton node: relations/status pending grading; depth loads from node archive" }
      ]
    }
  ],

  politicalStacks: [
    {
      id: "geo-control", name_zh: "地缘政治控制栈", name_en: "Geopolitical Control Stack",
      nodes: [
        { id: "ps-naval-transit", layer: "P0", label_zh: "海上通道强制/护航能力", label_en: "Naval transit coercion / escort capacity", status: "controlled", evidence: "source-linked",
          countries: ["US","JP","KR","SG","SA","AE"], companies: [], chokepoints: ["hormuz","malacca","suez","babelmandeb"], techNodes: ["en-tanker","re-cable"],
          gap_zh: "具体舰队部署、护航规则和维修船可用性需回公开军事/航运来源核", gap_en: "Fleet posture, escort rules, and repair-vessel availability need public-source verification" },
        { id: "ps-port-access", layer: "P0", label_zh: "港口/登陆点准入", label_en: "Port / landing-point access", status: "dependent", evidence: "source-linked",
          countries: ["SG","MY","AE","SA","JP"], companies: [], chokepoints: ["malacca","hormuz","suez"], techNodes: ["en-tanker","re-cable"],
          gap_zh: "逐港口、逐海缆登陆点的所有权与准入规则 needs source", gap_en: "Per-port and cable-landing ownership/access rules need source" },
        { id: "ps-export-control", layer: "P1", label_zh: "出口管制/许可", label_en: "Export controls / licensing", status: "blocked", evidence: "source-linked",
          countries: ["US","CN","NL","TW","JP","KR"], companies: ["asml","nvidia","synopsys","cadence","tsmc"], chokepoints: [],
          // cm-ree/cm-gallium：MOFCOM 两用物项出口管制（2023 镓锗公告、2025 Announcement 18 中重稀土），见 nodes/cm-ree.md、cm-gallium.md
          techNodes: ["ac-export","ac-euv","ac-gpu","ac-eda","ac-fab","cm-ree","cm-gallium"],
          gap_zh: "逐条许可、实体清单和最终用途规则需回 BIS / EU / NL / JP / KR 原文核", gap_en: "Per-license, entity-list, and end-use rules need original-source verification" },
        { id: "ps-sanctions-service", layer: "P1", label_zh: "制裁/金融与服务可达性", label_en: "Sanctions / financial and service availability", status: "contested", evidence: "source-linked",
          countries: ["US","DE","NL","CN","IN"], companies: ["hyperscalers"], chokepoints: [], techNodes: ["en-sanction","re-filter","re-cloud","re-cdn"],
          gap_zh: "逐项制裁、支付、保险、云服务条款需回官方公告和服务条款核", gap_en: "Measures for sanctions, payment, insurance, and cloud terms need official/source verification" },
        { id: "ps-standards-licensing", layer: "P1", label_zh: "标准/认证/工具授权", label_en: "Standards / certification / tool licensing", status: "controlled", evidence: "source-linked",
          countries: ["US","NL","DE","TW"], companies: ["asml","synopsys","cadence"], chokepoints: [],
          // re-bgp：运营牌照也是这一层——2022 FCC §214 吊销 China Telecom Americas 运营授权（争夺事件见 nodes/ir-bgp.md）
          techNodes: ["ac-eda","ac-euv","re-dns","re-bgp"],
          gap_zh: "认证、授权和标准组织影响力需拆成可审计来源", gap_en: "Certification, licensing, and standards leverage need auditable source rows" },
        { id: "ps-alliance-regimes", layer: "P2", label_zh: "盟友体系/协调机制", label_en: "Alliance regimes / coordination mechanisms", status: "controlled", evidence: "source-linked",
          countries: ["US","JP","KR","TW","NL","DE"], companies: [], chokepoints: ["malacca","suez"], techNodes: ["ac-export","en-sanction","re-cable"],
          gap_zh: "联盟承诺、政策协调和例外条款不能用一句话概括，需拆政策原文", gap_en: "Alliance commitments, coordination, and carve-outs need policy-text decomposition" },
        { id: "ps-energy-coordination", layer: "P2", label_zh: "能源协调/OPEC+与买家政策", label_en: "Energy coordination / OPEC+ and buyer policy", status: "contested", evidence: "source-linked",
          countries: ["SA","QA","AE","JP","KR","CN","IN","US"], companies: ["aramco","qatargas","adnoc"], chokepoints: ["hormuz","malacca"], techNodes: ["en-crude","en-lng","en-tanker","en-reserve"],
          gap_zh: "产量协调、长期合约、储备释放和买家政策需要分来源核", gap_en: "Production coordination, long-term contracts, reserves, and buyer policy need source-separated verification" },
        { id: "ps-industrial-policy", layer: "P3", label_zh: "产业政策/补贴/本土替代", label_en: "Industrial policy / subsidies / substitution", status: "contested", evidence: "source-linked",
          countries: ["US","CN","JP","KR","TW","DE","NL"], companies: ["tsmc","samsung","skhynix","asml","nvidia"], chokepoints: [], techNodes: ["ac-power","ac-fab","ac-hbm","ac-cloud"],
          gap_zh: "已核（NIST 一手）：USA Rare Earth CHIPS 直接拨款 $277M（贷款 $1.3B 另计，$1.6B 总包不可并表）；Intel CHIPS 奖励 $7.865B（2024-11），2025-08 转股权（约 $8.9B 换约 10% 股份）。其余补贴金额、项目状态、并网许可和本土替代进度需进 MAG v0.2",
          gap_en: "Verified (NIST primary): USA Rare Earth CHIPS direct grant $277M (loan $1.3B separate; $1.6B total not consolidatable); Intel CHIPS award $7.865B (2024-11), equitized 2025-08 (~$8.9B for ~10% stake). Remaining subsidy amounts, project status, permits, and substitution progress belong in MAG v0.2" },
        { id: "ps-domestic-price", layer: "P3", label_zh: "国内价格/就业/选举压力", label_en: "Domestic prices / jobs / electoral pressure", status: "contested", evidence: "unknown",
          countries: ["US","CN","JP","KR","IN","DE"], companies: [], chokepoints: ["hormuz","malacca"], techNodes: ["en-reserve","en-refinery","en-narr","ac-narr"],
          gap_zh: "本版只标出政治压力入口，不给强度评分；需要民调、价格、就业和政策响应数据", gap_en: "This version marks pressure entry points only; intensity needs polling, price, jobs, and response data" },
        { id: "ps-legitimacy-narratives", layer: "P4", label_zh: "国家安全/技术主权/能源安全叙事", label_en: "National-security / tech-sovereignty / energy-security narratives", status: "contested", evidence: "unknown",
          countries: ["US","CN","JP","KR","DE","IN"], companies: [], chokepoints: [], techNodes: ["ac-narr","en-narr","re-narr","ac-export","re-filter"],
          gap_zh: "叙事层目前不做数值判断，只作为政策合法化和动员路径入口", gap_en: "Narrative layer is not quantified here; it is an entry point for legitimation and mobilization paths" }
      ]
    }
  ],

  // candidate alerts — leads only, never conclusions. status fixed to needs-review.
  candidateAlerts: [
    { id: "ca-euv-choke", status: "needs-review", priority: "high",
      title_zh: "EUV 单点依赖（ASML/荷兰）", title_en: "Single-point EUV dependency (ASML/NL)",
      signal_zh: "AI 算力栈 L0 的 EUV 节点为单国单公司控制——结构性单点。请回原文核当前管制与替代进度。",
      signal_en: "AI-compute L0 EUV node is single-country/single-firm controlled — structural single point. Verify current controls and substitution against originals.",
      relNodes: ["ac-euv"], relCountries: ["NL"], relCompanies: ["asml"], relChokepoints: [] },
    { id: "ca-hormuz", status: "needs-review", priority: "high",
      title_zh: "霍尔木兹聚合多依赖", title_en: "Hormuz aggregates multiple dependencies",
      signal_zh: "原油与 LNG 生产节点同时依赖霍尔木兹——多信号汇聚同一 chokepoint。流量比例 needs source。",
      signal_en: "Both crude and LNG production nodes depend on Hormuz — signals converge on one chokepoint. Flow shares: needs source.",
      relNodes: ["en-crude","en-lng"], relCountries: ["SA","QA","AE"], relCompanies: ["aramco","qatargas"], relChokepoints: ["hormuz"] },
    { id: "ca-malacca-dual", status: "needs-review", priority: "medium",
      title_zh: "马六甲同时承能源与海缆", title_en: "Malacca carries both energy and cables",
      signal_zh: "马六甲同时是东亚能源航道与海缆走廊——跨栈 chokepoint。具体 cable 业主 needs source。",
      signal_en: "Malacca is both an East-Asia energy lane and a cable corridor — cross-stack chokepoint. Per-cable owners: needs source.",
      relNodes: ["en-tanker","re-cable"], relCountries: ["CN","JP","KR","SG","MY"], relCompanies: [], relChokepoints: ["malacca"] }
  ]
};
