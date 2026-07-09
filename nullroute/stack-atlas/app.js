"use strict";
/* Stack Atlas runtime. Zero dependencies. World paths are pre-projected
 * (build/build-world.mjs); this file wires the dual-map bidirectional highlight
 * and the evidence-honest detail panel. */

const D = window.ATLAS_DATA;
const PATHS = window.WORLD_PATHS || {};
const NAMES = window.WORLD_NAMES || {};
const CENTROIDS = window.WORLD_CENTROIDS || {};

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

// ---- indices ----
const countryByCode = new Map(D.countries.map(c => [c.code, c]));
const countryByNum  = new Map(D.countries.map(c => [c.num, c]));
const nodeById = new Map();
const stackByNode = new Map();
D.stacks.forEach(stk => stk.nodes.forEach(n => { nodeById.set(n.id, n); stackByNode.set(n.id, stk); }));
const politicalNodeById = new Map();
const politicalStackByNode = new Map();
(D.politicalStacks || []).forEach(stk => stk.nodes.forEach(n => { politicalNodeById.set(n.id, n); politicalStackByNode.set(n.id, stk); }));
const companyById = new Map(D.companies.map(c => [c.id, c]));
const chokeById = new Map(D.chokepoints.map(c => [c.id, c]));

function countryCentroid(code){
  const c = countryByCode.get(code);
  if (c && c.centroidOverride) return c.centroidOverride;
  return CENTROIDS[c && c.num] || null;
}

// ---- render world map ----
const gCountries = document.getElementById("layer-countries");
const gChoke = document.getElementById("layer-chokepoints");
const gCompanies = document.getElementById("layer-companies");
const gLabels = document.getElementById("layer-labels");
const gLinks = document.getElementById("layer-links");
const gEvents = document.getElementById("layer-events");
const worldSvg = document.getElementById("world");
const mapViewport = document.getElementById("map-viewport");
const SVGNS = "http://www.w3.org/2000/svg";
function svg(tag, attrs){ const e = document.createElementNS(SVGNS, tag); for(const k in attrs) e.setAttribute(k, attrs[k]); return e; }

// ---- map zoom + pan (pure SVG <g> transform, zero deps) ----
// The five map layers live inside #map-viewport; we translate+scale that group.
// Markers/labels/links get an inverse-scale size compensation so they stay
// readable (not ballooning or vanishing) across the 1x-8x range.
const mapViewBox = { w: 1000, h: 500 };
const zoomState = { scale: 1, x: 0, y: 0 };
const zoomLimits = { min: 1, max: 8 };
let panState = null;
let suppressNextMapClick = false;

function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }
function clampPan(){
  // keep the scaled map covering the viewBox so it can't be dragged into the void
  const minX = mapViewBox.w * (1 - zoomState.scale);
  const minY = mapViewBox.h * (1 - zoomState.scale);
  zoomState.x = clamp(zoomState.x, minX, 0);
  zoomState.y = clamp(zoomState.y, minY, 0);
}
function svgPointFromEvent(e){
  const pt = worldSvg.createSVGPoint();
  pt.x = e.clientX; pt.y = e.clientY;
  const ctm = worldSvg.getScreenCTM();
  return ctm ? pt.matrixTransform(ctm.inverse()) : { x: mapViewBox.w/2, y: mapViewBox.h/2 };
}
function applyMapScaleCompensation(){
  const inv = 1 / zoomState.scale;
  gChoke.querySelectorAll(".choke").forEach(g => {
    const on = g.classList.contains("hl");
    const circle = g.querySelector("circle"), text = g.querySelector("text");
    if (circle){ circle.style.r = `${(on?7:5)*inv}px`; circle.style.strokeWidth = `${1*inv}px`; }
    if (text){ text.style.fontSize = `${9*inv}px`; text.style.strokeWidth = `${2*inv}px`; }
  });
  gCompanies.querySelectorAll(".company").forEach(g => {
    const on = g.classList.contains("hl");
    const circle = g.querySelector("circle"), text = g.querySelector("text");
    if (circle){ circle.style.r = `${(on?6:4)*inv}px`; circle.style.strokeWidth = `${1*inv}px`; }
    if (text){ text.style.fontSize = `${8.5*inv}px`; text.style.strokeWidth = `${2*inv}px`; }
  });
  gEvents?.querySelectorAll(".event-marker").forEach(g => {
    const dot = g.querySelector(".ev-dot"), ring = g.querySelector(".ev-pulse"), text = g.querySelector(".ev-label");
    if (dot){ dot.style.r = `${5*inv}px`; dot.style.strokeWidth = `${1*inv}px`; }
    if (ring){ ring.style.r = `${5*inv}px`; ring.style.strokeWidth = `${1.5*inv}px`; }
    if (text){ text.style.fontSize = `${9*inv}px`; text.style.strokeWidth = `${2*inv}px`; }
  });
  gLabels.querySelectorAll(".clabel").forEach(t => { t.style.fontSize = `${9*inv}px`; t.style.strokeWidth = `${2.4*inv}px`; });
  gLabels.querySelectorAll(".cmarker-dot").forEach(dot => { dot.style.strokeWidth = `${1*inv}px`; });
  gLinks.querySelectorAll(".dep-link").forEach(p => { p.style.strokeWidth = `${1.4*inv}px`; });
}
function applyMapTransform(){
  clampPan();
  mapViewport.setAttribute("transform", `translate(${zoomState.x} ${zoomState.y}) scale(${zoomState.scale})`);
  applyMapScaleCompensation();
  positionEventCard(); // 缩放/平移后摘要卡跟着事件点走
}
function zoomAt(point, nextScale){
  const oldScale = zoomState.scale;
  nextScale = clamp(nextScale, zoomLimits.min, zoomLimits.max);
  if (nextScale === oldScale) return;
  // keep the world point under the cursor fixed (zoom-to-cursor)
  const worldX = (point.x - zoomState.x) / oldScale;
  const worldY = (point.y - zoomState.y) / oldScale;
  zoomState.scale = nextScale;
  zoomState.x = point.x - worldX * nextScale;
  zoomState.y = point.y - worldY * nextScale;
  applyMapTransform();
}
function resetMapView(){ zoomState.scale = 1; zoomState.x = 0; zoomState.y = 0; applyMapTransform(); }

worldSvg.addEventListener("wheel", e => {
  e.preventDefault(); e.stopPropagation();
  zoomAt(svgPointFromEvent(e), zoomState.scale * Math.exp(-e.deltaY * 0.0012));
}, { passive:false });

worldSvg.addEventListener("pointerdown", e => {
  if (e.button !== 0) return;
  // Interactive map features own their click. Starting pan capture on top of
  // them swallows the later click event, making countries/labels feel dead.
  if (e.target.closest(".choke,.company,.event-marker")) return;
  panState = { pointerId:e.pointerId, last:svgPointFromEvent(e), startClientX:e.clientX, startClientY:e.clientY, totalDx:0, totalDy:0 };
  worldSvg.setPointerCapture(e.pointerId);
  worldSvg.classList.add("panning");
});
worldSvg.addEventListener("pointermove", e => {
  if (!panState || panState.pointerId !== e.pointerId) return;
  const point = svgPointFromEvent(e);
  zoomState.x += point.x - panState.last.x;
  zoomState.y += point.y - panState.last.y;
  panState.last = point;
  panState.totalDx = e.clientX - panState.startClientX;
  panState.totalDy = e.clientY - panState.startClientY;
  applyMapTransform();
});
worldSvg.addEventListener("pointerup", e => {
  if (!panState || panState.pointerId !== e.pointerId) return;
  const dragged = Math.hypot(panState.totalDx, panState.totalDy) > 4;
  panState = null;
  worldSvg.classList.remove("panning");
  worldSvg.releasePointerCapture(e.pointerId);
  if (dragged){ // a real pan -> swallow the click that follows so we don't select a country
    suppressNextMapClick = true;
    setTimeout(() => { suppressNextMapClick = false; }, 0);
  }
});
worldSvg.addEventListener("pointercancel", e => {
  if (panState && panState.pointerId === e.pointerId){ panState = null; worldSvg.classList.remove("panning"); }
});
worldSvg.addEventListener("click", e => {
  if (!suppressNextMapClick) return;
  e.preventDefault(); e.stopImmediatePropagation();
  suppressNextMapClick = false;
}, true);

document.querySelectorAll("[data-map-zoom]").forEach(button => {
  button.addEventListener("click", e => {
    e.stopPropagation();
    const action = button.getAttribute("data-map-zoom");
    const center = { x: mapViewBox.w/2, y: mapViewBox.h/2 };
    if (action === "in") zoomAt(center, zoomState.scale * 1.35);
    else if (action === "out") zoomAt(center, zoomState.scale / 1.35);
    else resetMapView();
  });
});

// base countries (all), our 13 are targets
Object.keys(PATHS).forEach(num => {
  const p = svg("path", { d: PATHS[num], class: "country", "data-num": num });
  const c = countryByNum.get(num);
  // WP2：国家不再是点击入口（事件才是）；保留 target 类做被点亮对象。
  if (c){ p.classList.add("target"); p.setAttribute("data-code", c.code); }
  gCountries.appendChild(p);
});

// chokepoints
D.chokepoints.forEach(cp => {
  const g = svg("g", { class:"choke", "data-choke": cp.id });
  g.appendChild(svg("circle", { cx: cp.pos[0], cy: cp.pos[1] }));
  const t = svg("text", { x: cp.pos[0]+7, y: cp.pos[1]+3 }); t.textContent = cp.name_en;
  g.appendChild(t);
  g.addEventListener("click", e => { e.stopPropagation(); selectChokepoint(cp.id); });
  gChoke.appendChild(g);
});

// company markers, spread around their country's centroid when several share one
const byCountry = {};
D.companies.forEach(co => { (byCountry[co.country] = byCountry[co.country] || []).push(co); });
const companyPos = new Map();
Object.entries(byCountry).forEach(([code, list]) => {
  const ctr = countryCentroid(code) || [500,250];
  list.forEach((co, i) => {
    const ang = (i / Math.max(1,list.length)) * Math.PI * 2;
    const r = list.length === 1 ? 0 : 14;
    const x = ctr[0] + Math.cos(ang)*r, y = ctr[1] + Math.sin(ang)*r;
    companyPos.set(co.id, [x,y]);
    const g = svg("g", { class:"company", "data-company": co.id });
    g.appendChild(svg("circle", { cx:x, cy:y }));
    const t = svg("text", { x:x+6, y:y+3 }); t.textContent = co.name;
    g.appendChild(t);
    g.addEventListener("click", e => { e.stopPropagation(); selectCompany(co.id); });
    gCompanies.appendChild(g);
  });
});

// country labels + fallback markers for countries with no rendered polygon
// (e.g. Singapore, too small for Natural Earth 110m) so every target country
// is directly clickable on the map, not only via the detail panel.
D.countries.forEach(c => {
  const ctr = countryCentroid(c.code); if(!ctr) return;
  const hasPolygon = PATHS[c.num] && PATHS[c.num].length > 3;
  if (!hasPolygon){
    const g = svg("g", { class:"country-marker", "data-code": c.code });
    const dot = svg("rect", { x: ctr[0]-4, y: ctr[1]-4, width:8, height:8, transform:`rotate(45 ${ctr[0]} ${ctr[1]})`,
      fill:"#33405a", stroke:"#5a6b8c", "stroke-width":1 });
    dot.setAttribute("class","cmarker-dot");
    g.appendChild(dot);
    gLabels.appendChild(g);
  }
  const t = svg("text", { class:"clabel", "data-code": c.code, x: ctr[0], y: ctr[1]-16, "text-anchor":"middle" });
  t.textContent = c.code;
  gLabels.appendChild(t);
});

