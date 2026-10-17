"""Round-5c edits (task 法普-20261016-02, ruling on stop point 02 and round-1 check, 2026-10-17).
Applied to the output of revise_round5_b.py. Every old string must occur exactly once.
Usage: python revise_round5_c.py <path/to/main.tex>"""
import sys, pathlib
path = pathlib.Path(sys.argv[1]); s = path.read_text(encoding="utf-8")
R = []
# §2 ruling: Demirer, Fradkin and Tadelis (JEP 2026), read in the authors' preprint of 12 June 2026
R.append(("2-c4", r"We read no estimate of the pass-through of AI cost declines to end users in low-income settings, or of the access fees that intermediaries face (Section~\ref{sec:evidence}).",
 r"Measured evidence on the supply side comes from \citet{demirer2026market} (preprint version, 12 June 2026), who use posted prices and usage on OpenRouter, an aggregator of AI inference services (pp.~1, 7). The minimum price of GPT-4-class intelligence fell from about \$30 per million prompt tokens in mid-2023 to about three cents by late 2025, a decline of roughly 1,000-fold in two years. The authors attribute the decline to models that reach the same intelligence with less computation, to cheaper serving, and to competition among closed-source providers and from open-source entrants (p.~11). Controlling for benchmark intelligence, open-source models, which any provider can host, are about 90\% cheaper than closed-source ones, yet they account for less than 30\% of tokens used (p.~13). Standard access is usage-based: providers post per-token prices that most customers take as given, with no fixed charge for hardware or model deployment, while large buyers negotiate volume discounts and committed capacity (pp.~5--6). The authors also report, citing their companion working paper, that the average price firms actually pay per token has stayed relatively stable because buyers move to more capable models (p.~12). In the model's terms, these facts show large falls in posted usage prices and competitive pressure on them, which bear on $\rho$. On our reading, the standard contract also has no access fee, $A=0$; the article does not report the terms of negotiated contracts. The data come from one aggregator that handles a small share of API use and skews toward developers and technology firms (p.~7), and the authors leave open whether the market will consolidate (pp.~18, 21). The article does not measure the pass-through of AI cost declines to end users in low-income settings, or the access fees that intermediaries such as clinics face (Section~\ref{sec:evidence})."))
R.append(("2-evidence", r"\paragraph{Condition 4.} The evidence is the theoretical results of \citet[pp.~99, 106, 110--111]{athey2026competition}. \emph{Absent:} we read no estimates of pass-through of AI cost declines to end users in low-income settings, and no evidence on the access fees that intermediaries face.",
 r"\paragraph{Condition 4.} The evidence is the theoretical results of \citet[pp.~99, 106, 110--111]{athey2026competition}, together with descriptive evidence on posted prices. On one aggregator, the minimum price of GPT-4-class intelligence fell about 1,000-fold between mid-2023 and late 2025, and open-source models are about 90\% cheaper than closed-source models of the same benchmark intelligence \citep[preprint version, 12 June 2026, pp.~11, 13]{demirer2026market}. \emph{Absent:} these are posted prices, not the pass-through of cost declines to end users; we read no estimates of pass-through in low-income settings, and no evidence on the access fees that intermediaries face."))
R.append(("2-appD", r"\item \citet{hosseini2025seniority}: SSRN version of 6 June 2026 (first version 31 August 2025). The citation year 2025 refers to the first version.",
 r"\item \citet{hosseini2025seniority}: SSRN version of 6 June 2026 (first version 31 August 2025). The citation year 2025 refers to the first version." "\n"
 r"\item \citet{demirer2026market}: the authors' preprint of 12 June 2026, read because the journal's PDF could not be downloaded from the sandbox. Page numbers refer to the preprint, not to the journal's pagination (pp.~23--46)."))
# §3 ruling: two same-class evidence sentences and the literature sentence on Kogan et al.
R.append(("3-1", r"Non-expert users overestimate the accuracy of LLM answers, and longer explanations raise their confidence without raising accuracy",
 r"Participants overestimate the accuracy of LLM answers, and longer explanations raise their confidence without raising accuracy"))
R.append(("3-2", r"\citet{kogan2023displacement} find that labour-augmenting exposure lowers incumbents' cumulative five-year earnings by 1--1.7\% (median to 90th percentile; p.~24) while entrants gain.",
 r"In \citet{kogan2023displacement}, labour-augmenting exposure is associated with a decline of 1--1.7\% in incumbents' cumulative five-year earnings (median to 90th percentile; p.~24), while earnings rise for new entrants (abstract)."))
R.append(("3-lit97", r"They find that even labour-augmenting technologies lower incumbents' earnings while new entrants gain.",
 r"They find that with labour-augmenting technologies, earnings rise for new entrants but decline for incumbent workers (abstract)."))
for item, old, new in R:
    n = s.count(old); assert n == 1, (item, n, old[:70])
for item, old, new in R:
    s = s.replace(old, new)
path.write_text(s, encoding="utf-8")
print(f"APPLIED {len(R)} REPLACEMENTS")
