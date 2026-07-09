/* 机器生成：tools/build_data.py ← edge_ledger_v0_2.csv。手改无效，改生成器。 */
window.V09 = {
 "meta": {
  "profile": "1899 UK railways",
  "ledger": "edge_ledger_v0_2.csv",
  "built_by": "tools/build_data.py"
 },
 "anchor": {
  "title": "从煤到运力，从运力到钱，从钱再回到机器——一条首尾相接的回路",
  "body": "现代经济由三种流维持：能量流，即煤和它烧出的热；服务流，这里是运输——人和货物的移动；资金流，即运费收入、开销与资本。三者不是并排的三条线，而是接成一个回路：煤经机车与铁轨变成运力，运力卖成收入，收入扣除开销剩下净利，净利再投回机车与铁轨，下一轮的转换能力就更大。图自下而上五层——能量、机器与线路、运输主干、账本分流、资本回流——顺着走一遍，就是把这条回路走一遍。这是现代经济在任何时代都在重复的结构，1899 年的英国铁路只是数据完整到能整幅画出来的一个剖面。"
 },
 "tiers": [
  {
   "id": "t1",
   "key": "coal",
   "zh": "能源与物料输入",
   "en": "Energy & material input",
   "cards": [
    {
     "id": "coal",
     "zh": "全国煤产",
     "en": "Coal output",
     "value": {
      "cls": "derived",
      "formula": "value(obs_energy_coal_1897_5, million tonnes) × 1e6",
      "inputs": [
       "obs_energy_coal_1897_5"
      ],
      "raw": 206576200.0,
      "disp": "约 2.07 亿吨"
     },
     "bar": null,
     "claim": "煤提供热量底座，但只有分到机车炉膛里的那部分才推得动这台转换器——那张分配表还没拿到。",
     "facts": [
      [
       "统计年份",
       {
        "cls": "ledger",
        "edge_id": "obs_energy_coal_1897_5",
        "raw": 1897.5,
        "disp": "c.1897/8 十年中点"
       }
      ],
      [
       "热当量（换算假设）",
       {
        "cls": "ledger",
        "edge_id": "conv_energy_heat_1897_5",
        "raw": 6054.25,
        "disp": "6,054 PJ"
       }
      ]
     ],
     "ref": {
      "cls": "none",
      "disp": "这是全国的煤，不是铁路烧掉的煤"
     },
     "src": "官方煤产统计 · 热当量按通行系数折算，仅供参照"
    }
   ]
  },
  {
   "id": "t2",
   "key": "machine",
   "zh": "机器与线路能力",
   "en": "Machine & route capacity",
   "cards": [
    {
     "id": "loco",
     "zh": "机车",
     "en": "Locomotives",
     "value": {
      "cls": "ledger",
      "edge_id": "obs_1899_railway_locomotives",
      "raw": 20570.0,
      "disp": "20,570 台"
     },
     "bar": null,
     "claim": "机车与线路把燃料、人工和调度组织成可重复运行的运输能力——这层是能力骨架，不是功率流。",
     "facts": [
      [
       "台数",
       {
        "cls": "ledger",
        "edge_id": "obs_1899_railway_locomotives",
        "raw": 20570.0,
        "disp": "20,570"
       }
      ],
      [
       "合计马力",
       {
        "cls": "none",
        "disp": "未知（原始功率表缺）"
       }
      ]
     ],
     "ref": {
      "cls": "ledger",
      "edge_id": "der_1899_train_miles_per_locomotive",
      "raw": 19263.1,
      "disp": "平均每台一年跑约 19,263 列车英里"
     },
     "src": "Board of Trade Railway Returns 1905"
    },
    {
     "id": "route",
     "zh": "线路",
     "en": "Route miles",
     "value": {
      "cls": "ledger",
      "edge_id": "obs_1899_route_miles",
      "raw": 21700.0,
      "disp": "21,700 英里"
     },
     "bar": null,
     "claim": "轨道网络是运输能力的另一半骨架。",
     "facts": [
      [
       "里程",
       {
        "cls": "ledger",
        "edge_id": "obs_1899_route_miles",
        "raw": 21700.0,
        "disp": "21,700 miles"
       }
      ],
      [
       "资本密度",
       {
        "cls": "ledger",
        "edge_id": "der_1899_capital_per_route_mile",
        "raw": 53102.2,
        "disp": "£53,102 / 英里"
       }
      ]
     ],
     "ref": {
      "cls": "ref_external",
      "source": "地球赤道周长 24,901 英里",
      "disp": "约等于绕地球 7/8 圈"
     },
     "src": "Board of Trade Railway Returns 1905"
    }
   ]
  },
  {
   "id": "t3",
   "key": "transport",
   "zh": "运输吞吐",
   "en": "Transport throughput",
   "cards": [
    {
     "id": "minerals",
     "zh": "矿物",
     "en": "Minerals",
     "value": {
      "cls": "ledger",
      "edge_id": "obs_1899_minerals_tons",
      "raw": 296611190.0,
      "disp": "296,611,190 吨"
     },
     "bar": 1.0,
     "bar_concept": false,
     "claim": "煤和矿石才是铁路运量的大头——和下面的\"商品\"同样按吨计，条和丝的长短粗细可以直接比。",
     "facts": [
      [
       "吨数",
       {
        "cls": "ledger",
        "edge_id": "obs_1899_minerals_tons",
        "raw": 296611190.0,
        "disp": "296,611,190"
       }
      ],
      [
       "占货运",
       {
        "cls": "derived",
        "formula": "minerals ÷ (minerals+merchandise)",
        "inputs": [
         "obs_1899_minerals_tons",
         "obs_1899_merchandise_tons"
        ],
        "raw": 0.7171051224723285,
        "disp": "71.7%"
       }
      ]
     ],
     "ref": {
      "cls": "derived",
      "formula": "minerals ÷ merchandise",
      "inputs": [
       "obs_1899_minerals_tons",
       "obs_1899_merchandise_tons"
      ],
      "raw": 2.5348819630082717,
      "disp": "约为商品运量的 2.5 倍"
     },
     "src": "Board of Trade Railway Returns 1905"
    },
    {
     "id": "merch",
     "zh": "商品",
     "en": "Merchandise",
     "value": {
      "cls": "ledger",
      "edge_id": "obs_1899_merchandise_tons",
      "raw": 117011835.0,
      "disp": "117,011,835 吨"
     },
     "bar": 0.3945,
     "bar_concept": false,
     "claim": "煤矿之外的一切货物——粮食、布匹、机器。与矿物同样按吨计，可直接比较。",
     "facts": [
      [
       "吨数",
       {
        "cls": "ledger",
        "edge_id": "obs_1899_merchandise_tons",
        "raw": 117011835.0,
        "disp": "117,011,835"
       }
      ],
      [
       "占货运",
       {
        "cls": "derived",
        "formula": "merchandise ÷ (minerals+merchandise)",
        "inputs": [
         "obs_1899_minerals_tons",
         "obs_1899_merchandise_tons"
        ],
        "raw": 0.2828948775276715,
        "disp": "28.3%"
       }
      ]
     ],
     "ref": {
      "cls": "ref_external",
      "source": "按 1901 年人口普查全英约 4,000 万人折算",
      "disp": "平均每个英国人约 2.9 吨"
     },
     "src": "Board of Trade Railway Returns 1905"
    },
    {
     "id": "pax",
     "zh": "客运",
     "en": "Passengers",
     "value": {
      "cls": "ledger",
      "edge_id": "obs_1899_passengers",
      "raw": 1106691991.0,
      "disp": "1,106,691,991 人次"
     },
     "bar": 0.62,
     "bar_concept": true,
     "claim": "人次和吨没法放上同一杆秤，这根虚线条只示意活动规模，长短不代表与货运的数量对比。这一年还有另一套略小的客运统计，两套尚未核对清楚，图上用的是官方汇总表里的数。",
     "facts": [
      [
       "人次",
       {
        "cls": "ledger",
        "edge_id": "obs_1899_passengers",
        "raw": 1106691991.0,
        "disp": "1,106,691,991"
       }
      ],
      [
       "线路密度",
       {
        "cls": "ledger",
        "edge_id": "der_1899_passengers_per_route_mile",
        "raw": 50999.6,
        "disp": "51,000 人次/英里线路"
       }
      ]
     ],
     "ref": {
      "cls": "ref_external",
      "source": "按 1901 年人口普查全英约 4,000 万人折算",
      "disp": "当时全国约 4,000 万人——人均一年坐 27 次火车"
     },
     "src": "Board of Trade Railway Returns 1905 Summary Table"
    },
    {
     "id": "tm",
     "zh": "列车英里",
     "en": "Train miles",
     "value": {
      "cls": "ledger",
      "edge_id": "obs_1899_train_miles",
      "raw": 396241265.0,
      "disp": "396,241,265"
     },
     "bar": 0.62,
     "bar_concept": true,
     "claim": "这一年所有列车合计跑过的英里数——衡量整张网络忙碌程度的尺子。虚线条只示意，不与吨数相比。",
     "facts": [
      [
       "列车英里",
       {
        "cls": "ledger",
        "edge_id": "obs_1899_train_miles",
        "raw": 396241265.0,
        "disp": "396,241,265"
       }
      ],
      [
       "载客密度",
       {
        "cls": "ledger",
        "edge_id": "der_1899_passengers_per_train_mile",
        "raw": 2.793,
        "disp": "2.79 人次/列车英里"
       }
      ]
     ],
     "ref": {
      "cls": "derived",
      "formula": "train_miles ÷ 365",
      "inputs": [
       "obs_1899_train_miles"
      ],
      "raw": 1085592.506849315,
      "disp": "每天约 109 万列车英里在网络上滚动"
     },
     "src": "Board of Trade Railway Returns 1905"
    }
   ]
  },
  {
   "id": "t4",
   "key": "accounts",
   "zh": "经营账本",
   "en": "Operating accounts",
   "cards": [
    {
     "id": "gross",
     "zh": "毛收入",
     "en": "Gross receipts",
     "value": {
      "cls": "ledger",
      "edge_id": "obs_1899_total_gross_receipts",
      "raw": 101667065.0,
      "disp": "£101,667,065"
     },
     "bar": 1.0,
     "bar_concept": false,
     "claim": "运输服务被折成收入——产品/服务流在这一层转入资金流。三个账目数相加严丝合缝。",
     "facts": [
      [
       "毛收入",
       {
        "cls": "ledger",
        "edge_id": "obs_1899_total_gross_receipts",
        "raw": 101667065.0,
        "disp": "£101,667,065"
       }
      ],
      [
       "每英里年收入",
       {
        "cls": "derived",
        "formula": "gross ÷ route_miles",
        "inputs": [
         "obs_1899_total_gross_receipts",
         "obs_1899_route_miles"
        ],
        "raw": 4685.118202764977,
        "disp": "£4,685"
       }
      ]
     ],
     "ref": {
      "cls": "none",
      "disp": "支出 + 净收 = 毛收，账本内部闭合"
     },
     "src": "Railway Returns 1905 Summary Table No.1 · 人工双录",
     "warn": true
    },
    {
     "id": "working",
     "zh": "运营支出",
     "en": "Working expenditure",
     "value": {
      "cls": "ledger",
      "edge_id": "obs_1899_working_expenditure",
      "raw": 60090687.0,
      "disp": "£60,090,687"
     },
     "bar": 0.591,
     "bar_concept": false,
     "claim": "烧煤、人工、维护——运输的成本，从回路里排出，不再回来。",
     "facts": [
      [
       "支出",
       {
        "cls": "ledger",
        "edge_id": "obs_1899_working_expenditure",
        "raw": 60090687.0,
        "disp": "£60,090,687"
       }
      ],
      [
       "占毛收",
       {
        "cls": "ledger",
        "edge_id": "der_1899_working_expenditure_to_gross",
        "raw": 0.59105,
        "disp": "59.1%"
       }
      ]
     ],
     "ref": {
      "cls": "derived",
      "formula": "working_to_gross × 100",
      "inputs": [
       "der_1899_working_expenditure_to_gross"
      ],
      "raw": 59.105,
      "disp": "每收 100 镑，59 镑花在运营上"
     },
     "src": "Railway Returns 1905 Summary Table No.1 · 人工双录",
     "warn": true
    },
    {
     "id": "net",
     "zh": "净收入",
     "en": "Net receipts",
     "value": {
      "cls": "ledger",
      "edge_id": "obs_1899_net_receipts",
      "raw": 41576378.0,
      "disp": "£41,576,378"
     },
     "bar": 0.4089,
     "bar_concept": false,
     "claim": "扣除开销剩下的部分，上行汇入资本层——它是回流的燃料。",
     "facts": [
      [
       "净收",
       {
        "cls": "ledger",
        "edge_id": "obs_1899_net_receipts",
        "raw": 41576378.0,
        "disp": "£41,576,378"
       }
      ],
      [
       "占毛收",
       {
        "cls": "ledger",
        "edge_id": "der_1899_net_receipts_to_gross",
        "raw": 0.40895,
        "disp": "40.9%"
       }
      ]
     ],
     "ref": {
      "cls": "derived",
      "formula": "net_to_gross × 100",
      "inputs": [
       "der_1899_net_receipts_to_gross"
      ],
      "raw": 40.894999999999996,
      "disp": "每收 100 镑，41 镑是净利"
     },
     "src": "Railway Returns 1905 Summary Table No.1 · 人工双录",
     "warn": true
    }
   ]
  },
  {
   "id": "t5",
   "key": "capital",
   "zh": "资本回流",
   "en": "Capital return",
   "cards": [
    {
     "id": "capital",
     "zh": "缴足资本",
     "en": "Paid-up capital",
     "value": {
      "cls": "ledger",
      "edge_id": "obs_1899_capital_paid_up_total",
      "raw": 1152317501.0,
      "disp": "£1,152,317,501"
     },
     "bar": null,
     "claim": "资本不是终点的钱袋：净收入以账面 3.61% 的比率汇入资本，再投回机车与铁轨——但\"资本如何变回机器\"的直接流量表缺失，回流是概念走向（右缘紫色丝束，向下流）。",
     "facts": [
      [
       "缴足资本",
       {
        "cls": "ledger",
        "edge_id": "obs_1899_capital_paid_up_total",
        "raw": 1152317501.0,
        "disp": "£1,152,317,501"
       }
      ],
      [
       "账面收益率",
       {
        "cls": "ledger",
        "edge_id": "der_1899_net_receipts_to_capital",
        "raw": 0.03608,
        "disp": "3.61%"
       }
      ]
     ],
     "ref": {
      "cls": "derived",
      "formula": "capital ÷ gross",
      "inputs": [
       "obs_1899_capital_paid_up_total",
       "obs_1899_total_gross_receipts"
      ],
      "raw": 11.334226093769894,
      "disp": "约为年毛收入的 11.3 倍"
     },
     "src": "Railway Returns 1905 Summary Table No.1 · 人工双录",
     "warn": true
    }
   ]
  }
 ],
 "gaps": [
  {
   "id": "B1",
   "edge": "gap_loco_fuel_physical",
   "at": "coal",
   "side": "top-left",
   "plain": "这一年铁路到底烧了多少煤，原始表还没拿到，所以能量到机器的线是断的。"
  },
  {
   "id": "B2",
   "edge": "gap_coal_usefulwork",
   "at": "coal",
   "side": "top-right",
   "plain": "煤的热量有多少变成了有用的力气，当时没有可靠换算，这里留着缺口。"
  },
  {
   "id": "B3",
   "edge": "gap_machine_transport",
   "at": "loco",
   "side": "top",
   "plain": "我们知道有 20,570 台机车，但不知道它们合计多大马力——数到力的桥是断的。"
  },
  {
   "id": "B4",
   "edge": "gap_journeys_paxmile",
   "at": "pax",
   "side": "top",
   "plain": "只知道坐了多少次车，不知道平均坐多远——人次换不成人英里。"
  },
  {
   "id": "B5",
   "edge": "gap_tons_tonmile",
   "at": "minerals",
   "side": "top",
   "plain": "只知道运了多少吨，不知道平均运多远——吨数换不成吨英里。"
  },
  {
   "id": "B6",
   "edge": "gap_accounts_to_roce",
   "at": "capital",
   "side": "right",
   "plain": "账面收益率 3.61% 不等于投资人真实回报，证券与分红的原始表还没拿到。"
  }
 ],
 "gaps_archived": [
  {
   "edge": "gap_sectoral_hp",
   "why": "主语是 1800–1890 全国分部门马力，越出 1899 铁路剖面，不上屏"
  },
  {
   "edge": "gap_transport_accounts_sameyear",
   "why": "客运口径分叉的配对备注，已在客运卡详情披露，不单设断口"
  }
 ],
 "flows": {
  "spacing": {
   "measured": 3.4,
   "concept": 5.5
  },
  "bundles": [
   {
    "id": "coal-loco",
    "from": "coal",
    "to": "loco",
    "color": "coal",
    "n": 9,
    "concept": true
   },
   {
    "id": "loco-merch",
    "from": "loco",
    "to": "merch",
    "color": "machine",
    "n": 9,
    "concept": true
   },
   {
    "id": "route-tm",
    "from": "route",
    "to": "tm",
    "color": "machine",
    "n": 9,
    "concept": true
   },
   {
    "id": "minerals-gross",
    "from": "minerals",
    "to": "gross",
    "color": "transport",
    "n": 38,
    "concept": false,
    "ratio_basis": [
     "obs_1899_minerals_tons",
     "obs_1899_merchandise_tons"
    ]
   },
   {
    "id": "merch-gross",
    "from": "merch",
    "to": "gross",
    "color": "transport",
    "n": 15,
    "concept": false,
    "ratio_basis": [
     "obs_1899_minerals_tons",
     "obs_1899_merchandise_tons"
    ]
   },
   {
    "id": "pax-gross",
    "from": "pax",
    "to": "gross",
    "color": "transport",
    "n": 8,
    "concept": true
   },
   {
    "id": "tm-gross",
    "from": "tm",
    "to": "gross",
    "color": "transport",
    "n": 8,
    "concept": true
   },
   {
    "id": "working-out",
    "from": "working",
    "to": "@left",
    "color": "accounts",
    "n": 16,
    "concept": false,
    "ratio_basis": [
     "der_1899_working_expenditure_to_gross",
     "der_1899_net_receipts_to_gross"
    ]
   },
   {
    "id": "net-capital",
    "from": "net",
    "to": "capital",
    "color": "accounts",
    "n": 11,
    "concept": false,
    "ratio_basis": [
     "der_1899_working_expenditure_to_gross",
     "der_1899_net_receipts_to_gross"
    ]
   },
   {
    "id": "capital-return",
    "from": "capital",
    "to": "@right-machine",
    "color": "capital",
    "n": 10,
    "concept": true,
    "down": true
   }
  ]
 }
};
