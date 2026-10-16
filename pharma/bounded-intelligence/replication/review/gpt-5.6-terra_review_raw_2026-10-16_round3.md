> Public excerpt, 2026-10-16. This file contains only the referee report that gpt-5.6-terra wrote at the end of its run (Codex command line, read-only sandbox), reproduced verbatim from its heading to its last line. The rest of the run record (the model reading the authors' and the commissioning party's working files) is kept by AIgora Society and not published. Absolute local file paths in the report were replaced with `replication/`, `<project-root>/` or `<home>/`.

# Referee report — second revision

## A. Status of prior issues and requested items

| Issue | Status | Evidence |
|---|---|---|
| Proposition 1(iv): exact EV needed quasilinearity and fixed holdings | Fixed | Quasilinearity, fixed \(\tau\), and the strict price decline are now explicit. [main.tex:117](replication/paper/main.tex:117) |
| Proposition 2: no-trade case | Fixed | Separate no-trade case when both costs exceed willingness to pay. [main.tex:131](replication/paper/main.tex:131) |
| Proposition 2: tie at \(r_h=k_t\) | Fixed | The statement and proof allocate the tie to holders and give zero premium. [main.tex:132](replication/paper/main.tex:132), [main.tex:476](replication/paper/main.tex:476) |
| Proposition 3(a): omitted \(p_e<P_0\) premise | Fixed | Added to the proposition and used correctly in the proof. [main.tex:160](replication/paper/main.tex:160), [main.tex:485](replication/paper/main.tex:485) |
| Proposition 3(b): schedule regularity | Fixed | Continuity and piecewise-\(C^1\) conditions are stated. [main.tex:161](replication/paper/main.tex:161) |
| Proposition 3(c): \(\pi>0\), non-negative-price domain, zero boundary | Fixed | The corrected interval includes \(\{0\}\) at the boundary. [main.tex:162](replication/paper/main.tex:162) |
| Proposition 3(d)–(e): density is not alone sufficient; under-demand is existential | Fixed | The three joint conditions and the correct existence statement are now explicit. [main.tex:163](replication/paper/main.tex:163), [main.tex:168](replication/paper/main.tex:168) |
| Proposition 4(i): \(z_j=1\) does not strictly gain from higher \(z_A\) | Fixed | “No employed wage falls” replaces the false universal strict-increase claim. [main.tex:184](replication/paper/main.tex:184) |
| Proposition 5: local nature and fixed access fee | Fixed | The result is explicitly first-order and \(A\) is fixed per intermediary. [main.tex:196](replication/paper/main.tex:196) |
| Proposition 6: positivity, support, and mentor-capacity conditions | Fixed | These assumptions and the slack-capacity condition are now present. [main.tex:207](replication/paper/main.tex:207), [main.tex:217](replication/paper/main.tex:217) |
| Proposition 6: \(\beta\) undefined | Fixed | \(\beta\in(0,1)\) is defined as the per-generation discount factor. [main.tex:207](replication/paper/main.tex:207) |
| Corollary 1(i): false uniqueness at \(\chi=1\) | Fixed | The stationary set \((0,a]\) is now correctly stated and proved. [main.tex:225](replication/paper/main.tex:225), [main.tex:504](replication/paper/main.tex:504) |
| Proposition 7: pooling with income-varying error probabilities | Fixed | The paper now says pooling removes only the risk premium, not the expected-loss gradient. [main.tex:247](replication/paper/main.tex:247) |
| Proposition 8: heterogeneous \(z_A\)-wage changes were treated as common | Fixed | The new proof uses \((1-z(y))\Delta z_A+\Delta C\), and C3 requires \(z(y)\) non-decreasing. [main.tex:284](replication/paper/main.tex:284), [main.tex:512](replication/paper/main.tex:512) |
| Proposition 8: double use of a unit of time; undefined \(H\) and compute constraint | Partly fixed | The \(\varphi\)-allocation, \(H=(1-\varphi)\int\tau dF\), and \(\mu>H\) repair the time-accounting problem. But the joint calibration uses an unstated second \(p_c\) for apprenticeship, so its C5 calculation is not a parameterization of the stated joint economy. |
| Proposition 8: access-fee version of (d2) | Fixed | C4 now invokes (d2\(_A\)). [main.tex:277](replication/paper/main.tex:277) |
| Verification did not cover Proposition 2 or 8 | Partly fixed | The script now executes P2 and P8 checks. But the P8 numerical checks inherit the unstated `pc_entry` parameter. [verify_propositions.py:280](replication/code/verify_propositions.py:280) |
| Pointwise progressivity versus quintile index | Fixed | The text now distinguishes the definition from the summary index. [main.tex:321](replication/paper/main.tex:321) |

