> Public excerpt, 2026-10-16. This file contains only the referee report that gpt-5.6-terra wrote at the end of its run (Codex command line, read-only sandbox), reproduced verbatim from its heading to its last line. The rest of the run record (the model reading the authors' and the commissioning party's working files) is kept by AIgora Society and not published. Absolute local file paths in the report were replaced with `replication/`, `<project-root>/` or `<home>/`.

# Referee report: formal-results audit

I read all requested files, including the full LaTeX source, derivations, verification code/output, calibration code, parameters, and numerical output. The verification script’s “29/29” result does not verify Proposition 2 or Proposition 8.

## Proposition 1 — Value shifts to the conversion input

**Restatement:** With CES complementarity (\(\sigma<1\)), a lower cognition price raises the return and value share of conversion input \(t\); proportional factor-income gains are progressive iff \(\tau(y)/y\) is non-increasing.

**Verdict:** Correct with missing assumption.

**Details:**

- Parts (i)–(iii) follow correctly from the unit-cost equation, conditional on \(0<p_c<\alpha^{-\sigma/(1-\sigma)}\).
- Part (iv) correctly establishes proportionality of the *factor-income change* to \(\tau(y)/y\), given a strict price decline.
- The proof’s claim that this is the “exact equivalent variation” uses an unstated quasi-linearity/no-income-effects assumption, plus the assumption that the household actually receives the full factor-income increment as a transferable income change. “The price of \(S\) fixed” alone does not establish this.
- The “if and only if” in (iv) also implicitly requires \(\tau(y)\ge0\) and a strictly positive common \(\Delta w\). These are economically natural but unstated.

**Severity:** Minor.

## Proposition 2 — The premise decides who receives the premium

**Restatement:** In the dispersed regime holders receive the rising factor return; in the codified regime Bertrand competition limits their premium and, as replication cost tends to zero, eliminates it.

**Verdict:** Incorrect.

**Details:**

- The proof uses the price formula
  \[
  P_C=\min\{w,\max\{r_h,k_t\}\}.
  \]
  This is not a market-clearing Bertrand price when both suppliers’ costs exceed willingness to pay \(w\). In that case there is no trade, not supply at \(w\).
- Concrete counterexample: let \(\alpha=\sigma=0.5\), \(p_c=1\), so \(w(p_c)\simeq0.1716\). Let \(r_h=k_t=1\). The displayed formula gives \(P_C=0.1716\), but neither holders nor the asset owner supplies at that price. The service market shuts down.
- The proof therefore needs an explicit participation condition, such as \(\min\{r_h,k_t\}\le w(p_c)\), or a separate no-service case.
- The statement that “the remainder \(w(p_c)-P_C\) accrues to users” is not derived from the CES production model. It presumes a downstream service-demand and surplus-allocation model not stated here.
- Part (iii) additionally relies on the external property-rights/bargaining premise acknowledged in the derivations, rather than following from the stated Regime H/C assumptions.

**Severity:** Major.

## Lemma 1 — Progressivity of an effective-price schedule

**Restatement:** If every household buys the AI channel and faces a continuous non-increasing piecewise-\(C^1\) effective-price schedule, \(EV(y)/y\) is non-increasing iff the entrant and incumbent derivative inequalities hold.

**Verdict:** Correct.

**Details:**

- The differentiation for entrants and incumbents is correct.
- Continuity at \(R(y)=P_0\) is correctly used.
- The lemma is conditional on every household actually choosing the AI channel. It cannot be applied to a schedule with non-purchase corners without separately checking those corners.

**Severity:** Minor.

## Proposition 3 — Verification channel

**Restatement:** Heterogeneous verification can make AI gains regressive; overconfidence can create losers; intermediated verification can restore pointwise progressivity under routing, cost-density, and residual-gradient conditions.

**Verdict:** Correct with missing assumptions, except part (e), which is overstated.

**Details:**

