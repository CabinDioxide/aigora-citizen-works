"""Symbolic and numerical checks of Lemma 1 and Propositions 1-8 (model/derivations.md).

Task 法普-20261014-01 · Claude Science · 未经本公民核验.
Run:  python verify_propositions.py   (writes ../output/verify_propositions.txt)
Each check prints PASS/FAIL with the proposition it covers; a coverage table by proposition
precedes the sentinel line 'CHECKS n/n COMPLETE'. Revision round 1 (2026-10-15) added the checks
for Propositions 2 and 8, the existence form of 3(e), the domain conditions of 3(c), the
capacity corollary of 6 and the experience-rated pooling of 7. Revision round 2 (task 法普-20261016-01,
2026-10-16) added: the fixed time share phi in Proposition 8 (three phi checks), the stationary set of
Corollary 1(i) for chi < 1, = 1, > 1, the premise p_e < P_0 of 3(a), the boundary R = theta*pi*L of 3(c),
the z_j = 1 case of 4(i) and the tie r_h = k_t of 2. Revision round 3 (2026-10-16): one p_c in the joint
economy (no separate entry-task price), and the eight weak-necessity constructions at phi = 0.25 and 0.75 under
the holdings rule tau = tau_r1 / (1 - phi).
"""
import numpy as np
import sympy as sp
from pathlib import Path

OUT = []
def check(name, ok, detail=""):
    OUT.append(f"{'PASS' if ok else 'FAIL'}  {name}  {detail}")
    return ok

# ---------- Proposition 1 ----------
a, sig, pc, w = sp.symbols('alpha sigma p_c w', positive=True)
Phi1s = a**sig*pc**(1-sig) + (1-a)**sig*w**(1-sig)          # Phi^(1-sigma)
w_sol = ((1 - a**sig*pc**(1-sig))/(1-a)**sig)**(1/(1-sig))
pts = [{a: 0.4, sig: 0.5, pc: 0.7}, {a: 0.6, sig: 0.3, pc: 0.2}, {a: 0.2, sig: 0.8, pc: 1.1}]
check("P1(i) w(p_c) solves Phi=1 (3 random points)", all(abs(float(Phi1s.subs(w, w_sol).subs(q)) - 1) < 1e-12 for q in pts))
st = (1-a)**sig*w_sol**(1-sig)
check("P1(ii) s_t = 1 - a^s p_c^(1-s) (3 points)", all(abs(float((st - (1 - a**sig*pc**(1-sig))).subs(q))) < 1e-12 for q in pts))
# numeric monotonicity for sigma<1 and >1
def wfun(p, al, s): return ((1-al**s*p**(1-s))/(1-al)**s)**(1/(1-s))
ok = True
for al in [0.3, 0.5, 0.7]:
    for s in [0.3, 0.5, 0.8]:
        pmax = al**(-s/(1-s))
        P = np.linspace(1e-6, 0.99*pmax, 400)
        W = wfun(P, al, s)
        ok &= bool(np.all(np.diff(W) < 0))
        ok &= abs(wfun(1e-80, al, s) - (1-al)**(-s/(1-s))) < 1e-6
check("P1(i),(iii) w decreasing in p_c, limit w_bar (sigma<1 grid)", ok)
ok = True
for al in [0.3, 0.5]:
    s = 1.5
    P = np.linspace(0.05, 5, 200); sc = al**s*P**(1-s)
    ok &= bool(np.all(np.diff(sc) < 0))
check("P1 sigma>1: s_c decreasing in p_c (so s_t increasing)", ok)

# P1(iv): with a common strictly positive per-unit gain, gain/y is non-increasing iff tau(y)/y is
yg = np.linspace(0.2, 5, 500); dw1 = float(wfun(0.5, 0.5, 0.5) - wfun(1.0, 0.5, 0.5))
okiv = dw1 > 0
for tau_y, expect in [(0.3*yg**0.6, True), (0.3*yg, True), (0.3*yg**1.4, False)]:
    okiv &= bool(np.all(np.diff(dw1*tau_y/yg) <= 1e-12)) == expect
check("P1(iv) gain/y non-increasing iff tau/y non-increasing (Delta w>0; three tau profiles)", okiv)

# ---------- Proposition 2 (added in revision round 1) ----------
def regime_c(w, rh, kt):
    """Bertrand between holders (cost rh) and a single owner of the codified asset (cost kt);
    users value a unit of t-services at w. Returns (trade, price, holder premium, owner margin)."""
    if min(rh, kt) > w:
        return False, np.nan, 0.0, 0.0
    price = min(w, max(rh, kt))
    if rh <= kt:
        return True, price, price - rh, 0.0
    return True, price, 0.0, price - kt
