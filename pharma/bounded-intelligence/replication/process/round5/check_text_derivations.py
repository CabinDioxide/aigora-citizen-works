"""Checks of the derivation steps written into the main text in round 5
(task 法普-20261016-02). Nothing here changes the model, the code in code/,
or any reported number; it re-derives in-text statements from the stated
propositions and from params.csv. Run: python check_text_derivations.py"""
import math, sympy as sp
ok = 0
def check(name, cond):
    global ok
    assert cond, name
    ok += 1
    print("OK  ", name)

a, s, p, w, lam, pi, L, y = sp.symbols('alpha sigma p_c w lambda pi L y', positive=True)
# T1 Prop 1(ii): t-share from zero profit
st = 1 - a**s * p**(1-s)
check("T1 t-share = (1-a)^s w^(1-s) under zero profit",
      sp.simplify(((1-a)**s * ((1-a**s*p**(1-s))/(1-a)**s)) - st) == 0)
# T2 elasticity of t-share w.r.t. ln p_c, and its sigma-derivative sign when p_c>=alpha
el = sp.diff(st, p) * p
check("T2 d s_t / d ln p_c = -(1-s) a^s p^(1-s)", sp.simplify(el + (1-s)*a**s*p**(1-s)) == 0)
dsig = sp.diff(-el, s)   # derivative of the magnitude
check("T2b d|el|/d sigma = a^s p^(1-s)[-1+(1-s)ln(a/p)]",
      sp.simplify(dsig - a**s*p**(1-s)*(-1+(1-s)*sp.log(a/p))) == 0)
import itertools
for av, pv, sv in itertools.product([0.2,0.5,0.8],[0.5,0.8,1.0,2.0],[0.1,0.5,0.9]):
    if pv >= av:
        assert float(dsig.subs({a:av,p:pv,s:sv})) < 0
check("T2c |el| decreasing in sigma whenever p_c >= alpha (grid)", True)
# T3 ceiling wbar=(1-a)^(-s/(1-s)) increasing in sigma
wbar = (1-a)**(-s/(1-s))
for av, sv in itertools.product([0.2,0.5,0.8],[0.1,0.3,0.5,0.7,0.9]):
    assert float(sp.diff(wbar, s).subs({a:av, s:sv})) > 0
check("T3 wbar increasing in sigma (stronger complementarity -> lower ceiling)", True)
check("T3b wbar=2 at alpha=sigma=0.5", abs(float(wbar.subs({a:0.5,s:0.5}))-2) < 1e-12)
# T4 CARA risk premium small-risk approximation
RP = sp.log(1-pi+pi*sp.exp(lam*L))/lam - pi*L
ser = sp.series(RP, L, 0, 3).removeO()
check("T4 RP ~ (lam/2) pi (1-pi) L^2 to second order", sp.simplify(ser - lam/2*pi*(1-pi)*L**2) == 0)
# T5 calibration arithmetic (params.csv values)
P = dict(p=0.05, e=0.25, L=3.0, v_lo=0.2, v_hi=0.9, v_I=0.95, m=0.02, F=5.0, n=200, eta=0.5, r=1.0)
check("T5a e(1-v_lo)L = 0.6 = 12 x p", abs(P['e']*(1-P['v_lo'])*P['L']-0.6)<1e-12 and abs(0.6/P['p']-12)<1e-9)
check("T5b e(1-v_hi)L = 0.075", abs(P['e']*(1-P['v_hi'])*P['L']-0.075)<1e-12)
q = P['m']+P['F']/P['n']; pI = P['p']+q+P['e']*(1-P['v_I'])*P['L']
check("T5c q=0.045, p_I=0.1325", abs(q-0.045)<1e-12 and abs(pI-0.1325)<1e-12)
yL = math.exp(-0.75*2.3263478740408408)   # 1st percentile of lognormal(0, 0.75)
RyL = P['r']*yL**P['eta']
check("T5d (1-eta)R(y_L)=0.209 (numbers.json 0.20898)", abs((1-P['eta'])*RyL-0.20897772046923205)<1e-4)
denom = (1-P['eta'])*RyL-P['p']-P['m']-P['e']*(1-P['v_I'])*P['L']
check("T5e n*=F/denom=49.3", abs(P['F']/denom-49.27189906198176)<0.05)
check("T5f n*(A=30)=345 (Table 2)", abs((P['F']+30)/denom-345)<1)
check("T5g slope dn*/dA = n*/F = 9.9 clients per unit of A", abs(1/denom - 49.27189906198176/5) < 0.01)
# T6 Prop 3(c) lowest-income household
th = 0.4+0.6*P['v_lo']; piL = P['e']*(1-P['v_lo'])
lo, hi = RyL-piL*P['L'], RyL-th*piL*P['L']
check("T6 lowest household: buys and loses at p=0.05 (interval upper end 0.106)", lo < P['p'] <= hi and abs(hi-0.106)<0.001)
# T7 Prop 4 calibration
C = lambda D: 0.05+0.3/D
check("T7 C(1)-C(4)=0.225 wage gain for every employed holder", abs(C(1)-C(4)-0.225)<1e-12)
# T8 Prop 6 / Cor 1 calibration
W = 0.2533797206096896; beta = 0.36
check("T8a beta W = 0.091; a* = 0.763; loss 0.0042", abs(beta*W-0.0912)<1e-3 and abs(0.672+beta*W-0.763)<1e-3 and abs((beta*W)**2/2-0.0042)<1e-4)
check("T8b chi=1.05 recovery cohorts = 4", math.ceil(math.log(0.8/0.672)/math.log(1.05)) == 4)
check("T8c chi=1.2 recovery in next cohort (1.2*0.672>=0.8)", 1.2*0.672 >= 0.8)
# T9 footnote on eta: d/d eta [(1-eta) r yL^eta] = r yL^eta[(1-eta) ln yL - 1] < 0 for yL<=1
eta_, r_, yl_ = sp.symbols('eta r y_L', positive=True)
expr = (1-eta_)*r_*yl_**eta_
check("T9 derivative form", sp.simplify(sp.diff(expr, eta_) - r_*yl_**eta_*((1-eta_)*sp.log(yl_)-1)) == 0)
for ev in [0.1,0.5,0.9]:
    for yv in [0.1,0.5,1.0]:
        assert float(sp.diff(expr, eta_).subs({eta_:ev, r_:1, yl_:yv})) < 0
check("T9b negative for y_L<=1 (grid)", True)
check("T9c calibration y_L<1", yL < 1)
print(f"TEXT CHECKS {ok} COMPLETE")
