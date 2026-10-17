# Overreach review of round-5 text (separate model call; saw only the formal statements and one section)

model: claude-sonnet-5


## Section intro

NO FLAGS

The text is purely scene-setting: it introduces the clinic example, explicitly disclaims its evidentiary status ("It is an illustration, not evidence, and it carries no numbers of its own"), maps model primitives (conversion input, the five conditions, liability) onto features of the clinic without asserting any quantitative or directional implication, and cites the Nairobi study with a page number for descriptive context only, deferring comparison to a later section. No sentence here restates a proposition's content incorrectly, strengthens a sufficient condition into a necessary one, states a comparative static, or treats the clinic (or the cited study) as evidence for a model result.

## Section 3.1

## Flags

**1. "Stronger complementarity, a smaller $\sigma$, makes the share respond more to the price of cognition."**
*Category: (3) — comparative static stated without a needed qualifier.*
The only support given for this claim — the derivative of $s_t$ computed in the following sentence and footnote — holds only "whenever $p_c\ge\alpha$"; the footnote explicitly says that for $p_c<\alpha$ "the sign depends on the parameters, and we do not use it." This topic sentence states the claim as an unconditional comparative static, dropping the condition that makes it true.

**2. "Stronger complementarity also lowers the ceiling: $\bar w=(1-\alpha)^{-\sigma/(1-\sigma)}$ rises with $\sigma$."**
*Category: (1) — model implication not contained in or shown to follow from the formal statements.*
Proposition \ref{prop:valueshift}(iii) gives $\bar w=(1-\alpha)^{-\sigma/(1-\sigma)}$ only as the limit of $w(p_c)$ as $p_c\to0$; it says nothing about how $\bar w$ varies with $\sigma$. Unlike the parallel claim about $s_t$, for which the text supplies an explicit derivative and a footnote verifying its sign, no differentiation or substitution establishing $\bar w$'s monotonicity in $\sigma$ appears anywhere in the text.

**3. "So the more the conversion input is a bottleneck, the faster value shifts toward it as cognition gets cheaper, but the lower the level its return can reach."**
*Category: (3) — comparative static generalized beyond its qualifier (compounding flags 1–2).*
This sentence restates both preceding claims as a single unconditional trade-off across the whole $\sigma\in(0,1)$ range. The first half inherits the missing $p_c\ge\alpha$ qualifier from flag 1, and the second half relies on the unestablished $\bar w(\sigma)$ monotonicity from flag 2; neither qualifier nor derivation is carried over into this summary statement.

No issues were found with the citation-based claims (Jones, Kremer — reported with page where given), the restatements of parts (i)–(iv), the numerical substitutions in the "Magnitudes" paragraph (checked against the formulas and consistent), or the clinic paragraph, which is presented as illustration rather than evidence and does not assert that it demonstrates the model's conclusions.

## Section 3.2

## Flags

**1.** *"Combined with Brynjolfsson and Hitzig's Proposition~2, and with the standard property-rights premise that residual control translates into bargaining power, the premise places both decision rights and the complementarity premium on the dispersed side."*

**Category (1): asserts a model implication not contained in or derivable from the formal statements.** Proposition~\ref{prop:regime} and Proposition~\ref{prop:valueshift} say nothing about decision rights or bargaining power — they establish only who receives the per-unit return $w(p_c)$. The conclusion about "decision rights" rests entirely on an uncited page of an external source ("Proposition~2," given without a page number, unlike every other citation to the same chapter in this section) plus an unstated "standard premise" taken as given. The paper itself later states, in the same section, "It does not model decision rights or ownership" — directly contradicting this sentence's claim that "the premise places... decision rights... on the dispersed side."

**2.** *"In Regime C, when holders supply ($r_h\le k_t$), their premium $\min\{w,k_t\}-r_h$ rises with $k_t$, falls with $r_h$, and does not respond to $p_c$ once $w\ge k_t$."*

**Category (3): comparative static stated without a needed qualifier.** By the formula given in Proposition~\ref{prop:regime}(ii), the premium $\min\{w(p_c),k_t\}-r_h$ is strictly increasing in $k_t$ only while $k_t<w(p_c)$; once $k_t\ge w(p_c)$ it is constant at $w(p_c)-r_h$ (this is exactly the content of part (iii), which the sentence itself invokes for $p_c$ but not for $k_t$). Stating flatly that the premium "rises with $k_t$" omits the cap at $w(p_c)$ that the same proposition establishes.

**3.** *"The premium that holders keep in Regime C is therefore larger the higher the cost of codifying and reproducing their knowledge, and it vanishes as $k_t\to0$ (part~(iii))."*

