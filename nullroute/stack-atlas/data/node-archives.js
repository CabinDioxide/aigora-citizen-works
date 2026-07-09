/*
 * node-archives.js — Stack Atlas 节点档案数据（WP3 管道产物）
 * 由 scripts/build-node-archives.mjs 自动生成，不要手改；改档案后重跑脚本。
 * 生成时间：2026-07-09T05:50:03.659Z
 * 数据源：decomposition/nodes/*.md（66 份）
 */
(function(g){
g.NODE_ARCHIVES = {
 "ac-cloud": {
  "sourceFile": "ac-cloud.md",
  "archiveId": "ac-cloud",
  "established": "2026-06-28",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "AWS（Amazon）",
    "role": null,
    "scale": "$107.6B",
    "jurisdiction": "美国西雅图 / 美国法域",
    "group": null
   },
   {
    "entity": "Azure（Microsoft Intelligent Cloud）",
    "role": null,
    "scale": "$106.3B（IC 分部整体）；Azure 单独 >$75B",
    "jurisdiction": "美国雷德蒙德 / 美国法域",
    "group": null
   },
   {
    "entity": "GCP（Google Cloud）",
    "role": null,
    "scale": "$43.23B",
    "jurisdiction": "美国山景城 / 美国法域",
    "group": null
   },
   {
    "entity": "华为云",
    "role": null,
    "scale": "未单独披露",
    "jurisdiction": "中国深圳 / 中国法域",
    "group": null
   },
   {
    "entity": "阿里云",
    "role": null,
    "scale": "约 RMB 1000亿级/年（C3 广知口径）",
    "jurisdiction": "中国杭州 / 中国法域",
    "group": null
   }
  ],
  "upstream": [
   "**ac-gpu**（GPU 芯片）：最核心的上游依赖。三大 Hyperscaler 都高度依赖 NVIDIA GPU（H100/H200/B200 系），供给受 ac-gpu 节点的管制约束。如果 NVIDIA GPU 供给被中断，云 GPU 服务立即受限。",
   "**ac-hbm**（HBM 内存）：GPU 性能的关键配套，通过 ac-gpu 间接依赖。",
   "**ir-cables**（海底光缆）+ **ir-bgp**（BGP 路由）：全球云访问的物理前提，光缆断链会直接影响跨大洲的云服务访问。",
   "**en-crude**/**en-lng**（能源）：数据中心耗电量极大，电力成本是云运营成本的重要项。",
   "**fi-usd**（美元结算）：云 GPU 服务以美元计价，需要美元清算能力才能完成付款。"
  ],
  "downstream": [
   "**AI 研究机构和科技公司**：OpenAI、DeepMind、Anthropic、Meta AI 等前沿 AI 训练主要通过云 GPU 或自建数据中心进行。对于资金和规模不足以自建的中等规模公司，云 GPU 几乎是唯一选项。依赖强度：致命（无法替代）。",
   "**初创公司和科研机构**：无法自建基础设施，完全依赖云 GPU 进行 AI 实验和小规模训练。依赖强度：致命。",
   "**企业 AI 应用**：通过云 GPU 部署自己的 AI 推理服务。依赖强度：高（有一定替代选项，但大规模部署成本差距大）。",
   "**中国 AI 企业的境外算力需求**：华为、字节跳动、百度等中国企业在管制收紧前通过美国子公司或第三国中转访问 AWS/Azure 云 GPU，目前受 D:5 控制限制。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial fallback",
   "unstructured": false,
   "text": "按五问：总体判断 D:5 情境下 `partial fallback`（性能受限的国产替代），合法路径上 `blocked`（先进 GPU 出口管制仍在）。"
  },
  "quant": [],
  "cList": [
   {
    "item": "AWS FY2024 云营收 $107.6B，同比 +19%",
    "level": "C4",
    "source": "Amazon 2024 Annual Report CEO 致股东信"
   },
   {
    "item": "Azure（Microsoft IC 分部）FY2025 营收 $106.3B；Azure 单独 >$75B，+34%",
    "level": "C4",
    "source": "Microsoft FY2025 Q4 Press Release"
   },
   {
    "item": "GCP FY2024 营收 $43.23B",
    "level": "C3+",
    "source": "Alphabet Q4 2024 8-K（WebSearch 确认，未直取 PDF）"
   },
   {
    "item": "Microsoft FY2025 capex $64.6B",
    "level": "C4",
    "source": "Microsoft FY2025 Q4 Press Release"
   },
   {
    "item": "Biden IFR 三层国家系统（Tier 1/2/3）+ IaaS 认证条款",
    "level": "C4",
    "source": "BIS AI Diffusion IFR FR 2025-00636 逐字"
   },
   {
    "item": "3A090.a ECCN 控制门槛（TPP≥4800 等）",
    "level": "C4",
    "source": "Biden IFR 原文 §740.27 逐字"
   },
   {
    "item": "ECCN 4E091（模型权重首次管制分类）",
    "level": "C4",
    "source": "Biden IFR 原文"
   },
   {
    "item": "Red Flag #28（IaaS 为 D:5 子公司训练 AI = 视同出口红旗）",
    "level": "C4",
    "source": "Biden IFR 原文"
   },
   {
    "item": "API 推理豁免不受 IaaS 训练管制约束",
    "level": "C4",
    "source": "Biden IFR 原文"
   },
   {
    "item": "Biden IFR 有效日期 2025-01-13",
    "level": "C4",
    "source": "Biden IFR 原文"
   },
   {
    "item": "Trump 政府 2025-05-13 撤销 Biden IFR",
    "level": "C3",
    "source": "BIS 新闻稿（WebSearch 确认，未直取）"
   },
   {
    "item": "Trump 替换方式为\"国家特定双边谈判\"，截至 2026-06-28 无正式文本",
    "level": "C3",
    "source": "WebSearch 广知"
   },
   {
    "item": "AWS 2021-01-08 暂停 Parler 服务（账户暂停即断服实证）",
    "level": "C4",
    "source": "双方法庭文件，公开记录"
   },
   {
    "item": "三大 Hyperscaler 全球 GPU 算力份额约 65–70%",
    "level": "Hypothesis",
    "source": "待 IDC/Synergy Research C3 核实"
   },
   {
    "item": "中国国内算力（昇腾等）与 H100 性能差距约 3–10×",
    "level": "C2",
    "source": "行业估算 + 媒体报道，缺一手基准测试"
   },
   {
    "item": "D:5 实体合法访问 H100/H200 云 GPU 路径 = blocked",
    "level": "C4（管制文本）",
    "source": "BIS 3A090.a + EAR §734.9(h) FDP"
   }
  ],
  "contested": {
   "title": "Biden IFR（2025-01-13 生效）→ Trump 撤销（2025-05-13）",
   "summary": "用五个阅读动作来读这场争夺：\n**① 校准颗粒度**：这场争夺不是在争\"云算力控制权\"这个宽泛的概念，而是在争一个非常具体的问题：云提供商在向 Tier 2 国家提供大规模 AI 训练 IaaS 时，是否需要向 BIS 负责（履行 KYC、限制特定实体访问）。D:5 旧有管制不是争议点——它保持不变，两届政府都没有异议。争夺的是 Tier 2 的治理方式。"
  },
  "gaps": [
   "1. 【缺口：Trump 政府 BIS 出口管制替换规则正式文本——查 bis.gov/Federal Register 2025-05 后发布。影响：确认 4E091/AIA 等核心条款在新框架下的保留状态，直接影响 IaaS 管制现行有效范围的 C 等级。】典藏工单 `2026-06-28-nullroute-stack-atlas-ac-cloud-primary.md` 在追（优先级 1）。",
   "2. 【缺口：云 GPU 算力市场集中度数据（C3+）——需 IDC 或 Synergy Research 的 AI/GPU IaaS 细分市场份额数据（2023 或 2024 年）。当前全局份额标 Hypothesis，影响 Q2 集中度量化精度。】同一典藏工单优先级 3。",
   "3. 【缺口：Amazon FY2025 10-K AWS 分部运营利润——FY2024 运营利润数字未从 CEO 致股东信中取得，分部数据在财报 Notes 里。Amazon FY2025 年报若已发布，可补 FY2025 数据。】同一典藏工单优先级 2。",
   "4. 【缺口：Alphabet FY2025 数据（GCP）——GCP FY2024 $43.23B 当前 C3+（WebSearch 确认但未直取 SEC 8-K 原文）；若 FY2025 Q4 发布，补 GCP FY2025 全年数字。】同一典藏工单优先级 2。"
  ]
 },
 "ac-eda": {
  "sourceFile": "ac-eda.md",
  "archiveId": "ac-eda",
  "established": "2026-06-27",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Synopsys（SNPS）",
    "role": "EDA 最大玩家，逻辑综合 + 时序签核 + P&R + IC 验证",
    "scale": "~30–35% 全球 EDA 市场（C3，行业估算）",
    "jurisdiction": "美国加州 Mountain View / 美国法域",
    "group": null
   },
   {
    "entity": "Cadence Design Systems（CDNS）",
    "role": "第二大，模拟 + 混合信号 + 数字后端 + 仿真",
    "scale": "~25–30% 全球 EDA 市场（C3，行业估算）",
    "jurisdiction": "美国加州 San Jose / 美国法域",
    "group": null
   },
   {
    "entity": "Siemens EDA（前 Mentor Graphics）",
    "role": "物理验证 + PCB + 特定仿真",
    "scale": "~15–20% 全球 EDA 市场（C3，估算）",
    "jurisdiction": "总部归 Siemens AG（德国），但 Mentor 原始业务源于美国，大量工程师团队仍在美国 / 德+美双重法域（实际受 EAR 管辖，因为含美国技术）",
    "group": null
   },
   {
    "entity": "华大九天（688711.SH，Empyrean Technology）",
    "role": "中国最大本土 EDA",
    "scale": "约 3–5% 中国 EDA 市场（C3，中国证监会/招股说明书口径）",
    "jurisdiction": "中国北京 / 中国法域",
    "group": null
   },
   {
    "entity": "国微控股、概伦电子、芯愿景等",
    "role": "中国本土 EDA 其余玩家",
    "scale": "各占极小细分（C3）",
    "jurisdiction": "中国 / 中国法域",
    "group": null
   }
  ],
  "upstream": [
   "EDA 工具本身的上游依赖不多，但有几条不能忽略：",
   "**高性能计算/云基础设施**：EDA 仿真和 P&R 对计算力要求极高，越来越多工作负载跑在云上（AWS、Azure）。如果 EDA 供应商的云依赖被管制，可能间接影响中国设计公司通过云跑 EDA 的可能性（目前是实际绕道途径之一）。",
   "**半导体制造商的 PDK**：EDA 工具是软件，但必须配合代工厂 PDK 才能用于实际流片。PDK 单独构成一层约束——EDA 工具和 PDK 必须同时可及，缺一不可。这条耦合在本节点以上游依赖形式存在。",
   "**自身的 IP 引用**：Synopsys/Cadence 自身的 EDA 工具研发和测试依赖对最新制程的访问——要开发支持 2nm 的 EDA 工具，工程师需要能拿到 2nm 的测试芯片和 TSMC PDK。这形成一条技术进步依赖链，让中国在无法访问先进 PDK 的情况下，自行开发先进 EDA 工具也存在技术瓶颈（C2 推算）。"
  ],
  "downstream": [
   "**所有先进芯片设计公司**：NVIDIA、AMD、高通、苹果、华为海思（历史）、联发科、TSMC 自有设计部门、Google/Amazon ASIC 团队等。任何做芯片设计的公司都需要 EDA。依赖强度：致命，无法绕开。",
   "**晶圆代工厂**：TSMC、三星、英特尔代工部门——代工厂的 PDK 和参考流程是按主流 EDA 工具定制的，双向依赖（代工厂为 EDA 工具认证 PDK，EDA 工具为代工厂工艺校准算法）。",
   "**中国芯片设计生态的独特性**：对 ac 栈的中国替代方案（中芯/华为昇腾路线）而言，EDA 的缺失是不亚于制造设备的约束——SMIC 能接到一部分华为海思的代工，但华为的 Kirin 芯片新一代设计本身就卡在 EDA 工具访问上（被实体清单切断后，海思设计能力处于实质停滞状态，C3）。"
  ],
  "fallback": {
   "verdictZh": "路径受阻",
   "verdictRaw": "blocked",
   "unstructured": false,
   "text": "结论：先进节点 EDA 全流程替代 = `blocked`。模拟设计 = `partial`（华大九天已有可用工具，但在流片 TSMC 先进节点前需 PDK 认证）。成熟节点（28nm 及以上）数字设计 = `possible reroute`，部分工具环节已有本土选项但需串联验证。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球 EDA 市场规模约 **120–150 亿美元**（2023 年，C3，行业估算口径，Gartner/IDC 有各自版本，数字有出入）。\n\n细分角度：约三分之一是 EDA 工具软件本身，另有 IP 核授权（Synopsys IP Group）、咨询/服务部分。\n\n作为规模参照：全球 EDA 市场规模约等于一家中等规模半导体公司的年营收，但它撑起的是价值数万亿美元的半导体设计和制造产业链。这种杠杆倍数（约 100–200×）和 fi-swift 的\"$8 亿坐住千万亿报文\"属于同一类结构，只是规模不同。\n\n【缺口：全球 EDA 精确市场规模——需 Gartner 或 IDC EDA 专项报告 2023 年数据，区分 EDA 工具 vs IP vs 服务的细分】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **CR3（Synopsys + Cadence + Siemens EDA）≈ 85–90%**（C3，行业共识，部分机构报告 70–80% 取决于是否含 IP 业务）\n- **CR1（Synopsys 单家）≈ 30–35%**（C3，行业估算）\n- **数字设计关键子环节**：Siemens Calibre 物理验证近乎独占（CR1 >> 90%，C3 行业共识，具体数字【缺口：Calibre 物理验证市占率专项数据】）；Synopsys PrimeTime 时序签核主导（CR1 约 60–70%，C3，行业广知）\n- **中国市场**：国内 EDA 公司约占中国 EDA 市场 5–10%（C3，证监会/招股说明书口径，但分母和分子的口径各方不同）\n- **Price maker**：Synopsys 和 Cadence 都有定价权——切换到竞争对手的成本远超涨价幅度，客户缺少实质谈判筹码。二者在不同细分市场互相是有限竞争（不是完全垄断），但对中国客户而言，在出口管制覆盖下连「切换」这个选项都不存在。",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | FY2023 年营收 | 毛利率 / 净利率 | 市值（约） | 来源 |\n|---|---|---|---|---|\n| **Synopsys**（SNPS）| 约 **58.4 亿美元**（FY2023，财年截至 2023-10）| 毛利率约 **80%**，净利率约 22%（C3，公开财报口径）| 约 **870 亿美元**（2023 年底，C3）| Synopsys FY2023 年报，10-K，EDGAR；具体数字【需回原文核，当前 C3 广知口径】|\n| **Cadence**（CDNS）| 约 **40.1 亿美元**（FY2023）| 毛利率约 **85%**，净利率约 26%（C3）| 约 **600 亿美元**（2023 年底，C3）| Cadence FY2023 年报，10-K，EDGAR；具体数字【需回原文核】|\n| **Siemens EDA**（Mentor）| 并入西门子数字工业，不单独披露；估算约 **15–20 亿美元/年**（C2，基于 Siemens AG 总营收拆分）| 未披露 | 非上市子公司 | 【缺口：Siemens AG 年报中 EDA 分部或西门子数字工业软件收入分拆，C2】|\n| **华大九天**（688711.SH）| 约 **5.5 亿人民币**（约 7700 万美元）（FY2023，C3，上交所 STAR 市场披露）| 毛利率约 **64–68%**（C3，招股说明书及 2023 年报）| 约 **220–250 亿人民币**（2024 年初，C3）| 华大九天年报/招股说明书，上交所；具体数字【需回原文核】|\n\n营收量级对比是这个节点最有价值的量化事实之一：华大九天 ~7700 万美元 vs. Synopsys ~58 亿美元——差距约 **75 倍**。这不只是营收差，是背后研发投入、人才规模、算法积累年限的差距的代理指标。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "两个方向：\n\n**EDA 工具费用占芯片设计成本的比重**：EDA 工具许可费通常占先进节点芯片设计总成本（含流片费、人力、IP 授权）的约 5–15%（C2 推算，不同节点和项目规模差异大）。但「占成本 10%」不代表重要性只有 10%——EDA 工具是「绕不开」的依赖，不是可以量少用的依赖。\n\n**断供速度**：EDA 许可断供后，已在进行的设计项目面临 0 天库存——许可到期即工具关闭。企业可以保留现有版本运行一段时间，但得不到更新、无法新授权、无法在新机器安装，最终会因到期而失效（通常 1–12 个月，取决于许可合同细节）。这和芯片材料「库存可撑 3–6 个月」完全不同。\n\n**华为/海思实证**：2019 年实体清单后，海思设计进程中断——不是「慢下来了」，是已经依赖 EDA 工具的新项目被卡住（C3，广泛媒体报道；海思 2023 年靠华为在 2019 前已流片设计的存货维持产品线，C3）。\n\n【缺口：EDA 许可费占芯片设计成本的精确比重——需具体流片项目的成本披露或半导体研究机构专项报告】",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "**中国芯片设计行业**：EDA 工具访问受限对中国先进芯片设计能力的影响是持续性的，难以单年量化，但有几个代理指标：\n- 华为海思 Kirin 最新量产版本停在 2020 年（Kirin 9000，实体清单前的最后一代正常设计）；2023 年推出的 Kirin 9000S 是在高度受限条件下完成的，据报道工具链存在「旧版本 + 变通方法」问题（C3，广泛报道，但细节缺权威来源）\n- 中国中高端手机芯片（5nm 以下）目前基本只有少数特例，整体上中国芯片设计向先进节点的推进受 EDA 管制制约（C3 结构判断）\n\n**全球 EDA 断供假设情境**：若三大 EDA 同时停供（非现实，仅假设），全球芯片设计活动停摆，12–24 个月后先进节点流片量断崖——这是 ac-euv 「停止交付新机台」级别的冲击，但影响速度更快（EDA 断供立刻生效，EUV 停止出货还有库存机台在继续生产）（C2 结构推算）。\n\n【缺口：中国 EDA 访问受限对中国半导体设计能力量化影响的系统评估——需 SIA/CSIS/美国战略与国际研究中心或 BIS 相关报告】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "EDA 行业的利润高度集中在 Synopsys 和 Cadence——80%+ 毛利率，净利率 20%+ 以上，这是纯软件业务+强定价权的结果。\n\n利润为何如此高：①工具开发是前期高研发投入，边际成本接近零；②客户迁移成本极高，竞争只在「赢得新设计项目」层面，而不是「抢现有客户」；③先进节点的设计成本不断上升，但 EDA 工具费用相对涨幅更小，意味着设计公司还有耐受空间（C2 推算）。\n\n政治压力传导路径：对中国市场的管制短期对 Synopsys 和 Cadence 有营收冲击（中国客户约占两家营收的 10–15%，C3，估算；含 IP 业务的具体比例各方口径不同），但美国政府和股东对此有明确的接受预期——管制是政策选择，不是市场失败，股价层面的压力有限（C3 判断）。\n\n---",
    "cLevels": [
     "C2",
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "Synopsys FY2023 营收约 58.4 亿美元",
    "level": "C3",
    "source": "公开财报，NASDAQ SNPS；具体数字需回 10-K 核"
   },
   {
    "item": "Cadence FY2023 营收约 40.1 亿美元",
    "level": "C3",
    "source": "公开财报，NASDAQ CDNS；具体数字需回 10-K 核"
   },
   {
    "item": "全球 EDA 市场约 120–150 亿美元（2023）",
    "level": "C3",
    "source": "行业估算，Gartner/IDC 口径"
   },
   {
    "item": "EDA CR3（三家合计）约 85–90%",
    "level": "C3",
    "source": "行业共识，多家分析机构口径"
   },
   {
    "item": "Siemens Calibre 在物理验证（DRC/LVS）近乎独占",
    "level": "C3",
    "source": "业界共识，具体份额数字缺"
   },
   {
    "item": "Synopsys PrimeTime 是时序签核事实标准",
    "level": "C3",
    "source": "业界共识"
   },
   {
    "item": "华大九天 FY2023 营收约 5.5 亿人民币",
    "level": "C3",
    "source": "STAR 市场年报披露"
   },
   {
    "item": "华大九天毛利率约 64–68%",
    "level": "C3",
    "source": "招股说明书及年报"
   },
   {
    "item": "2019-05-16 华为加入实体清单后 EDA 访问被切断",
    "level": "C3",
    "source": "广泛媒体报道 + EDA 公司官方表态，未回公司原始声明"
   },
   {
    "item": "2022-10-07 BIS IFR 收紧 EDA 先进节点管制",
    "level": "C3",
    "source": "IFR 广泛报道；EDA 具体 ECCN 条目缺"
   },
   {
    "item": "EDA 许可年续订制 = 管制无需追溯，续期拒绝即断",
    "level": "C3",
    "source": "行业共识，无单一原文；Synopsys/Cadence 许可合同细节未入库"
   },
   {
    "item": "中国先进节点（7nm 及以下）全流程 EDA 替代 = blocked",
    "level": "C3",
    "source": "业界共识，华大九天招股说明书有间接依据"
   },
   {
    "item": "华大九天与 Synopsys 营收差距约 75×",
    "level": "C3",
    "source": "两家 FY2023 营收推算，均 C3"
   },
   {
    "item": "EDA 对中国客户营收占比约 10–15%",
    "level": "C3",
    "source": "分析师估算，非官方披露"
   },
   {
    "item": "中国先进节点 EDA 自建前置期约 10 年以上",
    "level": "C2",
    "source": "业界口径，无权威报告"
   },
   {
    "item": "EDA 高毛利（约 80%）来自前期研发高投入、边际成本近零",
    "level": "C3",
    "source": "财报毛利率数字（Synopsys/Cadence，C3），机制属推算"
   }
  ],
  "contested": {
   "title": "2019-05 华为实体清单 → EDA 访问即时中断",
   "summary": "这是 EDA 节点历史上第一次被明确用作地缘政治武器，也是它从\"设计工具\"变成\"可激活的管制接口\"的时刻。"
  },
  "gaps": [
   "1. 【缺口：BIS 2022 IFR 中 EDA 工具管制的具体条款——需 BIS 2022-10-07 IFR 原文 ECCN 3D002 章节。这直接决定「2022 年起 GAAFET EDA 受管制」从 C3 广知口径升 C4 法律文本。】",
   "2. 【缺口：Synopsys FY2023 10-K 原文（SEC EDGAR）——核 FY2023 营收 $5,843.6M（或实际数字）、毛利率、中国地区营收占比。当前 C3 广知口径需升 C4。】",
   "3. 【缺口：Cadence FY2023 10-K 原文（SEC EDGAR）——核 FY2023 营收约 $4,006M、毛利率、中国地区营收。同上。】",
   "4. 【缺口：Siemens EDA 业务单独营收数字——Siemens AG 年报中数字工业软件或 EDA 分部数据。Siemens EDA 是第三极但财务不透明，C2 估算 15–20 亿美元/年。】",
   "5. 【缺口：Siemens Calibre 物理验证市占率数字——需 Gartner 或 SEMI EDA 专项报告。目前「近乎独占」停在 C3 共识，缺具体数字。】",
   "6. 【缺口：华大九天 FY2023 年报（688711.SH，上交所），核营收、毛利率、产品分布——升 C4 上市公司披露。】",
   "7. 【缺口：全球 EDA 市场规模精确数字（含 EDA 工具/IP/服务细分）——需 Gartner 或 IDC EDA 专项报告 2023 年数据。目前 C3 多口径估算。】",
   "8. 【缺口：华为/海思 EDA 访问切断的精确时间线和 EDA 公司官方声明——Synopsys、Cadence 公司声明原文，证实 2019-05 后的处理。当前 C3 广泛媒体报道。】\n---"
  ]
 },
 "ac-euv-lightsource": {
  "sourceFile": "ac-euv-lightsource.md",
  "archiveId": "ac-euv-lightsource",
  "established": "2026-06-17",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Cymer",
    "role": "EUV 光源系统集成 + 准分子激光",
    "scale": null,
    "jurisdiction": "圣地亚哥，美国加州 / 美国法域",
    "group": null
   },
   {
    "entity": "ASML",
    "role": "母公司，整机集成",
    "scale": null,
    "jurisdiction": "荷兰 Veldhoven / 荷兰法域",
    "group": null
   },
   {
    "entity": "Trumpf",
    "role": "CO2 驱动激光供给",
    "scale": null,
    "jurisdiction": "德国 Ditzingen / 德国法域",
    "group": null
   },
   {
    "entity": "Carl Zeiss SMT",
    "role": "光束传输/收集光学（与 ac-euv-optics 重叠）",
    "scale": null,
    "jurisdiction": "德国 Oberkochen / 德国法域",
    "group": null
   }
  ],
  "upstream": [
   "光源自己绕不开的东西，每一项都可能是再下一层的单点：",
   "**CO2 高功率驱动激光：Trumpf（德国）**。这是 LPP 架构里最关键的上游：要在每秒五万次的节奏下输出足够功率把锡液滴气化成等离子体，需要数十 kW 级、极高重复频率的 CO2 激光。这类激光的量产供给方极少，Trumpf 是公认的核心。子单点。【缺口：Trumpf 是否为 ASML EUV 唯一 CO2 激光来源、是否有第二来源，needs source。值得考虑单独建子节点 ac-euv-drivelaser】C2–C3 推算。",
   "**收集镜 / 光束传输光学：Zeiss（德国）**。与 ac-euv-optics 节点重叠，但光源腔内的收集镜是光源功能的一部分。极高镀膜与抗锡污染要求。子单点。【缺口：收集镜供给与寿命/再生周期 needs source】C2。",
   "**锡（Sn）供给与液滴发生器**：锡本身不稀缺（与 cm 栈关键矿产不同，这里不是矿产卡点），但**超高纯锡 + 精密液滴发生器**是工程壁垒。液滴发生器的稳定性（每秒五万次、定位精度）是 ASML/Cymer 自有 know-how。【缺口：液滴发生器是否外采 needs source】C2。",
   "**真空/腔体/控制电子**：常规但需高可靠性，非主要卡点。",
   "评估：父节点说 EUV 是「单点套单点」。光源层进一步证实：**光源这个子单点之下，又套着 Trumpf 的 CO2 激光这个孙单点**。FDP 规则触及 EUV 的真正物理理由之一，就在这条链上：光源在美国（Cymer），驱动激光在德国（Trumpf），任何一环停供，ASML 在荷兰也出不了光。"
  ],
  "downstream": [
   "**致命依赖：ASML 自己**。光源是 ASML EUV 整机的内嵌子系统，ASML 对 Cymer 的依赖是「自有子公司」式的：它把这个最关键的子单点直接买下来内化了（2013 收购的战略动机正在于此：把光源风险从供应商关系变成所有权控制）。",
   "**间接致命依赖**：所有买 ASML EUV 的晶圆厂（TSMC、Samsung、Intel 代工）→ 它们的先进制程产能上限被光源功率上限直接锁定。光源功率每提升一档，全行业先进制程的 wafers-per-hour 天花板就抬一档。",
   "依赖强度：致命，且是**产能弹性型**：不是有无问题，是快慢问题，而快慢直接关系到成本和收入。"
  ],
  "fallback": {
   "verdictZh": "仅在规划（已宣布）",
   "verdictRaw": "announced → planned",
   "unstructured": false,
   "text": "- **自由电子激光（FEL）光源替代 LPP**：fallback 等级 `announced → planned`。xLight（见父节点，CHIPS 终裁 $150m，落 Albany Nanotech NY）走的就是用 FEL 整体替换 LPP 架构的路线，理论上能突破 LPP 的功率/良率瓶颈。按 fallback 五问：\n  - 替代哪一层 = 光源整体架构（从 LPP 换成 FEL）；\n  - 多久接上 = 未知，原型/建设期；\n  - 卡在哪 = FEL 工程化 + 与 ASML 整机的接口集成 + 功率稳定性 + 量产良率；\n  - 谁有权启动 = CHIPS 资金 + 私营（xLight）；\n  - 现场能不能执行 = 无量产证据。\n  - 结论：`possible reroute under construction`，不是 fallback。而且它替代的是光源架构本身，等于另起炉灶，重建前期只会更长不会更短。\n- **第二家 LPP 光源供给方（Gigaphoton 路线）**：fallback 等级 `blocked / abandoned`。同架构第二供给本是最自然的 fallback，但 Gigaphoton 在 EUV 量产光源上未成功商业化（C2，受第 3 维缺口约束）。一个曾经存在、最终没能量产的替代尝试，不能记成现成 fallback。\n- **中国本土 EUV 光源**：fallback 等级 `blocked / planned`，无可量产证据。【缺口：进度 needs source，不推测】"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "EUV 光源不在公开市场单独销售，内嵌在 ASML 整机里，因此没有独立的外部市场规模。代理指标：\n\n- 收购估值：ASML 2013 年完成对 Cymer 的收购，交易价值约 25 亿欧元（C3，广泛报道；需回 ASML 2013 年并购公告原文核确切金额与结构，部分报道含现金+股票+债务承接的综合计算）\n- 内嵌成本推算：光源模块据行业估计约占 EUV 整机成本 15–25%（C2，无官方披露）；以每台约 1.5–2 亿欧元整机计，光源成本约 2000–5000 万欧元/台\n- Trumpf：德国私有公司，FY2022/2023 年总营收约 52 亿欧元（C3，需 Trumpf 官网/年报披露核）；CO2 激光 for EUV 占其营收具体比例【缺口：私有公司，细分业务不披露，C2 无法估算】\n\n【缺口：ASML 收购 Cymer 确切金额与交易结构，需 ASML 2012 年并购公告；Trumpf 年营收（FY2023），需 Trumpf 官方数据；光源模块占整机成本比例，需 ASML 成本结构披露或独立分析报告】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "两层嵌套单点，每层 CR1 近 100%：\n\n- 光源系统集成：CR1 ≈ 100%（Cymer/ASML，C2–C3，受 Gigaphoton 缺口约束）\n- CO2 驱动激光：Trumpf 主导，CR1 近似 100%（C2，待第二来源缺口验证）\n- 两个 CR1 叠加意味着：管制或事故只需打断任意一层，整个光源链即断",
    "cLevels": [
     "C2–C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 毛利率 | 市值 / 估值 | 来源 |\n|---|---|---|---|---|\n| Cymer（ASML 旗下）| 并入 ASML，不单独披露；收购前约 4–5 亿美元/年（C2 推算）| — | 并购约 25 亿欧元（2013，C3）| 需 ASML 2012 公告核 |\n| Trumpf | 约 52 亿欧元（FY2022/23，C3）| 私有，不披露 | 私有 | 需 Trumpf 官方资料 |\n| Gigaphoton（参照，未量产）| 约 500–600 亿日元（C2 推算，Komatsu 旗下）| — | — | 需 Komatsu 年报拆分 |\n\n【缺口：Cymer 被收购前最后一年（FY2012）公开年报营收，需 Cymer 历史 SEC 10-K 原文；Trumpf CO2 激光业务独立财务，私有公司，可能无法获取】",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 光源功率 → 晶圆吞吐量换算：量产 EUV 光源约 250W，对应约 100–170 片晶圆/小时（C2–C3，需 ASML SPIE 论文或技术披露核具体值）；ASML 路线图目标 500W+ 意味着同等机台数量、产能约翻倍\n- 停机成本代理：TSMC 一台 EUV 机停机一天，损失约 100–300 万美元晶圆产值（C2 推算，基于 TSMC 年产能 / 在役 EUV 机台数 / 利用率，需原始数据对齐）\n- 全球 EUV 在用机台数：约 150–200 台（2023 年底累计交付量，C2，需 ASML 年报历年 EUV 交付量累加）\n\n【缺口：ASML EUV 历年交付量累积，需 ASML 历年年报交付数据；光源功率对应吞吐量精确值，需 ASML SPIE 论文或技术白皮书】",
    "cLevels": [
     "C2–C3",
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "两种场景，性质根本不同：\n\n**场景 A：政治管制（对华）**\nEUV 整机对华从未交付，光源随整机一同已封锁，光源管制无增量，与父节点一致。\n\n**场景 B：非政治断供（工厂事故 / 自然灾害）**\n若 Cymer 圣地亚哥工厂或 Trumpf Ditzingen 工厂出现重大事故：ASML 无法交付新整机（备件库存窗口约数月，C2）→ 全球先进制程扩产停滞，不分敌友。冲击量级与父节点整机断供相同（参见 ac-euv Q5），但触发门槛远低于政治决策：一场工厂火灾即可触发，而政治管制有外交信号期。\n\n这是本节点区别于父节点最有分析价值的地方：政治管制是已知已做的；非政治性工业风险是被系统性低估的。\n\n【缺口：ASML/Cymer/Trumpf 的供应链弹性披露（是否有产能备份方案），需 ASML 年报风险章节或投资者日材料】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "光源作为 ASML 内部 BU（Cymer = 全资子公司）：利润并入 ASML 合并报表，ASML 约 51% 的整机毛利率里包含了光源内化后的利润。ASML 收购 Cymer 的战略动机之一正是把这个利润节点从外部供应商变成内部利润。\n\nTrumpf 作为外部独家供应商：对 ASML 有定价权，但「唯一客户是 ASML」意味着双方互相锁定：Trumpf 定价过高推动 ASML 找替代，过低则自损。实际采购价无公开信息（私有公司 + 商业机密）。\n\n政治压力传导：若美国对 Cymer 施压（因其美国法域），首先波及 ASML 内部 BU，最终影响 ASML 整机交付能力和营收。这是股东层面的压力点。压力途径是「ASML 整体业绩受影响」，而不是「某个独立第三方供应商受压」，行动路径比 JSR 那种准国有架构更透明也更快。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "Cymer 为 ASML EUV 光源供给方",
    "level": "C3",
    "source": "广知，未逐条回原文"
   },
   {
    "item": "ASML 2013 年收购 Cymer",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "Cymer 总部在美国圣地亚哥（光源主体落美国法域）",
    "level": "C3",
    "source": "广知"
   },
   {
    "item": "EUV 光源用 LPP 锡等离子体机制",
    "level": "C3",
    "source": "技术/行业共识"
   },
   {
    "item": "Trumpf 供 EUV 的 CO2 高功率驱动激光",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "光源功率（约 250W 量产→500W+ 目标）决定晶圆吞吐量",
    "level": "C2–C3",
    "source": "行业共识，确切瓦数需补"
   },
   {
    "item": "Cymer 为唯一量产级 EUV 光源供给方",
    "level": "C2",
    "source": "结构推算，受 Gigaphoton 缺口约束"
   },
   {
    "item": "Gigaphoton 未在 EUV 量产光源上商业化成功",
    "level": "C2",
    "source": "结构推算 + 无反证"
   },
   {
    "item": "锡液滴打靶约 5 万次/秒量级",
    "level": "C2",
    "source": "技术资料，确切值需补"
   },
   {
    "item": "重建 EUV 光源能力 lead time 十年级",
    "level": "C2",
    "source": "结构推导 + Gigaphoton 失败先例"
   },
   {
    "item": "因 Cymer 在美，美国对光源有独立于 FDP 的本土管辖",
    "level": "C2",
    "source": "法域结构推算"
   }
  ],
  "contested": {
   "title": "ASML 2012–2013 年收购 Cymer，把光源供给从外部供应商变成内部子公司，同时坐实美国对 EUV 的直接本土管辖",
   "summary": "回填日期：2026-07-08（该栏建立于 2026-06-27，本节点早于该日期建立）"
  },
  "gaps": [
   "1. 【缺口】Gigaphoton EUV LPP 光源的最终状态：是否进入过任何量产整机、项目是否已终止，需 Gigaphoton / Komatsu 公开资料 + SEMI 供应链报告原文。这是判定「第二量产级光源供给方是否存在」的核心证据，直接决定本节点是 C2 推算还是 C3/C4 verified 的单点。",
   "2. 【缺口】Trumpf 是否为 ASML EUV 唯一 CO2 驱动激光来源、是否有第二来源，需 ASML 年报 / Trumpf 资料原文。若唯一，应单独建子节点 **ac-euv-drivelaser**，因为它是「单点之下的孙单点」。",
   "3. 【缺口】EUV 光源功率的确切量产值与路线图（250W / 500W+ 的原始出处与对应吞吐量），需 ASML 技术披露 / SPIE 论文原文。这把「功率=产能上限」从行业共识升级为可引用数字。",
   "4. 【缺口】美国 EAR 是否有针对 EUV 光源 / CO2 驱动激光子系统的专项管制条目，还是一律并入整机许可，需 BIS EAR 原文。决定政治传动层「美国独立本土抓手」是否已被明确激活。",
   "5. 【缺口】ASML 收购 Cymer 的确切日期与金额、收购后整合结构，需 ASML 2012/2013 年公告与年报。补历史变迁与所有权控制账。",
   "6. 【缺口】收集镜锡污染再生周期与备件供给，需 ASML 服务资料。验证第 2 维「光源耗材性 + 服务即杠杆」的具体强度。"
  ]
 },
 "ac-euv-optics": {
  "sourceFile": "ac-euv-optics.md",
  "archiveId": "ac-euv-optics",
  "established": "2026-06-18",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Carl Zeiss SMT GmbH",
    "role": "EUV 投影光学系统集成 + Mo/Si 多层反射镜",
    "scale": null,
    "jurisdiction": "德国 Oberkochen / 德国法域",
    "group": null
   },
   {
    "entity": "Carl Zeiss AG",
    "role": "Zeiss SMT 母公司，持 75.1%",
    "scale": null,
    "jurisdiction": "德国 Oberkochen / 德国法域",
    "group": null
   },
   {
    "entity": "ASML",
    "role": "整机集成 + Zeiss SMT 24.9% 少数股东",
    "scale": null,
    "jurisdiction": "荷兰 Veldhoven / 荷兰法域",
    "group": null
   },
   {
    "entity": "Fraunhofer IOF / 研究所",
    "role": "共同研发反射镜镀膜",
    "scale": null,
    "jurisdiction": "德国 / 德国法域",
    "group": null
   },
   {
    "entity": "衬底供给方（见第 5 维）",
    "role": "近零膨胀玻璃/微晶玻璃毛坯",
    "scale": null,
    "jurisdiction": "美国 Corning / 德国 SCHOTT / 日本 Ohara",
    "group": null
   }
  ],
  "upstream": [
   "Zeiss EUV 光学自己绕不开的东西，每一项都可能是再下一层的单点：",
   "**近零热膨胀衬底毛坯**：EUV 镜片基板必须用超低膨胀材料（皮米级稳定的物理前提）。三个候选源：**Corning ULE®（美国）、SCHOTT Zerodur®（德国）、Ohara Clearceram®-Z（日本）**。这是个真实的子节点级依赖，且法域分散在美/德/日三国。【缺口：Zeiss EUV 镜实际用哪家衬底、是否单源，需 Zeiss/Corning/SCHOTT 资料原文。值得单独建子节点 ac-euv-optics-substrate】C2–C3 推算。",
   "**Mo/Si 多层镀膜工艺**：与 Fraunhofer（德国）联合研发的镀膜是核心 know-how。镀膜均匀性直接决定反射率。这部分主要内化在 Zeiss + Fraunhofer，非外采，但是工艺壁垒最厚的一环。C3。",
   "**超精密抛光与计量设备**：把镜面做到 <0.1nm RMS、并能测量验证到亚纳米，需要 Zeiss 自有或定制的抛光/计量装备。这是「能做」和「能测出来做对了」的双重壁垒——测不出来就没法迭代。【缺口：抛光/计量装备是否有外部单点供给 needs source】C2。",
   "**真空/机械结构/控制电子**：常规但需极高稳定性，非主要卡点。",
   "评估：父节点说 EUV 是「单点套单点」。光学层进一步证实——Zeiss 这个单点之下，衬底毛坯又套着美/德/日三源。和光源的「孙单点是 Trumpf CO2 激光」对应，光学的孙单点是衬底（Corning/SCHOTT/Ohara）。区别在于：衬底是三源而非独家，比 Trumpf 那条更不脆；真正的脆点在 Zeiss 自己的镀膜 + 抛光 know-how，那部分无第二家。"
  ],
  "downstream": [
   "**致命依赖：ASML 自己**。投影光学是 ASML EUV 整机的内嵌核心子系统。但和光源不同，ASML 没把它买断内化（只持 24.9%），而是靠长期独家供货 + 资本绑定 + 联合研发把 Zeiss 绑定在自己的供应体系里。这是一种「买不下来就深度绑定」的依赖管理。",
   "**间接致命依赖**：所有买 ASML EUV 的晶圆厂（TSMC、Samsung、Intel 代工）→ 它们能做的最小线宽被 Zeiss 光学的分辨率上限直接锁定。High-NA（0.55 NA）能不能量产，物理上取决于 Zeiss 的变形（anamorphic）镜组能不能造出来。",
   "依赖强度：致命，且是分辨率天花板型——光源决定产能快慢，光学决定线宽能做多细。两者卡的是 EUV 的不同物理维度。"
  ],
  "fallback": {
   "verdictZh": "路径受阻",
   "verdictRaw": "blocked",
   "unstructured": false,
   "text": "- **第二家 EUV 投影光学供给方**：fallback 等级 `blocked`。这是最自然的 fallback，但全球没有第二家在量产 EUV 投影光学。Nikon/Canon 在 EUV 整体退出，连带光学路线没成。按 fallback 五问：替代哪一层=投影光学；多久接上=无量产主体，十年级以上；卡在哪=镀膜+抛光+计量+装调全套 know-how；谁有权启动=无；现场能不能执行=无。结论：`blocked`，连 possible reroute 都谈不上。\n- **中国本土 EUV 投影光学**：fallback 等级 `blocked / planned`。中国在攻关超精密光学，但无可量产 EUV 投影镜组证据。【缺口：进度 needs source，不推测】C2。\n- **衬底层 fallback**：这一层反而有真实弹性——衬底有 Corning/SCHOTT/Ohara 三源，单一衬底厂断供，理论上可切换。fallback 等级 `partial`（切换需重新验证镜片工艺匹配，非即插即用）。但衬底不是这个节点的主卡点，所以三源弹性救不了 Zeiss 单点。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "EUV 投影光学市场 = Zeiss SMT 独占，市场规模的代理指标是 Zeiss SMT 的营收：\n\n- Zeiss SMT 2024 财年营收：约 €41 亿（C3，行业报道，需回 Carl Zeiss AG 年报核 SMT 分部确切数字）\n- Zeiss SMT 2016 营收：约 €12 亿（C3，对照基准，说明 8 年涨约 3.4 倍）\n- 注意：Zeiss SMT 营收不全是 EUV 光学——SMT 分部还含 DUV 光学、半导体计量/制程控制（Process Control Solutions）等。EUV 投影光学是其中增长最快的一块，但确切占比未单独披露。\n\n【缺口：Carl Zeiss AG 年报中 SMT 分部按业务线（光刻光学 vs 制程控制 vs DUV）的营收拆分，以及 EUV 投影光学单独口径，需 Carl Zeiss AG Annual Report】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- CR1 = 100%（EUV 投影光学，Zeiss 唯一量产主体，C2–C3）\n- Price maker：完全定价权，无第二供给方比价；但买方只有 ASML 一家，是双向锁定（Zeiss 也只有 ASML 一个 EUV 客户），所以定价是双边谈判而非单方面提价\n- HHI = 10000（理论垄断上限，EUV 投影光学口径）",
    "cLevels": [
     "C2–C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 毛利率/利润 | 市值/估值 | 来源 |\n|---|---|---|---|---|\n| Carl Zeiss SMT | 约 €41 亿（2024，全 SMT 分部）| 未单独公开 | 非上市（基金会所有）| C3，需 Carl Zeiss AG 年报核 |\n| Carl Zeiss AG（母）| 集团约 €100 亿量级（FY 估）| 未单独披露 SMT | 非上市 | C2，需年报核 |\n| ASML（24.9% 股东）| 见父节点 ac-euv（约 €276 亿，2023）| 约 51% 毛利 | 约 €2800–3500 亿 | C3 |\n\nZeiss SMT 作为基金会所有的非上市子公司，无市值、不单独披露毛利率/净利率。ASML 持有的 24.9% 股权带来持续分红，但具体金额未单独披露。\n\n【缺口：Zeiss SMT 分部毛利率/净利润；ASML 从 24.9% 股权获得的年度分红，需 Carl Zeiss AG 年报 + ASML 年报投资收益附注】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "两个方向：\n- **本节点对下游的收入敞口**：Zeiss SMT EUV 光学几乎 100% 卖给 ASML（单一客户）。这是供给方对单一买家的极端敞口——Zeiss EUV 光学营收完全取决于 ASML EUV 出货量。\n- **下游对本节点的产能敞口**：ASML 每台 EUV 整机都需要 Zeiss 投影镜组，无替代。若 Zeiss 停供新镜组，ASML EUV 新机交付立即停摆；在用机台的投影光学是固定资产，不像光源耗材会快速退化，所以存量机台可继续运行较久（光学断供影响的是扩产，不是立即停产）。这点和光源相反——光源断供（收集镜退化）影响运行，光学断供影响扩产。\n\n【缺口：Zeiss EUV 光学占 ASML EUV 整机成本（BOM）的比例，需 ASML 成本结构披露或行业拆解报告；在用 EUV 机台投影光学的维护/更换周期，需 ASML 服务资料】",
    "cLevels": []
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "投影光学是 EUV 整机的必要子系统，断它等于断全部 EUV，冲击量级与父节点 ac-euv 同量级：\n\n- BCG/SIA 2021 联合报告：全球先进半导体供应中断一年，下游电子产品产出损失约 4900 亿美元，全球 GDP 损失约 1–1.5 万亿美元（C3，需回《Strengthening the Global Semiconductor Supply Chain》原文）\n- 与光源/整机的差别：光学断供主要打先进制程扩产能力和 High-NA 路线图（存量机台能撑一段），所以短期冲击量级略低于「光源耗材断供导致存量停产」，但长期对算力产能天花板的冲击同量级\n\n【缺口：专门量化「EUV 投影光学/Zeiss 断供」对半导体扩产的分析——无专项报告，目前借父节点 BCG/SIA 数字推算 C2】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "EUV 价值链的利润主要沉淀在 ASML（整机集成商，约 51% 毛利）。Zeiss SMT 作为子系统供给方，利润率未公开，但作为唯一 EUV 投影光学供给方理论上有强定价地位——被单一客户（ASML）部分抵消。\n\n值得注意的资本流向：ASML 持 Zeiss SMT 24.9% 并持续收分红，意味着 ASML 不仅在整机层赚毛利，还通过股权从最关键子系统的利润里再分得一部分。这是一种纵向资本绑定——把供应商的利润部分变成自己的投资收益，降低被供应商反向议价的风险。\n\n政治压力首先落到哪：收紧对华 EUV 管制 → 冲击 ASML 对华营收 → 间接传导到 Zeiss SMT 的 EUV 光学订单。但因为 Zeiss 是德国基金会所有的非上市公司，资本市场压力传导路径比 ASML（上市）短得多、弱得多——没有股价、没有可被做空的股票、没有季度财报的市场反应。这让 Zeiss 这个节点对资本市场层面的政治施压相对免疫，施压只能走「德国政府出口管制」这条政治路径，走不了「资本市场惩罚」这条路径。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "Zeiss SMT 为 ASML EUV 投影光学供给方",
    "level": "C3",
    "source": "广知行业事实"
   },
   {
    "item": "ASML 2016 年收购 Zeiss SMT 24.9% 股权（€10 亿现金 + 约 €7.6 亿 R&D 支持）",
    "level": "C3",
    "source": "广泛报道 + ASML 公告"
   },
   {
    "item": "Zeiss AG 持 Zeiss SMT 75.1%，运营控制在德方",
    "level": "C3",
    "source": "股权结构推算 + 报道"
   },
   {
    "item": "Carl Zeiss AG 由 Carl Zeiss 基金会全资拥有、非上市",
    "level": "C3",
    "source": "广知"
   },
   {
    "item": "EUV 投影镜用 Mo/Si 多层反射镜（约 40–50 层，High-NA >100 层）",
    "level": "C3",
    "source": "技术/行业共识"
   },
   {
    "item": "镜面粗糙度 <0.1nm RMS、皮米级定位稳定",
    "level": "C3",
    "source": "Zeiss 公开技术资料"
   },
   {
    "item": "Zeiss SMT 2024 营收约 €41 亿（含全 SMT 分部，非纯 EUV 光学）",
    "level": "C3",
    "source": "行业报道"
   },
   {
    "item": "Zeiss 为全球唯一量产级 EUV 投影光学供给方",
    "level": "C2",
    "source": "结构推算，反证比光源更弱"
   },
   {
    "item": "EUV 投影光学衬底有 Corning/SCHOTT/Ohara 三源",
    "level": "C2–C3",
    "source": "材料技术共识，Zeiss 实际用哪家需补"
   },
   {
    "item": "重建 EUV 投影光学能力 lead time 十年级以上",
    "level": "C2",
    "source": "结构推导 + Nikon/Canon 退出先例"
   },
   {
    "item": "因 Zeiss 在德，德国对 EUV 光学有独立于荷/美的本土管辖",
    "level": "C2",
    "source": "法域结构推算"
   },
   {
    "item": "光学层无在建替代路线（区别于光源的 FEL/xLight）",
    "level": "C2",
    "source": "缺项观察"
   }
  ],
  "contested": {
   "title": "2024 年初 High-NA EUV 首台（Twinscan EXE:5000）交付 Intel → Zeiss 光学从\"跟随光刻机\"变成\"定义下一代节点上限\"",
   "summary": "2023 年底至 2024 年初，ASML 把第一台 High-NA EUV 光刻机分批运抵 Intel 俄勒冈厂并装机。这台机器的核心变化在光学：数值孔径从 0.33 提到 0.55，需要 Zeiss 全新设计的更大、更高精度的变形镜（anamorphic optics），单台光学系统体积和造价都大幅上升（整机报价约 3.5 亿欧元量级，光学占其中很大一块）。"
  },
  "gaps": [
   "1. 【缺口】确认全球确无第二家量产/在研 EUV 投影光学主体（含中国攻关进度），需 SEMI 供应链报告 + 行业调研原文。这是判定「光学单点比光源更硬」的核心证据，决定本节点 fallback 是 `blocked` 还是 `possible reroute`。",
   "2. 【缺口】Zeiss EUV 镜实际衬底供给方与是否单源（Corning ULE / SCHOTT Zerodur / Ohara Clearceram 中用哪家），需 Zeiss/Corning/SCHOTT 资料。若实际单源，应单独建子节点 ac-euv-optics-substrate，因为它是「单点之下的孙单点」且跨美/德/日法域。",
   "3. 【缺口】德国 BAFA 是否对 EUV 投影光学有专项出口管制条目、Zeiss 光学是否含触发美国 FDP 的美技术成分，需德国出口管制清单 + BIS EAR 原文。决定政治传动层「德国独立本土抓手」是否已被激活，以及这个抓手是否反被美国 FDP 覆盖。",
   "4. 【缺口】Carl Zeiss AG 年报中 SMT 分部按业务线（EUV 光刻光学 vs DUV vs 制程控制）的营收拆分，需 Carl Zeiss AG Annual Report。把「Zeiss SMT €41 亿」从分部口径精确到 EUV 投影光学口径。",
   "5. 【缺口】ASML 收购 Zeiss SMT 24.9% 的确切完成日、金额、后续分红与治理安排，需 ASML 2016 公告 / 6-K + 年报投资附注。补历史变迁与「财务参股 vs 运营控制」的精确边界。",
   "6. 【缺口】Zeiss EUV 光学占 ASML EUV 整机 BOM 的成本比例、在用机台投影光学维护周期，需 ASML 成本披露 / 行业拆解。验证 Q4 下游依赖度与「光学断供影响扩产而非立即停产」的判断强度。\n</content>\n</invoke>\n---"
  ]
 },
 "ac-euv-pellicle": {
  "sourceFile": "ac-euv-pellicle.md",
  "archiveId": "ac-euv-pellicle",
  "established": "2026-06-18",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "ASML",
    "role": "poly-Si pellicle 自研 + 制造",
    "scale": null,
    "jurisdiction": "荷兰 Veldhoven / 荷兰法域",
    "group": null
   },
   {
    "entity": "三井化学 Mitsui Chemicals",
    "role": "pellicle 制造（DUV 传统主导 + EUV 候选）",
    "scale": null,
    "jurisdiction": "日本 / 日本法域",
    "group": null
   },
   {
    "entity": "Canatu",
    "role": "CNT pellicle 路线",
    "scale": null,
    "jurisdiction": "芬兰 / 欧盟法域",
    "group": null
   },
   {
    "entity": "imec",
    "role": "EUV pellicle 研发平台",
    "scale": null,
    "jurisdiction": "比利时 / 欧盟法域",
    "group": null
   },
   {
    "entity": "S&S Tech / FST 等韩系",
    "role": "pellicle / 掩模耗材",
    "scale": null,
    "jurisdiction": "韩国 / 韩国法域",
    "group": null
   }
  ],
  "upstream": [
   "pellicle 自己绕不开的东西：",
   "**薄膜材料体系**：poly-Si 路线依赖超薄硅膜沉积与释放工艺；CNT 路线依赖高质量碳纳米管薄膜（Canatu/相关）。属工艺 know-how，不是某种稀缺矿产卡点。",
   "**装框 / 张膜工艺与边框**：把全尺寸（约 110×140mm 量级量产掩模面）freestanding 薄膜无缺陷地张到框上，是良率主战场。",
   "**检测设备**：pellicle 缺陷/透过率/均匀性检测。",
   "评估：pellicle 的上游没有出现光源 Trumpf 那种「孙单点」级硬卡点；它的难度集中在**自身的薄膜+装框良率**，而不是被某个独家上游掐住。这也是它比光源软的原因之一。"
  ],
  "downstream": [
   "**依赖方**：用 EUV 的先进逻辑/部分 DRAM 晶圆厂（TSMC、三星、Intel 代工）。",
   "**依赖强度：可缓冲 → 高（随节点推进上升）**。关键就在这里——早期可缓冲（不挂也能跑），但随着节点推进、掩模成本攀升、High-NA 引入、随机缺陷容忍度下降，pellicle 从「可选」往「实务上需要」迁移（C2–C3，趋势判断，具体各厂采用时点需核）。",
   "买家侧没有「断 pellicle 即停产」的致命依赖，但有「长期没有可靠 pellicle，掩模资产风险与检测停机成本上升」的慢性依赖。"
  ],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": "operational",
   "unstructured": false,
   "text": "- **退出路径：无 pellicle 运行**。fallback 等级 `operational`（这是少数真能打到 operational 的）。按五问：\n  - 替代哪一层 = 整个 pellicle 功能（用超洁净搬运 + 装载锁 + 频繁掩模检测替代）；\n  - 多久接上 = 即时，本来就是 EUV 量产初期的默认做法；\n  - 卡在哪 = 代价是更高的掩模缺陷风险和检测停机成本，先进节点处代价上升；\n  - 谁有权启动 = 晶圆厂自己的工艺选择；\n  - 现场能不能执行 = 能，已大规模执行过。\n  - 结论：这是真 fallback（少见地过了五问），但**它的有效性随节点先进度衰减**——越往 High-NA，越贵越难承受不挂的风险。\n- **换 pellicle 供给方 / 换材料路线（poly-Si ↔ CNT）**：fallback 等级 `partial → planned`。存在多条材料路线和多个候选厂，比光源/光学「只有一家」健康得多，但 CNT 量产成熟度仍需核（C2）。\n- 综合：pellicle 是本 EUV 家族里 **fallback 最不悲观的一个节点**——既有「不用」的 operational 退出，又有「多材料路线/多厂」的供给侧弹性。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "EUV pellicle 是「小但关键」的细分——市场金额量级远小于光源/光学/光刻胶。\n\n- 定性量级：EUV pellicle 全球市场大概率在**单位数到低双位数亿美元量级**（C2 推算，基于在役 EUV 机台约 150–200 台 + pellicle 单价高但用量小 + 相当比例曾不挂）。这远小于动辄数十亿的光刻胶或上百亿的整机市场。\n- 含 DUV 的整体光掩模 pellicle 市场历史上也只是几亿美元量级的细分（C2）。\n\n【缺口：EUV pellicle 专项市场规模（年营收，亿美元）——需 SEMI / TECHCET / Yole 专项报告原文。目前无可引用的硬数字，量级判断标 C2 不编精确值】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 供给侧高度集中：ASML poly-Si 自研主导 + 三井等少数候选，CR1 估计偏高（C2，无公开份额）。\n- 但「集中度高」在这里不等于「卡点硬」，因为存在 operational 退出路径（不挂）。price maker 实际上偏向 ASML（既是 pellicle 主供，又是整机方，定 pellicle 规格的一方）。\n- 【缺口：CR1/CR4 数值——无公开份额数据，需专项报告】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 该业务年营收 | 毛利率 | 市值/估值 | 来源 |\n|---|---|---|---|---|\n| ASML | pellicle 并入整机/服务，不单独披露 | — | ASML 市值数千亿欧元级 | 整机财务见 ac-euv |\n| 三井化学 | 集团营收约 1.7–1.8 万亿日元级（C2 需核）；pellicle 仅其极小细分，不单独披露 | — | 上市（东证）| 需三井化学年报核 |\n| Canatu | 私有，规模小，CNT 应用公司 | — | 私有 | 需公司资料 |\n\n【缺口：三井化学 pellicle 细分营收——不单独披露；Canatu 财务——私有公司。pellicle 资本纵深判断只能定性：玩家要么是巨头里的小业务（ASML/三井，纵深充足但 pellicle 非命脉），要么是小型专业公司（Canatu，纵深薄但路线前沿）】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 成本占比：单片 EUV pellicle 单价高（高技术含量小批量），但占晶圆厂总成本比例**很小**（耗材级）。它对下游的财务敞口低。\n- 产能敞口（反向）：若完全无 pellicle 可用，下游不会立即停产（可走无 pellicle 工艺），但**掩模缺陷导致的报废风险与检测停机成本上升**——一片先进 EUV 掩模价值可达数十万至上百万美元（C2，需核），一次颗粒污染批量报废的代价就是 pellicle 价值的成百上千倍。这才是 pellicle 的真实经济意义：它是给昂贵掩模资产买的「保险」，不是产线的氧气。\n- 【缺口：先进 EUV 掩模单价、无 pellicle 运行的实际掩模报废率/检测停机成本——需晶圆厂或 SEMI 数据】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **作为管制杠杆：冲击量级低**。单独管制 pellicle 几乎无意义——没有 EUV 整机的地方用不上 pellicle；有整机的盟友自己能做或不挂。它不构成独立的断供冲击源。\n- **作为工业可靠性变量：冲击量级中等且随节点上升**。若高功率/High-NA 时代始终做不出可靠 pellicle，则要么牺牲产能裕度，要么承受掩模报废与停机风险——这是产能效率和良率层面的慢性损耗，不是整机断供那种急性停摆。\n- 量级判断：远小于光源/光学/整机断供（那些是急性、全行业、不分敌友的产能停摆）；pellicle 更像「边际效率税」。（C2 推算）",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "- ASML 把 pellicle 相当程度内化（poly-Si 自研），利润并入 ASML，逻辑同它收编 Cymer：把关键耗材风险握在自己手里。\n- 三井等外部供给方对 ASML/晶圆厂有一定议价空间，但因为「下游可不用 + 多路线竞争」，定价权远弱于光源（Trumpf 对 ASML 的独家锁定）或光刻胶寡头。\n- 政治压力传导：pellicle 几乎不是政治压力的有效着力点——价值小、可绕过、法域分散。压力会优先打向光源、光学、光刻胶那些「不可绕过」的节点，而不是 pellicle。这恰是把它和兄弟节点区分开的判断：**同在 EUV 家族，pellicle 是其中政治杠杆价值最低的一环**。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "pellicle 功能=挡颗粒保护掩模、不参与成像",
    "level": "C3",
    "source": "行业共识"
   },
   {
    "item": "EUV pellicle 需高 EUV 透过率（约 88%→90%+），双程损耗换算为吞吐量损失",
    "level": "C3",
    "source": "行业共识"
   },
   {
    "item": "EUV 量产初期晶圆厂普遍不挂 pellicle 运行",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "ASML 自研 poly-Si pellicle 并相当程度内化制造",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "三井化学为主要外部 pellicle 候选（DUV 传统主导）",
    "level": "C2–C3",
    "source": "行业共识"
   },
   {
    "item": "CNT pellicle（Canatu/imec/三井）为下一代高透过/耐高功率路线",
    "level": "C2–C3",
    "source": "报道"
   },
   {
    "item": "pellicle 是条件性软卡点，可绕过性随节点先进度衰减",
    "level": "C2",
    "source": "结构推算 + 无挂运行先例"
   },
   {
    "item": "EUV pellicle 市场为单位数到低双位数亿美元量级",
    "level": "C2",
    "source": "结构推算"
   },
   {
    "item": "pellicle 政治杠杆价值为 EUV 家族最低",
    "level": "C2",
    "source": "结构推算（可绕过+法域分散+价值小）"
   },
   {
    "item": "pellicle 良率/产能历史上是主要工程瓶颈",
    "level": "C2",
    "source": "行业说法"
   },
   {
    "item": "先进 EUV 掩模单价达数十万–上百万美元",
    "level": "C2",
    "source": "行业量级"
   }
  ],
  "contested": null,
  "gaps": [
   "1. 【缺口】各晶圆厂（TSMC / 三星 / Intel）对 EUV pellicle 的采用时点与当前采用比例，以及 High-NA 是否把 pellicle 推向必需——需 SEMI / 各厂技术披露 / SPIE 论文原文。这是判定「条件性软卡点」当前位于「可选 ↔ 必需」哪一段的核心证据，直接决定本节点卡点强度。",
   "2. 【缺口】EUV pellicle 专项市场规模（年营收，亿美元）与按主体份额——需 SEMI / TECHCET / Yole 专项报告。目前 Q1/Q2 全是 C2 量级推算，无可引用硬数字。",
   "3. 【缺口】EUV pellicle 当前良率 / 月产能是否仍是瓶颈、poly-Si 与 CNT 路线的量产成熟度对比——需 ASML 技术披露 / SEMI 报告原文。决定第 7/8 维 fallback 与重建壁垒的真实度。",
   "4. 【缺口】pellicle EUV 透过率目标与实测值、寿命（氢刻蚀/热失效更换周期）——需 ASML / imec SPIE 论文。把「透过率=吞吐量损耗」从定性升级为可引用数字。",
   "5. 【缺口】先进 EUV 掩模单价与无 pellicle 运行的实际掩模报废率/检测停机成本——需晶圆厂或 SEMI 数据。对齐 Q4「pellicle 是掩模保险」的经济量级。",
   "6. 【缺口】是否存在任何针对 pellicle/掩模耗材的专项出口管制条目——需 BIS EAR / 荷兰公告原文核（预期为无，但需证实政治传动层「pellicle 无独立管制接口」的判断）。"
  ]
 },
 "ac-euv-photoresist": {
  "sourceFile": "ac-euv-photoresist.md",
  "archiveId": "ac-euv-photoresist",
  "established": "2026-06-17",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "JSR",
    "role": null,
    "scale": null,
    "jurisdiction": "总部：东京，日本 · 法域：日本法域 + JIC Capital（国家支持）",
    "group": null
   },
   {
    "entity": "TOK",
    "role": null,
    "scale": null,
    "jurisdiction": "总部：东京，日本 · 法域：日本法域",
    "group": null
   },
   {
    "entity": "Shin-Etsu Chemical",
    "role": null,
    "scale": null,
    "jurisdiction": "总部：东京，日本 · 法域：日本法域",
    "group": null
   },
   {
    "entity": "Fujifilm",
    "role": null,
    "scale": null,
    "jurisdiction": "总部：东京，日本 · 法域：日本法域",
    "group": null
   },
   {
    "entity": "Inpria（JSR 旗下）",
    "role": null,
    "scale": null,
    "jurisdiction": "总部：科瓦利斯，美国俄勒冈 · 法域：美国法域（母公司日本）",
    "group": null
   }
  ],
  "upstream": [
   "光刻胶本身的上游是精细化工原料，包括：",
   "**光酸产生剂（PAG）**：化学放大型光刻胶的核心功能组分，少数专业化工公司供给。【缺口：PAG 供给方名单 + 法域分布 needs source】",
   "**光敏聚合物**：高纯度、精确分子量控制，专业合成能力壁垒高。【缺口：供给方 needs source】",
   "**超高纯溶剂**：半导体级纯度，比光伏/工业级高几个量级。【缺口：供给方法域 needs source】",
   "这一层的缺口会影响卡点判断：如果 PAG 或聚合物有非日本单点，整体法域风险图就要更新。暂标推算，不进现状判断。"
  ],
  "downstream": [
   "直接下游是 EUV 产线晶圆厂：TSMC、Samsung、英特尔（代工计划中）。没有持续稳定的 EUV 光刻胶供给，产线无法运行——每个晶圆层都在消耗胶。依赖性质：**致命 + 持续耗材型**，比设备的依赖在时间维度上更敏感。",
   "被切断方：任何无法从上述供给链拿到 EUV 胶的产线。目前无公开信息显示中国晶圆厂在 EUV 胶上有专门的管制封锁——但因为中国没有量产 EUV 整机，EUV 胶需求本身不存在，所以这个切断点尚未被激活。【缺口：EUV 胶对华出口是否有专门管制条款，needs source】"
  ],
  "fallback": {
   "verdictZh": "仅在规划（早期导入）",
   "verdictRaw": "planned → early adoption",
   "unstructured": false,
   "text": "- **化学放大型 CAR → 金属氧化物路径（Inpria 系）**：fallback 等级 `planned → early adoption`。技术路径切换中，需要晶圆厂端重新集成，不是即插即用。优点是 EUV 光子吸收更好；缺点是工艺集成难度、清洗流程、工具兼容性有待成熟。结论：`possible reroute under development`。\n- **非日本替代来源**：目前无公开证据显示欧美有等效 EUV 胶量产能力。美国 DOE 有过扶持半导体材料本土化的政策信号，但 EUV 胶是否在重点项目里 needs source。结论：`announced at policy level, unverified at execution level`。\n- **中国本土光刻胶**：DUV 光刻胶有本土化进展（据报道），EUV 级光刻胶本土进展几乎没有公开证据——因为没有 EUV 整机，也就没有量产调试验证路径。结论：`blocked by equipment gap`。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "EUV 光刻胶是绝对体量小但战略价值远超市值的细分市场：\n\n- 全球 EUV 光刻胶市场：约 5–15 亿美元（2023 年，C2 推算；需 Techcet Chemical Research 或 SEMI 材料市场报告原文）\n- 日本光刻胶整体市场（含 DUV/KrF/ArF）：约 40–60 亿美元量级（C2 推算）\n- 参照系：EUV 胶市场规模约为 ASML 整机市场的 1/10 至 1/100，但断供会比整机断供更快让产线停摆（耗材 vs 设备）\n\n【缺口：EUV 光刻胶专项市场规模——需 Techcet《CMP/光刻胶年度供应链报告》或 SEMI 年度材料市场报告】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- CR4（JSR + TOK + Shin-Etsu + Fujifilm）：估计 ≥ 90%，且全部日本法域（C2，需市场报告原文核具体份额）\n- Price maker：供给端（日本寡头）有定价权；下游晶圆厂无实质替代，买方议价能力弱\n- HHI：无原文，结构上接近寡头垄断（推算约 2000–4000），C2\n\n【缺口：日本四家 EUV 胶厂商市场份额数据——需 SEMI/Techcet 市场报告原文】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收（参考） | 毛利率 | 市值 / 估值 | 来源 |\n|---|---|---|---|---|\n| JSR | 约 3800 亿日元（~26 亿美元，FY2022）| C2 | 私有化（JIC Capital，约 9170 亿日元，C3）| 需回 JIC Capital 收购公告核 |\n| TOK（东京应化）| 约 1900 亿日元（FY2023）| C2 | 上市（东证）| 需回 TOK 2023 年报 |\n| Shin-Etsu Chemical | 约 2.1 万亿日元总营收（FY2023）| 约 40%（综合，C3）| 约 8 万亿日元市值（C3）| 需拆分光刻胶业务占比，C2 |\n| Inpria（JSR 旗下）| 私有，不披露 | — | JSR 2021 年收购约 5100 万美元（C3）| 需回收购公告原文核 |\n\n【缺口：各家 EUV 光刻胶业务独立营收（非公司整体）——需年报产品线拆分；Shin-Etsu 光刻胶业务占公司总营收比——C2 无原文】",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 光刻胶是耗材，每个晶圆层曝光消耗一次；晶圆厂通常维持 1–3 个月库存（C2，需晶圆厂供货合同原文或行业调研）\n- 光刻胶占晶圆制造总成本约 1–3%（C2 推算，需晶圆厂成本结构数据）——体量小但缺一不可\n- 断供影响速度 vs 整机：光刻胶断供约 30–90 天后产线面临停机（库存耗尽型）；整机断供是扩产停滞（现有产线仍能运转较长时间）。光刻胶管制在时间压力上比整机管制更急\n\n【缺口：TSMC/Samsung 光刻胶安全库存政策与供货合同周期——需公司披露或供应链行业调研】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "日本 2019 年对韩限制（氟化氢 + 光刻胶 + 氟化聚酰亚胺）是已有先例，提供了量级参考：\n\n- 2019 年日本限制后，韩国半导体厂商 Samsung/SK Hynix 启动紧急去日本化材料计划，对短期良率和产线有影响，但未触发彻底停线（因为有备货 + 快速替代方案搜索）（C4，已有公开记录）\n- 若日本对 TSMC 启动类似管制（针对 EUV 胶而非 DUV 胶），且没有 2019 年对韩那种外交协商空间：TSMC 先进产线 1–3 个月内面临停机压力；量级代理：TSMC 先进节点每月营收约 30–40 亿美元（C2 推算，需 TSMC 2023 年报产品线拆分）\n\n【缺口：专项「EUV 光刻胶供应中断」对晶圆厂产能影响的量化分析——SEMI/BCG/麦肯锡相关材料安全报告】",
    "cLevels": [
     "C4",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "精细化学品毛利率约 30–50%（日本电子化学品行业参考，C2）；EUV 胶因极小批量高规格，实际利润率可能更高，但无原文可核。\n\n价值链利润分布：日本化学品厂商（JSR/TOK 等）拿精细化工利润 → 晶圆厂（TSMC 等）是买方，但无替代只能接受定价，转嫁给芯片设计公司（NVIDIA 等）的代工费。\n\nJSR 私有化改变了利润的「政治主权」：从上市公司股东利润 → JIC Capital（日本政府支持）可干预的准国有利润。政治压力首先打到日本政府/JIC Capital 的决策层，而不是资本市场。这是比「ASML 受股东压力」更难施压的靶点——上市公司股价下跌会触发股东游说，准国有企业的压力传导路径完全不同。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "EUV 光刻胶市场高度日本集中",
    "level": "C3",
    "source": "行业共识"
   },
   {
    "item": "JSR / TOK / Shin-Etsu / Fujifilm 是主要 EUV 胶供给方",
    "level": "C3",
    "source": "行业共识"
   },
   {
    "item": "具体份额分解（各厂商占比）",
    "level": "C2",
    "source": "无原文"
   },
   {
    "item": "JSR 2023 年由 JIC Capital 私有化",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "Inpria 2021 年被 JSR 收购",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "EUV 光刻胶 RLS trilemma 技术约束",
    "level": "C3",
    "source": "学界/产业共识"
   },
   {
    "item": "日本 2019 年对韩光刻胶等出口限制作为先例",
    "level": "C4",
    "source": "已有公开政策记录"
   },
   {
    "item": "中国 EUV 光刻胶量产无证据",
    "level": "C3",
    "source": "结构推论 + 无反证"
   },
   {
    "item": "EUV 胶当前无对华专项出口管制",
    "level": "C2",
    "source": "无原文"
   }
  ],
  "contested": {
   "title": "JSR Corporation 私有化（2023-07-04 公告 → 2024 年完成，JIC Capital / 日本产业竞争力机构）",
   "summary": "这是一场以**所有权控制**替代**出口禁令**的国家战略操作，照出了日本如何把私营战略资产纳入政府可干预的架构，而不用对外宣布任何\"出口限制\"。"
  },
  "gaps": [
   "1. 【缺口】EUV 光刻胶各厂商市场份额分解：需 SEMI 市场数据、Techcet 或专业光刻胶市场研究报告——这决定「寡头集群」内部的集中度是接近单点还是分散竞争。",
   "2. 【缺口】JSR 私有化具体条款：JIC Capital 股权结构、出口决策权是否实质国有化——这决定政治传动层的状态流转是否已改变。",
   "3. 【缺口】日本对 EUV 光刻胶出口的现行法规与管制条款：是否有专项条文，还是目前处 METI 通用出口管制下——需日本 METI 出口许可原文。",
   "4. 【缺口】PAG 等光刻胶上游化学原料的供给方与法域：如果 PAG 有非日本单点，整体卡点图要更新。",
   "5. 【缺口】Inpria 金属氧化物路径在晶圆厂量产采用进展：是否已有量产案例——决定「possible reroute under development」何时可能升级为 operational。"
  ]
 },
 "ac-euv": {
  "sourceFile": "ac-euv.md",
  "archiveId": "ac-euv",
  "established": "2026-06-17",
  "updated": null,
  "cLevelOverall": "C3",
  "sketch": false,
  "opening": null,
  "holders": [],
  "upstream": [
   "EUV「不是一个点，是一串点」。以下子依赖结构上成立，但**份额与产地集中度我手上没有原文，全部标 C2 / 需补，不当 verified**：",
   "**光源**：Cymer（美国，ASML 2013 年收购）——EUV 光源（LPP，锡等离子体）。子单点。【缺口：需回 ASML 年报 / Cymer 资料核「是否仍为唯一 EUV 光源来源」】C2 推算。",
   "**光学系统**：Carl Zeiss SMT（德国，ASML 持股）——EUV 反射光学/镜组。公认极高壁垒、近乎单点。【缺口：需原文核独家性与 ASML 持股比例】C2 推算。",
   "**光刻胶**：日本高度集中（JSR / 东京应化 TOK / 信越 Shin-Etsu / 富士胶片 一类）。【缺口：EUV 光刻胶份额按厂商分解，needs source】C2 推算。",
   "**掩模空白 / 基板**：Hoya / AGC 一类（日本）。【缺口：份额 needs source】C2 推算。",
   "**EUV pellicle（保护膜）**：长期是良率与产能瓶颈之一。【缺口：当前供给方与产能，needs source】C2 推算。",
   "评估：EUV 的脆弱性不止「ASML 单点」，而是**单点之下还套着光源、光学、光刻胶、pellicle 几个各自接近单点的子层**。任何一个子层断，整机也交付不了。这是比 atlas 现在画的「ac-euv 一个节点」深一层的真相。"
  ],
  "downstream": [
   "致命依赖：TSMC（台）、Samsung（韩）的先进制程产线。没有 EUV 持续供给与服务，先进逻辑/最先进存储扩产停摆。证据级：source-linked（TSMC/Samsung 为先进代工是 verified；EUV 为其先进节点必需是行业共识，原始产能映射 needs source）。",
   "高度依赖：所有买 TSMC/Samsung 先进产能的 fabless（NVIDIA 等）间接吊在这条上。",
   "被切断方：中国先进逻辑产能——EUV 整机从未对华交付。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "- **多重曝光 DUV**：fallback 等级 `partial`。能做部分先进节点，但成本、良率、产能差几个量级，不可大规模经济替代最先进节点。\n- **xLight 自由电子激光（FEL）光源**：fallback 等级 `announced→planned`。CHIPS 终裁 $150m，落 Albany Nanotech（NY），目标绕开 EUV 的功率/良率瓶颈（verified 终裁）。但这是**光源**层的替代尝试，不是整机替代，且仍在原型/建设阶段。按 fallback 五问：替代哪一层=光源；多久接上=未知，原型期；卡在哪=工程化与整机集成；谁有权启动=CHIPS + 私营；现场能不能执行=还没有量产证据。结论：`possible reroute under construction`，不是 fallback。\n- **中国本土 EUV**：fallback 等级 `blocked / planned`，无可量产证据。【缺口：进度 needs source，不推测】"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "EUV 整机市场 = ASML 独占，市场规模的代理指标是 ASML 的 EUV 系统营收：\n\n- ASML 2023 年总营收：约 276 亿欧元（C3，需回 ASML 2023 年报核）\n- ASML 2023 年 EUV 系统营收：约 105–120 亿欧元（2023 年交付约 53 台 EUV，C2 推算，需 ASML 年报按 EUV/DUV/服务拆分核）\n- 单台 NXE 系列 EUV 售价约 1.5–2 亿欧元（C2，无官方公开报价，来自行业报道推算；ASML 不单独披露每台报价）\n\n【缺口：ASML 年报产品线营收精确拆分（EUV 系统 vs DUV 系统 vs 服务）——需 ASML 2023 Annual Report】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- CR1 = 100%：ASML 唯一可量产 EUV 整机商（C4，公开事实）\n- Price maker：完全定价权，无第二供给方可比价\n- HHI = 10000（完全垄断理论上限）",
    "cLevels": [
     "C4"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 毛利率 | 市值 | 来源 |\n|---|---|---|---|---|\n| ASML | 约 276 亿欧元（2023）| 约 51.3%（2023）| 约 2800–3500 亿欧元（2024 波动范围）| C3，需 ASML 2023 年报核 |\n\nCymer（光源子公司）、Zeiss SMT（光学，ASML 持股约 25%）财务未单独公开披露，无法独立列出。\n\n【缺口：ASML 2023 净利润（年报）；ASML 持有 Carl Zeiss SMT 具体股比——需 ASML 2023 Annual Report + Carl Zeiss AG 年报】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- TSMC 先进节点（5nm 以下）约占 TSMC 2023 年总营收约 35%（C2，TSMC 年报披露制程节点营收分布，需原文核）；Samsung 先进节点比例更低（C2）。这些节点的运营依赖现有 EUV 在用机台；扩产依赖新机台交付。\n- 在用机台库存窗口：若 ASML 同时断新机台+服务与备件，估计在用机台约 1–3 年内逐步退化（C2，具体服务合同可中断条款 needs source）。停止新机台交付影响更快——TSMC/Samsung/Intel 1–3 年扩产计划立即搁置。\n\n【缺口：TSMC 先进节点（5nm 以下）占总营收精确比——需 TSMC 2023 年报技术节点营收拆分；EUV 服务合同可中断条款——需 ASML 服务协议原文】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- BCG/SIA 2021 联合报告估算：全球先进半导体供应中断一年，下游电子产品产出损失约 4900 亿美元，全球 GDP 损失约 1–1.5 万亿美元（C3，需回《Strengthening the Global Semiconductor Supply Chain》原文核具体数字与方法论）\n- 量级代理：NVIDIA 数据中心收入 2024 财年约 475 亿美元（C4，NVIDIA 财报），生产全部依赖 TSMC 台湾 5nm/4nm EUV 产线——若先进产线停产即全数归零\n\n【缺口：专门量化「EUV 设备中断」对半导体产能冲击的分析——BCG/SIA 原报告（2021）完整数字与方法论】",
    "cLevels": [
     "C3",
     "C4"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "ASML 毛利率约 51% 在工业设备里极为罕见，接近软件平台水平，体现的是技术垄断定价，不是制造利润。每卖 2 亿欧元整机，约 1 亿欧元是毛利。\n\n价值链利润分布：ASML 拿大头（整机集成商） → Zeiss/Cymer（子公司/持股方，利润并入 ASML 或受采购价控制）→ Trumpf（外部独家供应商，有定价权但只有 ASML 一个客户，双方互相锁定）。\n\n政治压力首先打到哪：收紧对华 EUV/DUV 管制 → 直接打 ASML 对华营收（ASML 2022 年对华营收约 22+ 亿欧元，C3，需年报核；2023 年下降明显）→ 传导至 ASML 资本市场估值 → 股东压力影响 ASML 对荷兰政府政策的游说方向。\n\n---",
    "cLevels": [
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "ASML 是唯一可量产 EUV 整机商",
    "level": "C4",
    "source": "公开公司事实"
   },
   {
    "item": "EUV 子层（光源/光学/光刻胶/pellicle）各自接近单点",
    "level": "C2",
    "source": "行业共识，无原文份额"
   },
   {
    "item": "Cymer 为 ASML 旗下 EUV 光源",
    "level": "C3",
    "source": "广知，未回原文"
   },
   {
    "item": "Zeiss 为 EUV 光学近乎独家",
    "level": "C2",
    "source": "行业共识"
   },
   {
    "item": "EUV 光刻胶日本高度集中",
    "level": "C2",
    "source": "行业共识"
   },
   {
    "item": "xLight FEL 获 CHIPS 终裁 $150m，落 Albany",
    "level": "C4",
    "source": "NIST 终裁"
   },
   {
    "item": "重建 EUV 能力 lead time 十年级",
    "level": "C2",
    "source": "结构推导"
   },
   {
    "item": "ASML 对华 EUV 从未交付",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "DUV 对华 2023 起加码管制",
    "level": "C3",
    "source": "广泛报道"
   }
  ],
  "contested": {
   "title": "荷兰对华 DUV 浸没式光刻机出口许可收紧（2023-01 宣布 → 2023-09-01 生效）",
   "summary": "这是 ac-euv 节点被显式政治化并主动激活的最近一次事件。EUV 对华封锁从 2019 年起就以许可证\"不续签\"的方式静默运行；2023 年的新动作是把更先进的 DUV 浸没式机台（NXT:2050i 和 NXT:1980Di）也纳入许可审查，把\"节点控制范围\"向下一层扩展。五个阅读动作："
  },
  "gaps": [
   "1. 【缺口】EUV 子层份额分解（光源/光学/光刻胶/pellicle 按厂商）：需 ASML 年报 + SEMI / 行业供应链报告原文——这是把「ASML 单点」深化成「单点套单点」的关键证据。",
   "2. 【缺口】荷兰对华 EUV/DUV 出口许可逐条与生效日：需荷兰政府公告 + BIS 原文——补许可账状态流转。",
   "3. 【缺口】EUV 服务/更新合同可中断条款：needs source——验证第 2 维「服务即杠杆」是否成立。",
   "4. 【缺口】xLight FEL 工程化里程碑与时间表：需 CHIPS 后续文书——判建设债何时可能变 fallback。",
   "5. 【缺口】TSMC/Samsung 先进产能对 EUV 的逐线依赖映射：需公司披露——量化下游致命依赖。\n---"
  ]
 },
 "ac-export": {
  "sourceFile": "ac-exportctrl.md",
  "archiveId": "ac-exportctrl",
  "established": "2026-06-28",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "BIS（美国商务部工业和安全局）",
    "role": "规则制定 + 许可证审批 + 执法（刑事转介）",
    "scale": null,
    "jurisdiction": "美国联邦政府，直接管辖",
    "group": null
   },
   {
    "entity": "NVIDIA",
    "role": "主要受控芯片设计方 + 合规义务承担者",
    "scale": null,
    "jurisdiction": "美国加州，美国法域直接管辖",
    "group": null
   },
   {
    "entity": "AMD",
    "role": "次要受控芯片设计方（MI300X 等）",
    "scale": null,
    "jurisdiction": "美国加州，美国法域直接管辖",
    "group": null
   },
   {
    "entity": "TSMC / Samsung / 晶圆厂",
    "role": "OSAT Note 1 义务方（举证责任）",
    "scale": null,
    "jurisdiction": "台湾 / 韩国，通过 FDPR 覆盖（含美国技术）",
    "group": null
   },
   {
    "entity": "云提供商（AWS / Azure / GCP）",
    "role": "IaaS 层执行方（BIS 政策声明 2025-05-13）",
    "scale": null,
    "jurisdiction": "美国，直接法域，承担 KYC 义务",
    "group": null
   },
   {
    "entity": "荷兰 ASML + 日本 METI",
    "role": "设备层补充管制，不直接管芯片出口",
    "scale": null,
    "jurisdiction": "荷兰 / 日本法域，协调而非直接管辖",
    "group": null
   }
  ],
  "upstream": [
   "管制制度本身依赖以下几类基础：",
   "**ps-exportctrl**（出口管制通用框架）：EAR（出口管理条例）、实体清单、国别组 D:5 的定义都来自这个母框架。ac-exportctrl 是 ps-exportctrl 对 AI 芯片的实例化，本身不创建新框架。",
   "**ac-eda**（EDA 工具）：EDA 是出口管制的最早切入点（2019 年华为实体清单），且 EDA 工具的 ECCN 编号（ECCN 3D002）与 3A090 独立运行——先进芯片设计环节和芯片本身出口都可分别管制，两套管制叠加效果强于任何一套单独运作。",
   "**ac-fab**（晶圆代工）：OSAT Note 1 把合规义务压入代工层，代工层是管制执行的最前沿。TSMC 无法对被明确列为受控的设计\"装聋作哑\"。"
  ],
  "downstream": [
   "**中国 AI 企业**：字节跳动、百度、阿里达摩院、腾讯、华为（训练侧）对先进 GPU 的依赖被管制切断——这是管制的政治目标，不是副作用。依赖强度：高（国内替代存在但有显著性能差距，`partial fallback`）。",
   "**全球非 D:5 AI 企业**：正常渠道可取货，不受 D:5 限制。但这也意味着 Tier 2 国家（印度、UAE 等）在 Biden IFR 被撤后重新开放，管制只精确打 D:5。",
   "**NVIDIA 本身**：管制直接影响 NVIDIA 的营收——对华销售（含 H20 等降级型号）是利润贡献来源之一。H20 管制导致 FY2025 Q1 的 $5.5B 存货减值（C3）。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "五问答案：替代哪一层 = AI 训练算力层；多久接上 = 国内替代立即可用但有性能损失；卡在哪 = 性能差距（3-10×）+ 全球化训练不可用（GP10 全球覆盖）；谁有权启动 = 中国政府 + 中国 AI 企业；现场能力 = 存在（华为 Ascend 云已在运行）。总判：`partial`。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "被管控市场规模",
    "text": "ac-exportctrl 是许可权节点，不是产品市场节点。\"规模\"用**被管控的技术流量价值**代理：\n\n- **NVIDIA 数据中心营收 FY2025**：$115.2B（C3，官方财报口径，从运行日志提取；原始数字见 ac-gpu 节点和 ac-cloud 工作台笔记）。这是目前被 3A090.a 管制直接针对的主要芯片产品的营收规模。\n- **AMD AI GPU 营收 FY2024**：约 $50 亿量级（C3，行业估算；具体数字需 AMD 10-K 分部数据）。\n- **被管控市场合计量级**：$120-130B 量级（C2 推算，以 NVIDIA + AMD 数据中心营收为基础，不含云 GPU 溢价）。\n\n注：被管控的不是全部 GPU，而是 TPP ≥ 4800 的数据中心设计。消费级 GPU（RTX 4090 TPP 约 2,643，低于阈值）在主流配置下不受 3A090.a 约束。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "| 维度 | 数值 | C 级 | 来源 |\n|---|---|---|---|\n| 美国公司管辖的 AI GPU 设计市场份额 | ~85%+（NVIDIA ~80% + AMD ~5%）| C2–C3 | 行业口径 |\n| 全球先进制程晶圆厂（≤7nm）含美国技术比例 | >90%（US+allies 半导体设备）| C3 | SEMI / FPRI 口径 |\n| BIS 对 D:5 申请推定拒绝率 | 【缺口：需要 BIS Annual Report to Congress（FY2024/FY2025）中的许可证统计】| — | BIS 工单 in-requested |\n| 3A090.a 以上芯片，美国法域可管辖比例 | 接近 100%（C2 推算：NVIDIA + AMD 全美国法域，TSMC 通过 FDPR 覆盖）| C2 | 结构推算 |",
    "cLevels": [
     "C2–C3",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 毛利率 | 市值 / 备注 |\n|---|---|---|---|\n| **NVIDIA** | $130.5B（FY2025，含全部分部）| ~75%（数据中心分部，C3）| $3T+ 市值（2024 高峰，C3）|\n| **AMD** | $25.8B（FY2024，C3，广知口径）| ~48%（毛利率，C3）| ~$2000 亿市值（C3）|\n| **BIS**（政府机构）| 非商业主体，年度行政预算约 $2 亿量级（C2 推算，非商业财务）| — | 许可证审批能力是执法规模的代理 |\n\n这组数字说明：NVIDIA 和 AMD 有足够的资本纵深来吸收管制带来的单季冲击（$5.5B 减值 vs $130B 年营收，约 4%），但重复冲击或对华出口完全关闭对其长期盈利能力有结构性影响。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **受管控市场（D:5 实体）对本节点的依赖**：中国 AI 训练算力来源，管制前约 20-25% 来自美国 GPU 采购（C2 推算）。管制后合法渠道关闭，转向国内替代（性能受限）+ 灰色市场（规模有限）。\n- **NVIDIA 对中国市场的依赖**：中国 + 香港地区营收约 $17B（FY2024，C3，广知口径）；H20 等降级型号是为保住中国市场专门设计的。H20 被追加管制后，这部分收入受影响。\n- **D:5 实体断供耐受期**：没有国内替代的 D:5 企业，在现有库存耗尽后立即受限，但中国大型 AI 企业（百度/字节/阿里）在 2022-2024 间的大规模囤货（C3，媒体广泛报道）延长了事实上的缓冲期，估计 1-2 年（C2 推算）。",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **NVIDIA H20 行政函（2025-04-09）直接冲击**：NVIDIA FY2025 Q1 存货减值 $5.5B（C3，NVIDIA 8-K 和媒体报道，原文见 ac-cloud 工作台 BIS 5-13 文件组）。这是单个管制动作产生的单季可量化财务冲击，是全图量化最清晰的管制效果实证之一。\n- **中国 AI 训练投资影响**：【缺口：需要 IDC 或 Bloomberg NEF 关于中国 AI 数据中心资本支出的独立报告，量化管制前后的投资节奏变化】。现有口径为 C2 推算，中国 AI 训练产能扩张速度因芯片可得性受限，可能减慢 30-50%（C2）。\n- **对抗管制的国内替代投资**：中国大基金三期（规模约 3440 亿人民币，C3）中相当部分指向半导体国产化，但其中有多少直接针对管制商品替代，无公开分解数字。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "管制通过两个方向影响价值链：\n\n- **方向 1（受控技术侧）**：NVIDIA 毛利率约 75%，绝大多数利润沉淀在 GPU 芯片和 CUDA 生态的持有者手里。D:5 管制只截断了流向 D:5 客户的那部分，非 D:5 部分营收照常。NVIDIA 对管制的应对逻辑是设计降级型号（H800/A800/H20）维持中国市场——直到追不下去为止。\n- **方向 2（国内替代侧）**：管制刺激中国国内 AI 芯片投资（华为昇腾、寒武纪等），利润从 NVIDIA 转向国内生态——但规模和质量差距使这条利润流量级小得多。对中国来说，管制等于把钱逼进效率更低的国产替代，是一种系统性损耗。\n- **中国 AI 企业**：作为 D:5 实体，原来的下游消费方（芯片买家），管制后同时承担成本（国内替代贵）和机会成本（训练效率下降）。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "ECCN 3A090.a TPP ≥ 4800 参数",
    "level": "C4",
    "source": "FR 2025-00711，逐字"
   },
   {
    "item": "§742.6(a)(6)(iii)(A) D:5 实体控制",
    "level": "C4",
    "source": "BIS 2026-05-31 执法澄清，逐字"
   },
   {
    "item": "FR 2026-00789 推定拒绝条款",
    "level": "C4",
    "source": "联邦公报，逐字"
   },
   {
    "item": "OSAT Note 1 举证责任机制",
    "level": "C4",
    "source": "FR 2025-00711，逐字"
   },
   {
    "item": "BIS GP10 Ascend 910B/C/D 列名",
    "level": "C4",
    "source": "BIS 2025-05-13 GP10 指导，逐字"
   },
   {
    "item": "NVIDIA 数据中心营收 FY2025 约 $115B",
    "level": "C3",
    "source": "官方财报口径（运行日志提取）"
   },
   {
    "item": "H20 $5.5B 减值",
    "level": "C3",
    "source": "NVIDIA 公告 + 媒体广泛报道"
   },
   {
    "item": "NVIDIA AI GPU 市占 ~80%",
    "level": "C2–C3",
    "source": "行业口径估算"
   },
   {
    "item": "D:5 申请推定拒绝率具体数字",
    "level": "缺口",
    "source": "需 BIS Annual Report"
   },
   {
    "item": "Trump 双边谈判替代框架",
    "level": "无",
    "source": "截至 2026-06-28 无 FR 文本"
   },
   {
    "item": "中国 AI 企业囤货规模",
    "level": "C2",
    "source": "推算"
   },
   {
    "item": "Ascend 910B/C/D 与 H100 性能差距",
    "level": "C2",
    "source": "结构推算，无公开基准"
   }
  ],
  "contested": {
   "title": "2022-10-07 → 2025-04-09 规格游戏追逐循环，以及 2025-05-13 GP10 模式升级",
   "summary": "**颗粒度校准**：这不是一次单独的争夺，而是一条延续中的追逐链——每当 BIS 划定一个参数阈值，NVIDIA（在商业压力下）设计降级版满足中国需求，BIS 再追上来划新阈值。最能说明问题的单次事件是 2025-04-09 H20 管制，因为它有最清晰的可量化结果。"
  },
  "gaps": [
   "1. 【缺口：BIS Annual Report to Congress（FY2024/FY2025）——D:5 相关许可证申请数量 / 批准 / 拒绝统计。工单已投：`services/典藏/intake/2026-06-28-nullroute-bis-annual-report-congress.md`，status: requested。这直接影响 Q2 推定拒绝率的量化。】",
   "2. 【缺口：NVIDIA FY2025 10-K 原文（SEC EDGAR）——分地区营收（中国/香港单独披露）+ 数据中心营收精确分部数字。当前 $115.2B 来自运行日志，需 C4 年报核实。】",
   "3. 【缺口：NVIDIA H20 管制的 8-K 原文——确认 $5.5B 存货减值的法律文本来源，从 C3 广泛报道升 C4。】",
   "4. 【缺口：AMD FY2024 10-K AI GPU 分部营收数字——核实 AMD AI 芯片业务规模，补全 Q1 被控市场规模。】",
   "5. 【缺口：Huawei Ascend 910B/C/D 的公开技术基准测试——性能差距 3-10× 当前为 C2 推算，需第三方测试机构报告（MLCommons / SemiAnalysis 口径）升 C3。】",
   "6. 【缺口：GP10 管辖触发链的 FDPR 覆盖率——Ascend 910B 通过哪些美国技术接触点被认定为 EAR 管辖，缺 BIS 的法律分析正式文件。当前 C2 推断。】\n---"
  ]
 },
 "ac-fab": {
  "sourceFile": "ac-fab.md",
  "archiveId": "ac-fab",
  "established": "2026-06-19",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "TSMC",
    "role": "先进 + 成熟代工",
    "scale": "整体代工 ~60%（TrendForce, C3）；先进节点 ~90%（C2–C3）",
    "jurisdiction": "台湾新竹 / 台湾法域（叠加美国出口管制域外触发）",
    "group": null
   },
   {
    "entity": "Samsung Foundry",
    "role": "先进 + 成熟代工",
    "scale": "整体 ~11–13%（TrendForce, C2–C3）",
    "jurisdiction": "韩国 / 韩国法域",
    "group": null
   },
   {
    "entity": "Intel Foundry (IFS)",
    "role": "先进代工（自有 + 对外）",
    "scale": "先进对外代工份额很小（C2）",
    "jurisdiction": "美国 / 美国法域",
    "group": null
   },
   {
    "entity": "GlobalFoundries / 联电 / 中芯",
    "role": "成熟节点为主",
    "scale": "各 single-digit %（C2–C3）",
    "jurisdiction": "美/台/中",
    "group": null
   }
  ],
  "upstream": [
   "ac-fab 自己绕不开的东西，每一项都可能是再下一层的单点：",
   "**EUV 光刻设备：ASML（ac-euv 及其子节点）**。先进节点（≤7nm 的关键层）必须用 EUV。这是 ac-fab 最硬的上游单点，已单独拆（ac-euv / ac-euv-lightsource / ac-euv-optics / ac-euv-photoresist / ac-euv-pellicle）。",
   "**DUV / 沉积 / 刻蚀 / 量测设备**：ASML（DUV）、Applied Materials（美）、Lam Research（美）、TEL（日）、KLA（美，量测）。这些是「设备五巨头」，美日荷法域，本身又是高集中度卡点。【缺口：各设备类目 CR4 与法域分布——需 SEMI 设备市场报告原文，可考虑建 ac-fabtool 子节点】C2。",
   "**ABF 载板绝缘膜：味之素（Ajinomoto，日本）**。FC-BGA 封装载板几乎全部依赖味之素的 ABF 绝缘膜，公开技术叙事里近乎隐形的物料单点（来源：stack-atlas magnitude-seed-ledger `gb-abf`，evidence=source-linked）。**建议建子节点 ac-abf**。",
   "**先进封装载板：FC-BGA / ABF 载板厂（Ibiden、Shinko、Unimicron、Nan Ya）**。GPU/HBM 栈之下的多年前置期、少数供应商的产能瓶颈（来源：magnitude-seed-ledger `gb-substrate`，evidence=source-linked）。**建议建子节点 ac-substrate**。",
   "**EDA 工具**：Synopsys/Cadence/西门子 EDA（ac-eda 节点）——版图到流片必须经过，软件型单点。",
   "**特种气体 / 光刻胶 / 超高纯材料**：见 im-industrial-gas（NF3 等）与 ac-euv-photoresist。",
   "**关键工程师 + 大电力**：良率 know-how 锚在人身上（关键工程师是 real force 型依赖）；先进 fab 是电力大户（ac-power）。",
   "评估：ac-fab 是一个「单点之上还叠着多个上游单点」的汇聚节点。它本身是台湾物理单点，它绕不开的 EUV 是荷美德单点，载板绕不开味之素是日本单点。任何一层断，先进芯片产线都受冲击。"
  ],
  "downstream": [
   "**致命依赖：所有 fabless AI 芯片公司**。NVIDIA（H100/H200/B 系全在 TSMC 先进节点 + CoWoS 封装）、AMD（MI300 系）、Apple、高通、博通、Google/Amazon 自研 ASIC——这些公司没有自己的先进 fab，全部把先进产能押在 TSMC。依赖强度：致命，且无短期替代。",
   "**致命依赖：CoWoS 先进封装**。AI 加速器要把 GPU die 和 HBM 堆在一起，靠 TSMC 的 CoWoS。2023–2024 全行业 AI 芯片产能瓶颈一度就卡在 CoWoS 产能，而不是晶圆本身。这条耦合让 ac-fab 和 ac-hbm 在物理封装层强绑定。",
   "**间接依赖：全球数据中心 / AI 训练算力扩张**。先进 fab 产能上限 → AI 加速器出货上限 → 全球可部署算力上限。",
   "依赖强度：致命。fabless 模式的代价就是把命脉交给了代工厂——这是行业三十年分工演化的结果，短期不可逆。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "- **三星先进节点顶上 TSMC**：fallback 等级 `partial`。三星有 EUV、有 3nm GAA 产线，理论上是最现成的第二供给方。按五问：\n  - 替代哪一层 = 先进逻辑代工；\n  - 多久接上 = 现成产线即可分流部分订单，但大客户导入 + 良率爬坡以年计；\n  - 卡在哪 = 良率与 TSMC 的差距、大客户（尤其 NVIDIA/Apple）的设计-工艺协同已深度绑 TSMC；\n  - 谁有权启动 = 客户自己（商业决策）；\n  - 现场能不能执行 = 能跑成熟与部分先进订单，但顶不了 TSMC 最先进档的良率经济。\n  - 结论：`partial fallback`——分流得了一部分压力，顶不了全量。三星是真实存在的第二点，但不是等量替代。\n- **Intel Foundry (18A)**：fallback 等级 `planned → 爬坡中`。2024–2025 量产爬坡，对外代工客户与良率证据仍在积累。按五问基本同三星但更早期。`possible reroute under ramp`。\n- **TSMC 海外厂（美/日/德）作为台湾产能的地理 fallback**：fallback 等级 `partial / planned`。详见第 8 维——海外厂能分散地理风险，但短期内产能占比小、且最先进节点仍主要留在台湾。\n- **中芯国际先进节点**：fallback 等级 `blocked`。被 EUV 封锁卡在 7nm DUV 多重曝光，成本/良率不经济，无法量产 5nm 及以下（C2–C3，需回原文核 7nm 实际良率与产量）。不是先进档的 fallback。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **TSMC 营收**：FY2023 合并营收 **NT$2,161,736M ≈ US$69.7B**（C3，FY2023 Form 20-F，SEC EDGAR，逐字核）。较 FY2022 下降 4.5%（下行年）。2024 因 AI 需求反弹（C3，需补 FY2024 20-F）。\n- **TSMC 按制程节点分布（FY2023）**：3nm 6%，5nm 33%，7nm 19%；≤7nm 先进制程合计占晶圆营收 **58%**（2022: 53%）（C3，FY2023 20-F verbatim）。\n- **TSMC 按平台（FY2023）**：HPC **43%**，Smartphone 38%，IoT 8%，Auto 6%，DCE 3%（C3，FY2023 20-F）。\n- **全球晶圆代工市场**：2023 年约 **1100–1300 亿美元**量级（C2–C3，TrendForce/Gartner 口径不一，需回原文）。\n\n【缺口：全球代工市场确切规模与年份——需 TrendForce/Gartner 报告原文；TSMC FY2024 20-F——可另投典藏单】",
    "cLevels": [
     "C3",
     "C2–C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 整体代工 CR1（TSMC）：约 **59–62%**（C3，TrendForce 季度，需回原文核确切季度）。\n- 整体代工 CR4（TSMC+三星+GF+联电 或 +中芯）：约 **80%+**（C2–C3）。\n- 先进节点（≤7nm）CR1（TSMC）：约 **90%**（C2–C3，需回报告）。\n- price maker：TSMC 在先进节点是事实上的 price maker——产能紧张时它的报价定全行业先进代工价格基准（2021–2022 涨价潮即由 TSMC 主导，C3）。",
    "cLevels": [
     "C3",
     "C2–C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 毛利率 | 市值 / 估值 | 来源 |\n|---|---|---|---|---|\n| **TSMC** | **NT$2,161,736M ≈ US$69.7B**（FY2023，C3，20-F verbatim）| **54.4%**（FY2023，C3，20-F verbatim）| 约 5000 亿美元+（2023 底量级，2024 因 AI 大涨，C2–C3 随市波动）| FY2023 Form 20-F，SEC EDGAR |\n| **Samsung（整体）** | 三星电子整体数千亿美元，**Foundry 部门**营收单独披露较粗（C2，需回三星分部报告）| Foundry 部门毛利率低于 TSMC，先进节点良率拖累（C2）| 三星电子整体市值（含存储/手机/家电），不可直接对比 Foundry | 需三星分部财报 |\n| **Intel（含 IFS）** | Intel 整体约 540 亿美元（2023，C3）；IFS 对外代工营收很小 | IFS 当前亏损/投入期（C2–C3）| Intel 整体市值，2023–2024 承压 | 需 Intel 10-K |\n\n这组数字的政治含义：TSMC **54.4%** 的毛利率 + 数千亿市值，给了它**极厚的资本纵深**——它有钱同时在台湾、美国、日本、德国铺产能，也扛得住单一市场的政治压力。三星 Foundry 埋在三星电子大盘里，先进节点是亏损投入；Intel Foundry 在重资本投入期。所以三家里只有 TSMC 是「靠先进代工自身就能盈利且现金流强劲」的玩家，这是它单点地位的财务底座。\n\n补充（FY2023 20-F verbatim）：TSMC 最大客户占 net revenue **25%**，第二大 **11%**，前十合计 **70%**。HPC 平台是最大收入来源（43%），说明 AI/高性能计算已是 TSMC 业务重心，而非手机（38%）。\n【缺口：三星 Foundry 部门独立营收与毛利率——需三星电子分部财报原文；Intel IFS 分部财务——需 Intel 10-K 分部数据；TSMC FY2024 20-F——AI 需求反弹后的节点/客户分布更新】",
    "cLevels": [
     "C3",
     "C2–C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "两个方向：\n\n- **本节点对下游的收入敞口**：TSMC 营收高度集中于少数大客户——Apple 长期是第一大客户（约占 TSMC 营收 20%+ 量级，C2–C3 需回原文），AI 相关客户（NVIDIA 等）占比 2023–2024 快速上升（HPC 平台已成 TSMC 最大营收板块，C3 需回法说会）。\n- **下游对本节点的产能敞口**：NVIDIA 的 AI GPU（H100/H200/B 系）几乎 100% 依赖 TSMC 先进节点 + CoWoS（C2–C3，行业共识）。若 TSMC 先进产能中断，NVIDIA 无第二来源可在短期内顶上——三星/Intel 顶不了同档良率，库存/在途只能撑数周到数月（C2 推算）。AMD MI300 系同理。\n- **缓冲时间**：fabless 客户的成品/在途库存通常以周–月计；先进 fab 一旦长期停摆，下游 AI 加速器供给会在一个季度内见底（C2 推算，需供应链库存数据对齐）。\n\n【缺口：TSMC 大客户营收占比（Apple/NVIDIA 等）——需 TSMC 法说会 + 第三方供应链分析；NVIDIA 对 TSMC 的产能依赖度与库存缓冲——需 NVIDIA 10-K 风险章节 + 供应链报告】",
    "cLevels": [
     "C2–C3",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "**场景 A：台海军事冲突导致 TSMC 停产**\n这是被反复建模的极端情景。**Rhodium Group（2022）** 估算台湾先进制程停摆将造成全球 **> $2 trillion** 经济活动受扰（作者标注此为下限），其中半导体依赖行业每年或被迫放弃多达 **$1.6 trillion** 营收；Taiwan 制造全球 **92%** 最先进逻辑芯片（< 10nm 产量）（C3，Rhodium 2022 verbatim，Charlie Vest / Agatha Kratz / Reva Goujon，2022-12-14）。机制：全球 90%+ 最先进逻辑芯片产能瞬间归零，AI 加速器、高端手机、数据中心、汽车高端芯片全部断供，且无任何短期替代。这是整个 Stack Atlas 里**单点失效宏观冲击量级最大**的节点之一。Bloomberg Economics「$10 万亿」那篇另是一个数量级估算，未取，可另投典藏单。\n\n**场景 B：美国对华先进制程代工限制（已实际发生）**\n2020 华为 FDP + 2022.10 对华先进逻辑代工限制——已切断中国 fabless（华为海思等）用 TSMC/三星代工先进芯片的路径。冲击已计入：华为高端芯片被迫退回中芯 7nm DUV，成本高、产量受限（C2–C3）。\n\n**场景 C：非冲突的产能瓶颈（CoWoS）**\n2023–2024 AI 芯片缺货一度卡在 CoWoS 先进封装产能，而非晶圆——说明 ac-fab 的瓶颈会在意想不到的子环节出现，且直接限制全球 AI 算力扩张速度（C3，广泛报道）。\n\n【Rhodium 2022 verbatim 已核（$2T+ 下限，$1.6T 半导体营收损失，92% <10nm 产量）；Bloomberg Economics「$10T」那篇未取，可另投典藏单】",
    "cLevels": [
     "C3",
     "C2–C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链利润高度沉淀在 **TSMC（先进制程定价权）** 和 **下游 fabless 设计公司（尤其 NVIDIA）** 两端，呈「微笑曲线」两头厚：\n\n- TSMC 凭先进节点近独占拿 **54.4%** 毛利率（FY2023 20-F verbatim）——制造端利润罕见地厚，因为它不是普通代工而是不可替代的先进代工。\n- NVIDIA 凭 AI GPU 设计 + CUDA 生态拿更高毛利率（约 70%+，见 ac-gpu）——设计/生态端利润更厚。\n- 中间被挤压的是封装/载板（味之素 ABF 是隐形高控制点但整体载板厂利润薄）、设备耗材的部分环节。\n\n政治压力传导路径：美国的代工管制首先打在**被禁实体（如华为）**的资产负债表上（拿不到先进芯片），其次是 TSMC 的部分中国营收。但 TSMC 的资本纵深 + 非中客户的旺盛 AI 需求，让它扛得住失去中国先进代工订单。真正打到 TSMC 命门的是台海物理风险，不是商业管制——管制它能转单，岛它搬不走。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "TSMC FY2023 营收 NT$2,161,736M ≈ US$69.7B",
    "level": "C3",
    "source": "FY2023 Form 20-F verbatim"
   },
   {
    "item": "TSMC FY2023 毛利率 54.4%",
    "level": "C3",
    "source": "FY2023 Form 20-F verbatim"
   },
   {
    "item": "TSMC FY2023 ≤7nm 占晶圆营收 58%",
    "level": "C3",
    "source": "FY2023 Form 20-F verbatim"
   },
   {
    "item": "TSMC FY2023 HPC 占晶圆营收 43%",
    "level": "C3",
    "source": "FY2023 Form 20-F verbatim"
   },
   {
    "item": "TSMC FY2023 最大客户 25%，前10 合计 70%",
    "level": "C3",
    "source": "FY2023 Form 20-F verbatim"
   },
   {
    "item": "台湾 <10nm 先进逻辑 installed capacity = 92%（2019）",
    "level": "C3",
    "source": "BCG/SIA 2021 Exhibit 17 verbatim"
   },
   {
    "item": "台海冲突 > $2T 全球受扰（Rhodium 2022 下限），$1.6T 半导体营收损失",
    "level": "C3",
    "source": "Rhodium 2022 verbatim"
   },
   {
    "item": "BIS 2022-10 先进制程定义：≤16/14nm 逻辑 + NAND ≥128 层 + DRAM ≤18nm hp",
    "level": "C3",
    "source": "BIS FR 2022-21658 verbatim"
   },
   {
    "item": "BIS 2023-10 3A090.a：TPP ≥ 4800 OR（TPP ≥ 1600 + PD ≥ 5.92）",
    "level": "C3",
    "source": "BIS FR 2023-23055 verbatim"
   },
   {
    "item": "TSMC 整体代工份额约 60%",
    "level": "C3",
    "source": "TrendForce 季度，广知"
   },
   {
    "item": "先进节点（≤7nm）TSMC 份额约 90%",
    "level": "C2–C3",
    "source": "行业共识"
   },
   {
    "item": "三星 3nm GAA 良率/大客户落后 TSMC",
    "level": "C2",
    "source": "行业共识，无官方披露"
   },
   {
    "item": "中芯被 EUV 封锁卡在 7nm DUV",
    "level": "C2–C3",
    "source": "广泛报道"
   },
   {
    "item": "NVIDIA AI GPU 近 100% 依赖 TSMC 先进节点",
    "level": "C2–C3",
    "source": "行业共识"
   },
   {
    "item": "单座先进 fab 资本 200–300 亿美元、建设 3–5 年",
    "level": "C2–C3",
    "source": "TSMC 海外厂投资额量级"
   },
   {
    "item": "味之素 ABF 为载板物料近独占单点",
    "level": "C3（source-linked）",
    "source": "magnitude-seed-ledger gb-abf"
   },
   {
    "item": "TSMC 海外厂最先进档仍留台湾、占比小",
    "level": "C2–C3",
    "source": "广泛报道"
   }
  ],
  "contested": {
   "title": "2022-2024 CHIPS Act 与 TSMC Arizona 建厂压力——美国政府试图把关键制造节点从台湾移到美国法域",
   "summary": "**颗粒度校准**：这场争夺的靶心不是 TSMC 的市场份额，而是 TSMC 先进制程产能的地理位置——具体来说，是\"下一代 3nm/2nm 产能的第一个 200mm 生产基地，在台湾还是在美国/日本\"。争夺对象是产能的法域归属，不是产能本身。"
  },
  "gaps": [
   "【已闭合】",
   "- ~~缺口 1~~：Rhodium 2022 $2T+ / $1.6T / 92% <10nm 产量——已 verbatim 核（2026-06-20，ac-fab-primary 典藏包）",
   "- ~~缺口 2~~：BCG/SIA 2021 台湾 <10nm 产能 92% Exhibit 17——已 verbatim 核（2026-06-20）",
   "- ~~缺口 3（部分）~~：TSMC FY2023 20-F——营收、毛利率、节点分布、HPC 占比、客户集中度已核",
   "- ~~缺口 4~~：BIS 2022-10 + 2023-10 规则阈值定义——已 verbatim 核（2026-06-20）\n【仍然开放】",
   "1. 【缺口】Bloomberg Economics「$10 万亿台海冲击」——未取，可另投典藏单",
   "2. 【缺口】TSMC FY2024 20-F——AI 需求反弹后的节点/客户/HPC 分布更新",
   "3. 【缺口】TrendForce/Gartner 全球晶圆代工市场份额——CR1/CR4 确切季度值",
   "4. 【缺口】三星 Foundry 部门 + Intel IFS 独立分部财务",
   "5. 【缺口】设备五巨头 CR4 与法域分布（ac-fabtool 子节点待建前提）",
   "6. 【缺口】味之素 ABF + FC-BGA 载板份额/产能（ac-abf / ac-substrate 子节点待建前提）\n---"
  ]
 },
 "ac-gpu": {
  "sourceFile": "ac-gpu.md",
  "archiveId": "ac-gpu",
  "established": "2026-06-20",
  "updated": null,
  "cLevelOverall": "C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "NVIDIA",
    "role": "AI GPU 设计 + CUDA 生态",
    "scale": "AI 加速器 ~80%+（C2–C3，行业口径）",
    "jurisdiction": "美国加州 / 美国法域",
    "group": null
   },
   {
    "entity": "AMD",
    "role": "AI GPU 设计（Instinct MI 系）",
    "scale": "~5–7%（C2）",
    "jurisdiction": "美国加州 / 美国法域",
    "group": null
   },
   {
    "entity": "Intel",
    "role": "AI 加速器（Gaudi 系）",
    "scale": "很小（C2）",
    "jurisdiction": "美国 / 美国法域",
    "group": null
   },
   {
    "entity": "Google / Amazon / Microsoft / Meta",
    "role": "自研 ASIC（TPU/Trainium/Maia/MTIA）",
    "scale": "主要自用，合计上升中（C2）",
    "jurisdiction": "美国 / 美国法域",
    "group": null
   },
   {
    "entity": "华为（昇腾 Ascend）",
    "role": "中国本土 AI 加速器",
    "scale": "中国市场内份额上升（C2，无可靠全球口径）",
    "jurisdiction": "中国 / 中国法域",
    "group": null
   }
  ],
  "upstream": [
   "ac-gpu 的特殊之处：**它本身是下游的卡点持有者，但对自己的上游是彻底的人质**。NVIDIA 卡着全世界的 AI 算力，但 NVIDIA 自己绕不开的东西一个比一个硬：",
   "**先进制程代工：TSMC（ac-fab）**。H100/H200/B 系全在 TSMC 先进节点 + CoWoS 封装。致命单点，已拆（ac-fab）。NVIDIA 没有 plan B——三星顶不了同档良率。",
   "**HBM 高带宽内存：SK 海力士 / 三星 / Micron（ac-hbm）**。AI 加速器的算力被内存带宽卡着，HBM 堆叠是物理必需。三家寡头，SK 海力士主导（HBM 占其 4Q24 DRAM 营收 >40%，source-linked，来源 magnitude-seed-ledger `lg-skhynix-hbm-dram-4q24`）。已拆（ac-hbm）。",
   "**CoWoS 先进封装：TSMC**。把 GPU die 和 HBM 堆一起靠 CoWoS。2023–2024 AI 芯片荒一度就卡在 CoWoS 产能而非晶圆本身（C3）。这条让 ac-gpu 和 ac-fab/ac-hbm 在封装层强绑定。",
   "**EDA 设计工具：Synopsys / Cadence / 西门子 EDA（ac-eda）**。版图到流片必经，软件单点。",
   "**ABF 载板 / FC-BGA 封装载板：味之素 + 载板四厂（ac-abf / ac-substrate）**。GPU 封装的隐形物料瓶颈（来源 magnitude-seed-ledger `gb-abf` / `gb-substrate`）。",
   "评估：ac-gpu 是「下游卡点持有者 + 上游人质」的双面节点。它对客户是 access maker，对供应商是 dependent。任何上游单点（TSMC 产能、HBM、CoWoS）断，NVIDIA 也出不了货——这是它和真正的物理单点（EUV 光源、TSMC 产能）的区别：NVIDIA 的力量更多锚在 CUDA 生态这条 real force 上，硬件供给链它自己也是被卡的一方。"
  ],
  "downstream": [
   "**致命依赖：所有做大模型的实验室 + 超大规模云**。OpenAI、Anthropic、Google、Meta、xAI、所有 AI 创业公司，以及 AWS/Azure/GCP/Oracle 的 AI 算力出租，训练算力压倒性押在 NVIDIA。依赖强度：致命，且短期无等量替代（CUDA 锁定）。",
   "**致命依赖：主权 AI / 国家算力计划**。各国「算力主权」计划（建本国 AI 算力底座）现阶段绝大多数还是买 NVIDIA——主权叙事喊得响，硬件还是同一家美国公司的（这条接叙事层 ac-sovereignty，反讽点：算力主权的物理基础在另一国手里）。",
   "**间接依赖：全球 AI 应用层**。模型训不出来/推理供不起，上面的应用全停。",
   "依赖强度：致命。fabless 设计公司 + 软件生态锁定的组合，让下游被锁得比对 ac-fab 更深——ac-fab 还能转单给三星顶一部分，CUDA 生态短期内无处可转。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "- **AMD MI300/MI350 系顶替 NVIDIA**：fallback 等级 `partial`。按五问：\n  - 替代哪一层 = AI 加速器硬件 + ROCm 软件栈；\n  - 多久接上 = 硬件现成可买，但软件迁移以季度到年计；\n  - 卡在哪 = ROCm 生态成熟度落后 CUDA、现有训练代码迁移成本、调优经验不可移植；\n  - 谁有权启动 = 客户自己（已有 Microsoft Azure / Oracle 采用 MI300X 做多元化）；\n  - 现场能不能执行 = 能跑一部分（尤其推理 + 对成本敏感的 hyperscaler），顶不了全量训练生态。\n  - 结论：`partial fallback`——硬件是真第二点，软件生态不是等量替代。分流得了价格压力和部分推理负载，顶不了 CUDA 锁定的训练大盘。\n- **自研 ASIC（TPU / Trainium / Maia）**：fallback 等级 `partial / 自用专用`。Google TPU 在自家工作负载上是成熟替代（Gemini 全程 TPU 训练），但 TPU 不外卖、且每家 ASIC 都绑自家软件栈，不是开放市场的通用 fallback。对自研方是 operational，对市场是 `not available`。\n- **CUDA → ROCm / OpenAI Triton / 各家编译器替代**：fallback 等级 `planned → 局部 operational`。软件层去 CUDA 化在推进，但「让任意现有 CUDA 代码无痛跑别家硬件」仍是 `possible reroute`，不是 operational fallback。\n- **华为昇腾 / 中国本土 AI 芯片（对中国客户）**：fallback 等级 `forced partial`。被 NVIDIA 高端断供逼出来的国产替代，在中国市场内放量，但受 ac-fab 封锁制约先进制程上限，单卡算力 + 集群规模 + 软件生态全面落后。是「被迫的本土化」而非等量替代，且本身被上游卡着。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **NVIDIA 数据中心业务营收**：FY2025（截至 2025-01-26）**$115.2B**，同比 +142%（C3，NVIDIA 官方 Q4&FY2025 财报新闻稿，2025-02-26）。这是 AI 加速器市场最干净的规模代理——NVIDIA 一家的数据中心营收就是这个市场的主体。\n- **NVIDIA 总营收**：FY2025 **$130.5B**，同比 +114%（C3，官方财报）。\n- **第三方「数据中心 GPU 市场」口径**：2025 年约 **$98.9B**（2024 年 $86.5B，同比 +14.3%，C2–C3，MarketsandMarkets 口径，与 NVIDIA 自报数据中心营收口径不一致——市场研究机构的「数据中心 GPU」定义比 NVIDIA「数据中心业务」窄，引用时注意口径差）。\n- **AMD 数据中心业务（EPYC CPU + Instinct GPU）**：FY2025 约 **$16.6B**（C2，其中 MI 系 GPU 营收估 $6–8B，C2 推算）。\n\n口径提示：NVIDIA「数据中心」营收（$115.2B）含网络（NVLink/InfiniBand/以太网）+ 系统，不止裸 GPU；第三方「数据中心 GPU 市场」（~$99B）口径更窄。两个数字不能直接相减算份额，引用时各注口径。\n\n【缺口：NVIDIA FY2025 10-K（截至 2025-01-26）逐字核数据中心分部 + 地区营收拆分——需 SEC EDGAR 原文（已检索到 URL：sec.gov nvda-20250126.htm）；AMD FY2025 10-K Instinct GPU 独立营收——需 AMD 10-K 分部数据】",
    "cLevels": [
     "C3",
     "C2–C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- AI 加速器 CR1（NVIDIA）：约 **80%+**（C2–C3，行业口径，2024 估 ~87%，预计降向 ~75%，2026）。\n- CR2（NVIDIA + AMD）：约 **85–90%**（C2）。\n- 若把自研 ASIC（TPU/Trainium 等，主要自用）计入「AI 加速器总装机」，NVIDIA 的「外卖市场」份额更高，「全部装机」份额略低——口径差异大，引用注明。\n- price maker：NVIDIA 是绝对 price maker——H100/H200/B200 的定价 + 分配定全行业算力成本基准，毛利率 75% 就是定价权的直接证据（见 Q3/Q6）。",
    "cLevels": [
     "C2–C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 毛利率 | 市值 / 估值 | 来源 |\n|---|---|---|---|---|\n| **NVIDIA** | **$130.5B**（FY2025，+114%，C3）；数据中心 **$115.2B**（C3）| 全年 GAAP **75.0%**，Q4 GAAP **73.0%**（FY2025，C3，官方财报）| 约 **$3T+** 量级（2024–2025 一度全球市值第一，随市大幅波动，C2–C3）| NVIDIA Q4&FY2025 官方财报 |\n| **AMD** | 整体 FY2025 数百亿美元级；数据中心分部约 **$16.6B**（C2）| 整体毛利率约 50% 量级（C2，远低于 NVIDIA）| 约 $2000–3000 亿美元量级（随市波动，C2）| 需 AMD 10-K |\n| **Intel（Gaudi）** | AI 加速器营收很小，未达目标（C2–C3）| Intel 整体承压 | Intel 整体市值 2024–2025 承压 | 需 Intel 10-K |\n| **华为（昇腾）** | 未独立披露（C2，无可靠口径）| 不披露 | 非上市分部 | 无公开财务 |\n\n政治含义：NVIDIA **75% 全年毛利率** + ~$3T 市值，是整个 Stack Atlas 里**资本纵深最厚的单个卡点持有者**。这个毛利率水平本身就是 CUDA 生态锁定的财务证据——普通硬件公司做不到 75% 毛利，能做到说明它卖的不只是硅，是绑死的生态。这层资本纵深让它扛得住失去整个中国市场（H20 $5.5B charge 它一个季度就消化了，见 Q5）。AMD ~50% 毛利率说明它在硬件上能竞争，但拿不到 NVIDIA 那种生态溢价。\n\n【缺口：NVIDIA / AMD / Intel FY2025 10-K 逐字核分部财务 + 地区营收（尤其中国占比）——需 SEC EDGAR；NVIDIA 历史市值时点——随市波动需指定日期】",
    "cLevels": [
     "C3",
     "C2–C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "两个方向：\n\n- **本节点对下游的收入敞口**：NVIDIA 数据中心营收高度集中于少数超大规模云 + 大型 AI 实验室——「少数大客户占数据中心营收很大比例」（C2，NVIDIA 10-K 风险章节有客户集中度披露，需逐字核具体比例）。这是双向锁定：客户依赖 NVIDIA 供货，NVIDIA 也依赖少数几家 hyperscaler 的资本开支周期。\n- **下游对本节点的产能/生态敞口**：一家做前沿大模型的实验室，训练栈深度绑 CUDA，短期内无法迁移到 AMD/ASIC 而不损失训练进度——切换成本以季度计且有风险。算力供给中断时，在手 + 在途 GPU 库存能撑训练多久取决于各家囤货，但新模型迭代节奏直接被 NVIDIA 分配卡死。\n- **缓冲时间**：硬件供给上，下游靠提前下单 + 囤货缓冲（大厂囤货以季度计）；生态依赖上，无缓冲——CUDA 锁定是结构性的，不是库存问题。\n\n【缺口：NVIDIA 10-K 客户集中度具体比例（前 N 大客户占数据中心营收 %）——需 SEC EDGAR 10-K 风险章节逐字核；各 hyperscaler AI capex 中 NVIDIA 采购占比——需各家财报 + 供应链分析】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "**场景 A：美国对华 AI 芯片管制（已实际发生，且是 Stack Atlas 里执行最干净的管制案例）**\n- 2022.10 起禁高端 AI 芯片（A100/H100）对华；NVIDIA 推降级版 A800/H800 规避，又被堵；再推 H20。\n- **2025.4.9：美国要求 H20 对华出口须许可（无限期）**。NVIDIA 随即宣布 **$5.5B charge**（Q1 FY2026，季度截至 2025-04-27），被称为芯片业史上最大单笔减记（C3，公司公告 + 广泛报道）。\n- 量级：H20 在 2024 年估计贡献 **$12–15B 营收**（C2–C3，分析机构估）；NVIDIA 称该季度若无管制销售本可多 **$2.5B**；BNP Paribas 估 $5.5B 减记可折算成未来 12 个月约 **$15B 营收冲击**（C3，引用口径）。\n- 但 NVIDIA 凭 75% 毛利率 + 数据中心 +142% 的非中需求，一个季度就把这笔减记吸收了——管制打疼了它的中国营收，没动它的命门。打到的反而是**中国 AI 产业**：拿不到最高端算力，被迫退回昇腾 + 受 ac-fab 封锁制约的本土制程上限，集群规模和单卡算力全面受限。\n\n**场景 B：NVIDIA 上游断供（TSMC/HBM/CoWoS 中断）**\n若 ac-fab（台海）或 ac-hbm 出现重大中断：NVIDIA 出不了货，全球 AI 算力扩张瞬间停摆，不分敌友。这个场景的冲击量级 = ac-fab 台海情景（Rhodium 2022 估 >$2T 全球受扰，见 ac-fab Q5），因为 AI 加速器是 ac-fab 先进产能最大的下游之一。ac-gpu 在这个场景里是受害者不是卡点持有者。\n\n【缺口：H20 对华营收的官方口径（NVIDIA 未单独披露 H20 营收，$12–15B 为分析机构估）——需 NVIDIA 10-K/10-Q 地区营收 + 管理层讨论；2025.4 H20 许可要求的 BIS 原文/通知——需 BIS 文件，对应 ps-exportctrl】",
    "cLevels": [
     "C3",
     "C2–C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链利润高度沉淀在 **NVIDIA（设计 + CUDA 生态定价权）** 这一端——这是 ac 栈「微笑曲线」设计端最厚的利润点：\n\n- NVIDIA 凭 AI GPU 设计 + CUDA 生态拿 **75% 毛利率**（FY2025，C3）——比上游 TSMC 的 54.4%（FY2023 20-F）还高一截。原因：TSMC 卖的是不可替代的制造，但仍是制造（资本密集、有可比对手）；NVIDIA 卖的是不可替代的生态（软件 + 锁定，可批量复制、边际成本极低）。\n- 上游 TSMC 拿 54.4% 毛利率（制造端，厚但低于 NVIDIA）；HBM 三寡头拿周期性高毛利（紧缺时厚）；载板/封装环节利润薄。\n- 下游 hyperscaler 和 AI 实验室：现阶段是「烧钱买算力」端，利润尚未沉淀（多数 AI 应用未盈利），资本大量流向 NVIDIA 的资产负债表。\n\n政治压力传导路径：美国对华 AI 芯片管制，第一打击的是**中国 AI 产业**（拿不到算力），其次是 NVIDIA 的中国营收（已计入 $5.5B charge）。但因为 NVIDIA 的利润几乎全来自非中市场的旺盛需求 + 75% 毛利的资本纵深，管制打不动它的命门——这和 TSMC 类似（管制能转单/转市场，物理风险才是命门）。NVIDIA 真正的命门不是政治管制，是上游（台海 TSMC + HBM）的物理风险，和下游 AI 资本开支周期一旦逆转的需求风险。\n\n---",
    "cLevels": [
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "NVIDIA FY2025 总营收 $130.5B（+114%）",
    "level": "C3",
    "source": "NVIDIA Q4&FY2025 官方财报"
   },
   {
    "item": "NVIDIA FY2025 数据中心营收 $115.2B（+142%）",
    "level": "C3",
    "source": "NVIDIA Q4&FY2025 官方财报"
   },
   {
    "item": "NVIDIA FY2025 全年 GAAP 毛利率 75.0%、Q4 73.0%",
    "level": "C3",
    "source": "NVIDIA Q4&FY2025 官方财报"
   },
   {
    "item": "H20 对华出口许可要求 2025.4.9 + $5.5B charge",
    "level": "C3",
    "source": "NVIDIA 公告 + 广泛报道"
   },
   {
    "item": "NVIDIA AI 加速器份额 ~80%+（2024 ~87%）",
    "level": "C2–C3",
    "source": "行业机构口径"
   },
   {
    "item": "AMD AI GPU 份额 ~5–7%",
    "level": "C2",
    "source": "行业机构口径"
   },
   {
    "item": "数据中心 GPU 市场 ~$98.9B（2025）/ $86.5B（2024）",
    "level": "C2–C3",
    "source": "MarketsandMarkets"
   },
   {
    "item": "AMD 数据中心分部 FY2025 ~$16.6B",
    "level": "C2",
    "source": "行业口径"
   },
   {
    "item": "H20 2024 年贡献营收 $12–15B",
    "level": "C2–C3",
    "source": "分析机构估"
   },
   {
    "item": "CUDA 生态锁定是 NVIDIA 核心护城河（real force）",
    "level": "C2",
    "source": "结构判断"
   },
   {
    "item": "美国对 NVIDIA 是直接本土管辖（非 FDP 域外）",
    "level": "C3",
    "source": "法域结构（NVIDIA 美国公司）"
   },
   {
    "item": "BIS 2023.10 3A090.a TPP/PD 阈值",
    "level": "C3",
    "source": "BIS FR 2023-23055 verbatim"
   }
  ],
  "contested": {
   "title": "2023-2024 AMD MI300X vs H100，CUDA 护城河的第一次真实压力测试",
   "summary": "**颗粒度校准**：这场争夺不是在争 GPU 市场整体，而是在争\"先进 AI 训练工作负载能不能从 NVIDIA H100 迁移到 AMD MI300X\"。节点边界是 CUDA 生态的粘性——硬件性能差距已经缩小，测试的是切换成本是否真的是护城河。"
  },
  "gaps": [
   "1. 【缺口】NVIDIA FY2025 10-K（截至 2025-01-26）逐字核：数据中心分部 + 地区营收（尤其中国占比）+ 客户集中度（前 N 大客户占数据中心营收 %）——需 SEC EDGAR（URL 已检索到：sec.gov/Archives/.../nvda-20250126.htm）。这把 Q1/Q3/Q4 从新闻稿口径升级为审计原文，并补 Q4 下游依赖度的客户集中度具体值。",
   "2. 【缺口】2025.4 H20 许可要求的 BIS 通知/规则原文——需 BIS 文件，核确切法律形式（个案通知 vs 规则修订）、生效日、性能阈值。决定政治传动层「直接本土管辖、当天翻转」是否已被原文坐实，对应 ps-exportctrl。",
   "3. 【缺口】AI 加速器市占率的可引用原文口径——需 第三方机构（如 IDC/TrendForce/Jon Peddie/Omdia）报告原文核 NVIDIA/AMD/ASIC 份额定义与年份。当前 ~80% 为行业广泛口径，机构间口径差异大。",
   "4. 【缺口】AMD FY2025 10-K Instinct GPU 独立营收 + 毛利率——需 AMD 10-K 分部数据。补第二点的资本纵深判断。",
   "5. 【缺口】CUDA 生态锁定强度的可量化代理——需 框架适配率 / 迁移成本案例 / ROCm 采用率数据。把「生态锁定」从结构判断升级为可引用证据，这是本节点最核心也最难量化的判断。",
   "6. 【缺口】H20 对华营收的官方拆分——NVIDIA 未单独披露，$12–15B 为分析机构估，需 10-K/10-Q 地区营收 + 管理层讨论佐证。\n---"
  ]
 },
 "ac-hbm": {
  "sourceFile": "ac-hbm.md",
  "archiveId": "ac-hbm",
  "established": "2026-06-20",
  "updated": null,
  "cLevelOverall": "C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "SK 海力士（SK hynix）",
    "role": "HBM3e 主供，当前领跑",
    "scale": "HBM 份额最大（C2，TrendForce 商业口径 ~50%+，lead_only）",
    "jurisdiction": "韩国利川 / 韩国法域",
    "group": null
   },
   {
    "entity": "三星电子（Samsung）",
    "role": "HBM 第二，HBM4 追赶",
    "scale": "HBM 份额第二（C2，lead_only）",
    "jurisdiction": "韩国水原 / 韩国法域",
    "group": null
   },
   {
    "entity": "Micron",
    "role": "HBM 第三，唯一非韩系",
    "scale": "HBM 份额第三、上升中（C2，lead_only）",
    "jurisdiction": "美国博伊西（爱达荷）/ 美国法域",
    "group": null
   }
  ],
  "upstream": [
   "HBM 自己绕不开的东西，每一项都可能是再下一层的单点：",
   "**TC bonder / 键合设备：Hanmi Semiconductor（韩国）**。把十几层 die 热压键合（TC bonding）的设备，Hanmi 是 SK 海力士 HBM 产线的核心供给方、长期近独占地位（C2–C3，行业广知 SK 海力士 TC bonder 主要来自 Hanmi；ASMPT 在切入）。这是「HBM 单点之下的孙单点」——键合设备卡住，HBM 产能就上不去。【缺口：Hanmi 是否为 SK 海力士 TC bonder 唯一来源、ASMPT 实际切入份额——需 Hanmi/ASMPT 资料 + SEMI 报告原文。若证实近独占，值得单独建子节点 **ac-hbm-tcbonder**】",
   "**MR-MUF 模塑底填材料：Namics（日本）等**。SK 海力士 MR-MUF 工艺用的环氧模塑料/底填材料，少数日系材料商供给，又是一个隐形物料瓶颈（C2，需核唯一性）。【缺口：MR-MUF 关键材料供给方名单与集中度——needs source】",
   "**先进 DRAM 制程产能**：HBM 的每一层都是先进制程 DRAM die，等于 HBM 绑着三家自己的 DRAM 晶圆产能。DRAM 产能转去做 HBM，就挤占普通 DRAM 供给——这是 HBM 紧缺同时推高普通内存价格的机制。",
   "**TSV / 硅通孔工艺 + 测试设备**：打通十几层 die 的 TSV 蚀刻/电镀、堆叠对位、KGSD（known-good stacked die）测试，设备与良率 know-how 是壁垒，非主要单点但不可缺。",
   "**CoWoS 先进封装（下游侧的强绑定）**：严格说 CoWoS 是 HBM 的「出口端」而非上游——堆好的 HBM 要靠 TSMC CoWoS 和 GPU die 拼一起。它把 ac-hbm 和 ac-fab/ac-gpu 在封装层焊死（2023–2024 AI 芯片荒一度卡在 CoWoS 而非 HBM 本身，C3）。",
   "评估：HBM 不是矿产/物理地理单点，是「工艺 + 产能 + 设备」三重工程单点。它下面藏着 Hanmi（韩，TC bonder）和 Namics（日，MR-MUF 材料）两个孙单点——和 EUV 光源下面藏着 Trumpf 同构。任何一环卡住，HBM 产能就爬不上去。"
  ],
  "downstream": [
   "**致命依赖：ac-gpu（NVIDIA / AMD / 自研 ASIC）**。每一颗 AI 训练/推理加速器都要贴 HBM，没有 HBM 就没有高端加速器。NVIDIA 是 HBM 最大单一买家，H100/H200/B 系全靠 HBM3/HBM3e 喂带宽。依赖强度：致命，且短期无等量替代（带宽密度上 GDDR 顶不了 AI 训练）。",
   "**致命依赖：所有 AI 算力扩张**。HBM 产能直接是全球 AI 加速器出货的上限之一——2024–2025 HBM 紧缺期，HBM 产能就是约束加速器产量的几个瓶颈之一（与 CoWoS 并列）。",
   "**次级依赖：HPC / 高端网络 / 部分数据中心 FPGA**。也用 HBM，但量级远小于 AI 加速器。",
   "依赖强度：致命。HBM 是 ac-gpu 的物理必需件，ac-gpu 又是整个 AI 算力栈的汇聚下游——HBM 卡住，往上一路卡到全球 AI 能力扩张。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "- **三家之间互相顶替（SK 海力士 ↔ 三星 ↔ Micron）**：fallback 等级 `partial`。按五问：\n  - 替代哪一层 = HBM 同代产品供给（如 NVIDIA 从 SK 海力士分单给三星/Micron）；\n  - 多久接上 = 认证周期以季度到年计（NVIDIA 对每家每代 HBM 单独做长周期认证）；\n  - 卡在哪 = 认证门槛（功耗/发热/良率），三星 HBM3e 卡在认证就是活例；\n  - 谁有权启动 = 买家（NVIDIA 已在做多元化，分单给三家分摊风险）；\n  - 现场能不能执行 = 能分单，但要换的那家得先过认证、还得有产能。\n  - 结论：`partial fallback`——三家确实是真·三点（不像 EUV 光源那种连第二家都没有），但「换一家就能即时顶上等量产能」不成立，受认证周期 + 产能爬坡双重约束。这让 HBM 比 ac-fab/EUV 软一档：它是偏斜寡头，不是单点。\n- **GDDR7 / LPDDR 等替代 HBM**：fallback 等级 `blocked`（对 AI 训练）。带宽密度差一个数量级，顶不了前沿大模型训练；只在部分推理/边缘场景可用，是 `not available` 而非 fallback。\n- **中国本土 HBM（长鑫存储 CXMT 等）**：fallback 等级 `forced planned`。被 BIS 3A090.c 逼出来的国产替代，在追 HBM2/HBM3，但代际落后、且受先进 DRAM 制程上限制约（同 ac-fab 封锁逻辑）。是「被迫的本土化起步」，非等量替代。【缺口：CXMT HBM 实际量产代际与良率——needs source，不推测】"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **HBM 全球市场规模**：2024 年约 **150–200 亿美元**量级、2025 年快速放量（C2，来源为 TrendForce 等商业机构估算 = **lead_only**，非官方原文，引用注明口径）。【缺口：HBM 市场规模的可引用原文——商业机构报告付费墙；官方发行人不单独披露 HBM 单品营收，故绝对市场规模停在 C2 商业估算】\n- **代理指标（官方发行人原文，C3）**：\n  - **SK 海力士 FY2025 合并营收 97.1467 万亿韩元**（约 700 亿美元量级，+47% YoY，自 FY2024 的 66.193 万亿韩元）；**营业利润 47.2063 万亿韩元（+101% YoY），营业利润率 49%**（C3，SK 海力士 FY2025 官方发布，2026-01-28，来源 `snapshots/hbm/HBM_official_IR_releases.md`）。SK 海力士官方称「HBM 营收同比翻倍以上」，但未披露 HBM 绝对营收。\n  - **Samsung Q4 2025 合并营收 93.8 万亿韩元**（历史新高，+9% QoQ）、营业利润 20.1 万亿韩元（C3，Samsung 官方 newsroom）；存储业务创季度营收/利润新高、HBM 销售扩大。\n  - **Micron FY2025 10-K**（财年截至 2025-08-28，C3，SEC EDGAR 原文存在，文件 `downloads/hbm/Micron_Form_10-K_FY2025_SEC.htm`，35 处 HBM 提及）；Micron MD&A 讨论 HBM 爬坡/产能/capex，但不总是单列 HBM 单品营收。\n- 口径提示：三家都是「DRAM/存储综合营收」，HBM 是其中高增长子项，官方均不单列 HBM 绝对营收。HBM 市场规模只能靠商业机构估算（lead_only），引用时务必注明非官方原文。",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "三寡头，偏斜分布：\n- CR3（SK 海力士 + 三星 + Micron）≈ **100%**（C3，三家为唯三量产者）。\n- CR1（SK 海力士）：HBM 份额最大，常见商业口径 ~50%+（C2，**TrendForce lead_only，本节点不作 primary**）。\n- price maker：当前是 **SK 海力士**——HBM3e 这一代靠领先份额 + 认证优势对 HBM 价格/产能分配有主导影响。但价格主导是「当代」的，会随 HBM4 代际更替和买方多元化（NVIDIA 分单）被稀释，不如单点稳固。\n- 【缺口：HBM 三家份额 + HHI 的可引用原文口径——商业机构付费墙 + 官方不披露，停在 C2】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 毛利率/营业利润率 | 市值/估值 | 来源 |\n|---|---|---|---|---|\n| **SK 海力士** | FY2025 合并 **97.1467 万亿韩元**（约 $700 亿量级，+47%，C3）| 营业利润 47.2063 万亿韩元、**营业利润率 49%**（FY2025，C3）| 韩国上市（KOSPI），市值随存储周期波动（C2，需指定日期）| SK 海力士 FY2025 官方发布（2026-01-28）|\n| **三星电子** | Q4 2025 合并 **93.8 万亿韩元**（季度，全公司含手机/面板，C3）| Q4 营业利润 20.1 万亿韩元（全公司，C3）；存储分部单列需补 | 韩国上市，市值大（C2）| Samsung 官方 newsroom Q4/FY2025 |\n| **Micron** | FY2025 10-K（截至 2025-08-28，C3 存在性）；HBM 单品营收常不单列 | 综合毛利率随周期波动（需 10-K 逐字核）| 美国上市（NASDAQ: MU），市值随周期波动（C2）| Micron FY2025 10-K（SEC EDGAR）|\n\n政治含义：HBM 三家都是**资本纵深极厚的存储巨头**——SK 海力士 49% 营业利润率（FY2025）是 HBM 紧缺 + 高端议价的直接财务证据，普通 DRAM 周期低谷时它会亏，HBM 把它从周期里拉了出来。这层资本纵深意味着，对华 HBM 管制（3A090.c）打到 SK 海力士/三星的中国营收，但伤不了它们命门——它们的 HBM 利润主体来自非中的 AI 需求（卖给 NVIDIA 等美系加速器厂）。和 ac-gpu 的 NVIDIA 同构：管制打中国营收，不动命门。\n【缺口：三家 HBM 单品营收 + 三星存储分部独立财务 + Micron 10-K 逐字毛利率/地区营收——需各家 10-K/事业报告书逐字核】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "两个方向：\n- **本节点对下游的收入敞口**：HBM 三家的 HBM 营收高度集中于少数 AI 加速器买家，**NVIDIA 是 HBM 最大单一买家**——HBM 厂对 NVIDIA 的采购周期高度敞口（C2，三家均未逐字披露对单一客户的 HBM 营收占比）。这是双向锁定：加速器厂依赖 HBM 供货，HBM 厂也依赖 AI capex 周期。\n- **下游对本节点的成本/产能敞口**：HBM 占一颗高端 AI 加速器封装物料成本的比例显著且在上升（C2，行业估算常见区间「HBM + 先进封装合计为加速器 BOM 的可观份额」，具体比例无官方原文，估算标 C2）。HBM 断供时，加速器厂在手 + 在途 HBM 库存能撑出货多久取决于囤货（以季度计），但新一代加速器的爬坡节奏直接被 HBM 产能分配卡死。\n- 【缺口：HBM 占 AI 加速器 BOM 成本的具体比例——需第三方拆解（如 TechInsights）或厂商披露；HBM 厂对 NVIDIA 的营收占比——需各家 10-K 客户集中度】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "**场景 A：美国对华 HBM 管制（已实际发生，BIS 2024.12 3A090.c）**\n- 2024.12.2 BIS IFR 把高带宽密度 HBM（>2 GB/s/mm²，「所有现产 HBM 堆栈均超此阈值」）对华（Macau + D:5）锁住，并用 FDP 把韩系 HBM 也罩进来（见政治传动层）。\n- 冲击落点：**中国本土先进 AI 芯片产业**——昇腾等国产加速器原本依赖进口 HBM，3A090.c 明确意图就是「切断 PRC 先进 AI 芯片对进口 HBM 的依赖、拖慢其 AI 芯片自给」（IFR 原文表述，verbatim）。中国被迫退回 CXMT 等本土 HBM（代际落后）。\n- 对 SK 海力士/三星：损失部分中国 HBM 营收，但 HBM 利润主体在非中 AI 需求，资本纵深吸收得住（同 ac-gpu 逻辑）。\n- 量级：HBM 对华营收无官方拆分；中国 AI 算力自给受拖慢的量级无法单独定价【缺口：需中国进口 HBM 规模数据 + CXMT 产能爬坡评估】。\n\n**场景 B：HBM 上游/产能中断（韩国集中风险）**\n- 领跑两家（SK 海力士 + 三星）都在韩国，HBM 高端产能地理上集中于韩国。若韩国出现重大中断（地震/战争/电力/罢工），或 Hanmi（TC bonder）/Namics（MR-MUF 材料）孙单点断供：全球高端 AI 加速器出货瞬间受限，不分敌友。\n- 量级：HBM 是 AI 加速器物理必需件，此场景冲击 ≈ 传导到 ac-gpu → 全球 AI 算力扩张停滞，量级对标 ac-gpu 上游中断情景（C2 推算）。这是 HBM 被系统性低估的风险——政治管制是已知已做的，韩国地理集中 + 孙单点（Hanmi/Namics）的非政治工业风险更隐蔽。\n- 【缺口：HBM 产能的韩国地理集中度量化 + Hanmi/Namics 唯一性——needs source】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链利润在 HBM 紧缺期高度沉淀在 **HBM 三家（尤其领跑的 SK 海力士）**：\n- SK 海力士 FY2025 营业利润率 49%（C3）——HBM 把存储厂从周期性薄利拉到高利，是「紧缺时定价权」的直接证据。这层利润是周期性的：HBM 紧缺则厚，产能过剩则薄，不像 NVIDIA 的 75% 毛利那样靠生态锁定常态化。\n- 上游：TC bonder（Hanmi）/MR-MUF 材料（Namics）在 HBM 景气时跟着吃肉，但议价权弱于 HBM 厂；先进 DRAM 产线是三家自有。\n- 下游：NVIDIA 等加速器厂把 HBM 成本转嫁进加速器售价（加速器毛利 75% 仍能吸收 HBM 涨价），AI 实验室/云最终买单。\n- 政治压力传导：对华 HBM 管制（3A090.c），第一打击中国 AI 产业（拿不到先进 HBM），其次是 SK 海力士/三星的中国营收。但因 HBM 利润主体在非中 AI 需求 + 三家资本纵深，管制打不动它们命门。HBM 厂真正的命门不是政治管制，是**韩国地理集中的物理风险 + AI capex 周期一旦逆转的需求风险 + 代际竞赛掉队**（三星 HBM3e 掉队就是活例）。\n\n---",
    "cLevels": [
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "BIS 2024.12 IFR 新设 ECCN 3A090.c 管制 HBM（带宽密度 > 2 GB/s/mm²，现产 HBM 全超阈值）",
    "level": "C4",
    "source": "FR-2024-12-05 / 2024-28270 verbatim"
   },
   {
    "item": "3A090.c 对韩系 HBM 经 FDP §734.9(h) 触发 EAR",
    "level": "C4",
    "source": "同上 IFR verbatim"
   },
   {
    "item": "co-packaged HBM+逻辑（dominant=processing）排除于 3A090.c、改归 3A090.a/.b",
    "level": "C4",
    "source": "同上 IFR verbatim"
   },
   {
    "item": "IFR 意图明示为「拖慢 PRC 进口 HBM 依赖 / AI 芯片自给」",
    "level": "C4",
    "source": "同上 IFR verbatim"
   },
   {
    "item": "SK 海力士 FY2025 营收 97.1467 万亿韩元（+47%）、营业利润率 49%",
    "level": "C3",
    "source": "SK 海力士 FY2025 官方发布（2026-01-28）"
   },
   {
    "item": "SK 海力士「HBM 营收同比翻倍以上」、HBM >40% DRAM 营收（4Q24）",
    "level": "C3",
    "source": "SK 海力士官方发布"
   },
   {
    "item": "Samsung Q4 2025 营收 93.8 万亿韩元、营业利润 20.1 万亿韩元、HBM4「本季度」交付",
    "level": "C3",
    "source": "Samsung 官方 newsroom"
   },
   {
    "item": "Micron FY2025 10-K 存在（FY 截至 2025-08-28，35 处 HBM）",
    "level": "C3",
    "source": "SEC EDGAR 原文"
   },
   {
    "item": "SK 海力士/三星/Micron 为唯三 HBM 量产者",
    "level": "C3",
    "source": "行业广知"
   },
   {
    "item": "HBM 三家份额拆分（SK 海力士 ~50%+ 领跑）",
    "level": "C2",
    "source": "TrendForce 商业口径 = lead_only"
   },
   {
    "item": "HBM 全球市场规模 ~150–200 亿美元（2024）",
    "level": "C2",
    "source": "商业机构估算 lead_only"
   },
   {
    "item": "Hanmi 为 SK 海力士 TC bonder 近独占供给",
    "level": "C2–C3",
    "source": "行业广知"
   },
   {
    "item": "HBM 占 AI 加速器 BOM 成本显著份额",
    "level": "C2",
    "source": "行业估算"
   },
   {
    "item": "三星 HBM3e 一度卡 NVIDIA 认证（功耗/发热）",
    "level": "C2–C3",
    "source": "广泛报道"
   },
   {
    "item": "HBM 领跑地位是「当代认证领先」、随代际可重洗（real force 较脆）",
    "level": "C2",
    "source": "结构判断"
   }
  ],
  "contested": {
   "title": "BIS 2024-12-05 IFR——HBM 首次被纳入 ECCN 3A090.c，FDP 覆盖韩系制造商",
   "summary": "**动作一：校准颗粒度**"
  },
  "gaps": [
   "1. 【缺口】Hanmi Semiconductor 是否为 SK 海力士 TC bonder 唯一/近独占来源、ASMPT 实际切入份额——需 Hanmi/ASMPT 公开资料 + SEMI 供应链报告原文。这是判定「HBM 单点之下是否藏着孙单点 ac-hbm-tcbonder」的核心证据，直接决定要不要单独建子节点。",
   "2. 【缺口】HBM 三家份额 + HHI 的可引用原文口径——TrendForce 等为商业付费墙（lead_only），官方发行人不单列 HBM 单品营收。当前份额只能停在 C2，制约 Q2 集中度判断的证据级。",
   "3. 【缺口】3A090.c 对韩系 HBM 的 FDP 实际触发判定——具体哪些美国技术/设备/EDA 成分使 SK 海力士/三星 HBM 落入 §734.9(h)——需 BIS 配套指引/FAQ 或案例。决定政治传动层「美国靠 FDP 罩进盟友 HBM」的实操强度。",
   "4. 【缺口】MR-MUF 关键材料（Namics 等）供给方名单与集中度——needs source。验证第 5 维第二个孙单点的硬度。",
   "5. 【缺口】HBM 占 AI 加速器封装 BOM 成本的具体比例——需 TechInsights 等第三方拆解或厂商披露。把 Q4 下游成本敞口从 C2 估算升级为可引用值。",
   "6. 【缺口】HBM 产能的韩国地理集中度量化（SK 海力士 + 三星 HBM 产能在韩占比）——needs source。验证 Q5 场景 B「韩国地理集中风险」的量级。",
   "7. 【缺口】Micron FY2025 10-K 逐字核 HBM 相关营收/capex/毛利率 + 地区营收——SEC EDGAR 原文已在库（`downloads/hbm/Micron_Form_10-K_FY2025_SEC.htm`），待精读提取，补 Q3 唯一本土玩家的资本纵深。",
   "8. 【缺口】中国本土 HBM（CXMT）实际量产代际与良率——needs source，不推测。判定第 7 维「forced planned」fallback 的真实进度。\n---"
  ]
 },
 "ac-narr": {
  "sourceFile": "ac-narr.md",
  "archiveId": "ac-narr",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "这个节点不是一台机器，而是一套说法。\"AI 主权\"\"算力主权\"\"主权 AI\"这些词，在过去几年从科技公司的营销话术变成了各国政府文件里的正式语言。它的作用是给一批具体的政策动作提供理由：为什么要限制先进芯片出口、为什么要花公共财政在本国建数据中心、为什么要求 AI 模型和数据留在境内。谁依赖它？主要是想推动这些政策的政府、想卖硬件的厂商（Nvidia 是最大的受益者之一），以及为政策背书的智库。它可能是卡点，也可能不是——它本身不切断任何物理流动，但它决定一个国家愿不愿意去动那些真正的卡点（先进芯片、EUV、HBM）。所以它是政治栈人心那一层的力量：一套被广泛接受的说法，让原本会被质疑的管制和补贴变得顺理成章。\n\n---",
  "holders": [
   {
    "entity": "美国商务部工业安全局（BIS）",
    "role": "用\"国家安全\"作为出口管制法律依据，把叙事写进具体规则",
    "scale": "依据《出口管制改革法》（ECRA 2018）、EAR；2022-10 先进 AI 芯片管制起，2023/2024/2025 多次扩围（C2，多方报道）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "欧盟委员会",
    "role": "\"技术主权\"\"战略自主\"叙事的主要官方生产者",
    "scale": "首次系统写入官方文件为 2020-02《塑造欧洲的数字未来》通信（C2，欧委会/媒体转引）",
    "jurisdiction": "欧盟",
    "group": null
   },
   {
    "entity": "Nvidia",
    "role": "厂商侧最积极推广\"主权 AI\"提法，兼最大受益者",
    "scale": "FY2026 \"sovereign AI\" 营收据报道超 $300 亿、约占其总营收 14%（C2，媒体转引 [待核实]）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "各国政府（中/印/沙特/法等）",
    "role": "各自版本\"主权 AI\"，为本土建厂与数据本地化背书",
    "scale": "具体政策文件待研究",
    "jurisdiction": "各法域",
    "group": null
   },
   {
    "entity": "智库与产业媒体",
    "role": "放大与加工叙事，为政策提供论证",
    "scale": "待研究",
    "jurisdiction": "多法域",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": null,
   "unstructured": false,
   "text": "总判：仍在运营"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "叙事本身没有市场规模。可间接观察的是它背书的资金流：各国\"主权 AI\"相关的公共投入、Nvidia \"sovereign AI\" 营收（据报道 FY2026 超 $300 亿，C2 [待核实]）。具体各国财政投入数字待研究（草图未覆盖）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "可量化的行使记录：美国 BIS 自 2022-10 起针对先进 AI 芯片的管制规则次数（2022/2023/2024/2025 多轮，C2 媒体转引）；2025-01 报道的\"AI 扩散规则\"把 120 多个国家分三档（C2 媒体转引 [待核实]）。精确的许可证数量、管制条目数待研究（草图未覆盖）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "美国以\"国家安全\"为据的 AI 芯片管制自 2022-10 起多轮扩围",
    "level": "C2",
    "source": "多方媒体报道"
   },
   {
    "item": "\"技术主权\"首次系统入欧盟官方文件为 2020-02《塑造欧洲的数字未来》",
    "level": "C2",
    "source": "欧委会/媒体转引"
   },
   {
    "item": "von der Leyen 2019-11 就任演说提\"掌握关键技术\"",
    "level": "C2",
    "source": "媒体转引"
   },
   {
    "item": "Nvidia FY2026 \"sovereign AI\" 营收超 $300 亿、约占 14%",
    "level": "C2",
    "source": "媒体转引 [待核实]"
   },
   {
    "item": "Nvidia H20 于 2026-04 被禁、计提约 $55 亿减值",
    "level": "C2",
    "source": "媒体转引 [待核实]"
   },
   {
    "item": "2025-01 \"AI 扩散规则\"分三档、覆盖 120+ 国",
    "level": "C2",
    "source": "媒体转引 [待核实]"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "\"技术主权\"叙事首次系统进入欧盟官方文件，一般认为是 2020-02 欧委会《塑造欧洲的数字未来》通信；更早的政治宣示是 von der Leyen 于 2019-11 就任演说提出\"欧洲必须掌握关键技术\"（C2，欧委会/媒体转引）。这是叙事被写进官方文件、成为政策语言的一个可指名节点。另一个持续被争夺的场域是美国 AI 芯片出口管制：2022-10 至今，\"国家安全\"这个框架被反复调用来为一轮轮扩围的管制背书，同时被产业界以\"过度管制伤害本国竞争力\"反向争夺（C2，多方报道）。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. 美国 BIS 历次先进 AI 芯片管制规则原文（联邦公报，含 2022-10、2023-10、2024、2025 各版）。",
   "2. 2025-01\"AI 扩散规则\"（AI Diffusion Rule）原文与三档国别清单。",
   "3. 欧委会 2020-02《塑造欧洲的数字未来》通信原文，核对\"技术主权\"用词。",
   "4. Nvidia 10-K / 财报里\"sovereign AI\"营收口径与准确数字。",
   "5. 主要国家\"主权 AI\"官方战略文件（法国、沙特、印度、中国各自版本）。",
   "6. 智库（如 CSIS、ECIPE、布鲁金斯）关于算力主权的代表性报告，看叙事如何被加工。",
   "7. Nvidia H20 出口时间线与减值公告一手来源。"
  ]
 },
 "ac-power": {
  "sourceFile": "ac-power.md",
  "archiveId": "ac-power",
  "established": "2026-06-29",
  "updated": "2026-06-29",
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Dominion Energy（弗吉尼亚）",
    "role": "北弗吉尼亚配电法定垄断",
    "scale": "FY2023 约 $140 亿（C3，广知，待年报核）",
    "jurisdiction": "美国弗吉尼亚，受 SCC + FERC 监管",
    "group": null
   },
   {
    "entity": "EirGrid",
    "role": "爱尔兰高压输电系统运营商",
    "scale": "国有，非营利",
    "jurisdiction": "爱尔兰法域，受 CRU 监管",
    "group": null
   },
   {
    "entity": "PJM Interconnection",
    "role": "美国东部区域输电组织（管理互联申请队列）",
    "scale": "非营利",
    "jurisdiction": "FERC 联邦监管",
    "group": null
   },
   {
    "entity": "Constellation Energy",
    "role": "美国最大核电运营商，TMI PPA 方",
    "scale": "FY2023 约 $235 亿（C3，广知，待年报核）",
    "jurisdiction": "美国，受 NRC + FERC 监管",
    "group": null
   },
   {
    "entity": "IMDA（新加坡）",
    "role": "数据中心许可机构",
    "scale": "政府机构",
    "jurisdiction": "新加坡法域",
    "group": null
   }
  ],
  "upstream": [
   "**en-lng**（天然气发电）：美国天然气发电约占电网供给 43%（C3 广知）。天然气价格波动直接影响电力价格，进而影响数据中心运营成本。",
   "**re-solar-module / re-polysilicon**（太阳能）：超大规模运营商通过长期 PPAs（购电协议）大量采购太阳能，太阳能面板供应链高度集中于中国——ac-power 上游的可再生能源转型依赖中国供应链，这一风险已通过 re 节点传导进来。",
   "**cm-ree**（稀土磁体）：风电机组（永磁体）和部分电动机依赖重稀土，是可再生能源建设的隐形上游约束。",
   "**大型电力变压器**：新建数据中心园区接入电网的实际物理瓶颈之一，当前供货周期约 36 个月（C4，DOE Large Power Transformer Resilience Report to Congress, July 2024），最长可达 60 个月；历史水平约 1–2 年已过时。美国大型变压器约 82% 进口（C4，DOE 2024 年报，2019 年基期数字），GOES 原材料来自日本和韩国，整机制造竞争主要来自墨西哥和韩国（加拿大不在 DOE 报告列举的主要整机来源国）。",
   "**冷却水**（隐形约束）：台湾 TSMC 台南园区是台湾最大单体用电户和用水户，2021 年旱灾迫使 TSMC 临时启动紧急水资源调配措施。制造层有类似 ac-power 的物理约束：水和电一样不可储存、地理绑定。"
  ],
  "downstream": [
   "ac 栈所有上层节点均依赖 ac-power：",
   "**ac-fab（晶圆厂）**：TSMC 台南园区用电约占台湾总用电约 9%（FY2023，C3，台湾电力公司广知口径）。先进芯片制造是全球单位面积用电量最高的工业活动之一。",
   "**ac-gpu（GPU 服务器）**：一张 NVIDIA H100 TDP 约 700W；10,000 张 GPU 训练集群功耗约 7 MW，再加上冷却和其他基础设施，单个大型训练集群园区功耗可达 50–200 MW。",
   "**ac-cloud（超大规模云）**：三大 Hyperscaler（AWS/Azure/GCP）的电力账单是其 OpEx 最大单项之一，约占数据中心运营成本 40–50%（C2 行业估算）。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "**总判**：`partial`。对已建成数据中心无即时替代；对新增产能，存在地理重选址可能，但周期以年计。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球数据中心用电量约 240–340 TWh（2022 年，C4，IEA Data Centres and Data Transmission Networks 2024 原文核实）；2024 年实际已达 415 TWh（C4，同来源）。以全球平均工业电价约 $0.07–0.10/kWh 估算，这对应年电费约 $170–340 亿（C2 推算）。\n\nAI 专项用电（训练+推理）约 100–200 TWh（C3，IEA 广知估算，原文未单独列出此数字）。预计 2030 年，全部数据中心用电量约 945 TWh（C3，IEA Energy and AI 2024 预测，含所有数据中心非仅 AI 专项）；AI 专项约 500 TWh（C2，BCG/Goldman Sachs 估算，口径仅含 AI 专用数据中心，与 IEA 945 TWh 范围不同）。\n\n注意：这个\"市场规模\"与大多数 ac 栈节点不同——衡量的是 AI 算力集群对电力这种大宗能源的年消耗价值，不是单一产品市场。电力市场本身规模远大于数据中心专用部分，无法拆分统计。",
    "cLevels": [
     "C4",
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "在任何特定地理集群内，配电 CR1 ≈ 100%（法定垄断）。这使\"全球集中度量化\"失去意义——全球有很多电力供给，但在任何单一地理集群（北弗吉尼亚、都柏林、新加坡），电力接入权集中于一家法定垄断。\n\nPrice maker：监管机构通过电价申请审批定价，不是市场竞争。大型数据中心用户在美国某些地区可以签长期购电协议（PPA）锁定价格，但接入资格本身不通过 PPA 绕开。",
    "cLevels": []
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 来源 / 年份 | 数据级别 |\n|---|---|---|---|\n| Dominion Energy | 约 $140 亿 | FY2023 广知 | C3，待年报核 |\n| Constellation Energy | 约 $235 亿 | FY2023 广知 | C3，待年报核 |\n| EirGrid | 国有，无营收目标 | — | — |\n| PJM Interconnection | 非营利 | — | — |\n\nDominion Energy 的监管资产回报率约 9–10%（受 SCC 监管，稳定但有上限，C3 广知）。Constellation Energy 2023–2024 年股价因 AI 核电 PPA 需求大幅上涨（C3 广知）。\n\n【缺口：Dominion Energy FY2023 10-K——弗吉尼亚数据中心专项负载量化（MW）和 IRP 修订内容；影响 Q3、Q4 精度】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 电力成本占数据中心 OpEx 约 40–50%（C2 行业估算，无单家公开披露）\n- TSMC 台南园区约占台湾总用电约 9%（FY2023，C3 广知，待台湾电力公司年报核）\n- 北弗吉尼亚数据中心总容量 >3 GW（C3 IEA/Synergy 广知）\n\n库存/缓冲：电力无库存。数据中心备用电源（UPS+柴油发电机）通常覆盖分钟至数小时，不能应对区域性长期供电中断。",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "- 北弗吉尼亚区域性供电中断（24 小时假设情景）：北弗吉尼亚约占北美数据中心产能 25%、全球约 13%（JLARC 口径），一次区域性中断的直接经济损失可能在数十亿美元量级（C1，无专项报告，数量级推算）。**须剔除一个已证伪的旧锚**：早年广传的\"承载全球约 70% 互联网流量\"来源不明、已被证伪（Cardinal News 2025-07 查证连弗吉尼亚经济发展署都说不清出处），本节点不再以它作量级依据；改用有分母的产能占比 + 已有的 >3 GW 装机硬口径。\n- 爱尔兰 EirGrid 接入限制（2021-今）：至少 10+ 个大型数据中心项目被延迟或取消（C3 广知），欧洲数据中心投资转移至荷兰/西班牙/波兰，规模约 $50–100 亿（C2 推算）。\n- 新加坡许可暂停（2019–2022）：东南亚数据中心投资部分转移至印度尼西亚、马来西亚（C3 广知）。\n\n【缺口：需要 Lawrence Berkeley National Laboratory Data Center Energy Use 报告或 IEA 专项报告，量化停电经济损失。目前 Q5 为 C1–C2 推算。】",
    "cLevels": [
     "C1",
     "C3",
     "C2",
     "C1–C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "在受监管的电力市场（美国大部分），利润主要沉淀在配电公司（监管资产回报率 9–10%，稳定但有上限，价格由监管机构设定）。超大规模运营商在电力这条价值链上是**价格接受方**，不是价格制定方——与他们在算力链（NVIDIA 是超大规模运营商的实际供货方）上的强势议价地位形成结构性对比。\n\n长期 PPA 结构：固定价格 PPA 把价格风险从数据中心转移给发电商。若电价上涨，发电商无法受益（固定 PPA 价格）；若电价下跌，数据中心无法受益（已锁定 PPA）。这是一种风险分摊，而非单向的价值剥削。\n\n大型变压器：利润流向制造商（ABB、西门子能源、GE Vernova），多数在美国境外制造；进口依赖是价值流的一个漏出点，且在供应链紧张时制造商有明显定价权。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "全球数据中心用电量约 240–340 TWh（2022 年）",
    "level": "C4",
    "source": "IEA Data Centres and Data Transmission Networks 2024 原文核实"
   },
   {
    "item": "全球数据中心用电量 2024 年实达 415 TWh",
    "level": "C4",
    "source": "IEA 同来源"
   },
   {
    "item": "AI 数据中心用电约 100–200 TWh",
    "level": "C3",
    "source": "IEA 广知估算"
   },
   {
    "item": "爱尔兰数据中心用电占全国约 18%（2022）",
    "level": "C3",
    "source": "EirGrid 广知口径"
   },
   {
    "item": "CRU/21/124 都柏林接入限制（2021-11-23 生效）",
    "level": "C4",
    "source": "CRU/21/124 完整 PDF 892KB 已入库"
   },
   {
    "item": "新加坡 IMDA 2019-11 数据中心许可暂停",
    "level": "C4",
    "source": "IMDA 官网公告"
   },
   {
    "item": "Constellation × Microsoft TMI PPA（20 年，835 MW，2024-09 宣布）",
    "level": "C4",
    "source": "Constellation Energy 新闻稿已入库"
   },
   {
    "item": "三里岛（Crane Clean Energy Center）预计 2028 年投运，非 2024 重启",
    "level": "C4",
    "source": "Constellation 新闻稿已入库"
   },
   {
    "item": "Dominion Energy FY2023 年营收 $143.9 亿",
    "level": "C4",
    "source": "Dominion FY2023 公开数据"
   },
   {
    "item": "Dominion 弗吉尼亚数据中心占电力销售 24%（2023）",
    "level": "C4",
    "source": "Dominion FY2023 公开数据"
   },
   {
    "item": "Constellation Energy FY2023 年营收约 $235 亿",
    "level": "C3",
    "source": "广知，待年报核"
   },
   {
    "item": "TSMC 台南园区用电占台湾总用电约 9%",
    "level": "C3",
    "source": "台湾电力公司广知口径"
   },
   {
    "item": "数据中心电力成本约占 OpEx 40–50%",
    "level": "C2",
    "source": "行业估算"
   },
   {
    "item": "大型电力变压器当前供货周期约 36 个月（历史约 1–2 年已过时）",
    "level": "C4",
    "source": "DOE LPT Resilience Report to Congress, July 2024，PDF 1.9MB 已入库"
   },
   {
    "item": "北弗吉尼亚数据中心总容量 >3 GW",
    "level": "C3",
    "source": "IEA/Synergy 广知"
   },
   {
    "item": "~~北弗吉尼亚承载全球约 70% 互联网流量~~ 已证伪；改用：约占北美数据中心产能 25%、全球约 13%",
    "level": "JLARC / Cardinal News 2025-07",
    "source": "70% 来源不明已证伪，勿再用；节点各处已改"
   },
   {
    "item": "美国大型变压器约 82% 进口（2019 年基期）",
    "level": "C4",
    "source": "DOE LPT 报告已入库"
   },
   {
    "item": "弗吉尼亚 SCC 数据中心接入等待约 3–5 年（2023–24）",
    "level": "C3",
    "source": "Dominion Energy IRP 会议记录广知"
   },
   {
    "item": "Google / Amazon / Microsoft 核电 PPA 合计签约约 10+ GW",
    "level": "C3",
    "source": "各公司新闻稿广知"
   },
   {
    "item": "美国天然气发电约占电网 43%",
    "level": "C3",
    "source": "EIA 广知"
   }
  ],
  "contested": {
   "title": "爱尔兰 EirGrid + CRU 都柏林地区数据中心接入限制（2021-11 至今）",
   "summary": "用五个阅读动作来读这场争夺：\n**① 校准颗粒度**：争夺的不是\"爱尔兰的电力本身\"，而是在都柏林这一特定地理集群内，新数据中心的电网接入申请资格。CRU 2021-11-23 发布的方向指令 CRU/21/124 把申请分层：都柏林地区新接入事实上被暂停；现有已获批项目继续建设；爱尔兰其他地区不受限制。注意：CRU/21/124 原文未设 \"100MW 以上\" 容量门槛，适用于都柏林地区所有数据中心新接入申请。这是一个地理精确的、针对特定负载类型的接入管理，而非全面断电或拒绝所有类型用户。"
  },
  "gaps": [
   "~~1. 【缺口：IEA Data Centres and Data Transmission Networks 2024 全文】~~ **已填补（2026-06-29）**：IEA 以网页分散发布无单一 PDF，核心数字已核实——2022 年 240-340 TWh，2024 年 415 TWh，来源 `2024-IEA-data-centres.md`。北弗吉尼亚 70% 互联网流量数字在 IEA 原文中未找到对应来源，降至\"来源存疑 C3 待核\"。",
   "~~2. 【缺口：EirGrid Grid Development Strategy Statement Addendum（2021-11）原文】~~ **已填补（2026-06-29）**：直接法规依据 CRU/21/124 完整 PDF（892KB）已入库，修正了文件名（EirGrid GDS Addendum 非独立文件）。",
   "~~3. 【缺口：Constellation Energy 三里岛新闻稿】~~ **已填补（2026-06-29）**：新闻稿已取，835 MW / 20 年 PPA 确认；重要纠错：2024-09-22 是 PPA 宣布日，核电站投运预计 2028 年。",
   "~~4. 【缺口：Dominion Energy FY2023 10-K】~~ **已填补（2026-06-29）**：SEC EDGAR 返回 403，通过公开披露来源核实核心数字（$143.9 亿营收，弗吉尼亚数据中心占电力销售 24%）。10-K 全文 IRP 量化段未取到。",
   "~~5. 【缺口：DOE 电气设备供应链报告】~~ **已填补（2026-06-29）**：DOE LPT Resilience Report to Congress（July 2024）完整 PDF（1.9MB）已入库。修正：进口比例 82%（非 85%），当前供货周期 36 个月（非 1-2 年）。",
   "6. 【缺口：Dominion Energy IRP 全文——IRP 中数据中心负载量化具体 MW 和时间线。影响 Q4 精度。】",
   "7. 【缺口：北弗吉尼亚\"承载全球约 70% 互联网流量\"来源核实——IEA 原文未收录此数字，需找原始来源（可能是 Synergy Research 付费报告）。影响 Q5 断供冲击量化。】"
  ]
 },
 "ag-fertilizer-n": {
  "sourceFile": "ag-fertilizer-n.md",
  "archiveId": "ag-fertilizer-n",
  "established": "2026-06-27",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Yara International",
    "role": null,
    "scale": "全球最大单一生产商，年产能约 11–12 MT（C3）",
    "jurisdiction": "挪威奥斯陆，挪威/EU 法域",
    "group": "生产方（非俄）"
   },
   {
    "entity": "Nutrien",
    "role": null,
    "scale": "氮肥生产能力约 14 MT/年（C3，含氮磷钾综合）",
    "jurisdiction": "加拿大萨斯卡通，加拿大法域",
    "group": "生产方（非俄）"
   },
   {
    "entity": "CF Industries",
    "role": null,
    "scale": "年产能约 10 MT 尿素当量（C3）",
    "jurisdiction": "美国伊利诺伊，美国法域",
    "group": "生产方（非俄）"
   },
   {
    "entity": "OCI Global",
    "role": null,
    "scale": "年产能约 5–6 MT（C3，含埃及 EBIC 大型氨工厂）",
    "jurisdiction": "荷兰阿姆斯特丹注册，埃及生产主体",
    "group": "生产方（非俄）"
   },
   {
    "entity": "SABIC / SAFCO",
    "role": null,
    "scale": "尿素产能约 8 MT/年（C3）",
    "jurisdiction": "沙特阿拉伯，沙特法域",
    "group": "生产方（非俄）"
   },
   {
    "entity": "Qatar Fertiliser Co. (QAFCO)",
    "role": null,
    "scale": "全球最大单体尿素工厂群（C3）",
    "jurisdiction": "卡塔尔，卡塔尔法域",
    "group": "生产方（非俄）"
   },
   {
    "entity": "EuroChem",
    "role": null,
    "scale": "年产约 10 MT（C3）",
    "jurisdiction": "俄罗斯，私有（Andrey Melnichenko 持股 90%+）",
    "group": "俄罗斯生产方"
   },
   {
    "entity": "Uralchem",
    "role": null,
    "scale": "年产约 6–8 MT（C3）",
    "jurisdiction": "俄罗斯，私有",
    "group": "俄罗斯生产方"
   },
   {
    "entity": "Acron",
    "role": null,
    "scale": "年产约 3–4 MT（C3）",
    "jurisdiction": "俄罗斯（诺夫哥罗德），私有",
    "group": "俄罗斯生产方"
   },
   {
    "entity": "PhosAgro",
    "role": null,
    "scale": "以磷肥为主，有部分氮肥产能（C3）",
    "jurisdiction": "俄罗斯，公开上市（Moscow/GDR）",
    "group": "俄罗斯生产方"
   }
  ],
  "upstream": [
   "**天然气（en-lng / en-crude 的伴生气）**：最关键的上游，占生产成本 70–80%（C2）。这个比例意味着两件事：第一，氮肥工厂在能源价格冲击下没有对冲余地，只能减产或停产；第二，有廉价本地气（俄罗斯联邦内部受补贴气价、中东油田伴生气、美国页岩气）的生产商天然具有成本优势，欧洲工厂在此结构中长期处于边际位置。2022 年欧洲气价在俄乌战争后峰值涨幅约 3–5 倍（C3），欧洲部分氨工厂的关停不需要任何政治指令，气价本身就让它们停了（经济性断供）。",
   "**水**：哈伯-博施工艺需要大量冷却水和蒸汽，不是主要卡点（水源比气更分散）。",
   "**催化剂（铁基）**：成熟技术，无明显单点。",
   "结论：氮肥上游的单一关键约束是天然气。en-lng 节点的价格变化直接传导到 ag-fertilizer-n 的生产成本，二者的耦合强度在全图所有栈间跨栈耦合里属于最强之列。"
  ],
  "downstream": [
   "粮食种植是最大的直接下游（约 55–60% 全球氮肥消耗用于谷物，C2 IFA 口径，需原文核）：",
   "**致命依赖（季节性，非即时）**：小麦/玉米/水稻的商业化种植，一季不施氮或减施 50% 以上，下一季单产下降 30–50%（C2）。依赖不是即时的，是有一个生长季的滞后——这是全图大多数技术节点没有的时间结构。",
   "**高依赖**：商业蔬菜、棉花、甘蔗等工业性作物，氮需求量大。",
   "**可缓冲（短期）**：改用有机肥（牲畜粪便）可部分代替，但有机肥产能和运输在全球化农业体系里不是现成的替代品，短期无法规模化接替。",
   "特别注意：氮肥的\"下游\"是通过**产量**而非直接贸易流发挥杠杆——它影响的不是今天的粮食贸易，而是 4–8 个月后的收成，再通过产量数字传导到下一季粮食价格。这条传导链在 2022–2023 年全球粮食危机中清晰出现：2022 年氮肥价格暴涨，全球农民（尤其是支付能力低的发展中国家农民）减少施用量，2023 年部分地区粮食单产下滑（C3 FAO 2023 报告提及，需原文核）。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "- 替代哪一层：俄罗斯出口（约 15–20%）\n- 多久接上：中东（卡塔尔/沙特）和北美（CF Industries/Nutrien）可以增加出货，但需要 6–18 个月的合同调整和物流重组（C2）；新建氨工厂需要 3–5 年（C2）\n- 卡在哪个转换环节：①液氨（管道依赖）无法快速替代，只有尿素这类散货可以快速调船；②俄罗斯退出的边际量由谁接，取决于中东/北美是否已满产——2022 年欧洲减产的部分恰好出现在中东/北美也在满产附近的时期，边际缓冲有限；③发展中国家外汇支付能力（进口替代价更高）\n- 谁有权限启动：商业决定，无政治许可障碍（氮肥不受出口管制，非两用物项）\n- 执行能力：中东工厂有剩余产能，可以增产；但提升幅度受设备利用率上限约束\n- 结论：物量层面的 `partial` fallback 存在，但价格传导无法避免；短期（单季）农业生产有调整空间（减施、换品种、用库存），中期（2–3 季）才能真正补上"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球氮肥市场规模：\n- 合成氨（NH₃）全球年产量约 175–185 MT（C3，IFA / FAO 口径，需原文核），含直接施用和下游转化（尿素、AN 等）\n- 全球氮肥市场年贸易额：约 600–800 亿美元（正常年份，C2 推算；2022 年峰值期约 1200–1500 亿美元）\n- 尿素：全球最大宗交易化肥，年贸易量约 55–60 MT（C3，IFA），均价约 $200–400/MT（正常年份），$850–900/MT（2022 年峰值，C3）\n- 液氨国际贸易量约 18–22 MT/年（C3，远小于尿素，以区域内为主）\n\n【缺口：IFA（国际化肥工业协会）年度统计报告——全球氮肥产量/贸易量/国别份额精确数字；需典藏取 IFA 2023–2024 年报】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "| 指标 | 数值 | 来源/年份 | 备注 |\n|---|---|---|---|\n| 俄罗斯全球氮肥出口份额（氨+尿素+AN）| ~15–20%（C3）| IFA/贸易流量口径，需原文核 | 全球最大单一出口国 |\n| 中国全球氮肥生产份额 | ~30–35%（C3）| IFA 口径 | 主要内销，出口受配额管控 |\n| 尿素 CR2（中国+俄罗斯出口端）| ~30–35%（C3）| 出口端口径 | 两者主导边际供给 |\n| 合成氨 Haber-Bosch 能耗 | ~33 GJ/吨氨（C3）| 工业标准，无需原文 | 现代最优工厂约 27–28 GJ/吨，老厂更高 |\n| 天然气占氨生产成本比例 | ~70–80%（C2）| 行业广知推算 | 高气价时可达 90%+ |\n\nPrice maker：无单一 price maker；俄罗斯在出口端出量足以影响边际价格走向（C2）；中国配额政策是实际上的短期 price anchor（C3）。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收（来源/年份）| 毛利率/净利率 | 市值/估值 | 备注 |\n|---|---|---|---|---|\n| Yara International（Oslo: YAR）| ~$149 亿（FY2023，年报，C3，需核）| 毛利率约 15–20%（C2，气价影响大）| 约 $100 亿市值（C3，2023）| 挪威政府持股 36%；全球最大氮肥公司 |\n| Nutrien（NYSE: NTR）| ~$198 亿（FY2023 年报，C3，含氮磷钾）| 约 20–25% 毛利率（C2）| 约 $330 亿市值（C3，2023）| 氮肥约占其总营收 25–30% |\n| CF Industries（NYSE: CF）| ~$66 亿（FY2023，年报，C3，需核）| 约 35–40% 毛利率（高峰年）；2023 年约 20–25%（C2）| 约 $140 亿市值（C3，2023）| 专注氮肥，美国最大 |\n| OCI Global（AMS: OCI）| ~$50 亿（FY2023，C3，2024 年部分资产出售）| 约 20–30% 毛利率（C2）| 私有化过程中（C3）| Koch Ag 2023–24 年收购部分资产 |\n| EuroChem（俄罗斯，私有）| ~$60–80 亿（C3，私有，媒体估算）| 不披露 | 私有 | 2022 年后出口受间接制裁压力，欧洲分销受影响 |\n| Uralchem（俄罗斯，私有）| ~$30–50 亿（C3，私有，媒体估算）| 不披露 | 私有 | 控 Togliattiazot，液氨管道主体 |\n\n注：俄罗斯公司在 2022 年后的财务数据几乎无可靠公开披露，数字均为 C3 估算。各公司毛利率在气价剧烈波动时变化极大（2022 年高峰年利润暴增，2023 年随气价/肥料价格回落而收缩）。\n\n【缺口：Yara FY2023 年报精确营收和分地区生产成本——决定欧洲氨工厂减产幅度；CF Industries FY2023 10-K——北美产能利用率；EuroChem 2022–23 年出口量变化——需行业报告或媒体披露】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "方向一（本节点对下游成本的影响）：\n- 氮肥（尿素）占谷物种植总成本约 15–25%（C2，取决于作物类型和价格周期）；2022 年峰值期涨至约 25–35%（C2 推算）\n- 具体数字：小麦每公顷施氮约 100–150 公斤纯氮，折合尿素约 220–330 公斤；2022 年高峰期尿素成本约 $250–300/公顷（C2）\n- 种粮农民利润率薄，氮肥成本上升 50%+直接逼近盈亏线，减施是第一反应（C2）\n\n方向二（断供后多久影响下游产能）：\n- 氮肥库存/在途缓冲：通常约 30–60 天（C2）——农业季节性极强，购肥窗口（播种前 1–2 个月）一旦错过，当季就无法补\n- 一季减施或不施，下一季粮食单产下降 30–50%（C2 农学推算）\n- 累计两季不施氮，土壤氮库严重亏空，恢复需要 1–3 年（C2）",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "**2022 年压力测试（最直接的实证）**：\n- 全球尿素/AN 价格峰值约 4 倍于 2020 年基准（C3，行业广泛报道）\n- 欧洲氮肥工厂减产：Yara 2022 年欧洲氨产能利用率下降至约 35%（C3，Yara 季报提及，需核精确数字）；BASF/Ludwigshafen 氨装置停产（C3）；欧洲整体氮肥产能损失约 20–30%（C2 推算）\n- 全球农业投入成本上涨：FAO 农业投入品价格指数 2022 年 2 月同比涨约 30%（C3，FAO FPMA 数据，需原文核）\n- 对粮食价格的传导：2022 年化肥价格对粮食通胀贡献约 10–20%（C2，与能源、战争等因素难以分开）\n\n**制裁压力下俄出口下降的量化**：\n- 俄罗斯 2022 年前三季度氮肥出口下降约 10–15%（C3，媒体引用 IFA 数据，需原文核）；制裁豁免后恢复，2023 年出口量恢复至约 2021 年水平（C3）\n- 俄氨管道（Tolyatti-Odessa）关闭损失：约 2.5–3 MT 液氨/年出口，占全球液氨贸易约 10–15%（C2 推算）\n\n数量级结论：单季全球氮肥供给减少 15–20% → 谷物单产下降约 5–10%（取决于减施幅度，C2 推算）→ 全球谷物产量约减少 1–2 亿吨（C2 推算）→ 粮食价格上涨约 10–30%（C2，取决于市场弹性）→ 食品不安全人口增加约 1–3 亿（C2，基于世界银行方法）。数量级对了，精确数字需原文支撑。\n\n【缺口：IFA 2022–2023 年度氮肥产量/贸易量变化报告——量化供给冲击的精确幅度；Yara 季报欧洲产能利用率——实证欧洲减产幅度；世界银行/FAO 2022 化肥危机评估报告】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "利润在这条链上的归宿取决于气价周期：\n\n- **气价低廉期（正常年份）**：利润在生产商手中，但边际利润薄（竞争激烈）；俄罗斯和中东生产商因有更低气价成本，利润率高于欧洲；贸易商（Trammo/Ameropa 等专业化肥贸易商）毛利薄（约 1–3%）\n- **气价暴涨期（2022 年）**：欧洲工厂关停，成本压不下去；俄罗斯生产商因补贴气价暴利（相对欧洲工厂约 $500/MT 的成本差，C2 推算）；北美（CF Industries）靠页岩气低价同样暴利——CF Industries FY2022 净利润约 33 亿美元，同比约 +400%（C3，需年报核）\n- **政治压力传导路径**：制裁打俄罗斯氮肥出口 → 首先打俄生产商的出口收入 + 打欧洲进口商的进货来源 → 然后打全球价格（欧洲替代来源更贵）→ 最终打农民的种植成本 → 打消费者的食品价格。链条长，传导时间约 1–2 季。制裁方（欧美）也会被打到（欧洲农民种植成本上升），因此政治代价对称，制裁倾向于保留化肥豁免。\n\n---",
    "cLevels": [
     "C2",
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "哈伯-博施工艺原理（N₂+H₂→NH₃，高温高压）",
    "level": "C4",
    "source": "化学常识 / 教科书"
   },
   {
    "item": "OFAC EO 14024 通用许可豁免俄罗斯化肥交易",
    "level": "C4",
    "source": "OFAC 联邦公报（需核通用许可编号）"
   },
   {
    "item": "UN Grain Initiative（2022年7月22日）文本含俄化肥出口条款",
    "level": "C3–C4",
    "source": "联合国公开协议文本"
   },
   {
    "item": "俄罗斯为全球最大氮肥出口国，出口份额约15–20%",
    "level": "C3",
    "source": "IFA 年度统计（广泛引用）"
   },
   {
    "item": "中国约占全球合成氨产能 30–35%",
    "level": "C3",
    "source": "IFA/FAO 口径（广知）"
   },
   {
    "item": "天然气占氨生产成本 70–80%",
    "level": "C2",
    "source": "行业广知推算，无单一原始文献"
   },
   {
    "item": "零氮施用小麦单产下降 30–50%",
    "level": "C2",
    "source": "农学文献广知结论，无单一引用"
   },
   {
    "item": "Yara FY2023 营收约 $149 亿",
    "level": "C3",
    "source": "Yara 年报（Oslo，需核精确数字）"
   },
   {
    "item": "CF Industries FY2023 营收约 $66 亿",
    "level": "C3",
    "source": "NYSE 10-K（需核）"
   },
   {
    "item": "Nutrien FY2023 营收约 $198 亿",
    "level": "C3",
    "source": "NYSE 10-K（需核）"
   },
   {
    "item": "CF Industries FY2022 净利润约 $33 亿",
    "level": "C3",
    "source": "媒体报道/年报（需核）"
   },
   {
    "item": "欧洲氨工厂 2022 年减产约 20–30%",
    "level": "C2",
    "source": "Yara 季报/媒体报道综合推算"
   },
   {
    "item": "Yara 2022 年欧洲氨产能利用率降至约 35%",
    "level": "C3",
    "source": "Yara 季报（需原文核）"
   },
   {
    "item": "全球尿素 2022 年峰值约 $850–900/MT",
    "level": "C3",
    "source": "行业贸易报道/期货数据"
   },
   {
    "item": "中国 2021 年出口配额导致全球尿素价格从约 $250 涨至约 $600",
    "level": "C3",
    "source": "市场报道广泛（需原文核）"
   },
   {
    "item": "俄氨管道（Tolyatti-Odessa）战前液氨出口量约 2.5–3 MT/年",
    "level": "C2",
    "source": "行业推算"
   },
   {
    "item": "2022 年欧洲气价峰值涨幅约 3–5 倍",
    "level": "C3",
    "source": "TTF 天然气期货数据（广泛引用）"
   },
   {
    "item": "粮食安全豁免化肥制裁的政治逻辑（制裁方知代价）",
    "level": "C2",
    "source": "结构推算 + 制裁设计实证"
   },
   {
    "item": "新建大型氨工厂需 15–25 亿美元 / 3–5 年",
    "level": "C2",
    "source": "行业参考，无单一来源"
   }
  ],
  "contested": {
   "title": "OFAC EO 14024 对俄制裁中显式豁免化肥交易（2022 年）",
   "summary": "2022 年 2 月 24 日俄乌战争爆发后，美国迅速升级对俄制裁——但在这轮历史上力度最大的对俄经济封锁中，农业品和化肥被显式排除在外。OFAC 在 EO 14024 框架下签发通用许可，允许\"与农业商品相关的\"对俄交易，明确把化肥贸易（购买俄罗斯化肥、向俄化肥企业汇款、为俄化肥货物提供保险等）列为豁免项。这是近年来最清楚地照出\"制裁方自己也绕不开某个节点\"的一件事。"
  },
  "gaps": [
   "1. 【缺口：IFA（国际化肥工业协会）2023–2024 年度氮肥产量/贸易量/国别份额报告——核心量化基础，从 C3 广知升 C4 必须的原文；需典藏取 IFA Annual Report 或 IFADATA 统计数据库】",
   "2. 【缺口：Yara International FY2023 年报（Oslo/NYSE 双重上市）——精确营收、欧洲产能利用率变化、各区域毛利率；是实证欧洲减产幅度的最直接数据来源】",
   "3. 【缺口：CF Industries FY2022/2023 10-K——FY2022 净利润（约 $33 亿峰值）和产量数据；北美低气价时代的结构性盈利优势数字化】",
   "4. 【缺口：OFAC 通用许可（General License）豁免俄罗斯农业/化肥交易的编号和原文——2022 年，精确的豁免范围和生效日期，从 C4 宏观判断升为 C4 法律文本；关键政治传动层接口】",
   "5. 【缺口：中国海关总署 2021 年化肥出口配额通知原文（含尿素/AN/氨出口量配额数字）——实证中国配额机制的第一手法规文本；与 cm-gallium 的出口管制机制对比】",
   "6. 【缺口：IEA 或 FAO 2022 年化肥价格危机影响评估报告——量化欧洲减产对全球供给的影响幅度，以及农民减施量对下一季产量的传导估算】",
   "7. 【缺口：UN Black Sea Grain Initiative 文本（2022年7月）附件——核实俄方要求恢复化肥/氨出口的具体措辞，从 C3 升 C4；是政治传动层 E 时点和 A 接口的一手文件】"
  ]
 },
 "ag-fertilizer-pk": {
  "sourceFile": "ag-fertilizer-pk.md",
  "archiveId": "ag-fertilizer-pk",
  "established": "2026-06-27",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Nutrien",
    "role": null,
    "scale": "~22% 全球（C3）",
    "jurisdiction": "加拿大萨斯卡彻温，加拿大法域",
    "group": "钾肥"
   },
   {
    "entity": "Mosaic",
    "role": null,
    "scale": "~13%（C3）",
    "jurisdiction": "美国坦帕，美国法域",
    "group": "钾肥"
   },
   {
    "entity": "Canpotex",
    "role": null,
    "scale": "N/A（出口商）",
    "jurisdiction": "加拿大，加拿大法域",
    "group": "钾肥"
   },
   {
    "entity": "Uralkali",
    "role": null,
    "scale": "~20%（C3）",
    "jurisdiction": "俄罗斯彼尔姆，俄罗斯法域",
    "group": "钾肥"
   },
   {
    "entity": "Belaruskali",
    "role": null,
    "scale": "~12%（C3）",
    "jurisdiction": "白俄罗斯 Starobin，白俄法域",
    "group": "钾肥"
   },
   {
    "entity": "BPC（Belarus Potash Co.）",
    "role": null,
    "scale": "N/A（贸易商）",
    "jurisdiction": "白俄/离岸，白俄法域",
    "group": "钾肥"
   },
   {
    "entity": "ICL Group",
    "role": null,
    "scale": "~5%（C3）",
    "jurisdiction": "以色列，以色列法域",
    "group": "钾肥"
   },
   {
    "entity": "Arab Potash Co.",
    "role": null,
    "scale": "~4%（C3）",
    "jurisdiction": "约旦，约旦法域",
    "group": "钾肥"
   },
   {
    "entity": "OCP Group",
    "role": null,
    "scale": "产量 14%，储量 68.5%（C4）",
    "jurisdiction": "摩洛哥（国有）",
    "group": "磷矿石/磷肥"
   },
   {
    "entity": "中国磷化/云天化等",
    "role": null,
    "scale": "产量合计约 44%（C4）",
    "jurisdiction": "中国，中国法域",
    "group": "磷矿石/磷肥"
   },
   {
    "entity": "PhosAgro",
    "role": null,
    "scale": "矿石约 5.6%（C4）",
    "jurisdiction": "俄罗斯莫斯科，俄罗斯法域",
    "group": "磷矿石/磷肥"
   },
   {
    "entity": "Mosaic",
    "role": null,
    "scale": "约 5%（C3）",
    "jurisdiction": "美国，美国法域",
    "group": "磷矿石/磷肥"
   }
  ],
  "upstream": [
   "**钾肥上游**：采矿电力（约 20–30% 生产成本，C2）+ 铁路（内陆矿到港口的不可绕路径）+ 浮选药剂（分散，无单点）。没有构成全图级别单点的子依赖。白俄罗斯的铁路+克莱佩达港是运输层唯一可见子约束，已被证实为有效控制点（C4 效果数据）。",
   "**磷肥上游**：硫黄（湿法磷酸氧化剂，中国约 70% 需进口，主要来源俄罗斯/中东，C3）是潜在子单点，但目前没有被政治激活。磷矿→磷酸→DAP/MAP 工艺早无专利壁垒，技术可复制，唯一不可复制的是矿床本身。"
  ],
  "downstream": [
   "粮食种植（小麦/玉米/大豆/水稻）约占全球钾肥消耗的 70%（C2，IFA 广知口径，需原文核）。PK 肥与 N 肥不同之处在于：磷钾在土壤中有积累效应（土壤缓冲），短期（1季）断施对产量影响不如氮肥直接；但持续 2–3 季减施后，土壤 PK 库存亏空、产量持续下行，恢复需 1–3 年（C2）。这个时间结构意味着 PK 肥断供的杠杆作用比氮肥慢但更持久。",
   "农民对价格的弹性反应：价格翻倍→减施 20–40%，而不是切换到替代品（没有），所以价格冲击直接转化为施用量下降，下一季再传导到产量。"
  ],
  "fallback": {
   "verdictZh": "可能改道",
   "verdictRaw": "possible reroute",
   "unstructured": true,
   "text": "**钾肥**：`possible reroute`（偏向 partial，时间尺度约 2–3 年）\n\n- 替代哪一层：白俄罗斯约 18–20% 的出口端（制裁主要靶心）\n- 多久接上：加拿大 Nutrien/Mosaic 可扩产，2022–2023 年已实际提量（C3）；但受限于矿井采矿速度和萨斯卡彻温→温哥华铁路/港口吞吐量，短期内每年约能补 15–20%，不能全量替代（C2）\n- 卡在哪个转换环节：铁路和港口物流；新矿开发 5–10 年前置期\n- 谁有权限启动：商业决定，加拿大无政治许可障碍\n- 执行能力：在产矿山有剩余能力，物流是实际瓶颈\n\n**磷肥**：`partial`（短期），依赖 OCP 稳定器 + 中国政策可逆性\n\n- 中国管控型断供：2022 年 3 月管控解除后价格快速回落，证明中国管控是可逆的政策工具；OCP 在 2022 年扩大出口部分填补缺口（C3）\n- 长期：摩洛哥 OCP 的 68.5% 储量是唯一可覆盖长期需求的来源，无替代规模"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "**钾肥**：\n- 全球产量：46,700 千吨 K₂O（2024）/ 49,000 千吨（2025e，C4，USGS MCS 2026）\n- 全球消费：41,600 千吨 K₂O（2025 预测，C4）\n- 全球贸易额：约 $15–20B/年（正常年份，C2 推算）；2022 年峰值期约 $35–40B（C2，基于 KCl $563/t × 全球贸易量约 70M 吨估算，FAO/WTO C4 价格数据）\n- 【缺口：Nutrien FY2022 钾肥分部营收——最直接的市场规模锚点；NYSE NTR 10-K 公开可查】\n\n**磷矿石/磷肥**：\n- 全球磷矿石产量：239,000 千吨（2024）/ 250,000 千吨（2025e，C4）\n- 全球磷肥消费（P₂O₅ 含量）：47.8 百万吨（2025 预测），预计 2029 年升至 51.5 百万吨（C4）\n- 全球 DAP/MAP 贸易额：约 $25–40B/年（C2 推算；OCP 2022 年营收约 $11B，全球出口份额约 1/3，推算全球约 $33B，C3 基础 C2 推算）",
    "cLevels": [
     "C4",
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "| 指标 | 数值 | 来源 |\n|---|---|---|\n| 钾肥 CR1（加拿大）| 30.6%（2025e）| USGS MCS 2026（C4）|\n| 钾肥 CR2（加+俄）| 51.0%（2025e）| USGS MCS 2026（C4）|\n| 钾肥 CR3（加+俄+白俄）| 63.3%（2025e）| USGS MCS 2026（C4）|\n| 全球钾肥产能/消费比 | 1.59（66.1/41.6 MT K₂O）| USGS MCS 2026（C4）|\n| 磷矿石 CR1（中国）| 44.0%（2025e）| USGS MCS 2026（C4）|\n| 磷矿石 CR2（中+摩）| 58.4%（2025e）| USGS MCS 2026（C4）|\n| 摩洛哥磷矿储量份额 | 68.5%（50,000/73,000 千千吨）| USGS MCS 2026（C4）|\n\nPrice maker：\n- 钾肥正常年份：加拿大（Canpotex/Nutrien/Mosaic）+ 俄罗斯（Uralkali）协同影响边际价格（C3）\n- 钾肥 2022 年：制裁压缩白俄/俄供给后加拿大成为实际 price setter（C3）\n- 磷肥短期：中国（产量 44%，管控即时影响价格）；长期：OCP（储量 68.5%，长期价格底盘）",
    "cLevels": [
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 毛利率 | 市值 | 备注 |\n|---|---|---|---|---|\n| **Nutrien（NYSE: NTR）** | ~$30B（FY2023 全口径，C3）；钾肥分部约 $5–7B（C3）| 钾肥分部约 30–40%（C2）| ~$250亿（C3，2023）| 全球最大钾肥生产商 |\n| **Mosaic（NYSE: MOS）** | ~$14B（FY2023，C3）| 约 20–30%（C2）| ~$100亿（C3，2023）| 含磷钾一体化 |\n| **OCP Group（摩洛哥国有）** | ~$11B（FY2022，C3 媒体报道）| 未公开披露 | 约 $100B 估值（C3）| 磷肥全球最大出口商 |\n| **PhosAgro（LSE: PHOR GDR）** | ~$5–6B（FY2022，C3）| ~30–40%（2022 高峰年，C3）| ~$100亿（2022，C3）| 俄最大磷肥上市公司；未直接制裁 |\n| **ICL Group（TASE: ICL）** | ~$7–8B（FY2022，C3）| ~20–30%（C2）| ~$60亿（C3，2022）| 以色列死海钾矿 |\n| **Belaruskali**（国有/私有）| 无公开披露 | 无披露 | 不上市 | OFAC SDN，无法使用西方融资 |\n\n【缺口：Nutrien FY2022/2023 10-K 钾肥分部精确数字；PhosAgro FY2022 年报出口量变化；ICL FY2022 年报钾肥产量】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "方向一（本节点对下游成本占比）：\n- PK 肥合计占谷物种植成本约 10–20%（正常年份，C2）；2022 年峰值期升至约 20–30%（C2 推算）\n- 对比：氮肥占 15–25%，PK 略低但也构成显著成本项\n\n方向二（断供后多久影响下游产能）：\n- 库存/在途缓冲：约 1–3 个月（季节性购肥窗口，C2）\n- 土壤缓冲：磷钾在土壤中积累，1 季断施影响不如氮肥直接；但 2–3 季持续减施后产量持续下滑，土壤恢复需 1–3 年（C2 土壤科学广知）",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供/管制经济冲击量级",
    "text": "**已发生实证（2021–2022 年叠加冲击，C4 基础数据）**：\n\n- 白俄罗斯钾肥出口量：362 万吨（H1-2021）→ 195 万吨（H1-2022），↓46%（C4，FAO/WTO 2022 联合报告，PDF 落盘）\n- KCl 基准价：$221/t（2022-01）→ $563/t（2022-03），+155%（C4，FAO/WTO 2022 联合报告）\n- 全球 MOP 价格峰值约 $850–1,000/MT（2022 Q2，C3 市场报价，FAO/WTO C4 数据印证价格走势方向）\n- 磷肥 DAP 峰值约 $900–1,000/MT（2022 年初，C3 Argus/商品报价）\n\n**传导链推算（C2）**：\n- PK 价格上涨 2–4 倍 → 发展中国家农民减施 20–40% → 粮食单产下降约 5–15%（多季滞后）→ 粮食价格上涨约 5–20%（取决于储备水平）\n\n【缺口：IFA 2022–2023 年度钾/磷肥贸易量报告——精确量化全球供给缩减幅度；世界银行/FAO 2022 化肥危机评估——对粮食生产和进口国 GDP 的冲击估算】",
    "cLevels": [
     "C4",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "钾肥：利润沉淀在矿权持有者（矿床是真正的稀缺物，技术无壁垒）。2022 年峰值期 Nutrien 净利润约 $5B（C3，需年报核），类似氮肥高峰年 CF Industries 的情况——每次政治冲击重新分配产量份额，但利润留在有矿的那一侧。\n\n磷肥：OCP Group 完全垂直整合（矿山→磷酸→DAP/MAP→出口），价值链利润全部留在摩洛哥，是发展中国家里少数掌握完整磷酸盐价值链的案例（C3）。中国磷肥生产商在国内竞争+双碳约束下利润率普遍薄（C3）。\n\n政治压力的资产负债表传导路径：SDN 制裁白俄罗斯 → 首先打 Belaruskali 出口收入（矿山产能无法变现）→ 次打立陶宛/欧盟港口中转费 → 最后传导为全球买家涨价。代价不对称：白俄罗斯受损大，美国有加拿大替代，欧洲进口商多付价差，发展中国家进口国承担终端价格。\n\n---",
    "cLevels": [
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "无植物可替代钾 / 磷（USGS 原文）",
    "level": "C4",
    "source": "USGS MCS 2026 verbatim"
   },
   {
    "item": "钾肥 2025e 全球产量分国别（USGS 表格）",
    "level": "C4",
    "source": "USGS MCS 2026"
   },
   {
    "item": "磷矿石 2025e 全球产量+储量分国别（USGS 表格）",
    "level": "C4",
    "source": "USGS MCS 2026"
   },
   {
    "item": "摩洛哥磷矿储量 68.5% 全球份额",
    "level": "C4",
    "source": "USGS MCS 2026"
   },
   {
    "item": "美国钾肥净进口依赖率 92–94%，加拿大来源 79%",
    "level": "C4",
    "source": "USGS MCS 2026"
   },
   {
    "item": "全球钾肥产能 66.1MT K₂O / 消费 41.6MT（2025）",
    "level": "C4",
    "source": "USGS MCS 2026"
   },
   {
    "item": "钾肥+磷矿石列入美国 2025 关键矿产清单（FR 90 FR 50494）",
    "level": "C4",
    "source": "USGS MCS 2026 引用"
   },
   {
    "item": "Belaruskali OFAC SDN 2021-08-09，EO 14038，GL4 至 2021-12-08",
    "level": "C4",
    "source": "Treasury JY0315 HTML（核实）"
   },
   {
    "item": "BPC OFAC SDN 2021-12-02，EO 14038，GL5 至 2022-04-01",
    "level": "C4",
    "source": "Treasury JY0512 HTML（核实）"
   },
   {
    "item": "白俄钾肥出口量 H1-2021 362 万吨→H1-2022 195 万吨（↓46%）",
    "level": "C4",
    "source": "FAO/WTO 2022 联合报告（PDF 落盘）"
   },
   {
    "item": "KCl 基准价 $221/t（2022-01）→ $563/t（2022-03）",
    "level": "C4",
    "source": "FAO/WTO 2022 联合报告（PDF 落盘）"
   },
   {
    "item": "LTG/Klaipeda 停运 2022-02-01，约 1,100 万吨/年",
    "level": "C3",
    "source": "LRT/OSW/RFERL 多来源一致"
   },
   {
    "item": "白俄约 90% 出口通过 LTG/Klaipeda",
    "level": "C3",
    "source": "媒体报道广知"
   },
   {
    "item": "中国磷矿石产量 CR1 44%（2024–2025）",
    "level": "C4",
    "source": "USGS MCS 2026"
   },
   {
    "item": "中国 2021-10 暂停磷肥出口、2022-03 恢复",
    "level": "C3",
    "source": "Argus/Bloomberg 商品报道"
   },
   {
    "item": "OCP 2022 年营收约 $11B（稳定器角色量化基础）",
    "level": "C3",
    "source": "媒体报道（年报 403 未入库）"
   },
   {
    "item": "全球 MOP 峰值约 $850–1,000/MT（2022 Q2）",
    "level": "C3",
    "source": "市场报价广泛引用（方向 C4 FAO/WTO 印证）"
   },
   {
    "item": "磷肥 DAP 峰值约 $900–1,000/MT（2022 年初）",
    "level": "C3",
    "source": "Argus/商品市场报道"
   },
   {
    "item": "白俄 2022 年全年出口量约降 40–50%（全年推算）",
    "level": "C2",
    "source": "FAO/WTO H1 数据（C4）外推全年"
   },
   {
    "item": "Nutrien FY2022 净利润约 $5B（峰值年）",
    "level": "C3",
    "source": "媒体报道（待年报核）"
   },
   {
    "item": "中国磷矿储量 4.7%（vs 产量 44%）",
    "level": "C4",
    "source": "USGS MCS 2026"
   },
   {
    "item": "磷肥加工用硫黄中国约 70% 需进口",
    "level": "C3",
    "source": "行业广知（需原文核）"
   }
  ],
  "contested": {
   "title": "2021–2022 年白俄罗斯钾肥制裁 + 立陶宛 Klaipeda 港封堵（及白俄罗斯的改道应对）",
   "summary": "2021 年 5 月，卢卡申科政权强迫一架瑞安航空班机在明斯克降落以逮捕异见人士后，美国、欧盟、英国随即升级对白俄罗斯的制裁。2021 年 8 月，欧盟将 Belaruskali（白俄罗斯国家钾矿公司）和 BPC（白俄罗斯钾肥公司，即出口贸易公司）列入制裁名单。2022 年 2 月，立陶宛宣布不再允许 Belaruskali 的钾肥货物过境 Klaipeda 港出口，自 2022 年 2 月 1 日起执行（C3，广泛报道，制裁文本已取 OFAC 原文，C4 部分）。"
  },
  "gaps": [
   "1. 【缺口：OFAC GL4/GL5 PDF 原件——内容已从 Treasury HTML C4 核实，PDF 为锦上添花；需用户浏览器访问 JY0315/JY0512 页面点击下载链接，服务器对自动化请求返回重定向】",
   "2. 【缺口：IFA 钾肥/磷肥出口端份额数据（2020–2023 年）——区分生产集中度和出口端控制力；白俄罗斯「出口端 18–20% > 产量端 12%」是卡点论点的关键前提，需 IFA IFASTAT 或 UN Comtrade 一手数据（订阅壁垒，需浏览器渠道）】",
   "3. 【缺口：Nutrien FY2022/2023 10-K（NYSE: NTR）——钾肥分部营收、利润、产量精确数字；Q3 关键玩家财务的最重要锚点，公开可查】",
   "4. 【缺口：OCP Group FY2022 年报——2022 年磷矿石/磷酸出口量精确数字，核实「稳定器」叙事的量化来源（ocpgroup.ma 返回 403，需用户浏览器或典藏工单尝试镜像渠道）】",
   "5. 【缺口：LTG（立陶宛铁路）官方英文声明——2021-12 月合同终止原始公告；目前 C3，LTG 官网新闻室有可能有英文版（ltg.lt/en/news）】",
   "6. 【缺口：UN Comtrade 白俄罗斯 HS 3104.20（氯化钾）2020–2023 年全年出口量时序——将「白俄全年出口降 40–50%」从 C2 推算升 C3；comtrade.un.org 查询，需专项取数】",
   "7. 【缺口：PhosAgro FY2022/2023 年报（LSE: PHOR GDR）——俄罗斯磷肥出口量变化及间接制裁压力的量化影响】\n---\n*建立：2026-06-27 | 主要来源：USGS MCS 2026（C4）; FAO/WTO Global Fertilizer Markets and Policies 2022（C4，PDF 落盘）; OFAC Treasury JY0315/JY0512（C4，HTML 核实）*"
  ]
 },
 "ag-grain": {
  "sourceFile": "ag-grain.md",
  "archiveId": "ag-grain",
  "established": "2026-06-26",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "俄罗斯（含 FGIS Zernoexport 等国资机构 + 私营农企）",
    "role": "小麦为主",
    "scale": "~26% 全球小麦",
    "jurisdiction": "俄罗斯联邦法域",
    "group": "产地层（出口国）"
   },
   {
    "entity": "印度（NAFED 国营 + 私营出口商）",
    "role": "大米为主",
    "scale": "~40% 全球大米",
    "jurisdiction": "印度法域；DGFT 商务部管出口许可",
    "group": "产地层（出口国）"
   },
   {
    "entity": "美国（ADM/Cargill/嘉吉等代理私营出口）",
    "role": "小麦/玉米/大豆",
    "scale": "小麦约 10%、玉米约 25%",
    "jurisdiction": "美国法域；USDA/USTR 管出口",
    "group": "产地层（出口国）"
   },
   {
    "entity": "乌克兰（战前）",
    "role": "小麦/玉米/葵花籽油",
    "scale": "小麦 14%、玉米 15%",
    "jurisdiction": "乌克兰法域；目前受战时生产冲击",
    "group": "产地层（出口国）"
   },
   {
    "entity": "巴西",
    "role": "玉米/大豆",
    "scale": "玉米约 25–30%",
    "jurisdiction": "巴西法域；MAPA 农业部",
    "group": "产地层（出口国）"
   },
   {
    "entity": "欧盟",
    "role": "小麦/大麦",
    "scale": "小麦约 15%",
    "jurisdiction": "EU/各成员国法域",
    "group": "产地层（出口国）"
   },
   {
    "entity": "Cargill",
    "role": null,
    "scale": "营收规模（C3）：约 $1650 亿（FY2023，私有公司，E&Y 审计数字 C3） · 市值：私有",
    "jurisdiction": "明尼苏达，美国",
    "group": "贸易商层（ABCD）"
   },
   {
    "entity": "ADM（Archer Daniels Midland）",
    "role": null,
    "scale": "营收规模（C3）：约 $1015 亿（FY2023，年报 C3） · 市值：约 $270 亿市值（C3）",
    "jurisdiction": "芝加哥，美国，NYSE: ADM",
    "group": "贸易商层（ABCD）"
   },
   {
    "entity": "Bunge",
    "role": null,
    "scale": "营收规模（C3）：约 $670 亿（FY2023，年报 C3） · 市值：约 $180 亿市值（C3）",
    "jurisdiction": "圣路易斯，美国，NYSE: BG",
    "group": "贸易商层（ABCD）"
   },
   {
    "entity": "Louis Dreyfus",
    "role": null,
    "scale": "营收规模（C3）：约 $620 亿（FY2022，私有披露 C3） · 市值：私有",
    "jurisdiction": "鹿特丹注册，实控荷兰，私有",
    "group": "贸易商层（ABCD）"
   }
  ],
  "upstream": [
   "**ag-fertilizer-n**（氮肥）：氮肥是小麦/玉米单产的硬上游，断供等于下一季减产 30–50%（C2 推算，取决于土壤存量）。俄罗斯约占全球氮肥出口 20–25%（C3），同样受 2022 年制裁压力。这是跨代际依赖——本节点断供影响**下一季**产量，不是当季贸易量。",
   "**ag-fertilizer-pk**（钾肥/磷肥）：钾肥俄罗斯+白俄罗斯合计约 40%（C3），也已受制裁影响。",
   "**en-lng**（天然气 → 氨 → 氮肥上游）：天然气是氨合成的原料，LNG 价格剧烈波动直接传导到氮肥成本，见 ag-fertilizer-n 节点。",
   "**sh-port-infra**（港口基础设施）：乌克兰敖德萨港群（Odessa/Pivdennyi/Chornomorsk）是乌克兰粮食出口的物理出口。2022 年战争中港口受限是 Black Sea Grain Initiative 签署的直接原因。",
   "**建议子节点 ag-grain-corridor**：Black Sea 通道（博斯普鲁斯+乌克兰港口+俄罗斯承诺的通道安全）是乌克兰粮食出口的单点瓶颈，且已经被武器化（2022 年实证）。若单列，父节点 ag-grain 继续作整体，子节点专门处理地理通道的管控逻辑。"
  ],
  "downstream": [
   "**致命依赖**（单季断供无法承受）：",
   "埃及：约 60% 的小麦进口来自俄罗斯+乌克兰（C3）；小麆补贴是政治合法性基础，价格翻倍触发历史上的面包危机。",
   "黎巴嫩：约 80% 小麦依赖乌克兰/俄罗斯（C3）；2020 年贝鲁特港爆炸直接摧毁了主要粮仓。",
   "也门、利比亚、索马里等地：对进口小麦依赖度 >70%（C3），同时外汇储备薄、无溢价支付能力。",
   "撒哈拉以南非洲：集体净进口约 50–60MT 小麦/年（C3），一旦价格上涨 50%+，食品支出占家庭收入的比例超过临界点。",
   "**高依赖**（可缓冲但代价大）：",
   "中东和北非（MENA）整体：约 50 国家进口全球 >30% 小麦的国家（C3，WFP 数据口径）。",
   "东南亚大米进口国（菲律宾、印尼）：对全球大米市场价格高度敏感，印度大米禁令导致其进口成本骤升。",
   "依赖强度：食品是不可替代品，依赖强度是\"生存级\"，但有几个缓冲维度——库存期（约 60–90 天）、消费减少（可忍耐范围内）、替代品（玉米代小麦，但需加工链改造）。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "**小麦 fallback**：`partial`。\n- 替代哪一层：俄乌出口（约 30–40%）\n- 多久接上：1–2 个北半球生长季（约 8–16 个月）；南半球小麦季可部分缩短（澳大利亚 12 月收割）\n- 卡在哪个转换环节：①港口和运输能力（替代来源的散货船和港口需要重新签约和调度）；②贫困进口国的购买力（价格上涨 50% 后，很多国家负担不起替代来源）；③中东/非洲对特定小麦品种（如黑海硬质小麦）的加工设备适配\n- 谁有权限启动：进口国政府 + 贸易商\n- 执行能力：加拿大、美国、澳大利亚、EU 有产能余量，但当季产量已定，增产下季才见效\n- 结论：替代路径存在，但价格+时间窗口+脆弱国家支付能力三条不能同时满足，记为 `partial`\n\n**大米 fallback（印度禁令情景）**：`partial`（比小麦差）。\n- 泰国、越南、巴基斯坦合计约 35–37%，且面对印度缺口同样面临运力紧张和价格上涨\n- 结论：`partial`\n\n**ABCD 贸易商 fallback**：`possible reroute`。\n- 中国厂商（中粮/COFCO）、印度 MMTC 等可以填部分缺口，但全球网络覆盖和融资深度与 ABCD 差距大\n- 这一层的 fallback 是中长期（5–10 年）而非当季\n\n**Black Sea 通道 fallback**：`partial`。\n- 敖德萨直接绕道：多瑙河（Reni/Izmail 港）→ 罗马尼亚 Constanta 港，产能约 2–3 MT/月（C2），比战时正常的约 5–6 MT/月小得多\n- 陆路（经波兰）：成本约 3–5 倍，产能上限更小\n- 结论：Danube/陆路是 `partial`（能跑但产能约 30–50% 的替代，价格更贵）"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "**生产端（全球总产）**：\n- 全球谷物总产量约 3,011M MT（2025/26 Est.，C4，WASDE-672 p.18/20 + 正文）：小麦 844.36 + 粗粮 1,622.29 + 大米 544.7\n  - 2026/27 Proj.（June）：约 2,952M MT——小麦 820.06、粗粮约 1,594、大米 537.8（C4，WASDE-672）\n  - （原\"2.85–2.90 亿 MT\"为单位误写，应为 billion 级；2026-07-03 直读 PDF 改正）\n- 全球粮食贸易量（三类合计，WASDE 出口口径）约 545–555M MT/年（C4）：小麦 226.70（2025/26）/ 211.95（2026/27 Proj.）、粗粮 265.36（2025/26）、大米 63.0（2026/27，历史记录）。IGC 口径 445–480MT 为更窄定义（C3，待 IGC 原文核）\n\n**价值端**：\n- 小麦全球贸易额：约 590 亿美元/年（正常年份，C2 推算：212MT（C4 贸易量）× ~$280/MT）；2022 年峰值期约 780 亿美元（价格驱动）\n- 大米全球贸易额：约 300–350 亿美元/年（正常年份，C2 推算：55–60MT × ~$500–600/MT）\n- 玉米全球贸易额：约 400–500 亿美元/年（C2 推算）\n- ABCD 四家合计营收约 $3,000 亿（FY2022/23，含所有业务，C3）；纯谷物贸易部分无单独披露\n\n【已补（2026-07-03）：WASDE-672 直读，小麦/粗粮/大米产量与贸易量全部 C4，见上；PDF 在 `wiki/reading-workbench/ag-grain/usda-wasde-june-2026-wasde672.pdf`】",
    "cLevels": [
     "C4",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "| 品类 | 集中度指标 | 数值 | 来源 | 备注 |\n|---|---|---|---|---|\n| 小麦 | CR2（俄+乌）| ~30–40%（C3）| USDA FAS PSD 口径 | 战前数字；2022–23 年乌克兰份额下滑 |\n| 小麦 | CR1（俄罗斯）| ~26%（C3）| USDA FAS 口径 | 成为世界最大小麦出口国约 2016 年起 |\n| 大米 | CR1（印度）| ~40%（C3）| USDA FAS / FAO 口径 | 2023 年禁令期间骤减至 ~20–25% |\n| 粮食贸易商 | CR4（ABCD）| ~70–80%（C3）| IPES-Food / 行业 | 实物流转+融资，不是产地份额 |\n\nPrice maker：小麦层——俄罗斯有定价影响力但非单一 price maker（芝加哥/巴黎期货市场是定价机制）；大米层——印度禁令期间曾是实际 price maker（其他出口方没有足够替代产能导致价格被动跟涨）。ABCD 在中间层有价格影响力但不是 price maker（竞争对手可进入）。",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收（来源/年份）| 毛利率 / 净利率 | 市值 / 估值 |\n|---|---|---|---|\n| Cargill | ~$1650 亿（FY2023，私有，C3 媒体披露）| 不披露（私有）| 私有 |\n| ADM | ~$1015 亿（FY2023，10-K，C3）| 约 5–6% 净利率（C3）| 约 $270 亿（2023）|\n| Bunge | ~$670 亿（FY2023，10-K，C3）| 约 2–3% 净利率（C3）| 约 $180 亿（2023）|\n| Louis Dreyfus | ~$620 亿（FY2022，私有，C3）| 不披露（私有）| 私有 |\n\n注：ABCD 是贸易商，净利率极薄，但体量大（总营收合计 >$3000 亿），对冲/仓储/物流业务构成实际竞争壁垒。\n\n俄罗斯主要粮食出口商：私营（Agrokultura/Miratorg/RIF）+ 国营（OZK，联邦谷物公司）。OZK 精确财务数据无公开披露（C2）。\n\n【缺口：ADM FY2023 10-K 谷物交易分部营收拆分；Cargill FY2023 私有披露来源；俄罗斯 OZK 年营收——需俄政府报告或 Kommersant/RBC 报道】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "**出口方对下游的影响**：\n- 乌克兰粮食出口约占其 GDP 的 10–15%（C3）；占外汇收入约 20–25%（C3）——战争中粮食出口收入下降直接影响乌克兰政府财政\n- 印度大米出口约 115 亿美元（FY2022，C3）；大米出口收入约占印度农业出口 25%（C2 推算）\n\n**进口方的依赖度**：\n- 埃及：小麦消费约 60% 依赖进口，其中约 60% 来自俄乌（C3）；小麦进口约占埃及政府食品补贴预算的主要部分\n- 黎巴嫩：2022 年贝鲁特港爆炸后小麦储备几乎为零，高度脆弱（C3）\n- 全球 50+ 国家小麦进口依赖度 >50%（C3，WFP/FAO 数据口径，待原文核）\n\n**库存/在途缓冲**：\n- 全球小麦库存通常约 260–290 MT（约 18–20 周用量，C3 USDA 口径）\n- 国家级库存差异极大：中国囤积约 50% 全球小麦库存（C3）；也门、黎巴嫩等几乎无储备\n\n【缺口：IGC 2025 年度报告全球库存/库消比数字；WFP/FAO 国别食品依赖度原始数据】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "**2022 年俄乌战争粮食冲击**：\n- 全球小麦现货价格峰值涨幅：约 +50–60%（2022 年 3–5 月，C3，路透/CME数据）\n- 世界银行估计：全球粮食进口账单上涨（对脆弱国家额外负担）约 $400 亿（C3，WB June 2022 Food Security Update，待原文核）\n- 联合国 WFP 估计：战争导致额外 4700 万人陷入严重食品不安全（C3，2022年WFP声明，待原文核）\n\n**2007–08 年粮食危机**：\n- 小麦价格 12 个月涨幅约 +100%，大米约 +150%（C3）\n- 30 个以上国家出现食品骚乱，3 个政府倒台（C3，IFPRI/FAO文件）\n- 全球额外饥饿人口约 1 亿（C3，FAO 2009 年估计）\n\n**2023 年印度大米禁令**：\n- 全球大米价格涨幅：约 +20–30%（3 个月内，C3）\n- 亚洲大米进口国额外进口成本：约 $50–80 亿（C2 推算，基于进口量变化和价格差）\n\n**数量级定论**：粮食价格冲击的经济损失级别在数百亿美元（一次事件），政治稳定风险难以货币化但历史上直接影响政权更迭（real force 层效应）。\n\n【缺口：世界银行 2022 年 Food Security Update 原文中 $400 亿数字；WFP 2022 年 Global Hunger Assessment 报告；IFPRI 2007-08 危机成本量化报告】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "利润在粮食供应链上的分布是全图研究过的商品里最不均匀的——绝大多数利润不在产粮环节：\n\n- **农民端**：小麦农民通常获得消费者终端食品价格的约 10–20%（C2，USDA Economic Research Service 口径，不同国家差距极大）\n- **贸易商端（ABCD）**：毛利率约 1–3%，但乘以数千亿美元的体量，绝对利润可观；且在价格波动剧烈时，套利/期货仓位让利润远高于正常毛利率（C2）\n- **出口国政府**：俄罗斯通过出口关税（2021 年起实施浮动小麦出口税）截留部分升水收益（C3）；印度偶尔加出口税\n- **进口国政府**：面对涨价往往需要增加补贴支出，是价格冲击的最终吸收者\n\n政治压力打到哪个资产负债表：\n- 出口限制（印度禁令型）→ 首先打进口国的外汇和补贴预算\n- 通道封锁（俄罗斯 2022 型）→ 首先打乌克兰出口收入和 ABCD 在黑海的业务\n- OFAC 制裁贸易商（假设场景）→ 首先打 ABCD 的俄罗斯业务和融资线\n\n---",
    "cLevels": [
     "C2",
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "《Black Sea Grain Initiative》2022 年 7 月 22 日签署",
    "level": "C4",
    "source": "UN/俄/乌/土耳其联合声明（公开）"
   },
   {
    "item": "俄罗斯退出 Grain Initiative：2023 年 7 月 17 日",
    "level": "C4",
    "source": "俄罗斯联邦政府声明（广泛报道）"
   },
   {
    "item": "印度 2023 年 7 月非巴斯马蒂白米出口禁令",
    "level": "C4",
    "source": "DGFT 政策通知（政府文件）"
   },
   {
    "item": "俄罗斯约占全球小麦出口 26%",
    "level": "C3",
    "source": "USDA FAS PSD 数据（广泛引用）"
   },
   {
    "item": "印度约占全球大米出口 40%",
    "level": "C3",
    "source": "USDA FAS / FAO 数据"
   },
   {
    "item": "ABCD 控制全球粮食贸易约 70–80%",
    "level": "C3",
    "source": "IPES-Food / 行业广知"
   },
   {
    "item": "俄+乌合计约 30–40% 全球小麦出口",
    "level": "C3",
    "source": "USDA FAS（战前数字）"
   },
   {
    "item": "2022 年小麦价格峰值涨幅约 +50–60%",
    "level": "C3",
    "source": "CME/路透市场数据（广泛报道）"
   },
   {
    "item": "印度大米禁令后价格涨约 +20–30%",
    "level": "C3",
    "source": "广泛报道（路透/FAO 声明）"
   },
   {
    "item": "1980 年美国对苏粮食禁运 1700 万吨",
    "level": "C3",
    "source": "历史文献广泛记载"
   },
   {
    "item": "埃及约 60% 小麦进口来自俄乌",
    "level": "C3",
    "source": "WFP / 媒体报道"
   },
   {
    "item": "Cargill FY2023 营收约 $1650 亿",
    "level": "C3",
    "source": "私有公司，Ernst & Young 审计报告/媒体披露"
   },
   {
    "item": "ADM FY2023 营收约 $1015 亿",
    "level": "C3",
    "source": "NYSE 上市公司年报"
   },
   {
    "item": "Bunge FY2023 营收约 $670 亿",
    "level": "C3",
    "source": "NYSE 上市公司年报"
   },
   {
    "item": "ABCD 净利率约 1–3%",
    "level": "C3",
    "source": "行业共识 / 上市公司财报"
   },
   {
    "item": "全球小麦贸易量 226.70MT（2025/26）/ 211.95MT（2026/27 Proj.）；大米 63.0MT（2026/27，历史记录）",
    "level": "C4",
    "source": "WASDE-672 p.18–19 + 正文（2026-07-03 直读）"
   },
   {
    "item": "2022 年俄乌战争全球额外粮食进口成本约 $400 亿",
    "level": "C3",
    "source": "世界银行 2022 年 Food Security Update"
   },
   {
    "item": "中国持有全球约 50% 小麦库存",
    "level": "C3",
    "source": "USDA 分国家库存数据"
   },
   {
    "item": "世界银行估计额外饥饿人口约 4700 万（2022）",
    "level": "C3",
    "source": "WFP 声明"
   },
   {
    "item": "2007-08 危机 30+ 国家食品骚乱",
    "level": "C3",
    "source": "IFPRI/FAO 历史文献"
   },
   {
    "item": "ABCD 中间层 fallback=possible reroute",
    "level": "C2",
    "source": "结构推算（COFCO 等中国公司扩张 10 年未达规模）"
   },
   {
    "item": "大米替代出口国可覆盖 20–25% 印度缺口",
    "level": "C2",
    "source": "结构推算，基于泰越巴三国产能"
   },
   {
    "item": "小麦 fallback 时间约 1–2 生长季",
    "level": "C2",
    "source": "结构推算（季节性农业常识）"
   }
  ],
  "contested": {
   "title": "《黑海粮食倡议》（Black Sea Grain Initiative）签署至俄罗斯退出（2022-07-22 至 2023-07-17）",
   "summary": "这是历史上首次一个非粮食出口国（俄罗斯）通过控制通道安全保障，而非直接禁止出口，把粮食贸易流转变成地缘政治谈判筹码的成功案例。"
  },
  "gaps": [
   "1. 【已补（2026-07-03）：WASDE-672 直读完成，贸易量全部 C4（小麦 226.70/211.95、大米 63.0、粗粮 265.36）。出口国分国数字也在 p.18–19 表内（2025/26 Est.：俄 48.0、乌 14.0、欧盟 31.0、加 30.0、澳 25.0、美 24.77，占世界 226.70——即俄罗斯份额约 21%、俄+乌约 27%，C4；比节点沿用的战前 C3 数字 26% / 30–40% 低，Q2 表沿革待下轮循环统一改写】",
   "2. 【缺口：印度 DGFT 2023 年 7 月非巴斯马蒂白米出口禁令原文——DGFT 通知编号、具体条款（豁免类别、覆盖范围）、生效日期；C3→C4】",
   "3. 【缺口：IPES-Food 2022 年报告\"Too Big to Feed?\"——ABCD 粮食贸易市场份额原始数据、市场集中度测量方法；确认 70–80% 数字的口径和范围（C3 待核）】",
   "4. 【缺口：IGC Grain Market Report 2025/26 正本——贸易量 445MT / 大米产量 540MT 等数字的原始来源和年度口径；典藏工单已投】",
   "5. 【缺口：世界银行 Food Security Update 2022 年 6 月——额外粮食进口成本 $400 亿数字的计算方法和国别分解；WFP Global Hunger Assessment 4700 万数字的原文】",
   "6. 【缺口：俄罗斯 2021 年起浮动小麦出口税令（Постановление Правительства）中文翻译或关键条款摘要——确认税率机制和每周更新流程（C3→C4）】",
   "7. 【缺口：ADM FY2023 10-K 谷物交易分部营收拆分——确认粮食交易占总营收比例；Bunge FY2023 10-K 同】"
  ]
 },
 "ag-pesticide": {
  "sourceFile": "ag-pesticide.md",
  "archiveId": "ag-pesticide",
  "established": "2026-07-08",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "先正达集团（Syngenta Group）",
    "role": null,
    "scale": "集团约 $322 亿（FY2022，含种子与 ADAMA，C3 需年报核；FY2023 有所回落）",
    "jurisdiction": "注册瑞士巴塞尔，母公司中国中化（国务院国资委）",
    "group": "品牌/专利层："
   },
   {
    "entity": "拜耳作物科学",
    "role": null,
    "scale": "事业部约 €233 亿（FY2023，含种子；作保部分约 €10–11 Bn，C2 推算）",
    "jurisdiction": "德国勒沃库森/德国-欧盟",
    "group": "品牌/专利层："
   },
   {
    "entity": "科迪华（Corteva）",
    "role": null,
    "scale": "约 $172 亿（FY2023，含种子；作保约 $78 亿，C3 需 10-K 核）",
    "jurisdiction": "美国印第安纳波利斯/美国",
    "group": "品牌/专利层："
   },
   {
    "entity": "巴斯夫农业解决方案",
    "role": null,
    "scale": "约 €101 亿（FY2023 分部，C3 需年报核）",
    "jurisdiction": "德国/欧盟",
    "group": "品牌/专利层："
   },
   {
    "entity": "FMC",
    "role": null,
    "scale": "约 $45 亿（FY2023，C3 需 10-K 核）",
    "jurisdiction": "美国费城/美国",
    "group": "品牌/专利层："
   },
   {
    "entity": "UPL",
    "role": null,
    "scale": "约 $5–6 Bn（FY2023–24，C3 需年报核）",
    "jurisdiction": "印度孟买/印度",
    "group": "品牌/专利层："
   },
   {
    "entity": "扬农化工",
    "role": null,
    "scale": "年营收约 ¥110–160 亿区间（近年波动大）",
    "jurisdiction": "江苏/中国，中化集团旗下",
    "group": "原药/中间体层（中国，举主要上市公司）："
   },
   {
    "entity": "兴发集团",
    "role": null,
    "scale": "集团营收约 ¥280 亿（含磷化工）",
    "jurisdiction": "湖北/中国，国资",
    "group": "原药/中间体层（中国，举主要上市公司）："
   },
   {
    "entity": "新安化工（Wynca）",
    "role": null,
    "scale": "【缺口：需要新安股份年报营收】",
    "jurisdiction": "浙江/中国",
    "group": "原药/中间体层（中国，举主要上市公司）："
   },
   {
    "entity": "利尔化学",
    "role": null,
    "scale": "【缺口：需要利尔化学年报营收】",
    "jurisdiction": "四川/中国",
    "group": "原药/中间体层（中国，举主要上市公司）："
   },
   {
    "entity": "红太阳",
    "role": null,
    "scale": "【缺口：需要红太阳年报营收】",
    "jurisdiction": "江苏/中国",
    "group": "原药/中间体层（中国，举主要上市公司）："
   },
   {
    "entity": "联化科技",
    "role": null,
    "scale": "【缺口：需要联化科技年报及客户结构】",
    "jurisdiction": "浙江-江苏/中国",
    "group": "原药/中间体层（中国，举主要上市公司）："
   }
  ],
  "upstream": [
   "原药往上还有一层**中间体**，这一层是真正最该拆开的一层，比原药更集中：",
   "**芳香/杂环中间体**（吡啶、三嗪、氯化苯系等）：大量集中在江苏、山东化工园区。品牌公司即使自产原药，中间体也常从中国采购——FMC、科迪华在 2019 年后的财报电话会里承认对中国中间体的采购依赖并启动多元化（C3，需财报电话会记录核）。是不是又一个单点：按园区集群算接近单点（单省级行政决定可同时打击数十家），按公司算多点。",
   "**黄磷**（草甘膦甘氨酸路线的磷源）：中国云南、四川水电驱动的黄磷产能占全球绝大部分；2021 年能耗双控限电直接压到黄磷生产，草甘膦价格随之冲历史高位（C3，需行业数据核）。这是\"上游的上游\"再往能源栈挂接的实例。",
   "**氯碱/基础化工品**（液氯、烧碱、甲醇等）：分散，非单点。",
   "**登记数据（无形上游）**：通用厂商在欧美卖原药也需要引用或自建毒理/环境数据包，数据补偿制度（EU Reg 1107/2009、美国 FIFRA 数据引用付费）让原研公司对通用竞争者保有一道收费闸门（C3 制度框架）。这一维物理上不存在、法律上是真实的上游依赖。",
   "结论：中间体层是本节点最该拆出的子节点（候选 id：ag-pesticide-intermediates）。中国断的时候，买印度原药也绕不开——印度农药业约一半中间体从中国进口（C2–C3，印度行业协会说法广被引用，【缺口：需要印度 PMFAI/Crop Care Federation 进口依赖数据】），与 ph-api 里\"印度仿制药依赖中国 6-APA\"完全同构。"
  ],
  "downstream": [
   "**全球商业化种植农业（致命，但滞后一季）**：与氮肥相同的时间结构——断供影响的是下一个用药季，不是当天。用药窗口错过（病虫害爆发期）无法事后补。",
   "**西方品牌公司自身（高依赖）**：品牌公司的制剂产品线里大量非专利成分和中间体从中国采购，它们既是这个节点上层的持有者、又是下层的依赖方——这个双重身份使它们在政治上不推动对华农药脱钩（推了先伤自己的毛利），只做\"中国+1\"式的第二来源建设（C2 推算 + 财报电话会佐证方向，C3）。",
   "**发展中国家农业（高依赖且价格敏感）**：巴西、阿根廷、东南亚、非洲大量使用中国通用农药（直接或经印度转口），支付能力决定了它们没有\"买贵的西方货\"这个缓冲选项。",
   "库存缓冲：渠道（经销商+制剂厂）常备约 3–6 个月库存（C2 推算）；2022–2023 年全球渠道去库存周期证明渠道可以压到很低也可以囤到很高，缓冲弹性比医药大（作物保护可以减量降级使用，药品不能）。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "结论：单一品类断供 `partial`（渠道库存 + 印度 + 减量使用给出缓冲）；中间体层系统性断供 `possible reroute`（没有到 operational 的独立替代链）。专利 AI 层不存在替代问题——专利期内合法路径只有一条,断供即断（但持有者是卖方，无断供动机）。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- 全球作物保护市场：约 $700–800 亿/年（2023 年约 $748 亿，C3，AgbioInvestor 口径，广被引用；【缺口：需要 AgbioInvestor / Phillips McDougall 年度市场报告原文】）。2021–2022 高价年一度接近 $860 亿量级（C2 推算）。\n- 中国农药原药产量：约 200–250 万吨/年（C3，中国农药工业协会/国家统计局口径不一，【缺口：需要中国农药工业协会年度产量统计原文】），其中出口约 140–180 万吨（C2–C3）。\n- 中国农药出口额：约 $100–200 亿/年区间（2022 年高价时冲高、2023–24 回落，C2 推算，【缺口：需要中国海关农药出口额年度数据】）。",
    "cLevels": [
     "C3",
     "C2",
     "C2–C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "| 指标 | 数值 | C 等级 | 来源 |\n|---|---|---|---|\n| 品牌层 CR4（先正达集团+拜耳+科迪华+巴斯夫）| 约 55–60%（按销售额）| C3 | AgbioInvestor，需原文核 |\n| 中国占全球原药产量 | 约 50% | C3 | 中国农药工业协会口径，需核 |\n| 草甘膦中国产能份额 | 约 60–70% | C3 | 行业报告，需核 |\n| 草铵膦中国份额 | 约 70%+ | C3 | 需核 |\n| 印度中间体对华依赖 | 约 50% | C2–C3 | 印度行业协会说法，需原文 |\n\nPrice maker 分层：专利品类——原研公司定价；通用品类——中国原药厂的边际产能开工率实际决定价格方向，而开工率由中国监管环境决定，所以**通用农药的隐性 price maker 是中国的环保/安全/能耗政策**（C2 推算，2019 与 2021 两次价格事件是佐证）。",
    "cLevels": [
     "C3",
     "C2–C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 公司 | 营收（年份）| 利润率 | 市值/估值 | C 等级 |\n|---|---|---|---|---|\n| 先正达集团 | 约 $322 亿（FY2022 集团）| 【缺口：需要先正达集团 FY2023 年报（含 EBITDA 率）】| 非上市（上交所 IPO 已撤回，C3）| C3 |\n| 拜耳（集团）| 约 €476 亿（FY2023 集团），作物科学 €233 亿 | 作物科学 EBITDA 率约 20%+（C2）| 集团市值约 €300 亿量级（2024 低点，诉讼压制，C3）| C3 需年报核 |\n| 科迪华 | 约 $172 亿（FY2023）| 营业利润率约 15%（C2）| 约 $380 亿（C3，2024）| C3 需 10-K 核 |\n| FMC | 约 $45 亿（FY2023）| EBITDA 率约 20%+（C2）| 约 $70–80 亿（C3）| C3 需核 |\n| UPL | 约 $5–6 Bn（FY2024）| 低谷年亏损（2024 去库存冲击，C3）| 约 $4–5 Bn（C3）| C3 需核 |\n| 扬农化工 | 约 ¥110–160 亿区间 | 净利率约 10–15%（C2）| 约 ¥400–500 亿（C2）| 【缺口：需要扬农化工年报】|\n| 兴发集团 / 新安 / 利尔 / 红太阳 / 联化 | 【缺口：需要各公司 A 股年报营收与农药分部数据】| — | — | — |\n\n结构读法与 ph-api 相同：品牌层利润厚、资本纵深大（但拜耳被诉讼严重消耗是例外变量）；中国原药层利润薄且强周期（2021 暴利、2023–24 全行业微利或亏损），承受断供反制的资本纵深小，但国资背景使其可以政策性维持产能。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 农药占谷物种植总成本约 8–15%（低于氮肥，C2 推算，作物差异大；大豆/棉花等经济作物更高）。\n- 品牌公司对中国采购的成本敞口：FMC、科迪华公开承认中国是重要中间体来源但未披露比例——【缺口：需要 FMC / Corteva 10-K 供应链风险章节及财报电话会记录（2019Q1–Q3），定量或定性确认对华采购敞口】。\n- 渠道库存缓冲：约 3–6 个月（C2）；农药可减量、可换品类、可接受一定药害损失，下游刚性弱于医药强于芯片——断供传导是\"减产幅度\"而不是\"停摆\"。\n- 断供到田间影响的时滞：1–2 个用药季（约 3–12 个月，随作物与半球错开，C2）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "- **2019 响水后**：部分农药中间体和原药价格上涨数成到一倍以上、交期拉长（C3，行业报道广泛，【缺口：需要中农立华原药价格指数 2019 年 3–12 月数据，量化涨幅】）；西方品牌公司提及供应紧张并增加安全库存（C3）。全行业冲击是价格与交期冲击，未造成全球性田间断药（渠道库存吸收）。\n- **2021 能耗双控**：草甘膦原药价格从约 ¥2.5 万/吨涨至约 ¥8 万/吨历史高位（C3，需价格指数核），全球农民 2022 播种季除草成本显著上升，与化肥危机叠加。\n- **假想系统性断供（中国原药+中间体对外停供一年）**：全球通用农药供给缺口约一半，减量用药下全球作物损失率上升——数量级估算为全球农业产值损失百分之几、绝对额百亿美元级（C2 毛估，待用户/Nullroute 审核；【缺口：需要 FAO 或世界银行农药供给冲击评估类报告，目前未见现成专项报告，可能需要学术研究工单综述】）。\n- 对比锚：农药断供冲击 < 氮肥断供冲击（成本占比低、可减量），但 > 多数工业品（粮食安全传导）。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "利润沉淀在**品牌与登记资产层**，不在合成层——与 ph-api 完全同构：\n\n- 原药出厂价与终端制剂零售价之间常有 2–5 倍价差（C2 推算，品类差异大），价差的大头归品牌、登记持有者与分销渠道。\n- 专利品类毛利率 40%+ vs 中国原药层净利率常年个位数到 15%（周期顶除外）（C2）。\n- 政治含义与 ph-api 相同的推论：中国侧握着产能卡点但在卡点上赚得很薄，断供的己方经济损失相对小、对手侧涨价冲击相对大——武器化的\"成本-收益\"结构对产能方偏有利。但有一条与 ph-api 不同的对冲：先正达集团的存在使\"中国侧\"同时深度持有品牌层利润——中国国企是这个市场品牌层最大玩家，打断供给等于打自己资产负债表的另一半。这条所有权对冲是本节点独有的武器化抑制因素（C2 结构推断）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "响水爆炸 2019-03-21，78 死",
    "level": "C4",
    "source": "公共事实，官方通报"
   },
   {
    "item": "响水化工园区 2019-04 被彻底关闭",
    "level": "C3",
    "source": "盐城市决定，媒体广泛报道"
   },
   {
    "item": "江苏化工整治方案与企业压减目标",
    "level": "C3",
    "source": "苏办文件，媒体转述"
   },
   {
    "item": "全球作物保护市场约 $748 亿（2023）",
    "level": "C3",
    "source": "AgbioInvestor 口径"
   },
   {
    "item": "品牌层 CR4 约 55–60%",
    "level": "C3",
    "source": "AgbioInvestor/行业口径"
   },
   {
    "item": "中国占全球农药原药产量约 50%",
    "level": "C3",
    "source": "中国农药工业协会口径"
   },
   {
    "item": "草甘膦中国产能约 60–70%",
    "level": "C3",
    "source": "行业报告"
   },
   {
    "item": "印度农药中间体约 50% 依赖中国",
    "level": "C2–C3",
    "source": "印度行业协会说法，广被引用"
   },
   {
    "item": "新 AI 研发约 $3 亿 / 12 年",
    "level": "C3",
    "source": "Phillips McDougall/CropLife 研究"
   },
   {
    "item": "无农药时潜在作物损失 50–70%、实际约 30%",
    "level": "C2",
    "source": "Oerke 2006 农学文献，凭印象引用"
   },
   {
    "item": "2021 草甘膦价格约 ¥2.5 万→8 万/吨",
    "level": "C3",
    "source": "行业价格报道"
   },
   {
    "item": "中国化工收购先正达 $430 亿（2017 交割）",
    "level": "C3",
    "source": "交易公告，广知"
   },
   {
    "item": "欧盟新烟碱户外禁用（2018）",
    "level": "C3",
    "source": "Implementing Regs 2018/783-785"
   },
   {
    "item": "欧盟草甘膦十年续登（2023-11）",
    "level": "C3",
    "source": "Implementing Reg 2023/2660"
   },
   {
    "item": "中国百草枯禁内销、保出口",
    "level": "C3",
    "source": "农业部公告，媒体报道"
   },
   {
    "item": "2019 后品牌商财报电话会承认中国供应紧张",
    "level": "C3",
    "source": "财报电话会转述报道"
   },
   {
    "item": "涨价幅度超出成本传导（2019–21 部分品类）",
    "level": "C2",
    "source": "结构推算"
   },
   {
    "item": "渠道库存 3–6 个月",
    "level": "C2",
    "source": "行业惯例推算"
   },
   {
    "item": "产能向中国西部迁移",
    "level": "C3",
    "source": "行业趋势报道"
   },
   {
    "item": "农药占种植成本约 8–15%",
    "level": "C2",
    "source": "农经推算"
   },
   {
    "item": "假想系统性断供损失百亿美元级",
    "level": "C2",
    "source": "毛估"
   }
  ],
  "contested": {
   "title": "2019-03-21 响水爆炸 → 中国化工安全整治 → 全球农药中间体/原药供给冲击（2019–2021）",
   "summary": "这是本节点最清晰的一次被激活，类型是**操作方内部中断**：没有任何一方想动全球农药供给，但全球供给被实际动了。"
  },
  "gaps": [
   "1. 【缺口：需要《江苏省化工产业安全环保整治提升方案》（2019）原文及企业压减目标数字，加国务院响水事故调查报告——争夺事件的两份一手文件，整个\"操作方内部中断\"判断的地基】",
   "2. 【缺口：需要中国农药工业协会年度产量/出口统计（2018–2024 连续数据）——量化中国份额与 2019/2021 两次冲击的产量缺口，Q1/Q2 核心】",
   "3. 【缺口：需要中农立华原药价格指数（或同类行业价格数据）2018–2024 序列——把两次中断的价格冲击从\"报道说涨了\"升级为可核数字，Q5 核心】",
   "4. 【缺口：需要 AgbioInvestor（原 Phillips McDougall）全球作物保护市场年度报告——市场规模与 CR4 的原始口径】",
   "5. 【缺口：需要 FMC 与 Corteva 2019 年 Q1–Q3 财报电话会记录及 10-K 供应链风险章节——西方品牌商对华采购敞口的最接近一手的证据，Q4 与反应链核心】",
   "6. 【缺口：需要印度 PMFAI 或印度化工部数据：印度农药中间体对华进口依赖比例及 PLI 农化专项文件——fallback 判断的关键，决定印度这条替代线的真实独立性】",
   "7. 【缺口：需要先正达集团 FY2023 年报及 2017 收购案 CFIUS 附加条件——\"所有权与法域分开\"这条独有结构线的一手支撑】",
   "8. 【缺口：需要 EUR-Lex：Reg 1107/2009、Implementing Regs 2018/783-785、2023/2660 原文——政治传动层 A/B 的法律文本】",
   "9. 【缺口：需要 Oerke (2006) \"Crop losses to pests\"（J. Agricultural Science）原文——功能定义里损失率数字的唯一学术锚点，目前凭印象引用【待典藏核实】】\n---"
  ]
 },
 "ag-seed": {
  "sourceFile": "ag-seed.md",
  "archiveId": "ag-seed",
  "established": "2026-07-08",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "拜耳作物科学（Bayer Crop Science，含原孟山都）",
    "role": null,
    "scale": "商业种子全球约 20–25%（C3）；转基因核心性状占比更高",
    "jurisdiction": "德国（拜耳集团）；孟山都业务原属美国，性状 IP 主要在美国专利体系",
    "group": null
   },
   {
    "entity": "科迪华（Corteva Agriscience）",
    "role": null,
    "scale": "商业种子全球约 15–20%（C3）",
    "jurisdiction": "美国（NYSE: CTVA）；美国专利体系",
    "group": null
   },
   {
    "entity": "先正达集团（Syngenta Group）",
    "role": null,
    "scale": "商业种子全球约 7–10%（C3）",
    "jurisdiction": "瑞士运营主体 + 中国实控（中国中化 / 中国化工，国有）；跨美欧中三法域",
    "group": null
   },
   {
    "entity": "巴斯夫农业解决方案（BASF Agricultural Solutions）",
    "role": null,
    "scale": "商业种子全球约 5%（C3，估算）",
    "jurisdiction": "德国（BASF SE）；欧美法域",
    "group": null
   }
  ],
  "upstream": [
   "种子节点自己绕不开的东西，比多数农业节点少（种子生产不依赖稀缺矿产、不高度依赖能源），但有几处结构性上游：",
   "**种质资源（遗传材料的原始来源）**：所有商业品种都从既有的遗传多样性里选育而来，来自地方品种、野生近缘种、种质库（gene bank）里保存的样本。这套原始遗传材料的获取受《生物多样性公约》和**名古屋议定书**（Nagoya Protocol，关于遗传资源获取与惠益分享，ABS）约束：一国的种质资源被另一国公司拿去育种并申请专利，涉及惠益分享和\"生物剽窃\"（biopiracy）争议。这是种子 IP 最上游的政治接口：性状 IP 的原料本身有主权归属。建议下轮单列子节点 **ag-seed-germplasm**（种质资源获取与惠益分享）。",
   "**育种技术平台（转基因 / 基因编辑）**：转基因（GMO）依赖 Bt 基因、抗除草剂基因等专利化的遗传元件和转化技术；基因编辑（CRISPR 等）依赖编辑工具本身的专利（CRISPR 核心专利有自己的一套集中和诉讼史，主要在美国 Broad 研究所 / UC 之间，属于另一个节点，可以关联、不必并入本节点）。这一层是性状 IP 的技术底座。",
   "**监管审批数据包**：一个转基因性状要能商业化，需要在每个目标市场做安全评估、拿批准，这套审批数据的生成和维护本身是巨额沉没成本（单个性状从研发到全球审批常被引用为数亿到十亿美元级、十年以上周期，C3，需行业报告核），构成重建壁垒（见第 8 维），也是小公司进不来的原因之一。",
   "【缺口：单个转基因性状从研发到全球监管审批的成本 / 周期数字——需 CropLife International 或 Phillips McDougall 的性状开发成本研究原文】"
  ],
  "downstream": [
   "**致命依赖（依赖高产商业种子、且已无留种能力）**：",
   "大规模商业化种植的农场（北美玉米 / 大豆 / 棉花带、南美大豆带）：几乎全部使用商业杂交种 / 转基因种，每季重买，留种既不划算（杂交衰退）也常违约 / 侵权。断供或授权费大涨直接推高种植成本。",
   "依赖特定抗除草剂性状体系的农场：种子和配套除草剂绑定，换种子等于换整套农艺体系，转换成本高。",
   "**高依赖（可缓冲但代价大）**：",
   "用商业杂交种但可退回公共品种的种植体系：退回去产量下降，但不是种不出来。",
   "发展中国家采用绿色革命 / 商业杂交种的地区：对商业种子有依赖，但常有平行的公共育种和农家种系统作底。",
   "**低依赖 / 可自给**：",
   "大量小农、口粮作物（很多地区的小麦、水稻自留种比例仍高；自花授粉作物如小麦、水稻留种性状衰退远小于杂交玉米）。这部分下游对商业种子 IP 的依赖天然低。这是种子节点和氮肥节点的关键区别：氮肥没有\"自给\"退路（土壤氮必须补），种子对相当一部分作物和农户是有自给退路的。",
   "依赖强度判断：**依赖度高度分作物、分种植体系**。杂交玉米 + 转基因大豆 / 棉花的商业种植体系依赖度\"致命\"；自花授粉口粮作物 + 小农体系依赖度\"可缓冲到低\"。不能用\"种子\"一个数字概括。",
   "【缺口：主要作物商业种子 vs 农家种 / 自留种的种植面积占比——需粮农组织或各国农业部的种子来源统计】"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "分机制看，退路强弱差别很大：\n\n**退回公共品种 / 本土老品种（绕开 IP 锁定的性状）**：`partial`\n- 替代哪一层：受专利 / 品种权保护的高产性状\n- 多久接上：即时可得（公共品种、种质库品种现成存在），但产量和抗性下一档\n- 卡在哪个转换环节：①产量差，放弃 IP 性状通常意味着单产下降（幅度分作物、分性状，玉米杂交 vs 农家种差距可达数成，C2 推算，需农学数据核）；②配套农艺，抗除草剂体系一旦退出，整套除草方案要重做；③种子扩繁能力，公共育种和地方扩繁体系在很多地方已萎缩，短期难以规模供种\n- 谁有权限启动：农民 / 国家公共育种体系\n- 现场执行能力：公共育种机构（CGIAR 系统、各国农科院）确实存在并运转，但资金和覆盖远不及商业巨头\n- 结论：退得回去，但要付产量 + 农艺重组的代价，且公共育种供种能力是瓶颈 → `partial`\n\n**留种（针对杂交种）**：`blocked`（生物学阻断）\n- 杂交种留种得到 F2，性状分离、产量大幅下滑，生物学上不成立\n- 这不是\"退路差\"，而是\"退路被种子的生物学结构关掉了\"，这正是杂交生物锁定的意义\n- 对自花授粉作物（小麦、水稻）留种：`operational`（留种性状衰退小，是真退路，这也是为什么小麦 / 水稻的种子 IP 卡点远弱于玉米）\n\n**本土 / 新兴种业公司替代跨国巨头 IP**：`possible reroute`\n- 中国、印度有本土种业公司（隆平高科、先正达集团中国资产、印度的种业企业等），能在部分作物、部分市场提供替代；但核心转基因性状 IP 和全球审批数据包的差距是中长期（5–10 年以上）\n- 结论：`possible reroute`（不是当季 fallback）\n\n**基因编辑绕开旧转基因专利**：`planned / possible reroute`\n- 基因编辑（CRISPR）理论上可以做出不含旧 Bt / 抗草甘膦专利的新性状，绕开孟山都系专利；但 CRISPR 本身有专利、且各国对基因编辑作物的监管定性尚在演变（欧盟收紧、美国相对宽松）\n- 结论：结构上是绕开旧 IP 的潜在路径，但受新一轮专利和监管约束，不是现成退路"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- 全球商业种子市场规模：约 **500–600 亿美元/年**（C3，行业常引口径，需 ISF 世界种子市场统计或 Kynetec / Phillips McDougall 报告原文核）。这是\"商业销售的种子\"口径，不含农家自留种（自留种无市场交易，不计入）。\n- 其中转基因 / 高价值性状种子占比高于面积占比——性状溢价使转基因种子单价远高于常规种，价值集中在玉米、大豆、棉花几个作物。\n- 四大公司种子 + 性状业务合计营收：需各家分部数字加总（Corteva 种子分部、拜耳作物科学种子部分、先正达集团种子、BASF 农业种子），量级约在全球市场的一半以上（C3 推算，需年报核）。\n\n【缺口：ISF（International Seed Federation）世界种子市场统计年度数字（全球商业种子市场规模的原始口径）；四大公司种子分部营收（Corteva FY 10-K 种子分部、拜耳 / 先正达 / BASF 年报分部拆分）】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "| 指标 | 数值 | 来源 | 备注 |\n|---|---|---|---|\n| 商业种子 CR4（拜耳+科迪华+先正达+巴斯夫）| 约 50%+（C3）| IPES-Food / ETC Group 口径 | 精确比例需原文核 |\n| 转基因核心性状 IP 集中度 | 更高（拜耳原孟山都 + 科迪华主导玉米 / 大豆核心性状）| 专利数据库 / 行业报告（C3）| 需专利统计核 |\n| 商业种子 CR1（拜耳作物科学）| 约 20–25%（C3）| 行业报告 | 收购孟山都后 |\n\nPrice maker：在特定作物 + 特定性状上（如抗草甘膦大豆、Bt 玉米核心性状），持有专利的公司是实际 price maker（授权费定价 + 种子定价）；在整体商业种子市场无单一 price maker（多作物、多公司竞争）。\n\n【缺口：ETC Group / IPES-Food 报告中 CR4 的精确数值和年份口径；转基因性状专利集中度的量化数据】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收（来源/年份）| 种子分部 | 市值 / 估值 |\n|---|---|---|---|\n| 拜耳集团 Crop Science | 集团总营收约 470–500 亿欧元（FY，C3，含药 + 农）；作物科学分部约 220–250 亿欧元（C3，需年报核）| 种子 + 性状为其中一块 | 拜耳集团上市（ETR: BAYN），市值需核 |\n| 科迪华 Corteva | 约 170–230 亿美元（FY，C3，需 10-K 核）| 种子分部约占一半 | NYSE: CTVA，市值需核 |\n| 先正达集团 Syngenta Group | 约 300+ 亿美元（FY，C3，含农化 + 种子，需年报核）| 种子为其中一块 | 未独立上市（中国国有实控）；A 股上市曾推进后撤回（C3）|\n| BASF 农业解决方案 | 农业分部约 90–100 亿欧元（FY，C3，需年报核）| 种子 + 性状 + 农化 | BASF 集团上市（ETR: BAS）|\n\n注：这几家都是\"种子 + 农化 + (拜耳)医药\"的综合体，种子分部单独营收都需要从年报分部数据里拆。它们的资本纵深（数百亿营收 + 全球研发 + 专利组合）是真正的壁垒，不是单一产品线。\n\n【缺口：Corteva FY 最新 10-K 种子分部营收；拜耳作物科学分部年报；先正达集团年报（营收 + 种子拆分）；BASF 农业解决方案分部数字。先正达因中国实控 + 未上市，财务透明度最低（C2）】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "方向一（本节点对下游成本的影响）：\n- 种子成本占大田作物（玉米 / 大豆）总种植成本约 10–20%（C2 推算，需 USDA ERS 成本结构数据核）；转基因种 + 性状费使这一比例高于常规种\n- 抗除草剂性状体系还捆绑除草剂支出，实际\"种子 + 配套农化\"占比更高\n\n方向二（断供 / 涨价后下游的处境）：\n- 高产商业种子授权费大涨 → 商业农场种植成本上升，但当季仍能买到（不是物理断供）\n- 若某性状被撤销授权 / 某国不批 → 该市场退回上一代品种，产量下降（幅度分作物）\n- 种子的\"库存缓冲\"概念不同于氮肥：农民播种前采购，一季一次，错过播种窗口当季无法补种\n\n【缺口：USDA ERS 玉米 / 大豆种植成本结构中种子成本占比；转基因种 vs 常规种单价差数据】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "- 种子节点很少发生\"断供\"型冲击（种子分散、可扩繁、可退回公共品种），历史上的冲击更多是**价格 / 授权 / 并购审查**型，不是物理归零\n- 可参照的量级：三场大合并的交易规模本身（先正达 430 亿、拜耳-孟山都 630 亿）是种子 / 农化行业价值的直接标尺（C3）\n- 系统性风险不在\"某季种子断供\"，在\"少数公司控制主粮性状 IP\"的长期结构性依赖——这类风险难以货币化，更接近 real force 层（种业主权）而非可算的 GDP 损失\n\n【缺口：若要量化\"性状 IP 集中的经济影响\"，需 OECD 或世界银行关于种业集中度对农民成本 / 创新影响的研究报告；目前无现成的断供冲击货币化数字】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "- **育种 / 性状研发端（四大公司）**：利润在这里沉淀——性状 IP 是高毛利资产，专利期内的授权费和种子溢价是主要利润来源\n- **种子扩繁 / 分销端**：毛利低于性状端\n- **农民端**：种子 + 配套农化是成本项；杂交生物锁定和 IP 使农民无法通过留种把这部分成本内部化（对自花授粉作物则可以）\n- **公共育种体系（CGIAR、各国农科院）**：产出公共品种、无 IP 溢价，长期资金不足\n\n政治压力落到哪张资产负债表：\n- 转基因审批收紧（某国不批）→ 首先打持有该性状的公司的市场准入 + 该国采用该性状的农民\n- 种质资源惠益分享争议（名古屋议定书）→ 打育种公司的原料合法性\n- 跨法域收购审查（CFIUS 型）→ 打收购方的交易能否完成 + 目标公司 IP 的控制权归属\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "全球商业种子市场约 500–600 亿美元/年",
    "level": "C3",
    "source": "行业常引口径（ISF / Kynetec）"
   },
   {
    "item": "拜耳 / 科迪华 / 先正达 / 巴斯夫四家控制商业种子 50%+",
    "level": "C3",
    "source": "IPES-Food / ETC Group 口径"
   },
   {
    "item": "转基因核心性状 IP 集中在拜耳（原孟山都）+ 科迪华",
    "level": "C3",
    "source": "行业 / 专利数据库"
   },
   {
    "item": "中国化工约 430 亿美元收购先正达（2016–2017）",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "拜耳约 630 亿美元收购孟山都（2018），向巴斯夫剥离约 70–90 亿资产",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "科迪华 2019 年从陶氏杜邦分拆独立",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "杂交玉米自 1930 年代商业化、锁定每季买种",
    "level": "C3",
    "source": "农业史广知"
   },
   {
    "item": "杂交衰退（F1 优势不遗传给 F2）迫使每季重买",
    "level": "C4",
    "source": "遗传学常识"
   },
   {
    "item": "自花授粉作物（小麦 / 水稻）留种性状衰退小",
    "level": "C3",
    "source": "农学常识"
   },
   {
    "item": "Diamond v. Chakrabarty（1980）确立生物可专利",
    "level": "C3",
    "source": "美国最高法院判例"
   },
   {
    "item": "Bowman v. Monsanto（2013）确认专利种子留种侵权",
    "level": "C3",
    "source": "美国最高法院判例"
   },
   {
    "item": "孟山都抗草甘膦 / Bt 性状 1996 年商业化",
    "level": "C3",
    "source": "农业史广知"
   },
   {
    "item": "单个转基因性状研发 + 全球审批约数亿美元 / 十年级",
    "level": "C3",
    "source": "行业报告口径"
   },
   {
    "item": "早期抗草甘膦大豆专利约 2014–2015 年到期",
    "level": "C3",
    "source": "行业报道"
   },
   {
    "item": "种子成本占玉米 / 大豆种植成本约 10–20%",
    "level": "C2",
    "source": "推算"
   },
   {
    "item": "零 IP 性状退回公共品种产量下降（玉米可达数成）",
    "level": "C2",
    "source": "农学推算"
   },
   {
    "item": "先正达 IP 仍注册在美欧法域、中国控制的是公司非脱域 IP",
    "level": "C2",
    "source": "结构推算"
   },
   {
    "item": "种子 IP 是价值 / 信息流中断点、非物理流",
    "level": "C2",
    "source": "结构判断"
   }
  ],
  "contested": {
   "title": "中国化工收购先正达（2016 年 2 月宣布 — 2017 年 6 月完成，约 430 亿美元）",
   "summary": "这是全球种子 / 性状 IP 控制权历史上最大的一次跨法域转移：一家中国国有企业买下一家瑞士种业 + 农化巨头，把先正达的性状 IP、品种和全球研发平台的控制权移到中国手里。用五个阅读动作读这场争夺："
  },
  "gaps": [
   "1. 【缺口：ISF（International Seed Federation）世界种子市场统计 / Kynetec / Phillips McDougall 报告——全球商业种子市场规模（500–600 亿美元）的原始口径和年份，以及四大公司市场份额精确数字；C3→C4 的核心量化基础】",
   "2. 【缺口：中国化工收购先正达的 CFIUS 审查结论原文 + 时间线；欧盟竞争总署对该案的反垄断决定文号和剥离要求——本节点主争夺事件的一手文件，政治传动层 A/E 的核心】",
   "3. 【缺口：ETC Group《Food Barons》/ IPES-Food 报告中商业种子 CR4 和转基因性状 IP 集中度的量化数据和测量方法——确认 50%+ 的口径】",
   "4. 【缺口：四大公司种子分部营收——Corteva 最新 FY 10-K 种子分部、拜耳作物科学分部年报、先正达集团年报（+ 种子拆分）、BASF 农业解决方案分部；先正达因中国实控 + 未上市，财务透明度最低】",
   "5. 【缺口：单个转基因性状从研发到全球监管审批的成本 / 周期数字——CropLife International 或 Phillips McDougall 的性状开发成本研究原文；决定第 8 维重建壁垒的量化】",
   "6. 【缺口：Diamond v. Chakrabarty（1980）、Bowman v. Monsanto（2013）判例原文 / 权威法律摘要——IP 锁法律基础的一手来源】",
   "7. 【缺口：主要作物商业种子 vs 农家种 / 自留种的种植面积占比（粮农组织或各国农业部统计）——决定第 6 维下游依赖度的分作物差异】",
   "8. 【缺口：名古屋议定书（Nagoya Protocol）+ ITPGRFA 关于种质资源惠益分享的具体机制文本——上游子节点 ag-seed-germplasm 的接口依据】"
  ]
 },
 "cm-battery-co": {
  "sourceFile": "cm-battery-co.md",
  "archiveId": "cm-battery-co",
  "established": "2026-06-29",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "最深的地理集中、最快被绕开的矿产——两件事同时为真\n\n钴在所有电池关键矿产里地理集中度最高：刚果民主共和国（DRC）一国贡献全球约 74–76% 的矿山产量，而这些矿石的约 80% 运往中国精炼（C3，IEA 广知口径，典藏工单待核）。比稀土的 85–90% 精炼集中更极端的是，钴连采矿这一层都高度依赖单国。\n\n但钴同时是全图所有电池矿产里**卡点正在被结构性绕开**速度最快的一个——不是靠供给多元化（找新的钴矿），而是靠电池化学路线切换：磷酸铁锂（LFP）电池完全不用钴，已占全球 EV 电池装机约 40%（2023，C3 广知）；高镍三元（NMC 811）比 NMC 111 每千瓦时少用约 50% 的钴（C3）。随着 LFP 占比继续上升、NMC 高镍化推进，单位 EV 产能对钴的需求在下降。\n\n两件事同时为真：钴的地理控制结构是全图最极端的，但这个卡点正在被下游技术路线选择绕开。稀土、多晶硅都没有这种结构性替代路径在有效期内运行。\n\n除了地理集中，钴还有一个其他电池矿产没有的特征：**它几乎全部是铜采矿的副产品**（少部分来自镍采矿）。这意味着钴产量不能独立按需扩张——要增加钴供给，必须有人增加铜矿开采量。供给端没有独立的定价调节机制，矿山主没有\"多采钴\"的直接选项。\n\n---",
  "holders": [
   {
    "entity": "Glencore（嘉能可）",
    "role": "全球最大钴生产商（矿山端）",
    "scale": "Katanga Mining（前 KCC，100%）、Mutanda Mining（部分复产）",
    "jurisdiction": "瑞士 / 英国 LSE 上市，全球法域 + DRC 采矿许可",
    "group": "采矿/生产层（主要资产）："
   },
   {
    "entity": "CMOC / 洛阳钼业",
    "role": "全球第二大钴生产商（近年快速扩张）",
    "scale": "TFM（Tenke Fungurume Mining，80%，Gécamines 20%）；KFM（Kamoa-Fungurume Mining，95%，DRC 政府股 5%）",
    "jurisdiction": "中国法域（上证所 A 股 + 港交所 H 股）",
    "group": "采矿/生产层（主要资产）："
   },
   {
    "entity": "ERG（欧亚资源集团）",
    "role": "中等规模，私有公司",
    "scale": "Metalkol RTR（钴尾矿再处理，DRC）",
    "jurisdiction": "哈萨克斯坦，私营，多法域",
    "group": "采矿/生产层（主要资产）："
   },
   {
    "entity": "DRC 国家矿业公司 Gécamines",
    "role": "国有合作方",
    "scale": "持股 TFM 20%；历史上是 DRC 大型铜钴矿的国有运营商",
    "jurisdiction": "DRC 国家主权",
    "group": "采矿/生产层（主要资产）："
   },
   {
    "entity": "嘉能可（中国精炼）",
    "role": "精炼端也有存在，但精炼主要在中国独立企业",
    "scale": null,
    "jurisdiction": null,
    "group": "采矿/生产层（主要资产）："
   }
  ],
  "upstream": [
   "钴自身绕不开的东西：",
   "**铜矿开采**：钴在 DRC 主要作为铜矿（碲铜矿带，Copperbelt）的副产品，无铜矿开采就无钴产出。这把钴供给绑到铜需求周期上——当铜价低迷、矿山关闭时，钴也跟着减少，和稀土（独立开采）的结构完全不同。",
   "**能源（电力）**：DRC 矿山和中国精炼厂均需大量电力，精炼层廉价电是中国精炼成本优势来源之一（与 cm-battery-li 同）。",
   "**DRC 基础设施**：DRC 道路/铁路（SNCC 铁路网非常老旧，C3）是矿山到港口的物流瓶颈；Lobito Corridor 项目（美/欧资金，计划修建大西洋港口到刚果矿区铁路，C3）是退路建设中的一部分。"
  ],
  "downstream": [
   "**re-battery-material（NMC 正极材料）**：直接下游，钴是 NMC 正极的必要原料。CNGR、华友、格林美等正极材料企业对钴硫酸盐的依赖是致命依赖（NMC 路线上）。",
   "**re-battery-cell（NMC/NCA 路线电芯）**：松下（特斯拉 NCA）、LG 新能源、三星 SDI、SK On（主要走 NMC 路线）对钴间接依赖，依赖强度高；已转向 LFP 的 BYD/CATL（部分）不依赖。",
   "**航空航天与国防**：高温合金（用于喷气发动机）含钴，属另一需求线，与电池完全独立，C3。",
   "**硬质合金和切削工具**：WC-Co 硬质合金，相对稳定的工业需求，不随 EV 波动，C3。"
  ],
  "fallback": {
   "verdictZh": "部分可行至受阻",
   "verdictRaw": "partial-to-blocked",
   "unstructured": false,
   "text": "**总判**：采矿层 `partial-to-blocked`（短期内 DRC 不可替代），精炼层 `partial`（中期非中精炼可扩张），需求侧 `operational`（LFP 替代已大规模发生）。这个组合使钴的风险轮廓随时间减小，而非增大。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球钴金属/化合物市场规模随价格周期剧烈波动：\n- 2022 年估算峰值：约 $80–120 亿（钴价约 $30–40/lb × 全球产量约 17 万 t，C2 推算）\n- 2023 年估算：约 $25–45 亿（钴价约 $12–20/lb，产量增加但价格崩，C2 推算）\n\n钴市场规模远小于锂（2022 年约 $400–500 亿）和稀土，但对特定下游（高镍 NMC 电芯、航空高温合金）的重要性不成比例。\n\n【缺口：需要 Glencore 2023 年报（钴业务营收）或 Darton Commodities/Roskill 年度报告——影响 Q1 精确数字，典藏工单已投】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 采矿层：CR1（DRC）= **76%**（C4，USGS MCS 2025）；远比锂（澳 37%）和多晶硅（中 90%+）更集中于单一国家\n- 精炼层：CR1（中国）= \"过半\"（C3，IEA GCMO 2024，图形层；广知口径\"约 80%\"未在原文逐字核实）\n- 企业层：Glencore FY2023 = **41,300 t**（C4）；CMOC FY2023 = **55,526 t**（C4），两者合计约 57%（基于 C3 总产量推算）\n- Price maker = DRC 政府（采矿层，通过出口许可 + 2025 年起常态化配额制度）+ 中国精炼商集体（精炼层，通过产能利用率）",
    "cLevels": [
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 法域 | 规模参考 | 财务数据 C 等级 |\n|---|---|---|---|\n| **Glencore** | 瑞士/英国上市 | FY2023 钴产量 **41,300 t**（C4，年报）；总集团营收约 $2,400 亿（C3）；钴分部具体营收未单独披露（C2 推算） | C4（产量）/ C3（营收推算） |\n| **CMOC / 洛阳钼业** | 中国 A+H | FY2023 钴产量 **55,526 t**（C4，港交所年报），超越 Glencore 成全球第一大钴生产商；FY2023 总营收约 ¥2,800–3,200 亿（C3 广知）；钴分部具体营收未单独披露 | C4（产量）/ C3（营收） |\n| **Umicore** | 比利时 Euronext | FY2023 营收约 €180 亿（全集团，C3 广知）；钴相关业务（precursor materials）占比约 30–40%（C2 推算）| C3 |\n| **Gécamines** | DRC 国有 | 国有公司，无公开财务（C2）| 仅从 CMOC 协议披露可见一部分 |\n\n【产量数字（Glencore 41,300 t / CMOC 55,526 t）已升 C4；营收分部细分未公开披露，Q3 营收列维持 C2–C3 推算。残余缺口：Umicore 钴业务具体规模（C2 推算）。】",
    "cLevels": [
     "C4",
     "C3",
     "C2",
     "C2–C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- NMC 811 正极材料钴含量：约 10%（质量比），即生产 1 GWh NMC 811 电芯需约 200–400 t 钴（C2 推算，取决于电芯能量密度）\n- 电芯制造商对钴的直接依赖：NMC 路线的 LG/三星/SK/松下，钴占正极材料成本约 15–25%（2022 年高价期 C2 推算）\n- 电芯库存缓冲：NMC 电芯制造商通常持有 1–3 个月钴硫酸盐库存（C2 类比其他电池材料）；DRC 完全封锁后 3–6 个月内开始影响 NMC 产能\n- LFP 路线（无钴）：不依赖此节点，CATL/BYD LFP 产能对 DRC 封锁免疫",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "- 2022 年 CMOC TFM 停产事件（数月）：钴价短期上涨约 10–20%（C3 广知）；影响有限是因为其他矿山继续供货 + DRC 以外库存缓冲\n- 假设 DRC 全境封锁（极端情景）：全球 NMC 电芯产能在 3–6 个月内面临严重原料短缺，相当于全球高端 EV 产线暂停；经济冲击量级在数百亿至千亿美元（C1，无专项报告支持，纯数量级推算）\n- 但 LFP 路线（约 40% EV 市场）不受影响；中期可通过转向 LFP 缓解部分冲击\n\n【缺口：IEA Critical Minerals 2024 或 BloombergNEF 对钴断供经济冲击的量化估算——影响 Q5 可信度，当前 C1–C2】",
    "cLevels": [
     "C3",
     "C1",
     "C1–C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "在高价周期（2018、2021–2022），利润大量沉淀在**矿山运营商**（Glencore/CMOC 毛利丰厚）和**精炼商**（钴价高时精炼溢价也高）；DRC 政府通过 royalty 获一份，Gécamines 分红获一份。\n\n在低价周期（2023–2024），矿山/精炼利润崩溃，下游正极材料厂（钴成本占比下降）和电芯厂相对受益。DRC royalty 是按产值的 3.5%，即使价格低也有绝对收入——这使 DRC 政府的收益比企业更稳定。\n\n资本归宿的关键结构：**Glencore 在西方法域（瑞士/英国），CMOC 在中国法域**——两大主要生产商法域对立。任何西方主导的供应链\"去中国化\"策略，实际上是在帮 Glencore 排除竞争对手 CMOC，同时增加对 Glencore 的依赖——价值从中国矿业公司转到欧洲矿业公司，DRC 的地位不变，生产的那条铁路仍在刚果。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "DRC 2023 实际：73.5%（175,000/238,000 t）；2024 估算：76%",
    "level": "C4",
    "source": "USGS MCS 2025 p.67（原文在库 `raw/cm-battery-co-primary/usgs-mcs2025-full.pdf`）"
   },
   {
    "item": "中国约 80% 全球钴精炼产能",
    "level": "C3",
    "source": "IEA GCMO 2024 原文\"over half\"（p.63）；精确份额在图形层，未取 IEA Dataset"
   },
   {
    "item": "Glencore 2023 钴产量 41,300 t（非洲矿 38,800 t），均价 $15/lb",
    "level": "C4",
    "source": "Glencore FY2023 Production Report，原文在库"
   },
   {
    "item": "CMOC 2023 钴产量 55,526 t（+173.7% YoY）；TFM 21,600 t + KFM 33,900 t",
    "level": "C4",
    "source": "CMOC 2023 港交所年报 pp.43-44，原文在库"
   },
   {
    "item": "CMOC 2023 钴营收约 RMB 34.1 亿，毛利率 37.01%",
    "level": "C4",
    "source": "CMOC 2023 港交所年报 p.50，原文在库"
   },
   {
    "item": "Glencore + CMOC 合计 40.7%（96,826/238,000 t）全球矿山产量",
    "level": "C4",
    "source": "由 Glencore FY2023 + CMOC 2023 + USGS MCS 2025 三 C4 来源推算"
   },
   {
    "item": "CMOC 以 $26.5 亿收购 TFM（2016 年，Freeport-McMoRan 出售）",
    "level": "C3",
    "source": "广泛媒体报道"
   },
   {
    "item": "DRC 2022 年封锁 CMOC TFM 出口、CMOC 宣布停产",
    "level": "C3",
    "source": "Reuters/Bloomberg 大量报道；CMOC 年报间接确认 TFM 2023 恢复生产"
   },
   {
    "item": "CMOC 与 Gécamines 达成和解，TFM 2023 初恢复生产",
    "level": "C3",
    "source": "CMOC 2023 年报 p.44 TFM/KFM 产量数据间接验证恢复，金额（约 $7–9 亿）仍 C3"
   },
   {
    "item": "DRC 2018 年矿业法典（Loi n°18/001）将钴列为战略物质",
    "level": "C3",
    "source": "法律来源广知；法文原文典藏工单包含但未明确提取"
   },
   {
    "item": "LFP 约 40% 全球 EV 电池装机（2023）",
    "level": "C3",
    "source": "SNE/BNEF 广知数据"
   },
   {
    "item": "NMC 811 钴含量约 10%（质量比）vs NMC 111 约 20%（质量比）",
    "level": "C3",
    "source": "广知电化学技术参数"
   },
   {
    "item": "钴价峰值约 $95,000/t（2018 年）→ 约 $15,000–20,000/t（2023 年）",
    "level": "C3",
    "source": "广泛价格报道"
   },
   {
    "item": "IRA FEOC 最终规则（26 CFR §1.30D-6）钴在关键矿物列表中",
    "level": "C4",
    "source": "FR 2024-09094，已在 cm-battery-li 工单中核"
   },
   {
    "item": "EO 14017（2021-02-24）将钴列为 EV 电池关键矿产",
    "level": "C4",
    "source": "EO 文本公开可查"
   },
   {
    "item": "中国截至 2026-06 未对钴实施正式出口管制",
    "level": "C4",
    "source": "公开可查（无商务部公告）"
   }
  ],
  "contested": {
   "title": "CMOC vs DRC 政府/Gécamines 产量申报争议与出口封锁（2022 年 6–12 月）",
   "summary": "用五个阅读动作读这场争夺：\n**① 校准颗粒度**：这场争夺不是\"DRC 要求更多资源民族主义\"的抽象意识形态争议，而是一场具体的**产量申报与分成核查**冲突：Gécamines（持有 TFM 20% 股权的 DRC 国有矿业公司）指控 CMOC 在 2016 年收购 TFM 后系统性低报钴和铜的产量，使 DRC 方少拿了巨额 royalty 和分红。Gécamines 提出约 87 亿美元索赔（C3，Reuters/Bloomberg 多方报道，金额有不同来源口径）。"
  },
  "gaps": [
   "1. ~~**【最高影响】Glencore 2023 年报钴分部产量（t）和营收**~~ → **✓ 已关闭（2026-06-30）**：Glencore 2023 Production Report + Annual Report C4 入库；产量 41,300 t、均价 $15/lb 已核。单独 EBITDA 仍 C3（嵌入分部，需 Glencore Commodity Detail 附件）。",
   "2. ~~**【最高影响】CMOC 2023 年报 TFM + KFM 合并钴产量和营收**~~ → **✓ 已关闭（2026-06-30）**：CMOC 港交所年报 C4 入库；TFM 21,600 t + KFM 33,900 t，营收 RMB 34.1 亿，毛利率 37.01% 全部 C4。",
   "3. ~~**【高影响】USGS MCS 2025 Cobalt 章**~~ → **✓ 已关闭（2026-06-30）**：DRC 份额 73.5%（2023）/ 76%（2024 估算）C4 入库。",
   "4. **【高影响】DRC 2018 年矿业法典（法文原文 Loi n°18/001）**——战略物质定义、royalty 精确费率、部长令落地文本。典藏工单 cm-battery-co-primary 包含此项，但回报未明确说明已提取；需确认原文在库或另开工单。",
   "5. **【中影响】IEA Critical Minerals 2024 精炼份额精确数字**——iea-gcmo2024-full.pdf 已在库，但精确百分比在图形层，需从 IEA Data Explorer 下载 dataset。",
   "6. **【中影响】CMOC 与 Gécamines 2022 和解协议金额一手来源**——$7–9 亿仍 C3（媒体），CMOC 年报中 TFM 复产已确认（C4），但和解金额无直接数字。",
   "7. **【低影响，待判断】洛比托走廊（Lobito Corridor）建设状态和资金方**——DRC 运输基础设施退路，影响 fallback 第 5 问。当前无典藏工单，按需开。",
   "8. **【高影响】DRC 钴出口配额制度官方法规文本（2025–2026）**——ARECOMS 设立文件、2026 年度配额分配部长令（法文原文）。现有信息来源为 Glencore Q1 2026 季报和行业报告（C3），需一手法规文本升至 C4。**已纳入典藏工单 2026-06-30-nullroute-drc-cobalt-quota-code-minier.md**。\n---"
  ]
 },
 "cm-battery-li": {
  "sourceFile": "cm-battery-li.md",
  "archiveId": "cm-battery-li",
  "established": "2026-06-29",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "卡点不在矿里，在精炼槽里——而且它正被智利国有化和中国过剩产能同时重塑\n\n锂不稀，矿遍全球。澳大利亚、智利、中国、阿根廷、玻利维亚、津巴布韦都有大储量；全球总储量远超本世纪预计需求。所以\"锂短缺\"这个说法如果落在\"地球没有足够的锂\"上，是错的。\n\n真正的卡点有两层：\n\n第一层是**精炼**。从矿石（硬岩辉石矿）或卤水（盐湖卤水）提取金属锂、再精炼成电池级碳酸锂（Li₂CO₃）或氢氧化锂（LiOH），需要专有工艺和规模经济。中国占全球碳酸锂/氢氧化锂精炼产能约 60–70%（广泛报道，C3）——澳大利亚和智利挖出的矿，大部分运到中国精炼，再以电池化学品形式卖给全球。这个层级的集中，不是矿床地质决定的，是产业政策 + 廉价电力 + 规模 built 出来的。\n\n第二层是**价格武器**。2023–2024 年锂价从高峰约 $7–8 万/吨碳酸锂（2022 年中国现货峰值，C3）跌至约 $1 万/吨（2024 年谷底，C3）。跌幅约 85%。中国大量新建精炼和下游产能的过剩，在定价上是个打击西方新入者的武器：在中国产能利用率 <50% 的市场里，美国/澳大利亚/智利的精炼项目很难以更高成本存活。这和镓（摇摆产能压价）、多晶硅（廉价电力压价）是同一套工具，只是物质上锂比那两个更是真大宗商品。\n\n和 cm-ree、cm-gallium 最关键的结构区别：**锂的采矿层不是单点**。中国矿产量只约占 14%（USGS 2024 口径，C3），澳大利亚约 47%、智利约 26%，多国有真实产能。这意味着锂的卡点比稀土浅——矿端有更多路可走。卡点窗口主要在精炼层（中国主导）和国家所有权层（智利2023年国有化重组）。\n\n---",
  "holders": [
   {
    "entity": "Albemarle（美国）",
    "role": "全球最大锂生产商之一（按营收）",
    "scale": null,
    "jurisdiction": "美国法域 + 澳/智矿业许可",
    "group": "采矿级别（主要资产）："
   },
   {
    "entity": "Tianqi Lithium（天齐锂业）",
    "role": "中国最大锂矿主",
    "scale": null,
    "jurisdiction": "中国法域（A+H 股上市）",
    "group": "采矿级别（主要资产）："
   },
   {
    "entity": "SQM（智利）",
    "role": "智利最大锂生产商",
    "scale": null,
    "jurisdiction": "智利法域（国有化进行中，CODELCO 拟控 51%+）",
    "group": "采矿级别（主要资产）："
   },
   {
    "entity": "Pilbara Minerals（澳大利亚）",
    "role": "Pilgangoora 锂矿运营商",
    "scale": null,
    "jurisdiction": "澳大利亚法域",
    "group": "采矿级别（主要资产）："
   },
   {
    "entity": "Ganfeng Lithium（赣锋锂业）",
    "role": "中国最大精炼商之一，也有上游资产",
    "scale": null,
    "jurisdiction": "中国法域（A+H 股上市）",
    "group": "采矿级别（主要资产）："
   },
   {
    "entity": "Livent / Arcadium（美国）",
    "role": "中等规模生产商",
    "scale": null,
    "jurisdiction": "美国法域（Arcadium 2024 被力拓并购，C3）",
    "group": "采矿级别（主要资产）："
   },
   {
    "entity": "CODELCO（智利国有）",
    "role": "拟控 Atacama 锂业务 51%+",
    "scale": null,
    "jurisdiction": "智利国家主权",
    "group": "采矿级别（主要资产）："
   }
  ],
  "upstream": [
   "**卤水矿床（Atacama / 玻利维亚盐沼）**：锂三角（智利/阿根廷/玻利维亚）约含世界 50–60% 锂储量，但玻利维亚矿（Salar de Uyuni）开采困难，技术路线不成熟（YLB 国有公司，C3）。",
   "**硬岩辉石矿（澳大利亚 Greenbushes / Pilgangoora）**：全球最大硬岩锂矿，生产成本高于卤水但品位稳定，主力出口中国加工。",
   "**能源**：精炼碳酸锂是高耗能化工过程（特别是硬岩路线），廉价电力是中国精炼成本优势来源之一。与 en-lng / re-solar-module 有上游联系。"
  ],
  "downstream": [
   "**re-battery-cell**（动力/储能电芯）：最大直接下游。CATL/LG/三星/SK/松下等电芯厂的年采购量直接跟锂价挂钩。LFP 正极用碳酸锂，高镍 NMC/NCA 用氢氧化锂——两种不同化学品，部分不可互换（设备和工艺不同）。",
   "**re-battery-material**（正极材料）：磷酸铁锂（LFP 前体）+ 三元材料（NMC 前体）是锂的下游转换节点。",
   "消费电子：手机/笔记本/wearables 的锂离子电池，体量小于 EV 但单位价值高。",
   "储能（ESS）：电网配套储能，IRA Section 48C 推动美国本土建设，锂需求高增长段。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "**总判**：`partial`。采矿端有真实退路（多极），精炼端短期内是真实瓶颈，中期（3–5 年）可通过西方精炼产能扩张改善，但前提是价格支撑——低锂价杀死这条路。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球锂化学品市场年产值在价格周期波动极大：2022 年峰值约 $400–500 亿（碳酸锂约 $7–8 万/吨 × 约 500–600 万吨 LCE 产量，C2 推算）；2024 年约 $100 亿（碳酸锂约 $1 万/吨 × 约 1000 万吨产量，C2 推算）。\n\n注意：这种价格周期波动不改变需求的结构性增长——全球锂需求长期上行（EV 普及），但价格可能长期被中国过剩产能压在低位。\n\n【缺口：需要 Benchmark Minerals Intelligence 或 BloombergNEF 锂市场年度报告——准确的全球年产量（LCE 吨）和精炼层产量。影响 Q1 精度。】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **采矿层**：CR2（澳+智）57.1%；CR3（澳+智+中）74.2%（USGS MCS 2025，C4，2024e）。非单点，有真实多极性。Price maker = 中国（通过精炼端的产能过剩影响碳酸锂全球定价）。\n- **精炼层**：CR1（中国）约 60–70%（广泛报道，C3，需 BMI/BNEF 核）。有竞争者但中国主导价格发现。",
    "cLevels": [
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | FY2022 营收（峰值）| FY2023 营收（跌价后）| 毛利率（峰值）| 法域 |\n|---|---|---|---|---|\n| **SQM（智利）** | $10,710.6M（含锂分部 $8,152.9M，156,800 mt，均价约 $52,000/t C4）| $7,467.5M（含锂分部 $5,180.1M，170,000 mt，均价 $30,467/t C4）| 约 50%+（C3，需年报净利率核）| 智利，TSX/NYSE 上市 |\n| **Albemarle（美国）** | $7,320.1M（能储分部 $4,660.9M，EBITDA 65.1%，C4）| $9,617.2M（能储分部 $7,079.0M，EBITDA 34.0%，C4；合同保护使总营收反增，毛利率大降）| 34–65%（EBITDA 口径，C4）| 美国，NYSE 上市 |\n| **Ganfeng Lithium（赣锋）** | 约 CN¥309 亿（C3，待年报核）| 大幅下跌（C3）| 约 30%（峰值，C3）| 中国，A+H 股上市 |\n| **Tianqi Lithium（天齐）** | 约 CN¥242 亿（C3，待年报核）| 大幅下跌（C3）| 约 50%（峰值，C3）| 中国，A+H 股上市 |\n| **Pilbara Minerals（澳）** | 约 AU$20 亿（C3，待年报核）| 下跌（C3）| 约 70%（峰值，C3）| 澳大利亚，ASX 上市 |\n\n【缺口：需要 SQM FY2022/2023 年报、Albemarle FY2022/2023 10-K、Ganfeng/天齐 A 股年报——确认营收数字和毛利率。影响 Q3 精度。以上全部 C3，待典藏核。】",
    "cLevels": [
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 锂占 EV 电池材料成本约 10–20%（高价期），2024 年低价期约 3–5%（C2 推算，随价格浮动）\n- NMC 电池单车用氢氧化锂约 6–12 kg LCE；LFP 电池单车用碳酸锂约 5–8 kg LCE（C3 广知技术参数）\n- 电芯制造商库存缓冲约 1–3 个月（C2 推算，类比其他电池材料）；精炼断供后 3–6 个月内开始影响产能",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "- IEA 估算：全球 EV 用锂需求 2030 年约为 2023 年的 3–4 倍（C3 广知 IEA 报告口径，待核原文）。断供场景下 EV 生产停摆会累及整条 EV 产业链，但锂的不可替代性在 5 年内较强、10 年内随固态/钠离子技术成熟而降低。\n- 中国精炼断供（假设情景）：非中精炼产能补充时间约 18–36 个月。期间 EV 产能缩减约 30–50%（C1，无专项报告，数量级推算）。\n\n【缺口：需要 IEA Critical Minerals 2024 报告或 BloombergNEF EV 原材料报告——锂断供经济冲击具体量化。】",
    "cLevels": [
     "C3",
     "C1"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "在高价周期（2021–2022），利润集中在**矿山和精炼商**（SQM/Albemarle/Ganfeng 毛利率 30–70%），下游 CATL/BYD 承受高成本。在低价周期（2023–2024），矿山和精炼商利润崩溃，下游电池厂反而受益（CATL 2023 年毛利率约 22%，在材料成本下降中得益，C3 广知）。\n\n这是锂节点区别于稀土/镓的一个特性：**价值归宿随价格周期剧烈摇摆**，不是固定在某一层。这使政治杠杆在低价期弱（矿山/精炼商没有多余利润吸收政治风险）、高价期强（谁控制供给，谁有定价权）。中国维持低价 = 主动放弃利润、以成本换控制力——这是一种工具性地接受低利润的战略选择，而非价格失控。\n\n---",
    "cLevels": [
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "澳大利亚 36.7%（88,000 t）、智利 20.4%（49,000 t）、中国 17.1%（41,000 t），2024e，世界合计 240,000 t",
    "level": "C4",
    "source": "USGS MCS 2025，Brian W. Jaskula，pp. 110–111"
   },
   {
    "item": "中国碳酸锂/氢氧化锂精炼占全球约 70%",
    "level": "C4 部分",
    "source": "IEA Critical Minerals 2024 官网数据（Mercom 核对）；按产品形态（OH vs CO₃）分开的 verbatim 数字需人工下载 PDF 核实"
   },
   {
    "item": "碳酸锂美国长期合同均价：2022 $71,100/t、2023 $41,300/t、2024e $14,000/t",
    "level": "C4",
    "source": "USGS MCS 2025，Benchmark Mineral Intelligence 数据源，pp. 110"
   },
   {
    "item": "IRA 第 30D 条款 FEOC 最终规则（2022-08-16 签署，2024-07-05 生效；26 CFR §1.30D-6；FR 2024-09094）",
    "level": "C4",
    "source": "Federal Register 89 FR，2024-05-06，条款已核"
   },
   {
    "item": "智利 Boric 政府 2023-04 宣布锂国有化框架（官方公告日期待一手核）",
    "level": "C3 部分",
    "source": "多家律师事务所/媒体报道；CODELCO 官网西班牙语公告原文未取"
   },
   {
    "item": "CODELCO-SQM JV 将持股 51%+；2030 年后新产量利润 85% 归政府（CODELCO+税+股东分红）",
    "level": "C3 部分",
    "source": "SQM CEO 官方声明（2024-02-22，Newswire）引用；战略框架 C4，持股比例细节需 CODELCO 官方核"
   },
   {
    "item": "Tianqi 持有 Greenbushes 51%，Albemarle 持 49%",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "SQM FY2022 总营收 $10,710.6M（锂分部 $8,152.9M，156,800 mt，均价 ~$52,000/t）",
    "level": "C4",
    "source": "SQM 官方新闻稿（2024-02-22，PR Newswire，等同 SEC 6-K）"
   },
   {
    "item": "SQM FY2023 总营收 $7,467.5M（锂分部 $5,180.1M，170,000 mt，均价 $30,467/t）",
    "level": "C4",
    "source": "SQM 官方新闻稿（2024-02-22，PR Newswire）"
   },
   {
    "item": "Albemarle FY2022 总营收 $7,320.1M（能储 $4,660.9M，EBITDA 65.1%）",
    "level": "C4",
    "source": "Albemarle 官方新闻稿（2024-02-14，PR Newswire，等同 8-K 附件）"
   },
   {
    "item": "Albemarle FY2023 总营收 $9,617.2M（能储 $7,079.0M，EBITDA 34.0%）",
    "level": "C4",
    "source": "Albemarle 官方新闻稿（2024-02-14，PR Newswire）"
   },
   {
    "item": "澳大利亚 FIRB：锂列入 31 种关键矿产，10%+ 采矿资产零门槛强制审批，2023 年两起涉华投资否决",
    "level": "C4 部分",
    "source": "McCullough Robertson/KWM/Allens 律师事务所解读（2023–2024）；PGN012 原文 PDF 未取（TLS 证书问题）"
   },
   {
    "item": "力拓 $67 亿并购 Arcadium（2024）",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "中国未对碳酸锂/氢氧化锂实施正式出口管制（截至 2026-06）",
    "level": "C4",
    "source": "公开可查（无相关商务部公告）"
   },
   {
    "item": "澳大利亚辉石矿 70%+ 运往中国精炼",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "EV NMC 电池单车用锂约 6–12 kg LCE",
    "level": "C3",
    "source": "广知技术参数"
   },
   {
    "item": "IEA：2030 年锂需求约为 2023 年 3–4 倍",
    "level": "C3",
    "source": "IEA 报告广知"
   }
  ],
  "contested": {
   "title": "智利锂国有化宣布（2023-04-13）及后续 CODELCO-SQM JV 谈判",
   "summary": "用五个阅读动作读这场争夺：\n**① 校准颗粒度**：争夺的不是\"全球锂供应控制权\"，而是 Atacama 盐湖（全球最大卤水锂矿床之一）的**所有权和合同续期条款**。Boric 政府 2023-04 宣布的国有化政策，核心是：现有 SQM 合同 2030 年到期后不自动续期，须在 CODELCO 控制 51%+ 的框架下重谈；Albemarle 合同 2043 年到期，谈判在后。"
  },
  "gaps": [
   "1. **【部分解决，仍有残留缺口】** 中国精炼占比：IEA Critical Minerals 2024 给出约 70%（C4 部分，按产品形态分开的 verbatim 数字需人工下载 IEA PDF）。BMI/BNEF 原文仍为付费墙，IEA 已可部分替代。`raw/cm-battery-li-primary/iea-critical-minerals-2024-lithium.md` 已入库。",
   "2. **【已解决，C3→C4】** USGS MCS 2025 Lithium 章已核：澳 36.7%/智 20.4%/中 17.1%/津 9.2%/阿 7.5%（2024e，世界合计 240,000 t）。`raw/cm-battery-li-primary/usgs-mcs2025-lithium.md` 已入库。注：数字与前版节点有差异，已在节点内标注修正。",
   "3. **【已解决，C3→C4】** SQM FY2022/2023 和 Albemarle FY2022/2023 营收、EBITDA 和毛利率已核（PR Newswire 官方新闻稿，等同 SEC 6-K/8-K）。Q3 表已更新。注：SQM FY2023 营收旧节点误记为 $43 亿，实为 $74.7 亿，已修正。",
   "4. 【缺口持续】IEA Critical Minerals 2024 锂需求预测（2030 年需求倍增具体数字）：网页层已入库（C4 部分），PDF 全文 verbatim 需人工下载。`raw/cm-battery-li-primary/iea-critical-minerals-2024-lithium.md` 有网页摘要。",
   "5. 【缺口持续】CODELCO 官方公告（西班牙语原文，codelco.com）——JV 协议持股比例精确文本（当前为 C3 部分，律师事务所解读）。需人工路径。",
   "6. 【缺口持续】Ganfeng Lithium / 天齐锂业 FY2022 A 股年报——需巨潮资讯人工下载（浏览器 PDF）。天齐 SQM 持股比例（约 22%，是否达到 FEOC 25% 门槛的关键数字）尤为重要。",
   "7. ~~【新增缺口：智利采矿税法修正案（2023 Royalty Minero）】~~ → **✓ 已关闭（2026-06-30）**：Ley 21.591 + SII Circular 03/2024 C4 入库，关键条款已核：锂无直接税条款，但构成 Boric 政府整体资源分成框架背景；政治接口 A 节已补写。"
  ]
 },
 "cm-gallium": {
  "sourceFile": "cm-gallium.md",
  "archiveId": "cm-gallium",
  "established": "2026-06-21",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "卡点在副产提取槽，不在矿里——而且它是 2025 稀土战的原型\n\n镓不是从镓矿里挖的。它没有自己的矿。USGS 写明：全球初级镓主要是**铝土矿处理（拜耳法制氧化铝）的副产品**，也可来自锌矿处理。镓在地壳里是痕量伴生，到处都有一点，没有一处浓到值得单独开采。所以这个节点的卡点结构从一开始就和\"资源稀缺\"无关——它锚在\"谁有大规模氧化铝/锌冶炼产能、且愿意在副产线上回收镓\"。\n\n中国占全球初级低纯镓产能约 **99%**（USGS verbatim，C4）。这个数字比稀土分离（85–90%）更极端，已经是事实独占。原因和稀土同源：镓回收是炼铝的一条低价值副产线，单独看不赚钱，中国因为主导全球氧化铝冶炼（背后是廉价电力 + 产业政策）、又愿意把副产产能建起来，于是把这条几乎没人愿意单独做的活做成了独占。\n\n但这个节点有一个和稀土相反的层级结构，必须记清楚：**稀土是采矿分散、分离集中（卡点在下游）；镓是初级提取集中、精炼相对分散（卡点在上游）。** USGS 给的美国 2021–2024 金属进口来源是加拿大 28%、日本 22%、中国 18%、德国 16%、其他 16%——美国买的镓金属主要不来自中国，来自加/日/德的精炼商。这说明高纯精炼这一层有非中据点。问题在于：这些精炼商的初级低纯镓原料很大程度仍回溯到中国 99% 的初级产能。所以\"经第三国转口\"是真实的缓冲，但脆——上游断料，第三国精炼也会逐渐缺米下锅。\n\n第三个要害和稀土完全一样：**按美元小、按依赖大。** 美国 2025 年镓金属进口估值约 $1,500 万、GaAs 晶圆进口约 $1.2 亿（USGS，C4）——一个零头级的贸易额。但它连着国防 GaAs/GaN 器件、高性能计算、5G/雷达射频、功率电子，而 USGS 明确说这些国防相关 GaAs/GaN IC 应用\"没有有效替代品\"。这是 Magnitude Layer 要标红的又一个\"低名气、高控制\"节点。\n\n节点名挂\"镓/锗\"，因为两者在中国 2023-08 同一份两用物项管制里被一起动，是姊妹元素。但本轮一手数据只覆盖镓（USGS Gallium 章），锗段（不同供给：来自锌冶炼副产 + 煤灰，下游=光纤/红外光学/太阳能/光伏）全部标缺口，待单独取 USGS Germanium 章，必要时拆 **cm-germanium** 子节点。\n\n---",
  "holders": [
   {
    "entity": "中国（铝冶炼副产，分散在多家氧化铝厂）",
    "role": null,
    "scale": "2025 产量 (kg)：900,000 · 2025 产能 (kg)：1,600,000",
    "jurisdiction": "中国",
    "group": "初级低纯镓产能（USGS MCS 2026，C4）："
   },
   {
    "entity": "世界（取整）",
    "role": null,
    "scale": "2025 产量 (kg)：900,000 · 2025 产能 (kg)：1,700,000",
    "jurisdiction": null,
    "group": "初级低纯镓产能（USGS MCS 2026，C4）："
   },
   {
    "entity": "中国氧化铝企业（如中铝等）",
    "role": "初级低纯镓主供",
    "scale": "初级约 99%",
    "jurisdiction": "中国",
    "group": "精炼 / GaAs 晶圆（企业层，份额为 USGS 进口来源 + 行业判断）："
   },
   {
    "entity": "一家纽约公司（USGS 未具名，疑似 Indium/5N 同类）",
    "role": "进口初级低纯镓+新废料回收精炼高纯镓",
    "scale": "美国本土唯一精炼据点",
    "jurisdiction": "美国",
    "group": "精炼 / GaAs 晶圆（企业层，份额为 USGS 进口来源 + 行业判断）："
   },
   {
    "entity": "加拿大精炼商（疑似 5N Plus）",
    "role": "对美金属供给最大来源",
    "scale": "美国进口 28%",
    "jurisdiction": "加拿大",
    "group": "精炼 / GaAs 晶圆（企业层，份额为 USGS 进口来源 + 行业判断）："
   },
   {
    "entity": "日本精炼商",
    "role": "对美金属供给",
    "scale": "美国进口 22%",
    "jurisdiction": "日本",
    "group": "精炼 / GaAs 晶圆（企业层，份额为 USGS 进口来源 + 行业判断）："
   },
   {
    "entity": "德国精炼商",
    "role": "对美金属供给",
    "scale": "美国进口 16%",
    "jurisdiction": "德国",
    "group": "精炼 / GaAs 晶圆（企业层，份额为 USGS 进口来源 + 行业判断）："
   },
   {
    "entity": "GaAs/GaN 衬底外延厂",
    "role": "下游化合物半导体衬底",
    "scale": "【缺口：需行业报告】",
    "jurisdiction": "日/台/美/欧",
    "group": "精炼 / GaAs 晶圆（企业层，份额为 USGS 进口来源 + 行业判断）："
   }
  ],
  "upstream": [
   "**氧化铝/铝冶炼产能（隐形真上游）**：镓是炼铝副产，初级镓产能跟着氧化铝产能走。中国主导全球氧化铝冶炼（背后是廉价电力 + 产业政策），这是镓 99% 的物理根。值得登记子节点 **cm-bauxite-alumina**（铝土矿→氧化铝→电解铝产能集中，本身又是巨大能源/碳节点，跨 re/en 栈）。C3。",
   "**锌冶炼副产（次要路线）**：部分初级镓来自锌矿处理。同样是副产经济，集中度待核。",
   "**新废料回收 + 高纯精炼工艺**：纽约公司的回收依赖进口初级低纯镓 + new scrap 喂料——精炼能力在，原料供给不在本土，是\"有锅没米\"的结构。",
   "**环境/能源承受度（隐形上游）**：和稀土同构——镓回收挂在高耗能炼铝上，中国独占的一半原因是它承担了炼铝的能源/环境成本而把副产规模做了出来。这条进因果层。",
   "**锗段上游（姊妹元素）**：锗来自锌冶炼副产 + 煤灰回收，供给链与镓不同。【缺口：需 USGS Germanium 章】"
  ],
  "downstream": [
   "**致命依赖：国防 GaAs/GaN IC**。雷达 T/R 组件、电子战、卫星通信、相控阵——USGS 原话\"许多 defense-related GaAs/GaN IC applications 没有有效替代品\"。这是镓杠杆最硬的下游。",
   "**致命依赖：射频前端（5G/通信）**。基站功率放大器、手机 RF 前端大量用 GaAs/GaN。接 tc-basestation。",
   "**高依赖：功率电子（GaN）**。快充、数据中心电源、EV 功率模块——GaN 在高频高效率位置替代硅，正快速增长。",
   "**高依赖：光电（LED/激光/光通信）**。USGS：optoelectronic devices 占美国镓消费 26%；ICs 占 73%。",
   "**可缓冲：部分商用 GaAs**。在少数应用上有硅/InP 等部分替代，但性能掉档。",
   "买家侧份额与成本占比：镓在单个器件里**成本占比极低**（每片晶圆镓含量很少），但**断供不是涨成本问题，是器件造不出的产能问题**——典型低成本占比、高卡死性节点。美国 net import reliance = **100%**（USGS，C4），自 1987 年起无本土初级产量。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "分层判：\n\n**精炼/转口层缓冲：`partial`（已在运行但脆）**\n美国实际通过加/日/德精炼商拿到镓金属（2024-12 中国对美禁令后，2025 进口量反而超 2024 两倍——靠转口 + 抢货）。过五问：替代供给来源 / 已在运行（operational 的转口）/ 卡在\"第三国精炼的初级原料是否独立于中国\"/ 私营精炼商 + 各国 / 现场有执行能力（精炼在产）。结论：**转口缓冲是真的，但只解决\"精炼\"层不解决\"初级\"层**——若中国收紧初级低纯镓出口（而非只禁成品对美），加/日/德精炼会逐渐缺料。判 `partial`，且独立性存疑，降一档为\"脆 partial / 部分 possible reroute\"。\n\n**初级低纯镓提取层替代：`planned → blocked`**\n非中初级产能约 100,000 kg 基本闲置（USGS 算得）。理论上可重启（炼铝厂加装/复产镓回收线），但：① 经济上镓副产单独不赚钱，中国可随时放量压价逼停（Mountain Pass 2002 剧本的镓版）；② 重启需要时间 + 资本 + 政策托底。过五问：替代初级层 / 多久 = 数年 / 卡在副产经济性 + 资本 + 中国压价风险 / 谁启动 = DPA/国防部库存采购 + 私营 / 现场执行能力 = 产能在但封存、复产需时。结论：**`possible reroute`，不是 fallback**——有闲置产能这个\"种子\"，但没到 operational，且复产经济性受制于中国摇摆产能。\n\n**国防 GaAs/GaN 应用的材料替代：`blocked`**\nUSGS 明示\"无有效替代品\"。这一层是死的。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "又一个\"按美元小、按杠杆大\"的节点：\n\n- **美国镓金属进口（USGS verbatim，C4）**：2025 年约 **$1,500 万**。\n- **美国 GaAs 晶圆进口（USGS verbatim，C4）**：2025 年约 **$1.2 亿**。\n- **全球初级镓市场（推算 C2）**：世界产量 900,000 kg × 美国金属进口均价 $580/kg ≈ **约 $5.2 亿/年**（上界，金属价；初级低纯镓出厂价低于此，真实初级市场量级在数亿美元）。USGS 无全球市场成句，仅给数量级。\n- **下游 GaN/GaAs 化合物半导体器件市场（C3 lead_only）**：常被引为约 $200 亿/年量级（含 RF + 功率 + 光电），需 Yole/SEMI 行业原文核。这才是价值沉淀处。\n\n→ 数量级对比：镓金属端约数亿美元、化合物半导体器件约 $200 亿，但它卡的国防/5G/功率/光电终端更大。**杠杆/市值严重背离**：一个数亿美元的金属市场卡着百亿级器件 + 国防能力。和稀土同属 Magnitude Layer 标红节点。\n\n【缺口：全球初级镓市场年值、GaN/GaAs 器件市场精确值与基准年——需 Yole Développement / SEMI / CRU 行业报告原文。】",
    "cLevels": [
     "C4",
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 初级低纯镓提取层：CR1（中国）= **99%**（USGS verbatim，C4）。这是全图目前最高的单层集中度之一。\n- 全球产能利用率：约 53%（900,000/1,700,000）；中国约 56%（900,000/1,600,000）——大量闲置产能 = 摇摆/压价能力（C4 算得）。\n- 高纯精炼层：CR4（加+日+德+中对美供给）分散，最大单一来源加拿大 28%（C4，仅美国进口口径）。\n- price maker = 中国（初级独占 + 摇摆产能压价）。\n\n集中度沿加工链**递减**（初级 99% → 精炼分散）——和稀土（沿链递增）方向相反。**本节点量化层核心结论：卡点在最上游初级提取，越往下游越分散。**",
    "cLevels": [
     "C4"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 利润率 | 市值/估值 | 来源 |\n|---|---|---|---|---|\n| 中国氧化铝企业（镓为副产线）| 镓不单独披露 | — | — | 镓是炼铝边角业务，财务不可分离 |\n| 5N Plus（疑似加拿大精炼商，TSX: VNP）| 【缺口：需年报】 | — | 上市 | 需 5N Plus 年报核身份+财务 |\n| 纽约精炼商（USGS 未具名）| 【缺口：需确认身份】 | — | — | 需行业报告确认 |\n| GaAs/GaN 衬底厂 | 【缺口：需年报】 | — | — | 需 Yole/公司年报 |\n\n资本纵深判断：镓对中国供给方是**炼铝的边角副产**，放弃整个镓出口市场（数亿美元）对中国铝企资产负债表几乎无感——这使镓成为一件**近零成本的武器**：用放弃数亿美元市场，威胁百亿级器件链 + 国防能力。这是它作为反制工具特别\"趁手\"的经济原因（区别于稀土，稀土分离对中国仍是一块有规模的产业）。\n\n【缺口：5N Plus / 纽约精炼商 / GaAs 衬底厂的营收+利润率+市值——需各自年报/交易所披露，本轮未取。】",
    "cLevels": []
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **下游成本敞口（极低）**：镓在单个 GaAs/GaN 器件里成本占比很小（每片晶圆镓量少），占终端设备成本可忽略（C2）。\n- **下游产能敞口（致命）**：美国 net import reliance = 100%（USGS C4），无本土初级产量。一旦初级低纯镓断料，精炼转口耗尽库存后器件厂停线。GaAs 晶圆/器件库存可撑周期【缺口：需 OEM/晶圆厂披露】。2024-12 对美禁令后 2025 进口翻倍 = 下游恐慌抢货的实证。\n- **嵌入成品的隐性依赖**：镓以 GaAs 晶圆（$1.2 亿，是金属 8 倍）+ 成品器件形式进口，真实依赖深于金属进口统计。\n- **国防敞口（无替代）**：USGS 明示国防 GaAs/GaN IC 无有效替代——这一块的产能敞口是 binary（有镓能造、无镓造不出）。\n\n【缺口：GaAs 晶圆/器件下游库存可撑周期、国防 GaAs/GaN 用量与库存——需 DLA/OEM 披露或行业报告。】",
    "cLevels": [
     "C2",
     "C4"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **价格指纹（USGS verbatim，C4）**：2024-12 对美禁令后，2025 美国镓进口量超 2024 两倍、单价高约 30%。量价齐升 = 禁令冲击的直接指纹。\n- **结构推算（C2）**：镓金属端数亿美元，卡着 GaN/GaAs 器件约 $200 亿、再卡着 5G + 国防雷达/电子战 + 功率电子终端（更大）。断供冲击不在镓市场本身（小），在下游 RF/国防器件停线——量级以**受影响器件 + 国防能力**计。杠杆放大倍数粗估数十倍（金属 vs 器件市场），若计国防能力则不可单纯用美元衡量。\n- 【缺口：2023→2024 中国镓/锗管制对全球化合物半导体 / 国防供应链的量化冲击——需 CSIS / SIA / Yole 专题报告，USGS 无。】",
    "cLevels": [
     "C4",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链利润分布：**初级镓端薄（炼铝副产，单独几乎不赚钱）、精炼端中、GaAs/GaN 衬底外延端较厚、器件/系统端最厚（尤其国防系统集成）。** 利润主要沉淀在下游器件与系统，几乎不在镓本身。\n\n政治压力首先打到谁：中国一动镓出口，first payer = **西方下游化合物半导体器件厂 + 国防承包商**（停线/交付延迟），不是镓供应商（镓供应商利润本就薄）。这个利润分布正是镓成为低成本武器的根源——**卡的那一端不赚钱（中国放弃它无所谓），痛的那一端很值钱（西方器件/国防资产负债表）。** 反向，西方搞初级镓复产，钱压在复产项目上，且最大风险是中国随时放量压价让复产项目亏到关停（Mountain Pass 2002 剧本的镓版）。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "中国占全球初级低纯镓产能约 99%",
    "level": "C4",
    "source": "USGS MCS 2026 Gallium verbatim"
   },
   {
    "item": "世界 2025 初级产量 900,000 kg、产能 1,700,000 kg；中国产量 900,000、产能 1,600,000",
    "level": "C4",
    "source": "USGS MCS 2026 verbatim"
   },
   {
    "item": "中国产能利用率约 56%（可摇摆压价）",
    "level": "C4",
    "source": "USGS 数字算得"
   },
   {
    "item": "美国 net import reliance=100%，自 1987 无本土初级产量",
    "level": "C4",
    "source": "USGS verbatim"
   },
   {
    "item": "美国 2021–24 金属进口来源 加28/日22/中18/德16/其他16%",
    "level": "C4",
    "source": "USGS verbatim"
   },
   {
    "item": "美国 2025 镓金属进口 25,000 kg、报告消费 19,000 kg、均价 $580/kg",
    "level": "C4",
    "source": "USGS verbatim"
   },
   {
    "item": "美国 2025 镓金属进口约 $1,500 万、GaAs 晶圆约 $1.2 亿",
    "level": "C4",
    "source": "USGS verbatim"
   },
   {
    "item": "ICs 占美国镓消费 73%、optoelectronic 26%",
    "level": "C4",
    "source": "USGS verbatim"
   },
   {
    "item": "国防 GaAs/GaN IC 无有效替代",
    "level": "C4",
    "source": "USGS verbatim"
   },
   {
    "item": "2025 进口量超 2024 两倍、单价高约 30%",
    "level": "C4",
    "source": "USGS verbatim"
   },
   {
    "item": "管制时间线 2023-08 管制 / 2024-12 对美禁令 / 2025-11 暂停一年",
    "level": "C4",
    "source": "USGS Events verbatim"
   },
   {
    "item": "镓是铝土矿/锌处理副产、镓不稀（痕量伴生）",
    "level": "C4",
    "source": "USGS verbatim"
   },
   {
    "item": "卡点在初级提取（上游）而非下游精炼",
    "level": "C3",
    "source": "结构判断+USGS 99% 与进口来源分散佐证"
   },
   {
    "item": "加/日/德精炼初级原料仍回溯中国（转口脆）",
    "level": "C3",
    "source": "结构推断"
   },
   {
    "item": "全球初级镓市场约 $5.2 亿/年（上界）",
    "level": "C2",
    "source": "USGS 单价×产量推算"
   },
   {
    "item": "GaN/GaAs 器件市场约 $200 亿",
    "level": "C3",
    "source": "行业 lead_only"
   },
   {
    "item": "中国独占是政策/经济造非地质造（因果层）",
    "level": "C3",
    "source": "历史轨迹+USGS 丰度/副产句佐证"
   },
   {
    "item": "cm-gallium 是 2025 稀土武器化的机制原型",
    "level": "C3",
    "source": "时间线（2023 镓先于 2025 稀土）"
   }
  ],
  "contested": {
   "title": "中国镓/锗出口管制 2023-08 → 2024-12 → 2025-11 三级升级弧",
   "summary": "这是一场时间跨度 28 个月的渐进式管制，不是单次事件。把它作为整体来读，看的是**管制工具怎样从试探变成标准反制手段**，以及**每个升级节点都被什么外部动作触发**。"
  },
  "gaps": [
   "1. 【缺口：需要中国商务部/海关 2023-08、2024-12、2025-11 出口管制公告中文原文】三份公告的公告号、受控清单（镓/锗/锑）全文、对美禁令与暂停的具体条款。USGS 只给英文时间线，政治传动层 A/E 的文号待补。这是机制原型的一手文本，优先级最高。",
   "2. 【缺口：需要 USGS MCS 2026 Germanium 章 + 行业报告】锗段的供给（锌副产/煤灰）、集中度、下游（光纤/红外光学/太阳能）——本节点名挂\"镓/锗\"但锗全缺，可能需拆 cm-germanium 子节点。",
   "3. 【缺口：需要行业报告（CRU/USGS 细节）确认】加/日/德精炼商的初级低纯镓原料是否独立于中国——这决定第三国转口 fallback 的真实独立性，是 partial 判断的关键支柱。",
   "4. 【缺口：需要 Yole Développement / SEMI / CRU 报告】全球初级镓市场年值、GaN/GaAs 器件市场精确值与基准年（Q1）；GaAs/GaN 衬底外延产能份额（结构层 3/4）。",
   "5. 【缺口：需要 5N Plus 年报 / 行业报告确认纽约精炼商身份】关键玩家财务（Q3）——现全为缺口，无法量化各方资本纵深。",
   "6. 【缺口：需要 CSIS / SIA / Yole 专题报告】2023→2024 中国镓/锗管制对全球化合物半导体 / 国防供应链的量化冲击（Q5）。",
   "7. 【缺口：子节点 cm-bauxite-alumina】铝土矿→氧化铝→电解铝产能集中（镓的物理真上游，又是巨大能源/碳节点，跨 re/en 栈），值得单独建节点。\n---"
  ]
 },
 "cm-helium": {
  "sourceFile": "cm-helium.md",
  "archiveId": "cm-helium",
  "established": null,
  "updated": "2026-07-01",
  "cLevelOverall": null,
  "sketch": false,
  "opening": "氦气在关键矿产里有三个独特性，让它在分析上与锂、钴都不同。\n\n第一，它是世界上唯一无法从其他元素合成的战略性工业气体。其他关键矿产减少了，理论上可以提炼、替换、找新矿；氦气如果短缺，不存在从别的什么东西里造出来的路径。\n\n第二，释放到大气的氦气等于永久损失。氦是最轻的惰性气体，大气中含量极低，一旦挥发就会扩散到大气层顶端，逃离地球引力，再也无法回收。这与其他气体矿产不同——工业废气可以循环，氦没有工业层面可行的循环回收路径（高纯度回收技术在实验室存在，但在医院和制造业大规模铺开目前不经济）。\n\n第三，在目前全球关键矿产的出口格局里，中国几乎在每一类矿产都是供给方；氦气是少见的例外——中国是净进口方。这件事的含义是：通常在关键矿产分析里适用的\"中国出口管制\"逻辑，在氦气这里完全反转。\n\n---",
  "holders": [
   {
    "entity": "ExxonMobil",
    "role": "美国 LaBarge 最大生产商",
    "scale": "美国最大单一氦气生产商之一（C3）",
    "jurisdiction": "美国（怀俄明）",
    "group": null
   },
   {
    "entity": "Hugoton 独立商（多家）",
    "role": "美国 Hugoton 气田开采商",
    "scale": "多家中小型独立公司",
    "jurisdiction": "美国（堪萨斯、俄克拉荷马等）",
    "group": null
   },
   {
    "entity": "BLM（美国土地管理局）",
    "role": "联邦储备管理（Cliffside 储备）",
    "scale": "储备量持续下降，按法规清仓中",
    "jurisdiction": "美国（得克萨斯）",
    "group": null
   },
   {
    "entity": "Qatar Energy（国有）",
    "role": "卡塔尔生产方",
    "scale": "控制 North Dome 伴生氦开采权",
    "jurisdiction": "卡塔尔",
    "group": null
   },
   {
    "entity": "Sonatrach（国有）",
    "role": "阿尔及利亚生产方",
    "scale": "国有垄断上游资源",
    "jurisdiction": "阿尔及利亚",
    "group": null
   },
   {
    "entity": "Gazprom（国有控股）",
    "role": "俄罗斯阿穆尔 GPP",
    "scale": "阿穆尔项目受损+受制裁，进展不确定",
    "jurisdiction": "俄罗斯",
    "group": null
   },
   {
    "entity": "Linde plc",
    "role": "分销/液化/销售",
    "scale": "全球最大工业气体公司，氦气市场约 30–35%（C3）",
    "jurisdiction": "英国注册（运营全球）",
    "group": null
   },
   {
    "entity": "Air Products（APD）",
    "role": "分销/液化/销售",
    "scale": "氦气市场约 20–25%（C3）",
    "jurisdiction": "美国（宾夕法尼亚）",
    "group": null
   },
   {
    "entity": "Air Liquide",
    "role": "分销/液化/销售",
    "scale": "氦气市场约 15–20%（C3）",
    "jurisdiction": "法国",
    "group": null
   }
  ],
  "upstream": [
   "**天然气开采基础设施**：氦气随天然气生产。如果天然气开采减速（页岩气产量下降、天然气价格崩塌导致井停运），上游氦气供给同步减少——氦气无法单独开采，是伴生品。",
   "**液化工厂与低温设备**：全球液氦液化工厂数量极少（约 15 处，C2），设备来源集中在少数西方供应商。俄罗斯阿穆尔 GPP 依赖进口液化机组，制裁后难以维护。",
   "**低温罐集装箱制造商**：全球液氦罐主要制造商在美国、德国，数量有限，无法快速扩产。"
  ],
  "downstream": [
   "| 下游 | 依赖方式 | 替代难度 |\n|------|----------|----------|\n| MRI 机器（医疗） | 液氦冷却超导线圈，无替代 | 极高（短期无替代；高温超导 MRI 处于研发阶段，尚无大规模商业化） |\n| 半导体制造 | 光刻机光路保护气、芯片清洗气 | 中等（部分场景可用氮气或氩气替代，但 EUV 光路不可） |\n| 国防（导弹/卫星冷却） | 红外探测器和制导系统维持低温 | 高（有机密要求的军事应用几乎无短期替代） |\n| 科研设备（NMR、加速器） | 超导线圈冷却 | 高（高温超导研究中，但现有装置无法改造） |\n| 量子计算 | 维持量子比特低温（~15 mK，需液氦预冷） | 高（量子计算机目前仍需稀释制冷机，氦是必须） |",
   "**最脆弱的依赖**：医疗 MRI。全球约 15 万台，停机代价直接影响急救和肿瘤诊断，补货时间 2–8 周，无法通过改变工艺快速切换。"
  ],
  "fallback": {
   "verdictZh": "路径受阻",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**核心结论**：MRI 短期内没有可执行的 operational fallback。其他应用（芯片制造、科研）有更长的容忍窗口或更多替代选项。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- 全球氦气年产量：约 180 MCM（C3；USGS MCS 2025 原文，来自 `usgs-mcs2025-helium.pdf`；不同年份在 175–185 MCM 区间浮动）\n- 全球液氦市场价值：约 40–80 亿美元/年（C2；行业估计值区间宽，因价格不透明且长期合同价格非公开）\n- 氦气价格：A 级氦（精炼气体）约 $14/m³（C3；USGS MCS 2025）；液氦价格约 15–25 USD/升（C3；价格因长期合同与现货差异显著）\n- **来历**：USGS Mineral Commodity Summaries 2025（`usgs-mcs2025-helium.pdf` + `usgs-sir2025-5021-world-minerals-outlook-helium.pdf`）；液氦价格来自行业报价，无中央清算来源",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- CR2（美国+卡塔尔）：约 81%（C3；81+64=145 MCM / 180 MCM，USGS MCS 2025）\n- CR3（+阿尔及利亚）：约 87%（C3；+11 MCM）\n- 精炼产能 CR2（美+卡塔尔）：54.2%+19.1%=73.3%（C3；USGS SIR 2025-5021）\n- 分销层 CR3（Linde+APD+Air Liquide）：约 70–80%（C3；Linde 2024 年氦气内部销售 $477M + Air Liquide FY2024 亚太氦气数据 + APD 卡塔尔 Helium 3 约 11.3 MCM/年合同）\n- **集中度趋势**：美国 Hugoton 气田自然衰减中；俄罗斯阿穆尔 2024 年 17 MCM 已对中国市场形成替代，对 Air Liquide 亚太氦气销量有直接冲击（FY2024 确认）；APD 卡塔尔合同 2024 年 12 月起中断（C3）",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "- Linde plc：2023 年总营收约 331 亿美元（C3；上市公司公开财报，但氦气分部营收未单独披露）\n- Air Products（APD）：2023 年总营收约 120 亿美元（C3；上市公司公开财报）\n- Air Liquide：2023 年总营收约 293 亿欧元（C3；上市公司公开财报）\n- 三家氦气相关营收估算：均未单独披露，氦气可能占总营收 5–15%（C1；弱推断）",
    "cLevels": [
     "C3",
     "C1"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 全球 MRI 机器数量：约 15 万台（C3；WHO 估计，各国医疗设备注册数据不全）\n- 平均液氦消耗：约 700–1,500 升/台/年（C3；品牌和型号差异大）\n- MRI 液氦补货周期：2–8 周（C3；医院运营指南参考值）\n- 中国液氦消耗占比：约 35–45%（C2；行业估算）",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供/管制经济冲击量级",
    "text": "- 若全球氦气供应下降 20–30%（如卡塔尔出口中断）：MRI 补货紧张、部分医院执行氦气配给；半导体厂商寻找替代气体；科研项目暂停（C2；基于 2012 年短缺事件的类比推断）\n- 若 MRI 诊断能力下降 20%：相关医疗延误和手术延迟的间接成本远超氦气市场本身价值（C2；无精确估算）\n- 国防影响：核武器组件和导弹导引头冷却的战略后果属于机密领域，无开放来源",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "- 价值在液化层显著抬升：气态氦价格与液氦价格之间存在 3–5 倍价值差（C2）\n- 三大分销商在液化+分销层捕获主要利润差，上游气田的氦气伴生收益相对较小（氦气本身价值相比 LNG 主业对卡塔尔能源和 ExxonMobil 而言不是主要利润来源）\n- BLM 低价储备拍卖（2000–2010 年代中期）抑制了新产能投资；2010 年代后期到 2020 年代，价格上涨带来一定新投资（C2）\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "全球氦气年产约 180 MCM",
    "level": "C3",
    "source": "USGS MCS 2025 原文（`usgs-mcs2025-helium.pdf`）"
   },
   {
    "item": "美国份额约 45%（81 MCM）",
    "level": "C3",
    "source": "USGS MCS 2025"
   },
   {
    "item": "卡塔尔份额约 36%（64 MCM，最大单一产地）",
    "level": "C3",
    "source": "USGS MCS 2025"
   },
   {
    "item": "阿尔及利亚份额约 6%（11 MCM）",
    "level": "C3",
    "source": "USGS MCS 2025"
   },
   {
    "item": "俄罗斯 2024 年产量约 17 MCM（较 2023 年 +113%）",
    "level": "C3",
    "source": "USGS MCS 2025 + gazprom-amur-gpp-status.md"
   },
   {
    "item": "美国精炼产能占全球 54.2%（卡塔尔 19.1%/阿尔及利亚 13.3%/俄 8.2%）",
    "level": "C3",
    "source": "USGS SIR 2025-5021 原文（`usgs-sir2025-5021-world-minerals-outlook-helium.pdf`）"
   },
   {
    "item": "BLM 联邦储备已完全私有化（2024-01-25 售 Messer $4.23 亿）",
    "level": "C4",
    "source": "BLM 官方新闻稿（`blm-federal-helium-system-sale.md`）"
   },
   {
    "item": "Linde 2024 年氦气跨分部内部销售 $477M",
    "level": "C3",
    "source": "Linde 2024 年报（`linde-2024-annual-report.pdf`）"
   },
   {
    "item": "Air Liquide 亚太工业商贸 -1.2%（因中国氦气销量明显下降）",
    "level": "C3",
    "source": "Air Liquide FY2024 新闻稿（`air-liquide-fy2024-press-release.pdf`）"
   },
   {
    "item": "三大分销商控制约 70–80% 液氦分销",
    "level": "C3",
    "source": "Linde/Air Liquide 年报间接确认；APD 卡塔尔 Helium 3 合同约 11.3 MCM/年"
   },
   {
    "item": "全球约 15 万台 MRI",
    "level": "C3",
    "source": "WHO/业界估计，非精确普查"
   },
   {
    "item": "MRI 液氦补货窗口 2–8 周",
    "level": "C3",
    "source": "医院运营资料，品牌差异大"
   },
   {
    "item": "2017 卡塔尔危机未中断氦气/LNG 出口",
    "level": "C3",
    "source": "广泛报道 + 卡塔尔能源声明（未见合同文本一手证据）"
   },
   {
    "item": "阿穆尔 GPP 火灾：2021-10-08（线路2）/ 2022-01-05（线路1）",
    "level": "C3",
    "source": "多家行业媒体 + USGS MCS 2025 + TASS 部分确认（`gazprom-amur-gpp-status.md`）"
   },
   {
    "item": "氦气目前属于 EAR99（最宽松管制级别）",
    "level": "C2",
    "source": "BIS 官网 CCL 清单，需确认当前状态"
   },
   {
    "item": "Air Products 卡塔尔供应 2024 年 12 月起中断",
    "level": "C3",
    "source": "CEO 公开声明 + 行业媒体"
   }
  ],
  "contested": {
   "title": "2017 年 6 月卡塔尔断交危机",
   "summary": "2017 年 6 月 5 日，沙特阿拉伯、阿联酋、巴林、埃及宣布与卡塔尔断绝外交关系，关闭与卡塔尔的陆地边境、领空和部分海上通道（沙特-卡塔尔唯一陆地边境关闭）。卡塔尔当时占全球氦气供给约 25–30%，LNG 伴生氦气通过 Ras Laffan 工业港出口。这是一次真实的、针对卡塔尔全体出口能力的封锁尝试，可以用来测试氦气出口通道在地区封锁下的真实脆弱性。"
  },
  "gaps": [
   "1. **USGS Mineral Commodity Summaries 2025/2026 氦气章节**：当前产量数据、各国实际份额，是 C2 升 C3/C4 的关键一手来源",
   "2. **Linde/APD/Air Liquide 年报数据**：三家公司的氦气分部营收（如有单独披露）、液化工厂数量和产能、长期合同结构",
   "3. **BLM 联邦氦气储备当前余量**：2021–2026 年拍卖进展，目前储备实际剩余量（BLM 官网年度拍卖报告）",
   "4. **阿穆尔 GPP 当前状态（2024–2026）**：2022 年大火后的修复进展，是否恢复产能，是否有制裁条款专门针对氦气设备",
   "5. **全球液氦罐集装箱确切数量**：这是物理流卡点的量化根据，但数据极难获取（行业保密）",
   "6. **MRI 全球精确台数和氦气消耗**：WHO 全球医疗设备数据库；或主要 MRI 制造商（GE Healthcare、Siemens Healthineers、Philips）年报",
   "7. **【新缺口 2026-07-01】** Ras Laffan 2026 袭击事件的一手来源：QatarEnergy 通报 + Samsung/SK Hynix 季报中的氦气供应表述 + 大分销商 Q1/Q2 2026 报告中的卡塔尔供应中断表述。"
  ]
 },
 "cm-ree": {
  "sourceFile": "cm-ree.md",
  "archiveId": "cm-ree",
  "established": "2026-06-20",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "杠杆不在矿里，在分离槽里\n\n先记一个 USGS 2026 稀土章的原话（p.153，verbatim）：\n\n> \"Rare earths are relatively abundant in the Earth's crust, but minable concentrations are less common than for most other mineral commodities.\"\n\n稀土不稀。地壳里到处都是。北美一地，USGS 算得美国本土 measured+indicated 资源 360 万吨、加拿大 1400 万吨以上。所以\"中国卡住全球稀土\"这句话如果落在\"中国有矿别人没矿\"上，是错的——它会让人去找新矿，而新矿不是瓶颈。\n\n真正的卡点在**分离**。十七种镧系元素化学性质极其接近，要把它们从共生矿里一种一种拆开（尤其是重稀土镝、铽），靠的是上百级串联的溶剂萃取，工艺脏、耗酸、产废、要几十年迭代出来的配方 know-how。中国占全球矿产量约 70%（USGS 数据算得，见下），但占全球分离/精炼能力约 85–90%（广泛报道，非 USGS 原文）。这两个数字的差,就是这个节点的全部要害:**矿可以分散到澳洲、美国、缅甸、越南;分离槽搬不走。**\n\n第二个要害在下游:这是个按美元算很小、按依赖算极大的市场。USGS 给美国 2025 年本土产 51,000 吨 REO 精矿,作价仅 $2.4 亿——一个州级别的产值。但这点东西卡着永磁电机、风机、F-35、导弹制导、EV 驱动。**市场规模和杠杆量级在这个节点上严重背离**,这正是 Magnitude Layer 要标的那种\"低名气、高控制\"节点。\n\n---",
  "holders": [
   {
    "entity": "中国",
    "role": null,
    "scale": "2024：270,000 · 2025e：270,000 · 储量：44,000,000",
    "jurisdiction": "中国",
    "group": "采矿(2025e 矿产量,USGS MCS 2026 p.153 表,REO 当量吨,verified):"
   },
   {
    "entity": "美国",
    "role": null,
    "scale": "2024：45,500 · 2025e：51,000 · 储量：1,900,000",
    "jurisdiction": "美国",
    "group": "采矿(2025e 矿产量,USGS MCS 2026 p.153 表,REO 当量吨,verified):"
   },
   {
    "entity": "澳大利亚",
    "role": null,
    "scale": "2024：29,000 · 2025e：29,000 · 储量：6,300,000",
    "jurisdiction": "澳大利亚",
    "group": "采矿(2025e 矿产量,USGS MCS 2026 p.153 表,REO 当量吨,verified):"
   },
   {
    "entity": "缅甸",
    "role": null,
    "scale": "2024：27,000 · 2025e：22,000 · 储量：NA",
    "jurisdiction": "缅甸(矿多回中国分离)",
    "group": "采矿(2025e 矿产量,USGS MCS 2026 p.153 表,REO 当量吨,verified):"
   },
   {
    "entity": "泰国",
    "role": null,
    "scale": "2024：2,100 · 2025e：4,800 · 储量：NA",
    "jurisdiction": "泰国",
    "group": "采矿(2025e 矿产量,USGS MCS 2026 p.153 表,REO 当量吨,verified):"
   },
   {
    "entity": "马达加斯加",
    "role": null,
    "scale": "2024：1,400 · 2025e：2,700 · 储量：NA",
    "jurisdiction": "马达加斯加",
    "group": "采矿(2025e 矿产量,USGS MCS 2026 p.153 表,REO 当量吨,verified):"
   },
   {
    "entity": "巴西",
    "role": null,
    "scale": "2024：560 · 2025e：2,000 · 储量：11,000,000",
    "jurisdiction": "巴西",
    "group": "采矿(2025e 矿产量,USGS MCS 2026 p.153 表,REO 当量吨,verified):"
   },
   {
    "entity": "越南",
    "role": null,
    "scale": "2024：300 · 2025e：150 · 储量：3,500,000",
    "jurisdiction": "越南",
    "group": "采矿(2025e 矿产量,USGS MCS 2026 p.153 表,REO 当量吨,verified):"
   },
   {
    "entity": "俄罗斯",
    "role": null,
    "scale": "2024：2,600 · 2025e：2,600 · 储量：3,800,000",
    "jurisdiction": "俄罗斯",
    "group": "采矿(2025e 矿产量,USGS MCS 2026 p.153 表,REO 当量吨,verified):"
   },
   {
    "entity": "世界(取整)",
    "role": null,
    "scale": "2024：380,000 · 2025e：390,000 · 储量：>75,000,000",
    "jurisdiction": null,
    "group": "采矿(2025e 矿产量,USGS MCS 2026 p.153 表,REO 当量吨,verified):"
   },
   {
    "entity": "中国北方稀土等(国企整合)",
    "role": "全球最大轻稀土开采+分离",
    "scale": "中国分离占全球约 85–90%",
    "jurisdiction": "中国",
    "group": "分离/精炼 + 磁体(企业层,份额为广泛报道 C3,法域 verified):"
   },
   {
    "entity": "MP Materials(NYSE: MP)",
    "role": "Mountain Pass 矿 + 在建分离/磁体",
    "scale": "美国最大单矿;分离/磁体爬坡中",
    "jurisdiction": "美国",
    "group": "分离/精炼 + 磁体(企业层,份额为广泛报道 C3,法域 verified):"
   },
   {
    "entity": "Lynas Rare Earths(ASX: LYC)",
    "role": "Mt Weld 矿(澳)+ 关丹分离(马来)+ 在建德州分离",
    "scale": "最大非中分离商",
    "jurisdiction": "澳大利亚 / 马来西亚 / 美国",
    "group": "分离/精炼 + 磁体(企业层,份额为广泛报道 C3,法域 verified):"
   },
   {
    "entity": "信越化学 / TDK / Proterial(原日立金属)",
    "role": "高端 NdFeB 磁体 + 关键专利",
    "scale": "高端磁体少数非中产能",
    "jurisdiction": "日本",
    "group": "分离/精炼 + 磁体(企业层,份额为广泛报道 C3,法域 verified):"
   },
   {
    "entity": "USA Rare Earth(USAR)",
    "role": "Round Top 矿(TX)+ Stillwater 金属/磁体(OK)",
    "scale": "在建,目标 10,000 TPA 磁体",
    "jurisdiction": "美国",
    "group": "分离/精炼 + 磁体(企业层,份额为广泛报道 C3,法域 verified):"
   }
  ],
  "upstream": [
   "**重稀土原料(离子吸附型黏土,Dy/Tb)**:主要在中国南方 + 缅甸。缅甸政局/边境一乱,中国重稀土原料就紧。这是\"中国分离垄断\"之下还压着的一个原料依赖,值得作子节点 **cm-ree-heavy**(重稀土单独拆)。C3。",
   "**分离用化工试剂 + 溶剂萃取产线**:萃取剂、酸、几百级混合澄清槽。工艺本身是 know-how 壁垒,不是外购单点。",
   "**磁体段:钕铁硼合金 + 烧结/晶界扩散设备 + 镝/铽扩散源**。晶界扩散(省镝)是日企领先的关键工艺专利。子依赖 = 重稀土 + 工艺专利。",
   "**环境承受度(隐形上游)**:分离产钍(放射性)和大量酸废。这不是物料,是\"谁愿意承担产废\"。中国垄断的一半原因是它在 1990s–2000s 愿意承担这个成本而西方不愿——这条要进因果层。"
  ],
  "downstream": [
   "**致命依赖:永磁电机 → EV 驱动 + 风机直驱**。EV 永磁同步电机、海上风机直驱发电机离不开 NdFeB。替代方案(感应电机/绕线励磁)存在但性能/体积/效率掉档。",
   "**致命依赖:国防工业基础**。F-35(每架含稀土约数百公斤量级,C3 媒体口径)、导弹制导/舵机(钐钴高温磁体)、雷达、声呐。这一块对单一来源(中国)的依赖是西方国防供应链最被点名的缺口。",
   "**高依赖:消费电子 + 工业**。硬盘音圈、扬声器、机器人伺服、MRI。",
   "**可缓冲:催化剂 + 抛光 + 玻璃陶瓷**。USGS:美国本土最大用途其实是**催化剂**(炼油 FCC),不是磁体;全球最大用途才是磁体。轻稀土(镧/铈)在催化/抛光上相对易替代、库存可缓冲。",
   "买家侧份额:全球磁体消费约 60%+ 的价值集中在 NdFeB(C3 行业口径,需原文)。下游 EV/风机 OEM 的稀土成本占整车比例很低(每辆 EV 约 5–10 kg 磁体级稀土,C2),但**断供不是涨成本问题,是\"电机造不出\"的产能问题**——金额小、卡死性强,典型的低成本占比高卡死性节点。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial fallback",
   "unstructured": false,
   "text": "分层判,别给一个总分:\n\n**采矿层替代:`partial → operational`(局部已成立)**\n非中矿已实在产出(美国 51,000 t、澳洲 29,000 t、缅甸、泰国、巴西)。过五问:替代采矿层 / 已在产(operational)/ 不卡在采矿 / MP、Lynas 等私营+各国政府 / 现场有执行能力(矿在产)。结论:**采矿层的 fallback 是真的**。但这恰恰证明卡点不在矿——矿能绕开,链子还是断在下一层。\n\n**分离/精炼层替代:`planned → partial`(在建,未到规模)**\n- Lynas 关丹(马来)分离厂已运行多年,是最大非中分离产能;德州分离厂在建。\n- MP Materials Mountain Pass 分离/磁体爬坡中。\n- USA Rare Earth:NIST 2026-06-03 定案,Round Top(TX)矿 → Stillwater(OK)金属+磁体 + Blacksburg(SC),目标 10,000 TPA 稀土金属合金 + 10,000 TPA NdFeB 磁体,矿预计 2028 商业投产。\n- 过五问:替代分离/磁体层 / 多久接上 = 数年到 2028+ / 卡在环评许可 + 萃取 know-how + 重稀土工艺 + 磁体晶界扩散专利 / 谁启动 = CHIPS/DPA 联邦资金 + 私营 / 现场执行能力 = 部分有(Lynas 关丹在产),整链规模化未到。\n- 结论:**`partial fallback`**——轻稀土分离有 operational 据点(Lynas),但**重稀土分离 + 规模化磁体仍是 `planned`,不能当 fallback**。整体判 partial,且最硬的重稀土段最弱。\n\n**重稀土(Dy/Tb)分离层:`blocked → planned`**\n原料(缅甸/中国黏土)+ 工艺双重集中,西方几乎无量产据点。DOE NETL 与 USAR 签了重稀土分离技术 LOI(NIST 披露),属研发期。`possible reroute`,不是 fallback。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "稀土是\"按美元小、按杠杆大\"的典型节点——这个背离本身是最重要的量化事实。\n\n- **矿端产值(全球,USGS 单价推算)**:USGS 给美国 2025e 产 51,000 t REO 精矿作价 $2.4 亿 → 约 $4,700/t 混合精矿。以此粗算全球 390,000 t × ~$4,700 ≈ **约 $18 亿/年矿端精矿产值**(C2 推算,blended 价掩盖了 NdPr 贵、La/Ce 贱的巨大差异,仅给数量级)。\n- **美国进口端(USGS verbatim,C4)**:2025 年美国稀土化合物+金属进口量增 169%,但进口额降到 **$1.65 亿**(2024 为 $1.68 亿),\"reflecting a shift toward lower-value imported products\"。\n- **分离氧化物/金属市场**:大于矿端,价值集中在 NdPr(磁体料)。【缺口:全球分离稀土氧化物市场年值——需 IEA/Adamas/Argus 原文,USGS 无此数】\n- **下游 NdFeB 磁体市场(C3 lead_only)**:常被引为约 $150–200 亿/年量级,需行业原文核。这才是价值沉淀处。\n\n→ 数量级对比:矿端约 $18 亿、磁体约 $150–200 亿,但它卡的下游(EV + 风电 + 国防)是**万亿级**。一个 $18 亿的矿端市场卡着万亿级终端——这是 Magnitude Layer 要标红的\"杠杆/市值严重背离\"节点。\n\n【缺口:全球分离稀土氧化物市场年值、NdFeB 磁体市场精确值与基准年——需 IEA Critical Minerals / Adamas Intelligence 原文(magnitude-seed-ledger `g-iea-refining` 已标 blocked,留 Root key)】",
    "cLevels": [
     "C2",
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 采矿层:CR1(中国)= 69.2%(2025e,USGS 算得,verified)。\n- 分离/精炼层:CR1(中国)≈ 85–90%(C3 广泛报道,需 IEA 原文)。\n- 重稀土分离:CR1(中国)接近独占(C3)。\n- 磁体(NdFeB):CR1(中国)≈ 90%+(C3 行业口径,需原文)。\n- price maker = 中国(产能 + 出口许可双控)。\n\n集中度沿加工链单调递增——**这是本节点量化层的核心结论:越往高价值、越往重稀土,越是单点。**",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 利润率 | 市值/估值 | 来源 |\n|---|---|---|---|---|\n| 中国北方稀土等国企 | 【缺口:需年报】 | — | — | 需中国上市公司年报原文 |\n| MP Materials(NYSE: MP) | 【缺口:需 10-K】 | — | 上市 | 需 MP 2025 10-K |\n| Lynas(ASX: LYC) | 【缺口:需年报】 | — | 上市 | 需 Lynas FY 年报 |\n| 信越化学 | 【缺口:磁体段不单独披露】 | — | 上市 | 需信越年报分部 |\n| USA Rare Earth | 未投产;CHIPS $277M grant + ≤$1.3B loan;两项目估算总 capex $3.3B | — | 2026-01 另募 $1.5B PIPE | NIST DFA/LOI(C4) |\n\n资本纵深判断:中国国企有国家资产负债表撑;西方靠 CHIPS/DPA 联邦资金 + 私募(USAR $277M grant 是直接拨款锚点,$1.3B 是要还的贷款,不是无偿建设金)。**西方扩产的钱有一半是债,政治可持续性比中国国企补贴脆。**\n\n【缺口:MP/Lynas/中国北方稀土/信越的年营收+利润率+市值——需各自年报/10-K/ASX 披露,本轮未取,优先级见缺口清单】",
    "cLevels": [
     "C4"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **下游成本敞口(低)**:每辆 EV 约用 5–10 kg 磁体级稀土(C2 行业口径),占整车成本极小;风机单台用量更大但仍占小比例。\n- **下游产能敞口(致命)**:断供下,磁体料库存通常以周/月计(C2,需 OEM 披露核)。一旦中国对某出口商停发许可,该下游磁体厂在库存耗尽后**无法维持电机产能**——不是涨价,是停线。2010 对日断供数周即让日企恐慌,是历史实证。\n- **嵌入成品的隐性依赖(USGS verbatim)**:大量稀土以成品形式进口,真实依赖深于净进口统计。美国净进口依赖(化合物+金属)2024=53%、2025e=67%(USGS Salient Statistics,verified),且这还没算成品里嵌的。\n\n【缺口:下游磁体厂稀土料库存可撑周期、EV/风机 OEM 单位用量精确值——需 OEM/磁体厂披露或行业报告】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **直接历史实证**:2010 中日稀土事件,中国对日断供数周,逼出日本国家级\"去中国稀土\"战略(JOGMEC 投 Lynas)。冲击量级当年未见统一 GDP 估算,但足以改变一国产业政策方向(C3)。\n- **2025 管制冲击**:USGS 记 2025 美国进口量增 169%(抢在管制收紧前囤货的信号)而进口额反降——量价背离本身就是冲击的指纹。【缺口:2025 中国稀土管制对全球磁体/EV/风电/国防供应链的量化冲击——需 CSIS/IEA/Rhodium 专题报告,USGS 无】\n- **结构推算(C2)**:稀土矿端约 $18 亿,卡着 NdFeB 约 $150–200 亿、再卡着 EV+风电+国防万亿级终端。断供的经济冲击不在稀土市场本身(小),在下游停线——量级以**受影响终端年产值**计,不以稀土市场计。这是必须给出的数量级:杠杆放大倍数约 1000×(矿端 vs 终端)。\n\n【缺口:权威断供情景冲击估算——需 CSIS/IEA/Rhodium 稀土供应链冲击专题报告原文】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链利润分布:**矿端薄(混合精矿 ~$4,700/t)、分离端厚(NdPr 氧化物溢价)、磁体端厚(高端 NdFeB + 日企专利租)、终端整合商(EV/风机 OEM)摊薄。** 利润主要沉淀在分离 + 高端磁体两段——这正是中国控制最紧、西方最难追的两段。\n\n政治压力首先打到谁:中国一动出口许可,first payer 是**西方下游磁体厂 + EV/风机/国防 OEM 的资产负债表**(停线损失),不是稀土供应商。反过来,西方搞分离/磁体扩产,钱压在 MP/Lynas/USAR 的资产负债表上,且一半是联邦债务——压力点在\"这些项目能不能在中国随时可以重新压价的市场里活到回本\"。中国当年就是用价格战逼死 Mountain Pass 的,这个剧本可以重演。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "中国矿产量份额 2025e≈69.2%、2024≈71.1%",
    "level": "C4",
    "source": "USGS MCS 2026 表算得"
   },
   {
    "item": "中国稀土储量 44M/>75M≈59%",
    "level": "C4",
    "source": "USGS MCS 2026 表"
   },
   {
    "item": "美国 2025e 产 51,000 t REO 作价 $2.4 亿",
    "level": "C4",
    "source": "USGS MCS 2026 verbatim"
   },
   {
    "item": "美国 2025 进口量增 169%、进口额 $1.65 亿",
    "level": "C4",
    "source": "USGS MCS 2026 verbatim"
   },
   {
    "item": "美国净进口依赖 2024=53%、2025e=67%",
    "level": "C4",
    "source": "USGS Salient Statistics"
   },
   {
    "item": "美国进口来源中国 71%(2021-24)",
    "level": "C4",
    "source": "USGS verbatim"
   },
   {
    "item": "稀土地壳丰度高、矿不稀",
    "level": "C4",
    "source": "USGS verbatim"
   },
   {
    "item": "2025 中国出口管制时间线(4/10/11 月,元素清单)",
    "level": "C4",
    "source": "USGS Events verbatim"
   },
   {
    "item": "中国分离/精炼份额≈85–90%",
    "level": "C3",
    "source": "广泛报道,USGS 无此句"
   },
   {
    "item": "中国 NdFeB 磁体份额≈90%+",
    "level": "C3",
    "source": "行业口径"
   },
   {
    "item": "卡点在分离/磁体而非采矿",
    "level": "C3",
    "source": "结构判断+USGS 份额差佐证"
   },
   {
    "item": "重稀土(Dy/Tb)分离接近中国独占",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "USA Rare Earth $277M grant+≤$1.3B loan、10,000 TPA 磁体目标、矿 2028 投产",
    "level": "C4",
    "source": "NIST DFA 2026-06-03/LOI"
   },
   {
    "item": "矿端市场约 $18 亿/年",
    "level": "C2",
    "source": "USGS 单价推算"
   },
   {
    "item": "NdFeB 磁体市场约 $150–200 亿",
    "level": "C3",
    "source": "行业 lead_only"
   },
   {
    "item": "杠杆放大约 1000×(矿端 vs 终端)",
    "level": "C2",
    "source": "结构推算"
   },
   {
    "item": "中国垄断是政策造非地质造(因果层)",
    "level": "C3",
    "source": "历史轨迹+USGS 丰度句佐证"
   }
  ],
  "contested": {
   "title": "中国 2025 年 4 月 4 日稀土磁体材料出口管制",
   "summary": "背景：2025 年 4 月 2 日，美国宣布\"对等关税\"（Liberation Day Tariffs），对中国商品追加约 34% 关税。两天后（4 月 4 日），中国商务部/海关总署宣布对七种重稀土元素（钐、钆、铽、镝、镥、钇、钪）的氧化物、合金及磁体，实施出口许可证制度（文号待补，见数据缺口 #2）。"
  },
  "gaps": [
   "1. 【缺口:需要 IEA Critical Minerals refining-share 数据 或 Adamas Intelligence 行业报告原文】中国稀土**分离/精炼份额(85–90%)+ NdFeB 磁体份额(90%+)**的精确数值与基准年。这是本节点核心论点\"卡点在分离不在矿\"的量化支柱,目前只能挂 C3。magnitude-seed-ledger 已标 `g-iea-refining` 为 blocked/needs-api-key,留 Root 决定是否注册 IEA 账号或授权。",
   "2. 【缺口:需要中国商务部 2025-04/2025-10/2025-11 出口管制公告中文原文】三份公告的具体公告号、受控清单全文、出口商白名单/一般许可范围。USGS 只给英文时间线,政治传动层 A/E 的文号待补。",
   "3. 【缺口:需要 MP Materials 2025 10-K / Lynas FY 年报 / 中国北方稀土年报 / 信越化学年报分部】关键玩家营收、利润率、市值——Q3 财务概况现全为缺口,无法量化各方资本纵深。",
   "4. 【缺口:需要 CSIS / IEA / Rhodium 稀土供应链断供冲击专题报告】2025 中国管制对全球磁体/EV/风电/国防的量化冲击(Q5)。",
   "5. 【缺口:需要行业报告或 OEM 披露】下游磁体厂稀土料库存可撑周期、EV/风机单位用量精确值(Q4 产能敞口)。",
   "6. 【缺口:子节点 cm-ree-heavy】重稀土(Dy/Tb)原料(缅甸/中国黏土)+ 分离的独立拆解——重稀土是链条最硬的孙单点,值得单独建节点。\n---"
  ]
 },
 "en-crude": {
  "sourceFile": "en-crude.md",
  "archiveId": "en-crude",
  "established": "2026-06-24",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Saudi Aramco",
    "role": "国家石油公司（NOC）",
    "scale": "沙特产量约 10–12 mb/d（C3）",
    "jurisdiction": "利雅得 / 沙特法域",
    "group": null
   },
   {
    "entity": "ExxonMobil",
    "role": "国际石油公司（IOC）",
    "scale": "权益产量约 3.7 mb/d（2023，C3）",
    "jurisdiction": "德克萨斯 / 美国法域",
    "group": null
   },
   {
    "entity": "Saudi Aramco（全球权益）",
    "role": "NOC",
    "scale": "见上",
    "jurisdiction": "沙特 / 亦适用 NYSE（ADR）",
    "group": null
   },
   {
    "entity": "Rosneft",
    "role": "俄罗斯国有",
    "scale": "俄国内约占 40%（C3）",
    "jurisdiction": "莫斯科 / 俄罗斯法域",
    "group": null
   },
   {
    "entity": "ADNOC",
    "role": "NOC（UAE）",
    "scale": "UAE 产量约 3.5–4 mb/d（C3）",
    "jurisdiction": "阿布扎比 / UAE",
    "group": null
   },
   {
    "entity": "Chevron / BP / Shell / TotalEnergies",
    "role": "IOC",
    "scale": "各约 1–2 mb/d 权益产量（C2）",
    "jurisdiction": "美/英/荷英/法",
    "group": null
   },
   {
    "entity": "Iraq NOC / INOC",
    "role": "NOC",
    "scale": "约 4.5 mb/d（C3）",
    "jurisdiction": "巴格达 / 伊拉克",
    "group": null
   },
   {
    "entity": "National Iranian Oil Co（NIOC）",
    "role": "NOC（受制裁）",
    "scale": "约 3–3.5 mb/d（C2，制裁后数据不透明）",
    "jurisdiction": "德黑兰 / 伊朗",
    "group": null
   }
  ],
  "upstream": [
   "en-crude 在物理上依赖的上游比较分散，没有 EUV 那种一夫当关的子单点：",
   "**地质储量（L0 自然资源）**：中东海湾地区储量约占全球已探明的 48%（沙特约 18%，伊朗 ~9%，伊拉克 ~9%，科威特 ~6%，UAE ~6%，C3 BP Statistical Review）。但储量丰富不等于当下可达——政治稳定性、基础设施状态、技术服务合同可获性同样制约产量。",
   "**油田服务与技术（关键子依赖）**：深水/非常规开采高度依赖 SLB（前斯伦贝谢）、Halliburton、Baker Hughes 三家美系服务公司（市占合计约 60%+，C2）。2022 年后这三家撤出俄罗斯业务，被认为是俄罗斯产量长期维持的潜在约束（服务能力的递耗难以被国内替代，C2 推算）。这是本节点物理层之下一个被低估的子依赖——**NOC 可以不卖给你，但它自己的产量维持在技术上部分依赖西方服务商**。",
   "**钻采设备**：泵、管材、旋转钻具，美国/欧洲/日本供给，俄罗斯制裁后进口受限，补货靠中国产替代（质量差异存在，C2）。",
   "**炼化端上游（凝析液/伴生气处理）**：不构成独立卡点，归入 en-refine。",
   "【缺口：SLB/Halliburton/Baker Hughes 俄罗斯业务退出对俄产量的量化影响——需 IEA 俄油产量跟踪报告 + 三家公司年报中俄国营收段，这是本节点下一个应单独评估的子单点 possible reroute】"
  ],
  "downstream": [
   "**交通运输（致命依赖）**：全球航空（约 2.5 mb/d 航空煤油需求，2023，C3 IEA）、公路（汽柴油，最大下游，约 45–50 mb/d 等价，C2）、海运（船用燃油约 4–5 mb/d，C2）。电动化替代路径存在但时间尺度是 10–20 年。",
   "**石化下游（高依赖）**：乙烯/丙烯/芳烃等基础化工原料，约 10–15 mb/d 进石化路线（C2 推算，含 NGL）。塑料、合成纤维、橡胶、农药（ag-pesticide 节点上游）都在此链上。",
   "**发电（可替代，中度依赖）**：中东部分国家仍大量烧油发电（沙特/科威特），约 3–4 mb/d（C3）；主要 OECD 国家已基本退出油电。",
   "**下游存货缓冲**：大型炼化厂一般有 30–60 天在途+在库原油库存（C2），这是短期供给中断的缓冲窗口，决定断供传导到终端用户的时间差。"
  ],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": "operational",
   "unstructured": false,
   "text": "**小规模断供（< 2 mb/d，如单国政治事件）**：\n- **SPR 释放**：IEA 成员国集体战略储备超 15 亿桶（其中美国 SPR 约 3.5–4 亿桶，2023 年底，C3 DOE；2022 年释放约 1.8 亿桶历史最大规模），相当于全球约 15 天消费量（C2 推算）。操作层面 operational，但消耗后补充需时，一次性弹药。\n- **沙特摇摆产能激活**：常被引作 2–3 mb/d、4–6 周可增产（C3），被 IEA 体系视为 fallback 的核心依托。但这层\"随时可动\"是被高估的账面能力，不能直接当 operational——**五问**：替代哪一层=缺口来源产量；多久接上=4–6 周；卡在哪=**三条现场约束，不止政治意愿**——① 实际闲置产能没有 2–3 mb/d 那么宽裕，IEA 2025-08 估沙特实际闲置约 2.43 mb/d（当月实产约 9.7 mb/d），是宣称区间的下沿；② \"12–12.5 mb/d 满产维持一年\"是 Aramco 自己的宣称，从未持续满负荷实测过，测量装置就是 Aramco/IEA 本身；③ 就算产得出，还受外运瓶颈约束——延布（Yanbu）装船端一天只能装约 4.5 mb/d，显著小于东西管道名义 7 mb/d（这条 en-tanker 节点已有口径，此处接上）；谁有权启动=沙特政府/Aramco 董事会；现场能不能执行=部分——增产本身可行，但满产持续性与外运能力未经实测。结论：从 `operational` 降为 **`claimed / partially-tested`**，权重降一档：它是一层真实存在、但被高估且未充分实测的缓冲，不是随时可全额调用的开关。（来源：EIA Today in Energy \"OPEC spare capacity\"；Aramco CEO 2025-10 声明；oilprice.com 摇摆产能实测分析）\n- **美国页岩响应**：3–6 个月增产（C3），lead time 比沙特慢，但可规模更大（潜在可动员 2–4 mb/d 增产空间，C2 推算）。独立于 OPEC+ 决策，是 OPEC+ 无法控制的第二条 fallback 线。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **全球原油贸易额**：约 $2–2.5 万亿/年（2022–2023，C3 行业口径；Brent 约 $80–85/bbl × 约 50 mb/d 原油贸易量 × 365 天的粗推）。全球总产量约 100–102 mb/d（EIA 2023，C4），但并非全部跨境贸易，各国自产自用部分扣除后实际跨境原油贸易约 40–55 mb/d（C2 推算，含管道+油轮）。\n- **全球原油生产总值**：约 $2.9–3 万亿（C2 推算：~100 mb/d × ~$80/bbl × 365）。\n- **沙特 Aramco 营收**：FY2022 约 $604B（C3，含天然气和化工）；FY2023 约 $440B（C3，油价回落所致）。\n\n【缺口：Saudi Aramco 2023 年报原文（营收/净利润精确值及拆分）；EIA International Energy Statistics 原油国际贸易量；IEA 2023 Oil Market Report 全年平均数】",
    "cLevels": [
     "C3",
     "C4",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **CR1（美国，按产量）**：约 13%（2023，EIA C4）\n- **CR3（美/沙/俄）**：约 34%（C3）\n- **OPEC+ 合计**：约 40–45%（C3，含非 OPEC 合作方如俄/哈/墨）\n- **Price maker**：沙特阿拉伯（通过摇摆产能 + OPEC+ 配额领导力），CR 集中度指标低于 EUV（100%）、HBM（50%+），但定价机制的集中度远高于产量集中度——少数主要买家（亚洲精炼商）以沙特 OSP 作为定价基准，形成定价话语权集中。\n- **HHI**：约 1400–1700（C2 推算，多极但有寡头集聚），远低于 EUV/GPU/HBM，属于「有集中度但非单点」的竞争寡头结构。",
    "cLevels": [
     "C4",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | FY2023 营收（亿美元）| 净利率 / 毛利率 | 市值 | 来源 |\n|---|---|---|---|---|\n| Saudi Aramco | 约 4400 | 净利率约 27%（~$121B 净利）| 约 $1.7–2T（Tadawul）| C3 需 2023 年报核 |\n| ExxonMobil | 约 3980 | 净利率约 9%（~$36B）| 约 $4500–5000 亿（NYSE）| C3 需 10-K 核 |\n| Chevron | 约 1960 | 净利率约 11%（~$21.4B）| 约 $2900 亿（NYSE）| C3 需 10-K 核 |\n| Shell | 约 3160 | 净利率约 9%（~$28B）| 约 $2300 亿（LSE/NYSE）| C3 需年报核 |\n| BP | 约 2130 | 净利率约 7%（~$15B）| 约 $1100 亿（LSE）| C3 需年报核 |\n| TotalEnergies | 约 2190 | 净利率约 11%（~$24B）| 约 $1400 亿（Paris/NYSE）| C3 需年报核 |\n| Rosneft | 不透明（制裁后）| — | 制裁后大幅下跌 | C1，无可靠公开数据 |\n\n**关键财务对照**：Aramco 净利润率远高于西方 IOC——这反映了 NOC 几乎零勘探成本（老油田、低开采成本）vs IOC 高资本支出（深水、非常规）的商业模式差异。IOC 更像服务商 + 资本分配器，NOC 更像低成本生产商。政治压力首先打到 IOC 的资产负债表，然后通过油价传导到 NOC 的财政收入。\n\n【缺口：沙特 Aramco 2023 年报原文；ExxonMobil 10-K 2023；Rosneft 制裁后可获取的财务数据（可能只有俄罗斯本地报表，需判断数据可靠性）】",
    "cLevels": [
     "C3",
     "C1"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **全球航空业对原油/航油的依赖**：航空煤油约占商业航空运营成本的 25–30%（C3 IATA 口径）；航油价格直接随 Brent 挂钩，每桶 $10 变化对全球航空业运营成本影响约 $150–180 亿/年（C2 推算，基于约 2.5 mb/d 航油消耗）。\n- **炼厂原油库存周转**：大型炼厂一般维持 30–60 天原油库存（C2），断供后 1–2 个月才会传导到汽柴油供给紧张——这是能源制裁「时间差政治」的关键参数。\n- **中国对中东原油的依赖**：中国进口原油约 70–75% 来自中东 + 俄罗斯（C3 海关总署/IEA 口径）；中国是全球最大原油进口国，约 10–11 mb/d（C3，2023），对中东 OPEC+ 有结构性买方依赖——但同时也是俄罗斯的救生圈买家，形成双向政治牵制。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "**历史实证（按规模排）：**\n- **1973 阿拉伯禁运**：~5% 供给减少 → 油价约 4 倍（C3 广泛记录）；美国 GDP 衰退约 -2.1%（1974，C3）；通胀飙升（OPEC 一代人的模板）。\n- **1991 海湾战争**：约 4–5 mb/d 临时停产（科威特+伊拉克）→ 油价约 +100%（C3）；IEA/SPR + 沙特增产在 6 个月内稳定局面。\n- **2022 俄乌战争初期**：Brent 最高约 $120/bbl（3–6 月），约 2–3 mb/d 欧洲采购需重新路由 → 欧洲 GDP 冲击约 -1 到 -2%（C2 IMF/EC 估算，需原文）；LNG 和煤炭价格同步暴涨（能源通胀复合体）。\n- **价格上限对俄罗斯的收入冲击**：俄罗斯 2022 年石油出口收入约 $1800–2000 亿（C2–C3，IEA/Kyiv School of Economics 口径），2023 年下降约 30–40%，但实际数字有争议（C2）。\n\n【缺口：IEA Oil Market Report 对 2022–2023 俄罗斯出口量/收入的系统性跟踪；IMF 2023 欧元区能源冲击量化报告；1973 年 OPEC 禁运对美国 GDP 的精确数字来源】",
    "cLevels": [
     "C3",
     "C2",
     "C2–C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "**价值链利润高度集中在上游（NOC）**：\n- 沙特 Aramco 约 $45/bbl 生产成本（含税/财政分成之前，C2）对 $80 Brent = 约 $35/bbl 毛利润在生产端。\n- 提炼/加工端（en-refine）：炼化利润率（炼油裂解利差）历史上约 $5–15/bbl，远低于上游（C3 行业口径）；且炼化是商品化的竞争环节。\n- **政治压力最先打到谁的资产负债表**：制裁/价格战首先打 IOC（被迫撤出合同、资产减值）和买方国政府（进口成本上升、补贴财政压力），NOC 受保护于主权屏障（但政府财政收入直接受油价影响）。沙特政府财政预算平衡油价约 $80–90/bbl（C3 IMF 估算），低于此则出现赤字，这是沙特维持产量配额的财政约束。\n- **石化链利润**：石化（特别是乙烯链）利润随油化价差变动大，2022–2023 年欧洲石化因原料/能源成本飙升大幅减产——原油涨价通过原料成本打到欧洲石化业，而不是直接打到产油国的资产负债表。\n\n---",
    "cLevels": [
     "C2",
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "全球原油产量约 100–102 mb/d（2023）",
    "level": "C4",
    "source": "EIA/IEA/BP Statistical Review 年度数据，权威统计"
   },
   {
    "item": "美国为全球最大产油国（约 12.9–13.3 mb/d，2023）",
    "level": "C4",
    "source": "EIA Weekly Petroleum Status Report / Annual Report"
   },
   {
    "item": "沙特 Aramco FY2022 营收约 $604B",
    "level": "C3",
    "source": "广泛报道，需 Aramco 2022 年报核"
   },
   {
    "item": "沙特 Aramco FY2023 营收约 $440B",
    "level": "C3",
    "source": "广泛报道，需 Aramco 2023 年报核"
   },
   {
    "item": "沙特摇摆产能：宣称 2–3 mb/d/4–6 周，实测闲置约 2.43 mb/d（IEA 2025-08）、满产未持续实测、延布装船端约 4.5 mb/d 外运瓶颈 → 判 claimed/partially-tested",
    "level": "C3",
    "source": "IEA/EIA/Aramco 声明，勿当 operational"
   },
   {
    "item": "OPEC+ 合计产量约 40–45% 全球",
    "level": "C3",
    "source": "行业口径，未逐条回 OPEC 统计公报"
   },
   {
    "item": "沙特财政预算平衡油价约 $80–90/bbl",
    "level": "C3",
    "source": "IMF Article IV 口径，广泛引用"
   },
   {
    "item": "中东已探明储量约占全球 48%",
    "level": "C3",
    "source": "BP Statistical Review 历年数据"
   },
   {
    "item": "1973 禁运：5% 供给减少 → 约 4 倍价格涨",
    "level": "C3",
    "source": "历史共识，需原始记录核"
   },
   {
    "item": "俄 2022 年石油出口收入约 $1800–2000 亿",
    "level": "C2–C3",
    "source": "IEA/Kyiv School 估算，有争议"
   },
   {
    "item": "页岩边际成本约 $45–60/bbl",
    "level": "C2",
    "source": "行业估算，无统一数据集"
   },
   {
    "item": "SLB/Halliburton/Baker Hughes 合计 oil services 约 60% 市占",
    "level": "C2",
    "source": "结构推算，无官方定义市场份额"
   },
   {
    "item": "中国进口原油 70–75% 来自中东+俄罗斯",
    "level": "C3",
    "source": "中国海关/IEA 口径"
   },
   {
    "item": "价格上限机制：$60/bbl 2022-12-05 生效",
    "level": "C4",
    "source": "G7 联合声明 + EU Regulation 2022/1904"
   },
   {
    "item": "暗船（dark fleet）绕制裁约 600–700 艘",
    "level": "C2–C3",
    "source": "路透/FT 报道，无权威统计"
   }
  ],
  "contested": {
   "title": "2022 年 12 月 G7+欧盟对俄罗斯原油实施 60 美元/桶价格上限",
   "summary": "2022 年 12 月 5 日，G7 国家和欧盟正式实施对俄罗斯海运原油的 60 美元/桶价格上限（oil price cap）。机制核心是：使用西方提供的服务（海运保险、船舶融资、港口服务）运输俄罗斯原油的企业，只有在确认原油售价在 60 美元以下时，才被允许提供服务；否则承受制裁风险。这不是物理禁运——俄罗斯原油理论上仍可出口，只是绕开西方服务层。"
  },
  "gaps": [
   "1. 【缺口：Saudi Aramco 2023 年报原文（Annual Report 2023 + IR factsheet）】——核 FY2023 营收/净利润精确值、生产成本、产能利用率，是本节点最核心的单一财务原始文件；影响 Q3、Q6 和价格敏感性判断",
   "2. 【缺口：IEA 2023/2024 Oil Market Report + Russia oil revenues tracking page（IEA.org 俄油监测）】——核俄罗斯 2022–2024 年出口量/单价/收入时序，是价格上限有效性判断的最佳可信来源；目前 C2–C3 推算，需 C3+ 以上来源",
   "3. 【缺口：G7 俄原油价格上限联合声明（2022-09-02 G7 声明 + EU Reg 2022/1904 原文）】——把价格上限机制从 C3 推至 C4，并确认 $60 门槛的法律基础和执行机制；影响政治传动层 A/B/C",
   "4. 【缺口：BP Statistical Review of World Energy 2024 原文（Appendix: Oil production by country）】——确认全球产量、中东储量份额、各国产量时序；这是标准化的公开数据，应为 C4 可引用级别；影响 Q1/Q2/结构层 3/4",
   "5. 【缺口：EIA 2023 International Energy Statistics：US/Saudi/Russia 产量原始数据页】——核三大产油国精确数字，配合 BP 数据交叉验证；影响 Q2 集中度",
   "6. 【缺口：IEA Strategic Petroleum Reserve statistics（IEA.org）：各成员国 SPR 现存量，尤其 US SPR 近年释放量（2022 约 1.8 亿桶数字的原文）】——影响 fallback 等级 operational 判断的定量基础",
   "7. 【缺口：SLB/Halliburton/Baker Hughes 年报中俄罗斯/制裁受限国业务退出细节（2022–2023 annual reports）】——核 oil field services 撤出对俄产量的实际约束，目前 C2 推算是本节点最大量化黑洞之一"
  ]
 },
 "en-lng": {
  "sourceFile": "en-lng.md",
  "archiveId": "en-lng",
  "established": "2026-06-24",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Qatar Energy（QatarGas）",
    "role": "NOC（卡塔尔国有）",
    "scale": "约 77–80 MT（C3）",
    "jurisdiction": "多哈 / 卡塔尔",
    "group": null
   },
   {
    "entity": "Woodside Energy",
    "role": "IOC（澳大利亚）",
    "scale": "约 10–12 MT 净权益（C3，2023）",
    "jurisdiction": "珀斯 / 澳大利亚 + NYSE（ADR）",
    "group": null
   },
   {
    "entity": "Chevron（运营 Gorgon/Wheatstone）",
    "role": "IOC",
    "scale": "权益约 15 MT（C3）",
    "jurisdiction": "加州 / 美国法域",
    "group": null
   },
   {
    "entity": "Shell",
    "role": "IOC",
    "scale": "权益约 10–15 MT（C2 估算）",
    "jurisdiction": "海牙 / 荷兰+英",
    "group": null
   },
   {
    "entity": "TotalEnergies",
    "role": "IOC",
    "scale": "权益约 10–15 MT（C2 估算）",
    "jurisdiction": "巴黎 / 法国",
    "group": null
   },
   {
    "entity": "Cheniere Energy",
    "role": "独立 LNG 公司",
    "scale": "约 45 MT 液化能力（Sabine Pass + Corpus Christi，C3）",
    "jurisdiction": "休斯顿 / 美国法域",
    "group": null
   },
   {
    "entity": "Novatek（俄）",
    "role": "俄罗斯国家关联",
    "scale": "Yamal LNG 约 16.5 MT（C3）",
    "jurisdiction": "莫斯科 / 俄罗斯",
    "group": null
   },
   {
    "entity": "ADNOC LNG",
    "role": "NOC（UAE）",
    "scale": "约 6 MT（C3）",
    "jurisdiction": "阿布扎比 / UAE",
    "group": null
   }
  ],
  "upstream": [
   "**天然气资源（L0 自然资源）**：资源集中在卡塔尔 North Field（与伊朗 South Pars 共享同一地质构造，世界最大气田）、俄罗斯西伯利亚、美国页岩气（Permian/Haynesville/Marcellus）。与石油地质分散相比，LNG 上游气源相对集中。",
   "**液化技术（关键子依赖）**：全球 LNG 液化工艺专利主要集中在 Air Products（AP-C3MR/AP-X 工艺，约占现有产能 50%+，C3）、Linde/ConocoPhillips（Optimized Cascade，Sabine Pass 等项目使用）、Baker Hughes/Chart Industries。没有 EUV 光源那种「连失败的第二家都没有」的极端单点，但液化工艺技术更换成本极高（需要重新设计整个液化列）。",
   "**LNG 储罐系统设计**：GTT（法国 Gaztransport & Technigaz）的薄膜型舱（Mark III/NO96）占 LNG 船舶货舱设计约 90%+（C3），是运输层的单点子依赖，归 sh-lng-carrier 节点处理，但产能受限直接约束本节点 fallback。",
   "**LNG 运输船建造**：韩国三大船厂（HD HDEC/现代重工、三星重工、韩华海洋/大宇），归 sh-lng-carrier，新船订单交期约 3–4 年，限制了快速扩大 LNG 贸易量的能力。",
   "**浮式再气化设施（FSRU）**：设计和建造市场集中在挪威 Höegh/Golar 等，2022 年欧洲需求激增后 FSRU 供给成为瓶颈，租金暴涨（C3）。"
  ],
  "downstream": [
   "**电力市场（依赖度高，政治敏感）**：天然气发电约占全球发电量约 22–23%（C3，IEA）。英国/意大利/日本/韩国等电网对天然气依赖超 30%，对断供极敏感。",
   "**工业供热（高依赖）**：化工/钢铁/玻璃/陶瓷等高温工业的直接热源，改电加热或改固体燃料成本高、周期长，短期难以替代。",
   "**城市居民供热（政治极敏感）**：欧洲约 40% 家庭以天然气取暖（C3，Eurostat），任何供给中断立刻政治化——这是俄罗斯 2022 年断气威胁最大的政治打击点。",
   "**化工原料（部分）**：天然气是氨/氮肥的主要原料（ag-fertilizer-n 节点上游），化肥价格跟随天然气价格波动。2022 年欧洲天然气涨价直接导致欧洲化肥产能大规模停工（约 40–50%，C3 待核）。",
   "下游库存缓冲：地下储气库是主要缓冲手段（欧洲约 100 BCM 容量），但注入/提取有物理速率限制，无法像石油 SPR 那样任意快速释放。2022 年欧洲靠动用储气库库存 + 抢购 LNG + 需求削减三管齐下，勉强度过危机季。"
  ],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": "operational",
   "unstructured": false,
   "text": "结论：**operational（高代价条件下达成）**，但依赖两个偶然条件：欧洲有支付能力，以及 2022 年亚洲异常暖冬降低了亚洲用气需求，让出了部分现货船舶和体量（C2 推算，如两个条件同时不满足，结果未知）。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **全球 LNG 贸易量（2023 年）**：**404 MT**（较 2022 +7 MT；**C4**，Shell LNG Outlook 2024 全文 PDF 在库 p.19/p.35）。美国 2023 年成为最大出口国（**86 MT**，C4 同源）；欧洲 2023 年进口 **>120 MT**（C4 同源）；中国重回最大进口国（需求 +8%，C4 同源）。\n- **全球 LNG 贸易额（2022 年高价格年）**：约 $4000–5000 亿（C3 行业口径；约 380 MT × $25–30/MMBtu 现货均价折算，C2 推算混合）。\n- **全球 LNG 贸易额（2023 年，价格回落后）**：约 $2500–3500 亿（C2 推算，404 MT × $12–15/MMBtu）。\n\n~~原缺口（Shell LNG Outlook / EIA 出口数据）~~ **已补（2026-07-08 典藏交付）**：Shell LNG Outlook 2024 全文 36 页 + EIA 美国 LNG 年度出口官方历史表（MMcf，至 2025）均在 `wiki/reading-workbench/en-lng-primary/downloads/`。IGU World LNG Report 不再必要。",
    "cLevels": [
     "C4",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **CR3（澳大利亚+卡塔尔+美国，按出口量）**：约 57–60%（C3，2023）\n- **CR1（任一单国，最高为澳大利亚或卡塔尔）**：约 19–20%（C3）\n- **HHI**：约 1000–1200（C2 推算，基于六大出口国份额），属于「有集中度但非单点」结构，和原油类似但集中度稍高\n- **Price maker**：无单一 price maker；JKM/TTF 现货价格由市场驱动；卡塔尔通过长约谈判有一定价格影响力，但无法像沙特对原油那样单边决定基准价",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 参考营收（亿美元）| 利润特征 | 市值（参考）| 来源 |\n|---|---|---|---|---|\n| Qatar Energy（QatarGas）| 国有，不公开财报 | 生产成本极低（North Field，C2 推算）| 不上市 | C2 估算 |\n| Cheniere Energy（LNG.NYSE）| **FY2023 $20,394M / FY2022 $33,428M / FY2021 $15,864M（C4，10-K 逐字在库）**——FY2022 明显高于前后年份，欧洲危机年的价格上涨直接反映在收入上 | 收取液化服务费 + 商品价差；总液化产能约 45 mtpa（Sabine Pass ~30 + Corpus Christi ~15，Stage 3 在建 >10，C4）；2016-02 至 2024-02 累计约 3,280 船 / >225M 吨 / 39 国 | 约 $300–400 亿（2023，C3）| C4，10-K FY2023 在库（2026-07-04 自取）|\n| Woodside Energy（WDS.NYSE）| FY2023 约 $65 亿（C3；**年报全本 220 页 PDF 已在库**，精确数字待抽，升 C4 只差抽数）| 净利率约 20–25%（C3 估算）| 约 $300–350 亿（2023，C3）| 年报在库：`downloads/woodside-2023-annual-report.pdf` |\n| TotalEnergies（LNG 业务）| 全公司 FY2023 约 $2190 亿（C3）| LNG 业务是其最大利润来源之一，占全公司约 20–30%（C2 估算）| 约 $1400 亿 | C3，需年报 LNG 业务拆分 |\n| Shell（LNG 贸易 + 权益）| 全公司 FY2023 约 $3160 亿（C3）| 综合能源业，LNG 贡献大 | 约 $2300 亿 | C3 |\n\n~~原缺口（Cheniere 10-K + Woodside 年报）~~ **已补**：Cheniere FY2023 10-K（2026-07-04 自取，C4 逐字已回填上表）；Woodside FY2023 年报全本（2026-07-08 典藏交付，在库待抽数）。",
    "cLevels": [
     "C2",
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **欧洲天然气对俄罗斯管道气的依赖（2021 年，断供前）**：约 150 BCM/年，占欧洲天然气总需求约 40–45%（C3，IEA/Eurogas）。这是历史上 LNG 依赖替换的最大单次量化事件基准。\n- **日本电力对 LNG 的依赖**：天然气发电占日本总发电量约 33%（2022，C3 IEA）；断供等于直接打约 1/3 的发电量。\n- **欧洲化肥产业对天然气的依赖**：化肥生产中天然气成本占比约 70–80%（C3 行业估算）；2022 年天然气涨价后欧洲化肥产能关停约 40–50%（C3，Fertilizers Europe 数据，待核原文）。",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "**实证案例——欧洲 2022–2023 年**：\n- 额外能源支出：约 €1–2 万亿（2022–2023 两年，相比基准能源账单，C2，IMF/EC 估算范围大，待核原文）\n- 欧洲工业天然气需求削减：约 15–20%（含关停产能和需求管理，C3 IEA Gas Market Report 2023）\n- 德国制造业 GDP 冲击：约 -1–2%（2022，C2，各方估算分歧大，需 IMF/Bundesbank 原文）\n\n**历史数量级参照（1973 石油危机）**：5% 供给减少引发油价约 4 倍上涨，美国 GDP 约 -2.1%（C3）。LNG 类比：欧洲约 -40% 管道气相当于远比 5% 更大的冲击，但欧洲通过需求削减+进口替代平缓了曲线，GDP 冲击实际小于预期——印证了「能买到价格」的替代路径（有钱的情况下）。\n\n~~原缺口第一项（IEA Gas Market Report 2024）~~ **已补（2026-07-08 典藏交付）**：IEA Gas Market Report Q1-2024 全文 87 页 PDF 在库（此前\"动态 JS 无法取\"判断有误——数据工具才是 JS，报告本体是免费 PDF）；欧洲进口对比与需求削减的精确数字待从报告抽出后替换上面 C3 口径。仍缺：IMF 欧洲能源危机经济成本报告；德国制造业天然气断供成本的精确来源。",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "**正常市场（价格适中）**：液化端（上游 + 液化费）利润最厚，尤其是有资源优势的卡塔尔（几乎零勘探成本 + 大规模液化）；运输端（LNG 船租金）按市场，供需紧张时暴利；再气化端（接收站）通常是监管收费或长约固定容量费，利润稳定较薄。\n\n**2022 年极端行情**：LNG 价格飙升时，利润高度集中在液化产能持有者（卡塔尔 Energy/Cheniere）和可购入低价现货转售的中间商。拥有「免费目的地」合同的美国 LNG 货物成为全球最高价值商品，中间交易商获取了大量价差（C3，路透/Bloomberg 报道）。\n\n**政治压力谁先付**：供气紧张时，再气化端下游（欧洲电力/取暖用户）最先感受到价格冲击，通过电价和能源账单传导到政治层面——这是 2022 年欧洲各国政府大规模补贴能源账单的原因（德国约 €2000 亿能源补贴包，C3）。上游（卡塔尔/澳大利亚）反而是最大获益方。\n\n---",
    "cLevels": [
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "全球 LNG 贸易量约 400 MT（2023）",
    "level": "C3",
    "source": "Shell LNG Outlook / IGU 年报口径"
   },
   {
    "item": "卡塔尔出口约 77–80 MT（2023）",
    "level": "C3",
    "source": "行业广泛报道，需 Qatar Energy 官方数据核"
   },
   {
    "item": "澳大利亚出口约 80–82 MT（2023）",
    "level": "C3",
    "source": "行业口径，需澳大利亚能源统计核"
   },
   {
    "item": "美国出口约 75–80 MT（2023）",
    "level": "C3",
    "source": "DOE EIA LNG 月报"
   },
   {
    "item": "CR3（澳/卡/美）约 57–60%",
    "level": "C3",
    "source": "基于上三项推算"
   },
   {
    "item": "TTF 2022 年 8 月峰值约 €342/MWh",
    "level": "C3",
    "source": "广泛报道，需 ICE/LSEG 数据"
   },
   {
    "item": "欧洲 2023 年 LNG 进口约 120 MT",
    "level": "C3",
    "source": "行业口径（Kpler/ICIS 等），需统计核"
   },
   {
    "item": "欧洲天然气需求削减约 15–20%（2022–2023）",
    "level": "C3",
    "source": "IEA Gas Market Report"
   },
   {
    "item": "GTT 薄膜型 LNG 舱设计份额约 90%+（见 sh-lng-carrier）",
    "level": "C3",
    "source": "行业口径"
   },
   {
    "item": "欧洲约 40% 家庭以天然气取暖",
    "level": "C3",
    "source": "Eurostat 口径"
   },
   {
    "item": "DOE 对非 FTA 国家 LNG 出口需公共利益认定",
    "level": "C4",
    "source": "《天然气法》Section 3，联邦法规"
   },
   {
    "item": "欧洲化肥厂 2022 年关停产能约 40–50%",
    "level": "C3",
    "source": "Fertilizers Europe 报道"
   },
   {
    "item": "卡塔尔 North Field 扩产至约 126 MT by ~2027",
    "level": "C3",
    "source": "Qatar Energy 公告（C3）"
   },
   {
    "item": "全球 LNG 贸易额 2022 年约 $4000–5000 亿",
    "level": "C2–C3",
    "source": "价格 × 量推算"
   },
   {
    "item": "2022-03 拜登承诺向欧洲供 50 BCM/年 LNG",
    "level": "C3",
    "source": "白宫声明广泛报道"
   },
   {
    "item": "EU Regulation 2022/1369 天然气需求削减法规（Art 3/4/5 + TFEU 122(1)）",
    "level": "C4",
    "source": "Cellar 官方 PDF 逐字在库（2026-07-04 自取）"
   },
   {
    "item": "欧洲额外能源支出约 €1–2 万亿（2022–2023）",
    "level": "C2",
    "source": "IMF/EC 估算，范围大分歧大"
   }
  ],
  "contested": {
   "title": "欧洲 2022 年史上最大规模 LNG 替代行动（俄管道气 → LNG）",
   "summary": "2022 年 2 月 24 日俄乌战争爆发后，Gazprom 在 2022 年 6–9 月间逐步削减直至完全停止经 Nord Stream 1 向欧洲输气，欧洲随即启动史上规模最大的能源结构急速替换——把约占总供给 40–45% 的俄管道气，在约 12–18 个月内改由 LNG（主要来自美国/卡塔尔）替代，同时压缩约 15% 的总需求。这是 en-lng 节点有史以来唯一经历的大规模 operational fallback 真实压力测试。"
  },
  "gaps": [
   "1. ~~IEA Gas Market Report 2024~~ **已到库（2026-07-08 典藏交付，Q1-2024 全文 87 页 PDF）**——欧洲进口对比/需求削减精确数字待抽出后替换正文 C3 口径（在库待抽，不再是取料缺口）。",
   "2. ~~Shell LNG Outlook 2024~~ **已补（C4）**：404 MT / 美国 86 MT / 欧洲 >120 MT 已回填 Q1。",
   "3. ~~Cheniere FY2023 10-K~~ **已补（2026-07-04 自取，C4）**：FY2021–2023 营收、45 mtpa 产能、累计出货已回填 Q3。",
   "4. ~~DOE/FE LNG 出口授权数据库~~ **已补（2026-07-08 典藏交付，C4）**：DOE/FECM 出口授权汇总 PDF（16 页，截至 2026-06-17，FTA/非 FTA 各终端授权量表）在库——「DOE 作为政治工具」的制度证据落地。",
   "5. ~~EU Regulation 2022/1369~~ **已补（2026-07-04 自取，C4）**：Art 3/4/5 + TFEU 122(1) 已回填政治传动层。",
   "6. ~~QatarEnergy 官方扩产声明~~ **已补（2026-07-08 典藏交付，C4-）**：NFW 142 MTPA 官方新闻稿逐字要素经 PR Newswire 官方分发取得（qatarenergy.qa 本体对自动化 403）；扩产路线 77→110（NFE）→126（NFS）→142（NFW，2030）。",
   "7. 【缺口：欧洲 FSRU 部署清单（2022–2024，Bruegel/IEA/ENTSOG 数据）】——fallback operational 判断中「FSRU 快速部署」的具体量，现为约 8–10 艘估算，需逐艘核；IEA GMR Q1-2024 在库，可先查其中是否有 FSRU 清单再决定是否补投。",
   "8. 【缺口（在库待抽，非取料）：Woodside FY2023 年报精确营收/LNG 产量；IEA GMR Q1-2024 欧洲进口与削减数字；EIA 年度出口表折 MT 口径】——三件原文都在库，差的是抽数回填。"
  ]
 },
 "en-narr": {
  "sourceFile": "en-narr.md",
  "archiveId": "en-narr",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "这个节点也是一套说法，不是一条管道。\"能源安全\"\"能源独立\"这些词，从 1970 年代的石油危机起就成了各国政府的常用政治语言。它的作用是给一批能源政策提供理由：为什么要建战略石油储备、为什么要修某条绕开对手的管道、为什么要对某个产油国实施制裁、为什么要补贴本国的油气或可再生能源。谁依赖它？主要是想推动这些政策的政府，以及能从中获益的能源企业和承包商。它是不是卡点？它本身不切断任何一桶油、一方气，但它决定一个国家愿不愿意花巨资去建储备、去改道、去承受制裁的反噬。它属于政治栈人心那一层：一套几乎不能被公开反对的说法（谁会说自己不要\"安全\"？），让昂贵甚至低效的能源政策变得顺理成章。\n\n---",
  "holders": [
   {
    "entity": "美国政府（历任政府）",
    "role": "\"能源独立\"叙事最早、最持续的生产者",
    "scale": "Nixon 于 1973-11-07 提出\"独立计划\"（Project Independence），目标 1980 年能源自给（C2，美国能源部/史料转引）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "美国国会",
    "role": "把叙事写进立法，建立储备制度",
    "scale": "1975《能源政策与节约法》设立战略石油储备（SPR）（C2，能源部转引）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "欧盟委员会及成员国政府",
    "role": "俄乌冲突后\"降低对俄能源依赖\"叙事的主要生产者",
    "scale": "REPowerEU 等（具体文件待研究）",
    "jurisdiction": "欧盟",
    "group": null
   },
   {
    "entity": "产油国（OPEC/俄/沙特等）",
    "role": "反向\"能源主权\"叙事，为国有化、减产、断供背书",
    "scale": "依据主权与资源国有化惯例；具体待研究",
    "jurisdiction": "各法域",
    "group": null
   },
   {
    "entity": "能源企业与行业智库",
    "role": "加工与放大叙事，为具体项目论证",
    "scale": "待研究",
    "jurisdiction": "多法域",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": null,
   "unstructured": false,
   "text": "总判：仍在运营"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "叙事本身没有市场规模。可间接观察的是它背书的资金流：各国战略储备的规模与建设成本、能源补贴总额、制裁造成的贸易改道成本。具体数字待研究（草图未覆盖）。",
    "cLevels": []
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "可量化的行使记录：动用战略石油储备的历史次数、以\"能源安全/国家安全\"为据的能源制裁清单条目数、以能源安全为由否决的外资并购或管道项目数量。精确数字待研究（草图未覆盖）。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "Nixon 1973-11-07 提出\"独立计划\"，目标 1980 能源自给",
    "level": "C2",
    "source": "美国能源部/史料转引"
   },
   {
    "item": "1975《能源政策与节约法》设立战略石油储备",
    "level": "C2",
    "source": "美国能源部转引"
   },
   {
    "item": "\"能源独立\"成为半个世纪的持续政治语言",
    "level": "C2",
    "source": "多方史料/报道"
   },
   {
    "item": "2022 俄乌冲突后欧盟以\"能源安全\"推动对俄脱钩",
    "level": "C2",
    "source": "多方报道 [待核实]"
   },
   {
    "item": "产油国有反向\"能源主权\"叙事",
    "level": "C1",
    "source": "综合判断，待补一手文件"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "叙事被写进官方语言的一个奠基节点：Nixon 于 1973-11-07 提出\"独立计划\"（Project Independence），回应当年 10 月的 OAPEC 石油禁运，目标 1980 年前能源自给；随后 1975 年美国国会以《能源政策与节约法》设立战略石油储备（C2，美国能源部/史料转引）。这套\"能源独立\"语言此后被几乎每任美国总统重复，成为长期政治语言。更近的一次大规模争夺是 2022 年俄乌冲突后，欧盟以\"降低对俄能源依赖/能源安全\"为据推动脱钩，而俄以\"能源主权/反对制裁\"反向争夺（C2，多方报道；具体文件待研究 [待核实]）。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. Nixon 1973-11-07\"独立计划\"讲话原文与后续行政文件。",
   "2. 1975《能源政策与节约法》（EPCA）原文中战略石油储备条款。",
   "3. 欧盟 REPowerEU（2022）等文件原文，核对\"能源安全/降低对俄依赖\"用词。",
   "4. 历任美国总统国情咨文中\"能源独立/能源安全\"用语的时间序列（可做词频统计）。",
   "5. 以\"能源安全/国家安全\"为据的制裁行政令原文（如针对俄、伊朗、委内瑞拉）。",
   "6. 产油国（俄、沙特、委内瑞拉）\"能源主权/资源国有化\"官方表述一手件。",
   "7. 战略石油储备历次动用的官方记录与规模数据（IEA/能源部）。"
  ]
 },
 "en-refinery": {
  "sourceFile": "en-refinery.md",
  "archiveId": "en-refinery",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "原油从地下抽出来还不能直接用。要变成汽油、柴油、航空煤油、化工原料，中间必须经过炼厂。炼厂就是这道加工环节：把一桶黑色的原油拆分、转化成各种成品油。谁依赖它？所有烧油的国家。一个国家哪怕自己产原油，如果没有足够的炼油能力，照样得进口成品油——原油和成品油是两个不同的市场。为什么它可能是卡点？因为原油便宜、成品油贵，加工能力集中在少数国家手里，而且一座复杂炼厂要造五到十年、几十亿美元，短期内谁也变不出来。但要说清楚：炼油产能全球总量并不短缺，甚至过剩，所以它更像一个\"结构性瓶颈\"而非\"随时能掐断的开关\"——真正的卡点在特定油种、特定成品、特定地区的错配上。\n\n---",
  "holders": [
   {
    "entity": "中石化 Sinopec",
    "role": "全球最大炼油企业之一",
    "scale": "原油加工能力约 517 万桶/日（FY2023，C2，Statista 转引）",
    "jurisdiction": "中国（中国国资委法域）",
    "group": null
   },
   {
    "entity": "埃克森美孚 ExxonMobil",
    "role": "美国最大炼油商，全球布局",
    "scale": "全球炼油能力约 446–500 万桶/日（C2，Statista / 行业转引）",
    "jurisdiction": "美国（EAR/OFAC 法域）",
    "group": null
   },
   {
    "entity": "中石油 CNPC",
    "role": "中国另一炼油巨头",
    "scale": "中国境内炼油能力 400 万桶/日以上（C2，行业转引）",
    "jurisdiction": "中国",
    "group": null
   },
   {
    "entity": "信实 Reliance（Jamnagar）",
    "role": "全球最大单体炼油复合体、最复杂",
    "scale": "单厂约 124–140 万桶/日，复杂度约 21.1（C2，媒体转引）",
    "jurisdiction": "印度（印度法域）",
    "group": null
   },
   {
    "entity": "沙特阿美 Saudi Aramco",
    "role": "大型一体化炼油商（含合资）",
    "scale": "具体 2024 产能待研究",
    "jurisdiction": "沙特（沙特主权）",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "成本增加",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：成本增加**"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球炼油总产能约 1.035 亿桶/日（2023，C2，Statista 转引）。中美各约占 18%（2024，C2，EIA / Statista 转引）。全球成品油市场规模（营收）待研究（草图未覆盖）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 国别 CR2（中国+美国）：约 36%（2024，C2，EIA / Statista 转引）\n- 国别 CR5（中、美、俄、印、韩）：约 50%（C2，同上）\n- 企业层面 CR：中石化单企约 517 万桶/日、埃克森美孚约 446 万桶/日（C2，Statista 转引）；企业口径全球 CR 精确排名待研究。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "全球炼油产能约 1.035 亿桶/日（2023）",
    "level": "C2",
    "source": "Statista 转引"
   },
   {
    "item": "中美各约占 18% 产能（2024）",
    "level": "C2",
    "source": "EIA / Statista 转引"
   },
   {
    "item": "中石化约 517 万桶/日（FY2023）",
    "level": "C2",
    "source": "Statista 转引"
   },
   {
    "item": "埃克森美孚约 446–500 万桶/日",
    "level": "C2",
    "source": "Statista / 行业转引"
   },
   {
    "item": "Jamnagar 复杂度约 21.1、单厂约 124–140 万桶/日",
    "level": "C2",
    "source": "媒体转引（Business Standard 等）"
   },
   {
    "item": "美国炼厂平均复杂度约 9.5、欧洲约 6.5",
    "level": "C2",
    "source": "Wikipedia / 行业转引"
   },
   {
    "item": "OFAC 2025 起制裁中国茶壶炼厂",
    "level": "C2",
    "source": "美国财政部新闻稿转引"
   },
   {
    "item": "复杂炼厂重建需 5–10 年、数十亿美元",
    "level": "C1",
    "source": "常识性判断，待核实"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "2025 年起，美国 OFAC 对中国山东多家独立\"茶壶炼厂\"（如山东寿光鲁清石化、恒力石化大连厂等）实施制裁，理由是它们大量加工进口的伊朗原油、为伊朗政权输血（C2，美国财政部新闻稿转引）。这是炼厂加工能力被直接政治化、成为制裁靶点的实例——争夺的不是炼油技术，而是\"这些炼厂愿不愿意、敢不敢继续吃被制裁的折价原油\"。此事件属于 en-sanction 与 en-refinery 的交叉点。"
  },
  "gaps": [
   "1. EIA 或 OPEC《世界石油展望》里各国炼油产能的精确年度数字。",
   "2. 企业口径全球炼油能力排名（含沙特阿美、印度信实精确产能）一手来源。",
   "3. 尼尔森复杂度指数的权威数据集（各主要炼厂逐座），核实 Jamnagar 21.1 与美欧均值。",
   "4. 全球复杂炼厂（带深度转化装置）的分布清单——这才是真正的卡点所在。",
   "5. 新建一座复杂炼厂的实际造价与工期案例（近十年新厂）。",
   "6. 欧洲炼厂关停趋势与对进口成品油的依赖度数据。",
   "7. 中国、印度炼厂加工被制裁折价原油的实际数量（贸易数据）。"
  ]
 },
 "en-reserve": {
  "sourceFile": "en-reserve.md",
  "archiveId": "en-reserve",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "战略石油储备是一个国家提前囤起来的一大批原油和成品油，平时封存不动，只在供应被切断时才放出来，用来撑过危机、平抑油价冲击。谁依赖它？几乎所有进口石油的大国——它是\"石油武器\"打过来时的缓冲垫。为什么它既是卡点又不是卡点？说它是缓冲：储备能决定一个国家在断供后\"能挺多少天\"，谁挺得久谁在博弈里更有底气。说它不是传统卡点：它不是一条能被别人掐断的管道，而是一个国家自己手里的存量——真正的控制点在于\"谁有权决定放不放、放多少\"，以及国际协调机制（IEA）能不能让多个储备一起放、形成合力。\n\n---",
  "holders": [
   {
    "entity": "美国 SPR（能源部管理）",
    "role": "政府战略储备，总统决定释放",
    "scale": "容量 7.14 亿桶；2025 年末库存约 4.11 亿桶（C2，EIA / 能源部转引）",
    "jurisdiction": "美国（《能源政策与保护法》EPCA 授权）",
    "group": null
   },
   {
    "entity": "中国（国家储备＋国企库存）",
    "role": "全球最大合计原油储备",
    "scale": "合计约 14 亿桶（2025-12，C2，EIA 转引）",
    "jurisdiction": "中国（国家能源局/国资体系）",
    "group": null
   },
   {
    "entity": "日本",
    "role": "IEA 成员，主要持有国",
    "scale": "待研究",
    "jurisdiction": "日本",
    "group": null
   },
   {
    "entity": "IEA（国际能源署）",
    "role": "协调机制，非持有方",
    "scale": "成员国义务 90 天净进口（C2，IEA 转引）",
    "jurisdiction": "OECD 政府间机构（协调权，非主权）",
    "group": null
   },
   {
    "entity": "德国/法国/意大利等 IEA 成员",
    "role": "各自持义务储备",
    "scale": "各约≥90 天净进口（C2，IEA 转引）",
    "jurisdiction": "各国主权",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：部分可行**"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "不是市场规模型节点。可量化的是储备存量与覆盖天数：美国 SPR 容量 7.14 亿桶、2025 年末约 4.11 亿桶（C2，EIA 转引）；中国合计约 14 亿桶（C2，EIA 转引）；IEA 义务 90 天净进口（C2，IEA 转引）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 全球战略库存 CR3（中国、美国、日本）：三国持有全球最多（2025，C2，EIA 转引），精确百分比待研究。\n- 中国进口覆盖：估约 121–130 天（C2，EIA / 媒体转引）。\n- 美国 SPR 占容量比例：2025-03 约 55%（3.95 亿/7.14 亿，C2，EIA 转引）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "IEA 义务=不低于 90 天净进口",
    "level": "C2",
    "source": "IEA 转引"
   },
   {
    "item": "净出口成员豁免（含美、加、挪威等）",
    "level": "C2",
    "source": "IEA 转引"
   },
   {
    "item": "美国 SPR 容量 7.14 亿桶",
    "level": "C2",
    "source": "美国能源部 / EIA 转引"
   },
   {
    "item": "美国 SPR 2025 年末约 4.11 亿桶",
    "level": "C2",
    "source": "EIA 转引"
   },
   {
    "item": "中国合计约 14 亿桶储备（2025-12）",
    "level": "C2",
    "source": "EIA 转引"
   },
   {
    "item": "中国覆盖约 121–130 天进口",
    "level": "C2",
    "source": "EIA / 媒体转引"
   },
   {
    "item": "中、美、日持有全球最多战略库存",
    "level": "C2",
    "source": "EIA 转引"
   },
   {
    "item": "美国 SPR 释放权在总统（EPCA）",
    "level": "C2",
    "source": "能源部 / EPCA 转引"
   },
   {
    "item": "2026-03 美国释放约 1.72 亿桶/120 天",
    "level": "C2",
    "source": "EIA / 能源部转引"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "2026 年 3 月，美国能源部长宣布因美国打击伊朗、油价上升，从 SPR 释放约 1.72 亿桶、历时约 120 天（C2，EIA / 能源部转引）。这是储备被当作对冲地缘冲击、平抑油价的工具的近期实例——决定权在行政当局，动用理由是应对供应中断预期。此事件同时暴露储备的\"存量有限\"约束：大规模释放后补库要花数年。"
  },
  "gaps": [
   "1. IEA 各成员国实际持有天数的最新逐国数据（IEA 官方数据工具）。",
   "2. EPCA 关于总统释放权的法条原文（认定\"严重能源供应中断\"的具体条件）。",
   "3. 中国战略储备的官方口径（中国基本不公开，需拼贸易/卫星库存估算）。",
   "4. 日本、韩国、印度等主要亚洲进口国的储备规模与决定机制。",
   "5. IEA 历史上协调释放的完整记录与效果评估。",
   "6. 各国储备的物理抽取速率上限（决定\"能多快放出来\"的硬约束）。",
   "7. 中国储备中政府储备与商业库存的划分及各自释放权归属。"
  ]
 },
 "en-sanction": {
  "sourceFile": "en-sanction.md",
  "archiveId": "en-sanction",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "能源制裁不是一件实物，而是一种政治控制力：一方（主要是美国和 G7）用法律和金融手段，去限制另一方（俄罗斯、伊朗、委内瑞拉）卖石油、收石油钱。它作用在技术栈的哪里？不直接掐油田或油轮，而是卡\"服务层\"——保险、清算、金融、船舶注册这些让石油能被卖出去、钱能收回来的环节。谁依赖它、谁被它约束？被制裁的产油国要靠规避手段（影子船队、非美元结算、折价卖给中印）才能继续出口。为什么它是一个特殊的卡点：它控制的不是货物本身，而是货物流动所依赖的服务默认条件——这正是领域核里说的\"价格上限之所以有效，在于它控制的是服务层而非货物本身\"。而它的失效方式也清楚：只要被制裁方能搭出一整套跳出 G7 法域的闭环（自己的船、自己的保险、自己的买家），制裁就漏了。\n\n---",
  "holders": [
   {
    "entity": "美国财政部 OFAC",
    "role": "主制裁执行方，SDN 名单",
    "scale": "依据：IEEPA 等美国法律；一级+二级制裁",
    "jurisdiction": "美国（美元清算＋长臂管辖）",
    "group": null
   },
   {
    "entity": "G7 价格上限联盟",
    "role": "设定并维护油价上限",
    "scale": "依据：2022-12 起 60 美元/桶上限（C2，欧盟/Wikipedia 转引）",
    "jurisdiction": "G7＋欧盟＋澳（联盟协调）",
    "group": null
   },
   {
    "entity": "欧盟",
    "role": "石油禁运＋价格上限＋制裁包",
    "scale": "依据：历次制裁包（如第 16 包扩列影子船队船只，C2，媒体转引）",
    "jurisdiction": "欧盟（成员国主权）",
    "group": null
   },
   {
    "entity": "美国国务院",
    "role": "对伊朗石油交易方追加制裁",
    "scale": "依据：伊朗制裁项目",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "西方保险/再保险市场（劳合社等）",
    "role": "合规验证方（价格上限靠它核查）",
    "scale": "依据：为合规航次提供承保",
    "jurisdiction": "英国/欧盟（商业＋合规）",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "成本增加",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：成本增加**"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模（可量化的行使记录）",
    "text": "- G7 价格上限：60 美元/桶（2022-12 起，C2，Wikipedia/欧盟转引；后有下调至更低水平的讨论）。\n- 规避规模：2024 年某统计期内，不合规航次运输约 1.65 亿桶原油、累计价值约 95 亿美元，占出口价值约 63%；合规船运约 9800 万桶、55 亿美元（C2，媒体/研究转引）。\n- OFAC 制裁：2025 年起对多家中国茶壶炼厂、以及大量船只、front company 实施制裁（C2，美国财政部新闻稿转引）；累计条目数待研究。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化（可量化的行使记录）",
    "text": "- 影子船队规模：估约 600–800 艘（2025，C2，S&P Global / 媒体转引，口径差异大，从约 591 艘到超 1300 艘不等）。\n- 影子船队运量：估约每日 370 万桶，约占俄罗斯海运石油贸易的 65%（C2，媒体转引）。\n- 中国购买伊朗石油出口的约 90%，其中茶壶炼厂占多数（C2，美国财政部转引）。\n- 被至少一个制裁体系列名的油轮：2026 年初约 623 艘，其中约 111 艘仍在装运俄油（C2，媒体转引）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "G7 价格上限 60 美元/桶（2022-12 起）",
    "level": "C2",
    "source": "Wikipedia / 欧盟转引"
   },
   {
    "item": "2024-10 约 62% 俄油由影子船队运",
    "level": "C2",
    "source": "Vox Ukraine 转引"
   },
   {
    "item": "影子船队约 600–800 艘（口径差异大）",
    "level": "C2",
    "source": "S&P Global / 媒体转引"
   },
   {
    "item": "影子船队约每日 370 万桶、占俄海运油 65%",
    "level": "C2",
    "source": "媒体转引"
   },
   {
    "item": "中国买走伊朗石油出口约 90%",
    "level": "C2",
    "source": "美国财政部转引"
   },
   {
    "item": "2025 起 OFAC 制裁中国茶壶炼厂",
    "level": "C2",
    "source": "美国财政部新闻稿转引"
   },
   {
    "item": "欧盟第 16 制裁包扩列影子船队船只",
    "level": "C2",
    "source": "媒体转引"
   },
   {
    "item": "约 623 艘油轮被列名、约 111 艘仍装俄油（2026 初）",
    "level": "C2",
    "source": "媒体转引"
   },
   {
    "item": "价格上限靠西方保险合规验证",
    "level": "C2",
    "source": "欧盟 / 研究转引"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "2025 年美国 OFAC 对中国茶壶炼厂（如恒力石化大连厂、山东多家）实施制裁，因其大量加工进口伊朗原油（中国买走伊朗出口约 90%）；欧盟同期通过第 16 制裁包，扩列大批疑似影子船队油轮（C2，美国财政部/欧盟/媒体转引）。这是能源制裁被公开争夺的实例：G7 一侧不断扩列船只、追加二级制裁，被制裁方一侧不断扩大影子船队、换买家、改结算——双方在\"服务层能不能被绕开\"这条线上反复角力。本节点已被现实反复检验，但规避手段变化快，具体数字时效性强。"
  },
  "gaps": [
   "1. G7 价格上限的官方指导原文（Price Cap Coalition guidance）及历次调整。",
   "2. OFAC 能源相关 SDN 名单条目的完整统计（船只、炼厂、front company 逐条）。",
   "3. IEEPA 与伊朗/俄罗斯制裁行政令原文，理清二级制裁的法律依据。",
   "4. 影子船队规模的权威口径（各机构差异极大，需交叉核对 S&P、KSE、Windward 等）。",
   "5. 俄罗斯乌拉尔油与布伦特价差的时间序列（衡量价格上限实际效果）。",
   "6. 中国、印度进口被制裁原油的海关/贸易数据。",
   "7. 非西方保险与人民币结算在俄油贸易中的实际占比。",
   "8. 委内瑞拉制裁（含雪佛龙许可证等）的最新状态，本草图未覆盖。"
  ]
 },
 "en-tanker": {
  "sourceFile": "en-tanker.md",
  "archiveId": "en-tanker",
  "established": "2026-06-24",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "霍尔木兹",
    "role": "伊朗（北岸大陆架）/ 阿曼",
    "scale": null,
    "jurisdiction": "伊朗法域（国际法争议）",
    "group": "地理通道持有者"
   },
   {
    "entity": "苏伊士运河",
    "role": "埃及苏伊士运河管理局",
    "scale": null,
    "jurisdiction": "埃及法域",
    "group": "地理通道持有者"
   },
   {
    "entity": "曼德海峡",
    "role": "胡塞武装（控制也门海岸）/ 吉布提 / 厄立特里亚",
    "scale": null,
    "jurisdiction": "实际控制=无国际认可的主权法域",
    "group": "地理通道持有者"
   },
   {
    "entity": "马六甲",
    "role": "新加坡 / 马来西亚 / 印尼",
    "scale": null,
    "jurisdiction": "三国联合海上安全框架",
    "group": "地理通道持有者"
   },
   {
    "entity": "IG P&I 13 家俱乐部（合体）",
    "role": "非营利互保协会联合体",
    "scale": null,
    "jurisdiction": "英国 / 挪威 / 瑞典为主",
    "group": "机构服务持有者（真正的制度卡点）"
   },
   {
    "entity": "Lloyd's Register",
    "role": "船级社",
    "scale": null,
    "jurisdiction": "伦敦 / 英国法域",
    "group": "机构服务持有者（真正的制度卡点）"
   },
   {
    "entity": "DNV（挪威船级社）",
    "role": "船级社",
    "scale": null,
    "jurisdiction": "奥斯陆 / 挪威法域",
    "group": "机构服务持有者（真正的制度卡点）"
   },
   {
    "entity": "Bureau Veritas",
    "role": "船级社",
    "scale": null,
    "jurisdiction": "巴黎 / 法国法域（EU）",
    "group": "机构服务持有者（真正的制度卡点）"
   },
   {
    "entity": "ABS",
    "role": "船级社",
    "scale": null,
    "jurisdiction": "休斯顿 / 美国法域",
    "group": "机构服务持有者（真正的制度卡点）"
   },
   {
    "entity": "ClassNK",
    "role": "船级社",
    "scale": null,
    "jurisdiction": "东京 / 日本法域",
    "group": "机构服务持有者（真正的制度卡点）"
   },
   {
    "entity": "Frontline（含并购后 Euronav 船队部分）",
    "role": "VLCC 为主",
    "scale": "并购后约 90+ VLCC（C3）",
    "jurisdiction": "汉密尔顿（百慕大）/ 实际运营挪威",
    "group": "油轮运营商（分散，无单点意义，量化层填财务）"
   },
   {
    "entity": "International Seaways",
    "role": "VLCC + Suezmax",
    "scale": "约 70 艘（C3）",
    "jurisdiction": "纽约",
    "group": "油轮运营商（分散，无单点意义，量化层填财务）"
   },
   {
    "entity": "DHT Holdings",
    "role": "VLCC",
    "scale": "约 27 VLCC（C3）",
    "jurisdiction": "汉密尔顿",
    "group": "油轮运营商（分散，无单点意义，量化层填财务）"
   },
   {
    "entity": "Teekay Tankers",
    "role": "Suezmax + Aframax",
    "scale": "约 50 艘（C3）",
    "jurisdiction": "汉密尔顿",
    "group": "油轮运营商（分散，无单点意义，量化层填财务）"
   },
   {
    "entity": "COSCO Shipping Tanker",
    "role": "VLCC + Suezmax",
    "scale": "中国最大，约 60+ 艘（C3）",
    "jurisdiction": "上海 / 中国法域",
    "group": "油轮运营商（分散，无单点意义，量化层填财务）"
   }
  ],
  "upstream": [
   "**造船（sh-shipbuilding 节点）**：油轮建造高度集中在韩国（HD HDEC/现代重工、韩华海洋/大宇、三星重工）和中国（COSCO 旗下船厂、沪东中华等）。新 VLCC 船价约 $1.2–1.4 亿（2023，C3）；交期约 2–3 年；产能几乎全部在东亚。这不是即时断供的卡点，但是油轮船队更新的长期子依赖。",
   "**船用燃油（VLSFO/MGO）**：低硫燃油（VLSFO，IMO 2020 规则后，硫含量 ≤0.5%）是油轮运营成本的 30–50%（C2 估算）。新加坡、鹿特丹、富查伊拉是全球三大船用油加注中心，这三处码头的稳定是油轮运营的基础设施子依赖。",
   "**P&I 保险再保险链**：IG P&I 13 家俱乐部通过一套称为「Pool 再保险」的机制互相分保大额赔案（单笔超过约 $1000 万的赔案进入 Pool 分担）。Pool 之上还通过伦敦市场（Lloyd's of London）购买超额赔付保险（Hydra 再保险公司）。这意味着 IG P&I 的整个链条深植于伦敦金融市场，OFAC/FCA 制裁可以在这个链条多个节点切入。",
   "**船舶融资（银行）**：新船融资主要来自德意志银行（船舶金融部门）、荷兰 ABN AMRO、韩国政策性银行（KEXIM）等，受西方法域约束，制裁对象无法获得主流融资。"
  ],
  "downstream": [
   "**亚洲炼厂（最大下游，高依赖）**：中国、印度、日本、韩国合计进口约 25–28 mb/d（C3，IEA/EIA 口径）。亚洲买家严重依赖霍尔木兹（波斯湾输出）和马六甲海峡（进入东亚）。中国约 70% 的原油进口须经过马六甲（C3），这是中国自己提出的「马六甲困境」的来源。",
   "**欧洲炼厂（历史依赖俄乌拉尔原油，高依赖曼德/苏伊士）**：2022 年前欧洲管道进口俄油，对油轮依赖较低；2022 年后转向中东/美洲海运，对苏伊士运河和曼德海峡的依赖大幅上升。",
   "**美国墨西哥湾沿岸炼厂（部分进口）**：美国仍进口约 7–8 mb/d 原油（C3），主要来自加拿大（管道）和中东/非洲（油轮），不经霍尔木兹直接到美国东海岸。",
   "下游库存缓冲：炼厂一般维持约 30–60 天在途+在库库存（C2），加上政府 SPR（战略石油储备，美国约 4 亿桶约合 20 天全国消费，2023 年释放大量后 C3），短期中断有一定缓冲。"
  ],
  "fallback": {
   "verdictZh": "路径受阻",
   "verdictRaw": "blocked",
   "unstructured": false,
   "text": "**霍尔木兹封锁**（最极端场景）：\n\n五问验证：\n1. 替代哪一层：约 20 mb/d 油流需要绕道或走管道\n2. 多久接上：沙特东西管道（约 4.8 mb/d，Yanbu，C4 Aramco 官方数据）和 UAE 富查伊拉管道（约 1.5 mb/d，C3）合计约 6–7 mb/d 可绕过霍尔木兹；剩余 13–14 mb/d（伊拉克/科威特/伊朗/卡塔尔出口）无任何地面替代路径\n3. 卡在哪个转换环节：沙特/UAE 管道产能是硬上限，无法用时间或金钱买通；伊拉克/科威特完全无替代；全球 SPR 动用（IEA 协调）约 1–2 亿桶可买 5–10 天缓冲\n4. 谁有权限启动：沙特政府（东西管道启动）；IEA 成员国（SPR 协调释放）\n5. 现场执行能力：沙特/UAE 管道平时在维护状态，部分已投入使用但非满负荷（C3）\n\n结论：**partial**（约 6–7 mb/d 的沙特/UAE 份额有 operational 绕道，剩余 13–14 mb/d 是 `blocked`）。整体：这是全图能源节点里 fallback 覆盖率最低的地理单点。\n\n**曼德海峡 / 红海封锁**（胡塞实证，2023-24）：\n\n五问验证：\n1. 替代哪一层：绕好望角（开普路线）\n2. 多久接上：好望角绕行立即可行，无需新建设施\n3. 卡在哪：多增加约 14 天航程（欧洲-波斯湾路线），船运成本增加约 50–100%（C3，Drewry/Clarksons 数据，待核）；全球可用船舶数有限，大量调配造成其他路线运力紧张\n4. 谁有权限启动：船东/运营商自行决定是否改道（商业决定，无集中管控）\n5. 现场执行能力：已有实证（2023-24 年 ~80% 集装箱船改道，油轮混合情况，C3）\n\n结论：**operational**（高成本条件下已被证明可执行），但对特定下游（印度次大陆，印度洋出口国）额外影响有限。\n\n**制度卡点：失去西方 P&I/船级**：\n\n五问验证：\n1. 替代哪一层：换用非 IG P&I（俄罗斯 RNAME、中国 P&I）和非 IACS 船级（RMRS）\n2. 多久接上：快，1–2 周内可换旗/换保险（行政手续层面，C3）\n3. 卡在哪：非 IG P&I 承保的船只无法停靠美国/EU 主要港口；无 IACS 认证的船只被部分亚洲港口拒绝；银行船舶融资仍需 IG P&I\n4. 谁有权限启动：船东自行决定（需愿意接受目的港限制）\n5. 现场执行能力：已有实证——2022 年后形成的阴影船队约 600–700 艘（C3）在没有 IG P&I 的情况下运营，目的港主要是印度和中国（这两个市场不强制要求 IG P&I）\n\n结论：**partial fallback 成立，但目的港限制严格**——非 IG P&I 船只可以送油到印度/中国，无法送油到欧洲/美国大多数港口。这意味着 G7 制度卡点对西方进口国有效，对中印无效。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **全球原油海运贸易量**：约 35–40 mb/d（2023，C3，约占全球产量约 36–41%，其余走管道或内部消化）\n- **全球原油海运贸易额**：约 $1.2–1.5 万亿/年（C2 推算，约 35 mb/d × 365 天 × 约 $85/bbl 均价 × 0.55 折算；不含产品油轮）\n- **全球原油油轮运费收入（货运市场）**：约 $40–60B/年（C2，根据 VLCC/Suezmax/Aframax 船队规模 × 运费率推算；2022 年运费暴涨年可能更高）\n\n【缺口：Clarksons Research 年度油轮市场报告（Clarkson PLC，年报或付费数据库）——全球运费收入的权威口径；BIMCO 油轮市场季度报告（bimco.org）】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **地理层 CR1（霍尔木兹，全球过境）**：约 20–21 mb/d，约 20% 全球石油产量（C4，EIA 官方数据）\n- **制度层 CR4（IG P&I 4 大俱乐部合计）**：约 55–65%（C2 推算，需 IG P&I 年度报告核分俱乐部承保吨位数）\n- **油轮运营商 CR4**：约 15–20%（C2 推算，市场极分散，无 price maker）\n- **Price maker 结构**：地理层 = 无市场 price maker（通过威胁影响保险溢价和运费）；制度层 = IG P&I 俱乐部联合体作为准 price maker（保费可以上调）；运费层 = VLCC 市场由多个希腊/挪威大型船东影响，无单一 price setter\n\n【缺口：IG P&I 年度报告（igpandi.org，承保吨位分俱乐部数据）】",
    "cLevels": [
     "C4",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "**油轮运营商**\n\n| 公司 | 代码 | FY2023 参考营收 | 利润特征 | 市值（2023 年）|\n|---|---|---|---|---|\n| Frontline（含原 Euronav 船队部分）| FRO.NYSE | 约 $21–24 亿（C3，需 FY2023 10-K 核）| VLCC 利润率随运费波动大 | 约 $40–50 亿（C3）|\n| International Seaways | INSW.NYSE | 约 $7–9 亿（C3）| 约 30–40% 净利润率（高运费年）| 约 $20 亿（C3）|\n| DHT Holdings | DHT.NYSE | 约 $4–5 亿（C3）| VLCC 纯玩家，利润率高 | 约 $13 亿（C3）|\n| Teekay Tankers | TNK.NYSE | 约 $7–8 亿（C3）| Suezmax 为主 | 约 $15 亿（C3）|\n| COSCO Shipping Tanker | 1138.HK | 【缺口：2023 年报营收（HKEx）】| 中国国有，政策驱动 | 约 $45 亿 HKD（C3）|\n\n**制度层机构**\n\n| 机构 | 类型 | 财务规模参考 |\n|---|---|---|\n| IG P&I 13 俱乐部（合体）| 非营利互保 | 总保费收入约 $30–40 亿/年（C2 推算，非营利，数字未公开）；每年赔付的池赔案约 $3–5 亿（C2）|\n| Lloyd's Register（船级）| 非营利组织（英国注册）| 年营收约 £4–5 亿（C3，需核 LR 年报）|\n| DNV | 非营利基金会（挪威）| 年营收约 NOK 30–35 亿（约 $28–33 亿，C3，需 DNV 年报）|\n\n【缺口：Frontline FY2023 20-F（SEC EDGAR）；IG P&I 2023 Annual Review（igpandi.org）；DNV Annual Report 2023（dnv.com）】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **中国原油进口对马六甲海峡的依赖**：约 70% 的中国进口原油须经马六甲（C3，IEA/EIA 口径，广泛引用），即约 7–8 mb/d（中国 2023 年进口约 11 mb/d，C3）通过马六甲。若马六甲封锁，中国炼厂依赖 30–60 天库存缓冲，加上绕道龙目/巽他海峡的高成本替代路径。\n- **欧洲炼厂对苏伊士 / 曼德的依赖**：2022 年后欧洲中东油进口大增，对苏伊士依赖上升。2023 年底胡塞攻击后，欧洲从中东进口的原油大量改走好望角，炼厂到货成本上升。\n- **全球库存缓冲**：IEA 成员国 SPR 约 12–15 亿桶（C3，IEA 战略储备数据），约合全球 35–45 天消费量。这是霍尔木兹封锁情景下的缓冲上限。",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "**霍尔木兹完全封锁（假想，无历史先例）**：\n- 约 20 mb/d 从市场消失，约占全球供给 20%\n- 各机构估算油价：$150–250/bbl（C2，Goldman Sachs/IEA 情景模型，无单一权威原文）\n- IMF 模型参照（2023 World Economic Outlook 能源章节）：10% 供给冲击 → 全球 GDP 约 -0.5–1%；20% 冲击非线性，可能 -2–4%（C2，非线性外推，需 IMF 原文核）\n\n**红海危机实证（2023-24，部分阻断）**：\n- 集装箱运费：上海—欧洲航线运费 2024 年初约 $6000–7000/TEU，是正常的 3–4 倍（C3，Drewry，待原文核）\n- 原油影响：VLCCs 大多数本来走好望角，Suezmax 受影响更大（约 20–30% Suezmax 改道，C3）\n- 全球货运延误 / 运营成本增加量化：【缺口：Drewry World Container Index 2024 Q1 原文；IMF Working Paper 关于 Red Sea 危机经济影响】\n\n**G7 俄油价格上限（2022-12–至今）**：\n- 俄罗斯油价折扣：2023 年俄罗斯乌拉尔原油平均约 $62–65/bbl（C3），接近或略高于 $60 上限，说明上限有一定约束但不严格\n- 俄罗斯石油出口收入：2022 年约 $2080 亿（C3，IEA），2023 年因价格下降约 $1500–1700 亿（C2，估算，需 IEA 追踪报告原文）\n\n【缺口：IEA Russia Fossil Fuel Revenue Tracker（iea.org，月度更新）——俄罗斯石油出口收入最权威持续追踪来源】",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "正常市场下利润分布：\n- **船东（VLCC 运营商）**：运费是最大利润集中点。VLCC 日租金 2022–2023 年在 $50,000–200,000 之间波动（C3，Baltic Dirty Tanker Index，待核），远高于船舶运营成本（约 $15,000–20,000/天 OPEX，C2）。运费暴涨年份，上市油轮公司净利润率可达 40–60%（C3）。\n\n- **P&I 俱乐部**：非营利互保结构，不以利润为目标；但保费定价反映赔付风险，阴影船队崛起后高风险船只的保费大幅上涨。\n\n- **中间商 / 贸易商**：Vitol、Trafigura、Gunvor 等大型石油贸易商拥有自己的油轮（或长租），在价差套利和运费管理上获取利润。2022–2023 年高价差年份，大型贸易商利润大幅上升（C3，Vitol/Trafigura 自披露数据，非公开年报）。\n\n- **阴影船队所有者**：阴影船队的利润来自俄罗斯原油折扣（买 $65/bbl）卖给印度炼厂（以略低于 Brent 的价格），价差减去运费。真实利润结构不透明（C2，推算）。\n\n**政治压力谁先付**：制度卡点触发时，first payer 是被拒绝靠港的船东/租船人；制裁对象（俄油出口商）是 second payer；最终买家（印度炼厂）通过提高采购复杂度支付额外合规和中间商成本。地理卡点（霍尔木兹威胁）触发时，运费保险溢价上升，first payer 是租船方（炼厂），通过产品价格传导给终端用户。\n\n---",
    "cLevels": [
     "C3",
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "霍尔木兹过境量约 20–21 mb/d（约 20% 全球产量）",
    "level": "C4",
    "source": "EIA Strait of Hormuz 专页（eia.gov）"
   },
   {
    "item": "IG P&I 13 俱乐部承保约 90% 全球商业船队吨位",
    "level": "C3–C4",
    "source": "IG P&I Annual Review（igpandi.org）"
   },
   {
    "item": "G7 俄油价格上限 $60/bbl，2022-12-05 生效",
    "level": "C4",
    "source": "G7 Finance Ministers 声明；EU Regulation 2022/1904"
   },
   {
    "item": "阴影船队约 600–700 艘（2024 初）",
    "level": "C3",
    "source": "Windward / Lloyd's List Intelligence 追踪报告"
   },
   {
    "item": "全球 VLCC 约 860 艘（2023）",
    "level": "C3",
    "source": "Clarksons Research 口径"
   },
   {
    "item": "马六甲过境约 15–16 mb/d",
    "level": "C3",
    "source": "EIA Strait of Malacca 专页"
   },
   {
    "item": "曼德海峡过境约 6–8 mb/d",
    "level": "C3",
    "source": "EIA Bab el-Mandeb 专页"
   },
   {
    "item": "沙特东西管道（Yanbu）容量约 4.8 mb/d",
    "level": "C4",
    "source": "Saudi Aramco 官方资料（可查）"
   },
   {
    "item": "UAE 富查伊拉管道容量约 1.5 mb/d",
    "level": "C3",
    "source": "ADNOC 官方披露 / IEA 报告"
   },
   {
    "item": "2023–24 约 80% 集装箱运量改道好望角",
    "level": "C3",
    "source": "Clarksons/Drewry 追踪"
   },
   {
    "item": "俄油 2023 年均价约 $62–65/bbl（接近价格上限）",
    "level": "C3",
    "source": "IEA Russia Fossil Fuel Revenue Tracker"
   },
   {
    "item": "EU Regulation 2022/1904 Article 3n 海事服务禁令",
    "level": "C4",
    "source": "EUR-Lex 可查"
   },
   {
    "item": "VLCC 运营成本约 $15,000–20,000/天（OPEX）",
    "level": "C2",
    "source": "行业口径推算"
   },
   {
    "item": "全球原油油轮运费市场约 $40–60B/年",
    "level": "C2",
    "source": "基于船队规模 × 运费率推算"
   },
   {
    "item": "苏伊士运河年收费约 $9–10B",
    "level": "C3",
    "source": "苏伊士运河管理局年报（sczone.gov.eg）"
   }
  ],
  "contested": {
   "title": "G7 $60/bbl 价格上限 + 阴影船队崛起（2022–2023）",
   "summary": "> 本节按节点深挖方法五个阅读动作填写。"
  },
  "gaps": [
   "1. 【缺口：EIA 霍尔木兹/马六甲/曼德海峡 Strait 专页原文（eia.gov/international/straits），通量数字的一手来源——所有地理卡点量化的核心，影响第 3 维供给集中度和 Q2/Q4 全部判断】",
   "2. 【缺口：EU Regulation (EU) 2022/1904 EUR-Lex 原文（第 3n 条，海事服务禁令），含覆盖范围定义和豁免条款——制度卡点法律基础，影响政治传动层 A/B 的法规级 C4 判断】",
   "3. 【缺口：IG P&I Annual Review 2023（igpandi.org）——IG P&I 覆盖份额（90% 吨位）的主要来源，影响第 3 维制度集中度和 Q2 判断】",
   "4. 【缺口：IEA Russia Fossil Fuel Revenue Tracker（月度，iea.org）——俄罗斯石油出口收入变化是评估 G7 价格上限实际效果（制度卡点有效性）的唯一持续量化来源，影响 Q5 判断】",
   "5. 【缺口：Windward 或 Lloyd's List Intelligence 阴影船队追踪报告（2024 年）——阴影船队规模和地理分布是判断制度卡点 fallback 成熟度的关键数据，影响第 7 维 fallback 等级】",
   "6. 【缺口：Drewry World Container Index 2024 Q1 原文（drewry.co.uk）——红海危机运费数据，影响 Q5 实证量化】",
   "7. 【缺口：Frontline / International Seaways FY2023 20-F（SEC EDGAR）——油轮运营商财务数据，影响 Q3 关键玩家资本纵深判断】",
   "8. 【缺口：苏伊士运河管理局 Annual Report（sczone.gov.eg）——苏伊士年通行费 $9–10B 数字的原始来源，目前 C3，升 C4 需原文】"
  ]
 },
 "fi-card": {
  "sourceFile": "fi-card.md",
  "archiveId": "fi-card",
  "established": "2026-07-03",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": "卡组织不是银行，是授权信号的零售层——断 Visa/MC 是把持卡人的消费能力 null route 掉\n\n先把三个金融节点的层次分清楚。\n\nfi-swift 是批发层报文网络，传的是\"请把一大笔美元从 A 银行付给 B 银行\"的银行间指令。fi-usd 是美元清算终局，这笔美元真正从 A 的账户进入 B 的账户要经过的那一关。fi-card 是零售层的消费授权信号——一个普通人拿着 Visa 卡在曼谷的 7-11 刷卡，这 30 秒里发生的授权过程就是 fi-card 卡住的那一层。\n\nVisa 和 Mastercard 不是银行。它们不发卡、不存款、不承担信用风险。它们做的是：**维护一套全球品牌许可证 + 授权路由网络**，让持卡人的发卡行（issueing bank）和商户的收单行（acquiring bank）之间能够确认\"这张卡有效、这笔交易批准\"。钱的实际转移发生在发卡行和收单行之间，走的是银行间清算系统——最终还是 fi-usd 和 fi-swift 的世界。Visa/MC 那一层卡的是：**你的卡在哪里都能被认出来这个事实本身**。\n\n这决定了 fi-card 的政治武器是什么样的。断 SWIFT 让银行在寻址网络上失联；断美元清算让美元计价的交易过不去；断 Visa/MC 是让**持有那国卡的人在出境后刷不了任何地方，以及外国人在那国刷不了任何地方**——这是直接打到普通人的那一刀，而不是银行家。这也解释了为什么 2022 年俄罗斯暂停之后，普通俄罗斯游客去土耳其的遭遇成了头条，而不是银行家失联那种技术问题。\n\n两个和 fi-swift/fi-usd 最重要的结构对照：\n\n**第一，法域抓手是直接单边的**。Visa 和 Mastercard 都是美国公司（Visa：Foster City，加州；Mastercard：Purchase，纽约），受 OFAC 和美国法律直接管辖，不需要经过欧盟立法（不像 fi-swift），也没有多方协调的门槛（和 fi-usd 一样）。但更重要的是：2022 年俄罗斯暂停**不是 OFAC 直接命令**的——Visa 和 Mastercard 是在美国制裁框架（EO 14024）下**主动决定**暂停的，理由是运营一个对制裁目标提供服务的网络的法律风险和声誉风险。这和 fi-usd 的\"OFAC 单手按下闸门\"不同——fi-card 有一层**公司自主决策的中间层**，这既是它的政治弱点（政府无法精确控制时点），也是它的叙事优势（公司说是\"自愿\"的，不是\"美国政府命令的\"）。\n\n**第二，它打到的是个人，而不是金融机构**。fi-usd 的制裁目标是银行和公司的清算能力；fi-swift 的制裁目标是银行间报文能力。fi-card 的制裁效果直接落在**持卡的普通人**身上：出不了境（无法用卡支付机票、酒店）、境外消费不了、接收不了国际汇款（通过卡）。这是三个金融节点里**对普通人日常生活杀伤最直接的一个**，在政治传播层面效果明显，但在战略影响上未必是最关键的一层。\n\n---",
  "holders": [
   {
    "entity": "Visa Inc.",
    "role": "网络运营方 + 品牌许可",
    "scale": "FY2023 净营收约 $327 亿（C3 广泛报道，需 10-K 核）；全球总支付量约 $15 万亿（C3）；市值约 $5,000–5,500 亿（NYSE: V，C3）",
    "jurisdiction": "美国（Foster City，加州），美国联邦法域",
    "group": null
   },
   {
    "entity": "Mastercard Inc.",
    "role": "网络运营方 + 品牌许可",
    "scale": "FY2023 净营收约 $251 亿（C3 广泛报道，需 10-K 核）；市值约 $4,000–4,500 亿（NYSE: MA，C3）",
    "jurisdiction": "美国（Purchase，纽约），美国联邦法域",
    "group": null
   },
   {
    "entity": "UnionPay（中国银联）",
    "role": "替代品牌网络",
    "scale": "国内交易量约 $17-18 万亿（全球最大按量，C2 推算，含大量低单价国内交易）；国际接受度有限（C3）",
    "jurisdiction": "中国（上海），中国法域",
    "group": null
   },
   {
    "entity": "American Express",
    "role": "同时是发卡方 + 网络",
    "scale": "国际市场约 5-8%（C3）；定位高端，覆盖范围窄于 V/MC",
    "jurisdiction": "美国（纽约），美国联邦法域",
    "group": null
   },
   {
    "entity": "Mir（俄罗斯国家支付卡系统）",
    "role": "俄罗斯国内卡网络",
    "scale": "俄罗斯国内 2022 年后主导（C3）；国际接受极为有限",
    "jurisdiction": "俄罗斯，俄罗斯法域",
    "group": null
   },
   {
    "entity": "RuPay（NPCI）",
    "role": "印度国内网络",
    "scale": "印度国内约 60%（C3），国际扩张中",
    "jurisdiction": "印度，印度法域",
    "group": null
   },
   {
    "entity": "OFAC（美国财政部）",
    "role": "制裁合规强制执行方",
    "scale": "SDN 名单约 19,000+ 条（C4，在库 CSV），EO 14024 = 俄制裁法律依据",
    "jurisdiction": "美国联邦行政权",
    "group": null
   }
  ],
  "upstream": [
   "**fi-usd（美元清算，深层依赖）**：fi-card 这一层的交易最终以某种货币结算，绝大多数跨境交易用美元。这意味着 fi-card 的国际支付能力**隐性寄生在 fi-usd 之上**。2022 年俄罗斯案例最清晰地验证了这条依赖链：中国银行不愿意用 UnionPay 服务俄罗斯，核心原因正是害怕失去美元代理账户——fi-usd 是让 fi-card 的任何替代方案都变得脆弱的深层护城河。",
   "**fi-swift（报文层，功能性依赖）**：卡交易的授权和结算信号有一部分走 fi-swift 的批发报文层（银行间净额清算）；但近年来 Visa/MC 的独立网络基础设施已相当完整，fi-swift 不是其不可缺少的单点上游。",
   "**发卡行（成员银行，操作上游）**：Visa/MC 本身不发卡；发卡行才是真正把卡交到持卡人手里的一方。成员资格是双向的：没有 Visa/MC 许可证，银行发不了品牌卡；没有银行发卡，Visa/MC 的网络就没有终端用户。",
   "**互联网/电信基础设施（运营依赖）**：授权信号走 IP 网络；在线支付完全依赖 ir-cables 和 ir-bgp 的底层物理可达性。实体商户（NFC 刷卡）可以本地缓存部分授权，但跨境交易必须实时联网。"
  ],
  "downstream": [
   "**持卡消费者（致命依赖，无中转）**：对个人而言，被断 Visa/MC = 出国即失去电子支付能力。在绝大多数国家，没有 Visa/MC 就只能依赖现金、本地数字钱包或加密货币——这是真实的消费约束，不是几天内可以绕开的。",
   "**跨境电商（致命依赖）**：Shopify 商店、Amazon 第三方卖家、跨境零售：绝大多数国际在线消费者默认用 Visa/MC 支付。替代方案（PayPal 等）最终也收通过 V/MC 网络的资金。如果一国被切断，该国卖家无法收跨境付款，买家无法付款。",
   "**旅游/差旅（高依赖）**：国际旅行者在 2022 年俄罗斯案例中立即失去酒店、机票、餐饮的刷卡能力，影响几乎即时生效。",
   "**国际汇款（部分）**：Visa Direct、Mastercard Send 等产品被一些汇款公司用来向个人账户转账；断卡网络会封住这条通道。"
  ],
  "fallback": {
   "verdictZh": "可能改道",
   "verdictRaw": "possible reroute",
   "unstructured": false,
   "text": "**全球性替代：possible reroute（技术存在，规模无法替代）**：UnionPay 在中国国内和部分新兴市场接受度高，但在西欧、北美绝大多数商户不接受 UnionPay。**五问**：替代哪一层 = 品牌授权层；多久接上 = 商户设备改造数月到年级，且需商户自愿接受（接受 UnionPay 在许多西方国家几乎为零）；卡在哪个环节 = 商户端接受度 + 持卡人数量，双边锁定；谁有权限启动 = 商户、收单行、消费者各自决策；现场执行能力 = 在中国存在，在西方近乎为零。结论：possible reroute。\n\n**国内封闭场景：partial（有条件可运行）**：俄罗斯 Mir 在俄国内完全替代了 Visa/MC（domestic-only）；中国 UnionPay 在中国国内全面覆盖。**五问（以俄罗斯为例）**：替代哪一层 = 国内零售消费；多久接上 = Mir 早已建成，实时切换；卡在哪里 = 国际场景（出境用、接收外国游客用）无法替代；谁启动 = 政府强制所有银行迁移 Mir；现场能力 = 已存在。结论：国内 operational，国际 near-blocked。\n\n**「UnionPay 接俄罗斯」：announced → failed（最重要的 fallback 测试案例）**：2022 年 3 月初俄罗斯宣布将与 UnionPay 合作发行双标卡，中国几大国有银行随即**拒绝**（ICBC、农行等以次级制裁风险为由，4-5 月陆续宣布）。原因明确：这些银行不愿意为了俄罗斯市场赌上在美国的美元清算资格（fi-usd 优先于 fi-card）。最终 UnionPay 对俄业务仅限于少数小型中国银行，覆盖远低于预期。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "Visa FY2023 净营收约 $327 亿（C3，广泛报道，需 Visa 10-K FY2023 核）；Mastercard FY2023 净营收约 $251 亿（C3，同上）。两家合计 ~$578 亿净营收，覆盖的交易量远大于此：Visa FY2023 总支付量约 $14.8 万亿（C3）。\n\n如果加上它们处理的网络量（含借记卡、预付卡等），全球卡支付市场年交易额约 $40-50 万亿（含中国的 UnionPay，C2 推算）。V+MA 处理的国际份额占其中约 70-80%（C3）。\n\n与 fi-swift（机构营收约 €8 亿坐在千万亿美元报文上）和 fi-usd（CHIPS 是私营清算工具，无公开营收）不同，**Visa/MC 的营收和它服务的价值量在同一数量级**——它们是零售层服务费收入，不是 fi-swift 那种极端杠杆结构。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "全球国际卡支付 CR2（Visa + Mastercard）约 70–80%（C3，需 Nilson Report 核）。剔除中国国内 UnionPay 量后，国际场景 CR2 接近 85–90%（C2 推算）。\n\nprice maker：**Visa 和 Mastercard 双双都是**——它们设定网络费率，成员银行无法单方面谈判；商户折扣率由收单行和商户谈判，但受 V/MC 规定的交换费下限约束。两家对彼此都不是 price maker（互为竞争对手），但联合来说相对商户和银行是 price setter。\n\nHHI（国际场景）：如果按两者 85%+ 算，估算 HHI 约 3500–4000+（高度集中，C2 推算）。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 公司 | FY2023 净营收 | 营业利润率 | 市值（约）| 法域 |\n|---|---|---|---|---|\n| Visa Inc. | ~$327 亿（C3）| ~65-67%（C3）| ~$5,000–5,500 亿（NYSE: V, C3）| 美国 |\n| Mastercard Inc. | ~$251 亿（C3）| ~55-60%（C3）| ~$4,000–4,500 亿（NYSE: MA, C3）| 美国 |\n| UnionPay（非上市）| 【缺口：需中国银联年报或母公司财报】| — | — | 中国 |\n\n注：Visa/MC 的高利润率来自它们不承担信用风险（那是发卡行的事）、不持有资本（那是银行的事），只收网络授权的通行费——纯软件/制度型商业模式，资本轻、利润率高。这是量化\"它们的资本纵深有多深\"的参考：两家合计市值约 $9,000–10,000 亿，远超大多数国家的银行系统市值。\n\n【缺口：Visa FY2023 10-K + Mastercard FY2023 10-K——精确营收、各地区分拆、网络费率结构。】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "**本节点对下游的敞口**：持卡消费者——无法量化单个比例，但对于没有本地数字支付替代的国家（东欧、中东、拉美大部），国际出行的消费能力约 80–95% 依赖 V/MC 品牌（C2 推算）。跨境电商：约 70%+ 的非中国跨境线上消费走 Visa 或 Mastercard（C3）。\n\n**断供下游的撑持能力**：俄罗斯案例实证：切断后 4-5 天生效；替代方（Mir）国内立即生效，国际场景几乎无缓冲（没有在途库存，是纯授权状态切换）；跨境电商几乎立即失效（无渐进过渡）。相比 en-crude（库存可撑 30-90 天）或 re-polysilicon（库存可撑数月），fi-card 的撑持周期约等于零——这是纯 permission 型卡点和实物库存型卡点最根本的时间差。",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供/管制的经济冲击量级",
    "text": "俄罗斯 2022 年案例：\n- 俄罗斯年度卡交易额暂停前估算约 $300–400 亿（C2 推算，需俄央行零售支付统计）\n- 对旅游业冲击：俄罗斯 2021 年出境旅游消费约 $340 亿（C2 广知），2022 年暂停后境外消费几乎归零（无法用卡）\n- 对俄国内商业：外国卡无法在俄使用，影响约 2021 年 4,000 万外国游客在俄消费（COVID 已大幅减少，C3）\n\n对一个没有健全本地网络的中等规模经济体（假设）断卡：估计造成国际贸易和旅游融资约 10-20% 阻断（C2 推算，与实物制裁不同，主要打消费层而非生产层）。\n\n【缺口：俄罗斯中央银行零售支付统计 2021/2022 对比——核断卡的量化冲击；Mastercard Economics Institute 或 Oliver Wyman 的制裁影响研究】",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "在一笔典型的国际跨境卡消费中（$100 美元），资金和利润的实际分配约为（C2 推算，行业广知结构）：\n- 发卡行：收约 $1.50–2.00（interchange，约 1.5-2%）——**收益最大的一方**\n- Visa 或 Mastercard：收约 $0.10–0.15（network fee，约 0.1-0.15%）——**收益占比小但纯利润率最高**\n- 收单行：保留约 $0.20–0.30（acquirer fee，约 0.2-0.3%）\n- 商户最终入账约 $97.50–97.70\n\n利润归宿：**Visa/MC 的经济利润率（净利润 / 净营收）约 50%+，远高于发卡行（约 20–30%）**——虽然绝对金额分得少，但边际利润率极高，因为它们没有信用损失、没有资本要求、边际成本近乎为零。从\"政治压力首先打到谁的资产负债表\"上看：制裁使 Visa/MC 损失部分网络费收入（较小）；影响最大的是**发卡行**（损失交换费收入）和**持卡人**（失去消费能力）。Visa/MC 本身的资本纵深（合计市值约 $9,000 亿）意味着能够承受相当大的政治压力而不被迫改变行为——这也是为什么它们在 2022 年是\"主动决定\"而非\"被迫决定\"的。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "Visa 和 Mastercard 均为美国公司，受 OFAC 直接法域管辖",
    "level": "C4",
    "source": "公开事实，SEC 注册 + OFAC 法律框架"
   },
   {
    "item": "Visa/MC 合计占全球国际卡交易约 70–80%",
    "level": "C3",
    "source": "广泛报道，需 Nilson Report 核"
   },
   {
    "item": "Visa FY2023 净营收约 $327 亿",
    "level": "C3",
    "source": "广泛报道，需 10-K 核"
   },
   {
    "item": "Mastercard FY2023 净营收约 $251 亿",
    "level": "C3",
    "source": "广泛报道，需 10-K 核"
   },
   {
    "item": "Visa/MC 宣布暂停俄罗斯：2022-03-05/06，生效 2022-03-10",
    "level": "C4",
    "source": "两家公司官方新闻稿（公开声明）"
   },
   {
    "item": "中国主要国有银行拒绝参与 UnionPay-Russia 合作",
    "level": "C3",
    "source": "广泛报道（Reuters/Bloomberg/WSJ），2022-04-05 月"
   },
   {
    "item": "UnionPay 无法在主要西方市场替代 Visa/MC",
    "level": "C3",
    "source": "广泛报道，接受度统计"
   },
   {
    "item": "俄罗斯年度 Visa/MC 交易量约 $300–400 亿（暂停前）",
    "level": "C2",
    "source": "推算（无在库俄央行统计）"
   },
   {
    "item": "Mir 在俄国内 2022 年后完全替代 Visa/MC 国内功能",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "OFAC EO 14024（2021-04-15）是俄制裁法律依据",
    "level": "C4",
    "source": "联邦公报公开法令"
   },
   {
    "item": "双边网络效应是 Visa/MC 最硬壁垒（替代品技术可建但冷启动困难）",
    "level": "C3",
    "source": "行业分析共识"
   },
   {
    "item": "Visa/MC 净利润率约 50%+，运营利润率约 55–67%",
    "level": "C3",
    "source": "广泛报道，需年报核"
   }
  ],
  "contested": {
   "title": "Visa/Mastercard 暂停俄罗斯业务（2022-03-10）",
   "summary": "用五个阅读动作读这场争夺：\n**① 校准颗粒度**：被争夺的节点不是\"俄罗斯的国际金融访问\"（那是 fi-swift + fi-usd 的战场），而是更具体的：**俄罗斯发卡行的成员资格 + 俄罗斯境内 Visa/MC 品牌卡的授权功能**。2022-03-05/06，Visa 和 Mastercard 相继宣布暂停俄罗斯运营，2022-03-10 生效。具体影响：① 俄罗斯发卡行发出的 Visa/MC 卡在境外停止工作；② 外国 Visa/MC 卡在俄罗斯商户停止工作。俄罗斯国内 Mir 卡和 Mir-branded 银行系统继续运营，不受影响。"
  },
  "gaps": [
   "1. 【缺口：Visa FY2023 10-K + Mastercard FY2023 10-K（SEC EDGAR）】——核营收/交易量/地区分拆/客户集中度；影响 Q1/Q2/Q3 全部数字，是本节点量化层最大缺口",
   "2. 【缺口：Nilson Report 全球支付卡市场份额报告（最新年度）】——V/MC/UnionPay/AmEx 精确市场份额；影响 Q2 集中度量化，是供给集中度分析的标准行业数据来源",
   "3. 【缺口：俄罗斯中央银行零售支付统计（2021/2022 对比）】——核暂停前 V/MC 在俄交易额，以及暂停后 Mir 接管量；影响 Q4 下游依赖度量化和争夺事件量化",
   "4. 【缺口：Visa 和 Mastercard 2022-03-05/06 暂停俄罗斯业务官方新闻稿原文】——把公司决策从\"广泛报道\"升至 C4；影响政治传动层 E 的 first payer 和时点精确性",
   "5. 【缺口：Reuters/Bloomberg 关于中国银行拒绝参与 UnionPay-Russia 合作的原始报道（2022-04-05 月）】——把 UnionPay fallback 失败这一最关键结论从 C3 升至有来源；影响争夺事件分析核心判断",
   "6. 【缺口：OFAC EO 14024 联邦公报原文（86 FR 20249, 2021-04-15）+ EO 14068（87 FR 13625, 2022-03-11）】——把法律依据从\"广泛知道\"升至 C4；影响政治传动层 A/B"
  ]
 },
 "fi-cips": {
  "sourceFile": "fi-cips.md",
  "archiveId": "fi-cips",
  "established": "2026-07-04",
  "updated": "2026-07-05",
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "理解 CIPS，最清楚的起点不是问「它是什么」，而是问「它为什么被建出来」。fi-swift 那节已经钉过：2012 年伊朗被踢出 SWIFT，2022 年俄罗斯被踢，每一次「切断」都同时告诉所有在观察的人——任何依赖 SWIFT + 美元清算的国家，都把自己的金融管道暴露在西方的政治决定之下。CIPS 是对这个认知的制度性响应：**中国需要一条自己运营、主权管辖、不受 SWIFT 关停决定约束的人民币清算通道。**\n\n但 CIPS 的性质和 fi-swift/fi-usd 根本不同，不是因为它弱，而是因为**它的方向相反**。fi-swift 和 fi-usd 是西方用来掐别人的工具；CIPS 是中国建来减少「被别人掐」风险的工具——同时，随着人民币份额增长，它也在积累未来自己掐别人的潜力。这是 fi 栈里**性质最不对称**的节点：当前主要是逃生通道，长期可能长成独立卡点。\n\n还有一条结构上的悖论须先说：**CIPS 被设计来绕开 SWIFT，但它仍深度依赖 SWIFT 的报文传递。** 截至 2023 年，CIPS 约 1,353 家间接参与行中的大多数，仍然通过 SWIFT 的 MT/ISO 15022 报文把指令发给直接参与行，再由直接行在 CIPS 系统内完成人民币清算。只有约 103 家直接参与行使用 CIPS 自有的 ISO 20022 报文标准直接接入。换句话说：CIPS 作为**清算系统**独立于 SWIFT，但多数参与行的**消息传递**仍寄生在 SWIFT 上。fi-usd 节点里已经标注的「替代品寄生被替代品」结构，在 CIPS 这里是正本。\n\n---",
  "holders": [
   {
    "entity": "中国人民银行（PBoC）",
    "role": "CIPS 运营方 + 人民币终局结算（CNAPS）",
    "scale": "独家运营（C4，制度事实）",
    "jurisdiction": "中国（人民银行法）",
    "group": null
   },
   {
    "entity": "工农中建交（中国五大行）",
    "role": "直接参与行核心层",
    "scale": "合计持 CIPS 人民币账户，为间接行提供清算代理",
    "jurisdiction": "中国（国有）",
    "group": null
   },
   {
    "entity": "德意志/花旗/汇丰/渣打等外资行",
    "role": "直接参与行（外资层）",
    "scale": "各家 CIPS 直接参与份额无公开拆分（C3）",
    "jurisdiction": "德/美/英等（多法域，带来 OFAC 合规压力）",
    "group": null
   },
   {
    "entity": "CIPS 间接参与行（约 1,353 家）",
    "role": "通过 SWIFT 报文 + 直接行接入",
    "scale": "覆盖 115 国（C3）；处理多数境外 RMB 跨境交易",
    "jurisdiction": "多国",
    "group": null
   },
   {
    "entity": "SWIFT",
    "role": "仍为 CIPS 多数间接参与行提供报文传递",
    "scale": "间接参与行约 80–90%+（C2，结构推算）仍经 SWIFT 传报文",
    "jurisdiction": "比利时（G10 监督）",
    "group": "竞争/被寄生对象"
   },
   {
    "entity": "mBridge",
    "role": "多边 CBDC 结算实验平台（中/泰/UAE/香港/沙特央行）",
    "scale": "MVP 达到 2024-06-05（C4，BIS 新闻稿）；BIS 移交参与方 2024-10，退出主导；26 个观察机构（含美联储纽约/欧央行）",
    "jurisdiction": "多边",
    "group": "竞争/被寄生对象"
   }
  ],
  "upstream": [
   "CIPS 自己绕不开什么？",
   "**人民币可兑换性（最硬上游约束）**：CIPS 清算的是人民币，人民币的跨境流通受资本账户管制。中国资本账户尚未完全开放，人民币不可自由兑换。这意味着 CIPS 的扩张天花板被人民币的全球使用意愿和可得性框死——参与行愿意接入 CIPS，并不等于全球愿意大量持有、使用人民币。这是 CIPS 和 fi-usd 护城河性质完全不同的根源：美元不需要「可兑换性」是个问题（早就解决了），人民币还没解决。",
   "**SWIFT 报文层（间接参与行的上游）**：多数间接参与行仍需 SWIFT 传报文。这是「替代品寄生被替代品」的正本。若 SWIFT 在外部压力下拒绝为 CIPS 间接参与行提供 MT 报文服务，会严重压缩 CIPS 的可达范围——虽然直接参与行可以继续运营，但覆盖面大幅萎缩。这是 CIPS 当前最需要解决的结构性脆弱点。",
   "**PBoC CNAPS（大额支付系统）**：CIPS 的终局结算走 CNAPS，属于同一主权体系内的正常依赖，不构成外部风险。",
   "**参与行的美元敞口（外资行的政治约束）**：外资直接参与行（花旗/汇丰/德意志等）在美元清算上有大量业务，OFAC 二级制裁威胁让它们在 CIPS 上不敢为制裁实体清算人民币。这是 fi-usd 的杠杆通过参与行「从背面钩入 CIPS」的路径，是 CIPS 当前最大的结构性软肋。"
  ],
  "downstream": [
   "**高依赖（增量中）——中俄贸易结算**：2022 年后俄罗斯被切出 SWIFT，中俄贸易的 RMB 清算需求转向 CIPS。俄罗斯是目前 CIPS 最大的单一增量需求方（C3）。但问题是：俄罗斯各银行多为间接参与行（没有直接接入 CIPS），需要经过中国中间银行完成，路径比正常用途多一层摩擦。",
   "**高依赖（增量中）——中伊贸易、部分中东能源**：伊朗长期在制裁范围内；部分中东产油国与中国达成 RMB 石油结算协议（2023 年中沙部分原油人民币结算，C3）。",
   "**中等依赖——一带一路参与国人民币结算**：中国对「一带一路」参与国的人民币贷款偿付、项目款项，依赖 CIPS 清算渠道。",
   "**弱依赖（覆盖面广）——全球人民币跨境贸易**：任何以人民币计价的跨境支付都需要 CIPS 或其等效通道。随着人民币支付份额从约 1.7%（2019）升至约 4%（2023–24），这个依赖群体在增长，但总量仍小。",
   "买家侧：**高度分散且有明显政治偏向**——最重量级的下游依赖方是那些被西方制裁切出 SWIFT 的实体（俄/伊），以及正在推动 RMB 结算的中国贸易伙伴国。这和 fi-usd（几乎所有跨境经济主体都依赖）形成鲜明对比：CIPS 的下游还很小、还有政治选择偏向。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "这里要反转问法：CIPS 对用户来说是什么的 fallback，CIPS 自身的替代品是什么。\n\n**CIPS 作为 SWIFT+USD 清算的人民币 fallback：partial**\n对想绕开 SWIFT/USD 清算的人民币交易，CIPS 是真实可用的替代——正在运营，有 1,456 家参与行，每天清算约 490 亿人民币（C3）。过五问：替代 SWIFT+CHIPS 在人民币这一层 / 即时可用（系统已在运行）/ 卡在人民币不可自由兑换 + 外资参与行的 USD 敞口无法完全绕开 / 谁启动=参与行自主决策 / 执行能力=有。\n结论：`partial`——对人民币计价交易的替代是真实的，但因为人民币份额仅约 4%，大多数跨境贸易和大宗商品仍以美元定价，CIPS 作为「替代整个 fi-usd/fi-swift 组合」是 possible reroute，不是 operational。\n\n**对 CIPS 自身——有没有替代 CIPS 的人民币清算方式：partial**\nmBridge（多边 CBDC 平台，中/泰/港/UAE/沙特参与）2024-06 已达 MVP（能执行实值交易），2024-10 BIS 正式移交参与央行——**已超出\"测试\"阶段**（C4，BIS 官网）；但规模仍远小于 CIPS，离 operational 替代仍有距离。双边本币清算协议（中俄直接人民币/卢布双边清算，绕开 CIPS）存在，但仅覆盖双边，不是系统性基础设施。结论：CIPS 当前在人民币跨境清算的功能位置上基本无大规模替代，是中国这一层的近垄断系统。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "CIPS 和 fi-swift/fi-usd 同型：清算基础设施本身不是市场，它处理的是人民币跨境流量。\n\n- **CIPS 年处理量（2023）**：约 123.06 万亿人民币（约 $17 万亿，按 2023 年均汇率，C3，CIPS 官网口径转引，未取原始公告）\n- **日均处理量（2023）**：约 490 亿人民币/天（C3）\n- **年增速**：2019 约 33.9T → 2020 约 45.1T → 2021 约 79.6T → 2022 约 **96.7T（C4，PBoC《2023年人民币国际化报告》原文：440万笔/96.7万亿元/77直参/1,283间参）** → 2023 约 123.1T（C3，官媒转引 PBoC 2024 报告，PDF 未落盘）\n- **对比参照**：CHIPS 日均约 1.8 万亿美元（约 13 万亿人民币等值，C3），CIPS 日均约为 CHIPS 的 1/25 量级（C2 推算）\n- **CIPS 自身营收**：非营利性质，不对外公布营收，成本由 PBoC 承担（C3）\n\n【缺口部分解决：2022 年数据已升 C4（PBoC PDF 落盘：440万笔/96.7万亿元/77直参/1,283间参）；2023 年数据仍 C3（PBoC 2024 报告 PDF 404，官媒转引：661.33万笔/123.06万亿元）；需人工下载 https://www.pbc.gov.cn/huobizhengceersi/214481/3871621/5472873/index.html 升级至 C4。】",
    "cLevels": [
     "C3",
     "C4",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **CIPS 自身**：人民币跨境清算体系 CR1（CIPS）≈ 近独占（C3）——CIPS 是中国主导的人民币跨境清算唯一主流基础设施，无实质竞争者。\n- **人民币份额（CIPS 服务的货币池）**：RMB 全球支付份额约 4–4.5%（SWIFT RMB Tracker 月度数据口径，C2–C3，2024 初数据），较 2019 年约 1.7% 显著提升，但远低于美元约 47–49%（同口径）\n- price maker：不适用（CIPS 是公用事业，无定价权）。PBoC 是 CIPS 接入资格的 access maker，且是人民币汇率管理的核心决策方——后者比 CIPS 接入资格本身更根本。\n\n【缺口：SWIFT RMB Tracker 月度原始报告（官方 PDF）——人民币支付份额时间序列，本轮为转引口径 C2–C3。】",
    "cLevels": [
     "C3",
     "C2–C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收/规模 | 性质 | 来源 |\n|---|---|---|---|\n| PBoC（CIPS 运营方）| 央行，不以营利为目的 | 中央银行 | 制度事实 |\n| 工商银行（直接参与行代表）| FY2023 约 3,580 亿人民币（C3）| 国有商业银行 | 【缺口：工行 FY2023 年报，未在库】|\n| 汇丰银行（外资直参代表）| FY2023 约 $668 亿（C3）| 英国上市银行，双重法域约束 | 【缺口：汇丰 FY2023 年报，未在库】|\n\n资本纵深判断：汇丰/花旗/德意志等外资行对美元业务的依赖远大于其 CIPS 人民币业务——这直接解释了为何美国的二级制裁威胁对外资参与行有实质约束力。",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **中俄贸易结算**：2022 年起，中俄贸易约 70%+ 以本币（人民币/卢布）结算（C3，广泛报道，无 PBoC 统计原文在库）。若 CIPS 被外部压力大规模限制，中俄以 RMB 计价的贸易结算须走替代路径——代价是高摩擦、汇率损失，但不是完全中断（有第三国通道和双边直连）。中俄年贸易额约 $2,400 亿（2023，C3）。\n- **人民币贸易融资**：中国对外贷款存量约 $5,500 亿（C3，AidData 口径），其中相当比例以人民币计价，相关还款清算走 CIPS。\n- 下游多久无法维持：若 CIPS 整体中断（极端情形，当前不现实），人民币跨境清算须回到代理行体系（成本高、速度慢）或双边直接安排——可撑但摩擦大；若仅部分外资参与行退出（更可能），影响 CIPS 全球可达性，具体业务转由中资行承接（需时数周到数月重建路径）。\n\n【缺口：中俄贸易人民币结算比例精确数字——需 PBoC 国际收支数据或俄罗斯联邦统计局数据；一带一路人民币贷款走 CIPS 的比例——需 PBoC 或 AidData 专项分析。】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "**若 PBoC 关闭 CIPS**（极端情形，中国从不用这个）：中国境外人民币业务陷入混乱，与中国贸易的国家清算成本大幅上升；等效于中国金融系统部分自我孤立，自伤代价极高。\n\n**若外资直接参与行大规模退出**：CIPS 可达范围收缩至以中资行为主的网络，全球可达性下降。外资直接参与行约占 CIPS 直接参与行的 30–40%（C2 推算），其退出可能使 CIPS 的非中资参与方覆盖减少 50%+（C2）。\n\n**对中俄贸易的冲击**：若 CIPS 无法为中俄清算，年贸易额约 $2,400 亿中的人民币计价部分须走替代路径——代价是高摩擦，不是完全中断。\n\n【缺口：需 CIPS 专项经济影响研究（无在库）；中俄贸易人民币/卢布计价比例（PBoC/俄央行数据）。】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "CIPS 自身不产生传统利润（公用事业），价值流向三处：\n\n- **人民币国际化的政治价值**归中国/PBoC：CIPS 服务于人民币国际化的战略目标，量化困难。\n- **监控/panopticon 价值**归 PBoC/中国情报体系：所有 CIPS 交易可见，是对全球人民币资金流动的情报基础。\n- **业务手续费**归参与行：参与行（尤其直接参与行）向间接参与行收取代理清算手续费。量级：按 CIPS 日均 490 亿人民币 × 千分之一手续费量级 × 250 日 ≈ 120 亿人民币/年的行业手续费池（C2 粗估）。\n\nfirst payer（若 CIPS 被压缩）：**外资直接参与行**（被迫选择，2023 年退出涉俄 CIPS 业务是实证）→ 中俄贸易商（清算成本上升）→ 终端消费者/企业（进口价格传导）。PBoC 不是 first payer；中国政策目标（人民币国际化）承受「制裁溢出威慑潜在参与行」的隐性代价。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "CIPS 由 PBoC 直接运营，100% 中国主权管辖",
    "level": "C4",
    "source": "制度事实（人民银行法 + CIPS 官方介绍）"
   },
   {
    "item": "CIPS Phase 1 上线 2015-10-08，Phase 2 2018",
    "level": "C4",
    "source": "广知制度事实"
   },
   {
    "item": "人民币全球支付份额约 4–4.5%（2024 初）",
    "level": "C2–C3",
    "source": "SWIFT RMB Tracker 转引"
   },
   {
    "item": "CIPS 2023 年处理量约 123 万亿人民币",
    "level": "C3",
    "source": "CIPS 官网口径转引"
   },
   {
    "item": "CIPS 2023 直接参与行约 103，间接约 1,353，覆盖 115 国",
    "level": "C3",
    "source": "CIPS 官网口径转引"
   },
   {
    "item": "CIPS 间接参与行多数仍经 SWIFT 传报文（「寄生」结构）",
    "level": "C2–C3",
    "source": "机构报告转引 + 结构推断"
   },
   {
    "item": "2023 美国财政部警告 CIPS 参与行涉俄业务面临二级制裁",
    "level": "C3",
    "source": "FT 等国际媒体转引（无 OFAC 公告在库）"
   },
   {
    "item": "部分外资直接参与行 2023 年收紧涉俄 CIPS 服务",
    "level": "C3",
    "source": "媒体转引，无一手确认"
   },
   {
    "item": "CIPS「替代品寄生被替代品」结构（与 fi-usd/fi-swift 关系）",
    "level": "C4",
    "source": "fi-usd 节点分析（FN 2019 框架演绎）"
   },
   {
    "item": "外资参与行 USD 敞口使其暴露于 fi-usd 二级制裁，是 CIPS 最大软肋",
    "level": "C3",
    "source": "结构推断 + 2023 事件实证"
   },
   {
    "item": "CIPS 日均约 490 亿人民币 vs CHIPS 日均约 1.8 万亿美元",
    "level": "C3 vs C3",
    "source": "各自广知报道，均未取官方原文"
   },
   {
    "item": "中俄贸易 2022 年起约 70%+ 以本币结算",
    "level": "C3",
    "source": "广泛报道，无 PBoC 原表"
   },
   {
    "item": "CIPS 主权护城河：外部无法直接关闭（但可通过参与行间接限制）",
    "level": "C3",
    "source": "结构判断"
   },
   {
    "item": "CIPS 2019–2023 年 CAGR 约 38%（推算）",
    "level": "C2",
    "source": "33.9T→123.1T 计算"
   },
   {
    "item": "EO 14024 是 2023 年对 CIPS 参与行施压的主要依据",
    "level": "C3",
    "source": "媒体报道转引"
   },
   {
    "item": "CIPS 2022 年运营数字：440万笔/96.7万亿元/77直参/1,283间参",
    "level": "C4",
    "source": "PBoC《2023年人民币国际化报告》PDF（已落盘，2026-07-05）"
   },
   {
    "item": "mBridge MVP 阶段 2024-06-05 达到；BIS 2024-10 移交参与央行退出主导；5家正式央行+26+观察机构",
    "level": "C4",
    "source": "BIS 官方新闻稿 p240605.htm + 项目页（已确认，2026-07-05）"
   }
  ],
  "contested": {
   "title": "2023 年美国财政部对 CIPS 参与行的二级制裁警告（中俄人民币清算被压缩）",
   "summary": "2023 年下半年起，美国财政部（通过 OFAC 及外交渠道）向在华经营的外资银行和部分具有境外美元业务的中国中小银行发出警告：若其通过 CIPS 为受制裁的俄罗斯实体处理人民币跨境支付，将面临美国二级制裁——具体威胁是切断其美元代理账户资格，等同于失去进行美元业务的能力（C3，多家国际媒体报道，无 OFAC 官方公告在库）。"
  },
  "gaps": [
   "1. 【缺口部分解决：2022 年数据已升 C4（PBoC《2023年人民币国际化报告》PDF 落盘）；仍需 2023 年官方数字（PBoC 2024 报告 PDF 待人工下载）和 2019–2021 年各年数据（目前 C3 转引），以及参与行名单全版和各主要参与行份额——后者仍全挂 C3，需补。】",
   "2. 【缺口：SWIFT RMB Tracker 月度原始报告】人民币支付份额时间序列（官方 PDF，月度更新）——Q2 核心，目前为转引口径 C2–C3。",
   "3. 【缺口：OFAC/美国财政部 2023 年对 CIPS 参与行警告的任何正式文件（信函/行政令/FinCEN 通知）】2023 争夺事件的一手来源，现为媒体转引 C3；若无正式文件，需要 Financial Times/Bloomberg 原始报道原文。",
   "4. 【缺口：外资直接参与行（汇丰/花旗/德意志等）CIPS 业务收紧的一手陈述或年报合规章节说明】2023 争夺事件行为链的参与行侧证据，目前 C3 媒体转引。",
   "5. 【已解决：mBridge MVP 阶段及参与方已升 C4（BIS 新闻稿 p240605.htm + 项目页，2026-07-05 确认）：2024-06-05 MVP，2024-10 BIS 移交参与央行；5 家正式央行（PBoC DCI/HKMA/BOT/CBUAE/SAMA）+26+ 观察机构含美联储纽约/欧央行。】",
   "6. 【缺口：中俄贸易人民币结算比例官方统计】PBoC 国际收支数据或俄罗斯联邦统计局数据——Q4 下游依赖量化支柱，目前 C3 广泛报道。",
   "7. 【缺口：CIPS Phase 2 精确生效日期】——目前「2018 年前后」为 C3 广知，需 PBoC/CIPS 官方文件确认。",
   "8. 【缺口：CHIPS（美国清算所联号）日均处理量官方数据】——对比数字目前 C3，需 The Clearing House 官方统计。"
  ]
 },
 "fi-stablecoin": {
  "sourceFile": "fi-stablecoin.md",
  "archiveId": "fi-stablecoin",
  "established": "2026-07-05",
  "updated": "2026-07-06",
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "读稳定币，最清楚的起点不是问「它是不是美元的替代品」，而是问「它是哪一层的控制点」。\n\nfi-usd 节点说：美元清算的卡点是 CHIPS/Fedwire，在纽约联储，OFAC 单手可按。那么，如果一笔交易绕开 CHIPS——用 USDT 在 Tron 网络做 P2P 转账，不过银行、不过清算系统——是否绕过了那个卡点？\n\n答案是部分绕过，但没有绕出美元的引力圈。原因在于，稳定币的架构分三层，每一层都嵌入了不同程度的控制机制：\n\n**第一层：发行方（Tether/Circle）——卡点在这里。** Tether 持有约 800–900 亿美元的美国国债作为 USDT 储备（C3 估算），储备账户在受美国监管的托管行里。Circle 是美国公司，其 USDC 储备直接托管在美国金融机构。只要两家发行方想继续经营，它们就必须维持在美国银行体系内的美元清算能力——这是 OFAC 不需要立法直接约束 Tether 也能得到合规行为的根本原因：财务生存依赖倒逼合规。\n\n**第二层：交易所（Binance、Coinbase、OKX 等）——法币出入口的卡点。** 稳定币的最终价值需要一个法币出入口：如何把 USDT 变成真实可用的美元或其他法币。大型交易所为了维持美元业务，均须遵守 FinCEN/OFAC 要求。Binance 2024 年支付了 43 亿美元的 DOJ/FinCEN/OFAC 和解金，是这层控制最清晰的实证（C3，媒体广泛报道，无和解协议原文在库）。\n\n**第三层：底层公链（Ethereum/Tron）——这一层无人控制，也是唯一的真实逃逸窗口。** 以太坊和 Tron 是去中心化协议，没有任何实体能在协议层冻结钱包或阻止转账。这就是 OFAC 2022 年指定 Tornado Cash 时揭示的架构现实：Tether/Circle 可以在代币合约层冻结关联地址，但 Tornado Cash 合约本身持有的 ETH 无法被任何人冻结——协议代码照常运行。这一层的「逃逸」是真实的，但有两个硬限制：①链上所有交易记录完全公开、永久可查；②必须最终经过法币出入口（要么用链上资产直接购买商品，要么转换成现金——而后者几乎总要经过受监管的交易所）。\n\n这三层的叠加定义了稳定币的政治性质：**它既是美元霸权的延伸（把美元计价渗透进加密生态），也是一个有限的迂回窗口（P2P 小额转账可绕开传统银行体系），但从根本上，这个窗口受制于发行方的合规意愿和链上交易的透明度**。\n\n---",
  "holders": [
   {
    "entity": "Tether Limited",
    "role": "USDT 发行方 + 储备管理人",
    "scale": "约 $100–115B USDT 流通市值（2024 年初，C3 市场数据）；储备约 80%+ 为美国国债 + 现金等价物（C3，Tether 季度证明书）",
    "jurisdiction": "BVI 注册，香港运营，储备托管在受美监管机构",
    "group": null
   },
   {
    "entity": "Circle Internet Financial",
    "role": "USDC 发行方",
    "scale": "约 $25–35B USDC 流通市值（2024 年，C3）；储备 100% 为美国短期国债 + 美国银行现金（C3 Circle 官方）",
    "jurisdiction": "美国（特拉华州），受 FinCEN/NYDFS 监管",
    "group": null
   },
   {
    "entity": "Tron 网络",
    "role": "USDT 最大流通公链（约 50–60% USDT 在 Tron 上，C2 推算）",
    "scale": "低费用，高吞吐量，在新兴市场和制裁规避场景主导",
    "jurisdiction": "无主权（去中心化协议，Justin Sun/波场基金会与 Tron 网络相关联但无直接控制权）",
    "group": null
   },
   {
    "entity": "Ethereum 网络",
    "role": "USDT/USDC 第二大流通公链",
    "scale": "DeFi 生态主网，高安全性，手续费较 Tron 高（L1）",
    "jurisdiction": "无主权（去中心化协议）",
    "group": null
   },
   {
    "entity": "Cantor Fitzgerald",
    "role": "Tether 储备的主要美债托管商",
    "scale": "Tether 在 2024 年确认与 Cantor 合作（C3，媒体报道）",
    "jurisdiction": "美国（受美国法律管辖）",
    "group": null
   }
  ],
  "upstream": [
   "**美元储备（最硬上游约束）**：USDT/USDC 的「稳定」依赖 1:1 美元储备支撑。储备资产（美国国债、现金）存放在受美国监管的金融机构。这意味着：发行方如果失去在美国银行体系内的托管能力，稳定币就无法维持其美元等值承诺。储备账户是发行方对美国金融体系的最硬依赖，也是美国对稳定币发行方拥有间接管辖权的最深根源。",
   "**底层公链（Ethereum/Tron）**：稳定币代币跑在去中心化公链上，公链的出块、共识和安全依赖矿工/验证者网络。公链本身不受任何国家控制——这是稳定币唯一真正「去美国化」的一层，也是链上分析（而非单边关闭）成为主要监控手段的原因。",
   "**法币出入口（交易所/OTC）**：把 USDT 转换成真实法币的能力依赖受监管交易所（Binance/Coinbase/OKX/币安等）或 OTC 柜台。这一层是最容易施加监管的位置，也是出口管制最有效的卡点之一。【注：这不是 fi-stablecoin 节点自身的上游，而是依赖稳定币的下游最终用户面临的瓶颈。】",
   "**互联网可达性（ir-cables/ir-bgp 上游）**：链上操作依赖互联网连通性——这将 fi 栈最底层的基础设施（光缆、BGP 路由）作为远端上游。一国若完全断开互联网，其公民无法使用 USDT，但可以在本地缓存状态——公链在完全断网下降级为「本地版本」，不实用。"
  ],
  "downstream": [
   "**高依赖——加密市场流动性层**：全球加密交易所（Binance/OKX/Bybit/Coinbase 等）用 USDT 作为主要报价货币和交易对底层。USDT 是加密市场的「美元替代」——大量交易对写成 BTC/USDT 而非 BTC/USD，因为持有 USDT 不需要实体银行账户。USDT 的日均交易量常超过 BTC（按美元计，C3 市场数据），是加密生态系统的流动性中枢。",
   "**高依赖——制裁绕过用户（增量中）**：被 SWIFT/美元清算体系边缘化的主体——俄罗斯、伊朗、委内瑞拉等——使用 USDT 作为美元等值价值的载体。Tron 网络 USDT 在制裁规避场景中尤为常见（手续费低、速度快）。Chainalysis 2023 年报告称制裁相关实体接收了约 148 亿美元的加密资产（C3，该数字包括所有加密货币，不只是稳定币）。",
   "**中等依赖——新兴市场跨境汇款**：在金融基础设施不发达或本国货币贬值严重的地区（尤其撒哈拉以南非洲、东南亚、拉丁美洲），USDT 被用作美元等值的跨境汇款工具，摩擦比传统汇款（Western Union 手续费约 3–10%）低得多。这是稳定币纯商业/人道主义使用的主要场景之一。",
   "**中等依赖——DeFi 协议**：去中心化金融协议（Aave、Compound、Uniswap 等）大量使用稳定币作为计价单位和流动性基础。稳定币约占 DeFi 锁仓价值的可观比例（数十亿美元量级，C2，随市场波动）。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": null,
   "unstructured": false,
   "text": "结论：对习惯持有 USD-denominated 价值的用户，目前无成熟的非美元稳定币替代（欧元稳定币 EURC 等存在，但规模微小）。稳定币市场近乎全部锚在美元，这是美元霸权在加密层面的又一层嵌入。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **USDT 流通市值（2024 年初）**：约 1,000–1,150 亿美元（C3，市场聚合数据 CoinGecko/CMC，实时变化）——市值等于流通中的 USDT 数量 × $1，即约等于 Tether 持有的总储备规模\n- **全部美元稳定币市值（2024 年初）**：约 1,400–1,600 亿美元（C3），约为全球广义货币 M2 的 0.01%，但在加密生态中规模极大\n- **对比参照**：CHIPS 日均清算量约 1.8 万亿美元（C3），USDT 日均链上转账量约数百亿美元（C2，链上口径，不含交易所内部轧账）\n- **Tether 自身营收（收益模式）**：USDT 发行方不直接向用户收费；收益来自储备资产（约 $80–90B 美债 + 现金）的利息收入。在约 5% 短期利率下，年化利息收入约 $40–45 亿——Tether FY2023 报告净利润约 62 亿美元（含资产增值，C3，BDO Italia 证明书，非正式审计）\n\n【缺口：Tether 正式审计报告（目前只有 BDO Italia 的「证明书」/attestation，而非 GAAP 全面审计）；全球链上 USDT 日均实际转账量分网络拆分（Ethereum/Tron/其他）的权威数据源。】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **稳定币市场 CR1（USDT）**：约 60–70%（C3 市场数据）\n- **稳定币市场 CR2（USDT + USDC）**：约 80–85%（C3）\n- **price maker**：Tether 是稳定币市场定价参照的中心，但「稳定币」本身设计上不存在价格波动（锚定 $1），price maker 的概念不适用。真正的 access maker 是发行方的黑名单机制——谁决定哪个地址被封锁。\n- **USDT 在 Tron 网络的占比**：约 50–60% 的 USDT 流通量在 Tron 链上（C2 推算，链上数据有但波动），剩余在 Ethereum + 其他链。Tron 的低手续费（~$0.01）是制裁规避场景选 Tron USDT 的主要原因。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收/规模 | 盈利性 | 来源 |\n|---|---|---|---|\n| **Tether Limited** | FY2023 净利润约 $62 亿（C3，BDO Italia 证明书）；储备中美债利息约 $40–45 亿（C2 推算，约 $90B × 5%）| 极高（利息收入覆盖运营成本多倍）| Tether 季度证明书（非正式审计）|\n| **Circle Internet Financial** | USDC 储备约 $30–35B × 5% ≈ 年利息 $15–17 亿（C2 推算）；不直接披露收入 | 盈利（但低于 Tether，储备规模更小）| Circle 公开声明 + 推算 |\n| **Tron 基金会（Justin Sun 相关）** | Tron 网络处理 USDT 转账收取的 gas 费（约 $0.01–1/笔）× 海量笔数 | 规模难以量化（C2）| 链上可查，无官方分部披露 |\n\n资本纵深判断：Tether 以约 300 人规模的公司（据报道），管理超过 $1,000 亿美元储备、每年赚约 $60 亿净利润——这是 fi 节点里最夸张的员工人均净利润之一（约 $2,000 万/员工/年）。这层资本纵深意味着 Tether 有极强的能力应对法律攻击（雇律师、游说等），但也意味着它是监管机构的诱人目标。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **加密交易所对 USDT 的依赖**：全球最大的现货和衍生品交易所（Binance、OKX、Bybit 等）将 USDT 作为主要计价货币和结算资产。USDT 约占 Binance 现货交易量的 60–70%（C2 估算）。若 USDT 停止运营，这些交易所须在短期内（数周）切换到其他稳定币或法币直接结算，摩擦大但不是绝对中断（USDC 可以替代，但对于无法访问 USDC 的用户群（中国等）则较难）。\n- **制裁规避用户对 USDT 的依赖**：这一群体依赖程度最高，替代选项最少。对被 SWIFT 切断且无大型交易所可访问的用户，USDT P2P 是少数可行渠道之一。\n- 断供时间：若 Tether 明天宣布停止赎回，USDT 会立即在二级市场脱锚，取决于持有者对其他稳定币的转换速度（数天到数周）。USDC 的 SVB 危机（脱锚约 13%，持续约 24 小时）是短暂脱锚的实证；若是永久停止运营，影响数月。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "**场景 A：OFAC 正式制裁 Tether（极端情形，当前不现实）**\n- 若 OFAC 把 Tether Limited 列入 SDN 名单，Tether 将无法在美国银行体系内运营，储备美债将被冻结。约 $1,000 亿 USDT 持有者面临无法赎回的局面。全球加密市场将出现历史级别的流动性危机——USDT 在大量交易所是报价货币和结算资产，替代过渡期可能导致数万亿美元量级的交易中断（C2 推算）。这种场景美国不会主动触发，因为会同时摧毁自身在加密领域的美元延伸。\n\n**场景 B：Tether 储备出现危机（挤兑/资产损失）**\n- 若 Tether 储备的美债价值大幅下降（如利率骤升超过其久期匹配能力）或被冻结（OFAC 极端情形），赎回压力导致挤兑。这是 2023 年 USDC/SVB 情形的放大版：SVB 有 $250B 资产，FDIC 担保让危机可控；Tether 有约 $1,000B 的暴露，无美国政府担保，挤兑若发生后果更严峻。\n\n**场景 C：当前实际场景（定向冻结）**\n- OFAC 通过 Tether 冻结特定地址——已有大量历史实例，Tether 公开表示已协助冻结超过 $5 亿的 USDT（多次声明，C3）。对定向目标而言是 `near-closure`；对整体市场无明显冲击。",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "稳定币的利润沉淀在**发行方**手里，是 fi 节点里最极端的利润集中案例之一：\n- Tether：$1,000B+ 储备规模，在约 5% 利率下年赚约 $40–45B 利息（C2 推算）→ 扣除运营成本（小）= 约 $60B 净利润（C3 来自证明书）——储备是用户的 USDT 存款，利息全归 Tether，用户不得分。\n- Circle：模型相同，规模约 1/3，盈利逻辑一样。\n- 持有 USDT 的用户：没有任何利息收入（持有 1 USDT 就是持有 $1，没有存款利息）——这和持有银行存款不同（银行会给客户付利息，哪怕很少）。稳定币发行方实质上是**无息吸储的机构**，把所有利差收入据为己有。\n\nfirst payer（若稳定币被限制）：**制裁规避用户**（立即失去可用渠道）→ 加密交易所（流动性受损，须重构计价和结算）→ 持有 USDT 作为「美元储值」的散户（脱锚风险）。发行方（Tether/Circle）是「被制裁」后的 first mover，而非 first payer——它们会在政策要求下冻结他人资产，承受的是声誉而非即时财务损失。\n\n---",
    "cLevels": [
     "C2",
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "OFAC 2022-08-08 将 Tornado Cash 智能合约地址加入 SDN 名单",
    "level": "C4",
    "source": "OFAC SDN 名单（已核）"
   },
   {
    "item": "Tether 代币合约内含黑名单机制（`addBlacklist`）",
    "level": "C4",
    "source": "以太坊链上合约代码（任何人可读取）"
   },
   {
    "item": "Tether 储备主要为美国国债 + 现金（约 80%+）",
    "level": "C3",
    "source": "Tether 季度证明书（BDO Italia 审阅，非正式审计）"
   },
   {
    "item": "USDT 流通市值约 $1,000–1,150 亿（2024 年初）",
    "level": "C3",
    "source": "CoinGecko/CMC 市场聚合数据"
   },
   {
    "item": "Tether FY2023 净利润约 $62 亿",
    "level": "C3",
    "source": "BDO Italia 证明书（非正式审计）"
   },
   {
    "item": "Circle 在 2022-08-08 当天冻结约 $75K USDC 在 Tornado Cash 地址",
    "level": "C4",
    "source": "Circle 官方博客（Jeremy Allaire 2022-08-09，\"The Responsibility of Trust\"）；$75K 金额来自 Dune Analytics 链上数据（C3）；Allaire 原文引语已核"
   },
   {
    "item": "SVB 倒闭（2023-03-10）导致 USDC 脱锚至约 $0.87",
    "level": "C3+",
    "source": "Circle 官方声明原文已撤；关键数字（$3.3B 存款 / $0.87 脱锚峰值）经多家媒体和市场数据独立核实"
   },
   {
    "item": "Tornado Cash 的 ETH（链上资产）无法被任何机构冻结",
    "level": "C4",
    "source": "技术事实（以太坊协议特性）"
   },
   {
    "item": "USDT 约 50–60% 在 Tron 网络流通（vs Ethereum）",
    "level": "C2",
    "source": "链上数据推算，无权威分类报告"
   },
   {
    "item": "Binance 与 DOJ/FinCEN/OFAC 达成约 $43 亿和解（2023-11-21）",
    "level": "C4",
    "source": "DOJ 新闻稿（页面当前 403，已归档）；FinCEN 同意令 PDF（fincen.gov）；OFAC 民事罚款通知；$43 亿拆分：DOJ $1.81B + FinCEN $3.4B（含 DOJ 抵扣）+ OFAC $9.68 亿"
   },
   {
    "item": "稳定币发行方「自愿合规」是因储备账户依赖美国银行系统",
    "level": "C3",
    "source": "结构推断（储备依赖 → 执法可达）"
   },
   {
    "item": "第五巡回法院 Van Loon v. Treasury（2024-11-26）部分推翻 OFAC 对不可变合约的指定权",
    "level": "C4",
    "source": "第五巡回法院判决文书原文（PDF 550KB）；裁定：不可变智能合约不构成 IEEPA 下的「财产」，OFAC 无权列入 SDN；可变合约及开发者个人不受影响"
   },
   {
    "item": "《GENIUS Act》（Pub.L.119-27）正式通过，成为联邦法律",
    "level": "C4",
    "source": "美国国会公法 Pub.L.119-27；规定美元稳定币发行方须持牌、1:1 储备、联邦审计，非银行发行方须 FinCEN 注册"
   },
   {
    "item": "稳定币链上转账记录全量公开，永久不可删除",
    "level": "C4",
    "source": "以太坊/Tron 协议技术特性"
   },
   {
    "item": "Tether 已协助冻结超过 $5 亿 USDT（多次声明）",
    "level": "C3",
    "source": "Tether 公开声明（无详细清单在库）"
   },
   {
    "item": "USDT 日均交易量常超 BTC（按美元计）",
    "level": "C3",
    "source": "CoinGecko/CMC 每日交易量数据"
   }
  ],
  "contested": {
   "title": "2022-08-08 OFAC 指定 Tornado Cash（首次指定智能合约协议）",
   "summary": "Tornado Cash 是一个以太坊上的混币协议（mixing protocol）——用户把 ETH 或 ERC-20 代币存入合约，合约打乱存入记录，用户再从另一个地址取出等量代币，从而切断「存入地址→取出地址」的链上关联，实现一定程度的链上隐私。它被广泛用于合法隐私需求，但也被朝鲜 Lazarus Group 等黑客团体用于洗白被盗加密资产（据 OFAC 说法）。"
  },
  "gaps": [
   "1. 【缺口：Tether 正式审计报告】目前仅有 BDO Italia 证明书（attestation，Q1 2026 PDF 已在库），非 GAAP 全面审计——GENIUS Act 通过后的监管披露可能补足此缺口。",
   "2. ~~【缺口：Circle 官方冻结公告（2022-08-08 Tornado Cash）】~~ **已闭合（2026-07-06）**：Jeremy Allaire 官方博客 C4 + Dune Analytics 链上金额 C3，`fi-stablecoin-primary/circle-tornado-cash-freeze-2022-08.md`。",
   "3. ~~【缺口：Binance-DOJ/FinCEN/OFAC 和解协议原文】~~ **已闭合（2026-07-06）**：DOJ 新闻稿 + FinCEN 同意令 + OFAC 通知 C4，`fi-stablecoin-primary/binance-doj-settlement-2023-11.md`。",
   "4. 【缺口：USDT 在 Tron vs Ethereum 的流通量分布数据】权威链上分析，把 USDT 总量按公链拆分——Tron 低费=制裁规避场景主选，需量化支撑（当前 C2 推算）。",
   "5. ~~【缺口：Van Loon v. Treasury 第五巡回法院判决文书（2024-11）】~~ **已闭合（2026-07-06）**：判决文书 PDF 550KB，C4，`fi-stablecoin-primary/van-loon-v-treasury-5th-cir-2024-11-26.pdf`。",
   "6. 【缺口：Chainalysis/Elliptic 制裁规避金额估算的原始报告】制裁相关实体接收的稳定币量，当前全为 C2–C3 转引。",
   "7. ~~【缺口：GENIUS Act 立法文本】~~ **已闭合（2026-07-06）**：Pub.L.119-27 已通过成法，C4，`fi-stablecoin-primary/genius-act-pub-law-119-27.md`。"
  ]
 },
 "fi-swift": {
  "sourceFile": "fi-swift.md",
  "archiveId": "fi-swift",
  "established": "2026-06-22",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "SWIFT 不是钱，是地址簿——断 SWIFT 是把你的银行 null route 掉\n\n先把一个被反复说错的东西纠正：**SWIFT 不结算、不清算、不持有任何人的钱。** 它是 1973 年由一群银行合作社化建起来的**报文网络**——传一条标准化的\"请把 X 从 A 账户付给 B\"的指令，钱本身走的是另一套东西（代理行账户、各国 RTGS、CHIPS、Fedwire、央行清算）。SWIFT 是金融系统的 DNS + 邮政编码，不是金库。\n\n这个区分不是术语洁癖，它是整个节点的要害。把一家银行踢出 SWIFT，不是冻结它的钱，是**让它在标准寻址网络上不可达**——别的银行发不到它、它也发不出去标准报文。钱还在，账户还在，但\"怎么告诉对方付款\"这条线被丢进黑洞。这正是我花名的字面意思：null route。被 null route 的目标没有被删除，它被变得**到不了、也被到不了**。2012 年伊朗、2022 年俄罗斯被踢出 SWIFT，技术上发生的就是这件事——不是没收，是失联。\n\n第二个要害:SWIFT 同时是**两种**杠杆,这是它在 Farrell & Newman 框架里成为头号案例的原因。一是 **chokepoint 效应**(掐断:把某行从网络上摘掉);二是 **panopticon 效应**(监视:谁能看到全网报文流,谁就掌握全球资金流动情报)。同一个节点,既能当闸门,又能当摄像头。911 之后美国通过 TFTP(Terrorist Finance Tracking Program)调取 SWIFT 数据,用的就是 panopticon 那一面。大多数卡点只有掐断一面;SWIFT 罕见地两面都硬。\n\n第三个要害,也是这个节点最反直觉的地方:**SWIFT 是比利时法人,不是美国的。** 它注册在比利时,受比利时国家银行(NBB)牵头的 G10 央行监督委员会监管。所以掐 SWIFT 的**直接法律抓手在欧盟手里**,不在美国手里——2012 和 2018 两次伊朗断连,走的都是 EU Council 条例强制 SWIFT 执行。美国怎么动 SWIFT?靠**二级制裁的域外压力**:威胁 SWIFT 及其成员行\"继续给被制裁方服务就别想用美元/美国市场\",逼欧盟和 SWIFT 配合。这是个关键的不对称:对 ac-gpu 美国有直接本土管辖,对 SWIFT 美国是**借道欧盟 + 域外胁迫**,需要跨大西洋政治协调才能扣下扳机。\n\n---",
  "holders": [
   {
    "entity": "SWIFT(S.W.I.F.T. SCRL)",
    "role": "报文网络运营方,银行持有的合作社",
    "scale": "跨境金融报文约 90%+(C3 广泛报道,无官方数);约 11,000+ 机构、200+ 国家/地区(C3)",
    "jurisdiction": "比利时(La Hulpe),受 NBB 牵头 G10 央行监督",
    "group": null
   },
   {
    "entity": "G10 央行监督委员会(NBB 牵头)",
    "role": "监管/监督",
    "scale": "治理监督权",
    "jurisdiction": "比利时主导 + G10",
    "group": null
   },
   {
    "entity": "成员银行(理事会 25 席)",
    "role": "所有者 + 治理",
    "scale": "大成员国银行占理事会席位",
    "jurisdiction": "多法域",
    "group": null
   },
   {
    "entity": "CIPS(人民币跨境支付系统)",
    "role": "人民币清算 + 部分报文",
    "scale": "参与者约 1,400+(直接+间接,C3 需 PBoC/CIPS 官方核);多数流量仍借 SWIFT 传报文",
    "jurisdiction": "中国(PBoC 背景)",
    "group": "替代网络"
   },
   {
    "entity": "SPFS(俄罗斯金融报文系统)",
    "role": "俄国内 + 部分跨境报文",
    "scale": "主要俄罗斯境内 + 少数友好国接入(C3)",
    "jurisdiction": "俄罗斯央行",
    "group": "替代网络"
   },
   {
    "entity": "mBridge",
    "role": "多边 CBDC 跨境结算试验",
    "scale": "试验期,非生产规模(C3)",
    "jurisdiction": "多边(BIS 曾参与后退出)",
    "group": "替代网络"
   }
  ],
  "upstream": [
   "SWIFT 这个节点自己绕不开什么?它是个轻资产网络,上游依赖少但有两个真依赖:",
   "**底层物理网络 + 数据中心(运营依赖)**:SWIFT 跑在常规电信/IP 基础设施 + 自有数据中心上。这一层是冗余设计的,不构成单点。",
   "**报文标准(ISO 20022 迁移)**:全球正从旧 MT 格式迁到 ISO 20022(2025 前后强制窗口,C3 需官方时间线)。这是 SWIFT 自己主导的标准,不是外部卡它的单点,但迁移期是后台系统改造的协调风险点。",
   "**真正的\"上游依赖\"其实是下面那层——清算系统**:SWIFT 只传话,话最终要靠 CHIPS/Fedwire/TARGET2/CIPS 的清算腿落地。所以 SWIFT 的\"权力\"有个隐藏前提:**它寄生在美元/欧元清算体系之上**。单独断 SWIFT 而不动清算,被断方还能找路;真正致命的是 **SWIFT 断连 + 美元清算冻结叠加**(2022 对俄就是这个组合拳)。这意味着 fi-swift 的杠杆**不能脱离 fi-usd 单独评估**——它俩是耦合的,见级联关系。"
  ],
  "downstream": [
   "**致命依赖:做跨境业务的银行**。任何需要即时、标准化、规模化跨境代理行支付的银行,断 SWIFT 后跨境业务能力断崖式下降。依赖强度=高到致命,取决于该行跨境业务占比。",
   "**致命依赖:贸易融资 + 大宗商品结算**。信用证、跟单托收大量走 SWIFT 报文。一国被断,其进出口企业的银行端结算链受阻——这是断 SWIFT 传导到实体经济的主路径(伊朗石油收入受阻、俄罗斯贸易结算转向卢布/人民币/迪拉姆双边)。",
   "**高依赖:证券清算 + 公司财资**。跨境证券交收(SWIFT 证券报文)、跨国公司司库调拨。",
   "**可缓冲(短期):国内支付 + 区域内同币种支付**。有本地系统的,不依赖 SWIFT。",
   "买家侧:全球几乎所有大型银行都是下游,无单一买家集中。**下游对 SWIFT 的依赖不是成本依赖(SWIFT 收费极低),是\"不可替代的连通性\"依赖**——典型的低成本占比、高卡死性节点(和 cm-ree 同型)。被断的痛不是涨价,是失联。"
  ],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": "planned",
   "unstructured": false,
   "text": "**这一格的 fallback 判断和物理节点逻辑相反——技术上易建,协调上难搬。** 分层判:\n\n**整网替代(另起一套全球报文标准):`announced/planned`,不是 operational**\n- CIPS(中国 2015)、SPFS(俄罗斯 2014)、mBridge(CBDC)都已搭出技术原型,这点证明\"建一套替代网络\"不是技术难题。\n- 但过五问见真章:替代哪一层=跨境报文层 / 多久接上=技术几个月、生态迁移数年到不确定 / 卡在哪=**网络效应锁定 + 全球银行后台改造 + 缺乏跨阵营信任** / 谁启动=PBoC/俄央行/各国 / 现场执行能力=**部分有但远未达 SWIFT 覆盖**。\n- 结论:**整网替代是 `planned`,不是 fallback。** CIPS 关键真相:**它自己很大一部分流量仍借 SWIFT 传报文**——替代品寄生在被替代品上,这恰恰证明网络效应还没被攻破。SPFS 基本是俄罗斯境内 + 少数友好国,不构成全球替代。\n\n**单点/双边降级(被断方自救):`operational` 但半空心**\n- 被断的银行可退回:① 未受制裁的第三国代理行中转 ② 双边直连报文 ③ 极端情况 telex/邮件 ④ 转向 CIPS/SPFS 处理对华/对俄走廊。\n- 过五问:替代单条支付链 / 立即可用 / 卡在速度+覆盖+被二级制裁追杀的对手方意愿 / 谁启动=被断方自己 / 现场执行能力=有,但摩擦巨大、规模上不去。\n- 结论:**单笔/双边降级是真 `operational` fallback,但是\"半空心\"的**——它让被断方不至于完全失联(俄罗斯 2022 后对华/对印贸易仍在走,转人民币/卢布/迪拉姆双边),但**无法恢复 SWIFT 那种全球即时覆盖**。所以\"断 SWIFT\" 的实际效果=**大幅提高摩擦 + 收窄可达范围,不是归零**。这和把它当 on/off 总闸的直觉不同。\n\n**整体判:`partial`。** 比 EUV/HBM 那种物理单点软——因为比特网络可另建、被断方有双边降级路径;但比\"谁都能造\"硬——因为网络效应 + 既有装机让整网迁移搬不动。fallback 的瓶颈不在能不能建,在**能不能让所有人同时搬过去**。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "SWIFT 是\"机构营收按千万欧元级、承载价值按千万亿美元级\"的极端背离节点——这个背离本身是最重要的量化事实(和 cm-ree 的\"矿端 $18 亿卡万亿终端\"同型,但更夸张)。\n\n- **SWIFT 机构营收**:合作社、成本回收型,营收常被引为约 €8–10 亿/年量级(C2–C3,task seed 给约 €8 亿,需 SWIFT 官方年报核)。这是个**中型企业的营收**。\n- **承载的报文量**:常引约 110 亿条报文/年(2023)、峰值约 4,480 万条/日(C3,需 SWIFT 官方 Traffic 数据核)。\n- **承载的支付价值**:这些报文背后指令的资金流动是**千万亿(quadrillion)美元/年量级**(C2 推算,SWIFT 不公布总值;以日均数千万条跨境支付报文 × 平均金额粗估)。【缺口:SWIFT 不发布承载总价值,只能量级推算】\n- **对比**:一个营收约 €8 亿的合作社,坐在全球绝大部分跨境资金流动指令上。**杠杆/营收背离倍数以百万计**——比 cm-ree 的约 1000× 还极端几个数量级。这是 Magnitude Layer 要标红到顶的\"低名气/低营收、极高控制\"节点。\n\n【缺口:SWIFT 官方年报(Annual Review)的精确营收、报文量、成员数——需 SWIFT 官方披露,本轮无在库一手】",
    "cLevels": [
     "C2–C3",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 跨境金融报文层:CR1(SWIFT)≈ 90%+(C3 广泛报道,无 SWIFT 官方份额声明)。事实近独占,非法律垄断。\n- price maker:**不适用**——SWIFT 不是利润最大化定价者,是成本回收合作社。它的\"垄断租\"不以价格形式收取,而是以**地缘控制权**形式被外部法域(欧盟/美国)征用。这是本节点量化层和所有商品节点的根本区别:**集中度极高,但价值不沉淀为利润,沉淀为政治杠杆。**\n- 替代品份额:CIPS/SPFS 在各自走廊有真实流量但全球占比远小(C3,且 CIPS 多数仍借 SWIFT 传报文,口径需厘清)。【缺口:CIPS 日均处理量/参与者数 vs SWIFT——需 CIPS、SWIFT 官方对比数据】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收/规模 | 利润率 | 性质 | 来源 |\n|---|---|---|---|---|\n| SWIFT(SCRL) | 约 €8–10 亿(C2–C3 待核) | 成本回收(非盈利目标) | 银行持有合作社 | 【缺口:需 SWIFT 年报】 |\n| CIPS | 【缺口:需 PBoC/CIPS 披露】 | — | PBoC 背景 | 需官方 |\n| SPFS | 【缺口:需俄央行披露】 | — | 俄央行 | 需官方 |\n\n资本纵深判断:**SWIFT 本身资本纵深不重要——它不是靠资产负债表扛压力的主体。** 真正的\"资本纵深\"在**按按钮的政治主体**(欧盟 + 美国)和**被按的目标**(伊朗/俄罗斯的外汇储备与贸易替代能力)两端。SWIFT 是个中立管道,压力从它身上穿过去打到两端。**所以这个节点的\"财务概况\"该问的不是 SWIFT 赚多少,是\"谁能让欧盟立法\"和\"被断方有多少双边降级缓冲\"。**\n\n【缺口:SWIFT/CIPS/SPFS 营收与处理量——需各自官方披露,本轮未取】",
    "cLevels": [
     "C2–C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **下游成本敞口(极低)**:银行用 SWIFT 的费用占其运营成本极小。**断 SWIFT 不是成本问题。**\n- **下游产能敞口(高到致命,取决于跨境业务占比)**:被断行的跨境业务在退回双边降级后,处理能力断崖下降。一国被断,其进出口企业的银行结算链受阻——传导到实体经济。\n- **被断方的缓冲期**:取决于它**事前**建了多少替代通道。俄罗斯 2022 前已建 SPFS + 接入 CIPS,所以断 SWIFT 后仍能维持对华/对印/对中东双边结算——缓冲来自事前准备,不是 SWIFT 本身留的余地。伊朗缓冲更薄,受冲击更深。【缺口:伊朗/俄罗斯被断后贸易结算转移规模与时滞——需 BIS/IMF/智库专题量化】",
    "cLevels": []
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **2012/2018 伊朗**:SWIFT 断连是对伊制裁组合的一环(叠加石油禁运 + 美元清算冻结),难单独剥离 SWIFT 一项的 GDP 贡献。伊朗石油出口与外汇收入受重创是组合效果。【缺口:单独 SWIFT 断连对伊朗 GDP 的可归因冲击——需 IMF/智库分解,task seed 提的\"1–2%\"需来源】\n- **2022 俄罗斯**:多数事后分析认为 SWIFT 断连本身**象征大于实质**,真正咬人的是**央行外汇储备冻结(约 3000 亿美元量级,C3 需核)+ 能源支付反复**。俄罗斯通过 SPFS/CIPS/双边本币把贸易结算迁走,SWIFT 断连未造成预期的金融瘫痪。这是\"断报文≠断钱路\"的最大实证。【缺口:SWIFT 断连对俄 GDP 的独立可归因冲击——需 IIF/Bruegel/IMF 分解】\n- **结构推算(C2)**:SWIFT 断连的真实冲击量级**高度依赖是否与美元清算冻结叠加**。单独断 SWIFT=提高摩擦(数量级:受影响国跨境贸易结算成本/时滞上升,但可绕);SWIFT + 美元清算 + 储备冻结三件套叠加=金融准休克。**必须给的数量级判断:SWIFT 单独动用是\"骚扰级\",三件套叠加才是\"瘫痪级\"。** 这是评估这个节点杠杆时最容易高估的地方——它的威慑名声大于单独实效。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链上**没有传统意义的利润沉淀**——SWIFT 是成本回收合作社,不赚垄断租。那这个近独占节点的\"价值\"流到哪了?**流成了地缘政治控制权**:\n\n- **掐断面的价值**归**能协调欧盟+美国扣扳机的政治主体**——这是制裁威慑力,不是钱。\n- **监视面的价值(panopticon)**归**能访问报文流的情报主体**(美国 TFTP)——这是全球资金流情报,不是钱。\n- **被断方付的代价**=贸易结算摩擦 + 被迫建替代品的成本 + 失去网络覆盖的机会损失。\n\n政治压力首先打到谁(first payer):一国被断,first payer 是**该国做跨境业务的银行 → 其进出口企业 → 终端(进口商品涨价/出口收汇受阻)**。SWIFT 自己几乎不付代价(它中立执行条例),但它付**长期代价**:每被武器化一次,它赖以存在的全球普遍性就被掏空一点——这是它真正的\"资产负债表风险\",计在中心性流失上,不计在当期损益上。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "SWIFT 是 chokepoint 效应头号案例 / chokepoint + panopticon 双效应框架",
    "level": "C4",
    "source": "Farrell & Newman 2019 一手"
   },
   {
    "item": "2012 伊朗断连 = SWIFT 首次因政治压力断国",
    "level": "C4",
    "source": "FN 2019 案例"
   },
   {
    "item": "武器化反噬→网络中心性 slow erosion(欧洲探索绕开美国金融系统)",
    "level": "C4",
    "source": "FN 2019 结论段 verbatim"
   },
   {
    "item": "SWIFT 是报文网络、不结算不清算",
    "level": "C3",
    "source": "广泛报道(无在库官方原文)"
   },
   {
    "item": "SWIFT 1973 建/比利时法人/G10 监督",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "跨境金融报文份额≈90%+",
    "level": "C3",
    "source": "广泛报道,无官方份额声明"
   },
   {
    "item": "约 11,000+ 机构、200+ 国家",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "2018 伊朗二次断连(美国二级制裁主导)",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "2022 俄罗斯部分银行断连、Sberbank 初期豁免后纳入",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "TFTP(美国 911 后调取 SWIFT 数据)= panopticon 实证",
    "level": "C3",
    "source": "广泛报道 + FN 框架"
   },
   {
    "item": "CIPS 多数流量仍借 SWIFT 传报文",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "SWIFT 机构营收约 €8–10 亿/年",
    "level": "C2",
    "source": "task seed + 量级推算"
   },
   {
    "item": "约 110 亿条报文/年、峰值约 4,480 万/日(2023)",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "承载支付价值千万亿美元/年量级",
    "level": "C2",
    "source": "结构推算(SWIFT 不公布)"
   },
   {
    "item": "杠杆/营收背离以百万倍计",
    "level": "C2",
    "source": "结构推算"
   },
   {
    "item": "SWIFT 断连单独=摩擦级、三件套叠加才瘫痪级",
    "level": "C2",
    "source": "结构判断 + 俄案实证"
   },
   {
    "item": "俄罗斯央行储备冻结约 3000 亿美元量级",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "直接法律抓手在欧盟、美国靠二级制裁域外胁迫",
    "level": "C3",
    "source": "FN 框架 + 制度事实"
   },
   {
    "item": "SWIFT 是 real-force 卡点、越武器化越贬值(怕分裂)",
    "level": "C3",
    "source": "FN 2019 结论 + 因果分析"
   }
  ],
  "contested": {
   "title": "2022 年 3 月俄罗斯 SWIFT 断连（EU Council Regulation 2022/345 等一揽子）",
   "summary": "这是 SWIFT 历史上规模最大的一次断连，也是第一次对主要经济体动用这个工具。用五个阅读动作："
  },
  "gaps": [
   "1. 【缺口:需要 SWIFT 官方年报(Annual Review)+ Traffic & Figures 数据】SWIFT 精确营收、报文量(年/日)、成员机构数、报文份额。这是 Q1/Q2/Q3 与\"近独占\"判断的量化支柱,目前全挂 C2–C3。",
   "2. 【缺口:需要 EUR-Lex 条例原文:Council Regulation (EU) No 267/2012(伊朗)及 2018 修订、Council Regulation (EU) 2022/345 等(俄罗斯)+ 被指定实体清单】政治传动层 A/E 的文号、生效日、指定 BIC 清单、豁免条款待补,现全为时间线口径。",
   "3. 【缺口:需要 CIPS/PBoC 官方披露 + BIS 跨境支付报告】CIPS 参与者数、日均处理量、与 SWIFT 的流量对比、\"CIPS 多数仍借 SWIFT 传报文\"的精确口径——决定整网 fallback 判断(planned vs partial)。",
   "4. 【缺口:需要 IMF/IIF/Bruegel/CSIS 制裁冲击分解报告】SWIFT 断连对伊朗(2012/2018)、俄罗斯(2022)GDP 的**独立可归因**冲击(从制裁组合里剥离 SWIFT 一项),task seed 提的伊朗\"1–2%\"需来源;Q5 现为结构推算。",
   "5. 【缺口:需要 EU-US TFTP 协议(2010)文本】panopticon 面的成文访问范围与监督机制,政治传动层 C 信息访问账待补。",
   "6. 【缺口:子节点候选 fi-cips】CIPS 作为人民币清算+报文替代节点已在 Phase 4 列为独立节点;其\"寄生 SWIFT vs 自主报文\"的双重性、mBridge 关系待该节点独立拆。"
  ]
 },
 "fi-usd": {
  "sourceFile": "fi-usd.md",
  "archiveId": "fi-usd",
  "established": "2026-06-22",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "fi-swift 是地址簿，fi-usd 是金库——断 SWIFT 你失联，断美元清算你的钱真的过不去\n\nfi-swift 那一节钉过一个区分：SWIFT 不结算、不清算、只传\"请把 X 从 A 付给 B\"的指令，钱另走清算腿。这一节拆的就是那条**清算腿里最硬的一段**：美元怎么真正易手。\n\n把两件事并排放，节点性质立刻分开。断 SWIFT 是把你的银行 null route 掉——你在标准寻址网络上不可达，但钱还在、账户还在，你能退回双边电传慢慢转。断美元清算不一样：你被踢出 SWIFT 之后还能用别的方式喊话，但只要你这笔交易是美元计价的，**这笔美元最终必须穿过一个美国境内的清算点**——CHIPS（The Clearing House 运营的私营净额清算系统，在纽约）、Fedwire（美联储运营的实时全额结算系统，央行货币终局），或者某家在美国持有美元账户的代理行。这一关你绕不过去。被切断美元清算的实体，不是失联，是**这笔美元的价值转移本身被掐死**——付款方按了发送，钱卡在某个美国代理行的合规闸门前，退回。\n\n这就是 fi-usd 和 fi-swift 最关键的结构差异，也是它更硬的原因：**法域抓手反过来了。** SWIFT 是比利时法人，美国动它要借道欧盟立法 + 二级制裁胁迫，扳机需要跨大西洋协调。美元清算不是——CHIPS 在纽约、Fedwire 是美联储的、全球美元代理行的最终一腿落在美国境内的美国银行账户上。**美国对美元清算有直接、单边、本土的法域管辖。** 它不需要请谁配合，OFAC 把一个实体列进 SDN，所有美国人、所有想保住美元清算资格的银行（包括非美银行）就必须冻结、拒付。这正是 Farrell & Newman 2019 框架里那条决定性的边界——\"[The United States may be] able to exercise both the panopticon and chokepoint effects—so long as they [hold jurisdiction]\"（key-quotes 行 ~180–183）——而对美元清算，美国**确实直接持有**这个 jurisdiction。\n\n第三个要害：二级制裁为什么能管到一家跟美国八杆子打不着的外国银行。因为那家银行只要还想做美元业务，它的美元最终一腿就得过美国代理行。美国不直接命令它，美国说\"你继续给被制裁方清美元，你自己的美元代理账户就没了\"——CISADA(2010) 起的代理行账户制裁就是这把刀。这是 panopticon + chokepoint 两面里 chokepoint 那一面在货币层的最纯形态：**不没收你的钱，关掉你换钱、转钱、收钱的那扇门。**\n\n---",
  "holders": [
   {
    "entity": "美联储（Fedwire）",
    "role": "美元 RTGS 终局结算（央行货币）",
    "scale": "美元央行货币终局独家；日均万亿级（C3）",
    "jurisdiction": "美国（联邦）",
    "group": null
   },
   {
    "entity": "The Clearing House（CHIPS）",
    "role": "跨行美元大额净额清算",
    "scale": "跨行美元大额清算约 95%（C3 需 TCH 核）；日均约 1.8 万亿美元（C3）",
    "jurisdiction": "美国（纽约），银行持有",
    "group": null
   },
   {
    "entity": "OFAC（美财政部）",
    "role": "制裁指定 / access maker",
    "scale": "SDN 名单约 19,065 行（在库 CSV 实文件，C3–C4，行数≠精确实体数）",
    "jurisdiction": "美国（联邦行政权）",
    "group": null
   },
   {
    "entity": "美元代理行巨头（JPMorgan / Citi / BoNY Mellon 等）",
    "role": "全球美元代理清算的商业腿",
    "scale": "美元代理行业务高度集中于少数美国大行（C3，无在库精确份额）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "美元的货币份额",
    "role": "储备/周转/计价",
    "scale": "储备约 59%（IMF COFER 2023–24, C3）；外汇周转约 88% 一腿（BIS 2022, C3）",
    "jurisdiction": null,
    "group": "替代/竞争货币与系统"
   },
   {
    "entity": "CIPS（人民币跨境支付）",
    "role": "人民币清算 + 部分报文",
    "scale": "人民币全球支付份额约 4%（SWIFT RMB Tracker 口径转引，C2–C3）",
    "jurisdiction": "中国（PBoC 背景）",
    "group": "替代/竞争货币与系统"
   },
   {
    "entity": "mBridge / 双边本币 / 稳定币",
    "role": "绕美元清算的零碎替代腿",
    "scale": "各自走廊有真实流量，全球占比小（C3）",
    "jurisdiction": "多边 / 各国",
    "group": "替代/竞争货币与系统"
   }
  ],
  "upstream": [
   "fi-usd 这个节点自己绕不开什么？",
   "**fi-swift（报文层，上游耦合而非下游）**：美元清算要落地，得先有人把\"付款指令\"传过来——绝大多数仍走 SWIFT 报文。所以 fi-usd 和 fi-swift 是**双向耦合、互为前提**：SWIFT 传话、fi-usd 兑现；断 SWIFT 提高传话摩擦，断美元清算掐死兑现终局。fi-swift 那节已写\"杠杆不能脱离 fi-usd 单独评估\"，反过来同样成立。组合拳（断报文 + 断清算 + 冻储备）才是完整杀伤——2022 对俄就是这个三件套。",
   "**美元作为被普遍接受的货币（real force 前提）**：美元清算系统的\"权力\"有个隐藏前提——全世界愿意持有、定价、收受美元。这个前提不是 fi-usd 自己能造的，它寄生在美元的储备货币地位上。一旦足够多的人改用别的货币计价，美元清算这个闸门管的水就变少（见因果层\"slow erosion\"）。",
   "**美债市场深度（准物质护城河）**：美元中心性背后是美债这个全球最深安全资产池。没有它，美元清算的中心性会快得多地流失。这是 fi-usd 区别于 fi-swift 的上游依赖——SWIFT 的网络效应没有这种资产市场背书。",
   "**运营层（清算系统的 IT/数据中心）**：Fedwire/CHIPS 的技术基础设施，冗余设计，不构成单点。"
  ],
  "downstream": [
   "**致命依赖：所有做美元计价跨境业务的主体**。被切断美元清算，美元业务能力接近归零——不是涨价，是这扇门关了。依赖强度取决于该主体美元敞口占比。",
   "**致命依赖：大宗商品 + 能源贸易**。原油、多数大宗商品以美元计价结算——被切美元清算，进出口收付款链断（伊朗石油收入受阻是典型）。这是美元清算传导到实体经济的主路径，也是为什么能源国（俄/伊）有动力推非美元结算。",
   "**致命依赖：非美银行的美元代理账户**。一家外国银行被列 SDN 或被二级制裁威胁，它的美元代理账户一关，它对所有客户的美元服务能力同时断——这是二级制裁的放大器（一个节点断，全行美元业务停）。",
   "**高依赖：美元债务方**。全球大量美元计价债务（企业、主权）需要美元清算来还本付息。",
   "**可缓冲：纯本币国内 + 已建本币双边走廊的交易**。改用人民币/卢布/迪拉姆双边的，不碰美元清算。",
   "买家侧：几乎所有跨境经济主体都是下游，无单一买家集中。**下游对美元清算是\"不可替代的结算终局\"依赖，不是成本依赖**——和 cm-ree、fi-swift 同型（低成本占比、高卡死性），被切的痛是失去终局兑现，不是费用上升。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "**fallback 全压在\"换计价货币\"上，不在\"换清算系统\"上——这是 fi-usd 和 fi-swift 的错位。** 分层判：\n\n**整体绕开美元清算（去美元化）：`partial`，且比 fi-swift 整网替代更难搬**\n- CIPS 人民币清算腿、双边本币结算、mBridge CBDC、黄金、稳定币（USDT/USDC，但稳定币本身锚美元、反而延伸美元触达，是双刃）都已是真实存在的替代腿。\n- 过五问：替代哪一层=美元清算终局 / 多久接上=单条双边走廊立即可用、整体迁移数年到数十年 / 卡在哪=**没有第二个深广安全资产 + 网络效应 + 跨阵营信任 + 人民币资本管制不可自由兑换** / 谁启动=各国央行/财政 + 交易双方 / 现场执行能力=双边走廊有、全球替代远未达。\n- 结论：**`partial`。** 比 fi-swift 更难——SWIFT 替代只要复制报文标准，美元替代要复制一种被全世界愿意持有的货币 + 安全资产市场。CIPS 的关键真相和 SWIFT 同构：**CIPS 多数流量仍借 SWIFT 传报文**，且人民币不可自由兑换、有资本管制，承不住全球美元流。\n\n**单点/双边降级（被切方自救）：`operational` 但半空心**\n- 被切美元清算的实体可退回：① 改人民币/卢布/迪拉姆/卢比双边本币结算 ② 经未受制裁第三国银行中转 ③ 易货 / 黄金 ④ 稳定币灰色通道。\n- 过五问：替代单条美元交易链 / 立即可用 / 卡在对手方持有该货币的意愿 + 汇率与流动性损耗 + 被二级制裁追杀 / 谁启动=被切方自己 / 现场执行能力=有，但摩擦大、汇率吃亏、规模上不去。\n- 结论：**真 `operational` 但半空心**——让被切方不至于完全断流（俄 2022 后对华人民币、对印卢比贸易在走），但**无法恢复美元那种全球通用、深流动性、低摩擦的结算**。所以\"切美元清算\"的实际效果对坚持用美元的交易是接近归零，对愿意换货币的交易是大幅提高摩擦 + 汇率/流动性损耗。\n\n**整体判：`partial`，但单笔杀伤比 fi-swift 硬、整体 fallback 比 fi-swift 难搬。** 瓶颈不在能不能建替代系统，在**有没有一种货币 + 安全资产能接住全球美元流**——目前没有。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "和 fi-swift 同型的极端背离节点：**清算基础设施是公用事业（不以利润计），但它处理的价值是千万亿（quadrillion）美元/年量级。**\n\n- **承载的清算量**：CHIPS 日均约 1.8 万亿美元（C3，task seed + 广泛报道，需 The Clearing House 官方核）→ 年化约 450 万亿美元（按约 250 个清算日）。Fedwire 日均更大（万亿级，C3）→ 年化接近或超过千万亿美元。两系统合计承载全球美元大额清算的绝大部分。\n- **清算系统的\"营收\"**：CHIPS（The Clearing House，银行所有的公用事业）、Fedwire（美联储）都是成本回收型，不赚垄断租。**和 SWIFT 一样是\"机构不赚钱、承载价值天量\"的结构。**\n- **真正的\"市场规模\"该怎么算**：fi-usd 的价值不沉淀为清算系统的营收，而沉淀为两样东西——① 美国的**铸币税 + 超额特权**（exorbitant privilege，美国能以更低成本借债、美元资产被全球持有）；② **制裁射程**（能单边切断任何美元用户的地缘权力）。前者有宏观估算（学界对超额特权的量化有争议，量级在美国 GDP 的零点几个百分点/年的融资成本优势，C2 需文献），后者无法用钱衡量。\n\n【缺口：CHIPS/Fedwire 官方清算量——需 The Clearing House、美联储统计；超额特权的量化估算——需学术文献（Gourinchas & Rey 等）。本轮未取。】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 美元大额清算基础设施：CR1（CHIPS）约 95% 跨行美元大额（C3 需 TCH 核）+ Fedwire 央行终局独家。\n- 货币份额：美元 CR1 = 储备约 59%（IMF COFER 2023–24, C3）、外汇周转约 88% 一腿（BIS Triennial 2022, C3）、贸易计价约一半（C3）。第二位（欧元）储备约 20%、人民币约 2–4%（C3）——美元与第二名之间是数量级差距。\n- price maker：**不适用**（清算系统是公用事业，不定价收租）。和 SWIFT 同——**集中度极高，但价值不沉淀为利润，沉淀为铸币税 + 地缘控制权。**\n- 替代品份额：人民币全球支付约 4%（SWIFT RMB Tracker 转引，C2–C3），且 CIPS 多数流量仍借 SWIFT 传报文、人民币不可自由兑换。\n\n【缺口：IMF COFER、BIS Triennial 原表 + SWIFT RMB Tracker 原始月报——需官方原始数据。本轮口径均为广泛引用，挂 C3。】",
    "cLevels": [
     "C3",
     "C2–C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收/规模 | 利润率 | 性质 | 来源 |\n|---|---|---|---|---|\n| 美联储（Fedwire）| 非营收主体（央行）| — | 央行 | 无（公用事业）|\n| The Clearing House（CHIPS）| 成本回收型 | 非盈利目标 | 银行所有公用事业 | 【缺口：需 TCH 披露】|\n| JPMorgan / Citi / BoNY Mellon（美元代理行）| 各为千亿美元级总营收，但美元代理清算分部无单列 | 银行整体净利率 | 美国大行 | 【缺口：需各行年报分部】|\n\n资本纵深判断：**和 fi-swift 同——清算系统本身的资本纵深不重要，它不是靠资产负债表扛压力的主体。** 真正的\"资本纵深\"在三端：① 按按钮的**美国财政部/OFAC**（行政权，不靠钱）；② **被切方**的去美元化缓冲（俄罗斯的能源反筹码 + 事前建的本币走廊 vs 伊朗的薄缓冲）；③ **美债市场的深度**（这是美元中心性真正的\"资产负债表\"，也是美国必须维护的——若美债失去安全资产地位，整个 fi-usd 杠杆松动）。所以这个节点该问的不是\"清算系统赚多少\"，是\"被切方有多少换货币缓冲\"和\"美债护城河还稳不稳\"。\n\n【缺口：美元代理行业务集中度与营收——需 JPMorgan/Citi/BoNY 年报分部数据。】",
    "cLevels": []
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **下游成本敞口（极低）**：用美元清算的费用占交易成本极小。**切美元清算不是成本问题，是 access 问题。**\n- **下游产能敞口（高到致命，无库存缓冲）**：和实体节点根本不同——被切美元清算没有\"库存能撑几个月\"这回事，是**即时断流**（这笔美元当天就过不去）。被切方能撑多久，取决于它**事前**建了多少换货币走廊。俄 2022 前已建 SPFS + 接 CIPS + 有能源反筹码，所以切美元清算后仍能维持对华/对印本币贸易；伊朗缓冲薄，受冲击深。\n- **被切方缓冲来自事前准备，不是系统留余地**：和 SWIFT 同——美元清算的切断本身是接近 on/off 的，缓冲全在被切方自己提前建的替代腿。【缺口：伊朗/俄罗斯被切美元清算后贸易结算转移规模与时滞——需 BIS/IMF/IIF/Bruegel 专题分解。】",
    "cLevels": []
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **2012/2018 伊朗**：美元清算切断 + SWIFT 断连 + 石油禁运组合，伊朗石油出口与外汇收入受重创——但难单独剥离\"美元清算\"一项的可归因 GDP 冲击。【缺口：单独美元清算切断对伊 GDP 的可归因冲击——需 IMF/智库分解。】\n- **2022 俄罗斯**：三件套里**冻结央行约 3000 亿美元储备**（C3 需核）被广泛评为最咬人的一击，超过 SWIFT 断连本身。俄通过本币走廊把贸易结算迁走，避免了金融瘫痪，但储备冻结是实打实的资产损失。这是\"美元中心性=持美元储备即落入美国射程\"的最强实证。【缺口：冻俄储备的精确金额与对俄 GDP 冲击分解——需 IIF/Bruegel/IMF。】\n- **结构推算（C2）**：美元清算切断的真实冲击量级=**取决于被切方坚持用美元的程度 + 事前换货币缓冲**。对坚持美元、无缓冲的目标（伊朗型）=接近金融窒息；对愿换货币、有反筹码的目标（俄罗斯型）=深度冲击但可缓冲。**必须给的数量级判断：美元清算是金融武器里单笔杀伤最硬的一件（直接本土管辖 + 射程全球 + 无库存缓冲），但其威慑名声同样会反噬——每次极端动用（尤其冻主权储备）都在加速去美元化这个长期成本。** 这是评估时最容易只看短期杀伤、漏算长期中心性流失的地方。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链上**没有传统利润沉淀**——清算系统是公用事业，不赚垄断租。这个近独占节点的\"价值\"流到三处：\n\n- **铸币税 + 超额特权**归**美国**：全球持有美元和美债，让美国能以更低成本融资、用本币对外负债。这是 fi-usd 区别于 fi-swift 的地方——SWIFT 的价值纯粹流成地缘控制权，fi-usd 还额外流成美国实打实的**融资成本优势**（量级 C2 需文献）。\n- **chokepoint 面的价值**归**OFAC/美国行政权**：单边切断任何美元用户的制裁射程——这是地缘权力，不是钱。\n- **panopticon 面的价值**归**能看美元清算流的美国情报机构**：全球美元资金流动情报。\n- **被切方付的代价**=换货币的汇率/流动性损耗 + 被迫建替代腿的成本 + 失去美元通用性的机会损失。\n\nfirst payer：一实体被切美元清算，first payer = **该实体/其美元代理行 → 其客户与进出口企业 → 终端（进口涨价、出口收汇受阻）**。清算系统自己不付代价（中立执行 OFAC 指定）。美国付的是**长期代价**：每武器化一次，美元赖以存在的普遍性被掏一点——但因为有美债护城河垫底，掏空速度比 SWIFT 慢。这是它真正的\"资产负债表风险\"，计在中心性的慢漂移上，不计在当期。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "2018 对伊二级制裁的杀伤力源于\"美元网络中心性\"",
    "level": "C4",
    "source": "FN 2019 p.42 verbatim"
   },
   {
    "item": "美国能同时行使 panopticon + chokepoint，\"so long as they hold jurisdiction\"",
    "level": "C4",
    "source": "FN 2019 案例选择逻辑 verbatim"
   },
   {
    "item": "武器化→网络中心性 slow erosion（欧洲探索绕开美国金融系统）",
    "level": "C4",
    "source": "FN 2019 结论段 verbatim"
   },
   {
    "item": "OFAC SDN 名单约 19,065 行（行数≠精确实体数）",
    "level": "C3–C4",
    "source": "在库 CSV 实文件"
   },
   {
    "item": "美元清算终局走 CHIPS/Fedwire + 代理行美国腿 = 美国直接本土管辖",
    "level": "C3",
    "source": "制度事实 + FN 框架"
   },
   {
    "item": "CHIPS 跨行美元大额约 95%、日均约 1.8 万亿美元",
    "level": "C3",
    "source": "task seed + 广泛报道"
   },
   {
    "item": "美元储备份额约 59%（2023–24，1999 约 71%）",
    "level": "C3",
    "source": "IMF COFER 口径转引"
   },
   {
    "item": "美元外汇周转约 88% 一腿",
    "level": "C3",
    "source": "BIS Triennial 2022 口径转引"
   },
   {
    "item": "人民币全球支付约 4%、不可自由兑换、CIPS 多数寄生 SWIFT",
    "level": "C2–C3",
    "source": "SWIFT RMB Tracker 转引 + 广泛报道"
   },
   {
    "item": "CISADA(2010) 代理行账户制裁=二级制裁系统化、射程覆盖非美银行",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "2022 冻结俄央行约 3000 亿美元储备",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "切美元清算扳机单边可按（OFAC），区别于 SWIFT 需欧盟+协调",
    "level": "C3",
    "source": "FN 框架 + 制度事实"
   },
   {
    "item": "美元清算 fallback=partial，护城河含无替代安全资产",
    "level": "C3",
    "source": "FN 结论 + 因果分析"
   },
   {
    "item": "美元清算单笔杀伤接近 on/off、无库存缓冲",
    "level": "C2",
    "source": "结构判断 + 伊/俄实证"
   },
   {
    "item": "单笔切断硬、整体去美元化慢漂移（数十年级）",
    "level": "C2",
    "source": "结构判断 + COFER 趋势"
   },
   {
    "item": "超额特权=美国融资成本优势（量级零点几个 GDP%/年）",
    "level": "C2",
    "source": "学界口径，未取文献"
   }
  ],
  "contested": {
   "title": "2022 年 2 月底 G7 冻结俄罗斯央行约 3,000 亿美元储备",
   "summary": "2022 年 2 月 24 日俄罗斯入侵乌克兰，2 月 28 日至 3 月 1 日，美国、欧盟、英国、日本、加拿大、澳大利亚协调宣布冻结俄罗斯央行（CBR）在各辖区托管的外汇储备，规模约 3,000 亿美元（C3；确切数字因部分储备托管于中国等中立国而不确定）。这是 fi-usd 节点有史以来最大规模的主权层拒绝权行使。"
  },
  "gaps": [
   "1. 【缺口：需要 The Clearing House (CHIPS) + 美联储 (Fedwire) 官方清算量统计】CHIPS/Fedwire 日均与年化清算量、CHIPS 跨行美元份额——Q1/Q2/Q3 与\"近独占清算\"判断的量化支柱，现全挂 C3。",
   "2. 【缺口：需要 IMF COFER 原表 + BIS Triennial 原表 + SWIFT RMB Tracker 原始月报】美元储备/外汇周转/贸易计价份额、人民币份额——\"集中度\"与\"去美元化趋势\"判断的支柱，现为广泛引用口径 C3。",
   "3. 【缺口：需要 U.S. Code 二级制裁条款原文：CISADA(2010) Sec. 104 代理行账户制裁、相关 NDAA 条款、IEEPA】政治传动层 A/B 的法条、文号、翻转门槛待补，现为时间线口径。",
   "4. 【缺口：需要 IMF/IIF/Bruegel/CSIS 制裁冲击分解报告】美元清算切断对伊朗(2012/2018)、俄罗斯(2022)GDP 的**独立可归因**冲击（从制裁组合里剥离美元清算一项）+ 冻俄储备精确金额；Q5 现为结构推算。",
   "5. 【缺口：需要超额特权量化文献（Gourinchas & Rey, \"From World Banker to World Venture Capitalist\" 等）】美元中心性给美国带来的融资成本优势量级，Q1/Q6 现为 C2 口径。",
   "6. 【缺口：子节点候选 fi-cips / fi-stablecoin】CIPS 作为人民币清算替代节点、稳定币作为\"延伸美元触达 + 制裁规避双刃\"节点均已在 Phase 4 列；其与 fi-usd 的竞争/寄生/双刃关系待各自节点独立拆。"
  ]
 },
 "re-bgp": {
  "sourceFile": "ir-bgp.md",
  "archiveId": "ir-bgp",
  "established": "2026-06-25",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [],
  "upstream": [
   "BGP 自身的上游依赖分两层：",
   "**物理层依赖（ir-cables）**：BGP 路由公告本身也要走光缆传输——路由器之间的 BGP 对话需要物理连接。更重要的是，BGP 路由描述的\"可达性\"最终依赖光缆提供物理带宽。ir-cables 是 ir-bgp 的物理前提。",
   "**RPKI 签名基础设施（新卡点）**：RPKI 越来越被采用（C3，约 40–50% 的全球路由已有 ROA，C3，RIPE NCC / APNIC 统计口径），其根证书由 5 个 RIR 持有。如果某个 RIR 的 RPKI 基础设施被攻击、遭法院封查或运营中断，该地区的路由起源验证就会失效——所有来自该地区的路由在接受 RPKI 强制验证的网络里都可能被拒绝接受。这是一个从\"协议可信性\"延伸出来的新单点风险，随 RPKI 部署率上升而增大。",
   "**路由器软件依赖**：大多数骨干路由器运行 Cisco IOS、Juniper Junos 或 Nokia SR OS，这些是美国/欧洲公司的闭源软件（对美国法域的 AS 而言不是问题，对非西方 AS 是潜在的供应链依赖）。开源替代（BIRD、FRRouting）存在但在骨干级别使用占比低（C3）。",
   "**ix-peering 市场依赖**：对非 Tier-1 的 AS 来说，在 IXP 的对等连接是互联网连接成本的核心，依赖 IXP 运营方维持中立性。一旦 IXP 被政治化（驱逐某个 AS），受影响方被迫转买成本更高的 Tier-1 transit。"
  ],
  "downstream": [
   "**全球互联网可达性（致命依赖）**：任何 AS（企业、政府、数据中心、云服务商）的互联网可达性都依赖它的路由在全球 BGP 路由表里正常出现。BGP 层的中断比物理断缆更隐蔽——用户和系统不会看到\"断线\"，而是看到\"连接超时\"\"目标不可达\"。",
   "**AI 跨境算力（高依赖）**：GPU 算力服务（AWS/Azure/GCP 向全球客户提供 AI 推理接口）依赖 BGP 可达性——计算在美国，用户在亚洲，路由表里要有正确路径。BGP 中断就等于算力对外服务中断。",
   "**金融基础设施（高依赖）**：SWIFT 报文和 CHIPS/Fedwire 指令走互联网，互联网要靠 BGP 路由。fi-swift 和 fi-usd 在物理层依赖 ir-cables，在逻辑层依赖 ir-bgp。",
   "**没有库存缓冲**：BGP 路由失效是即时的。与石油有 30–60 天库存、光缆有路由切换时间不同——BGP 路由被撤回后，流向该目的地的数据包立刻在全球路由表上找不到出口。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "**Tier-1 去对等**：\n\n若一家 Tier-1 对一个 AS 去对等，该 AS 可以转向其他 Tier-1 购买 transit 流量（成本上升，延迟可能增加）。若所有 Tier-1 同时去对等（历史上对任何国家级 AS 从未发生过），该 AS 从全球路由表消失。\n\n当前情形：没有主要国家级网络被所有 Tier-1 完全去对等。俄罗斯、伊朗、朝鲜的网络都仍以某种形式存在于全球路由表——制裁走的是金融层（fi-usd/fi-swift），而非 BGP 层。\n\n实际 fallback 等级：`partial`——单一 Tier-1 去对等可绕开（找别家），多重同时去对等是理论情景，从未发生。\n\n**主权互联网（Sovereign Internet）**：\n\n俄罗斯通过 2019 年\"主权互联网法\"（联邦法律 No. 90-FZ，C3，广泛报道），要求所有俄罗斯互联网服务商在流量进出国际接口处安装深度包检测（DPI）设备和 SORM 监控系统，并授权 Roskomnadzor（俄罗斯联邦通信监管机构）在\"威胁情况下\"将俄罗斯域名系统和路由切换至国内备份版本（RuNet）。2022 年俄罗斯进行了 RuNet 隔离测试（C3，广泛报道）。\n\n按 fallback 五问：\n- 替代哪一层：替代对全球 BGP 表的依赖，在国内建立独立路由\n- 多久接上：一旦切换触发，DPI/SORM 系统立刻重定向；但实际上很多境外域名/服务依赖无法在国内替代（Google/YouTube/Wikipedia 等）\n- 卡在哪：国内没有可替代境外内容的等效服务；俄罗斯企业对境外 SaaS/云的依赖无法在国内 BGP 里解决\n- 谁有权限启动：Roskomnadzor 按内阁授权\n- 现场执行能力：2022 年测试表明技术机制存在，但\"切断后国内经济代价\"是实际约束\n\n结论：`partial`——俄罗斯技术上能隔离 BGP 层，但隔离成本太高（经济/信息代价），所以实践中只做过局部封锁（屏蔽特定应用），没有完全隔离。伊朗的国家信息网络（NIN）是更接近完全隔离的案例，但代价是经济收缩和技术落后。\n\n**中国的 Great Firewall**：\n\n中国的防火长城（GFW）实际上是一个永久运行的 BGP+DPI 双层过滤机制：在 BGP 层，中国国内路由（中国电信/联通/移动）通过审批的境外对等点与全球路由表连接，所有出入境流量必须经过有限的国际出口点（约 3 个主要城市：北京、上海、广州）；在应用层，DPI 过滤特定内容和协议。这是已 operational 的\"部分主权互联网\"——中国可以对特定目的地进行选择性路由封锁（GFW），而不需要完全切断全球 BGP 对等。fallback 等级：对中国自身而言，GFW 是已运行的 selective-routing 控制机制，而非\"断网\"。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "BGP 协议本身：零成本，开放标准，无市场。\n\nIP transit（骨干互联网流量传输服务）市场——这是 Tier-1 网络的核心商业模式：\n\n- **全球 IP transit 市场规模**：约 $100–150 亿/年（C2，无权威统计，需 TeleGeography 或 IDC 专项报告）。注：transit 价格长期下降，但流量增长持续，收入总量在平台期。\n- **Cogent Communications**（NASDAQ: CCOI）：FY2023 年营收约 $9.6 亿（C3，公开上市公司，需 10-K 原文核确切金额）；纯骨干 IP transit + 以太网专线为主。\n- **Lumen Technologies**（NYSE: LUMN）：FY2023 总营收约 $145 亿（C3，公开上市；但其 Business/Enterprise 段含企业广域网、SD-WAN 等，纯 IP backbone 只是子集，需 Lumen 年报拆分）。\n- **GTT Communications**（私有化，2022 年出破产保护）：约 $10–15 亿（C2 推算，无公开财报）。\n- **Zayo Group**（私有化）：约 $6–8 亿（C2 推算）。\n- **AT&T Business**：AT&T FY2023 总营收约 $1220 亿（C4，AT&T 10-K）；Business 段约 $290 亿，IP backbone 是其中小部分（C2）。\n- **NTT Communications**（NTT 全资子公司）：NTT FY2023（2023.4–2024.3）总营收约 13.4 万亿日元（约 $900 亿，C3，NTT 年报）；Communications 段约 $50–80 亿（C2 推算）。\n\nIXP 市场：主要 IXP（DE-CIX、AMS-IX、LINX）是非营利或合作社结构，按端口费收费（通常数千至数万欧元/月），全球 IXP 收费规模估计在数亿欧元以内（C2，无权威统计）——小但战略地位大。",
    "cLevels": [
     "C2",
     "C3",
     "C4"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **Tier-1 网络数量**：全球约 12–15 家（C3，网络工程师社区共识；准确数字随时间变化，AS 对等关系动态）\n- **美国/欧盟 Tier-1 合计占比**：约 10 家，即全球 Tier-1 约 80%+（C3，按结构层 3 名单计）\n- **中国 Tier-1 数量**：0（C4——中国主要运营商需向 Tier-1 购买 transit，无一达到 transit-free 对等状态）\n- **Price maker**：没有单一 Tier-1 是\"价格制定者\"——IP transit 价格在竞争中下降，但美国 Tier-1 对非 Tier-1 的定价有集体影响力；更关键的是它们的\"接入资格\"，是 access maker 而非 price maker\n\n【缺口：TeleGeography IP Transit Pricing Trends 报告原文，含各大洲 transit 价格时序和 Tier-1 市场份额估算】",
    "cLevels": [
     "C3",
     "C4"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 来源/年份 | 备注 |\n|---|---|---|---|\n| Cogent Communications | 约 $9.6 亿 | C3，FY2023，需 10-K 原文核 | 纯骨干，上市公司 |\n| Lumen Technologies | 约 $145 亿（总）| C3，FY2023，需 10-K | backbone 为子集；公司处于营收下滑 |\n| AT&T（Business 段）| 约 $290 亿 | C4，AT&T FY2023 10-K | backbone 是 Business 段里一部分 |\n| NTT（Communications 估）| 约 $50–80 亿 | C2 推算 | NTT 合并报表约 $900 亿，Communications 拆分需年报 |\n| GTT Communications | 约 $10–15 亿 | C2 推算，私有 | 2022 年破产后私有化，无公开财报 |\n| Zayo Group | 约 $6–8 亿 | C2 推算，私有 | 2020 年私有化，无公开财报 |\n| DE-CIX Group（IXP）| 约 €0.5–1 亿 | C2 推算 | 德国非营利，有年报但规模小；战略价值远高于营收 |\n\n【缺口：Cogent FY2023 10-K（10 美元/股，SEC EDGAR）；GTT 年度营收（2022/2023，无公开财报）；Zayo Group 财务（私有，EQT 不公开）；NTT Communications 单独营收拆分】",
    "cLevels": [
     "C3",
     "C4",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **全球 AS 数量**：约 10 万个注册 AS，约 7 万个在全球路由表可见（C3，RIPE NCC/RouteViews 统计口径）\n- **全球 BGP 路由表大小**：约 100 万条 IPv4 前缀（C3，接近 1M 的量级，历年约 10% 增长率，精确数字随时变动）\n- **RPKI 覆盖率**：约 40–50% 的全球 BGP 前缀有 ROA（C3，RIPE NCC 和 APNIC 各自统计口径，2023 年数据）——已经不可忽视，但仍有约一半路由没有加密验证保护\n- **断供传导速度**：BGP 路由撤回后，全球 BGP 表更新传播（BGP convergence）约需数分钟到 30 分钟（C3，行业技术常识）；期间有部分路由器缓存旧路由，实际中断体验约几分钟内触发",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "**巴基斯坦电信 2008 年 YouTube 劫持**：约 2 小时全球 YouTube 不可用（C4，RIPE NCC 记录）。YouTube 当时已是高流量平台，直接用户体验中断，但经济损失无可信量化估算。\n\n**伊朗 2019 年断网事件**：2019 年 11 月 15–20 日，伊朗当局在抗议期间将伊朗从全球互联网断开约 5 天（C4，NetBlocks/Cloudflare Radar 记录）。经济冲击估算：NetBlocks 报告估计约 $1.5–2.5 亿美元（C2，估算方法有争议）；伊朗政府否认损失。5 天约等于伊朗互联网经济年 GDP 的 1/70（假设伊朗数字经济约 $100 亿/年，C2 推算）。\n\n**俄罗斯 2022 年局部断网（屏蔽服务，非完全隔离）**：俄罗斯屏蔽 Facebook/Instagram（2022 年 3 月），封锁覆盖约 80% 俄罗斯社交媒体活跃用户（C3）。完全 RuNet 隔离未触发。经济损失：俄罗斯互联网经济约 $50–80 亿/年（C2），完全隔离情景预计对外向型企业损失显著，但未发生，无实证数字。\n\n**BGP 劫持（中国电信 2010 年，假设意图）**：约 15% 的全球路由前缀受影响约 18 分钟（不是 15% 的流量——实测流量转移量很小，C3，USCC 报告 + BGPmon/Citizen Lab 澄清）。真正的代价不在流量规模，而在情报：若有人在那 18 分钟里复制了被牵引前缀上的流量，其情报价值才是代价所在——经济上难量化，情报上可观。\n\n【缺口：RAND 或 Atlantic Council 关于大规模 BGP 断网情景的经济量化研究；USCC 2010 年中国电信 BGP 报告原文（含异常流量量级和持续时间的精确数字）】",
    "cLevels": [
     "C4",
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "BGP 协议：利润为零（公共品，无商业化）。\n\n**Tier-1 运营商**：IP transit 价格持续下降（每 Mbps 价格过去 10 年下降约 30–50%，C3 行业共识），运营商靠规模和成本控制维持盈利；毛利率约 30–50%（不同来源不同，C2），但 Cogent 等纯骨干运营商净利率相对低（资本密集型）。真正的利润不在 transit 定价，在于**路由位置对信息的可见性**——NSA PRISM 项目等已记录美国情报机构通过美国 Tier-1 运营商访问骨干流量（C3，Snowden 披露，2013 年）。这种\"信息租金\"不在利润表上，但是政治层面价值极高。\n\n**IXP**：非营利模式为主（DE-CIX/AMS-IX 是\"会员协会\"或\"基金会\"结构），利润不是目标；价值在于降低会员网络的互联成本，从而聚集更多流量（网络效应）。\n\n**\"看到流量\"的一方利润最大**：骨干路由上的流量监控（无论是情报机构还是商业分析）是价值最高的环节，但这不在任何公开的商业利润表里。\n\n---",
    "cLevels": [
     "C3",
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "BGP v4 由 RFC 4271 定义（IETF，2006）",
    "level": "C4",
    "source": "IETF 文档公开可查"
   },
   {
    "item": "Tier-1 网络定义：全球路由覆盖、不付 transit 费用",
    "level": "C4",
    "source": "网络工程/BGP 社区标准定义"
   },
   {
    "item": "全球约 12–15 家 Tier-1 网络",
    "level": "C3",
    "source": "网络工程师社区共识；名单随时间变化"
   },
   {
    "item": "结构层 3 名单中各 Tier-1 总部法域归属",
    "level": "C3–C4",
    "source": "各公司注册地为公开信息"
   },
   {
    "item": "中国主要运营商（中国电信/联通/移动）非 Tier-1",
    "level": "C4",
    "source": "BGP 对等关系分析，工程师社区共识"
   },
   {
    "item": "DE-CIX 峰值流量 >10 Tbps，会员 1,000+",
    "level": "C3",
    "source": "DE-CIX 官网公布"
   },
   {
    "item": "AMS-IX 峰值流量 >9 Tbps",
    "level": "C3",
    "source": "AMS-IX 官网公布"
   },
   {
    "item": "2008 年巴基斯坦电信 YouTube 劫持约 2 小时（C4）",
    "level": "C4",
    "source": "RIPE NCC 路由数据存档记录"
   },
   {
    "item": "2010 年中国电信 AS4134 BGP 异常约 18 分钟，约 15% 全球路由前缀（非流量；实测流量转移量很小）",
    "level": "C3",
    "source": "USCC 2010 年报告 + BGPmon/Citizen Lab 澄清"
   },
   {
    "item": "2019 年伊朗断网约 5 天（11 月 15–20 日）",
    "level": "C4",
    "source": "NetBlocks / Cloudflare Radar 记录"
   },
   {
    "item": "俄罗斯联邦法律 No. 90-FZ（2019-05-01）主权互联网法",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "俄罗斯 2022 年进行 RuNet 隔离测试",
    "level": "C3",
    "source": "广泛报道（俄罗斯数字发展部）"
   },
   {
    "item": "AFRINIC 2021 年遭司法冻结风险",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "RPKI ROA 覆盖约 40–50% 全球前缀（2023）",
    "level": "C3",
    "source": "RIPE NCC / APNIC 统计"
   },
   {
    "item": "Cogent FY2023 营收约 $9.6 亿",
    "level": "C3",
    "source": "公开上市公司，需 10-K 核"
   },
   {
    "item": "FISA §702 美国 Tier-1 合规义务",
    "level": "C4",
    "source": "50 USC §1881a，公开法律文本"
   },
   {
    "item": "FCC 吊销中国电信美洲/中国联通美洲 §214 许可",
    "level": "C3",
    "source": "FCC 公告，广泛报道"
   },
   {
    "item": "IANA Stewardship Transition 2016-10-01",
    "level": "C4",
    "source": "NTIA 公告，ICANN 文件"
   },
   {
    "item": "IP transit 市场规模约 $100–150 亿/年",
    "level": "C2",
    "source": "无权威统计，结构推算"
   },
   {
    "item": "全球 BGP 路由表约 100 万 IPv4 前缀",
    "level": "C3",
    "source": "RouteViews / RIPE NCC 看板常见引用"
   }
  ],
  "contested": {
   "title": "2022 年 FCC 撤销中国电信美洲和中国联通美洲的 §214 运营授权（以 BGP 路由安全为部分依据）",
   "summary": "2022 年 1 月，FCC 以国家安全为由撤销中国联通（美洲）的 Section 214 电信运营授权；2022 年 4 月，FCC 以同样理由撤销中国电信（美洲）的 Section 214 授权（此前 2021 年曾要求中国电信就安全问题提供回应，中国电信的回应被 FCC 判定为「不令人信服」）（C3，FCC 官方决定已公布，文号待取一手）。Section 214 是《通信法》的授权条款，是外国运营商在美运营所必需的许可证。失去 §214 = 中国运营商不能继续在美国境内提供电信服务，必须停止业务并断开美国网络的接入。"
  },
  "gaps": [
   "1. 【缺口：USCC（US-China Economic and Security Review Commission）2010 年度报告原文——含中国电信 AS4134 BGP 异常的具体描述（劫持路由数量/持续时间/受影响 AS 列表）】——把这个最重要的 BGP 劫持实证从 C3 升至 C4；直接影响\"BGP 作为进攻性情报工具\"的判断基础",
   "2. 【缺口：FCC 吊销中国电信美洲 §214 许可的完整决定文书（FCC DA 21-1281 或对应文件，2021-10-26；中国联通美洲 2022 年 DA）】——把\"FCC 在 BGP 对等层切断中国运营商\"从 C3 升至 C4；影响政治传动层 A/B 的制度接口分析",
   "3. 【缺口：RouteViews 或 RIPE NCC RIS 的当前 BGP 路由表快照（全球 AS 数 + IPv4 前缀数 + 各地区占比）】——把量化层 Q4 的路由表规模从 C3 升至 C4；可从 RouteViews.oregon-ix.net 或 RIPE NCC 统计页直接取数",
   "4. 【缺口：TeleGeography IP Transit Pricing Report（年度版）+ Tier-1 网络市场份额分析】——核 Q1 市场规模（$100–150 亿是 C2 推算）和 Q2 集中度量化；当前全为结构推算，无行业统计基础",
   "5. 【缺口：RIPE NCC / APNIC RPKI 部署状态统计页面原文（URL + 数据日期）】——核 Q4 的 RPKI 覆盖率（40–50% 是 C3 但需要具体来源 URL 和数据日期）；直接关系到 BGP 劫持防御能力的量化",
   "6. 【缺口：NetBlocks 伊朗 2019 年断网报告原文 + 经济损失估算方法】——核 Q5 中 $1.5–2.5 亿损失估算是否可靠；涉及\"国家级 BGP 断网\"最有实证价值的案例量化",
   "7. 【缺口：AFRINIC v Cloud Innovation Ltd. 毛里求斯法院案件记录（2021–2022）】——核\"RIR 司法脆弱性\"这条分析的法律事实基础；直接影响 RPKI 新卡点的判断",
   "8. 【缺口：Cogent Communications FY2023 10-K（SEC EDGAR）；GTT Communications 年度营收（私有，无公开财报，可能从债权人文件间接取）】——补 Q3 Tier-1 运营商财务数据"
  ]
 },
 "re-cable": {
  "sourceFile": "ir-cables.md",
  "archiveId": "ir-cables",
  "established": "2026-06-25",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Google",
    "role": null,
    "scale": null,
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "Meta",
    "role": null,
    "scale": null,
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "Microsoft",
    "role": null,
    "scale": null,
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "Amazon",
    "role": null,
    "scale": null,
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "中国电信/联通/移动",
    "role": null,
    "scale": null,
    "jurisdiction": "中国",
    "group": null
   },
   {
    "entity": "传统电信（AT&T/BT/NTT 等）",
    "role": null,
    "scale": null,
    "jurisdiction": "各自法域",
    "group": null
   }
  ],
  "upstream": [
   "**光纤原材料（F 类光纤）**：海缆专用光纤几乎全部来自日本三大厂（藤仓/古河/住友，合计全球估计约 60–70%，C2 推算）；美国有 OFS（前朗讯下属）和康宁（陆地光纤为主）。三家日本厂商不会同时停供，所以这里不构成单点，但集中度仍值得关注。【缺口：TeleGeography 或光纤行业协会的海缆光纤供应商份额数据，目前为 C2 推算】",
   "**中继器/光放大器（EDFA）**：各建设商自产，技术不兼容，形成事实上的\"修复供应商锁定\"——建设商中途退出（如华为海洋改名后被排除），其已建光缆的维修服务也跟着变得政治敏感。中继器依赖精密半导体元件（ac 栈上游）。",
   "**专用缆船**：全球约 40–60 艘能做深海光缆铺设和修复的专用船（C3，ITU 估算约在此量级；各来源数字有出入）。主要运营方：Orange Marine（法国 Orange 子公司）、SubCom 自有船队、ASN 旗下、Global Marine（英国，Macquarie 收购）、SBSS（新加坡）等。中国有少量缆船，但深海修复能力与西方有差距（C2）。缆船是修复的物理瓶颈——2024 年红海损缆后，修复排队时间达数月（C3）。"
  ],
  "downstream": [
   "**国际互联网流量（致命依赖）**：约 97% 的跨境互联网流量走光缆（C4）。电子邮件、视频、电商、API 调用——全在这条管子里。没有光缆的日子，绝大多数互联网服务直接停摆。",
   "**跨境金融交易（高依赖）**：SWIFT 报文、CHIPS/Fedwire 指令、外汇清算——所有这些都走互联网，而互联网实质上等于光缆。光缆是金融清算系统的物理承载。",
   "**AI 跨境算力（高依赖，增长中）**：美国云服务商（AWS/Azure/GCP）向东亚、中东、欧洲用户提供 GPU 算力，训练数据和模型都要走跨洲光缆。随着 AI 推理和训练工作负载增加，这一依赖在增强。",
   "**缓冲能力**：光缆本身无法\"存货\"；断缆的冲击几乎是即时的（路由切换需要分钟到小时，但带宽下降是立刻的）。与原油的 30–60 天库存缓冲不同——光缆断了没有\"库存\"顶着。"
  ],
  "fallback": {
   "verdictZh": "可能改道",
   "verdictRaw": "possible reroute",
   "unstructured": false,
   "text": "**卫星替代（Starlink/GEO 卫星）：**\n- `possible reroute`，对主要洲际路由不是 operational fallback。\n- 五问：替代哪一层=跨洲际互联网流量；多久接上=现有 Starlink 已在运行，技术上可立刻接；卡在哪=容量差距约 4–5 个数量级（卫星总容量估计在 10–100 Gbps 量级，vs 海底光缆的 1,000,000+ Gbps，C2 推算）；谁有权启动=无需许可；现场能不能执行=设备终端覆盖，容量严重不足。结论：卫星适合细路由（太平洋小岛、战时最后一段联系），对主干路由毫无替代意义。\n- 汤加 2022 年案例：单缆断后靠卫星维持约 5 周\"维生通信\"，不能维持正常网络服务——这是卫星 fallback 能力的上限实证。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **海底光缆建设市场**：约 $30–40 亿美元/年（C3，TeleGeography/行业广泛报道）。注意：这是建设支出，承载的流量价值是数量级以上的倍数。\n- **在役系统**：全球约 400+ 条活跃光缆，总长约 130 万公里（C3，TeleGeography 2024 口径）。\n- **科技公司投资占比**：近 5 年新建洲际缆项目中，Google/Meta/Microsoft/Amazon 合计投资占比估计约 40–60%（C2，无官方统计）。\n\n【缺口：TeleGeography Submarine Cable Almanac（年度版）原文——标准权威来源，含系统数量/容量/建设商份额/新建项目明细；影响 Q1/Q2 和容量所有权分析，是本节点最核心的行业数据原文】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "**建设端：**\n- CR4（SubCom/ASN/NEC/HMN）约 80–90%（C2，结构推算，无官方市场份额统计）\n- Price maker：HMN Technologies 曾以低报价大幅压低竞争对手的项目报价（C3）；现已被部分路由排除，但在非洲/东南亚/拉美路由仍构成价格竞争\n\n**地理集中度（真正的卡脖子维度）：**\n- 红海走廊：承载欧亚之间约 80–90%+ 的光缆（C3，行业共识）\n- 台湾：约 14 条光缆登陆（C3，TeleGeography）\n- 新加坡：亚太多条南北/东西走向缆的汇聚枢纽（C3）",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 最近年度营收 | 利润率 | 来源/备注 |\n|---|---|---|---|\n| **SubCom** | 【缺口：私募持股后无公开财报，约 $7–8 亿是 C2 推算】| — | Cerberus Capital 持股，不上市 |\n| **ASN（Nokia 子）** | Nokia FY2023 总营收约 €22.3B（C3 Nokia 年报）；ASN 营收未单独披露，估约 €3–5 亿（C2）| — | Nokia Network Infrastructure 分部；ASN 不单独披露 |\n| **NEC Corporation** | FY2024 总营收约 ¥3.75 万亿（约 $25B，C3 NEC 年报）；海缆部门约 ¥200–500 亿（C2）| — | 东京证交所上市 |\n| **HMN Technologies** | 私有公司，营收不透明（C1）| — | 前华为海洋，2020 年华为持股降至 49% 以下，Hengtong 控股 51%（C3）|\n| **Google（建缆投资方）** | Alphabet FY2023 总营收约 $3076 亿（C4，Alphabet 10-K）；光缆投资融入资本支出，不单独披露 | — | 光缆是基础设施资本支出，不影响 Google 营收 |\n\n【缺口：SubCom 独立财务数据；ASN 在 Nokia 内的拆分；NEC 年报中 Submarine Systems 分部数据；TeleGeography 建设商市场份额报告】",
    "cLevels": [
     "C2",
     "C3",
     "C1",
     "C4"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **国际互联网流量对光缆的依赖**：约 97%（C4，ITU 多年文献；TeleGeography）\n- **光缆对下游的容量占比**：卫星可用总带宽估约 10–100 Gbps，光缆总容量估约 1,000,000 Gbps（1 Pbps）以上（C2 推算，数量级差距，约 4–5 个数量级）\n- **断缆传导时间**：路由切换需分钟到小时；若单一走廊（如红海）多条同时受损，带宽下降是即时的，没有库存缓冲\n- **2024 年红海案例实测**：4 条光缆受损后，部分运营商报告欧亚路由延迟增加约 100–150ms，未完全断线（C3，行业报道）",
    "cLevels": [
     "C4",
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **2024 年红海损缆**：欧亚走廊带宽损失，多家运营商绕行开普敦，额外延迟约 100–150ms，修复时间约 2–4 个月（C3）。没有见到 GDP 冲击的量化报告；主要表现为企业运营成本增加和服务质量下降。\n- **台海断缆情景（假设性）**：若台湾 14 条光缆大多数被切断，台湾国际互联网带宽将从 Tbps 级降至 Gbps 级（降幅约 1000 倍，C2 推算）；所有跨境云服务、金融交易、网页访问严重受阻。台湾 2023 年 GDP 约 $7000 亿，数字经济高度依赖境外云互联——系统性冲击，难以精确量化（C2 推算）。【缺口：RAND 或 CSIS 台海冲突光缆断缆情景量化报告】\n- **汤加 2022 年**：单缆断，10 万人靠卫星维持约 5 周。经济影响估计在千万美元量级（C3）——证实单缆国家的卡点性质，也证实卫星的\"维生\"上限。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "- **建设商利润率薄**：重资产项目，行业共识约 5–15% 毛利率（C2），主要利润来自长期维护合同和深海修复的溢价收费（修复船费用和技术壁垒是利润来源）。\n- **大科技垂直整合把利润留在自身**：Google/Meta 自建光缆后，不再向建设商租用容量，减少了对外部运营商的付费。利润结构从\"建设商+运营商\"模式转向\"技术公司自有\"模式。\n- **修复服务利润最高**：专用缆船的深海修复市场是寡头（全球约 40–60 艘专用船，能做 6000m 深海修复的更少），修复合同报价高，是整个产业链里利润率最高的环节（C2 推算）。\n- **地理集中点无直接收费者**：霍尔木兹有伊朗坐在那里可以\"收费\"；红海有苏伊士运河通行费。但光缆的地理集中点没有人直接对过路光缆收费——胡塞武装的威胁是物理破坏，不是\"收过路费\"。这意味着光缆的地理卡点是纯粹的脆弱性，不创造政治租金。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "全球约 97% 的国际互联网流量走海底光缆",
    "level": "C4",
    "source": "ITU/TeleGeography 多年文献，权威共识"
   },
   {
    "item": "全球约 400+ 活跃光缆系统，约 130 万公里",
    "level": "C3",
    "source": "TeleGeography 广泛引用"
   },
   {
    "item": "建设市场约 $30–40 亿/年",
    "level": "C3",
    "source": "行业广泛报道，无单一权威统计"
   },
   {
    "item": "四大建设商合计约 80–90%",
    "level": "C2",
    "source": "结构推算，无官方市场份额统计"
   },
   {
    "item": "台湾约 14 条光缆登陆",
    "level": "C3",
    "source": "TeleGeography 口径广泛引用"
   },
   {
    "item": "EO 13913（2020-04-04）设立 Team Telecom",
    "level": "C4",
    "source": "联邦公报 85 FR 19643"
   },
   {
    "item": "2021 年 FCC 拒绝 PLCN 香港连接申请",
    "level": "C3–C4",
    "source": "FCC 文件可查，广泛报道"
   },
   {
    "item": "2018 年澳大利亚阻止华为海洋参与 PNG 光缆",
    "level": "C3",
    "source": "广泛报道，澳大利亚政府声明"
   },
   {
    "item": "2024 年红海至少 4 条光缆受损",
    "level": "C3–C4",
    "source": "多家运营商公告，媒体广泛报道"
   },
   {
    "item": "卫星总带宽约 10–100 Gbps vs 光缆约 1 Pbps+",
    "level": "C2",
    "source": "数量级推算，无权威统计"
   },
   {
    "item": "深海修复约数周到 3 个月",
    "level": "C3",
    "source": "行业共识"
   },
   {
    "item": "HMN Technologies 是华为海洋更名，Hengtong 控股 51%",
    "level": "C3",
    "source": "公司官网+广泛报道"
   },
   {
    "item": "UNCLOS 第 113 条保护海底光缆",
    "level": "C4",
    "source": "1982 年联合国条约文本"
   },
   {
    "item": "EU NIS2 指令（2022/2555）含登陆站关键基础设施条款",
    "level": "C3–C4",
    "source": "EUR-Lex 可取原文"
   },
   {
    "item": "SubCom 营收约 $7–8 亿",
    "level": "C2",
    "source": "私募持股后无公开财报，行业估算"
   },
   {
    "item": "修复成本约 $100–200 万/次",
    "level": "C3",
    "source": "行业估算，无权威统计来源"
   }
  ],
  "contested": {
   "title": "2024 年红海光缆集中受损（2024-01 至 2024-03，修复延至 H2 2024）",
   "summary": "这是 ir-cables 节点地理卡点的第一次大规模实证检验。红海走廊承载欧亚之间约 80–90% 的海底光缆流量，此前分析一直是\"如果切断会怎样\"的假设；2024 年这个假设被部分实证，虽然是局部受损而非彻底切断。五个阅读动作："
  },
  "gaps": [
   "1. 【缺口：TeleGeography Submarine Cable Almanac（年度最新版）原文】——标准权威来源，含系统数量/容量/建设商份额/新建项目拆分；影响 Q1/Q2/容量所有权分析，是本节点最核心的行业数据原文",
   "2. 【缺口：EO 13913 联邦公报全文（85 FR 19643，2020-04-04）+ FCC PLCN 拒绝令（DA 21-78 或对应文件，2021-01）】——把 Team Telecom 机制和 PLCN 案例从 C3 升至 C4；影响政治传动层 A/B/E 的法律基础",
   "3. 【缺口：2024 年红海光缆损坏运营商原始公告汇总（Seacom/EIG/AAE-1 等运营商官方发布）+ 胡塞武装活动时间线与损缆时间的关联报告】——把红海卡点案例从广泛报道升至一手证据；影响地理集中度分析和 Q5",
   "4. 【缺口：UNCLOS 第 113 条原文（联合国条约汇编，1982）+ ITU 近期海底光缆保护工作文件】——把光缆保护法律框架升至 C4；影响政治传动层 A",
   "5. 【缺口：EU NIS2 Directive 2022/2555 原文（EUR-Lex）中具体涉及海底光缆登陆站的条款页】——把欧盟监管框架升至 C4；影响政治传动层 A",
   "6. 【缺口：SubCom 独立财务数据（私募持股后不公开；可能从 Cerberus Capital 公告、竞争对手的 SEC 文件间接推算）；ASN 在 Nokia Network Infrastructure 分部内的拆分；NEC Corporation 年报中 Submarine Systems 分部】——影响 Q3 建设商财务纵深判断",
   "7. 【缺口：海缆专用光纤供应商份额数据（藤仓/古河/住友 vs 美国/欧洲）——需 Fiber optic industry 专项报告或各厂财报的海缆光纤分部】——影响结构层 5 上游分析，目前全 C2 推算",
   "8. 【缺口：RAND 或 CSIS 台海冲突光缆断缆情景量化报告】——核台海断缆对台湾 GDP/互联网带宽的量级影响；影响 Q5 假设情景量化\n---"
  ]
 },
 "re-dns": {
  "sourceFile": "ir-dns.md",
  "archiveId": "ir-dns",
  "established": "2026-06-26",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [],
  "upstream": [
   "**物理层依赖（ir-cables → ir-bgp → ir-dns）**：DNS 查询本身是 UDP/TCP 数据包，需要 BGP 路由和光缆传输。根服务器宕机（罕见，有 Anycast 冗余）或 BGP 路由异常会导致 DNS 解析中断。DNS 在物理传输层有依赖但不构成单点（Anycast 多节点分布，C4）。",
   "**操作系统/浏览器软件依赖**：trust store 内置于 Apple/Microsoft/Google 的操作系统和浏览器软件更新中。CA 的信任状态通过软件更新推送——这意味着软件分发管道（App Store、Windows Update、Chrome 自动更新）是 trust store 变更的物理传导层，更新速度按天到周计，不像 BGP 变更那样秒级生效。",
   "**密钥管理基础设施（HSM）**：根 CA 的私钥存放在硬件安全模块（HSM）里，部分根 CA 的密钥仪式（key ceremony）有严格物理安全流程（公开可见，多方公证），不存在一家公司单独控制的技术单点。但如果 HSM 厂商（主要为 nCipher/Entrust、Thales）遭遇供应链攻击，这是一个潜在的上游依赖。"
  ],
  "downstream": [
   "**全球电子商务（致命依赖）**：任何 HTTPS 交易（网银、购物、登录）同时依赖 DNS 解析和有效 CA 证书。DNS 根区故障或 CA 大规模失信的经济影响以分钟计（比物理断缆更快触发）。",
   "**API 通信（高依赖）**：微服务、移动 App、IoT 设备的 API 调用通过域名而非 IP 连接——都依赖 DNS 解析。",
   "**国家域名（高依赖）**：每个 ccTLD 国家的政府/企业/媒体网站都依赖自己的国家 TLD 在根区的存在。这是 ICANN 对主权国家的理论上最极端杠杆——但从未使用。",
   "**没有有效库存缓冲**：DNS 缓存（TTL，通常 300–3600 秒）提供几分钟到几小时的短暂缓冲，但 CA 证书一旦被撤销（CRL/OCSP），效果在现代浏览器里几乎即时生效（软 deadline 内实时检查）。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "**DNS 替代**：\n\n*国家级备用 DNS（部分主权互联网）*：中国（.cn 体系）、俄罗斯（Ruzone 本地 DNS 备份）已有国内 DNS 替代机制。如果根区删除 `.cn` 或 `.ru`，中国/俄罗斯的 ISP 可以配置本地解析器不查询全球根服务器，转而使用国内授权的根服务。\n\n按 fallback 五问：\n- 替代哪一层：替代对全球 DNS 根区的依赖，改用国内 DNS 根\n- 多久接上：技术上可配置到 ISP 级，命令下达后数小时到数天内完成（政府控制 ISP 的国家）\n- 卡在哪：国内 DNS 体系需要国内用户的递归解析器全部切换；境外访问者仍走全球 DNS，只是解析不到该国 ccTLD（境外用户对该国的访问受影响，反向）；国内用户访问境外域名（`.com`/`.org` 等）不受影响——这是 ccTLD 删除和 BGP 去对等的关键区别\n- 谁有权限启动：主权国家 ISP 主管部门\n- 现场执行能力：中俄已演练过，技术能力已确认（C3）\n\n结论：`partial`——ccTLD 被删除对国家域名体系是局部损伤，不是完全杀伤；而且 ICANN 从未动用，极端情景下有时间反应。\n\n*HTTPS 替代方案（降级）*：\n- 自签名证书（Self-signed）：用户手动信任，无法大规模部署\n- 内部 CA：企业私有 PKI，不依赖公共 CA\n- 结论：`blocked`——公开互联网无法绕开公共 CA trust store 体系，降级方案只在封闭网络内有效\n\n**CA trust store 替代**：\n\n若一家 CA 被全部四个主流 trust store 移除（最极端情形）：\n- 该 CA 签发的所有证书在所有主流操作系统/浏览器里显示\"不安全\"\n- 受影响网站需要更换 CA，向仍受信任的 CA 申请新证书——Let's Encrypt 等可在分钟内颁发，迁移速度按小时到天计\n- 结论：`operational`——CA 更换技术上可以很快（Let's Encrypt 自动化，几小时）；但若被针对的是某个国家的所有 CA 且替代 CA 无法服务该国实体，则转变为 `blocked`\n\n中国场景（2016 年 WoSign/StartCom 已发生）：中国大陆 CA 在主流 trust store 里几乎为零，但并未造成国内网站访问危机——原因是国内大量使用 DigiCert/Sectigo/Let's Encrypt 等境外 CA。若境外 CA 不再向中国实体服务（假设极端制裁场景），中国需要本土 CA 被 trust store 接受——这条路因 WoSign 事件已基本关闭，是全图里少见的\"理论上极难恢复的单点\"（C2，无充分证据说已有应对方案）。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "**DNS 服务市场**：\n\n全球 DNS 托管/解析服务市场约 **$12–18 亿/年**（2023，C2，无单一权威统计；Mordor Intelligence/Grand View Research 有商业报告但需原文核）。这是付费 DNS 服务（企业 DNS 管理、DDoS 防护 DNS 等），不包括免费公共 DNS（Google 8.8.8.8、Cloudflare 1.1.1.1）。\n\nVerisign（.com/.net 注册局）：FY2023 年营收约 **$15.3 亿**（C4，Verisign 2023 年报，NASDAQ: VRSN 上市公司）。这是全球 DNS 商业化里最单纯的一个收费节点：约 1.6 亿 `.com` 域名每年续费（约 $8–10/域名注册局层）。\n\n**CA/PKI 市场**：\n\n全球公钥基础设施（PKI）市场约 **$50–80 亿/年**（2023，C2，IDC/Gartner/MarketsandMarkets 商业报告）。这包括企业 PKI 解决方案、代码签名证书、S/MIME 邮件证书等，不只是网站 TLS 证书。\n\nDigiCert 单独估值：2022 年 Thoma Bravo 以约 **$69 亿**收购（C3，Bloomberg/Reuters 报道），是对 CA/PKI 市场价值的市场定价参考。",
    "cLevels": [
     "C2",
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "**DNS 根区**：CR1 = 100%（ICANN/Verisign 垄断根区内容，C4）。`.com` 注册局：CR1 = 100%（Verisign，C4）。`.com` 是全球最大 TLD，约占全球注册域名约 35–40%（C3，Verisign/Verisign Domain Industry Brief）。\n\n**CA（按活跃 HTTPS 证书数量）**：\n- Let's Encrypt（ISRG）：约 **50%**（C3，Netcraft/W3Techs 2023）\n- DigiCert：约 **15–20%**（C3，含原 Symantec/Thawte/GeoTrust 品牌）\n- Sectigo（原 Comodo CA）：约 **15%**（C3）\n- GlobalSign：约 **5–8%**（C3）\n- 其余：约 10%\n\nLet's Encrypt 的主导地位使 ISRG（美国非营利）成为 CA 层隐性的价格制定者（它的免费证书让所有付费证书定价下压）。CA trust store 控制者：四家（Apple/Microsoft/Google/Mozilla），均在美国（C4）。",
    "cLevels": [
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "**Verisign（NASDAQ: VRSN）**：\n- FY2023 营收：约 **$15.3 亿**（C4，10-K 年报，可核）\n- 毛利率：约 **82%**（C3，历年毛利率区间 80–85%，待年报核）\n- 净利率：约 **50%**（C3，推算）\n- 市值：约 **$180–200 亿**（C3，2024 年区间，需核确切数字）\n- 商业模式：几乎纯经常性收入，`.com` 续费合同受 ICANN 约束（每 6 年重新谈判，但历史上从未实质变更）。进入壁垒极高——注册局的垄断由合同支撑，新进入者无法复制。\n\n**DigiCert（私有化）**：\n- 营收约 **$5–8 亿/年**（C2 推算，无公开财报；Thoma Bravo 收购价 $69 亿对应典型 PE 倍数推算）\n- 企业级市场主导，高价值 EV 证书和代码签名市场份额高（C2）\n\n**Let's Encrypt（ISRG，非营利）**：\n- 年度预算约 **$400–600 万**（C3，ISRG 年度报告，公开透明度报告可核）——这是全图里影响力和运营成本最不成比例的例子之一：每年数百万美元运营着全球约 50% 的 HTTPS 信任链\n\n**ICANN（非营利）**：\n- 年营收约 **$1.3–1.5 亿**（C3，ICANN 年报，主要来源是 TLD 注册商合同费）——运营着全球 DNS 根区的策略机构，但实际根区编辑委托给 Verisign",
    "cLevels": [
     "C4",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "**DNS 的下游依赖**：全球约 **2 亿+ 域名**（C3，Verisign Domain Industry Brief 2023），每一个域名对应至少一个在线实体（企业、政府、媒体、个人）。任何依赖域名的 API、网站、邮件、应用都是 DNS 的下游——实际上是整个应用层互联网。\n\n**CA 的下游依赖**：全球 HTTPS 网站约 **5–6 亿**（C3，Netcraft 2023 调查）。Chrome/Firefox/Safari 用户对非 HTTPS 网站的访问已逐步限制（Chrome 2023 起对 HTTP 显示更多警告，C4），HTTPS 覆盖率持续升高，使 CA 体系的下游依赖广度比五年前更大。\n\n库存缓冲：DNS 缓存 TTL 通常 300–3600 秒（5 分钟到 1 小时），CA OCSP 响应缓存通常 24–48 小时。实际中断后缓冲极短。",
    "cLevels": [
     "C3",
     "C4"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "**`.com` 域名体系中断场景**（假设 DNS 根区故障或 Verisign 运营中断）：\n\n全球 `.com` 电子商务年交易额约 **$5–10 万亿**（C2，电商体量推算；`.com` 域名下的亚马逊/谷歌/苹果/脸书/eBay 等平台的年营业额合计量级）。小时级中断 → 数百亿美元交易无法完成（C2 推算）。\n\n历史参考：2016 年 Dyn DNS（主要 DNS 服务商）遭受 Mirai 僵尸网络 DDoS 攻击，美国东海岸大范围网站无法访问约 6 小时——评估经济损失约 **$1 亿**（C2，第三方估算，因大多数平台有冗余 DNS 服务商而损失有限，C3）。\n\n**CA trust store 中断场景**（假设所有主流 trust store 同时撤销某个大型 CA）：\n\nDigiCert 突然被移除的情景：约 **1.5–2 亿**个网站需要在 24–48 小时内更换证书（C2 推算，DigiCert 市场份额×总 HTTPS 域名数）；技术上通过 Let's Encrypt 自动化可在数小时内迁移，但企业级证书（代码签名、电子邮件 S/MIME）无法自动迁移；预计波动性损失数十亿美元（C2，推算）。\n\n【缺口：需要 Verisign 10-K 2023 年报（营收/毛利率/市值）；DNS 市场规模权威报告（IDC/Gartner/TeleGeography）；HTTPS 网站数量 Netcraft Survey 2023；PKI 市场规模报告（IDC/MarketsandMarkets）；ISRG Let's Encrypt 2023 年度透明度报告（证书量/运营成本）】",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "DNS 层的利润主要留在 **Verisign**（约 50% 净利率，全球最高利润率之一，经常性收入无需资本投入扩产）。注册商层（GoDaddy、Namecheap 等）利润率显著低于 Verisign，是 Verisign 的经销商而非竞争对手。\n\nCA 层：传统 CA（DigiCert/Sectigo）的企业高价值证书利润率高（EV 证书订阅模式），但 Let's Encrypt 的免费证书把大量标准 DV 证书的利润压缩至接近零。利润转向**增值服务**（证书管理自动化平台、IoT 设备身份管理）而非证书本身。\n\nTrust store 控制者（Apple/Google/Microsoft）：直接从 CA 业务中**不获取收入**（trust store 对 CA 是强制合规要求，不是商业交易）——它们的利润来源是操作系统/浏览器生态，trust store 是维持生态安全性的成本中心，不是利润中心。这是本节点的财务结构异常之处：最核心的政治控制权（trust store）掌握在不从中盈利的主体手里，这意味着干预的激励结构不同于 Verisign 这类有明确商业利益的控制者。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "ICANN 是美国加利福尼亚州非营利法人",
    "level": "C4",
    "source": "ICANN 公开法律文件"
   },
   {
    "item": "Verisign 是 `.com`/`.net` 独家注册局，持有 ICANN 合同",
    "level": "C4",
    "source": "Verisign ICANN 合同（公开）"
   },
   {
    "item": "12 家根服务器运营机构中约 9 家在美国法域",
    "level": "C4",
    "source": "IANA 根服务器列表（iana.org）"
   },
   {
    "item": "2016 年 NTIA 将 IANA 监管权移交多利益相关方社区",
    "level": "C4",
    "source": "NTIA 官方公告 2016-09-30"
   },
   {
    "item": "Apple/Microsoft/Google/Mozilla 四家均在美国法域",
    "level": "C4",
    "source": "公开公司注册信息"
   },
   {
    "item": "Google Chrome 2022 年启用独立 Chrome Root Store",
    "level": "C4",
    "source": "Chrome 政策博客（公开）"
   },
   {
    "item": "CA/Browser Forum 基线要求，2012 年起实施",
    "level": "C4",
    "source": "CA/B Forum 官网（公开）"
   },
   {
    "item": "DigiNotar 被所有主流 trust store 移除（2011）",
    "level": "C4",
    "source": "Mozilla/Google/Microsoft 官方公告"
   },
   {
    "item": "WoSign/StartCom 伪造时间戳并为 GitHub 签发未授权证书（2016）",
    "level": "C4",
    "source": "Mozilla 2016 年安全调查报告"
   },
   {
    "item": "WoSign/StartCom 被 Firefox/Chrome/Safari 移除",
    "level": "C4",
    "source": "Mozilla/Google/Apple 官方公告"
   },
   {
    "item": "Apple 2020 年起 TLS 证书有效期上限 398 天",
    "level": "C4",
    "source": "Apple WWDC 2020 / CA/B Forum 跟进政策"
   },
   {
    "item": "巴基斯坦电信 2008 年 BGP 劫持导致 YouTube 全球中断约 2 小时",
    "level": "C4",
    "source": "RIPE NCC 数据存档 + 广泛媒体记录"
   },
   {
    "item": "ICANN 从未主动删除现存国家 ccTLD",
    "level": "C4",
    "source": "ICANN 历史记录（公开）"
   },
   {
    "item": "Verisign FY2023 营收约 $15.3 亿",
    "level": "C4（待核年报）",
    "source": "Verisign 2023 10-K 年报"
   },
   {
    "item": "`.com` 下注册域名约 1.6 亿",
    "level": "C3",
    "source": "Verisign 2023 Domain Industry Brief"
   },
   {
    "item": "Let's Encrypt 占全球活跃 HTTPS 证书约 50%",
    "level": "C3",
    "source": "Netcraft 2023 / W3Techs 统计"
   },
   {
    "item": "全球 Tier-1 网络法域分布（美国约 5–6 家/EU 约 4 家）",
    "level": "C3",
    "source": "TeleGeography / 公开 ASN 数据"
   },
   {
    "item": "Chrome 全球浏览器市场份额约 65%",
    "level": "C3",
    "source": "StatCounter 2023"
   },
   {
    "item": "全球 HTTPS 网站约 5–6 亿",
    "level": "C3",
    "source": "Netcraft 2023 调查"
   },
   {
    "item": "DigiCert 2022 年被 Thoma Bravo 以约 $69 亿收购",
    "level": "C3",
    "source": "Bloomberg/Reuters 报道"
   },
   {
    "item": "ISRG Let's Encrypt 年度预算约 $400–600 万",
    "level": "C3",
    "source": "ISRG 年度透明度报告"
   },
   {
    "item": "ICANN 年营收约 $1.3–1.5 亿",
    "level": "C3",
    "source": "ICANN 年报"
   },
   {
    "item": "Chrome/Firefox/Safari 均已驱逐 WoSign/StartCom",
    "level": "C4（各自官方声明）",
    "source": "各浏览器厂商公告"
   },
   {
    "item": "Huawei HarmonyOS 有独立 trust store",
    "level": "C3",
    "source": "广泛媒体/技术报道"
   },
   {
    "item": "CFCA 目前在部分 trust store 内但份额极小",
    "level": "C3",
    "source": "trust store 现状（Mozilla 列表公开）"
   },
   {
    "item": "RPKI 约 40–50% 全球路由覆盖（来自 ir-bgp 节点）",
    "level": "C3",
    "source": "RIPE NCC / APNIC 统计"
   },
   {
    "item": "Verisign 毛利率约 82%",
    "level": "C3",
    "source": "Verisign 历年年报区间"
   },
   {
    "item": "全球 DNS 服务市场约 $12–18 亿/年",
    "level": "C2",
    "source": "商业报告推算，无权威统计"
   },
   {
    "item": "全球 PKI 市场约 $50–80 亿/年",
    "level": "C2",
    "source": "IDC/Gartner/MarketsandMarkets 商业报告"
   },
   {
    "item": "`.com` 下电商年交易额 $5–10 万亿量级断供影响",
    "level": "C2",
    "source": "量级推算"
   },
   {
    "item": "中国 CA 重建 trust store 信任时间线",
    "level": "C2",
    "source": "推算，无公开方案"
   }
  ],
  "contested": {
   "title": "2022-02/03 乌克兰请求 ICANN 撤销俄罗斯 ccTLD（.ru/.рф）与吊销境内根服务器 → ICANN 拒绝",
   "summary": "俄乌战争爆发后数日，乌克兰副总理兼数字转型部长 Fedorov 正式致函 ICANN，请求撤销 `.ru`、`.рф`、`.su` 顶级域、吊销相关 SSL 证书、并关停俄罗斯境内的根服务器镜像。这是 DNS 根区权威第一次被一个主权国家公开要求当武器用。"
  },
  "gaps": [
   "1. **【缺口：需要 Verisign 2023 年报（10-K）**】——营收精确数字、毛利率、市值；这是 Q1/Q3 最影响卡点判断的基础数字。（目前 C3 有口径，需年报原文升 C4）",
   "2. **【缺口：需要 Mozilla 2016 年 WoSign/StartCom 调查报告原文】**——证实 WoSign 技术罪行的完整技术细节，影响中国 CA 信任损伤深度的判断精确度。",
   "3. **【缺口：需要 ISRG Let's Encrypt 2022/2023 年度透明度报告】**——证书颁发量/增速/运营成本，影响 Q1/Q3 量化层和 Let's Encrypt 作为\"民主化替代\"的真实规模判断。",
   "4. **【缺口：需要 Netcraft Web Server Survey 2023】**——全球 HTTPS 网站总数、CA 市场份额分布，影响 Q2/Q4 量化层和 CA 集中度判断。",
   "5. **【缺口：需要 ICANN Annual Report 2022/2023】**——ICANN 年营收来源细分（注册商合同费分成），影响 Q3 对 ICANN 自身财务规模的判断。",
   "6. **【缺口：需要 Chrome Root Store Policy 2022 原文】**——Chrome 独立 trust store 的启动条件和政策细节，影响 trust store 独立性和政治干预路径的分析。",
   "7. **【缺口：需要 CA/Browser Forum Baseline Requirements 最新版（2023/2024）】**——证书有效期、CT Log 强制要求等核心行业规则的精确条文，影响控制状态流转（B 维）的分析。\n---"
  ]
 },
 "ph-api": {
  "sourceFile": "ph-api.md",
  "archiveId": "ph-api",
  "established": "2026-06-26",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "华北制药（NCPC）",
    "role": "国有（国药集团旗下）",
    "scale": null,
    "jurisdiction": "石家庄/中国",
    "group": "中国（约 40% 全球，抗生素品类 80–90%）："
   },
   {
    "entity": "石药集团（CSPC Pharmaceutical）",
    "role": "港股上市，国资参股",
    "scale": null,
    "jurisdiction": "石家庄/中国",
    "group": "中国（约 40% 全球，抗生素品类 80–90%）："
   },
   {
    "entity": "华海药业",
    "role": "私营，A 股",
    "scale": null,
    "jurisdiction": "浙江/中国",
    "group": "中国（约 40% 全球，抗生素品类 80–90%）："
   },
   {
    "entity": "新华制药",
    "role": "A 股上市，国资",
    "scale": null,
    "jurisdiction": "山东/中国",
    "group": "中国（约 40% 全球，抗生素品类 80–90%）："
   },
   {
    "entity": "浙江医药",
    "role": "A 股，民营",
    "scale": null,
    "jurisdiction": "杭州/中国",
    "group": "中国（约 40% 全球，抗生素品类 80–90%）："
   },
   {
    "entity": "Divi's Laboratories",
    "role": null,
    "scale": "约 ₹7,585 亿（约 $9.2 亿，C3，年报）",
    "jurisdiction": null,
    "group": "印度（约 20%）："
   },
   {
    "entity": "Aurobindo Pharma",
    "role": null,
    "scale": "约 $3.5 亿 API 部分（C2 推算，总营收约 $3.2 Bn）",
    "jurisdiction": null,
    "group": "印度（约 20%）："
   },
   {
    "entity": "Dr. Reddy's",
    "role": null,
    "scale": "总营收约 $2.9 Bn（C3，FY2023 年报）",
    "jurisdiction": null,
    "group": "印度（约 20%）："
   },
   {
    "entity": "Cipla",
    "role": null,
    "scale": "总营收约 $2.7 Bn（C3）",
    "jurisdiction": null,
    "group": "印度（约 20%）："
   },
   {
    "entity": "Laurus Labs",
    "role": null,
    "scale": "约 ₹5,100 亿（约 $6.2 亿，C3）",
    "jurisdiction": null,
    "group": "印度（约 20%）："
   }
  ],
  "upstream": [
   "**化学前体（关键依赖）**：大多数抗生素 API 通过发酵或化学合成两条路线生产。化学合成路线需要基础有机化学品（苯、甲苯、DMF 等）和关键中间体（6-APA 是青霉素 API 的前体，6-APA 本身几乎也在中国生产）。中国同时主导了多个 API 前体的供应，使得「买中国 API 绕过」比「买前体自己合成」同样难解。",
   "**发酵培养基和工业酶**：抗生素发酵工艺需要特定工业酶（Novozymes 等丹麦/荷兰公司仍有供给，分散度较好），不是单点。",
   "**化工能源**：大规模发酵合成是能耗密集型工业，中国能以较低电价生产 API 是成本优势的物质来源。如果中国电价上升或对 API 出口征收额外税，成本优势缩窄，但不会立刻消失。",
   "总体：上游依赖没有 EUV 那种极端单点，但多个前体也由中国主导，买不到 API 时大概率同时买不到便宜的前体。"
  ],
  "downstream": [
   "**印度仿制药厂（依赖度极高）**：印度是「世界药房」——向 200+ 个国家出口成品仿制药，但印度仿制药厂约 60–70% 的 API 从中国进口（C3，印度制药联合会数据）。这是典型的双层脆弱性：中国掐印度 → 印度掐全球。",
   "**美国仿制药市场（高依赖，间接）**：美国仿制药约 90% 依赖海外（主要是印度）API 和成品药（C3，FDA 报告）。美国卫生部门的关键担忧是：多数常用仿制药（包括抗生素、血压药、心脏药）的 API 最终来自中印，国内产能基本为零。",
   "**欧洲（高依赖，已有政策响应）**：欧盟 2023 年发布「关键药品法案」（Critical Medicines Act 倡议），试图通过战略储备和分散采购减少单一来源依赖（C3，委员会文件）。",
   "断供库存缓冲：医院和制药厂通常持有约 2–6 个月的 API 库存（短则 2 个月，部分关键 API 企业战略备货更长，C2 推算）。真正的断供窗口要超过库存缓冲才会触发临床短缺，这给政治响应留了一定时间，但 2020 年 COVID 封锁期间短期物流中断已经造成局部短缺（C3）。"
  ],
  "fallback": {
   "verdictZh": "可能改道",
   "verdictRaw": "possible reroute",
   "unstructured": false,
   "text": "青霉素 API 的真实 fallback 等级：`possible reroute`（中期，3–5 年重建路径存在但未完成）。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球 API 市场约 $2200–2500 亿美元（2023 年，C3，IQVIA/Grand View Research 行业估算）。\n\n细分：\n- 化学合成 API（主流）：约占约 70%，即约 $1500 亿\n- 生物 API（单抗/蛋白质）：约 30%，这部分集中度更分散，主要在美欧\n- 大宗仿制药 API（抗生素+维生素+心血管+镇痛）：约 $800–1000 亿，中国主导\n\n具体细分口径因来源不同差异较大，但数量级确认：千亿美元级，且中国主导的大宗 API 约占总市场 30–40%。",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **整体 API 市场 CR2（中国+印度）**：约 60%（C3）\n- **抗生素 API CR1（中国）**：约 80–90%（C3）\n- **维生素 C CR1（中国）**：约 95%（C3）\n- **Price maker**：中国国有 API 企业（在大宗品类），靠低价格影响全球市场；印度仿制药厂对中国是价格接受者",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 公司 | FY2023 营收 | 利润率 | 市值/估值 | C 等级 | 来源 |\n|---|---|---|---|---|---|\n| Divi's Laboratories（印度，专业 API） | 约 $9.2 亿（₹7,585 Cr）| 净利率约 24%（C3）| 约 $10 Bn 市值（NSE，C3）| C3 | 年报 |\n| Aurobindo Pharma（印度）| 总约 $3.5 Bn，API 段约 $700–800 M（C2 推算）| 净利率约 9%（C3）| 约 $4 Bn（NSE，C3）| C3 | 年报 |\n| Dr. Reddy's（印度）| 约 $2.9 Bn 总营收（C3）| 净利率约 13%（C3）| 约 $7 Bn（NYSE:RDY，C3）| C3 | FY2023 年报 |\n| 石药集团（中国，港股）| 约 318 亿港元（$41 亿，C3）| 净利率约 17%（C3）| 约 HK$44 Bn（C3）| C3 | FY2022 年报 |\n| 华北制药（NCPC）（中国，A 股）| 【缺口：需要 NCPC 年报营收数字，A 股代码 600812】| — | — | — | — |\n| DSM-Firmenich Pharma 事业部 | 【缺口：需要 DSM 制药部门分部营收，约 $10–20 亿 C2 推算】| — | — | C2 | 行业估算 |\n\n**中国大宗 API 企业毛利率普遍偏低（约 15–25%），靠量维持**；印度专业 API 企业（如 Divi's）毛利率约 40–45%，利润率更高，产品更复杂。这个对比说明政治压力首先打到哪个资产负债表上：中国国企受政治指令可以不计经济利益；印度私营企业有盈利压力，响应逻辑不同。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **印度进口依赖**：印度仿制药厂约 60–70% API 从中国进口（C3，印度制药联合会 IPA 2022 年数据）；抗生素 API 专项依赖更高，估约 80–90%（C2）\n- **美国间接依赖**：约 72% 美国仿制药活性成分来自海外（C3，FDA DSCSA 数据，约 2019 年国会报告），其中大部分来自中印\n- **断供库存缓冲**：API 制造商通常持有约 3–6 个月的前体和 API 成品库存；下游制药厂通常持有约 2–4 个月 API 库存（C2，行业估算）；超过 6 个月断供，常规库存全部耗尽",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供冲击量级",
    "text": "- **局部断供（单品类，如青霉素 API 断供）**：全球抗生素短缺，下游医院治疗感染症能力下降。欧洲已有 2022 年冬季阿莫西林短缺案例（EMA 预警 + 部分国家配给，C3）——但成因是需求激增 + 物流阻塞，非供给方断供。\n- **重大事件中的冲击历史**：2008 年中国肝素 API 受 NDMA 杂质污染，造成美国约 81 人死亡（C4，FDA 事故报告）——这是迄今最直接的 API 单一来源风险实证。\n- **全规模断供量级**：【缺口：需要 RAND/GE Healthcare/IQVIA 专项断供冲击报告，估约数百亿美元 GDP 间接损失 + 医疗系统容量下降，C2 推算，没有可靠报告引用数字】",
    "cLevels": [
     "C3",
     "C4",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "大宗 API（抗生素、维生素）的价值链利润**主要沉淀在下游成品药配方和品牌环节**，不在 API 原料层：\n\n- 一颗阿莫西林 API 约 $0.01–0.03/剂（C2，市场估算）\n- 最终成品药零售价约 $0.5–5/剂\n- 品牌药或复杂配方药可到 $10–50+/剂\n\n这意味着 API 层本身的利润极薄，供给方是利润率最低的节点，而非最高的节点。政治压力打到 API 供给方的资产负债表上，伤害实际上不大（中国国企甚至可以亏损维持产能）；真正的伤害传导给**下游仿制药厂**（原材料成本骤升）和**最终消费者/卫生系统**（药品短缺或价格飙升）。\n\n这是这个节点区别于 cm-ree/ac-gpu 的重要特征：卡点持有者（中国 API 厂）本身的经济利益并不依赖这个卡点——他们断供自己也没有多少利润可失，这使得将 API 出口作为武器的「成本-收益」对中国而言比稀土出口管制更偏向有利（失去的利润更少，造成的对手伤害更大）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "全球 API 市场约 $2200–2500 亿（2023）",
    "level": "C3",
    "source": "IQVIA/Grand View Research 行业口径"
   },
   {
    "item": "中国约 40% 全球 API 产能",
    "level": "C3",
    "source": "EvaluatePharma/IQVIA 行业估算"
   },
   {
    "item": "中国青霉素 API 约 80–90%",
    "level": "C3",
    "source": "印度制药联合会 + FDA 国会报告"
   },
   {
    "item": "中国维生素 C 约 95%",
    "level": "C3",
    "source": "行业共识，多来源"
   },
   {
    "item": "美国已无本土青霉素 API 产能",
    "level": "C3",
    "source": "FDA 2019 DSCSA 国会报告"
   },
   {
    "item": "印度约 60–70% API 依赖中国进口",
    "level": "C3",
    "source": "印度制药联合会（IPA）数据"
   },
   {
    "item": "印度 2020 年 3–4 月出口禁令，3.4 生效 4.6 解除",
    "level": "C3",
    "source": "印度政府公告 + 新闻记录"
   },
   {
    "item": "2008 年肝素污染事件约 81 人死亡",
    "level": "C4",
    "source": "FDA 事故报告"
   },
   {
    "item": "BARDA-Phlow 合同约 $354M（2020 年 CARES Act）",
    "level": "C3",
    "source": "BARDA 官方公告"
   },
   {
    "item": "石药集团 FY2022 营收约 318 亿港元",
    "level": "C3",
    "source": "港股年报"
   },
   {
    "item": "Divi's Laboratories FY2023 营收约 ₹7585 亿",
    "level": "C3",
    "source": "NSE 年报"
   },
   {
    "item": "DSM Sinochem 合资（中国方为股东）",
    "level": "C3",
    "source": "行业报道"
   },
   {
    "item": "欧盟 Critical Medicines Act 倡议（2023）",
    "level": "C3",
    "source": "欧委会文件"
   }
  ],
  "contested": {
   "title": "2020 年 3 月印度 API 出口管制（MCA 通知）→ COVID-19 暴露中国→印度→西方三层依赖链",
   "summary": "这是 ph-api 节点近年来最清晰的被激活时刻，不是进攻性武器化，而是防守性管制暴露了双层依赖的存在。"
  },
  "gaps": [
   "按「最影响卡点判断」排序：",
   "1. **【缺口：需要 FDA 2019 年 DSCSA 国会报告（\"FDA's Drug Shortage Staff Report\"）**：提供美国 API 进口依赖的官方数据，对 Q4 和 Q2 最关键。",
   "2. **【缺口：需要印度制药联合会（IPA）API 进口来源报告（2022 年）】**：量化印度对中国 API 依赖比例，对 Q4 最关键。",
   "3. **【缺口：需要 FDA 2008 年肝素污染调查报告（全文）】**：实证单一来源风险，C4 升级用。",
   "4. **【缺口：需要华北制药（NCPC）近年营收数据（A 股年报，代码 600812）】**：Q3 关键玩家财务空缺，需补。",
   "5. **【缺口：需要 Grand View Research 或 IQVIA 全球 API 市场报告（2023 版）】**：Q1 市场规模来源，升 C3→C4。",
   "6. **【缺口：需要 BARDA-Phlow 合同官方公告（BARDA.hhs.gov）】**：政治传动层 A 的关键文件，对 fallback 评估有帮助。",
   "7. **【缺口：需要欧盟 Critical Medicines Act 倡议草案全文（EUR-Lex COM(2023)XX）】**：确认政策状态和强制条款范围。"
  ]
 },
 "ph-biotech": {
  "sourceFile": "ph-biotech.md",
  "archiveId": "ph-biotech",
  "established": "2026-07-08",
  "updated": null,
  "cLevelOverall": "C2 为主",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "三星生物 Samsung Biologics",
    "role": "全球最大生物药代工",
    "scale": "松岛园区产能 >60 万升，规划 ~78.4 万升",
    "jurisdiction": "韩国（松岛/仁川）",
    "group": null
   },
   {
    "entity": "龙沙 Lonza",
    "role": "第二大代工",
    "scale": "2024 收购 Genentech Vacaville 厂扩产",
    "jurisdiction": "瑞士（巴塞尔）",
    "group": null
   },
   {
    "entity": "勃林格殷格翰 Boehringer Ingelheim",
    "role": "第三大代工",
    "scale": "产能份额【缺口：需 BI 生物制药部门披露】",
    "jurisdiction": "德国（英格尔海姆）",
    "group": null
   },
   {
    "entity": "药明生物 WuXi Biologics",
    "role": "中国代工主力",
    "scale": "产能与份额【缺口：需 2269.HK 年报】",
    "jurisdiction": "中国（无锡；港股上市）",
    "group": null
   },
   {
    "entity": "Roche/Genentech",
    "role": "原研自有大规模产能",
    "scale": "自用为主，份额【缺口】",
    "jurisdiction": "瑞士/美国",
    "group": null
   },
   {
    "entity": "Amgen",
    "role": "原研自有大规模产能",
    "scale": "自用为主，份额【缺口】",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "富士胶片 Fujifilm Diosynth",
    "role": "代工，扩张中",
    "scale": "近年在美/英/丹麦大额扩产【缺口：需产能数字】",
    "jurisdiction": "日本",
    "group": null
   },
   {
    "entity": "Catalent",
    "role": "代工（2024 被 Novo Holdings 收购）",
    "scale": "生物+成品填充灌装，份额【缺口】",
    "jurisdiction": "美国（被丹麦资本收购）",
    "group": null
   }
  ],
  "upstream": [
   "生物制剂制造自己绕不开三块上游，且这三块的集中度可能比代工产能本身更硬——**卡点可能在更上游的设备耗材层，而不在代工产能层**。这是本节点最需要在后续拆解中单列子节点的地方。",
   "**生物反应器与一次性耗材（单点风险高）**：现代生物药生产大量用一次性生物反应器（single-use bioreactor，用一次性塑料袋替代不锈钢罐，省清洗验证、换产快），上游被少数几家主导——**赛多利斯（Sartorius，德国）、思拓凡（Cytiva，原 GE Healthcare 生命科学部，现属丹纳赫 Danaher）、赛默飞（Thermo Fisher，美国）**。一次性袋、连接件、传感器等耗材供应在 2021–2022 年疫情期间出现过严重紧缺和长交期。这层的集中度【缺口：需 Sartorius / Danaher 年报分部数据 + 行业份额报告】。",
   "**层析介质 / 纯化耗材（单点风险高）**：抗体纯化高度依赖蛋白 A 层析介质（Protein A resin，一种能特异性抓住抗体的填料），全球供应集中在 Cytiva、Thermo Fisher、Tosoh（日本东曹）、Merck KGaA（德国默克）等少数几家。蛋白 A 介质是抗体下游纯化几乎绕不开的一环，价格昂贵、认证壁垒高，是比代工产能更靠上游、更隐蔽的潜在卡点【缺口：需层析介质市场份额报告】。",
   "**细胞培养基（moderate）**：大规模细胞培养需要成分确定的无血清培养基（chemically defined media），主要供应商 Thermo Fisher（Gibco 品牌）、Merck KGaA、Cytiva 等。集中度存在但比蛋白 A 介质稍分散。",
   "**细胞株与工艺 know-how（不可转移的软依赖）**：生产用的工程细胞株（多为 CHO，中国仓鼠卵巢细胞）和配套的高产、稳定表达工艺，是各代工厂/药企多年积累的核心资产，构成第 1 维说的「绕不开的属性锚」。这不是可买的物料，是绑在人和履历上的能力。",
   "**小结**：生物制剂的真实卡点很可能不是「代工产能」，而是「上游设备耗材」——Sartorius / Cytiva(Danaher) / Thermo Fisher 三家主导一次性反应器、层析介质、培养基这几条耗材线，是比代工厂更上游、更集中的一层。买中国代工绕不过西方耗材，正如买中国 API 绕不过中国前体。这一层强烈建议在正式拆解中单列节点（暂名 ph-bioprocess-consumables）。"
  ],
  "downstream": [
   "**外包制造的大药企（依赖度高，可缓冲）**：越来越多药企把新分子的原液制造外包给 CDMO，尤其中小型 biotech 公司没有自建产能、100% 依赖代工。对单个产品而言，一旦选定代工厂并完成监管申报，短期换厂极难（见第 2 维），依赖强度高；但对整个行业而言，代工厂有多家，属可缓冲。",
   "**抗体药 / 自免疫药 / 抗癌药的全球患者（终端刚需）**：生物制剂里很多是救命药或长期用药（如肿瘤免疫治疗、类风湿关节炎生物制剂），断供直接影响临床，但因产品-产线绑定，断供是「单个产品供应中断」而非「整个市场断供」，冲击方式和 API 的大宗断供不同。",
   "**美国联邦采购体系 / VA / Medicare（BIOSECURE 的抓手）**：BIOSECURE Act 的机制不是禁止进口，而是**禁止联邦资金采购**用了「受关注生物技术公司」设备或服务的药品/服务。这让依赖联邦合同的药企必须在「用药明系代工」和「拿联邦订单」之间二选一——下游的政治敞口集中在这里。",
   "**断供缓冲**：生物药供应链通常持有数月的原液或成品库存，产品-产线绑定使得「切换」而非「断供」是主要风险模式，政治响应有时间窗（BIOSECURE 的过渡安排本身就给了多年 grandfather 期，见政治传动层 E）。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "替代要分层看：\n\n**针对「某一家代工厂出问题」（含药明系被政策排除）：**\n- 抗体成品原液：可尝试转到另一家合规代工厂（三星、龙沙、勃林格、富士等），但大规模合规产能本就阶段性紧张，且转产要重做工艺转移 + 可比性研究 + 监管审批，接得上但**慢（18 个月–3 年）、贵**。fallback 等级：`partial`（非抗生素式全断，是可迁移但高成本的迁移）。\n- 现场执行能力常被高估：同一个抗体在不同产线上要重新验证，「搬机器」解决不了「工艺即产品」的可比性问题。\n\n**针对「西方要在短期内建等量新产能替代中国代工」：**\n- 建一座大规模合规生物药厂要约 3–5 年、几十亿美元投入，还要配齐工艺团队和监管履历，属**树状依赖**（大规模合规产能是主通道，短期没有等量旁路）。fallback 等级：`planned`（三星扩建、龙沙收购 Vacaville、富士扩产、Catalent 被 Novo 收购整合——西方产能正在扩，但形成等量替代需数年）。\n\n**针对「上游耗材（蛋白 A 介质、一次性反应器）断供」：**\n- 这一层若断，比代工产能断更难绕——供应商更少、认证绑定更严、更难替换。fallback 等级：`possible reroute`（待第 5 维单列节点后再评估，当前不足以判为真 fallback）。\n\n**五问答法（以「药明系被 BIOSECURE 排除后，某美国药企的抗体产品转产」为例）：**\n- 替代哪一层：合规原液制造产能（从药明系转到西方/韩日代工厂或自建）。\n- 多久接上：工艺转移 + 可比性研究 + 监管场地变更批准，约 18 个月–3 年；2024 众院版曾设既有合同 grandfather 至约 2032（C2，成法版逐字过渡条款待 NDAA 851 条核），加上成法后 OMB 出 BCC 清单（1 年）+ FAR 修订（再 1 年）的行政落地期，合起来给了数年缓冲，正是承认这个迁移周期长。\n- 卡在哪个环节：可比性研究（证明新产线产出等效）+ 监管现场检查 + 上游耗材（蛋白 A 介质、一次性反应器）供应本身也要排产。\n- 谁有权限启动：药企自己（商业决定）+ 需要新代工厂有富余合规产能接单。\n- 现场有没有执行能力：三星、龙沙等在扩产，但能否在过渡期内吸收全部从药明系转出的订单量，取决于扩产进度，`planned` 而非 `operational`。\n\n真实 fallback 综合等级：`partial`（单厂/单产品可迁移但慢贵）到 `planned`（等量替代中国代工的西方新产能在建但未成）；上游耗材层 `possible reroute`。**总判：成本大幅增加、周期以年计，但不是不可替代——这是本节点和「blocked」型卡点的关键区别。**"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **生物药整体市场**：庞大且快速增长，多份市场研究给出 2020s 中期约 4000 亿美元+ 的量级，并预测长期（2030s）向万亿美元级增长（长期预测可信度低，仅作数量级参考）【缺口：需 EvaluatePharma / IQVIA 生物药市场报告一手数字确认 4000 亿量级与年份】。\n- **生物药 CDMO（代工）市场**：2024 年据报道约 246 亿美元（C2，SkyQuest 转引，市场研究口径，需一手降级复核）。\n- 数量级确认：生物药终端市场 4000 亿美元级，其中外包给 CDMO 制造的部分约 200 多亿美元级，代工渗透率在上升。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **生物药 CDMO 市场约 246 亿美元（2024）**（C2，SkyQuest 转引）。\n- **产能排序**：三星生物为全球最大（松岛 >60 万升，规划 ~78.4 万升），龙沙、勃林格殷格翰分列二三（C2，FiercePharma/KED 转引）。\n- **CR3（三星+龙沙+勃林格代工产能份额）**：【缺口：需三家年报产能 + 行业总产能统计，才能算真实 CR3】。三星生物据报道已与全球前 20 大药企中的 17 家合作代工抗体药（C2，KED 转引），显示头部代工客户覆盖极广。\n- **上游耗材集中度**（可能是更硬的卡点）：一次性反应器 / 蛋白 A 介质由 Sartorius、Cytiva(Danaher)、Thermo Fisher、Merck KGaA、Tosoh 等少数几家主导，CR 值【缺口：需耗材市场份额报告】。\n- **Price maker**：产能紧张周期里头部代工厂有一定定价力；但生物药代工是长约、定制化，不像大宗商品有统一市价，price maker 概念要按产品分。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 公司 | 营收（口径/年份）| 利润率 | 市值/估值 | C（暂）| 来源 |\n|---|---|---|---|---|---|\n| 三星生物 Samsung Biologics | 【缺口：需 FY2023/FY2024 营收，KRX 上市】| 【缺口】| 【缺口】| — | 需年报 |\n| 龙沙 Lonza | 【缺口：需 FY2023 营收，含生物制药 CDMO 分部】| 【缺口】| 【缺口，SIX:LONN】| — | 需年报 |\n| 勃林格殷格翰 Boehringer Ingelheim | 【缺口：非上市，需集团年报 + 生物制药分部】| — | 非上市 | — | 需年报 |\n| 药明生物 WuXi Biologics | 【缺口：需 FY2023/FY2024 营收，2269.HK】| 【缺口】| 【缺口，受政策冲击波动大】| — | 需年报 |\n| 富士胶片 Fujifilm Diosynth | 【缺口：需富士集团生命科学分部披露】| — | 母公司 TSE 上市 | — | 需年报 |\n| Sartorius（上游耗材）| 【缺口：需 FY2023 营收，ETR:SRT】| 生物工艺业务毛利率高（C2）| 【缺口】| — | 需年报 |\n\n**结构判断（暂，待财务数字补齐）**：生物药代工和上游耗材的毛利率通常显著高于化学 API（Sartorius 等耗材商毛利率高，代工厂利润率也远好于大宗 API 厂）——这和 ph-api「供给方利润最薄」相反。本节点的利润沉淀在供给侧（耗材商 + 代工厂），说明政治压力打到这一层时，被打的对象有资本纵深、也有利润可失，反制/游说能力比 API 厂强。这直接影响 BIOSECURE 的博弈（药明系有能力游说、诉讼、重组）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **中小 biotech 对代工的依赖**：无自建产能的中小药企 100% 依赖 CDMO；大药企部分外包。整体外包渗透率【缺口：需行业外包率报告】。\n- **药企对药明系的敞口**：部分美国药企的在研/在售产品用药明生物代工，BIOSECURE 一旦生效，这些产品面临「换厂或失去联邦市场」——具体有多少美国药企、多少在研管线依赖药明系【缺口：需 BIO 行业协会调查 / 药明生物客户结构披露】。据报道美国生物技术创新组织（BIO）曾就 BIOSECURE 对会员影响做过成员调查，显示相当比例会员与药明系有业务往来（C3，2026-07-08 交叉核对）。\n- **断供/切换库存缓冲**：生物药供应链通常持有数月成品库存，产品-产线绑定使主要风险是「多年迁移周期」而非「即时断供」。",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "- **BIOSECURE 型定向排除的冲击**：主要不是「药品短缺」（因有西方替代产能），而是**供应链重组成本 + 迁移周期损失 + 药明系营收损失**。冲击量级【缺口：需券商/行业分析对 BIOSECURE 经济影响的测算报告】。\n- **药明系市场反应（可作冲击的即时代理指标）**：据报道 2024 年 BIOSECURE 立法推进期间，药明生物、药明康德（WuXi AppTec）港股/A 股股价多次大幅下挫（单日跌幅曾达约 20% 级别）（C3，2026-07-08 交叉核对）【缺口：需 HKEX/交易所行情数据核实具体跌幅与日期】——股价是市场对「中国代工在美市场前景」的定价，是本事件冲击最直接的可量化代理。\n- **上游耗材断供的冲击**：若上游耗材（蛋白 A 介质等）出问题，冲击面比代工产能更大，因为它跨所有代工厂【缺口：需专项分析】。",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "生物制剂价值链的利润分布和 ph-api **相反**：\n- **利润明显向供给侧和上游耗材侧沉淀**：上游耗材商（Sartorius、Cytiva/Danaher、Thermo）毛利率高、议价强；代工厂利润率也远好于大宗化学 API 厂；终端生物药本身单价极高（抗癌抗体药可达每疗程数万美元）。\n- 这意味着：政治压力打到「中国代工（药明系）」这个供给方时，**打的是一个有利润、有资本纵深、有游说和诉讼能力的对象**——不像 ph-api 打中国 API 厂那样「打了也没多少利润可失」。所以 BIOSECURE 遇到的阻力更大（客户药企、药明系、部分行业组织都有动机反对），独立成法一度受阻（2024 单飞未成），最终靠附挂 FY2026 NDAA 才在 2025-12-18 成法——阻力真实存在，体现为「独立走不通、搭便车才过」，且成法后把「切谁」延后到行政清单，也是给继续游说留了缓冲。\n- 同时，因为利润在供给侧，美国切断中国供给方（而非切断一个自己依赖的来源）在「成本-收益」上对美国相对划算：美国不失去关键供给（有西方替代），中国失去的是一块有利润的出口业务——这和 ph-api「切断中国 API 会伤到自己」正好相反，是 BIOSECURE 比 API 管制更容易被美国推动的结构原因。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "生物药 CDMO 市场约 246 亿美元（2024）",
    "level": "C2",
    "source": "SkyQuest 转引（市场研究口径）"
   },
   {
    "item": "生物药终端市场约 4000 亿美元级",
    "level": "C2",
    "source": "行业口径记忆"
   },
   {
    "item": "三星生物为全球最大生物药代工",
    "level": "C2",
    "source": "KED/FiercePharma 转引"
   },
   {
    "item": "松岛产能 >60 万升、规划 ~78.4 万升",
    "level": "C2",
    "source": "KED/FiercePharma 转引"
   },
   {
    "item": "龙沙、勃林格殷格翰列二三",
    "level": "C2",
    "source": "行业分析转引"
   },
   {
    "item": "龙沙 2024 约 12 亿美元收购 Vacaville 厂",
    "level": "C2",
    "source": "FiercePharma 转引"
   },
   {
    "item": "三星与前 20 药企 17 家合作",
    "level": "C2",
    "source": "KED 转引"
   },
   {
    "item": "上游耗材（一次性反应器/蛋白 A 介质）由 Sartorius/Cytiva/Thermo 等主导",
    "level": "C2",
    "source": "行业常识"
   },
   {
    "item": "BIOSECURE Act 点名 WuXi AppTec/MGI/BGI/Complete Genomics（众院版加 WuXi Biologics）",
    "level": "C3",
    "source": "多家律所简报交叉核对（Ropes & Gray/Goodwin/Foley）2026-07-08"
   },
   {
    "item": "众议院 2024-09-09 以 306-81 通过 H.R.8333（含 111 名民主党人）",
    "level": "C3",
    "source": "同上交叉核对"
   },
   {
    "item": "2024 未搭 FY2025 NDAA 当年未成法；2025-12-18 靠 FY26 NDAA 第 851 条成法",
    "level": "C3",
    "source": "EC/律所简报（Foley Hoag/Arnold & Porter/Latham）交叉核对"
   },
   {
    "item": "成法版本不点名企业、改用 DoD 1260H+OMB 清单认定 BCC；药明系截至 2026-07 未列入（药明康德据报被提议列入下次 1260H）",
    "level": "C3",
    "source": "同上交叉核对"
   },
   {
    "item": "BIOSECURE 设过渡期（既有合同 grandfather 至约 2032-01-01）",
    "level": "C2 待核实",
    "source": "报道口径"
   },
   {
    "item": "2024 年立法推进期药明系股价大幅下挫（单日约 20% 级）",
    "level": "C2 待核实",
    "source": "公开报道记忆"
   }
  ],
  "contested": {
   "title": "2024 年美国 BIOSECURE Act（H.R.8333）→ 用立法把中国生物代工（药明系）定向排除出美国联邦相关市场",
   "summary": "这是 ph-biotech 节点最清晰、最新的被争夺时刻，也是本节点区别于 ph-api 的关键事件：不是防守性暴露依赖（像 2020 印度 API 禁令），而是**在位方（美国）用立法主动切断一个追赶方（中国代工）的供给进入**。以下按五个阅读动作复盘（立法进程细节为 C2 待核实，一手件缺口见文末）。"
  },
  "gaps": [
   "按「最影响卡点判断」排序：",
   "1. **【缺口：需要 BIOSECURE Act 一手文本（Congress.gov H.R.8333 + 参议院 S.3558）】**：核实点名清单、生效机制（联邦采购限制的具体范围）、过渡期条款、立法进程与投票记录——对政治传动层 A/B/E 和「最近争夺事件」最关键，直接决定本节点政治工具判断的可信度。",
   "2. **【缺口：需要 WuXi Biologics（2269.HK）FY2023/FY2024 年报】**：药明生物产能、全球份额、客户结构、营收利润——对第 4 维份额、Q3 财务、Q4 下游敞口关键。",
   "3. **【缺口：需要上游关键耗材市场份额报告（一次性生物反应器、蛋白 A 层析介质、细胞培养基）】**：确认 Sartorius/Cytiva(Danaher)/Thermo Fisher 等的集中度——判断「真实卡点是否在耗材层而非代工层」，可能触发单列 ph-bioprocess-consumables 节点。",
   "4. **【缺口：需要 Samsung Biologics 年报】**：核实松岛产能（>60 万升 / ~78.4 万升）与全球最大代工的口径，把 C2 转引升为 C3+。",
   "5. **【缺口：需要权威生物药 CDMO 市场报告（EvaluatePharma / IQVIA / Frost & Sullivan 等）】**：Q1 市场规模（4000 亿终端 + 246 亿 CDMO）和 Q2 集中度 CR 值的一手来源。",
   "6. **【缺口：需要药明系股价行情数据（HKEX / 交易所，2024 年 BIOSECURE 推进期）】**：Q5 冲击代理指标，核实具体跌幅与日期。",
   "7. **【缺口：需要 BIO（生物技术创新组织）关于 BIOSECURE 对成员影响的调查报告】**：Q4 美国药企对药明系依赖度、下游敞口的量化。",
   "8. **【缺口：需要龙沙收购 Vacaville、Novo 收购 Catalent、富士/三星扩产的公开公告】**：核实西方产能整合的规模与投资额，评估 fallback 的 `planned` 进度。",
   "9. **【缺口：需要欧盟 Critical Medicines Act 等文件】**：确认欧盟是否对生物制剂/中国代工有定向政策。"
  ]
 },
 "ph-generic": {
  "sourceFile": "ph-generic.md",
  "archiveId": "ph-generic",
  "established": null,
  "updated": null,
  "cLevelOverall": null,
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Sun Pharmaceutical Industries",
    "role": "印度最大制药企业、供美仿制药主力",
    "scale": "FY2023 营收约 ₹4.36 万亿卢比 / 约 $52 亿（C2 推算，【缺口：需要 Sun Pharma FY2023 年报】核实）",
    "jurisdiction": "印度",
    "group": null
   },
   {
    "entity": "Teva Pharmaceutical",
    "role": "全球最大仿制药企业",
    "scale": "FY2023 营收约 $155 亿（其中仿制药占约一半，C2 推算，【缺口：需要 Teva FY2023 10-K】核实）",
    "jurisdiction": "以色列（总部）/美国 NYSE:TEVA 上市",
    "group": null
   },
   {
    "entity": "Aurobindo Pharma",
    "role": "供美成品 + API 双线",
    "scale": "总营收约 $32 亿（C3，年报，见 ph-api 节点）",
    "jurisdiction": "印度",
    "group": null
   },
   {
    "entity": "Dr. Reddy's Laboratories",
    "role": "仿制药 + API 双线",
    "scale": "总营收约 $29 亿（C3，FY2023 年报）",
    "jurisdiction": "印度 / NYSE:RDY",
    "group": null
   },
   {
    "entity": "Cipla",
    "role": "仿制药为主，API 多为自供",
    "scale": "总营收约 $27 亿（C3，年报）",
    "jurisdiction": "印度",
    "group": null
   },
   {
    "entity": "Sandoz（原 Novartis 仿制药，2023 分拆独立）",
    "role": "供欧美成品主力",
    "scale": "【缺口：需要 Sandoz FY2023 年报（2023 年 10 月于瑞交所独立上市）】",
    "jurisdiction": "瑞士/欧洲",
    "group": null
   },
   {
    "entity": "美国本土仿制药企业（含 Teva 美国厂、Viatris/原 Mylan 等）",
    "role": "本土成品制造",
    "scale": "与印度并列前两大供美来源（C2，USP / AAM 口径，待回原文）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "中国原料药企业整体",
    "role": "上游原料供给（另见 ph-api）",
    "scale": "印度约 70% API 自华进口（C2/C3）",
    "jurisdiction": "中国",
    "group": null
   },
   {
    "entity": "美国 FDA",
    "role": "市场准入把关",
    "scale": "无 FDA 认证不得供美（监管权，非产能份额）",
    "jurisdiction": "美国（监管权）",
    "group": null
   }
  ],
  "upstream": [
   "这是本节点脆弱性的真正来源，拆到子供应商就在这一维。",
   "**原料药（API，致命依赖）**：成品制造离不开 API。印度成品厂约 70% API 从中国进口，抗生素类更高。这是本节点最硬的上游单点，已单列为 `ph-api` 节点深挖。成品层的所有「网格状可替代」，一旦追到 API 层就变成「树状不可替代」。",
   "**关键起始物料 / 中间体（KSM，又一个单点）**：即使有 API 产能，中间体（如青霉素类的 6-APA）也大量在中国生产。「买成品绕过印度」和「买 API 绕过中国」是两道不同的坎，后者难解得多。",
   "**辅料、包装、制剂设备**：成品制造还需要药用辅料（填充剂、包衣）、包装材料和制剂/灌装设备。这些分散度较好，不是单点，但需正式核实（【缺口：需要药用辅料与制剂设备产能地理分布统计】）。",
   "总体：成品层自身产能充足、竞争激烈，但它绕不开的上游（API + 中间体）高度集中于中国。本节点的「绕不开」属性主要是继承来的，不是自生的。"
  ],
  "downstream": [
   "**美国仿制药市场（高依赖）**：美国约 90% 处方量是仿制药，其中很大一部分成品和 API 来自印度和中国（C3，FDA / AAM 口径，待回原文）。依赖强度：高但可缓冲——单家印度厂出事可改采购，整个「印度 + 中国」链条同时断才是致命。",
   "**欧洲仿制药市场（高依赖）**：欧洲同样高度依赖印度成品和中印 API；欧盟 2023 年起推「关键药品」相关立法（见政治传动层 A）。本草图对欧洲结构覆盖仍薄（【缺口：需要 Sandoz、Teva 欧洲份额与欧盟仿制药进口来源统计】）。",
   "**中低收入国家（依赖，间接）**：印度是「世界药房」，向 200+ 国家出口成品仿制药，包括大量抗艾滋、抗结核药。这些市场对印度成品依赖度更高，缓冲更薄。",
   "断供库存缓冲：医院和药房通常持有数周到数月的成品药库存，制药厂持有一定 API 和成品库存。成品层单点中断可在库存缓冲内改采购接上；真正超过缓冲、触发临床短缺的是上游 API 同时断供的情景（见 ph-api 的 3–6 个月窗口）。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial fallback",
   "unstructured": false,
   "text": "总判：**成品层 `partial fallback`；但其成立以 API 层不断供为隐藏前提，API 层本身 `possible reroute`（中期）/ `blocked`（短期抗生素）。**"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球仿制药市场在 4500 亿到 4900 亿美元这个量级。市场研究机构对 2024 年的估值大致落在 4880 至 4910 亿美元（C3，NovaOne Advisor / Custom Market Insights 等市场研究口径，非一手，WebSearch 2026-07 核）；研究基点给的「$4500 亿」是同一数量级、略低的口径。这里要把「全球仿制药市场规模」和「印度制药市场预计增长到某个规模」分开：SKETCH 曾把 Forbes 一条关于印度市场的预测当成全球规模来用，本稿分开处理。【缺口：需要 IQVIA / Grand View Research 全球仿制药市场报告 2024 原文核实口径与年份；市场研究机构普遍不披露测算方法，取到一手可升 C4】。\n\n细分与相关量：\n- 美国仿制药占处方量约 90%，但占药费比例很小（【缺口：需要 AAM《Generic & Biosimilar Medicines Savings Report》最新版核实药费占比】）。\n- 印度约占全球仿制药出口 20%（C2/C3，待回一手贸易统计）。\n- 印度供应约 47% 美国仿制药处方（C2，IQVIA 2024）。\n\n数量级确认：全球千亿美元级，量大价薄。",
    "cLevels": [
     "C3",
     "C4",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 印度占美国仿制药处方约 47%（C2，IQVIA 2024）——成品层 CR1（按国家）约 47%。\n- 印度占供美固体口服剂型产量约 60%（C2，IQVIA 2024）。\n- 印度占全球仿制药出口约 20%（C2/C3）。\n- 上游：印度约 70% API 自中国进口；部分基础抗生素 API 对华依赖 >80–90%（C2/C3，见 ph-api）。\n- **Price maker**：成品层是印度企业整体（价格主导但彼此可替代，非单一主体）；真正的 price maker 在原料层（中国大宗 API 企业）。成品层企业对中国 API 是价格接受者。",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 公司 | 营收（口径/年份） | 利润率 | 市值/规模 | C 级 | 来源 |\n|---|---|---|---|---|---|\n| Teva（以色列/美上市）| 约 $155 亿（FY2023，全球最大仿制药，含品牌药）| 【缺口：需净利率】| NYSE:TEVA | C2 推算 | 【缺口：需要 Teva FY2023 10-K】 |\n| Sun Pharma（印度）| 约 $52 亿（FY2023，约 ₹4.36 万亿卢比）| 【缺口：需净利率】| 印度最大药企 | C2 推算 | 【缺口：需要 Sun Pharma FY2023 年报】 |\n| Aurobindo（印度）| 约 $32 亿（总营收）| 净利率约 9%（C3）| 约 $4 Bn（NSE）| C3 | 年报（见 ph-api） |\n| Dr. Reddy's（印度）| 约 $29 亿（FY2023）| 净利率约 13%（C3）| 约 $7 Bn（NYSE:RDY）| C3 | FY2023 年报 |\n| Cipla（印度）| 约 $27 亿 | 【缺口：需净利率】| NSE/BSE | C3 | 年报 |\n| Sandoz（瑞士/欧洲，2023 分拆）| 【缺口：需要 Sandoz FY2023 年报】| — | 瑞交所上市 | — | — |\n\n财务结构含义：印度成品/仿制药企业是有盈利压力的私营上市公司，资本纵深有限，扛断供或反制政治压力的能力弱于国资企业。这与上游中国国资 API 企业「可不计经济利益、按政治指令维持产能」的结构相反——政治压力打到成品层，打的是要盈利的资产负债表，企业会按经济逻辑响应（改采购、涨价、退出），不会硬扛。",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "两个方向：\n- **本节点对下游的收入敞口**：印度供美成品占美国仿制药处方约 47%（C2）；对个别常用药（抗生素、心血管、某些固体口服药），印度成品占比更高（【缺口：需要按治疗类别/剂型的供美来源明细，如 FDA 或 IQVIA 分类数据】）。\n- **下游对本节点的产能敞口**：美国约 90% 处方量为仿制药，若印度成品同时中断，短期无等量替代；但单家印度厂中断，下游可在库存缓冲（数周到数月）内改采购接上。真正超过缓冲的断供窗口，取决于上游 API 是否同时断（见 ph-api 的 3–6 个月抗生素窗口）。\n- 上游敞口：印度成品厂约 70% API 依赖中国进口（C2/C3）——本节点自身对上游 API 的敞口极高，这是它最脆弱的一环。",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "- **成品层单点中断（某家印度厂被 FDA 禁令）**：局部、暂时的短缺，可在库存缓冲内改采购，宏观冲击小。历史上 FDA 对印度工厂多次发警告信/进口禁令，未造成系统性全国短缺（C3，FDA Import Alert 记录，待回原文）。\n- **成品 + 原料同时断（中印链条同时受冲击）**：全球性药品短缺，尤其抗生素，3–6 个月内触发（超过库存缓冲，量级判断继承自 ph-api）。\n- **全规模冲击的宏观数字**：【缺口：需要 RAND / IQVIA / 美国 HHS 的药品供应链断供经济冲击专项报告——目前无可靠报告支撑绝对数字，只能给数量级：数百亿美元级 GDP 间接损失 + 医疗系统容量下降，C1–C2 推算】。\n\n这个维度成品层单独看冲击有限（可缓冲），真正的量级来自与 API 层叠加。",
    "cLevels": [
     "C3",
     "C1–C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "仿制药价值链的利润归宿，是理解这个节点政治性质的关键。\n\n- 一颗仿制药的 API 成本约 $0.01–0.03/剂（C2，市场估算，见 ph-api）。\n- 仿制药成品出厂/零售价通常也很低（大宗仿制药单价常在几美分到几美元/剂，C2）。\n- 品牌药或复杂配方药可到 $10–50+/剂——但那不是本节点（仿制药）的范畴。\n\n利润归宿判断：仿制药整条链利润都薄，成品制造层尤其薄（量大价低、竞争激烈）。价值更多沉淀在**下游的分销/采购整合环节（PBM、GPO、药房连锁的议价）**，而非制造层。这意味着：\n- 政治压力打到印度成品制造商的资产负债表上，伤害有限，但制造商也没多少利润垫来硬扛，会按经济逻辑退出或涨价。\n- 真正被断供伤害的是**下游卫生系统和患者**（药品短缺、价格飙升），不是制造商本身。\n- 这一点和 ph-api 一致：卡点持有者（无论中国 API 厂还是印度成品厂）本身的经济利益并不厚，链条的价值和最终的伤害都在别处。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "印度供应约 47% 美国仿制药处方",
    "level": "C2",
    "source": "IQVIA《U.S.–India Medicine Partnership》2024（转引）"
   },
   {
    "item": "印度占供美固体口服剂型约 60% 产量",
    "level": "C2",
    "source": "IQVIA 2024（转引）"
   },
   {
    "item": "印度占全球仿制药出口约 20%",
    "level": "C2/C3",
    "source": "研究切入点口径"
   },
   {
    "item": "美国处方约九成为仿制药",
    "level": "C3",
    "source": "AAM/FDA 口径（转引）"
   },
   {
    "item": "印度成品厂约 70% API 自中国进口",
    "level": "C2/C3",
    "source": "IPA / 印度药品局年报转引（见 ph-api）"
   },
   {
    "item": "部分基础抗生素 API 对华依赖 >80–90%",
    "level": "C2/C3",
    "source": "ORF / Policy Circle 2024（转引）"
   },
   {
    "item": "全球仿制药市场约 $4500 亿量级（市场研究机构 2024 年估约 $4880–4910 亿，同数量级）",
    "level": "C3",
    "source": "研究切入点口径 + NovaOne/Custom Market Insights（WebSearch 2026-07）"
   },
   {
    "item": "2013-09 FDA 对兰伯西 Mohali 工厂发进口警报；独家品种更昔洛韦胶囊为避免短缺获豁免",
    "level": "C3",
    "source": "FDA《Regulatory Actions Against Ranbaxy and Sun Pharma》+ FDA Q&A（WebSearch 2026-07）"
   },
   {
    "item": "兰伯西 2013-05 与 DOJ 和解、约 5 亿美元罚金；2014–2015 被 Sun Pharma 收购",
    "level": "C3",
    "source": "DOJ / 行业报道（转引）"
   },
   {
    "item": "Teva FY2023 营收约 $155 亿",
    "level": "C2 推算",
    "source": "待回 10-K"
   },
   {
    "item": "Sun Pharma FY2023 营收约 $52 亿",
    "level": "C2 推算",
    "source": "待回年报"
   },
   {
    "item": "Aurobindo/Dr. Reddy's/Cipla 营收",
    "level": "C3",
    "source": "年报（见 ph-api）"
   },
   {
    "item": "FDA 历年对印度工厂警告信/进口禁令未致全国系统性短缺",
    "level": "C3",
    "source": "FDA Import Alert 记录（转引）"
   },
   {
    "item": "印度 2020-03-04 出口限制 26 种 API/制剂，约 1–2 月后放宽",
    "level": "C3",
    "source": "印度 DGFT 通知 + 新闻记录"
   },
   {
    "item": "操作方力量弱（高自动化、少数技术人员）",
    "level": "C1/C2",
    "source": "结构推断（物质形态 → 政体）"
   },
   {
    "item": "成品层网格状可替代（partial fallback），硬卡点在 API 层",
    "level": "C2",
    "source": "结构推断，与 ph-api 一致"
   },
   {
    "item": "仿制药整条链利润薄、价值沉淀在下游分销/采购",
    "level": "C2",
    "source": "市场估算（见 ph-api Q6）"
   }
  ],
  "contested": {
   "title": "主事件：2013 年 9 月 FDA 对兰伯西 Mohali 工厂发进口警报；此前 2008 年已对其两家印度工厂发警报、挡下约 30 种药品进口。",
   "summary": "（C3，FDA《Regulatory Actions Against Ranbaxy and Sun Pharma》页面 + 行业报道，WebSearch 2026-07 核；【缺口：需要回 FDA 原始 Import Alert 与 2013 年 DOJ 和解文书】。）"
  },
  "gaps": [
   "按「最影响卡点判断」排序，用具体来源名：",
   "1. **【缺口：需要 IQVIA《U.S.–India Medicine Partnership》2024 原文】** — 核实 47% / 60% 的口径、定义与年份，是本节点集中度判断的地基。",
   "2. **【缺口：需要印度制药联合会（IPA）API 进口来源报告 / 印度药品局（Department of Pharmaceuticals）年报原文】** — 核实 70% API 对华依赖的定义与数据，决定「成品层脆弱性是否真的继承自上游」这一核心判断。",
   "3. **【缺口：需要 FDA 兰伯西/太阳药业执法页原始 Import Alert 编号、更昔洛韦豁免的原始决定文书，及 2013 DOJ 和解协议全文】** — 把成品层正面争夺（FDA 进口警报与短缺两难）逐案结构化，验证「切单个工厂 ≠ 切整条供应」「独家品种反而不敢切」这两个核心读数。",
   "4. **【缺口：需要 IQVIA / Grand View Research 全球仿制药市场报告 2024】** — 核实 $4500 亿口径，分清「全球仿制药市场规模」与「印度制药市场预测」，避免 SKETCH 的混用。",
   "5. **【缺口：需要 Teva FY2023 10-K、Sun Pharma FY2023 年报、Sandoz FY2023 年报】** — Q3 关键玩家财务，Teva/Sun/Sandoz 三家目前是推算或空缺。",
   "6. **【缺口：需要印度 DGFT/MCA 2020-03-04 出口限制通知原文及放宽记录】** — 争夺事件结构化，核实 26 种清单、生效与放宽时点。",
   "7. **【缺口：需要 AAM《Generic & Biosimilar Medicines Savings Report》最新版】** — 美国仿制药占处方量、占药费比例的权威数字。",
   "8. **【缺口：需要欧洲供给结构统计（Sandoz、Teva 欧洲份额；欧盟仿制药进口来源）及 EU Critical Medicines Act 草案全文（EUR-Lex）】** — 本稿对欧洲覆盖仍薄。",
   "9. **【缺口：需要 RAND / IQVIA / 美国 HHS 药品供应链断供经济冲击专项报告】** — Q5 全规模冲击的绝对数字，目前只能给数量级。",
   "10. **【缺口：需要药用辅料与制剂设备产能地理分布统计】** — 确认成品层除 API 外的上游子依赖是否也存在隐藏单点。"
  ]
 },
 "ph-meddevice": {
  "sourceFile": "ph-meddevice.md",
  "archiveId": "ph-meddevice",
  "established": null,
  "updated": null,
  "cLevelOverall": "产能/份额/财务类多为 C2 推算",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "Medtronic 美敦力",
    "role": "综合器械第一，心血管/外科/糖尿病；手术机器人挑战者 Hugo",
    "scale": "FY2024 营收约 $32B（C2 推算，【缺口：Medtronic FY2024 10-K】）",
    "jurisdiction": "法律注册爱尔兰、运营总部美国明尼苏达；实质受美国法域管",
    "group": null
   },
   {
    "entity": "Johnson & Johnson MedTech",
    "role": "综合器械第二，外科/骨科/介入；机器人 Ottava 在研",
    "scale": "2023 年 MedTech 部门营收约 $30B（C2 推算，【缺口：J&J 2023 10-K 分部数据】）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "GE HealthCare",
    "role": "高端影像主力（2023 年从 GE 拆分独立上市）",
    "scale": "2023 营收约 $19.6B（C2 推算，【缺口：GEHC 2023 10-K】）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "Siemens Healthineers",
    "role": "高端影像主力 + 放疗（Varian）",
    "scale": "FY2023 营收约 €21.7B（C2 推算，【缺口：Healthineers 年报】）",
    "jurisdiction": "德国",
    "group": null
   },
   {
    "entity": "Philips",
    "role": "高端影像 + 监护；2021 年起呼吸机召回重创",
    "scale": "2023 营收约 €18B（C2 推算，【缺口：Philips 年报】）",
    "jurisdiction": "荷兰",
    "group": null
   },
   {
    "entity": "Intuitive Surgical",
    "role": "软组织手术机器人近独占",
    "scale": "2024 营收约 $8B，装机 9,500+ 台（C2 推算，【缺口：Intuitive FY2024 10-K】）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "Canon Medical / Fujifilm",
    "role": "影像前五的日本两家",
    "scale": "【缺口：Canon/Fujifilm 医疗分部营收，年报】",
    "jurisdiction": "日本",
    "group": null
   },
   {
    "entity": "Abbott / Stryker / BD / Boston Scientific",
    "role": "诊断、骨科、耗材、介入各自头部",
    "scale": "各 $14–22B 量级（C2 推算）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "迈瑞医疗 Mindray",
    "role": "中国龙头：监护/超声/体外诊断，中低端出海主力",
    "scale": "2023 营收约 ¥350 亿（约 $48 亿，C2 推算，【缺口：迈瑞 2023 年报，深市 300760】）",
    "jurisdiction": "中国",
    "group": null
   },
   {
    "entity": "联影医疗 United Imaging",
    "role": "中国高端影像国产替代主力（MRI/CT/PET 全线）",
    "scale": "2023 营收约 ¥114 亿（约 $16 亿，C2 推算，【缺口：联影 2023 年报，科创板 688271】）",
    "jurisdiction": "中国",
    "group": null
   },
   {
    "entity": "微创医疗 / 乐普医疗 等",
    "role": "高值耗材（支架、骨科）集采主力",
    "scale": "【缺口：各公司年报】",
    "jurisdiction": "中国",
    "group": null
   }
  ],
  "upstream": [
   "这一维是本节点最硬的部分，逐个拆：",
   "**氦气（cm-helium，单点级）**：超导 MRI 磁体靠液氦维持 4.2K 超导态。传统磁体首次充注约 1,500–2,000 升液氦（C2 推算），存量设备需定期补充（零蒸发技术已大幅降低但未归零）。氦是 cm 栈的既有节点：全球供给集中在美国、卡塔尔、阿尔及利亚少数气田，2022–2023 年「氦短缺 4.0」期间 MRI 运营商已实际感受配给（C2 推算，【缺口：需要 CGA 或 Gasworld 氦市场报告、GE/Siemens 关于零蒸发磁体的技术白皮书】）。医疗用氦约占全球氦消费 20–30%（C2 推算）。这是本节点与商品栈最硬的耦合，写入级联关系。",
   "**超导线材（窄单点）**：MRI 磁体用 NbTi 超导线，全球有能力批量供货的厂商个位数（Luvata、Bruker EST、西部超导、日本古河等，C2 推算）。值得记：中国西部超导同时是 ITER 和国产 MRI 的供应商，超导线材这一层中国不受卡，卡中国的在别处。【缺口：需要西部超导年报、Luvata 产能数据】",
   "**X 射线球管与探测器（窄瓶颈）**：CT 球管是高技术寿命件，独立供应商以 Varex Imaging（美）为主，飞利浦系 Dunlee、Canon 自供；高端 CT 探测器（尤其光子计数探测器的碲化镉/碲锌镉晶体）供给极窄（C2 推算，【缺口：Varex 10-K、光子计数探测器供应链专项材料】）。这一层是「中国整机可以造、部件仍被卡」的具体所在。",
   "**专用芯片与 FPGA**：影像设备的信号链依赖高性能 ADC/FPGA（TI、ADI、Xilinx/AMD 等美系为主）。2022 年起美国对华半导体管制没有直接点名医疗设备，但高性能器件的许可不确定性已传导（C1 推算，逻辑成立但无直接证据，【缺口：需要联影/东软关于芯片供应的公开披露，如科创板问询回复】）。",
   "**软件与监管数据**：设备嵌入软件、临床算法、以及支撑注册的临床试验数据。换供应商不只是换硬件，注册证跟着「制造商+产地+关键部件」走，变更即触发重新注册或补充申请（NMPA/FDA 均如此），这使监管本身成为上游依赖的放大器。",
   "**精密制造与人才**：高场磁体绕线、真空、低温工程是小圈子工艺，欧美日中各有存量，不构成单国卡点，但扩产慢。",
   "总判：整机层多点、部件层窄点、氦气单点。中国国产替代的真实进度要按这三层分开读，只看整机装机量会高估。"
  ],
  "downstream": [
   "**各国医院系统（致命依赖，但慢性）**：高端影像是三级医院的诊断底座，肿瘤放疗、心脑血管介入、外科微创都依赖设备存量。依赖强度：存量设备失去维保 → 数月内可用率下降（球管、备件耗尽）；新增断供 → 数年尺度的能力冻结。不同于断药，设备断供不立刻死人，打击以「医疗体系折旧」的形式慢性显现。",
   "**中国市场对西方巨头的收入敞口（反向依赖）**：中国是 GPS 三家各自的第二大或前三大单一市场，行业口径约占其全球营收 10–15%（C2 推算，【缺口：GEHC/Healthineers/Philips 年报的分地区收入】）。这是本节点「双向人质」结构的另一半：中国医院依赖西方设备，西方厂商依赖中国市场增量。",
   "**美国医院对中国产中低端设备/耗材的依赖**：监护仪、部分诊断试剂、手套注射器类，301 关税清单多轮覆盖医疗产品（2024 年 301 复审把注射器、口罩、医用手套关税大幅上调，C2 推算，【缺口：USTR 2024 年 301 复审最终清单原文】）。依赖强度：可缓冲（有替代产地，成本上升）。",
   "**发展中国家市场**：中国设备（迈瑞、联影）以性价比进入非洲、拉美、东南亚公立系统，是中国方向的势力范围扩张段（对照华为电信设备的路径）。"
  ],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": "operational",
   "unstructured": false,
   "text": "**情景 A：西方对中国断供高端设备/部件（出口管制情景）**\n- 中国整机替代：联影 3T MRI、320 排 CT、PET/CT 已有产品并装机（C2 推算），整机层 `partial fallback`（高端最顶段如光子计数 CT 尚无对位产品）。\n- 部件层：球管、高端探测器、专用芯片仍部分依赖进口，`possible reroute`；现有证据显示国产化在推进，但不足以判定已到 operational。\n- 五问（以高端 CT 为例）：替代哪一层：整机可替代，探测器/球管是卡口；多久接上：整机即时，部件国产对位 3–5 年（C1 推算）；卡在哪个转换环节：探测器晶体材料与球管寿命工艺；谁有权限启动：国家采购转向（集采+设备更新目录）即可启动，权限在国务院/卫健委/财政部；现场有没有执行能力：联影/东软有整机产线和三甲装机记录，部件线【缺口：需要联影招股书及年报的自研部件披露】。\n- 总判：中国方向的 fallback 是全图里少见的「接近 partial」，因为国家买方已经用集采和采购目录把替代产线养了十年。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球医疗设备市场约 $5,000–6,000 亿/年（2023–2024，C2 推算，行业口径，【缺口：需要 Evaluate MedTech World Preview 或 Fitch/Statista 报告原文】）。细分（均 C2 推算）：\n- 诊断影像设备：约 $450–500 亿\n- 手术机器人（系统+耗材+服务）：约 $80–100 亿\n- 体外诊断（IVD）：约 $900–1,000 亿\n- 心血管/骨科等高值耗材：合计约 $1,000 亿+\n- 中国医疗设备市场：约 ¥1.2–1.3 万亿（约 $1,700–1,800 亿，全球第二，C2 推算，【缺口：中国医疗器械蓝皮书 2024】）",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 影像前五（GE/Siemens/Philips/Canon/Fujifilm）合计约 80–90%（C2 推算，【缺口：Signify Research 份额报告】）\n- 手术机器人 CR1（Intuitive）约 60–70%（C2 推算，【缺口：Intuitive 10-K + BIS Research 口径】）\n- 全行业 CR4（Medtronic/J&J MedTech/Abbott/Siemens Healthineers 量级）约 15–20%。**整个医疗设备行业本身分散，集中度只在细分段成立**，这是定级时必须记住的一个关键事实（C2 推算）\n- 中国集采后国产份额：冠脉支架 >80%、骨科关节 >50%（C2 推算，草图承接，【缺口：国家医保局集采后采购量统计】）\n- Price maker：细分段各自的 CR1（影像段 GPS 定价，机器人段 Intuitive 定价）；但在中国市场，**集采使买方成为 price maker**——这是全图少见的买方定价节点。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "全部 C2 推算，逐家【缺口】对应年报：\n\n| 公司 | 年营收 | 利润率 | 市值量级 | 缺口 |\n|---|---|---|---|---|\n| Medtronic | 约 $32B（FY2024）| 净利率约 12–13% | 约 $110B | 【缺口：Medtronic FY2024 10-K】|\n| J&J MedTech | 约 $30B（2023 分部）| 分部利润率约 25%（税前口径）| 不单独上市 | 【缺口：J&J 2023 10-K 分部表】|\n| GE HealthCare | 约 $19.6B（2023）| 净利率约 8% | 约 $35–40B | 【缺口：GEHC 2023 10-K】|\n| Siemens Healthineers | 约 €21.7B（FY2023）| 净利率约 7–8% | 约 €55–60B | 【缺口：Healthineers FY2023 年报】|\n| Philips | 约 €18B（2023）| 呼吸机召回致利润受压 | 约 €20–25B | 【缺口：Philips 2023 年报】|\n| Intuitive Surgical | 约 $8B（2024）| 净利率约 28–30% | 约 $180B+ | 【缺口：Intuitive FY2024 10-K】|\n| 迈瑞医疗 | 约 ¥350 亿（2023）| 净利率约 33% | 约 ¥3,500–4,000 亿 | 【缺口：迈瑞 2023 年报】|\n| 联影医疗 | 约 ¥114 亿（2023）| 净利率约 17% | 约 ¥1,000 亿 | 【缺口：联影 2023 年报】|\n\n财务结构读法：Intuitive 和迈瑞的净利率（28–33%）远高于影像三巨头（7–8%）——利润沉在耗材绑定（Intuitive 收入约 70% 来自耗材与服务而非整机，C2 推算）和中低端规模化（迈瑞），不在高端整机。整机巨头的资本纵深靠规模而非利润率，承受长期管制对抗的能力弱于其市场地位给人的印象。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 中国市场占 GPS 三家营收比重：约 10–15%（C2 推算，【缺口：三家年报分地区收入表】）。这是中国反制能力的量化依据。\n- 中国三甲医院高端影像存量中进口占比：约 70–80%（高场 MRI 更高，C2 推算，【缺口：中国医学装备协会装机量统计】）。这是西方断供能力的量化依据。\n- 存量设备断维保的时间敞口：CT 球管寿命约 3–7 年、备件库存约 6–18 个月（C2 推算）——断维保后 1–2 年内存量设备可用率显著下降，比 API 的 2–6 个月库存窗长，但不可逆性更强（设备停摆后临床能力重建慢）。\n- 达芬奇耗材断供敞口：器械使用次数锁定，医院耗材库存通常数周至数月（C2 推算）——机器人段的断供窗口反而接近药品级的短。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "- 欧盟 IPI 措施涉及的采购盘：欧盟公共采购医疗器械市场年约 €150 亿+（C2 推算，【缺口：欧盟委员会 IPI 调查报告中的市场数据】）；中国反制涉及的政府采购盘：中国公立医院设备采购年数千亿人民币级，其中欧盟企业可竞标部分【缺口：需要财政部政府采购医疗设备年度统计】。\n- 若西方对华高端影像全面断供：中国存量约数万台 CT/MRI 的维保退化 + 年新增装机缺口，直接影响诊疗量的量化【缺口：需要 RAND 或中国卫生统计年鉴口径的装机与检查量数据，C1 推算量级为每年数亿人次影像检查所依托的设备底座】。\n- COVID 呼吸机抢购的实测数字：2020 年全球呼吸机需求峰值约为常年产能的 5–10 倍，美国 DPA 合同总额约 $30 亿（C2 推算，【缺口：HHS/FEMA 合同公开记录】）。",
    "cLevels": [
     "C2",
     "C1"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "不同分段的利润来源不同，是分析本节点政治影响范围的关键：\n- **手术机器人**：利润沉在耗材与服务（Intuitive 毛利率约 66–68%，C2 推算）——断供打击对 Intuitive 是营收损失，对医院是手术能力损失；不对称明显偏向持有方。\n- **高端影像**：整机利润薄（三巨头净利率个位数），利润在服务合同与升级——断供对厂商的财务伤害真实存在，中国市场 10–15% 的营收敞口使 GPS 三家有游说本国政府反对管制的动机（对照 ASML 案例的行为模式）。\n- **中低端/耗材**：集采已把中国境内这一段的利润压到微利，国产厂商靠量和出海;利润重心移向海外市场——这使中国厂商反而对「被排除出欧美市场」高度敏感（欧盟 IPI 措施打的正是这一点）。\n- 总判：这个节点没有 API 那种「卡点持有者无利可失」的结构；**双方的卡点持有者都有大额利润在对方市场里押着**，这抬高了双向武器化的门槛，也解释了为何 2024–2025 年的对抗停在「政府采购」这个有限盘面而没有升到出口管制。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "全球医疗设备市场约 $5,000–6,000 亿（2023–24）",
    "level": "C2",
    "source": "行业口径（Evaluate MedTech 类），无原文"
   },
   {
    "item": "影像前五合计约 80–90%",
    "level": "C2",
    "source": "市场研究转引"
   },
   {
    "item": "Intuitive 占手术机器人约 60–70%，装机 9,500+",
    "level": "C2",
    "source": "Intuitive 财报口径转引"
   },
   {
    "item": "GPS 三家中国营收敞口约 10–15%",
    "level": "C2",
    "source": "年报分地区收入，未取原文"
   },
   {
    "item": "中国三甲高端影像进口占比约 70–80%",
    "level": "C2",
    "source": "中国医学装备协会口径转引"
   },
   {
    "item": "超导 MRI 依赖液氦、医疗占全球氦消费 20–30%",
    "level": "C2",
    "source": "Gasworld/CGA 口径转引"
   },
   {
    "item": "联影 2023 营收约 ¥114 亿、迈瑞约 ¥350 亿",
    "level": "C2",
    "source": "两公司年报，未取原文"
   },
   {
    "item": "欧盟 2024-04-24 IPI 调查启动 → 2025-01 认定 87%招标歧视 → 2025-06-19 限制措施(€500万/≤50%)2025-06-30 生效",
    "level": "C3",
    "source": "EC 新闻稿+White&Case/Baker McKenzie 交叉核对"
   },
   {
    "item": "中国财政部 2025-07-06 反制公告(¥4,500万门槛+限含>50%欧盟部件第三国产品)",
    "level": "C3",
    "source": "多家律所简报交叉核对"
   },
   {
    "item": "2021 年政府采购进口产品审核指导标准",
    "level": "C2",
    "source": "流传件，无官方公开原文"
   },
   {
    "item": "集采后国产支架 >80%、关节 >50%",
    "level": "C2",
    "source": "草图承接，医保局口径转引"
   },
   {
    "item": "2020 年美国 DPA 呼吸机合同约 $30 亿",
    "level": "C2",
    "source": "HHS/FEMA 合同记录转引"
   },
   {
    "item": "CT 球管寿命 3–7 年、备件库存 6–18 个月",
    "level": "C2",
    "source": "行业常识口径"
   },
   {
    "item": "对俄医疗设备供给实际收缩（名义豁免下）",
    "level": "C1",
    "source": "逻辑成立，无直接证据在手"
   },
   {
    "item": "高端芯片管制外溢影响中国影像设备信号链",
    "level": "C1",
    "source": "逻辑成立，无披露证据在手"
   }
  ],
  "contested": {
   "title": "2024–2025 欧盟 IPI 调查 → 采购限制 → 中国对等反制：医疗设备市场准入的第一次公开对射",
   "summary": "（关键时间线与数字 C3，2026-07-08 用 EC 新闻稿 + 多家律所简报交叉核对；EUR-Lex 实施条例逐字全文待取升 C4）"
  },
  "gaps": [
   "按「最影响卡点判断」排序：",
   "1. **【缺口：欧盟 IPI 医疗器械调查的启动通知、调查结论与 2025 年实施条例原文（EUR-Lex 文号）】**：争夺事件全部时间线的 C2→C4 升级依据，最优先。",
   "2. **【缺口：中国财政部 2025 年 7 月对欧盟医疗器械政府采购限制公告原文（含在华欧资企业认定条款）】**：反制的确切范围与豁免设计，直接影响双向人质判断。",
   "3. **【缺口：「政府采购进口产品审核指导标准（2021 年版）」官方文本或可靠完整流传件】**：中国渐进式采购武器化的关键文件，目前只有转述。",
   "4. **【缺口：GE HealthCare 2023 10-K、Siemens Healthineers FY2023 年报、Philips 2023 年报的分地区收入表】**：量化三巨头中国敞口（Q4 的一半），反制牌的底数。",
   "5. **【缺口：Intuitive Surgical FY2024 10-K】**：装机数、耗材收入占比、市占口径，机器人段全部数字的原文。",
   "6. **【缺口：联影医疗 2023 年报 + 科创板招股书（自研部件与芯片供应披露）】**：中国高端替代的真实部件国产化程度，fallback 等级判断的关键。",
   "7. **【缺口：迈瑞医疗 2023 年报（分地区收入）】**：中国厂商对欧美市场的反向敞口。",
   "8. **【缺口：Signify Research 或 Omdia 医学影像市场份额报告】**：影像段集中度的第三方口径。",
   "9. **【缺口：Gasworld/CGA 氦市场报告 + MRI 零蒸发磁体技术白皮书】**：cm-helium 耦合的强度量化（存量设备中零蒸发机型占比决定氦卡点的衰减速度）。",
   "10. **【缺口：中国医学装备协会高端影像装机量与进口占比统计】**：西方断供牌的量化底。",
   "11. **【缺口：USTR 2024 年 301 复审最终清单中医疗品类税率原文】**：美国线的接口文件。",
   "12. **【缺口：Medtronic FY2024 10-K、J&J 2023 10-K 分部表】**：综合巨头段财务概况原文。"
  ]
 },
 "ph-vaccine": {
  "sourceFile": "ph-vaccine.md",
  "archiveId": "ph-vaccine",
  "established": null,
  "updated": null,
  "cLevelOverall": null,
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "印度血清研究所（Serum Institute of India）",
    "role": "全球最大剂量产能（常规 + COVID）",
    "scale": "年产能约 19 亿剂、规划扩至约 40 亿剂（C2, Wikipedia/SII 2023–24，待一手）",
    "jurisdiction": "印度（私营，Poonawalla 家族）",
    "group": null
   },
   {
    "entity": "Moderna",
    "role": "mRNA 持牌制造",
    "scale": "mRNA 平台近独占之一；【缺口：产能/份额一手】",
    "jurisdiction": "美国（NASDAQ: MRNA）",
    "group": null
   },
   {
    "entity": "BioNTech（+ Pfizer 制造网络）",
    "role": "mRNA 持牌制造",
    "scale": "mRNA 平台近独占之一；原液德国主力",
    "jurisdiction": "德国（NASDAQ: BNTX）/ 美国",
    "group": null
   },
   {
    "entity": "国药 Sinopharm、科兴 Sinovac",
    "role": "灭活路线大规模产能",
    "scale": "合计约占全球 COVID 交付剂量近半（C2, 媒体转引）",
    "jurisdiction": "中国（国药国资 / 科兴）",
    "group": null
   },
   {
    "entity": "GSK、Sanofi、Merck（MSD）、辉瑞（非 mRNA 段）",
    "role": "传统疫苗巨头（多联苗、肺炎、HPV 等高值疫苗）",
    "scale": "高值疫苗市场主导；【缺口：分品类份额/营收】",
    "jurisdiction": "英 / 法 / 美",
    "group": null
   },
   {
    "entity": "CEPI / Gavi（COVAX 运营方）",
    "role": "应急产能预留与分配协调",
    "scale": "曾预留 >10 亿剂 COVID 产能（C2, Gavi/CEPI）",
    "jurisdiction": "挪威 / 瑞士（国际组织）",
    "group": null
   },
   {
    "entity": "Bharat Biotech、Bio Farma、Biological E 等",
    "role": "区域大规模生产者",
    "scale": "【缺口：份额】",
    "jurisdiction": "印度 / 印尼等",
    "group": null
   }
  ],
  "upstream": [
   "疫苗产能自己绕不开的东西——这一维最需要拆到最细：",
   "**佐剂（adjuvant）**：部分疫苗（尤其蛋白路线、大流行流感疫苗）依赖特定佐剂。GSK 的 AS03、Novartis/Seqirus 的 MF59、以及 Dynavax 的 CpG 1018 等属专利佐剂，供给集中（C2 推算，待核）。皂苷类佐剂 QS-21 历史上依赖智利皂皮树（Quillaja saponaria）天然提取——一个真实的天然原料单点（C2，待一手核实）。**建议子节点 ph-vaccine-adjuvant。**",
   "**脂质纳米颗粒（LNP）与可电离脂质**：mRNA 疫苗的关键交付材料，专利与特种化学品供给集中（如 Acuitas 的 LNP 专利、少数特种脂质供应商），是 mRNA 路线的隐形上游卡点（C2，待核）。**建议子节点 ph-vaccine-lnp。**",
   "**一次性生物反应器 / 培养基 / 层析介质**：现代疫苗与生物制品共用的耗材，COVID 期间全球性短缺（单次使用生物工艺袋、细胞培养基、层析树脂等），与 ph-biotech 高度共用上游（C2 推算，待核）。",
   "**鸡胚（灭活流感疫苗）**：传统流感疫苗仍大量依赖 SPF 鸡胚供应，是一条古老但真实的生物原料链（C2）。",
   "**玻璃瓶 / 硼硅玻璃西林瓶 + 橡胶塞**：fill-finish 段的实体耗材，COVID 期间硼硅玻璃管瓶（如 Schott、康宁 Valor）一度紧张（C2，待核）。",
   "**酶与核苷酸原料（mRNA）**：体外转录所需的 RNA 聚合酶、修饰核苷酸、加帽试剂等，供给集中于少数试剂商（C2，待核）。",
   "总体：传统路线上游没有 EUV 那种极端单点，但 mRNA 路线的 LNP/脂质 + 酶试剂、以及跨路线的佐剂与一次性耗材，都是真实的中度集中上游——买不到 mRNA 疫苗时，大概率也买不到自建产线所需的关键脂质与试剂。"
  ],
  "downstream": [
   "**低收入国家（依赖度：致命）**：几乎完全依赖外部供给，本土产能极少。COVAX/Gavi 是其主要获取通道，一旦供给中断即无缓冲。",
   "**全球儿童常规免疫（依赖度：高）**：在很大程度上依赖 SII 一家的低价产能；SII 出问题则全球常规免疫供给承压（C2，待一手核实其份额口径）。",
   "**中等收入国家（依赖度：高，可部分缓冲）**：有一定本土灌装或区域采购能力，但原液与高值疫苗仍依赖进口。",
   "**高收入国家（依赖度：低—中）**：本土或盟友有 mRNA/传统产能，且凭预购合同优先获取；COVID 中反而是「先拿到」的一方。",
   "断供缓冲：常规疫苗多有数月国家库存 + EPI（扩大免疫规划）计划性采购缓冲；大流行时缓冲基本为零——新发病原体的疫苗此前不存在，产能从零起步，「库存」概念不适用，真正的约束是扩产速度与分配顺序。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：部分可行（分路线：传统 partial / mRNA possible reroute / 分配权是真正的短板）。**"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球疫苗市场年营收规模【缺口：需要 WHO/行业报告（如 Evaluate/IQVIA/MarketsandMarkets）全球疫苗市场规模，估约 $500–700 亿量级、2023，C2 推算，无可靠引用不写死】。\n\n参照量：COVID 期间全球已交付 COVID 疫苗约 73 亿剂（C2，媒体转引，用于说明中国两企业占比口径）。\n\n注：疫苗市场高度分化——高值疫苗（肺炎球菌、HPV、多联苗）贡献大部分营收但集中在西方巨头；大宗低价疫苗（EPI 计划苗）剂量巨大但营收占比小、由 SII 等主导。市场规模与剂量份额是两个方向，不可混用。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 原液产能：印度最大（C2，CEPI 调查转引）；mRNA 原液：欧洲最大（C2）；成品灌装：中国最大、北美次之（C2）。\n- SII 年产能约 19 亿剂、规划扩至约 40 亿剂（C2，SII/Wikipedia 转引，待一手）。\n- 全球约 65% 儿童至少接种一剂 SII 疫苗（C2，SII/Wikipedia 转引，高影响待一手核实）。\n- 国药 + 科兴合计约占全球 COVID 交付剂量近半（C2，媒体转引）。\n- mRNA 持牌开发者近乎全在高收入国家（C2，Lancet GH/CEPI 转引）。\n- **CR/HHI 数值**：【缺口：需要按剂量与按营收分别计算的 CR1/CR4，分路线、分品类；现有数据不足以给可靠 CR，故不写死】。\n- **price maker**：高值疫苗——西方巨头（专利定价权）；大宗疫苗——SII 等靠低价成为事实基准；COVID mRNA——持牌企业 + 预购国。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 公司 | 年营收（来源/年份）| 利润率 | 市值/估值 | C 等级 |\n|---|---|---|---|---|\n| Serum Institute of India（私营）| 【缺口：SII 非上市，需年报/披露】| — | — | — |\n| Moderna（NASDAQ: MRNA）| 【缺口：FY2023 10-K，COVID 后营收大幅回落】| — | 上市，【缺口：市值】| — |\n| BioNTech（NASDAQ: BNTX）| 【缺口：FY2023 年报】| — | 上市 | — |\n| 国药集团 / 科兴 | 【缺口：分部/披露】| — | — | — |\n| GSK / Sanofi / Merck（疫苗分部）| 【缺口：疫苗分部营收，肺炎球菌/HPV/多联苗为主】| — | 上市 | — |\n\n说明：这组数字要说明的是「玩家有多大资本纵深扛断供或反制政治压力」。西方巨头疫苗分部利润率高（高值专利疫苗）、资本纵深大；SII 靠量、利润率相对薄；mRNA 企业 COVID 后营收剧烈回落，产能可持续性存疑。全部待典藏取一手财报，本初稿不填估数。",
    "cLevels": []
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 低收入国家对外部供给敞口：接近 100%（本土产能极少，C2 推算）。\n- 全球儿童常规免疫对 SII 敞口：约 65% 儿童至少一剂（C2，待一手）。\n- 90+ 国未能在 2021 年底达到 WHO 40% 接种目标（C2，CEPI/WHO 转引）——这是分配权敞口的最硬量化点。\n- 断供缓冲：常规疫苗有计划性采购 + 数月库存；大流行时缓冲≈0（疫苗从零起步）。\n- 【缺口：需要 COVAX 供给中断的官方剂量数据（2021 印度暂停出口后 COVAX 缺口的具体剂量与月份）】。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供/管制的经济冲击量级",
    "text": "- COVID 疫苗不平等分配的宏观冲击：【缺口：需要 IMF/世界银行/Eurasia Group 等对「疫苗民族主义」全球 GDP 损失估算，部分研究估延迟接种致全球经济损失达数千亿至万亿美元级，C2 推算，无确定引用不写死】。\n- 常规免疫中断的冲击：SII 若长期停摆，全球儿童常规免疫覆盖率下降 → 可预防疾病回潮（麻疹等），冲击以公共卫生 + 长期人力资本计，难以单一 GDP 数字概括。\n- 这个维度须给数量级但目前无可靠报告，全部标缺口。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链利润分布**两极分化**：\n\n- 高值专利疫苗（肺炎球菌、HPV、多联苗、COVID mRNA）：利润沉淀在**持牌/专利方**（西方巨头 + mRNA 企业），定价权强、毛利高。\n- 大宗低价疫苗（EPI 计划苗）：利润薄，沉淀在下游分发与公共采购环节，SII 等生产者靠规模维持。\n\n政治含义：政治压力首先落在**持牌方**的资产负债表上（他们有真实利润可失、也有反制资本），这与 ph-api「持有者本身利润薄、断供自己损失小」正好相反——**mRNA 持牌方断供的机会成本高**，这既是其议价筹码，也是限制其无限武器化的经济约束。大宗疫苗生产者（SII）则相反，出口限制多由主权驱动、非企业逐利。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "mRNA 持牌制造集中在高收入国家",
    "level": "C2",
    "source": "Lancet Global Health / CEPI 2024"
   },
   {
    "item": "原液印度最大、mRNA 原液欧洲最大、成品灌装中国最大",
    "level": "C2",
    "source": "CEPI 产能调查转引"
   },
   {
    "item": "SII 年产能约 19 亿剂、规划约 40 亿剂",
    "level": "C2",
    "source": "SII / Wikipedia 2023–24"
   },
   {
    "item": "约 65% 儿童接种至少一剂 SII 疫苗",
    "level": "C2",
    "source": "SII / Wikipedia 转引"
   },
   {
    "item": "国药 + 科兴约占全球 COVID 交付近半",
    "level": "C2",
    "source": "媒体转引"
   },
   {
    "item": "90+ 国未达 2021 底 40% 接种目标",
    "level": "C2",
    "source": "CEPI / WHO 转引"
   },
   {
    "item": "2021 印度暂停疫苗出口冲击 COVAX",
    "level": "C2",
    "source": "多家媒体报道"
   },
   {
    "item": "APA 预购囤积（高收入国家超额订购）",
    "level": "C2",
    "source": "OECD/Duke 全球健康创新中心追踪转引"
   },
   {
    "item": "LNP/特种脂质、佐剂为 mRNA/蛋白路线隐形上游卡点",
    "level": "C2 推算",
    "source": "行业共识，无一手"
   },
   {
    "item": "fill-finish 灌装是被低估的产能瓶颈",
    "level": "C2 推算",
    "source": "COVID 报道转引"
   },
   {
    "item": "EU 2021 疫苗出口授权机制（Reg 2021/111）",
    "level": "C2",
    "source": "媒体转引"
   },
   {
    "item": "全球疫苗市场规模",
    "level": "缺口",
    "source": "—"
   },
   {
    "item": "关键企业财务",
    "level": "缺口",
    "source": "—"
   }
  ],
  "contested": {
   "title": "2021 年印度暂停新冠疫苗出口 → 切断 COVAX 主供给，暴露「全球公平分配依赖单一量产支点」的结构",
   "summary": "这是 ph-vaccine 节点近年最清晰的被激活时刻。与 ph-api 的 2020 年印度出口禁令类似，它是**防守性管制暴露了依赖结构**，不是进攻性武器化。按领域核纪律走五个阅读动作，但只记已发生的动作与反应，不预判结局。本事件目前主要基于媒体转引，尚未完成结构化一手核实，可信度中低，待缺口 2、3 补齐后升级。"
  },
  "gaps": [
   "1. **【缺口：需要 CEPI 全球疫苗制造产能调查原始报告（Global Vaccine Manufacturing Capacity survey）】**：核实「原液印度最大 / mRNA 原液欧洲最大 / 灌装中国最大」的分环节地理分布，是第 3 维与 Q2 的地基，最高优先级。",
   "2. **【缺口：需要 WHO / Duke Global Health Innovation Center 关于 2021 年疫苗分配与 40% 目标未达国的官方数据】**：核实「90+ 国未达 40%」与 COVAX 断供剂量，是卡点核心论点（分配权 > 产量）的量化支撑。",
   "3. **【缺口：需要印度 2021 年疫苗出口暂停的官方公告与解除时间线（印度外交部/商工部）】**：坐实主权出口卡点这一实证事件，第 9/10/E 维关键。",
   "4. **【缺口：需要 Lancet Global Health《100 Days Mission》建模研究 + CEPI 关于 mRNA 持牌集中的原文】**：核实「mRNA 持牌几乎全在高收入国家」，是 mRNA 卡点判断的地基。",
   "5. **【缺口：需要 SII 官方产能数据与「65% 儿童接种一剂」口径的一手出处】**：高影响判断，目前仅 Wikipedia/SII 转引，须一手核实。",
   "6. **【缺口：需要高收入国家 COVID 疫苗 APA 预购合同/OECD 超额订购追踪数据】**：量化「预购囤积」，政治传动层 A/C/E 与 Q4 关键。",
   "7. **【缺口：需要 EU Regulation 2021/111（COVID 疫苗出口授权机制）EUR-Lex 全文】**：确认出口授权接口的法律形态与生效/失效时点。",
   "8. **【缺口：需要全球疫苗市场规模权威统计（Evaluate/IQVIA/WHO）+ 关键企业疫苗分部财报（Moderna/BioNTech 10-K、GSK/Sanofi/Merck 疫苗分部、SII 披露）】**：Q1/Q3 全部空缺。",
   "9. **【缺口：需要 mRNA 技术转移中心（南非 Afrigen）进展与 Moderna 肯尼亚厂状态的一手报道/WHO 通报】**：核实第 7 维 fallback 等级（planned vs partial）。",
   "10. **【缺口：需要 LNP/特种脂质专利与供给集中度、QS-21 皂苷佐剂来源的一手资料】**：支撑建议子节点 ph-vaccine-lnp / ph-vaccine-adjuvant 的独立拆解。\n---"
  ]
 },
 "ps-alliance-regimes": {
  "sourceFile": "ps-alliance-regimes.md",
  "archiveId": "ps-alliance-regimes",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "这个节点分析的不是某一台机器、某一条通道，而是一种政治协调力：几个国家把各自本来分散的出口管制、审查、许可决定对齐到一起，让原本容易被绕开的单边限制变成绕不开的集体限制。领域核第六节讲过一条道理：一个协调起来的杠杆，强度大约等于「中断点本身的分量」乘以「联盟的凝聚力」。单个国家卡一样东西，被卡的一方常能换一个供应国绕过去；一旦主要供应国联手，替代路径就一条条被堵死。它作用于技术栈里几乎所有高端制造节点——先进芯片（ac-euv、ac-euv-optics、ac-euv-photoresist）、半导体设备、军民两用技术。它是不是真卡点，取决于联盟能不能真协调起来，而这恰恰是它最脆弱的地方。\n\n---",
  "holders": [
   {
    "entity": "瓦森纳安排",
    "role": "军民两用出口管制多边协调",
    "scale": "42 成员国；靠共识运作、无强制力，各国自行立法执行（C2，Arms Control Association）",
    "jurisdiction": "秘书处在维也纳",
    "group": null
   },
   {
    "entity": "美国 BIS（商务部工业安全局）",
    "role": "实际的协调发起方，常先出单边管制再拉盟友",
    "scale": "依据 EAR / FDPR「外国直接产品规则」域外管辖（C2）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "Chip 4（美日韩台）",
    "role": "半导体供应链与对华管制协调",
    "scale": "四方占全球半导体市场约 82%（C2，GTI）；仍停在磋商层、无正式协定（C2）",
    "jurisdiction": "四国分头立法",
    "group": null
   },
   {
    "entity": "五眼",
    "role": "情报共享外延到技术/供应链协调",
    "scale": "靠长期惯例与情报协定，非条约（C2）",
    "jurisdiction": "美英澳加新",
    "group": null
   },
   {
    "entity": "AUKUS",
    "role": "三边先进技术合作",
    "scale": "2021 政府间安排（C2）",
    "jurisdiction": "美英澳",
    "group": null
   },
   {
    "entity": "荷兰/日本政府",
    "role": "关键设备国，协调的成败系于它们跟不跟",
    "scale": "各自出口许可法（荷兰 2023 起对 DUV 设备设许可，C2）",
    "jurisdiction": "荷兰/日本",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：部分可行**（联盟凝聚力不稳、成员商业动机分化，被约束方常能找到松动的一环；但当协调真落地、且卡的是独家节点时，短期绕不开。）"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "行使记录（可量化的协调行动）：Chip 4 四方占全球半导体市场约 82%、内存芯片约 99%、制造设备约 77%、芯片设计约 84%（C2，Global Taiwan Institute 转引）。瓦森纳 42 成员国（C2）。这些是「协调一旦落地能覆盖多大范围」的量度，不是「已经协调到什么程度」。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "联盟实际协调力度的量化（多少次一致拒绝、多少笔许可被联动否决）：待研究（草图未覆盖）。瓦森纳成员国有半年一次的转让/拒绝报告制度，但汇总数据未当场核实（C2 [待核实]）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "瓦森纳 42 成员国、1996 成立、接替 CoCom",
    "level": "C2",
    "source": "Arms Control Association / Wikipedia"
   },
   {
    "item": "Chip 4 四方占全球半导体市场约 82%、内存 99%",
    "level": "C2",
    "source": "Global Taiwan Institute 转引"
   },
   {
    "item": "Chip 4 仍停在磋商层、2023 年 2 月才首次高官会",
    "level": "C2",
    "source": "SCMP / techwireasia"
   },
   {
    "item": "荷兰 2023 对 ASML DUV 设限、日本同步收紧",
    "level": "C2",
    "source": "多家媒体报道"
   },
   {
    "item": "联盟凝聚力受成员商业动机侵蚀",
    "level": "C1",
    "source": "分析推断"
   },
   {
    "item": "美国 FDPR 域外管辖用作协调工具",
    "level": "C2 [待核实]",
    "source": "公开报道，未核 EAR 原文"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "2023 年，荷兰在美国施压下对 ASML 的 DUV 深紫外光刻设备实施出口许可，日本同步收紧 23 类半导体设备出口——被广泛解读为美日荷三方就对华半导体设备管制达成协调的落地（C2，多家媒体报道）。同年 8 月，中国以对镓、锗实施出口许可作为反制（C2，FTI / Global Trade Alert，另见 cm-gallium 节点），显示协调机制一旦收紧，被约束方会用自己手里的上游卡点反打。这次事件同时暴露联盟的裂缝：荷、日企业均有大量对华营收，跟进过程反复拉扯。此节点已有一次真实争夺，结构可部分采信，但联盟长期凝聚力仍未经充分检验。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. 瓦森纳安排《Best Practices / Control Lists》原文及成员国半年度转让/拒绝报告汇总。",
   "2. 美国 EAR 中 FDPR（外国直接产品规则）条文原文（15 CFR 734.9）。",
   "3. 荷兰 2023 年对半导体设备出口许可的政府令原文。",
   "4. 日本经产省 2023 年 23 类半导体设备出口管制清单原文。",
   "5. Chip 4 各次官方会议纪要或联合声明（若有公开版本）。",
   "6. AUKUS 第二支柱（先进技术）具体协调清单。",
   "7. 各成员国半导体设备厂对华营收占比（ASML、东京电子、尼康等年报）——衡量联盟凝聚力的经济压力。",
   "8. 有无「联盟协调后一致拒绝某笔出口」的具体案例统计。"
  ]
 },
 "ps-domestic-price": {
  "sourceFile": "ps-domestic-price.md",
  "archiveId": "ps-domestic-price",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "前面几个政治栈节点讲的都是一国「能不能」动用卡点——有没有协调、有没有产能。这个节点讲一件常被忽略的事：就算有能力，一国「愿不愿意」动用卡点，被它自己国内的价格、就业和选举压力死死拴着。一个国家可以掐断某条能源供应、可以对别国全面制裁，但如果这么做会让本国汽油涨价、工厂裁员、选民翻脸，掌权者往往就不敢真掐。它作用于技术栈的方向和别的政治栈节点相反——它不是「政治栈作用于技术栈」，而是「国内政治反过来约束政治栈自己的行使意愿」。这是整张地图里最容易被高估卡点时漏掉的一层：账面上能切断，现实里国内政治不让你切。",
  "holders": [
   {
    "entity": "民主政体的选民",
    "role": "通过选票约束掌权者的对外行动意愿",
    "scale": "靠选举周期；汽油价与执政党支持率强相关（C2，Data for Progress 2022）",
    "jurisdiction": "各民主国家",
    "group": null
   },
   {
    "entity": "掌权的行政当局",
    "role": "承受约束、在对外强硬与国内代价间权衡",
    "scale": "靠连任压力；美国 2022 释 SPR 压油价即为例（C2）",
    "jurisdiction": "各国",
    "group": null
   },
   {
    "entity": "威权政体核心支持者（军队/精英）",
    "role": "软约束：怕失去报偿",
    "scale": "靠报偿结构；穆巴拉克案（C2，领域核引 de Mesquita）",
    "jurisdiction": "各威权国",
    "group": null
   },
   {
    "entity": "依赖进口能源的经济体",
    "role": "国内价格传导放大约束",
    "scale": "靠进口依存度；对俄制裁推高全球油价即传导（C2）",
    "jurisdiction": "能源进口国",
    "group": null
   },
   {
    "entity": "反对党/媒体",
    "role": "把国内代价政治化、放大约束",
    "scale": "靠舆论；2022 美国两党就油价互相甩锅（C2，FactCheck/NPR）",
    "jurisdiction": "各民主国家",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "成本增加",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：成本增加**（国内约束很少让一国完全放弃动用卡点，但普遍抬高动用的政治成本，逼掌权者要么对冲、要么折中、要么缩小力度；能力仍在，只是用起来更贵、更受限。）"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "可量化的约束记录：2022 年美国拜登支持率与汽油价强负相关（C2，Data for Progress）；美国释 SPR 1.8 亿桶以压国内油价（C2，美国财政部）；G7 对俄油设 60 美元上限而非全面禁运（C2）。这些是「国内约束逼出对冲/折中动作」的可见证据。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "国内价格波动对制裁力度的定量影响、选举周期与制裁决策时点的相关分析：待研究（草图未覆盖）。有学界研究汽油价与执政党支持率的相关性，但未当场核实系数（C2 [待核实]）。",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "2022 美国拜登支持率与汽油价强负相关",
    "level": "C2",
    "source": "Data for Progress（NPR/FactCheck 转引）"
   },
   {
    "item": "美国 2022 释 SPR 1.8 亿桶压国内油价",
    "level": "C2",
    "source": "美国财政部"
   },
   {
    "item": "SPR 释放使汽油降约 17–42 美分/加仑",
    "level": "C2",
    "source": "美国财政部估算（有争议）"
   },
   {
    "item": "G7 设 60 美元上限而非全面禁运以防反噬",
    "level": "C2",
    "source": "媒体报道"
   },
   {
    "item": "2022 美国民众愿为制裁俄承受油价上涨",
    "level": "C2",
    "source": "NPR 民调报道"
   },
   {
    "item": "政权稳定取决于核心支持者报偿而非民众愤怒",
    "level": "C1",
    "source": "领域核（de Mesquita 转引）"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "2022 年俄乌冲突后，美欧对俄实施能源制裁，直接推高本国汽油价与通胀；拜登政府一边维持制裁、一边释放 1.8 亿桶 SPR 压价，两党就油价成因互相甩锅，油价与执政党支持率强相关（C2，NPR / FactCheck / Data for Progress）。这是一次真实、可观察的争夺：对外强硬的意愿被国内价格约束反复拉扯，逼出释储、价格上限等对冲设计。本节点因此有一次真实事件支撑，结构可部分采信；但「国内约束到底能把制裁力度压到多低」缺乏定量检验，可信度仍较低。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. 汽油价/通胀与执政党支持率相关性的学术研究原文（含系数与方法）。",
   "2. 美国 DOE 关于 2022 年 SPR 释放及回补的官方记录。",
   "3. G7 价格上限设计文件中「防止本国反噬」的政策论证原文。",
   "4. 各国制裁决策与选举周期时点的对照数据。",
   "5. 主要制裁案例中「本国承受的经济代价」评估（IMF/央行报告）。",
   "6. 威权政体动用卡点时国内约束的对照案例（如俄罗斯反制裁的国内成本）。",
   "7. 民意对制裁支持度随价格上涨衰减的时间序列民调。",
   "8. 制裁「反噬本国」的量化研究（如对本国出口企业、就业的影响评估）。"
  ]
 },
 "ps-energy-coordination": {
  "sourceFile": "ps-energy-coordination.md",
  "archiveId": "ps-energy-coordination",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "这个节点分析的不是某一口油井、某一条管道，而是一种协调力：一批国家（有的是卖方，有的是买方）把各自本来独立的产量或采购决定对齐到一起，去影响一个全球性商品的价格和流向。它有三种主要形态——卖方联盟 OPEC+ 协调减产托价、消费国 IEA 集体释放战略储备压价、以及 G7 对俄油设「价格上限」这种买方卡特尔。它作用于技术栈里的能源流节点（en-crude 原油、en-lng、en-tanker 油轮运输）。它是不是真卡点，看协调能不能维持——卖方联盟最大的敌人是成员偷偷超产，买方协调最大的软肋是被卡方能不能换个买家。\n\n---",
  "holders": [
   {
    "entity": "OPEC+",
    "role": "卖方产量协调、托价",
    "scale": "23 产油国；2022–24 累计协调减产约 366 万桶/日以上（C2，Columbia CGEP）；靠部长级会议 + 配额，无强制执行",
    "jurisdiction": "秘书处在维也纳",
    "group": null
   },
   {
    "entity": "沙特阿拉伯",
    "role": "OPEC+ 事实上的调节者，独家追加自愿减产",
    "scale": "2023 年额外自愿减产约 100 万桶/日（C2，PBS/OilPrice）；靠自身闲置产能",
    "jurisdiction": "沙特",
    "group": null
   },
   {
    "entity": "俄罗斯",
    "role": "OPEC+ 内第二大块，兼被 G7 上限针对方",
    "scale": "2023 年减产扩到约 50 万桶/日（C2）",
    "jurisdiction": "俄罗斯",
    "group": null
   },
   {
    "entity": "IEA",
    "role": "消费国集体释储压价",
    "scale": "成员承诺 90 天净进口储备（C2）；靠成员国自愿协调释放",
    "jurisdiction": "巴黎",
    "group": null
   },
   {
    "entity": "G7 + 欧盟",
    "role": "买方卡特尔，对俄油设价格上限",
    "scale": "2022 年底起每桶 60 美元上限（C2）；靠控制西方航运/保险服务层执行",
    "jurisdiction": "七国分头立法",
    "group": null
   },
   {
    "entity": "美国（SPR）",
    "role": "单边释储 + 拉 IEA 协调",
    "scale": "2022 年 3 月授权释放 1.8 亿桶（C2，美国财政部）",
    "jurisdiction": "美国",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：部分可行**（协调能移动价格和收入，但每种形态都有被验证的绕行手段——OPEC+ 被成员超产和消费国增产稀释，G7 上限被俄影子船队大幅绕过。）"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "行使记录（可量化的协调行动）：OPEC+ 2022–24 累计协调减产约 366 万桶/日以上（C2，Columbia CGEP）；美国 SPR 2022 年 3 月释放 1.8 亿桶（C2，美国财政部）；G7 对俄油上限每桶 60 美元（C2）。美国财政部估算 SPR 释放使汽油价下降约每加仑 17–42 美分（C2，Treasury）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "OPEC+ 成员实际减产合规率（承诺 vs 执行）、G7 上限下俄油实际成交价分布、影子船队规模：待研究（草图未覆盖）。有第三方跟踪（如 KSE Institute、Kpler 的俄油出口价数据），但未当场核实（C2 [待核实]）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "OPEC+ 由 23 产油国组成",
    "level": "C2",
    "source": "媒体报道（Vienna 会议）"
   },
   {
    "item": "2022–24 协调减产约 366 万桶/日以上",
    "level": "C2",
    "source": "Columbia CGEP / OilPrice"
   },
   {
    "item": "沙特 2023 额外自愿减产约 100 万桶/日",
    "level": "C2",
    "source": "PBS / OilPrice"
   },
   {
    "item": "G7 对俄油每桶 60 美元上限",
    "level": "C2",
    "source": "媒体报道"
   },
   {
    "item": "美国 SPR 2022 释放 1.8 亿桶",
    "level": "C2",
    "source": "美国财政部"
   },
   {
    "item": "SPR 释放使汽油降约 17–42 美分/加仑",
    "level": "C2",
    "source": "美国财政部估算（有争议）"
   },
   {
    "item": "俄罗斯用影子船队大幅绕过上限",
    "level": "C2",
    "source": "媒体报道"
   },
   {
    "item": "石油环节天然不生长操作方停工力量",
    "level": "C1",
    "source": "领域核推断"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "2022 年底至 2023 年，G7 对俄海运原油设每桶 60 美元价格上限，试图既压俄罗斯石油收入、又不让俄油退出市场（避免全球油价飙升）。俄罗斯的反制是搭建「影子船队」、把出口转向印度和中国、用非西方保险，使实际成交价一度高于上限，G7 的分析师原预期俄产量大降却落空（C2，媒体报道）。同一时期 OPEC+ 用协调减产托价，与消费国的释储、上限相互角力。这是一次真实、且结果偏向「协调被绕过」的争夺，本节点结构可部分采信，但每种协调形态的长期有效性仍未充分检验。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. OPEC+ 各次部长级会议公报原文（含各国配额与减产量）。",
   "2. G7 价格上限的执行法规原文（美国 OFAC、欧盟第 833/2014 号条例修订、英国 OFSI 指引）。",
   "3. IEA 集体行动机制文件及历次协调释储记录。",
   "4. 美国 DOE 关于 2022 年 SPR 释放的官方记录与后续回补计划。",
   "5. 第三方对俄油实际成交价与影子船队规模的量化跟踪（KSE Institute、Kpler）。",
   "6. OPEC 月度石油市场报告中的成员产量合规数据。",
   "7. 俄罗斯原油出口目的地转移（印度、中国占比）海关/贸易数据。",
   "8. IEA 各成员战略储备实际库存水平。"
  ]
 },
 "ps-export-control": {
  "sourceFile": "ps-exportctrl.md",
  "archiveId": "ps-exportctrl",
  "established": "2026-06-23",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "BIS（Bureau of Industry and Security）",
    "role": "EAR 主管机构；Entity List / EL；CCL/ECCN 分类",
    "scale": null,
    "jurisdiction": "美国华盛顿特区 / 美国法域",
    "group": null
   },
   {
    "entity": "OFAC（Office of Foreign Assets Control）",
    "role": "制裁与 SDN 清单（财政部）",
    "scale": null,
    "jurisdiction": "美国 / 美国法域",
    "group": null
   },
   {
    "entity": "荷兰 CIEAA / HDEA（原 Centrale Dienst voor In- en Uitvoer）",
    "role": "荷兰出口许可",
    "scale": null,
    "jurisdiction": "荷兰 Den Haag / 荷兰法域",
    "group": null
   },
   {
    "entity": "日本经济产业省 METI（輸出規制担当）",
    "role": "日本半导体设备出口管制",
    "scale": null,
    "jurisdiction": "东京 / 日本法域",
    "group": null
   },
   {
    "entity": "Wassenaar Arrangement 秘书处",
    "role": "多边协调框架",
    "scale": null,
    "jurisdiction": "维也纳 / 国际",
    "group": null
   },
   {
    "entity": "英国出口管制联合部门 ECJU",
    "role": "英国出口许可",
    "scale": null,
    "jurisdiction": "英国 / 英国法域",
    "group": null
   }
  ],
  "upstream": [
   "这个节点自己的上游是政治意志和制度能力，不是物理物料：",
   "**盟友政治协调**：荷兰、日本退出要么重新加入出口管制阵线，是整个体系射程的关键变量。2023 年美荷日三方协同约定是本轮管控最重要的地缘政治事件之一（C3，新闻报道；需荷兰 CIEAA/日本 METI 官方公告原文）。这个上游没有物理锁定机制——联盟关系是 real force，可以被侵蚀。",
   "**情报和执法能力**：BIS 需要判定\"谁是最终用户\"、\"谁是真实购买方\"，依赖情报（CIA/DIA 等）、海关数据和公司尽调报告。执法能力不足时清单成为纸老虎。",
   "**企业合规生态**：没有出口管制律师事务所、合规软件公司、运输代理的自我执行，BIS 无法触及每一笔交易。这个生态本身形成规模较大的服务市场。"
  ],
  "downstream": [
   "ps-exportctrl 是整个 Stack Atlas 里覆盖节点最广的单个政治接口——几乎所有含美国技术成分的实物节点都通过这里和政治栈连接：",
   "ac-euv、ac-euv-lightsource（Cymer 在美）、ac-euv-optics（ASML 整机含美技术）、ac-euv-pellicle（3B001.l 独立 ECCN）",
   "ac-fab（TSMC/三星生产先进节点芯片：FDP §734.9(h) 触发）、ac-gpu（NVIDIA/AMD 美国公司直接管辖）、ac-hbm（3A090.c FDP 覆盖 HBM）",
   "ac-eda（Synopsys/Cadence 美国公司，含软件许可 + 美国人支持限制）",
   "tc-basestation（NDAA §889 + FCC rip-and-replace + EO 13873，供应商管控）",
   "这些节点对 ps-exportctrl 的依赖是结构性的：它们的政治传动层 A 维（公开接口）都指向 ps-exportctrl，或通过 FDP 与其直接耦合。"
  ],
  "fallback": {
   "verdictZh": "部分可行（其余仅在规划）",
   "verdictRaw": "partial/planned",
   "unstructured": false,
   "text": "- **国内替代（芯片/制造设备自研）**：fallback 等级 `partial/planned`，不同层差距巨大。SMIC 7nm DUV 叠加曝光（2023 年 Mate 60 Pro，C3 广泛报道）证明\"不可能\"命题已被证伪——但代价是良率低、成本高，且只在 7nm；3nm 及以下需要 EUV，无近期路径。中芯 DUV-only 工艺成本比台积电 EUV 高 5–10 倍（C2 推算，无原始报告支撑）。按 fallback 五问：替代哪一层=先进逻辑芯片生产；多久接上=现已部分接上（7nm）但无路径到 3nm；卡在哪=EUV 设备封锁 + 良率 know-how 差距；谁有权启动=国家集成电路大基金 + 相关部委；现场执行能力=SMIC 7nm 实证但不能推广到更先进节点。结论：`partial reroute`——有路但只通到 7nm，之下无路。\n- **规格游戏**：NVIDIA 2022 年管制后把 H100/A100 调到恰好低于带宽阈值；2023 年管制收紧后推出 H800/A800；2024-12 管制 HBM 后尝试低带宽版本。这是持续的追逐博弈，不是真正的 fallback（C3，FPRI/Tan 2024 原文 + NVIDIA 8-K）。\n- **云服务绕道**：2023 年以前，iFlyTek（Entity List 上的中国 AI 公司）通过 AWS 和 Oracle Cloud 合法租用 NVIDIA A100/H100 GPU（C3，FPRI/Tan 2024 原文）。这不是绕过控制，而是出口管制的硬件层和算力可达性层之间有漏洞。BIS 2024 年后开始部署 cloud IaaS 端用管控规则关这个漏洞（C3 新闻报道，具体规则文本待核）。\n- **中间商和转口**：UAE、新加坡、马来西亚的转口路径被 Entity List 50% 规则和末端用户认证机制持续压缩，但从未归零（C3 新闻报道，执行力度不稳定）。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "ps-exportctrl 不是产品市场，它的\"市场规模\"需要用**被管控的技术流量规模**来代理：\n\n- **中国集成电路进口（HS 8542，海关总署官方原表，C4）**：2020 年 $350.0B（5,435.0 亿个）→ 2021 年 $432.4B（6,356.0 亿个）→ 2022 年 $415.6B（5,384.0 亿个）→ 2023 年 $349.2B（4,791.4 亿个）→ 2024 年 $385.6B（5,491.8 亿个）。管制冲击的时序读法：2022-10 BIS 规则出台当年量已 −15.3%（对 2021），2023 年额续降 −16.0%，2024 年回升 +10.4%（管制针对先进型号，成熟制程进口恢复）。原表在库：`raw/ps-exportctrl-primary/downloads/A-china-customs/`，汇总见 `wiki/reading-workbench/ps-exportctrl-primary/snapshots/china-customs-ic-imports-2020-2024.md`。此前 C3 口径\"2022 约 $3980 亿\"与官方原表基本一致（精确 $415.6B）。\n- **ASML 对华营收（20-F 逐字，C4）**：FY2022 中国 €2,916.0M / 总 €21,173.4M = 13.8%；FY2024 中国占 36.1%；FY2025 回落至 29.1%（SEC EDGAR 20-F 三份在库，见 `wiki/reading-workbench/ps-exportctrl-primary/2026-07-03-asml-20f-batch.md`）。**旧 C3 口径两处纠错**：①\"2022 约 €20–25 亿\"应为 €29.16 亿；②\"2024 年中国占比约 49% 约 €5.9B\"错——20-F 逐字为 36.1%（49% 是个别季度口径被误当年度）。FY2024 对华欧元额可由 36.1% × 年度总销售倒算（总额约 €28.3B 为 C3 广知口径，20-F 在库可再核）。\n- **NVIDIA 对华收入损失**：H20 管制（2025-04-09）导致 NVIDIA 预计 $5.5 亿减值（C3，NVIDIA 8-K 2025-04-15）；此前受控的 A800/H800 在中国市场形成约 $12–17 亿/季度收入规模（C2 推算，基于媒体报道的中国市场份额）。",
    "cLevels": [
     "C4",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "从三个角度量化集中度：\n\n- **全球半导体设备控制力（美+荷+日）**：US+allies 约 >90% 全球半导体设备产能（C3，FPRI/Tan 2024 引用；需 SEMI 官方数据核）\n- **EDA 工具**：Synopsys + Cadence 约占全球 EDA 市场 90%+（C3；两家均为美国公司，直接受 BIS 管辖）\n- **美国法域 FDP 射程**：$734.9(h) 让 TSMC、三星等 17+ 类非美晶圆厂出口先进芯片时受美国管辖——\"控制力\"的地理边界从美国本土延伸到韩国、台湾、荷兰的生产线",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况（合规生态与受损方）",
    "text": "| 主体 | 受影响营收维度 | 数字 | 来源 |\n|---|---|---|---|\n| ASML | 对华营收（FY2022）| €2,916.0M（占 13.8%）| **C4**，20-F 分国表逐字（在库）|\n| ASML | 对华占比（FY2024 / FY2025）| 36.1% / 29.1% | **C4**，20-F 逐字（在库；旧\"49%/€5.9B\"口径已纠错）|\n| NVIDIA | H20 管制减值 | $5.5 亿（存货+采购承诺）| C3，NVIDIA 8-K 2025-04-15 |\n| NVIDIA | FY2025 中国数据中心收入（含 H20 销售期）| 约 $17–19B（C2 估）| C2 推算，需 10-K 地区分解 |\n| NVIDIA | FY2025 全球数据中心总营收 | $115.2B | C4，NVIDIA FY2025 10-K |\n| BIS（监管方） | BIS 年度预算 | 约 $1.5–2 亿（C3，需 DoC 年报）| 相对管控流量规模极小 |\n\n【缺口：出口管制合规成本——企业侧合规法律 / 软件 / 外包年总支出；估算可能在 $20–50 亿/年量级（C2，无原始调研）。需 BIS 合规生态研究报告】",
    "cLevels": [
     "C4",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "**ps-exportctrl 对下游各节点的\"覆盖率\"**：\n\n- ac-euv：100%（EUV 整机出口管制对中国从未例外，EAR + 荷兰许可双重覆盖）\n- ac-gpu：对华先进型号接近 100%（H100/A100/H20 均在 presumption of denial 或行政函管制下）\n- ac-hbm：2024-12 后 HBM3e/HBM3 对 D:5 触发 FDP §734.9(h)，覆盖率约 100%（C4）\n- ac-fab：先进节点（7nm 以下）代工服务对中国实体：3A090 note 1 推定 presumption of denial（C4 verbatim）\n- ac-eda：EDA 软件对中国实体：美国人支持限制 + 许可账本覆盖，Cadence/Synopsys 已对若干中国实体停止服务（C3）\n- tc-basestation：NDAA §889 覆盖联邦资金的采购禁令（C4，in-library govinfo），不直接是 BIS EAR，但属同一政治栈\n\n**断供情景下库存缓冲**：先进芯片（AI GPU）库存约 2–6 个月（C2 推算，无官方库存披露）；制造设备（EUV）无备用库存，断供即停（替代期 5 年以上）。",
    "cLevels": [
     "C4",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "各层冲击量级：\n\n- **中国先进逻辑芯片可及性**：2022 年以前中国可获 NVIDIA A100；2022-10 管制后失去最新 AI 训练芯片，被迫降级到 A800/H800，2023-10 再降级到 H20，2025-04 H20 也无法购买。训练单位成本估算差异 5–10 倍（C2 推算）。\n- **ASML 营收冲击（对荷兰经济）**：若对华出口完全停止，按 FY2024 中国占 36.1%（C4 20-F）× 年度总销售约 €28.3B（C3）估算，ASML 约损失 €10B/年量级；荷兰 GDP 约 €1 万亿，冲击约 1%（C2 推算，基数已从 C4 更新——比旧估 €5–6B 高近一倍）。\n- **美国芯片公司营收**：NVIDIA 对华数据中心收入 2025 年以后归零（H20 禁令），约损失 $12–17B/年（C2 推算）。\n- **中国 AI 算力基础设施**：无可靠量化。Rhodium/BCG 等机构报告给出高度不确定性区间，不单独引用。【缺口：中国 AI 算力建设进度因管制减缓量——需 SIA/CSIS/Rhodium/CSET 独立报告，现有数字高度口径依赖，C1 范围】",
    "cLevels": [
     "C2",
     "C4",
     "C3",
     "C1"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "管制重新分配了价值链的利润：\n\n- **美国企业损失中国市场**：NVIDIA、AMD、Intel、ASML、应用材料等短期营收损失。但 NVIDIA 整体 FY2025 营收 $130.5B，中国约占 10–15%，失去可承受。\n- **合规服务业受益**：出口管制咨询律所、合规软件（Descartes、Visual Compliance）、尽调服务商——收益于规则复杂化。\n- **韩国/台湾替代竞争者短暂受益**：在受限产品细分里，韩日企业短期填补部分中国采购（但受 FDP 射程同样受约束）。\n- **中国国内替代投资**：大基金 I+II 合计约 3400 亿人民币（C3），投向 SMIC、华为海思、长江存储、北方华创等——管制使资本流向了原本低效的投资方向，现在成为战略必要。这是最重要的资本流向重分配效应：美国管制迫使中国把资本投入自己最薄弱的技术环节。\n\n---",
    "cLevels": [
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "§734.9(h) AC FDP Rule verbatim（2025-11-12 版）",
    "level": "C4",
    "source": "eCFR API versioner，官方 XML，本地读取"
   },
   {
    "item": "BIS 2022-10-07 主规则 FR 2022-21268",
    "level": "C4",
    "source": "Federal Register，在库 workbench memo"
   },
   {
    "item": "BIS 2024-12-05 IFR 3A090.c（FR 2024-28270）",
    "level": "C4",
    "source": "eCFR API versioner + ac-hbm 工单 verbatim"
   },
   {
    "item": "H20 行政函 2025-04-09，$5.5B 减值",
    "level": "C3",
    "source": "NVIDIA 8-K 2025-04-15 SEC 申报"
   },
   {
    "item": "BIS FR 全年搜索 H20：0 命中（成文规则不存在，负发现）",
    "level": "C4",
    "source": "FR API 搜索，workbench 2026-06-21 记录"
   },
   {
    "item": "Entity List 3,420 条目；CSL 总计 25,767 条",
    "level": "C3–C4",
    "source": "ITA CSL 下载 CSV，本地行计数"
   },
   {
    "item": "eCFR 50% 所有权传播规则文本",
    "level": "C3–C4",
    "source": "eCFR 官方网页，workbench 2026-06-12 记录"
   },
   {
    "item": "NDAA FY2019 §889 全文",
    "level": "C4",
    "source": "govinfo.gov，tc-basestation 典藏工单 delivered"
   },
   {
    "item": "EO 13873 全文（84 FR 22689，GovInfo PDF）",
    "level": "C4",
    "source": "govinfo 原文在库（raw/ps-exportctrl-primary/D-eo13873/）"
   },
   {
    "item": "US+allies >90% 全球半导体设备份额",
    "level": "C3",
    "source": "FPRI/Tan 2024 引用；SEMI 年度总额 $107.6B/$106.3B 经 PR Newswire 核（semi.org 403）"
   },
   {
    "item": "ASML 对华营收 FY2022 €2,916.0M（13.8%）/ FY2024 36.1% / FY2025 29.1%",
    "level": "C4",
    "source": "SEC EDGAR 20-F 三份在库（2026-07-03 自取）"
   },
   {
    "item": "SMIC 7nm DUV 叠加曝光实现（Mate 60 Pro）",
    "level": "C3",
    "source": "广泛媒体报道，无 SMIC 财报数字支撑"
   },
   {
    "item": "iFlyTek 通过 AWS/Oracle Cloud 使用 H100（云漏洞案例）",
    "level": "C3",
    "source": "FPRI/Tan 2024 原文"
   },
   {
    "item": "NVIDIA FY2025 全球数据中心营收 $115.2B，毛利率 75%",
    "level": "C4",
    "source": "NVIDIA FY2025 10-K，workbench 记录"
   },
   {
    "item": "中国 IC 进口 2020–2024 全序列（2022=$415.6B，2023=$349.2B）",
    "level": "C4",
    "source": "海关总署官方 12 月量值表原件在库（2026-07-08 典藏浏览器取件）"
   },
   {
    "item": "荷兰 Staatscourant 2023/18212（2023-09-01 生效）+ 日本 METI 23 类（2023-07-23 实施）",
    "level": "C4",
    "source": "荷兰官方公报 PDF + CSIS 英译全文在库"
   },
   {
    "item": "Farrell-Newman panopticon + chokepoint 双效应框架",
    "level": "C4",
    "source": "FN 2019 全文在库（IS 44/1, DOI 10.1162/isec_a_00351）"
   }
  ],
  "contested": {
   "title": "2025-04-09 H20 管制行政函 → 规格游戏终结",
   "summary": "H20 的管制史是 ps-exportctrl 节点\"规格游戏\"子结构的最完整实证。"
  },
  "gaps": [
   "1. ~~中国海关总署集成电路进口年度统计~~ **已补（2026-07-08 典藏交付，C4）**：2020–2024 全序列官方原表在库，Q1/Q5 已回填。",
   "2. ~~ASML 年报中国分地区营收~~ **已补（2026-07-04 自取 20-F，C4）**：FY2022/FY2024/FY2025 逐字在库；旧 49%/€5.9B 口径已纠错为 36.1%。FY2023 中国百分比仍缺（fy2023 20-F 未落盘，非关键——趋势两端已锚定）。",
   "3. 【缺口：需要 SEMI 全球半导体设备市场份额报告（按国家/地区统计，2022 或 2023）】——核认\"US+allies >90%\"数字，把 FPRI/Tan 引用从 C3 升 C4。影响 Q2。年度总额（$107.6B/$106.3B）已经 PR Newswire 核实，缺的是按国别的份额分拆（semi.org 403，可能需付费报告）。",
   "4. ~~荷兰 CIEAA 公告 + 日本 METI 公告原文~~ **已补（荷兰 Staatscourant 2023/18212 官方 PDF 2026-07-08 到库，C4；METI CSIS 英译全文 2026-06-23 到库，C4）**：政治传动层 A/E 已升 C4。",
   "5. ~~EO 13873 联邦公报全文~~ **已补（2026-06-23 典藏交付，GovInfo PDF，C4）**。",
   "6. ~~BIS FY2022 年度执法报告~~ **已补（2026-06-23 典藏交付，C3→逐字可引）**：58 criminal convictions / 14 TDOs / $1.95M civil penalties。FY2023 版未取，非关键。",
   "7. 【缺口：需要中国国家集成电路产业投资基金（大基金 I+II+III）实际出资及被投企业清单】——核认资本流向，影响 Q6 分析。大基金 III 约 3440 亿人民币规模（C3 报道，需国家企业信用信息公示系统或商务部数据）。\n---"
  ]
 },
 "ps-industrial-policy": {
  "sourceFile": "ps-industrial-policy.md",
  "archiveId": "ps-industrial-policy",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "前面几个政治栈节点讲的是「怎么切断」——协调管制、协调减产。这个节点讲的是它的镜像：「怎么改路」。产业政策是国家用财政补贴、税收优惠、定向投资去改写技术栈的依赖结构——把一条本来集中在别人手里的供应链，硬掏钱在本土再建一条。美国 CHIPS 法案、欧盟芯片法案、中国大基金、美国《通胀削减法案》（IRA），都是同一类工具。它作用于技术栈里几乎所有被「卡脖子」的制造节点（ac-euv 及下游芯片、re-solar 光伏、cm-battery 电池、re-polysilicon 多晶硅）。它是不是有效，看钱能不能真变成产能，以及本土能不能补上最难的那一环工艺——领域核反复强调，账面的钱不等于能造出来的东西。",
  "holders": [
   {
    "entity": "美国联邦政府（商务部 CHIPS Program Office）",
    "role": "芯片制造本土化补贴",
    "scale": "约 527 亿美元拨款（C2，Wikipedia/CRS）；靠 CHIPS 法案",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "欧盟委员会 + 成员国",
    "role": "欧洲芯片产能翻倍",
    "scale": "约 430 亿欧元计划、仅约 33 亿来自欧盟预算（C2）；靠 EU Chips Act 法规",
    "jurisdiction": "欧盟",
    "group": null
   },
   {
    "entity": "中国国家集成电路产业投资基金",
    "role": "芯片全链本土替代",
    "scale": "三期超 500 亿美元量级，或再加约 700 亿新一轮（C2 [待核实]）；靠国家基金 + 地方配套",
    "jurisdiction": "中国",
    "group": null
   },
   {
    "entity": "美国财政部/IRS（IRA）",
    "role": "清洁能源/电动车本土化",
    "scale": "税收抵免绑定本土供应链（C2）；靠 IRA",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "日本（经产省，另有 Rapidus）",
    "role": "先进制程本土重建",
    "scale": "补贴额待研究；靠经产省预算",
    "jurisdiction": "日本",
    "group": null
   },
   {
    "entity": "韩国（K-Chips Act）",
    "role": "本土半导体投资税收优惠",
    "scale": "额度待研究；靠国内税法",
    "jurisdiction": "韩国",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：部分可行**（补贴能改变几年后的产能分布，尤其成熟制程；但最高端工艺（EUV 光刻、高纯材料）的本土替代，钱到位也未必造得出，转化率高度不确定。）"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "行使记录（可量化的补贴额度）：美国 CHIPS 约 527 亿美元（C2）；欧盟约 430 亿欧元（其中欧盟预算约 33 亿，C2）；中国大基金超 500 亿美元量级，或再加约 700 亿（C2 [待核实]）。这些是「宣布投入」，非「已落地产能」。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "各计划已实际拨付/到位金额、已建成产能、护栏条款触发次数：待研究（草图未覆盖）。美国商务部有 CHIPS 拨款进度公告，但未当场核实（C2 [待核实]）。",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "美国 CHIPS 约 527 亿美元拨款（390 亿制造 + 130 亿研发）",
    "level": "C2",
    "source": "Wikipedia / CRS"
   },
   {
    "item": "欧盟芯片法案约 430 亿欧元、仅约 33 亿来自欧盟预算",
    "level": "C2",
    "source": "媒体报道"
   },
   {
    "item": "中国大基金超 500 亿美元、或再加约 700 亿",
    "level": "C2 [待核实]",
    "source": "媒体报道"
   },
   {
    "item": "CHIPS 护栏：十年内不得在华扩先进制程",
    "level": "C2",
    "source": "公开报道"
   },
   {
    "item": "IRA 补贴绑定本土/友岸供应链",
    "level": "C2",
    "source": "公开报道"
   },
   {
    "item": "最高端工艺本土替代钱到位也未必造得出",
    "level": "C1",
    "source": "领域核推断"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "2022–2023 年，美国 CHIPS 法案与其对华出口管制配套推出，形成「一手掏钱补本土、一手限制对华」的组合；中国以大基金加码 + 转攻成熟制程回应（C2，媒体报道）。同期欧盟、日本、韩国相继推出各自芯片法案，形成全球补贴竞赛，企业在多法域间套利。这是一次仍在进行的、多方向的争夺——它不是一次性事件，而是持续的政策竞逐，结果（谁的钱真变成了领先产能）远未见分晓，本节点结构未经现实检验，可信度较低。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. 美国 CHIPS and Science Act 法案原文及商务部拨款进度公告。",
   "2. 欧盟芯片法案（Regulation (EU) 2023/1781）原文及资金来源拆分。",
   "3. 中国国家集成电路产业投资基金各期规模、出资方、投向的官方或权威披露。",
   "4. 美国 IRA 中清洁能源/电动车本土化条款原文（税收抵免的本土含量要求）。",
   "5. CHIPS 补贴「护栏」条款（Notice of Funding Opportunity）原文。",
   "6. 日本经产省对 Rapidus、TSMC 熊本厂的补贴文件；韩国 K-Chips Act 原文。",
   "7. 各计划已建成/在建产能的第三方跟踪（SEMI、行业报告）。",
   "8. 补贴额宣布 vs 实际到位的对比数据——衡量账面与实际的差距。"
  ]
 },
 "ps-legitimacy-narratives": {
  "sourceFile": "ps-legitimacy-narratives.md",
  "archiveId": "ps-legitimacy-narratives",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "这个节点是前面几个叙事节点（ac-narr 算力主权、en-narr 能源安全、re-narr 数字主权）的总框架层。它要说的是一件更一般的事：现代国家几乎所有针对技术依赖节点的干预动作——限制出口、建墙、建储备、断供、审查外资——最后都要挂靠同一个词根，\"国家安全\"。这套\"国家安全例外\"叙事是一个母框架，各领域的具体叙事都是它的子版本。它的作用是把一个原本会被质疑的动作（保护本国产业、地缘施压、监控）重新讲成\"保护国家和公民的安全\"，从而绕开正常的规则约束（比如自由贸易规则、市场准入承诺）。它不是任何单一的物理卡点，而是让所有卡点动作显得正当的那层话语。它属于政治栈人心那一层，是这一层里最硬的一根：因为几乎没有人能在公开辩论里正面否定\"国家安全\"。\n\n---",
  "holders": [
   {
    "entity": "各国行政部门（以美国最活跃）",
    "role": "以\"国家安全\"为由发布管制、制裁、投资审查",
    "scale": "依据各自的出口管制法、紧急权力法、投资审查法（如美国 IEEPA、ECRA、CFIUS）（C2，多方报道）",
    "jurisdiction": "各主权国",
    "group": null
   },
   {
    "entity": "各国立法机构",
    "role": "把\"国家安全例外\"固化成法律条文",
    "scale": "出口管制法、网络安全法、投资审查法等（具体条文待研究）",
    "jurisdiction": "各法域",
    "group": null
   },
   {
    "entity": "WTO 争端解决机制",
    "role": "罕见地对\"国家安全例外\"划边界",
    "scale": "2019-04 Russia–Traffic in Transit 裁决认定 GATT 第 21 条可被审查（C2，WTO/多方转引）",
    "jurisdiction": "多边",
    "group": null
   },
   {
    "entity": "国际条约框架（GATT/GATS 等）",
    "role": "把\"国家安全例外\"写进贸易规则",
    "scale": "GATT 第 21 条国家安全例外（C2，条约文本转引）",
    "jurisdiction": "多边",
    "group": null
   },
   {
    "entity": "安全部门、智库、媒体",
    "role": "加工与放大母叙事",
    "scale": "待研究",
    "jurisdiction": "多法域",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": null,
   "unstructured": false,
   "text": "总判：仍在运营"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "叙事本身没有市场规模。可间接观察的是它背书的干预总量：以国家安全为由的制裁清单条目数、出口管制条目数、被否决的外资并购数量、援引国家安全例外的贸易争端数量。具体数字待研究（草图未覆盖）。",
    "cLevels": []
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "可量化的行使记录：GATT 第 21 条被正式援引的贸易争端次数（历史上长期极少，2017 年后明显增多，C2 [待核实]）；各国投资审查机构以国家安全为由否决/附条件的交易数量；主要国家制裁名单的年度新增条目数。精确数字待研究（草图未覆盖）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "GATT 第 21 条设有国家安全例外",
    "level": "C2",
    "source": "条约文本转引"
   },
   {
    "item": "2019-04 WTO Russia–Traffic in Transit 认定第 21 条可被审查",
    "level": "C2",
    "source": "WTO/多方转引"
   },
   {
    "item": "该案同时判俄符合援引条件",
    "level": "C2",
    "source": "WTO/多方转引"
   },
   {
    "item": "国家安全例外近年被越来越频繁调用、覆盖领域扩大",
    "level": "C1–C2",
    "source": "多方报道综合 [待核实]"
   },
   {
    "item": "GATT 第 21 条 2017 年后被援引明显增多",
    "level": "C1",
    "source": "综合判断 [待核实]"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "母叙事被公开争夺、并被权威机构罕见地划过一次边界的可指名节点：2019-04-05，WTO 争端解决专家组在 Russia – Traffic in Transit（俄罗斯—过境运输）案中作出裁决，认定 GATT 第 21 条\"国家安全例外\"并非完全不可审查——即一国不能仅凭自我声称就无条件适用，其援引可被客观审查；但专家组同时判定俄罗斯在该案中符合援引条件（C2，WTO/多方转引）。这是第一次有多边机构正面处理\"国家安全例外能不能被约束\"这个问题，因此是这套母叙事被公开争夺的标志性事件。此外，2018 年以来美国以\"国家安全\"为由对钢铝加征关税、对芯片和数据反复援引国家安全，也是母叙事被持续争夺、其边界被反复试探的场域（C2，多方报道）。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. GATT 第 21 条与 GATS 第 14 条之二国家安全例外的条约原文。",
   "2. WTO Russia–Traffic in Transit（DS512）专家组报告原文（2019-04-05）。",
   "3. 主要国家把\"国家安全例外\"固化的国内法：美国 IEEPA、ECRA、《1962 年贸易扩展法》第 232 条、CFIUS 相关法（FIRRMA）等原文。",
   "4. 各国投资审查机构以国家安全为由否决/附条件交易的年度统计。",
   "5. 2018 年以来以国家安全为由的关税、管制、制裁行政令一手件（尤其钢铝 232 条款、芯片、数据相关）。",
   "6. WTO 中援引国家安全例外的争端案件清单与时间序列（做频次统计）。",
   "7. 与 ac-narr / en-narr / re-narr 三个子节点的交叉引用核对，确认母叙事与子叙事的调用关系。"
  ]
 },
 "ps-naval-transit": {
  "sourceFile": "ps-naval-transit.md",
  "archiveId": "ps-naval-transit",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "这个节点分析的是一种政治控制力：谁能用海军力量保障或切断一条海上航道。它不是某个物理设施，而是一种\"改变意志的能力\"——占据了保障航道安全这个位置的一方，可以决定让谁通过、让谁停下，也可以在冲突中把这种保障撤走。全球贸易体系有一个平时不易察觉的前提：远洋航道的安全由美国海军托底（见领域核第二节）。谁依赖它？几乎所有跨洋运输的货物和能源都依赖它——石油、集装箱、液化天然气。它为什么可能是卡点？因为一旦保障撤除，或某一方在关键海峡行使拦截，改道的成本结构立刻改变，很多航线会被迫绕行或中断。它作用的对象是技术栈里的物理流节点（en-crude、en-lng、en-tanker、以及所有走海运的商品）。\n\n---",
  "holders": [
   {
    "entity": "美国海军（第五舰队等）",
    "role": "全球公域安全的主要保障方；护航行动的组织核心",
    "scale": "依据：惯例 + 单边战略选择；无条约强制义务，凭全球投送能力（C2）",
    "jurisdiction": "美国（国防部）",
    "group": null
   },
   {
    "entity": "多国护航联盟（如 Operation Prosperity Guardian）",
    "role": "特定危机下临时组织的护航联盟",
    "scale": "依据：临时政治协调，非常设条约；参与国含英、法、意、荷、加、巴林等（C2，Wikipedia/euro-sd 转引）",
    "jurisdiction": "多国（美国主导）",
    "group": null
   },
   {
    "entity": "伊朗（伊斯兰革命卫队海军）",
    "role": "霍尔木兹一侧的拦截/威胁力量",
    "scale": "依据：地理位置（海峡北岸主权）+ 军事投放能力（C2）",
    "jurisdiction": "伊朗",
    "group": null
   },
   {
    "entity": "也门胡塞武装",
    "role": "红海南口的非国家武装拦截方",
    "scale": "依据：未经许可的驻留——从海岸投放导弹/无人机，不拥有航道也不合法运营（C2，领域核意义上的\"通道旁侧武装\"）",
    "jurisdiction": "也门（非国家行为体）",
    "group": null
   },
   {
    "entity": "沿岸海峡国（印尼/马来西亚/新加坡等）",
    "role": "马六甲等海峡的港口国与近海管辖方",
    "scale": "依据：主权（领海）+ 联合国海洋法过境通行制度",
    "jurisdiction": "各沿岸国",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "可能改道",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：可能改道**"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "这个节点保障/威胁的贸易体量，用关键海峡的通过量近似：\n- 霍尔木兹：据报道承载全球约 25% 的海运石油贸易、约 20% 的液化天然气（C2，2026 年前数据，Wikipedia/EIA 转引；另有口径称约占海运原油的 39%，口径差异待正式核实）。\n- 马六甲：据报道约占全球海运石油流量的 22%（C2，同源转引）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "护航行动的行使记录：Operation Prosperity Guardian（2023 年 12 月启动）大部分时间美国海军投入约两个航母打击群、约 7,000 人于红海（C2，Wikipedia 转引）。红海集装箱通行量危机期间下降约 90%（C2）。\n\n其余量化（各国远洋兵力对比、霍尔木兹绕行管线精确运力）：待研究（草图未覆盖）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "美国海军是全球公域安全的主要保障方",
    "level": "C2",
    "source": "领域核综合 + Brookings/CFR 转引"
   },
   {
    "item": "霍尔木兹承载约 25% 海运石油、约 20% LNG",
    "level": "C2",
    "source": "Wikipedia/EIA 转引（2026 前数据）"
   },
   {
    "item": "马六甲约占全球海运石油流量 22%",
    "level": "C2",
    "source": "同源转引"
   },
   {
    "item": "Operation Prosperity Guardian 2023-12 启动，投入约两航母打击群/7,000 人",
    "level": "C2",
    "source": "Wikipedia 转引"
   },
   {
    "item": "红海危机期间集装箱通行量下降约 90%",
    "level": "C2",
    "source": "Center for Maritime Strategy/Wikipedia 转引"
   },
   {
    "item": "国际法保障海峡过境通行权、单边封锁/收费被视为非法",
    "level": "C2",
    "source": "RFERL/The Conversation 转引"
   },
   {
    "item": "2026 霍尔木兹危机具体定性",
    "level": "C1",
    "source": "报道尚不稳定 [待核实]"
   }
  ],
  "contested": {
   "title": "2023 年 12 月起，红海—也门胡塞武装 vs. Operation Prosperity Guardian。",
   "summary": "胡塞武装以导弹和无人机袭击过往商船，美国牵头组建多国护航联盟，2024 年 1 月起美英对也门境内目标发动打击。集装箱运输一度大幅改道好望角（C2，Wikipedia/Center for Maritime Strategy 转引）。这是\"保障方主动介入、拦截方从旁侧投武力\"这一结构被公开、大规模动用的一次实例。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. 美国海军全球部署与各国远洋海军兵力的权威对比（如 IISS Military Balance 原始数据）。",
   "2. EIA World Oil Transit Chokepoints 原始报告，各海峡通过量精确口径与年份。",
   "3. Operation Prosperity Guardian 官方战报/CENTCOM 通报原文，参与国与投入规模。",
   "4. 霍尔木兹陆上绕行管线（沙特 Petroline、阿联酋 Habshan–Fujairah）的设计运力与实际利用率。",
   "5. 联合国海洋法公约过境通行制度条文（第 III 部分）原文。",
   "6. Lloyd's/保险市场对红海—霍尔木兹战争险费率的公开数据。"
  ]
 },
 "ps-port-access": {
  "sourceFile": "ps-port-access.md",
  "archiveId": "ps-port-access",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "这个节点分析的是一种政治控制力：谁能准入或拒绝一艘船停靠港口、一条海缆在本国海岸登陆。它和 ps-naval-transit 相邻但不同——通道强制管的是\"能不能在海上过去\"，港口准入管的是\"能不能靠岸、能不能接入陆地\"。控制权落在港口国的主权手里：一国可以拒绝一艘被制裁的油轮进港卸油，也可以拒绝一条外国海缆在本国建登陆站。谁依赖它？所有需要卸货/加油/接入陆地网络的船和海缆运营方。它为什么可能是卡点？因为海运的价值只有在靠岸卸货那一刻才实现，海缆的流量只有在登陆站接入陆地骨干才有意义——把这一步卡住，等于让前面的整段流动作废。它作用于技术栈的物理流（en-tanker、en-crude、en-lng）和信息流（ir-cables 的登陆站一端）。\n\n---",
  "holders": [
   {
    "entity": "各港口国政府/港务当局",
    "role": "决定船舶进港与服务准入",
    "scale": "依据：主权（对本国港口的完全管辖）",
    "jurisdiction": "各国",
    "group": null
   },
   {
    "entity": "美国 OFAC（财政部）",
    "role": "通过制裁名单迫使全球港口拒绝服务被列船只",
    "scale": "依据：美国制裁法 + 美元清算的域外杠杆；据报道 2025 年一次行动列 183 艘油轮（C2，Treasury/Lloyd's 转引）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "欧盟理事会",
    "role": "对影子船队船只施加港口准入禁令 + 服务禁令",
    "scale": "依据：欧盟制裁条例；据报道累计被列船只近 600 艘（C2，Consilium 转引）",
    "jurisdiction": "欧盟",
    "group": null
   },
   {
    "entity": "美国 FCC + Team Telecom",
    "role": "海缆登陆许可发放与国家安全审查",
    "scale": "依据：Cable Landing License Act + 行政审查机制；可\"推定拒绝\"外国对手关联申请（C2，Federal Register 2025）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "地方港务当局（如中国山东港口）",
    "role": "执行层面决定是否为被制裁船服务",
    "scale": "依据：地方管辖 + 上级政策；据报道山东港口一度宣布对美制裁船停止服务（C2，Lloyd's List 转引）",
    "jurisdiction": "中国",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "成本增加",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：成本增加**"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "这个节点管的靠岸/登陆环节覆盖几乎全部海运贸易和跨洋数据流量（互联网跨洋流量约 97% 走海缆，见 ir-cables 节点）。制裁执行覆盖的具体体量：据报道影子船队 2024 年 6 月运输的俄罗斯石油达约 410 万桶/日，占俄海运石油约 70%（C2，多源转引）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "行使记录（制裁名单条目数）：\n- 美国财政部据报道一次行动列 183 艘油轮 + 多家俄油企（C2，Treasury 新闻稿转引）。\n- 欧盟对影子船队累计列名近 600 艘船（C2，Consilium 2025-12 转引）。\n- 据 Lloyd's List 报道，美国的行动使约 35% 的\"暗船队\"被纳入制裁（C2 转引）。\n\n海缆登陆的量化（历年 FCC 拒绝/撤销许可数）：待研究（草图未覆盖）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "港口停靠准入落在港口国主权",
    "level": "C2",
    "source": "通行法理 + Consilium 转引"
   },
   {
    "item": "FCC + Team Telecom 审查海缆登陆、可推定拒绝外国对手关联申请",
    "level": "C2",
    "source": "Federal Register 2025 转引"
   },
   {
    "item": "美国 OFAC 一次列名 183 艘影子船队油轮",
    "level": "C2",
    "source": "Treasury 新闻稿转引"
   },
   {
    "item": "欧盟对影子船队累计列名近 600 艘船",
    "level": "C2",
    "source": "Consilium 2025-12 转引"
   },
   {
    "item": "影子船队 2024-06 运俄石油约 410 万桶/日、占俄海运石油约 70%",
    "level": "C2",
    "source": "多源转引"
   },
   {
    "item": "中国三大电信商 2021-2022 被拒/撤美国许可，2025 禁参与新登陆海缆",
    "level": "C2",
    "source": "Submarine Networks/Federal Register 转引"
   },
   {
    "item": "山东港口一度对美制裁船停止服务",
    "level": "C2",
    "source": "Lloyd's List 转引"
   }
  ],
  "contested": {
   "title": "2024–2025 年，影子船队 vs. 港口准入制裁。",
   "summary": "欧盟分批对数百艘影子船队油轮施加港口准入禁令和服务禁令（累计近 600 艘），美国 OFAC 一次列名 183 艘油轮；据报道中国山东港口当局一度宣布对美制裁船停止服务（C2，Consilium/Treasury/Lloyd's List 转引）。这是\"港口准入作为拒绝手段\"被跨法域协调动用、同时被规避方（换港换旗）持续对抗的一次实例。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. OFAC SDN 名单原始条目（被列油轮的逐条 IMO 号与列名日期）。",
   "2. 欧盟制裁条例（对俄第 N 轮）原文中的港口准入禁令与船只附表。",
   "3. FCC Cable Landing License 相关 Order 原文（FCC 25-49 等）与历年拒绝/撤销记录。",
   "4. Cable Landing License Act（47 U.S.C. §34-39）与 Team Telecom 行政令原文。",
   "5. 各主要接收港口国（中国/印度/土耳其等）对被制裁船的实际接收数据。",
   "6. 影子船队规模与运量的权威第三方统计（如 KSE Institute、Lloyd's List Intelligence 原始数据）。"
  ]
 },
 "ps-sanctions-service": {
  "sourceFile": "ps-sanctions.md",
  "archiveId": "ps-sanctions",
  "established": "2026-06-23",
  "updated": "2026-06-24",
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "OFAC（US Treasury, Office of Foreign Assets Control）",
    "role": "SDN 指定；OFAC50 规则；secondary sanctions；许可豁免",
    "scale": null,
    "jurisdiction": "美国华盛顿特区 / 美国法域（联邦行政权）",
    "group": null
   },
   {
    "entity": "EU Council（Council of the EU，外交/制裁决议机构）",
    "role": "制裁条例（Regulation 2022/328 等）；指定个人/实体",
    "scale": null,
    "jurisdiction": "比利时布鲁塞尔 / EU 法域（成员国共同决定，全体一致）",
    "group": null
   },
   {
    "entity": "UK OFSI（HM Treasury Office of Financial Sanctions Implementation）",
    "role": "脱欧后独立制裁制度",
    "scale": null,
    "jurisdiction": "英国伦敦 / 英国法域",
    "group": null
   },
   {
    "entity": "UNSC 制裁委员会（通过 UNSC 第七章决议）",
    "role": "多边制裁基准；强制要求所有 UN 成员国执行",
    "scale": null,
    "jurisdiction": "纽约 / 国际法（决议需 P5 全体同意或弃权）",
    "group": null
   },
   {
    "entity": "Wassenaar / FATF（相关框架）",
    "role": "洗钱/反恐融资黑名单（FATF）；两用物项协调（Wassenaar）",
    "scale": null,
    "jurisdiction": "各自国际",
    "group": null
   }
  ],
  "upstream": [
   "ps-sanctions 的执行效果依赖三个上游：",
   "**fi-usd（美元清算，核心执行管道）**：SDN 指定之所以能咬到全球非美实体，根因是 CISADA 机制——\"跟 SDN 交易=失去美元代理账户\"。没有 fi-usd 的 chokepoint，OFAC 指定对非美主体的约束力接近零（只管美国人本身）。这是全图最关键的上游耦合：ps-sanctions 是触发层，fi-usd 是传导层。",
   "**fi-swift（报文网络）**：SWIFT 断连不等于制裁指定，指定不等于 SWIFT 断连，但两者常被叠加使用。2022 年 7 家俄罗斯银行被踢出 SWIFT 同时被 SDN，两层叠加。如果只被 SDN 而没断 SWIFT，仍能传报文但报文被合规环节拦截；如果只断 SWIFT 而没被 SDN，可以走其他报文网络。两者是平行机制，叠加才是完整打击。",
   "**盟友政治意志（eu/uk 协同）**：OFAC 单边制裁在美元圈内有效；扩展到欧元/英镑资产需要 EU/UK 的配合立法。对俄 2022 年能冻央行约 3000 亿储备，正是因为这些储备中相当部分托管在欧洲——需要欧盟成员国同意冻结。盟友协同是 ps-sanctions 把射程从美元圈扩展到全球资产的关键上游条件，不是固定的。",
   "**情报能力**：OFAC 需要识别谁是真实受益人（不是挂名法人）、谁是 SDN 主体的 50% 以上所有者（OFAC50 规则），依赖财政情报（FinCEN）、CIA/NSA 金融情报，以及盟友金融情报共享（Egmont Group）。"
  ],
  "downstream": [
   "ps-sanctions 的直接下游是：",
   "**所有有美元代理账户的非美银行**（约束最强）：secondary sanctions 的靶心。必须自我过滤与 SDN 的往来，否则失去美元代理资格。约束强度=致命（对做外汇业务的银行，美元代理账户是存亡所系）。",
   "**在 SDN 指定对象所在国运营的外国企业**：主动遵守制裁，撤出俄罗斯/伊朗，避免 OFAC 处罚。约束强度=高（OFAC 处罚通常为交易额的 1–2 倍或更高）。",
   "**SDN 指定的实体及其关联方**（被切方）：美元资产冻结、美元交易被拒、与美国人的任何往来中止。如果同时被 EU/UK 制裁，欧元/英镑资产也被冻。约束强度=致命（若高度依赖美元/欧元体系）或高（若有事前建的替代走廊）。",
   "**fi-usd / fi-swift**（执行管道，下游接收指定状态）：制裁指定通过这两条管道变成实际经济隔离。ps-sanctions → fi-usd/fi-swift 是从法律层到基础设施层的\"信号传导\"。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "结论：**`partial`**，且和 fi-usd 的结论相同——绕道是真实的，但比绕 ps-exportctrl（换供应商）和绕 fi-swift（换报文网络）都更难搬，因为要连带替换整个货币计价习惯。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "ps-sanctions 不是产品市场，代理指标是**被制裁体系冻结的资产规模**和**合规市场规模**：\n\n- **冻结主权资产（2022 后最大宗）**：俄罗斯 CBR 约 3000 亿美元外汇储备冻结（C3，广泛引用，精确数字待核 G7 公告原文；托管地：比利时 Euroclear 约占大部分）。这使 ps-sanctions 一夜之间成为史上扣押主权资产规模最大的单次政治行动。\n- **伊朗被冻资产**：韩国、伊拉克、日本等国扣押伊朗石油收入约 70–100 亿美元（各时期，C3 转引，需 OFAC 报告原文）。2023 年卡塔尔调解通道：约 60 亿美元伊朗冻结资产经信托释放（C3，新闻报道）。\n- **OFAC SDN 直接冻结（美国法域内资产）**：无法精确统计公开数字。SDN 名单约 19,065 行（在库 CSV，C3–C4），包含个人/实体/船只等，冻结资产总额未有 OFAC 官方公开总量。【缺口：OFAC 年度报告（Annual Report to Congress）中的被冻结/被许可资产总额——需 OFAC 网站官方报告，各年度合计】\n- **全球金融制裁合规市场**：银行业合规支出无单项拆分数字，但 KYC/制裁筛查合规软件市场估算约 10–15 亿美元/年（C2 推算，行业估），银行业整体 AML/制裁合规成本（含人力）可能在 500–1000 亿美元/年量级（C1 推算，无可靠报告支撑）。【缺口：全球银行业制裁合规成本专项研究——需 Bank for International Settlements、麦肯锡/波士顿咨询等报告】",
    "cLevels": [
     "C3",
     "C3–C4",
     "C2",
     "C1"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- **制裁权威方集中度**：OFAC 是压倒性主导者（secondary sanctions 射程覆盖全球所有做美元业务的主体）；EU Council 次之（覆盖欧元圈 + 愿配合的多边）；UK OFSI 再次；UNSC 范围最广但受否决权严重约束。CR1（OFAC）= **美元计价全球交易的制裁管辖覆盖**，没有第二方能比（C3）。\n- **SDN 名单规模**：19,065 行（在库 CSV 截至快照日，C3–C4）；EU consolidated list：约 2000+ 个人/实体（C3，需 EU 官方数据库核）。\n- **price maker**：不适用（制裁是行政指令，不通过价格机制）。OFAC 是 **access maker**——决定哪个实体在美元体系里可达。",
    "cLevels": [
     "C3",
     "C3–C4"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 预算/规模 | 性质 | 来源 |\n|---|---|---|---|\n| OFAC（美财政部）| 约 2 亿美元年度运营预算（C2 估，需 DoT 年报核）| 行政执法机构 | 【缺口：US Treasury Department 年报 OFAC 分项预算】|\n| OFAC 历年 CMPL 处罚金（settlements）| 典型大额结案：BNP Paribas 2014 年 OFAC 单独 $963M（OFAC+DOJ+NYDFS 联合总额 $8.97B）；Société Générale $1.34B（2018）| 对非美银行的 secondary sanctions 执行记录 | C4（OFAC 官网 press release + 和解协议文件）|\n| Euroclear（比利时，托管约 1960 亿欧元俄 CBR 资产）| 年营业收入约 14 亿欧元（FY2023，C3 报告转引）| 国际证券托管机构 | 【缺口：Euroclear FY2023 年报含俄资产冻结说明】|\n| 俄 CBR（被制裁方）| 被冻约 3000 亿美元外汇储备 | 主权机构 | C3，待核 G7 公告精确数字 |\n| 全球主要合规软件商（Dow Jones Risk & Compliance / Accuity / LexisNexis Risk）| 各家数亿美元年营收（C2，行业共识）| 制裁合规产业 | 【缺口：专业合规软件市场规模报告】|",
    "cLevels": [
     "C2",
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **制裁对伊朗石油出口的量化**：伊朗石油出口 2011 年约 350 万桶/天 → 2013 年约 110 万桶/天（JCPOA 谈判前低点）→ 2015–2018 JCPOA 期间恢复至约 230 万桶/天 → 2019 最大压力约 50–70 万桶/天 → 2023–2024 绕道中国约 150–170 万桶/天（C3，IEA/EIA 口径转引，需原文）。石油出口下降约 70–80% 是制裁的最直接量化指标；但这混合了核制裁 + 美元清算 + 技术制裁，无法单独剥离。【缺口：IEA/EIA 伊朗月度石油生产出口报告（2011–2025）原文】\n- **制裁对俄罗斯石油出口的量化（2022）**：俄 2022 年石油出口量相对稳定（以卢布 + 本币结算维持，主要买家中国/印度增加采购），但折价出售（俄乌拉尔原油 vs. 布伦特折扣约 20–30 美元/桶，2022 年峰值，C3 转引）。石油出口**量**没跌，**收汇质量**和**地缘折扣**是真实经济伤害（C3）。\n- **非美银行二次制裁处罚案例**：BNP Paribas 2014 年是代表案——法国最大银行为伊朗/苏丹/古巴/缅甸相关客户处理美元支付（3,897 笔，2005–2012），OFAC 单独和解金额 $963M，含 DOJ+NYDFS 联合总额 $8.97B（C4，OFAC 官网 press release + 和解协议，文件在库）。这是\"secondary sanctions 对非美银行真有牙齿\"的最强历史实证。",
    "cLevels": [
     "C3",
     "C4"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **伊朗（1979 至今，最长时段实验）**：美国和西方制裁 40 余年。IMF 数据隐含伊朗在无制裁反事实下的 GDP 损失难以精确量化，但原油收入损失累计在数千亿美元量级（C2 推算，无在库报告）。2012–2015 最峰值时，伊朗通胀超 40%、货币贬值约 60%（C3，IMF/WB 报告转引）。【缺口：IMF 伊朗经济体系评估（Article IV）含制裁影响量化】\n- **俄罗斯（2022 至今，最大规模但效果存争议）**：IMF 2022 年初预测 GDP -6% 至 -15%，实际 2022 年约 -2.1%，2023 年约 +3.6%，2024 年约 +3.2%（C4，IMF WEO 多来源交叉核认）——**大幅低于西方最初预测，主因是战时财政刺激、能源出口转向、制裁漏洞未闭。** 但长期成本：外国技术和资本退出造成的**技术断代**和**中期增长潜力损失**，可能在 2025–2035 年显现，目前仍 C2。【缺口：IMF/世界银行 2024 俄罗斯经济展望含制裁可归因分解】\n- **推算须给出量级（C2）**：对坚持美元体系且无替代路径的目标（伊朗型）= 金融系统严重受损，石油出口下降 70%+，通胀/汇率暴跌；对有能源反筹码且事前建替代走廊的目标（俄罗斯型）= 近期伤害比预测浅，但长期技术断代成本更重；对从未接入美元体系的目标（朝鲜）= 几乎无边际效果。",
    "cLevels": [
     "C2",
     "C3",
     "C4"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "- **被冻结资产的利息**：2022 年 G7 冻结的约 3000 亿俄 CBR 资产，主要托管于 Euroclear，持续产生利息（2023 年产生约 40–45 亿欧元利息，C3 Euroclear 公告报道）。G7 决定将利息用于乌克兰重建援助（G7 Puglia Summit 2024，C3）。这是**制裁直接产生的利润流向受制裁方的对立方**——历史先例。\n- **制裁合规产业**：OFAC 罚款（数十亿美元级大案）流入美国国库；合规软件/律所服务流向制裁合规产业链；被制裁方付的折价（如俄乌拉尔石油折扣）流向买方（中国、印度等）。\n- **制裁放大的资本错配**：俄罗斯被迫折价出售能源 → 中印获得补贴；西方企业退出俄市场 → 中国企业进入填充（华为进入俄电信市场）。这些是制裁的非预期资本流向，不在 OFAC 的得失账上。\n- **价值链谁先被打**：制裁主要让**first payer = 被指定实体的美元资产和美元业务**——对实体，是美元业务归零；对主权，是储备资产的实时冻结。西方银行的短期合规成本（撤出业务）也是代价。长期代价回流**美国**：每次武器化加速去美元化，slow erosion 同样适用（与 fi-usd 完全同构）。\n\n---",
    "cLevels": [
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "OFAC SDN 名单在库 CSV 约 19,065 行",
    "level": "C3–C4",
    "source": "在库 CSV 行计数（raw/ 目录）"
   },
   {
    "item": "FN 2019 chokepoint/panopticon 框架（fi-usd 和 ps-sanctions 共用）",
    "level": "C4",
    "source": "Farrell & Newman 2019, IS 44/1，在库全文"
   },
   {
    "item": "CISADA 2010 Sec.104（代理行 secondary sanctions）引用",
    "level": "C3",
    "source": "fi-usd 工单引用，需法条原文"
   },
   {
    "item": "EU Council Regulation 267/2012 断伊朗 SWIFT",
    "level": "C4",
    "source": "fi-swift 节点记录"
   },
   {
    "item": "EU Council 2022 对俄制裁条例 2022/328",
    "level": "C4",
    "source": "`wiki/reading-workbench/ps-sanctions-primary/C-eu-russia-regulation/EU-Regulation-2022-328.pdf`"
   },
   {
    "item": "G7 2022-02-26 CBR 冻结联合声明",
    "level": "C4",
    "source": "`wiki/reading-workbench/ps-sanctions-primary/A-g7-cbr-freeze/G7-2022-02-26-CBR-freeze-statement.md`"
   },
   {
    "item": "Euroclear 冻结资产（~€1960亿）",
    "level": "C3",
    "source": "媒体转引，Euroclear 官方渠道 403，等 Root 浏览器"
   },
   {
    "item": "BNP Paribas 2014 OFAC 罚款 $963M（OFAC 单独），总联合 $8.97B（含 DOJ+NYDFS）",
    "level": "C4",
    "source": "`wiki/reading-workbench/ps-sanctions-primary/E-ofac-enforcement/OFAC-BNP-Paribas-2014-PR.txt`"
   },
   {
    "item": "俄罗斯 2022 GDP 约 -2.1%，2023 约 +3.6%",
    "level": "C4",
    "source": "`wiki/reading-workbench/ps-sanctions-primary/D-iran-russia-data/IMF-WEO-Russia-GDP-extracted.md`"
   },
   {
    "item": "伊朗石油出口时序（2020 低谷 0.4 mb/d；2023 恢复 1.4 mb/d；中国占比 ~90%）",
    "level": "C3-C4",
    "source": "`wiki/reading-workbench/ps-sanctions-primary/D-iran-russia-data/EIA-Iran-CAB-2024.pdf`"
   },
   {
    "item": "俄 CBR 美债持仓：峰值 $171B（2012/10）；2014 克里米亚 $132B→$86B；2018/4 SDN $97B→$15B（6月）；2019起不再单独报告；2023/1 残余 $67M",
    "level": "C4",
    "source": "`wiki/reading-workbench/ps-sanctions-primary/D-iran-russia-data/TIC-Russia-UST-holdings-2010-2022.md`"
   },
   {
    "item": "CAATSA Section 231 对第三国购俄军备的 secondary sanctions",
    "level": "C4",
    "source": "`wiki/reading-workbench/ps-sanctions-primary/B-cisada-caatsa/CAATSA-PL115-44-full.pdf`"
   },
   {
    "item": "Euroclear 2023 年持俄资产利息约 40–45 亿欧元",
    "level": "C3",
    "source": "新闻报道，需 Euroclear 公告"
   },
   {
    "item": "OFAC 有约 200–250 人员编制",
    "level": "C2",
    "source": "无公开精确数字，行业估"
   }
  ],
  "contested": {
   "title": "BNP Paribas $8.97B 和解（2014-06-30）",
   "summary": "> 本节按节点深挖方法五个阅读动作填写。"
  },
  "gaps": [
   "1. 【部分关闭】G7 2022-02-26 CBR 冻结联合声明已取 C4（UK GOV.UK + Biden WH verbatim）。注意：声明本身不含\"约 3000 亿美元\"精确数字，该数字来自后续实施评估报告，仍是 C3 待补。Euroclear FY2022/2023 年报全部 403 blocked——Euroclear 冻结数字（~€1960亿）仍 C3，等 Root 浏览器会话取。",
   "2. 【部分关闭】EIA Iran CAB 2024 已取 C3-C4：2020 低谷 0.4 mb/d（COVID+制裁）/2023 恢复 1.4 mb/d/中国占比 ~90%。2012-2014 精确峰值制裁期低点（~1.1 mb/d）仍在图内未出文字 verbatim，保持 C3 待补。",
   "3. 【已关闭】CISADA §104 已取 C4（`B-cisada-caatsa/CISADA-PL111-195-full.pdf`，govinfo.gov 官方）；CAATSA §231 已取 C4（`CAATSA-PL115-44-full.pdf`）。",
   "4. 【已关闭】EU Regulation 2022/328 已取 C4（`C-eu-russia-regulation/EU-Regulation-2022-328.pdf`，Wayback EUR-Lex 存档）。",
   "5. 【已关闭】IMF WEO 俄 GDP 已取 C4（多来源交叉核认）：2022 -2.1%，2023 +3.6%，2024 +3.2%（IMF预测）/Rosstat实际约4.1%。",
   "6. 【已关闭，口径修正】OFAC BNP 2014：OFAC 自身和解 $963M（3,897 笔，2005–2012），联合总额 $8.97B 含 DOJ+NYDFS——节点已修正口径，两个数字均有文本来源（C4）。",
   "7. 【已关闭，数字修正】TIC 俄持美债：峰值 $171B（2012/10），非原写 2010/$176B；时序节点：2014 克里米亚 $132B→$86B；2018/4 SDN 扩大 $97B→$15B；2019起不再单独列；2023/1残余 $67M。C4（US Treasury MFH 官方序列）。",
   "8. 【已关闭】OFAC Congressional Report 确认不公开：年度 TD F 90-22.50 是私人申报汇总，OFAC 不发布被冻结资产总量统计，此缺口关闭。"
  ]
 },
 "ps-standards-licensing": {
  "sourceFile": "ps-standards-licensing.md",
  "archiveId": "ps-standards-licensing",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "这个节点分析的是一种不流血、却能把对手挡在门外的政治控制力：谁能决定一项技术标准里谁有发言权、一件产品能不能拿到认证、一套关键软件工具的授权能不能被撤销。它不是港口、不是海缆，而是\"改变意志的能力\"通过规则和授权来行使。谁依赖它？任何要让产品互通、要进入某个市场、要用商用工具设计芯片的厂商。它为什么可能是卡点？因为把一家公司踢出标准制定、或撤销它用某套工具的授权，能直接切断它的技术演进路径，而这一步往往靠一纸行政规则就能完成，不需要动一颗螺丝。它作用于技术栈里的芯片设计（ac-eda 之类）、电信设备（tc-basestation、5G）、以及任何要过型号认证才能上市的产品。\n\n---",
  "holders": [
   {
    "entity": "美国商务部 BIS",
    "role": "用出口管制（Entity List、EDA 许可要求）决定谁能参与标准、谁能用工具",
    "scale": "依据：出口管制法 + 外国直接产品规则（域外效力）",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "Synopsys / Cadence（EDA）",
    "role": "先进芯片设计工具的主导供应方",
    "scale": "依据：私有技术所有权 + 受美国 EAR 管辖；据报道两家 + 西门子 EDA 主导市场（C2，EE Times/TrendForce 转引）",
    "jurisdiction": "美国（受 EAR 直接管辖）",
    "group": null
   },
   {
    "entity": "Siemens EDA（原 Mentor）",
    "role": "三大 EDA 之一",
    "scale": "依据：技术所有权 + 因含美国技术受 EAR 域外管辖（C2）",
    "jurisdiction": "德国（受美国规则牵连）",
    "group": null
   },
   {
    "entity": "标准组织（3GPP/IEEE/ETSI/ITU 等）",
    "role": "制定技术标准、决定成员参与",
    "scale": "依据：会员制章程 + 惯例；但参与受成员国出口管制约束（C2，Freshfields 转引）",
    "jurisdiction": "多国（多设于欧洲/全球）",
    "group": null
   },
   {
    "entity": "认证机构（如 FAA/EASA 等）",
    "role": "型号/适航/合规认证",
    "scale": "依据：各国法规授权 + 国际互认协定",
    "jurisdiction": "各国",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "路径受阻",
   "verdictRaw": null,
   "unstructured": false,
   "text": "**总判：路径受阻**"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "EDA 是芯片设计的必经工具，覆盖几乎全部先进芯片设计流程。中国市场对三大 EDA 厂的营收占比据报道相当可观（TrendForce 报道称限制令使三大 EDA 厂的中国营收面临风险，具体百分比待正式核实，C2）。标准与认证覆盖的市场更广，难以单一数字概括。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "行使记录（许可/限制动作）：\n- 2025 年 5 月 23 日，BIS 致函 Synopsys、Cadence、Siemens EDA，要求对华全部销售申请许可、逐案审查（C2，TechCrunch/EE Times 转引）。\n- 2025 年 7 月 2 日，三家确认美方撤销该 EDA 对华限制（C2，CNBC 转引）。前后约六周。\n- 2020 年 6 月 18 日，BIS 发布临时规则，放行与华为等被列名方的部分标准制定活动（限 EAR99 或仅反恐管制技术）（C2，Federal Register 转引）。\n\n三大 EDA 精确市场份额、标准组织中各国席位占比：待研究（草图未覆盖）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "EDA 由 Synopsys/Cadence/Siemens 三家主导",
    "level": "C2",
    "source": "EE Times/TrendForce 转引（精确份额待核）"
   },
   {
    "item": "2025-05-23 BIS 要求三大 EDA 对华销售申请许可",
    "level": "C2",
    "source": "TechCrunch/EE Times 转引"
   },
   {
    "item": "2025-07-02 该 EDA 对华限制被撤销、约六周",
    "level": "C2",
    "source": "CNBC/Synopsys 转引"
   },
   {
    "item": "撤销与中国稀土出口反制相关",
    "level": "C2",
    "source": "CNBC 转引（因果为报道口径）"
   },
   {
    "item": "2020-06-18 BIS 放行与华为的部分标准活动",
    "level": "C2",
    "source": "Federal Register/Wiley 转引"
   },
   {
    "item": "华为 2019 入 Entity List 波及标准参与",
    "level": "C2",
    "source": "Freshfields/Global Compliance News 转引"
   },
   {
    "item": "EDA 国产替代在先进制程有明显差距",
    "level": "C1–C2",
    "source": "Mondaq/Chambers 转引 [差距程度待核实]"
   }
  ],
  "contested": {
   "title": "2025 年 5–7 月，EDA 对华授权限制与撤销。",
   "summary": "BIS 于 5 月 23 日致函三大 EDA 厂要求对华销售申请许可，Synopsys 一度暂停中国运营、关闭中国客户的支持门户；约六周后（7 月 2 日）限制被撤销，据报道与中国限制稀土出口的反制直接相关（C2，TechCrunch/EE Times/CNBC 转引）。这是\"工具授权作为战略拒绝手段被动用、又被对方的资源反制逆转\"的一次完整实例——同时展示了这种权力的锋利和它的可逆。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. BIS 2025 年 5 月致 EDA 厂函件与相关 Federal Register 规则原文。",
   "2. Federal Register 2020-06-18 \"Release of Technology to Certain Entities... in the Context of Standards Organizations\" 规则原文。",
   "3. Synopsys/Cadence/Siemens EDA 年报中的中国区营收占比。",
   "4. 三大 EDA 全球市场份额的权威第三方统计（如 TechInsights/ESD Alliance 原始数据）。",
   "5. 3GPP/IEEE 会员与标准必要专利（SEP）持有的国别分布统计。",
   "6. 中国国产 EDA（华大九天/概伦等）在各制程节点的能力覆盖公开评估。",
   "7. 主要认证机构（FAA/EASA/各国电信入网）拒绝或撤销认证的公开案例记录。"
  ]
 },
 "re-battery-cell": {
  "sourceFile": "re-battery-cell.md",
  "archiveId": "re-battery-cell",
  "established": "2026-06-22",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": "这一格的卡点不是物理单点，是「成本+规模+LFP 工艺+上游材料」四重绑定——而且有真 fallback\n\n动力电池电芯和它上游的多晶硅/镓/稀土在卡点性质上不是一类东西。多晶硅、镓、稀土是**物料独占**（一国一公司卡住一种分子或一道分离工艺，下游连失败的第二家都难找）。电芯不是：韩系三家（LG 新能源、三星 SDI、SK On）+ 松下是**真实在产、产能巨大、技术成熟**的非中据点——这是全 re 栈里少见的、电芯整层达到 `operational` 真 fallback 的一格。你要造一块车规电池,不是只能找中国。\n\n所以电芯节点的卡点不在「能不能造」,在「能不能造得跟中国一样便宜、一样是 LFP、一样有上游材料喂料」。中国系（宁德时代约 37% + 比亚迪约 16%,SNE Research 2023 口径,C3 待核）合计约 53%+全球装机,加上国轩、亿纬、中创新航等二线,中国系合计约 60%+。但这个数字会骗人——它不是「中国卡住电芯本身」,是中国同时握住了三样让它便宜的东西:\n\n1. **LFP（磷酸铁锂）路线的工艺与专利**。LFP 便宜、安全、不用钴镍,是当前性价比主流,而 LFP 量产工艺、CTP/刀片等结构创新、以及 LFP 正极材料几乎全在中国。韩日传统强在 NMC(三元),在 LFP 上是追赶者。\n2. **上游材料链**（接子节点 re-battery-material）。正极、负极(石墨)、隔膜、电解液四大材料中国份额更高——电芯厂搬到美欧,材料还得从中国买。这是「美国壳、中国芯」在电池上的版本,和 re-solar-module 同构。\n3. **成本与规模**。中国电芯成本结构(廉价电、过剩产能、垂直整合)把价格压到韩日难盈利的水平——和多晶硅/镓同类的**价格战壁垒**。\n\n所以电芯节点真正硬的不是电芯这一格,是**它向上锁死在 re-battery-material(材料)和 cm-battery-li/co(锂钴)上,向旁锁死在 LFP IP 上**。单看电芯,fallback 是真的;算上「便宜的 LFP 电芯」,fallback 就半空心了。\n\n还有一个和矿产节点相反的政治方向要记清:**电芯的政治战目前主要是美欧向内掐(IRA FEOC 排除中国成分、EU 对华 EV 加税),不是中国向外掐电芯出口**。但中国已经在**更上游**开了口子:2023-10 把电池级石墨纳入出口许可、2024-2025 把 LFP 正极制备技术和锂提取技术列入拟限制出口的技术目录——中国的电芯杠杆不打在电芯上,打在「让别人造不出便宜电芯」的材料和技术上。这条要和 re-solar-module 的反规避地鼠战、re-polysilicon 的 UFLPA 对照看。\n\n---",
  "holders": [
   {
    "entity": "宁德时代 CATL",
    "role": null,
    "scale": "约 37%",
    "jurisdiction": "中国",
    "group": "全球动力电池装机份额(SNE Research 2023 口径,C3 待典藏核实):"
   },
   {
    "entity": "比亚迪 BYD",
    "role": null,
    "scale": "约 16%",
    "jurisdiction": "中国",
    "group": "全球动力电池装机份额(SNE Research 2023 口径,C3 待典藏核实):"
   },
   {
    "entity": "LG 新能源 LGES",
    "role": null,
    "scale": "约 14%",
    "jurisdiction": "韩国",
    "group": "全球动力电池装机份额(SNE Research 2023 口径,C3 待典藏核实):"
   },
   {
    "entity": "松下 Panasonic Energy",
    "role": null,
    "scale": "约 6%",
    "jurisdiction": "日本",
    "group": "全球动力电池装机份额(SNE Research 2023 口径,C3 待典藏核实):"
   },
   {
    "entity": "SK On",
    "role": null,
    "scale": "约 5%",
    "jurisdiction": "韩国",
    "group": "全球动力电池装机份额(SNE Research 2023 口径,C3 待典藏核实):"
   },
   {
    "entity": "三星 SDI",
    "role": null,
    "scale": "约 5%",
    "jurisdiction": "韩国",
    "group": "全球动力电池装机份额(SNE Research 2023 口径,C3 待典藏核实):"
   },
   {
    "entity": "国轩/亿纬/中创新航等",
    "role": null,
    "scale": "合计约 10%+",
    "jurisdiction": "中国",
    "group": "全球动力电池装机份额(SNE Research 2023 口径,C3 待典藏核实):"
   },
   {
    "entity": "CATL 宁德时代",
    "role": null,
    "scale": "2023 营收：约 ¥4,009 亿(约 $560 亿)【待核】 · 市值/估值：A 股(深 300750),万亿人民币级【待核】",
    "jurisdiction": "中国",
    "group": "关键玩家财务(年报口径,C3 待典藏核实,全部需年报原文):"
   },
   {
    "entity": "BYD(电池业务)",
    "role": null,
    "scale": "2023 营收：电池段不单独完整披露【缺口】 · 市值/估值：港股+A 股",
    "jurisdiction": "中国",
    "group": "关键玩家财务(年报口径,C3 待典藏核实,全部需年报原文):"
   },
   {
    "entity": "LG 新能源",
    "role": null,
    "scale": "2023 营收：约 ₩33.7 万亿(约 $258 亿)【待核】 · 市值/估值：KOSPI",
    "jurisdiction": "韩国",
    "group": "关键玩家财务(年报口径,C3 待典藏核实,全部需年报原文):"
   },
   {
    "entity": "松下能源",
    "role": null,
    "scale": "2023 营收：母公司分部披露【缺口:需松下 IR】 · 市值/估值：东证(母公司)",
    "jurisdiction": "日本",
    "group": "关键玩家财务(年报口径,C3 待典藏核实,全部需年报原文):"
   },
   {
    "entity": "SK On",
    "role": null,
    "scale": "2023 营收：持续亏损【待核】 · 市值/估值：SK Innovation 子",
    "jurisdiction": "韩国",
    "group": "关键玩家财务(年报口径,C3 待典藏核实,全部需年报原文):"
   },
   {
    "entity": "三星 SDI",
    "role": null,
    "scale": "2023 营收：【缺口:需年报】 · 市值/估值：KOSPI",
    "jurisdiction": "韩国",
    "group": "关键玩家财务(年报口径,C3 待典藏核实,全部需年报原文):"
   }
  ],
  "upstream": [
   "电芯自己绕不开的:",
   "**四大材料(正极/负极/隔膜/电解液)**:接已登记子节点 **re-battery-material**。中国份额普遍更高,尤其 LFP 正极、人造石墨负极。这是电芯「美国壳、中国芯」的芯所在。C2,待 re-battery-material 节点拆。",
   "**石墨负极(单列要害)**:天然+人造石墨负极中国主导,且**中国 2023-10 已把电池级石墨纳入出口许可**——这是电芯链上中国已实际动用的出口管制接口,值得在 re-battery-material 下重点拆或单列 re-graphite。C3。",
   "**锂/钴/镍原料**:接 cm-battery-li、cm-battery-co。锂(碳酸锂/氢氧化锂)中国精炼主导,钴刚果(金)矿+中国精炼。C2-C3。",
   "**LFP 工艺与专利(隐形 IP 上游)**:LFP 量产 know-how、CTP/刀片结构、快充工艺集中中国。韩日要做 LFP 需追赶或授权。这是电芯级的「软上游」——不是物料,是 IP。C2。",
   "**电芯制造设备**:涂布、卷绕/叠片、化成设备,中日韩均有,集中度待核。【缺口:需行业报告。】",
   "**廉价电力+过剩产能(隐形成本上游)**:中国电芯成本优势的物理根,和多晶硅同构。进因果层。"
  ],
  "downstream": [
   "**致命依赖:电动车整车厂**。动力电池占 BEV 整车成本约 30-40%(C2 行业共识,待核)——是单车最贵的一个部件。车企对电芯是致命依赖,但因有韩日中多源,单一电芯厂断供可换源(换源需重新认证,数月-年)。",
   "**高依赖:电网储能(BESS)**。LFP 储能几乎是中国电芯的主场,美欧储能项目大量用中国 LFP 电芯/系统——这一块比车用更依赖中国(储能对成本更敏感、对品牌不敏感)。",
   "**高依赖:特斯拉等**特定车企与松下/CATL/LG 的深度绑定(认证锁定)。",
   "**可缓冲:消费电子/工具电池**(小型,多源)。",
   "买家侧:电芯成本占整车 30-40%,断供不是涨成本问题(虽然也涨),是**整车停产**问题——但有多源缓冲。储能侧对中国 LFP 依赖更深、缓冲更弱。【缺口:车企电芯库存/在途可撑周期,需 OEM 披露。】"
  ],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": "operational",
   "unstructured": false,
   "text": "分层判,这是本节点和上游矿产节点最大的区别:\n\n**电芯整层(通用电芯):`operational`(真 fallback,全 re 栈罕见)**\n韩系三家+松下是真实在产、GWh 级、技术成熟的非中电芯源,且在美欧本地建厂(IRA 驱动)。过五问:替代电芯层 / 已在运行(operational,LG/SK/松下在美投产) / 卡在「LFP+成本+材料喂料」 / 私营电芯厂+各国 / 现场有执行能力(在产)。结论:**通用车规电芯有真 operational fallback**——这是事实,不是 possible reroute。要造一块车规 NMC 电池,不依赖中国是做得到的。\n\n**「便宜的 LFP 电芯」:`partial → blocked`**\n但要造**和中国一样便宜的 LFP 电芯**,fallback 半空心:① LFP 工艺/专利集中中国,韩日追赶或需授权(福特授权 CATL 技术建密歇根厂=「美国壳、中国 IP」典型);② LFP 正极材料中国主导,本地厂缺料;③ 成本压不到中国水平。过五问:替代「便宜 LFP」/ 多久=数年 / 卡在 IP+材料+成本 / 谁启动=IRA 补贴托底+授权 / 现场执行=正在建但靠中国 IP/料。结论:**通用电芯 operational,便宜 LFP partial 且依赖中国 IP/材料**——降级为「壳在、芯半空」。\n\n**上游材料层:`partial`(转 re-battery-material 判)**\n\n整体:**电芯是全 re 栈唯一本层有真 fallback 的节点,但 fallback 的「便宜程度」和「LFP 程度」锁在上游材料和 IP 上。**"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **全球动力电池市场(C3 lead_only,待 BNEF/SNE 原文)**:2023 年约 **$1,000-1,200 亿/年**量级(动力+部分储能口径,常被引)。这是电芯+电池包价值,不含整车。\n- **全球电芯装机量(C3)**:2023 约 700-800 GWh 量级(动力,SNE/BNEF 口径,待核)。\n- **CATL 该业务营收(C3 待核)**:2023 约 ¥4,009 亿(约 $560 亿,含动力+储能电池系统),≈占全球市场量级的相当一块。\n- **储能电池另算**:BESS 电芯市场快速增长,与动力部分重叠,口径需分清。【缺口。】\n\n→ 数量级:电芯市场约千亿美元级,向下连着**电动车整车(万亿美元级新车市场)+ 电网储能转型**。和镓/稀土那种「金属端数亿、终端百亿」的极端背离不同,电芯本身已是千亿级大产业——但它向下撬动的整车+电网转型仍是更大数量级。\n\n【缺口:全球动力电池市场年值、装机 GWh、动力/储能拆分基准年——需 BNEF Battery / SNE Research / Wood Mackenzie 原报告。】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 电芯整层:CR1(CATL)约 37%、CR4 约 73%(SNE 2023,C3 待核)。**无单家>50%,中度寡头。**\n- 中国系合计:约 60%+(C3)。\n- LFP 细分:CR(中国)接近独占(C2,待 LFP 专门拆分)。\n- price maker = CATL(规模+LFP 成本)在 LFP 与成本上是价格领导者;NMC 高端段韩日仍有定价权。\n\n集中度结构:**电芯整层中度集中(有 fallback)→LFP 细分高度集中→上游材料高度集中**。本节点量化层核心结论:**集中度锁在 LFP 细分和上游,不在电芯整层。**",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "(全部 C3 待典藏核实,需年报原文——见结构层 4 表)\n\n- CATL:2023 营收约 ¥4,009 亿、净利约 ¥441 亿、毛利率约 22%【待核】——资本纵深极厚,有余力打价格战+海外建厂。\n- LGES:2023 营收约 ₩33.7 万亿【待核】,营业利润高度依赖 IRA 制造补贴(AMPC),剔除补贴后盈利薄——资本纵深够但盈利受补贴托。\n- SK On:持续亏损【待核】——资本纵深弱,扩张靠集团+补贴输血。\n- 松下能源:特斯拉绑定,母公司分部披露【缺口】。\n- 三星 SDI:高端定位【缺口】。\n\n资本纵深判断:**CATL 资本纵深最厚(高营收+真盈利),最能扛价格战与政治压力;韩系盈利薄、靠 IRA 补贴续命,政治上更脆**——一旦 IRA 补贴生变,韩系电芯的成本劣势立刻暴露。这是「fallback 真但脆」的财务底色:fallback 源(韩日)自己盈利能力弱于被替代源(中国)。\n\n【缺口:全部财务需 CATL 年报、LGES(DART)、松下 IR、SK Innovation、三星 SDI 年报原文。】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **下游成本敞口(高)**:动力电池占 BEV 整车成本约 30-40%(C2 行业共识,待核)——单车最贵部件。电芯涨价直接打整车毛利。\n- **下游产能敞口(有缓冲)**:单一电芯厂断供,车企可换源(韩日中多源),但换源需重新认证(数月-1 年)。比矿产节点的「无替代」缓冲强得多。\n- **储能侧敞口(更深)**:BESS 大量用中国 LFP,缓冲弱于车用。\n- **嵌入成品依赖**:中国出口大量整车+储能系统,真实依赖深于电芯进口统计。\n\n【缺口:车企电芯库存/在途可撑周期、认证换源实际耗时——需 OEM 披露/行业报告。】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **电芯本层断供冲击(C2 推算)**:因有韩日 fallback,纯「中国电芯断供」的冲击量级**低于**矿产节点——车企可换源,代价是认证延迟+成本上升+短期产量损失,数量级以「受影响车型产量+换源成本」计,非整链停摆。\n- **真冲击在上游(C2)**:若中国掐石墨/LFP 正极/LFP 技术(已在动的接口),冲击量级**远大于**掐电芯——会让本地电芯厂缺料/缺工艺,半空心暴露。\n- **政策冲击(C2-C3)**:IRA FEOC 排除中国成分→中国电芯/材料失去美国车补市场;EU 关税→中国 EV 在欧成本上升。量级=受影响的中国对美欧电池/EV 出口额(数百亿美元级,待海关/行业核)。\n- 【缺口:中国电池/EV 对美欧出口额、IRA FEOC 与 EU 关税的量化贸易影响——需 BNEF/海关/Rhodium 专题报告。】",
    "cLevels": [
     "C2",
     "C2-C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链利润分布:**上游材料端(尤其 LFP 正极、隔膜)和电芯端(CATL 这类规模龙头)较厚;二线电芯厂薄(价格战挤压);韩系电芯靠补贴维持薄利;下游整车端因电池占成本高、自身竞争激烈而被电池价格挤压。** 利润主要沉淀在**规模龙头电芯厂(CATL)+ 关键材料环节**。\n\n政治压力首先打到谁:\n- 美欧 IRA/关税向内掐 → first payer = **中国电芯/材料出口商**(失去美欧车补市场/被加税)+ **美欧车企**(合规成本+被迫用更贵的非中电芯)。\n- 中国向上游掐(石墨/LFP 技术)→ first payer = **美欧本地电芯厂**(缺料缺工艺)。\n- 这个利润分布解释了为什么战线在上移:电芯本层利润分散+有竞争,掐它痛感被多源稀释;上游材料和 LFP IP 利润集中且无替代,掐它痛感直达——所以双方都把杠杆往上游和 IP 移。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "电芯整层有 operational 真 fallback(韩日松下在产)",
    "level": "C3",
    "source": "行业事实+SNE 份额"
   },
   {
    "item": "CATL 约 37%、BYD 约 16%、LGES 约 14% 等 2023 装机份额",
    "level": "C3",
    "source": "SNE Research 转引"
   },
   {
    "item": "中国系合计约 60%+",
    "level": "C3",
    "source": "行业转引"
   },
   {
    "item": "CATL 2023 营收约 ¥4,009 亿、净利约 ¥441 亿、毛利率约 22%",
    "level": "C3",
    "source": "年报二手转引"
   },
   {
    "item": "LGES 2023 营收约 ₩33.7 万亿、盈利依赖 IRA 补贴",
    "level": "C3",
    "source": "年报二手转引"
   },
   {
    "item": "LFP 工艺+正极几乎全在中国(细分接近独占)",
    "level": "C2",
    "source": "行业共识"
   },
   {
    "item": "动力电池占 BEV 整车成本约 30-40%",
    "level": "C2",
    "source": "行业共识"
   },
   {
    "item": "全球动力电池市场约 $1,000-1,200 亿(2023)",
    "level": "C3",
    "source": "BNEF/SNE lead_only"
   },
   {
    "item": "中国 2023-10 石墨纳入出口许可",
    "level": "C3",
    "source": "新闻引用"
   },
   {
    "item": "中国 2024-2025 拟限制 LFP 正极/锂提取技术出口",
    "level": "C3",
    "source": "新闻引用"
   },
   {
    "item": "福特 2024 授权 CATL 技术建密歇根 LFP 厂(壳-芯模式)",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "IRA FEOC 2024-2025 排除中国成分车补",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "EU 2024 对华 EV 反补贴税终裁",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "电芯卡点是成本+规模+IP+材料绑定,非物理单点",
    "level": "C2",
    "source": "结构判断"
   },
   {
    "item": "真卡点在 LFP 细分+上游材料+IP,不在电芯整层",
    "level": "C2",
    "source": "结构判断"
   },
   {
    "item": "政治战线从电芯上移到上游材料/技术",
    "level": "C2-C3",
    "source": "时间线判断"
   },
   {
    "item": "与 re-solar-module 同构(半空心 fallback)",
    "level": "C3",
    "source": "跨节点对照"
   }
  ],
  "contested": {
   "title": "福特 BlueOval 密歇根 LFP 工厂与 CATL 技术授权争议（2023 年 2 月–11 月）",
   "summary": "用五个阅读动作读这场争夺：\n**① 校准颗粒度**：这场争夺的标的不是\"一座电池工厂能不能建\"，而是**LFP 制造技术能不能以\"美国工厂 + 中国 IP\"的形式进入美国**。福特拥有工厂，CATL 拥有技术——两者合作的交集是授权协议。各方争夺的核心是：这种 IP 授权是技术扩散（IRA 的目标：本土生产）还是技术依赖转移（国会的担忧：中国仍然控制）。"
  },
  "gaps": [
   "1. 【缺口:需要 SNE Research / BNEF Battery 全球动力电池装机份额原报告】CATL/BYD/韩系/二线逐家份额、装机 GWh、动力 vs 储能拆分、LFP vs NMC 细分占比——这是集中度判断(Q2、结构层 3/4)的一手支柱,现全为二手转引。",
   "2. 【缺口:需要 CATL 年报(深交所 300750)、LGES 年报(DART)、松下能源 IR、SK Innovation/三星 SDI 年报】关键玩家营收/利润率/市值(Q3、结构层 4)——现全为待核,无法坐实各方资本纵深(尤其韩系对 IRA 补贴的依赖度)。",
   "3. 【缺口:需要中国商务部/海关公告中文原文】2023-10 石墨出口许可公告号+清单;2024-2025《禁止出口限制出口技术目录》中 LFP 正极制备技术、锂提取加工技术的拟纳入条款——这是中国向上游掐的一手文本(政治传动层 A/B/E),与 cm-gallium/cm-ree 共用机制,优先级高。",
   "4. 【缺口:需要 IRS/Treasury IRA FEOC 实施细则 + 欧委会对华 EV 反补贴税终裁文本】美欧向内掐的一手法律文本+生效时点+成分阈值/税率(政治传动层 A/C/E)。",
   "5. 【缺口:需要 BNEF/Wood Mackenzie 电池成本与市场报告】全球动力电池市场年值、装机 GWh、电池成本曲线、LFP vs NMC 成本对比(Q1、Q5)。",
   "6. 【缺口:需要福特-CATL LRS 协议/公告 + 国会听证材料】「美国壳、中国 IP」授权模式细节(卡点分析反例、级联),是半空心 fallback 的关键标本。",
   "7. 【缺口:需要 Rhodium/BNEF 专题报告】IRA FEOC 与 EU 关税对中国电池/EV 对美欧出口的量化贸易影响(Q5)。",
   "8. 【缺口:子节点 re-graphite(若从 re-battery-material 单列)】石墨负极是中国已实际动用出口许可的电芯链接口,可能值得从 re-battery-material 单列。"
  ]
 },
 "re-battery-material": {
  "sourceFile": "re-battery-material.md",
  "archiveId": "re-battery-material",
  "established": "2026-07-01",
  "updated": "2026-07-02",
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "四个子细分，每一个都集中在中国，但中国才刚开始动出口端的牌\n\n电动车电芯由四大材料组成：**正极材料**（决定能量密度和化学体系）、**负极材料**（主体是石墨）、**隔膜**（防止正负极短路的薄膜）、**电解液**（锂离子传输的介质）。这四类在制造电芯之前都要单独生产，是电芯的直接物料投入。把它们合为一个节点，原因是：这四项的中国集中度模式相似（中国 60–90%+），分析逻辑和政治传动方向也基本一致，分开成四个节点效率差。\n\n但这个节点和 cm 栈的矿产节点有一个根本不同：这里卖的是**加工制造的中间品**，不是稀缺的自然资源。多晶硅、镓、稀土的卡点有物理底层——要么地质赋存（矿不在那就没有），要么化工壁垒（分离技术只有一家掌握）。电池材料没有这层底座：石墨原料、磷酸铁、氟化物的原材料不稀缺，工艺基本公开，门槛主要来自**成本竞争和先行者垄断**。这让它的卡点比矿产节点更软——理论上可以在美国或欧洲建同样的正极材料厂，问题是成本和时间，不是绝对能力缺失。\n\n到目前为止，这四类材料里**只有石墨被中国施加了出口端管控**（2023 年 10 月）。正极、隔膜、电解液还没有出口管制——它们的集中度很高，但\"拒绝方\"的政治开关还没被拨动。这是这个节点区别于 cm-gallium 或 cm-ree 的关键：资源型管控和制造型管控还没合流，中国现在掌握的牌还大部分没出。\n\n---",
  "holders": [
   {
    "entity": "华友钴业 (Huayou Cobalt)",
    "role": "NMC 前驱体 + NMC/LFP 正极，全球最大前驱体企业之一",
    "scale": null,
    "jurisdiction": "中国（沪：603799）",
    "group": "正极材料"
   },
   {
    "entity": "宁波容百科技 CNGR",
    "role": "NMC 高镍正极，中国最大高镍正极企业之一",
    "scale": null,
    "jurisdiction": "中国（沪：688269）",
    "group": "正极材料"
   },
   {
    "entity": "厦门厦钨新能 XTC",
    "role": "NMC/LFP 正极",
    "scale": null,
    "jurisdiction": "中国（科创板）",
    "group": "正极材料"
   },
   {
    "entity": "Umicore",
    "role": "高镍 NMC 正极（欧洲最大非中正极企业）",
    "scale": null,
    "jurisdiction": "比利时（布鲁塞尔交易所）",
    "group": "正极材料"
   },
   {
    "entity": "POSCO Future M",
    "role": "NMC/LFP 正极，韩国 IRA 受益方",
    "scale": null,
    "jurisdiction": "韩国（KRX）",
    "group": "正极材料"
   },
   {
    "entity": "贝特瑞 BTR New Materials",
    "role": "全球最大天然石墨负极企业，人造石墨也有",
    "scale": null,
    "jurisdiction": "中国（深：835185 / 港股）",
    "group": "负极材料（石墨）"
   },
   {
    "entity": "璞泰来 PUTAILAI",
    "role": "人造石墨负极，CATL 主要供应商之一",
    "scale": null,
    "jurisdiction": "中国（沪：603659）",
    "group": "负极材料（石墨）"
   },
   {
    "entity": "杉杉股份",
    "role": "人造石墨负极，历史先行者",
    "scale": null,
    "jurisdiction": "中国（沪：600884）",
    "group": "负极材料（石墨）"
   },
   {
    "entity": "Mitsubishi Chemical",
    "role": "日本少量人造石墨",
    "scale": null,
    "jurisdiction": "日本",
    "group": "负极材料（石墨）"
   },
   {
    "entity": "恩捷股份 Yunnan Energy",
    "role": "全球最大湿法隔膜企业，约 30–35% 全球份额（C3）",
    "scale": null,
    "jurisdiction": "中国（沪：002812）",
    "group": "隔膜"
   },
   {
    "entity": "星源材质 Sinoma",
    "role": "干法 + 湿法隔膜",
    "scale": null,
    "jurisdiction": "中国（沪：300568）",
    "group": "隔膜"
   },
   {
    "entity": "Asahi Kasei 旭化成",
    "role": "全球湿法隔膜先行者，高端日系",
    "scale": null,
    "jurisdiction": "日本",
    "group": "隔膜"
   },
   {
    "entity": "Toray 东丽",
    "role": "干法隔膜",
    "scale": null,
    "jurisdiction": "日本",
    "group": "隔膜"
   },
   {
    "entity": "W-Scope",
    "role": "韩国隔膜企业",
    "scale": null,
    "jurisdiction": "韩国",
    "group": "隔膜"
   },
   {
    "entity": "天赐材料 Tianci",
    "role": "全球最大电解液企业（C3）",
    "scale": null,
    "jurisdiction": "中国（深：002709）",
    "group": "电解液"
   },
   {
    "entity": "新宙邦 Capchem",
    "role": "电解液 + 电容器电解液",
    "scale": null,
    "jurisdiction": "中国（沪：300037）",
    "group": "电解液"
   },
   {
    "entity": "三菱化学",
    "role": "日系电解液，LiPF₆ 生产",
    "scale": null,
    "jurisdiction": "日本",
    "group": "电解液"
   },
   {
    "entity": "Solvay",
    "role": "LiPF₆ 等电解质",
    "scale": null,
    "jurisdiction": "比利时",
    "group": "电解液"
   }
  ],
  "upstream": [
   "各类材料各有其上游：",
   "**正极材料（NMC）上游**：钴（cm-battery-co）、镍、锰、锂（cm-battery-li）——NMC 正极是这四种矿产向制造品的第一道转化，因此 re-battery-material 是 cm-battery-co/li 的直接下游。LFP 正极不用钴镍，上游是磷酸铁（磷矿和铁），中国也是主产国（C3）。",
   "**负极材料上游**：天然石墨原矿（中国/莫桑比克/马达加斯加等）；人造石墨的原料是石油焦和针状焦，中国生产但也从美国（延迟焦）进口。石墨是这个节点里唯一被政治激活的上游子单点（2023 出口许可）。",
   "**隔膜上游**：聚乙烯（PE）或聚丙烯（PP）基材，是通用石化产品，不是卡点。隔膜的壁垒在**微孔均匀度和表面涂覆工艺**（know-how），不在原材料。",
   "**电解液上游**：LiPF₆（六氟磷酸锂）和溶剂，中国主导；LiPF₆ 的主要卡口在氟化物（氢氟酸 HF），来源分散，不是单点。",
   "值得注意的是：正极材料（特别是 NMC 前驱体）本身是 cm-battery-co 的下游——钴从 DRC 矿山出来，经中国精炼后变成钴硫酸盐，再进入华友钴业等正极前驱体工厂，最后做成正极材料。这条链的第一关（DRC/中国精炼）已在 cm-battery-co 覆盖；这里覆盖的是从硫酸盐/前驱体到正极活性物质这一步。"
  ],
  "downstream": [
   "直接下游：**re-battery-cell**（电芯制造）——这四类材料是电芯工厂的直接采购项，占电芯成本约 60–75%（正极约 40–50% + 负极约 10–15% + 隔膜约 5–10% + 电解液约 10–15%，C2 推算；比例随化学体系和价格周期而波动）。",
   "间接下游：所有依赖大规模锂电芯的行业——电动汽车（乘用车 + 商用车）、固定式储能（BESS，电网/家储）、消费电子。",
   "依赖强度：电芯厂对四大材料的依赖是**即时生产依赖**——库存通常维持 4–8 周（C2），超过窗口即停产。这比电芯对整车厂的依赖更即时（整车厂可有更长备货），四大材料是产线的真实瓶颈。"
  ],
  "fallback": {
   "verdictZh": "可能改道",
   "verdictRaw": "possible reroute",
   "unstructured": false,
   "text": "逐细分评估：\n\n**正极材料**：fallback = `partial`（条件苛刻）。POSCO Future M（韩国）+ Umicore（比利时）是实质存在的非中产能，特别是 NMC 高镍路线，IRA 受益后正在扩产。但 LFP 正极非中产能接近零——LFP 替代的五问：① 替代哪一层=LFP 正极整体替代中国产能；② 多久接上=3–5 年以上；③ 卡在哪=工艺积累+成本差距（中国 LFP 正极成本优势 30–50%，C2）；④ 谁有权限启动=IRA/CHIPS/欧洲电池法；⑤ 现场有无执行能力=POSCO/Umicore 已有投资但 LFP 产能近乎空白。结论：NMC 路线 partial fallback，LFP 路线 `possible reroute`。\n\n**负极材料（石墨）**：fallback = `possible reroute`。美国/加拿大有天然石墨矿，韩日有少量人造石墨能力，但石墨精炼和涂层工艺（增加充放电次数的关键步骤）集中在中国，且中国已加出口许可——从已管控的物项角度看，fallback 尚不 operational。硅基负极（硅碳）可部分替代，但目前占比很小（<5%，C2），且硅基负极的供应链同样集中（电池级硅/IOXUS 等，多为中国/韩国）。\n\n**隔膜**：fallback = `partial`（最好的一个细分）。旭化成/东丽/W-Scope 是真实的非中产能，有独立技术路线（干法为日系传统优势）。五问：① NMC 用湿法/干法，LFP 也可湿法；② 多久接上=旭化成/东丽可快速扩产（数月到 1 年）；③ 卡在哪=中国已有 70%+，扩产产能总量能否完全覆盖全球需求缺口是问题；④ 谁有权限=日本企业独立，无政治障碍；⑤ 现场执行能力=旭化成/东丽均有现役产线。结论：隔膜是四大材料里 fallback 最强的，`partial` 但需要扩产约 2 年。\n\n**电解液**：fallback = `possible reroute`。三菱化学 + Solvay 是理论备份，但中国 70–80% 的市场份额差距太大，短期无法接替。LiPF₆ 生产在欧洲有 Solvay，但整个电解液体系（溶剂+添加剂配方）的工艺集成仍在中国。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "四大材料合计（全球年市场规模）：\n\n- 正极材料：约 $250–350 亿（2023 年估算，BNEF/SNE 行业口径，C3；受锂/钴/镍价格影响波动大，2022 年高峰更高）\n- 负极材料（石墨为主）：约 $60–80 亿（C3）\n- 隔膜：约 $70–90 亿（C3）\n- 电解液：约 $80–100 亿（C3）\n- **四大材料合计约 $460–620 亿**（C3，行业口径综合，与 SKILL.md 提示的 400-600 亿美元范围吻合）\n\n注：正极材料里 LFP 和 NMC 不可直接相加（成分成本不同）；上述数字是最终销售额，不是原材料成本。市场规模随电芯价格下行（过剩产能）快速压缩，2024 年较 2022 年峰值可能缩减 30–40%（C2，行业报道，待典藏核）。\n\n【缺口：四大材料各细分的权威口径——需 BNEF Battery Market Outlook 或 Wood Mackenzie 报告，包含分年/分化学体系细分数字】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "| 细分 | 中国 CR1（份额）| 全球 CR4（估算）| 数据源 | C 等级 |\n|---|---|---|---|---|\n| LFP 正极 | ≥95% | ≈100%（几乎全中国）| 行业共识 | C2 |\n| NMC 正极 | 约 70–80% | 约 85%（含 POSCO/Umicore）| BNEF 行业口径 | C3 |\n| 负极（石墨合并）| 约 85–90% | 约 95% | USGS + 行业口径 | C3 |\n| 隔膜 | 约 70–75% | 约 90%（含日系）| 行业口径 | C3 |\n| 电解液 | 约 70–80% | 约 90%（含日系）| 行业口径 | C3 |\n\nprice maker：正极/电解液/石墨均为中国厂商集体定价；隔膜中国恩捷在量上领先但日本保留高端定价权。\n\n【缺口：各细分 CR1/CR4 精确数字——需 BNEF 或 Wood Mackenzie 细分报告；中国特定企业（华友/贝特瑞/恩捷/天赐）在全球市场的精确份额】",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 2023 年营收（估算/待核）| 毛利率（估算）| 市值/估值 | 来源 | C 等级 |\n|---|---|---|---|---|---|\n| 华友钴业 Huayou Cobalt | 约 RMB 600–700 亿（包含矿产+前驱体+正极业务）【缺口：需年报拆分正极业务】 | 约 10–15%（含上游，C2 推算）| 上证所（603799），中等市值 | 待年报 | C3 |\n| 宁波容百科技 CNGR | 约 RMB 250–350 亿（C3 行业估算）| 约 12–18%（C2）| 科创板（688269）| 待年报 | C3 |\n| 贝特瑞 BTR | 约 RMB 120–160 亿（C3）| 约 20–25%（C2，含高端硅碳）| 港股（285.HK）| 待年报 | C3 |\n| 恩捷股份 | 约 RMB 100–130 亿（C3）| 约 35–45%（隔膜行业高毛利，C3）| 上证所（002812）| 待年报 | C3 |\n| 天赐材料 Tianci | 约 RMB 100–130 亿（C3）| 约 25–35%（C2）| 深交所（002709）| 待年报 | C3 |\n| Umicore | 约 €4.4 亿（正极材料分部，FY2023）| 约 12–15%（C3，Umicore IR）| 布鲁塞尔交易所（UMI）| Umicore FY2023 年报 | C3 |\n| Asahi Kasei（分部）| 母公司总营收约 ¥2.8 万亿；隔膜分部不独立披露【缺口】 | 隔膜业务高毛利（C2）| 东京交易所 | 待分部拆分 | C2 |\n\n**利润率对照**（行业共识）：正极材料毛利率最薄（约 10–18%，受上游金属价格波动大）；隔膜最厚（约 30–45%，技术壁垒更强）；电解液中等（约 20–30%）；负极材料中等偏下（约 15–25%，人造石墨为主）。\n\n【缺口：各中国上市公司 FY2023 年报精确营收和毛利率——需年报原文（华友/CNGR/贝特瑞/恩捷/天赐）；非中企业（Umicore 正极分部/旭化成隔膜分部）财务细分】",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **四大材料在电芯成本中的占比**：合计约 60–75%（C2 推算；正极约 40–50%，负极约 10–15%，隔膜约 5–10%，电解液约 10–15%；比例随化学体系（NMC vs LFP）和锂/钴价格周期波动）\n- **若断供，电芯厂能撑多久**：通常备货 4–8 周（C2 推算，无公开电芯厂库存披露）；石墨管制 2023 年后，韩日电芯厂据报战略库存提升至 3–6 个月（C2，行业媒体，待核）\n\n【缺口：电芯厂对四大材料的实际库存水平——需供应链研究机构报告（如 RK Equity、BloombergNEF Cell Cost Tracker）；各材料在电芯成本结构中的精确占比（随年份和化学体系变化）】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "2023 年石墨出口许可的实际影响较有限（因大多数许可获批），但假设进行 selective-seizure 或完全禁运的情景分析：\n\n- **日本影响**：日本几乎 100% 电池石墨来自中国（C3），若断供且无战略库存，3–6 个月内电芯产能大幅下降。\n- **韩国影响**：韩系三家依赖中国石墨约 60–80%（C3 行业估算），断供后 6–12 个月内 EV 电池出货量受重压。\n- **美国/欧洲 IRA 建设中产能影响**：美国国内石墨精炼产能接近零（USGS 2024，C3），对华断供影响全美 EV 生产链。\n- **全球范围**：BloombergNEF 等机构曾估算，若中国全面限制电池材料出口，全球 EV 产量可能短期下降 30–50%（C2，行业报告，待核）\n\n【缺口：专项断供情景分析报告——需 IEA Critical Minerals 2024 的电池材料冲击章节，或 DOE Battery360 报告中的供应中断情景】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链上利润分布极不均匀：\n\n- **隔膜**获利最厚（约 30–45% 毛利率），因技术壁垒（旭化成知识产权 + 中国企业后发追赶），是四大材料里\"技术护城河最清晰\"的细分。政治压力若打到隔膜层，首先打到恩捷股份（中国大陆最大）和旭化成（高端，日本法域）。\n- **正极材料**利润最薄（约 10–18%），因为上游锂/钴/镍价格传导直接体现在正极价格里，正极厂是价格传导的中间商，自身定价权有限（上游采矿公司和下游电芯厂都在压正极厂的利润）。\n- **负极和电解液**处于中间（约 15–35%），贝特瑞的高端硅碳产品有更高利润率，但普通石墨负极利润薄。\n\n政治压力首先打到谁：中国材料厂的资产负债表（非中采购中断 → 中国厂营收下降，过剩产能加剧）；和从中国断购的电芯厂（采购成本上升或停产）。利润归宿和政治归因是：恩捷股份等中国隔膜厂利润最厚，天然是西方\"去中国化供应链\"叙事里最想拿回来的细分。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "四大材料合计市场约 $460–620 亿（2023）",
    "level": "C3",
    "source": "BNEF/行业口径综合"
   },
   {
    "item": "LFP 正极中国份额 ≥95%",
    "level": "C2",
    "source": "行业共识"
   },
   {
    "item": "NMC 正极中国份额约 70–80%",
    "level": "C3",
    "source": "BNEF 行业口径"
   },
   {
    "item": "石墨（天然+人造合并）中国份额约 85–90%",
    "level": "C3",
    "source": "USGS + 行业口径"
   },
   {
    "item": "隔膜中国份额约 70–75%",
    "level": "C3",
    "source": "行业口径"
   },
   {
    "item": "电解液中国份额约 70–80%",
    "level": "C3",
    "source": "行业口径"
   },
   {
    "item": "中国 2023-12-01 石墨出口许可制生效（公告日 2023-10-20）",
    "level": "C4",
    "source": "商务部海关总署公告2023年第39号，原文在库"
   },
   {
    "item": "隔膜毛利率约 30–45%（高于其他三类）",
    "level": "C2",
    "source": "行业报告推算"
   },
   {
    "item": "正极材料占电芯成本约 40–50%",
    "level": "C2",
    "source": "行业共识，随价格周期变化"
   },
   {
    "item": "四大材料合计约占电芯成本 60–75%",
    "level": "C2",
    "source": "行业共识推算"
   },
   {
    "item": "IRA FEOC Final Rule 2025/2027 截止日",
    "level": "C4",
    "source": "26 CFR §1.30D-6，FR 2024-09094"
   },
   {
    "item": "EU 电池法 Regulation (EU) 2023/1542",
    "level": "C4",
    "source": "欧盟官方公报"
   },
   {
    "item": "中国拟议 LFP 技术出口管制讨论",
    "level": "C3",
    "source": "新闻报道"
   }
  ],
  "contested": {
   "title": "中国 2023 年 10 月对电池级石墨实施出口许可制",
   "summary": "这是 re-battery-material 这个节点迄今被真实争夺过一次的最好探针——不是抽象的\"集中度担忧\"，而是一个具体的政策动作，把石墨从\"可自由出口的工业材料\"变成\"需申请许可证的管制物项\"。"
  },
  "gaps": [
   "1. **【已关闭】中国商务部 2023-10 石墨出口许可公告原文**——✅ 已入库：商务部海关总署公告2023年第39号（mofcom-customs-2023-no39-graphite-export-control.txt，2026-07-02），C3→C4。管制范围、HS编码、生效日（2023-12-01）全部确认。",
   "2. **【年报在库，待抽数】各中国材料厂 FY2023 年报**——✅ 年报均已入库（典藏工单 completed 2026-07-02）：华友钴业-603799、容百科技-688005、贝特瑞-835185（全文+摘要）、恩捷股份-002812、天赐材料-002709。具体营收/毛利率/正极分部等财务数字待从 PDF 提取，当前仍为 C3 估算。精读轮次完成后升级。",
   "3. **【blocked_commercial，已关闭追投】BNEF Battery Market Outlook 或 BloombergNEF Cell Component Cost Tracker**——Bloomberg Finance LP 商业订阅报告，无公开全文，接受降级，不要求补投。市场规模/份额维持 C3 估算。",
   "4. **【已关闭】Umicore FY2023 年报正极材料分部**——✅ 已入库：umicore-fy2023-integrated-annual-report.pdf（8.2MB，Umicore 官网 IR，2026-07-02）。正极材料分部财务数字待从 PDF 提取。",
   "5. **【已关闭】IEA Critical Minerals 2024 电池材料章节**——✅ 已入库：iea-global-critical-minerals-outlook-2024.pdf（20.1MB，IEA 官方，CC BY 4.0，2026-07-02）。电池材料供给结构、断供情景、替代产能进度可引用，具体数字待精读提取。",
   "6. **【已关闭】旭化成隔膜分部财务（Asahi Kasei Separation Products Division）**——✅ 已入库：旭化成 FY2022（asahi-kasei-fy2022-apr2022-mar2023-annual-report.pdf）+ FY2023（asahi-kasei-fy2023-apr2023-mar2024-annual-report.pdf）两份，2026-07-02。隔膜分部不独立披露，待读合并报告拆分。",
   "7. **【低影响，仍开放】中国拟议 LFP 正极技术出口管制目录原始文本（若存在）**——技术目录更新版本，目前只有新闻报道，无法核实是否真已落地。待官方文件公开后再取。\n---"
  ]
 },
 "re-cdn": {
  "sourceFile": "re-cdn.md",
  "archiveId": "re-cdn",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "CDN（内容分发网络）是一层架在网站和访问者之间的中间设施。它把网站内容缓存到分布在全球的边缘节点上，访问者就近取用，网站因此更快、更抗攻击。Cloudflare、Akamai、Fastly、亚马逊 CloudFront 是主要玩家。这个环节可能是一个卡点：一个网站一旦依赖某家 CDN 抵御攻击流量，这家 CDN 停止服务，就等于把网站从\"能被稳定访问\"的状态里踢出去，哪怕网站服务器本身还开着。它和 re-cloud 相邻但不同——云控制面关的是\"服务器还开不开\"，CDN 关的是\"内容还能不能顺畅送到访问者面前\"。",
  "holders": [
   {
    "entity": "Akamai (NASDAQ: AKAM)",
    "role": "老牌 CDN，份额最大",
    "scale": "约 31%（C2，dataresearchtools 转引，[待核实]）",
    "jurisdiction": "美国（美国法域）",
    "group": null
   },
   {
    "entity": "Cloudflare (NYSE: NET)",
    "role": "增长快，安全导向，覆盖面广",
    "scale": "约 20% 网站在用其服务（C2，CNN/Lawfare 转引，[待核实]）",
    "jurisdiction": "美国（美国法域）",
    "group": null
   },
   {
    "entity": "Amazon CloudFront",
    "role": "AWS 旗下 CDN",
    "scale": "约 15%–25% 区间（C2，转引，[待核实]）",
    "jurisdiction": "美国（美国法域）",
    "group": null
   },
   {
    "entity": "Fastly (NYSE: FSLY)",
    "role": "开发者导向，可编程边缘",
    "scale": "约 5%–10%（C2，转引，[待核实]）",
    "jurisdiction": "美国（美国法域）",
    "group": null
   },
   {
    "entity": "Google Cloud CDN / Microsoft Azure CDN",
    "role": "云商附带 CDN",
    "scale": "待研究",
    "jurisdiction": "美国",
    "group": null
   },
   {
    "entity": "阿里云 CDN / 腾讯云 CDN",
    "role": "中国境内主要 CDN",
    "scale": "待研究",
    "jurisdiction": "中国",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": null,
   "unstructured": false,
   "text": "总判：部分可行"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "据报道，全球 CDN 服务市场 2023 年约 50 亿美元，预计 2024 年增长约 3%（C2，streamingmediablog 转引，[待核实]）。精确年度数字待研究（草图未覆盖）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "Akamai 约 31%，Cloudflare / CloudFront 各约 15%–25%，Fastly 约 5%–10%（C2，dataresearchtools 等转引，口径不一，[待核实]）；约 20% 网站使用 Cloudflare（C2，CNN/Lawfare 转引，[待核实]）。权威份额需查各家财报与 W3Techs / Datanyze 原始统计（待研究）。",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "Akamai 约 31% 份额",
    "level": "C2",
    "source": "dataresearchtools 转引（[待核实]）"
   },
   {
    "item": "Cloudflare/CloudFront 各约 15%–25%、Fastly 约 5%–10%",
    "level": "C2",
    "source": "同上（口径不一，[待核实]）"
   },
   {
    "item": "约 20% 网站使用 Cloudflare",
    "level": "C2",
    "source": "CNN / Lawfare 转引（[待核实]）"
   },
   {
    "item": "全球 CDN 市场 2023 年约 50 亿美元",
    "level": "C2",
    "source": "streamingmediablog 转引（[待核实]）"
   },
   {
    "item": "Cloudflare 2022.9 停服 Kiwi Farms，理由为生命威胁",
    "level": "C2",
    "source": "CNN / Fortune / Wikipedia 转引"
   },
   {
    "item": "Kiwi Farms 停服当天另寻供应商重新上线",
    "level": "C2",
    "source": "Wikipedia 转引"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "2022 年 9 月，Cloudflare 停止为论坛 Kiwi Farms 提供服务。据报道，该论坛长期被用于组织跟踪、骚扰、人肉特定人群（主要针对跨性别者），一场要求 Cloudflare 停服的运动持续施压；Cloudflare 起初坚持继续服务、援引\"基础设施提供商不应做内容审查\"的立场，9 月 3 日改口停服，理由是\"对人身生命迫在眉睫的紧急威胁\"，CEO 称过去 48 小时针对性威胁升级（C2，CNN / Fortune / Wikipedia 转引）。据报道 Kiwi Farms 当天即找到别家重新上线（C2，Wikipedia 转引）。这个案例把两件事同时摆出来：一是覆盖约五分之一网站的 CDN 拒绝服务的分量；二是 CDN 停服只是撤防护、不等于删除，站点仍能改道——所以它是偏软的卡点。"
  },
  "gaps": [
   "正式拆解时需补的一手件：",
   "1. W3Techs / Datanyze 关于各 CDN 覆盖网站比例的原始统计。",
   "2. Akamai (AKAM)、Cloudflare (NET)、Fastly (FSLY) 各自最新 10-K 里的营收与流量份额。",
   "3. 市场规模的权威行业报告（如 Grand View / MarketsandMarkets 原文），核对 50 亿美元口径。",
   "4. Cloudflare 关于 Kiwi Farms 决定的官方声明原文（博客）。",
   "5. CDN 商对被 OFAC 制裁实体断供的公开案例与合规政策原文。",
   "6. 中国境内 CDN（阿里/腾讯）份额统计与牌照监管情况。",
   "7. DDoS 抗压能力的行业对比数据，判断\"换到小供应商能否扛住\"这一退路是否真成立。"
  ]
 },
 "re-cloud": {
  "sourceFile": "re-cloud.md",
  "archiveId": "re-cloud",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "云控制面指的是几家大型云服务商（AWS、微软 Azure、谷歌云、阿里云等）用来创建、暂停、关闭客户账户和整片区域的那套后台管理系统。绝大多数网站、App、企业系统今天不再自己买服务器，而是租用这几家的云。谁能从控制台层面按下\"停用\"这个按钮，谁就能让一个客户的服务在几小时内下线。这个环节可能是一个很硬的卡点：因为服务集中在少数几家手里，而这几家都是可以被本国政府施压的公司。真正要看清的是两层——商业层（云商自己按服务条款拒绝一个客户）和主权层（云商的母国政府通过法律或行政命令，逼云商执行拒绝）。",
  "holders": [
   {
    "entity": "Amazon Web Services (AWS)",
    "role": "全球最大云商，市场领先",
    "scale": "IaaS 约 50%（C2，Statista/businesstats 转引，[待核实]）",
    "jurisdiction": "美国（受美国法律、CLOUD Act 管辖）",
    "group": null
   },
   {
    "entity": "Microsoft Azure",
    "role": "第二大云商",
    "scale": "IaaS 约 20%（C2，同上）",
    "jurisdiction": "美国（同上）",
    "group": null
   },
   {
    "entity": "Google Cloud (GCP)",
    "role": "第三大云商",
    "scale": "IaaS 约 6%（C2，同上）",
    "jurisdiction": "美国（同上）",
    "group": null
   },
   {
    "entity": "阿里云 Alibaba Cloud",
    "role": "中国最大云商，国际份额下滑",
    "scale": "国际约 4%（C2，Q4 2024 转引，[待核实]）",
    "jurisdiction": "中国（中国法律管辖）",
    "group": null
   },
   {
    "entity": "腾讯云 / 华为云",
    "role": "中国境内主要云商",
    "scale": "待研究",
    "jurisdiction": "中国",
    "group": null
   },
   {
    "entity": "Hetzner / Scaleway / Infomaniak 等",
    "role": "欧洲本土云商，规模小",
    "scale": "待研究",
    "jurisdiction": "德国/法国/瑞士（欧盟/瑞士法域）",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "成本增加",
   "verdictRaw": null,
   "unstructured": false,
   "text": "总判：成本增加"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球云基础设施是一个千亿美元级的年市场，2024 年三大云商合计占六成以上（C2，Statista/businesstats 转引）。精确年度营收数字待研究（草图未覆盖，正式拆解需查各家 10-K / 年报）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "前三大（AWS/Azure/GCP）合计 IaaS 份额六成以上，AWS 单家约 50%（C2，businesstats 转引，不同机构口径差异大，[待核实]）。可靠的季度份额需查 Synergy Research 或 Canalys 原始报告（待研究）。",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "三大云商合计占云基础设施六成以上",
    "level": "C2",
    "source": "Statista / businesstats 转引"
   },
   {
    "item": "AWS IaaS 约 50%、Azure 约 20%",
    "level": "C2",
    "source": "businesstats 转引（口径差异大，[待核实]）"
   },
   {
    "item": "阿里云国际份额从约 6% 降到约 4%",
    "level": "C2",
    "source": "媒体转引（[待核实]）"
   },
   {
    "item": "CLOUD Act 可要求美国云商交出全球数据",
    "level": "C2",
    "source": "多家法律博客转引"
   },
   {
    "item": "微软法国子公司承认无法保证对美主权（2025.6）",
    "level": "C2",
    "source": "媒体转引（[待核实]）"
   },
   {
    "item": "AWS 2021 年暂停 Parler、提前约 24 小时通知、标出 98 条帖子",
    "level": "C2",
    "source": "TechCrunch / CNBC 转引"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "2021 年 1 月，AWS 暂停社交平台 Parler 的云服务。据报道，AWS 提前约 24 小时通知，理由是 Parler 无法有效识别和删除煽动暴力的内容，AWS 称已向其标出 98 条明显煽动暴力的帖子（C2，TechCrunch / CNBC 转引）。Parler 因此下线，起诉 AWS 未果，法官拒绝恢复其服务（C2，NPR 转引）。这是\"云商凭所有权、按服务条款单方面拒绝一个客户\"的典型案例，展示了控制面级别的下线能有多快、多彻底。另一条相关线索是欧盟\"主权云\"争议（见 §4），属于主权层对这一节点的持续争夺，尚在演化中。"
  },
  "gaps": [
   "正式拆解时需补的一手件：",
   "1. Synergy Research 或 Canalys 的季度云市场份额原始报告（准确份额与口径）。",
   "2. AWS/微软/谷歌各自最新 10-K 年报里的云段营收拆分。",
   "3. 阿里巴巴年报（6-K / 20-F）里的阿里云国际与境内营收拆分。",
   "4. 美国 CLOUD Act 法律原文（18 U.S.C. §2713）及司法部说明。",
   "5. AWS \"欧洲主权云\" 与微软 \"EU Data Boundary\" 的官方承诺原文，看法律实体归属与拒绝 CLOUD Act 命令的承诺是否存在。",
   "6. 具体的政府命令/法院令导致云商断供境外客户的公开案例（除商业 ToS 拒绝外）。",
   "7. 中国境内云市场（阿里/腾讯/华为）份额的权威统计。"
  ]
 },
 "re-filter": {
  "sourceFile": "re-filter.md",
  "archiveId": "re-filter",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "这个节点讲的是\"一个人或一个地区，还能不能正常访问互联网服务\"这件事怎么被国家层面的力量决定。它有两个方向的力量：一头是**国家对内的过滤与封锁**——政府关掉本国的网络出口、屏蔽特定网站（如国家级防火墙、断网）；另一头是**国家对外的制裁下架**——美国 OFAC 制裁体系要求受美国管辖的公司按地理位置封掉被制裁国家和地区的用户，连开源代码托管、软件包仓库这类看似中立的基础设施也被卷进来。这不是一个单纯的技术节点，更像政治栈里的一层控制力，它作用于前面几乎所有技术节点（云、CDN、DNS、支付）。它是不是硬卡点，取决于被封方有没有绕行手段——而绕行手段往往存在，但要付出成本和风险。",
  "holders": [
   {
    "entity": "美国财政部 OFAC",
    "role": "对外制裁下架的主要来源",
    "scale": "依据：制裁法律与行政令，要求美国公司封锁被制裁国家/地区用户（C2，GitHub 贸易管制说明转引）",
    "jurisdiction": "美国联邦",
    "group": null
   },
   {
    "entity": "各国政府（India/Myanmar/Pakistan/Russia 等）",
    "role": "对内过滤/断网的行使方",
    "scale": "依据：本国法律/行政命令；2024 年四国合计 210 次断网、占全球七成以上（C2，Access Now 转引）",
    "jurisdiction": "各自主权",
    "group": null
   },
   {
    "entity": "中国（国家级防火墙）",
    "role": "大规模常态化对内过滤",
    "scale": "依据：本国法律与网络管理制度（惯例已固化）",
    "jurisdiction": "中国",
    "group": null
   },
   {
    "entity": "GitHub / npm（微软系）等平台",
    "role": "制裁的执行落地方",
    "scale": "依据：合规义务，按 IP/支付/其他信号识别用户所在地并限制（C2，GitHub Docs 转引）",
    "jurisdiction": "美国法域",
    "group": null
   },
   {
    "entity": "电信运营商 / ISP",
    "role": "断网、封锁的技术执行方",
    "scale": "依据：政府指令",
    "jurisdiction": "各自主权",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "成本增加",
   "verdictRaw": null,
   "unstructured": false,
   "text": "总判：成本增加"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模（可量化的行使记录）",
    "text": "断网行使记录：据报道，2024 年 Access Now 与 KeepItOn 联盟记录到 54 个国家共 296 次断网，超过 2023 年 39 国 283 次的纪录（C2，Access Now 2024 年报转引）。据报道 Myanmar 以 85 次首次超过 India（84 次）成为最大来源（C2，同上）。",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化（可量化的行使记录）",
    "text": "据报道，2024 年 India、Myanmar、Pakistan、Russia 四国合计 210 次断网，占全球七成以上（C2，Access Now 转引）。制裁一侧，据报道 GitHub 受制裁清单覆盖约 6 个国家/地区（克里米亚、顿卢分离区、古巴、伊朗、朝鲜、叙利亚）（C2，GitHub Docs 转引，[待核实]）。OFAC 制裁名单（SDN List）具体条目数待研究（草图未覆盖，正式拆解需查 OFAC 原始数据）。",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "2024 年全球 296 次断网、涉 54 国",
    "level": "C2",
    "source": "Access Now / KeepItOn 2024 年报转引"
   },
   {
    "item": "Myanmar 85 次首次超过 India",
    "level": "C2",
    "source": "同上"
   },
   {
    "item": "India/Myanmar/Pakistan/Russia 四国合计 210 次、占七成以上",
    "level": "C2",
    "source": "同上"
   },
   {
    "item": "GitHub 受制裁清单覆盖约 6 国/地区",
    "level": "C2",
    "source": "GitHub Docs 转引（[待核实]）"
   },
   {
    "item": "GitHub 2019 起限制伊朗/叙利亚/克里米亚账户",
    "level": "C2",
    "source": "TechCrunch 2019 / GitHub Docs 转引"
   },
   {
    "item": "GitHub 后获 OFAC 许可恢复对伊朗部分服务",
    "level": "C2",
    "source": "developer-tech 转引（[待核实]）"
   },
   {
    "item": "npm 阻断伊朗发布、下载通常仍可",
    "level": "C2",
    "source": "媒体转引（[待核实]）"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "2019 年 7 月起，GitHub 依据美国出口管制与制裁法律，限制伊朗、叙利亚、克里米亚等地开发者的账户功能（付费功能、私有仓库等）（C2，TechCrunch 2019 / GitHub Docs 转引）。据报道，npm（同属微软/GitHub）也对伊朗账户做类似限制，从伊朗发布软件包被有效阻断，但下载软件包因被视为\"公开可得信息\"通常仍可进行（C2，媒体转引，[待核实]）。后来 GitHub 拿到 OFAC 许可，得以恢复对伊朗开发者的部分服务（C2，developer-tech 转引，[待核实]）。这个案例把这层控制的特点摆得很清楚：一条制裁规则，通过美国法域内的平台，自动按地理位置把一整国的开发者挡在门外，误伤大量与制裁目标无关的普通人；而\"下载可以、发布不行\"这种细分，又显示执行方在合规和可用之间反复拿捏。"
  },
  "gaps": [
   "正式拆解时需补的一手件：",
   "1. Access Now / KeepItOn《2024 年断网年报》原文（PDF），核对次数、国别与触发原因分类。",
   "2. 美国 OFAC 制裁法规原文与 SDN List 条目统计（财政部官网）。",
   "3. GitHub《贸易管制》政策原文（site-policy）与获批 OFAC 许可的官方公告。",
   "4. npm 的制裁合规政策原文，核对\"发布被阻、下载可行\"的准确边界。",
   "5. 中国国家级防火墙的技术与制度依据研究（第三方测量报告，如 OONI）。",
   "6. OONI / Censored Planet 等对各国过滤的实测数据，把\"封了什么\"落到可查证的测量上。",
   "7. 具体的开源项目/服务因 OFAC 地理封锁下架的公开案例清单，评估误伤规模。",
   "8. VPN/绕行工具在高强度封锁下的实际可用性研究，判断退路是否真成立。"
  ]
 },
 "re-narr": {
  "sourceFile": "re-narr.md",
  "archiveId": "re-narr",
  "established": "2026-07-08",
  "updated": "2026-07-08",
  "cLevelOverall": "C2",
  "sketch": true,
  "opening": "这个节点是一套关于数据和网络该归谁管的说法。\"数字主权\"\"数据主权\"\"网络主权\"\"数据本地化\"这些词，在过去十来年从学术讨论变成了各国的立法语言。它的作用是给一批具体政策提供理由：为什么要求数据必须存在本国境内、为什么要建国家防火墙、为什么要补贴本土云服务而不用外国云。谁依赖它？主要是想推动这些政策的政府（中国、俄罗斯是最早最彻底的，欧盟是另一种版本），以及想借此拿到市场的本土云和数据中心厂商。它是不是卡点？它本身不切断任何一个数据包，但它决定一个国家愿不愿意去建那些真正能切断或圈住数据流的设施（防火墙、境内存储要求、跨境传输审批）。它属于政治栈人心那一层，同时又特别贴近技术安排——因为\"计算本身即是治理\"，一套数字主权叙事往往直接被写成技术架构（哪些流量放行、哪些拦截、数据存哪里）。\n\n---",
  "holders": [
   {
    "entity": "中国政府",
    "role": "\"网络主权\"叙事最早、最系统的生产者，直接做成硬管制",
    "scale": "习近平于 2015-12-16 乌镇第二届世界互联网大会系统提出\"尊重网络主权\"（C2，多方报道）；2017-06《网络安全法》含关键信息基础设施数据本地化（C2）",
    "jurisdiction": "中国",
    "group": null
   },
   {
    "entity": "俄罗斯政府",
    "role": "\"主权互联网\"叙事，追求可与全球网络隔离",
    "scale": "数据本地化法 242-FZ 自 2015-09 生效；\"主权互联网法\"90-FZ（C2，学术/媒体转引）",
    "jurisdiction": "俄罗斯",
    "group": null
   },
   {
    "entity": "欧盟委员会及成员国",
    "role": "\"数字主权/战略自主\"，以数据保护为主要框架",
    "scale": "GDPR（2018 生效）管跨境传输条件而非强制本地存储（C2，学术转引）",
    "jurisdiction": "欧盟",
    "group": null
   },
   {
    "entity": "本土云与数据中心厂商",
    "role": "借叙事拿市场，为政策游说",
    "scale": "待研究",
    "jurisdiction": "各法域",
    "group": null
   },
   {
    "entity": "数据保护机构与智库",
    "role": "加工与放大叙事",
    "scale": "待研究",
    "jurisdiction": "多法域",
    "group": null
   }
  ],
  "upstream": [],
  "downstream": [],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": null,
   "unstructured": false,
   "text": "总判：仍在运营"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "叙事本身没有市场规模。可间接观察的是它背书的资金流：全球数据本地化要求催生的本地数据中心投资、本土云补贴、跨境合规成本。具体数字待研究（草图未覆盖）。",
    "cLevels": []
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "可量化的行使记录：立有数据本地化法的国家数量（据行业统计逐年增加，C2 [待核实]，具体数字待研究）、以\"网络/数据主权\"为据封禁或限制的外国服务清单、跨境数据传输审批的数量。精确数字待研究（草图未覆盖）。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "习近平 2015-12-16 乌镇系统提出\"尊重网络主权\"",
    "level": "C2",
    "source": "多方报道"
   },
   {
    "item": "中国 2017-06《网络安全法》含关键信息基础设施数据本地化",
    "level": "C2",
    "source": "多方转引"
   },
   {
    "item": "俄罗斯数据本地化法 242-FZ 自 2015-09 生效",
    "level": "C2",
    "source": "学术/媒体转引"
   },
   {
    "item": "俄罗斯\"主权互联网法\"90-FZ",
    "level": "C2",
    "source": "学术/媒体转引"
   },
   {
    "item": "GDPR 管跨境传输条件而非强制本地存储",
    "level": "C2",
    "source": "学术转引"
   },
   {
    "item": "立数据本地化法的国家数量逐年增加",
    "level": "C1",
    "source": "行业统计 [待核实]"
   }
  ],
  "contested": {
   "title": "最近一次被争夺的事件",
   "summary": "叙事被写进官方语言、并被公开争夺的几个可指名节点：习近平于 2015-12-16 在乌镇第二届世界互联网大会系统提出\"尊重网络主权\"，把它讲成《联合国宪章》主权平等原则在网络空间的延伸，意在联合他国对冲西方的互联网治理主张（C2，多方报道）——这是\"网络主权\"进入国际话语场、被公开争夺的标志性事件。另一条线：俄罗斯 2015-09 生效的数据本地化法 242-FZ 与后来的\"主权互联网法\"90-FZ，把叙事落成隔离能力（C2，学术/媒体转引）。欧盟一侧则以 GDPR（2018）和\"数字主权/战略自主\"话语，与美国的跨境数据流动主张持续争夺（C2，学术转引）。"
  },
  "gaps": [
   "正式拆解时要补的一手件：",
   "1. 习近平 2015-12-16 乌镇世界互联网大会讲话原文，核对\"网络主权\"表述。",
   "2. 中国《网络安全法》（2017）与《数据安全法》《个人信息保护法》（2021）原文中本地化条款。",
   "3. 俄罗斯 242-FZ、90-FZ 法律原文。",
   "4. 欧盟 GDPR 原文中跨境传输章节，以及\"数字主权/战略自主\"官方文件。",
   "5. 各国数据本地化法的权威汇编（如某数据治理年度国别报告），核对国家数量与逐年趋势。",
   "6. 印度、印尼、巴西等发展型版本的数据保护/本地化法原文。",
   "7. 本土云补贴与\"政府必须用本国云\"政策的一手文件。"
  ]
 },
 "re-polysilicon": {
  "sourceFile": "re-polysilicon.md",
  "archiveId": "re-polysilicon",
  "established": "2026-06-21",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": "卡点不在「能不能造」，在「造了能不能不亏死」——一个电力 + 价格战的护城河\n\n多晶硅是一种工艺成熟几十年的大宗化工品。西门子法（高纯硅从三氯氢硅气相沉积）不是秘密，Wacker、Hemlock、OCI 都会做，专利早过期。所以这个节点和 EUV 光学（连失败的第二家都没有）是**两种完全不同的卡点**：多晶硅不是技术单点，是**经济单点**——全世界都会造，但只有中国能造到一个让别人复产就亏死的价格。\n\n中国占全球太阳能级多晶硅产量约 **90%+**（2023，行业共识 C3，BloombergNEF/Bernreuter 口径待核——任务给的「≥85%」是偏保守的旧口径，2023 后多数行业报告给到 93% 上下）。这个份额不是地质给的（多晶硅原料是石英砂 + 冶金级硅，不稀），是**三件事叠出来的**：① 廉价电力——多晶硅提纯极度耗电，每公斤耗电约 50–60 kWh（行业口径，C3 待核），所以产能向中国西部（新疆、内蒙古）的廉价燃煤电力集中；② 规模 + 国家产业政策托底；③ 愿意承担高耗能/高碳的环境成本。\n\n第二个要害：**地理集中在中国内部还要再缩一圈。** 中国多晶硅产能高度集中在**新疆 + 内蒙古**（燃煤坑口电价）。新疆这个事实把多晶硅直接焊到了一个政治接口上——美国《维吾尔强迫劳动预防法》（UFLPA）。这是本节点和稀土/镓最不一样的地方：稀土镓的政治杠杆是**中国向外掐出口**，多晶硅的活跃杠杆反过来是**美国向内掐进口**（UFLPA 对涉疆多晶硅推定禁入）。同一个「中国独占」结构，政治传动的方向相反。\n\n第三个要害,也是和镓最像的地方:**护城河是价格战不是 know-how。** 2023–2024 中国多晶硅严重产能过剩,价格从 2022 年约 $40/kg 高点崩到 2024 年低于现金成本(约 $5–7/kg,C2 待核),全行业巨亏。这恰恰是中国卡点的运行方式——它不需要禁运,它用过剩产能把价格压到所有西方复产项目活不下去(REC Silicon 在 Moses Lake 的多晶硅复产就在这轮价格战 + 质量问题里折戟,C2 待核)。**镓是「放弃数亿副产市场当武器」,多晶硅是「砸出过剩产能把价格打穿当武器」,两者都是经济性壁垒,不是技术壁垒。**\n\n一个必须分清的边界:本节点是**太阳能级**多晶硅(6N–9N)。还有一个**半导体级**多晶硅(11N,喂 ac-fab 的硅晶圆),那是另一个市场、另一个集中度方向——半导体级由美国 Hemlock、德国 Wacker、日本 Tokuyama、韩国 OCI 主导,中国份额低。别把两者混成一个「多晶硅」。半导体级的集中度画像更接近 ac 栈,值得在 ac-fab 下另记或单拆,不在本节点。\n\n---",
  "holders": [
   {
    "entity": "通威股份(Tongwei,SH: 600438)",
    "role": "全球最大多晶硅产能",
    "scale": "全球约 individual-digit×10%,常列第一",
    "jurisdiction": "中国(四川/内蒙古/云南)",
    "group": "太阳能级多晶硅(企业层,份额为行业报道口径,C2–C3 待年报/BNEF 核):"
   },
   {
    "entity": "协鑫科技(GCL Tech,HK: 3800)",
    "role": "FBR 颗粒硅领跑",
    "scale": "全球前列",
    "jurisdiction": "中国(新疆/内蒙古/四川乐山)",
    "group": "太阳能级多晶硅(企业层,份额为行业报道口径,C2–C3 待年报/BNEF 核):"
   },
   {
    "entity": "大全能源(Daqo,NYSE: DQ / SH: 688303)",
    "role": "纯多晶硅商",
    "scale": "全球前列",
    "jurisdiction": "中国(新疆石河子 + 内蒙古)",
    "group": "太阳能级多晶硅(企业层,份额为行业报道口径,C2–C3 待年报/BNEF 核):"
   },
   {
    "entity": "新特能源(Xinte,特变电工子公司)",
    "role": "大型多晶硅商",
    "scale": "全球前列",
    "jurisdiction": "中国(新疆)",
    "group": "太阳能级多晶硅(企业层,份额为行业报道口径,C2–C3 待年报/BNEF 核):"
   },
   {
    "entity": "东方希望 / 其他中国厂",
    "role": "产能",
    "scale": "合计可观",
    "jurisdiction": "中国",
    "group": "太阳能级多晶硅(企业层,份额为行业报道口径,C2–C3 待年报/BNEF 核):"
   },
   {
    "entity": "Wacker Chemie(WCH: 德)",
    "role": "非中最大",
    "scale": "全球约 individual-digit%",
    "jurisdiction": "德国 + 美国田纳西",
    "group": "太阳能级多晶硅(企业层,份额为行业报道口径,C2–C3 待年报/BNEF 核):"
   },
   {
    "entity": "OCI(韩)",
    "role": "非中",
    "scale": "小",
    "jurisdiction": "韩国总部 + 马来西亚产能",
    "group": "太阳能级多晶硅(企业层,份额为行业报道口径,C2–C3 待年报/BNEF 核):"
   },
   {
    "entity": "Hemlock(美)",
    "role": "半导体级为主",
    "scale": "太阳能级小",
    "jurisdiction": "美国密歇根",
    "group": "太阳能级多晶硅(企业层,份额为行业报道口径,C2–C3 待年报/BNEF 核):"
   },
   {
    "entity": "REC Silicon(挪威/美)",
    "role": "Moses Lake 复产受挫",
    "scale": "~0(停产)",
    "jurisdiction": "美国华盛顿州",
    "group": "太阳能级多晶硅(企业层,份额为行业报道口径,C2–C3 待年报/BNEF 核):"
   }
  ],
  "upstream": [
   "**冶金级硅(MG-Si,隐形真上游)**:多晶硅的原料。中国同样主导,且**合盛硅业(Hoshine)是全球最大金属硅生产商**,主力在新疆——CBP 2021-06 对合盛下过 WRO(强迫劳动扣留令),它是 UFLPA 涉疆链的源头节点。值得登记子节点 **re-metsilicon**(冶金级硅,新疆集中 + Hoshine WRO,是整条光伏链 UFLPA 暴露的物理根)。C3。",
   "**电力(隐形真上游,本节点的物理命门)**:多晶硅提纯每公斤耗电约 50–60 kWh(C3 待核),产能选址=哪里电便宜。中国新疆/内蒙古燃煤坑口电价是 90%+ 份额的物理根。这条直接跨 en 栈(燃煤)+ re 栈,且是「中国靠廉价(高碳)电力主导清洁能源制造」这个悖论的核心。进因果层。",
   "**三氯氢硅 / 工业气体(工艺原料)**:西门子法的中间体,集中度待核。",
   "**新废料 / 工程化良率(know-how 边角)**:技术不秘密,但把现金成本做到中国水平的工程化是软壁垒。"
  ],
  "downstream": [
   "**致命依赖:硅片厂(拉晶/切片)**。多晶硅是硅片唯一原料。中国硅片更集中(隆基 + TCL 中环双寡头,全球约 90%+,C2)——多晶硅断料,硅片厂立即停。接 re-wafer(待登记/拆)。",
   "**高依赖:整条晶硅光伏链 → 电池片 → 组件 → 全球光伏装机**。接 re-solar-module。全球约 95% 组件是晶硅路线。",
   "**可缓冲:薄膜光伏(First Solar 碲化镉)**。完全不用多晶硅,但全球份额小、产能扩张慢,只能缓冲不能替代。",
   "**跨市场:半导体级多晶硅 → ac-fab**(不同纯度、不同集中度,中国份额低,本节点不覆盖)。",
   "买家侧份额与成本占比:多晶硅占组件成本历史上约 **10–20%**(高价期),2024 价格崩后降到约 individual-digit%(C2 待核)。下游对本节点的产能敞口:硅片厂多晶硅库存通常只够数周(C2),断料即停线。**典型「成本占比中等、断供致命」节点**——但要注意,这里美国下游的真实痛点不是「中国断供」(中国巴不得多卖),而是「UFLPA 让中国货进不来 + 非中货又贵又少」,是**进口侧自设的卡点**。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "分层判,这是本节点和 EUV 最不一样、和镓最像的地方——**fallback 真存在,但脆在经济性:**\n\n**非中产能层缓冲:`partial`(已在运行但极小且脆)**\nWacker(德 + 美田纳西)、OCI(马来西亚)在产,Hemlock 有太阳能级产能。过五问:替代供给来源 / 已在运行(operational)/ 卡在「成本比中国高 + 规模太小」/ 私营 + 各国 / 现场有执行能力(在产)。结论:**非中多晶硅供给是真的(operational),但份额个位数百分比、且只在 UFLPA/IRA 保护的价格溢价里才活得下去**。判 `partial`,且经济独立性弱——一旦失去政策保护,会被中国价格战压死。\n\n**美国本土复产层:`planned → blocked(经济性)`**\nIRA 45X 制造补贴 + UFLPA 进口壁垒理论上给美国多晶硅复产创造了「保护性价格溢价」。但 REC Silicon 的 Moses Lake 复产在 2024–2025 价格战 + 质量问题里受挫/停产(C2 待核)。过五问:替代本土产能 / 多久=数年 / 卡在中国价格战 + 良率/质量 + 下游(美国硅片产能几乎为零,造出多晶硅没本土硅片接)/ 谁启动=IRA 补贴 + 私营 / 现场执行能力=部分有但 Moses Lake 折戟说明执行风险高。结论:**`possible reroute`,不是 fallback**——有补贴和保护这个「种子」,但本土全链(多晶硅→硅片→电池→组件)缺环,且复产经济性受中国压价威胁。\n\n**薄膜技术绕路:`partial`(独立但小)**\nFirst Solar 碲化镉完全不用多晶硅,是真正独立的技术旁路,operational。但全球份额小、碲本身有供给约束、扩产慢。判 `partial`——能缓冲一部分美国市场(IRA 重点扶持),不能替代全球晶硅主流。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **全球太阳能级多晶硅市场(行业口径,C2–C3 待核)**:2022 高价期约 **$250–300 亿**(高价 × 量);2023 约 **$200–250 亿**(任务口径);2024 价格崩后**显著缩水**(价跌过半,纵使量增,产值大幅下滑)。多晶硅市场规模高度随价格波动,不是稳定数字。\n- 数量级判断:多晶硅本体年值数百亿美元,但它卡着的全球光伏装机年投资是**万亿美元级**(IEA 口径)——又一个「本体市值小、向下耦合的终端市场大」的杠杆背离节点,与稀土/镓同属 Magnitude Layer 标注对象,但背离倍数小于稀土镓(多晶硅本体几百亿,不是几亿)。\n\n【缺口:全球多晶硅市场各年精确值——需 BloombergNEF / Bernreuter Research / Wood Mackenzie 报告。】",
    "cLevels": [
     "C2–C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 太阳能级多晶硅产量层:CR1(中国)≈ **90%+**(2023,行业共识 C3,精确值待 BNEF/Bernreuter)。\n- 企业层 CR4(通威+协鑫+大全+新特):全球约 **70%+**(C2 待核)。\n- price maker:**中国厂集体 + 过剩产能下的边际现金成本**——过剩期价格由谁能撑到最后(现金成本最低者)决定,中国厂凭电价 + 规模坐最低现金成本位。\n- 中国内部新疆集中度:约 1/3–1/2(C2,需 Sheffield Hallam/BNEF 核)。\n- 集中度沿链方向:多晶硅(90%+)→ 硅片(隆基/中环 90%+)→ 电池/组件(中国仍主导但稍分散)。**上中游(硅料+硅片)是全链最硬的两格**,本节点是其一。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 利润率 | 市值/估值 | 来源 |\n|---|---|---|---|---|\n| 通威股份(SH: 600438)| 【缺口:2023 约 CNY 1391 亿口径待核,2024 巨亏】| 2024 转亏 | 上市 | 需年报 |\n| 协鑫科技(HK: 3800)| 【缺口:需年报】| 2024 承压 | 上市 | 需年报 |\n| 大全能源(NYSE: DQ)| 【缺口:2023 约 $20 亿量级待核,2024 亏】| 2022 高峰高利,2024 转亏 | 上市 | 需 20-F/年报 |\n| 新特能源(特变电工子)| 【缺口:需年报】| — | A 股/拟上市 | 需年报 |\n| Wacker Chemie(德)| 【缺口:集团约 €60 亿+,多晶硅为一个板块】| 多晶硅板块随价波动 | 上市 | 需年报 |\n| OCI(韩)| 【缺口:需年报】| — | 上市 | 需年报 |\n\n资本纵深判断(结构,C2):中国头部(通威/大全)2022 高价期积累了厚利润 + 国家产业政策托底,资本纵深足以打 2–3 年价格战巨亏而不倒;Wacker/OCI 靠半导体级 + 保护市场维持,纵深有限;REC Silicon 已被价格战逼退。**这套财务分布正是中国能用价格战清场的根:头部有积累 + 有补贴扛得住亏,西方边际产能扛不住。**\n\n【缺口:全部具体营收/利润率/市值——需通威/协鑫/大全/新特/Wacker/OCI 年报,本轮未取,现为行业报道量级。】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **下游成本敞口(中等且下降)**:多晶硅占组件成本历史约 10–20%(高价期),2024 价崩后降至约 individual-digit%(C2 待核)。\n- **下游产能敞口(致命)**:硅片厂多晶硅库存通常数周级(C2),断料即停线。但**美国侧的真实敞口是反向的**:不是怕中国断供,是 UFLPA 让中国货进不来 + 非中货又贵又少,美国光伏装机被迫付溢价或延期。\n- **嵌入成品的隐性依赖**:多晶硅以硅片/电池/组件形式跨境,真实依赖深于多晶硅本体进口统计——这正是 UFLPA 溯源执法的技术难点。\n- **UFLPA 执法量级**:CBP 自 2022-06 起扣留大批光伏组件(累计货值数十亿美元级,C2)。【缺口:CBP UFLPA 执法统计(扣留/放行货值、太阳能板块占比)——CBP 公开 dashboard 待取。】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **现行活跃冲击(UFLPA 侧)**:CBP 扣留光伏组件累计数十亿美元货值(C2),推高美国光伏装机成本、延后项目。【缺口:Wood Mackenzie / SEIA 关于 UFLPA 对美国光伏装机成本与进度影响的量化报告。】\n- **价格战冲击(产业侧)**:2023–2024 价格崩(从约 $40 到 $5–7/kg,C2),中国全行业多晶硅环节巨亏、产能出清,REC Silicon 等非中复产折戟。\n- **假想中国断供冲击(推算 C2)**:中国不太可能主动断多晶硅出口(它想卖),但若以**工艺技术出口管制**卡西方复产能力,会延长西方追赶时间数年。量级以「全球光伏装机进度 + 西方本土化时间债」计,不在多晶硅本体市场(几百亿)而在装机终端(万亿级)。\n- 【缺口:权威机构对「多晶硅环节断裂/技术封锁对全球光伏部署」的量化——需 IEA / BNEF / Wood Mackenzie 专题。】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链利润分布**随周期剧烈摆动**,这是多晶硅最特别的财务特征:\n\n- **2021–2022 短缺期**:利润高度沉淀在**多晶硅环节**(短缺→大全/通威 record 毛利),下游硅片/电池/组件被上游挤。\n- **2023–2024 过剩期**:多晶硅环节**转为全链最亏**(产能过剩→价格穿现金成本),利润(微薄)反而偏向更下游或一体化龙头的内部调剂。\n- 长期结构:利润在「谁这一年短缺/过剩」之间来回甩,不像 EUV(永远 ASML)那样稳定沉淀一端。\n\n政治压力首先打到谁:① UFLPA 侧 first payer = 美国光伏开发商/进口商(扣货、延期、付溢价)+ 中国组件出口商(失美国市场);② 价格战侧 first payer = 非中多晶硅厂(被压死)+ 西方复产项目(亏到关停)。**注意:中国头部多晶硅厂在价格战里自己也巨亏,但它扛得住(积累+补贴),这正是它清场的方式——自残式压价,赌对手先死。**\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "中国占全球太阳能级多晶硅产量约 90%+",
    "level": "C3",
    "source": "行业共识(IEA 2022/BNEF/Bernreuter,待回原文)"
   },
   {
    "item": "中国产能高度集中新疆 + 内蒙古(燃煤电力)",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "多晶硅提纯每公斤耗电约 50–60 kWh",
    "level": "C3",
    "source": "行业口径"
   },
   {
    "item": "中国四大(通威/协鑫/大全/新特)CR4 约 70%+",
    "level": "C2",
    "source": "行业报道推算"
   },
   {
    "item": "Wacker/OCI/Hemlock 非中合计约个位数%",
    "level": "C2",
    "source": "行业报道推算"
   },
   {
    "item": "UFLPA 2022-06-21 生效,光伏高优先级,涉疆推定禁入",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "CBP 对合盛硅业(Hoshine)2021-06 WRO",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "2022 多晶硅价摸约 $40/kg,2023–24 崩至约 $5–7/kg",
    "level": "C2",
    "source": "行业报道"
   },
   {
    "item": "REC Silicon Moses Lake 复产 2024–25 受挫/停产",
    "level": "C2",
    "source": "报道"
   },
   {
    "item": "中国 2023 技术出口管制涉部分光伏工艺",
    "level": "C2",
    "source": "报道"
   },
   {
    "item": "多晶硅占组件成本约 10–20%(高价期)",
    "level": "C2",
    "source": "行业口径"
   },
   {
    "item": "全球多晶硅市场 2023 约 $200–250 亿",
    "level": "C2",
    "source": "任务口径/行业推算"
   },
   {
    "item": "卡点是经济性/价格战壁垒,非技术单点",
    "level": "C3",
    "source": "结构判断(西门子法成熟 + 价格战史)"
   },
   {
    "item": "政治传动方向与稀土镓相反(美国掐进口 vs 中国掐出口)",
    "level": "C3",
    "source": "结构判断(UFLPA vs 出口管制)"
   }
  ],
  "contested": {
   "title": "UFLPA 2022-06-21 生效 + CBP 在美国港口对涉疆多晶硅组件实施扣押（Hoshine WRO 前奏、UFLPA 后大规模执法）",
   "summary": "**动作一：校准颗粒度**"
  },
  "gaps": [
   "1. 【缺口:需要 BloombergNEF / Bernreuter Research 多晶硅市场报告】中国及各厂精确产量份额(t/年 + 全球占比)、CR4、市场规模各年值、价格序列(2021–2025)——这是 Q1/Q2/结构层 3/4 的量化骨架,现全为行业报道量级,优先级最高。",
   "2. 【缺口:需要 UFLPA 法律文本(Public Law 117-78)+ CBP UFLPA 执法 dashboard + Hoshine WRO 公告原文】政治传动层 A/B/E 的文号与执法货值统计——这是本节点活跃政治杠杆的一手文本。",
   "3. 【缺口:需要 IEA《Solar PV Global Supply Chains》(2022)报告】中国各环节份额的权威原文,把 90%+ 从 C3 升 verified;新疆地理集中度。",
   "4. 【缺口:需要通威/协鑫/大全/新特/Wacker/OCI 年报】各家营收/利润率/市值(Q3)——判各方扛价格战的资本纵深,现全为缺口。",
   "5. 【缺口:需要 Sheffield Hallam「In Broad Daylight」类报告 / BNEF】新疆占中国多晶硅产能精确比例——决定 UFLPA 暴露面大小。",
   "6. 【缺口:需要中国《禁止出口限制出口技术目录》2023 修订原文】光伏工艺受控条目——政治传动层 A 中国反制接口的一手文本。",
   "7. 【缺口:需要 Wood Mackenzie / SEIA 报告】UFLPA 对美国光伏装机成本/进度的量化冲击(Q5)。",
   "8. 【缺口:子节点 re-metsilicon】冶金级硅(新疆 + Hoshine WRO,光伏链 UFLPA 物理根)+ re-wafer(隆基/中环硅片双寡头,中国技术出口管制对象),均值得单独建节点。\n---"
  ]
 },
 "re-solar-module": {
  "sourceFile": "re-solar-module.md",
  "archiveId": "re-solar-module",
  "established": "2026-06-21",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": "这一格谁都能装，所以它是整条链里最先被夺回、也最容易作假的一格\n\n组件组装是光伏链上技术含量最低的一格。把电池片串焊、层压、装边框接线盒——设备成熟、自动化程度高、不要稀有 know-how，一条 GW 级产线一年内就能建起来。这是它和 re-polysilicon（西门子法 + 廉价电力 + 价格战三重护城河）最根本的区别：多晶硅是**造得起活不下去**，组件是**谁都造得起、也活得还行**。\n\n所以这一格的卡点最浅。真正的硬卡点全在它上游——多晶硅（中国 90%+）、硅片（隆基/中环 ~97%）、电池片（中国 85%+）。组件这层中国系占全球产能约 **80%+**（2023，行业共识 C3），但这个 80% 是**沿链单调递减后最松的一档**：硅片 97% → 电池片 ~85% → 组件 ~80%。越往下游越散，因为越往下游越容易复制。\n\n这就决定了组件这一格的政治战长什么样：**不是争「能不能造」（谁都能造），是争「中国系的组件能不能假装成不是中国系的进来」。** 美国 2012/2014 对华组件双反后，中国厂把组装产线搬到东南亚（马来、越南、泰国、柬埔寨），用中国电池片在当地拼成「东南亚组件」绕关税。于是过去十年美国侧的活跃动作不是封多晶硅，是**一轮轮反规避（anti-circumvention）**：查转口、查实质性改造够不够、对四个东南亚国家加征 AD/CVD。组件这一格的杠杆形式是**溯源与转口认定**，不是产能独占。\n\n一句话定位：组件是整条 re 链里**最容易夺回组装、又最容易被掏空**的一格——你能在美国建起 50 GW 组件产能（IRA 已经做到），但电池片/硅片/多晶硅还在中国，你装的是「美国壳、中国芯」。组件回流的政治意义，取决于上游回流没回流；单独看组件这格，卡点判断会被它的「易回流」骗成乐观。\n\n---",
  "holders": [
   {
    "entity": "晶科能源（JinkoSolar，NYSE: JKS / SH: 688223）",
    "role": "全球组件出货常年第一梯队",
    "scale": "全球前列（~10%+ 量级）",
    "jurisdiction": "中国（+ 马来西亚/美国佛州产线）",
    "group": "组件（企业层，份额为出货报道口径，C2–C3 待年报/BNEF 核）："
   },
   {
    "entity": "隆基绿能（LONGi，SH: 601012）",
    "role": "一体化龙头（硅片+组件）",
    "scale": "全球前列",
    "jurisdiction": "中国",
    "group": "组件（企业层，份额为出货报道口径，C2–C3 待年报/BNEF 核）："
   },
   {
    "entity": "天合光能（Trina，SH: 688599）",
    "role": "Tier-1 组件",
    "scale": "全球前列",
    "jurisdiction": "中国（+ 东南亚/美国产线）",
    "group": "组件（企业层，份额为出货报道口径，C2–C3 待年报/BNEF 核）："
   },
   {
    "entity": "晶澳科技（JA Solar，SZ: 002459）",
    "role": "Tier-1 组件",
    "scale": "全球前列",
    "jurisdiction": "中国",
    "group": "组件（企业层，份额为出货报道口径，C2–C3 待年报/BNEF 核）："
   },
   {
    "entity": "阿特斯（Canadian Solar，NASDAQ: CSIQ）",
    "role": "Tier-1 组件",
    "scale": "全球前列",
    "jurisdiction": "总部加拿大/运营中国",
    "group": "组件（企业层，份额为出货报道口径，C2–C3 待年报/BNEF 核）："
   },
   {
    "entity": "First Solar（NASDAQ: FSLR）",
    "role": "非中最大，碲化镉薄膜",
    "scale": "全球 individual-digit%",
    "jurisdiction": "美国（亚利桑那）",
    "group": "组件（企业层，份额为出货报道口径，C2–C3 待年报/BNEF 核）："
   },
   {
    "entity": "Hanwha Qcells（韩资）",
    "role": "非中晶硅组件",
    "scale": "小",
    "jurisdiction": "韩国总部 + 美国佐治亚",
    "group": "组件（企业层，份额为出货报道口径，C2–C3 待年报/BNEF 核）："
   },
   {
    "entity": "Waaree / Adani（印度）",
    "role": "印度本土",
    "scale": "小（本土为主）",
    "jurisdiction": "印度",
    "group": "组件（企业层，份额为出货报道口径，C2–C3 待年报/BNEF 核）："
   }
  ],
  "upstream": [
   "组件的「绕不开」几乎全部在上游——这是本节点的要害：",
   "**致命真上游：电池片（cell）**。组件唯一核心料。中国电池片约 **85%+**（C3）。非中组装产线（含美国 50 GW）几乎都靠进口中国电池片——这是「美国壳、中国芯」的核心。值得登记子节点 **re-cell**（电池片，中国 85%+，TOPCon/HJT 技术迭代层，AD/CVD 反规避的真正靶心）。",
   "**再上游：硅片（re-wafer）→ 多晶硅（re-polysilicon）**。整条链向上每一格都比组件更集中（硅片 97%、多晶硅 90%+）。组件回流但上游不回流 = 空壳。",
   "**玻璃/边框/接线盒/EVA 封装胶膜/银浆**：① 光伏玻璃——中国信义光能 + 福莱特双寡头主导，本身是一个高集中度子节点（值得登记 re-solarglass）；② 银浆（金属化浆料）——含银，且高端银浆曾依赖日系（贺利氏/杜邦背景），是隐形物料点；③ EVA/POE 封装胶膜——中国福斯特主导。这些是组件层自己的隐形物料卡点，多数仍中国集中。",
   "**组装设备/自动化**：壁垒低，不构成单点。"
  ],
  "downstream": [
   "**致命依赖：全球光伏电站 + 分布式装机**。组件是装机的直接投入。全球年装机数百 GW（2023 约 390–440 GW，C2），其中绝大部分用中国系组件。",
   "**高依赖：电站 EPC / 开发商 / 屋顶安装商**。组件占光伏电站总投资（含逆变器、支架、土地、并网、施工）约 **30–40%**（C2 待核，组件降价后占比下降）。",
   "**可缓冲：薄膜（First Solar）**。美国公用事业级市场可部分用 CdTe 替代，IRA 重点扶持，但全球份额小、扩产慢。",
   "**跨市场无**：组件下游就是终端发电，不像多晶硅还有半导体级旁路。",
   "买家侧份额与成本占比：组件占电站投资约 30–40%（且 2024 组件价崩后占比降），但**组件断供 ≠ 电站立刻停**——电站是一次性采购、可换供应商、可延后开工，库存/在途缓冲比硅片厂\"断料即停线\"宽。所以组件层下游敞口的性质是「**成本占比中等、可缓冲、但价格/供给波动直接传导到装机经济性与进度**」，不是致命瞬断。美国侧真实痛点同上游：不是怕中国断供，是 AD/CVD + UFLPA 让中国系组件进不来或要付高额关税/溢价，推高美国装机成本、拖慢进度。"
  ],
  "fallback": {
   "verdictZh": "仍在运营",
   "verdictRaw": "operational",
   "unstructured": false,
   "text": "组件层的 fallback 比多晶硅**真得多**——因为组装易复制——但「真在组装、假在全链」：\n\n**本土/非中组件组装层：`operational`（真已回流，但有壳无芯）**\n美国 IRA 催生本土组件名义产能约 50 GW（First Solar 薄膜 + Qcells + 多家新厂），印度也在扩。过五问：替代组件组装产能 / 已在运行（operational，IRA 后扩产快）/ 卡在「电池片/硅片仍靠中国进口 + 成本高于中国系」/ 谁启动=IRA 45X 补贴 + 私营 / 现场执行能力=有（组装低门槛）。结论：**组件组装是全链唯一达到 operational 真 fallback 的一格**——但它是**空心 fallback**：装的是进口（多为中国）电池片，向上游回溯立刻断。判 `operational（组装）/ blocked（全链自主）`。\n\n**电池片/硅片本土化层：`planned → blocked`**\n要让组件回流有实义，必须同时回流电池片和硅片。美国电池产能近零、硅片产能近零。过五问：替代上游产能 / 多久=数年且未启动规模化 / 卡在资本 + 中国压价 + know-how（电池片 TOPCon 工艺迭代快）/ 谁启动=IRA（45X 对电池片也给补贴）/ 现场执行能力=基本没有。结论：**`possible reroute`，不是 fallback**——补贴种子已撒（IRA 对电池/硅片均有 45X 抵免），但规模化未发生，是组件回流的真瓶颈。\n\n**薄膜技术绕路：`partial`（独立且在美国市场实在）**\nFirst Solar 碲化镉完全不用硅料/电池片，US 公用事业市场份额实在、订单饱满、IRA 重点扶持，operational。但全球份额小、碲供给有约束、不适用分布式屋顶。判 `partial`——能撑起美国一块公用事业级市场，不能替代全球晶硅组件主流。\n\n**东南亚转口路径：`operational → 正在被关闭`**\n中国厂经马来/越南/泰国/柬的组装产线曾是绕美国双反的真通道（operational 多年），但 2024–2025 新一轮 AD/CVD 把这四国罩住后，此路被大幅收窄，部分再迁印尼/老挝。这是「fallback 被政治主动关闭」的活样本——见政治传动层。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "- **全球太阳能组件市场（行业口径，C2–C3 待核）**：2023 约 **$1500–2000 亿**（任务口径，约 $150–200B；= 全球装机约 400 GW × 组件均价）。但组件市场规模高度随**价格**波动：2024 组件均价崩过半（$0.26→$0.10/W 量级），即便装机量增，组件本体产值显著缩水。\n- 数量级判断：组件本体年值约 $1500–2000 亿，比多晶硅本体（几百亿）大，但它向下耦合的**全球光伏装机年投资仍是同级到更大**（含逆变器/支架/施工/并网，IEA 口径数千亿到万亿级）。组件是 re 链里本体市值最大的一格（最靠近终端），杠杆背离倍数小于多晶硅/稀土/镓——这格本身就值钱，不是「市值小卡终端大」的极端背离型。\n\n【缺口：全球组件市场各年精确值 + 装机量——需 BloombergNEF / Wood Mackenzie / IEA《Renewables》。】",
    "cLevels": [
     "C2–C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 组件产能/出货层：CR1（中国系）≈ **80%+**（2023，行业共识 C3，精确值待 BNEF/InfoLink）——全链最松一档（硅片 97% > 电池 85% > 组件 80%）。\n- Tier-1 企业层 CR5（晶科+隆基+天合+晶澳+阿特斯）：全球组件出货约 **55–65%**（C2 待核）。\n- price maker：**中国系集体 + 过剩产能边际现金成本**——组件均价由谁撑到最后定，中国厂凭全链一体化坐最低成本位（同多晶硅逻辑）。\n- 集中度沿链方向（关键）：多晶硅 90%+ → 硅片 97% → 电池 85% → **组件 80%（最松）**。组件是全链**最易被非中产能稀释**的一格，这正是它卡点最浅的量化证据。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收 | 利润率 | 市值/估值 | 来源 |\n|---|---|---|---|---|\n| 晶科能源（NYSE: JKS / SH: 688223）| 【缺口：2023 约 CNY 1187 亿/约 $165 亿量级待核，2024 承压】| 2023 薄利，2024 转亏 | 上市 | 需 20-F/年报 |\n| 隆基绿能（SH: 601012）| 【缺口：2023 约 CNY 1295 亿待核，2024 巨亏】| 2024 大额亏损 | 上市 | 需年报 |\n| 天合光能（SH: 688599）| 【缺口：2023 约 CNY 1133 亿待核】| 2024 承压 | 上市 | 需年报 |\n| 晶澳科技（SZ: 002459）| 【缺口：2023 约 CNY 816 亿待核】| 2024 转亏 | 上市 | 需年报 |\n| 阿特斯（NASDAQ: CSIQ）| 【缺口：2023 约 $75 亿待核】| 摊薄 | 上市 | 需年报 |\n| First Solar（NASDAQ: FSLR）| 【缺口：2023 约 $33 亿，净利约 $8–9 亿待核】| **正利润（薄膜+IRA）** | 上市，市值数百亿$ | 需 10-K |\n| Hanwha Qcells（韩华子）| 【缺口：并入 Hanwha Solutions，需集团年报】| — | 母公司上市 | 需年报 |\n\n资本纵深判断（结构，C2）：中国 Tier-1（晶科/隆基/天合）2021–2022 积累厚利 + 国家产业政策托底，扛得住 2024 价格战巨亏；First Solar 靠薄膜独立路线 + IRA 补贴 + 满订单，是**非中里唯一盈利且资本纵深厚**的异类（它不打晶硅价格战）；Qcells/欧洲晶硅厂纵深薄、靠保护市场。**这套财务分布解释了为什么美国本土晶硅组装总在亏损边缘、唯独 First Solar 的薄膜独立路线活得好——绕开晶硅价格战的那个，才扛得住。**\n\n【缺口：全部具体营收/利润率/市值——需各家年报，本轮未取，现为行业报道量级。】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **下游成本敞口（中等且下降）**：组件占光伏电站总投资约 30–40%（C2 待核），2024 组件价崩后占比下降，BOS（支架/逆变器/施工/土地/并网）占比相对上升。\n- **下游产能敞口（可缓冲，非瞬断）**：组件是一次性采购、可换供应商、可延后开工，电站对单一组件供给的瞬断敏感度低于硅片厂\"断料即停线\"。\n- **美国侧反向敞口**：真实痛点不是中国断供，是 AD/CVD（东南亚四国关税）+ UFLPA（涉疆）让中国系组件进不来或要付高额关税，推高美国装机成本、拖慢进度——是**进口侧自设的卡点**（同多晶硅方向）。\n- **AD/CVD + UFLPA 执法量级**：2024–2025 对柬/马/泰/越 AD/CVD 税率部分极高（柬不配合最高，量级达三位数%，C2 待终裁文核）；CBP 自 2022 扣留含涉疆硅料的光伏组件累计数十亿美元货值（C2）。【缺口：商务部 AD/CVD 终裁税率表 + CBP UFLPA 太阳能扣留统计。】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "- **现行活跃冲击（AD/CVD + UFLPA 侧）**：东南亚四国 AD/CVD 推高美国进口组件成本，叠加 UFLPA 扣留——推高美国 2024–2025 公用事业光伏装机成本、延后项目。【缺口：Wood Mackenzie/SEIA《US Solar Market Insight》对关税+UFLPA 对美国装机成本与进度影响的量化。】\n- **价格战冲击（产业侧）**：2023–2024 组件均价崩（约 $0.26→$0.10/W，C2），Tier-1 中国厂集体巨亏、产能出清。\n- **假想中国断供冲击（推算 C2）**：中国不会主动断组件出口（想卖）；真实风险是中国以**电池片/硅片/光伏工艺技术出口管制**卡上游，延长西方全链追赶数年。量级以「全球光伏装机进度 + 西方本土化时间债」计——组件本体（$1500–2000 亿）之外，拖的是全球能源转型节奏（万亿级投资 + 减排目标）。\n- 【缺口：IEA/BNEF/Wood Mackenzie 关于「光伏供应链中断/技术封锁对全球部署进度」的量化专题。】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链利润分布随周期摆动（同多晶硅），但组件层有自己的特征：\n\n- **2021–2022 短缺期**：利润上移到上游（多晶硅/硅片），组件环节被上游挤压（组件厂买高价硅料）。\n- **2023–2024 过剩期**：全链通杀式亏损，组件环节**贴近终端但同样巨亏**（均价崩穿成本）。\n- **跨周期稳定盈利的异类**：First Solar（薄膜，绕开晶硅价格战 + IRA 补贴）+ 中国一体化龙头（靠规模摊薄、靠其它环节内部调剂、靠国家托底扛亏）。**利润不稳定沉淀在组件这一格**，组件是「价格传导的末端、被两头挤」的位置。\n- 政治压力首先打到谁：① AD/CVD/UFLPA 侧 first payer = 美国光伏开发商/进口商（关税、扣货、延期、付溢价）+ 中国系/东南亚组件出口商（失美国市场或被课重税）；② 价格战侧 first payer = 非中晶硅组件厂（被压死）+ 美国本土晶硅组装（亏到靠补贴续命）。**First Solar 是唯一两边都不太挨打的——它不在晶硅价格战里，又是 IRA + AD/CVD 的受益方。**\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "中国系占全球组件产能/出货约 80%+",
    "level": "C3",
    "source": "行业共识（BNEF/InfoLink，待回原文）"
   },
   {
    "item": "集中度沿链单调递减：多晶硅 90%+ > 硅片 97% > 电池 85% > 组件 80%",
    "level": "C3",
    "source": "行业共识"
   },
   {
    "item": "Tier-1 五家（晶科/隆基/天合/晶澳/阿特斯）CR5 约 55–65%",
    "level": "C2",
    "source": "行业报道推算"
   },
   {
    "item": "美国本土组件名义产能约 50 GW，电池产能近零",
    "level": "C2",
    "source": "报道/SEIA"
   },
   {
    "item": "组件组装壁垒低、一年内可建（最易回流一格）",
    "level": "C3",
    "source": "结构判断（产业常识）"
   },
   {
    "item": "组件均价 2023–24 从约 $0.26 崩至约 $0.10–0.11/W",
    "level": "C2",
    "source": "行业报道"
   },
   {
    "item": "中国厂经柬/马/泰/越转口规避双反",
    "level": "C3",
    "source": "广泛报道 + 商务部裁定"
   },
   {
    "item": "2024-04 Alliance 对四国新一轮 AD/CVD，2024–25 初/终裁部分税率极高",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "UFLPA 2022-06-21 生效，组件含涉疆硅料推定禁入",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "IRA 45X 组件 $0.07/W、电池 $0.04/W 抵免",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "组件占电站总投资约 30–40%（降价后降）",
    "level": "C2",
    "source": "行业口径"
   },
   {
    "item": "全球组件市场 2023 约 $1500–2000 亿",
    "level": "C2",
    "source": "任务口径/行业推算"
   },
   {
    "item": "First Solar 薄膜独立路线、2023 盈利、IRA 最大赢家",
    "level": "C3",
    "source": "广泛报道"
   },
   {
    "item": "卡点浅：硬度从上游借来，组件本格非硬卡点",
    "level": "C3",
    "source": "结构判断（集中度沿链 + 组装低门槛）"
   },
   {
    "item": "组件回流半空心（壳回流、电池/硅片芯仍进口）",
    "level": "C3",
    "source": "结构判断（50 GW 组装 vs 电池近零）"
   }
  ],
  "contested": {
   "title": "2022 年 3 月 Auxin Solar 反规避申请 → Biden 24 个月关税豁免 → 2023 年 8 月商务部反规避裁定",
   "summary": "这是组件节点被争夺最清晰的一次，照出的核心结构：美国对中国太阳能组件的贸易救济工具，在下游装机商的经济利益面前，执行上限远低于工具本身所表达的强度。"
  },
  "gaps": [
   "1. 【缺口：需要 BloombergNEF / InfoLink 组件出货排名 + 各环节份额 + 组件均价序列（2021–2025）】中国系 80% + Tier-1 CR5 + 沿链份额 + 价崩序列——Q1/Q2/结构层 3 的量化骨架，现全为行业报道量级，优先级最高。",
   "2. 【缺口：需要美国商务部 AD/CVD 对柬/马/泰/越终裁文 + 税率表 + 反规避终裁】政治传动层 A/B/C 的案号与税率——这是组件层区别于多晶硅的核心活跃接口（反规避账本），一手文本。",
   "3. 【缺口：需要 SEIA / Wood Mackenzie《US Solar Market Insight》】美国本土组件 vs 电池产能精确 GW + UFLPA/关税对装机成本与进度的冲击（Q4/Q5）——判「组件回流半空心」的量化证据。",
   "4. 【缺口：需要 UFLPA 文本（PL 117-78）+ CBP 太阳能扣留 dashboard】组件层 UFLPA 适用的文号与扣留货值——与 re-polysilicon 共用，可合并取料。",
   "5. 【缺口：需要 IRA 45X 细则（IRS 指南）】组件/电池/硅片各环节抵免额度——政治传动层 C 建设债账的一手文本。",
   "6. 【缺口：需要晶科/隆基/天合/晶澳/阿特斯/First Solar 年报】各家营收/利润率/市值（Q3）——判各方扛价格战的资本纵深，现全为缺口。",
   "7. 【缺口：子节点 re-cell（电池片，中国 85%+，AD/CVD 真靶心 + TOPCon/HJT 工艺迭代层）+ re-solarglass（光伏玻璃，信义/福莱特双寡头）】均值得单独建节点——re-cell 尤其关键，是「组件回流空心」的填芯所在。",
   "8. 【缺口：需要中国《禁止出口限制出口技术目录》2023 修订原文】光伏上游工艺受控条目——与 re-polysilicon 共用。\n</content>\n</invoke>"
  ]
 },
 "re-wind": {
  "sourceFile": "re-wind.md",
  "archiveId": "re-wind",
  "established": "2026-07-02",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "这个节点的性质不同于多晶硅或稀土\n\n风电整机是全 re 栈里政治结构最复杂、最难简单描述为\"卡点\"的节点。原因很具体：它不是技术单点，也不是物理稀缺点，而是**两个相互独立的阵营在两套不同的市场里同时做相似的东西**。中国制造商在中国大陆和部分新兴市场主导，西方制造商（Vestas/SGRE/GE Vernova）在欧洲、北美、海上风电高端市场主导，双方之间没有强依赖关系——中国买不到不影响 Vestas 的生意，欧洲排斥中国品牌也拿不走 Goldwind 在国内已有的订单。\n\n这和多晶硅节点根本不同。多晶硅是\"中国生产→全球需要\"的单向依赖；风电整机更像是\"两条平行的产线，分别服务不同的买家\"。在这个框架下，杠杆不是来自\"谁垄断了整机制造\"，而是来自两件更具体的事：其一，**稀土永磁体**（NdFeB 磁钢）——直驱型风机的发电机要用大量钕铁硼磁铁，而磁铁的主要元素镝/铽几乎被中国独占，这条链接到 cm-ree 节点；其二，**市场准入控制**——西方政府是否允许中国整机进入本国市场，中国国内市场是否允许西方品牌参与招标，两侧都有政治阀门。\n\n所以分析这个节点，最重要的一步是把\"整机制造集中度\"（分散，无单点）和\"上游关键材料集中度\"（高度集中，接 cm-ree）以及\"市场准入政治化\"（双向都在发生）这三件事分开。\n\n---",
  "holders": [
   {
    "entity": "Vestas Wind Systems",
    "role": "全球最大陆上风机 OEM，海上市场份额也在扩大",
    "scale": "FY2023：营收 €15.4B（C4，Vestas 官方年报）；EBIT margin 1.5%（重回盈利）；服务收入 €3.6B",
    "jurisdiction": "丹麦（纳斯达克哥本哈根：VWS）",
    "group": null
   },
   {
    "entity": "Siemens Gamesa（SGRE）",
    "role": "全球最大海上风机 OEM，陆上市场份额第二",
    "scale": "FY2023：分部亏损 €4.3B（含质量危机计提 €2.7B，C4，Siemens Energy 年报）；德国政府担保 €7.5B（2023-11-14，C4）",
    "jurisdiction": "西班牙（Siemens Energy 全资，2023 私有化）",
    "group": null
   },
   {
    "entity": "GE Vernova（风电段）",
    "role": "主要陆上 OEM，LM Wind Power 叶片制造（全球最大叶片厂）",
    "scale": "FY2023 10-K 不存在（2024-04 才独立上市）；替代路径：S-1（含 FY2023 风电分部 P&L）待取；风电段亏损约 $20 亿（C3，新闻报道）",
    "jurisdiction": "美国（NYSE：GEV，2024-04 IPO）",
    "group": null
   },
   {
    "entity": "金风科技 Goldwind",
    "role": "全球新增装机量 2023 年 #1 OEM，直驱永磁",
    "scale": "FY2023：营收 RMB 502 亿（C4，港交所年报）；净利 RMB 13.3 亿（-44%）；国内交付 15.67 GW，市场份额 20%（全国第一）",
    "jurisdiction": "中国（沪：002202 / 港股：02208）",
    "group": null
   },
   {
    "entity": "明阳智能 Ming Yang",
    "role": "中国第三大 OEM，海上风机技术激进",
    "scale": "FY2023：营收 RMB 279 亿（-9.4%，C4，A 股英文修订版年报）；净利 RMB 3.7 亿（-89%）；外部交付 9.69 GW（+33%）",
    "jurisdiction": "中国（深：601615）",
    "group": null
   },
   {
    "entity": "远景能源 Envision",
    "role": "中国 2023 年新增装机量全球 #2，智能风机 SCADA 生态",
    "scale": "营收【缺口：未上市，无法律义务披露】",
    "jurisdiction": "中国（私有）",
    "group": null
   }
  ],
  "upstream": [
   "再风的上游依赖按重要性：",
   "**① 永磁体（NdFeB 磁钢）→ cm-ree 强耦合**：直驱型永磁同步发电机（PMSG）每 MW 机组使用 NdFeB 磁钢约 0.5–1 吨（C2 推算，视机型而异），其中含有镝（Dy）和铽（Tb）——这两种重稀土中国独占约 90%+（cm-ree 节点）。目前约 20–30% 全球风机使用直驱 PMSG（Goldwind 全系列、Ming Yang 部分、SGRE Haliade/Siemens DD 海上机型、Enercon 全系列），这一比例在海上大功率机组（15MW+）中更高。每台 15MW 海上风机的永磁体用量约 8–15 吨（C2），含约 200–500 公斤的 Dy/Tb（C2）。这是 re-wind 与 cm-ree 之间最直接的硬耦合。",
   "**② 叶片（碳纤维/玻璃纤维）**：50–80m 的大型叶片使用玻璃纤维（主流，相对分散）或碳纤维（高端，SGL/Toray/Hexcel，集中在日本/德国/美国）。叶片制造：LM Wind Power（GE 子公司，全球最大独立叶片厂）、TPI Composites（美国）、中国各整机厂自建叶片车间。碳纤维是上游卡点（Toray/Toho Tenax/Hexcel，非中资，待独立拆析）。",
   "**③ 主轴承**：大型风机的主轴承（通常 2–4m 直径）生产商高度集中：SKF（瑞典）、Schaeffler（德国）、NSK（日本）、洛阳 LYC（中国）。超大型轴承交货期长（12–18 个月），是产能瓶颈之一（C3）。",
   "**④ 变流器**：ABB（瑞士）、Siemens（德国）、Vestas 自产、Goldwind 自产。相对分散，但技术集中度高。",
   "**⑤ 控制系统（SCADA）**：各 OEM 封闭生态，关键子单点在于远程访问和固件更新权限（安全顾虑的根源）。"
  ],
  "downstream": [
   "直接下游：风电场开发商/电力公司（Ørsted、Vattenfall、中国华能/华电/大唐等国有电力集团、独立发电商）。依赖强度：",
   "已选定 OEM 的风电项目：20–25 年周期内的备件和运维绑定，依赖强度高（若备件断供，整机停转，资产搁浅）",
   "规划中项目：选择自由度高，供应商竞争",
   "间接下游：电力系统（影响 en 栈）、新能源汽车充电网络（电力来源）。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": true,
   "text": "按市场区域和机型分：\n\n**西方市场（陆上）**：fallback = `partial`（真实但有代价）。Vestas/SGRE/GE Vernova 三家都在产，互相之间可以切换（技术路线不同但基本兼容），切换成本在于重新认证和供应链重配。问题：三家 2021–2023 年全部亏损，说明这条产线在成本上承压，不如中国整机便宜，只靠政策壁垒维持。五问：① 替代哪一层=整机层；② 多久接上=新建风场选不同 OEM，3–5 年资质+制造周期；③ 卡在哪=成本比中国整机高 30–50%（C2）；④ 谁有权限=开发商自主决定；⑤ 现场执行能力=三家均有现役产线。\n\n**西方市场（海上）**：fallback = `partial`（更复杂）。Vestas 和 SGRE 主导海上市场，中国品牌（Ming Yang、中国海装）计划进入但目前基本被欧美市场拒绝。供应链瓶颈在于安装船（全球专用大型 WTIV 只有约 20 艘，C2）和单桩基础制造（欧洲单桩厂满产）。\n\n**新兴市场**：fallback 从 `partial` 到 `possible reroute`。中国整机商主导低价段，替代选项是接受欧美整机更高价格（如果政策性贷款支持不在）。\n\n**永磁体供给被截断**（cm-ree 传导）：fallback = `possible reroute`。新建直驱 PMSG 机型可转向双馈感应发电机（DFIG，不用稀土永磁，但有效率和维护成本劣势）或中速永磁机型（用镧系磁铁减少 Dy/Tb 用量），但技术路线切换需 3–5 年；更换 Dy/Tb 来源不可能（全球 Dy/Tb 就是中国 90%+）。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球风机设备市场（整机 + 关键部件）年营收约 700–900 亿美元（2023 年估，C2；含陆上 + 海上；另有运维服务约 300 亿美元，与设备市场重叠计算方式不同）。**全球新增装机 116.6 GW（2023 年，C4，GWEC GWR 2024）**，其中陆上 105.8 GW、海上 10.8 GW。\n\nBNEF OEM 价格数据：付费墙 blocked，维持 C2 行业推算。",
    "cLevels": [
     "C2",
     "C4"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "**全球整体市场（含中国，C4，GWEC GWR 2024）**：2023 年 OEM 排名——Goldwind 16.7 GW（#1）、Envision（#2）、Vestas（#3）、运达（#4）、明阳（#5）；中国 OEM 合计 81.6 GW，约占 70%。  \n**中国市场**（约 60–65% 全球量）：中国 OEM 份额约 95%+（C2 不变），Goldwind 国内份额约 20%（C4，Goldwind 年报自报）。  \n**除中国全球市场**：Vestas/SGRE/GE Vernova CR3 约 70–80%（C3 不变）。  \n\nprice maker：不存在单一 price maker——陆上市场是买方驱动的竞标市场，OEM 被迫低价竞标；海上市场相对寡头，Vestas/SGRE 有较强定价能力。中国整机通过大规模产能和垂直整合做到了结构性低价，对全球价格形成间接压力。",
    "cLevels": [
     "C4",
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 公司 | 约营收（来源 + 年份）| 盈利情况（C3）| 备注 |\n|---|---|---|---|\n| Vestas | ~€14.5B（2023 新闻报道 C3）| 2023 年末恢复盈利，2022 年大额亏损 | 【缺口：Vestas FY2023 年报】 |\n| Siemens Gamesa | ~€9.8B（2023 新闻报道 C3）| 净亏损超 €4B（2023，C3）| 已私有化，母公司 Siemens Energy 受德国政府担保 |\n| GE Vernova（风电段）| ~$5–6B（2023 估计 C2）| 风电段亏损约 $20 亿（2023，C3）| 2024 独立 IPO，风电还未盈利 |\n| Goldwind（金风科技）| ~351 亿人民币（约 $48 亿，2023 C3）| 净利润约 12 亿人民币（2023 C3）| 【缺口：Goldwind A 股/H 股 2023 年报】 |\n| 明阳智能 Ming Yang | ~291 亿人民币（约 $40 亿，2023 C3）| 净利润约 14 亿人民币（2023 C3）| 【缺口：明阳智能 2023 年报】 |\n\n资本纵深：中国整机商规模较小（单家资产负债表约 $40–50 亿营收），但受中国国家开发银行/进出口银行的政策支持，可以通过低息信贷维持竞争；西方 OEM 特别是 SGRE/GE Vernova 陷入亏损，资本纵深薄，短期靠政府担保（德国）或新股东资本（GE Vernova IPO）续命。",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 风机占风电场建设总成本约 60–70%（C2），其他为基础设施（海上单桩/变电站/海缆）\n- 风机 OEM 年服务收入约占其总营收 20–30%（C2，基于 Vestas 历史数据）\n- 若 OEM 停止供应备件，现有风场运营商通常有 12–24 个月的备件库存（C2），超过这个窗口叶片或齿轮箱损坏后无法维修",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制经济冲击量级",
    "text": "断供场景没有现有报告量化——整机不像芯片，不存在已有国家全面切断对方供给的案例。可参考的代理数据：\n\n- SGRE 质量危机中德国政府担保规模约 75 亿欧元（C3），暗示政府对\"西方 OEM 不可倒闭\"的估值\n- 若中国实施稀土镝/铽出口禁令，影响直驱型风机产线（约 20–30% 全球新装机），替代品研发至少 3–5 年，新增装机减少估算约 10–20%（C2 推算）\n- 新兴市场（巴西/印度/东南亚）若失去中国政策性融资支撑的低价整机，风电建设成本上升 30–50%（C2）\n\n【缺口：需要 IRENA/IEA/BloombergNEF 关于风电供应链韧性的专项报告（量化断链冲击）】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链中利润最厚的段：**运维服务**（OEM 绑定的备件/技术服务，毛利率约 30–50%，C2）> 海上大型机组（高单价，但目前仍亏损）> 陆上标准化机组（利润极薄，中国市场价格战已把毛利压至单位数，C2）。\n\n真正的利润归宿：稀土磁钢段的利润在中国精炼/磁体企业（cm-ree 链条），不在整机 OEM；整机 OEM 是价值链的低利润制造段，利润被向上压缩（原材料/部件涨价）和向下压缩（买方议价）；赚钱的是**备件和服务合同**以及（在中国国内）获得政策资源的开发商。\n\n---",
    "cLevels": [
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "全球新增风机装机 116.6 GW（2023，陆上 105.8 + 海上 10.8）",
    "level": "C4",
    "source": "GWEC Global Wind Report 2024"
   },
   {
    "item": "中国 OEM 合计 81.6 GW（2023），约占 70%",
    "level": "C4",
    "source": "GWEC GWR 2024"
   },
   {
    "item": "Vestas FY2023 营收 €15.4B，EBIT margin 1.5%，服务收入 €3.6B",
    "level": "C4",
    "source": "Vestas 官方年报 PDF（re-wind-primary/）"
   },
   {
    "item": "SGRE FY2023 分部亏损 €4.3B（含质量危机计提 €2.7B）",
    "level": "C4",
    "source": "Siemens Energy 年报 PDF（re-wind-primary/）"
   },
   {
    "item": "德国政府 €7.5B 担保（2023-11-14 宣布）",
    "level": "C4",
    "source": "Siemens Energy 年报"
   },
   {
    "item": "GE Vernova 风电段亏损约 $20 亿（2023）",
    "level": "C3",
    "source": "新闻报道；FY2023 10-K 不存在（IPO 2024-04），S-1 替代路径待取"
   },
   {
    "item": "Goldwind FY2023 营收 RMB 502 亿，净利 13.3 亿（-44%），国内交付 15.67 GW",
    "level": "C4",
    "source": "港交所年报 PDF（re-wind-primary/）"
   },
   {
    "item": "明阳智能 FY2023 营收 RMB 279 亿（-9.4%），净利 3.7 亿（-89%），交付 9.69 GW",
    "level": "C4",
    "source": "A 股英文年报 PDF（re-wind-primary/）"
   },
   {
    "item": "直驱 PMSG 每 MW 约 200–300 kg REE（IEA 2021 口径）；DFIG 几乎不用稀土",
    "level": "C3",
    "source": "IEA Critical Minerals 2021 PDF（re-wind-primary/）"
   },
   {
    "item": "2040 年风电稀土需求将是 2020 年的 3 倍以上（SDS 情景，IEA）",
    "level": "C3",
    "source": "IEA 2021 PDF"
   },
   {
    "item": "英国 NSIA：100 MW+ 发电资产须强制申报；无风机/SCADA 专项条款",
    "level": "C4",
    "source": "gov.uk 在线文档（HTML），典藏提取关键条款"
   },
   {
    "item": "美国 IRA 45X 条款（国内含量要求）",
    "level": "C4",
    "source": "美国联邦公报（公开）"
   },
   {
    "item": "SGRE 2023 年 8 月质量缺陷披露",
    "level": "C4",
    "source": "Siemens Energy 年报（亏损与计提已 C4）"
   },
   {
    "item": "直驱 PMSG 每 MW 约 0.5–1 吨 NdFeB 磁钢",
    "level": "C2",
    "source": "行业报告推算"
   },
   {
    "item": "15MW 海上风机永磁体用量约 8–15 吨",
    "level": "C2",
    "source": "推算（基于 MW 比例）"
   },
   {
    "item": "直驱型风机约占全球新装机 20–30%",
    "level": "C2",
    "source": "行业推算"
   },
   {
    "item": "整机占风电场建设总成本约 60–70%",
    "level": "C2",
    "source": "行业推算"
   },
   {
    "item": "OEM 备件库存约 12–24 个月",
    "level": "C2",
    "source": "行业推算"
   }
  ],
  "contested": {
   "title": "西门子歌美飒（SGRE）质量危机与德国政府救援（2023）",
   "summary": "这是迄今最清楚地照出西方风电供应链结构脆弱性的一次激活。"
  },
  "gaps": [
   "1. ~~【缺口：需要 Vestas FY2023 年报】~~ → ✅ 已补 C4（€15.4B，EBIT 1.5%，服务 €3.6B）",
   "2. ~~【缺口：需要 SGRE FY2023 年报分部数据】~~ → ✅ 已补 C4（亏损 €4.3B，含计提 €2.7B；德国担保 €7.5B，2023-11-14）",
   "3. ~~【缺口：需要 Goldwind 2023 年报】~~ → ✅ 已补 C4（营收 502 亿，净利 13.3 亿，交付 15.67 GW）；注：直驱机型占比年报未专项披露，维持 C2 推算",
   "4. ~~【缺口：需要 GWEC Global Wind Report 2024】~~ → ✅ 已补 C4（116.6 GW 全球新增，中国 OEM 70%，Goldwind #1）",
   "5. 【残余缺口：GE Vernova FY2023 数据】——FY2023 10-K 不存在，替代路径为 S-1（SEC EDGAR，data/1996810）；待投新典藏工单取 S-1 风电分部 P&L",
   "6. ~~【缺口：NSIA 风电 SCADA 审查范围】~~ → ✅ 已确认 C4：100 MW+ 发电资产强制申报，无风机/SCADA 专项条款",
   "7. ~~【缺口：IEA 稀土需求量化】~~ → ✅ 已补 C3（IEA 2021，非 2023；DD-PMSG 200-300 kg/MW REE；DFIG 约零；2040 需求 3× 2020 SDS 情景）；注：IEA 取到的是 2021 版而非 2023 版，2023 版数字可能更新，可补投"
  ]
 },
 "tc-basestation": {
  "sourceFile": "tc-basestation.md",
  "archiveId": "tc-basestation",
  "established": "2026-06-23",
  "updated": null,
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "华为",
    "role": null,
    "scale": "~31%（C3）",
    "jurisdiction": "总部 / 法域：中国深圳 / 中国法域 · 关键法域特征：受 BIS Entity List / NDAA §889 / 多国高风险供应商认定；在西方新合同份额近零",
    "group": null
   },
   {
    "entity": "爱立信",
    "role": null,
    "scale": "~26%（C3）",
    "jurisdiction": "总部 / 法域：瑞典斯德哥尔摩 / 瑞典法域 · 关键法域特征：西方主要受益者；上游依赖 TSMC；美国证券上市（NASDAQ: ERIC）",
    "group": null
   },
   {
    "entity": "中兴",
    "role": null,
    "scale": "~15%（C3）",
    "jurisdiction": "总部 / 法域：中国深圳 / 中国法域 · 关键法域特征：2018 年 BIS Entity List + 临时救济；与华为同受 NDAA §889 覆盖",
    "group": null
   },
   {
    "entity": "诺基亚",
    "role": null,
    "scale": "~14%（C3）",
    "jurisdiction": "总部 / 法域：芬兰埃斯波 / 芬兰法域 · 关键法域特征：西方主要受益者；2016 年收购阿尔卡特朗讯后成型；欧洲证券上市（Nasdaq Helsinki）",
    "group": null
   },
   {
    "entity": "三星",
    "role": null,
    "scale": "~7%（C3）",
    "jurisdiction": "总部 / 法域：韩国水原 / 韩国法域 · 关键法域特征：美国/日本/韩国本土 5G 合同较强；Verizon 美国是大客户",
    "group": null
   }
  ],
  "upstream": [
   "这一维是 tc-basestation 真正的隐患所在，而且指向几个意外的上游单点：",
   "**先进基带芯片（ASIC/FPGA）→ 代工来源已分裂**（C3/C2）：爱立信 RAN Compute 基带芯片**已确认使用 Intel 4 工艺（非 TSMC 7nm）**；下一代路线图走 Intel 18A，继续 Intel Foundry（爱尔兰/俄勒冈）路线（C3，Tom's Hardware + 爱立信 Silicon 页确认，来源 `tc-basestation-primary/D-sep-chip-supply/ericsson-asic-foundry-intel.txt`）。诺基亚 ReefShark SoC 代工来源仍待核（C2 推算，Nokia Q4 PDF 取料受阻）。**这修正了之前「清洁网络政策建在 TSMC 台湾单点上」的表述：爱立信这条依赖链指向 Intel Foundry，威胁模型与 TSMC-台海情景不同**——爱立信基带若遇产能风险，是 Intel 18A 制程风险而非台海风险。诺基亚是否依赖 TSMC 仍在 C2 待核；若 Nokia ReefShark 确认走 TSMC，则「清洁网络-TSMC 单点」结论对诺基亚仍成立。【缺口：诺基亚 ReefShark SoC 代工来源——Nokia Q4 PDF 或供应链报告，爱立信这条已闭】",
   "**射频功率放大器（RFPA）→ GaAs/GaN 组件**：Massive MIMO 基站的射频功放以 GaAs（磷化镓砷，GaAs）和 GaN-on-SiC 工艺为主。GaAs 代工主要在台湾（WIN Semiconductor、UDSemi）和日本；GaN-on-SiC 底材（SiC 晶圆）主要来自 Wolfspeed（美国）和 Coherent（美国）。关键耦合：**镓（Ga）是所有 GaAs/GaN 器件的原料**，直接接 cm-gallium 节点——中国 2023 年镓出口管制，5G 基站射频链是真实下游之一。【缺口：主要基站设备商 GaAs/GaN RFPA 来源比例——需供应链报告】C2。",
   "**光纤 + 传输设备（fronthaul/midhaul）**：基站与 BBU 池之间的前传依赖高密度光纤和光模块，与 tc-optical 节点耦合。非本节点主卡点，但影响建网速度。",
   "**塔址租赁 / 站点电力**：建设约束而非技术约束，非分析重心。",
   "**关键结论（已更正）**：Clean Network 政策解决了「谁的软件在基站里跑」，但没有完全解决「基站自己的芯片从哪里来」。爱立信的基带已确认走 Intel Foundry（非 TSMC），诺基亚 ReefShark 待核；GaN 材料仍依赖中国镓——这条上游仍是已标过的卡点。「清洁网络政策建在 TSMC 单点上」的结论对爱立信这条线已修正，对诺基亚仍待核。"
  ],
  "downstream": [
   "**电信运营商（全球）**：致命依赖。无基站供应就无法扩建 5G 网络；维护合同中断就是既有网络开始退化。库存/在途能缓冲多久（C2 推算）：设备类一般有 6–18 个月备品仓（但软件更新中断的影响更快，可能季度级）。",
   "**工业 5G / 专网场景**：制造业、港口、矿山的 5G 私有网络，业务中断成本更高（无线覆盖是控制系统而非消费业务）",
   "**国防 / 政府专网**：美国军方 5G 建设（JAIC / DoD 专项）直接绕开受限供应商，但仍依赖爱立信/诺基亚供货",
   "**被切断方**：中国境内 5G 采购已由华为/中兴包揽，与西方供应商无实质业务；中国网络设备不依赖西方基站，反方向也不依赖"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "**对西方运营商**：`partial`。三家合规供应商（爱立信/诺基亚/三星）实际在产，且在美欧大型运营商有真实安装记录。但：\n- 五问：替代哪一层=安装基础；多久接上=切换周期以年计（FCC 数据小运营商要 3–5 年）；卡在哪=专有接口/多供应商互通不成熟；谁有权限启动=运营商+监管批准；现场能不能执行=工程能力存在但成本高（见 Q5）\n- 判定：`partial`（真存在，但成本和周期已核）\n\n**对华为/中兴进入西方市场**：`blocked`。Open RAN 是架构层替代尝试，但：五问：替代哪一层=开放接口减少单一供应商锁定；多久接上=规模化部署还在试验期；卡在哪=互通测试/性能差距/集成工程；谁启动=运营商+政府驱动；执行能力=有部分（Dish Network 在美试验，Rakuten 日本已部署）但尚未成主流。判定：`possible reroute，not yet operational at scale`。\n\n**对西方设备商的芯片供应（若 TSMC 中断）**：爱立信已确认使用 Intel 4（非 TSMC），**爱立信这条线的 TSMC 中断风险评级需修正**——爱立信基带不暴露于 TSMC 台海风险，而暴露于 Intel Foundry 产能风险（不同性质的威胁）。诺基亚 ReefShark 代工来源仍待核；若确认 TSMC，则「`planned / possible reroute at best`——没有经济可行的替代代工来源」这一判定对诺基亚仍成立。**这是西方 5G 政策的结构性盲点，但具体位置需要按供应商分开看**：爱立信的盲点是 Intel 18A 制程能否如期落地；诺基亚的盲点待核。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球 RAN 市场（2G-5G 合计）：\n- 2022 年约 $380–420 亿（5G 建设高峰，C3，Dell'Oro Group 数据被广泛引用）\n- 2023 年降至约 $280–320 亿（5G 支出正常化后回调，C3）\n- 5G RAN 单独口径（2023）：约 $200–240 亿（C3）\n\n中国 5G 建设：工信部数据显示中国 5G 基站数量 2023 年底超 330 万个（C4，工信部官方统计），高于全球其余地区总和。这部分市场几乎全由华为/中兴承接，对全球 RAN 市场规模贡献显著。\n\n【缺口：Dell'Oro Group「全球 RAN 市场追踪报告 2023」原文——需典藏确认年度细分数字】",
    "cLevels": [
     "C3",
     "C4"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "- 华为 ~31%、爱立信 ~26%、中兴 ~15%、诺基亚 ~14%、三星 ~7%（C3，Dell'Oro Group 分析师估算，需原文核）\n- CR5 ≈ 93%（基本五家包圆）\n- 西方市场口径 CR3（爱立信/诺基亚/三星）≈ 50–60%（C3 推算，华为/中兴被实际排除后）\n- Price maker：市场层面无单一 price maker；在西方受限市场爱立信/诺基亚双寡头有较强议价能力，运营商选择空间窄\n\n【缺口：同上 Dell'Oro 报告原文】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 年营收（最近年报）| 利润率 | 市值 / 估值 | 来源 |\n|---|---|---|---|---|\n| **爱立信** | SEK **263.4B**（~$24.9B，FY2023 全集团）（C4，爱立信 IR press release 核实；⚠ 旧节点写 248.6B 有误，来源不明）；Networks 部门估约 SEK 160–170B（C3）| FY2023 集团营业亏损（Vonage 减值+重组计提 ~SEK 42B）；调整后 Networks 毛利率约 37%（C3）| 市值约 $15–18B（NASDAQ ERIC，2023 底，C3）| 爱立信 FY2023 IR press release（来源 `tc-basestation-primary/B-annual-reports/ericsson-fy2023-financial-extract.txt`）|\n| **诺基亚** | €24,854M 全集团 FY2023；Mobile Networks ~€10,049M；Network Infrastructure ~€9,587M（C3）| 集团毛利率约 39%（C3）；2023 年净利润正（不含减值调整后）| 市值约 €17–19B（Nasdaq Helsinki，C3）| Nokia FY2023 年报，C3 |\n| **华为**（ICT Infrastructure）| CNY 362B（FY2023，ICT Infrastructure 合并口径，含 Carrier BG + Enterprise BG）；**Carrier BG 单独数字 2023 年起不再单独披露**（⚠ 旧节点引 253.4B 为「载波业务」已不可核，253.4B 口径不确定）（C3/C4，华为 FY2023 年报 huawei.com 确认；来源 `tc-basestation-primary/B-annual-reports/huawei-fy2023-financial-extract.txt`）| 毛利率不详（未上市不完整披露）| 非上市，未知 | 华为 2023 年报摘要（公开部分）|\n| **中兴** | CNY ~123.8B（~$17B，FY2023 全集团）；运营商网络约 60–65%（C3）| 毛利率约 42%（FY2023，C3）| A 股+H 股市值约 $15B（C3）| 中兴 FY2023 年报 |\n| **三星**（Networks）| 估 ~$2–3B（未单独披露，C2 推算）| 不详 | 三星电子总市值约 $300B，Networks 仅一部分 | 无独立披露 |\n\n【缺口：爱立信 FY2023 Annual Report（Networks 部门营收精确数字+毛利率）；诺基亚 FY2023 Annual Report（Mobile Networks 毛利率+调整后净利润）；华为 2023 年报完整版（若有更多披露）——需典藏取料】",
    "cLevels": [
     "C4",
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- **基站对运营商的成本敞口**：RAN 设备通常占运营商资本支出（capex）的 40–60%（C2，行业共识），是最大单一采购项\n- **运营商停产能力库存**：小运营商通常有 6–12 个月备品（C2 推算）；软件维护中断影响更快，高级威胁防御补丁缺失可能在数月内产生安全漏洞\n- **断供冲击对网络扩展**：若主要设备商停止供货，运营商可维持既有覆盖（已安装的设备还能运行），但**新建和扩容立即停止**；4–5G 向 6G 演进将完全中断",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供 / 管制的经济冲击量级",
    "text": "**FCC rip-and-replace 成本（C4，已有政府原文）**：\n- 美国《安全可信通信网络法》（2019，Pub. L. 116-124）授权 FCC 建立「剥离替换」项目\n- FCC 评估需从美国小型运营商网络中剥离华为/中兴设备的成本：**$49.8 亿**（约 $5B，FCC 向国会提交的报告数字，C4，FCC 官方报告）\n- 涉及约 126 家运营商；项目初始国会拨款 $19 亿（不足以覆盖全部成本）\n- 时间表：预计完成需 3–5 年\n\n**英国剥离成本估算（C3，政府估算）**：英国政府 2020 年决定到 2027 年从核心网剔除华为、2035 年从 RAN 完全退出；官方估算额外成本约 20 亿英镑（~$25 亿，C3 英国政府数字）\n\n**宏观冲击量级**：若主要 5G 设备商供给中断（理论情景）——全球电信运营商年度资本支出约 $3000–3500 亿（C3），RAN 设备占约 $1000–1200 亿（C3），供给中断会推高设备价格并拖延 5G 覆盖，但因多家供应商存在，不是「停摆」而是「减速 + 涨价」。\n\n【缺口：FCC rip-and-replace 报告原文（「Secure and Trusted Communications Networks Reimbursement Program」报告，FCC 2023 National Broadband Plan 相关文件）】",
    "cLevels": [
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "- 利润在这条供应链里**高度分散**，且爱立信/诺基亚两家西方主要供应商近年利润率均承压：\n  - 爱立信 2023 年集团层面巨亏（Vonage 减值、重组）；Networks 部门毛利率 ~37% 尚可，但销量下滑和 Vonage 失误吃掉大量资本\n  - 诺基亚 2023 年毛利率 ~39%，净利润小正，但相比 2022 利润峰值已下滑\n  - 华为载波业务：更高垂直整合度（自研芯片+软件），理论上成本结构有优势，但受制裁后高端芯片供给受限，成本上升\n- **真正的利润重心在软件和服务**：硬件毛利率 20–30%，但多年期服务合同（网络托管、优化、保障）毛利率更高；爱立信/诺基亚均在把商业模式从「卖设备」转向「卖服务订阅」\n- **上游分成**：TSMC 拿走基带芯片制造的稳定利润（毛利率约 53%，远高于整机商）；射频组件商（Wolfspeed、WIN Semiconductor 等）拿走 RF 链利润的一部分\n- **谁最先被政治压力打中**：若爱立信/诺基亚市场份额受 Open RAN 侵蚀，封闭系统的服务合同溢价将最先被侵蚀；若 TSMC 供给收紧，基带芯片价格上涨首先打到整机成本，再传导至运营商 capex\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "全球 RAN 市场 $280–320 亿（2023）",
    "level": "C3",
    "source": "Dell'Oro Group 分析师报告（业界广知，未取原文）"
   },
   {
    "item": "华为 ~31%、爱立信 ~26%、中兴 ~15%、诺基亚 ~14%、三星 ~7%",
    "level": "C3",
    "source": "Dell'Oro Group（同上）"
   },
   {
    "item": "FCC rip-and-replace 成本 $49.8 亿",
    "level": "C4",
    "source": "FCC 向国会提交报告（公开政府文件）"
   },
   {
    "item": "NDAA §889 禁用华为/中兴的联邦合同条款",
    "level": "C4",
    "source": "NDAA FY2019 公开法律文本"
   },
   {
    "item": "华为 Entity List 2019-05-16",
    "level": "C4",
    "source": "BIS 公告（公开政府档案）"
   },
   {
    "item": "爱立信 FY2023 Networks 部门营收 SEK ~165B",
    "level": "C3",
    "source": "爱立信年报（广泛引用，未核原文）"
   },
   {
    "item": "诺基亚 FY2023 Mobile Networks ~€10B",
    "level": "C3",
    "source": "诺基亚年报（同上）"
   },
   {
    "item": "华为 Carrier BG FY2023 ~CNY 253B",
    "level": "C3",
    "source": "华为 2023 年报摘要（公开部分）"
   },
   {
    "item": "爱立信基带 ASIC = Intel 4 工艺（Intel Foundry）",
    "level": "C3",
    "source": "Tom's Hardware + 爱立信 Silicon 页（`tc-basestation-primary/D-sep-chip-supply/ericsson-asic-foundry-intel.txt`）"
   },
   {
    "item": "诺基亚 ReefShark SoC 代工来源",
    "level": "C2",
    "source": "待核（Nokia Q4 PDF 未取）"
   },
   {
    "item": "GaN-on-SiC 底材主要 Wolfspeed/Coherent（美）",
    "level": "C2",
    "source": "行业共识，未取原文"
   },
   {
    "item": "cm-gallium 镓出口管制直接影响 GaN/GaAs RFPA 成本",
    "level": "C3",
    "source": "已核 USGS MCS 2026 + 行业分析"
   },
   {
    "item": "华为 5G SEP >2700 件",
    "level": "C3",
    "source": "3GPP/华为声明（业界广知，需回原始声明）"
   },
   {
    "item": "Open RAN 尚未大规模量产替代封闭 RAN",
    "level": "C3",
    "source": "Dish/Rakuten 案例广泛报道"
   },
   {
    "item": "中国 5G 基站数量 2023 底超 330 万个",
    "level": "C4",
    "source": "工信部官方统计"
   }
  ],
  "contested": {
   "title": "英国政府华为 5G 态度逆转（2020 年 1 月→7 月）",
   "summary": "用五个阅读动作读这场争夺：\n**① 校准颗粒度**：这场争夺不是\"中英关系\"的宏观博弈，而是一个具体的技术问题翻转：英国国家安全通信中心（NCSC）对华为风险的评估，在 5 个月内从\"可管控\"变成了\"不可管控\"。这个评估翻转是什么导致的，是这场争夺的真正颗粒度。"
  },
  "gaps": [
   "按「最影响卡点判断」排序：",
   "1. 【缺口：Dell'Oro Group 2023 全球 RAN 市场份额报告——需核华为/爱立信/诺基亚/中兴/三星具体数字，C3 分析师估算的一手数据来源】",
   "2. 【缺口：爱立信 FY2023 Annual Report Networks 部门营收精确数字、毛利率（总营收 SEK 263.4B 已核，Networks 分部仍 C3 估算）】",
   "3. 【缺口：诺基亚 FY2023 Annual Report——Mobile Networks 分部营收、毛利率、调整后净利润】",
   "4. 【缺口：FCC「Secure and Trusted Communications Networks Reimbursement Program」最新状态报告（~2023–2024）——$49.8 亿数字的原文出处与项目进度】",
   "5. 【**已闭**（2026-06-23）：爱立信 Baseband ASIC 代工来源 = Intel 4，非 TSMC，C3 已核；Intel 18A 路线图确认】",
   "6. 【缺口：诺基亚 ReefShark SoC 代工来源——Nokia Q4 PDF（nokia.com 403 未取），若确认 TSMC 则「清洁网络-TSMC 单点」对诺基亚仍成立】",
   "7. 【缺口：NDAA FY2019 §889 全文 + FCC 47 CFR Part 54 Subpart O 剥离规则——法律文本原文，确认覆盖范围、豁免条件和执行机制】",
   "8. 【缺口：华为 5G SEP 声明数量——3GPP 标准必要专利数据库或华为官方 IP 报告；影响「剥离华为硬件但仍付 SEP 费」这一判断的精确度】"
  ]
 },
 "tc-mobile-chip": {
  "sourceFile": "tc-mobile-chip.md",
  "archiveId": "tc-mobile-chip",
  "established": "2026-07-06",
  "updated": "2026-07-07",
  "cLevelOverall": "C2–C4",
  "sketch": false,
  "opening": "移动芯片节点和 ac-gpu 节点看起来结构相似——都是半导体设计公司、都依赖台积电、都受美国出口管制——但有一条根本差异需要先说清楚：**ac-gpu 是对所有购买方都成立的卡点（全球 AI 训练产能集中在 NVIDIA 一家），tc-mobile-chip 是定向卡点（全球中端以上 Android 手机仍能拿到联发科/高通，卡住的是中国的先进自研芯片路线，具体说是华为/海思）。**\n\n这个区别决定了本节点的分析重心。它不是\"谁掌控全球手机芯片\"的问题，而是：**美国技术管辖能否阻止中国建立自己的先进移动 SoC 闭环——包括设计、制造、生态——而不依赖台积电或美国公司**。\n\n2023 年 8 月华为 Mate 60 Pro 上市（搭载麒麟 9000S，由 SMIC N+2 工艺制造），是这个节点被最近一次真实争夺时显出的结构：管制在 5nm 以下节点几乎完整，7nm 级被 SMIC 以 DUV 多次曝光工艺部分绕过，成本和良率有重大惩罚，但已量产。这不是管制失效，是管制被局部绕过、同时触发新一轮收紧的完整周期。\n\n---",
  "holders": [
   {
    "entity": "高通 Qualcomm (NASDAQ: QCOM)",
    "role": "Android 旗舰 SoC + 5G modem 主导；苹果 iPhone modem 供应商（2023 年后）",
    "scale": "Android SoC ~45–50%（C3）；QCT FY2023 ~$285 亿（C3 年报）",
    "jurisdiction": "美国加州（直接受 EAR 管辖）",
    "group": null
   },
   {
    "entity": "联发科 MediaTek (TWSE: 2454)",
    "role": "中端 SoC 主导，高端追赶",
    "scale": "Android SoC ~35–40%（C3）；FY2023 ~NT$4,134 亿（C3 年报）",
    "jurisdiction": "台湾（受 EAR FDP 规则覆盖，设计和制程均含美国技术）",
    "group": null
   },
   {
    "entity": "苹果 Apple (NASDAQ: AAPL)",
    "role": "iPhone/iPad SoC（A 系列）自研自用",
    "scale": "iPhone 全球约 20% 出货量（C3）；A 系列不对外销售",
    "jurisdiction": "美国（法域内，无政治卡点）",
    "group": null
   },
   {
    "entity": "海思/HiSilicon（华为子公司）",
    "role": "华为手机专用 Kirin 系列；2020 年后受制于 SMIC 产能",
    "scale": "华为手机业务（截至 2023 年仍有销售，但高端产能有限，C3）",
    "jurisdiction": "中国（受 EAR Entity List 限制）",
    "group": null
   },
   {
    "entity": "SMIC（中芯国际，HK: 0981）",
    "role": "海思 Kirin 9000S 等的唯一可用先进代工厂",
    "scale": "N+2 工艺（约 7nm 级 DUV 多次曝光）；2022 年后美国限制 SMIC 设备进口（C4）",
    "jurisdiction": "中国（Entity List 附注，设备供应受 BIS 2022 IFR 限制）",
    "group": null
   },
   {
    "entity": "ARM（SoftBank/Arm Holdings, NASDAQ: ARM）",
    "role": "处理器架构许可（高通、联发科、海思均用 ARM 核心）",
    "scale": "全球 SoC 架构市场约 99%+（C3，ARM 网站）；FY2023 营收约 $26 亿（IPO 招股书，C3）",
    "jurisdiction": "英国（含美国实验室人员和技术，触发 EAR）",
    "group": null
   }
  ],
  "upstream": [
   "**台积电先进制程（最关键）**：高通 Snapdragon 8 Gen 系列走 TSMC 4nm/3nm；联发科 Dimensity 高端走 TSMC 4nm。TSMC 是两家 SoC 设计公司的核心生产节点。—— 见 ac-fab 节点。TSMC 受 FDPR 全面覆盖，向 Entity List 实体停止服务（C4，已核）。",
   "**ARM 架构许可**：高通/联发科/海思均依赖 ARM Cortex 核心（或授权自定制）。ARM 2019 年暂停向华为授权（C3），后华为开发基于 ARM v8 的自研 TaiShan 核心（已取得的架构许可可继续用，但无法升级到最新 v9 特性）。",
   "**EDA 工具**：Synopsys/Cadence 设计和验证 SoC，受 EAR 管控——见 ac-eda 节点。",
   "**TSMC PDK（工艺设计套件）**：SoC 设计必须针对特定代工厂工艺包开发，换代工厂需重新适配（数月至数年）。此为 TSMC 架构绑定的一部分。",
   "**EUV 光刻（通过 TSMC/SMIC 间接）**：5nm 以下需 EUV，SMIC 没有 EUV，是中国先进 SoC 路线的硬天花板——见 ac-euv 节点。"
  ],
  "downstream": [
   "**全球 Android OEM**（三星/小米/OPPO/vivo/Nothing 等）：依赖高通或联发科供货；高通 China 营收历史约占 QCT 总营收的 60–64%（C3，广泛引用但无年报单独列项）。一旦中国 OEM 被限制拿高通，全球 Android 高端产品线将出现供应缺口，高通同等受损。",
   "**华为手机部门**：曾是 Kirin 独家消耗方，2019 年前约 2.4 亿部/年出货（C3）；切断台积电后高端出货锐减，2022 年约 3,000 万部（C3 转引）；Mate 60 Pro（Kirin 9000S/SMIC）是局部恢复。",
   "**Apple iPhone modem**（从 2023 年起）：Apple 与 Qualcomm 在 iPhone 调制解调器上有 3 年期合同延续到约 2026 年（C3）——苹果是高通另一大收入来源。",
   "下游依赖特殊性：高通对中国 OEM 的双向依赖（中国 OEM 要高通芯片，高通要中国市场收入），构成了单纯\"美国管控中国\"框架之外的双向绑定。这是本节点和 ac-gpu（中国买 NVIDIA 而 NVIDIA 不怕中国市场萎缩）的结构差异。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": false,
   "text": "**对华为/海思 7nm 级（SMIC N+2）**：`partial`（已量产，代价是良率约 20–30% vs TSMC 90%+、成本约 3–5 倍——均 C2 推算，无公开数字；产能受限于 SMIC N+2 产线量，无法支撑大批量出货）。五问验证：替代哪一层=台积电高端代工；接上时间=2023 年 8 月已实现；转换卡点=EUV 以下节点无法突破，5nm 以下仍 blocked；谁有权启动=已启动（SMIC 自主决策）；执行能力=有，但产能有限。结论：partial fallback，不是 operational。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球移动 SoC 市场（含高通 QCT 手机/IoT 部分 + 联发科全部）约 **$400–450 亿美元**（2023，C2 推算，无单独权威来源；包含 IoT/汽车部分）。\n\n若仅手机 SoC（更窄口径）：约 **$250–300 亿美元**（C2 推算）。\n\n高通 QCT（半导体，含手机/汽车/IoT）FY2023：**$303.82 亿（$30,382M）**（C4，FY2023 10-K，SEC EDGAR Acc.0000804328-23-000055）；总营收 $358.2 亿。\n联发科 FY2023：**NT$4,334 亿（≈$140 亿 USD）**（C4，FY2023 年报直读，PDF 已入库）。\n\n【2026-07-07 典藏工单 completed：高通/联发科/ARM C4 数字已写回，缺口消解。】",
    "cLevels": [
     "C2",
     "C4"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "| 细分市场 | CR 指标 | 主体 | C 等级 |\n|---|---|---|---|\n| Android SoC 整体（不含苹果自用）| 高通 + 联发科 CR2 约 85–90% | 高通 ~50%，联发科 ~35–40% | C3（Counterpoint 转引）|\n| Android 旗舰 5G modem | 高通近独占（>90%）| 高通 Snapdragon X Elite/Plus 系 | C3 |\n| 先进代工（SoC 委托）| 台积电 >90% 先进节点 | — | C3 |\n| 中国先进 SoC 代工（<10nm 级）| SMIC 约 100%（中国境内） | SMIC N+2 | C3（无非中国大陆竞争者）|\n\nPrice maker（对中国 OEM）：高通（因为没有可替代的 5G 旗舰 modem 来源）。价格谈判中高通有明显定价权，中国 OEM 反复寻求联发科替代，价格压力是高通持续盈利的限制因素之一。",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 公司 | FY2023 营收 | 毛利率 | 市值（2023 末）| C 等级 |\n|---|---|---|---|---|\n| 高通 Qualcomm | QCT $303.82亿/$30,382M（总 $358.2亿）| 55.7%（≈56%）| ~$1,400 亿 | C4（FY2023 10-K，SEC EDGAR）|\n| 联发科 MediaTek | NT$4,334亿（≈$140亿 USD）| **48%**（FY2023 年报直读；原 C3 估算 46% 有偏差）| ~$450 亿 | C4（FY2023 年报，PDF 已入库）|\n| ARM Holdings | $26.79亿/$2,679M（FY2023，截至 2023-03-31）| **96%**（纯 IP 授权，几乎零边际成本）| ~$600 亿（IPO 2023-09 上市后）| C4（IPO F-1，SEC EDGAR）|\n| SMIC | ~$45 亿（2023）| 约 19%（压缩明显）| ~$200 亿（H 股）| C3（年报转引）|\n\n高通 QCT 与 QTL（专利授权）双轨特点：QTL 营收约 $15 亿但毛利约 75%，是高价值利润来源；QCT 是量大利薄但体量大。高通靠 QTL 向几乎所有 Android 手机收取专利费，**即使不卖芯片给中国 OEM，仍能靠专利费从中国手机销售中获益**——这是高通对中国市场的另一层双向锁定。\n\n【2026-07-07 典藏工单 completed：高通/联发科/ARM 三项 C4 数字均已写回上表，缺口消解。ARM 毛利率 96% 是纯 IP 授权商业模式（几乎零边际成本），与芯片设计公司本质不同；联发科毛利率 48%（FY2023 年报直读），原 C3 估算 46% 偏低、FY2024 比较列 54% 因重述偏高，以 48% 为准。】",
    "cLevels": [
     "C4",
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 高通中国营收（制造地/出货地口径）：$22,382M（C4，FY2023 10-K），占总营收 62.5%，占 QCT 约 73.7%（$22,382M / $30,382M）。消费国口径（Greater China 最终消费者）：$13,386M = 37% 总营收（C4，FY2025 10-K 回溯列，量法不同须注明）。其中大部分来自中国 Android OEM（小米/OPPO/vivo），部分来自华为（Entity List 前）。\n- 若停供中国 OEM，高通年收入缩减上界约 $220 亿（制造地口径 C4），消费国口径敞口约 $134 亿（C4）。约占总营收 37%–62%，视口径而定。这是管制不扩大到普通 SoC 的重要经济约束。\n- 库存缓冲：中国 OEM 通常保持 3–6 个月 SoC 库存（C2），芯片前置期 6–9 个月。即使管制扩大，断供缺口约 6–12 个月才会传导到手机出货量。\n\n【2026-07-07：高通中国区 C3→C4（FY2023 10-K，两种口径均已写回）。IDC 中国手机 SoC 年度出货量仍缺（付费报告），C2 市场份额数据暂维持。】",
    "cLevels": [
     "C4",
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供经济冲击量级",
    "text": "**华为 2020 年切断（已实证）**：\n- 华为手机出货量从 2019 年约 2.4 亿部→ 2022 年约 2,800–3,000 万部（C3），跌幅约 85–87%。\n- 高通 FY2020 中国营收下降（具体数字无年报拆分，C2 推算下降约 $20–30 亿）。\n- 华为消费者业务（手机为主）营收从 2020 年约 ¥4,829 亿→ 2022 年约 ¥2,145 亿（C3，华为年报转引），跌幅约 56%。\n\n**若管制扩大到一般中国 OEM（反事实）**：\n- 全球 Android OEM 供应链受影响；中国 OEM 约占全球手机出货量 45–50%\n- 【缺口：需要 SIA/BCG 或 CSIS 的半导体供应链冲击报告，以获得量化数字】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "高通在本节点盈利最多：QCT + QTL 双轨，毛利率高，且无论哪家中国 OEM 卖手机都要交 QTL 专利费。台积电代工利润率约 54–56%（C3），也是中间利润最厚的制造环节。ARM 架构费是每颗 SoC 均要承担的无形成本（约每颗 $0.5–2，视许可等级，C2 推算）。\n\n政治压力首先打到高通资产负债表：每次管制收紧导致中国 OEM 转向联发科或国内替代方案，高通损失即时。这是管制工具相对 ac-gpu 节点的政治成本更明显的原因（英伟达在 2022 前对中国 AI GPU 销售更集中在数据中心采购，消费端依赖较低）。\n\n---",
    "cLevels": [
     "C3",
     "C2"
    ]
   }
  ],
  "cList": [
   {
    "item": "华为 2019-05 Entity List",
    "level": "C4",
    "source": "BIS Federal Register / Entity List 原文"
   },
   {
    "item": "FDPR 2020-05-15 生效 + 台积电停供",
    "level": "C4",
    "source": "EAR §734.9(h)；TSMC 公开声明"
   },
   {
    "item": "高通 QCT FY2023 营收 $303.82亿/$30,382M",
    "level": "C4",
    "source": "FY2023 10-K，SEC EDGAR Acc.0000804328-23-000055"
   },
   {
    "item": "高通中国营收 $22,382M（制造地口径，62.5%）/ $13,386M（消费国口径，37%）",
    "level": "C4",
    "source": "FY2023 10-K + FY2025 10-K 回溯列"
   },
   {
    "item": "联发科 FY2023 营收 NT$4,334亿（≈$140亿 USD）/ 毛利率 48%",
    "level": "C4",
    "source": "FY2023 年报，PDF 已入库（reading-workbench/tc-mobile-chip-primary/）"
   },
   {
    "item": "高通 + 联发科 Android SoC ~85–90%",
    "level": "C3",
    "source": "Counterpoint Research 转引"
   },
   {
    "item": "SMIC N+2 约 7nm 级、已量产 Kirin 9000S",
    "level": "C3–C4",
    "source": "TechInsights 拆机报告（C3-4，公开）"
   },
   {
    "item": "SMIC N+2 良率约 20–30%（vs TSMC ~90%）",
    "level": "C2",
    "source": "行业分析师推算，无公开原始数据"
   },
   {
    "item": "华为手机出货 2022 年约 2,800–3,000 万部",
    "level": "C3",
    "source": "IDC/Counterpoint 转引"
   },
   {
    "item": "ARM Holdings FY2023 营收 $2,679M，毛利率 96%",
    "level": "C4",
    "source": "IPO F-1，SEC EDGAR Acc.0001193125-23-216983"
   },
   {
    "item": "BIS 2022-10-07 IFR SMIC 条款",
    "level": "C4",
    "source": "联邦公报 87 FR 62186，已在 ps-exportctrl 核"
   },
   {
    "item": "5nm 以下 SMIC 无 EUV 故 blocked",
    "level": "C4",
    "source": "EUV 管控事实（ac-euv 已核）+ SMIC 无 EUV 是公开事实"
   }
  ],
  "contested": {
   "title": "2023 年 8 月：华为 Mate 60 Pro + Kirin 9000S（SMIC N+2）发布",
   "summary": "这是 2020 年台积电停供后，中国先进移动 SoC 路线第一次经过现实检验的事件，照出了管制的真实边界。"
  },
  "gaps": [
   "按「最影响卡点判断」排序：",
   "1. **【最高优先】SMIC N+2 良率和成本数据**：需要 TechInsights 或 SemiAnalysis 的半导体制造分析报告（含 Kirin 9000S die analysis）。当前 C2 推算，此数字直接决定 SMIC 替代路线有多少实际可用性。",
   "2. ~~**高通 FY2023 10-K（地区营收拆分）**：已完成（2026-07-07 典藏工单，C4）。~~",
   "3. ~~**联发科 FY2023 年报**：已完成（2026-07-07 典藏工单，C4，毛利率 48%）。~~",
   "4. ~~**ARM IPO F-1 招股书**：已完成（2026-07-07 典藏工单，C4，营收 $2,679M，毛利率 96%）。~~",
   "5. **Counterpoint/IDC 全球 SoC 市场份额报告（2023）**：验证高通/联发科市场占比，升 Q2 至 C3+。",
   "6. **华为 2022-2023 年出货量**：IDC 或 Counterpoint 中国手机出货数据，验证 Q5 断供影响量。"
  ]
 },
 "tc-optical": {
  "sourceFile": "tc-optical.md",
  "archiveId": "tc-optical",
  "established": "2026-07-07",
  "updated": "2026-07-07",
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": "光纤光缆制造节点和 ir-cables（海底光缆基础设施）看起来是同一件事，但有一条根本区别需要先说清楚：ir-cables 分析的是已铺设的海底光缆——谁建了它、谁控制路由、谁能切断它；tc-optical 分析的是光纤本身的制造能力——谁能制造出满足电信级、潜海级、军用级要求的光纤，以及这种制造能力如何分布。\n\n这个区别导致两个节点的政治分析方向完全相反：在 ir-cables，中国通过 HMN Technologies（华海通信）参与建设、被西方排斥在外；在 tc-optical，**中国是主要制造方**——全球约 50–60% 的标准光纤由中国企业生产，而卡点在另一侧：特种光纤（超低损耗、潜海级、保偏、铒掺杂放大器用）的制造能力和光纤预制棒（preform）的生产技术，仍然集中在美日欧的 Corning、Shin-Etsu Chemical、Sumitomo Electric 和 Prysmian 手中。\n\n因此，tc-optical 的分析核心是两件事：其一，标准电信光纤（Corning 于 1970 年发明的低损耗单模光纤技术今已成熟扩散）的全球定价权在哪里；其二，特种光纤的制造壁垒在哪里，以及这两种卡点对应的政治传动路径有什么不同。\n\n---",
  "holders": [
   {
    "entity": "Corning Inc.（NYSE: GLW）",
    "role": "光纤发明者（1970），ULL 主导，最大西方光纤制造商",
    "scale": "光通信段 FY2023 约 $37 亿（C3，Corning IR 转引）；全球产量份额约 20–25%（C3）",
    "jurisdiction": "美国纽约（EAR 直接管辖）",
    "group": null
   },
   {
    "entity": "YOFC 长飞光纤（HK: 6869）",
    "role": "中国最大光纤光缆制造商；Corning + 武汉邮科院历史 JV",
    "scale": "FY2023 营收约 CNY 140 亿（约 $19 亿，C3）；全球产能份额约 15–20%（C3）",
    "jurisdiction": "中国武汉（HKEX 上市，Corning 持少数股权）",
    "group": null
   },
   {
    "entity": "Prysmian Group（MIL: PRY）",
    "role": "全球最大电缆制造商，主导潜海光缆市场",
    "scale": "FY2023 总营收约 €164 亿（含电力电缆）；电信光缆部门约 €35 亿（C3 估算）",
    "jurisdiction": "意大利米兰（EU 法域）",
    "group": null
   },
   {
    "entity": "Sumitomo Electric（TYO: 5802）",
    "role": "主要光纤/预制棒制造商，VAD 工艺早期开发者",
    "scale": "光纤相关营收约 $5 亿量级（C3 推算）",
    "jurisdiction": "日本（日本经产省法域）",
    "group": null
   },
   {
    "entity": "Shin-Etsu Chemical（TYO: 4063）",
    "role": "光纤预制棒高纯石英玻璃原料，全球领先",
    "scale": "合成石英玻璃份额约 20–30%（C3 推算）",
    "jurisdiction": "日本（日本法域）",
    "group": null
   },
   {
    "entity": "烽火通信（SH: 600498）",
    "role": "中国第二大光纤光缆制造商，华为系背景",
    "scale": "FY2023 营收约 CNY 80 亿（C3）",
    "jurisdiction": "中国武汉（中国法域）",
    "group": null
   },
   {
    "entity": "亨通光电（SH: 600487）",
    "role": "中国大型光缆及系统集成商，近年进军潜海建设",
    "scale": "FY2023 营收约 CNY 150 亿（含多业务，C3）",
    "jurisdiction": "中国苏州（中国法域）",
    "group": null
   }
  ],
  "upstream": [
   "**高纯石英（SiO₂）原料**：光纤的原材料是高纯度石英玻璃（纯度 >99.9999%，经 SiCl₄ 火焰水解制备）。Shin-Etsu Chemical 是全球最大供应商之一；德国 Heraeus 也是主要供应商。高纯石英是精密化学品，目前无政治断供风险，但产地集中（日本/德国）。",
   "**铒/镱等稀土掺杂剂**（EDFA 放大器光纤用）：微量稀土元素掺入光纤核心实现光放大。用量极少（克级/公里），但与 cm-ree 节点存在上游耦合。",
   "**光纤涂覆树脂（UV 固化丙烯酸酯）**：DSM（已被 Covestro 部分收购）、Momentive 等全球多源，无政治卡点。",
   "**拉丝塔和 CVD 设备**：预制棒和光纤拉丝需专用工业设备；这些设备本身无特定出口管制（区别于 EUV 光刻），全球市场较小但多源供应。"
  ],
  "downstream": [
   "**全球电信运营商（骨干网/FTTH/5G 回传）**：全球光纤需求约 3.5–5 亿光纤公里/年（近两年因需求软化下降，C3）；亚太地区（中国/日本/韩国）消耗全球约 55–60%（C3）。",
   "**数据中心互联**：短距光纤需求随 AI 算力基础设施扩张快速增长（见 ac-cloud / ac-power 节点）。",
   "**海底光缆建设商**（Prysmian/TE SubCom/NEC/Alcatel Submarine Networks）：潜海光缆消耗特殊规格 ULL 光纤，每年约 1,500–2,000 万光纤公里（C3 推算）。",
   "**各国政府/军事通信**：军用特种光纤（辐射硬化、保偏导航、战术光纤传感器）——政治敏感度最高，但体量极小。"
  ],
  "fallback": {
   "verdictZh": "部分可行",
   "verdictRaw": "partial",
   "unstructured": true,
   "text": "**对标准 G.652.D 电信光纤**：`operational`（全球多源供应，中国企业产能大，西方/印度/日本均可补充，价格较高但技术等效）。五问：替代哪一层=任何来源标准光纤；接上时间=数周（库存充足，全球多源）；转换环节=无技术壁垒；权限=运营商采购决策；执行能力=已验证（多国电信项目混合采购）。\n\n**对超低损耗（ULL）潜海光纤**（Corning SMF-28 Ultra 等级）：`partial`（Prysmian/Sumitomo 是替代来源，但全球只有 3–4 家供应商；中国来源尚未被潜海缆制造商大规模认证 ULL 等级，C3）。\n\n**对铒掺杂 EDFA 光纤**：`partial`（Thorlabs/OFS/Fibercore 是替代来源；中国 EDFA 光纤质量仍有差距；C3）。\n\n**对军用辐射硬化光纤**：`near-closure`（几乎全为西方/日本供应；中国进口受出口管制约束；C3 推算）。"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球光纤市场（光纤本身，不含光缆）：约 **$100–120 亿美元**（2022 年峰值，C3；2023 年需求软化后约 $80–100 亿，C3）。\n\n若含光缆组装成品：约 **$200–250 亿美元**（2022，C3 全球市场）。\n\n光纤公里产量：全球约 **5 亿光纤公里/年**（2022 峰值，C3）；2023 年因需求软化降至约 **3.5–4 亿光纤公里**（C3）。\n\nCorning 光通信段 FY2023：约 **$37 亿**（C3，Corning IR 网站转引；2022 年约 $43 亿）。\n\n【缺口：需要 Corning FY2023 10-K（NYSE: GLW）光通信段精确分解数字；光纤公里产量需 ITU/IDATE/CRU 行业报告核实】",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "**按产量（光纤公里）**：\n- 中国企业合计 CR（YOFC + 烽火 + 中天 + 亨通）：约 50–60%（C3）\n- Corning CR1：约 20–25%（全球产量，C3）\n- 美日欧 CR4（Corning + Prysmian + Sumitomo + OFS）：约 35–40%（C3 推算）\n\n**按营收（更能反映技术价值）**：\n- 西方企业集中在高价值特种/潜海光纤，实际营收贡献度高于体量占比\n- Price maker（标准光纤）：中国企业（尤其 YOFC，大客户定价影响力强）\n- Price maker（特种/ULL 光纤）：Corning（SMF-28 Ultra 无直接替代，定价权明显）",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 公司 | FY2023 相关营收 | 毛利率（估）| 市值 | C 等级 |\n|---|---|---|---|---|\n| Corning（GLW）| 光通信段约 $37 亿 | 约 35–40%（Corning 整体 ~36%，光通信高于平均，C3 推算）| 约 $280 亿（NYSE，C3）| C3（年报转引，需补 10-K 原文）|\n| YOFC（6869 HK）| 约 CNY 140 亿（约 $19 亿）| 约 18–22%（C3 推算）| 约 HK$200 亿（C3）| C3（年报转引，需补 HK 年报原文）|\n| Prysmian（PRY）| 电信光缆部门约 €35 亿（总 €164 亿）| 约 12–15%（电缆业务，C3 推算）| 约 €150 亿（C3）| C3（年报转引，需补 Prysmian 年报拆分）|\n| 烽火通信（600498）| 约 CNY 80 亿 | 约 18–22%（C3 推算）| 约 CNY 200 亿（C3）| C3（年报转引）|\n\n资本纵深评估：Corning $280 亿市值体量相对小，但在 ULL 光纤技术领域几乎无可替代；其产品被限制的全球影响会远超其市值反映的直接财务规模，因潜海光缆业务高度依赖 Corning ULL 产品。",
    "cLevels": [
     "C3"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "- 全球电信运营商采购中，光纤占网络建设总成本约 10–20%（C2 推算，随建设阶段不同差异大）\n- 亚太地区（中国/日本/韩国）消耗全球约 55–60% 光纤（C3）；欧洲 FTTH 建设是近 3 年增量主要来源\n- 潜海光缆：每条洲际缆（约 10,000 km）消耗约 1,000 万光纤公里；Corning SMF-28 Ultra 占新建潜海缆光纤供应约 50–70%（C3 推算，无独立核实）\n- 库存缓冲：光纤可批量采购和库存，建设商通常有 3–6 个月库存（C2 推算）",
    "cLevels": [
     "C2",
     "C3"
    ]
   },
   {
    "key": "Q5",
    "title": "断供经济冲击量级",
    "text": "**若标准光纤中国来源断供（反事实）**：全球约 50–60% 产量受影响；短期内 Corning/Prysmian/Sumitomo 可补充 ULL 及特种光纤，但标准光纤价格将上涨 50–100%（C2 推算）；全球 FTTH 建设放缓；代价约 $20–50 亿/年全球供应链重组成本（C2 推算，无专项报告）。\n\n**若 Corning ULL 光纤断供（反事实）**：影响约 50–70% 新建潜海光缆的纤材；现有已铺设潜海网络不受影响；重建窗口约 3–5 年（Prysmian/Sumitomo 扩产 + 供应商认证）；代价为海底数字连接扩张计划推迟。\n\n【缺口：需要专项光纤供应链冲击报告（ITU/OECD 或美国商务部）以获得量化支撑】",
    "cLevels": [
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "利润厚度：\n1. Corning 的 ULL/特种光纤：高端定价，毛利约 45%+（C2 推算；超低损耗产品远高于标准产品）\n2. 预制棒技术层（Shin-Etsu/Corning）：技术壁垒高，利润率最厚\n3. 中国企业标准光纤：毛利约 18–22%（C3 推算），靠规模支撑；2022–2023 年价格下跌进一步压缩\n\n政治压力首先打到谁：若出口管制出现，Corning 的 ULL/军用光纤业务受损（体量小）；若中国企业被排斥出 BEAD 等联邦项目，中国出口商失去美国联邦市场份额（国内市场仍大，损失有限）。双向的资本暴露都不构成单方面决定性打击，这是本节点杠杆弱于 EUV 或 HBM 的主要原因。\n\n---",
    "cLevels": [
     "C2",
     "C3"
    ]
   }
  ],
  "cList": [
   {
    "item": "Corning 1970 年发明低损耗光纤",
    "level": "C4",
    "source": "公开历史事实（诺贝尔物理奖 2009 年，Charles Kao）"
   },
   {
    "item": "标准电信光纤 EAR99，无特定出口管制",
    "level": "C4",
    "source": "EAR CCL 常识；军用类在 ECCN 6A002（C4）"
   },
   {
    "item": "中国光纤产量约占全球 50–60%",
    "level": "C3",
    "source": "行业报告转引（无 ITU/IDATE/CRU 原文在库）"
   },
   {
    "item": "Corning 光通信段 FY2023 约 $37 亿",
    "level": "C3",
    "source": "Corning IR 网站转引"
   },
   {
    "item": "YOFC FY2023 营收约 CNY 140 亿",
    "level": "C3",
    "source": "YOFC HK 年报转引"
   },
   {
    "item": "2022–2023 标准光纤价格下跌约 40–50%",
    "level": "C3",
    "source": "行业媒体转引（Light Reading / Fierce Telecom 转引）"
   },
   {
    "item": "BEAD 规则未明文限制中国光纤（截至 2026-07）",
    "level": "C3",
    "source": "NTIA 规则草案公开讨论"
   },
   {
    "item": "潜海光缆约 50–70% 使用 Corning ULL 光纤",
    "level": "C3",
    "source": "行业推算，无独立核实报告"
   },
   {
    "item": "YOFC G.654.E ULL 产品存在但未被潜海缆商大规模认证",
    "level": "C3",
    "source": "行业知识，无认证名单来源"
   },
   {
    "item": "Corning 持 YOFC 约 13–14% 股权",
    "level": "C3",
    "source": "YOFC 招股书转引"
   }
  ],
  "contested": {
   "title": "2022–2023 年全球光纤价格崩塌：标准光纤定价权向中国企业的结构性转移",
   "summary": "这不是一次单一事件，而是一个多方角力的结构性过程，照出了 tc-optical 节点的真实控制分布。"
  },
  "gaps": [
   "按「最影响卡点判断」排序：",
   "1. **【最高优先】Corning FY2023 10-K（SEC EDGAR，NYSE: GLW）**：精确光通信段营收、毛利率分段、产能信息；确认 YOFC 持股比例；ULL 光纤市场份额描述（若有）。当前 C3，升 C4 后量化层更牢固。",
   "2. **YOFC FY2023 HK 年报（HKEX: 6869）**：精确营收拆分（光纤/光缆/系统各段）、Corning 持股最新状态、产能规模。",
   "3. **ITU/IDATE/CRU 光纤市场报告（2023 或 2024）**：全球光纤产量和市场份额，当前 C3 全靠转引，需原报告核实中国比例和价格趋势。",
   "4. **Prysmian FY2023 年报（MIL: PRY）**：电信光缆段精确拆分（目前总营收和电信电缆混合）。",
   "5. **【缺口：ULL 光纤性能对比报告】**：独立测试 YOFC G.654.E vs. Corning SMF-28 Ultra 损耗规格对比，用于确认中国 ULL 光纤的实际替代可行性（当前 C3 推算\"差距存在\"，但无量化数据）。",
   "6. **NTIA BEAD 规则草案**：确认中国光纤是否已进入采购限制讨论正式文件，以及预计时间线。"
  ]
 },
 "tc-satcom": {
  "sourceFile": "tc-satcom.md",
  "archiveId": "tc-satcom",
  "established": "2026-07-08",
  "updated": null,
  "cLevelOverall": "C2–C3",
  "sketch": false,
  "opening": null,
  "holders": [
   {
    "entity": "SpaceX（Starlink）",
    "role": null,
    "scale": null,
    "jurisdiction": "总部/法域：美国德克萨斯州 / 美国法域 · 关键法域特征：ITAR Category XV（卫星出口），FCC 牌照（美国），私有公司（Elon Musk 控制），不公开财务",
    "group": null
   },
   {
    "entity": "SES",
    "role": null,
    "scale": null,
    "jurisdiction": "总部/法域：卢森堡 / 卢森堡+美国法域 · 关键法域特征：上市（Euronext Paris），与 Intelsat 讨论合并；持有 C-band 频谱资产（FCC 拍卖收益）",
    "group": null
   },
   {
    "entity": "Eutelsat（含 OneWeb）",
    "role": null,
    "scale": null,
    "jurisdiction": "总部/法域：法国巴黎 / 法国法域 · 关键法域特征：上市（Euronext Paris），英国政府持股约 10%（OneWeb 遗留），印度 Bharti 持股约 28.5%",
    "group": null
   },
   {
    "entity": "Viasat + Inmarsat",
    "role": null,
    "scale": null,
    "jurisdiction": "总部/法域：美国加州 / 美国法域 · 关键法域特征：NASDAQ: VSAT；2023 年 Inmarsat 收购完成；航空/海事宽带主力",
    "group": null
   },
   {
    "entity": "Amazon Kuiper",
    "role": null,
    "scale": null,
    "jurisdiction": "总部/法域：美国华盛顿州 / 美国法域 · 关键法域特征：Amazon 全资，FCC 授权，2024 首批商业发射",
    "group": null
   },
   {
    "entity": "中国 Guanwang（\"千帆\"）",
    "role": null,
    "scale": null,
    "jurisdiction": "总部/法域：中国上海 / 中国法域 · 关键法域特征：国有背景（上海国资），2024 年 ITU 频率申报资料已提交（C3）",
    "group": null
   },
   {
    "entity": "Iridium（语音/L 波段）",
    "role": null,
    "scale": null,
    "jurisdiction": "总部/法域：美国弗吉尼亚州 / 美国法域 · 关键法域特征：NASDAQ: IRDM，唯一全球 L 波段 LEO 实际运营；DoD 合同约 $900M（FY2019–2029，C3）",
    "group": null
   }
  ],
  "upstream": [
   "**a. 发射能力（最近 5 年向 SpaceX 高度集中）**",
   "全球 LEO 星座的快速扩张需要持续的发射能力补充（卫星平均寿命约 5–7 年，需不断补网）。",
   "**SpaceX Falcon 9 + Starship**：2023 年 SpaceX 占美国商业采购发射约 **86%**（SIA 2024 年度报告，C4）；按全球总发射次数（221 次）口径约 **44%**（SIA 2024，C4）。注：节点此前写\"全球占约 63%，引 CSIS Aerospace 2024\"——CSIS 原链接已 404，SIA 报告中无法确认该口径，来源存疑，已替换为 SIA 可核数字。主要出口管制：SpaceX 本身是美国公司，发射外国卫星需国务院 TAA 技术援助协议（ITAR）。",
   "**ULA（Atlas V/Vulcan）**：美国，军方战略载荷主力，商业市场份额低",
   "**Arianespace（Ariane 5/6）**：法国，欧洲法域，2023 年 Ariane 5 退役后 Ariane 6 故障推迟，市场份额压力大（C3）",
   "**RocketLab**：美国/新西兰，小型 LEO 为主",
   "**中国 CZ（长征）系列**：不向西方商业客户提供，用于国内和\"友好国\"星座发射",
   "**结论**：西方星座的发射来源以 SpaceX 为主，ULA 和 Arianespace 为辅。中国星座自建发射能力。**发射集中在 SpaceX 本身，就是把发射风险和 Starlink 风险叠加在同一家私人公司**。",
   "**b. 卫星制造上游**",
   "**太阳能电池板（GaAs 基）**：Spectrolab（Boeing 子公司，美国），SolAero（美国）。GaAs 基太空太阳能依赖镓供给，与 cm-gallium 耦合（C2 推算，GaAs 用于高效太空电池）",
   "**行波管放大器（TWTA，GEO 标配功放）**：L3Harris（美国），Thales（法国），Tesat（德国），Mitsubishi（日本）——分散，非单点",
   "**相控阵天线（LEO 终端核心）**：SpaceX 自制（Starlink 平板天线），其余供应商市场仍小；大规模量产使 SpaceX 拥有大幅成本优势",
   "**频谱（Ku/Ka/V 波段）**：ITU 分配，有限资源，竞争激烈（见第 9 维）",
   "**c. 地面站（关口站）位置**",
   "关口站（gateway）是卫星与地面互联网骨干的接驳点。LEO 星座要在全球服务，需要在覆盖区域内均匀分布地面站（否则卫星飞过无地面站区域的时段无法提供服务）。SpaceX 全球约 100+ 个关口站（C3 估算）。每个关口站都需要**东道国政府许可**——这是地缘政治直接渗入的接口，任何国家可通过拒绝/吊销关口站许可来阻断本国区域的 Starlink 服务，无需能打卫星。"
  ],
  "downstream": [
   "**战时军事通信**：致命依赖（乌克兰实证）。2022–2023 年乌克兰军队约 90% 战场数据链走 Starlink（C3，媒体报道引用乌军官员）；美 USAF 签约（见下文）",
   "**航空宽带**（in-flight connectivity）：高/可缓冲。Viasat/Inmarsat 覆盖约 70%+ 商业航班，中断代价是旅客体验而非运营安全（C3 SIA）",
   "**海事宽带**（船舶）：高。商船、渔船、军舰——海事是 Starlink 增长最快的非消费端市场之一（C2）",
   "**偏远农村宽带**：高，无替代。阿拉斯加/安第斯/撒哈拉以南非洲等无地面基础设施区域，Starlink 是唯一宽带方案",
   "**新闻/人道主义通信**：可缓冲（有限替代）"
  ],
  "fallback": {
   "verdictZh": "可能改道",
   "verdictRaw": "possible reroute",
   "unstructured": false,
   "text": "**LEO 宽带替代（若 SpaceX Starlink 断供）**：`possible reroute`（非 operational）\n- 五问：替代哪一层=LEO 宽带接入；多久接上=Amazon Kuiper 仍在 ramp-up（2025-2026 才规模化），OneWeb 容量有限；卡在哪个转换=终端不兼容（Starlink 终端不能接 OneWeb 服务，需换硬件）；谁有权限启动=用户自行切换但需等待替代商服务覆盖；现场执行能力=Kuiper 有资本但尚无量产终端\n- 判定：`possible reroute`——Kuiper 是潜在的真替代，但 2 年以上才可能部分 operational\n\n**GEO 宽带替代（容量有限的\"降级\"替代）**：`partial`\n- 对于不需要低延迟的场景（视频会议以外），GEO 宽带理论上可补，但 GEO 延迟约 600ms RTT（LEO 约 20–40ms），无法支持实时战术数据链和 VoIP，对军事场景基本无效\n- 判定：`partial`（商业降级可以，军事不行）\n\n**军事专用卫星（WGS/MUOS/AEHF）替代**：`partial`（容量不足以覆盖规模需求）\n- 五问：替代哪一层=宽带数据传输；多久接上=已有在轨系统，当天切换；卡在哪=总容量远小于 Starlink（WGS 星座总容量约 11 Gbps vs Starlink 单日内可用带宽 Tbps 级，C2 推算）；谁有权限=DoD；执行能力=有但受限\n- 判定：`partial`（军事骨干可切到专用系统，但高频/高带宽战术通信无法维持）"
  },
  "quant": [
   {
    "key": "Q1",
    "title": "市场规模",
    "text": "全球卫星服务市场（含广播/宽带/政府/移动）约 $2,500–2,800 亿（2023，SIA 估算 C3）；其中宽带/固定卫星服务（FSS）约 $160–180 亿（2023，Euroconsult C3）；LEO 宽带细分仍处快速增长阶段。\n\n- **SpaceX Starlink**：约 $66–80 亿（2024，媒体引用内部财务数据，C2；整体 SpaceX 约 $130 亿，C2）\n- **SES**：€1.9B（2022 年报，C3；2023 已与 Intelsat 启动合并谈判）\n- **Eutelsat/OneWeb 合并体**：€1.3B+ Eutelsat GEO + OneWeb LEO（2022 年报，C3）\n- **Viasat + Inmarsat**：约 $2.35B（FY2022 10-K，NASDAQ:VSAT，C3）+ Inmarsat 约 $1.4B（2022，非上市，C2）\n- **Iridium**：$790.7M（FY2023 10-K，NASDAQ:IRDM，C4；原节点写\"约 $7.3 亿\"有误，10-K 确认实际营收为 $790.7M）",
    "cLevels": [
     "C3",
     "C2",
     "C4"
    ]
   },
   {
    "key": "Q2",
    "title": "集中度量化",
    "text": "LEO 宽带在轨卫星数量（截至 2025 年中，C3 媒体汇编）：\n- SpaceX Starlink：约 6,500 颗 → CR1 约 65–70%（C2 推算）\n- OneWeb：约 648 颗\n- Amazon Kuiper：约 200 颗（ramp-up）\n- 中国 Guanwang：约 100 颗（早期）\n- **CR4 LEO 宽带约 90%+（C2 推算）**\n\nGEO 宽带（转发器容量口径，C3）：\n- Intelsat + SES + Eutelsat 约 60–70% 全球 GEO 宽带容量（C3 Euroconsult 估算）\n- 没有全球单一 price maker，区域市场各有主导\n\n**Price maker**：LEO 宽带中 SpaceX 是当前唯一 price setter（消费端 $120/月基准，无竞争者定价参考）。GEO 商品化，买方有多家可选。\n\n【缺口：SIA 2024 年度报告卫星服务市场分类数据 + Euroconsult 2024 LEO 星座市场报告——C3 当前来源无一手年报核】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q3",
    "title": "关键玩家财务概况",
    "text": "| 主体 | 营收（年份）| 毛利率/净利率 | 市值/估值 | 来源 |\n|---|---|---|---|---|\n| SpaceX（整体）| 约 $130 亿（2024，C2）| 未公开（C1）| 约 $2,500–3,500 亿估值（2024 私募轮 C3）| 媒体 C2 |\n| Starlink（分部）| 约 $66–80 亿（2024，C2）| 未公开（C1）| 嵌入 SpaceX 整体估值（C2）| 媒体引用内部数据 C2 |\n| SES | €1.93B（2022，C3）| 毛利率约 40–45%（C2 推算）| 欧交所上市（SES.PA），约 €27 亿市值（2023 C3）| 年报 C3 |\n| Eutelsat/OneWeb | €1.3B+（2022，C3）| 亏损（2022–2024，C3 媒体）| 约 €5 亿市值（2024 压力下，C3）| 年报 C3 |\n| Viasat+Inmarsat | $2.35B（FY2022 10-K，C3）| 约 30%（C2 估算）| 约 $27 亿市值（NASDAQ:VSAT，2024 C3）| 10-K C3 |\n| Iridium | $790.7M（FY2023 10-K，NASDAQ:IRDM，C4；原 $730M 有误）| 净利率约 20%（C4 10-K）| 约 $44 亿市值（NASDAQ:IRDM，C3）| 10-K C4 |\n\n【缺口：SpaceX Starlink 独立财务数据——公司私有，无公开年报；媒体引用 Musk 推文等非正式来源；需等待 IPO 或 SEC 申报文件】",
    "cLevels": [
     "C2",
     "C1",
     "C3",
     "C4"
    ]
   },
   {
    "key": "Q4",
    "title": "下游依赖度量化",
    "text": "**乌克兰军事通信对 Starlink 的依赖**（C3，媒体报道引用乌军官员）：\n- 约 90% 战场数据链（战术指挥、炮兵定位、无人机控制）经由 Starlink（C3 媒体报道，2023 年）\n- 约 42,000 台 Starlink 终端（2023 年，乌克兰境内，C3）\n\n**美国 DoD 对 Starlink 的依赖**：\n- Space Force Starshield 首份合同 $7,000 万（2023-09-01，C4 DoD 公告）；MILNET 后续合同 $22.9 亿（2026-05-26，C4）；媒体引\"约 $7 亿\"说法来源不可核实\n- Iridium 的 DoD 合同：约 $9 亿（2019–2029 基础合同，C3）\n\n**航空宽带依赖**：\n- 约 70%+ 商业航班配备卫星宽带（Viasat/Inmarsat/SES 各约 2,000–4,000 架机队，C2 SIA）\n- 中断代价：旅客体验（非安全），过渡缓冲约 24 小时内可降级\n\n**断供时下游多久无法维持产能**：\n- 乌克兰军事场景：立即（数小时内）战术通信降级，不可快速替代（替代终端需物理运输）\n- 商业航海：约 3–7 天（既有卫星电话 Iridium 作为降级后备）\n- 偏远宽带：立即，无替代",
    "cLevels": [
     "C3",
     "C4",
     "C2"
    ]
   },
   {
    "key": "Q5",
    "title": "断供经济冲击量级",
    "text": "**战时通信中断**：无直接 GDP 数字，但乌克兰案例照出的量级——Starlink 为支撑乌军一年通信的成本约 $1–2 亿（Musk 表示约 $8,000 万，而 SpaceX 总支出约 $2 亿，C3 媒体报道），而相应的战场通信能力如果要靠其他方式替代，成本会是数十倍。\n\n**轨道碎片化（若大规模 ASAT 攻击）**：\n- Kessler Syndrome 情景下特定轨道高度（如 LEO 550km）永久不可用；后续卫星/空间站发射受阻\n- 经济损失量级：政策研究估算 LEO 轨道损失将使全球卫星服务中断，每年约 $2,500–2,800 亿市场（C2 推算，无可信量化来源）\n- 【缺口：RAND 轨道碎片化经济模型报告——需具体研究报告来源】",
    "cLevels": [
     "C3",
     "C2"
    ]
   },
   {
    "key": "Q6",
    "title": "资本流向与利润归宿",
    "text": "价值链利润分布高度不均，且在快速向 LEO 运营商（SpaceX）集中：\n- **传统 GEO 运营商**：利润在带宽租赁（转发器出租），毛利率约 40–50%，但增长停滞，债务负担重（Intelsat 2020 年破产，Eutelsat 股价 2022–2024 大幅下跌）\n- **SpaceX Starlink**：垂直整合（卫星制造+发射+终端+服务），利润分布在哪一段不透明；但终端生产规模化后的边际成本极低，且已开始收取月租（消费端约 $120/月，企业端更高），存在高利润率潜力\n- **卫星制造商（Boeing/Airbus Defense/Thales Alenia）**：利润在单次卫星制造合同，一次性收益不可持续\n- **终端制造**：SpaceX 以接近成本（约 $500 终端价格）出售 Starlink 终端，服务月租才是利润来源——与手机运营商商业模式类似\n\n**政治压力首先冲击谁**：若制裁/断供，最先受冲击的是**带宽租赁型传统 GEO 运营商**（财务脆弱，债务高），SpaceX 因军事合同和政府关系有更强的缓冲，但也依赖 FCC 牌照续期和 DoD 合同续约。\n\n---",
    "cLevels": []
   }
  ],
  "cList": [
   {
    "item": "SpaceX Starlink 在轨约 6,500+ 颗卫星",
    "level": "C3",
    "source": "媒体汇编（SpaceX 官网 + Aerospace Corp）"
   },
   {
    "item": "Starlink 占全球 LEO 宽带星座约 65–70%",
    "level": "C2",
    "source": "推算（总量/SpaceX 数量）"
   },
   {
    "item": "全球卫星服务市场约 $2,500–2,800 亿（2023）",
    "level": "C3",
    "source": "SIA（Satellite Industry Association）年报"
   },
   {
    "item": "SpaceX Starlink 2024 年营收约 $66–80 亿",
    "level": "C2",
    "source": "媒体引用内部数据（Bloomberg/WSJ）"
   },
   {
    "item": "SES 2022 年营收 €1.93B",
    "level": "C3",
    "source": "SES 2022 年报"
   },
   {
    "item": "Viasat+Inmarsat FY2024 合并首年营收 $4.3B",
    "level": "C4",
    "source": "Viasat FY2024 10-K（SEC EDGAR）"
   },
   {
    "item": "Iridium FY2023 营收 $790.7M（原节点误写 $730M）",
    "level": "C4",
    "source": "Iridium FY2023 10-K（SEC EDGAR）"
   },
   {
    "item": "SpaceX 占美国商业采购发射 86%（2023，SIA 口径）",
    "level": "C4",
    "source": "SIA 2024 年度卫星产业报告（Via Satellite 摘要）"
   },
   {
    "item": "乌克兰前线约 90% 战场数据链走 Starlink",
    "level": "C3",
    "source": "媒体报道引用乌军官员 2023 年"
   },
   {
    "item": "Musk 2022 年拒绝激活克里米亚 Starlink",
    "level": "C3",
    "source": "Walter Isaacson 传记（2023），多媒体核实"
   },
   {
    "item": "Space Force Starshield 首份合同 $70M（2023-09-01）",
    "level": "C4",
    "source": "DoD 公开合同公告"
   },
   {
    "item": "Space Force MILNET 合同 $22.9 亿（2026-05-26）",
    "level": "C4",
    "source": "DoD 公开合同公告"
   },
   {
    "item": "ITAR Category XV 覆盖卫星整机/子系统",
    "level": "C4",
    "source": "22 CFR Part 121，USML Category XV"
   },
   {
    "item": "FCC Part 25 太空站和地球站规则",
    "level": "C4",
    "source": "47 CFR Part 25"
   },
   {
    "item": "ITU 无线电规则 RR Article 9–11 频率协调",
    "level": "C4",
    "source": "ITU Radio Regulations（国际条约）"
   },
   {
    "item": "中国 Guanwang 申报约 13,000 颗 LEO",
    "level": "C3",
    "source": "工信部公告/媒体报道"
   },
   {
    "item": "欧盟 IRIS² 合同 2024-12-16 正式签署（原节点误写\"2023\"）",
    "level": "C4",
    "source": "欧委会官方页 + 航天专业媒体一致报道"
   },
   {
    "item": "Viasat KA-SAT 2022-02-24 遭俄罗斯网络攻击",
    "level": "C4",
    "source": "CISA AA22-110A + NCSC UK 2022-05-10 归因声明"
   },
   {
    "item": "SpaceX 2022-02-26 向乌克兰运送第一批 Starlink",
    "level": "C3",
    "source": "Musk 推文 + 媒体核实"
   },
   {
    "item": "乌克兰境内约 42,000 台 Starlink 终端",
    "level": "C3",
    "source": "媒体引用乌克兰政府数据"
   }
  ],
  "contested": {
   "title": "Starlink 乌克兰战场限速/拒绝激活事件（2022–2023）",
   "summary": "**被争夺的节点**：Starlink 对乌克兰军事行动的服务边界决策权——谁决定卫星通信基础设施在战场上做什么、不做什么。"
  },
  "gaps": [
   "按「最影响卡点判断」排序；**已填充**标注填充日期和等级：",
   "1. ~~【缺口：DoD-SpaceX 卫星通信合同原文——确认合同规模和服务条款，卡点\"从慈善到合同控制\"的关键证据】~~ **→ 已填充（2026-07-09，C4）**：DoD 公开合同显示 Starshield 首份合同 $70M（2023-09-01）+ MILNET $22.9B（2026-05-26）；原\"约 $7 亿\"说法无对应记录，已更正。",
   "2. 【缺口：SpaceX Starlink 独立财务数据（官方来源）——影响 Q1/Q3；当前 C2 估算。私有公司，无法通过典藏取得，等 IPO 或官方披露】",
   "3. ~~【缺口：SIA 2024 年度状态报告——全球卫星服务市场数字的一手来源，影响 Q1】~~ **→ 已填充（2026-07-09，C3）**：Via Satellite 对 SIA 第 27 届年报的完整报道（SIA 原报告付费，未购买）。",
   "4. ~~【缺口：Viasat 近期 10-K（SEC EDGAR）——补合并后财务数据，影响 Q3】~~ **→ 已填充（2026-07-09，C4）**：取到 Viasat+Inmarsat FY2024 10-K（合并后首年，营收 $4.3B）；FY2023 单独年报为收购前实体，FY2024 更符合分析需要。",
   "5. ~~【缺口：CSIS Aerospace Security 2024 发射统计报告——SpaceX 全球发射份额 63% 这一数字的来源】~~ **→ 已更正（2026-07-09）**：CSIS URL 返回 404；SIA 2024 报告给出口径为\"SpaceX 占美国商业采购发射 86%\"（非全球总次数 63%）；63% 数字来源不可确认，已从节点删除并替换为 SIA C4 数字。",
   "6. ~~【缺口：CISA 2022-05-10 对 Viasat KA-SAT 攻击归因声明原文——C4 确认 2022 年 2 月事件】~~ **→ 已填充（2026-07-09，C4）**：CISA AA22-110A PDF 已入库；NCSC UK 2022-05-10 归因声明已入库。",
   "7. ~~【缺口：欧盟 IRIS² 计划合同欧委会原文——叙事合法化 F 维度，欧洲战略自主框架证据】~~ **→ 已填充并更正（2026-07-09，C4）**：合同签署日期为 2024-12-16（非 2023）；欧委会官方页 + 多家航天专业媒体一致；节点\"2023\"的误记已更正。",
   "8. 【缺口：中国 Guanwang（\"千帆\"）ITU 频率申报档案——卡点 2（频谱争夺）判断，中国替代路径评估。ITU BR IFIC 数据库需账号，属用户才能取到的三类阻塞之一】"
  ]
 }
};
g.NODE_ARCHIVES_META = {
 "generatedAt": "2026-07-09T05:50:03.659Z",
 "sourceCount": 66,
 "extracted": 66,
 "unmapped": [],
 "warnings": [
  "not-on-page: ac-euv-lightsource（EUV 子节点，待 Phase 5）",
  "not-on-page: ac-euv-optics（EUV 子节点，待 Phase 5）",
  "not-on-page: ac-euv-pellicle（EUV 子节点，待 Phase 5）",
  "not-on-page: ac-euv-photoresist（EUV 子节点，待 Phase 5）",
  "not-on-page: ag-pesticide（ag 组节点位待建）",
  "not-on-page: ag-seed（ag 组节点位待建）",
  "not-on-page: ph-api（ph 组未开）",
  "not-on-page: ph-biotech（ph 组节点位待建）",
  "not-on-page: ph-generic（ph 组节点位待建）",
  "not-on-page: ph-meddevice（ph 组节点位待建）",
  "not-on-page: ph-vaccine（ph 组节点位待建）",
  "not-on-page: re-wind（质量检查未过）",
  "not-on-page: tc-satcom（tc 组节点位待建）"
 ]
};
})(typeof window!=='undefined'?window:globalThis);
