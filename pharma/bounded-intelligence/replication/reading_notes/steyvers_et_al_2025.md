- Task: 法普-20261014-01
- Date: 2026-10-14
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Reading note — Steyvers et al. (2025), "What large language models know and what people think they know"

## Bibliographic record (verified)
Mark Steyvers, Heliodoro Tejeda, Aakriti Kumar, Catarina Belem, Sheer Karny, Xinyue Hu, Lukas W. Mayer, Padhraic Smyth. 2025. "What large language models know and what people think they know." *Nature Machine Intelligence* 7(2): 221–231. doi:10.1038/s42256-024-00976-7. Verified on the Crossref record (2026-10-14).
**Version read:** arXiv:2401.13835v2 (13 February 2025). The arXiv record links the NMI DOI. nature.com was not reachable from the sandbox.

## Pages
32 PDF pages. Read: pp. 1–8 (abstract, introduction, methods, participants) and pp. 12–13 (calibration and discrimination results). Appendix figures were not read.

## Argument / design
Participants (301 Prolific users in the US; p. 8) estimate the probability that an LLM's answer is correct from its explanation alone. The questions are MMLU multiple-choice and TriviaQA short-answer; the LLMs are GPT-3.5, PaLM2 and GPT-4o (pp. 3–8).
The participants are deliberately non-experts in the question domains (pp. 4–5).

## Findings
- **Calibration gap:** human confidence in LLM answers is worse calibrated (higher ECE) than the model's own confidence, across all LLMs and question types. Much of the error comes from participants giving high confidence when model accuracy is much lower (pp. 12–13; Fig. 2–3).
- **Discrimination gap:** humans discriminate correct from incorrect LLM answers worse than model confidence does (p. 13).
- Longer explanations raise user confidence without raising accuracy (abstract).
- Aligning explanation language with model confidence narrows both gaps (abstract).

## Relevance
**Condition 2.** Direct evidence for the perception-bias assumption in design §3.3: users **without** domain expertise overestimate the probability that AI output is correct (π̂ < π). It does not compare low- and high-expertise users, so it supports bias among low-v users but not the gradient across v. The paper must say this.
It also supports error-rate disclosure as an instrument class: calibrated uncertainty language narrows the gap.

## Correction (2026-10-17, task 法普-20261016-02, return slip round 1)
The description "deliberately non-experts" above overstates the source. The participants are 301 people recruited through Prolific (p. 8). The authors write that they "anticipate" the questions will be difficult without the LLM's help because "the majority of participants in our experiments lack domain expertise" (pp. 4–5, arXiv v2, reopened 2026-10-17). This is an expectation, not a measured property of the sample. The paper therefore now says "participants" or "users".