// ---- render stack map ----
const stackGrid = document.getElementById("stack-grid");
const stackControls = document.getElementById("stack-controls");
const politicalGrid = document.getElementById("political-grid");
const politicalControls = document.getElementById("political-controls");
let activeStack = D.stacks[0].id;
D.stacks.forEach(stk => {
  const b = document.createElement("button");
  b.textContent = stk.name_zh + " / " + stk.name_en;
  b.dataset.stack = stk.id;
  b.addEventListener("click", () => { activeStack = stk.id; renderStack(); });
  stackControls.appendChild(b);
});
function renderStack(){
  [...stackControls.children].forEach(b => b.classList.toggle("active", b.dataset.stack === activeStack));
  const stk = D.stacks.find(s => s.id === activeStack);
  stackGrid.innerHTML = "";
  D.layers.forEach(layer => {
    const nodes = stk.nodes.filter(n => n.layer === layer.id);
    if (!nodes.length) return;
    const row = document.createElement("div"); row.className = `layer-row tech-stack-${stk.id} tech-layer-${layer.id}`;
    row.dataset.stackKind = stk.id;
    row.dataset.layer = layer.id;
    row.innerHTML = `<div class="layer-name">${esc(layer.label_zh)} · ${esc(layer.label_en)}</div>`;
    const nr = document.createElement("div"); nr.className = "node-row";
    nodes.forEach(n => {
      const el = document.createElement("div");
      el.className = `node s-${n.status} tech-stack-${stk.id} tech-layer-${n.layer}`; el.dataset.node = n.id;
      el.dataset.stackKind = stk.id;
      el.dataset.layer = n.layer;
      el.innerHTML = `<span class="nlabel">${esc(n.label_zh)}</span>
        <span class="nmeta"><span class="chip st-${n.status}">${esc(n.status)}</span><span class="ev ev-${n.evidence}">${esc(n.evidence)}</span>${magnitudeNodeBadge(n.id)}</span>`;
      el.addEventListener("click", e => { e.stopPropagation(); selectNode(n.id); });
      nr.appendChild(el);
    });
    row.appendChild(nr); stackGrid.appendChild(row);
  });
  applyHighlight(); // keep current highlight after re-render
}

let activePoliticalStack = D.politicalStacks?.[0]?.id || "";
(D.politicalStacks || []).forEach(stk => {
  const b = document.createElement("button");
  b.textContent = stk.name_zh + " / " + stk.name_en;
  b.dataset.politicalStack = stk.id;
  b.addEventListener("click", () => { activePoliticalStack = stk.id; renderPoliticalStack(); });
  politicalControls?.appendChild(b);
});

function renderPoliticalStack(){
  if (!politicalGrid || !D.politicalStacks?.length) return;
  [...politicalControls.children].forEach(b => b.classList.toggle("active", b.dataset.politicalStack === activePoliticalStack));
  const stk = D.politicalStacks.find(s => s.id === activePoliticalStack);
  politicalGrid.innerHTML = "";
  D.politicalLayers.forEach(layer => {
    const nodes = stk.nodes.filter(n => n.layer === layer.id);
    if (!nodes.length) return;
    const row = document.createElement("div"); row.className = `player-row pol-layer-${layer.id}`;
    row.dataset.layer = layer.id;
    row.innerHTML = `<div class="player-name">${esc(layer.label_zh)} · ${esc(layer.label_en)}</div>`;
    const nr = document.createElement("div"); nr.className = "pnode-row";
    nodes.forEach(n => {
      const el = document.createElement("div");
      el.className = `pnode s-${n.status} pol-layer-${n.layer}`; el.dataset.pnode = n.id;
      el.dataset.layer = n.layer;
      el.innerHTML = `<span class="nlabel">${esc(n.label_zh)}</span>
        <span class="nmeta"><span class="chip st-${n.status}">${esc(n.status)}</span><span class="ev ev-${n.evidence}">${esc(n.evidence)}</span></span>`;
      el.addEventListener("click", e => { e.stopPropagation(); selectPoliticalNode(n.id); });
      nr.appendChild(el);
    });
    row.appendChild(nr); politicalGrid.appendChild(row);
  });
  applyHighlight();
}

// ---- legend ----
document.getElementById("legend").innerHTML =
  D.statusVocab.map(s => `<span class="chip st-${s}">${esc(s)}</span>`).join("");

// ---- Magnitude layer controls ----
let magnitudeEnabled = true;
let magnitudeFilter = "all";
const MAG_FILTERS = [
  { id: "all", label: "all" },
  { id: "oil", label: "oil", families: ["seaborne_oil_flow / oil_chokepoint_share"] },
  { id: "gates", label: "gates", families: ["export_control_listings", "financial_sanctions_listings", "export_control_exposure", "internet_facility_inventory"] },
  { id: "minerals", label: "minerals", families: ["minerals_net_import_reliance / minerals_supplier_country_share", "mineral_refining_share"] },
  { id: "cables", label: "cables", families: ["cable_route_count"] },
  { id: "chips", label: "chips", families: ["material_global_share", "ic_substrate_capacity", "euv_installed_base", "hbm_share_of_dram_revenue / memory_maker_revenue"] },
  { id: "blocked", label: "blocked", matcher: c => ["blocked", "source-linked"].includes(c.evidence_status) || (c.gaps || []).some(g => ["blocked", "needs-api-key", "needs-extraction", "lead-only", "source-limited"].includes(g.status)) }
];

// ---- highlight engine ----
let current = null; // {type, id}
let HL = { countries:new Set(), nodes:new Set(), politicalNodes:new Set(), companies:new Set(), chokepoints:new Set() };

function emptyHL(){ return { countries:new Set(), nodes:new Set(), politicalNodes:new Set(), companies:new Set(), chokepoints:new Set() }; }

// 高亮只走一跳：点一个节点，亮它自己、它档案里声明的国家/公司/航道，
// 以及直接与它挂接的另一栈节点的卡片本身——到此为止，不再从邻居继续扩散。
// （旧版是互递归的传递闭包：图是连通的，点任何节点几乎全图亮，等于没有信息。）
function hlFromNode(id, hl){
  const n = nodeById.get(id); if(!n) return;
  hl.nodes.add(id);
  (n.countries||[]).forEach(c => hl.countries.add(c));
  (n.companies||[]).forEach(c => { hl.companies.add(c); const co=companyById.get(c); if(co) hl.countries.add(co.country); });
  (n.chokepoints||[]).forEach(c => hl.chokepoints.add(c));
  // 一跳邻居：直接管辖它的政治节点，只亮卡片，不带出各自的国家/公司
  politicalNodeById.forEach((pn, pid) => { if ((pn.techNodes || []).includes(id)) hl.politicalNodes.add(pid); });
}
function hlFromPoliticalNode(id, hl){
  const n = politicalNodeById.get(id); if(!n) return;
  hl.politicalNodes.add(id);
  (n.countries||[]).forEach(c => hl.countries.add(c));
  (n.companies||[]).forEach(c => { hl.companies.add(c); const co=companyById.get(c); if(co) hl.countries.add(co.country); });
  (n.chokepoints||[]).forEach(c => hl.chokepoints.add(c));
  // 一跳邻居：它管辖的技术节点，只亮卡片
  (n.techNodes||[]).forEach(t => { if (nodeById.has(t)) hl.nodes.add(t); });
}
function buildHighlight(type, id){
  const hl = emptyHL();
  if (type === "country"){
    hl.countries.add(id);
    nodeById.forEach((n,nid) => { if((n.countries||[]).includes(id)) hlFromNode(nid, hl); });
    politicalNodeById.forEach((n,nid) => { if((n.countries||[]).includes(id)) hlFromPoliticalNode(nid, hl); });
    companyById.forEach((co,cid) => { if(co.country===id) hl.companies.add(cid); });
    chokeById.forEach((cp,cid) => { if((cp.affectsCountries||[]).includes(id)) hl.chokepoints.add(cid); });
  } else if (type === "node"){
    hlFromNode(id, hl);
  } else if (type === "polnode"){
    hlFromPoliticalNode(id, hl);
  } else if (type === "chokepoint"){
    const cp = chokeById.get(id); if(cp){ hl.chokepoints.add(id);
      (cp.affectsCountries||[]).forEach(c => hl.countries.add(c));
      nodeById.forEach((n,nid) => { if((n.chokepoints||[]).includes(id)) hlFromNode(nid, hl); });
      politicalNodeById.forEach((n,nid) => { if((n.chokepoints||[]).includes(id)) hlFromPoliticalNode(nid, hl); }); }
  } else if (type === "company"){
    const co = companyById.get(id); if(co){ hl.companies.add(id); hl.countries.add(co.country);
      nodeById.forEach((n,nid) => { if((n.companies||[]).includes(id)) hlFromNode(nid, hl); });
      politicalNodeById.forEach((n,nid) => { if((n.companies||[]).includes(id)) hlFromPoliticalNode(nid, hl); }); }
  } else if (type === "alert"){
    const a = D.candidateAlerts.find(x => x.id === id); if(a){
      (a.relNodes||[]).forEach(nid => hlFromNode(nid, hl));
      (a.relCountries||[]).forEach(c => hl.countries.add(c));
      (a.relCompanies||[]).forEach(c => hl.companies.add(c));
      (a.relChokepoints||[]).forEach(c => hl.chokepoints.add(c));
    }
  }
  return hl;
}

function applyHighlight(){
  const any = HL.countries.size || HL.nodes.size || HL.politicalNodes.size || HL.companies.size || HL.chokepoints.size;
  // countries
  gCountries.querySelectorAll(".country.target").forEach(p => {
    const code = p.getAttribute("data-code");
    const hasMag = magCandidatesFor("country", code).length > 0;
    p.classList.toggle("hl", HL.countries.has(code));
    p.classList.toggle("mag-on", hasMag);
    p.classList.toggle("dim", any && !HL.countries.has(code));
  });
  gLabels.querySelectorAll(".clabel").forEach(t => {
    const code = t.getAttribute("data-code");
    t.classList.toggle("hl", HL.countries.has(code));
    t.classList.toggle("mag-on", magCandidatesFor("country", code).length > 0);
  });
  gLabels.querySelectorAll(".country-marker").forEach(g => {
    const code = g.getAttribute("data-code");
    const on = HL.countries.has(code);
    const hasMag = magCandidatesFor("country", code).length > 0;
    g.classList.toggle("mag-on", hasMag);
    g.querySelector(".cmarker-dot").setAttribute("fill", on ? "var(--hl)" : "#33405a");
    g.style.opacity = (any && !on) ? .35 : 1;
  });
  gChoke.querySelectorAll(".choke").forEach(g => {
    const id = g.getAttribute("data-choke");
    const hasMag = magCandidatesFor("chokepoint", id).length > 0;
    g.classList.toggle("hl", HL.chokepoints.has(id));
    g.classList.toggle("mag-on", hasMag);
    g.style.opacity = (any && !HL.chokepoints.has(id)) ? .35 : 1;
  });
  gCompanies.querySelectorAll(".company").forEach(g => {
    const id = g.getAttribute("data-company");
    g.classList.toggle("hl", HL.companies.has(id));
    g.style.opacity = (any && !HL.companies.has(id)) ? .3 : 1;
  });
  // nodes (only those rendered in active stack)
  stackGrid.querySelectorAll(".node").forEach(el => {
    const id = el.dataset.node;
    el.classList.toggle("hl", HL.nodes.has(id));
    el.classList.toggle("dim", any && !HL.nodes.has(id));
  });
  politicalGrid?.querySelectorAll(".pnode").forEach(el => {
    const id = el.dataset.pnode;
    el.classList.toggle("hl", HL.politicalNodes.has(id));
    el.classList.toggle("dim", any && !HL.politicalNodes.has(id));
  });
  // dependency links: from selected country/node centroids to highlighted countries
  drawLinks();
  applyMapScaleCompensation(); // re-applied because highlight changes marker radii + links
}

