# 节点 ir-dns：DNS 根区 + CA 信任体系

> 父节点：ir（互联网可达性栈）| 层：L1 逻辑控制（命名+信任）
> 建立：2026-06-26 | 数据综合 C：C2–C4（ICANN/Verisign 根区协议 C4；TLD 份额 C3–C4；Verisign 年报 C3–C4；WoSign/StartCom 案 C4；DigiNotar 案 C4；Let's Encrypt 证书量 C3；CA 市场规模 C2；trust store 决策机制 C3；DNS 国家管制案例 C3）

---

## 结构层

### 1. 功能定义

DNS（域名系统）把人类可读的域名（如 `wikipedia.org`）翻译成机器可识别的 IP 地址，再由 BGP（ir-bgp）把数据包路由到那个 IP。没有 DNS，用户无法通过域名到达任何网站——他们需要记住原始 IP 地址，这在商业互联网上不可行。DNS 卡的是**域名的可解析性**：被从 DNS 根区删除，你的域名在全球范围内就变成不可达，即使服务器还在运行、BGP 路由还完整。

CA（证书颁发机构）是 HTTPS 信任体系的基础。CA 向网站颁发数字证书，证明"这个服务器确实是 wikipedia.org"。用户的浏览器在信任列表（trust store，内置在操作系统和浏览器里）里查找这张证书是否由被信任的 CA 签发。被从 trust store 里移除的 CA 所签发的所有证书立刻变成"不受信任"——浏览器会显示安全警告，用户和应用程序会拒绝连接，效果相当于把该 CA 服务的所有网站从可信任互联网里删除。

DNS 和 CA 在 HTTPS 时代强耦合：访问一个网站需要 DNS 解析 + 有效 CA 证书，缺一不可。把两层放在同一个节点，是因为两者的政治控制结构高度重叠——都掌握在美国公司和 ICANN 体系里，卡点来源相同。

这个节点不负责：IP 路由（ir-bgp）、物理光缆传输（ir-cables）、内容过滤（ir-filter）、域名注册（TLD 注册服务层）。

### 2. 物质形态与可运输性

比特+许可体系，托管在分布式服务器上，但控制权高度集中。

DNS 根区（Root Zone）是一个文本文件，记录着全球所有顶级域名（如 `.com`、`.cn`、`.org`）对应的权威名称服务器地址。这个文件由 ICANN 授权机构维护，由 Verisign 管理分发，托管在 13 个根服务器集群（A 到 M，物理上分布于全球约 1,400 个节点）。根区文件本身极小（几百 KB），但它是整个 DNS 树的起点——修改这个文件，就能决定全球用户能不能解析某个顶级域名。

CA 证书是软件文件，通过数字签名产生信任链。信任链的根是"根证书"（Root CA 证书），这些根证书被硬编码进操作系统和浏览器的 trust store。trust store 的管理权属于 Apple（macOS/iOS）、Microsoft（Windows）、Google（Android/Chrome，Chrome Root Store 从 2022 年独立于操作系统）和 Mozilla（Firefox），以及各主要浏览器厂商。

关键点：DNS 控制权和 CA 信任权都不依赖物理运输，但都依赖**谁能修改一个被广泛接受的权威文件**。

### 3. 供给集中度

**DNS 根区：近独占单点**

DNS 根区管理集中度极高（C4）：
- 根区内容（Root Zone）由 **ICANN/PTI（Public Technical Identifiers）** 维护
- 根区**编辑和分发**由 **Verisign** 承担（合同关系，历史上曾受 NTIA 监管，2016 IANA 转型后合同关系仍在，C4）
- 根服务器**运营**分散于 12 家机构（美国 NASA、Cogent、Verisign、ICANN 等，其中美国机构为多数，C3）

对于普通 TLD（顶级域名）：
- `.com` 和 `.net`：Verisign 独家注册局（registry），全球最大 TLD，约 1.6 亿域名（C3，Verisign 官网报告）
- `.cn`：中国互联网络信息中心（CNNIC）
- `.ru`：俄罗斯协调中心（CC.ru）
- 如果 ICANN 将某个 ccTLD（国家顶级域，如 `.ru`、`.ir`）从根区删除，该国的域名体系在技术上面临全球解析失效（虽然目前 ICANN 从未对主权国家这样做，C4——这是理论上威力最大、却从未动用过的手段）

**CA 信任体系：四家 trust store 控制者**

全球浏览器 HTTPS 信任链的控制权集中在四家公司的 trust store 决策上：

| Trust Store 控制者 | 覆盖平台 | 总部法域 |
|---|---|---|
| Apple（Apple Root Certificate Program） | macOS / iOS / Safari | 美国 |
| Microsoft（Microsoft Trusted Root Program） | Windows / Edge | 美国 |
| Google（Chrome Root Store，2022 年独立） | Chrome（全球约 65% 浏览器份额，C3） | 美国 |
| Mozilla（Mozilla Root Program） | Firefox（约 3–4% 全球份额，但制定了行业标准，C3） | 美国非营利 |

四家均在美国法域下运营。这意味着美国政府通过法院命令或国家安全信函（NSL）在技术上可以要求这些公司将特定国家的 CA 从 trust store 中移除——效果相当于让该国所有 HTTPS 网站在全球显示"不安全"警告。**这是 ir-bgp 没有的卡点**：BGP 层的政治干预从未对主要国家级网络生效，但 CA trust store 已有真实案例（WoSign/StartCom，见结构层 10）。

