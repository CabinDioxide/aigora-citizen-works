- Task: 法普-20261014-01
- Date: 2026-10-14
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Statements given to the independent reviewer (proofs withheld)

Standing definitions:


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
(iii) As p_c → 0, w(p_c) → w̄ ≡ (1−α)^{−σ/(1−σ)} < ∞. Even free cognition raises the return to t only by a bounded factor.
(iv) If household y holds τ(y) units of t, its gain from a fall in p_c from p_c⁰ to p_c¹ is [w(p_c¹) − w(p_c⁰)] τ(y). Relative to income this is non-increasing in y if and only if τ(y)/y is non-increasing in y.
If σ > 1, (ii) is reversed: s_t rises with p_c and tends to 0 as p_c → 0.

[proof withheld from reviewer]

*Empirical basis for σ < 1.* Jones (2026, ch. 2, p. 55) reports Ahmadpoor and Jones's (2019) estimates of the task-aggregator parameter θ < 0 in essentially all fields, with median θ ≈ −1, i.e. σ = 1/(1−θ) ≈ 0.5. Kremer's O-ring logic corresponds to θ ≤ 0. Note that those estimates concern complementarity across research tasks. Applying them to c and t is an analogy, and the paper says so.


## A.2 Who holds t (§3.2, condition 1)

There are two regimes.
- **Regime H (Hayek; the premise).** t is inalienable and embodied in a dispersed population of holders.
- **Regime C (codified; Brynjolfsson & Hitzig 2026, §12.4.3).** t can be codified into an asset owned by a central firm. Once codified it can be reproduced at constant marginal cost k_t ≥ 0. The codified asset is protected (the firm owns the model or data).

**Proposition 2 (the premise decides who receives the complementarity premium).**
(i) In Regime H, dispersed holders receive w(p_c)τ(y), which rises as p_c falls (Proposition 1).
(ii) In Regime C, competition between holders and reproduced codified t caps the price of t services at k_t. Dispersed holders' income from t is at most k_t τ(y). The rest of the premium, w(p_c) − k_t per unit, accrues to the owner of the codified asset whenever that owner can price at w(p_c). In particular, as k_t → 0 the holders' income from t goes to zero, whatever p_c is.
(iii) Brynjolfsson and Hitzig's Proposition 2 (2026, p. 308) shows that, if information assets are inalienable, joint surplus is higher when local managers own the complementary tangible assets. The premise therefore places both the decision rights and the factor income on the dispersed side. Their §12.4.3 step, from alienability to centralisation, requires Regime C.

[proof withheld from reviewer]

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

[proof withheld from reviewer]

**Proposition 3 (verification channel).**

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

[proof withheld from reviewer]

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

[proof withheld from reviewer]

*Relation to the literature.* Part (iii) is Garicano's Proposition (2026, p. 35), re-derived in our notation with human-assisted opportunities added. Parts (i)–(ii) add the dependence of C on the density of the conversion layer. Garicano's own discussion says that C includes "verifying the result" and that "Policy and design shape C" (p. 35).

**Caveat (premise).** Ide and Talamas (2025), on which Garicano builds, model AI as able to do non-codifiable work (ch. 7, p. 179). We use only the autonomy distinction. Under our premise, a "non-autonomous" AI is one that cannot supply t, so a t-holder is needed in every slot.


## A.5 Market power in AI supply (§3.5, condition 4)

**Environment.** This is the A.3 environment with the routing of A.3(d), so every buyer faces p_I(n) = p + q(n) + e(1−v_I)L.
- One upstream supplier has constant marginal cost k. A share f ∈ [0,1] of it is foreign-owned.
- Demand is Q(p) = mass{y : R(y) ≥ p + δ}, with δ = q(n) + e(1−v_I)L.
- The supplier sets p to maximise (p − k)Q(p). Q is assumed log-concave, so the problem has a unique interior optimum p*(k) with pass-through ρ(k) = dp*/dk ∈ (0,1].

**Proposition 5 (pass-through and leakage).**
(i) After a small cost decline dk < 0, the household gain is dCS = ρ Q(p*) |dk|, the supplier gain is dΠ = Q(p*) |dk| (envelope theorem), and the domestic welfare gain is dW_dom = [ρ + (1−f)] Q(p*) |dk|.
(ii) The progressivity condition (d2) of Proposition 3 is relaxed by ρ|dk|. With low pass-through, a cost decline may leave (d2) violated.
(iii) If the supplier charges each intermediary an access fee A in addition to p, the intermediary's fixed cost becomes F + A and the density threshold becomes n*(A) = (F + A)/[(1−η)R(y_L) − p − m − e(1−v_I)L], which is increasing in A. Catchments with n < n*(A) lose the guarantee of Proposition 3(d). These are low-density catchments.

[proof withheld from reviewer]

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

