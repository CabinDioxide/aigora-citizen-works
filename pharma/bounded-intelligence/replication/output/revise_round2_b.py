"""Revision round 2 (task 法普-20261016-01), part b: factor-side weak-necessity constructions.
Claude Science · 未经本公民核验. Atomic: every replacement must match exactly once before anything is written.
Rule: with the fixed time share phi = 0.5, each unit of t spends half its time in each market, so the factor
part of Gamma(y) is halved relative to round 1. In the four constructions that target the factor side
(C1 and the three C3 rows) holdings tau(y) are doubled, so that the time-weighted holdings equal round 1's
and those rows reproduce the round-1 Gamma(y) exactly. Part a had already doubled the two C3 rows in which
only z_A or only D changes; this part applies the same rule to C1 and to C3 (z decreasing).
"""
from pathlib import Path
R = Path(__file__).resolve().parent.parent
_buf = {}
def sub(rel, old, new):
    t = _buf.get(rel, (R / rel).read_text())
    n = t.count(old); assert n == 1, (rel, n, old[:80])
    _buf[rel] = t.replace(old, new)
sub("code/prop8.py", """dict(tau_pow=2.0, tau_scale=0.2)""", """dict(tau_pow=2.0, tau_scale=0.4)""")
sub("code/prop8.py", """dict(z_dir=-1, pc1=1.0, D1=1.0, tau_scale=10.0, tau_pow=1.0)""", """dict(z_dir=-1, pc1=1.0, D1=1.0, tau_scale=20.0, tau_pow=1.0)""")
sub("code/prop8.py", """# ---------------------------------------------------------------- weak necessity
""", """# ---------------------------------------------------------------- weak necessity
# Revision round 2: holdings in the four factor-side rows (C1, C3) are twice their round-1 values, so that
# (1 - phi) * tau at phi = 0.5 equals round 1's tau; see output/revise_round2_b.py.
""")
sub("code/make_tables.py", r"""C1 fails: $\tau(y)=0.2y^2$, so""", r"""C1 fails: $\tau(y)=0.4y^2$, so""")
sub("code/make_tables.py", r"""only $z_A$ changes; $\tau(y)=10y$""", r"""only $z_A$ changes; $\tau(y)=20y$""")
for rel, t in _buf.items():
    (R / rel).write_text(t)
print("REVISE ROUND2 B OK")