主要 CA 机构（按证书量，C3）：
- **Let's Encrypt（ISRG）**：约 50% 的全球活跃 HTTPS 证书（C3，Netcraft 口径），美国非营利，2015 年起提供免费自动化证书
- **DigiCert**：企业 CA 市场领导者，美国私有公司（2022 年 Thoma Bravo 以约 69 亿美元收购），含原 Symantec CA 业务
- **Sectigo（原 Comodo CA）**：美国公司，高量低价市场为主
- **GlobalSign**：比利时注册，日本 GMO Group 子公司（2015 年收购）

中国 CA：
- **CFCA（中国金融认证中心）**、**CNNIC**、**WoSign**——2016 年 WoSign/StartCom 被 Mozilla/Apple/Google 从 trust store 删除（见结构层 10），导致中国 CA 在主流 trust store 里几乎清零（C4）。目前 CFCA 仍在部分 trust store 内但份额极小。

### 4. 主要持有者 + 份额 + 法域

**DNS 根区控制层**：
- **ICANN（Internet Corporation for Assigned Names and Numbers）**：加利福尼亚州非营利法人（C4），控制根区策略，历史上受美国商务部 NTIA 监管，2016 年 IANA 监管权正式移交给多利益相关方社区（IANA 转型），但 ICANN 本身仍是美国法人，受美国法律管辖（C4）
- **Verisign（NASDAQ: VRSN）**：美国上市公司，维吉尼亚州（C4），持有 `.com` 和 `.net` 注册局合同（与 ICANN 的合同到期自动续约，历次合同续签均获批，C3），同时是根区文件的独家编辑和分发方
- **根服务器运营机构**：12 家（A 根=Verisign，B 根=USC-ISI，C 根=Cogent，D 根=University of Maryland，E 根=NASA，F 根=ISC Internet Systems Consortium，G 根=US DoD，H 根=US Army Research Lab，I 根=Netnod 瑞典，J 根=Verisign，K 根=RIPE NCC 荷兰，L 根=ICANN，M 根=WIDE Project 日本）——12 家中约 9 家在美国法域（C4）

**TLD 注册局（关键节点）**：
- `.com`：Verisign，美国，独家注册局，约 1.6 亿域名（C3，Verisign 2023 Domain Industry Brief）
- `.net`：Verisign，美国，约 1,400 万域名（C3）
- `.org`：Public Interest Registry（PIR），美国非营利（C4）
- `.cn`：CNNIC，中国（C4）
- `.ru`：CC.ru，俄罗斯（C4）
- `.ir`：IANA 直接委托，伊朗电信基础设施公司（C3）

**CA trust store 决策者**（见结构层 3）：Apple/Microsoft/Google/Mozilla，均在美国（C4）

### 5. 上游依赖（子节点）

**物理层依赖（ir-cables → ir-bgp → ir-dns）**：DNS 查询本身是 UDP/TCP 数据包，需要 BGP 路由和光缆传输。根服务器宕机（罕见，有 Anycast 冗余）或 BGP 路由异常会导致 DNS 解析中断。DNS 在物理传输层有依赖但不构成单点（Anycast 多节点分布，C4）。

**操作系统/浏览器软件依赖**：trust store 内置于 Apple/Microsoft/Google 的操作系统和浏览器软件更新中。CA 的信任状态通过软件更新推送——这意味着软件分发管道（App Store、Windows Update、Chrome 自动更新）是 trust store 变更的物理传导层，更新速度按天到周计，不像 BGP 变更那样秒级生效。

**密钥管理基础设施（HSM）**：根 CA 的私钥存放在硬件安全模块（HSM）里，部分根 CA 的密钥仪式（key ceremony）有严格物理安全流程（公开可见，多方公证），不存在一家公司单独控制的技术单点。但如果 HSM 厂商（主要为 nCipher/Entrust、Thales）遭遇供应链攻击，这是一个潜在的上游依赖。

### 6. 下游依赖方

- **全球电子商务（致命依赖）**：任何 HTTPS 交易（网银、购物、登录）同时依赖 DNS 解析和有效 CA 证书。DNS 根区故障或 CA 大规模失信的经济影响以分钟计（比物理断缆更快触发）。
- **API 通信（高依赖）**：微服务、移动 App、IoT 设备的 API 调用通过域名而非 IP 连接——都依赖 DNS 解析。
- **国家域名（高依赖）**：每个 ccTLD 国家的政府/企业/媒体网站都依赖自己的国家 TLD 在根区的存在。这是 ICANN 对主权国家的理论上最极端杠杆——但从未使用。
- **没有有效库存缓冲**：DNS 缓存（TTL，通常 300–3600 秒）提供几分钟到几小时的短暂缓冲，但 CA 证书一旦被撤销（CRL/OCSP），效果在现代浏览器里几乎即时生效（软 deadline 内实时检查）。

### 7. 替代路径 + fallback 等级

**DNS 替代**：

*国家级备用 DNS（部分主权互联网）*：中国（.cn 体系）、俄罗斯（Ruzone 本地 DNS 备份）已有国内 DNS 替代机制。如果根区删除 `.cn` 或 `.ru`，中国/俄罗斯的 ISP 可以配置本地解析器不查询全球根服务器，转而使用国内授权的根服务。

按 fallback 五问：
- 替代哪一层：替代对全球 DNS 根区的依赖，改用国内 DNS 根
- 多久接上：技术上可配置到 ISP 级，命令下达后数小时到数天内完成（政府控制 ISP 的国家）
- 卡在哪：国内 DNS 体系需要国内用户的递归解析器全部切换；境外访问者仍走全球 DNS，只是解析不到该国 ccTLD（境外用户对该国的访问受影响，反向）；国内用户访问境外域名（`.com`/`.org` 等）不受影响——这是 ccTLD 删除和 BGP 去对等的关键区别
- 谁有权限启动：主权国家 ISP 主管部门
- 现场执行能力：中俄已演练过，技术能力已确认（C3）

