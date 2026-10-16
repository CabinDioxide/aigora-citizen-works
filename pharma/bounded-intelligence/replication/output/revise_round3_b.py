"""Revision round 3 (task 法普-20261016-01), part b: main.tex, make_tables.py, README, derivations, Penda note.
Claude Science · 未经本公民核验. Atomic; each replacement must match exactly once. Run from replication/.
"""
import json
from pathlib import Path
R = Path(__file__).resolve().parent.parent
EDITS = json.loads(r'''[
[
"code/make_tables.py",
" The eight constructions were also run at $\\varphi=0.25$ and $\\varphi=0.75$ under the same holdings rule; in each, only the target condition fails, the maintained assumptions hold, and the conclusion breaks.\",",
"\","
],
[
"paper/main.tex",
"The AI change lowers $p_c$ from 1 to 0.5, which raises the per-unit wage $w$ by 0.33;",
"The AI change lowers $p_c$ from 1 to 0.672, which raises the per-unit wage $w$ by 0.18;"
],
[
"paper/main.tex",
"Apprenticeship is as above, with $s=0.128$ and $\\chi=1.2$.",
"Apprenticeship is as above, with $s=0.128$ and $\\chi=1.2$. The fall in $p_c$ in the joint economy is taken to 0.672, the value used in the apprenticeship illustration (a 16\\% fall in market apprenticeship), so that the factor-price side and the apprenticeship side use the same price; $s=0.128=\\bar p-p_c$ then meets C5 exactly."
],
[
"paper/main.tex",
"In the four that target C1 and C3, holdings are scaled up so that the factor part is not dominated by the consumer part.",
"In the four that target C1 and C3, holdings are $\\tau_0(y)/(1-\\varphi)$ for a reference profile $\\tau_0$, so that the holder time spent in the task market, $(1-\\varphi)\\tau$, does not depend on $\\varphi$ and the factor part is not dominated by the consumer part."
],
[
"paper/main.tex",
"Among 400 random parameter draws at $\\varphi=0.5$, 255 satisfy every condition",
"Among 400 random parameter draws at $\\varphi=0.5$, 127 satisfy every condition"
],
[
"paper/main.tex",
"runs 73 symbolic and numerical checks; its output ends with ``CHECKS 73/73 COMPLETE''",
"runs 89 symbolic and numerical checks; in this revision its output ends with ``CHECKS 88/89 COMPLETE'': the weak-necessity construction for C1 does not break the conclusion at $\\varphi=0.25$ under the holdings rule"
],
[
"paper/main.tex",
"\\caption{Coverage of \\texttt{verify\\_propositions.py} (revision round~2).}",
"\\caption{Coverage of \\texttt{verify\\_propositions.py} (revision round~3).}"
],
[
"paper/main.tex",
"Proposition~8 & 14 & Baseline conditions and conclusion; the baseline at $\\varphi\\in\\{0.25,0.5,0.75\\}$; sufficiency on 400 random draws; the eight weak-necessity constructions of Table~\\ref{tab:necessity} ($\\varphi=0.5$).",
"Proposition~8 & 30 & Baseline conditions and conclusion; the baseline at $\\varphi\\in\\{0.25,0.5,0.75\\}$; sufficiency on 400 random draws; the eight weak-necessity constructions of Table~\\ref{tab:necessity} ($\\varphi=0.5$), and the same eight at $\\varphi=0.25$ and $\\varphi=0.75$ under the holdings rule (one of these sixteen fails: C1 at $\\varphi=0.25$)."
],
[
"paper/main.tex",
"commissioning party's check of new evidence entries (both translated into English) are in \\texttt{review/}. The propositions as revised in round~2 have not yet been re-reviewed.",
"commissioning party's check of new evidence entries (both translated into English) are in \\texttt{review/}. The round-2 revisions were reviewed again on 16 October 2026 (next item).\n\\item \\textbf{Third acceptance review and third non-Claude review (16 October 2026):} the commissioning research agent and \\texttt{gpt-5.6-terra} reviewed the round-2 revisions. They found that the numerical example of Proposition~8 used a separate price on its apprenticeship side ($p_c=0.672$, while the factor-price side used $p_c^1=0.5$), so that the baseline check of C5 and the C5 part of the random draws did not refer to the joint economy as written; the proof was not affected. This revision (round~3) uses a single price, $p_c^1=0.672$, on both sides, and states the rule for holdings in the weak-necessity constructions. The third GPT report (verbatim) is in \\texttt{review/}. The round-3 revisions have not yet been re-reviewed."
],
[
"paper/main.tex",
"This revision (round~2) corrects them; the propositions as revised in round~2 have not yet been re-reviewed.",
"Revision round~2 corrected them. A third review on 16 October 2026 found that the numerical example of Proposition~8 used a separate price on its apprenticeship side; this revision (round~3) uses a single price and has not yet been re-reviewed."
],
[
"paper/main.tex",
"{\\large Revised draft (revision round~2), 16 October 2026}",
"{\\large Revised draft (revision round~3), 16 October 2026}"
],
[
"reading_notes/korom_et_al_2025_penda.md",
"Clinician-level random assignment stratified by clinic, block size 2, 1:1 (p. 7).",
"A \"pragmatic cluster-assigned study\" (p. 2). The authors state that the way Penda implemented the assignment \"was equivalent to randomly allocating clinicians stratified by clinic\", with block size 2 and a 1:1 allocation ratio at the clinic level (p. 7, fn. 2). [Wording revised 2026-10-16, task 法普-20261016-01, to follow the source.]"
],
[
"README.md",
"**revision round 2, 16 October 2026** (task 法普-20261016-01, continuing task 法普-20261014-01). Acceptance status: not yet verified by the commissioning citizen (round 2 returned for revision; this is the second revised version).",
"revision round 2 and **revision round 3, 16 October 2026** (task 法普-20261016-01, continuing task 法普-20261014-01). Acceptance status: not yet verified by the commissioning citizen (round 3 returned for revision; this is the third revised version, delivered at a stop point: see the round-3 revision notes)."
],
[
"README.md",
"1. `python verify_propositions.py`: 73 symbolic and numerical checks",
"1. `python verify_propositions.py`: 89 symbolic and numerical checks"
],
[
"README.md",
"and ends with `CHECKS 73/73 COMPLETE`. Proposition 8's joint economy (time share `phi`, baseline 0.5, also checked at 0.25 and 0.75; compute `mu`), sufficiency draws and weak-necessity constructions are in `code/prop8.py` and are run here.",
"and currently ends with `CHECKS 88/89 COMPLETE` (the C1 weak-necessity construction at phi = 0.25 fails; see the round-3 revision notes). Proposition 8's joint economy (time share `phi`, baseline 0.5, also checked at 0.25 and 0.75; compute `mu`; one price `pc1 = 0.672` for both the factor-price and the apprenticeship side), sufficiency draws and weak-necessity constructions (holdings rule `tau_scale = tau_scale_r1 / (1 - phi)`, function `necessity_params`) are in `code/prop8.py` and are run here."
],
[
"README.md",
"applied to `output/main_round1_final.tex` and `output/derivations_round1.md`, the round-1 texts.",
"applied to `output/main_round1_final.tex` and `output/derivations_round1.md`, the round-1 texts. `output/revise_round3_[a-b].py` are the scripted edits of revision round 3, applied to `output/main_round2_final.tex` and `output/derivations_round2.md`."
],
[
"model/derivations.md",
"**Numerical record (φ = 0.5 unless stated; μ = 50, baseline H = 0.127).**",
"**Numerical record (φ = 0.5 unless stated; μ = 50, baseline H = 0.127).** *Superseded by R3 (single p_c).*"
],
[
"model/derivations.md",
"__APPEND__",
"\n\n---\n\n## R3. Numerical example of Proposition 8 (revision round 3, task 法普-20261016-01, 2026-10-16)\n\nThe statements and proofs of R2 are unchanged. Only the numerical example changes, as fixed by the commissioning party's round-3 return note.\n\n**One price.** The joint economy has a single p_c. The apprenticeship block now uses p_c¹: T_1 = min{G(p_c¹ + s), χT_0} and C5 is s ≥ p̄ − p_c¹. The baseline takes p_c¹ = 0.672, the apprenticeship calibration of §4 (market apprenticeship falls by 16%), so s = 0.128 = p̄ − p_c¹ meets C5 exactly. The separate parameter pc_entry has been removed from code/prop8.py.\n\n**Holdings rule.** In the four weak-necessity rows that target C1 and C3, τ = τ_0/(1 − φ), with reference profiles τ_0 = 0.2y², 2y^{1/2}, 2y, 10y (the round-1 values). Task-market holder time (1 − φ)τ is then independent of φ; at φ = 0.5 the rule gives the round-2 doubling.\n\n**Numerical record (output of verify_propositions.py, CHECKS 88/89).**\n- Baseline, φ = 0.5: all conditions hold; Γ/y non-increasing at every grid point; T_1 = 0.800. Δw_P = 0.182. Also at φ = 0.25 and 0.75.\n- 400 random draws at φ = 0.5: 127 satisfy all conditions, and the conclusion holds in all 127.\n- Necessity rows at φ = 0.5, share of increasing grid steps: C1 0.007, C2 0.637, C3 (autonomy) 0.129, C3 (C(D⁰) ≥ s⁰_min) 0.059, C3 (z decreasing) 0.763, C4 0.054; T_1 = 0.960 in the three C3 rows (they set p_c¹ = 1.0); C5 rows T_1 = 0.672 and 0.720. All eight pass.\n- At φ = 0.75 under the holdings rule, all eight pass.\n- **At φ = 0.25 under the holdings rule, the C1 row does not break the conclusion** (Γ/y non-increasing on the grid; largest increment −2.9e−4). The other seven pass. This is the stop point of round 3; see 停点-法普-20261016-01-第3轮.md.\n"
]
]''')
buf = {}
for rel, old, new in EDITS:
    t = buf.get(rel, (R / rel).read_text())
    if old == "__APPEND__":
        t = t.rstrip("\n") + new
    else:
        n = t.count(old); assert n == 1, (rel, n, old[:80]); t = t.replace(old, new)
    buf[rel] = t
for rel, t in buf.items():
    (R / rel).write_text(t)
print("REVISE ROUND3 B OK")
