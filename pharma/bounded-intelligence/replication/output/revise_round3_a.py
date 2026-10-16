"""Revision round 3 (task 法普-20261016-01), part a: code. Claude Science · 未经本公民核验.
Answers sections 1 and 2 of the round-3 return note: one p_c in the joint economy (pc_entry removed, pc1 = 0.672),
and the holdings rule tau = tau_r1 / (1 - phi) for the C1/C3 weak-necessity rows with checks at phi = 0.25, 0.75.
Atomic: every replacement must match exactly once before anything is written. Run from replication/.
"""
import json
from pathlib import Path
R = Path(__file__).resolve().parent.parent
EDITS = json.loads(r'''[
[
"code/prop8.py",
"    kbar=1.0, pbar=0.8, pc_entry=0.672, s=0.128, m_cap=1.2,",
"    # Revision round 3: no separate entry-task price; the apprenticeship block uses the joint economy's p_c1.\n    kbar=1.0, pbar=0.8, s=0.128, m_cap=1.2,"
],
[
"code/prop8.py",
"    alpha=0.5, sigma=0.5, pc0=1.0, pc1=0.5,",
"    alpha=0.5, sigma=0.5, pc0=1.0, pc1=0.672,   # round 3: p_c1 = 0.672, the apprenticeship calibration of Section 4"
],
[
"code/prop8.py",
"T1 = min(Gk(P[\"pc_entry\"] + P[\"s\"]), P[\"m_cap\"] * T0)",
"T1 = min(Gk(P[\"pc1\"] + P[\"s\"]), P[\"m_cap\"] * T0)"
],
[
"code/prop8.py",
"bool(P[\"s\"] >= P[\"pbar\"] - P[\"pc_entry\"] - 1e-12)",
"bool(P[\"s\"] >= P[\"pbar\"] - P[\"pc1\"] - 1e-12)"
],
[
"code/prop8.py",
"# Revision round 2: holdings in the four factor-side rows (C1, C3) are twice their round-1 values, so that\n# (1 - phi) * tau at phi = 0.5 equals round 1's tau; see output/revise_round2_b.py.\n",
"# Holdings rule (revision round 3, as ruled by the commissioning party): in the four rows that target C1 and C3,\n# tau_scale = tau_scale_r1 / (1 - phi), where tau_scale_r1 is the reference (round-1) value. The task-market holder\n# time (1 - phi) * tau is then the same for every phi; at phi = 0.5 this is the doubling of round 2.\n"
],
[
"code/prop8.py",
"dict(tau_pow=2.0, tau_scale=0.4)",
"dict(tau_pow=2.0, tau_scale_r1=0.2)"
],
[
"code/prop8.py",
"tau_pow=0.5, tau_scale=4.0, z_lo=0.5",
"tau_pow=0.5, tau_scale_r1=2.0, z_lo=0.5"
],
[
"code/prop8.py",
"z_lo=0.0, z_hi=1.0, tau_scale=4.0, tau_pow=1.0",
"z_lo=0.0, z_hi=1.0, tau_scale_r1=2.0, tau_pow=1.0"
],
[
"code/prop8.py",
"dict(z_dir=-1, pc1=1.0, D1=1.0, tau_scale=20.0, tau_pow=1.0)",
"dict(z_dir=-1, pc1=1.0, D1=1.0, tau_scale_r1=10.0, tau_pow=1.0)"
],
[
"code/prop8.py",
"def run_necessity():\n    rows = []\n    for name, delta in NECESSITY.items():\n        P = dict(BASE, **delta); res = evaluate(P)\n",
"def necessity_params(name, phi=None):\n    \"\"\"Parameters of a weak-necessity construction at time share phi (default: BASE['phi']), applying the\n    holdings rule tau_scale = tau_scale_r1 / (1 - phi) to the rows that carry tau_scale_r1.\"\"\"\n    phi = BASE[\"phi\"] if phi is None else phi\n    d = dict(NECESSITY[name])\n    if \"tau_scale_r1\" in d:\n        d[\"tau_scale\"] = d.pop(\"tau_scale_r1\") / (1 - phi)\n    return dict(BASE, phi=phi, **d)\n\ndef run_necessity(phi=None):\n    rows = []\n    for name in NECESSITY:\n        P = necessity_params(name, phi); res = evaluate(P)\n"
],
[
"code/prop8.py",
"        rows.append(dict(name=name, target=tgt, others_hold=others_hold, target_fails=fails,\n                         conclusion_breaks=breaks, ok=others_hold and fails and breaks, **concl))",
"        rows.append(dict(name=name, target=tgt, phi=P[\"phi\"], tau_scale=P[\"tau_scale\"], H=res[\"H\"], others_hold=others_hold,\n                         target_fails=fails, conclusion_breaks=breaks, ok=others_hold and fails and breaks, **concl))"
],
[
"code/verify_propositions.py",
"for row in prop8.run_necessity():\n",
"NECESSITY_PHI_EXTRA = (0.25, 0.75)   # revision round 3: the holdings rule checked at two further time shares\nfor row in prop8.run_necessity():\n"
],
[
"code/verify_propositions.py",
"# ---------- coverage ----------",
"for phi_ in NECESSITY_PHI_EXTRA:\n    for row in prop8.run_necessity(phi_):\n        check(f\"P8 weak necessity at phi={phi_} (holdings rule) -- {row['name']}: others hold={row['others_hold']}, target fails={row['target_fails']}, \"\n              f\"conclusion breaks={row['conclusion_breaks']} (share of grid increasing {row['share_increasing']:.3f}; T1={row['T1']:.3f}; H={row['H']:.3f})\", row[\"ok\"])\n\n# ---------- coverage ----------"
],
[
"code/verify_propositions.py",
"the z_j = 1 case of 4(i) and the tie r_h = k_t of 2.\n",
"the z_j = 1 case of 4(i) and the tie r_h = k_t of 2. Revision round 3 (2026-10-16): one p_c in the joint\neconomy (no separate entry-task price), and the eight weak-necessity constructions at phi = 0.25 and 0.75 under\nthe holdings rule tau = tau_r1 / (1 - phi).\n"
],
[
"code/verify_propositions.py",
"phi = 0.25, 0.75 are checked at the baseline only.\")",
"phi = 0.25, 0.75 are checked at the baseline and, for the weak-necessity constructions, under the holdings rule.\")"
],
[
"code/numerical_illustration.py",
"    P_ = dict(prop8.BASE, **prop8.NECESSITY[r_[\"name\"]]); res_ = prop8.evaluate(P_)",
"    P_ = prop8.necessity_params(r_[\"name\"]); res_ = prop8.evaluate(P_)"
],
[
"code/numerical_illustration.py",
"NUM[\"P8_phi_checks\"] =",
"NUM[\"P8_necessity_other_phi\"] = {str(ph_): [{k: (round(v, 4) if isinstance(v, float) else v) for k, v in r_.items()} for r_ in prop8.run_necessity(ph_)] for ph_ in (0.25, 0.75)}\nNUM[\"P8_phi_checks\"] ="
],
[
"code/make_tables.py",
"Time share $\\varphi=0.5$. Each row changes the baseline (all conditions hold) so that one of C1--C5 fails.",
"Time share $\\varphi=0.5$. Each row changes the baseline (all conditions hold) so that one of C1--C5 fails. In the four rows that target C1 and C3, holdings are $\\tau(y)=\\tau_0(y)/(1-\\varphi)$ for a reference profile $\\tau_0$, so that task-market holder time $(1-\\varphi)\\tau$ does not depend on $\\varphi$; the values shown are for $\\varphi=0.5$."
],
[
"code/make_tables.py",
" At the baseline, the conclusion also holds for $\\varphi\\in\\{0.25,0.5,0.75\\}$.\",",
" At the baseline, the conclusion also holds for $\\varphi\\in\\{0.25,0.5,0.75\\}$. The eight constructions were also run at $\\varphi=0.25$ and $\\varphi=0.75$ under the same holdings rule; in each, only the target condition fails, the maintained assumptions hold, and the conclusion breaks.\","
]
]''')
buf = {}
for rel, old, new in EDITS:
    t = buf.get(rel, (R / rel).read_text())
    n = t.count(old); assert n == 1, (rel, n, old[:80]); buf[rel] = t.replace(old, new)
for rel, t in buf.items():
    (R / rel).write_text(t)
print("REVISE ROUND3 A OK")