结论：`partial`——ccTLD 被删除对国家域名体系是局部损伤，不是完全杀伤；而且 ICANN 从未动用，极端情景下有时间反应。

*HTTPS 替代方案（降级）*：
- 自签名证书（Self-signed）：用户手动信任，无法大规模部署
- 内部 CA：企业私有 PKI，不依赖公共 CA
- 结论：`blocked`——公开互联网无法绕开公共 CA trust store 体系，降级方案只在封闭网络内有效

**CA trust store 替代**：

若一家 CA 被全部四个主流 trust store 移除（最极端情形）：
- 该 CA 签发的所有证书在所有主流操作系统/浏览器里显示"不安全"
- 受影响网站需要更换 CA，向仍受信任的 CA 申请新证书——Let's Encrypt 等可在分钟内颁发，迁移速度按小时到天计
- 结论：`operational`——CA 更换技术上可以很快（Let's Encrypt 自动化，几小时）；但若被针对的是某个国家的所有 CA 且替代 CA 无法服务该国实体，则转变为 `blocked`

中国场景（2016 年 WoSign/StartCom 已发生）：中国大陆 CA 在主流 trust store 里几乎为零，但并未造成国内网站访问危机——原因是国内大量使用 DigiCert/Sectigo/Let's Encrypt 等境外 CA。若境外 CA 不再向中国实体服务（假设极端制裁场景），中国需要本土 CA 被 trust store 接受——这条路因 WoSign 事件已基本关闭，是全图里少见的"理论上极难恢复的单点"（C2，无充分证据说已有应对方案）。

### 8. 重建壁垒 + 前置期

**DNS 根区替代**：

完整替代全球 DNS 根区——建立被所有国家和 ISP 认可的替代根——需要多边协议（类似 ICANN 多利益相关方进程），历史上 ICANN 进程花了几十年才走到今天的多边治理框架。重建期：10 年量级，且需政治共识。

局部替代（单国主权 DNS）：技术壁垒低，政治/合法性壁垒高。

**CA trust store 进入**：

新 CA 进入主流 trust store 需要：通过 CA/Browser Forum（业界自律组织，主要规则制定者）的审计；分别通过 Apple、Microsoft、Google、Mozilla 各自的申请流程，等待审核周期一般 1–3 年；保持年度 WebTrust 或 ETSI 审计合规记录。

中国 CA 重新进入 trust store 的壁垒：WoSign/StartCom 在 2016 年被证实伪造证书时间戳并对 GitHub 域名签发未授权证书（C4，Mozilla 2016 年调查报告）——这在 CA/Browser Forum 和 trust store 管理者中留下了极高的信任赤字，后续任何中国 CA 申请进入 trust store 都面临额外的尽调负担（C3，无公开文件，但 CFCA 目前在主流 trust store 的存在极为有限是事实）。

**前置期**：新 CA 进入 trust store 约 2–4 年（有先例，但中国 CA 重建信任的时间线更长，C2 推算）。

### 9. 议价 / 控制机制

**DNS 层**：
- **卡点 type**：`permission`（ICANN 许可根区内容）+ `information`（根服务器提供权威解析信息）
- **卡点 mode**：根区对主权国家 ccTLD：`open`（历史从未封锁过）但理论上具备 `near-closure` 能力；Verisign 对 `.com` 域名注册是 `toll gate`（所有域名需续费，Verisign 有提价权，ICANN 通过合同约束，非对等谈判）

**CA 层**：
- **卡点 type**：`permission`（trust store 决定哪些 CA 有效）
- **卡点 mode**：平时 `open by default`；针对具体 CA：`selective-seizure`（可选择性移除特定 CA）；若针对某国所有 CA：理论上 `near-closure` 对 HTTPS 互联网可达性

**两层合并的卡点独特性**：DNS 和 CA 的政治控制都比 ir-bgp 更精准和更少副作用。BGP 干预必须针对 IP 前缀（网络块），粒度粗；DNS 和 CA 可以精确到**单个域名**（DNS 指定拒绝解析）或**单个 CA**（trust store 移除），粒度更细，附带损伤更小——这使它成为更有吸引力的针对性工具，但也因此更容易"只在小圈子里使用"而未被广泛关注。

### 10. 历史变迁（卡点怎么移动）

**1990s：早期集中控制时代**

DNS 根区早期由 Jon Postel 个人（IANA 创始人）和美国联邦政府（DARPA、NTIA）非正式管理，之后由 ICANN 承接（1998 年 ICANN 成立），整个 1990s 至 2010s 美国政府通过 NTIA 与 ICANN 签订合同（JPA/AOC），保持政治背书。

**2016年：IANA 监管权移交**

2016 年 9 月 30 日，NTIA（美国国家电信和信息管理局）正式将 IANA 功能的监管权移交给多利益相关方社区（C4，NTIA 官方公告）。这标志着 DNS 根区名义上脱离美国政府单边控制——但 ICANN 仍是加州法人，Verisign 仍持有根区编辑合同，美国法院仍可向 ICANN 和 Verisign 发出传票或命令，名义上的去中心化并未从法律层面消除美国单边控制能力（C3，多位学者分析）。

**2010年：Comodo 遭伊朗黑客入侵**

2011 年，Comodo CA 被黑客（自称与伊朗政府有关）入侵，为 Google、Yahoo、Mozilla、Skype 等的域名签发了虚假证书（C4，广泛报道）。OCSP 在撤销流程公布后数小时内生效，事件影响得到控制，但揭示了 CA 安全性是整个 trust store 体系的薄弱环节。

