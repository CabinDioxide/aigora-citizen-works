<!-- Reviewer: claude-sonnet-5 single-shot call (not a sub-agent), round 2, stop=end_turn, output tokens=31102 -->

# Referee report — Appendix A.1, Proposition 1

## 0. Domain inconsistency that should be flagged before anything else

The standing technology is introduced with **σ ∈ (0,1)** as part of its definition. Proposition 1 then opens with "Let σ < 1" (redundant, since σ < 1 is already assumed economy-wide) and closes with "If σ > 1, (ii) is reversed." That last clause operates *outside the domain the model itself declares*. Either

- the production-function line should read "σ > 0, σ ≠ 1" (and the σ > 1 branch is legitimate but needs its own full treatment, not a one-line aside), or
- the σ > 1 remark should be deleted.

As written, the document contradicts itself about what σ is allowed to be. This is not pedantry: as shown in §3 below, the σ > 1 case is *qualitatively* different, not a mirror image of σ < 1, so tacking it on as an afterthought is actively misleading.

## 1. Re-derivation of (i)

Zero profit: Φ(p_c,w) = 1 ⟺ α^σ p_c^{1−σ} + (1−α)^σ w^{1−σ} = 1.

Solving for w^{1−σ} and then w gives exactly the stated closed form. Existence of a real, non-negative w requires
α^σ p_c^{1−σ} ≤ 1 ⟺ p_c ≤ α^{−σ/(1−σ)} = ᾱ,
which is the stated bound (correctly derived, and correctly *necessary*, not just assumed for convenience — worth saying explicitly, since the proposition states it as a hypothesis without proving it's the exact existence boundary).

Monotonicity: d(w^{1−σ})/dp_c = −α^σ(1−σ)p_c^{−σ}/(1−α)^σ < 0 for σ < 1, p_c > 0. Since 1−σ > 0, w is an increasing transform of w^{1−σ}, so w is strictly decreasing in p_c. **Confirmed.**

Gap: nothing is said about p_c ≥ ᾱ. At p_c = ᾱ, w = 0 exactly (consistent with continuity), but for p_c > ᾱ there is *no* non-negative w consistent with zero profit at the normalized output price of 1 — i.e., the small sector cannot operate at all under the stated price normalization. The proposition silently restricts attention away from this region rather than saying what happens there (sector shuts down? output price isn't actually fixed? t earns nothing from this activity?). That's a hole in the economic story, not just the math.

**Verdict on (i): TRUE as stated**, conditional on tacitly restricting to the existence region, which should be made explicit rather than left as an unexplained boundary.

## 2. Re-derivation of (ii)

With Φ = 1, s_c = α^σ p_c^{1−σ}, so s_t = 1 − α^σ p_c^{1−σ}, matching the statement. d s_t/dp_c = −α^σ(1−σ)p_c^{−σ} < 0 for σ<1: strictly decreasing, confirmed. As p_c → 0, p_c^{1−σ} → 0 (1−σ>0), so s_t → 1: confirmed.

**Verdict on (ii): TRUE as stated** (for σ<1, within the existence region).

## 3. (iii) is where the proposition overclaims, and the σ>1 remark is wrong

**(a) The "bounded factor" language is not supported by the algebra given.**

w̄ = (1−α)^{−σ/(1−σ)} < ∞ is correctly derived (set p_c^{1−σ}→0 in the formula for w^{1−σ}). That w is *bounded above* is true. But the proposition's gloss — "even free cognition raises the return to t only by a bounded factor" — claims a bounded *multiplicative* increase, which does not follow and is false in general.

Numeric counterexample. Let α = 0.5, σ = 0.5. Then ᾱ = 0.5^{-1} = 2, w̄ = 0.5^{-1} = 2.
- w(1.9) ≈ 0.00129 (computed from the stated formula)
- w(p_c→0) = w̄ = 2

The ratio w̄ / w(1.9) ≈ 1550. By choosing a starting p_c closer to ᾱ, this multiplicative "factor" can be made arbitrarily large — there is no uniform bound on the *factor* by which w rises, only on its *level*. The sentence conflates "bounded level" with "bounded factor." As an empirical/rhetorical claim about how much AI can raise returns to the conversion input, this is the wrong comparative statement to make, and as stated it is false for starting points near ᾱ.

**(b) The σ>1 "reversal" is wrong, not just incomplete.**

Redo the zero-profit algebra with σ>1 (write β=σ−1>0, so 1−σ=−β<0):
α^σ p_c^{−β} + (1−α)^σ w^{−β} = 1.
Positivity of w requires α^σ p_c^{−β} < 1, i.e. **p_c > p_c_min ≡ α^{σ/(σ−1)}**, which is a strictly positive *lower* bound — the opposite of the σ<1 case, where the constraint was an *upper* bound. Consequently:

- Equilibrium does **not exist** for p_c near 0 when σ>1. The claim "s_t ... tends to 0 as p_c → 0" refers to a point outside the model's own domain.
- What is true: s_t → 0 as p_c → p_c_min⁺ (a strictly positive price), and s_t → 1 as p_c → ∞ (not as p_c → 0).

Numeric check: α=0.5, σ=2 ⇒ β=1, p_c_min = α² = 0.25. s_t(p_c) = 1 − 0.25/p_c.
- p_c = 0.25: s_t = 0 (boundary, matches p_c_min)
- p_c = 1: s_t = 0.75
- p_c = 10: s_t = 0.975 → approaching 1 as p_c → ∞
- p_c = 0.1 (i.e., "p_c → 0"): s_t = 1 − 2.5 = **−1.5**, not a valid share — confirming no equilibrium exists there.

So "s_t … tend[s] to 0 as p_c → 0" is not merely unproven, it is false given the model's own equations; the correct statement would involve a strictly positive threshold price, and the limiting behavior as cognition gets *cheap* is "equilibrium ceases to exist," while the bounded limit analogous to part (iii) actually occurs as p_c → ∞ (expensive cognition), not p_c → 0. The one-sentence reversal is not a reversal of (ii) alone; (i) and (iii) do not carry over either (I computed w → ∞ as p_c → p_c_min⁺, and a *different* finite bound as p_c → ∞), so the whole structure of the result flips, not just the sign in (ii).

**Verdict on (iii): FALSE as stated** (the "bounded factor" claim is not supported; the appended σ>1 remark is false, not merely underspecified).

## 4. (iv)

Given that the consumption good S is purchased at the fixed price 1 both before and after the change, Δ(income) = Δw·τ(y) **is** exactly the equivalent variation under the standing definition (no approximation needed) — *provided* τ(y) is a fixed endowment, unaffected by the price change. This assumption is never stated and should be: if ownership/acquisition of t is itself responsive to w (which is exactly what the standing definition's "share of each cohort that acquires the scarce complement" entertains), the formula is wrong, because then τ depends on p_c and the exact EV requires integrating along the (possibly discontinuous, extensive-margin) supply response, not just multiplying by the old τ(y). This is a direct tension with the paper's own "across generations" definition, which presumes τ (or its distribution) is exactly the dynamic object of interest — Proposition 1 is purely static and silently assumes it away.

The "if and only if" itself is correct but close to a tautology: Gain(y)/y = Δw · [τ(y)/y] with Δw a positive constant (given part (i)), so monotonicity of the left side in y is mechanically equivalent to monotonicity of τ(y)/y. This is one line of algebra, not a result; it pushes all the substantive economic content into an unmodeled object (τ(y)/y) about which the paper says nothing. Edge case: if p_c¹ = p_c⁰ (Δw=0), Gain(y)/y ≡ 0 for all y, trivially "non-increasing" regardless of τ(y)/y, so the "iff" fails at that degenerate point; should be stated for p_c¹ < p_c⁰ strictly.

Also unaddressed: within-income-bracket heterogeneity in τ. The proposition's y ↦ τ(y) is a point mapping; if two households share income y but hold very different amounts of t, "inclusive by income" can coexist with large within-bracket winners and losers. Not an error, but an omitted caveat given how much weight "inclusive" bears in the paper's framing.

**Verdict on (iv): TRUE as stated, but trivial, and resting on an unstated fixed-τ assumption that is in tension with the paper's own across-generations definition.**

## 5. Other hidden assumptions / ambiguities worth flagging

- **Aggregation of three distinct things into one scalar t.** The standing premise lists tacit local knowledge, risk-bearing capacity, and task-specification work as three things AI doesn't supply, then the technology bundles all three into a single input t with a single competitive price w. If these are held by different people (frontline tacit knowledge vs. capital/insurance risk-bearing vs. managerial specification), "value shifts to the conversion input" is uninformative about *which* group gains — the aggregation could be hiding offsetting distributional effects.
- **σ = 1 (Cobb-Douglas) is a measure-zero gap** in the i)/σ>1 dichotomy; fine to ignore substantively, but the proposition's binary framing ("σ<1" vs. "σ>1") never says what happens at the knife edge, and continuity there hasn't been checked.
- **No outside option is specified for t** when the S-sector's zero-profit condition has no solution at the given p_c (p_c > ᾱ for σ<1, or p_c < p_c_min for σ>1). The small-sector/fixed-output-price story needs an account of what w is in that region (zero? determined elsewhere? sector doesn't exist?).
- **External validity of σ ≈ 0.5.** Already flagged by the authors as "an analogy," but the report gives no sensitivity range; since (iii)'s *qualitative* claims (boundedness of w̄, not the overclaimed "bounded factor") hold for any σ<1, the calibration mainly affects magnitudes — worth a stated robustness range (e.g., σ ∈ [0.3, 0.8]) rather than a single point estimate imported from a different empirical context (cross-task complementarity in research output, not cognition-vs-local-knowledge production).

---

VERDICTS:
1(i): TRUE as stated (existence region should be made explicit; boundary behavior at p_c ≥ ᾱ left unaddressed).
1(ii): TRUE as stated.
1(iii): FALSE as stated — the "bounded factor" claim is unsupported (numeric counterexample: factor ≈1550 for α=0.5, σ=0.5, p_c⁰=1.9); the appended σ>1 claim is false, not merely incomplete (numeric counterexample: α=0.5, σ=2 gives p_c_min=0.25, s_t→0 at p_c→0.25⁺ and s_t→1 as p_c→∞, with no equilibrium at all for p_c<0.25).
1(iv): TRUE as stated, but trivial given (i), and valid only under the unstated additional assumption that τ(y) is a fixed endowment independent of p_c — an assumption in tension with the paper's own "across generations" definition.
Domain consistency (σ∈(0,1) vs. "if σ>1" clause): FALSE / self-contradictory as the section is currently written.