**Category (3): comparative static stated without a needed qualifier.** Same issue as above: "larger the higher the cost" suggests unbounded monotonicity in $k_t$, but the premium is capped at $w(p_c)-r_h$ once $k_t\ge w(p_c)$, and is zero throughout once $k_t<r_h$ (owner supplies). The sentence needs the qualifier that this holds only for $r_h\le k_t\le w(p_c)$ (or "weakly larger," with the cap stated), not an unqualified "larger the higher the cost."

**4.** *"It does not say that codification lowers welfare: in Regime~C users pay at most what they pay in Regime~H, and the model does not rank the regimes."*

**Category (1): asserts a model implication not contained in the formal statements.** Proposition~\ref{prop:regime} gives a price $P_C=\min\{w(p_c),\max\{r_h,k_t\}\}$ paid by users in Regime~C, but neither it nor Proposition~\ref{prop:valueshift} specifies a "price users pay" in Regime~H — there, holders simply receive $w(p_c)\tau(y)$ as the return on an asset they hold and (implicitly) use themselves. Asserting that "users pay at most what they pay in Regime H" treats an unmodeled Regime-H payment as if it were established, to support the welfare disclaimer. The disclaimer's conclusion ("the model does not rank the regimes") is fine on its own, but the supporting clause is not derivable from what is given.

## Section 3.3

## Flags

**1.** *"It is an existence result: with $q=0$ and verification capacities far below $v_I$, every household for which intermediation is efficient buys it."*

**Category (1) — asserts a model implication not established by the formal statements.** Proposition \ref{prop:verification}(e) establishes under-demand (efficient-but-unbought households) only in a neighborhood of $v_I$: condition (e2) explicitly "holds for $v$ close enough to $v_I$ whenever $\theta(v_I)<1$." The proposition says nothing about the regime "far below $v_I$." Since $\theta(\cdot)$ is only assumed non-decreasing with no bound away from $v_I$, there is no guarantee that $\theta(v)(1-v)\ge 1-v_I$ holds there, so the claim that "every household... buys it" at low $v$ does not follow from the formal result and could fail for admissible $\theta$ functions.

**2.** *"Part~(d) says that this arrangement restores relative progressivity only if three things hold together: every patient for whom review is worth its cost is routed through it, the clinic serves enough patients to spread $F$, and the patients who check for themselves satisfy (d3)."*

**Category (2) — turns a joint sufficient condition into a necessary one.** Proposition \ref{prop:verification}(d) states that (d1)–(d3) are *sufficient* ("Relative gains are non-increasing ... **if** three conditions hold together"); no necessity is proved or claimed. The paper itself says so explicitly a few paragraphs earlier in the same section ("Part~(d) is a sufficient condition..."). Writing "restores relative progressivity **only if**" asserts necessity and directly contradicts that earlier, correct characterization.

**3.** *"Part~(e) says that if review is optional, some patients who overrate their own judgement will skip it; making review the default closes that gap."*

**Category (1)/(2) — drops the conditional/existence qualifier, presenting it as a certainty.** The formal result is an "if and only if" existence statement: under-demand households exist *only when* $\hat b(y)<q\le b(y)$ for some household, which depends on where $q$ falls relative to the perceived/true benefit thresholds (conditions e1/e2). It is not guaranteed to occur. The surrounding "intuition" paragraph correctly hedges the same point with "may decline a service" (i.e. part (c)/(e) language elsewhere uses "may"); here the clinic paragraph instead asserts flatly that such patients "will skip it," converting a parameter-dependent existence result into an unconditional claim.

## Section 3.4

**Flag 1**

> "Under non-autonomy the holder is the bottleneck, so every saving in packaging cost and every improvement in what AI solves reaches her."

**Category:** (3) comparative static stated without a needed qualifier (equivalently, a conditional claim converted into an unconditional one).

**Explanation:** The clause "every improvement in what AI solves reaches her" refers to a rise in $z_A$. Proposition \ref{prop:autonomy}(i) gives the exact effect: "no employed wage falls, wages of employed holders with $z_j<1$ rise... the change differs across holders." For a holder with $z_j=1$, the formula $(1-z_j)$ gives a zero wage change — the improvement in $z_A$ does *not* reach her in any positive sense. The intuition sentence drops the $z_j<1$ qualifier and states the claim as holding for "every" holder, which overstates the proposition (the packaging-cost half of the sentence, by contrast, is unqualified in the proposition itself and is fine).

No other sentences in the section were found to assert implications beyond the formal statements, misstate signs/qualifiers, convert sufficient into necessary conditions, or use the clinic illustration as evidence — the clinic paragraph explicitly disclaims evidentiary status, and all citation-based claims carry page references consistent with the "cited source" exception.