grid = np.linspace(0.0, 1.0, 21)
ok_nt = ok_eq = ok_bound = True
for w_ in grid[1:]:
    for rh in grid:
        for kt in grid:
            trade, P_, hp, om = regime_c(w_, rh, kt)
            ok_nt &= (not trade) == (min(rh, kt) > w_)
            if trade:
                lo_c, hi_c = min(rh, kt), max(rh, kt)
                # winner's margin non-negative; loser cannot profitably undercut (price <= its cost or = w cap);
                ok_eq &= (P_ >= lo_c - 1e-12) and (P_ <= w_ + 1e-12) and (P_ <= hi_c + 1e-12)
                ok_bound &= hp <= kt + 1e-12
check("P2 no trade iff min(r_h,k_t) > w (21^3 grid)", ok_nt)
check("P2 P_C is a Bertrand outcome: winner margin >= 0, price <= rival cost and <= w", ok_eq)
check("P2 holders' premium <= k_t whenever there is trade", ok_bound)
hp_w = [regime_c(w_, 0.1, 0.3)[2] for w_ in np.linspace(0.3, 2.0, 50)]
check("P2 holders' premium does not rise with w once w >= k_t (so not as p_c falls)", bool(np.ptp(hp_w) < 1e-12))
check("P2 holders' premium -> 0 as k_t -> 0 (r_h = 0, w = 1)", regime_c(1.0, 0.0, 1e-9)[2] < 1e-8)
_tie = regime_c(1.0, 0.4, 0.4)
check("P2 tie r_h = k_t: holders supply (tie rule), price = k_t, premium 0", _tie[0] and np.isclose(_tie[1], 0.4) and _tie[2] == 0.0 and _tie[3] == 0.0)

# ---------- Lemma 1 ----------
y, eta, r, pt = sp.symbols('y eta r ptilde', positive=True)
pfun = sp.Function('p')(y)
R = r*y**eta
num_E = sp.simplify(sp.diff((R - pfun)/y, y)*y**2)
target = pfun - y*sp.diff(pfun, y) - (1-eta)*R   # with |p'| = -p'
check("Lemma1 (E) numerator", sp.simplify(num_E - target) == 0)
P0 = sp.symbols('P0', positive=True)
num_I = sp.simplify(sp.diff((P0 - pfun)/y, y)*y**2)
check("Lemma1 (I) numerator", sp.simplify(num_I - (-y*sp.diff(pfun, y) - (P0 - pfun))) == 0)

# ---------- Proposition 3 numerical ----------
yy = np.linspace(1.0, 10.0, 2001)
def EV_schedule(ptil, R, P0):
    """realised EV for unbiased households with effective price schedule ptil"""
    V1 = np.maximum.reduce([R - P0, R - ptil, np.zeros_like(R)])
    V0 = np.maximum(R - P0, 0)
    return V1 - V0
r0, eta0, P00 = 1.0, 0.5, 2.5
Ry = r0*yy**eta0
# (a) iff condition
thr = (1-eta0)*r0*yy[0]**eta0
for pe, expect in [(0.9*thr, True), (1.1*thr, False)]:
    ev = EV_schedule(np.full_like(yy, pe), Ry, P00)
    mono = bool(np.all(np.diff(ev/yy) <= 1e-12))
    check(f"P3(a) p_e={pe:.3f} vs threshold {thr:.3f}: EV/y nonincreasing={mono}", mono == expect)
ev = EV_schedule(np.full_like(yy, 0.3), Ry, P00)
check("P3(a) absolute EV nondecreasing", bool(np.all(np.diff(ev) >= -1e-12)))
ev = EV_schedule(np.full_like(yy, 0.3), r0*yy**1.0, 5.0)
check("P3(a) eta=1: EV/y increasing among entrants", bool(np.any(np.diff(ev/yy) > 1e-9)))
# round 2: the premise p_e < P_0 is needed (GPT round-2 counterexample: P_0 = 2.5 here, p_e = 3 > P_0)
ev = EV_schedule(np.full_like(yy, 3.0), Ry, P00)
check("P3(a) needs p_e < P_0: with p_e=3 > P_0=2.5 nobody buys AI, EV/y = 0 (non-increasing) although p_e > (1-eta)R(y_L)",
      bool(np.all(ev == 0) and 3.0 > thr and np.any(Ry < P00)))
