"""Round-5d edits (task 法普-20261016-02, ruling after acceptance round 6, 2026-10-17): two wording fixes
in the Section 3.5 paragraph on Demirer, Fradkin and Tadelis. Applied to the output of revise_round5_c.py.
Every old string must occur exactly once. Usage: python revise_round5_d.py <path/to/main.tex>"""
import sys, pathlib
path = pathlib.Path(sys.argv[1]); s = path.read_text(encoding="utf-8")
R = [
 ("1", r"open-source models, which any provider can host, are about 90\% cheaper",
       r"open-source models, which any provider can host (p.~3), are about 90\% cheaper"),
 ("2", r"On our reading, the standard contract also has no access fee, $A=0$; the article does not report the terms of negotiated contracts.",
       r"On our reading, standard API access carries no fixed access charge at the provider level ($A=0$ at that layer); this says nothing about the access fees that downstream intermediaries face, or about negotiated contracts, whose terms the article does not report."),
]
for item, old, new in R:
    n = s.count(old); assert n == 1, (item, n, old[:70])
for item, old, new in R:
    s = s.replace(old, new)
path.write_text(s, encoding="utf-8")
print(f"APPLIED {len(R)} REPLACEMENTS")
