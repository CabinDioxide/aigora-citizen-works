/* 中英对照字典。语言由页面定：index.html 是中文页（<html lang="zh">），en.html 是英文页（<html lang="en">），
 * 两页共用这份脚本与同一份 data/monitor/latest.json，页内不切换、不重绘；页头的语言按钮是指向另一页的链接，锚随过去。
 * 四样东西：
 *   UI    界面文字（导航、标题、图例、表头、抽屉字段、按钮、提示），键 → [中, 英]，用 t(key) 取。
 *   NAMES latest.json 里的 names：英文专名 → 中文（PortWatch 咽喉点与港口、站点表的 name_zh、检索词、品牌名），
 *         由 monitor/atlas_map.NAMES_ZH 与 data/monitor/sites/*.csv 合成；中文页用 nz(s) 把字符串里的英文名换成中文。
 *         名字只存那一处，这里不放英→中对照。
 *   DV    latest.json 里可枚举的中文数据值（战区名、单位、基线口径、六档结论、警报类型、站名、节点名、链名……），
 *         英文页按原字查表；PAT 是模板型标签的逐段替换规则。用 tv(s) 取：中文页 nz；英文页查表、套规则，仍剩中文的原样返回并加「(zh)」。
 *   自由文本（人工判读、读数段落、枚举表原文等）用 tz / tzh / tzf：英文页取同名 _en 字段；中文页 nz。
 *   另有几张小码表：站点类型 KIND、国家码 CC、证据档 EV、来源文件 SRC、站点表 LIST、栈节点状态 NST。 */

/* 中文页保留原样的拉丁字母串（通行缩写、机构与数据源代号、产品名）。验收脚本 monitor/scripts/check_page_lang.py 读这张表放行；
 * 表外还按 LATIN_KEEP_RE 放行单位与代号（km、MW、mb/d、L0、P1、C3、F1、PP2 这类）和单个字母。加词先想一想读者认不认得。 */
const LATIN_KEEP = [
  'SWIFT', 'CIPS', 'LNG', 'LPG', 'GPU', 'EUV', 'DUV', 'HBM', 'EDA', 'GaN', 'AI', 'AIS', 'ADS-B', 'FIRMS', 'GDELT', 'PortWatch', 'SEC', 'IMF', 'DWT', 'WTI', 'ADR', 'CPC', 'MSA', 'UCDP', 'FRP', 'OFAC', 'BGP', 'DNS', 'CA', 'CDN', 'DDoS', 'ENTSOG', 'GIE', 'AGSI', 'IODA', 'GEM', 'OSM', 'MRI',
  'Esri', 'Leaflet', 'Sentinel-2', 'Copernicus', 'Stack Atlas', 'aisstream', 'Global Fishing Watch', 'GitHub',
  'QAFCO', 'MAPNA', 'OPC', 'SWCC', 'IPP', 'RCMC', 'RPPG', 'ZPPG', 'NCI', 'ISCC', 'IGCC', 'OCGT', 'CCGT', 'ALBA', 'BAZAN', 'ABOT', 'OTEKO', 'ADMA-OPCO', 'Ethydco', 'SASREF', 'MARAFIQ', 'ICE',
  'MAG', 'FDP', 'EL', 'SDN', 'RMB', 'API', 'IP', 'HTTPS', 'TSMC', 'ASML', 'NVIDIA', 'Nullroute', 'capacity_tanker',
  'Esc', 'English', 'CHIPS', 'Fedwire', 'Visa', 'Mastercard', 'USDT', 'SoC', 'OPEC', 'SK',  // 键名、语言链接、栈节点标签里的机构与品牌名
  'MW', 'GW', 'MWh', 'GWh', 'KB', 'MB', 'km', 'kg', 'USD', 'bbl', 'mb/d', 'kb/d', 'MT', 'BCM', 'MCM', 'TEU', 'C1', 'C2', 'C3', 'C4', 'L0', 'L1', 'L2', 'L3', 'L4', 'P0', 'P1', 'P2', 'P3', 'P4',  // 单位与证据等级、层码（LATIN_KEEP_RE 也放行，这里再列一遍，只看列表的扫描也能过）
];
const LATIN_KEEP_RE = [
  /^(km|m|cm|mm|t|kg|MW|GW|MWh|GWh|kWh|USD|bbl|mb\/d|kb\/d|MT|BCM|MCM|Tbps|Gbps|KB|MB|ms|TEU|MMBtu|Gt|Mt|ha)$/,  // 单位
  /^[LPC]\d$/, /^[A-Z]{1,2}-?\d{1,2}[a-z]?$/, /^[A-Z]{2,3}\d{1,2}$/,  // 层码 L0 P1、证据等级 C3、机组代号 F1 A1 G-1 PP2 S2
  /^§?\d+(\.\d+)*(\([a-z]\))*$/,  // 法条节号 734.9(h)
];

const LANG = String(document.documentElement.lang || 'zh').toLowerCase().startsWith('en') ? 'en' : 'zh';
const CJK = /[㐀-鿿（），：；「」、]/;
const HAS_CJK = s => CJK.test(String(s ?? ''));