# (b) heterogeneity -> regressive somewhere
e, L, p = 0.3, 4.0, 0.2
v = np.clip(0.1 + 0.09*(yy-1), 0, 1)             # v from 0.1 to 0.91
pe = p + e*(1-v)*L
ev = EV_schedule(pe, Ry, P00)
check("P3(b) verification gradient makes EV/y increase on an interval", bool(np.any(np.diff(ev/yy) > 1e-9)))
# (c) losers with bias
theta = 0.4 + 0.6*v
pehat = p + theta*e*(1-v)*L
buyAI = (Ry >= pehat) & (pehat <= np.where(Ry >= P00, P00, np.inf))
realised = np.where(buyAI, Ry - pe, np.maximum(Ry - P00, 0))
EVc = realised - np.maximum(Ry - P00, 0)
losers = EVc < -1e-12
check("P3(c) bias produces strict losers", bool(losers.any()), f"loser y-range [{yy[losers].min():.2f},{yy[losers].max():.2f}]" if losers.any() else "")
check("P3(c) losers concentrated at low y (all losers below median y)", bool(losers.any() and yy[losers].max() < np.median(yy)))
# interval claim: for a single household, losing iff p in (R - piL, R - theta piL]
Rh, pih, th = 2.0, 0.3*0.9, 0.5
ps = np.linspace(0, 3, 3001)
lose = (ps <= Rh - th*pih*L) & (Rh - ps - pih*L < 0)
lo, hi = Rh - pih*L, Rh - th*pih*L
check("P3(c) losing interval matches (R-piL, R-theta piL]", bool(np.allclose([ps[lose].min(), ps[lose].max()], [lo, hi], atol=2e-3)))
# (d) intermediary restores progressivity under (d1)-(d3)
vI, m, F = 0.95, 0.02, 2.0
n_star = F/((1-eta0)*Ry[0] - p - m - e*(1-vI)*L)
for n, expect in [(1.1*n_star, True), (0.5*n_star, False)]:
    q = m + F/n
    pI = p + q + e*(1-vI)*L
    route = q <= e*L*(vI - v)
    ptil = np.where(route, pI, pe)
    ev = EV_schedule(ptil, Ry, P00)
    # (d3) check above cutoff
    mono = bool(np.all(np.diff(ev/yy) <= 1e-9))
    check(f"P3(d) n/n*={n/n_star:.2f}: EV/y nonincreasing={mono}", mono == expect)
# (e) under-demand under bias
q = 0.3
efficient = q <= e*L*(vI - v)
bought = q <= e*L*(theta*(1-v) - (1-vI))
check("P3(e) set of efficient-but-unbought verification non-empty", bool((efficient & ~bought).any()))

# (c) requires pi(y) > 0 and an admissible (non-negative) posted price
pi0 = 0.0
check("P3(c) with pi=0 (v=1) the losing interval is empty", not ((Rh - pi0*L) < (Rh - th*pi0*L)))
Rlow, pih2 = 0.2, 0.25
check("P3(c) interval meets p>=0 iff R - theta*pi*L >= 0 (case R small: no admissible p)",
      (Rlow - th*pih2*L < 0) and not np.any((ps <= Rlow - th*pih2*L) & (Rlow - ps - pih2*L < 0)))
# round 2: boundary R = theta*pi*L; the admissible part is [0, R - theta*pi*L] = {0}, and p = 0 is a losing price
Rb_ = th*pih2*L
check("P3(c) boundary R = theta*pi*L: p = 0 is bought and loses, so the left end is closed at 0 when R - pi*L < 0",
      bool((0.0 <= Rb_ - th*pih2*L + 1e-15) and (Rb_ - 0.0 - pih2*L < 0) and (Rb_ - pih2*L < 0)))
# (d) with a fixed access fee A per intermediary, threshold uses F + A
A_fee = 1.0
nA = (F + A_fee)/((1-eta0)*Ry[0] - p - m - e*(1-vI)*L)
for n, expect in [(1.05*nA, True), (0.9*nA, False)]:
    q = m + (F + A_fee)/n
    pI = p + q + e*(1-vI)*L
    ptil = np.where(q <= e*L*(vI - v), pI, pe)
    ev = EV_schedule(ptil, Ry, P00)
    check(f"P3(d)/P5 access fee: n/n*(A)={n/nA:.2f}: EV/y nonincreasing={bool(np.all(np.diff(ev/yy) <= 1e-9))}",
          bool(np.all(np.diff(ev/yy) <= 1e-9)) == expect)