**2011年：DigiNotar 崩溃**

荷兰 CA DigiNotar 遭受入侵，攻击者为 `*.google.com` 签发了虚假证书，并实际用于伊朗境内对 Google 用户的 MITM 攻击（C4，Comodo/Google 2011 年报告）。Mozilla、Microsoft、Google 随即把 DigiNotar 从 trust store 移除。DigiNotar 在约 6 周内宣告破产——被 trust store 移除直接导致一家 CA 公司从市场上消失，这是 trust store 政治武器属性的最清晰实证。

**2016年：WoSign/StartCom 被移除**

Mozilla 调查发现 WoSign（中国 CA）和其秘密收购的以色列 CA StartCom 伪造证书颁发时间戳以绕过行业截止日期，并向 GitHub.com 域名签发了未授权证书（C4，Mozilla 2016 年 Wiki 报告）。2016 年底，Firefox、Chrome、Safari 相继移除 WoSign 和 StartCom（C4）。效果：这两家 CA 实际上退出了公开互联网市场。这是**中国 CA 在主流信任体系里的最大规模挫败**，此后中国本土 CA 在全球 trust store 的存在几近归零。

**2020年后：Let's Encrypt 主导 + 证书透明度**

Let's Encrypt 自 2015 年起提供免费自动化证书，到 2023 年约有 3–4 亿活跃证书（C3，Let's Encrypt 官网统计）。CA/Browser Forum 要求所有受信任 CA 记录到证书透明度日志（Certificate Transparency，CT Log），2018 年起 Chrome 强制执行（C4，Chrome 政策）——任何未记录到 CT Log 的证书 Chrome 直接拒绝。CT Log 服务器主要由 Google、Cloudflare、DigiCert 等美国公司运营（C3）。这增加了一个新的监控层：全球所有 HTTPS 证书的颁发记录都在 CT Log 里，被 Google 等公司可以看到和审计。

### 11. 因果层

**物质约束（低比重）**：DNS 和 CA 都不依赖稀缺物理资源。根服务器是普通服务器，CA 基础设施是软件+HSM，都可以被多家机构复制运行。物质约束几乎不是卡点来源。

**real force（高比重）**：DNS 和 CA 的卡点根本来自**被全球普遍接受的权威性**——ICANN 的权威来自历史上的全球接受和多边认可，trust store 的权威来自 Apple/Google/Microsoft/Mozilla 软件被数十亿人使用。这和 ir-bgp 里 Tier-1 信任同类，但更极端：Tier-1 信任可以通过建设新光缆+多年积累改变，trust store 信任由四家公司在技术上几乎即时修改（但政治成本是与全球 Web 生态对抗）。两层都是靠被普遍采用支撑的 real force，一旦共识被打破就贬值——ICANN 若失去普遍认可，根区权威立刻崩溃。

**调用技巧（低比重，但精准）**：DNS 和 CA 层的干预不是结果难料的决策，而是可以非常精确的技术操作。Trust store 管理者可以在一次软件更新里精确撤销一家 CA 的信任，粒度比 BGP 层精准很多，副作用更可控——这使干预实际发生的门槛更低（DigiNotar 6 周内移除，WoSign/StartCom 几个月内移除，都是技术+策略双重驱动）。

---

## 量化层

### Q1. 市场规模

**DNS 服务市场**：

全球 DNS 托管/解析服务市场约 **$12–18 亿/年**（2023，C2，无单一权威统计；Mordor Intelligence/Grand View Research 有商业报告但需原文核）。这是付费 DNS 服务（企业 DNS 管理、DDoS 防护 DNS 等），不包括免费公共 DNS（Google 8.8.8.8、Cloudflare 1.1.1.1）。

Verisign（.com/.net 注册局）：FY2023 年营收约 **$15.3 亿**（C4，Verisign 2023 年报，NASDAQ: VRSN 上市公司）。这是全球 DNS 商业化里最单纯的一个收费节点：约 1.6 亿 `.com` 域名每年续费（约 $8–10/域名注册局层）。

**CA/PKI 市场**：

全球公钥基础设施（PKI）市场约 **$50–80 亿/年**（2023，C2，IDC/Gartner/MarketsandMarkets 商业报告）。这包括企业 PKI 解决方案、代码签名证书、S/MIME 邮件证书等，不只是网站 TLS 证书。

DigiCert 单独估值：2022 年 Thoma Bravo 以约 **$69 亿**收购（C3，Bloomberg/Reuters 报道），是对 CA/PKI 市场价值的市场定价参考。

### Q2. 集中度量化

**DNS 根区**：CR1 = 100%（ICANN/Verisign 垄断根区内容，C4）。`.com` 注册局：CR1 = 100%（Verisign，C4）。`.com` 是全球最大 TLD，约占全球注册域名约 35–40%（C3，Verisign/Verisign Domain Industry Brief）。

**CA（按活跃 HTTPS 证书数量）**：
- Let's Encrypt（ISRG）：约 **50%**（C3，Netcraft/W3Techs 2023）
- DigiCert：约 **15–20%**（C3，含原 Symantec/Thawte/GeoTrust 品牌）
- Sectigo（原 Comodo CA）：约 **15%**（C3）
- GlobalSign：约 **5–8%**（C3）
- 其余：约 10%

Let's Encrypt 的主导地位使 ISRG（美国非营利）成为 CA 层隐性的价格制定者（它的免费证书让所有付费证书定价下压）。CA trust store 控制者：四家（Apple/Microsoft/Google/Mozilla），均在美国（C4）。

