# Independent proof review — record and author responses

任务编号：法普-20261014-01 · 日期：2026-10-14 · 来源：Claude Science · 验收状态：未经本公民核验

## How the review was run

- **Reviewer:** model `claude-sonnet-5`, called as **single-shot model calls**, not as sub-agents. Sub-agent delegation was unavailable in this session (the delegation switch was off). The commissioning party ruled that single-shot calls are acceptable if labelled as such.
- **Input:** `statements_given_to_reviewer.md` only: the model environment, the standing definitions and the proposition statements. Proofs were withheld. The reviewer did not see the paper, the code or the derivations.
- **Rounds.**
  - Round 1 (A.1–A.8): failed. A usage-window limit was hit; only a truncated partial for A.1 came back. Not used.
  - Round 2 (sequential): A.1 completed. A.2 and A.3 returned empty responses (max_tokens exhausted by internal reasoning). The run was stopped.
  - Round 3 (A.2–A.8): run in parallel with a 1,200-word output budget. All seven completed (`stop = end_turn`).
- **Raw reports:** `raw_review_A_1.md` … `raw_review_A_8.md`. Call metadata and system prompts are in `review_calls_meta.json`.
- **Same-family caveat:** the reviewer is a Claude model, as is the author line. The non-Claude acceptance review (GPT via Codex) is done by the commissioning party and is not part of this record.

## Verdicts and responses

| Item | Reviewer verdict | Response | Change made |
|---|---|---|---|
| P1(i) | TRUE; existence region should be explicit | Accepted | States that the sector shuts down (w = 0) for p_c ≥ ᾱ |
| P1(ii) | TRUE | — | — |
| P1(iii) | **FALSE as stated**: "bounded factor" is wrong because w̄/w(p_c⁰) is unbounded as p_c⁰ → ᾱ (α = σ = 0.5, p_c⁰ = 1.9 gives ≈1550). The σ > 1 remark is also false: equilibrium needs p_c > α^{σ/(σ−1)} | **Accepted; genuine error** | "Bounded factor" replaced by "bounded level w̄". The ratio is reported to be unbounded in general (11.66 in the calibration). σ > 1 is now declared outside the model, and its different structure is stated in the proof |
| P1(iv) | TRUE but trivial; assumes τ fixed; needs a strict price fall | Accepted | τ fixed made explicit; strict fall; the exact-EV remark is added; the static nature is noted with a pointer to §3.6 |
| P2(i) | TRUE-WITH-CAVEAT (relies on P1) | Accepted | — |
| P2(ii) | **FALSE as stated**: under Bertrand with asymmetric costs the price is the rival's cost, so the owner cannot earn w − k_t without price discrimination or integration | **Accepted; genuine error** | Restated with holders' opportunity cost r_h: P_C = min{w, max{r_h, k_t}}; holders' premium ≤ k_t; owner's margin min{w, r_h} − k_t; the residual goes to users. The headline (holders' premium vanishes as k_t → 0, whatever p_c) is unchanged |
| P2(iii) | TRUE-WITH-CAVEAT: needs the property-rights bridge from control to income | Accepted | Bridge premise stated in text |
| Lemma 1 | TRUE-WITH-CAVEAT (all-households-buy premise) | Accepted; already the stated premise | — |
| P3(a) | TRUE-WITH-CAVEAT: the η ≥ 1 clause lies outside the domain | Accepted | Rephrased as a parenthetical outside the maintained assumption |
| P3(b) | TRUE-WITH-CAVEAT: the incumbent formula needs p_e ≤ P₀ (counterexample given) | Accepted | Incumbent condition restricted to switchers; non-switchers gain zero |
| P3(c) | TRUE | — | — |
| P3(d) | TRUE-WITH-CAVEAT: p_I ≤ P₀ is needed if ỹ > y₀ | **Rebutted**: (d2) gives p_I ≤ (1−η)R(y_L) < R(y_L) ≤ R(y₀) = P₀, so the condition is implied. The proof already uses this step | — |
| P3(e) | TRUE; the default-routing sentence is a remark | Accepted | Already worded as a remark |
| P4(i)–(iii) | TRUE-WITH-CAVEAT: needs type-specific competition, risk neutrality and a zero outside option; (iii) implies full employment | Accepted | Assumptions stated; full employment under autonomy added |
| P5(i) | TRUE-WITH-CAVEAT: aggregate incidence, not distribution; zero intermediary rent | Accepted; already the zero-profit fee | — |
| P5(ii) | Needs (d2) and no extensive-margin reshuffling | Partly rebutted: under (d2) every household is served, so there is no extensive margin at the bottom | — |
| P5(iii) | Holds only with p fixed and a positive denominator; ambiguous if (p, A) are set jointly | **Accepted** | Statement now says p is held fixed, the denominator is positive, and the joint-pricing effect is ambiguous |
| P6(i)–(vi) | TRUE-WITH-CAVEAT: needs excess supply of novices (w_N = 0), W independent of the stock of experts, no upfront fees, lump-sum financing | Accepted | All four stated as maintained assumptions, with the fixed-point case noted |
| P7 | (i) TRUE; (ii)/(iii) TRUE-WITH-CAVEAT: λ > 0, π and L regime-invariant, "weakly prefers" | Accepted | Stated |
| P8 sufficiency | TRUE-WITH-CAVEAT: the "common Δw" reduction requires Δw ≥ 0 (counterexample Δw = −1) | **Accepted; genuine error in formulation** | C1 restated as Regime H + τ(y)/y non-increasing; C3 supplies a common Δw ≥ 0 |
| P8 weak necessity | **FALSE as stated**: with C1 defined as "factor gain/y non-increasing", C3 is redundant, so it cannot fail alone | **Accepted; genuine error in formulation** | Conditions re-partitioned: C1 + C3 for the factor component, C2 (d1, d3, routing, pooling) + C4 (d2, n ≥ n*) for the consumer component. The numerical examples already matched the revised structure (C3 example: τ constant, Δw = −1) and still pass |

## Effect on results

Two statements were false (P1(iii) wording; P2(ii)). One proposition was mis-formulated (P8). All three were corrected. No numerical result changes: P2 is not used in the numerics, and the P8 examples already used the revised partition. `verify_propositions.py` (29/29) and `necessity_examples.py` (PASS) were re-run after the edits; see `output/`.

## Addendum: revision round 1 (2026-10-15)

After the first draft, the commissioning party completed an acceptance review and obtained an independent review by gpt-5.6-terra. Both are in this folder:
- `gpt-5.6-terra_review_raw_2026-10-15.md`: verbatim GPT output.
- `acceptance_review_record_EN.md`: English translation of the acceptance review record.

That review found problems that the single-shot claude-sonnet-5 review above missed or rated as caveats:
- Proposition 8 wrongly treated the wage change as common across holders.
- Proposition 6 lacked W > 0, p_c < κ̄, the interior condition and mentor capacity.
- Proposition 2 lacked a participation condition.
- Proposition 3(c) lacked π > 0, and 3(e) was stated universally.
- Proposition 7 lacked 0 < π < 1 and L > 0, and its pooling claim needed an assumption.

The corrections are in `model/derivations.md` §R1 and in the paper. The point-by-point response is the revision note `修订说明-法普-20261014-01-第1轮.md` in the handoff outbox.

One assessment above should be read in this light: the response to P8 here ("C3 supplies a common Δw ≥ 0") was itself wrong for shocks to z_A. It is superseded by R1.8.
