- Task: 法普-20261016-02 (ruling on stop point 02, 2026-10-17)
- Date: 2026-10-17
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Reading note — Demirer, Fradkin & Tadelis (2026), "The Emerging Market for Intelligence: How Firms Buy and Sell AI"

## Bibliographic record (verified)
Mert Demirer, Andrey Fradkin, Nadav Tadelis. 2026. "The Emerging Market for Intelligence: How Firms Buy and Sell AI." *Journal of Economic Perspectives* 40(3): 23–46. doi:10.1257/jep.20261506.
The record was checked against Crossref (`citations/raw_record_demirer2026market.json`) by a script that read only the bib entry.

## Version read
- **Version:** the authors' preprint dated **12 June 2026**, `andreyfradkin.com/assets/jep_llm_preprint.pdf`, 26 PDF pages, **read in full** on 2026-10-17. Title and authors match the Crossref record.
- **Journal PDF not used:** pubs.aeaweb.org returned a Cloudflare challenge page (stop point 02).
- **Page numbers.** Below they are the preprint's printed page numbers (printed = PDF − 1; the title page is unnumbered). They are **not** JEP page numbers.
- **Date of the facts.** Per p. 2, fn. 1, numbers and figures reflect the market as of December 2025, and the text was last updated in April 2026.

## Argument
The business-to-business market for LLM inference is organised as a vertical chain:
- the model layer (creators);
- the inference layer (providers);
- the application layer (end users);
- a newer aggregator layer.

The quality-adjusted price of intelligence fell by about three orders of magnitude in two years. Entry was rapid, mostly by open-source creators and providers. The market is differentiated vertically and horizontally, and leadership turns over quickly. The binding constraint on economic impact is now organisational adjustment rather than access or price (pp. 1–2, 18–21).

## Data
- Posted prices and usage on OpenRouter, an aggregator, scraped from the website, with a balanced daily panel for January–December 2025 (p. 7).
- Intelligence is measured by the Artificial Analysis Intelligence Index (p. 10).
- OpenRouter handles only a small share of total API usage and skews toward developers and technology firms. The authors do not read their usage data as aggregate market shares (p. 7).

## Numbers used in the paper
| Quantity | Value | Location (preprint) |
|---|---|---|
| Minimum price of GPT-4-class intelligence | about $30 per million prompt tokens in mid-2023 → about three cents by late 2025; roughly 1,000-fold over two years | p. 11 (also p. 1, which says "late 2023") |
| Drivers of the decline | more efficient models; cheaper hardware and serving; competition between closed-source providers and from open-source models | p. 11 |
| Open-source vs closed-source price, controlling for intelligence | open-source about 90% cheaper | p. 13 |
| Open-source share of token consumption | less than 30% | p. 13 |
| Pricing form | per-token, usage-based; "no fixed costs for hardware or model deployment"; posted prices, most customers price takers | p. 6 |
| Large buyers | negotiate volume discounts, committed capacity, service-level guarantees | p. 5 |
| Average price actually paid per token | relatively stable, as buyers upgrade to more capable models (the authors cite their companion WP, Demirer et al. 2025) | p. 12 |
| Consolidation | "remains an open question"; early signs of stabilisation among frontier creators | pp. 18, 21 |

## Other facts read but not used
- Models available rose from 270 (January 2025) to 668 (December 2025) (p. 1). In December 2025 there were 449 open-source and 219 closed-source models (p. 8).
- Creators rose from 47 to 88 (p. 8), and providers from 27 (November 2024) to 90 (December 2025) (p. 8).
- Closed-source prices are rigid over a model's life and barely vary across providers (pp. 9–10, citing the companion WP).
- Prompt prices by use case: SEO $1.40 per million, legal $0.16, translation $0.17 (p. 16).
- Survey figures on adoption (43% of US workers; 7% of US and 4% of European firms using AI in production; p. 19) are second-hand, from Bick et al. (2026), and are **not** used.
- Healthcare: a hospital adopting AI diagnostic tools must redesign workflows, obtain regulatory clearance, retrain staff and address liability (p. 21). This bears on packaging cost C, but it is not used in this round.

## What it does not answer
- No pass-through estimates from cost to end-user prices: the prices are posted API prices.
- Nothing on low-income settings, or on the fees that downstream intermediaries (such as clinics) pay to application providers.
- The terms of negotiated enterprise contracts are not reported.
- The sample is a single aggregator.
- One author was on leave at Amazon and one is employed by Microsoft (title-page footnotes).

## Relevance
**Condition 4.**
- Evidence on the posted usage price p and the competitive pressure on it, which bears on ρ only indirectly.
- On our reading, standard API access corresponds to A = 0 at the provider level. The article does not show what intermediaries pay further down the chain.
- The "Absent" entry for pass-through to end users and for intermediaries' access fees remains.
