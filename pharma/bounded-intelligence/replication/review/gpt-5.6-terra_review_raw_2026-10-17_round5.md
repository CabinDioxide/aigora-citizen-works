> Public excerpt, 2026-10-17. This file contains only the referee report that gpt-5.6-terra wrote at the end of its run (Codex command line, read-only sandbox), reproduced verbatim. The rest of the run record (the model reading working files) is kept by AIgora Society and not published. Absolute local file paths in the report were replaced with `replication/`, `<project-root>/` or `<home>/`.

# Referee report

I find 13 flags: 4 major and 9 minor. No files were modified.

## A. Flags

| Location | Quoted sentence | Relies on | Problem | Severity | Corrected wording |
|---|---|---|---|---|---|
| `main.tex:216` | “...and some low-verification households do not buy at all.” | Prop. 3(b) | Rising verification capacity does not by itself imply exclusion. Exclusion occurs only where \(R(y)<p_e(y)\). | Minor | “Households for which \(R(y)<p_e(y)\) are excluded, and any exclusion is concentrated at low verification capacity.” |
| `main.tex:222` | “These are the orders of magnitude at which the verification channel is visible in the field.” | Prop. 3(d); Penda and Otis evidence | Neither study identifies the model’s intermediated-verification channel: Penda has AI checking clinicians, not people checking AI; Otis identifies selection/implementation heterogeneity. | Minor | “These are empirical magnitudes associated with heterogeneous AI use and workflow checking; they are consistent with, but do not identify, the verification channel.” |
| `main.tex:249` | “Under non-autonomy the holder is the bottleneck, so every saving in packaging cost reaches her...” | Prop. 4(i) | The result applies to holders who remain employed. Holders below the employment threshold do not receive the stated marginal wage gain. | Minor | “Under non-autonomy, every employed holder who remains employed receives a saving in packaging cost...” |
| `main.tex:259` | “If the assistant could contact patients and adjust treatment on its own, part (ii) would apply...” | Prop. 4(ii) | Autonomy alone is insufficient. Part (ii) also requires \(C(D)<z_A\). The preceding claim that workers gain also needs the non-autonomous employment condition. | Major | “If it could act autonomously and \(C(D)<z_A\), part (ii) would apply: lower packaging cost would raise the compute rental rather than wages.” |
| `main.tex:281` | “A supplier with market power keeps part of every cost decline.” | Prop. 5 | The maintained range permits \(\rho=1\), in which all of a marginal cost decline passes through. | Minor | “When \(\rho<1\), the supplier keeps part of a marginal cost decline.” |
| `main.tex:311` | “Under a uniform \(G\), the omitted apprenticeships form a band of width \(\beta W\) ... and the welfare loss is the triangle...” | Prop. 6 | This omits the interior condition \(p_c+\beta W\le\bar\kappa\). Without it, the band is truncated at \(\bar\kappa\) and the stated triangle formula is false. | Major | “If \(G\) is uniform and \(p_c+\beta W\le\bar\kappa\), the omitted band has width \(\beta W\) and the loss is \((\beta W)^2/(2\bar\kappa)\).” |
| `main.tex:329` | “With \(\chi\) close to one it binds for several cohorts...” | Cor. 1(ii)–(iii) | Proximity of \(\chi\) to one alone does not imply persistence. The relevant condition is \(\chi a_L<a_H\). | Minor | “When \(\chi a_L<a_H\), capacity binds beyond the first cohort; recovery is slower the closer \(\chi>1\) is to one.” |
| `main.tex:341` | “...the private value of a trainee, \(p_c\) in the model, falls.” | Prop. 6 | \(p_c\) is the firm’s price of the AI alternative for completing the entry task, not the private value of a trainee. | Major | “...the cost of the AI alternative, \(p_c\), falls, reducing firms’ demand for trainees.” |
| `main.tex:341` | “If each experienced worker can supervise only one or two trainees, a year...” | Running-example undertaking | The introduction promises that the illustration “carries no numbers of its own.” “One or two” and “a year” are invented clinic magnitudes/time units. | Minor | “If mentor capacity is limited, a period with no trainee hiring leaves fewer mentors later...” |
| `main.tex:420` | “The clinic’s AI assistant spreads gains toward poorer patients and workers, in the model, when the following hold.” | Prop. 8 | The listed clinic conditions are not the full sufficient set. It omits, among other items: C1’s \(\tau(y)/y\) condition; C2(d3) for self-verifiers; C3’s \(C(D^0)<s^0_{\min}\); and C5’s subsidy \(s\ge\bar p-p_c\) and \(\chi\ge1\). Pooling also changes the relevant loss term to \((1+\ell)L\). | Major | “This illustration satisfies Prop. 8 only if the full formal C1–C5 conditions hold, including the holdings gradient, residual self-verifier condition, employment threshold, subsidy, and mentor-capacity conditions. The clinic description does not establish them.” |
| `main.tex:444` | “Holders earn \((1-z_A)z_j\), which ... falls as \(z_A\) rises.” | Prop. 4(ii) | The wage is constant at zero for \(z_j=0\); it weakly, not strictly, falls for all holders. | Minor | “Holders earn \((1-z_A)z_j\), which is independent of \(D\) and weakly falls with \(z_A\) (strictly for \(z_j>0\)).” |
| `main.tex:446` | “Condition 4 then fails first in low-density catchments.” | Prop. 5 | A higher access fee raises \(n^*(A)\), but condition 4 fails only if the new threshold exceeds a catchment’s \(n\). | Minor | “If the higher threshold is crossed, condition 4 fails first in low-density catchments.” |
| `main.tex:450` | “In each case the clinic’s gains would cease to be guaranteed in the model.” | Props. 2, 4, 5, 8 | A fee increase caused by a usage-fee cap does not necessarily violate \(n\ge n^*(A)\); the guarantee is lost only if a formal condition actually fails. | Minor | “Each force can remove the guarantee if it causes the corresponding formal condition to fail—for example, if the access fee pushes \(n\) below \(n^*(A)\).” |