const UI = {
  title: ['Stack Atlas · 综合仪表盘', 'Stack Atlas · Integrated Dashboard'],
  meta_loading: ['综合仪表盘 · 载入中', 'Integrated dashboard · loading'],
  loading_json: ['载入今日数据 …', 'Loading today\'s data …'],
  load_fail: ['今日数据读不到：{e}。先运行数据重建脚本。', 'Cannot read today\'s data: {e}. Run the data build first.'],
  meta: ['综合仪表盘 · 数据日 {date} · 生成 {built} · 实测数据标「实测」', 'Integrated dashboard · data day {date} · built {built} · measured data tagged "measured"'],
  nav_overview: ['总览', 'Overview'], nav_stack: ['栈', 'Stack'], nav_transmission: ['传导链', 'Transmission'], nav_cost: ['代价', 'Cost'],
  todo: ['（待做）', ' (to do)'],
  built_on_show: ['切到这一页时构建。', 'Built when this view is opened.'],
  lang_link: ['English', '中文'], lang_href: ['./en.html', './index.html'], lang_title: ['切到英文页', 'Switch to the Chinese page'],
  /* 总览 */
  ov_h2: ['总览', 'Overview'],
  cost_banner_tag: ['代价', 'Cost'],
  cost_banner_text: ['霍尔木兹海峡封锁 203 天，台湾五个月的进口支出较上年同期增加 48.31 亿美元，其中 130.43 亿由财政承担',
    'The Strait of Hormuz has been closed 203 days; Taiwan\u2019s import spending over five months rose 4.831 bn USD against a year earlier, of which 13.043 bn was borne by the budget'],
  cost_banner_cta: ['看这次冲击的完整代价 →', 'See the full cost of this shock →'],
  ov_sub: ['真实地图上：咽喉点状态环（IMF PortWatch 近七日通过艘数对基线：停摆红、收窄橙、在用绿）、三个战区的供应链线路、战略站点按影像判读着色、Stack Atlas 事件标记。右侧是三个战区今天的读数，下面是今天的警报',
    'On a real map: chokepoint status rings (IMF PortWatch 7-day transits against baseline: red stopped, amber narrowed, green in use), supply-chain lines of the three theaters, strategic sites colored by imagery reading, Stack Atlas event markers. Right: today\'s readings for the three theaters; below: today\'s alerts'],
  st_stopped: ['停摆', 'Stopped'], st_narrowed: ['收窄', 'Narrowed'], st_inuse: ['在用', 'In use'], st_nodata: ['无数据', 'No data'], st_damaged: ['受损', 'Damaged'], st_unknown: ['未知', 'Unknown'], st_halted: ['已停', 'Stopped'],
  lv_red: ['红', 'Red'], lv_amber: ['橙', 'Amber'], lv_green: ['绿', 'Green'], lv_gray: ['灰', 'Gray'],
  sites_legend: ['站点：', 'Sites: '], site_damaged: ['影像疑似受损', 'Suspected damage in imagery'], site_thermal: ['有热异常', 'Thermal anomaly'], site_nochange: ['无变化', 'No change'], site_unreadable: ['不可判读', 'Not interpretable'],
  click_hint: ['点战区框或线路上的编号站进入战区页', 'Click a theater box or a numbered station on a line to open the theater view'],
  baseline: ['基线', 'baseline'], ratio: ['比值', 'ratio'],
  break_at: ['{ck} 断点 {date}，至今 {n} 天', '{ck} break {date}, {n} days so far'], no_break: ['没有触发断点规则', 'No break rule triggered'], open_arrow: ['打开 →', 'open →'],
  alerts_h2: ['今天的警报', 'Today\'s alerts'],
  alerts_sub: ['{n} 条：断点、指标偏离、战略站点火点异常、影像判读疑似受损。每条来自实测数据文件，证据档「实测」；这里只报偏离，不判断原因',
    '{n} items: breaks, indicator deviations, fire anomalies at strategic sites, suspected damage from imagery. Each comes from a measured data file, evidence tier "measured"; this reports deviation only, not cause'],
  th_kind: ['类', 'Type'], th_theater: ['战区', 'Theater'], th_content: ['内容', 'Content'], th_evidence: ['证据', 'Evidence'],
  cks_summary: ['全部咽喉点 {n} 处（PortWatch，按比值升序）', 'All {n} chokepoints (PortWatch, ascending by ratio)'],
  th_ck: ['咽喉点', 'Chokepoint'], th_recent7: ['近七日日均', '7-day mean'], th_baseline: ['基线', 'Baseline'], th_ratio: ['比值', 'Ratio'], th_break: ['断点', 'Break'], th_last: ['最新日期', 'Latest date'],
  zoom_in: ['放大', 'Zoom in'], zoom_out: ['缩小', 'Zoom out'], layers_ctl: ['图层', 'Layers'],
  base_gray: ['Esri 浅灰底图', 'Esri light gray'], base_sat: ['Esri 卫星影像', 'Esri satellite'], base_street: ['Esri 街道图', 'Esri streets'], attr_tiles: ['底图 © Esri', 'Tiles © Esri'],
  ck_tip: ['{name} · {st} · 近七日 {r7} / 基线 {b}（{ratio}）', '{name} · {st} · last 7 days {r7} / baseline {b} ({ratio})'],
  ck_tip_break: [' · 断点 {d}', ' · break {d}'],
  ck_pop: ['近七日日均 {r7} 艘，基线 {b}，比值 {ratio}', '7-day mean {r7} ships, baseline {b}, ratio {ratio}'], ck_pop_break: ['，断点 {d}', ', break {d}'],
  fire_days: [' · 火点异常日 {n}', ' · fire-anomaly days {n}'],
  ev_topic: ['专题页', 'Topic page'],
  box_tip: ['{t} · 点开战区页', '{t} · open theater view'],
  layer_ck: ['咽喉点状态', 'Chokepoint status'], layer_metro: ['供应链线路', 'Supply-chain lines'], layer_sites: ['战略站点（影像判读）', 'Strategic sites (imagery reading)'], layer_events: ['Stack Atlas 事件', 'Stack Atlas events'], layer_boxes: ['战区框', 'Theater boxes'],
  bypass: [' · 绕行', ' · bypass'],
  /* 栈 */
  stack_h2: ['栈', 'Stack'],
  stack_sub: ['Stack Atlas 的技术栈与政治栈网格。节点右上角的点是今天的状态，由对照表里该节点挂的实测信号算出（红：通过量或挂靠掉到基线一半以下、价格涨三成以上、影像疑似受损；橙：掉到 85% 以下或涨 15% 以上、有热异常；绿：在基线范围内）。没有点的节点没有挂信号，不假装有数。点节点打开抽屉：档案、今天的观测、所在战区节点',
    'Stack Atlas technology and political stack grids. The dot at a node\'s top right is today\'s status, computed from the measured signals attached to it in the correspondence table (red: transits or port calls below half of baseline, price up more than 30%, suspected damage in imagery; amber: below 85% or up more than 15%, thermal anomaly; green: within baseline range). Nodes without a dot have no signal attached and do not pretend to. Click a node to open the drawer: archive, today\'s observation, theater nodes'],
  tech_col: ['技术栈 · L0 物理 → L4 叙事', 'Technology stack · L0 physical → L4 narrative'], pol_col: ['政治栈 · P0 强制 → P4 叙事', 'Political stack · P0 coercion → P4 narrative'],
  n_nodes: ['{n} 节点', '{n} nodes'], n_with_status: [' · {n} 个有今日状态', ' · {n} with status today'],
  th_signal: ['信号', 'Signal'], th_today: ['今天', 'Today'], th_status: ['状态', 'Status'],
  no_signal: ['这个节点没有挂实测信号（对照表里没有给它挂信号）。', 'No measured signal is attached to this node (the correspondence table lists none for it).'],
  no_theater_node: ['没有战区关键节点指向它', 'No theater key node points to it'],
  status_w: ['状态', 'status'], evidence_w: ['证据档', 'evidence'],
  today_obs: ['今天的观测', 'Today\'s observation'], theater_nodes_h: ['所在战区关键节点', 'Theater key nodes'], channels_h: ['现实通道', 'Physical channels'], archive_h: ['档案', 'Archive'],
  countries: ['国家', 'Countries'], companies: ['公司', 'Companies'], gap: ['缺口', 'Gap'],
  node_file: ['节点档案', 'Node file'], node_file_title: ['节点文件 decomposition/nodes/{id}.md', 'Node file decomposition/nodes/{id}.md'],
  node_file_note: ['（打不开说明这个节点还没有拆解档案）', '(if it does not open, this node has no decomposition file yet)'],
  /* 战区页 */
  plan_sub: ['样张确认后按同一布局做', 'To be built on the same layout once the sample is confirmed'],
  break_target: ['断点检测对象：{ck}', 'Break detection target: {ck}'], break_on: ['，断点 {d}', ', break {d}'], break_none: ['，未触发', ', not triggered'],
  metro_h2: ['供应链线路图 · 地图', 'Supply-chain line map'],
  metro_sub: ['{n} 条链按真实航路画在地图上：线是链，站是节点（白圆黑边；几条线共用的是换乘站），站外色环是今天的状态（红＝已停，橙＝收窄，紫＝受损，绿＝在用）；点线是经过已停站的旧路，虚线是绕行；点有编号的站看详情。图例里点某条线，其余淡出',
    '{n} chains drawn on the map along real routes: lines are chains, stations are nodes (white circle, black rim; shared by several lines = interchange), the colored ring is today\'s status (red = stopped, amber = narrowed, purple = damaged, green = in use); dotted = old route through a stopped station, dashed = bypass; click a numbered station for details. Click a line in the legend to dim the others'],
  metro_schematic: ['示意版线路图（不按地理位置，只看拓扑）', 'Schematic line map (topology only, not geographic)'],
  metro_legend_note: ['实线＝战前主路，虚线＝绕行；点线段为经过已停站的路', 'Solid = pre-war main route, dashed = bypass; dotted segment = route through a stopped station'],
  nodes_h2: ['关键节点', 'Key nodes'],
  nodes_sub: ['左图编号即右栏顺序，按紧要程度排；点任一节点，地图、右栏与下方详情三处同时点亮；Esc 取消', 'Numbers on the map match the card order, ranked by urgency; click any node and the map, cards and details below light up together; Esc to clear'],
  tiles_h2: ['指标格', 'Indicators'], map_tiles_h2: ['地图与指标格', 'Map and indicators'],
  tiles_sub: ['圆的大小按近七日日均，红边＝比值低于 0.85；紫点＝GDELT 冲突事件（24 小时）；灰点＝UCDP 事件（最近可用月）；红点＝火点', 'Circle size by 7-day mean, red rim = ratio below 0.85; purple = GDELT conflict events (24 h); gray = UCDP events (latest available month); red = fire detections'],
  aligned_h2: ['同一时间轴上的对齐图', 'Aligned charts on one time axis'],
  aligned_sub: ['四百天，每图一条序列、各自的纵轴；红色虚线是断点，画在每一张上，读的是各层在同一时段的变化，不是相关系数', '400 days, one series per chart with its own y-axis; the red dashed line is the break, drawn on every chart; read it as change across layers in the same period, not as correlation'],
  ba_h2: ['断点前后的影响表', 'Before/after the break'], ba_sub: ['先物理量，再绕行证据，再价格，再新闻量', 'Physical quantities first, then rerouting evidence, prices, news volume'],
  th_indicator: ['指标', 'Indicator'], th_before90: ['断点前九十天均值', '90-day pre-break mean'], th_after: ['断点后均值', 'Post-break mean'], th_change: ['变化 %', 'Change %'],
  ba_none: ['没有触发断点，不做前后对比。', 'No break triggered; no before/after comparison.'],
  conflict_h2: ['冲突层', 'Conflict layer'], conflict_sub: ['GDELT 最近二十四小时按国家与提及最多的事件（地点与行为者是 GDELT 原文）', 'GDELT last 24 hours by country and most-mentioned events (place and actor fields as given by GDELT)'],
  th_cc: ['国家', 'Country'], th_count: ['条数', 'Count'], th_place: ['地点', 'Place'], th_actors: ['行为者', 'Actors'], th_mentions: ['提及', 'Mentions'], source_link: ['原文', 'Source'],
  ucdp_h2: ['UCDP 候选事件', 'UCDP candidate events'], ucdp_span_sep: [' 至 ', ' to '], th_country: ['国家', 'Country'], th_events: ['事件', 'Events'], th_deaths: ['最佳估计死亡', 'Best-estimate deaths'],
  company_h2: ['公司层', 'Company layer'], company_sub: ['近十二个月在申报文件里提到「{p}」的公司，按最近财年收入（十亿美元）；公司名照申报文件的登记名', 'Companies mentioning "{p}" in filings in the last 12 months, by latest fiscal-year revenue (USD bn); names as registered in the filings'],
  th_company: ['公司', 'Company'], th_filings: ['提及件数', 'Filings'], th_revenue: ['收入', 'Revenue'], none: ['无', 'None'],
  company_note: ['提到不等于受影响。这一层要靠提单库才能从「提到」走到「进口货物经此水道」。', 'A mention is not exposure. Getting from "mentioned" to "imports pass through this waterway" needs a bill-of-lading database.'],
  strikes_h2: ['打击对象', 'Strike targets'], strikes_sub_short: ['设施与基地上的热异常', 'Thermal anomalies at facilities and bases'], strikes_none: ['火点历史尚未取到。', 'Fire history not yet fetched.'],
  strikes_total: ['有异常日的站点共 {n} 处，下表先列战略与军事站点，再列异常日最多的二十处设施；', '{n} sites with anomalous days; strategic and military sites first, then the twenty facilities with the most anomalous days; '],
  strikes_sub: ['FIRMS 火点落在设施或基地三公里内、且超过该站点自己基线（窗口前一百八十天的 95 分位）的日子；炼厂火炬（第 2 类）单独计，不算异常。这是筛选表，不是打击清单：荒地火与事故火同样会进来，逐条要对新闻核',
    'Days when FIRMS detections fall within 3 km of a facility or base and exceed the site\'s own baseline (95th percentile of the 180 days before the window); refinery flares (type 2) counted separately, not anomalies. A screening table, not a strike list: wildfires and accidents enter too; each row must be checked against news'],
  col_site: ['站点', 'Site'], col_kind: ['类型', 'Type'], col_country: ['国', 'Country'], col_list: ['清单', 'List'], col_p95: ['基线 95 分位（MW）', 'Baseline p95 (MW)'], col_anom: ['3 月后异常日数', 'Anomalous days after March'], col_first: ['首个异常日', 'First anomalous day'], col_maxanom: ['异常日最大 FRP（MW）', 'Max FRP on anomalous day (MW)'], col_maxfrp: ['窗口内最大 FRP（MW）', 'Max FRP in window (MW)'], col_maxday: ['最大日', 'Max day'],
  manual_reading: ['人工判读 · ', 'Manual reading · '], algo: ['算法：', 'algorithm: '], manual_date: ['（{d} 逐张看图）', '({d}, read image by image)'],
  before_scene: ['断点前', 'Before'], after_scene: ['断点后', 'After'], change_blocks: ['变化块', 'Change blocks'], cloud_blocks: ['云块', 'Cloud blocks'], pixel_diff: ['逐像素差', 'Pixel diff'],
  scenes_line: ['该站 {n} 景里判为无云的 {c} 景；断点前 {b} 景作基线 · 后景亮度 z 值 {z} · 火点异常日 {f}', '{c} of {n} scenes judged cloud-free; {b} pre-break scenes as baseline · after-scene brightness z = {z} · fire-anomaly days {f}'],
  max_paren: ['（最大 {d}）', ' (max {d})'],
  stats_line: ['暗像素比 {a} → {b} · 平均亮度 {c} → {d} · 像素平均差 {e}', 'Dark-pixel fraction {a} → {b} · mean brightness {c} → {d} · mean abs diff {e}'],
  s2_h2_short: ['基地影像变化', 'Base imagery change'], s2_sub_short: ['Sentinel-2 断点前后', 'Sentinel-2 before/after the break'], s2_none: ['影像存档序列尚未取到。', 'Imagery archive series not yet fetched.'],
  s2_h2: ['基地影像变化与判读', 'Base imagery change and reading'],
  s2_sub: ['Sentinel-2，十米，二公里窗口。每站给一个结论，不只给像素统计：先看后景相对该站断点前序列的亮度偏离（薄云、雾），再把前后两景逐像素相减、扣掉整幅明暗差、按 20×20 像素分块数变化块（红框；四公顷一块），云块（蓝框）剔除；变化块集中在 1.2 km 内才算局部变化，再与该站的火点异常日对上。有火点异常的重点站我逐张看过图，写在「人工判读」里，人工判读优先于算法',
    'Sentinel-2, 10 m, 2 km window. One verdict per site, not just pixel statistics: first the after-scene brightness deviation from the site\'s pre-break series (thin cloud, haze), then pixel-wise difference of the two scenes minus the whole-scene brightness shift, change blocks counted in 20×20-pixel tiles (red boxes; 4 ha each), cloud blocks (blue) removed; change counts as local only if concentrated within 1.2 km, then matched to the site\'s fire-anomaly days. Key sites with fire anomalies were read image by image and written under "manual reading", which takes precedence over the algorithm'],
  unjudged: ['未判', 'Not judged'],
  chains_h2: ['产业链影响', 'Supply-chain impact'], chains_none: ['枚举表里没有经过这一战区必经点的链。', 'No chain in the enumeration table passes through this theater\'s chokepoints.'],
  chains_sub: ['Stack Atlas 枚举表里经过这一战区必经点的 {n} 条链；六项指标是 2026 年 8 月逐节点读出的，此处原文照录（公司名、法规号、型号照原文），按停摆窗口排序；断点至今 {d} 天', '{n} chains in the Stack Atlas enumeration table passing through this theater\'s chokepoints; the six indicators were read node by node in August 2026 and are quoted verbatim, sorted by outage window; {d} days since the break'],
  th_chain: ['链', 'Chain'], th_window_type: ['窗口类型', 'Window type'], th_window: ['停摆窗口', 'Outage window'], th_downstream: ['下游', 'Downstream'], th_rebuild: ['重建时间', 'Rebuild time'], th_elasticity: ['价格弹性', 'Price elasticity'], th_forwhom: ['对谁而言', 'For whom'],
  chains_note: ['读法：即时型的链在断点后数周内就应在下游价格与库存上看到；滞后型（氮肥、磷钾肥、造船）按各自窗口延后数月到数年。每条链的正本是它的节点档案。', 'How to read: immediate chains should show in downstream prices and inventories within weeks of the break; lagged ones (nitrogen, phosphate/potash, shipbuilding) follow their own windows, months to years later. The source for each chain is its node file.'],
  /* 节点详情 */
  th_object: ['对象', 'Object'], th_today_n: ['今天的数', 'Today\'s number'], th_note: ['说明', 'Note'],
  no_count_evidence: ['这一节点没有直接的计数证据。', 'No direct count evidence for this node.'],
  no_images: ['这一节点没有站点影像（水道没有固定站点）。', 'No site imagery for this node (a waterway has no fixed site).'],
  atlas_nodes: ['Stack Atlas 节点：', 'Stack Atlas nodes: '],
  ev_measured_note: ['今天算出的数', 'computed today'], ev_news_note: ['新闻标题，未核', 'news headline, unverified'], ev_atlas_note: ['Stack Atlas 枚举表，C 级证据', 'Stack Atlas enumeration table, C-grade evidence'], collapse: ['收起', 'collapse'],
  why_h: ['为什么重要', 'Why it matters'], today_ev_h: ['今天的证据', 'Today\'s evidence'], watch_h: ['接下来看什么', 'What to watch next'], limits_h: ['边界', 'Limits'],
  sat_h: ['断点前后卫星图', 'Satellite images before/after the break'], sat_sub: ['Sentinel-2，十米，二公里窗口；只当线索', 'Sentinel-2, 10 m, 2 km window; a lead only'],
  flow_h: ['上下游流向', 'Upstream and downstream flows'], flow_sub: ['端点是示意位置；实线上游与下游，虚线绕行通道', 'Endpoints are schematic; solid = upstream and downstream, dashed = bypass'],
  flow_up: ['上游来源', 'Upstream source'], flow_down: ['下游去向', 'Downstream destination'], flow_bypass: ['绕行通道', 'Bypass route'],
  chains_on_node_h: ['压在这一节点上的链', 'Chains resting on this node'],
  th_window_short: ['窗口', 'Window'],
  series_h: ['与这一节点直接相关的序列', 'Series directly related to this node'], series_sub: ['四百天，红线断点', '400 days, red line = break'],
  break_label: ['断点 {d}', 'break {d}'],
  /* 地图弹窗与图层 */
  fire_pop: ['火点，辐射功率 {v} MW', 'Fire detection, radiative power {v} MW'], mentions: ['提及', 'mentions'], best_deaths: ['最佳估计死亡', 'best-estimate deaths'],
  pt_pop: ['近七日日均 {v} · 基线 {b} · 比值 {r}', '7-day mean {v} · baseline {b} · ratio {r}'],
  site_hit: ['断点后热异常日数 {n}，首次 {f}', 'Post-break thermal-anomaly days {n}, first {f}'], site_nohit: ['无热异常', 'No thermal anomaly'],
  layer_nodes: ['关键节点（编号）', 'Key nodes (numbered)'], layer_pts: ['咽喉点与港口', 'Chokepoints and ports'],
  layer_strat: ['战略与军事站点 ({n}，红边＝有热异常)', 'Strategic and military sites ({n}, red rim = thermal anomaly)'], layer_hit: ['有热异常的设施 ({n})', 'Facilities with thermal anomaly ({n})'], layer_rest: ['其余设施 ({n})', 'Other facilities ({n})'],
  layer_gdelt: ['GDELT 冲突事件', 'GDELT conflict events'], layer_ucdp: ['UCDP 事件', 'UCDP events'], layer_fires: ['FIRMS 火点（24 小时）', 'FIRMS fire detections (24 h)'],
  iframe_title: ['传导链：五段联动视图', 'Transmission: five-stage linked view'],
  cost_iframe_title: ['霍尔木兹海峡封锁半年：台湾的进口支出增额与承担结构', 'Six months of the Hormuz closure: Taiwan\u2019s additional import expenditure and who bore it'],
  company_n: ['公司 {n}（登记名见提示）', 'Company {n}'], gdelt_event: ['GDELT 事件（地点见提示）', 'GDELT event'], ucdp_event: ['UCDP 事件（名称见提示）', 'UCDP event'], raw_hidden: ['（原文见提示）', ''],
  /* 证据档 */
  ev_measured: ['实测', 'measured'], ev_verified: ['已核', 'verified'], 'ev_source-linked': ['有出处', 'source-linked'], 'ev_needs-review': ['待核', 'needs-review'], 'ev_query-designed': ['查询已设计', 'query-designed'], ev_unknown: ['未知', 'unknown'], ev_news: ['新闻', 'news'], ev_atlas: ['枚举表', 'atlas'],
  /* 代价视图的三条链（2026-09-21） */
  cost_pick: ['看哪一条链', 'Chain'], cost_tw: ['台湾', 'Taiwan'], cost_eu: ['欧洲', 'Europe'], cost_me: ['中东', 'Middle East'], cost_eg: ['埃及', 'Egypt'],
  cost_iframe_title_eu: ['霍尔木兹关闭之后，欧洲多付的钱由谁承担', 'After the Hormuz closure: who bore Europe’s extra energy bill'],
  cost_iframe_title_me: ['霍尔木兹关闭之后的中东：各国出口与代价由谁承担', 'The Middle East after the Hormuz closure: exports and who bore the cost'],
  cost_iframe_title_eg: ['霍尔木兹关闭与以色列断气：埃及的代价由谁承担', 'The Hormuz closure and the Israeli gas cut-off: who bore Egypt’s cost'],
  /* 乌克兰战区：援乌武器供应链遭袭（2026-09-21） */
  sa_h2: ['援乌武器供应链在欧洲境内遭袭', 'Attacks on Europe’s arms supply chain to Ukraine'],
  sa_n_A: ['直接针对援乌设施的事件', 'Incidents aimed directly at Ukraine-aid facilities'], sa_last30: ['近 30 天', 'In the last 30 days'],
  sa_plants: ['其中军工厂', 'Of which arms plants'], sa_unit: ['件', 'incidents'], sa_since: ['{y} 年起', 'since {y}'],
  sa_monthly: ['逐月件数（直接针对援乌设施，2025 年 1 月起）', 'Incidents per month (aimed directly at Ukraine-aid facilities, from January 2025)'],
  sa_trend_note: ['逐月件数反映能检索到的报道，越近的月份越容易找到，不能直接读成趋势。', 'Monthly counts reflect the reports that could be found, and recent months are easier to find, so the bars cannot be read directly as a trend.'],
  sa_events_h: ['事件表：直接针对援乌设施', 'Incidents aimed directly at Ukraine-aid facilities'],
  sa_b_h: ['通用设施，公开材料未说明与援乌有关', 'General infrastructure, not stated in public material to be linked to Ukraine aid'],
  sa_agg_h: ['别家数据集的汇总数', 'Aggregate counts from other datasets'],
  sa_tiers: ['归因分四档，颜色由深到浅：', 'Attribution in four tiers, from dark to light: '],
  sa_map_hint: ['战区地图上的「援乌供应链遭袭」图层每件一个点，按归因分档上色，空心圈表示位置只到国家或地区；默认视野只含乌克兰周边，点地图右上角「看全部遭袭点」可缩放到全部。', 'On the theater map, the layer "Attacks on the Ukraine-aid supply chain" draws one dot per incident, colored by attribution tier; hollow rings mean the location is known only to country or region. The default view covers only the area around Ukraine; press "Show all attack sites" at the top right of the map to zoom out to all of them.'],
  th_date: ['日期', 'Date'], th_target: ['对象', 'Target'], th_role: ['为乌克兰做什么', 'Role for Ukraine'], th_act: ['手段', 'Method'], th_outcome: ['结果', 'Outcome'],
  th_legal: ['法律进展', 'Legal status'], th_attr: ['归因', 'Attribution'], th_src: ['出处', 'Source'], th_metric: ['指标', 'Metric'], th_value: ['数值', 'Value'],
  th_unit: ['单位', 'Unit'], th_period: ['时期', 'Period'], th_geo: ['范围', 'Area'],
  date_month_note: ['（日未公布）', ' (day not published)'], date_report_note: ['（取报道日）', ' (report date)'], src_link: ['出处', 'Source'], src_link2: ['另一出处', 'Second source'],
  layer_ua_attacks: ['援乌供应链遭袭', 'Attacks on the Ukraine-aid supply chain'], ua_fit_all: ['看全部遭袭点', 'Show all attack sites'],
  ua_loc_approx: ['位置取所在国家或地区', 'Location is the country or region'],
  /* 五段联动视图 chain-view.html（2026-09-21） */
  cv_title: ['传导链：五段联动视图', 'Transmission: five-stage linked view'],
  cv_h1: ['五段联动视图', 'Five-stage linked view'],
  cv_date: ['数据日 {d}', 'Data day {d}'],
  cv_legend: ['证据档：', 'Evidence: '],
  cv_status_legend: ['格子：', 'Cells: '], cv_st_done: ['已走到', 'Reached'], cv_st_partial: ['部分走到', 'Partly reached'], cv_st_empty: ['还没有数', 'Not yet measured'],
  cv_filter: ['只看一类联动：', 'Show one kind of link: '], cv_filter_all: ['全部', 'All'],
  cv_chain_col: ['链', 'Chain'], cv_now_at: ['现在走到', 'Now at'], cv_turning: ['折点位置', 'Turning point'], cv_see_analysis: ['看分析 →', 'See the analysis →'],
  cv_state: ['状态', 'State'], cv_gap: ['要量什么', 'What to measure'], cv_more_figs: ['另有 {n} 个数，点开看', '{n} more figures; click to open'], cv_more_figs1: ['另有 1 个数，点开看', '1 more figure; click to open'],
  cv_live_h: ['今天的咽喉点读数', 'Today’s chokepoint readings'], cv_live_ratio: ['近 7 日通过量 ÷ 基线', '7-day transits ÷ baseline'], cv_live_date: ['读数日', 'reading'],
  cv_live_go: ['回仪表盘看这一处', 'Open this chokepoint on the dashboard'],
  cv_attacks_h: ['逐月件数（直接针对援乌设施）', 'Incidents per month (aimed directly at Ukraine-aid facilities)'],
  cv_attacks_recent: ['最近三件', 'Latest three'],
  cv_links_n: ['联动 {n}', '{n} links'], cv_links_1: ['联动 1', '1 link'],
  cv_drawer_figs: ['这一格的数', 'Figures in this cell'], cv_drawer_links: ['与这一格相连的联动', 'Links from or to this cell'],
  cv_no_links: ['这一格没有与别的格相连的联动。', 'No link runs from or to this cell.'],
  cv_no_links_kind: ['这一格没有「{k}」这一类联动。', 'This cell has no link of the kind "{k}".'],
  cv_no_figs: ['这一格还没有数。', 'No figures in this cell yet.'],
  cv_close: ['关闭（Esc）', 'Close (Esc)'], cv_hint: ['点任何一格看它的全部数与联动；再点一次或按 Esc 取消。', 'Click any cell to see all its figures and links; click again or press Esc to clear.'],
  cv_old: ['六月版三情景（旧）', 'June three-scenario version (old)'],
  cv_back: ['← 返回仪表盘', '← Back to the dashboard'],
  cv_src_page: ['出处见分析页', 'Source: see the analysis page'],
  cv_load_fail: ['数据读不到：{e}', 'Cannot read the data: {e}'],
  cv_goto_cell: ['跳到这一格', 'Go to this cell'],
};

