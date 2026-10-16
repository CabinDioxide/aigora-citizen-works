- Task: 法普-20261014-01
- Date: 2026-10-14
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Reading note — Korom et al. (2025), Penda Health AI Consult

## Bibliographic record (verified)
Robert Korom, Sarah Kiptinness, Najib Adan, Kassim Said, Catherine Ithuli, Oliver Rotich, Boniface Kimani, Irene King'ori, Stellah Kamau, Elizabeth Atemba, Muna Aden, Preston Bowman, Michael Sharman, Rebecca Soskin Hicks, Rebecca Distler, Johannes Heidecke, Rahul K. Arora, Karan Singhal. 2025. "AI-based Clinical Decision Support for Primary Care: A Real-World Study." arXiv:2507.16947v1 [cs.CL], 22 July 2025.
Verified against the arXiv API record (export.arxiv.org; read 2026-10-14). The record shows only v1.
Affiliations: Penda Health, Nairobi County, OpenAI (p. 1). Several authors are OpenAI staff, so the study is partly by the tool's supplier.

## Version read
arXiv v1 PDF; PDF page numbers equal printed page numbers.
Read: pp. 1–8 (introduction, background, design) and pp. 14–19 (rating procedure and results). Also read §5 Discussion and Limitations, pp. 24–26. The appendix (to p. 125) was **not** read except Table 3 (p. 16) and Table 5 (p. 19).

## Argument
An LLM safety net placed in the clinical workflow measurably reduced documentation, diagnostic and treatment errors in live primary care. It flags potential errors with a traffic-light severity and leaves the decision to the clinician.

## Design
A "pragmatic cluster-assigned study" (p. 2). The authors state that the way Penda implemented the assignment "was equivalent to randomly allocating clinicians stratified by clinic", with block size 2 and a 1:1 allocation ratio at the clinic level (p. 7, fn. 2). [Wording revised 2026-10-16, task 法普-20261016-01, to follow the source.] Half of the clinicians in each clinic received AI Consult between 30 January and 18 April 2025 (p. 7).
Scale: 39,849 visits, 106 clinicians, 15 clinics (p. 3).
Quality was rated by independent physicians on de-identified documentation. 5,666 visits were rated; 1,387 of them by two raters (p. 14). Analysis used Fisher exact tests, Katz CIs for the relative risk reduction, and the Benjamini–Hochberg correction (p. 14).

## Numbers the project needs
| Quantity | Value (95% CI) | Location |
|---|---|---|
| RRR, diagnostic errors | 16.0% (6.9–24.2), NNT 18.1 | p. 16, Table 3 |
| RRR, treatment errors | 12.7% (6.8–18.3), NNT 13.9 | p. 16, Table 3 |
| RRR, history-taking errors | 31.8% (21.9–40.5) | p. 16 |
| RRR, investigation errors | 10.3% (1.0–18.8) | p. 16 |
| "Left in red" rate, AI vs non-AI group (main period) | ~20% vs ~40% | p. 18, Fig. 6a |
| "Started red" rate in AI group, start → end of study | 45% → 35% (non-AI group steady at 45–50%) | p. 18 |
| Patient-reported "not feeling better" | 3.8% (AI) vs 4.3% (non-AI); not significant | p. 3 |
| Error rate when final AI output red / yellow / green, diagnosis | 46.2% / 35.3% / 20.5% | p. 19, Table 5 |

Note: the commissioning party's summary says "13% fewer treatment errors". The table value is **12.7%**; the abstract rounds it to 13% (p. 1). The paper should report 12.7% (Table 3).

## Mechanism relevant to the project
- The tool is a verification layer. The clinician remains the decision-maker. Effects depended on adherence: clinicians sometimes ignored red alerts (pp. 18, 25).
- "Started red" fell over time in the AI group. The authors read this as clinicians learning, i.e. practice rather than offloading (p. 18).
- LLM raters found larger effects than physicians (e.g., 22% treatment, 19% diagnostic per GPT-4.1; p. 3). The authors flag a possible Goodhart's-law concern (p. 26).

## What it does not answer
- No heterogeneity by clinician skill or experience is reported in the sections read.
- Not powered for patient outcomes. The follow-up call response rate was 40% (p. 26).
- Single provider network.
- Short study period.
- Supplier co-authorship.

## Relevance
**Condition 2, deployment type C (a trained intermediary verifies).** It shows that an intermediary can absorb AI error risk on behalf of patients, who are the low-verification party. **Condition 5:** the practice/learning effect.
