- Task: 法普-20261014-01
- Date: 2026-10-14; revision round 1: 2026-10-15
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Model, propositions and proofs

**Revision round 1 (2026-10-15).** Section R1 at the end of this file gives the revised statements and proofs of Propositions 1(iv), 2, 3(b)–(e), 4(i), 5, 6, Corollary 1 (new), 7 and 8. Where R1 and an earlier section differ, R1 is authoritative; the affected earlier blocks are marked *[superseded by R1]*. The paper's Section 3 and Appendix A reproduce R1.

This file is the master copy of the model. The paper's Appendix A reproduces it. Section numbers follow design document §3. Each stage adds one mechanism, and each proposition isolates one condition.

**Standing definition (design §0; the commissioning party's ruling of 2026-10-14).** Gains are *inclusive* (relatively progressive) if the money-metric gain, measured as equivalent variation EV(y), divided by income y is non-increasing in y. Absolute gains EV(y) are reported alongside. "Across generations" means that the share of each new cohort that acquires the scarce complement does not fall.

**Standing premise (design §8).** AI supplies codifiable cognition. It does not supply tacit local knowledge, the capacity to bear the consequences of error, or the work of turning a vague need into a well-specified task. This is an **assumption**, not a claim about the world.

---

## A.1 Technology of need-solving (§3.1)

A solved need S is produced from codifiable cognition c and a conversion input t:

S = [α c^{(σ−1)/σ} + (1−α) t^{(σ−1)/σ}]^{σ/(σ−1)},  α ∈ (0,1),  σ ∈ (0,1).

Markets are competitive and returns constant. The price of S is normalised to 1, because the need-solving sector is small relative to the economy. AI supplies c perfectly elastically at price p_c. Holders of t receive the factor price w.

The unit-cost function is Φ(p_c, w) = [α^σ p_c^{1−σ} + (1−α)^σ w^{1−σ}]^{1/(1−σ)}. Cost shares are s_c = α^σ p_c^{1−σ}/Φ^{1−σ} and s_t = 1 − s_c.

**Proposition 1 (value shifts to the conversion input).** Let σ < 1 and p_c < ᾱ ≡ α^{−σ/(1−σ)}.
(i) The zero-profit condition Φ(p_c, w) = 1 has the unique solution w(p_c) = [(1 − α^σ p_c^{1−σ})/(1−α)^σ]^{1/(1−σ)}. It is strictly decreasing in p_c.
(ii) The share of value accruing to t is s_t(p_c) = 1 − α^σ p_c^{1−σ}. It is strictly decreasing in p_c and tends to 1 as p_c → 0.
(iii) As p_c → 0, w(p_c) → w̄ ≡ (1−α)^{−σ/(1−σ)} < ∞. Even free cognition raises the return to t only to a bounded level w̄. [Corrected after review R2-A.1: the earlier wording "bounded factor" was false; the ratio w̄/w(p_c⁰) is unbounded as p_c⁰ → ᾱ.]
(iv) If household y holds τ(y) units of t, its gain from a fall in p_c from p_c⁰ to p_c¹ is [w(p_c¹) − w(p_c⁰)] τ(y). Relative to income this is non-increasing in y if and only if τ(y)/y is non-increasing in y.
[Corrected after review R2-A.1.] For p_c ≥ ᾱ the sector does not operate (w = 0). The case σ > 1 is outside the model: zero profit then requires p_c > α^{σ/(σ−1)}, below which t is inessential; on the admissible domain s_t rises with p_c. (iv) holds τ(y) fixed and requires a strict fall p_c¹ < p_c⁰.

*Proof.*
(i) Φ = 1 ⇔ α^σ p_c^{1−σ} + (1−α)^σ w^{1−σ} = 1. Solve for w^{1−σ}; this needs 1 − α^σ p_c^{1−σ} > 0, which is the condition p_c < ᾱ. Since 1−σ > 0, w^{1−σ} is strictly decreasing in p_c, and hence so is w.
(ii) With Φ = 1, s_c = α^σ p_c^{1−σ}. Because 1−σ > 0, s_c is strictly increasing in p_c and tends to 0 as p_c → 0.
(iii) Set p_c = 0 in (i).
(iv) The gain is a common scalar Δw ≥ 0 times τ(y). Divide by y.
For σ > 1 the exponent 1−σ < 0; zero profit at the fixed output price requires α^σ p_c^{1−σ} < 1, i.e. p_c > α^{σ/(σ−1)}. Below that threshold cognition alone undercuts the output price, so t is inessential and the small-sector assumption fails. ∎

*Empirical basis for σ < 1.* Jones (2026, ch. 2, p. 55) reports Ahmadpoor and Jones's (2019) estimates of the task-aggregator parameter θ < 0 in essentially all fields, with median θ ≈ −1, i.e. σ = 1/(1−θ) ≈ 0.5. Kremer's O-ring logic corresponds to θ ≤ 0. Note that those estimates concern complementarity across research tasks. Applying them to c and t is an analogy, and the paper says so.

## A.2 Who holds t (§3.2, condition 1)

There are two regimes.
- **Regime H (Hayek; the premise).** t is inalienable and embodied in a dispersed population of holders.
- **Regime C (codified; Brynjolfsson & Hitzig 2026, §12.4.3).** t can be codified into an asset owned by a central firm. Once codified it can be reproduced at constant marginal cost k_t ≥ 0. The codified asset is protected (the firm owns the model or data).

**Proposition 2 (the premise decides who receives the complementarity premium).** *[superseded by R1]*
(i) In Regime H, dispersed holders receive w(p_c)τ(y), which rises as p_c falls (Proposition 1).
(ii) [Corrected after review R3-A.2; the earlier statement, that the owner earns w(p_c) − k_t, was false under Bertrand pricing.] In Regime C, holders supply t-services at opportunity cost r_h ≥ 0 and the single owner of the codified asset at marginal cost k_t; the two are perfect substitutes. The price is P_C = min{w(p_c), max{r_h, k_t}}. Holders' premium over opportunity cost is max{0, min{w(p_c), k_t} − r_h} ≤ k_t per unit and does not rise as p_c falls once w(p_c) ≥ k_t. If k_t < r_h, holders are undercut; the owner earns min{w(p_c), r_h} − k_t per unit and w(p_c) − P_C accrues to users of t-services. As k_t → 0 the holders' premium goes to zero, whatever p_c is.
(iii) Brynjolfsson and Hitzig's Proposition 2 (2026, p. 308) shows that, if information assets are inalienable, joint surplus is higher when local managers own the complementary tangible assets. The premise therefore places both the decision rights and the factor income on the dispersed side. Their §12.4.3 step, from alienability to centralisation, requires Regime C.

*Proof.*
(i) Proposition 1.
(ii) Bertrand competition with asymmetric costs: the lower-cost side wins at a price equal to the higher-cost side's cost, capped at users' willingness to pay w(p_c) (Proposition 1). If r_h < k_t holders win at min{w, k_t}, premium min{w, k_t} − r_h ≤ k_t. If k_t < r_h the owner wins at min{w, r_h} and holders earn no premium. The owner can earn w(p_c) − k_t only with price discrimination or downstream integration, which are not assumed. Part (iii) additionally uses the property-rights premise that residual control translates into bargaining power.
(iii) Cited; not re-proved. ∎

*Remark.* Brynjolfsson & Hitzig themselves note (2026, §12.6.1, p. 316) that limits to codifiability favour delegation to "the person on the spot". Our contribution is not that observation. It is the step from the premise to the *distribution* of factor income, and the coupling of that step with conditions 2–5.

## A.3 Demand side and verification (§3.3, condition 2)

**Environment.**
- Households have incomes y ∈ [y_L, y_H] with positive density.
- Each household has one indivisible need per period, with reservation value R(y) = r y^η, r > 0, η ∈ [0,1). The parameter η is the income elasticity of willingness to pay; η < 1 means the need is a necessity.
- **Pre-AI**, a human professional solves the need at price P₀ without error. This is a normalisation: a non-zero professional error rate can be folded into P₀. There is a threshold y₀ with R(y₀) = P₀, and the households with y ≥ y₀ buy ("incumbents").
- **With AI**, the posted price is p < P₀.
- An AI error occurs with probability e. A household of verification capacity v ∈ [0,1] detects the error with probability v. With probability π(v) = e(1−v) the error is acted upon, causing loss L > 0.
- Verification capacity rises with income: v = v(y), with v' ≥ 0.
- The **effective price** is p_e(y) = p + e(1 − v(y)) L.
- The **perceived** effective price is p̂_e(y) = p + θ(v(y)) e(1 − v(y)) L, with θ ∈ (0,1] non-decreasing. θ < 1 is overconfidence: the household under-estimates the probability that an unverified error is acted upon.
- Households are risk neutral; risk is treated in A.7. Utility is quasi-linear, so welfare is money-metric. Each household chooses among {nothing, human, AI} using perceived prices. Realised EV is computed with true prices.

**Lemma 1 (progressivity of a price schedule).** Let every household buy the AI channel. Let the effective-price schedule p̃(y) be continuous, non-increasing and piecewise C¹. Then EV(y)/y is non-increasing on [y_L, y_H] if and only if:
- (E) p̃(y) + y |p̃'(y)| ≤ (1−η) R(y) for entrants (y < y₀), and
- (I) y |p̃'(y)| ≤ P₀ − p̃(y) for incumbents (y ≥ y₀),
holding at every point of differentiability.

*Proof.* For entrants EV = R − p̃. Then d(EV/y)/dy = [y(R' − p̃') − (R − p̃)]/y². Using yR' = ηR and −p̃' = |p̃'|, the numerator is p̃ + y|p̃'| − (1−η)R. For incumbents EV = P₀ − p̃. The numerator is y|p̃'| − (P₀ − p̃). EV is continuous at y₀ because R(y₀) = P₀. A continuous, piecewise-C¹ function is non-increasing iff its derivative is ≤ 0 wherever it exists. ∎

**Proposition 3 (verification channel).** *[superseded by R1]*

(a) *No verification heterogeneity (v constant, so p_e constant, p_e < P₀, θ = 1).*
- Absolute gains EV(y) are non-decreasing in y: 0 if R < p_e; R − p_e for entrants; P₀ − p_e for incumbents.
- Suppose entrants exist (y_L < y₀). Then EV(y)/y is non-increasing on the whole support **if and only if** p_e ≤ (1−η) R(y_L).
- If η ≥ 1 no positive p_e satisfies this, and relative gains rise with income among entrants.

(b) *Heterogeneity without bias (θ = 1, v' > 0).* At any income y at which households buy, relative gains are locally regressive (d(EV/y)/dy > 0) if, for an entrant,
  e L y v'(y) > (1−η)R(y) − p_e(y),
or, for an incumbent,
  e L y v'(y) > P₀ − p_e(y).
In addition, households with R(y) < p_e(y) are excluded. Exclusion is concentrated at low v.

(c) *Heterogeneity with bias (θ(v) < 1).* Consider an entrant household y with π(y) = e(1−v(y)) > 0 and θ(v(y)) < 1. For every posted price in the non-empty interval
  p ∈ ( R(y) − π(y)L , R(y) − θ(v(y)) π(y) L ],
the household buys the AI channel and is **strictly worse off** than without AI.
An incumbent switches from the professional to AI and loses p_e(y) − P₀ > 0 whenever p̂_e(y) ≤ P₀ < p_e(y).
The losing interval has length (1−θ(v))π(v)L, which is decreasing in v when θ is non-decreasing and π is decreasing. A fall in p that moves R − p into this interval for low-v households therefore creates losers among them.

(d) *Intermediated verification.* An intermediary verifies with quality v_I ∈ (v(y_L), 1]. It incurs fixed cost F and marginal cost m per client and serves n clients. Its zero-profit fee is q(n) = m + F/n. A client's effective price through the intermediary is
  p_I(n) = p + q(n) + e(1−v_I)L,
which is the same for all clients.
Unbiased households route through the intermediary iff q(n) ≤ e L (v_I − v(y)). This defines a cutoff ỹ with v(ỹ) = v_I − q/(eL); if v(y_H) < v_I − q/(eL), set ỹ = y_H. The schedule p̃(y) is p_I for y ≤ ỹ and p_e(y) for y > ỹ.

**EV(y)/y is non-increasing on the whole support** if the following three conditions hold:
- (d1) Routing: every household with y ≤ ỹ is served through the intermediary. This holds if θ = 1, or if routing is the default channel.
- (d2) Cost–density: p + m + F/n + e(1−v_I)L ≤ (1−η) R(y_L). Equivalently, when the bracket is positive,
  n ≥ n* ≡ F / [(1−η)R(y_L) − p − m − e(1−v_I)L].
- (d3) Gradient above the cutoff: conditions (E) and (I) of Lemma 1 hold with p̃ = p_e for y > ỹ. This is vacuous if ỹ ≥ y_H.

(e) *Under-demand for verification under bias.* Suppose a household perceives its own unverified error rate as θ(v)e(1−v) and the intermediary's correctly as e(1−v_I). It buys intermediation iff q ≤ eL[θ(v)(1−v) − (1−v_I)]. Every household with
  eL[θ(v)(1−v) − (1−v_I)] < q ≤ eL(v_I − v)
under-buys efficient verification. This set is non-empty for some q whenever θ(v) < 1 and v < v_I. Hence (d1) can fail in a voluntary market. A *default* or publicly provided verification layer, rather than a market for verification alone, is what restores (d1) when θ < 1.

*Proof.*
(a) With p_e constant and p_e < P₀, the option values are max(R − P₀, R − p_e, 0) after AI and max(R − P₀, 0) before, which gives the three-part EV. EV is non-decreasing because R is increasing.
If some household has R < p_e, then EV/y = 0 below the purchase threshold and is strictly positive just above it, which violates monotonicity. So the necessary condition p_e ≤ R(y_L) holds, and it is implied by p_e ≤ (1−η)R(y_L).
Lemma 1 with p̃' = 0 requires p_e ≤ (1−η)R(y) for all entrant y. R is increasing, so this is equivalent to p_e ≤ (1−η)R(y_L). Condition (I) holds because P₀ − p_e > 0.
Conversely, if p_e > (1−η)R(y_L), then by continuity of R the derivative of EV/y is strictly positive on a right-neighbourhood of y_L, provided y_L < y₀.
If η ≥ 1 then (1−η)R ≤ 0 < p_e, so the condition cannot hold.
(b) This is Lemma 1 with p̃ = p_e and |p̃'| = eLv'(y). Exclusion: R(y) < p_e(y) means the household does not buy, so EV = 0, while higher-v households gain.
(c) The household buys AI iff R(y) ≥ p̂_e(y), i.e. p ≤ R − θπL. Its realised gain over the pre-AI option (nothing, since it is an entrant) is R − p − πL, which is negative iff p > R − πL. The interval is non-empty because (1−θ)πL > 0. The incumbent case is the same argument with P₀ in place of R. The length (1−θ(v))e(1−v)L is a product of non-negative non-increasing functions of v, hence non-increasing.
(d) Under (d1), p̃ = p_I is constant on [y_L, ỹ]. On that segment Lemma 1 (E) reduces to p_I ≤ (1−η)R(y), which by monotonicity of R is (d2). Condition (I) on the segment holds because p_I ≤ (1−η)R(y_L) < R(y_L) ≤ P₀.
At ỹ < y_H, p_I = p_e(ỹ), so p̃ is continuous. Above ỹ, (d3) is Lemma 1. Continuity of EV/y and non-positive one-sided derivatives give global monotonicity.
The density form of (d2) rearranges q(n) = m + F/n.
(e) Direct comparison of the perceived and true benefits of verification, eL[θ(1−v) − (1−v_I)] versus eL(v_I − v). Their difference is eL(1−θ)(1−v) > 0 when θ < 1 and v < 1. ∎

*Economic meaning of (a).* The progressivity of a pure price fall requires two things. First, the need must be a necessity (η < 1). Second, AI must bring the effective price below a fraction (1−η) of the poorest household's willingness to pay. **In absolute terms, gains are never larger for poorer households in this model.** Incumbents gain P₀ − p_e ≥ R − p_e. This is a formalisation finding. It qualifies the design document's wording that the new-goods surplus "accrues mainly to previously rationed households": that wording holds only in relative terms, and in aggregate only if the rationed mass is large. It is reported in the 回执.

## A.4 Autonomy and packaging cost (§3.4, condition 3)

**Environment.** This follows Garicano's comment (2026, ch. 1, pp. 33–35) on Ide & Talamas, with human-assisted opportunities added.
- There is a mass H of t-holders. Holder j has knowledge z_j ∈ [0,1] with distribution K.
- An *opportunity* is a well-specified, payable task. Entrepreneurs create opportunities at unit cost C(D) = c₀ + c₁/D, where D > 0 is the density of the local conversion layer (intermediaries, community workers) and c₀ ≥ 0, c₁ > 0.
- A solved opportunity is worth 1.
- AI alone solves a fraction z_A ∈ (0,1) of problems. A human j working with AI solves s_j = z_A + (1 − z_A) z_j: the AI handles what it can and the human the rest.
- Each human has one unit of time and handles one opportunity. Each opportunity uses one unit of compute.
- Compute capacity μ exceeds H ("compute glut").

**Non-autonomous AI.** Every opportunity requires one unit of human time.
**Autonomous AI.** An opportunity can also be completed by AI alone, with success z_A.

**Proposition 4 (packaging cost and autonomy).** Assume free entry into opportunity creation.
(i) *Non-autonomous.* The compute rental is r* = 0. Holder j's wage is w_j = max{s_j − C(D), 0}, and j is employed iff z_j > z* ≡ (C(D) − z_A)/(1 − z_A).
(ii) *Non-autonomous, raising D.* ∂w_j/∂D = c₁/D² > 0 for every employed j. The employment threshold z* falls. For employed j, k with z_j > z_k, the ratio w_j/w_k is strictly decreasing in D: wages compress upward.
  Also ∂w_j/∂z_A = 1 − z_j ≥ 0. Better AI raises all wages and raises low-knowledge wages most.
(iii) *Autonomous, with C(D) < z_A.* Entry into AI-only opportunities continues until compute is scarce. The compute rental is r* = z_A − C(D), and the wage of a human-assisted worker is w_j = s_j − z_A = (1 − z_A) z_j. It does not depend on D. A lower packaging cost raises r*, which accrues to compute owners, and leaves wages unchanged. Also ∂w_j/∂z_A = −z_j ≤ 0.

*Proof.*
(i) Opportunities need humans, so at most H opportunities are active. Since μ > H, compute is in excess supply and r* = 0. Free entry for an opportunity staffed by j requires s_j − C − w_j ≤ 0, with equality if the opportunity is active. Competition among entrepreneurs for j's time bids w_j up to s_j − C whenever that is positive. If s_j ≤ C no opportunity staffed by j is profitable, so j is not employed in this sector.
(ii) Differentiate w_j = z_A + (1−z_A)z_j − c₀ − c₁/D. For the ratio, (s_j − C)/(s_k − C) with s_j > s_k > C has derivative with respect to C equal to (s_j − s_k)/(s_k − C)² > 0. A rise in D lowers C, so the ratio falls.
(iii) An AI-only opportunity earns z_A − C − r. Free entry drives r up to z_A − C > 0 before compute is exhausted, so compute is scarce. A human-assisted opportunity earns s_j − C − r* − w_j = 0, which gives w_j = s_j − z_A. ∎

*Relation to the literature.* Part (iii) is Garicano's Proposition (2026, p. 35), re-derived in our notation with human-assisted opportunities added. Parts (i)–(ii) add the dependence of C on the density of the conversion layer. Garicano's own discussion says that C includes "verifying the result" and that "Policy and design shape C" (p. 35).

**Caveat (premise).** Ide and Talamas (2025), on which Garicano builds, model AI as able to do non-codifiable work (ch. 7, p. 179). We use only the autonomy distinction. Under our premise, a "non-autonomous" AI is one that cannot supply t, so a t-holder is needed in every slot.

## A.5 Market power in AI supply (§3.5, condition 4)

**Environment.** This is the A.3 environment with the routing of A.3(d), so every buyer faces p_I(n) = p + q(n) + e(1−v_I)L.
- One upstream supplier has constant marginal cost k. A share f ∈ [0,1] of it is foreign-owned.
- Demand is Q(p) = mass{y : R(y) ≥ p + δ}, with δ = q(n) + e(1−v_I)L.
- The supplier sets p to maximise (p − k)Q(p). Q is assumed log-concave, so the problem has a unique interior optimum p*(k) with pass-through ρ(k) = dp*/dk ∈ (0,1].

**Proposition 5 (pass-through and leakage).** *[superseded by R1]*
(i) After a small cost decline dk < 0, the household gain is dCS = ρ Q(p*) |dk|, the supplier gain is dΠ = Q(p*) |dk| (envelope theorem), and the domestic welfare gain is dW_dom = [ρ + (1−f)] Q(p*) |dk|.
(ii) The progressivity condition (d2) of Proposition 3 is relaxed by ρ|dk|. With low pass-through, a cost decline may leave (d2) violated.
(iii) If the supplier charges each intermediary an access fee A in addition to p, the intermediary's fixed cost becomes F + A and the density threshold becomes n*(A) = (F + A)/[(1−η)R(y_L) − p − m − e(1−v_I)L], which is increasing in A. Catchments with n < n*(A) lose the guarantee of Proposition 3(d). These are low-density catchments.

*Proof.*
(i) dCS/dk = −Q(p*) dp*/dk = −ρQ. The envelope theorem gives dΠ*/dk = −Q(p*). The domestic share of profit is (1−f).
(ii) Condition (d2) is linear in p.
(iii) Replace F by F + A in Proposition 3(d2). ∎

*Cited, not re-derived.* Athey and Scott Morton (2026, ch. 4) analyse a monopolist's allocation of extraction across access and usage fees. A cap on one fee shifts rents into the other (p. 110). Income leaks abroad under foreign ownership, and AI can harm unskilled workers ("double harm", p. 106). Proposition 5 adds only the mapping from pass-through and access fees into the distributional conditions of Proposition 3.

## A.6 Dynamics: apprenticeship and the reproduction of t (§3.6, condition 5)

**Environment.** Two-period overlapping generations, each of mass 1.
- A young agent acquires t (becomes an expert when old) only by performing an entry task alongside an expert ("apprenticeship").
- When old, an expert earns ω + W(p_c) and a non-expert earns ω. Here W(p_c) ≡ w(p_c) − ω > 0, with w from Proposition 1, so W is strictly decreasing in p_c.
- Entry tasks are codifiable. A firm can have the entry task done by a novice or by AI at price p_c. The output y_N is the same either way.
- Supervising a novice costs the firm κ_j, drawn from a distribution G with density g > 0 on [0, κ̄].
- The novice's wage is w_N.

**Frictions.**
- (F1) Becker general training: t is embodied and portable, so the firm cannot capture the novice's future premium W.
- (F2) Credit constraint: as in Ide (2025), tacit knowledge is non-verifiable and non-collateralisable, so w_N ≥ 0.
- The discount factor is β ∈ (0,1).
- Pre-AI, the alternative way to perform entry tasks costs p̄ > p_c. The entry task is worth doing under every technology considered: y_N > p̄.

**Proposition 6 (apprenticeship externality).** *[superseded by R1]*
(i) The market apprenticeship rate is a^m(p_c) = G(p_c). It is strictly increasing in p_c, so a fall in the AI price lowers apprenticeship. It falls from G(p̄) pre-AI to G(p_c).
(ii) The efficient rate is a*(p_c) = G(p_c + βW(p_c)) > a^m(p_c).
(iii) The steady-state share of each cohort holding t equals the apprenticeship rate: T^m = G(p_c) and T* = G(p_c + βW(p_c)).
(iv) The per-cohort welfare loss is Δ(p_c) = ∫_{p_c}^{p_c+βW} (p_c + βW − κ) dG(κ) > 0.
(v) A subsidy s per apprentice paid to the firm implements a = G(p_c + s). The subsidy s* = βW(p_c) restores the optimum. The subsidy that keeps the cohort share of t-holders at its pre-AI level is s = p̄ − p_c.
(vi) *Scissors.* With G uniform on [0, κ̄] and p_c + βW < κ̄:
  a* − a^m = βW(p_c)/κ̄ and Δ = (βW(p_c))²/(2κ̄).
  Both are strictly decreasing in p_c. As AI cheapens entry tasks, private provision falls while the social value of each apprenticeship rises.

*Proof.*
(i) The firm compares a novice (profit y_N − w_N − κ_j) with AI (profit y_N − p_c). It hires the novice iff κ_j ≤ p_c − w_N. Under (F2) the most favourable wage is w_N = 0, so firms with κ_j ≤ p_c hire. The share of such firms is G(p_c).
(ii) Socially, an apprenticeship costs κ_j, saves p_c of AI cost, and creates a discounted premium βW. It is efficient iff κ_j ≤ p_c + βW. (Without F2, a novice would accept w_N down to −βW, i.e. pay for training, and the market would attain a*. F1 and F2 together are what open the wedge.)
(iii) Each cohort's experts are exactly the apprenticed young of the previous period.
(iv) The loss is the surplus of the efficient apprenticeships that are not offered.
(v) With subsidy s the firm hires iff κ_j ≤ p_c + s.
(vi) Substitute G(x) = x/κ̄. W is strictly decreasing in p_c by Proposition 1. ∎

*Relation to Ide (2025, arXiv v9).* Ide's mechanism is the *composition* of mentors: entry-level automation reallocates novices toward less-skilled experts, even without fewer entry jobs (his Prop. 4, p. 26). Our mechanism is the *level* of apprenticeship, together with the scissors effect in which W rises as p_c falls. The friction is the same (non-collateralisable tacit knowledge, so w_N ≥ 0). Ide notes (fn. 18, p. 27) that his model captures the hands-on-experience channel only through novice unemployment. Our model is a complement, not a duplicate.

*Concurrent work.* Two 2026 SSRN papers with closely related titles were found but **not read**, because SSRN blocks automated download: Akin, "The Apprenticeship Externality …", and Singh, "Generative AI and the Collapse of Apprenticeship Labor Markets". The novelty of contribution 3 cannot be asserted against them until they are read.

## A.7 Liability (§3.7, supporting condition)

Household y has CARA risk aversion λ(y), with λ' < 0 (poorer households are more risk averse). It faces an acted-upon error with probability π and loss L.
- If the household bears the risk itself, its certainty-equivalent cost is πL + RP(y), with RP(y) = (1/λ(y)) ln(1 − π + π e^{λ(y)L}) − πL > 0.
- If liability rests on the supplier or intermediary and is insured in a pool with proportional loading ℓ, the price includes πL(1+ℓ) and the household bears no risk premium.

**Proposition 7.** *[superseded by R1]*
(i) RP(y) is strictly increasing in λ, hence strictly decreasing in y. The risk premium therefore adds a term with negative slope to the effective-price schedule, and by Lemma 1 it pushes towards regressivity.
(ii) The household prefers pooled liability iff RP(y) ≥ ℓπL. Because RP is decreasing in y, the set of households preferring pooling is an interval at the bottom of the income distribution.
(iii) Under pooled liability the risk-premium term is flat across y and drops out of the gradient conditions of Lemma 1.

*Proof.*
(i) The CARA certainty equivalent of a lottery is increasing in the risk-aversion coefficient (standard; e.g. Pratt 1964). Compose with λ' < 0.
(ii) Compare πL + RP(y) with πL(1+ℓ).
(iii) Immediate. ∎

## A.8 Synthesis (§3.8)

Household y's total current gain is G(y) = EV_cons(y) + Δw·τ(y): consumer gain plus factor-income gain as a t-holder. The next cohort's t-share is T.

**Proposition 8 (joint sufficiency; in-model necessity).** *[superseded by R1]* Suppose the following hold:
- **C1** [Revised after review R3-A.8.] Regime H holds and τ(y)/y is non-increasing in y.
- **C2** [Revised after review R3-A.8.] Verification is intermediated: (d1) and (d3) of Proposition 3(d) hold, with default routing if θ < 1, and the liability risk premium is pooled (Proposition 7). Together with C4 (which supplies (d2) and n ≥ n*(A)), this delivers Lemma 1 for the effective-price schedule.
- **C3** AI is non-autonomous and C(D) < z_A + (1 − z_A) z_min, so all t-holders are employed and the wage change Δw is common and non-negative (Proposition 4(i)–(ii)). Under autonomy, Proposition 4(iii) gives Δw_j ≤ 0 when z_A rises. With Δw < 0 the factor component Δw τ(y)/y is increasing whenever τ(y)/y is decreasing, which is why C3 is a separate condition (reviewer's counterexample: τ(1)/1 = 1, τ(2)/2 = 0.5, Δw = −1).
- **C4** Pass-through and access fees are such that (d2) holds at the post-decline price and n ≥ n*(A) in every catchment (Proposition 5).
- **C5** The apprenticeship subsidy satisfies s ≥ p̄ − p_c, so T is not below its pre-AI level (Proposition 6).
Then G(y)/y is non-increasing in y and T does not fall: the gains are inclusive in both senses.

**Weak individual necessity.** For each Ck there is a parameterisation of the model satisfying all the other conditions in which the failure of Ck alone makes G(y)/y strictly increasing on an interval, or makes T fall. These parameterisations are constructed and verified numerically in `code/necessity_examples.py`.

*Proof of sufficiency.* G(y)/y is the sum of EV_cons(y)/y and Δw τ(y)/y. Under C2 and C4, (d1)–(d3) hold and the first is non-increasing by Proposition 3(d) and Lemma 1. Under C3, Δw is common and non-negative; under C1, τ(y)/y is non-increasing; so the second is non-increasing. A sum of non-increasing functions is non-increasing. Under C5, T ≥ G(p̄) by Proposition 6(v); this half is a direct application of Proposition 6. *Weak necessity, structure.* The earlier formulation listed C1 as 'factor gain/y non-increasing', which made C3 redundant given C1 (review R3-A.8). In the revised formulation C1 and C3 are jointly needed for the factor component, and C2 and C4 jointly for the consumer component, so each can fail alone while the others hold; code/necessity_examples.py constructs these cases (C3 fails: common Δw = −1 with τ(y)/y non-increasing; C4 fails: (d2) violated with (d1), (d3) intact). ∎

*What is not claimed.* Full necessity is not claimed: the conditions are not individually necessary in every parameterisation. One condition can be compensated by the slack in another. For example, a very large consumer gain at the bottom can offset a mildly regressive factor-income gain.


---

## R1. Revised statements and proofs (revision round 1, 2026-10-15)

The changes answer the commissioning party's return note (退回单, round 1), which draws on its acceptance review and on an independent review by gpt-5.6-terra. The revisions to Propositions 8 and 6 follow the design choices fixed in the return note. Notation: Γ(y) is household y's total gain; G is the CDF of supervision costs; χ is mentor capacity (apprentices per expert); m is the intermediary's marginal cost per client.

### R1.1 Proposition 1(iv)
Let utility be quasilinear in a numeraire and hold τ(y) ≥ 0 fixed. A strict fall p_c¹ < p_c⁰ gives the household the gain Δw·τ(y), with Δw = w(p_c¹) − w(p_c⁰) > 0 by (i). With the price of S fixed, this is the exact EV. The gain relative to income is non-increasing in y iff τ(y)/y is non-increasing.
*Proof.* Quasilinearity makes income changes money-metric. Δw > 0 is a common positive scalar, and multiplying by it preserves monotonicity. ∎

### R1.2 Proposition 2 (participation condition added; the "remainder to users" clause deleted)
In Regime H, holders receive w(p_c)τ(y). In Regime C, holders (opportunity cost r_h) and a single owner of the codified asset (marginal cost k_t) compete à la Bertrand to supply t-services that users value at w(p_c).
(i) If min{r_h, k_t} > w(p_c), there is no trade.
(ii) Otherwise P_C = min{w, max{r_h, k_t}}. If r_h ≤ k_t, holders supply with premium min{w, k_t} − r_h ≤ k_t. If k_t < r_h, the owner supplies with margin min{w, r_h} − k_t, and holders earn no premium.
(iii) Once w ≥ k_t, holders' premium does not depend on p_c, and it tends to 0 as k_t → 0.
*Proof.* No seller supplies below its cost, and no user pays above w. The lower-cost side wins at the rival's cost, capped at w. (iii) follows directly. ∎
Checked numerically on a 21³ grid of (w, r_h, k_t) in verify_propositions.py.

### R1.3 Proposition 3
**(b)** Let v be continuous and piecewise C¹ with v′ ≥ 0, so that p_e is continuous, non-increasing and piecewise C¹ (Lemma 1's regularity). The local regressivity conditions apply on intervals where all households buy.
**(c)** Add π(y) = e(1−v(y)) > 0. The interval (R − πL, R − θπL] meets p ≥ 0 iff R ≥ θπL; its admissible part is (max{0, R−πL}, R−θπL].
**(d)** Define p_I ≡ p + q + e(1−v_I)L. Maintain R(y_L) ≤ P_0 and a positive denominator. The conditions (d1)–(d3) are joint. (d2) is p_I ≤ (1−η)R(y_L).
**(e)** Existence form. Let b(y) = eL(v_I − v) be the true benefit and b̂(y) = eL[θ(1−v) − (1−v_I)] the perceived benefit, with b̂ < b when θ < 1 and v < 1. Under-demanding households exist iff b̂(y) < q ≤ b(y) for some y. Two sufficient conditions:
- (e1) q lies between some household's perceived and true benefit;
- (e2) q = 0 and some household has v < v_I with θ(v)(1−v) < 1 − v_I. This holds near v_I whenever θ(v_I) < 1, by continuity.

The calibration's θ(v) = 0.4 + 0.6v gives the threshold v ≈ 0.948 for v_I = 0.95. With q = 0 and all v ≤ 0.3, no household under-demands (checked). This confirms that the claim is existential, not universal. Under default routing, (d1) holds.

### R1.4 Proposition 4(i)
A higher D raises the wage of every holder who *remains employed* by c₁/D². This is local: the wage schedule has a kink at the employment threshold. A higher z_A raises employed holder j's wage by (1 − z_j) per unit; this change is not common. Compute capacity μ > H.

### R1.5 Proposition 5
All statements are first order (o(|dk|) omitted). A is a fixed fee per intermediary per period, so q_A = m + (F+A)/n.
(d2_A): p + m + (F+A)/n + e(1−v_I)L ≤ (1−η)R(y_L) ⇔ n ≥ n*(A) = (F+A)/[(1−η)R(y_L) − p − m − e(1−v_I)L].

### R1.6 Proposition 6 (revised as specified by the commissioning party) and Corollary 1 (new)
**Assumptions added.**
- W(p_c) > 0.
- p_c < κ̄.
- G has density g > 0 on [0, κ̄].
- Mentor capacity χ: each expert of cohort t−1 can supervise at most χ apprentices, so T_t = min{a_t, χ T_{t−1}}.

**Proposition 6.** Suppose χT_{t−1} ≥ a*. Then:
- a^m = G(p_c) and a* = G(p_c + βW) > a^m, and T_t equals the apprenticeship rate.
- Loss = ∫_{p_c}^{min{p_c+βW, κ̄}} (p_c + βW − κ) dG > 0.
- s* = βW restores a*. A subsidy s = p̄ − p_c keeps G(p̄), provided χT_{t−1} ≥ G(p̄).
- If G is uniform and p_c + βW ≤ κ̄: gap = βW/κ̄ and loss = (βW)²/(2κ̄), both rising as p_c falls.

The external value βW rises as p_c falls. The total value p_c + βW rises only if 1 + βW′(p_c) < 0, which the model does not determine. The text now says "the external value βW rises".

*Proof.* As before, plus:
- non-binding capacity gives T_t = a_t;
- W > 0 and p_c < κ̄ with g > 0 give strictness;
- the loss integrates over the omitted apprenticeships κ ∈ (p_c, min{p_c+βW, κ̄}];
- the uniform closed forms need no truncation, i.e. p_c + βW ≤ κ̄. ∎

**Corollary 1 (mentor capacity and persistence).** T_t = min{a_t, χ T_{t−1}}.
(i) A stationary T > 0 requires χ ≥ 1; with χ ≥ 1, T = a.
(ii) Let χ ≥ 1 and T_0 = a_H, with demand a_L < a_H for cohort 1 and a_H from cohort 2 on. Then T_t = min{a_H, χ^{t−1} a_L} for t ≥ 1. For χ = 1 the fall is permanent. For χ > 1, T recovers after ⌈ln(a_H/a_L)/ln χ⌉ further cohorts.
(iii) The cumulative shortfall Σ_{t≥1}(a_H − T_t) exceeds a_H − a_L iff χ a_L < a_H. This is the cross-generation amplification.
(iv) For χ < 1, T_t ≤ χ^t T_0.
*Proof.*
(i) If χ < 1 and T > 0 were stationary, then T ≤ χT < T, a contradiction. If χ ≥ 1, then χT ≥ T and T = a.
(ii) T_1 = min{a_L, χ a_H} = a_L. Induction: T_{t+1} = min{a_H, χ T_t} = min{a_H, χ a_H, χ^t a_L} = min{a_H, χ^t a_L}.
(iii) The t = 2 term is a_H − min{a_H, χ a_L}. It is positive iff χ a_L < a_H, and if it is zero all later terms are zero.
(iv) T_t ≤ χ T_{t−1}. ∎

### R1.7 Proposition 7 (assumptions added; experience-rated pooling)
Assume 0 < π < 1, L > 0 and λ(y) > 0 with λ′ < 0. RP = λ⁻¹ ln(1 − π + π e^{λL}) − πL is the CARA *risk premium*; the earlier proof called it a certainty equivalent, which was a misnomer. The pooled premium is (1+ℓ)πL, experience-rated at the household's own π.
(i) For given (π, L), RP(y) > 0 and RP is strictly decreasing in y.
(ii) A household weakly prefers pooling iff RP(y) ≥ ℓπL. With π common, the set of such households is, if non-empty, a lower interval.
(iii) Pooling removes RP. With π(y) = e(1 − v(y)), the pooled expected-loss term (1+ℓ)π(y)L keeps the gradient −(1+ℓ)eLv′(y), and this is handled by Proposition 3.
The choice between the two readings allowed by the return note is the second: π(y) varies and the expected-loss gradient remains. Community rating is not assumed.
*Proof.* Pratt (1964) and Jensen give (i). The comparison in (ii) is direct. For (iii), differentiate the pooled term. ∎

### R1.8 Proposition 8 (revised as specified by the commissioning party)
**Joint economy.**
- Household y holds τ(y) ≥ 0 units of t, each with knowledge z(y).
- Each unit earns w(p_c) in the need-solving sector (Prop. 1) and the task wage w_T(z(y)) in the task market (Prop. 4). The two are additively separable.
- The AI change runs from the pre-AI state (p_c⁰, z_A⁰, D⁰; no AI service) to the post state (p_c¹ ≤ p_c⁰, z_A¹ ≥ z_A⁰, D¹ ≥ D⁰; AI service at posted price p).
- Γ(y) = EV_cons(y) + τ(y) g(y), with g(y) = Δw_P + Δw_T(y).
- Δw_P = w(p_c¹) − w(p_c⁰) is common to all holders.
- Under C3, Δw_T(y) = (1 − z(y))Δz_A + [C(D⁰) − C(D¹)]: the z_A term varies across holders, the D term is common.
- T_1 = min{G(p_c + s), χ T_0}, with T_0 = G(p̄).

**Maintained assumptions.** R(y_L) ≤ P_0, and (1−η)R(y_L) − p − m − e(1−v_I)L > 0.

**Conditions.**
- C1: Regime H, τ ≥ 0, τ(y)/y non-increasing.
- C2: intermediary offered; (d1) and (d3); default routing if θ < 1; pooled liability.
- C3: non-autonomous in both states; C(D⁰) < s⁰_min = z_A⁰ + (1 − z_A⁰) min z; z(y) non-decreasing.
- C4: (d2_A), i.e. n ≥ n*(A).
- C5: s ≥ p̄ − p_c and χ ≥ 1.

With pooled liability at loading ℓ, (d1)–(d3) and (d2_A) are read with L replaced by (1+ℓ)L; the numerical baseline has ℓ = 0 and risk-neutral households.

**Claim.** Γ(y)/y is non-increasing and T_1 ≥ T_0. Weak necessity holds: for each Ck there is a parameterisation with the others holding, Ck failing, and the conclusion failing.

*Proof.*
1. Consumer part: Prop. 3(d) under (d1), (d2_A) and (d3). The RP term is absent under pooling.
2. Factor part, employment: C(D⁰) < s⁰_min implies C(D¹) < s¹_min, so all holders are employed in both states and the task wage is linear in z.
3. Factor part, sign and monotonicity: Δw_T(y) = (1 − z(y))Δz_A + ΔC is ≥ 0 and non-increasing, because z is non-decreasing and Δz_A, ΔC ≥ 0. Δw_P ≥ 0. Hence g ≥ 0 and g is non-increasing.
4. Factor part, product: h = τ/y ≥ 0 is non-increasing. For y < y′, g(y)h(y) ≥ g(y′)h(y) ≥ g(y′)h(y′).
5. Sum: a sum of non-increasing functions is non-increasing.
6. Next cohort: G(p_c + s) ≥ G(p̄) = T_0 and χT_0 ≥ T_0.
7. Weak necessity: code/prop8.py defines eight parameterisations, and verify_propositions.py checks every condition and the conclusion for each (paper Table 2). ∎

**Why each item of C3 is needed.**
- Autonomy gives Δw_T < 0 under a rise in z_A. A negative g times a decreasing τ/y is increasing.
- C(D⁰) ≥ s⁰_min leaves low-z holders unemployed before the change, so they gain less from a rise in D.
- z(y) decreasing makes (1 − z(y))Δz_A increasing in y. This is GPT's counterexample, which is now excluded by the third item.

**Numerical record.**
- 400 random draws: 255 satisfy all conditions, and the conclusion holds in all 255.
- Necessity rows: shares of increasing grid steps C1 0.022, C2 0.628, C3a 0.129, C3b 0.059, C3c 0.763, C4 0.053.
- T_1 in the C5 rows: 0.672 (s = 0) and 0.720 (χ = 0.9).
- The voluntary-intermediary variant of C2 does *not* break the conclusion in this calibration, because under-demand arises only near v_I, at the top. The C2 failure used is therefore the absence of intermediated verification.