/* 站点类型码、国家码、栈节点状态、来源文件、站点表：码 → [中, 英]。 */
const KIND = {
  oil_terminal: ['石油码头', 'Oil terminal'], naval_base: ['海军基地', 'Naval base'], port: ['港口', 'Port'], nuclear: ['核设施', 'Nuclear facility'], air_base: ['空军基地', 'Air base'], airbase: ['空军基地', 'Air base'],
  refinery: ['炼厂', 'Refinery'], lng_export: ['液化天然气出口码头', 'LNG export terminal'], lng_terminal: ['液化天然气接收站', 'LNG terminal'], science_park: ['科学园区', 'Science park'], airport: ['机场', 'Airport'],
  bridge: ['桥梁', 'Bridge'], gas_hub: ['天然气枢纽', 'Gas hub'], power_plant: ['电厂', 'Power plant'], island: ['岛屿', 'Island'], chokepoint: ['咽喉点', 'Chokepoint'],
};
const CC = {
  AE: ['阿联酋', 'UAE'], BH: ['巴林', 'Bahrain'], EG: ['埃及', 'Egypt'], IL: ['以色列', 'Israel'], IQ: ['伊拉克', 'Iraq'], IR: ['伊朗', 'Iran'], JO: ['约旦', 'Jordan'], KW: ['科威特', 'Kuwait'], LB: ['黎巴嫩', 'Lebanon'],
  OM: ['阿曼', 'Oman'], QA: ['卡塔尔', 'Qatar'], SA: ['沙特', 'Saudi Arabia'], SY: ['叙利亚', 'Syria'], YE: ['也门', 'Yemen'], TW: ['台湾', 'Taiwan'], CN: ['中国', 'China'], UA: ['乌克兰', 'Ukraine'], RU: ['俄罗斯', 'Russia'],
  'RU-occupied UA': ['俄占乌克兰领土', 'Russian-occupied Ukraine'], AU: ['澳大利亚', 'Australia'], US: ['美国', 'United States'], JP: ['日本', 'Japan'], KR: ['韩国', 'South Korea'], NL: ['荷兰', 'Netherlands'], DE: ['德国', 'Germany'], SG: ['新加坡', 'Singapore'], MY: ['马来西亚', 'Malaysia'], IN: ['印度', 'India'], RO: ['罗马尼亚', 'Romania'], BG: ['保加利亚', 'Bulgaria'], TR: ['土耳其', 'Turkey'], 'TR/BG': ['土耳其／保加利亚', 'Turkey / Bulgaria'], GE: ['格鲁吉亚', 'Georgia'], DJ: ['吉布提', 'Djibouti'], SD: ['苏丹', 'Sudan'], CY: ['塞浦路斯', 'Cyprus'],
  /* GDELT 的 FIPS 国家码 */
  IS: ['以色列', 'Israel'], YM: ['也门', 'Yemen'], LE: ['黎巴嫩', 'Lebanon'], IZ: ['伊拉克', 'Iraq'], UP: ['乌克兰', 'Ukraine'], RS: ['俄罗斯', 'Russia'], CH: ['中国', 'China'],
  /* UCDP 的国家名 */
  Israel: ['以色列', 'Israel'], Lebanon: ['黎巴嫩', 'Lebanon'], 'Yemen (North Yemen)': ['也门', 'Yemen (North Yemen)'], Syria: ['叙利亚', 'Syria'], Iran: ['伊朗', 'Iran'], Ukraine: ['乌克兰', 'Ukraine'], Russia: ['俄罗斯', 'Russia'],
};
/* GDELT 行为体名里的固定类型词（Actor1Name / Actor2Name 是全大写），中文页译成中文；不在表里的先按名字表大小写不敏感查（UKRAINE、BEIJING），再查不到就不进正文、放 title。 */
const ACTOR = {
  COMPANY: '公司', BUSINESS: '企业', BANK: '银行', MILITARY: '军方', ARMY: '军队', NAVY: '海军', 'AIR FORCE': '空军', SOLDIER: '士兵', INTELLIGENCE: '情报机构', GOVERNMENT: '政府', PRESIDENT: '总统', MINISTER: '部长', PARLIAMENT: '议会',
  POLICE: '警方', JOURNALIST: '记者', MEDIA: '媒体', COMMUNITY: '社区', GANG: '团伙', NATIVES: '本地居民', CREATIVITY: '文创界', CIVILIAN: '平民', CIVILIANS: '平民', PROTESTER: '抗议者', REFUGEE: '难民', STUDENT: '学生', LAWYER: '律师', JUDGE: '法官', COURT: '法院',
  OPPOSITION: '反对派', REBEL: '反叛武装', MILITANT: '武装分子', TERRORIST: '恐怖分子', EMBASSY: '使馆', HOSPITAL: '医院', SCHOOL: '学校', UNIVERSITY: '大学', 'UNITED NATIONS': '联合国', KREMLIN: '克里姆林宫', PENTAGON: '五角大楼', 'WHITE HOUSE': '白宫',
  HAMAS: '哈马斯', HEZBOLLAH: '真主党', HOUTHI: '胡塞武装', 'OCCUPIED TERRITORIES': '被占领土',
  CHINESE: '中国方', ISRAELI: '以色列方', RUSSIAN: '俄罗斯方', UKRAINIAN: '乌克兰方', YEMENI: '也门方', PALESTINIAN: '巴勒斯坦方', IRANIAN: '伊朗方', AMERICAN: '美国方', SYRIAN: '叙利亚方', LEBANESE: '黎巴嫩方', TAIWANESE: '台湾方', SAUDI: '沙特方', IRAQI: '伊拉克方', TURKISH: '土耳其方', GREEK: '希腊方', POLISH: '波兰方',
};
const NST = {controlled: ['受控', 'controlled'], dependent: ['依赖', 'dependent'], contested: ['争夺中', 'contested'], blocked: ['受阻', 'blocked'], fallback: ['备用', 'fallback'], unknown: ['未知', 'unknown']};
const SRC = {
  'data/monitor/portwatch': ['PortWatch 港口与咽喉点计数', 'PortWatch port and chokepoint counts'], 'data/monitor/market_prices': ['市场价格', 'Market prices'],
  'data/monitor/gdelt_timeline': ['GDELT 新闻量时间线', 'GDELT news-volume timeline'], 'data/monitor/fires_at_sites': ['FIRMS 火点匹配站点', 'FIRMS fire detections matched to sites'],
  'data/monitor/sentinel2_archive': ['Sentinel-2 影像判读', 'Sentinel-2 imagery reading'],
  'data/monitor/portwatch 或 market_prices 或 gdelt_timeline': ['PortWatch、市场价格或 GDELT 时间线', 'PortWatch, market prices or GDELT timeline'],
};
const LIST = {
  'me_strategic_sites.csv': ['中东战略站点表', 'Middle East strategic sites'], 'me_infrastructure.csv': ['中东电厂与港口表（GEM、PortWatch）', 'Middle East power plants and ports (GEM, PortWatch)'],
  'ua_strategic_sites.csv': ['黑海战略站点表', 'Black Sea strategic sites'], 'tw_strategic_sites.csv': ['台海战略站点表', 'Taiwan Strait strategic sites'], 'sites.csv': ['台海站点表', 'Taiwan Strait sites'],
};
/* atlas-data.js 里的公司 id → [中, 英]（英文取 atlas-data 的登记名） */
const COMP = {
  nvidia: ['英伟达', 'NVIDIA'], tsmc: ['台积电', 'TSMC'], asml: ['阿斯麦', 'ASML'], samsung: ['三星', 'Samsung'], skhynix: ['SK 海力士', 'SK Hynix'], synopsys: ['新思', 'Synopsys'], cadence: ['楷登', 'Cadence'],
  aramco: ['沙特阿美', 'Saudi Aramco'], qatargas: ['卡塔尔能源', 'QatarEnergy'], adnoc: ['阿布扎比国家石油', 'ADNOC'], hyperscalers: ['美国超大规模云厂商', 'US hyperscalers (AWS/Azure/GCP)'], lynas: ['莱纳斯稀土', 'Lynas Rare Earths'],
  'lpt-makers': ['大型变压器制造商', 'Large power transformer makers (ABB / Siemens Energy / GE Vernova)'], gazprom: ['俄气', 'Gazprom'],
};
const compT = (id, fallback) => pick(COMP, id, fallback);
const pick = (tab, k, fallback) => { const e = tab[k]; return e ? (LANG === 'en' ? e[1] : e[0]) : (fallback != null ? fallback : (k ?? '')); };
const kindT = k => pick(KIND, k);
const ccT = c => pick(CC, c);
const evT = e => t('ev_' + e) === 'ev_' + e ? String(e ?? '') : t('ev_' + e);
const nstT = s => pick(NST, s);
const srcT = s => pick(SRC, s);
const listT = s => pick(LIST, s);

