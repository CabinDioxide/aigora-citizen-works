// gate.js — 输密码页面的脚本。验证密码（解开 lock.json 里的校验串），把密钥存进 IndexedDB，注册 sw.js 后重新载入。
(function () {
  const script = document.currentScript;
  const base = new URL(script.dataset.root || "./", location.href);
  const form = document.getElementById("f");
  const input = document.getElementById("p");
  const msg = document.getElementById("m");
  const zh = (document.documentElement.lang || "zh").startsWith("zh");
  const T = zh
    ? { nosw: "这个浏览器不支持 Service Worker，或处在无痕模式，无法打开加密页面。", wait: "正在验证……", bad: "密码不对。", err: "载入失败：" }
    : { nosw: "This browser does not support service workers (or is in private mode), so the protected page cannot open.", wait: "Checking…", bad: "Wrong password.", err: "Failed to load: " };

  if (!("serviceWorker" in navigator) || !window.crypto || !crypto.subtle) {
    msg.textContent = T.nosw;
    form.hidden = true;
    return;
  }
  const reg = navigator.serviceWorker.register(new URL("sw.js", base).href, { scope: base.pathname });

  const b64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  function putKey(key) {
    return new Promise((res, rej) => {
      const r = indexedDB.open("atlas-lock", 1);
      r.onupgradeneeded = () => r.result.createObjectStore("k");
      r.onerror = () => rej(r.error);
      r.onsuccess = () => {
        const t = r.result.transaction("k", "readwrite");
        t.objectStore("k").put(key, "key");
        t.oncomplete = () => res();
        t.onerror = () => rej(t.error);
      };
    });
  }

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
      await putKey(key);
      await reg;
      await navigator.serviceWorker.ready;
      location.reload();
    } catch (e) {
      msg.textContent = T.err + e;
    }
  });
})();