### Q3. 关键玩家财务概况

**Verisign（NASDAQ: VRSN）**：
- FY2023 营收：约 **$15.3 亿**（C4，10-K 年报，可核）
- 毛利率：约 **82%**（C3，历年毛利率区间 80–85%，待年报核）
- 净利率：约 **50%**（C3，推算）
- 市值：约 **$180–200 亿**（C3，2024 年区间，需核确切数字）
- 商业模式：几乎纯经常性收入，`.com` 续费合同受 ICANN 约束（每 6 年重新谈判，但历史上从未实质变更）。进入壁垒极高——注册局的垄断由合同支撑，新进入者无法复制。

**DigiCert（私有化）**：
- 营收约 **$5–8 亿/年**（C2 推算，无公开财报；Thoma Bravo 收购价 $69 亿对应典型 PE 倍数推算）
- 企业级市场主导，高价值 EV 证书和代码签名市场份额高（C2）

**Let's Encrypt（ISRG，非营利）**：
- 年度预算约 **$400–600 万**（C3，ISRG 年度报告，公开透明度报告可核）——这是全图里影响力和运营成本最不成比例的例子之一：每年数百万美元运营着全球约 50% 的 HTTPS 信任链

**ICANN（非营利）**：
- 年营收约 **$1.3–1.5 亿**（C3，ICANN 年报，主要来源是 TLD 注册商合同费）——运营着全球 DNS 根区的策略机构，但实际根区编辑委托给 Verisign

### Q4. 下游依赖度量化

**DNS 的下游依赖**：全球约 **2 亿+ 域名**（C3，Verisign Domain Industry Brief 2023），每一个域名对应至少一个在线实体（企业、政府、媒体、个人）。任何依赖域名的 API、网站、邮件、应用都是 DNS 的下游——实际上是整个应用层互联网。

**CA 的下游依赖**：全球 HTTPS 网站约 **5–6 亿**（C3，Netcraft 2023 调查）。Chrome/Firefox/Safari 用户对非 HTTPS 网站的访问已逐步限制（Chrome 2023 起对 HTTP 显示更多警告，C4），HTTPS 覆盖率持续升高，使 CA 体系的下游依赖广度比五年前更大。

库存缓冲：DNS 缓存 TTL 通常 300–3600 秒（5 分钟到 1 小时），CA OCSP 响应缓存通常 24–48 小时。实际中断后缓冲极短。

### Q5. 断供 / 管制的经济冲击量级

**`.com` 域名体系中断场景**（假设 DNS 根区故障或 Verisign 运营中断）：

全球 `.com` 电子商务年交易额约 **$5–10 万亿**（C2，电商体量推算；`.com` 域名下的亚马逊/谷歌/苹果/脸书/eBay 等平台的年营业额合计量级）。小时级中断 → 数百亿美元交易无法完成（C2 推算）。

历史参考：2016 年 Dyn DNS（主要 DNS 服务商）遭受 Mirai 僵尸网络 DDoS 攻击，美国东海岸大范围网站无法访问约 6 小时——评估经济损失约 **$1 亿**（C2，第三方估算，因大多数平台有冗余 DNS 服务商而损失有限，C3）。

**CA trust store 中断场景**（假设所有主流 trust store 同时撤销某个大型 CA）：

DigiCert 突然被移除的情景：约 **1.5–2 亿**个网站需要在 24–48 小时内更换证书（C2 推算，DigiCert 市场份额×总 HTTPS 域名数）；技术上通过 Let's Encrypt 自动化可在数小时内迁移，但企业级证书（代码签名、电子邮件 S/MIME）无法自动迁移；预计波动性损失数十亿美元（C2，推算）。

【缺口：需要 Verisign 10-K 2023 年报（营收/毛利率/市值）；DNS 市场规模权威报告（IDC/Gartner/TeleGeography）；HTTPS 网站数量 Netcraft Survey 2023；PKI 市场规模报告（IDC/MarketsandMarkets）；ISRG Let's Encrypt 2023 年度透明度报告（证书量/运营成本）】

### Q6. 资本流向与利润归宿

DNS 层的利润主要留在 **Verisign**（约 50% 净利率，全球最高利润率之一，经常性收入无需资本投入扩产）。注册商层（GoDaddy、Namecheap 等）利润率显著低于 Verisign，是 Verisign 的经销商而非竞争对手。

CA 层：传统 CA（DigiCert/Sectigo）的企业高价值证书利润率高（EV 证书订阅模式），但 Let's Encrypt 的免费证书把大量标准 DV 证书的利润压缩至接近零。利润转向**增值服务**（证书管理自动化平台、IoT 设备身份管理）而非证书本身。

Trust store 控制者（Apple/Google/Microsoft）：直接从 CA 业务中**不获取收入**（trust store 对 CA 是强制合规要求，不是商业交易）——它们的利润来源是操作系统/浏览器生态，trust store 是维持生态安全性的成本中心，不是利润中心。这是本节点的财务结构异常之处：最核心的政治控制权（trust store）掌握在不从中盈利的主体手里，这意味着干预的激励结构不同于 Verisign 这类有明确商业利益的控制者。

---

## 政治传动层

### A. 公开接口

**DNS 层**：
- **ICANN 与 Verisign 根区编辑合同**：`.com` 注册局协议（Registry Agreement），ICANN 与 Verisign 间，每 6 年续签，公开文本（ICANN 官网，C4）
- **NTIA 与 ICANN 原合同/AOC**：2016 年 IANA 转型后失效，但 ICANN 仍是美国法人，受美国法律（C4）
- **ICANN 章程（Bylaws）**：规定根区内容变更的多利益相关方流程（C4）

