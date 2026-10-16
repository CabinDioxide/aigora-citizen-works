"""Revision round 2 (task 法普-20261016-01), part d: abstract length and model/derivations.md §R2.
Claude Science · 未经本公民核验. Atomic; each replacement must match exactly once.
"""
import json
from pathlib import Path
R = Path(__file__).resolve().parent.parent
EDITS = json.loads(r'''[
[
"paper/main.tex",
"In a joint economy in which holders of conversion inputs divide their time in fixed proportions between need-solving and a task market, five conditions",
"In a joint economy where conversion-input holders split their time in fixed shares between need-solving and a task market, five conditions"
],
[
"paper/main.tex",
"Each of the five conditions, taken as a whole, can fail alone and break the result. A fall",
"Each of the five conditions can fail alone and break the result. A fall"
],
[
"model/derivations.md",
"### R1.2 Proposition 2 (participation condition added; the \"remainder to users\" clause deleted)\n",
"### R1.2 Proposition 2 (participation condition added; the \"remainder to users\" clause deleted)\n*Supplemented by R2.6 (tie rule).*\n"
],
[
"model/derivations.md",
"### R1.3 Proposition 3\n",
"### R1.3 Proposition 3\n*Parts (a) and (c) superseded by R2.3.*\n"
],
[
"model/derivations.md",
"### R1.4 Proposition 4(i)\n",
"### R1.4 Proposition 4(i)\n*Wording of the z_A effect superseded by R2.4.*\n"
],
[
"model/derivations.md",
"**Corollary 1 (mentor capacity and persistence).** T_t = min{a_t, χ T_{t−1}}.\n",
"**Corollary 1 (mentor capacity and persistence).** T_t = min{a_t, χ T_{t−1}}. *Part (i) superseded by R2.2; β defined in R2.5.*\n"
],
[
"model/derivations.md",
"### R1.8 Proposition 8 (revised as specified by the commissioning party)\n",
"### R1.8 Proposition 8 (revised as specified by the commissioning party)\n*Superseded by R2.1 (fixed time share φ). The numerical record below is that of round 1.*\n"
],
[
"model/derivations.md",
"__APPEND__",
"\n\n---\n\n## R2. Revised statements and proofs (revision round 2, task 法普-20261016-01, 2026-10-16)\n\nThe changes answer the commissioning party's round-2 return note (退回单-法普-20261014-01-第2轮), which draws on its second acceptance review and on a second review by gpt-5.6-terra. The time-share specification of Proposition 8 is the design choice fixed in that note. Paper locations are in `修订说明-法普-20261016-01.md`.\n\n### R2.1 Proposition 8: fixed time share φ\n**Joint economy.**\n- Household y holds τ(y) ≥ 0 units of t, each with knowledge z(y) and one unit of time per period.\n- Time is split in an exogenous fixed proportion φ ∈ (0,1): φ to the need-solving sector of §3.1, 1 − φ to the task market of §3.4.\n- In the need-solving sector a unit earns φ·w(p_c). In the task market it handles 1 − φ opportunities and earns (1 − φ)·w_j, with z_j = z(y).\n- Task-market holder mass (holder time, equivalently opportunities staffed): H = (1 − φ)∫τ(y)dF(y). Maintained: μ > H.\n- (p, p_c, z_A, D) is an exogenous parameter vector. The paper does not model how one AI improvement moves its components together, nor a relation between D and τ; D is set by the establishment of the intermediary layer. Holders do not choose φ. The fixed allocation is a modelling simplification.\n\n**Feasibility.** Proposition 1's w(p_c) solves the zero-profit condition α^σ p_c^{1−σ} + (1−α)^σ w^{1−σ} = 1, which does not involve the quantity of t; with the price of S normalised (small sector), the supply φ∫τdF fixes the scale of the sector, not w. In the task market, zero profit holds opportunity by opportunity, w_j = s_j − C(D) under non-autonomy, independent of how many opportunities a holder handles. At most H < μ opportunities are staffed, so r* = 0 as in Proposition 4(i).\n\n**Gain.** Γ(y) = EV_cons(y) + τ(y)[φΔw_P + (1 − φ)Δw_T(y)], i.e. g(y) = φΔw_P + (1 − φ)Δw_T(y).\n\n**Claim.** Under the maintained assumptions (R(y_L) ≤ P_0, positive n* denominator, 0 < φ < 1, μ > H) and C1–C5 as in R1.8, Γ(y)/y is non-increasing and T_1 ≥ T_0. For each of C1–C5, taken as a whole, there is a parameterisation in which the others hold, that condition fails, and the conclusion fails. Weak necessity is not shown for the separate items of a condition (e.g. default routing or pooled liability within C2).\n\n*Proof.* Steps 1, 2, 4, 5, 6 of R1.8 are unchanged. Step 3 becomes: Δw_T(y) = (1 − z(y))Δz_A + ΔC ≥ 0 is non-increasing and Δw_P ≥ 0 is constant; multiplying by the positive constants φ and 1 − φ preserves sign and monotonicity, so g(y) = φΔw_P + (1 − φ)Δw_T(y) ≥ 0 is non-increasing. Step 4 then applies to g and h = τ/y. Feasibility is as above. ∎\n\n**Numerical record (φ = 0.5 unless stated; μ = 50, baseline H = 0.127).**\n- Baseline: all conditions hold; Γ/y non-increasing at every grid point; also at φ = 0.25 (H = 0.191) and φ = 0.75 (H = 0.064).\n- 400 random draws: 255 satisfy all conditions, and the conclusion holds in all 255.\n- Necessity rows, share of increasing grid steps: C1 0.0225, C2 0.6368, C3 (autonomy) 0.1286, C3 (C(D⁰) ≥ s⁰_min) 0.0585, C3 (z decreasing) 0.7634, C4 0.0540; T_1 in the C5 rows 0.672 (s = 0) and 0.720 (χ = 0.9).\n- In the four rows targeting C1 and C3, holdings are twice their round-1 values (τ = 0.4y², 4y^{1/2}, 4y, 20y). Since (1 − φ)·2τ = τ at φ = 0.5, and in these rows either Δw_P = 0 or both wage terms are halved, Γ(y) in these rows equals its round-1 value. At round-1 holdings, the two rows in which only z_A or only D changes no longer break the conclusion at φ = 0.5, because the halved factor part is dominated by the consumer part; this is a property of the constructions' scale, not of the conditions.\n\n### R2.2 Corollary 1(i)\nLet demand be constant at a > 0. A positive stationary share requires χ ≥ 1. If χ > 1, the stationary share is unique, T = a. If χ = 1, every T ∈ (0, a] is stationary, and the share stays at min{a, T_0}.\n*Proof.* Stationarity: T = min{a, χT}. χ < 1 and T > 0 give T ≤ χT < T. χ > 1 and 0 < T < a require T = χT, impossible; T = a is stationary since χa > a. χ = 1: min{a, T} = T on (0, a], and T_t = min{a, T_0} for t ≥ 1. ∎ (ii)–(iv) unchanged.\n\n### R2.3 Proposition 3(a) and (c)\n(a) Add the premise p_e < P_0. Without it the necessity half fails: if p_e ≥ P_0, no entrant buys and incumbents gain nothing, so EV/y ≡ 0 is non-increasing while p_e > (1 − η)R(y_L). GPT's counterexample (P_0 = 2, p_e = 3) is of this kind; the code checks P_0 = 2.5, p_e = 3.\n(c) Admissible part of (R − πL, R − θπL]: the interval itself if R − πL ≥ 0; [0, R − θπL] if R − πL < 0. At R = θπL it is {0}.\n\n### R2.4 Proposition 4(i)\n∂w_j/∂z_A = 1 − z_j ≥ 0, with equality only at z_j = 1: no employed wage falls, and wages of employed holders with z_j < 1 rise.\n\n### R2.5 Proposition 6: discount factor\nβ ∈ (0,1) is the discount factor per generation, now defined in §3.6 of the paper. The strict inequalities a* > a^m and loss > 0 require β > 0 (with W > 0, p_c < κ̄, g > 0).\n\n### R2.6 Proposition 2: tie rule\nIf r_h = k_t, holders supply. With r_h = k_t ≤ w the price is k_t and the holders' premium is 0 under either assignment.\n"
]
]''')
buf = {}
for rel, old, new in EDITS:
    t = buf.get(rel, (R / rel).read_text())
    if old == "__APPEND__":
        t = t.rstrip("\n") + new
    else:
        n = t.count(old); assert n == 1, (rel, n, old[:80]); t = t.replace(old, new)
    buf[rel] = t
for rel, t in buf.items():
    (R / rel).write_text(t)
print("REVISE ROUND2 D OK")