## Section 3.5

**NO FLAGS**

I read section 3.5 sentence by sentence against the reproduced propositions (particularly Proposition~\ref{prop:market} and Proposition~\ref{prop:verification}(d), which it extends).

Checks performed:

- The cited claims about Athey et al. (monopolist blunting pass-through, the textbook nonlinear-pricing contrast, the GE effects on income/entry, the DeepSeek/bottleneck remarks, the capability-loss warning, the usage-fee-cap point) are all attributed with page numbers and reported as what the source says, not asserted as results of this model.
- "The key step" paragraph (pass-through gain $\rho Q|dk|$, envelope-theorem profit gain $Q|dk|$, domestic welfare as $\rho Q|dk|+(1-f)Q|dk|$, and $q_A=m+(F+A)/n$ raising the threshold to $n^*(A)$) is a direct restatement/decomposition of the formulas already given in the proposition — no added implication.
- "Foreign ownership $f$ lowers domestic welfare but does not enter (d2$_A$)" is read straight off the two given expressions ($[\rho+(1-f)]Q|dk|$ contains $f$; $n^*(A)$ does not) — no derivation needed beyond inspection.
- The slope statement $1/[(1-\eta)R(y_L)-p-m-e(1-v_I)L]$ and "steeper where the margin is thin" is an immediate reading of the linear formula for $n^*(A)$ given in the proposition — correctly signed, no missing qualifier.
- "What the proposition does not say" paragraph tracks the proposition's own stated limits exactly (range of $\rho$, the stated ambiguity when $p$ and $A$ move jointly, absence of entry/exit modeling, partial-equilibrium scope) — each clause matches a clause in the formal statement or the earlier setup text.
- The "Magnititudes" numbers ($n^*=49$ at $A=0$, slope $\approx n^*(0)/F=49/5\approx10$, and the $A=30\Rightarrow n^*=345$ figure from the cited table) are specific calibration substitutions, not generalized claims beyond the model.
- The clinic paragraph is explicitly labeled an "(illustration)" and only restates the threshold condition $n<n^*(A)$ applied to a concrete case; it is not used as evidence for an empirical claim, and the closing sentence attributes the "cap shifts extraction to access fee" mechanism to the cited source while confining the model's own claim to the already-established comparative static on thin catchments.

No sentence converts the stated sufficient/joint conditions into a single-parameter or necessary claim, no comparative static carries the wrong sign or drops a needed qualifier (e.g., "holds $p$ fixed," "if the supplier lowers $p$... ambiguous" are both carried over correctly), and the illustrative clinic material is kept in its proper illustrative role rather than offered as evidence.

## Section 3.6

**Flag 1 — category (2): turning a condition established only under a stated restriction (uniform $G$) into a general claim**

> "One blade lowers the market rate; the other widens the gap between it and the efficient rate."

This appears in the "Intuition: the scissors" paragraph with no restriction on $G$. But the only place the model establishes that the gap $a^*-a^m=G(p_c+\beta W(p_c))-G(p_c)$ widens as $p_c$ falls is the last sentence of Proposition~\ref{prop:apprentice}, which is explicitly conditioned on "$G$ uniform on $[0,\bar\kappa]$ and $p_c+\beta W(p_c)\le\bar\kappa$." For a general $G$ with density $g$, whether lowering $p_c$ (which lowers $a^m=G(p_c)$) while raising $W$ (which raises $a^*=G(p_c+\beta W(p_c))$) widens or narrows the gap depends on how $g$ varies over the relevant interval — nothing in the formal statements pins this down for unrestricted $G$. The surrounding "Comparative statics" paragraph correctly keeps the "Under a uniform $G$" qualifier when making the same point; this sentence in the "scissors" intuition drops it and asserts the monotonicity as a general mechanism of the model.

No other sentences in the section overstate the formal results: the restatements of $w(p_c)$, $W(p_c)$, $a^m$, $a^*$, the subsidies $s^*=\beta W(p_c)$ and $\bar p-p_c$, and the recovery-time formula from Corollary~\ref{cor:capacity} all track the propositions by direct substitution or immediate reading of the stated formulas; all comparative statics that are specific to uniform $G$ (the gap and loss expressions in the "Comparative statics" paragraph) carry that qualifier; citations to Ide, Becker, Arrow, Brynjolfsson et al., Korom et al., and Ludwig et al. are attributed with page numbers; and the clinic paragraph is explicitly flagged by the text itself as an illustration, applies the corollary's mechanism rather than citing the clinic as evidence for it, and ends by disclaiming any factual claim about what such an assistant would do in practice.

