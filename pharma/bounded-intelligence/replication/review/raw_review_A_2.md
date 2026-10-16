<!-- Reviewer: claude-sonnet-5 single-shot call (not a sub-agent), round 3, stop=end_turn, output tokens=18272 -->

# Referee report — A.2, Proposition 2

Only Proposition 2 (i)–(iii) is supplied for review; "Proposition 1" is invoked but neither stated nor proved here, so its content is taken as an unverified hypothesis, not something I can check. The objects w(p_c), τ(y), t, k_t are used without formal definitions in the material I have — I can only evaluate internal consistency given the glosses offered in the text.

## (i) Regime H: dispersed holders receive w(p_c)τ(y), rising as p_c falls

This is not proved here; it is imported wholesale from "Proposition 1," which is withheld. I cannot certify it. Taking it as a maintained hypothesis, it is economically unsurprising (falling price of codifiable cognition raises demand for the complementary scarce factor, raising its market wage) but it silently assumes codifiable cognition and t are gross complements throughout the relevant range, and that τ(y) — presumably the holder's endowment of t — is held fixed as p_c varies. Neither assumption is stated. **Not independently verifiable from what I was given.**

## (ii) Regime C: price of t capped at k_t; residual margin w(p_c) − k_t to the asset owner

This is the substantive claim, and it does not hold as stated.

**The internal tension.** The text requires simultaneously that (a) the codified asset is "protected" — i.e., a single firm has exclusive rights, no rival can reproduce it — and (b) "competition... caps the price... at k_t." Exclusivity and price-equals-marginal-cost competition are not compatible without an added behavioral assumption. The standard mechanism that would actually operate here is Bertrand competition between one low-cost supplier (the firm, cost k_t) and a higher-cost competitive fringe (dispersed holders, cost c_h). The textbook Bertrand result with *asymmetric* costs is that the equilibrium price settles at the **rival's** cost, not the low-cost firm's own cost: the firm undercuts holders down to just below c_h, wins the entire market, and pockets a margin of (c_h − k_t), not k_t.

**Explicit counterexample.** Let w(p_c) = 100 (the Regime-H price, reflecting scarcity rent), and suppose the holders' individual marginal (reservation) cost is c_h = 80 < w(p_c) — plausible precisely because t is described as scarce, so the Regime-H price embeds rent above each holder's own cost. Let k_t = 10. Then:
- Equilibrium price ≈ 80 (just under holders' cost), not k_t = 10.
- Holders sell nothing: their income is 0, not "up to k_tτ(y) = 10τ(y)." (0 ≤ 10τ(y) is trivially true, so the stated *bound* survives by accident, but the *mechanism offered to explain it* — "price capped at k_t" — is false.)
- The owner's margin is 80 − 10 = 70, not w(p_c) − k_t = 100 − 10 = 90, as the proposition's formula asserts.

The formula w(p_c) − k_t is correct only in the knife-edge case c_h = w(p_c), i.e., only if Regime H's price already equals holders' marginal cost with zero scarcity rent — which contradicts calling t "scarce" and contradicts Proposition 1(i)'s own claim that w(p_c) responds to p_c (a pure marginal-cost price pinned by a competitive fringe with no scarcity wouldn't move with p_c in the way described, since marginal cost is a technological parameter, not a market-clearing price). So (i) and (ii) sit in tension with each other once the mechanism in (ii) is examined closely.

**The hedge that needs unpacking.** The proposition already hedges with "whenever that owner can price at w(p_c)." That clause is doing all the work and is close to circular: it assumes the conclusion (owner captures full value) rather than deriving it from the stated market structure. Making it non-circular requires an explicit assumption — e.g., that the owner is vertically integrated into final production and uses the codified asset *internally* (so there is no market price for "t-services" charged to itself at all, and the k_t-vs-c_h undercutting only operates in a *separate* market where the firm licenses to third parties at k_t-ish prices) — or that there is price discrimination across segmented buyer pools with no arbitrage between them. Either assumption is plausible but is nowhere stated, and without it, a single market-clearing price cannot be simultaneously "capped at k_t" for holders and "equal to w(p_c)" for the owner.

**The limit claim.** "As k_t → 0, holders' income → 0 whatever p_c is" survives regardless of the above, since it only needs the (true, if loosely argued) bound holders' income ≤ k_t τ(y) with τ bounded — this piece is fine on its own even though the mechanism generating the bound is misdescribed.

## (iii) The Brynjolfsson–Hitzig attribution

I cannot verify the cited result (Brynjolfsson & Hitzig 2026, p. 308, "Proposition 2"); I flag it as an unverifiable external claim rather than treat the appeal to it as a proof. Independent of verifiability, the logical step is under-argued: a result about *efficient asset ownership maximizing joint surplus* under inalienability (a GHM-style property-rights result) does not by itself establish *distribution of factor income* in a competitive market — that requires the further (standard, but unstated) GHM premise that residual control rights translate into bargaining power and hence income shares. That bridge is plausible but is asserted, not shown, in "The premise therefore places both the decision rights and the factor income on the dispersed side." As a citation-dependent claim with an unverified source and an unstated bridging assumption, it is at best TRUE-WITH-CAVEAT.

## Other issues
- τ(y), t, w(p_c), p_c, k_t are never defined in the material reviewed; definitional gaps limit full verification.
- "Whenever that owner can price at w(p_c)" is a load-bearing but unstated condition, not a derived result.
- The "protected" vs. "competitive cap" clash in (ii) is the central technical error; it is masked by using a single scalar k_t as if it were both a technological parameter and an equilibrium price.
- No boundary treatment for k_t > w(p_c) (codification uneconomical) — the "cap at k_t" claim is vacuous/non-binding there, which the text doesn't note.

VERDICTS:
2(i): TRUE-WITH-CAVEAT (imported unproved from withheld Proposition 1; not independently checkable)
2(ii): FALSE (as stated; price-cap mechanism contradicts asymmetric-cost Bertrand logic — counterexample above; rescuable only under an unstated vertical-integration or price-discrimination assumption, in which case TRUE-WITH-CAVEAT for a different, narrower claim)
2(iii): TRUE-WITH-CAVEAT (relies on an unverifiable citation and an unstated bridge from efficient ownership to income distribution)