**CA 层**：
- **CA/Browser Forum 基线要求（Baseline Requirements）**：TLS 证书的行业最低标准，2012 年起实施，每年修订（C4，CA/Browser Forum 官网）
- **各 trust store 政策**：Apple Root Certificate Program Policy、Microsoft Trusted Root Program Requirements、Chrome Root Store Policy、Mozilla Root Store Policy——均为公开文件（C4），规定 CA 准入和撤销标准

### B. 控制状态流转

**DNS 根区（对国家 ccTLD）**：
- 当前状态：`allow by default`（所有在册 ccTLD 都在根区，ICANN 从未主动删除现存国家 ccTLD）
- 翻转门槛：需 ICANN 董事会超多数（多利益相关方结构下需广泛共识），无单一国家政府能直接命令翻转（但美国法院可发出针对 ICANN 的命令，法律上存在路径）
- 真实历史：从未发生对现存国家 ccTLD 的删除

**CA trust store（对具体 CA）**：
- 当前状态：被信任 CA 默认允许颁发证书
- 翻转门槛：trust store 运营者单方面决定（Apple/Google/Microsoft/Mozilla 无需外部批准，技术上可在一次软件更新内推送移除）；CA/Browser Forum 合规事件通常是触发因素（WoSign 案发后约 3–4 个月移除）
- 翻转记录：DigiNotar 约 6 周、WoSign/StartCom 约 3–4 个月

### C. 适用账本

**许可账**：CA 进入 trust store = 获得向全球颁发被信任证书的许可；被移除 = 许可撤销
**时间账（证书有效期）**：TLS 证书有效期当前最长 398 天（C4，Apple 2020 年 Safari 策略强制，其余 trust store 跟进）；CA 被移除后，已颁发的未到期证书如何处理是关键——DigiNotar 案中 trust store 移除是即时的，不等证书到期

### D. First Payer

**DNS 根区删除**：被删除 ccTLD 国家的所有网站/邮件服务（域名解析失效）——first payer 是该国互联网依赖最重的商业实体（银行、电商、政府门户）；境外访问者也立刻无法通过 ccTLD 访问该国网站，在反制方向 first payer 是试图访问的境外用户

**CA 移除**：被移除 CA 的所有客户（需立即迁移证书），以及依赖这些网站的最终用户（收到安全警告）；企业客户迁移证书有 IT 人力成本；非自动化证书更换可能需要数天到数周

### E. 时点

**DNS 根区变更**：ICANN 理论上可以在技术层面快速修改根区文件（数小时到数天），但多利益相关方流程会拖慢到数周或数月。全球 DNS 缓存传播新根区内容：分钟到数小时（取决于 TTL）。

**CA trust store 移除**：trust store 运营者技术决定 → 软件更新推送 → 用户端生效。Apple 通常随 iOS/macOS 安全更新推送（周级别）；Chrome 有专用 CRLSet 机制（小时级）；Firefox 约周级。

### F. 叙事合法化

**DNS 管理**：ICANN 的权威靠「互联网普遍稳定性和安全性」叙事维持——任何破坏互联网协调稳定的行为都被定义为违反 ICANN 使命。美国若要求移除某国 ccTLD，叙事成本极高，因为全球将看到 ICANN 从「中立技术机构」变成「美国政治工具」，威胁 ICANN 自身的合法性根基（这是迄今最大的使用抑制因素，C3）。

**CA 移除**：靠「互联网安全」叙事合法化，动员了 CA/Browser Forum（行业自律组织）和安全研究社区。WoSign/StartCom 案的处理方式是通过公开安全调查（Mozilla 工程师公开发布技术报告）建立证据基础，让移除决定在公众和行业眼中是安全响应而非政治打击——这个叙事框架是执行卡点的关键条件，比 BGP 层的干预在舆论上更容易获得合法性（技术安全失误是更清晰的理由）。

---

## 卡点分析

### 卡点 1：DNS 根区权威（ICANN/Verisign）

- **位置**：DNS 根区，全球 TLD 树的起点
- **持有者**：ICANN（策略，美国法人）+ Verisign（技术执行，美国上市公司）
- **卡点来源**：历史积累的权威认可（real force）+ 全球 ISP 已配置根服务器地址（网络效应）+ 无实际替代的多边认可（无竞争机构）
- **政治进入后转移**：2016 年 IANA 转型名义上去中心化，但美国法域控制未实质转移；未来若美国对 ICANN 强化单边控制，预计引发主权互联网运动加剧，中俄可能建立平行根服务器（C2）
- **干预窗口**：从未开启，当前技术能力存在但政治成本极高；窗口理论上开放，但自我约束强
- **最硬反例 + 过三关**：「IANA 转型证明美国已失去 DNS 控制权」——前提不成立（ICANN 是加州法人、Verisign 合同未变、根服务器多在美国法域），可不可比（转型是多边治理形式变化，非控制权实质转让），真发生过（实质转让未发生）→ 降级为：2016 年转型降低了美国单边政治成本，但未从法律上消除美国干预路径

### 卡点 2：CA Trust Store（四家 trust store 控制者）

