> Public excerpt, 2026-10-16. This file contains only the referee report that gpt-5.6-terra wrote at the end of its run (Codex command line, read-only sandbox), reproduced verbatim from its heading to its last line. The rest of the run record (the model reading the authors' and the commissioning party's working files) is kept by AIgora Society and not published. Absolute local file paths in the report were replaced with `replication/`, `<project-root>/` or `<home>/`.

# Referee report: revised formal-results audit

## A. Status of prior problems and revision requests

| Item | Status | Audit finding |
|---|---|---|
| Proposition 8: heterogeneous task-wage changes | Fixed but introduces a new error | Adding monotone \(z(y)\) correctly makes \((1-z(y))\Delta z_A\) non-increasing, and the non-negative-product argument is valid. But the new “joint economy” double-uses the same human/unit of \(t\) in two sectors without a time, quantity, or market-clearing constraint. See [main.tex](replication/paper/main.tex:261) and [proof](replication/paper/main.tex:508). |
| Proposition 8: access fee should use \(F+A\) | Fixed | Proposition 5 defines \((d2_A)\) correctly and Proposition 8 invokes it. [main.tex](replication/paper/main.tex:195) |
| Proposition 8: code coverage / weak necessity | Partly fixed | Eight constructions are now called and reported. Within the code’s own additive accounting, they do make only the targeted aggregate C1–C5 condition fail. They do not validate a coherent joint economy, nor separately establish necessity of default routing or pooled liability. [prop8.py](replication/code/prop8.py:112) |
| Proposition 6: support, positivity, interior conditions | Fixed but introduces a new error | \(W>0\), \(p_c<\bar\kappa\), positive density, capacity slackness, and the uniform interior condition are now present. But \(\beta>0\) is not defined or assumed in the paper’s apprenticeship model, although strict results require it. [main.tex](replication/paper/main.tex:207) |
| Proposition 6: mentor capacity | Fixed | Capacity slackness is correctly required for the proposition. The new corollary, however, has a separate error in part (i). |
| Proposition 2: no-trade case / surplus claim | Fixed | The no-trade case is correctly separated and the unsupported downstream-surplus sentence is gone. [main.tex](replication/paper/main.tex:128) |
| Proposition 3: \(\pi>0\), regularity, domain, existence form | Partly fixed | The main requested repairs are made. However, part (a) still omits \(p_e<P_0\), required by its proof and its iff claim; part (c)’s stated admissible interval mishandles the \(p=0\) boundary. |
| Proposition 7: strictness and income-varying \(\pi\) | Fixed | The experience-rated interpretation is coherent: pooling removes \(RP\), while \((1+\ell)\pi(y)L\) retains an expected-loss gradient handled by Proposition 3. [main.tex](replication/paper/main.tex:247) |
| Proposition 1(iv): exact EV | Fixed | Quasilinearity, \(\tau\ge0\), and a strict positive common wage increment are stated. |
| Proposition 5: first-order and fixed access fee | Fixed | Both qualifications are now in the statement. |
| Pointwise progressivity check | Fixed | Code and text now distinguish the quintile index from the pointwise definition; the reported pointwise CSVs agree with the text. |

## B. Proposition-by-proposition audit

### Proposition 1 — correct

**Details.** Parts (i)–(iii) and the revised part (iv) are correct under the stated domain and quasilinearity. The previous exact-EV omission is repaired.

**Severity.** Minor.

### Proposition 2 — correct with missing assumption

**Details.** The no-trade branch and price formula are now correct. At \(r_h=k_t\), “holders supply” requires a tie-breaking or allocation convention; the price and premium conclusions survive.

**Severity.** Minor.

### Lemma 1 — correct

**Details.** The derivative conditions and continuity argument are valid under the stated continuous, piecewise-\(C^1\), non-increasing schedule and universal purchase assumptions.

**Severity.** Minor.

### Proposition 3 — incorrect

**Details.**

- Part (a) is false on its stated domain because it needs \(p_e<P_0\), which its proof silently assumes at [line 483](replication/paper/main.tex:483). Counterexample: let \(P_0=2\), \(p=0.5\), \(e(1-v)L=2.5\), so \(p_e=3>P_0\), with some households rationed before AI. No household uses AI; \(EV/y=0\) everywhere and is non-increasing, yet \(p_e\le(1-\eta)R(y_L)\) fails.
- Part (c) correctly adds \(\pi>0\), but its “admissible part” is wrong at the boundary \(R=\theta\pi L\). The original interval contains \(p=0\), whereas the printed expression \((\max\{0,R-\pi L\},R-\theta\pi L]=(0,0]\) excludes it. [line 162](replication/paper/main.tex:162)
- Parts (b), (d), and the existential reformulation in (e) are otherwise repaired correctly.

**Severity.** Major for (a); minor for the boundary error.

### Proposition 4 — incorrect

**Details.** With \(z_j=1\), an increase in \(z_A\) changes \(w_j\) by \(1-z_j=0\). The proposition says “all employed wages rise,” but establishes only weak increase. [line 184](replication/paper/main.tex:184)