function drawLinks(){
  gLinks.innerHTML = "";
  if (!current) return;
  let origin = null;
  if (current.type === "country") origin = countryCentroid(current.id);
  else if (current.type === "node"){ const n = nodeById.get(current.id); origin = nodeMapOrigin(n); }
  else if (current.type === "chokepoint"){ const cp = chokeById.get(current.id); origin = cp && cp.pos; }
  else if (current.type === "company"){ origin = companyPos.get(current.id); }
  else if (current.type === "polnode"){ const pn = politicalNodeById.get(current.id); origin = countryCentroid((pn?.countries || [])[0]); }
  else if (current.type === "event"){ const ev = eventById.get(current.id); origin = ev && ev.pos; }
  if (!origin) return;
  HL.countries.forEach(code => {
    if (current.type === "country" && code === current.id) return;
    const c = countryCentroid(code); if(!c) return;
    if (current.type === "node" && Math.abs(c[0] - origin[0]) < 0.1 && Math.abs(c[1] - origin[1]) < 0.1) return;
    const path = svg("path", { class:`dep-link ${relationshipLineClass()}`, d:`M${origin[0]},${origin[1]} Q${(origin[0]+c[0])/2},${Math.min(origin[1],c[1])-30} ${c[0]},${c[1]}` });
    gLinks.appendChild(path);
  });
}

function nodeMapOrigin(n){
  if (!n) return null;
  const company = (n.companies || []).map(id => companyPos.get(id)).find(Boolean);
  if (company) return company;
  const choke = (n.chokepoints || []).map(id => chokeById.get(id)?.pos).find(Boolean);
  if (choke) return choke;
  const country = (n.countries || []).map(countryCentroid).find(Boolean);
  return country || null;
}

function relationshipLineClass(){
  if (!current) return "rel-mixed";
  if (current.type === "node") {
    const stk = stackByNode.get(current.id);
    return stk ? `rel-tech rel-${stk.id}` : "rel-tech";
  }
  if (current.type === "polnode") {
    const n = politicalNodeById.get(current.id);
    return n ? `rel-political rel-${n.layer}` : "rel-political";
  }
  if (current.type === "chokepoint") return "rel-physical";
  return "rel-mixed";
}

// ---- selection + detail ----
function select(type, id){
  closeEventCard();
  current = { type, id };
  HL = buildHighlight(type, id);
  // if a node is selected, switch active stack to its stack so it's visible
  if (type === "node"){ const stk = stackByNode.get(id); if(stk && stk.id !== activeStack){ activeStack = stk.id; renderStack(); } }
  if (type === "polnode"){ const stk = politicalStackByNode.get(id); if(stk && stk.id !== activePoliticalStack){ activePoliticalStack = stk.id; renderPoliticalStack(); } }
  applyHighlight();
  renderDetail(type, id);
  // 详情面板在页面底部；直接点节点卡也要把它整个带进视野。
  // block:"end" 让面板底边贴视口底边——面板最高 42vh，这样整块可见；"nearest" 只会露出一条上边。
  document.getElementById("detail")?.scrollIntoView({ behavior: "smooth", block: "end" });
}
const selectCountry = id => select("country", id);
const selectNode = id => select("node", id);
const selectPoliticalNode = id => select("polnode", id);
const selectChokepoint = id => select("chokepoint", id);
const selectCompany = id => select("company", id);
const selectAlert = id => select("alert", id);

function clearSelection(){ // click empty / Esc -> clear
  current = null; HL = emptyHL(); applyHighlight();
  closeEventCard();
  document.getElementById("detail-body").classList.add("hidden");
  document.getElementById("detail-empty").classList.remove("hidden");
}
document.body.addEventListener("click", clearSelection);
document.addEventListener("keydown", e => { if (e.key === "Escape") clearSelection(); });

const detailBody = document.getElementById("detail-body");
const detailEmpty = document.getElementById("detail-empty");
function evChip(ev){ return `<span class="ev ev-${esc(ev)}">${esc(ev)}</span>`; }
function countryName(code){ const c = countryByCode.get(code); return c ? `${c.name_zh}/${c.name_en}` : code; }
function tagButtons(items, fn){ return `<div class="tagrow">${items.join("")}</div>`; }
function relatedAlerts(pred){ return D.candidateAlerts.filter(pred); }

// 公司小卡：节点详情里公司不只给名字，带角色、核心产品和至多两条已核关键数字。
// 数字来自 atlas-data.js companies[].keyFigures（每条含证据等级 ev 与来源 src），没有就如实说待补。
function cgradeChip(ev){ return `<span class="cgrade" title="证据等级">${esc(ev)}</span>`; }
function companyMiniCard(co){
  const figs = (co.keyFigures||[]).slice(0,2).map(f =>
    `<div class="kf-line" title="${esc(f.src||"")}"><span class="kf-k">${esc(f.k)}</span><strong>${esc(f.v)}</strong>${cgradeChip(f.ev)}</div>`).join("");
  return `<div class="co-mini">
    <div class="co-head"><button data-company="${esc(co.id)}">${esc(co.name)}</button><span class="co-role">${esc(co.role_zh)}</span></div>
    ${co.products_zh ? `<div class="co-prod">${esc(co.products_zh)}</div>` : ""}
    ${figs || `<div class="gap-line">关键数字待补（无已核来源，不编）</div>`}
  </div>`;
}

// Political MAG 数据外置到 political-mag-data.js（political-mag.html 独立页与本页共用）。
function politicalMagFor(polnodeId) {
  return (window.POLITICAL_MAG_DATA || []).filter(row => row.polnode === polnodeId);
}

function politicalMagCard(row) {
  const pn = politicalNodeById.get(row.polnode);
  return `<article class="political-mag-card">
    <div class="political-mag-card-head">
      <div>
        <h3>${esc(row.metric)}</h3>
        <p>${esc(pn ? pn.label_zh : row.polnode)}</p>
      </div>
      <span class="ev ev-${evidenceClass(row.evidence_status)}">${esc(row.evidence_status)}</span>
    </div>
    <div class="mag-meta-row"><span class="mag-scale">${esc(row.scale_family)}</span></div>
    <p>${esc(row.why)}</p>
    <div class="political-mag-source-line">候选来源 / sources: ${esc(row.candidate_sources)}</div>
    <div class="gap-strong">下一步：${esc(row.next_action)}</div>
    <div class="tagrow"><button data-polnode="${esc(row.polnode)}">打开政治节点</button></div>
  </article>`;
}

function alertCard(a){
  return `<div class="alert-card">
    <div class="atitle">${esc(a.title_zh)} · ${esc(a.title_en)} <span class="ev ev-needs-review">${esc(a.status)}</span></div>
    <div class="asig">${esc(a.signal_zh)}</div>
    <button data-alert="${esc(a.id)}">在地图上点亮 →</button>
  </div>`;
}

function narrativeMetricLine(type, id, nodes = [], chokes = [], alerts = []) {
  const magCandidates = MAG ? magCandidatesFor(type, id) : [];
  const verifiedFacts = magCandidates.reduce((sum, c) => sum + (c.facts || []).filter(f => f.evidence_status === "verified").length, 0);
  const scaleFamilies = [...new Set(magCandidates.map(c => c.scale_family))].slice(0, 3);
  const nodeNames = nodes.slice(0, 4).map(n => n.label_zh).join(" / ");
  const chokeNames = chokes.slice(0, 3).map(c => c.name_zh).join(" / ");
  const parts = [];
  if (nodeNames) parts.push(`关联节点：${nodeNames}`);
  if (chokeNames) parts.push(`关键通道：${chokeNames}`);
  if (magCandidates.length) parts.push(`MAG：${magCandidates.length} 个数量级候选，${verifiedFacts} 条 verified 事实`);
  if (scaleFamilies.length) parts.push(`量纲：${scaleFamilies.join("；")}`);
  if (alerts.length) parts.push(`待复查线索：${alerts.length} 条`);
  return parts.join("。");
}

function countryNarrative(code, nodes, chokes, alerts) {
  const c = countryByCode.get(code);
  const nodeIds = new Set(nodes.map(n => n.id));
  const magCandidates = MAG ? magCandidatesFor("country", code) : [];
  const hasAi = nodes.some(n => stackByNode.get(n.id)?.id === "ai-compute");
  const hasEnergy = nodes.some(n => stackByNode.get(n.id)?.id === "energy");
  const hasReach = nodes.some(n => stackByNode.get(n.id)?.id === "reachability");
  let message = `${c.name_zh}在这张图里不是一个地理色块，而是一组技术依赖的落点。`;
  if (code === "US") {
    message = "美国在这里主要表现为控制面：GPU、EDA、云、出口管制、金融/服务可达性都从这里向外施加权限。要看的不是“美国很强”这种空话，而是哪些调用必须经过美国公司、美国法域或美国名单。";
  } else if (code === "CN") {
    message = "中国在这里同时是超大需求端、制造端和被管制对象。它既被能源航道、先进芯片工具和云/网络可达性牵动，也在寻找替代路径；关键问题是替代路径有没有足够数量级。";
  } else if (code === "JP" || code === "KR") {
    message = `${c.name_zh}在这张图里最像高工业化但被外部流量喂养的系统：能源进口、海运 chokepoint、关键制造节点同时出现。要看的是断点先落在油气成本、储备释放、工业配给，还是芯片/存储产能。`;
  } else if (code === "TW") {
    message = "台湾在这里主要是先进芯片制造的物理落点。它不是普通供应商节点，而是 AI 算力栈里把设计、设备、材料和地缘安全同时压到一起的高密度节点。";
  } else if (code === "NL") {
    message = "荷兰在这里被 ASML/EUV 放大。国家体量不是重点；重点是一个小法域里的设备公司掌握了先进制程的关键通过条件。";
  } else if (["SA", "QA", "AE"].includes(code)) {
    message = `${c.name_zh}在这里是能源流的上游节点。它的重要性不只在产量，还在油气出海口、替代管道、LNG/原油流量和东亚买家的联动。`;
  } else if (code === "SG") {
    message = "新加坡在这里是小地理、大通道：海运、海缆、云与金融/物流节点叠在一起。它的可见面积小，但系统接点密度高。";
  }
  const stacks = [
    hasAi ? "AI 算力栈" : "",
    hasEnergy ? "东亚能源栈" : "",
    hasReach ? "互联网可达性栈" : ""
  ].filter(Boolean).join("、");
  const metric = narrativeMetricLine("country", code, nodes, chokes, alerts);
  return `<section class="narrative-card">
    <h4>What this means · 观众导览</h4>
    <p>${esc(message)}</p>
    ${stacks ? `<p><strong>跨栈位置：</strong>${esc(stacks)}。</p>` : ""}
    ${metric ? `<p><strong>当前证据：</strong>${esc(metric)}。</p>` : ""}
    ${magCandidates.length ? `<p><strong>我想让你看到：</strong>关系图只说明“连着谁”，Magnitude 才说明这条连接是小风险、局部闸门，还是低名气高控制节点。</p>` : ""}
  </section>`;
}