/* 数据值：原字 → 英文。 */
const DV = {
  '中东': 'Middle East', '乌克兰': 'Ukraine', '台海': 'Taiwan Strait',
  /* 单位与基线口径 */
  '艘/日（近七日）': 'ships/day (last 7 days)', '% 近七日': '% last 7 days', '艘/日': 'ships/day', '载重吨/日': 'DWT/day', '个': 'count', '条/周': 'per week', '架次': 'sorties', '百万美元/月': 'USD million/month',
  '十二个月均值': '12-month mean', '断点前九十天均值': '90-day pre-break mean', '断点前九十天日均': '90-day pre-break daily mean', '窗口前一百二十个交易日均值': 'mean of 120 trading days before window', '窗口前一百八十天日均': 'daily mean of 180 days before window',
  /* 序列分组 */
  '价格': 'Prices', '油轮运力': 'Tanker capacity', '咽喉点通过艘数/日': 'Chokepoint transits, ships/day', '港口挂靠/日': 'Port calls/day',
  '全战区火点（FIRMS，非火炬类，个/日）': 'Theater-wide fire detections (FIRMS, non-flare, count/day)',
  '军事通报（台湾国防部，共机架次/日）': 'Military bulletins (Taiwan MND, PLA aircraft sorties/day)',
  '定点影像 · 暗像素比（Sentinel-2，二公里窗口，烧痕与积烟的粗指标）': 'Site imagery · dark-pixel fraction (Sentinel-2, 2 km window, rough indicator of burn scars and smoke)',
  '新闻量（GDELT，全球英文新闻中占比 %）': 'News volume (GDELT, share of global English news, %)',
  '海事局军事类航行警告（每周条数，仅最近三十天）': 'MSA military navigation warnings (per week, last 30 days only)',
  '海关月报（美国进口，按伙伴国，滞后约两个月）': 'Customs monthly (US imports by partner, about two months\' lag)',
  '设施与基地上的热异常（FIRMS，站点三公里内的辐射功率合计，MW/日）': 'Thermal anomalies at facilities and bases (FIRMS, total FRP within 3 km of site, MW/day)',
  /* 序列与格标签 */
  '上海海事局': 'Shanghai MSA', '广东海事局': 'Guangdong MSA', '浙江海事局': 'Zhejiang MSA', '海南海事局': 'Hainan MSA', '福建海事局': 'Fujian MSA',
  '中东框内每日火点数（第 0、3 类）': 'Daily fire detections in the Middle East box (types 0 and 3)', '全部站点合计': 'All sites combined', '共机架次': 'PLA aircraft sorties',
  '台湾加权指数': 'TAIEX', '台积电 ADR，美元': 'TSMC ADR, USD', '布伦特原油前月，美元/桶': 'Brent front month, USD/bbl', 'WTI 前月，美元/桶': 'WTI front month, USD/bbl', '亨利港天然气期货前月，美元': 'Henry Hub front month, USD',
  '美国自台湾进口集成电路（海关，百万美元/月）': 'US imports of ICs from Taiwan (customs, USD million/month)',
  '美国自海湾四国进口原油（海关，百万美元/月）': 'US crude imports from four Gulf states (customs, USD million/month)',
  '美国自海湾四国进口原油（海关，百万美元/月），断点后第三个月起': 'US crude imports from four Gulf states (customs, USD million/month), from the third month after the break',
  '共机架次/日（台湾国防部通报，第三方转录）': 'PLA aircraft sorties/day (Taiwan MND bulletins, third-party transcription)',
  /* 前后表的类 */
  '价格均值': 'Price mean', '新闻量均值 %': 'News volume mean %', '海关月报': 'Customs monthly', '物理量': 'Physical quantity', '通过艘数/日': 'Transits/day',
  /* 警报类型与模板 */
  '断点': 'Break', '指标偏离': 'Indicator deviation', '影像判读': 'Imagery reading', '火点异常': 'Fire anomaly', '援乌供应链遭袭': 'Attack on the Ukraine-aid supply chain',
  /* five_stage.json 里文字型的数（没有 value_en；2026-09-21） */ '未受影响': 'Not affected', '几乎全毁': 'Almost entirely destroyed', '未调': 'Not raised',
  'FIRMS 火点落在站点三公里内且超过该站基线 95 分位；荒地火与事故火同样会进来，要对新闻核': 'FIRMS detections within 3 km of the site exceeding its 95th-percentile baseline; wildfires and accidents enter too, check against news',
  /* 六档结论 */
  '影像可见受损迹象': 'Visible damage in imagery', '疑似受损，需核': 'Suspected damage, needs check', '整幅变化，非局部': 'Whole-scene change, not local', '影像有局部变化，无热异常': 'Local change in imagery, no thermal anomaly',
  '有热异常，影像无可见变化': 'Thermal anomaly, no visible change in imagery', '无可见变化': 'No visible change', '无可见结构变化': 'No visible structural change', '不可判读': 'Not interpretable', '后景不可判读': 'After-scene not interpretable', '未判': 'Not judged',
  /* 证据类与状态 */
  '港口挂靠': 'Port calls', '火点': 'Fire detections', '通过艘数': 'Transits', '管道流量': 'Pipeline flow',
  '受损': 'Damaged', '在用': 'In use', '已停': 'Stopped', '收窄': 'Narrowed', '未定': 'Undetermined',
  '即时型': 'Immediate', '滞后型': 'Lagged',
  /* 节点类型与站类型 */
  '出口港': 'Export port', '出口码头': 'Export terminal', '制造': 'Manufacturing', '咽喉点': 'Chokepoint', '处理与装船': 'Processing and loading', '对岸集结区': 'Cross-strait staging area',
  '液化天然气、氦气、尿素的共同出口': 'Shared outlet for LNG, helium and urea', '管道': 'Pipeline', '绕行通道': 'Bypass route', '跨战区依赖': 'Cross-theater dependency', '进口与出口港': 'Import and export port', '进口港与电力': 'Import port and power',
  '上游': 'Upstream', '下游': 'Downstream', '压气站': 'Compressor station', '处理': 'Processing', '对岸': 'Opposite shore', '管道入境': 'Pipeline entry', '绕行出口': 'Bypass outlet', '装船': 'Loading', '计量站': 'Metering station', '转口港': 'Transshipment port', '进口港': 'Import port',
  /* 线路名 */
  '亚速海（粮食、钢材）': 'Sea of Azov (grain, steel)', '光刻胶与特种气体': 'Photoresist and specialty gases', '原油 · 伊朗': 'Crude · Iran', '原油 · 沙特': 'Crude · Saudi Arabia', '原油 · 波罗的海（俄）': 'Crude · Baltic (Russia)', '原油 · 阿联酋': 'Crude · UAE', '原油 · 黑海（俄与哈萨克）': 'Crude · Black Sea (Russia and Kazakhstan)',
  '原油进口': 'Crude imports', '台海集装箱干线': 'Taiwan Strait container trunk', '天然气 · TurkStream': 'Gas · TurkStream', '天然气 · 乌克兰过境': 'Gas · Ukraine transit', '对岸集结（滚装船、渔船）': 'Cross-strait staging (ro-ro, fishing vessels)',
  '尿素 · 卡塔尔': 'Urea · Qatar', '氦气 · 卡塔尔': 'Helium · Qatar', '氮肥钾肥 · 俄罗斯': 'Nitrogen and potash fertilizer · Russia', '液化天然气 · 卡塔尔': 'LNG · Qatar', '液化天然气进口': 'LNG imports', '粮食 · 乌克兰': 'Grain · Ukraine', '集成电路出口': 'IC exports',
  /* 链名 */
  'BGP 路由': 'BGP routing', 'CDN 与 DDoS 缓解层': 'CDN and DDoS mitigation', 'DNS 根区与 CA 信任体系': 'DNS root and CA trust', 'SWIFT 跨境银行报文网络': 'SWIFT interbank messaging', '产油国协调': 'Producer coordination', '人民币跨境结算': 'RMB cross-border settlement',
  '出口管制': 'Export controls', '制裁机器': 'Sanctions machinery', '卫星通信': 'Satellite communications', '原油': 'Crude oil', '国内价格与出口禁令': 'Domestic prices and export bans', '战略储备': 'Strategic reserves', '数控机床': 'CNC machine tools', '氖气': 'Neon', '氦气': 'Helium', '氮肥': 'Nitrogen fertilizer',
  '油轮航路': 'Tanker routes', '海军与航道保障': 'Naval and sea-lane security', '海底光缆': 'Submarine cables', '液化天然气': 'LNG', '液化天然气运输船': 'LNG carriers', '港口准入': 'Port access', '港口基础设施': 'Port infrastructure', '炼化': 'Refining', '磷钾肥': 'Phosphate and potash fertilizer',
  '稳定币': 'Stablecoins', '粮食贸易': 'Grain trade', '精密轴承': 'Precision bearings', '网络封锁': 'Internet shutdowns', '美元清算': 'Dollar clearing', '联盟机制': 'Alliance mechanisms', '能源制裁': 'Energy sanctions', '能源安全叙事': 'Energy-security narrative', '航电系统': 'Avionics', '航空发动机': 'Aircraft engines',
  '造船': 'Shipbuilding', '银行卡网络': 'Card networks', '锗': 'Germanium', '集装箱航运': 'Container shipping', '飞机租赁': 'Aircraft leasing',
  /* 战区节点名 */
  'TurkStream 入境保加利亚（Strandzha 2）': 'TurkStream entry into Bulgaria (Strandzha 2)', '中东来源（卡塔尔液化天然气与氦、海湾原油）': 'Middle East sources (Qatari LNG and helium, Gulf crude)', '刻赤海峡与克里米亚大桥': 'Kerch Strait and the Crimean Bridge', '博斯普鲁斯海峡': 'Bosporus Strait',
  '台中港与台中接收站': 'Taichung port and LNG terminal', '台湾海峡与吕宋海峡': 'Taiwan Strait and Luzon Strait', '哈尔克岛（伊朗）': 'Kharg Island (Iran)', '富查伊拉与哈布尚管道（阿联酋）': 'Fujairah and the Habshan pipeline (UAE)', '拉斯拉凡（卡塔尔）': 'Ras Laffan (Qatar)',
  '敖德萨三港（敖德萨、切尔诺莫斯克、皮夫坚尼）': 'Odesa\'s three ports (Odesa, Chornomorsk, Pivdennyi)', '新竹与台南科学园区（晶圆厂）': 'Hsinchu and Tainan science parks (fabs)', '新罗西斯克与 CPC 码头': 'Novorossiysk and the CPC terminal', '曼德海峡': 'Bab el-Mandeb',
  '沙特东西输油管道与延布码头': 'Saudi East-West Pipeline and Yanbu terminal', '福建沿海（平潭、福州、厦门）': 'Fujian coast (Pingtan, Fuzhou, Xiamen)', '苏贾计量站（乌克兰过境）': 'Sudzha metering station (Ukraine transit)', '阿布盖格与拉斯坦努拉': 'Abqaiq and Ras Tanura', '高雄港、永安接收站与大林炼厂': 'Kaohsiung port, Yung-An LNG terminal and Dalin refinery',
  /* 站名 */
  'Russkaya 压气站': 'Russkaya compressor station', '上海 / 宁波': 'Shanghai / Ningbo', '东亚炼厂（日韩）': 'East Asian refineries (Japan, Korea)', '东亚电厂（日韩台）': 'East Asian power plants (Japan, Korea, Taiwan)', '中国炼厂': 'Chinese refineries', '丹麦海峡': 'Danish Straits',
  '乌克兰产粮区': 'Ukrainian grain belt', '乌连戈伊气田': 'Urengoy gas field', '亚速海各港': 'Sea of Azov ports', '伊兹梅尔（多瑙河）': 'Izmail (Danube)', '俄罗斯氮肥厂': 'Russian nitrogen fertilizer plants', '刻赤海峡': 'Kerch Strait', '加瓦尔油田': 'Ghawar oil field', '北方气田': 'North Field',
  '南亚农田（尿素）': 'South Asian farmland (urea)', '博斯普鲁斯': 'Bosporus', '印度炼厂': 'Indian refineries', '台中港 / 接收站': 'Taichung port / LNG terminal', '台湾晶圆厂（氦）': 'Taiwan fabs (helium)', '台湾海峡': 'Taiwan Strait', '台湾电网': 'Taiwan power grid', '吕宋海峡': 'Luzon Strait',
  '哈尔克岛': 'Kharg Island', '哈布尚': 'Habshan', '土耳其': 'Turkey', '埃及（小麦）': 'Egypt (wheat)', '基隆港': 'Keelung port', '塞尔维亚 / 匈牙利': 'Serbia / Hungary', '富查伊拉': 'Fujairah', '巴西 / 印度（化肥）': 'Brazil / India (fertilizer)', '康斯坦察': 'Constanța', '延布': 'Yanbu',
  '拉斯坦努拉': 'Ras Tanura', '拉斯拉凡': 'Ras Laffan', '敖德萨三港': 'Odesa\'s three ports', '斯洛伐克 / 中欧': 'Slovakia / Central Europe', '新加坡（集装箱）': 'Singapore (containers)', '新竹 / 台南晶圆厂': 'Hsinchu / Tainan fabs', '新罗西斯克 / CPC': 'Novorossiysk / CPC',
  '日本（光刻胶、气体）': 'Japan (photoresist, gases)', '普里莫尔斯克 / 乌斯季卢加': 'Primorsk / Ust-Luga', '梅赛义德': 'Mesaieed', '欧洲（经苏伊士）': 'Europe (via Suez)', '海湾原油（绕行）': 'Gulf crude (rerouted)', '澳大利亚液化天然气': 'Australian LNG', '田吉兹（哈萨克）': 'Tengiz (Kazakhstan)',
  '福建沿海集结区': 'Fujian coastal staging area', '美国液化天然气': 'US LNG', '美国（芯片）': 'United States (chips)', '胡齐斯坦油田': 'Khuzestan oil fields', '苏伊士运河': 'Suez Canal', '苏贾': 'Sudzha', '西西伯利亚油田': 'West Siberian oil fields', '阿布盖格': 'Abqaiq', '霍尔木兹海峡': 'Strait of Hormuz',
  '韩国 / 中国（芯片）': 'South Korea / China (chips)', '马六甲': 'Malacca', '高雄港 / 永安 / 大林': 'Kaohsiung port / Yung-An / Dalin',
  /* 上下游端点 */
  '中国（宁波）': 'China (Ningbo)', '乌克兰中部产粮区': 'Central Ukraine grain belt', '亚速海各港（罗斯托夫、亚速）': 'Sea of Azov ports (Rostov, Azov)', '伊朗胡齐斯坦油田': 'Iran\'s Khuzestan oil fields', '俄罗斯（Russkaya 压气站）': 'Russia (Russkaya compressor station)', '俄罗斯（乌连戈伊）': 'Russia (Urengoy)',
  '匈牙利': 'Hungary', '北方气田（卡塔尔）': 'North Field (Qatar)', '印度（贾姆纳格尔）': 'India (Jamnagar)', '台中接收站': 'Taichung LNG terminal', '台中电厂 / 北部电网': 'Taichung power plant / northern grid', '台湾（高雄）': 'Taiwan (Kaohsiung)', '哈布尚（阿联酋）': 'Habshan (UAE)',
  '埃及（亚历山大）': 'Egypt (Alexandria)', '塞尔维亚': 'Serbia', '延布 / 富查伊拉': 'Yanbu / Fujairah', '斯洛伐克（大卡普沙尼）': 'Slovakia (Veľké Kapušany)', '新加坡': 'Singapore', '新竹晶圆厂': 'Hsinchu fabs', '新罗西斯克': 'Novorossiysk', '日本（东京湾）': 'Japan (Tokyo Bay)',
  '日本（光刻胶、特种气体）': 'Japan (photoresist, specialty gases)', '日本（横滨）': 'Japan (Yokohama)', '欧洲（鹿特丹）': 'Europe (Rotterdam)', '海湾（延布、富查伊拉绕行）': 'Gulf (rerouted via Yanbu, Fujairah)', '渤海轮渡（烟台）': 'Bohai ferries (Yantai)', '澳大利亚（格拉德斯通）': 'Australia (Gladstone)',
  '美国西海岸': 'US West Coast', '美国（萨宾帕斯）': 'United States (Sabine Pass)', '苏伊士': 'Suez', '韩国（蔚山）': 'South Korea (Ulsan)', '韩国（釜山）': 'South Korea (Busan)', '香港 / 深圳': 'Hong Kong / Shenzhen', '高雄（永安）': 'Kaohsiung (Yung-An)',
  /* 上下游的链 */
  'CPC 原油': 'CPC crude', '俄油': 'Russian crude', '出黑海': 'out of the Black Sea', '化学品': 'chemicals', '原油绕行': 'crude (rerouted)', '原油（海峡关闭，停）': 'crude (strait closed, halted)', '原油（经管道）': 'crude (by pipeline)', '天然气': 'natural gas', '小麦': 'wheat', '小麦、玉米、葵花油': 'wheat, maize, sunflower oil',
  '尿素': 'urea', '液化天然气、原油': 'LNG, crude', '液化天然气、氦': 'LNG, helium', '滚装船': 'ro-ro ships', '电力': 'electricity', '粮食': 'grain', '粮食、原油': 'grain, crude', '粮食、钢材': 'grain, steel', '粮食、集装箱': 'grain, containers', '集成电路': 'integrated circuits', '集装箱': 'containers', '集装箱、化学品': 'containers, chemicals',
  /* 绕行 */
  '东西管道': 'East-West Pipeline', '东西管道（阿布盖格→延布）': 'East-West Pipeline (Abqaiq→Yanbu)', '台湾东岸绕行（吕宋海峡→太平洋）': 'Taiwan east-coast detour (Luzon Strait→Pacific)', '哈布尚→富查伊拉管道': 'Habshan→Fujairah pipeline', '多瑙河（伊兹梅尔）→康斯坦察': 'Danube (Izmail)→Constanța',
  '好望角绕行': 'Cape of Good Hope detour', '延布→曼德海峡→亚洲': 'Yanbu→Bab el-Mandeb→Asia', '延布→苏伊士→欧洲': 'Yanbu→Suez→Europe', '波罗的海（普里莫尔斯克、乌斯季卢加）': 'Baltic (Primorsk, Ust-Luga)', '澳大利亚 / 美国液化天然气替代': 'Australian / US LNG substitution', '陆路经克里米亚大桥': 'Overland via the Crimean Bridge',
};

