# Acceptance review record · task 法普-20261014-01 (English translation)

Translated by Claude Science from the commissioning party's Chinese original (`验收/本方复核记录.md`, by 法玛, 2026-10-15). The translation aims to be faithful; the Chinese original is authoritative. Bracketed notes are the translator's.

Reviewer: 法玛 (the commissioning research agent), from 12:47 on 2026-10-15. Object of review: `replication/paper/main.tex` and `main.pdf` as returned (2026-10-14 23:30 version).

## 1. Replication (acceptance criterion 4)

A separate Python 3.14 virtual environment (numpy, scipy, sympy, pandas, matplotlib) was built in a scratch directory. The whole `replication` folder was copied there, and three scripts were run in `code/` in order: `verify_propositions.py`, `numerical_illustration.py` and `necessity_examples.py`. All three exited with status 0. Six output files were compared byte by byte with the returned files and were all identical: `numbers.json`; `verify_propositions.txt`, whose last line is CHECKS 29/29 COMPLETE; `necessity_examples.txt`; `fig2_cases.csv`; `sensitivity_density_bias.csv`; `sensitivity_gradient_bias.csv`.

The numbers in Section 4 of the paper were also recomputed by hand:

- With σ = α = 0.5, the value share of t is 0.293 at p_c = 1 and 0.776 at p_c = 0.1, and w(0)/w(1) = 2/0.1716 = 11.66.
- C(1) = 0.35 and C(4) = 0.125. The wage ratio of z = 0.8 to z = 0.2 is 0.57/0.33 = 1.73 at the low density and 0.795/0.555 = 1.43 at the high density.
- a^m = 0.8 × 0.84 = 0.672; βW = 0.091; s = 0.8 − 0.672 = 0.128; loss 0.091²/2 = 0.0041.

All agree with the text.

## 2. Propositions one by one (the reviewer's own reading of the proofs)

1. The statements and proofs of Propositions 1, 2, 4 and 5 were checked line by line, and no error was found. The derivative of the wage ratio with respect to C in Proposition 4(i), (s_j − s_k)/(s_k − C)², was recomputed and is correct.
2. **Proposition 6 (apprenticeship externality) lacks assumptions.**
   - The general statements a* > a^m and "welfare loss > 0" require G to have positive mass on (p_c, p_c + βW), at least p_c < κ̄.
   - Under the uniform distribution, the closed forms a* − a^m = βW/κ̄ and loss (βW)²/(2κ̄) also require p_c + βW(p_c) ≤ κ̄; otherwise G is truncated at 1.
   - Neither the text nor the appendix states this interior condition. At the calibration point 0.763 < 1, so the numbers are unaffected.
3. **Proposition 7 (liability)** says that the households preferring pooling "form an interval at the bottom of the distribution". This interval can be empty, so it should read "if non-empty, it lies at the bottom". The liability paragraph of Section 6 cites "Proposition 7(iii)", but Proposition 7 has no numbered parts; the reference is dangling.
4. **Proposition 3(d).** The proof uses R(y_L) ≤ P_0, i.e. that the lowest-income household is rationed before AI. Part (a) states this premise; part (d) does not.
5. **Proposition 8 (synthesis)** combines "the change in the wage per unit of t times the holding τ(y)" from Proposition 1 with "one job per holder, wage change c₁/D²" from Proposition 4. The "common wage change" in C3 needs to be stated per unit of t. This is a problem of exposition and does not change the conclusion. [See §5 item 1: the reviewer later revised this assessment.]

## 3. Other problems in the text

1. The apprenticeship paragraph of Section 4 calls 13%–19% "descriptive employment gaps in different versions", while Section 5 says that 13% and 16% are earlier-version regression estimates and only 19% is descriptive. The two passages are inconsistent.
2. The abstract counts 195 to 201 words, depending on whether the list labels (1)–(6) are counted. It sits on the 200-word limit; a few words should be cut in revision to leave a margin.
3. The body, from after the title page to the conclusion, is about 27 pages. The task book requires 30 to 45 pages.
4. The title-page footnote and Appendix E say that the non-Claude model review "is planned and has not yet been carried out". Once the review is done, this must be changed to the actual result.
5. The Hosseini & Lichtinger paper is cited only through Ide's account, and the two concurrent papers by Akin and Singh were not read. The receipt reports this truthfully.