## B. Changed propositions and corollary

### Proposition 8

**Verdict:** Correct with a missing definition/assumption in the stated joint calibration.

**Severity:** Major.

**Details:** The time allocation is internally coherent for the factor and task-market blocks. Each unit supplies \(\varphi\) of a period to need-solving and \(1-\varphi\) opportunities to the task market; hence \(H=(1-\varphi)\int\tau\,dF\). The wage \(w(p_c)\) is quantity-independent under the paper’s small-sector, zero-profit assumption, and \(\mu>H\) keeps compute slack in both states. C3 also correctly guarantees employment in both states: \(s_j\) rises with \(z_A\), while \(C(D)\) falls with \(D\). [main.tex:261](replication/paper/main.tex:261), [main.tex:263](replication/paper/main.tex:263), [main.tex:510](replication/paper/main.tex:510)

The factor-income proof now goes through. Under C3,
\[
\Delta w_T(y)=\Delta z_A[1-z(y)]+\Delta C
\]
is non-negative and non-increasing. Therefore \(g(y)\) and \(\tau(y)/y\) are both non-negative and non-increasing, so their product is non-increasing. The proof correctly states the sign requirements. [main.tex:512](replication/paper/main.tex:512)

The problem is the link to Proposition 6. The paper describes one \(p_c\)-change, from \(p_c^0=1\) to \(p_c^1=0.5\), and then writes the C5 result as \(T_1=\min\{G(p_c+s),\chi T_0\}\). [main.tex:265](replication/paper/main.tex:265), [main.tex:269](replication/paper/main.tex:269)

But the code silently uses a distinct apprenticeship price:

- factor-price block: `pc1=0.5`;
- apprenticeship block: `pc_entry=0.672`;
- C5 and \(T_1\) use `pc_entry`, not `pc1`. [prop8.py:38](replication/code/prop8.py:38), [prop8.py:43](replication/code/prop8.py:43), [prop8.py:63](replication/code/prop8.py:63)

If the stated post-change \(p_c^1=0.5\) is used in the apprenticeship block, the baseline subsidy \(s=0.128\) does not meet C5: it yields \(T_1=0.628<0.8\), rather than the reported \(T_1=0.8\). Thus the numerical baseline, the 400 draws, and the C5 constructions are checks of a model with an additional unreported parameter, not the stated joint economy.

The repair is conceptually small but essential: either define a distinct entry-task price \(p_c^E\), include it in the exogenous joint vector and write C5 using \(p_c^E\); or impose \(p_c^E=p_c^1\) and recalibrate the subsidy and constructions.

### Corollary 1(i)

**Verdict:** Correct.

**Severity:** None.

The stationary-set correction is right. For \(\chi=1\), every \(T\in(0,a]\) solves \(T=\min\{a,T\}\); for \(\chi>1\), only \(a\) is positive and stationary; for \(\chi<1\), none is. The recovery formula and the condition \(\chi a_L<a_H\) for an additional shortfall are also correct. [main.tex:225](replication/paper/main.tex:225), [main.tex:504](replication/paper/main.tex:504)

### Proposition 3(a) and (c)

**Verdict:** Correct.

**Severity:** None.

Part (a) now has the necessary \(p_e<P_0\) premise. Part (c) correctly distinguishes the two admissible-price cases and includes \(p=0\) at \(R=\theta\pi L\). [main.tex:160](replication/paper/main.tex:160), [main.tex:162](replication/paper/main.tex:162)

### Proposition 4(i)

**Verdict:** Correct.

**Severity:** None.

The revised wording matches \(\partial w_j/\partial z_A=1-z_j\): no employed wage falls, and strict increase requires \(z_j<1\). [main.tex:184](replication/paper/main.tex:184)