**Severity.** Minor.

### Proposition 5 — correct

**Details.** The first-order nature of the pass-through result and the per-intermediary fixed-fee interpretation of \(A\) are now explicit.

**Severity.** Minor.

### Proposition 6 — correct with missing assumption

**Details.** Conditional on slack mentor capacity, the market cutoff, efficient cutoff, loss integral, subsidies, and uniform closed forms are correct. The revision correctly avoids claiming that total value \(p_c+\beta W\) rises.

The paper does not define or assume \(\beta\in(0,1)\) in its operative model section. Since \(W>0\) alone does not imply \(\beta W>0\), the strict wedge and loss claims need \(\beta>0\). The older derivations define it, but the revised paper’s model text does not.

**Severity.** Minor.

### Corollary 1 — incorrect

**Details.** Part (i) is false for \(\chi=1\). If \(a=0.8\), \(\chi=1\), and \(T=0.5\), then
\[
T=\min\{a,\chi T\}=\min\{0.8,0.5\}=0.5.
\]
Thus every \(T\in(0,a]\) is stationary; it is not true that “with \(\chi\ge1\) it is \(T=a\).” [lines 225–231](replication/paper/main.tex:225)

Parts (ii)–(iv) are correct given \(T_0=a_H\). The recovery time and printed numbers are correct:

- \(\chi=1.2\): recovery after one further cohort; shortfall \(0.128\).
- \(\chi=1.05\): four further cohorts; cumulative shortfall \(0.303596\), printed as \(0.30\).
- \(\chi=1\): \(11\times0.128=1.408\), printed as \(1.41\).
- \(\chi=0.95\): cohort 11 share \(0.4024\), printed as \(0.40\).

The scripts do not test the false stationary-share statement.

**Severity.** Major.

### Proposition 7 — correct

**Details.** The revised experience-rated reading is internally coherent. Proposition 3 handles the surviving expected-loss slope after pooling; Proposition 7 no longer claims that pooling removes that slope.

**Severity.** Minor.

### Proposition 8 — incorrect

**Details.**

The algebraic sufficiency proof is correct conditional on an additional, nonstandard accounting assumption:

- \(g(y)\ge0\) and non-increasing follows from C3.
- \(\tau(y)/y\ge0\) and non-increasing follows from C1.
- The product argument is correctly signed.
- Replacing \(L\) by \((1+\ell)L\) in the verification conditions is consistent with experience-rated pooled liability.

However, the alleged joint economy is not internally consistent with the component models.

- Proposition 4 gives each human one unit of time and one task opportunity. Proposition 8 then has the same unit of \(t\) both supply the need-solving sector and handle one full task-market opportunity, with no time allocation or non-rival-capital assumption. [joint-economy definition](replication/paper/main.tex:261)
- The mass \(H\) in Proposition 4 is not linked to \(\tau(y)\), whose units can be fractional and whose aggregate is not defined. Nor is compute capacity \(\mu>H\) carried into the joint economy.
- \(D\), described as the density of the conversion layer, is shocked independently of the same holders whose distribution is \(\tau(y)\). There is no market-clearing relation.
- Consumer AI availability at posted price \(p\) is introduced independently of the changes in \(p_c,z_A,D\); the paper does not specify how a single AI improvement jointly generates them.

Thus this is an additive bookkeeping identity, not a coherent economy combining Propositions 1 and 4. The code verifies that bookkeeping identity, not the stated economic synthesis. The eight necessity examples are genuine under that code’s definitions, but not genuine parameterisations of a closed joint economy.

**Severity.** Major.

## C. Claims versus results

The abstract is **178 words** under ordinary hyphenated-word counting.

The revision successfully removes the earlier claim that intermediary density alone restores progressivity. The introduction now correctly says routing, density, and the residual-gradient condition are jointly required.

The remaining overclaims are:

- The abstract, introduction, and conclusion say the five conditions plus supporting condition are jointly sufficient “in one economy.” That is not established because Proposition 8’s combined economy lacks feasible time allocation and market clearing.
- “Each condition can fail alone and break the result” is too broad if read as applying to every listed element. The code shows failures of the aggregate C1–C5 bundles. It does not show that default routing alone or pooled liability alone is weakly necessary; indeed the authors state that voluntary routing does not break their calibration.
- “Across generations” is narrowed to the next cohort in the introduction and is appropriately limited there. The broader persistence claim follows from the specified recurrence, but Corollary 1(i)’s steady-state characterization is false.

The printed Section 4 numbers match `numbers.json` to stated rounding, including the verification figures, \(n^*=49.27\), apprenticeship values, liability values, and mentor-capacity paths. The pointwise sensitivity CSVs also support the reported “\(n\ge50\)” and “\(n\le25\)” statements.

## Three most important remaining problems

1. Proposition 8 does not define a feasible joint economy: it double-uses human/\(t\) capacity and omits market clearing.

2. Corollary 1(i) is false at \(\chi=1\); stationary shares need not equal demand.

3. Proposition 3(a)’s iff result omits \(p_e<P_0\), making it false on the stated parameter space.
