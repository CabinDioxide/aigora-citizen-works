- Task: 法普-20261014-01
- Date: 2026-10-14
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Reading note — Otis, Clarke, Delecourt, Holtz, Koning, Kenya GenAI field experiment

## Bibliographic record (verified)
**Published:** Nicholas G. Otis, Rowan Clarke, Solène Delecourt, David Holtz, Rembrand Koning. 2026. "The Uneven Impact of Generative Artificial Intelligence on Entrepreneurial Performance: Evidence from a Field Experiment in Kenya." *Management Science*, articles in advance, doi:10.1287/mnsc.2024.06909. Verified on the Crossref record (read 2026-10-14). Crossref gives no volume, issue or pages.
**Note the title:** the published title says "Generative Artificial Intelligence", not "Generative AI".
**Version read:** OSF preprint "The Uneven Impact of Generative AI on Entrepreneurial Performance: Evidence from a Field Experiment in Kenya", osf.io/hdjpk, file version hdjpk_v3, downloaded 2026-10-14. The preprint has no date on its title page.
Earlier versions: SSRN 4671369 (2024) and OSF hdjpk (2023).
The Management Science version of record was not read: the publisher page is not open access, and no paywall was bypassed. Under the commissioning party's ruling the preprint is used and declared. **Numbers are from the preprint.**

## Pages
113 PDF pages; PDF page = printed page.
Read: pp. 1–16 (introduction, setting, design, estimation), the results summary on pp. 3–4, the discussion on pp. 32–35, and Table 1 (p. 52).
**Not read line by line:** the mechanism text analysis on pp. 17–31 (read only in summary, pp. 3–4) and the appendices.

## Argument
GPT-4 business advice delivered over WhatsApp has no detectable average effect on revenues and profits. Effects diverge sharply by baseline performance. The divergence comes not from the questions asked or the advice received, but from which suggestions entrepreneurs selected and implemented (abstract; p. 4).

## Design
RCT with 640 Kenyan SMB entrepreneurs (p. 9; p. 34). Treatment: a GPT-4-powered assistant over WhatsApp. Control: ILO business-training guides, also over WhatsApp (pp. 10, 13). Random assignment stratified by quartiles of pre-treatment performance (p. 10).
Outcome: a Kling–Liebman–Katz standardized index of weekly and monthly profits and revenues, in SD units (p. 14). OLS with pre-treatment controls; SEs clustered by individual (p. 15).

## Numbers the project needs
| Quantity | Value | Location |
|---|---|---|
| Sample | 640 entrepreneurs; 2,514 post-treatment observations | p. 9; Table 1 |
| Average effect | 0.04 SD (s.e. 0.05), n.s. | Table 1 col A |
| Below-median baseline performers | −0.08 SD (s.e. 0.03), p < 0.01 | Table 1 col B |
| Above-median baseline performers | +0.16 SD (s.e. 0.09), p < 0.10 | Table 1 col C |
| Interaction AI × above-median | +0.23 SD (s.e. 0.09), p < 0.05 | Table 1 col D |
| Authors' translation into percentages | low performers "nearly 10% worse"; high performers "may have benefited by over 15%" | abstract; pp. 3–4 |

**Caution for the paper:** the percentage translations are the authors'. The estimated quantities are SD effects on an index. The paper should report the SD effects (Table 1), and the percentages only as the authors' statement.

## Mechanism (relevant to verification)
- Low performers more often implemented "generic" advice, such as cutting prices or advertising, which could hurt if inappropriate.
- High performers worked with the AI to find tailored changes.
- The authors write that "only high performers were able to both effectively screen and implement valuable, as opposed to detrimental, AI-generated suggestions" (p. 4).
- The authors also note that AI "can also produce ineffective or overconfident 'solutions'" and that entrepreneurs may lack the judgment to select among them (p. 2).

## Caveats
- Self-reported performance. The authors cannot fully rule out reporting-based explanations of the mechanism results (p. 34).
- Small sample (p. 34).
- The sample is relatively educated: only 10% have no college experience (p. 8).

## Relevance
**Condition 2.** This is the canonical "gap widens" case under deployment type A: the user selects from open-ended advice and bears error risk. It directly motivates π(v) and the selection channel. The paper does not measure users' beliefs about the error rate, so it shows **nothing directly about overconfidence**. The perception-bias assumption in 3.3 therefore needs separate support.