- Part (a) is correct when “some households are rationed before AI” means \(y_L<y_0\). The proof correctly derives the condition \(p_e\le(1-\eta)R(y_L)\).
- Part (b) correctly applies Lemma 1 where \(v(y)\) is differentiable and households choose AI. The proposition needs the lemma’s regularity conditions: continuous, non-increasing, piecewise-\(C^1\) \(p_e(y)\). Merely stating \(v'\ge0\) is not enough.
- Part (c) is false as written because it omits \(\pi(y)>0\). Counterexample: \(v(y)=1\), \(e>0\), and \(\theta(v(y))=0.5\). Then \(\pi=0\) and the alleged interval is \((R,R]\), which is empty. The derivations correctly include \(\pi(y)>0\); the proposition in the paper does not.
- Part (c) also requires that the stated interval intersect the admissible posted-price domain, normally \(p\ge0\). Otherwise its mathematical interval can contain only negative prices.
- Part (d)’s result is correct only jointly under (d1), (d2), and (d3), with a positive denominator for \(n^*\). A density threshold alone does not restore progressivity.
- Part (e) is too strong. The proof establishes that perceived verification benefits fall short of true benefits. It does **not** prove that, for every given fee \(q\), “whenever \(\theta<1\), there are households for whom intermediation is efficient but not bought.” Counterexample: \(q=0\); every household for whom intermediation is beneficial buys it. If \(q\) exceeds all true benefits, nobody is efficiently served. The correct statement is existential: for suitable \(q\) between perceived and true benefits, under-demand occurs.
- The proof’s voluntary-market/default comparison is otherwise sound.

**Severity:** Major for the overstatement of part (e) and the omitted \(\pi>0\) condition; minor for regularity omissions.

## Proposition 4 — Packaging cost and autonomy

**Restatement:** With non-autonomous AI and excess compute, denser conversion layers raise and compress human wages; with autonomous AI and sufficiently low packaging cost, compute captures the gain and human wages are density-invariant.

**Verdict:** Correct with missing assumption.

**Details:**

- The wage algebra and comparative statics are correct.
- The proof correctly obtains \(\partial w_j/\partial D=c_1/D^2\) for currently employed workers and wage-ratio compression where both workers are employed.
- “A higher density raises every employed wage” should be read locally for workers remaining employed; at an employment threshold the wage function has a kink.
- The autonomous result requires enough total compute to employ all human-assisted workers and still support the residual AI-only sector. The text gives \(\mu>H\), which is sufficient, but this capacity allocation logic is not made explicit in the proposition.
- The formal result is narrower than the prose prediction: it is a partial-equilibrium opportunity-creation model, not a general empirical prediction that intermediary density causally raises employment.

**Severity:** Minor.

## Proposition 5 — Pass-through, leakage, and access fees

**Restatement:** A marginal-cost reduction benefits consumers by pass-through, benefits the supplier by the envelope theorem, and fixed intermediary access fees raise the verification-density threshold.

**Verdict:** Correct with missing assumption.

**Details:**

- The first-order pass-through and envelope-theorem calculations are correct.
- “Households gain \(\rho Q|dk|\)” and the domestic-welfare expression are local first-order statements. They should include \(+o(|dk|)\), rather than read as exact finite-change formulas.
- The access-fee formula requires \(A\) to be a fixed fee per intermediary/catchment, not a per-client fee. This is used in the proof but not stated in the proposition.
- The denominator must be positive, as the paper notes.
- If \(p\) and \(A\) are jointly chosen, the paper correctly notes that the comparative static is ambiguous.

**Severity:** Minor.

## Proposition 6 — Apprenticeship externality

**Restatement:** Credit-constrained novices cannot finance portable training, so firms provide too little apprenticeship after AI lowers entry-task costs; a subsidy restores efficient training and, under uniform \(G\), the wedge rises as AI gets cheaper.

**Verdict:** Incorrect as stated.

**Details:**

- The firm’s private cutoff \(\kappa\le p_c\) and planner’s cutoff \(\kappa\le p_c+\beta W\) are correct under the intended assumptions.
- The proposition omits conditions required for strict inequality and positive loss:
  - \(W(p_c)>0\);
  - \(p_c<\bar\kappa\);
  - training capacity/support conditions ensuring that the relevant cutoffs are not saturated.
- Concrete counterexample: take a uniform \(G\) on \([0,1]\), \(p_c=2\), and \(W>0\). Then \(a^m=G(2)=1\), \(a^*=G(2+\beta W)=1\), and the asserted welfare loss is zero, not strictly positive.
- The proof assumes that “alongside an expert” imposes no mentor-capacity constraint. In an overlapping-generations apprenticeship model, a cohort cannot generally train an arbitrary mass of young workers unless each old expert can supervise arbitrarily many novices. This is a central missing assumption. Without it, the claim that the steady-state expert share equals the contemporaneous apprenticeship rate is not established.
- The paper repeatedly says that “the social value of each apprenticeship rises as AI cheapens entry tasks.” The formal result establishes that the external future premium \(\beta W(p_c)\) rises as \(p_c\) falls. It does not generally establish that total social surplus \(p_c+\beta W(p_c)\) rises: its derivative is \(1+\beta W'(p_c)\), whose sign is not established.
- The stated subsidy \(s=\bar p-p_c\) preserves the pre-AI training rate only if the relevant CDF arguments remain in its non-saturated range.

**Severity:** Major.

## Proposition 7 — Liability

**Restatement:** With poorer households more risk-averse, self-insurance produces a regressive risk premium; pooling removes that premium.

**Verdict:** Correct with missing assumption.

**Details:**

- CARA risk premia increase in risk aversion for a nondegenerate loss lottery; the comparative static in \(\lambda(y)\) is correct.
- Strictness requires \(0<\pi<1\) and \(L>0\). If \(\pi=0\), \(RP(y)=0\) for all \(y\), contradicting “strictly decreasing.”
- “Under pooling, the term drops out of the gradient conditions” requires \(\pi\) and the loading to be income-invariant. Earlier in the model \(\pi(y)=e(1-v(y))\), which is income-dependent. If pooled premiums retain this household-specific \(\pi(y)\), the pooled expected-loss term still slopes with income and does not drop out.
- Thus the proof establishes the stated conclusion only under an additional constant-risk-exposure assumption for this section.

**Severity:** Minor.

## Proposition 8 — Joint sufficiency; weak individual necessity

**Restatement:** Conditions C1–C5 are jointly sufficient for current relative gains to be progressive and for the next cohort’s \(t\)-share not to fall; each condition can fail alone in an adverse example.

**Verdict:** Incorrect.

**Details:**

- The core proof step is false: C3 does **not** make the wage change \(\Delta w\) common across households.
- In Proposition 4, under non-autonomy,
  \[
  \Delta w_j=(1-z_j)\Delta z_A
  \]
  for a change in \(z_A\). This explicitly varies with \(z_j\). Changes in \(D\) are common only while workers remain employed, but the proposition combines both mechanisms and never states that the relevant shock is a common \(D\)-change.
- C3’s condition \(C(D)<s_{\min}\) ensures employment; it does not make wage changes common. The proof then incorrectly replaces the factor component with \(\Delta w\,\tau(y)/y\).
- Counterexample: let low-income holders have \(z=1\), high-income holders have \(z=0\), and \(\tau(y)/y\) be constant. A rise in \(z_A\) yields \(\Delta w=0\) for low-income holders and \(\Delta w>0\) for high-income holders. All workers can remain employed and C1/C3 can hold, but factor-income gains relative to income rise with income. Scale \(\tau\) sufficiently to dominate any progressive consumer component.
- The synthesis also combines the \(p_c\)-based factor-price model of Proposition 1 with the \(z_A,D\)-based wage model of Proposition 4 without specifying a joint economy or a mapping from the AI change in one block to that in the other.
- C4 refers to preserving (d2) while also using \(n^*(A)\), but (d2) as written contains \(F/n\), not \((F+A)/n\). The proposition needs the modified access-fee version of (d2).
- The “weak individual necessity” claim cannot be verified from the supplied verification script: it does not run `necessity_examples.py`, and that file was not among the supplied requested materials. The script checks no Proposition 8 result.

**Severity:** Major.

## Verification script and output

The reported `CHECKS 29/29 COMPLETE` is not an independent validation of all formal claims.

- It checks no part of Proposition 2.
- It checks no Proposition 8 sufficiency or necessity construction.
- Its Proposition 3(d) test evaluates two selected numerical cases; it does not prove the stated theorem.
- Its Proposition 6 test verifies the uniform-\(G\) algebra but not the missing support, positivity, or mentor-capacity conditions.
- Its Proposition 7 test assumes a nondegenerate fixed-risk lottery and therefore does not test the income-dependent-\(\pi\) inconsistency.

## Numerical illustration

The printed Section 4 figures and values match `numbers.json` to the shown rounding:

- Proposition 1: 0.29, 0.78, 11.7.
- Proposition 3: 1.37, 0.24, \(-0.09\), 2.53; 8% exclusion/losses; \(n^*=49\); 75% and 12.5% sensitivity shares.
- Proposition 4: 1.73 to 1.43; costs 0.35 to 0.125.
- Proposition 6: \(p_c=0.672\), \(a^*=0.763\), loss 0.0042, subsidies 0.091 and 0.128.
- Proposition 7: 1.94 and 0.06.

The code uses the stated functional forms and parameters in `params.csv`, including the CES wage, lognormal income grid, linear rank-based verification schedule, uniform-\(G\) apprenticeship illustration, and CARA risk premium.

However:

- The illustration’s “progressivity” summary is a bottom-quintile/top-quintile mean ratio. The model’s definition is pointwise non-increase of \(EV(y)/y\). A ratio above one does not establish the formal definition.
- Accordingly, the statement that progressivity “fails only” in the \(n=10\) column is a statement about that summary index, not a verification of Proposition 3(d)’s pointwise condition.
- The density illustration satisfies the intended baseline routing construction, but does not show that density alone restores progressivity; it also relies on default routing and the residual self-verification schedule satisfying (d3).
- The liability calculation uses \(\pi(y)=e[1-v(y)]\), while Proposition 7’s pooling conclusion needs income-invariant pooled risk exposure to remove the gradient term.
- The apprenticeship calculations are internally consistent with the code’s unconstrained mentor-capacity interpretation, but do not cure the missing OLG matching assumption.

## Claims in the abstract and introduction that exceed the proved results

- “We derive five conditions under which gains are inclusive” is too strong because Proposition 8 is invalid as stated.
- “Intermediated verification with scale economies restores progressivity above a density threshold” is too broad. The formal result additionally needs routing/defaults under bias, a positive denominator, and the residual-gradient condition (d3).
- “When AI makes entry tasks cheap, market apprenticeship falls below the social optimum” needs \(W>0\), unsaturated training support, and unlimited or specified mentor capacity.
- “It does so precisely as the social value of each apprenticeship rises” overstates Proposition 6. The proof establishes that \(\beta W\), the external future premium, rises; it does not establish that total social surplus \(p_c+\beta W\) rises.
- The conclusion’s statement that gains are inclusive under “five conditions and one supporting condition” repeats the invalid Proposition 8 synthesis.
- The introduction’s claim that the model links apprenticeship to reproduction “across generations” is unsupported without a mentor-capacity/matching law of motion.

## Three most important problems

1. **Proposition 8 is false:** non-autonomy does not make wage changes common across workers, so C1 and C3 do not establish progressive factor-income gains.

2. **The apprenticeship OLG result lacks essential conditions:** it omits mentor capacity, \(W>0\), and non-saturation assumptions; its strict efficiency and welfare-loss claims are false on the stated parameter space.

3. **The intermediary-density claim is overstated:** density is not sufficient by itself; Proposition 3(d) also requires routing/defaults and the residual self-verification gradient condition, while Proposition 3(e) overclaims under-demand for every fee.
