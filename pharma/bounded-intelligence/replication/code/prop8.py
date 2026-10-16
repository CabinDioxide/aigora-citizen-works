"""Joint economy of Section 3.8 (Proposition 8): conditions, conclusion, sufficiency draws and
weak-necessity constructions.

Task 法普-20261014-01 · Claude Science · 未经本公民核验. Revised in task 法普-20261016-01 (revision round 2):
fixed time share phi.

Joint economy (paper, Section 3.8). Household y holds tau(y) >= 0 units of the conversion input t,
each embodying knowledge z(y). Each unit has one unit of time per period, split in an exogenous fixed
proportion phi in (0,1): phi to the need-solving sector of Section 3.1 (earning phi * w(p_c), Proposition 1)
and 1 - phi to the task market of Section 3.4, where it handles 1 - phi opportunities (earning
(1 - phi) * w_j, Proposition 4). Task-market holder mass H = (1 - phi) * int tau dF, with compute mu > H. The AI change is the move from the pre-AI state
(p_c0, z_A0, D0; no AI service to households) to the post state (p_c1 <= p_c0, z_A1 >= z_A0,
D1 >= D0; AI service at posted price p). Household y's gain is
    G(y) = EV_cons(y) + tau(y) * g(y),   g(y) = phi * [w(p_c1) - w(p_c0)] + (1 - phi) * [w_T1(z(y)) - w_T0(z(y))].
The next cohort's t-share is T1 = min{G_kappa(p_c + s), chi * T0}, T0 = G_kappa(pbar) (Prop. 6, Corollary 1);
chi is stored as m_cap.
"""
import numpy as np
from model_lib import income_grid, ev_household, w_of_pc, nonincreasing

def C_of(D, c0, c1):
    return c0 + c1 / D

def task_wage(z, zA, D, c0, c1, autonomous=False):
    z = np.asarray(z, float)
    if autonomous:                      # Prop. 4(ii), valid when C(D) < z_A
        return (1 - zA) * z
    return np.maximum(zA + (1 - zA) * z - C_of(D, c0, c1), 0.0)

BASE = dict(
    # income and consumer side (Section 3.3 calibration)
    n_grid=2000, sd=0.75, r=1.0, eta=0.5, P0=1.5, p=0.05, e=0.25, L=3.0,
    v_lo=0.2, v_hi=0.9, th_lo=0.4,
    interm=True, vI=0.95, m=0.02, F=5.0, n=200.0, A=0.0, routing=True, pooled=True,
    # factor side
    regimeH=True, tau_scale=0.2, tau_pow=1.0,           # tau(y) = tau_scale * y**tau_pow
    z_lo=0.2, z_hi=0.8, z_dir=+1,                      # z = z_lo + (z_hi - z_lo) * q  (or reversed)
    alpha=0.5, sigma=0.5, pc0=1.0, pc1=0.672,   # round 3: p_c1 = 0.672, the apprenticeship calibration of Section 4
    zA0=0.3, zA1=0.6, D0=1.0, D1=2.0, c0=0.05, c1=0.1, autonomous=False,
    # time allocation (revision round 2): share phi to need-solving, 1 - phi to the task market; compute mu
    phi=0.5, mu=50.0,
    # apprenticeship (Section 3.6)
    # Revision round 3: no separate entry-task price; the apprenticeship block uses the joint economy's p_c1.
    kbar=1.0, pbar=0.8, s=0.128, m_cap=1.2,
)

def evaluate(P):
    y, qs = income_grid(n=int(P["n_grid"]), s=P["sd"])
    v = P["v_lo"] + (P["v_hi"] - P["v_lo"]) * qs
    theta = P["th_lo"] + (1 - P["th_lo"]) * v
    inter = dict(vI=P["vI"], m=P["m"], F=P["F"], n=P["n"], A=P["A"]) if P["interm"] else None
    cons = ev_household(y, r=P["r"], eta=P["eta"], P0=P["P0"], p=P["p"], e=P["e"], L=P["L"], v=v,
                        theta=theta, intermediary=inter, default_routing=P["routing"])
    tau = P["tau_scale"] * y ** P["tau_pow"]
    zq = qs if P["z_dir"] > 0 else 1 - qs
    z = P["z_lo"] + (P["z_hi"] - P["z_lo"]) * zq
    dwP = float(w_of_pc(P["pc1"], P["alpha"], P["sigma"]) - w_of_pc(P["pc0"], P["alpha"], P["sigma"]))
    w0 = task_wage(z, P["zA0"], P["D0"], P["c0"], P["c1"], autonomous=False)
    w1 = task_wage(z, P["zA1"], P["D1"], P["c0"], P["c1"], autonomous=P["autonomous"])
    phi = P["phi"]
    g = phi * dwP + (1 - phi) * (w1 - w0)    # per unit of t: phi * Delta w_P + (1 - phi) * Delta w_T(y)
    H = (1 - phi) * float(np.mean(tau))      # task-market holder mass (equal-mass income grid)
    G = cons["EV"] + tau * g
    Gk = lambda x: float(np.clip(x / P["kbar"], 0, 1))
    T0 = Gk(P["pbar"]); T1 = min(Gk(P["pc1"] + P["s"]), P["m_cap"] * T0)
    return dict(y=y, qs=qs, v=v, theta=theta, cons=cons, tau=tau, z=z, g=g, G=G, dwP=dwP,
                T0=T0, T1=T1, w0=w0, w1=w1, H=H)

