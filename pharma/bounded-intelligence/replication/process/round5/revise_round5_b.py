"""Round-5b edits (task 法普-20261016-02, return slip round 1, 2026-10-17).
Applied to the output of revise_round5_a.py. Every old string must occur exactly once.
Usage: python revise_round5_b.py <path/to/main.tex>"""
import sys, pathlib
path = pathlib.Path(sys.argv[1]); s = path.read_text(encoding="utf-8")
R = []  # (slip item, old, new)
# ---- §1 must-fix
R.append(("1", r"It is kept by users as the surplus $w-P_C$, and, if $k_t<r_h$, part of it goes to the owner of the codified asset as a margin.",
 r"Users pay $P_C\le w(p_c)$; because the model specifies no downstream demand, it does not say who receives the difference. If $k_t<r_h$, the owner of the codified asset earns the margin $\min\{w,r_h\}-k_t$."))
R.append(("2", r"Under a uniform $G$, the omitted apprenticeships form a band of width $\beta W$ in supervision cost, and the welfare loss is the triangle $(\beta W)^2/(2\bar\kappa)$.",
 r"Under a uniform $G$ and the interior condition $p_c+\beta W\le\bar\kappa$, the omitted apprenticeships form a band of width $\beta W$ in supervision cost, and the welfare loss is the triangle $(\beta W)^2/(2\bar\kappa)$. If the condition fails, the band is truncated at $\bar\kappa$ and the formula does not apply."))
R.append(("2-extent", r"Under a uniform $G$, the gap $a^*-a^m=\beta W/\bar\kappa$ and the loss are larger",
 r"Under a uniform $G$ with $p_c+\beta W\le\bar\kappa$, the gap $a^*-a^m=\beta W/\bar\kappa$ and the loss are larger"))
R.append(("3", r"Under a non-autonomous assistant each follow-up needs a worker, so the workers gain. If the assistant could contact patients and adjust treatment on its own, part~(ii) would apply, and cheaper packaging would raise the return to compute, not workers' pay.",
 r"Under a non-autonomous assistant each follow-up needs a worker, so the workers who are employed gain. If the assistant could contact patients and adjust treatment on its own, and the packaging cost were below what AI solves alone, $C(D)<z_A$, part~(ii) would apply, and cheaper packaging would raise the return to compute, not workers' pay. With $C(D)\ge z_A$ the autonomous case lies outside Proposition~\ref{prop:autonomy}."))
R.append(("4", r"And new workers are trained beside experienced ones in sufficient numbers (condition~5). Proposition~\ref{prop:synthesis} says that these conditions together suffice in the model, and that each of the five, failing alone, can break the result. It does not say that any real clinic meets them.",
 r"And new workers are trained beside experienced ones in sufficient numbers (condition~5). This list only restates the conditions in the clinic's words. Sufficiency in Proposition~\ref{prop:synthesis} requires the formal conditions C1--C5, which include items the list leaves out: holdings relative to income, $\tau(y)/y$, non-increasing; condition (d3) for the households that verify for themselves; the employment threshold $C(D^0)<s^0_{\min}$; a subsidy $s\ge\bar p-p_c$; mentor capacity $\chi\ge1$; and, under pooled liability, $L$ replaced by $(1+\ell)L$. The example does not establish any of these conditions, and it does not say that any real clinic meets them."))
R.append(("4-lead", r"The clinic's AI assistant spreads gains toward poorer patients and workers, in the model, when the following hold.",
 r"In the clinic's words, the conditions read as follows."))
# ---- §2 minor
R.append(("5", r"and some low-verification households do not buy at all.",
 r"and households with $R(y)<p_e(y)$ are excluded, with exclusion concentrated at low verification capacity."))
R.append(("6", r"These are the orders of magnitude at which the verification channel is visible in the field. They are not estimates of $e$, $v$ or $\theta$.",
 r"These numbers are compatible with the verification channel but do not identify it, and they are not estimates of $e$, $v$ or $\theta$."))
R.append(("7", r"so every saving in packaging cost reaches her, and so does every improvement in what AI solves, unless she already solves every problem ($z_j=1$).",
 r"so every saving in packaging cost reaches each holder who is employed, and so does every improvement in what AI solves, unless the holder already solves every problem ($z_j=1$)."))
R.append(("8", r"A supplier with market power keeps part of every cost decline.",
 r"When pass-through is incomplete, $\rho<1$, a supplier with market power keeps part of every cost decline."))
R.append(("9", r"With $\chi$ well above one the cap is soon relaxed. With $\chi$ close to one it binds for several cohorts, and the cumulative shortfall exceeds the one-cohort fall whenever $\chi a_L<a_H$ (part~(iii)).",
 r"If $\chi a_L<a_H$, the cap binds beyond the first cohort and the cumulative shortfall exceeds the one-cohort fall (part~(iii)). For $\chi>1$, recovery takes $\lceil\ln(a_H/a_L)/\ln\chi\rceil$ further cohorts, more the closer $\chi$ is to one (part~(ii))."))