/* 模板型标签的逐段替换（英文页）。顺序：长片段在前。 */
const PAT = [
  [/ 油轮通过运力（载重吨\/日）/g, ' tanker transit capacity (DWT/day)'],
  [/ 其中集装箱船艘数\/日/g, ' of which container ships/day'], [/ 其中油轮艘数\/日/g, ' of which tankers/day'], [/ 油轮运力 载重吨\/日/g, ' tanker capacity DWT/day'], [/ 全部运力 载重吨\/日/g, ' total capacity DWT/day'],
  [/ 火点辐射功率 MW\/日/g, ' fire radiative power MW/day'], [/ 日流量 GWh\/日（ENTSOG）/g, ' daily flow GWh/day (ENTSOG)'], [/ 通过艘数\/日/g, ' transits/day'], [/ 挂靠\/日/g, ' port calls/day'], [/ 港挂靠/g, ' port calls'],
  [/ 通过量断点 /g, ' transit break '],
  [/ 火点异常日 (\d+) 天，最大 /g, ': $1 fire-anomaly days, max '],
  [/^「(.+?)」新闻量/g, '"$1" news volume'],
  [/ 前月，美元\/桶/g, ' front month, USD/bbl'], [/ 前月，美元/g, ' front month, USD'],
  [/艘\/日（近七日）/g, 'ships/day (last 7 days)'], [/% 近七日/g, '% last 7 days'], [/最新 /g, 'latest '], [/基线 /g, 'baseline '], [/比值 /g, 'ratio '],
  [/断点前九十天日均/g, '90-day pre-break daily mean'], [/断点前九十天均值/g, '90-day pre-break mean'], [/窗口前一百八十天日均/g, 'daily mean of 180 days before window'], [/窗口前一百二十个交易日均值/g, 'mean of 120 trading days before window'], [/十二个月均值/g, '12-month mean'],
  [/^28 日滚动均值低于窗口前一百八十天基线（(.+?) 艘\/日）的一半并持续十四天；至今 (\d+) 天$/g, '28-day rolling mean below half of the 180-day pre-window baseline ($1 ships/day) for 14 days; $2 days so far'],
  [/^3 月后异常日 (\d+) 天$/g, '$1 anomalous days after March'], [/^3 月后无异常日$/g, 'No anomalous days after March'], [/^近七日日均 /g, '7-day mean '],
  [/^四百天内三公里内零检出$/g, 'Zero detections within 3 km over 400 days'], [/^四百天内最大单日 /g, 'Max single day in 400 days '],
  [/^断点前九十天 (.+?)，断点后 (.+)$/g, '90 days pre-break $1, post-break $2'], [/^未触发断点，无前后对比$/g, 'No break triggered; no before/after comparison'], [/^首次 (.+?)，异常日最大 /g, 'First $1, max anomalous day '],
  [/^窗口 (.+?) 至 (.+)$/g, 'window $1 to $2'], [/ GWh$/g, ' GWh'],
  [/，断点后第三个月起/g, ', from the third month after the break'],
];
const PUNCT = [[/，/g, ', '], [/；/g, '; '], [/：/g, ': '], [/（/g, ' ('], [/）/g, ')'], [/「/g, '"'], [/」/g, '"'], [/、/g, ', '], [/\s{2,}/g, ' ']];

