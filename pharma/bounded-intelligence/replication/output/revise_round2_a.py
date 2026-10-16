"""Revision round 2 (task 法普-20261016-01), part a: code. Claude Science · 未经本公民核验.
Every replacement asserts that the old text occurs exactly once. Run from replication/:  python output/revise_round2_a.py
"""
from pathlib import Path
R = Path(__file__).resolve().parent.parent
_buf = {}
def sub(rel, old, new):
    """Queue a replacement; nothing is written until every replacement has matched exactly once."""
    t = _buf.get(rel, (R / rel).read_text())
    n = t.count(old); assert n == 1, (rel, n, old[:80])
    _buf[rel] = t.replace(old, new)

# ---------------- prop8.py
sub("code/prop8.py", """Task 法普-20261014-01 · Claude Science · 未经本公民核验.
""", """Task 法普-20261014-01 · Claude Science · 未经本公民核验. Revised in task 法普-20261016-01 (revision round 2):
fixed time share phi.
""")
sub("code/prop8.py", """each embodying knowledge z(y). Each unit supplies conversion services to the need-solving sector of
Section 3.1 (paid w(p_c), Proposition 1) and handles one opportunity in the task market of
Section 3.4 (paid w_j, Proposition 4).""", """each embodying knowledge z(y). Each unit has one unit of time per period, split in an exogenous fixed
proportion phi in (0,1): phi to the need-solving sector of Section 3.1 (earning phi * w(p_c), Proposition 1)
and 1 - phi to the task market of Section 3.4, where it handles 1 - phi opportunities (earning
(1 - phi) * w_j, Proposition 4). Task-market holder mass H = (1 - phi) * int tau dF, with compute mu > H.""")
sub("code/prop8.py", """    G(y) = EV_cons(y) + tau(y) * g(y),   g(y) = [w(p_c1) - w(p_c0)] + [w_T1(z(y)) - w_T0(z(y))].
The next cohort's t-share is T1 = min{G_kappa(p_e + s), m * T0}, T0 = G_kappa(pbar) (Prop. 6).""",
"""    G(y) = EV_cons(y) + tau(y) * g(y),   g(y) = phi * [w(p_c1) - w(p_c0)] + (1 - phi) * [w_T1(z(y)) - w_T0(z(y))].
The next cohort's t-share is T1 = min{G_kappa(p_c + s), chi * T0}, T0 = G_kappa(pbar) (Prop. 6, Corollary 1);
chi is stored as m_cap.""")
sub("code/prop8.py", """    zA0=0.3, zA1=0.6, D0=1.0, D1=2.0, c0=0.05, c1=0.1, autonomous=False,
""", """    zA0=0.3, zA1=0.6, D0=1.0, D1=2.0, c0=0.05, c1=0.1, autonomous=False,
    # time allocation (revision round 2): share phi to need-solving, 1 - phi to the task market; compute mu
    phi=0.5, mu=50.0,
""")
sub("code/prop8.py", """    g = dwP + w1 - w0
""", """    phi = P["phi"]
    g = phi * dwP + (1 - phi) * (w1 - w0)    # per unit of t: phi * Delta w_P + (1 - phi) * Delta w_T(y)
    H = (1 - phi) * float(np.mean(tau))      # task-market holder mass (equal-mass income grid)
""")
sub("code/prop8.py", """                T0=T0, T1=T1, w0=w0, w1=w1)""", """                T0=T0, T1=T1, w0=w0, w1=w1, H=H)""")
sub("code/prop8.py", """    out["maint: n* denominator > 0"] = bool(denom > 0)
""", """    out["maint: n* denominator > 0"] = bool(denom > 0)
    out["maint: 0 < phi < 1"] = bool(0 < P["phi"] < 1)
    out["maint: compute mu > H = (1 - phi) * int tau dF"] = bool(P["mu"] > res["H"])
""")
# The two C3 rows in which only z_A or only D changes have Delta w_P = 0, so the whole factor part is
# scaled by 1 - phi. Holdings are doubled so that (1 - phi) * tau equals the round-1 holdings at phi = 0.5.
sub("code/prop8.py", """tau_pow=0.5, tau_scale=2.0, z_lo=0.5""", """tau_pow=0.5, tau_scale=4.0, z_lo=0.5""")
sub("code/prop8.py", """z_lo=0.0, z_hi=1.0, tau_scale=2.0, tau_pow=1.0""", """z_lo=0.0, z_hi=1.0, tau_scale=4.0, tau_pow=1.0""")
sub("code/prop8.py", """def run_sufficiency(""", """PHI_CHECKS = (0.25, 0.5, 0.75)

def run_phi_checks(phis=PHI_CHECKS):
    \"\"\"Baseline with the time share phi set to each value: conditions and conclusion (revision round 2).\"\"\"
    rows = []
    for phi in phis:
        P = dict(BASE, phi=phi); res = evaluate(P)
        gc = group(conditions(P, res)); concl = conclusion(P, res)
        rows.append(dict(phi=phi, conditions_hold=all(gc.values()), H=res["H"],
                         ok=all(gc.values()) and concl["G_over_y_nonincreasing"] and concl["T_not_fall"], **concl))
    return rows

def run_sufficiency(""")

