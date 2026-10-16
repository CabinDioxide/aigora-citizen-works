- Task: 法普-20261014-01
- Date: 2026-10-14; revised 2026-10-15 (revision round 1)
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Evidence review by condition (step 4)

**Conventions**

- Every number below carries a page, table or figure number in the **version read**. The version is identified in the corresponding reading note in `reading_notes/`.
- "Volume" means Agrawal, Brynjolfsson and Korinek (eds., 2026). Volume pages are taken from the OCR running heads. The pages that support numbers in the paper are checked against the PDF in `reading_notes/volume_pdf_checks.md`.
- No new estimation is claimed.
- **Supporting** means consistent with the model's prediction for that condition. **Contrary** means inconsistent with it. **Absent** means the evidence the condition requires does not exist, or was not read.

## Condition 1 — who holds the conversion input

| Supporting | Contrary | Absent |
|---|---|---|
| Brynjolfsson & Hitzig (volume ch. 12, Prop. 2, p. 308): if information assets are inalienable, decentralised ownership of the complementary tangible assets yields higher joint surplus. | The same chapter (§12.4.2, pp. 308–310) gives examples of AI capturing tacit know-how, among them call-centre best practice (citing Brynjolfsson, Li & Raymond) and radiologists' eye-tracking data. If those examples generalise, Regime C applies and the premise fails. | No study measures the distribution of conversion-input holdings (τ(y)) across income. |
| Ch. 12 §12.6.1 (p. 316): embodied skills and the long tail favour delegation "to the human on the spot". | Garicano (volume, ch. 1 comment, p. 33) states that AI "can acquire tacit knowledge". Ide & Talamas (2025), as summarised in volume ch. 7 (p. 179), model AI that performs non-codifiable work. | No study measures the share of value accruing to local intermediaries before and after AI adoption. |
| Brynjolfsson, Chandar & Chen (Aug 2026, p. 3; introduction summary only): occupations involving tacit knowledge show faster employment growth for experienced workers. | | |

## Condition 2 — verification capacity and its gradient

| Supporting | Contrary | Absent |
|---|---|---|
| **Gap widens when users select from open-ended advice.** Otis et al. (OSF preprint, Table 1): below-median baseline performers −0.08 SD (s.e. 0.03); above-median +0.16 SD (s.e. 0.09); interaction +0.23 SD (s.e. 0.09); 640 entrepreneurs (p. 3). Questions asked and advice received were similar; what differed was which advice was selected and implemented (pp. 3–4). | **Gap narrows in structured settings.** Cruces et al. (arXiv v1, Table 1): the education gap of 0.548 SD without AI falls to 0.139 SD with AI (−0.408 SD, s.e. 0.122); 75% of the gap closed (p. 15); 1,174 participants. This is consistent with the model only if the verification burden of this task is low. Our reading is that it is, because the AI was preloaded with the task report (p. 8, fn. 10). That classification is ours, not the authors'. | No study measures users' verification capacity directly and relates it to income. |
| **Residual effective-use gap.** Cruces et al. (pp. 3–4, §6): higher-education participants "use the tool somewhat more effectively". Participants "must still evaluate, select, and integrate AI-generated content" (p. 4). | Brynjolfsson, Li & Raymond (NBER WP 31161, Nov 2023): +34% for the lowest-skill quintile, about zero for the highest (pp. 15–16, Fig. 5); 5,179 agents (abstract; p. 11). This is gap narrowing in a structured workflow with suggested replies. | No experiment compares open-ended, embedded and intermediated deployment of the same tool on the same population. This is the commissioning party's proposal 017. |
| **Overestimation of AI accuracy by non-experts.** Steyvers et al. (arXiv v2, pp. 12–13, Fig. 2): human confidence in LLM answers is worse calibrated than the model's own confidence; longer explanations raise confidence without raising accuracy; 301 participants (p. 8). | Agarwal, Moehring, Rajpurkar & Salz (NBER WP 31422, rev. Aug 2026; abstract): professional radiologists *under*-weight AI predictions (automation neglect) rather than over-weight them. | No study shows how the perception bias varies with verification capacity, i.e. the gradient in θ(v). |
| **Intermediated verification reduces errors.** Korom et al. (arXiv v1, Table 3, p. 16): relative risk reduction in diagnostic errors 16.0% (95% CI 6.9–24.2) and in treatment errors 12.7% (6.8–18.3); 39,849 visits, 106 clinicians, 15 clinics (p. 3). The design is a "pragmatic cluster-assigned study" (p. 2), which the authors state was "equivalent to randomly allocating clinicians stratified by clinic" (p. 7, fn. 2). Several authors are affiliated with the AI supplier, which also funded the study (pp. 1, 10). | Korom et al. (p. 3): no significant difference in patient-reported outcomes (3.8% vs 4.3% "not feeling better"). | Korom et al. report no heterogeneity by clinician skill in the sections read. |
| Stiglitz & Ventura-Bolet (volume ch. 14, p. 383): users "are not constantly verifying everything they consume with AI". | | |

## Condition 3 — non-autonomy and packaging cost

