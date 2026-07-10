"use strict";
/* Stack Atlas · Political MAG 独立页运行时（2026-07-07 WP1：政治数量级板块从主页正文撤出）。
 * 数据源：political-mag-data.js（window.POLITICAL_MAG_DATA，与主页政治节点详情内嵌卡共用）。
 * "打开政治节点" → 跳回 index.html#sel=polnode:<id>，由主页选中并三图点亮。
 * 依赖：atlas-data.js（解析政治节点名）。普通脚本全局，无 fetch/ESM，file:// 直开可用。 */

const D = window.ATLAS_DATA;
const PMAG = window.POLITICAL_MAG_DATA || [];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));

const politicalNodeById = new Map();
(D.politicalStacks || []).forEach(stk => stk.nodes.forEach(n => politicalNodeById.set(n.id, n)));

function evidenceClass(status) {
  if (status === "verified" || status === "source-linked" || status === "query-designed" || status === "needs-review" || status === "unknown") return status;
  if (status === "blocked" || status === "needs-api-key" || status === "needs-extraction" || status === "source-limited") return "unknown";
  if (status === "lead-only") return "needs-review";
  return "unknown";
}

function politicalMagCard(row) {
  const pn = politicalNodeById.get(row.polnode);
  return `<article class="political-mag-card">
    <div class="political-mag-card-head">
      <div>
        <h3>${esc(row.metric)}</h3>
        ${row.metric_en ? `<div class="en-t">${esc(row.metric_en)}</div>` : ""}
        <p>${esc(pn ? pn.label_zh + " · " + pn.label_en : row.polnode)}</p>
      </div>
      <span class="ev ev-${evidenceClass(row.evidence_status)}">${esc(row.evidence_status)}</span>
    </div>
    <div class="mag-meta-row"><span class="mag-scale">${esc(row.scale_family)}</span></div>
    <p>${esc(row.why)}</p>
    ${row.why_en ? `<p class="en-t">${esc(row.why_en)}</p>` : ""}
    <div class="political-mag-source-line">候选来源 / sources: ${esc(row.candidate_sources)}</div>
    <div class="gap-strong">下一步 / Next：${esc(row.next_action)}${row.next_action_en ? `<span class="en-t">${esc(row.next_action_en)}</span>` : ""}</div>
    <div class="tagrow"><a class="obj-link" href="index.html#sel=polnode:${encodeURIComponent(row.polnode)}">打开政治节点 / open political node →</a></div>
  </article>`;
}

(function renderPoliticalMagPage(){
  const grid = document.getElementById("political-mag-grid");
  if (!grid) return;
  grid.innerHTML = PMAG.length
    ? PMAG.map(politicalMagCard).join("")
    : `<p class="gap-line" style="padding:12px">数据文件 political-mag-data.js 未加载 / data file not loaded.</p>`;
})();