function t(key, vars) {
  const e = UI[key]; let s = e ? (LANG === 'en' ? e[1] : e[0]) : key;
  if (vars) for (const k in vars) s = s.split('{' + k + '}').join(String(vars[k] ?? ''));
  return s;
}

/* 英文专名 → 中文（中文页用）。表来自 latest.json 的 names，boot() 时 setNames() 装入；长键优先，只在词边界上换，
 * 换完把两个汉字之间多出来的空格收掉（「台中 港挂靠」→「台中港挂靠」）。 */
let NAMES = {}, NAME_RE = null;
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function setNames(m) {
  NAMES = m || {};
  NAMES_UP = {}; for (const k in NAMES) NAMES_UP[k.toUpperCase()] = NAMES[k];
  const keys = Object.keys(NAMES).sort((a, b) => b.length - a.length);
  NAME_RE = keys.length ? new RegExp('(?<![A-Za-z0-9_])(' + keys.map(escRe).join('|') + ')(?![A-Za-z0-9_])', 'g') : null;
}
function nz(s) {
  if (s == null) return '';
  s = String(s);
  if (LANG !== 'zh' || !NAME_RE || !/[A-Za-z]/.test(s)) return s;
  return s.replace(NAME_RE, m => NAMES[m]).replace(/([㐀-鿿）」】]) (?=[㐀-鿿（「【])/g, '$1');
}
/* 缺值：数据里的空、nan、None 一律显示为空。 */
const nn = v => (v == null || v === 'nan' || v === 'None' || v === 'NaN') ? '' : String(v);
/* 外源原文字段（GDELT 地点、SEC 公司登记名、UCDP 冲突名）：先过名字表；中文页里换完还剩拉丁字母的不进正文，只放 title。返回 {text, title}。 */
function rawT(s) {
  s = nn(s);
  if (!s) return {text: '', title: ''};
  if (LANG !== 'zh') return {text: s, title: ''};
  const x = nz(s);
  return /[A-Za-z]/.test(x) ? {text: '', title: s} : {text: x, title: s};
}
let NAMES_UP = {};
/* GDELT 行为体：类型词查 ACTOR，其余按名字表大小写不敏感查；查不到返回 ''（调用方把原文放 title）。 */
function actorT(s) {
  s = nn(s).trim();
  if (!s) return '';
  if (LANG !== 'zh') return s;
  const u = s.toUpperCase();
  if (ACTOR[u]) return ACTOR[u];
  if (NAMES_UP[u]) return NAMES_UP[u];
  const x = nz(s);
  return /[A-Za-z]/.test(x) ? '' : x;
}

