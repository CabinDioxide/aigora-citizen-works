// sw.js — Stack Atlas 公开站的解密层（2026-10-15 主人要求仪表盘改为输密码才能看）。
// 站上每个文件都以密文存在 locked/<原路径>.bin；原路径上的 HTML 只是输密码的页面。
// 输对密码后，gate.js 把派生出的 AES 密钥存进 IndexedDB；之后本作用域内的每个请求由这里取密文、解密、按原类型返回。
const SCOPE = new URL("./", self.location).href;
const SCOPE_PATH = new URL(SCOPE).pathname;
const OPEN = new Set(["sw.js", "gate.js", "lock.json"]);
const TYPES = {
  html: "text/html; charset=utf-8", js: "text/javascript; charset=utf-8", css: "text/css; charset=utf-8",
  json: "application/json; charset=utf-8", md: "text/markdown; charset=utf-8", py: "text/plain; charset=utf-8",
  csv: "text/csv; charset=utf-8", txt: "text/plain; charset=utf-8", svg: "image/svg+xml",
  png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp", gif: "image/gif",
};

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

function db() {
  return new Promise((res, rej) => {
    const r = indexedDB.open("atlas-lock", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("k");
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function keyOp(mode, fn) {
  try {
    const d = await db();
    return await new Promise((res) => {
      try { const req = fn(d.transaction("k", mode).objectStore("k"));
        req.onsuccess = () => res(req.result || null);
        req.onerror = () => res(null);
      } catch (e) { res(null); }
    });
  } catch (e) { return null; }
}
// 2026-11-09：有的手机浏览器里，页面存进 IndexedDB 的密钥，这里读不到（存储分开放）。页面验证密码后另用 postMessage 把密钥直接交过来，
// 这里放在内存里，也存一份进自己这边的 IndexedDB；取密钥时先看内存。
// 2026-11-09 第二次改：iPhone 的 Safari 里，页面存进 IndexedDB 的 CryptoKey 对象，在 Service Worker 里取不出来（WebKit 存 CryptoKey 时
// 用只有网页里才有的主密钥包起来），直接 postMessage 过来也不行。所以改存派生出的 32 字节原始密钥（"raw"），这里自己 importKey。
const VERSION = "2026-11-09e";   // 诊断时报出，看手机上跑的是不是新版
let MEMKEY = null;
const fromRaw = (raw) => crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["decrypt"]);
async function getKey() {
  if (MEMKEY) return MEMKEY;
  const raw = await keyOp("readonly", (s) => s.get("raw"));
  if (raw) { try { MEMKEY = await fromRaw(raw); return MEMKEY; } catch (e) {} }
  const old = await keyOp("readonly", (s) => s.get("key"));   // 旧版存的 CryptoKey；桌面浏览器上仍可用
  if (old) { MEMKEY = old; return MEMKEY; }
  return null;
}
const clearKey = async () => { MEMKEY = null; await keyOp("readwrite", (s) => s.delete("raw")); return keyOp("readwrite", (s) => s.delete("key")); };
self.addEventListener("message", (e) => {
  const d = e.data || {}, port = e.ports && e.ports[0], reply = (x) => { try { port && port.postMessage(x); } catch (er) {} };
  if (d.type === "key" && d.raw) {
    e.waitUntil(fromRaw(d.raw).then((k) => { MEMKEY = k; return keyOp("readwrite", (s) => s.put(d.raw, "raw")); }).then(() => reply({ok: true}), (er) => reply({ok: false, err: String(er)})));
  } else if (d.type === "status") {
    e.waitUntil(getKey().then((k) => reply({hasKey: !!k, v: VERSION}), (er) => reply({hasKey: false, err: String(er), v: VERSION})));
  }
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || !url.href.startsWith(SCOPE)) return;
  let rel = decodeURIComponent(url.pathname.slice(SCOPE_PATH.length));
  if (rel === "" || rel.endsWith("/")) rel += "index.html";
  if (OPEN.has(rel) || rel.startsWith("locked/")) return;
  e.respondWith(serve(e.request, rel));
});

async function serve(req, rel) {
  let key = null; try { key = await getKey(); } catch (e) {}
  if (!key) return fetch(req);
  const enc = SCOPE + "locked/" + rel.split("/").map(encodeURIComponent).join("/") + ".bin";
  const r = await fetch(enc, { cache: "no-cache" });
  if (!r.ok) return fetch(req);
  const buf = new Uint8Array(await r.arrayBuffer());
  try {
    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: buf.slice(0, 12) }, key, buf.slice(12));
    const ext = rel.split(".").pop().toLowerCase();
    return new Response(plain, { headers: { "Content-Type": TYPES[ext] || "application/octet-stream", "Cache-Control": "no-store" } });
  } catch (err) {
    // 密码换过：旧密钥解不开，清掉，回到输密码的页面
    await clearKey();
    return fetch(req);
  }
}