R.append(("10", r"If each experienced worker can supervise only one or two trainees, a year in which the clinic hires no trainees leaves it with fewer supervisors later,",
 r"If each experienced worker can supervise only a few trainees, a period in which the clinic hires fewer trainees leaves it with fewer supervisors later,"))
R.append(("11", r"which does not depend on the density of the conversion layer and falls as $z_A$ rises.",
 r"which does not depend on the density of the conversion layer and falls weakly as $z_A$ rises, strictly for $z_j>0$."))
R.append(("12", r"Condition~4 then fails first in low-density catchments.",
 r"If the new threshold is crossed, condition~4 fails first in low-density catchments."))
R.append(("13", r"In each case the clinic's gains would cease to be guaranteed in the model.",
 r"Each force removes the model's guarantee only if it makes the corresponding formal condition fail."))
R.append(("14", r"The model has no moral hazard, which is why we do not assume community rating.",
 r"Premiums are experience-rated by a modelling choice made in revision round~1, which keeps the term in which the expected loss varies with verification capacity (Proposition~\ref{prop:verification}); the model has no moral hazard."))
# ---- §2-2 source wording
R.append(("15", r"because tacit knowledge is neither verifiable nor usable as collateral (pp.~26--27).",
 r"because tacit knowledge is neither verifiable nor usable as collateral (pp.~3, 9)."))
R.append(("16a", r"\citet{steyvers2025know} document a calibration gap: non-expert users overestimate the accuracy of LLM answers,",
 r"\citet{steyvers2025know} document a calibration gap: participants overestimate the accuracy of LLM answers,"))
R.append(("16b", r"together with evidence that non-experts overestimate the accuracy of AI answers \citep{steyvers2025know}.",
 r"together with evidence that users overestimate the accuracy of AI answers \citep{steyvers2025know}."))
R.append(("16c", r"non-experts' confidence in LLM answers was worse calibrated than the models' own confidence,",
 r"participants' confidence in LLM answers was worse calibrated than the models' own confidence,"))
R.append(("17", r"In \citet[p.~107]{athey2026competition} it does, because it changes income and entry.",
 r"In \citet{athey2026competition} it does, because it changes income (p.~107) and reduces the number of active firms and thus variety (p.~110)."))
R.append(("18", r"For comparison, \citet[p.~24]{kogan2023displacement} find that even labour-augmenting exposure lowered incumbents' cumulative five-year earnings by 1--1.7\% (median to 90th percentile), while entrants gained.",
 r"For comparison, in \citet{kogan2023displacement} even labour-augmenting exposure is associated with a decline of 1--1.7\% in incumbents' cumulative five-year earnings (median to 90th percentile; p.~24), while it raises entrants' earnings (abstract)."))
R.append(("19", r"Visits left in red were about 20\% of AI-group visits, against about 40\% in the non-AI group (p.~18, Fig.~6a).",
 r"Once Penda had iterated on the tool to improve its reliability and started active deployment, the share of AI-group visits left in red fell to 20\%, while it stayed at 40\% in the non-AI group (p.~18)."))
R.append(("20a", r"adoption that displaces domestic production that is costly to rebuild weakens a country's outside option in bargaining over AI prices (p.~111).",
 r"if adoption displaces domestic production that is costly to rebuild, a country's outside option in bargaining over AI prices may deteriorate (p.~111)."))
R.append(("20a-extent", r"and capability loss that weakens a country's outside option.",
 r"and capability loss, through which a country's outside option may deteriorate."))
R.append(("20b", r"Rules that keep a person in the loop, which \citet[p.~318]{brynjolfsson2026hayek} list, act against this force.",
 r"\citet[p.~318]{brynjolfsson2026hayek} list rules that keep a person in the loop as limits on centralisation; on our reading, such rules also act against this force, because they keep AI non-autonomous."))
# ---- §4 disclosure and version line
R.append(("E", r"The expansion has not yet been reviewed by the commissioning party or by a non-Claude model.",
 r"On 17 October 2026 the commissioning research agent checked the new text paragraph by paragraph, and \texttt{gpt-5.6-terra}, through the same tool as before, reviewed the new paragraphs. They found 20 places where the wording went beyond the formal results or the sources: four statements that exceeded what the propositions prove, ten minor overstatements, and six in which the wording or page of a source was not exact. This revision (round~4) corrects them."))
R.append(("T1", r"{\large Revised draft (revision round~3), 16 October 2026}",
 r"{\large Revised draft (revision round~4), 17 October 2026}"))
R.append(("T2", r"one omission in the README was corrected afterwards. The review records are published in the replication package",
 r"one omission in the README was corrected afterwards. On 16--17 October 2026 the text was expanded to develop each result, without changing the propositions, proofs or numbers; the commissioning research agent and \texttt{gpt-5.6-terra} reviewed the expansion, and the wording they found to go beyond the formal results or the sources was corrected (revision round~4). The review records are published in the replication package"))
for item, old, new in R:
    n = s.count(old); assert n == 1, (item, n, old[:70])
for item, old, new in R:
    s = s.replace(old, new)
path.write_text(s, encoding="utf-8")
print(f"APPLIED {len(R)} REPLACEMENTS")