| Supporting | Contrary | Absent |
|---|---|---|
| Garicano (volume ch. 1 comment, pp. 34–35): with non-autonomous AI and a compute glut, "wage compression, not collapse". Radiology: demand and wages remain high because systems remain non-autonomous (p. 34). | Brynjolfsson, Chandar & Chen (Aug 2026, abstract and pp. 1–2): employment of 22–25-year-olds in AI-exposed occupations is 19% below the kept-pace counterfactual (June 2026 data; descriptive). This is consistent with displacement where usage substitutes for workers. | No measurement of packaging cost C. No evidence links the density of local intermediaries to the creation of AI-addressable tasks. |
| Garicano (p. 35): C covers "specifying the job, providing the right data, verifying the result, and making it safe to pay for"; "Policy and design shape C". | Kogan et al. (NBER WP 31846, rev. Nov 2025, p. 24): labour-*augmenting* exposure also lowers incumbents' cumulative 5-year earnings, by 1–1.7% (median to 90th percentile). New tasks favour entrants (abstract). | |
| Acemoglu, Manera & Restrepo (NBER WP 27052, pp. 2, 25): effective tax on labour 25.5% (33.5% including means-tested programmes), versus about 10% on equipment and software in the 2010s and 5% after 2017. Moving to optimal taxes raises employment by 4.02% (Table 1). Their reading is that the tax system biases firms toward automation. | | |

## Condition 4 — pricing and leakage of AI supply

| Supporting | Contrary | Absent |
|---|---|---|
| Athey & Scott Morton (volume ch. 4): market power blunts pass-through and leaks rents abroad (p. 99); access fees reduce entry and variety (p. 106); a cap on one fee shifts rents into the other (p. 110); capability loss (p. 111). | — | No pass-through estimates for AI services to end users in low-income settings were read. No evidence on access-fee structures faced by intermediaries. |

## Condition 5 — reproduction of tacit knowledge

| Supporting | Contrary | Absent |
|---|---|---|
| Brynjolfsson, Chandar & Chen (Aug 2026): the 19% kept-pace shortfall for 22–25-year-olds (p. 2). Earlier vintages gave regression estimates of 13% (July 2025 data) and 16% (Sept 2025 data) (p. 3). The decline operates mainly through reduced hiring (abstract). Descriptive, not causal (p. 4). | Brynjolfsson, Li & Raymond (WP pp. 3, 17–19): AI exposure produced durable learning visible during software outages. AI can also teach. | No direct measurement of apprenticeship or supervised-practice intensity under AI adoption. German BIBB contract data have not been analysed by exposure (the commissioning party's proposal 018). |
| Ide (arXiv v9, Props. 4–5, pp. 26–27): entry-level automation lowers long-run growth and possibly welfare, even without fewer entry jobs. The channel is mentor composition, and the friction is non-collateralisable tacit knowledge. | Korom et al. (p. 18): in the AI group, the share of visits that started "red" fell from 45% to 35%. The authors read this as clinicians learning. | — |
| Hosseini Maasoum & Lichtinger (SSRN 5425555, version of 6 June 2026; full text read 2026-10-16): within GenAI-adopting firms relative to non-adopters, junior employment falls relative to senior employment from 2023Q1, "reaching roughly a 9 percent decline in junior employment relative to senior employment after six quarters" (p. 5; Fig. 5, p. 31); concentrated in high-exposure occupations (p. 33, Fig. 6) and driven mainly by slower hiring (Table 4, p. 41). The simple DiD of junior employment at adopters relative to non-adopters is also about −9% (p. 29; App. A.17), which is the form in which Ide (p. 28) reports it. Scope: the authors do not measure training or mentoring, so this row supports only the entry-hiring premise of Condition 5 (fewer junior positions), not the tacit-knowledge reproduction channel itself, for which direct evidence remains absent. | | |
| Dube, MacArthur & Shah (NBER WP 31651, pp. 5, 31–32): a training programme with simulator practice and feedback reduced non-lethal force by 23% and discretionary arrests by 23%; 2,070 officers. This is practice building judgment. **It is a human training programme, not an AI tool**; volume ch. 11 (p. 288) describes its simulator as "algorithmically driven". | | Akin (2026) and Singh (2026), SSRN, closely related titles: **not read**. |

## Liability (supporting condition)

| Supporting | Contrary | Absent |
|---|---|---|
| Directive (EU) 2024/2853: Art. 4(1) defines "product" to include software; Art. 10 presumptions of defectiveness and causation; Art. 22 transposition by 9 December 2026 (Publications Office text, CELEX 32024L2853). Swedish Patientskadelag (SFS 1996:799): §6 compensates where there is "övervägande sannolikhet" that the injury was caused by avoidable care; §12 requires care providers to hold patient insurance (riksdagen.se). | — | No evidence on the incidence of AI-error losses by household wealth. |

## Additional entries (revision round 1, 2026-10-15)

- **Hall comment (volume ch. 2, pp. 63–64), Complementarity.** Across OECD countries with data, the capital share of business R&D averaged about 15% in 1981–2011 and has since fallen to about 10% (p. 63). In the United States in 2021 it was 8.25% (Table 2C.1, p. 64). Hall concludes that about 10% is more appropriate than one-third. The first draft said "US ... about 10%", which was a misstatement and has been corrected.
- **Condition 3, Absent.** No measurement of how the knowledge of conversion-input holders varies with income. This is the third item of the revised C3.
- **Condition 5, Absent.** No evidence on mentor-to-apprentice ratios, the capacity χ of Corollary 1.
- **Canaries (Brynjolfsson, Chandar & Chen 2025; August 2026 version).** 13% (July 2025 data) and 16% (September 2025 data) are earlier-version regression estimates (p. 3). 19% is the August 2026 version's descriptive shortfall (abstract; p. 2).
