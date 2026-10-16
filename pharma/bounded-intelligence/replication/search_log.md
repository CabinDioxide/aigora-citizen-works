- Task: 法普-20261014-01
- Date: 2026-10-14
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Systematic search log (2026-10-14)

## Honest note on procedure
The inclusion criteria below were written **after** the first result listing had been printed to screen, not before. They are therefore not pre-registered in the sense required by proposal 017. This search is a supplementary search for the paper's evidence section, not a systematic review.

## Inclusion criteria (for the evidence section)
- (a) Randomised or quasi-experimental studies, 2023–2026, of generative-AI/LLM assistance that report effects by baseline skill, experience, education or income; **or**
- (b) experimental evidence on users' calibration of, or reliance on, LLM outputs; **or**
- (c) evidence or theory on generative AI and entry-level work / apprenticeship.
- Full text must be openly obtainable to support any number.

## Databases and strings
Raw results: `lit/search_results.json` (sandbox; copied to replication/search_results.json).

| # | Database | Query string | Filter | Total hits reported | Screened |
|---|---|---|---|---|---|
| 4 | S2 | `automation bias generative AI advice users overconfidence` | 2023-2026 | 91 | top 25 by relevance |
| 7 | arXiv | `all:"generative AI" AND all:heterogeneous AND all:experiment AND all:productivity` | None | 9 | top 9 by relevance |
| 8 | arXiv | `all:overreliance AND all:"large language model" AND all:users` | None | 23 | top 23 by relevance |
| 9 | Crossref | `generative AI field experiment heterogeneous effects baseline skill` | from 2023-01-01 | 1371032 | top 25 by relevance |
| 10 | Crossref | `large language model randomized experiment productivity inequality low-skill workers` | from 2023-01-01 | 108512 | top 25 by relevance |
| 11 | Crossref | `overreliance large language model users verification accuracy experiment` | from 2023-01-01 | 1549502 | top 25 by relevance |
| 12 | Crossref | `generative AI entry-level employment young workers` | from 2023-01-01 | 949658 | top 25 by relevance |
| 13 | Crossref | `AI apprenticeship on-the-job learning novices experts` | from 2023-01-01 | 1681761 | top 25 by relevance |

The Semantic Scholar search API returned HTTP 429 (rate limit) for 5 of 6 strings. Those strings were re-run on Crossref (`query.bibliographic`, from-pub-date 2023-01-01). Crossref's "total hits" is the full-text match count and is not meaningful as a recall measure.

## Screening outcome (title-level, then full text where obtainable)
| Study | Criterion | Decision | Reason / status |
|---|---|---|---|
| Brynjolfsson, Li, Raymond (QJE 2025) | a | include | required reading; read (NBER WP) |
| Otis et al. (Mgmt Sci 2026) | a | include | required reading; read (OSF preprint) |
| Cruces et al. (arXiv 2608.04198) | a | include | required reading; read |
| Lombardi, Cruces, Galiani 2025, "Does large language model technology really equalize low- and high-skill workers?" | a | exclude as probable earlier version | not opened |
| Noy & Zhang 2023 (Science) | a | not used | full text not obtained in this pass |
| Peng et al. 2023 (arXiv 2302.06590) | a | not used | not read in this pass |
| Kreitmeir & Raschky 2024; Cui, Demirer et al. 2024; Marsal & Perkowski 2025; Roessler et al. 2026 (AEA RCT registry entry); Luo et al. 2026; Wu & Xu 2025; Sun et al. 2025 | a | candidates, not read | listed for the commissioning party's proposal-017 screening |
| Steyvers et al. (NMI 2025) | b | include | read (arXiv v2) |
| Agarwal, Moehring, Rajpurkar, Salz (NBER w31422, rev. Aug 2026) | b | include | read (introduction + theory) |
| Rathi, Jurafsky, Zhou 2025 (arXiv 2507.06306v2) | b | candidate, not read | |
| Kim et al. 2024/2025 (uncertainty expression; appropriate reliance) | b | candidates, not read | |
| Brynjolfsson, Chandar, Chen (Aug 2026 version) | c | include | read (introduction) |
| Hosseini Maasoum & Lichtinger (SSRN 5425555) | c | include, **UNOBTAINABLE** on 2026-10-14; full text (version of 6 June 2026) obtained by the commissioning party on 2026-10-16 and read | SSRN blocks automated download |
| Ide (arXiv 2507.16078v9) | c | include | read |
| **Akin 2026, "The Apprenticeship Externality: Generative AI, Entry-Level Work, and the Future Supply of Expertise" (SSRN 6809082)** | c | concurrent work, **not read** | SSRN; not obtainable. Title overlaps with the paper's contribution 3 → positioning risk, reported in 回执 |
| **Singh 2026, "Generative AI and the Collapse of Apprenticeship Labor Markets" (SSRN 6779239)** | c | concurrent work, not read | same |
| Tseng 2026, "The Judgment Bottleneck" (SSRN 7399918) | b/c | candidate, not read | |
| Kogan et al. (NBER w31846, rev. Nov 2025) | c | include | read |