def conditions(P, res):
    """Each condition of Proposition 8 (revised) evaluated on the parameterisation."""
    y = res["y"]; R = P["r"] * y ** P["eta"]; RL = R[0]
    out = {}
    out["maint: R(y_L) <= P0"] = bool(RL <= P["P0"])
    denom = (1 - P["eta"]) * RL - P["p"] - P["m"] - P["e"] * (1 - P["vI"]) * P["L"]
    out["maint: n* denominator > 0"] = bool(denom > 0)
    out["maint: 0 < phi < 1"] = bool(0 < P["phi"] < 1)
    out["maint: compute mu > H = (1 - phi) * int tau dF"] = bool(P["mu"] > res["H"])
    # C1
    out["C1 Regime H"] = bool(P["regimeH"])
    out["C1 tau(y)/y non-increasing, tau >= 0"] = bool(np.all(res["tau"] >= 0) and nonincreasing(res["tau"] / y)["ok"])
    # C2
    choice = res["cons"]["choice"]
    q = P["m"] + (P["F"] + P["A"]) / P["n"]
    efficient = q <= P["e"] * P["L"] * (P["vI"] - res["v"])
    out["C2 intermediary offered"] = bool(P["interm"])
    out["C2 (d1) every efficient household served by intermediary"] = bool(P["interm"] and np.all(choice[efficient] == 3))
    above = ~efficient
    if above.any():
        seg = np.where(above)[0]
        buys = np.isin(choice[seg], [1, 2, 3])
        d3 = bool(np.all(buys) and nonincreasing(res["cons"]["EV"][seg] / y[seg])["ok"])
    else:
        d3 = True
    out["C2 (d3) Lemma 1 for self-verifiers above cutoff"] = d3
    out["C2 default routing if theta<1"] = bool(P["routing"] or np.all(res["theta"] >= 1))
    out["C2 pooled liability"] = bool(P["pooled"])
    # C3
    smin0 = P["zA0"] + (1 - P["zA0"]) * res["z"].min()
    out["C3 non-autonomous"] = not P["autonomous"]
    out["C3 C(D0) < s_min"] = bool(C_of(P["D0"], P["c0"], P["c1"]) < smin0)
    out["C3 z(y) non-decreasing"] = bool(np.all(np.diff(res["z"]) >= -1e-15))
    # C4
    out["C4 (d2) with access fee: n >= n*(A)"] = bool(denom > 0 and P["n"] >= (P["F"] + P["A"]) / denom)
    # C5
    out["C5 s >= pbar - p_c"] = bool(P["s"] >= P["pbar"] - P["pc1"] - 1e-12)
    out["C5 mentor capacity m >= 1"] = bool(P["m_cap"] >= 1)
    # shock directions (maintained)
    out["maint: AI change weakly improves (p_c, z_A, D)"] = bool(P["pc1"] <= P["pc0"] and P["zA1"] >= P["zA0"] and P["D1"] >= P["D0"])
    return out

def conclusion(P, res):
    ni = nonincreasing(res["G"] / res["y"])
    return dict(G_over_y_nonincreasing=ni["ok"], share_increasing=ni["share_increasing"],
                max_increase=ni["max_increase"], T_not_fall=bool(res["T1"] >= res["T0"] - 1e-12),
                T0=res["T0"], T1=res["T1"])

def group(cond):
    """Collapse sub-items to C1..C5 and maintained assumptions."""
    keys = ["maint", "C1", "C2", "C3", "C4", "C5"]
    return {k: all(v for kk, v in cond.items() if kk.split()[0].rstrip(":") == k) for k in keys}

# ---------------------------------------------------------------- weak necessity
# Holdings rule (revision round 3, as ruled by the commissioning party): in the four rows that target C1 and C3,
# tau_scale = tau_scale_r1 / (1 - phi), where tau_scale_r1 is the reference (round-1) value. The task-market holder
# time (1 - phi) * tau is then the same for every phi; at phi = 0.5 this is the doubling of round 2.
NECESSITY = {
    "C1 fails: tau(y) proportional to y^2": dict(tau_pow=2.0, tau_scale_r1=0.2),
    "C2 fails: no intermediated verification offered": dict(interm=False),
    "C3 fails (autonomy): AI becomes autonomous; only z_A changes": dict(autonomous=True, pc1=1.0, D1=1.0, tau_pow=0.5, tau_scale_r1=2.0, z_lo=0.5, z_hi=0.5),
    "C3 fails (C(D) >= s_min): low-z holders unemployed before; only D changes": dict(c1=0.4, D0=1.0, D1=4.0, pc1=1.0, zA1=0.3, z_lo=0.0, z_hi=1.0, tau_scale_r1=2.0, tau_pow=1.0),
    "C3 fails (z(y) decreasing): only z_A changes": dict(z_dir=-1, pc1=1.0, D1=1.0, tau_scale_r1=10.0, tau_pow=1.0),
    "C4 fails: access fee A=30 pushes n below n*(A)": dict(A=30.0),
    "C5 fails: no apprenticeship subsidy": dict(s=0.0),
    "C5 fails: mentor capacity m=0.9 < 1": dict(m_cap=0.9),
}
TARGET = {k: k.split()[0] for k in NECESSITY}