# (e) existence form: with q = 0, under-demand exists iff some v < vI has theta(v)(1-v) < 1 - vI
q0 = 0.0
vs_near = np.linspace(0.90, 0.9499, 50); th_near = 0.4 + 0.6*vs_near
eff = q0 <= e*L*(vI - vs_near); buy = q0 <= e*L*(th_near*(1-vs_near) - (1-vI))
check("P3(e) q=0 and v near v_I: efficient-but-unbought set non-empty", bool((eff & ~buy).any()))
vs_far = np.linspace(0.0, 0.3, 50); th_far = 0.4 + 0.6*vs_far
eff = q0 <= e*L*(vI - vs_far); buy = q0 <= e*L*(th_far*(1-vs_far) - (1-vI))
check("P3(e) q=0 and v far below v_I: set empty (so the claim is existential, not universal)", not bool((eff & ~buy).any()))

# ---------- Proposition 4 ----------
zA, zj, zk, c0, c1, Dd = sp.symbols('z_A z_j z_k c_0 c_1 D', positive=True)
Cd = c0 + c1/Dd
wj = zA + (1-zA)*zj - Cd
check("P4(ii) dw/dD = c1/D^2", sp.simplify(sp.diff(wj, Dd) - c1/Dd**2) == 0)
check("P4(ii) dw/dz_A = 1 - z_j", sp.simplify(sp.diff(wj, zA) - (1-zj)) == 0)
check("P4(i) z_j = 1: dw/dz_A = 0 (no employed wage falls; wages with z_j < 1 rise)", sp.diff(wj, zA).subs(zj, 1) == 0)
ratio = (zA + (1-zA)*zj - Cd)/(zA + (1-zA)*zk - Cd)
dr = sp.simplify(sp.diff(ratio, Dd))
num = {zA: 0.4, zj: 0.8, zk: 0.3, c0: 0.1, c1: 0.2, Dd: 2.0}
check("P4(ii) ratio w_j/w_k decreasing in D (numeric point)", float(dr.subs(num)) < 0)
# grid check of ratio monotonicity
ok = True
for za in [0.2, 0.5, 0.8]:
    for (a1, a2) in [(0.9, 0.2), (0.6, 0.5)]:
        Ds = np.linspace(0.5, 20, 300); C = 0.05 + 0.2/Ds
        sj, sk = za + (1-za)*a1, za + (1-za)*a2
        mask = sk > C
        rr = (sj - C[mask])/(sk - C[mask])
        ok &= bool(np.all(np.diff(rr) < 0))
check("P4(ii) ratio compression on grid", ok)
w_aut = (zA + (1-zA)*zj) - zA
check("P4(iii) autonomous wage = (1-z_A) z_j, independent of D", sp.simplify(w_aut - (1-zA)*zj) == 0 and sp.diff(w_aut, Dd) == 0)

# ---------- Proposition 5 ----------
# linear demand check of pass-through and envelope with uniform R
kk = sp.symbols('k', positive=True); A_, B_ = sp.symbols('A B', positive=True); pp = sp.symbols('p', positive=True)
Q = A_ - B_*pp
pstar = sp.solve(sp.diff((pp - kk)*Q, pp), pp)[0]
rho = sp.diff(pstar, kk)
check("P5 linear demand pass-through = 1/2", sp.simplify(rho - sp.Rational(1, 2)) == 0)
Pi = ((pp - kk)*Q).subs(pp, pstar)
check("P5 envelope dPi/dk = -Q(p*)", sp.simplify(sp.diff(Pi, kk) + Q.subs(pp, pstar)) == 0)

# ---------- Proposition 6 ----------
beta_, Wc, kbar, pcs = sp.symbols('beta W kappabar p_c', positive=True)
k_ = sp.symbols('kappa', positive=True)
am = pcs/kbar; ast = (pcs + beta_*Wc)/kbar
check("P6(vi) gap = beta W / kbar", sp.simplify(ast - am - beta_*Wc/kbar) == 0)
loss = sp.integrate((pcs + beta_*Wc - k_)/kbar, (k_, pcs, pcs + beta_*Wc))
check("P6(vi) loss = (beta W)^2/(2 kbar)", sp.simplify(loss - (beta_*Wc)**2/(2*kbar)) == 0)
# numeric: with W(p_c) from Prop 1, gap and loss decrease in p_c
al, s_ = 0.5, 0.5; omega = 0.2
P = np.linspace(0.05, 0.6, 200); W = wfun(P, al, s_) - omega
check("P6(vi) W(p_c)>0 on grid", bool(np.all(W > 0)))
check("P6(vi) gap and loss strictly decreasing in p_c", bool(np.all(np.diff(0.9*W) < 0) and np.all(np.diff((0.9*W)**2) < 0)))