function tv(s) {
  if (s == null) return '';
  s = String(s);
  if (LANG !== 'en') return nz(s);
  if (!HAS_CJK(s)) return s;
  if (DV[s] != null) return DV[s];
  let x = s;
  // 先套模板规则（它们含「断点」「火点」这类也是词典键的短词），再把嵌在模板里的词典项（六档结论、站名）替换进去
  for (const [re, rep] of PAT) x = x.replace(re, rep);
  for (const k of DV_KEYS) if (x.includes(k)) x = x.split(k).join(DV[k]);
  if (HAS_CJK(x.replace(/[（），：；「」、]/g, ''))) return s + ' (zh)';
  for (const [re, rep] of PUNCT) x = x.replace(re, rep);
  return x.trim();
}
const DV_KEYS = Object.keys(DV).filter(k => k.length >= 2).sort((a, b) => b.length - a.length);
/* 自由文本：tz / tzh 的第二个参数是同一段的英文（latest.json 里同名 _en 字段）。英文页有英文就用英文、不加 (zh)；没有英文才原样显示并加 (zh)。
 * 中文页把段落里的英文专名换成中文（nz）。tzf(o, k, i, max) 按字段名取：o[k] 与 o[k + '_en']，i 是数组下标（why / watch / limits / reading 这类段落列表）。
 * 英文页下截断长度按 enSlice(n) 放宽（英文按字符数约是中文的 2.5 倍）。 */