function nodeNarrative(n, comps, chokes, alerts) {
  const stk = stackByNode.get(n.id);
  const magCandidates = MAG ? magCandidatesFor("node", n.id) : [];
  let message = `${n.label_zh}是 ${stk.name_zh} 里的 ${n.layer} 节点，当前状态标为 ${n.status}，证据层级是 ${n.evidence}。`;
  if (n.id === "ac-export") {
    message = "出口管制不是边境上的检查站，而是 AI 算力栈里的 permission chokepoint：产品、服务、人员支持和最终用途可能在法律状态变化后突然不可达。";
  } else if (n.id === "ac-euv") {
    message = "EUV 是先进制程的设备闸门。它的重要性来自单一供应商、安装基础、服务能力和许可环境叠加，不是单纯“机器很贵”。";
  } else if (n.id === "ac-hbm") {
    message = "HBM 是 AI 加速器的近身瓶颈。GPU 不是孤立运行，存储带宽、封装和供应商扩产节奏会把算力叙事拖回制造现实。";
  } else if (n.id === "cm-ree") {
    message = "稀土的卡点不在矿，在分离和磁体。中国矿产量占 71%，但精炼占 91%、NdFeB 磁体占 94%。MOFCOM 2025-04 开始对 7 种元素实施出口许可，无白名单，至今生效。";
  } else if (n.id === "cm-gallium") {
    message = "镓的管制路径有三段：2023 年全球许可证制（23号）→ 2024 年对美不予许可（46号）→ 2025 年 72 号暂停 46 号第二款至 2026 年 11 月。每一段都改变了管制边界，不是一次性决定。";
  } else if (n.id === "en-tanker") {
    message = "油轮/LNG 航道是能源冲击的传导层。危机不一定先变成没油，常常先变成运费、保险、等待时间和国家背书的运输优先级。";
  } else if (n.id === "en-sanction") {
    message = "制裁和价格上限是服务可达性闸门。它不移动货物，却能改变谁能结算、保险、维修、采购或继续使用某个系统。";
  } else if (n.id === "re-cable") {
    message = "海底光缆是互联网可达性的物理底盘。它看起来像通信问题，实际牵涉登陆点、路由、所有权、维修船和地缘安全。";
  }
  const metric = narrativeMetricLine("node", n.id, [n], chokes, alerts);
  return `<section class="narrative-card">
    <h4>What this means · 观众导览</h4>
    <p>${esc(message)}</p>
    ${comps.length ? `<p><strong>现实落点：</strong>${esc(comps.map(c => c.name).join("、"))}。</p>` : ""}
    ${metric ? `<p><strong>当前证据：</strong>${esc(metric)}。</p>` : ""}
    ${magCandidates.length ? `<p><strong>读图方式：</strong>先看它连到哪些国家/公司，再看 MAG 里有没有可审计数量级；没有数量级时，不要把箭头画得很粗。</p>` : ""}
  </section>`;
}

function politicalNodeNarrative(n, techNodes, chokes) {
  let message = `${n.label_zh} 是政治栈 ${n.layer} 节点。它不表示一件物理货物，而表示技术依赖如何被法域、联盟、强制能力、国内压力或叙事合法化机制接管。`;
  if (n.id === "ps-export-control") {
    message = "出口管制/许可是政治栈里最接近技术栈的闸门：它把 GPU、EDA、EUV、先进制造这些技术节点转换成法律权限问题。";
  } else if (n.id === "ps-naval-transit") {
    message = "海上通道强制/护航能力解释的是：能源和海缆不是只在市场里流动，它们也要经过安全承诺、护航能力和通道控制。";
  } else if (n.id === "ps-industrial-policy") {
    message = "产业政策/补贴/本土替代是政治系统试图改写技术依赖的工具。它不会立刻消除瓶颈，但会改变投资、许可、并网和替代路线。";
  } else if (n.id === "ps-legitimacy-narratives") {
    message = "国家安全/技术主权/能源安全叙事是 P4 层：它本身不生产芯片或油气，但会给管制、补贴、制裁和反制提供合法性。";
  }
  const techLine = techNodes.length ? `对应技术节点：${techNodes.map(t => t.label_zh).join(" / ")}` : "";
  const chokeLine = chokes.length ? `关联通道：${chokes.map(c => c.name_zh).join(" / ")}` : "";
  return `<section class="narrative-card political-narrative">
    <h4>What this means · 政治栈导览</h4>
    <p>${esc(message)}</p>
    ${techLine ? `<p><strong>技术接口：</strong>${esc(techLine)}。</p>` : ""}
    ${chokeLine ? `<p><strong>现实通道：</strong>${esc(chokeLine)}。</p>` : ""}
    <p><strong>读图方式：</strong>先看它接到哪些技术节点，再看它通过哪些国家、公司或 chokepoint 发生作用。政治栈不是背景噪音，是控制面。</p>
  </section>`;
}

function chokepointNarrative(cp, nodes, alerts) {
  const magCandidates = MAG ? magCandidatesFor("chokepoint", cp.id) : [];
  let message = `${cp.name_zh}是物理通道，但它真正重要的是把一种流量的扰动转换成别的系统压力。`;
  if (cp.id === "hormuz") {
    message = "霍尔木兹不是地图上的红点，而是能源流量、保险价格、替代管道和东亚工业成本的转换器。这里一变，影响通常先表现为 expensive mode，而不一定立刻表现为空油罐。";
  } else if (cp.id === "malacca") {
    message = "马六甲是跨栈 chokepoint：能源航道和海缆走廊在这里叠加。它同时让油气流和互联网可达性进入同一个地理瓶颈。";
  } else if (cp.id === "suez" || cp.id === "babelmandeb") {
    message = `${cp.name_zh}把欧亚航运、能源和海缆风险接在一起。它的意义不是“可能堵”，而是绕航成本、保险、维修和政治护航会怎样重新定价。`;
  }
  const metric = narrativeMetricLine("chokepoint", cp.id, nodes, [cp], alerts);
  return `<section class="narrative-card">
    <h4>What this means · 观众导览</h4>
    <p>${esc(message)}</p>
    ${metric ? `<p><strong>当前证据：</strong>${esc(metric)}。</p>` : ""}
    ${magCandidates.length ? `<p><strong>我想传递的信息：</strong>chokepoint 不只是“通/不通”，还要看承载流量、可绕行能力和替代路径质量。</p>` : ""}
  </section>`;
}

function companyNarrative(co, nodes) {
  const magCandidates = MAG ? magCandidatesFor("company", co.id) : [];
  let message = `${co.name} 在图里不是股票代码，而是一个技术栈调用点：它的产品、服务或许可条件会影响哪些国家能继续运行。`;
  if (co.id === "asml") {
    message = "ASML 是 EUV 设备和服务依赖的现实落点。它把荷兰、先进制程、美国/盟友管制和晶圆厂扩产节奏接到同一个节点。";
  } else if (co.id === "skhynix" || co.id === "samsung") {
    message = `${co.name} 在这里代表 HBM/存储供应的制造现实。AI 算力不是只有 GPU，内存带宽和封装产能同样会限制可交付算力。`;
  } else if (co.id === "synopsys" || co.id === "cadence") {
    message = `${co.name} 代表 EDA 工具层。先进芯片设计要调用这些工具，因此工具授权、出口管制和客户名单会变成 permission gate。`;
  }
  return `<section class="narrative-card">
    <h4>What this means · 观众导览</h4>
    <p>${esc(message)}</p>
    ${nodes.length ? `<p><strong>关联节点：</strong>${esc(nodes.map(n => n.label_zh).join("、"))}。</p>` : ""}
    ${magCandidates.length ? `<p><strong>数量级提示：</strong>这里挂着 ${magCandidates.length} 个 MAG 候选；先看证据状态，再看它是否真有 verified 数字。</p>` : ""}
  </section>`;
}