- **位置**：浏览器/操作系统 trust store，HTTPS 信任链的技术锚点
- **持有者**：Apple、Microsoft、Google、Mozilla（全在美国法域）
- **卡点来源**：软件市场垄断（Windows/macOS/iOS/Chrome 市场份额，real force）+ CA/Browser Forum 行业规则（规范化了干预的合法性叙事）+ 已有实施案例（DigiNotar/WoSign，技术成熟）
- **政治进入后转移**：CA/Browser Forum 规则本身变化缓慢，现有的信任中心性难以快速移转；中国若要建立平行信任体系需要操作系统/浏览器市场先独立（Huawei HarmonyOS 有独立 trust store，但仅在特定设备上生效，C3）
- **干预窗口**：已多次开启（DigiNotar、WoSign 案），以「安全合规失误」为叙事基础开启最容易，干预可以精确到单家 CA
- **最硬反例 + 过三关**：「Let's Encrypt 占 50% 份额，CA 市场已民主化，任何人可获证书」——前提成立（Let's Encrypt 确实主导），可不可比（Let's Encrypt 解决的是证书获取成本问题，卡点在 trust store 决定哪些证书被信任，两层不同），真发生过（Let's Encrypt 本身也可被从 trust store 移除，虽政治成本极高）→ 降级为：CA 颁发民主化降低了精确 CA 干预的效果（可迁移），但 trust store 本身的单点未消失

---

## 级联关系

- **上游来自**：ir-cables（物理传输前提）、ir-bgp（IP 路由可达前提）——DNS 查询和 CA OCSP 检查都是 IP 数据包，需要 BGP 路由
- **下游影响**：应用层互联网全体（电子商务、政府门户、媒体、API）、fi-swift/fi-usd（金融指令依赖 HTTPS 安全传输）、ac-cloud（云服务 API 端点依赖 DNS + CA）、ps-exportctrl（制裁实体的网站访问/CA 证书状态）
- **跨栈耦合**：
  - ps-sanctions（OFAC 制裁实体若依赖 DigiCert/Sectigo，理论上可通过 CA 制裁接口影响，但实践中尚未发生；DNS 域名注册可被 OFAC 要求暂停，Namecheap/GoDaddy 已配合特定制裁执行）——`许可+合规`
  - fi-usd（CA/DNS 是金融 HTTPS 通信的信任前提，切断 CA 信任=切断该实体的在线金融服务可达性）——`permission`
  - ir-bgp（BGP 劫持 + DNS 污染双层组合攻击，2008 年巴基斯坦案是 BGP 层，真实 DNS 污染案例出现在 GFW 过滤机制里）——`信息层级联`
- **跨域效应**：影响 Cassandra Vey（AI 技术社会学）——CA 信任体系崩溃对 AI API 服务全球可达性的影响；影响 Pluralia（分布式系统可信性问题的基础设施层）

---

## C 等级清单

| 判断 | C 等级 | 来源 | 填充状态 |
|---|---|---|---|
| ICANN 是美国加利福尼亚州非营利法人 | C4 | ICANN 公开法律文件 | 已有 |
| Verisign 是 `.com`/`.net` 独家注册局，持有 ICANN 合同 | C4 | Verisign ICANN 合同（公开）| 已有 |
| 12 家根服务器运营机构中约 9 家在美国法域 | C4 | IANA 根服务器列表（iana.org）| 已有 |
| 2016 年 NTIA 将 IANA 监管权移交多利益相关方社区 | C4 | NTIA 官方公告 2016-09-30 | 已有 |
| Apple/Microsoft/Google/Mozilla 四家均在美国法域 | C4 | 公开公司注册信息 | 已有 |
| Google Chrome 2022 年启用独立 Chrome Root Store | C4 | Chrome 政策博客（公开）| 已有 |
| CA/Browser Forum 基线要求，2012 年起实施 | C4 | CA/B Forum 官网（公开）| 已有 |
| DigiNotar 被所有主流 trust store 移除（2011）| C4 | Mozilla/Google/Microsoft 官方公告 | 已有 |
| WoSign/StartCom 伪造时间戳并为 GitHub 签发未授权证书（2016）| C4 | Mozilla 2016 年安全调查报告 | 已有 |
| WoSign/StartCom 被 Firefox/Chrome/Safari 移除 | C4 | Mozilla/Google/Apple 官方公告 | 已有 |
| Apple 2020 年起 TLS 证书有效期上限 398 天 | C4 | Apple WWDC 2020 / CA/B Forum 跟进政策 | 已有 |
| 巴基斯坦电信 2008 年 BGP 劫持导致 YouTube 全球中断约 2 小时 | C4 | RIPE NCC 数据存档 + 广泛媒体记录 | 已有 |
| ICANN 从未主动删除现存国家 ccTLD | C4 | ICANN 历史记录（公开）| 已有 |
| Verisign FY2023 营收约 $15.3 亿 | C4（待核年报）| Verisign 2023 10-K 年报 | 需补（年报原文）|
| `.com` 下注册域名约 1.6 亿 | C3 | Verisign 2023 Domain Industry Brief | 需补 |
| Let's Encrypt 占全球活跃 HTTPS 证书约 50% | C3 | Netcraft 2023 / W3Techs 统计 | 需补 |
| 全球 Tier-1 网络法域分布（美国约 5–6 家/EU 约 4 家）| C3 | TeleGeography / 公开 ASN 数据 | 需补 |
| Chrome 全球浏览器市场份额约 65% | C3 | StatCounter 2023 | 需补 |
| 全球 HTTPS 网站约 5–6 亿 | C3 | Netcraft 2023 调查 | 需补 |
| DigiCert 2022 年被 Thoma Bravo 以约 $69 亿收购 | C3 | Bloomberg/Reuters 报道 | 需补 |
| ISRG Let's Encrypt 年度预算约 $400–600 万 | C3 | ISRG 年度透明度报告 | 需补 |
| ICANN 年营收约 $1.3–1.5 亿 | C3 | ICANN 年报 | 需补 |
| Chrome/Firefox/Safari 均已驱逐 WoSign/StartCom | C4（各自官方声明）| 各浏览器厂商公告 | 已有 |
| Huawei HarmonyOS 有独立 trust store | C3 | 广泛媒体/技术报道 | 需补 |
| CFCA 目前在部分 trust store 内但份额极小 | C3 | trust store 现状（Mozilla 列表公开）| 需补 |
| RPKI 约 40–50% 全球路由覆盖（来自 ir-bgp 节点）| C3 | RIPE NCC / APNIC 统计 | 已有（ir-bgp）|
| Verisign 毛利率约 82% | C3 | Verisign 历年年报区间 | 需补（年报原文）|
| 全球 DNS 服务市场约 $12–18 亿/年 | C2 | 商业报告推算，无权威统计 | 推算 |
| 全球 PKI 市场约 $50–80 亿/年 | C2 | IDC/Gartner/MarketsandMarkets 商业报告 | 推算 |
| `.com` 下电商年交易额 $5–10 万亿量级断供影响 | C2 | 量级推算 | 推算 |
| 中国 CA 重建 trust store 信任时间线 | C2 | 推算，无公开方案 | 推算 |

