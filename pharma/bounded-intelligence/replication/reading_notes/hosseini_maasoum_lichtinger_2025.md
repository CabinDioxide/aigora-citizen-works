- Task: 法普-20261016-01 (supersedes the UNOBTAINABLE note of task 法普-20261014-01)
- Date: 2026-10-16
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Reading note — Hosseini Maasoum & Lichtinger, "Generative AI as Seniority-Biased Technological Change: Evidence from U.S. Résumé and Job Posting Data"

## Bibliographic record (verified)
Seyed Mahdi Hosseini Maasoum and Guy Lichtinger. "Generative AI as Seniority-Biased Technological Change: Evidence from U.S. Résumé and Job Posting Data." SSRN Working Paper 5425555, doi:10.2139/ssrn.5425555 (Crossref record, checked 2026-10-14).
- The cover of the version read prints the first author as "Seyed M. Hosseini" (with the e-mail address shosseinimaasoum@…). The reference list keeps the Crossref/SSRN form "Hosseini Maasoum"; the variant is noted here.
- Citation year 2025 refers to the first version.

## Version read
- SSRN version: "First Version: August 31, 2025; This Version: June 6, 2026", 109 pages (42 pages of main text and references to p. 45, then a supplemental appendix numbered A.1–A.64).
- Obtained on 2026-10-16 by the commissioning party, which downloaded the PDF from the SSRN page opened by the owner in a browser. The file is in the project's 材料/ folder. It is copyrighted and is not included in this package.
- Read in full: main text pp. 1–42, the references, and the supplemental appendix pp. A.1–A.64. Main-text printed pages equal PDF pages.

## Argument
The paper asks whether generative AI is "seniority-biased technological change" that reduces demand for junior workers within firms (p. 3).
- **Framework** (§3, pp. 12–17; Proposition 1, eq. 5, p. 14): a task-based model in the spirit of Acemoglu–Autor and Acemoglu–Restrepo. It decomposes the change in junior labour demand into three parts:
  - displacement (<0);
  - productivity (≤0 when σ ≤ 1);
  - reallocation of formerly senior tasks to juniors (≥0).
  Juniors alone face displacement, so they lose more than seniors whenever reallocation is small (p. 16).
- **Timing** (§5.2.4, pp. 34–35; App. A.5, pp. A.19–A.21): the early decline is read as forward-looking: firms cut hiring for roles they expect to automate. The authors state that their data cannot test this directly (p. 8).

## Data
- Revelio Labs LinkedIn-based résumé data linked to Revelio job postings (pp. 17–19): 281,111 U.S. firms; 161,192,969 positions held by 65,470,800 workers since 2015; 198,773,384 postings since 2021 (p. 19).
- Seniority is Revelio's seven-level classification, grouped as juniors (Entry, Junior) and seniors (Associate and above) (p. 18).
- Validation of representativeness and of the seniority classification: App. A.1–A.2, pp. A.1–A.12.

## Identification
- **Adoption**: a firm is an adopter if it posted at least one "GenAI integrator" vacancy, identified by keywords and then an LLM classifier (pp. 20–21). 10,433 adopters, 3.71% of firms, about 16% of positions (p. 21). Validated with worker position descriptions (p. 22, Fig. 3; App. A.8).
- **Designs** (§5.2–5.5):
  - a triple difference, junior vs senior employment, within adopting vs non-adopting firms, with firm-by-time and industry-by-seniority-by-time fixed effects (eq. 11, pp. 29–31);
  - a triple difference by occupational exposure (eq. 12, pp. 32–33);
  - a staggered event study (Callaway–Sant'Anna; eq. 13, pp. 35–36);
  - a flow decomposition (eq. 15, pp. 40–41).
- **Confounders addressed** (§5.4, pp. 36–39): monetary tightening (Table 3, p. 38), post-COVID dynamics, remote work (App. A.24), and labour-supply shocks (job postings, App. A.25).
- **Caveats stated by the authors**: possible unobserved confounding; "silent" adoption is missed; cross-sectional estimates do not generalise to the aggregate (the "missing intercept") (pp. 8, 41–42).

## Main estimates (with locations)
| Quantity | Estimate | Location |
|---|---|---|
| Triple difference, junior relative to senior employment, adopters vs non-adopters | flat through 2022Q4, then "reaching roughly a 9 percent decline in junior employment relative to senior employment after six quarters" | p. 5; p. 31, Fig. 5 |
| DiD, junior employment at adopters vs non-adopters (no senior comparison) | "fell by about 9 percent relative to controls six quarters after the diffusion of GenAI"; senior coefficients trend upward | p. 29; App. A.17, p. A.49, Fig. A.21 |
| Triple difference by exposure, juniors | about 7 log points decline in high- vs low-exposure junior employment at adopters by 2025Q1; senior series keeps rising | p. 33, Fig. 6 (p. 34) |
| Event study around adoption date, juniors | decline begins about two quarters after adoption, 8% after eight quarters; no pre-trend | p. 36, Fig. 7; seniors: no decline, App. A.27 |
| Junior flows, adopters vs non-adopters after 2023Q1 | hires −4.006 per firm-quarter (pre-mean 5.059, about −80%); separations −1.089 (pre-mean 4.154); promotion rate +0.033 pp (pre-mean 0.822) | p. 40; Table 4, p. 41 |
| Task bundles | 1 SD higher task exposure → about 4 pp larger DHS contraction of that task in junior bundles at adopters; no effect for seniors; no evidence of reallocation of senior-intensive tasks to juniors | Table 1, pp. 26–27; Table 2, pp. 27–28 |
| Augmented adoption measure | triple difference about −0.09, similar to baseline | App. A.4, pp. A.17–A.18 |

Note on the 9%. The headline figure (abstract framing, p. 5, Fig. 5) is junior **relative to senior** employment. The simple DiD of junior employment relative to non-adopters (p. 29, App. A.17) is also about 9% after six quarters. Ide (2025, p. 28) reports the figure as junior employment relative to non-adopters, which matches the DiD. The paper cites the triple difference, the authors' main design.

## Relation to this paper
- **§3.6 and condition 5.** This is direct evidence on the entry-task channel: in adopting firms, exposed tasks leave junior bundles (Table 1), and junior employment falls mainly through **reduced hiring** (Table 4). That margin corresponds to market apprenticeship a^m falling in Proposition 6. The authors do not measure training or mentoring; their conclusion notes that early-career jobs are central to skill formation and that firms' redesign of training and career ladders is an open question (p. 42).
- **Consistency with Brynjolfsson, Chandar & Chen.** Both find declines concentrated among early-career workers in exposed occupations, with senior employment unaffected (pp. 29, A.34).
- **Not used in the model calibration.** The apprenticeship illustration in §4 is anchored only to Brynjolfsson, Chandar & Chen; this paper's estimates are used in the evidence section only.

## Not used here, or not answered by the paper
- Not used here: the conceptual framework's decomposition; the school-quality heterogeneity (U-shaped, App. A.3); the Anthropic Economic Index analysis (§5.1.2, App. A.7); the monetary-policy test.
- Not answered by the paper:
  - whether the decline persists, or reflects anticipated rather than realised automation (pp. 7–8, 34–35);
  - effects on training, apprenticeship intensity or mentor-to-apprentice ratios (no measure);
  - wages;
  - distribution across household income;
  - aggregate effects (missing intercept, p. 8).