function renderDetail(type, id){
  detailEmpty.classList.add("hidden");
  detailBody.classList.remove("hidden");
  let html = "";
  if (type === "country"){
    const c = countryByCode.get(id);
    const nodes = [...nodeById.values()].filter(n => (n.countries||[]).includes(id));
    const pnodes = [...politicalNodeById.values()].filter(n => (n.countries||[]).includes(id));
    const comps = D.companies.filter(co => co.country === id);
    const chokes = D.chokepoints.filter(cp => (cp.affectsCountries||[]).includes(id));
    const alerts = relatedAlerts(a => (a.relCountries||[]).includes(id));
    html = `<div class="detail-kind">国家 / Country</div><h3>${esc(c.name_zh)} · ${esc(c.name_en)} <span class="ev ev-verified">verified · geography</span></h3>
      ${countryNarrative(id, nodes, chokes, alerts)}
      <div class="detail-grid">
        <div class="dcard"><h4>相关栈节点 Stack nodes</h4>${nodes.length?`<div class="tagrow">${nodes.map(n=>`<button data-node="${esc(n.id)}">${esc(n.label_zh)} · ${esc(n.status)}</button>`).join("")}</div>`:`<div class="gap-line">unknown / 本版未建立</div>`}</div>
        <div class="dcard"><h4>政治栈节点 Political nodes</h4>${pnodes.length?`<div class="tagrow">${pnodes.map(n=>`<button data-polnode="${esc(n.id)}">${esc(n.label_zh)} · ${esc(n.status)}</button>`).join("")}</div>`:`<div class="gap-line">unknown / 本版未建立</div>`}</div>
        <div class="dcard"><h4>公司/产业 Companies</h4>${comps.length?`<div class="tagrow">${comps.map(co=>`<button data-company="${esc(co.id)}">${esc(co.name)} · ${esc(co.role_zh)}</button>`).join("")}</div>`:`<div class="gap-line">unknown / needs source</div>`}</div>
        <div class="dcard"><h4>相关航道/Chokepoints</h4>${chokes.length?`<div class="tagrow">${chokes.map(cp=>`<button data-choke="${esc(cp.id)}">${esc(cp.name_zh)}</button>`).join("")}</div>`:`<div class="gap-line">unknown</div>`}</div>
        ${countryReportCard(id)}
        ${magnitudeSummaryCard("country", id)}
      </div>
      ${alerts.length?`<div><h4 style="margin:12px 0 0;color:#c4ccd8">Candidate alerts（待复查）</h4>${alerts.map(alertCard).join("")}</div>`:""}
      ${renderEastAsiaEnergyBlock("country", id)}
      ${renderMagnitudeLayerBlock("country", id)}`;
  } else if (type === "node"){
    const n = nodeById.get(id); const stk = stackByNode.get(id);
    const comps = (n.companies||[]).map(cid=>companyById.get(cid)).filter(Boolean);
    const chokes = (n.chokepoints||[]).map(cid=>chokeById.get(cid)).filter(Boolean);
    const pnodes = [...politicalNodeById.values()].filter(pn => (pn.techNodes||[]).includes(id));
    const alerts = relatedAlerts(a => (a.relNodes||[]).includes(id));
    html = `<div class="detail-kind">栈节点 / Stack node · ${esc(stk.name_en)} · ${esc(n.layer)}</div>
      <h3>${esc(n.label_zh)} · ${esc(n.label_en)} <span class="chip st-${n.status}">${esc(n.status)}</span> ${evChip(n.evidence)}</h3>
      ${nodeNarrative(n, comps, chokes, alerts)}
      ${archiveBlock(id)}
      <div class="detail-grid">
        <div class="dcard"><h4>相关国家 Countries</h4><div class="tagrow">${(n.countries||[]).map(c=>`<button data-code="${esc(c)}">${esc(countryName(c))}</button>`).join("")||'<span class="gap-line">unknown</span>'}</div></div>
        <div class="dcard"><h4>航道 Chokepoints</h4>${chokes.length?`<div class="tagrow">${chokes.map(cp=>`<button data-choke="${esc(cp.id)}">${esc(cp.name_zh)}</button>`).join("")}</div>`:`<div class="gap-line">无 / none</div>`}</div>
        <div class="dcard"><h4>政治栈接口 Political interface</h4>${pnodes.length?`<div class="tagrow">${pnodes.map(pn=>`<button data-polnode="${esc(pn.id)}">${esc(pn.label_zh)}</button>`).join("")}</div>`:`<div class="gap-line">本版未建立</div>`}</div>
        ${magnitudeSummaryCard("node", id)}
        <div class="dcard dcard-wide"><h4>公司 Companies · 角色/产品/已核数字</h4>${comps.length?comps.map(companyMiniCard).join(""):`<div class="gap-line">unknown / needs source</div>`}</div>
      </div>
      ${ (n.gap_zh||n.evidence==="unknown") ? `<div class="gap-strong">缺口 Gap：${esc(n.gap_zh||"该节点关系/数值证据不足，标 unknown，待补来源。")}</div>` : ""}
      ${alerts.length?`<div><h4 style="margin:12px 0 0;color:#c4ccd8">Candidate alerts（待复查）</h4>${alerts.map(alertCard).join("")}</div>`:""}
      ${renderEastAsiaEnergyBlock("node", id)}
      ${renderMagnitudeLayerBlock("node", id)}`;
  } else if (type === "polnode"){
    const n = politicalNodeById.get(id); const stk = politicalStackByNode.get(id);
    const techNodes = (n.techNodes||[]).map(nid=>nodeById.get(nid)).filter(Boolean);
    const comps = (n.companies||[]).map(cid=>companyById.get(cid)).filter(Boolean);
    const chokes = (n.chokepoints||[]).map(cid=>chokeById.get(cid)).filter(Boolean);
    const pmag = politicalMagFor(id);
    html = `<div class="detail-kind">政治栈节点 / Political stack node · ${esc(stk.name_en)} · ${esc(n.layer)}</div>
      <h3>${esc(n.label_zh)} · ${esc(n.label_en)} <span class="chip st-${n.status}">${esc(n.status)}</span> ${evChip(n.evidence)}</h3>
      ${politicalNodeNarrative(n, techNodes, chokes)}
      ${archiveBlock(id)}
      <div class="detail-grid">
        <div class="dcard"><h4>相关国家 Countries</h4><div class="tagrow">${(n.countries||[]).map(c=>`<button data-code="${esc(c)}">${esc(countryName(c))}</button>`).join("")||'<span class="gap-line">unknown</span>'}</div></div>
        <div class="dcard"><h4>技术接口 Tech nodes</h4>${techNodes.length?`<div class="tagrow">${techNodes.map(t=>`<button data-node="${esc(t.id)}">${esc(t.label_zh)}</button>`).join("")}</div>`:`<div class="gap-line">unknown</div>`}</div>
        <div class="dcard"><h4>公司/机构落点 Companies</h4>${comps.length?`<div class="tagrow">${comps.map(co=>`<button data-company="${esc(co.id)}">${esc(co.name)}</button>`).join("")}</div>`:`<div class="gap-line">无 / none</div>`}</div>
        <div class="dcard"><h4>通道 Chokepoints</h4>${chokes.length?`<div class="tagrow">${chokes.map(cp=>`<button data-choke="${esc(cp.id)}">${esc(cp.name_zh)}</button>`).join("")}</div>`:`<div class="gap-line">无 / none</div>`}</div>
      </div>
      ${(n.gap_zh||n.evidence==="unknown") ? `<div class="gap-strong">缺口 Gap：${esc(n.gap_zh||"政治栈节点关系/强度证据不足，标 unknown，待补来源。")}</div>` : ""}
      ${pmag.length ? `<section class="political-mag-inline"><h4>Political MAG · 数量级缺口</h4>${pmag.map(politicalMagCard).join("")}</section>` : ""}
      <div class="tagrow" style="margin-top:10px"><a class="obs-link" href="political-mag.html">Political MAG 独立页 / standalone page →</a></div>`;
  } else if (type === "chokepoint"){
    const cp = chokeById.get(id);
    const nodes = [...nodeById.values()].filter(n => (n.chokepoints||[]).includes(id));
    const pnodes = [...politicalNodeById.values()].filter(n => (n.chokepoints||[]).includes(id));
    const alerts = relatedAlerts(a => (a.relChokepoints||[]).includes(id));
    html = `<div class="detail-kind">航道 / Chokepoint</div>
      <h3>${esc(cp.name_zh)} · ${esc(cp.name_en)} ${evChip(cp.evidence)}</h3>
      ${chokepointNarrative(cp, nodes, alerts)}
      <div class="detail-grid">
        <div class="dcard"><h4>受影响国家 Affected countries</h4><div class="tagrow">${(cp.affectsCountries||[]).map(c=>`<button data-code="${esc(c)}">${esc(countryName(c))}</button>`).join("")}</div></div>
        <div class="dcard"><h4>受影响栈节点 Affected nodes</h4>${nodes.length?`<div class="tagrow">${nodes.map(n=>`<button data-node="${esc(n.id)}">${esc(n.label_zh)}</button>`).join("")}</div>`:`<div class="gap-line">unknown</div>`}</div>
        <div class="dcard"><h4>政治栈节点 Political nodes</h4>${pnodes.length?`<div class="tagrow">${pnodes.map(n=>`<button data-polnode="${esc(n.id)}">${esc(n.label_zh)}</button>`).join("")}</div>`:`<div class="gap-line">unknown</div>`}</div>
        ${magnitudeSummaryCard("chokepoint", id)}
      </div>
      <div class="gap-strong">${esc(cp.note_zh)}</div>
      ${alerts.length?`<div><h4 style="margin:12px 0 0;color:#c4ccd8">Candidate alerts（待复查）</h4>${alerts.map(alertCard).join("")}</div>`:""}
      ${renderEastAsiaEnergyBlock("chokepoint", id)}
      ${renderMagnitudeLayerBlock("chokepoint", id)}`;
  } else if (type === "company"){
    const co = companyById.get(id);
    const nodes = [...nodeById.values()].filter(n => (n.companies||[]).includes(id));
    const pnodes = [...politicalNodeById.values()].filter(n => (n.companies||[]).includes(id));
    html = `<div class="detail-kind">公司 / Company</div>
      <h3>${esc(co.name)} <span class="ev ev-${co.evidence}">${esc(co.evidence)}</span></h3>
      ${companyNarrative(co, nodes)}
      <div class="detail-grid">
        <div class="dcard"><h4>所在国 Country</h4><div class="tagrow"><button data-code="${esc(co.country)}">${esc(countryName(co.country))}</button></div></div>
        <div class="dcard"><h4>角色 Role</h4><div>${esc(co.role_zh)} · ${esc(co.role_en)}</div></div>
        <div class="dcard"><h4>核心产品 Products</h4>${co.products_zh?`<div>${esc(co.products_zh)}</div>`:`<div class="gap-line">待补</div>`}</div>
        <div class="dcard"><h4>相关栈节点 Stack nodes</h4>${nodes.length?`<div class="tagrow">${nodes.map(n=>`<button data-node="${esc(n.id)}">${esc(n.label_zh)}</button>`).join("")}</div>`:`<div class="gap-line">unknown</div>`}</div>
        <div class="dcard"><h4>政治栈节点 Political nodes</h4>${pnodes.length?`<div class="tagrow">${pnodes.map(n=>`<button data-polnode="${esc(n.id)}">${esc(n.label_zh)}</button>`).join("")}</div>`:`<div class="gap-line">本版未建立</div>`}</div>
        ${magnitudeSummaryCard("company", id)}
        <div class="dcard dcard-wide"><h4>关键数字 Key figures（带证据等级与出处）</h4>${(co.keyFigures||[]).length?(co.keyFigures||[]).map(f=>`<div class="kf-line kf-full"><span class="kf-k">${esc(f.k)}</span><strong>${esc(f.v)}</strong>${cgradeChip(f.ev)}<span class="kf-src">${esc(f.src||"")}</span></div>`).join(""):`<div class="gap-line">尚无已核数字——不编造，待典藏工单补来源</div>`}</div>
      </div>
      ${renderMagnitudeLayerBlock("company", id)}`;
  } else if (type === "alert"){
    const a = D.candidateAlerts.find(x => x.id === id);
    html = `<div class="detail-kind">Candidate alert · 待复查线索</div>
      <h3>${esc(a.title_zh)} · ${esc(a.title_en)} <span class="ev ev-needs-review">${esc(a.status)}</span></h3>
      <p>${esc(a.signal_zh)}</p><p style="color:var(--muted)">${esc(a.signal_en)}</p>
      <div class="gap-strong">这是 candidate alert，只是线索，<strong>不是结论</strong>。请回原始来源核证后再判断。</div>`;
  }
  detailBody.innerHTML = html;
  // wire cross-reference buttons inside detail
  detailBody.querySelectorAll("[data-node]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); selectNode(b.getAttribute("data-node")); }));
  detailBody.querySelectorAll("[data-polnode]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); selectPoliticalNode(b.getAttribute("data-polnode")); }));
  detailBody.querySelectorAll("[data-code]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); selectCountry(b.getAttribute("data-code")); }));
  detailBody.querySelectorAll("[data-company]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); selectCompany(b.getAttribute("data-company")); }));
  detailBody.querySelectorAll("[data-choke]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); selectChokepoint(b.getAttribute("data-choke")); }));
  detailBody.querySelectorAll("[data-alert]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); selectAlert(b.getAttribute("data-alert")); }));
}

// ---- East Asia Energy data pack (v1, source-linked only) ----
// Pure renderer. Pulls from window.STACK_ATLAS_EAST_ASIA_ENERGY, never mutates
// it, never upgrades any row's evidence_status. RU appears in relations but is
// not on the MVP map, so it's shown as an "external source" badge without a
// jump link. Institutional entities (knoc/jogmec/meti_enecho/motie/iea) are
// shown as plain chips without jump links.
const EAE = window.STACK_ATLAS_EAST_ASIA_ENERGY || null;
const EAE_ATLAS_COUNTRIES = new Set(EAE ? EAE.meta.atlas_countries : []);
const EAE_ENERGY_NODES = new Set(EAE ? EAE.meta.energy_nodes : []);
const EAE_CHOKEPOINTS = new Set(EAE ? EAE.meta.chokepoints : []);
const EAE_INSTITUTIONS = new Set(["iea", "eia", "knoc", "jogmec", "meti_enecho", "motie"]);

function eaeEntityLabel(id) {
  if (!EAE) return esc(id);
  if (EAE_ATLAS_COUNTRIES.has(id)) return esc(countryName(id));
  const ent = EAE.entities.find(e => e.entity_id === id);
  if (ent) return `${esc(ent.name_zh)} · ${esc(ent.name_en)}`;
  return esc(id);
}

function eaeEntityChip(id) {
  if (!EAE) return esc(id);
  if (EAE_ATLAS_COUNTRIES.has(id)) {
    return `<button class="eae-chip" data-code="${esc(id)}">${esc(countryName(id))}</button>`;
  }
  if (EAE_CHOKEPOINTS.has(id)) {
    const cp = chokeById.get(id);
    return `<button class="eae-chip" data-choke="${esc(id)}">${esc(cp ? cp.name_zh : id)}</button>`;
  }
  if (EAE_ENERGY_NODES.has(id)) {
    const n = nodeById.get(id);
    return `<button class="eae-chip" data-node="${esc(id)}">${esc(n ? n.label_zh : id)}</button>`;
  }
  // RU and other non-atlas country codes → external-source badge, not clickable
  if (/^[A-Z]{2}$/.test(id)) {
    return `<span class="eae-chip eae-ext-source" title="external source — not on MVP map">${esc(id)} · external source · not on MVP map</span>`;
  }
  // institutions and the rest → plain chip
  return `<span class="eae-chip eae-inst">${eaeEntityLabel(id)}</span>`;
}

function eaeMetricRow(m) {
  const partner = m.partner_country_or_source && m.partner_country_or_source !== "-"
    ? `<span class="eae-partner">vs ${esc(m.partner_country_or_source)}</span>` : "";
  const commodity = m.commodity && m.commodity !== "-"
    ? `<span class="eae-commodity">${esc(m.commodity)}</span>` : "";
  const period = m.period ? `<span class="eae-period">${esc(m.period)}</span>` : "";
  const value = `<strong class="eae-value">${esc(m.value)}</strong> <span class="eae-unit">${esc(m.unit)}</span>`;
  const src = m.source_url
    ? `<a class="eae-src" href="${esc(m.source_url)}" target="_blank" rel="noopener">${esc(m.source_title)}</a>`
    : `<span class="eae-src">${esc(m.source_title)}</span>`;
  const note = m.method_note ? `<div class="eae-note">${esc(m.method_note)}</div>` : "";
  const gapNote = m.gap_note ? `<div class="eae-gap-inline">⚠ ${esc(m.gap_note)}</div>` : "";
  return `<div class="eae-metric">
    <div class="eae-metric-head">
      <span class="eae-mid">${esc(m.metric_id)}</span>
      ${period}${commodity}${partner}
      <span class="ev ev-${esc(m.evidence_status)}">${esc(m.evidence_status)}</span>
    </div>
    <div class="eae-metric-body">${value}</div>
    ${note}
    ${gapNote}
    <div class="eae-src-line">来源 / source: ${src}</div>
  </div>`;
}

function eaeRelationRow(r) {
  const fromChip = eaeEntityChip(r.from_entity);
  const viaChip = r.via_stack_node ? eaeEntityChip(r.via_stack_node) : "";
  const toChip = eaeEntityChip(r.to_entity);
  const commodity = r.commodity ? `<span class="eae-commodity">${esc(r.commodity)}</span>` : "";
  const src = r.source_url
    ? `<a class="eae-src" href="${esc(r.source_url)}" target="_blank" rel="noopener">${esc(r.source_title)}</a>`
    : `<span class="eae-src">${esc(r.source_title)}</span>`;
  const note = r.note ? `<div class="eae-note">${esc(r.note)}</div>` : "";
  return `<div class="eae-relation">
    <div class="eae-rel-flow">${fromChip} → ${viaChip} → ${toChip} ${commodity}
      <span class="ev ev-${esc(r.evidence_status)}">${esc(r.evidence_status)}</span>
    </div>
    ${note}
    <div class="eae-src-line">来源 / source: ${src}</div>
  </div>`;
}

function eaeGapRow(g) {
  return `<div class="eae-gap-row eae-gap-status-${esc(g.status)}">
    <div class="eae-gap-head">
      <span class="eae-gap-topic">${esc(g.topic)}</span>
      <span class="ev ev-${esc(g.status)}">${esc(g.status)}</span>
    </div>
    <div class="eae-gap-body">${esc(g.what_is_missing)}</div>
    <div class="eae-gap-meta">为什么影响数据 / why: ${esc(g.why_it_matters_for_data)}</div>
    ${g.candidate_source ? `<div class="eae-gap-meta">候选来源 / candidate: ${esc(g.candidate_source)}</div>` : ""}
  </div>`;
}

function eaePickGaps(type, id) {
  if (!EAE) return [];
  const all = EAE.gaps;
  if (type === "country") {
    if (id === "CN") return all.filter(g => g.gap_id.includes("cn") || g.gap_id === "gap_jp_kr_netimport_days" || g.gap_id === "gap_comtrade" || g.gap_id === "gap_refinery_adapt" || g.gap_id === "gap_reroute_time");
    if (id === "JP" || id === "KR") return all.filter(g => g.gap_id.includes("jp") || g.gap_id.includes("kr") || g.gap_id === "gap_comtrade" || g.gap_id === "gap_refinery_adapt" || g.gap_id === "gap_reroute_time");
    if (id === "IN") return all.filter(g => g.gap_id === "gap_india" || g.gap_id === "gap_comtrade" || g.gap_id === "gap_refinery_adapt" || g.gap_id === "gap_reroute_time");
    if (id === "SG") return all.filter(g => g.gap_id === "gap_singapore" || g.gap_id === "gap_refinery_adapt");
    if (id === "SA" || id === "AE") return all.filter(g => g.gap_id === "gap_ae_bypass" || g.gap_id === "gap_comtrade");
    if (id === "QA") return all.filter(g => g.gap_id === "gap_comtrade");
    return [];
  }
  if (type === "node") {
    if (id === "en-refinery") return all.filter(g => ["gap_refinery_adapt", "gap_india", "gap_singapore"].includes(g.gap_id));
    if (id === "en-reserve") return all.filter(g => ["gap_cn_spr", "gap_jp_kr_netimport_days", "gap_kr_lpg_days"].includes(g.gap_id));
    if (id === "en-tanker") return all.filter(g => ["gap_reroute_time", "gap_ae_bypass"].includes(g.gap_id));
    if (id === "en-crude") return all.filter(g => ["gap_comtrade", "gap_ae_bypass"].includes(g.gap_id));
    if (id === "en-lng") return all.filter(g => g.gap_id === "gap_comtrade");
    return [];
  }
  if (type === "chokepoint") {
    if (id === "hormuz") return all.filter(g => ["gap_ae_bypass", "gap_reroute_time"].includes(g.gap_id));
    if (id === "malacca") return all.filter(g => g.gap_id === "gap_singapore" || g.gap_id === "gap_reroute_time");
    return all.filter(g => g.gap_id === "gap_reroute_time");
  }
  return [];
}

function eaeAllGapsBlock() {
  if (!EAE || !EAE.gaps.length) return "";
  const rows = EAE.gaps.map(eaeGapRow).join("");
  return `<details class="eae-all-gaps">
    <summary>查看全部 ${EAE.gaps.length} 个数据缺口 / All ${EAE.gaps.length} data gaps</summary>
    <div class="eae-all-gaps-body">${rows}</div>
  </details>`;
}

function eaeBlock(opts) {
  // opts: { title, metrics, relations, gaps }
  if (!EAE) return "";
  const m = opts.metrics || [];
  const r = opts.relations || [];
  const g = opts.gaps || [];
  if (!m.length && !r.length && !g.length) {
    return `<section class="eae-section">
      <h4 class="eae-title">East Asia Energy · ${esc(opts.title)}</h4>
      <p class="eae-discipline">${esc(EAE.meta.discipline_note_zh)}<br><span class="eae-discipline-en">${esc(EAE.meta.discipline_note_en)}</span></p>
      <p class="eae-empty">本批数据包未覆盖此节点。Data pack does not cover this entity.</p>
      ${eaeAllGapsBlock()}
    </section>`;
  }
  const metricsHtml = m.length ? `<div class="eae-sub"><h5>指标 / Metrics (${m.length})</h5>${m.map(eaeMetricRow).join("")}</div>` : "";
  const relsHtml = r.length ? `<div class="eae-sub"><h5>关系边 / Relations (${r.length})</h5>${r.map(eaeRelationRow).join("")}</div>` : "";
  const gapsHtml = g.length ? `<div class="eae-sub"><h5>本节点相关缺口 / Related gaps (${g.length})</h5>${g.map(eaeGapRow).join("")}</div>` : "";
  return `<section class="eae-section">
    <h4 class="eae-title">East Asia Energy · ${esc(opts.title)}</h4>
    <p class="eae-discipline">${esc(EAE.meta.discipline_note_zh)}<br><span class="eae-discipline-en">${esc(EAE.meta.discipline_note_en)}</span></p>
    ${metricsHtml}${relsHtml}${gapsHtml}
    ${eaeAllGapsBlock()}
  </section>`;
}

function renderEastAsiaEnergyBlock(type, id) {
  if (!EAE) return "";
  if (type === "country") {
    if (!EAE_ATLAS_COUNTRIES.has(id)) return "";
    const c = countryByCode.get(id);
    return eaeBlock({
      title: `${c.name_zh} / ${c.name_en}`,
      metrics: EAE.lookup.metricsByCountry[id] || [],
      relations: EAE.lookup.relationsByCountry[id] || [],
      gaps: eaePickGaps("country", id)
    });
  }
  if (type === "node") {
    if (!EAE_ENERGY_NODES.has(id)) return "";
    const n = nodeById.get(id);
    return eaeBlock({
      title: `${n.label_zh} / ${n.label_en}`,
      metrics: EAE.lookup.metricsByNode[id] || [],
      relations: EAE.lookup.relationsByNode[id] || [],
      gaps: eaePickGaps("node", id)
    });
  }
  if (type === "chokepoint") {
    if (!EAE_CHOKEPOINTS.has(id)) return "";
    const cp = chokeById.get(id);
    return eaeBlock({
      title: `${cp.name_zh} / ${cp.name_en}`,
      metrics: EAE.lookup.metricsByChokepoint[id] || [],
      relations: EAE.lookup.relationsByChokepoint[id] || [],
      gaps: eaePickGaps("chokepoint", id)
    });
  }
  return "";
}

// ---- Magnitude Layer (v0.1 seed ledger) ----
// Shows "how much / how concentrated / how gate-like" without pretending that
// different scale families are comparable. No line width or area encoding is
// derived here; every card keeps its scale_family visible.
const MAG = window.STACK_ATLAS_MAGNITUDE_LAYER || null;
const magCandidateById = new Map(MAG ? MAG.candidates.map(c => [c.candidate_id, c]) : []);

function magFilterDef() {
  return MAG_FILTERS.find(f => f.id === magnitudeFilter) || MAG_FILTERS[0];
}

function magPassesFilter(candidate) {
  if (!candidate || !magnitudeEnabled) return false;
  const filter = magFilterDef();
  if (filter.id === "all") return true;
  if (filter.matcher) return filter.matcher(candidate);
  return (filter.families || []).includes(candidate.scale_family);
}

function filteredMagCandidates(candidates) {
  return (candidates || []).filter(magPassesFilter);
}

function renderMagnitudeControls() {
  const toggle = document.getElementById("mag-toggle");
  const group = document.getElementById("mag-filter-group");
  if (!toggle || !group) return;
  if (!MAG) {
    toggle.disabled = true;
    toggle.textContent = "MAG unavailable";
    return;
  }
  toggle.textContent = magnitudeEnabled ? "MAG on" : "MAG off";
  toggle.classList.toggle("active", magnitudeEnabled);
  toggle.setAttribute("aria-pressed", String(magnitudeEnabled));
  group.innerHTML = MAG_FILTERS.map(filter => {
    const active = magnitudeFilter === filter.id;
    return `<button type="button" class="${active ? "active" : ""}" data-mag-filter="${esc(filter.id)}">${esc(filter.label)}</button>`;
  }).join("");
  group.querySelectorAll("[data-mag-filter]").forEach(button => {
    button.addEventListener("click", e => {
      e.stopPropagation();
      magnitudeFilter = button.getAttribute("data-mag-filter") || "all";
      renderMagnitudeControls();
      renderStack();
      if (current) renderDetail(current.type, current.id);
    });
  });
  toggle.onclick = e => {
    e.stopPropagation();
    magnitudeEnabled = !magnitudeEnabled;
    renderMagnitudeControls();
    renderStack();
    if (current) renderDetail(current.type, current.id);
  };
}

function evidenceClass(status) {
  if (status === "verified" || status === "source-linked" || status === "query-designed" || status === "needs-review" || status === "unknown") return status;
  if (status === "blocked" || status === "needs-api-key" || status === "needs-extraction" || status === "source-limited") return "unknown";
  if (status === "lead-only") return "needs-review";
  return "unknown";
}

function magCandidatesFor(type, id) {
  if (!MAG) return [];
  const key = type === "node" ? "byNode"
    : type === "country" ? "byCountry"
    : type === "company" ? "byCompany"
    : type === "chokepoint" ? "byChokepoint"
    : "";
  return filteredMagCandidates((MAG.lookup[key]?.[id] || []).map(cid => magCandidateById.get(cid)).filter(Boolean));
}

function magnitudeNodeBadge(nodeId) {
  if (!MAG || !magnitudeEnabled) return "";
  const candidates = filteredMagCandidates((MAG.lookup.byNode[nodeId] || []).map(id => magCandidateById.get(id)).filter(Boolean));
  if (!candidates.length) return "";
  const verified = candidates.filter(c => c.evidence_status === "verified").length;
  const label = verified ? `MAG ${verified}/${candidates.length}` : `MAG ${candidates.length}`;
  return `<span class="mag-badge" title="Magnitude Layer candidates">${esc(label)}</span>`;
}

function magnitudeSummaryCard(type, id) {
  const candidates = magCandidatesFor(type, id);
  if (!candidates.length) return "";
  const verifiedFacts = candidates.reduce((sum, c) => sum + (c.facts || []).filter(f => f.evidence_status === "verified").length, 0);
  const sourceLinkedFacts = candidates.reduce((sum, c) => sum + (c.facts || []).filter(f => f.evidence_status === "source-linked").length, 0);
  const scaleFamilies = [...new Set(candidates.map(c => c.scale_family))].slice(0, 4);
  return `<div class="dcard mag-summary-card">
    <h4>Magnitude</h4>
    <div class="mag-summary-line"><strong>MAG</strong><span>${candidates.length} candidates</span></div>
    <div class="mag-summary-line"><span>${verifiedFacts} verified facts</span><span>${sourceLinkedFacts} source-linked</span></div>
    <div class="tagrow">${scaleFamilies.map(s => `<span class="mag-scale">${esc(s)}</span>`).join("")}</div>
    <div class="gap-line">完整数量级卡在下方 Magnitude Layer 分区。</div>
  </div>`;
}

function magFactRow(row) {
  const value = `${esc(row.value)} ${esc(row.unit)}`.trim();
  return `<div class="mag-fact-row">
    <div class="mag-fact-main">
      <strong>${value}</strong>
      <span class="mag-scope">${esc(row.scope)}</span>
      <span class="ev ev-${evidenceClass(row.evidence_status)}">${esc(row.evidence_status)}</span>
    </div>
    <div class="mag-fact-meta">
      <span>${esc(row.time_period)}</span>
      <span>${esc(row.organization)}</span>
      <span>${esc(row.original_caption)}</span>
    </div>
  </div>`;
}

function magGapRow(gap) {
  return `<div class="mag-gap-row">
    <div class="mag-gap-head">
      <strong>${esc(gap.gap_type)}</strong>
      <span class="ev ev-${evidenceClass(gap.status)}">${esc(gap.status)}</span>
    </div>
    <div>${esc(gap.what_is_missing)}</div>
    <div class="mag-gap-meta">${esc(gap.next_action)}</div>
  </div>`;
}

function magLagRow(lag) {
  const value = lag.value ? `${esc(lag.value)} ${esc(lag.unit)}`.trim() : "unknown";
  return `<div class="mag-lag-row">
    <strong>${esc(lag.lag_type)}</strong>
    <span>${value}</span>
    <span class="ev ev-${evidenceClass(lag.evidence_status)}">${esc(lag.evidence_status)}</span>
    <div class="mag-gap-meta">${esc(lag.notes)}</div>
  </div>`;
}

function magCandidateCard(candidate) {
  const facts = candidate.facts || [];
  const visibleFacts = facts.slice(0, 6);
  const hiddenFacts = facts.slice(6);
  const factsHtml = facts.length
    ? `<div class="mag-sub"><h5>事实行 / Facts (${facts.length})</h5>${visibleFacts.map(magFactRow).join("")}
        ${hiddenFacts.length ? `<details class="mag-more"><summary>展开其余 ${hiddenFacts.length} 条事实行</summary>${hiddenFacts.map(magFactRow).join("")}</details>` : ""}</div>`
    : `<div class="mag-empty">本候选暂无可展示事实行。No fact rows yet.</div>`;
  const gapsHtml = candidate.gaps?.length
    ? `<div class="mag-sub"><h5>缺口 / Blockers (${candidate.gaps.length})</h5>${candidate.gaps.map(magGapRow).join("")}</div>`
    : "";
  const lagsHtml = candidate.lags?.length
    ? `<div class="mag-sub"><h5>替代滞后 / Substitution lag (${candidate.lags.length})</h5>${candidate.lags.map(magLagRow).join("")}</div>`
    : "";
  return `<article class="mag-card">
    <div class="mag-card-head">
      <div>
        <h5>${esc(candidate.object || candidate.candidate_id)}</h5>
        <div class="mag-target">${esc(candidate.target)}</div>
      </div>
      <span class="ev ev-${evidenceClass(candidate.evidence_status)}">${esc(candidate.evidence_status)}</span>
    </div>
    <div class="mag-meta-row">
      <span class="mag-scale">${esc(candidate.scale_family)}</span>
      ${candidate.gate_type ? `<span class="mag-gate">${esc(candidate.gate_type)}</span>` : ""}
    </div>
    ${candidate.why_low_fame_high_control ? `<p class="mag-why">${esc(candidate.why_low_fame_high_control)}</p>` : ""}
    ${factsHtml}${lagsHtml}${gapsHtml}
  </article>`;
}

function renderMagnitudeLayerBlock(type, id) {
  if (!MAG) return "";
  const candidates = magCandidatesFor(type, id);
  if (!candidates.length) return "";
  const verifiedFacts = candidates.reduce((sum, c) => sum + (c.facts || []).filter(f => f.evidence_status === "verified").length, 0);
  const sourceLinkedFacts = candidates.reduce((sum, c) => sum + (c.facts || []).filter(f => f.evidence_status === "source-linked").length, 0);
  return `<section class="mag-section">
    <div class="mag-section-head">
      <div>
        <h4>Magnitude Layer · 数量级层</h4>
        <p>${esc(MAG.meta.discipline_note_zh)}<br><span>${esc(MAG.meta.discipline_note_en)}</span></p>
      </div>
      <div class="mag-counts">
        <span>${candidates.length} candidates</span>
        <span>${verifiedFacts} verified facts</span>
        <span>${sourceLinkedFacts} source-linked</span>
      </div>
    </div>
    <div class="mag-warning">${esc(MAG.meta.encoding_warning)}</div>
    <div class="mag-grid">${candidates.map(magCandidateCard).join("")}</div>
  </section>`;
}

// ---- WP2: 地图事件入口（events.js 数据驱动，白名单一跳点亮，不扩散） ----
// 事件是地图上唯一的"讲事"点击入口：点标记 → 浮层摘要卡 + 白名单里的国家/节点亮起。
// 白名单 = events.js 每条的 countries/nodes 字段，严格集合，不做图遍历（守 F-SC16 口径）。
const EVENTS = window.ATLAS_EVENTS || [];
const eventById = new Map(EVENTS.map(ev => [ev.id, ev]));
let activeEventId = null;
const eventCardEl = document.getElementById("event-card");

function renderEventMarkers(){
  if (!gEvents) return;
  EVENTS.forEach(ev => {
    if (!Array.isArray(ev.pos)) return;
    const g = svg("g", { class: "event-marker", "data-event": ev.id });
    g.appendChild(svg("circle", { class: "ev-pulse", cx: ev.pos[0], cy: ev.pos[1], r: 5 }));
    g.appendChild(svg("circle", { class: "ev-dot", cx: ev.pos[0], cy: ev.pos[1], r: 5 }));
    const t = svg("text", { class: "ev-label", x: ev.pos[0] + 8, y: ev.pos[1] - 7 });
    t.textContent = ev.title_zh || ev.id;
    g.appendChild(t);
    g.addEventListener("click", e => { e.stopPropagation(); openEvent(ev.id); });
    gEvents.appendChild(g);
  });
}

// 事件高亮：只加白名单里真实存在的 id（构建期另有 build/check-refs.mjs 校验，运行期防御性跳过）。
function eventHighlight(ev){
  const hl = emptyHL();
  (ev.countries || []).forEach(c => { if (countryByCode.has(c)) hl.countries.add(c); });
  (ev.nodes || []).forEach(nid => {
    if (nodeById.has(nid)) hl.nodes.add(nid);
    else if (politicalNodeById.has(nid)) hl.politicalNodes.add(nid);
  });
  return hl;
}

function openEvent(id){
  const ev = eventById.get(id);
  if (!ev) return;
  activeEventId = id;
  current = { type: "event", id };
  HL = eventHighlight(ev);
  // 白名单里的技术节点若不在当前显示的栈标签里，切到第一个命中节点所在的栈（与 select() 同一行为）
  const firstTech = (ev.nodes || []).find(nid => nodeById.has(nid));
  if (firstTech){
    const stk = stackByNode.get(firstTech);
    if (stk && stk.id !== activeStack){ activeStack = stk.id; renderStack(); }
  }
  applyHighlight();
  gEvents?.querySelectorAll(".event-marker").forEach(g => g.classList.toggle("sel", g.getAttribute("data-event") === id));
  renderEventCard(ev);
  positionEventCard();
}

function closeEventCard(){
  activeEventId = null;
  eventCardEl?.classList.add("hidden");
  gEvents?.querySelectorAll(".event-marker.sel").forEach(g => g.classList.remove("sel"));
}

function renderEventCard(ev){
  if (!eventCardEl) return;
  const related = (ev.related || []).map(rid => eventById.get(rid)).filter(Boolean);
  const actions = [];
  if (ev.link) actions.push(`<a class="evc-go" href="${esc(ev.link)}">进入专题页 / Open dossier →</a>`);
  if (ev.linkNode && (nodeById.has(ev.linkNode) || politicalNodeById.has(ev.linkNode)))
    actions.push(`<button type="button" class="evc-go" data-ev-node="${esc(ev.linkNode)}">打开节点档案 / Open node archive →</button>`);
  if (ev.link2 && ev.link2.href) actions.push(`<a class="evc-go evc-go2" href="${esc(ev.link2.href)}">${esc(ev.link2.label_zh || "附报告")} / ${esc(ev.link2.label_en || "report")} →</a>`);
  eventCardEl.innerHTML = `
    <button type="button" class="evc-close" aria-label="关闭 / Close">×</button>
    <div class="evc-kicker">事件 Event ${ev.evidence ? `<span class="cgrade" title="证据等级">${esc(ev.evidence)}</span>` : ""}</div>
    <h3>${esc(ev.title_zh)}</h3>
    <div class="evc-en">${esc(ev.title_en || "")}</div>
    <p class="evc-sum">${esc(ev.summary_zh || "")}</p>
    <p class="evc-sum-en">${esc(ev.summary_en || "")}</p>
    ${actions.length ? `<div class="evc-actions">${actions.join("")}</div>` : ""}
    ${related.length ? `<div class="evc-related"><span>相关事件 Related</span>${related.map(r => `<button type="button" data-ev-jump="${esc(r.id)}">${esc(r.title_zh)}</button>`).join("")}</div>` : ""}`;
  eventCardEl.classList.remove("hidden");
  eventCardEl.addEventListener("click", e => e.stopPropagation());
  eventCardEl.querySelector(".evc-close")?.addEventListener("click", e => { e.stopPropagation(); clearSelection(); });
  eventCardEl.querySelectorAll("[data-ev-jump]").forEach(b => b.addEventListener("click", e => { e.stopPropagation(); openEvent(b.getAttribute("data-ev-jump")); }));
  eventCardEl.querySelectorAll("[data-ev-node]").forEach(b => b.addEventListener("click", e => {
    e.stopPropagation();
    const nid = b.getAttribute("data-ev-node");
    if (nodeById.has(nid)) selectNode(nid); else selectPoliticalNode(nid);
  }));
}

// 摘要卡贴事件点浮出（形态 i）；缩放/平移时跟随，出界时夹回地图框内。
function positionEventCard(){
  if (!eventCardEl || !activeEventId) return;
  const ev = eventById.get(activeEventId);
  const wrap = worldSvg.closest(".map-wrap");
  const ctm = worldSvg.getScreenCTM();
  if (!ev || !wrap || !ctm) return;
  const pt = worldSvg.createSVGPoint();
  pt.x = ev.pos[0] * zoomState.scale + zoomState.x;
  pt.y = ev.pos[1] * zoomState.scale + zoomState.y;
  const screen = pt.matrixTransform(ctm);
  const wr = wrap.getBoundingClientRect();
  const cw = eventCardEl.offsetWidth || 300, ch = eventCardEl.offsetHeight || 180;
  let x = screen.x - wr.left + 14, y = screen.y - wr.top + 10;
  if (x + cw > wr.width - 8) x = Math.max(8, screen.x - wr.left - cw - 14);
  if (y + ch > wr.height - 8) y = Math.max(8, wr.height - ch - 8);
  eventCardEl.style.left = `${x}px`;
  eventCardEl.style.top = `${y}px`;
}

// ---- WP4: 节点档案接入（data/node-archives.js 由构建管道生成；缺文件时优雅降级） ----
// NODE_ARCHIVES 键 = 网页节点 id。渲染全程防御：缺字段就不出该区块，不猜不补。
const ARCH = window.NODE_ARCHIVES || null;
// 档案正文带少量 Markdown 痕迹（**加粗**、`代码`）；先转义再做这两个最小替换，换行转 <br>。
function archText(t){
  return esc(t)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br>");
}

function archHoldersTable(holders){
  if (!Array.isArray(holders) || !holders.length) return "";
  const rows = [];
  let lastGroup = null;
  holders.forEach(h => {
    if (!h) return;
    const g = h.group || null;
    if (g && g !== lastGroup){
      rows.push(`<tr class="arch-group-row"><td colspan="4">${esc(g)}</td></tr>`);
      lastGroup = g;
    }
    if (h.entity || h.role || h.scale || h.jurisdiction){
      rows.push(`<tr><td>${esc(h.entity || "")}</td><td>${esc(h.role || "")}</td><td>${esc(h.scale || "")}</td><td>${esc(h.jurisdiction || "")}</td></tr>`);
    }
  });
  if (!rows.length) return "";
  return `<table class="arch-table arch-holders">
    <thead><tr><th>主体 Entity</th><th>角色 Role</th><th>规模/营收 Scale</th><th>法域/总部 Jurisdiction</th></tr></thead>
    <tbody>${rows.join("")}</tbody></table>`;
}

function archiveBlock(id){
  if (!ARCH) return ""; // 档案数据文件未加载（管道未跑），整体降级为手写骨架
  const a = ARCH[id];
  if (!a) return `<div class="arch-missing">档案未建 / Node archive not yet built — 以下为手写骨架数据 / hand-authored skeleton below.</div>`;
  const cBadge = a.cLevelOverall ? `<span class="cgrade" title="数据综合 C 等级 / overall evidence class">${esc(a.cLevelOverall)}</span>` : "";
  const sketchBadge = a.sketch ? `<span class="sketch-badge" title="草图档案：证据未经现实检验、可信度较低，待正式拆解升级">草图 SKETCH</span>` : "";
  const sketchNote = a.sketch ? `<p class="arch-sketch-note">这是一份草图档案：结构与主要玩家已列出，但证据停在较低等级、尚未经现实检验，之后会逐个升级为正式档案。</p>` : "";
  const meta = [a.established ? `建立 ${esc(a.established)}` : "", a.updated ? `更新 ${esc(a.updated)}` : "",
    a.sourceFile ? esc(a.sourceFile) : ""].filter(Boolean).join(" · ");
  const opening = a.opening ? `<p class="arch-opening">${archText(a.opening)}</p>` : "";
  const holders = archHoldersTable(a.holders);
  let fb = "";
  if (a.fallback){
    if (a.fallback.verdictZh){
      fb = `<div class="arch-fallback"><span class="arch-lab">Fallback 总判 / verdict</span><strong>${esc(a.fallback.verdictZh)}</strong>${a.fallback.verdictRaw ? `<span class="arch-raw">${esc(a.fallback.verdictRaw)}</span>` : ""}</div>`;
    } else if (a.fallback.text){
      fb = `<div class="arch-fallback"><span class="arch-lab">Fallback（未结构化 / unstructured）</span>${archText(a.fallback.text)}</div>`;
    }
  }
  const contested = a.contested && (a.contested.title || a.contested.summary)
    ? `<div class="arch-contested"><span class="arch-lab">最近一次被争夺的事件 / Last contested</span>${a.contested.title ? `<strong>${esc(a.contested.title)}</strong>` : ""}${a.contested.summary ? `<p>${archText(a.contested.summary)}</p>` : ""}</div>` : "";
  const quant = Array.isArray(a.quant) && a.quant.length
    ? `<details class="arch-details"><summary>量化层 Q1–Q6 全文 / Quantitative layer（${a.quant.length}）</summary>${a.quant.map(q =>
        `<div class="arch-quant"><h5>${esc(q.title || q.key || "")}${(q.cLevels && q.cLevels.length) ? ` <span class="cgrade">${esc([].concat(q.cLevels).join(" / "))}</span>` : ""}</h5><div>${archText(q.text || "")}</div></div>`).join("")}</details>` : "";
  const clist = Array.isArray(a.cList) && a.cList.length
    ? `<details class="arch-details"><summary>C 等级清单 / Evidence class list（${a.cList.length}）</summary><table class="arch-table"><thead><tr><th>判断 Item</th><th>C</th><th>来源 Source</th></tr></thead><tbody>${a.cList.map(r =>
        `<tr><td>${esc(r.item || "")}</td><td>${esc(r.level || "")}</td><td>${esc(r.source || "")}</td></tr>`).join("")}</tbody></table></details>` : "";
  const hasUp = Array.isArray(a.upstream) && a.upstream.length;
  const hasDown = Array.isArray(a.downstream) && a.downstream.length;
  const updown = (hasUp || hasDown)
    ? `<details class="arch-details"><summary>上下游 / Upstream · Downstream</summary>${hasUp ? `<h5>上游依赖 Upstream</h5><ul>${a.upstream.map(u => `<li>${archText(u)}</li>`).join("")}</ul>` : ""}${hasDown ? `<h5>下游依赖方 Downstream</h5><ul>${a.downstream.map(u => `<li>${archText(u)}</li>`).join("")}</ul>` : ""}</details>` : "";
  const gaps = Array.isArray(a.gaps) && a.gaps.length
    ? `<details class="arch-details"><summary>数据缺口 / Data gaps（${a.gaps.length}）</summary><ul class="arch-gaps">${a.gaps.map(g => `<li>${archText(g)}</li>`).join("")}</ul></details>` : "";
  return `<section class="arch-section">
    <div class="arch-head"><h4>节点档案 Node archive ${cBadge}${sketchBadge}</h4><span class="arch-meta">${meta}</span></div>
    ${sketchNote}${opening}${holders}${fb}${contested}${quant}${clist}${updown}${gaps}
  </section>`;
}

// ---- 国家 → Observatory 报告链接（案例库从主页正文撤出后，报告改从这里和事件卡进入） ----
const COUNTRY_REPORTS = { US: "USA", CN: "CHN", TW: "TWN", JP: "JPN", KR: "KOR", DE: "DEU", IN: "IND" };
function countryReportCard(code){
  const iso3 = COUNTRY_REPORTS[code];
  if (!iso3) return "";
  return `<div class="dcard"><h4>Observatory 报告 Report</h4><div class="tagrow"><a class="obs-link" href="observatory/reports/${esc(iso3)}.html">国家脆弱性报告 ${esc(iso3)} / country report →</a></div></div>`;
}

// ---- 跨页深链：transmission.html / political-mag.html 的节点按钮跳回本页时带 #sel=type:id ----
function applyDeepLink(){
  const m = /^#sel=([a-z]+):(.+)$/.exec(location.hash || "");
  if (!m) return;
  const type = m[1], id = decodeURIComponent(m[2]);
  if (type === "node" && nodeById.has(id)) selectNode(id);
  else if (type === "polnode" && politicalNodeById.has(id)) selectPoliticalNode(id);
  else if (type === "country" && countryByCode.has(id)) selectCountry(id);
  else if (type === "chokepoint" && chokeById.has(id)) selectChokepoint(id);
  else if (type === "company" && companyById.has(id)) selectCompany(id);
  else if (type === "alert" && D.candidateAlerts.some(a => a.id === id)) selectAlert(id);
  else if (type === "event" && eventById.has(id)) openEvent(id);
}

// init
renderMagnitudeControls();
applyMapTransform();
renderStack();
renderPoliticalStack();
renderEventMarkers();
applyDeepLink();