# interior / support conditions
Gu = lambda x, kb=1.0: np.clip(x/kb, 0, 1)
check("P6 needs p_c < kbar: with p_c=2 >= kbar=1, a* = a^m (no gap)", Gu(2.0 + 0.1) - Gu(2.0) == 0)
pc_t, bW = 0.95, 0.2   # p_c + beta W > kbar: closed form overstates the gap
check("P6(vi) closed form beta W/kbar needs p_c + beta W <= kbar (fails at 0.95+0.2)", abs((Gu(pc_t+bW) - Gu(pc_t)) - bW) > 1e-6)
check("P6 needs W>0: W=0 gives a* = a^m", Gu(0.5 + 0.36*0.0) == Gu(0.5))
# mentor-capacity law of motion T_t = min{a(x_t), m T_{t-1}}
def path(a_seq, m_cap, T0):
    T = [T0]
    for a_ in a_seq:
        T.append(min(a_, m_cap*T[-1]))
    return np.array(T)
aH, aL = 0.8, 0.6
seq = [aL] + [aH]*12
T_m1 = path(seq, 1.0, aH)
check("P6 corollary m=1: a one-cohort dip in demand is permanent (T stays at a_L)", bool(np.allclose(T_m1[1:], aL)))
T_m12 = path(seq, 1.2, aH); k_rec = int(np.ceil(np.log(aH/aL)/np.log(1.2)))
check(f"P6 corollary m=1.2: T_t = min(a_H, m^t a_L), recovery after {k_rec} cohorts",
      bool(np.allclose(T_m12[1:], np.minimum(aH, 1.2**np.arange(len(seq))*aL))) and np.argmax(T_m12[1:] >= aH - 1e-12) == k_rec)
T_m09 = path([aH]*12, 0.9, aH)
check("P6 corollary m<1: T declines geometrically whatever demand is", bool(np.all(np.diff(T_m09) < 0)))
check("P6 capacity non-binding (m T_{t-1} >= a*) reproduces Prop. 6 rates", bool(np.isclose(path([0.763], 1.2, 0.8)[1], 0.763)))
# round 2: Corollary 1(i), the set of stationary shares T in (0, a] of T = min{a, chi T}
a_c = 0.8; Tg = np.linspace(0.01, a_c, 80)
stat = lambda chi_: Tg[np.isclose(np.minimum(a_c, chi_*Tg), Tg)]
check("P6 corollary (i) chi=1: every T in (0, a] is stationary", len(stat(1.0)) == len(Tg))
check("P6 corollary (i) chi>1: the only positive stationary share is T = a", len(stat(1.2)) == 1 and np.isclose(stat(1.2)[0], a_c))
check("P6 corollary (i) chi<1: no positive stationary share", len(stat(0.95)) == 0)

# ---------- Proposition 7 ----------
def RP(lam, pi, L):
    return np.log(1 - pi + pi*np.exp(lam*L))/lam - pi*L
lams = np.linspace(0.05, 3, 300)
rp = RP(lams, 0.1, 2.0)
check("P7(i) risk premium positive and increasing in lambda", bool(np.all(rp > 0) and np.all(np.diff(rp) > 0)))

check("P7 needs 0<pi<1 and L>0: pi=0 gives RP identically 0 (not strictly decreasing)", bool(np.allclose(RP(lams, 1e-300, 2.0), 0, atol=1e-12)))
# experience-rated pooling: premium pi(y) L (1+ell) keeps the expected-loss gradient; only RP drops out
yv = np.linspace(0.3, 3, 300); vv = 0.2 + 0.7*(yv - yv.min())/(yv.max() - yv.min()); piy = 0.25*(1 - vv); ell = 0.1
pooled = piy*3.0*(1 + ell); selfb = piy*3.0 + RP(1/yv, piy, 3.0)
check("P7 experience-rated pooling: pooled term still slopes with y when pi(y) varies", bool(np.all(np.diff(pooled) < 0)))
check("P7 pooling removes the risk-premium term: self-borne minus pooled = RP - ell*pi*L", bool(np.allclose(selfb - pooled, RP(1/yv, piy, 3.0) - ell*piy*3.0)))
pref = RP(1/yv, piy, 3.0) >= ell*piy*3.0
check("P7 calibration: households preferring pooling form a lower interval (if non-empty)", bool((not pref.any()) or np.all(pref[:np.argmin(pref)] if (~pref).any() else pref)))

