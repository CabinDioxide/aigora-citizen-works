"""Model primitives for 'Bounded Intelligence and Inclusive Growth' (Appendix A).

Task 法普-20261014-01 · Claude Science · 未经本公民核验.
Pure numpy; no randomness except where a seed is passed explicitly.
"""
import numpy as np

# ---------- A.1 ----------
def w_of_pc(pc, alpha, sigma):
    """t-wage from zero profit (Prop. 1(i)); nan where p_c >= alpha^(-sigma/(1-sigma))."""
    pc = np.asarray(pc, dtype=float)
    inner = 1.0 - alpha**sigma * pc**(1.0 - sigma)
    out = np.where(inner > 0, (np.clip(inner, 1e-300, None) / (1 - alpha)**sigma)**(1.0 / (1.0 - sigma)), np.nan)
    return out

def t_share(pc, alpha, sigma):
    """Value share of t when Phi=1 (Prop. 1(ii))."""
    return 1.0 - alpha**sigma * np.asarray(pc, dtype=float)**(1.0 - sigma)

# ---------- A.3 ----------
def income_grid(n=4000, mu=0.0, s=0.75, q_lo=0.01, q_hi=0.99):
    """Deterministic quantile grid of a lognormal income distribution (equal mass per point)."""
    from scipy.stats import norm
    qs = np.linspace(q_lo, q_hi, n)
    return np.exp(mu + s * norm.ppf(qs)), qs

def ev_household(y, *, r, eta, P0, p, e, L, v, theta=None, intermediary=None, default_routing=False):
    """Realised EV (money metric) of AI availability for each household (Prop. 3).

    Options: 0 none, 1 human professional (price P0, no error), 2 AI with self-verification,
    3 AI through an intermediary (if offered). Choices use perceived prices; EV uses true prices.
    v: verification capacities; theta: perception factors in (0,1] (None = unbiased).
    intermediary: dict(vI, m, F, n[, A]); A is a fixed access fee per intermediary (Prop. 5). Perceived intermediated price is taken to be correct (Prop. 3(e)).
    default_routing: households for which intermediation is efficient (q <= eL(vI - v)) lose the
    self-verification option (public/default verification layer, condition (d1)).
    """
    y = np.asarray(y, float); v = np.asarray(v, float)
    R = r * y**eta
    th = np.ones_like(y) if theta is None else np.asarray(theta, float)
    pe_true = p + e * (1 - v) * L
    pe_perc = p + th * e * (1 - v) * L
    true = [np.zeros_like(y), R - P0, R - pe_true]
    perc = [np.zeros_like(y), R - P0, R - pe_perc]
    pI = np.nan
    if intermediary is not None:
        q = intermediary['m'] + (intermediary['F'] + intermediary.get('A', 0.0)) / intermediary['n']
        pI = p + q + e * (1 - intermediary['vI']) * L
        true.append(R - pI); perc.append(R - pI)
    T = np.vstack(true); P = np.vstack(perc)
    if intermediary is not None and default_routing:
        routed = q <= e * L * (intermediary['vI'] - v)
        P[2] = np.where(routed, -np.inf, P[2])
    choice = np.argmax(P, axis=0)
    realised = T[choice, np.arange(y.size)]
    EV = realised - np.maximum(R - P0, 0.0)
    return dict(EV=EV, choice=choice, R=R, pe_true=pe_true, pI=pI)

def nonincreasing(f, tol=1e-10):
    """Pointwise check of the model's definition: f (e.g. EV/y on an increasing income grid) is
    non-increasing. Returns ok, share of grid steps with an increase above tol, and the largest step."""
    f = np.asarray(f, float); d = np.diff(f)
    inc = d > tol * np.maximum(1.0, np.abs(f[:-1]))
    return dict(ok=bool(not inc.any()), share_increasing=float(inc.mean()), max_increase=float(d.max()))

def inclusion_index(y, EV, qs):
    """Ratio of mean EV/y in the bottom quintile to mean EV/y in the top quintile (>1 = relatively progressive)."""
    rel = EV / y
    b = rel[qs <= 0.2].mean(); t = rel[qs >= 0.8].mean()
    return b / t if t != 0 else np.inf

def relative_slope(y, EV):
    """OLS slope of EV/y on log y (negative = relatively progressive)."""
    x = np.log(y); z = EV / y
    x = x - x.mean()
    return float((x * (z - z.mean())).sum() / (x * x).sum())

# ---------- A.4 ----------
def wages_nonautonomous(z, zA, D, c0, c1):
    s = zA + (1 - zA) * np.asarray(z, float)
    return np.maximum(s - (c0 + c1 / D), 0.0)

def wages_autonomous(z, zA):
    return (1 - zA) * np.asarray(z, float)

# ---------- A.6 ----------
def apprenticeship(pc, W, beta, kbar, subsidy=0.0):
    """Uniform G on [0,kbar]: market, efficient rates and per-cohort welfare loss."""
    G = lambda x: np.clip(np.asarray(x, float) / kbar, 0, 1)
    am = G(pc + subsidy); ast = G(pc + beta * W)
    lo = np.clip(pc + subsidy, 0, kbar); hi = np.clip(pc + beta * W, 0, kbar)
    loss = np.where(hi > lo, ((pc + beta * W - lo)**2 - (pc + beta * W - hi)**2) / (2 * kbar), 0.0)
    return am, ast, loss

# ---------- A.7 ----------
def risk_premium(lam, pi, L):
    lam = np.asarray(lam, float)
    return np.log(1 - pi + pi * np.exp(lam * L)) / lam - pi * L
