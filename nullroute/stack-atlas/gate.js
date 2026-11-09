// gate.js — 输密码页面的脚本。验证密码（解开 lock.json 里的校验串），把密钥存进 IndexedDB，注册 sw.js 后重新载入。
// 2026-11-09 改：主人在手机上（远程控制）输密码后「没有反应」。原先等 Service Worker 就绪没有时限，就绪不了就一直停在「正在验证」；
// 重新载入后若页面没被 Service Worker 接管，又回到输密码页，看上去也像没反应。现在：每一步出错都写明原因；等就绪最多 10 秒；
// 已存了密钥、页面却没被接管时，自动再载入一次，仍不行就提示换浏览器打开。
(function () {
  const script = document.currentScript;
  const base = new URL(script.dataset.root || "./", location.href);
  const form = document.getElementById("f");
  const input = document.getElementById("p");
  const msg = document.getElementById("m");
  const zh = (document.documentElement.lang || "zh").startsWith("zh");
  const T = zh
    ? { nosw: "这个浏览器不支持 Service Worker，或处在无痕模式，无法打开加密页面。请用 Safari 或 Chrome 直接打开这个网址（不要用应用内打开链接的浏览器）。",
        wait: "正在验证……", bad: "密码不对。", err: "载入失败：", ok: "密码正确，正在打开……",
        slow: "密码正确，但这个浏览器没能启用解密（Service Worker 没有就绪）。请用 Safari 或 Chrome 直接打开这个网址，不要用应用内打开链接的浏览器。",
        stuck: "密码已验证，但这个浏览器没有让解密脚本接管页面。请用 Safari 或 Chrome 直接打开这个网址；若已经是，请关掉这个标签页重新打开。",
        retry: "密码已验证，正在启用解密……" }
    : { nosw: "This browser does not support service workers (or is in private mode), so the protected page cannot open. Please open this address directly in Safari or Chrome, not in an in-app browser.",
        wait: "Checking…", bad: "Wrong password.", err: "Failed to load: ", ok: "Password accepted, opening…",
        slow: "Password accepted, but this browser could not start the decryption service worker. Please open this address directly in Safari or Chrome, not in an in-app browser.",
        stuck: "Password accepted, but this browser did not let the decryption script take over the page. Please open this address directly in Safari or Chrome; if it already is, close this tab and open it again.",
        retry: "Password accepted, starting decryption…" };

  if (!("serviceWorker" in navigator) || !window.crypto || !crypto.subtle || !window.indexedDB) {
    msg.textContent = T.nosw;
    form.hidden = true;
    return;
  }
  const reg = navigator.serviceWorker.register(new URL("sw.js", base).href, { scope: base.pathname });
  reg.catch(() => {});   // 注册失败在提交时报出，这里不让它成为未处理的拒绝

  const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  function idb(mode, fn) {
    return new Promise((res, rej) => {
      const r = indexedDB.open("atlas-lock", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("k");
      r.onerror = () => rej(r.error);
      r.onsuccess = () => {
        const t = r.result.transaction("k", mode), q = fn(t.objectStore("k"));
        t.oncomplete = () => res(q && q.result);
        t.onerror = () => rej(t.error);
      };
    });
  }
  const putKey = (key) => idb("readwrite", (s) => s.put(key, "key"));
  const hasKey = () => idb("readonly", (s) => s.get("key")).then((k) => !!k, () => false);
  const within = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))]);
  const TRIED = "atlas-lock-reloaded";

  // 已经输过密码（密钥在），页面却仍是输密码页：说明这次载入没被 Service Worker 接管。先等它接管再载入一次；再不行就说明原因。
  hasKey().then(async (k) => {
    if (!k) return;
    let tried = false; try { tried = sessionStorage.getItem(TRIED) === "1"; } catch (e) {}
    if (tried) { msg.textContent = T.stuck; try { sessionStorage.removeItem(TRIED); } catch (e) {} return; }
    msg.textContent = T.retry;
    try { await within(navigator.serviceWorker.ready, 10000); } catch (e) { msg.textContent = T.slow; return; }
    try { sessionStorage.setItem(TRIED, "1"); } catch (e) {}
    location.reload();
  });

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    msg.textContent = T.wait;
    try {
      const lock = await (await fetch(new URL("lock.json", base), { cache: "no-cache" })).json();
      const material = await crypto.subtle.importKey("raw", new TextEncoder().encode(input.value), "PBKDF2", false, ["deriveKey"]);
      const key = await crypto.subtle.deriveKey(
        { name: "PBKDF2", salt: b64(lock.salt), iterations: lock.iterations, hash: "SHA-256" },
        material, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
      const check = b64(lock.check);
      try {
        await crypto.subtle.decrypt({ name: "AES-GCM", iv: check.slice(0, 12) }, key, check.slice(12));
      } catch (e) {
        msg.textContent = T.bad;
        input.select();
        return;
      }
      msg.textContent = T.ok;
      await putKey(key);
      try { await reg; } catch (e) { msg.textContent = T.slow + "（" + e + "）"; return; }
      try { await within(navigator.serviceWorker.ready, 10000); } catch (e) { msg.textContent = T.slow; return; }
      try { sessionStorage.setItem(TRIED, "1"); } catch (e) {}
      location.reload();
    } catch (e) {
      msg.textContent = T.err + e;
    }
  });
})();
