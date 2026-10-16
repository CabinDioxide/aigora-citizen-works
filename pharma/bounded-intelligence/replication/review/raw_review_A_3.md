<!-- Reviewer: claude-sonnet-5 single-shot call (not a sub-agent), round 3, stop=end_turn, output tokens=22459 -->

# Referee Report — Appendix A.3 (Verification Channel)

## Lemma 1 (progressivity of a price schedule)

Differentiating EV/y on each piece reproduces exactly the stated conditions: for entrants, d(EV/y)/dy ≤ 0 ⟺ ηR(y) − yp̃'(y) ≤ R(y) − p̃(y) ⟺ p̃(y) + y|p̃'(y)| ≤ (1−η)R(y), i.e. (E); for incumbents, EV = P₀ − p̃(y) gives (I) directly. Since p̃ is continuous and R(y₀) = P₀ by construction, EV/y is continuous across y₀, so the two pointwise conditions do glue into a global "non-increasing" statement for a piecewise-C¹, everywhere-continuous function. The lemma is correctly stated **but only because its premise ("every household buys") removes the zero-EV region**; it cannot be invoked as-is wherever some households are excluded (R(y) < p̃(y)), which is exactly the situation in 3(b)–3(d). That restriction should be made explicit rather than left implicit in the phrase "let every household buy."

## Proposition 3(a)

Algebra checks: with p_e constant, EV(y) is 0, then R(y) − p_e (increasing), then flat at P₀ − p_e — globally non-decreasing, so the first bullet is correct. The "iff p_e ≤ (1−η)R(y_L)" bullet is correct and in fact is *why* Lemma 1 applies here: this condition forces R(y_L) ≥ p_e(y_L), i.e. nobody is excluded, converting the problem into Lemma 1's setting with p̃ constant (|p̃'| = 0), for which (E) binds hardest at y_L since (1−η)R(y) is increasing. Correct. The third bullet, however, invokes **η ≥ 1**, which directly contradicts the standing environment's own restriction η ∈ [0,1). Read literally this sub-claim is about a parameter value the model has already excluded; it is vacuous under the paper's own definitions, not a property of the model. (Separately, η = 0 is a boundary case where R(y) = r is income-independent, so the threshold y₀ defined by R(y₀)=P₀ generically has no solution in (y_L,y_H) — "entrants exist" silently presumes η > 0.)

## Proposition 3(b)

The two local-regressivity inequalities are exactly the reverses of Lemma 1's (E)/(I) with p̃' = −eLv'(y), so the algebra is right. But the incumbent branch (EV = P₀ − p_e(y)) silently assumes p_e(y) ≤ P₀ for all y ≥ y₀ — nothing in the stated primitives (only v' ≥ 0) guarantees this. **Counterexample:** let P₀=10, p=1, e=0.5, L=20, R(y)=√y (so r=1, η=0.5), y₀=100 (R(100)=10). Let v(y) = (y−1)/10000 (non-decreasing, as required). Then p_e(100) = 1 + 0.5·(1−0.0099)·20 ≈ 10.90 > P₀ = 10. At y = 100 the household's effective AI price *exceeds* the professional's price, so it does not switch to AI — its true EV is 0, not P₀−p_e(100) ≈ −0.90 as the stated formula would compute. The formula, and hence the sign conditions built on it, require the additional assumption p_e(y) ≤ P₀ for y ≥ y₀ (equivalently v(y₀) ≥ 1 − (P₀−p)/(eL)), which does not follow from v' ≥ 0 alone.

## Proposition 3(c)

Buying condition under perceived price: R(y) ≥ p + θπL ⟺ p ≤ R(y) − θπL (upper bound, matches "≤"). True loss condition: R(y) − p − πL < 0 ⟺ p > R(y) − πL (lower bound, strict). Non-emptiness requires θ < 1, as stated. The incumbent-switch claim (loses p_e−P₀>0 exactly when p̂_e ≤ P₀ < p_e) is the correct decomposition of perceived-switch vs. true-loss. The interval width (1−θ(v))π(v)L has derivative −θ'(v)π(v)L + (1−θ(v))π'(v)L, both terms ≤ 0 given θ' ≥ 0 and π' = −e < 0, confirming monotonic decrease in v. This part is internally consistent.

## Proposition 3(d)

The routing condition q ≤ eL(v_I − v(y)) follows directly from p_I ≤ p_e(y). At the cutoff, substituting q = eL(v_I−v(ỹ)) into p_I gives p_I = p + eL(1−v(ỹ)) = p_e(ỹ) exactly — the schedule is continuous at ỹ, which is what makes the subsequent "glue" of Lemma 1 on the two pieces (flat below, p_e above) legitimate without an extra boundary condition. (d2)'s algebra converting the bracket condition into n ≥ n* is correct. However, (d1)–(d3) are **incomplete when ỹ > y₀**: the flat segment p_I would then cover some incumbents (y₀ ≤ y < ỹ), for whom routing through the intermediary over the professional additionally requires p_I ≤ P₀. Nothing in (d1)–(d3) states this, and it is not implied by (d2) (which only bounds p_I relative to (1−η)R(y_L), not relative to P₀). Without it, "every household y ≤ ỹ is served through the intermediary" in (d1) can fail for the same reason as in 3(b).

## Proposition 3(e)

The perceived-vs-true threshold inequality q ≤ eL[θ(v)(1−v) − (1−v_I)] is the correct restatement of the biased buying rule, and since θ(v) < 1 implies θ(v)(1−v) < (1−v), this threshold is strictly below the efficient one eL(v_I − v), so the stated interval is well-defined and non-empty whenever θ(v) < 1, v < v_I. The under-demand claim is correctly derived. The final sentence about defaults "restoring (d1)" is asserted, not proved — it is a policy remark, acceptable as such but should not be read as a theorem.

## Other issues

- Notation drifts between π(v), π(y), θ(v(y)) without a stated convention; harmless but sloppy.
- "Inclusive" (EV/y non-increasing) is a global property, yet 3(b)/3(c) only establish *local* signs of d(EV/y)/dy; no claim is made (or should be made) about the function's behavior at the entry margin plus interior kinks together — this is fine as stated, since the propositions are explicitly local, but a reader could mistakenly read them as full progressivity verdicts.
- The claim "gains are never larger for poorer households in this model," in the closing commentary, is correctly scoped to part (a) only; it is not and should not be treated as a general property, since (c) explicitly produces losers who are not necessarily ordered by income once bias is present.

VERDICTS:
1. Lemma 1: TRUE-WITH-CAVEAT (holds only given its stated "all households buy" premise; does not extend to the partial-participation cases used later).
2. Proposition 3(a): TRUE-WITH-CAVEAT (first two bullets correct; the η≥1 clause and η=0 boundary case fall outside the model's own declared domain η∈[0,1)).
3. Proposition 3(b): TRUE-WITH-CAVEAT (algebra correct; requires the unstated assumption p_e(y) ≤ P₀ for all incumbents, false in the given numeric counterexample).
4. Proposition 3(c): TRUE.
5. Proposition 3(d): TRUE-WITH-CAVEAT (missing condition p_I ≤ P₀ when ỹ > y₀; otherwise correct, including the non-trivial continuity-at-cutoff fact).
6. Proposition 3(e): TRUE.