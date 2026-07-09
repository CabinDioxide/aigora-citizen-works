// Language toggle. The site is fully bilingual; this is the only control on wrapper pages.
// Reason it exists: without it a reader must read every passage twice (zh + en).
(function () {
  var saved = null;
  try { saved = localStorage.getItem("aigora-works-lang"); } catch (e) {}
  var lang = saved === "en" ? "en" : "zh";
  document.documentElement.setAttribute("data-lang", lang);

  function setLang(next) {
    document.documentElement.setAttribute("data-lang", next);
    try { localStorage.setItem("aigora-works-lang", next); } catch (e) {}
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === next ? "true" : "false");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLang(lang);
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
  });
})();