# ---------------- verify_propositions.py
V = "code/verify_propositions.py"
sub(V, """capacity corollary of 6 and the experience-rated pooling of 7.
""", """capacity corollary of 6 and the experience-rated pooling of 7. Revision round 2 (task 法普-20261016-01,
2026-10-16) added: the fixed time share phi in Proposition 8 (three phi checks), the stationary set of
Corollary 1(i) for chi < 1, = 1, > 1, the premise p_e < P_0 of 3(a), the boundary R = theta*pi*L of 3(c),
the z_j = 1 case of 4(i) and the tie r_h = k_t of 2.
""")
sub(V, """check("P2 holders' premium -> 0 as k_t -> 0 (r_h = 0, w = 1)", regime_c(1.0, 0.0, 1e-9)[2] < 1e-8)
""", """check("P2 holders' premium -> 0 as k_t -> 0 (r_h = 0, w = 1)", regime_c(1.0, 0.0, 1e-9)[2] < 1e-8)
_tie = regime_c(1.0, 0.4, 0.4)
check("P2 tie r_h = k_t: holders supply (tie rule), price = k_t, premium 0", _tie[0] and np.isclose(_tie[1], 0.4) and _tie[2] == 0.0 and _tie[3] == 0.0)
""")
sub(V, """check("P3(a) eta=1: EV/y increasing among entrants", bool(np.any(np.diff(ev/yy) > 1e-9)))
""", """check("P3(a) eta=1: EV/y increasing among entrants", bool(np.any(np.diff(ev/yy) > 1e-9)))
# round 2: the premise p_e < P_0 is needed (GPT round-2 counterexample: P_0 = 2.5 here, p_e = 3 > P_0)
ev = EV_schedule(np.full_like(yy, 3.0), Ry, P00)
check("P3(a) needs p_e < P_0: with p_e=3 > P_0=2.5 nobody buys AI, EV/y = 0 (non-increasing) although p_e > (1-eta)R(y_L)",
      bool(np.all(ev == 0) and 3.0 > thr and np.any(Ry < P00)))
""")
sub(V, """# (d) with a fixed access fee A per intermediary, threshold uses F + A
""", """# round 2: boundary R = theta*pi*L; the admissible part is [0, R - theta*pi*L] = {0}, and p = 0 is a losing price
Rb_ = th*pih2*L
check("P3(c) boundary R = theta*pi*L: p = 0 is bought and loses, so the left end is closed at 0 when R - pi*L < 0",
      bool((0.0 <= Rb_ - th*pih2*L + 1e-15) and (Rb_ - 0.0 - pih2*L < 0) and (Rb_ - pih2*L < 0)))
# (d) with a fixed access fee A per intermediary, threshold uses F + A
""")
sub(V, """check("P4(ii) dw/dz_A = 1 - z_j", sp.simplify(sp.diff(wj, zA) - (1-zj)) == 0)
""", """check("P4(ii) dw/dz_A = 1 - z_j", sp.simplify(sp.diff(wj, zA) - (1-zj)) == 0)
check("P4(i) z_j = 1: dw/dz_A = 0 (no employed wage falls; wages with z_j < 1 rise)", sp.diff(wj, zA).subs(zj, 1) == 0)
""")
sub(V, """check("P6 capacity non-binding (m T_{t-1} >= a*) reproduces Prop. 6 rates", bool(np.isclose(path([0.763], 1.2, 0.8)[1], 0.763)))
""", """check("P6 capacity non-binding (m T_{t-1} >= a*) reproduces Prop. 6 rates", bool(np.isclose(path([0.763], 1.2, 0.8)[1], 0.763)))
# round 2: Corollary 1(i), the set of stationary shares T in (0, a] of T = min{a, chi T}
a_c = 0.8; Tg = np.linspace(0.01, a_c, 80)
stat = lambda chi_: Tg[np.isclose(np.minimum(a_c, chi_*Tg), Tg)]
check("P6 corollary (i) chi=1: every T in (0, a] is stationary", len(stat(1.0)) == len(Tg))
check("P6 corollary (i) chi>1: the only positive stationary share is T = a", len(stat(1.2)) == 1 and np.isclose(stat(1.2)[0], a_c))
check("P6 corollary (i) chi<1: no positive stationary share", len(stat(0.95)) == 0)
""")
sub(V, """for row in prop8.run_necessity():
""", """for row in prop8.run_phi_checks():
    check(f"P8 time share phi={row['phi']}: baseline conditions hold (H={row['H']:.3f} < mu) and conclusion holds",
          row["ok"], f"share of grid increasing {row['share_increasing']:.3f}; T1={row['T1']:.3f}")
for row in prop8.run_necessity():
""")
sub(V, """           "P3(d) and P8 are checked on parameter grids and random draws, which illustrates but does not prove them.")""",
"""           "P3(d) and P8 are checked on parameter grids and random draws, which illustrates but does not prove them. "
           "P8 random draws and weak-necessity constructions use the baseline time share phi = 0.5; phi = 0.25, 0.75 are checked at the baseline only.")""")

