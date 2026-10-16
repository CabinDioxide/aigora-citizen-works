"""Revision round 3 (task 法普-20261016-01), part c: the commissioning party's ruling on the round-3 stop point
(option A). Claude Science · 未经本公民核验. Atomic; each replacement must match exactly once. Run from replication/.
"""
import json
from pathlib import Path
R = Path(__file__).resolve().parent.parent
EDITS = json.loads(r'''[
[
"code/verify_propositions.py",
"for phi_ in NECESSITY_PHI_EXTRA:\n    for row in prop8.run_necessity(phi_):\n        check(f\"P8 weak necessity at phi={phi_} (holdings rule) -- {row['name']}: others hold={row['others_hold']}, target fails={row['target_fails']}, \"\n              f\"conclusion breaks={row['conclusion_breaks']} (share of grid increasing {row['share_increasing']:.3f}; T1={row['T1']:.3f}; H={row['H']:.3f})\", row[\"ok\"])\n",
"# Commissioning party's ruling on the round-3 stop point (option A): weak necessity is stated at phi = 0.5 only.\n# The C1 row at phi = 0.25 is printed as a RECORD line (result reported, not judged, not counted).\nRECORD_ONLY = {(0.25, \"C1 fails: tau(y) proportional to y^2\")}\nfor phi_ in NECESSITY_PHI_EXTRA:\n    for row in prop8.run_necessity(phi_):\n        msg = (f\"P8 weak necessity at phi={phi_} (holdings rule) -- {row['name']}: others hold={row['others_hold']}, target fails={row['target_fails']}, \"\n               f\"conclusion breaks={row['conclusion_breaks']} (share of grid increasing {row['share_increasing']:.3f}; largest increment {row['max_increase']:.1e}; T1={row['T1']:.3f}; H={row['H']:.3f})\")\n        if (phi_, row[\"name\"]) in RECORD_ONLY:\n            OUT.append(\"RECORD  \" + msg + \"  [record only: not judged, not counted]\")\n        else:\n            check(msg, row[\"ok\"])\n"
],
[
"code/make_tables.py",
" At the baseline, the conclusion also holds for $\\varphi\\in\\{0.25,0.5,0.75\\}$.\",",
" At the baseline, the conclusion also holds for $\\varphi\\in\\{0.25,0.5,0.75\\}$. Under the holdings rule, all eight constructions hold at $\\varphi=0.75$. At $\\varphi=0.25$ the C1 row does not break the conclusion ($\\Gamma(y)/y$ is non-increasing at every grid point; largest increment $-2.9\\times10^{-4}$), and the other seven hold.\","
],
[
"code/make_tables.py",
"_rows = _num[\"P8_necessity\"]; _suf = _num[\"P8_sufficiency\"]",
"_rows = _num[\"P8_necessity\"]; _suf = _num[\"P8_sufficiency\"]\n# the footnote's statements about phi = 0.25 and 0.75 are asserted against numbers.json (revision round 3, option A)\n_o = _num[\"P8_necessity_other_phi\"]\nassert all(r_[\"ok\"] for r_ in _o[\"0.75\"])\nassert [r_[\"name\"] for r_ in _o[\"0.25\"] if not r_[\"ok\"]] == [\"C1 fails: tau(y) proportional to y^2\"]\nassert next(r_ for r_ in _o[\"0.25\"] if r_[\"name\"].startswith(\"C1\"))[\"G_over_y_nonincreasing\"]"
],
[
"paper/main.tex",
"Conversely, for each of C1--C5 there is a parameterisation of the joint economy in which",
"Conversely, for each of C1--C5 there is a parameterisation of the joint economy with $\\varphi=0.5$ in which"
],
[
"paper/main.tex",
"runs 89 symbolic and numerical checks; in this revision its output ends with ``CHECKS 88/89 COMPLETE'': the weak-necessity construction for C1 does not break the conclusion at $\\varphi=0.25$ under the holdings rule",
"runs 88 symbolic and numerical checks and prints one further result as a record, which is neither judged nor counted; its output ends with ``CHECKS 88/88 COMPLETE''. The record is the weak-necessity construction for C1 at $\\varphi=0.25$ under the holdings rule, which does not break the conclusion ($\\Gamma(y)/y$ is non-increasing on the grid; largest increment $-2.9\\times10^{-4}$); weak necessity is stated at $\\varphi=0.5$ only"
],
[
"paper/main.tex",
"Proposition~8 & 30 &",
"Proposition~8 & 29 &"
],
[
"paper/main.tex",
"under the holdings rule (one of these sixteen fails: C1 at $\\varphi=0.25$).",
"under the holdings rule (fifteen checks; C1 at $\\varphi=0.25$ is printed as a record and does not break the conclusion)."
],
[
"paper/main.tex",
"and states the rule for holdings in the weak-necessity constructions. The third GPT report",
"and states the rule for holdings in the weak-necessity constructions. The round-3 return note had stated that this rule makes the constructions hold at every $\\varphi$; that claim rested on a trial run before the price was unified and is not correct. The author line found this, reported it as a stop point, and, as the commissioning party ruled, weak necessity is now stated at $\\varphi=0.5$ only, with the results at $\\varphi=0.25$ and $\\varphi=0.75$ reported under Table~\\ref{tab:necessity}. The third GPT report"
],
[
"README.md",
"this is the third revised version, delivered at a stop point: see the round-3 revision notes).",
"this is the third revised version; the round-3 stop point was resolved by the commissioning party's ruling, option A)."
],
[
"README.md",
"1. `python verify_propositions.py`: 89 symbolic and numerical checks",
"1. `python verify_propositions.py`: 88 symbolic and numerical checks, plus one RECORD line (reported, not counted)"
],
[
"README.md",
"and currently ends with `CHECKS 88/89 COMPLETE` (the C1 weak-necessity construction at phi = 0.25 fails; see the round-3 revision notes).",
"and ends with `CHECKS 88/88 COMPLETE`. The RECORD line is the C1 weak-necessity construction at phi = 0.25, which does not break the conclusion; weak necessity is stated at phi = 0.5 only."
],
[
"model/derivations.md",
"This is the stop point of round 3; see 停点-法普-20261016-01-第3轮.md.",
"This was the stop point of round 3 (停点-法普-20261016-01-第3轮.md). Ruling (commissioning party, option A): weak necessity is stated at φ = 0.5 only; the φ = 0.25 C1 row is printed as a RECORD line, neither judged nor counted, and the φ = 0.25 and 0.75 results are reported under Table 2. verify_propositions.py now ends with CHECKS 88/88 COMPLETE."
],
[
"model/derivations.md",
"**Numerical record (output of verify_propositions.py, CHECKS 88/89).**",
"**Numerical record (output of verify_propositions.py; CHECKS 88/88 plus one RECORD line after the ruling below).**"
]
]''')
buf = {}
for rel, old, new in EDITS:
    t = buf.get(rel, (R / rel).read_text())
    n = t.count(old); assert n == 1, (rel, n, old[:80]); buf[rel] = t.replace(old, new)
for rel, t in buf.items():
    (R / rel).write_text(t)
print("REVISE ROUND3 C OK")