All newly added numerical magnitudes other than the invented clinic capacity/time wording above are either reproducible from `output/numbers.json` or attributed to a cited page.

## B. Derivation checks

The added derivations are algebraically consistent with Appendix A except for the missing support condition at line 311.

- `128–132`: CES unit-cost, value-share, elasticity, and ceiling calculations are correct. The \(p_c\ge\alpha\) qualification is properly retained.
- `157`: Bertrand pricing in Regime C is consistent with the proof.
- `190–194`: The entrant derivative and three-term decomposition match Lemma 1.
- `243–247`: The autonomy derivation matches Proposition 4.
- `277–281`: Pass-through, envelope-theorem, domestic-welfare, and access-fee formulas match Proposition 5.
- `311`: needs the interior qualification identified in Section A.
- `363–367`: the Arrow–Pratt expansion is correct as a second-order small-loss approximation; it should not be read as an exact \(L^2\) relationship.

The package’s own derivation-check script could not be rerun in this environment because `sympy` is unavailable; its recorded log says it previously completed 22 checks.

## C. Running clinic example

Every clinic occurrence is labelled illustrative, including the introduction and the condition, liability, synthesis, and countervailing-force sections.

The Penda mapping is correctly qualified at `226` and `535`: Penda has AI reviewing clinicians’ work, with clinicians making final decisions; it is not evidence that a person verifies AI output.

Problems remaining:

- `259` misapplies the autonomy proposition without \(C(D)<z_A\).
- `341` misidentifies \(p_c\) and attaches invented capacity/time numbers.
- `420` omits several joint-sufficiency conditions.
- `450` treats an access-fee rise as automatically removing the guarantee.

## D. Countervailing forces

The section generally names the relevant proposition or citation. The remaining problems are:

- `444`: strict wage decline should be weak at \(z_j=0\).
- `446`: higher access fees raise the threshold but do not automatically make C4 fail.
- `450`: each force can break the guarantee, but only if it causes the relevant condition to fail.

## E. Frozen parts

`process/round5/check_frozen.py` confirms byte-identical:

- 8 propositions, 1 lemma, and 1 corollary
- Appendix A proofs
- 2 tables and 7 figures
- abstract and title page
- included tables and graphics references

The supplied diff changes only prose in `main.tex` plus documentation; no frozen formal result, proof, table, figure, or abstract changed.

**Total: 4 major flags; 9 minor flags.**