# ---------------- make_tables.py (Table 2)
M = "code/make_tables.py"
sub(M, r"""Each row changes the baseline (all conditions hold) so that one condition fails.""",
       r"""Time share $\varphi=0.5$. Each row changes the baseline (all conditions hold) so that one of C1--C5 fails.""")
sub(M, r"""$\tau(y)=2y^{1/2}$, $z=0.5$""", r"""$\tau(y)=4y^{1/2}$, $z=0.5$""")
sub(M, r"""only $D$ changes; $\tau(y)=2y$""", r"""only $D$ changes; $\tau(y)=4y$""")
sub(M, r""" of these $\Gamma(y)/y$ is non-increasing at every grid point and $T_1\ge T_0$.",""",
       r""" of these $\Gamma(y)/y$ is non-increasing at every grid point and $T_1\ge T_0$. At the baseline, the conclusion also holds for $\varphi\in\{0.25,0.5,0.75\}$.",""")

# ---------------- necessity_examples.py
sub("code/necessity_examples.py", """OUT.append(f"SUFFICIENCY: {s['satisfying_all']} of {s['draws']} random draws satisfy C1-C5; conclusion holds in {s['conclusion_holds']}")
""", """OUT.append(f"SUFFICIENCY: {s['satisfying_all']} of {s['draws']} random draws satisfy C1-C5; conclusion holds in {s['conclusion_holds']}")
ph = prop8.run_phi_checks()
OUT.append("TIME SHARE: " + "; ".join(f"phi={r_['phi']}: conditions hold={r_['conditions_hold']}, conclusion holds={r_['ok']}" for r_ in ph))
""")
sub("code/necessity_examples.py", """s['conclusion_holds'] == s['satisfying_all'] else 'FAIL'}")""",
    """s['conclusion_holds'] == s['satisfying_all'] and all(r_['ok'] for r_ in ph) else 'FAIL'}")""")

# ---------------- numerical_illustration.py: record phi results in numbers.json
sub("code/numerical_illustration.py", """NUM["P8_sufficiency"] = prop8.run_sufficiency(400)
""", """NUM["P8_sufficiency"] = prop8.run_sufficiency(400)
NUM["P8_phi"] = prop8.BASE["phi"]
NUM["P8_phi_checks"] = [{k: (round(v, 4) if isinstance(v, float) else v) for k, v in r_.items()} for r_ in prop8.run_phi_checks()]
""")
for rel, t in _buf.items():
    (R / rel).write_text(t)
print("REVISE ROUND2 A OK")