## Section 3.7

**Flag 1**

Quote: *"The risk premium rises with risk aversion $\lambda$ and with the loss $L$; for given $(\pi,L)$ it falls with income."*

Category: (1) asserts a model implication not contained in or immediately derivable from the formal statements (with an overlapping (3) issue — missing qualifier).

Explanation: Proposition~\ref{prop:liability}(i) establishes only that, *for given* $(\pi,L)$, $RP(y)$ is strictly decreasing in $y$. It makes no claim about how $RP$ moves with $\lambda$ or $L$. The only textual support for monotonicity in $\lambda$ and $L$ is the second-order (small-risk) approximation given two paragraphs earlier, $RP(y)\approx \tfrac12\lambda(y)\pi(1-\pi)L^2$ — itself explicitly flagged in the footnote as an approximation that the proposition does not use ("The proposition uses the exact expression"). Reading monotonicity in $\lambda$ and $L$ off that quadratic approximation and then asserting it for the exact $RP(y)=\lambda(y)^{-1}\ln(1-\pi+\pi e^{\lambda(y)L})-\pi L$, without the "for small risks" qualifier and without this being a result the proposition proves, converts an illustrative local approximation into an unqualified general comparative static that is not licensed by the formal statement.

No other sentences in the section fail the criteria: the restatements of Proposition~\ref{prop:liability}(i)–(iii) are faithful; the "interval whose upper end rises as $\ell$ falls" and "$\ell=0\Rightarrow$ every household prefers pooling" claims follow immediately from the stated monotonicity of $RP(y)$ and the iff condition in (ii) by direct substitution; the discussion of what part (iii) does/does not imply stays within the proposition's scope and flags its own counterfactual (community rating) as outside the model; the legal citations report cited sources with specific article/section numbers; and the clinic paragraph is used only as illustration of parts (i) and (iii), not as evidence for them.

## Section 3.8-3.9

## Flags

**1.** *"A rise in $z_A$ changes the task wage by $(1-z(y))\Delta z_A$, which differs across holders (Proposition~\ref{prop:autonomy}(i))."*

**Category (3) — comparative static without a needed qualifier.** This sentence is offered as a general description of what a rise in $z_A$ does in the joint economy, but Proposition~\ref{prop:autonomy}(i) is the *non-autonomous* case only, and even there the stated effect is restricted to holders who remain employed ("a local statement: at the employment threshold the wage schedule has a kink"). Under autonomy (Proposition~\ref{prop:autonomy}(ii)), a rise in $z_A$ instead *lowers* wages, $w_j=(1-z_A)z_j$. The parallel sentence about $D$ in the same passage correctly adds "the same for every holder who is employed in both states," while this one drops both the regime qualifier (non-autonomous) and the employment qualifier, so as written it overstates what is proven for the general joint economy before C3 is invoked.

**2.** *"With capacity just above one, it is recovered slowly, and its cumulative cost exceeds its direct cost (part~(iii))."*

**Category (2) — joint (iff) condition turned into a single-parameter claim.** Corollary~\ref{cor:capacity}(iii) states that the cumulative shortfall exceeds the one-cohort fall **if and only if** $\chi a_L<a_H$ — a condition on the relation between $\chi$, $a_L$ and $a_H$, not on $\chi$ alone. "Capacity just above one" fixes only $\chi\approx1$; depending on how close $a_L$ is to $a_H$, $\chi a_L<a_H$ can fail even for $\chi$ barely above 1 (e.g. $a_H=1,\ a_L=0.999,\ \chi=1.002$ violates it). The text presents the cumulative-cost comparison as an automatic consequence of $\chi$'s proximity to one, silently dropping the condition on $a_L,a_H$ that the corollary requires.

**3.** *"A larger foreign share $f$ lowers domestic welfare without changing the progressivity condition."*

**Category (1) — implication not contained in the formal statement.** Proposition~\ref{prop:market} establishes that, after a cost decline $dk<0$, domestic welfare **rises** by $[\rho+(1-f)]Q|dk|$, i.e. a larger $f$ reduces the *size of the welfare gain from the decline*. Stated flatly as "$f$ lowers domestic welfare," the sentence reads as a claim about the level of domestic welfare in general, which the proposition — confined to the marginal response to a cost fall — does not establish.

No other sentences in the section were found to overstate the formal results; the clinic illustration is explicitly hedged ("in the model," "does not say that any real clinic meets them") and the cited claims (Brynjolfsson, Garicano, Athey et al.) are attributed with page numbers rather than presented as the paper's own results.