---

## 数据缺口清单

1. **【缺口：需要 Verisign 2023 年报（10-K）**】——营收精确数字、毛利率、市值；这是 Q1/Q3 最影响卡点判断的基础数字。（目前 C3 有口径，需年报原文升 C4）

2. **【缺口：需要 Mozilla 2016 年 WoSign/StartCom 调查报告原文】**——证实 WoSign 技术罪行的完整技术细节，影响中国 CA 信任损伤深度的判断精确度。

3. **【缺口：需要 ISRG Let's Encrypt 2022/2023 年度透明度报告】**——证书颁发量/增速/运营成本，影响 Q1/Q3 量化层和 Let's Encrypt 作为"民主化替代"的真实规模判断。

4. **【缺口：需要 Netcraft Web Server Survey 2023】**——全球 HTTPS 网站总数、CA 市场份额分布，影响 Q2/Q4 量化层和 CA 集中度判断。

5. **【缺口：需要 ICANN Annual Report 2022/2023】**——ICANN 年营收来源细分（注册商合同费分成），影响 Q3 对 ICANN 自身财务规模的判断。

6. **【缺口：需要 Chrome Root Store Policy 2022 原文】**——Chrome 独立 trust store 的启动条件和政策细节，影响 trust store 独立性和政治干预路径的分析。

7. **【缺口：需要 CA/Browser Forum Baseline Requirements 最新版（2023/2024）】**——证书有效期、CT Log 强制要求等核心行业规则的精确条文，影响控制状态流转（B 维）的分析。

---

## 最近一次被争夺的事件（2026-07-08 回填）

**事件**：2022-02/03 乌克兰请求 ICANN 撤销俄罗斯 ccTLD（.ru/.рф）与吊销境内根服务器 → ICANN 拒绝

俄乌战争爆发后数日，乌克兰副总理兼数字转型部长 Fedorov 正式致函 ICANN，请求撤销 `.ru`、`.рф`、`.su` 顶级域、吊销相关 SSL 证书、并关停俄罗斯境内的根服务器镜像。这是 DNS 根区权威第一次被一个主权国家公开要求当武器用。

**颗粒度校准**：争的不是"DNS 能不能被切"（技术上根区能删 ccTLD，这点无争议），而是"ICANN 会不会为一场战争动用这个从未用过的权力"这个具体决定。节点边界正好卡在 ICANN 的治理中立性承诺上。

**反应链**：
- 乌克兰 2022-02-28 提请求；
- ICANN 总裁 Göran Marby 2022-03-02 公开回信拒绝，理由是 ICANN 的角色是维持全球互联网单一互操作性、无权也不应基于政治动机单方面撤销 ccTLD——"我们没有制裁权、这不是我们能扮演的角色"；
- RIPE NCC（管俄罗斯 IP 分配的欧洲 RIR）同日发声明，拒绝乌克兰类似请求，理由相同：编号资源的分配必须与政治压力隔离；
- 俄罗斯方向：此前 2021 已在推进主权互联网（No.90-FZ）与本土根备份，这次事件反过来印证了它建本土 DNS 冗余的动机不是空想。

**被当成地面的一方**：ICANN 与 RIR 的"技术中立"原则被双方同时踩到——乌克兰要它为正义破例，俄罗斯的备份建设预设它迟早会被逼破例。这个"中立地面"能不能在战争压力下站住，正是被争夺的对象。

**放到时间里读**：1998 年 ICANN 成立、2016 年 IANA 职能从美国政府移交，一路把"根区权威去政治化"当立身之本；2022 是这套承诺第一次被一场大国战争直接测试。这一次 ICANN 拒绝了——但它拒绝的理由是"我无权",而不是"我有权但选择不用",这两种措辞对未来的约束力完全不同。

**照出的结构**：DNS 根区这个卡点的真实状态是"技术上可激活、制度上被一条中立承诺锁住"。锁不是物理的，是 ICANN 自我设定并反复重申的角色边界；它的强度取决于这条承诺在压力下能不能被普遍接受为"地面"。2022 这次它站住了，但代价是 ICANN 必须把自己牢牢固定在"无权撤销"的位置上——一旦哪天它承认自己"有权但克制",这个卡点的政治性质就变了。与 ir-bgp 的 RIR 中立、fi-swift 的比利时法人治理是同一类"靠制度中立承诺维持、而非靠物理不可能维持"的卡点。