# ---------- Proposition 8 (added in revision round 1) ----------
import sys
sys.path.insert(0, str(Path(__file__).resolve().parent))
import prop8
Pb = dict(prop8.BASE); rb = prop8.evaluate(Pb); gb = prop8.group(prop8.conditions(Pb, rb)); cb = prop8.conclusion(Pb, rb)
check("P8 baseline joint economy satisfies C1-C5 and maintained assumptions", all(gb.values()), str(gb))
check("P8 baseline: G(y)/y non-increasing pointwise and T does not fall", cb["G_over_y_nonincreasing"] and cb["T_not_fall"])
suf = prop8.run_sufficiency(400)
check(f"P8 sufficiency: {suf['satisfying_all']} of {suf['draws']} random draws satisfy C1-C5; conclusion holds in {suf['conclusion_holds']}",
      suf["satisfying_all"] > 50 and suf["conclusion_holds"] == suf["satisfying_all"], f"largest grid increment {suf['worst_increment']:.2e}")
for row in prop8.run_phi_checks():
    check(f"P8 time share phi={row['phi']}: baseline conditions hold (H={row['H']:.3f} < mu) and conclusion holds",
          row["ok"], f"share of grid increasing {row['share_increasing']:.3f}; T1={row['T1']:.3f}")
NECESSITY_PHI_EXTRA = (0.25, 0.75)   # revision round 3: the holdings rule checked at two further time shares
for row in prop8.run_necessity():
    check(f"P8 weak necessity -- {row['name']}: others hold={row['others_hold']}, target fails={row['target_fails']}, "
          f"conclusion breaks={row['conclusion_breaks']} (share of grid increasing {row['share_increasing']:.3f}; T1={row['T1']:.3f})", row["ok"])

# Commissioning party's ruling on the round-3 stop point (option A): weak necessity is stated at phi = 0.5 only.
# The C1 row at phi = 0.25 is printed as a RECORD line (result reported, not judged, not counted).
RECORD_ONLY = {(0.25, "C1 fails: tau(y) proportional to y^2")}
for phi_ in NECESSITY_PHI_EXTRA:
    for row in prop8.run_necessity(phi_):
        msg = (f"P8 weak necessity at phi={phi_} (holdings rule) -- {row['name']}: others hold={row['others_hold']}, target fails={row['target_fails']}, "
               f"conclusion breaks={row['conclusion_breaks']} (share of grid increasing {row['share_increasing']:.3f}; largest increment {row['max_increase']:.1e}; T1={row['T1']:.3f}; H={row['H']:.3f})")
        if (phi_, row["name"]) in RECORD_ONLY:
            OUT.append("RECORD  " + msg + "  [record only: not judged, not counted]")
        else:
            check(msg, row["ok"])

# ---------- coverage ----------
import re as _re
cov = {}
for o in OUT:
    m_ = _re.match(r"(PASS|FAIL)\s+(Lemma1|P\d)", o)
    if m_:
        cov[m_.group(2)] = cov.get(m_.group(2), 0) + 1
OUT.append("COVERAGE (checks per result): " + ", ".join(f"{k}: {cov.get(k, 0)}" for k in ["P1", "P2", "Lemma1", "P3", "P4", "P5", "P6", "P7", "P8"]))
OUT.append("NOT CHECKED SYMBOLICALLY OR NUMERICALLY: P2(iii) (cited result of Brynjolfsson & Hitzig); P5 beyond linear demand; "
           "P3(d) and P8 are checked on parameter grids and random draws, which illustrates but does not prove them. "
           "P8 random draws and weak-necessity constructions use the baseline time share phi = 0.5; phi = 0.25, 0.75 are checked at the baseline and, for the weak-necessity constructions, under the holdings rule.")
n_pass = sum(1 for o in OUT if o.startswith('PASS'))
n_chk = sum(1 for o in OUT if o.startswith(('PASS', 'FAIL')))
OUT.append(f"CHECKS {n_pass}/{n_chk} COMPLETE")
text = "\n".join(OUT)
print(text)
outdir = Path(__file__).resolve().parent.parent/'output'; outdir.mkdir(exist_ok=True)
(outdir/'verify_propositions.txt').write_text(text + "\n")
