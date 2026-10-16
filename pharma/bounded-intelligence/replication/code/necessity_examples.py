"""Proposition 8 (revised, round 1): sufficiency draws and weak-necessity constructions.

Task 法普-20261014-01 · Claude Science · 未经本公民核验.
Since revision round 1 the constructions live in prop8.py and are also run, as checks, inside
verify_propositions.py. This wrapper writes a readable summary to ../output/necessity_examples.txt.
'monotone' is the pointwise check of the definition: G(y)/y non-increasing on the income grid.
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import prop8

OUT = []
P = dict(prop8.BASE); r = prop8.evaluate(P); g = prop8.group(prop8.conditions(P, r)); c = prop8.conclusion(P, r)
OUT.append(f"BASELINE: conditions {g}; G/y non-increasing pointwise = {c['G_over_y_nonincreasing']}; T0 = {c['T0']:.3f}, T1 = {c['T1']:.3f}")
s = prop8.run_sufficiency(400)
OUT.append(f"SUFFICIENCY: {s['satisfying_all']} of {s['draws']} random draws satisfy C1-C5; conclusion holds in {s['conclusion_holds']}")
ph = prop8.run_phi_checks()
OUT.append("TIME SHARE: " + "; ".join(f"phi={r_['phi']}: conditions hold={r_['conditions_hold']}, conclusion holds={r_['ok']}" for r_ in ph))
rows = prop8.run_necessity()
for row in rows:
    OUT.append(f"{row['name']}: others hold={row['others_hold']}, target fails={row['target_fails']}, "
               f"monotone={row['G_over_y_nonincreasing']} (share increasing {row['share_increasing']:.3f}), T1={row['T1']:.3f} -> {'OK' if row['ok'] else 'NOT OK'}")
OUT.append(f"NECESSITY CHECKS {'PASS' if all(r_['ok'] for r_ in rows) and s['conclusion_holds'] == s['satisfying_all'] and all(r_['ok'] for r_ in ph) else 'FAIL'}")
text = "\n".join(OUT); print(text)
(Path(__file__).resolve().parent.parent / "output" / "necessity_examples.txt").write_text(text + "\n")