def necessity_params(name, phi=None):
    """Parameters of a weak-necessity construction at time share phi (default: BASE['phi']), applying the
    holdings rule tau_scale = tau_scale_r1 / (1 - phi) to the rows that carry tau_scale_r1."""
    phi = BASE["phi"] if phi is None else phi
    d = dict(NECESSITY[name])
    if "tau_scale_r1" in d:
        d["tau_scale"] = d.pop("tau_scale_r1") / (1 - phi)
    return dict(BASE, phi=phi, **d)

def run_necessity(phi=None):
    rows = []
    for name in NECESSITY:
        P = necessity_params(name, phi); res = evaluate(P)
        gc = group(conditions(P, res)); concl = conclusion(P, res)
        tgt = TARGET[name]
        others_hold = all(v for k, v in gc.items() if k != tgt)
        fails = (not gc[tgt])
        breaks = (not concl["G_over_y_nonincreasing"]) or (not concl["T_not_fall"])
        rows.append(dict(name=name, target=tgt, phi=P["phi"], tau_scale=P["tau_scale"], H=res["H"], others_hold=others_hold,
                         target_fails=fails, conclusion_breaks=breaks, ok=others_hold and fails and breaks, **concl))
    return rows

PHI_CHECKS = (0.25, 0.5, 0.75)

def run_phi_checks(phis=PHI_CHECKS):
    """Baseline with the time share phi set to each value: conditions and conclusion (revision round 2)."""
    rows = []
    for phi in phis:
        P = dict(BASE, phi=phi); res = evaluate(P)
        gc = group(conditions(P, res)); concl = conclusion(P, res)
        rows.append(dict(phi=phi, conditions_hold=all(gc.values()), H=res["H"],
                         ok=all(gc.values()) and concl["G_over_y_nonincreasing"] and concl["T_not_fall"], **concl))
    return rows

def run_sufficiency(n_draws=400, seed=20261015):
    rng = np.random.default_rng(seed)
    n_ok = 0; n_all = 0; worst = -np.inf
    for _ in range(n_draws):
        P = dict(BASE)
        P.update(n_grid=800, eta=rng.uniform(0.3, 0.8), P0=rng.uniform(1.0, 2.5), p=rng.uniform(0.0, 0.08),
                 e=rng.uniform(0.1, 0.3), L=rng.uniform(1.0, 4.0), v_lo=rng.uniform(0.0, 0.4),
                 th_lo=rng.uniform(0.3, 1.0), vI=rng.uniform(0.9, 1.0), F=rng.uniform(0.5, 8.0),
                 A=rng.uniform(0.0, 5.0), m=rng.uniform(0.0, 0.03),
                 tau_scale=rng.uniform(0.0, 3.0), tau_pow=rng.uniform(0.0, 1.0),
                 z_lo=rng.uniform(0.0, 0.6), pc0=rng.uniform(0.6, 1.5), zA0=rng.uniform(0.0, 0.5),
                 D0=rng.uniform(1.0, 3.0), c0=rng.uniform(0.0, 0.1), c1=rng.uniform(0.0, 0.3),
                 s=rng.uniform(0.1, 0.3), m_cap=rng.uniform(1.0, 2.0))
        P["v_hi"] = rng.uniform(P["v_lo"], 0.95); P["z_hi"] = rng.uniform(P["z_lo"], 1.0)
        P["pc1"] = rng.uniform(0.05, P["pc0"]); P["zA1"] = rng.uniform(P["zA0"], 0.9); P["D1"] = rng.uniform(P["D0"], 8.0)
        RL = P["r"] * income_grid(n=P["n_grid"], s=P["sd"])[0][0] ** P["eta"]
        denom = (1 - P["eta"]) * RL - P["p"] - P["m"] - P["e"] * (1 - P["vI"]) * P["L"]
        if denom <= 0:
            continue
        P["n"] = (P["F"] + P["A"]) / denom * rng.uniform(1.0, 20.0)
        res = evaluate(P); gc = group(conditions(P, res))
        if not all(gc.values()):
            continue
        n_all += 1; concl = conclusion(P, res)
        worst = max(worst, concl["max_increase"])
        n_ok += concl["G_over_y_nonincreasing"] and concl["T_not_fall"]
    return dict(draws=n_draws, satisfying_all=n_all, conclusion_holds=n_ok, worst_increment=float(worst))
