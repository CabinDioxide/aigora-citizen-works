/* 书页核心图。中文页和英文页共用这一份；<html lang> 决定图中文字用哪种语言，数字来自 data.js。 */
(function () {
  var C = SigmaCharts, U = C.util, EN = U.EN, D = window.CORE;
  var S1 = "#3987e5", S2 = "#d95926", S3 = "#199e70", S4 = "#c98500", S5 = "#9b6fd0", MU = "#8a8f98";
  var UK = S1, FR = S2, DE = S5, US = S4;
  function t(zh, en) { return EN ? en : zh; }
  var WAR = { x0: 1914, x1: 1945, label: t("1914—1945 年", "1914–1945") };
  var TIMES = t(" 倍", "×");

  // 16 国 r 与 g
  if (document.getElementById("c2")) {
    var r = {}, g = {}; D.c2.rore16_r.forEach(function (p) { r[p[0]] = p[1]; }); D.c2.rore16_g.forEach(function (p) { g[p[0]] = p[1]; });
    C.bars({ el: "#c2", unit: "%", unitShort: "%", digits: 1, max: 9, labelWidth: 110, groupName: t("时期", "Period"),
      series: [{ name: t("全部财富的实际回报率 r", "Real return on all wealth, r"), color: S4 }, { name: t("实际经济增长率 g", "Real GDP growth, g"), color: S1 }],
      groups: ["1871-1913", "1914-1945", "1946-1980", "1981-2007", "2008-2020"].map(function (k) {
        return { label: k.replace("-", EN ? "–" : "—"), values: [r[k], g[k]], notes: k === "1871-1913" ? [t("这一时期只有 12 国有回报数据", "Return data for only 12 countries in this period"), ""] : null }; }) });
  }

  // 全球可再生资本
  C.line({ el: "#c3", maxGap: 1, unit: TIMES, yDigits: 2, yMin: 0, yMax: 3.5, xMin: 1800, xMax: 2025,
    xTicks: [1800, 1815, 1850, 1870, 1913, 1950, 1980, 2023], yLabel: t("相当于几年的国民收入", "Years of national income"),
    bands: [WAR], vmarks: [{ x: 1870, label: t("第一个周期第二阶段", "Cycle 1, phase 2") }, { x: 1980, label: t("第二个周期第二阶段", "Cycle 2, phase 2") }],
    areas: [{ lo: D.c3.global_kp_low, hi: D.c3.global_kp_high, color: S1 }],
    series: [
      { name: t("1800—1979 年估计", "Estimate, 1800–1979"), color: S1, points: D.c3.global_kp_center, dots: false, dash: true },
      { name: t("1980 年起直接数据", "Direct data from 1980"), color: S2, points: D.c3.global_kp_wid, dots: false }] });

  // 英国国民财富
  C.line({ el: "#c4", maxGap: 1, unit: TIMES, yDigits: 2, yMin: 0, yMax: 9, xMin: 1800, xMax: 2025,
    xTicks: [1800, 1825, 1850, 1875, 1900, 1925, 1950, 1975, 2000, 2025], yLabel: t("相当于几年的国民收入", "Years of national income"), bands: [WAR],
    series: [
      { name: t("1800—1979 年历史估计", "Historical estimate, 1800–1979"), color: S1, points: D.c4.uk_wy_hist, dots: false, dash: true },
      { name: t("1980 年起年度账户", "Annual accounts from 1980"), color: S1, points: D.c4.uk_wy_annual, dots: false }] });

  // 英国土地
  C.line({ el: "#c5", maxGap: 1, unit: TIMES, yDigits: 2, yMin: 0, yMax: 3.2, xMin: 1800, xMax: 2025,
    xTicks: [1800, 1825, 1850, 1875, 1900, 1925, 1950, 1975, 2000, 2025], yLabel: t("相当于几年的国民收入", "Years of national income"), bands: [WAR],
    series: [
      { name: t("农业土地（历史基准年）", "Farmland (benchmark years)"), color: S4, points: D.c5.uk_land_pz, dash: true, maxGap: 0 },
      { name: t("农业土地（1980 年起逐年）", "Farmland (annual from 1980)"), color: S4, points: D.c5.uk_land_agri, dots: false },
      { name: t("住宅用地（1996 年起逐年）", "Residential land (annual from 1996)"), color: S2, points: D.c5.uk_land_resid, dots: false }] });

  // 英国可再生资本
  C.line({ el: "#c6", maxGap: 1, unit: TIMES, yDigits: 2, yMin: 0, yMax: 3.6, xMin: 1800, xMax: 2025,
    xTicks: [1800, 1825, 1850, 1875, 1900, 1925, 1950, 1975, 2000, 2025], yLabel: t("相当于几年的国民收入", "Years of national income"), bands: [WAR],
    series: [
      { name: t("历史基准年", "Benchmark years"), color: S3, points: D.c6.uk_kp_pz, dash: true, maxGap: 0 },
      { name: t("1980 年起逐年", "Annual from 1980"), color: S3, points: D.c6.uk_kp_wid, dots: false }] });

  // 英国政府债务与净海外资产
  C.line({ el: "#c7a", maxGap: 1, unit: TIMES, yDigits: 2, yMin: -0.2, yMax: 3.1, xMin: 1800, xMax: 2025,
    xTicks: [1800, 1825, 1850, 1875, 1900, 1925, 1950, 1975, 2000, 2025], yLabel: t("相当于几年的国民收入", "Years of national income"), bands: [WAR], hlines: [{ y: 0, label: "" }],
    series: [
      { name: t("政府总债务", "Gross government debt"), color: "#c9ccd1", points: D.c7.uk_govdebt, dots: false },
      { name: t("净海外资产", "Net foreign assets"), color: S5, points: D.c7.uk_nfa, dots: false }] });
  C.line({ el: "#c7b", maxGap: 1, unit: "%", yDigits: 1, yMin: -2, yMax: 32, xMin: 1800, xMax: 2025,
    xTicks: [1800, 1825, 1850, 1875, 1900, 1925, 1950, 1975, 2000, 2025], yLabel: t("占国民收入（%）", "% of national income"), bands: [WAR], hlines: [{ y: 0, label: "" }],
    series: [
      { name: t("全部资本收入", "All capital income"), color: MU, points: D.c7.uk_capinc, dots: false },
      { name: t("农地地租", "Farm rent"), color: S2, points: D.c7.uk_farmrent, dots: false },
      { name: t("净海外资本收入", "Net foreign capital income"), color: S1, points: D.c7.uk_nfci, dots: false },
      { name: t("政府利息支出", "Government interest"), color: "#c0392b", points: D.c7.uk_govint, dots: false }] });

  // 英、法、德、美国民财富（十年平均）
  C.line({ el: "#c8", unit: TIMES, yDigits: 2, yMin: 0, yMax: 8.5, xMin: 1800, xMax: 2030,
    xTicks: [1810, 1850, 1900, 1950, 2000, 2024], yLabel: t("相当于几年的国民收入", "Years of national income"), bands: [WAR],
    series: [
      { name: t("英国", "UK"), color: UK, points: D.c1.pz_decade_uk.concat(D.c1.wid2024_uk) },
      { name: t("法国", "France"), color: FR, points: D.c1.pz_decade_france.concat(D.c1.wid2024_france) },
      { name: t("德国", "Germany"), color: DE, points: D.c1.pz_decade_germany.concat(D.c1.wid2024_germany) },
      { name: t("美国", "USA"), color: US, points: D.c1.pz_decade_usa.concat(D.c1.wid2024_usa) }], maxGap: 10 });
})();