## 4. To be added

Non-Claude model review (gpt-5.6-terra), an independent spot check of 30 citations, and a spot check of 10 evidence numbers. Their results are to be added to this file and to the acceptance sheet when available.

## 5. Non-Claude model review (gpt-5.6-terra, via the Codex command line, read-only sandbox)

The review started around 12:47 and finished before 12:53, with exit code 0 and 94,873 tokens used. The full raw output is in `gpt复核报告-原始输出.md` [in this package: `gpt-5.6-terra_review_raw_2026-10-15.md`]; the report itself is at the end of that file. It judged three results wrong and the rest "correct, but missing assumptions". The reviewer checked each point. Her assessments follow.

1. **Proposition 8 (synthesis) is wrong; the reviewer agrees.**
   - The proof says that condition C3 makes every holder's wage change the same, so that the factor-income part equals Δw·τ(y)/y. But in Proposition 4 the wage change from a rise in z_A is (1−z_j)Δz_A, which varies with the knowledge level z_j. Only the c₁/D² from a change in density D is the same for all employed holders.
   - C3's condition C(D) < s_min only guarantees that everyone is employed; it does not guarantee that the changes are equal. GPT's counterexample (low-income holders with z = 1, high-income holders with z = 0) is mathematically valid.
   - In addition, Proposition 8 combines the factor-price model of Proposition 1, whose shock is p_c, with the model of Proposition 4, whose shocks are z_A and D, without stating which change in one and the same economy is meant.
   - This is more serious than the "problem of exposition" the reviewer had identified herself; she underestimated it in §2 item 5.
2. **Proposition 6 (apprenticeship) lacks key assumptions; the reviewer agrees.** Besides the interior condition she had already listed, GPT points out two things:
   - The model has no mentor-capacity constraint, so each old expert can train any number of apprentices. Without such a constraint, "the steady-state share holding t equals the apprenticeship rate" does not hold.
   - The text says that "the social value of each apprenticeship rises as AI becomes cheaper", but the proof shows only that the external part βW rises; the sign of the derivative 1 + βW′ of the total value p_c + βW is not determined.

   Both points are right.
3. **Proposition 2 lacks a participation condition; the reviewer agrees.** When both r_h and k_t exceed w(p_c) there is no trade, yet the formula P_C = min{w, max{r_h, k_t}} gives a positive price. It needs min{r_h, k_t} ≤ w(p_c), or a separate no-trade case.
4. **Proposition 3(c) omits π(y) > 0; the reviewer agrees.** The derivations master copy states it, but the paper omits it.
   **Proposition 3(e), "whenever θ < 1 there are households that should buy but do not": the reviewer partly agrees.**
   - GPT's counterexample uses q = 0. But as long as v can take values close to v_I, those households have a negative perceived benefit at q = 0 and still should buy but do not. So the counterexample does not hold in general.
   - Still, the proposition does depend on the support of v, and it should be rewritten as an existence statement with its conditions stated.
5. **Proposition 7.**
   - Strict decrease requires 0 < π < 1 and L > 0.
   - "Under pooling this term drops out of the gradient conditions" requires the pooled premium not to vary with π(y), whereas earlier π(y) = e(1 − v(y)) varies with income.

   The reviewer agrees; these are missing assumptions.
6. Propositions 1, 4 and 5 and Lemma 1 are judged correct, with only small gaps in wording such as local or first-order statements. All numbers in Section 4 agree with `numbers.json` and with the reviewer's own recomputation.
7. GPT also points out two further problems, and the reviewer agrees:
   - The numerical illustration summarises progressivity by the ratio of bottom-quintile to top-quintile means. The model's definition is pointwise non-increase of EV(y)/y, and a ratio above one does not imply that the definition holds.
   - The statements "we derive five conditions" and "intermediary density above a threshold restores progressivity" in the abstract, introduction and conclusion go beyond what has been proved.

**Conclusion.** In the first return, three propositions (2, 6, 8) have statements or proofs that are wrong, or lack the assumptions needed for them to hold. One of them, Proposition 8, is the paper's synthesis result. Acceptance criterion 3 is not met. The event of prediction 法玛-20261014-03 has occurred.
