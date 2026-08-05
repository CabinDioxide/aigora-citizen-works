window.MONITORING_DATA = {
  dependencies: [
    { id: "dep-ai-gpu-export-us-china", subject: "中国 AI 训练能力", stackFocus: "AI infrastructure: GPU / HBM / cloud scheduler", dependsOn: "NVIDIA GPUs, HBM, advanced packaging, EDA", layer: ["L0", "L1", "L3"], interruptor: "U.S. BIS", mechanism: "Export control / license denial", substitutability: "Partial; expensive and slow", status: "draft" },
    { id: "dep-eu-industry-gas", subject: "欧洲工业基础", stackFocus: "Energy: gas supply / grid / industrial heat", dependsOn: "Gas supply, LNG terminals, grid stability", layer: ["L0", "L2", "L3"], interruptor: "Russia, LNG market, infrastructure operators", mechanism: "Supply cutoff / price shock", substitutability: "Medium; sector-dependent", status: "draft" },
    { id: "dep-eastasia-hormuz", subject: "东亚工业能源供应", stackFocus: "Energy and shipping: LNG tanker / insurance / strait", dependsOn: "Gulf oil and LNG via maritime chokepoints", layer: ["L0", "L2"], interruptor: "Regional conflict, insurers, navies", mechanism: "Strait disruption / insurance shock", substitutability: "Low in short term", status: "draft" },
    { id: "dep-cloud-sovereignty", subject: "国家数字服务", stackFocus: "Internet/cloud: IAM / billing / control plane", dependsOn: "U.S. cloud providers, identity, billing, support contracts", layer: ["L1", "L2", "L3"], interruptor: "Cloud vendor, U.S. legal process, regulators", mechanism: "Account suspension / compliance restriction", substitutability: "Medium to low", status: "draft" },
    { id: "dep-internet-reachability", subject: "跨境互联网可达性", stackFocus: "Internet: BGP / DNS / submarine cable", dependsOn: "BGP, submarine cables, DNS, IXPs", layer: ["L0", "L1"], interruptor: "States, cable operators, network operators", mechanism: "Cable cut / route withdrawal / filtering", substitutability: "Varies by route diversity", status: "draft" }
  ],
  industries: [
    {
      name: "Semiconductor",
      risk: "Export-control sensitive",
      lanes: [
        ["Physical", "Power, ultrapure water, specialty gases, wafers", "medium", "draft"],
        ["Equipment", "EUV/DUV, etch, deposition, metrology", "high", "draft"],
        ["Software", "EDA, recipes, fab automation, yield analytics", "high", "draft"],
        ["Market", "Foundries, OSATs, equipment vendors", "medium", "draft"],
        ["Control", "Licenses, entity lists, investment screening", "high", "source-linked"],
        ["Exit", "Mature-node fallback; domestic tooling is slow", "high", "draft"]
      ]
    },
    {
      name: "AI Infrastructure",
      risk: "Power and GPU constrained",
      lanes: [
        ["Physical", "Electricity, cooling, land, fiber", "high", "draft"],
        ["Equipment", "GPUs, HBM, networking, substations", "high", "draft"],
        ["Software", "CUDA-like stack, schedulers, orchestration", "medium", "draft"],
        ["Market", "Hyperscalers, GPU vendors, utilities", "medium", "draft"],
        ["Control", "GPU controls, grid permits, data rules", "high", "source-linked"],
        ["Exit", "Smaller models, distributed inference, partial cloud shifts", "medium", "draft"]
      ]
    },
    {
      name: "Energy / LNG",
      risk: "Chokepoint exposed",
      lanes: [
        ["Physical", "Gas fields, oil fields, pipelines, ports", "high", "draft"],
        ["Equipment", "LNG trains, tankers, terminals, refineries", "medium", "draft"],
        ["Software", "SCADA, grid dispatch, trading systems", "medium", "draft"],
        ["Market", "Producers, traders, insurers, utilities", "medium", "draft"],
        ["Control", "Sanctions, naval control, insurance, price caps", "high", "source-linked"],
        ["Exit", "Rerouting, reserves, fuel switching; costly", "high", "draft"]
      ]
    },
    {
      name: "Payments / Clearing",
      risk: "License and compliance gated",
      lanes: [
        ["Physical", "Liquidity, identity, reserves, compliance data", "medium", "draft"],
        ["Equipment", "Core banking, card rails, correspondent accounts", "medium", "draft"],
        ["Software", "Messaging, sanctions screening, ledgers", "medium", "draft"],
        ["Market", "Banks, SWIFT, card networks, stablecoin issuers", "high", "draft"],
        ["Control", "Sanctions, AML/KYC, banking licenses", "high", "source-linked"],
        ["Exit", "Local rails, cash, crypto/stablecoins; uneven", "mixed", "draft"]
      ]
    },
    {
      name: "Internet / Cloud",
      risk: "Reachability and account control",
      lanes: [
        ["Physical", "Power, fiber, submarine cables, spectrum", "medium", "draft"],
        ["Equipment", "Routers, IXPs, data centers, satellites", "medium", "draft"],
        ["Software", "BGP, DNS, TLS, IAM, cloud control planes", "high", "source-linked"],
        ["Market", "Clouds, telcos, CDNs, registries, CAs", "medium", "draft"],
        ["Control", "Data law, lawful access, sanctions, terms", "high", "source-linked"],
        ["Exit", "Multi-cloud, self-hosting, mirrors, route diversity", "mixed", "draft"]
      ]
    }
  ],
  sources: [
    ["OpenSanctions", "L2/L3", "Aggregated dataset", "Entity screening across sanctions and PEP lists", "verified"],
    ["OFAC Sanctions List Service", "L3", "Official source/API", "U.S. sanctions status and list changes", "verified"],
    ["UN Security Council Consolidated List", "L3", "Official XML", "UN sanctions status and list coverage", "verified"],
    ["U.S. Consolidated Screening List", "L2/L3", "Official API", "Export control and denied-party screening", "source-linked"],
    ["UN Comtrade", "L0/L2", "Official trade dataset/API", "Commodity-flow dependency by HS code", "needs-api-key"],
    ["World Bank WITS Trade Stats API", "L0/L2", "Official API", "Country-level trade concentration and import-dependency indicators", "verified"],
    ["WITS Broad Commodity Flow Proxies", "L0/L2", "Official API", "Broad product-group partner import flows", "verified"],
    ["Commodity Flow Watchlist", "L0/L2", "Query design layer", "Candidate HS families for watched chokepoint commodities", "query-designed"],
    ["USITC HTS REST API", "L0/L2", "Official API", "HTS heading validation for candidate HS watchlist", "verified"],
    ["USITC HTS Subheading Derivation", "L0/L2", "Official API-derived query layer", "HS6 candidate extraction for future Comtrade queries", "verified"],
    ["Pruned HS6 Watchlist", "L0/L2", "Query design layer", "Core/supporting/too-broad/exclude tiers for first-priority commodity monitoring", "query-designed"],
    ["World Bank Indicators API", "L0/L2", "Official API", "Energy and infrastructure macro indicators", "verified"],
    ["WRI Global Power Plant Database", "L0", "Dataset/API", "Power generation asset mapping", "slow-source"],
    ["OONI API", "L1", "Public API", "Internet censorship and reachability measurement coverage", "verified"],
    ["RIPEstat Data API", "L1", "Public API", "ASN overview and announced prefixes", "verified"],
    ["SEC EDGAR Submissions API", "L2", "Official API", "Company filings for watched infrastructure firms", "verified"],
    ["Cloudflare Radar", "L1", "Public API/dashboard", "Internet traffic, routing, and outage signals", "needs-token"],
    ["CAIDA BGPStream", "L1", "Data stream", "BGP routing events and anomalies", "source-linked"],
    ["NVD / CVE", "L1", "Official vulnerability API", "Software vulnerability tracking", "verified"],
    ["CISA KEV", "L1/L3", "Official vulnerability catalog", "Known exploited vulnerabilities", "verified"],
    ["GDELT", "L4", "Event/news dataset", "Early warning and clue generation", "seeking-original"]
  ],
  alerts: [
    "Official sanctions, export controls, or regulations hit a watched entity.",
    "A chokepoint disruption affects energy, shipping, internet routing, or payment access.",
    "A key substitute path is closed or materially degraded.",
    "A major vulnerability is both exploited and relevant to watched infrastructure.",
    "Multiple weak signals converge on the same kill switch."
  ]
};
