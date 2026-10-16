"""Revision round 2 (task 法普-20261016-01), part e: evidence_review.md and README.md.
Claude Science · 未经本公民核验. Atomic; each replacement must match exactly once.
"""
import json
from pathlib import Path
R = Path(__file__).resolve().parent.parent
EDITS = json.loads(r'''[
[
"evidence_review.md",
"abstract): expert radiologists *under*-weight AI predictions",
"abstract): professional radiologists *under*-weight AI predictions"
],
[
"evidence_review.md",
"39,849 visits, 106 clinicians, 15 clinics (p. 2; abstract p. 1). The design is clinician-level randomisation stratified by clinic (p. 7).",
"39,849 visits, 106 clinicians, 15 clinics (p. 3). The design is a \"pragmatic cluster-assigned study\" (p. 2), which the authors state was \"equivalent to randomly allocating clinicians stratified by clinic\" (p. 7, fn. 2). Several authors are affiliated with the AI supplier, which also funded the study (pp. 1, 10)."
],
[
"README.md",
"First draft 14 October 2026; **revision round 1, 15 October 2026**. Task 法普-20261014-01. Acceptance status: not yet verified by the commissioning citizen (round 1 returned for revision; this is the revised version).",
"First draft 14 October 2026; revision round 1, 15 October 2026; **revision round 2, 16 October 2026** (task 法普-20261016-01, continuing task 法普-20261014-01). Acceptance status: not yet verified by the commissioning citizen (round 2 returned for revision; this is the second revised version)."
],
[
"README.md",
"body pp. 3–37 (introduction to conclusion)",
"body PDF pp. 3–38, printed pp. 1–36 (introduction to conclusion); 56 PDF pages"
],
[
"README.md",
"Section R1 (revision round 1) supersedes the earlier statements of Propositions 1(iv), 2, 3(b)–(e), 4(i), 5, 6, 7, 8 and adds Corollary 1 |",
"Section R1 (revision round 1) supersedes the earlier statements of Propositions 1(iv), 2, 3(b)–(e), 4(i), 5, 6, 7, 8 and adds Corollary 1. Section R2 (revision round 2) supersedes R1 for Proposition 8 (fixed time share φ), Corollary 1(i), Proposition 3(a) and (c), Proposition 4(i), and adds β in Proposition 6 and the tie rule in Proposition 2 |"
],
[
"README.md",
"and `acceptance_review_record_EN.md` (English translation of the commissioning party's review record) |",
"and `acceptance_review_record_EN.md` (English translation of the commissioning party's review record). Round-2 acceptance review: `gpt-5.6-terra_review_raw_2026-10-16.md` (verbatim GPT output; the report is printed twice), `acceptance_review_record_round2_EN.md` and `evidence_additions_check_round2_EN.md` (English translations of the commissioning party's acceptance record and evidence check) |"
],
[
"README.md",
"1. `python verify_propositions.py`: 63 symbolic and numerical checks",
"1. `python verify_propositions.py`: 73 symbolic and numerical checks"
],
[
"README.md",
"and ends with `CHECKS 63/63 COMPLETE`. Proposition 8's joint economy, sufficiency draws and weak-necessity constructions are in `code/prop8.py` and are run here.",
"and ends with `CHECKS 73/73 COMPLETE`. Proposition 8's joint economy (time share `phi`, baseline 0.5, also checked at 0.25 and 0.75; compute `mu`), sufficiency draws and weak-necessity constructions are in `code/prop8.py` and are run here."
],
[
"README.md",
"`output/derivations_round0.md` is the first-draft master copy.",
"`output/derivations_round0.md` is the first-draft master copy. `output/revise_round2_[a-e].py` are the scripted edits of revision round 2 (each asserts that every replacement matches exactly once), applied to `output/main_round1_final.tex` and `output/derivations_round1.md`, the round-1 texts."
]
]''')
buf = {}
for rel, old, new in EDITS:
    t = buf.get(rel, (R / rel).read_text())
    n = t.count(old); assert n == 1, (rel, n, old[:80]); buf[rel] = t.replace(old, new)
for rel, t in buf.items():
    (R / rel).write_text(t)
print("REVISE ROUND2 E OK")
