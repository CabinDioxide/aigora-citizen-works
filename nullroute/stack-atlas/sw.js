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
  const d = await db();
  return new Promise((res) => {
    const req = fn(d.transaction("k", mode).objectStore("k"));
    req.onsuccess = () => res(req.result || null);
    req.onerror = () => res(null);
  });
}
const getKey = () => keyOp("readonly", (s) => s.get("key"));
const clearKey = () => keyOp("readwrite", (s) => s.delete("key"));

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || !url.href.startsWith(SCOPE)) return;
  let rel = decodeURIComponent(url.pathname.slice(SCOPE_PATH.length));
  if (rel === "" || rel.endsWith("/")) rel += "index.html";
  if (OPEN.has(rel) || rel.startsWith("locked/")) return;
  e.respondWith(serve(e.request, rel));
});

async function serve(req, rel) {
  const key = await getKey();
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