### Proposition 6: \(\beta\)

**Verdict:** Correct.

**Severity:** None.

\(\beta\) is now defined before use, and the proof correctly identifies \(\beta>0\), \(W>0\), \(p_c<\bar\kappa\), positive density, and slack capacity as needed for strictness. [main.tex:207](replication/paper/main.tex:207), [main.tex:217](replication/paper/main.tex:217)

### Proposition 2: tie-breaking

**Verdict:** Correct.

**Severity:** None.

The tie rule is stated and the proof correctly observes that the price and zero premium are invariant to assigning supply to either equal-cost supplier. [main.tex:132](replication/paper/main.tex:132)

## C. Weak-necessity constructions

At \(\varphi=0.5\), all eight rows pass the code’s own maintained-assumption and other-condition tests. This includes the enlarged holdings: the largest task-market mass is \(H=12.736<\mu=50\), in the decreasing-\(z(y)\) C3 row. The other enlarged C1/C3 rows have \(H=0.502,2.126,2.547\), respectively. Thus the doubling does not violate \(\mu>H\).

Subject to the unreported `pc_entry` distinction above, each row also has exactly the advertised logical pattern at \(\varphi=0.5\): other grouped conditions hold, the target grouped condition fails, and either relative gains rise somewhere or \(T_1<T_0\). [prop8.py:121](replication/code/prop8.py:121), [necessity_examples.txt:4](replication/output/necessity_examples.txt:4)

Doubling is legitimate for a weak-existence claim at fixed \(\varphi=0.5\): the claim needs one admissible parameterization per composite condition, not robustness across all time shares. The paper and table do disclose that the constructions use \(\varphi=0.5\). [main.tex:518](replication/paper/main.tex:518), [necessity_table.tex:2](replication/paper/necessity_table.tex:2)

It is not robust across \(\varphi\):

| Targeted condition | \(\varphi=.25\) | \(\varphi=.5\) | \(\varphi=.75\) |
|---|---:|---:|---:|
| C1 | breaks | breaks | breaks |
| C2 | breaks | breaks | breaks |
| C3: autonomy | breaks | breaks | does **not** break |
| C3: pre-change employment | breaks | breaks | does **not** break |
| C3: decreasing knowledge | breaks | breaks | breaks |
| C4 | breaks | breaks | breaks |
| C5: subsidy | breaks | breaks | breaks |
| C5: capacity | breaks | breaks | breaks |

All maintained assumptions still hold at \(\varphi=.25,.75\), including \(\mu>H\). The two C3 failures at \(\varphi=.75\) become monotone because the task-market component receives only one quarter of time. This does not refute an existence claim explicitly restricted to \(\varphi=.5\), but it means the table cannot support a stronger claim that the constructions work at arbitrary fixed shares.

## D. Claims versus results

The revised abstract, introduction, and conclusion appropriately identify a fixed-share joint economy. [main.tex:34](replication/paper/main.tex:34), [main.tex:59](replication/paper/main.tex:59), [main.tex:437](replication/paper/main.tex:437)

The introduction and conclusion also correctly limit weak necessity to C1–C5 as whole composite conditions, not their components. [main.tex:59](replication/paper/main.tex:59), [main.tex:445](replication/paper/main.tex:445) The abstract is less explicit but not materially broader when read with its five semicolon-separated condition groups.

The abstract is **189 words** under the paper’s apparent convention: omit the LaTex command `\noindent` and count hyphenated compounds as one word.

All newly reported numerical values match `numbers.json` to displayed rounding: \(\varphi=.5\), \(H=.13\), \(\Delta w_P=.33\), the 255/400 draw count, the Table 2 shares, and the mentor-capacity figures. The qualification is substantive rather than arithmetic: the P8 numerical values use `pc_entry=.672`, whereas the written joint change uses \(p_c^1=.5\).

## Most important remaining problem

A major problem remains: Proposition 8’s numerical joint economy does not define the separate entry-task price that its code uses for C5. Consequently, the claimed baseline satisfaction of all five conditions, and the numerical weak-necessity evidence involving C5, do not currently correspond to the stated joint economy. The \(\varphi\) repair and the analytical factor-income proof are otherwise correct.