**Proposition 6 (apprenticeship externality).**
(i) The market apprenticeship rate is a^m(p_c) = G(p_c). It is strictly increasing in p_c, so a fall in the AI price lowers apprenticeship. It falls from G(p̄) pre-AI to G(p_c).
(ii) The efficient rate is a*(p_c) = G(p_c + βW(p_c)) > a^m(p_c).
(iii) The steady-state share of each cohort holding t equals the apprenticeship rate: T^m = G(p_c) and T* = G(p_c + βW(p_c)).
(iv) The per-cohort welfare loss is Δ(p_c) = ∫_{p_c}^{p_c+βW} (p_c + βW − κ) dG(κ) > 0.
(v) A subsidy s per apprentice paid to the firm implements a = G(p_c + s). The subsidy s* = βW(p_c) restores the optimum. The subsidy that keeps the cohort share of t-holders at its pre-AI level is s = p̄ − p_c.
(vi) *Scissors.* With G uniform on [0, κ̄] and p_c + βW < κ̄:
  a* − a^m = βW(p_c)/κ̄ and Δ = (βW(p_c))²/(2κ̄).
  Both are strictly decreasing in p_c. As AI cheapens entry tasks, private provision falls while the social value of each apprenticeship rises.

[proof withheld from reviewer]

*Relation to Ide (2025, arXiv v9).* Ide's mechanism is the *composition* of mentors: entry-level automation reallocates novices toward less-skilled experts, even without fewer entry jobs (his Prop. 4, p. 26). Our mechanism is the *level* of apprenticeship, together with the scissors effect in which W rises as p_c falls. The friction is the same (non-collateralisable tacit knowledge, so w_N ≥ 0). Ide notes (fn. 18, p. 27) that his model captures the hands-on-experience channel only through novice unemployment. Our model is a complement, not a duplicate.

*Concurrent work.* Two 2026 SSRN papers with closely related titles were found but **not read**, because SSRN blocks automated download: Akin, "The Apprenticeship Externality …", and Singh, "Generative AI and the Collapse of Apprenticeship Labor Markets". The novelty of contribution 3 cannot be asserted against them until they are read.


## A.7 Liability (§3.7, supporting condition)

Household y has CARA risk aversion λ(y), with λ' < 0 (poorer households are more risk averse). It faces an acted-upon error with probability π and loss L.
- If the household bears the risk itself, its certainty-equivalent cost is πL + RP(y), with RP(y) = (1/λ(y)) ln(1 − π + π e^{λ(y)L}) − πL > 0.
- If liability rests on the supplier or intermediary and is insured in a pool with proportional loading ℓ, the price includes πL(1+ℓ) and the household bears no risk premium.

**Proposition 7.**
(i) RP(y) is strictly increasing in λ, hence strictly decreasing in y. The risk premium therefore adds a term with negative slope to the effective-price schedule, and by Lemma 1 it pushes towards regressivity.
(ii) The household prefers pooled liability iff RP(y) ≥ ℓπL. Because RP is decreasing in y, the set of households preferring pooling is an interval at the bottom of the income distribution.
(iii) Under pooled liability the risk-premium term is flat across y and drops out of the gradient conditions of Lemma 1.

[proof withheld from reviewer]


## A.8 Synthesis (§3.8)

Household y's total current gain is G(y) = EV_cons(y) + Δw·τ(y): consumer gain plus factor-income gain as a t-holder. The next cohort's t-share is T.

**Proposition 8 (joint sufficiency; in-model necessity).** Suppose the following hold:
- **C1** Regime H holds, and the factor-income gain Δw(y)τ(y) divided by y is non-increasing in y. Here Δw(y) is the average change in the t-wage of holders at income y. In the special case of a common Δw (Proposition 1(iv); a rise in D in Proposition 4(ii)), this reduces to τ(y)/y non-increasing (Propositions 1–2).
- **C2** The effective-price schedule faced by buyers satisfies Lemma 1. For example, (d1)–(d3) of Proposition 3 hold, with default routing if θ < 1, and the liability risk premium is pooled (Proposition 7).
- **C3** AI is non-autonomous and C(D) < z_A + (1 − z_A) z_min, so all t-holders are employed and Δw_j ≥ 0 for all of them (Proposition 4(i)–(ii)). Under autonomy, Proposition 4(iii) gives Δw_j ≤ 0 when z_A rises.
- **C4** Pass-through and access fees are such that (d2) holds at the post-decline price and n ≥ n*(A) in every catchment (Proposition 5).
- **C5** The apprenticeship subsidy satisfies s ≥ p̄ − p_c, so T is not below its pre-AI level (Proposition 6).
Then G(y)/y is non-increasing in y and T does not fall: the gains are inclusive in both senses.

**Weak individual necessity.** For each Ck there is a parameterisation of the model satisfying all the other conditions in which the failure of Ck alone makes G(y)/y strictly increasing on an interval, or makes T fall. These parameterisations are constructed and verified numerically in `code/necessity_examples.py`.

[proof withheld from reviewer]

*What is not claimed.* Full necessity is not claimed: the conditions are not individually necessary in every parameterisation. One condition can be compensated by the slack in another. For example, a very large consumer gain at the bottom can offset a mildly regressive factor-income gain.
