- Task: 法普-20261014-01
- Date: 2026-10-14
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Reading note — Brynjolfsson, Li, Raymond, "Generative AI at Work"

## Bibliographic record (verified)
**Published:** Erik Brynjolfsson, Danielle Li, Lindsey Raymond. 2025. "Generative AI at Work." *Quarterly Journal of Economics* 140(2): 889–942. doi:10.1093/qje/qjae044. Verified on the Crossref record (api.crossref.org; read 2026-10-14).
**Version read:** NBER Working Paper 31161, "Generative AI at Work", April 2023, revised November 2023. doi:10.3386/w31161 (Crossref). Downloaded from nber.org.
The QJE PDF at academic.oup.com returned an automated-access challenge (HTTP 403), so it was not read; no workaround was attempted. Under the commissioning party's ruling, the working-paper version is used and declared. **Numbers below are from the WP and may differ from the QJE version.** Cruces et al. (2026, p. 4) cite the published version as 5,172 agents and a 15% average effect, versus 5,179 agents and 14% in the WP.

## Version read: pages
67 PDF pages. Printed page = PDF page − 2. References below are printed pages of the WP.
Read: abstract, §1 (pp. 1–4), §§2–3 setting and data (pp. 8–13), §4 main results and heterogeneity (pp. 14–17), §5 adherence and learning (pp. 17–19).
**Not read line by line:** §6 (customer sentiment, attrition) and the appendices.

## Argument
A generative-AI assistant that suggests responses to customer-support agents raises productivity, measured as resolutions per hour, most for novice and low-skill workers. The authors interpret this as the AI disseminating the best practices of more able workers (abstract; p. 2).

## Design
Staggered rollout across 5,179 agents (abstract). Two-way fixed effects and event studies (p. 14). Agents see AI-suggested replies and choose whether to use them.

## Numbers the project needs
| Quantity | Value | Location (WP) |
|---|---|---|
| Average effect on resolutions per hour | +14% | abstract; Table 2 (p. 14) |
| Effect for novice/low-skilled workers | +34% | abstract |
| Lowest pre-AI skill quintile | +0.29 log points (34%) | p. 15, Fig. 5A |
| Highest skill quintile | no productivity increase; "evidence that AI assistance may decrease the quality of conversations by the most skilled agents" | pp. 2, 15 |
| Agents with < 1 month tenure | +0.38 log points (46%) | p. 16, Fig. 5B |
| Average adherence to AI recommendations | 38% (IQR 23–50%) | p. 18, Fig. 9A |
| Returns higher for agents who adhere more | qualitative | p. 18, Fig. 9B |
| Gains persist during software outages (learning) | qualitative; larger with more exposure and adherence | p. 3, §5 |

## Heterogeneity / mechanism
- Agents "frequently ignore recommendations" (p. 18). Adherence rises over time and converges across tenure and skill by the end of the sample (p. 17).
- **Relevance to verification:** the setting is structured (recommendations are suggested replies within a well-defined task, with a firm and manager in the loop). Errors are low-stakes and quickly observable by the agent through the customer's response.

## Caveats
- Not designed to identify aggregate employment or wage effects (p. 2).
- In the volume (ch. 12, p. 310), Brynjolfsson & Hitzig cite this paper as AI "capturing" top agents' tacit expertise. **Under our premise,** what transfers is the codifiable part of best practice (scripts, phrasing). The paper must say explicitly that we read it that way, and that ch. 12 reads it differently.

## Relevance
- **Condition 2:** gaps narrow in a structured, low-verification-cost setting (deployment type B).
- **Condition 5:** a learning effect during outages, i.e. practice rather than pure offloading.