function tz(s, en) { s = String(s ?? ''); if (LANG === 'en' && en) return String(en); return (LANG === 'en' && HAS_CJK(s)) ? s + ' (zh)' : nz(s); }
function tzh(s, en) {
  const escf = x => String(x ?? '').replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
  s = String(s ?? '');
  if (LANG === 'en' && en) return escf(en);
  return (LANG === 'en' && HAS_CJK(s)) ? escf(s) + ' <span class="zh">(zh)</span>' : escf(nz(s));
}
function tzf(o, k, i, max) {
  if (!o) return '';
  let s = o[k], en = o[k + '_en'];
  if (i != null) { s = Array.isArray(s) ? s[i] : s; en = Array.isArray(en) ? en[i] : en; }
  if (max) { s = String(s ?? '').slice(0, max); en = en ? String(en).slice(0, enSlice(max)) : en; }
  return tzh(s, en);
}
const enSlice = n => Math.round(n * 2.5);

/* 页头：标题与指向另一页的语言链接（锚随过去，由 dashboard.js 的 show() 更新）。 */
function applyStatic() {
  document.documentElement.lang = LANG === 'en' ? 'en' : 'zh';
  document.title = t('title');
  const a = document.getElementById('langlink');
  if (a) { a.textContent = t('lang_link'); a.title = t('lang_title'); a.href = t('lang_href') + (location.hash || ''); }
}
