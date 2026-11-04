(function () {
  var C = SigmaCharts, U = C.util, EN = U.EN, S1 = "#3987e5";
  function t(zh, en) { return EN ? en : zh; }
  // 四：复利滑块
  var rr = document.getElementById("rr"), gg = document.getElementById("gg");
  function draw() {
    var rv = +rr.value, gv = +gg.value, host = document.getElementById("c1");
    document.getElementById("ro").textContent = rv + "%"; document.getElementById("go").textContent = gv + "%";
    host.innerHTML = ""; host.className = "";
    var pts = [], t50 = null, t100 = null;
    for (var y = 0; y <= 80; y++) {
      var beta = 5 * Math.pow((1 + rv / 100) / (1 + gv / 100), y), share = rv * beta;
      if (t50 == null && share >= 50) t50 = y;
      if (t100 == null && share >= 100) t100 = y;
      if (share <= 160) pts.push([y, +share.toFixed(1)]);
    }
    C.line({ el: host, xName: t("年", "Year"), xLabel: t("年", "years"), yLabel: t("财产收入占国民收入（%）", "Property income, % of national income"), unit: "%", yDigits: 1, yMin: 0, yMax: 160, xMin: 0, xMax: 80,
      xTicks: [0, 10, 20, 30, 40, 50, 60, 70, 80], hlines: [{ y: 100, label: t("100%：劳动者没有收入", "100%: nothing left for labour") }, { y: 50, label: "50%" }],
      series: [{ name: t("财产收入的比重", "Property income share"), color: S1, points: pts, dots: false }] });
    host.querySelector(".ctab").remove();
    var dbl = Math.round(Math.log(2) / Math.log((1 + rv / 100) / (1 + gv / 100)));
    document.getElementById("c1r").innerHTML = rv <= gv ? t("回报率不高于增长率时，比重不会上升。", "When the return is no higher than growth, the share does not rise.") :
      EN ? "Starting share <b>" + (5 * rv) + "%</b>; it reaches 50% in about <b>" + (t50 == null ? "more than 80 years" : t50 + " years") + "</b> and 100% in about <b>" + (t100 == null ? "more than 80 years" : t100 + " years") + "</b>. Property doubles relative to income about every <b>" + dbl + "</b> years."
         : "起点比重 <b>" + (5 * rv) + "%</b>；升到 50% 约需 <b>" + (t50 == null ? "80 年以上" : t50 + " 年") + "</b>，升到 100% 约需 <b>" + (t100 == null ? "80 年以上" : t100 + " 年") + "</b>。财产相对于收入的倍数约每 <b>" + dbl + "</b> 年翻一倍。";
  }
  rr.addEventListener("input", draw); gg.addEventListener("input", draw); draw();
})();
