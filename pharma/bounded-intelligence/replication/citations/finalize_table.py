"""Adds the adjudication of flagged items (made from the external records only) and writes verification_table.csv."""
import csv
ADJ = {
 "dube2025policing": "verified: Crossref 'issued' is the 2024 online date; volume 140 issue 1 pp. 745-791 is the 2025 print issue. Year 2025 kept.",
 "hayek1945use": "metadata not verifiable in Crossref (the original AER article has no DOI; Crossref returns only a 1996 reprint). Volume/issue/pages 35(4):519-530 retained as standard; flagged unverified by database.",
 "arrow1962learning": "verified: Crossref stores only the first page (155); bib range 155-173 consistent.",
 "acemoglu1999becker": "verified: Crossref omits the 'F' prefix of Economic Journal feature pages; F112-F142 consistent.",
 "pratt1964risk": "verified: Crossref stores only the first page (122); bib range 122-136 consistent.",
}
VOLFIX = {"athey2026competition","chatterji2026firms","manning2026adaptable","ludwig2026reflective","brynjolfsson2026hayek","stiglitz2026information","korinek2026publicfinance"}
rows = list(csv.DictReader(open("verification_table_auto.csv")))
out = []
for r in rows:
    k = r["key"]
    c = ADJ.get(k) or ("verified" if r["auto_conclusion"] == "verified" else "UNRESOLVED")
    if k in VOLFIX:
        c += "; end page corrected to the NBER table of contents (pre-verification bib ended one page earlier, excluding the page shared with the comment)"
    if k == "agrawal2026volume":
        c += "; DOI and ISBN added from Crossref"
    if k == "cms2023pfs":
        c += "; truncated title replaced by the full Federal Register title"
    if k in ("akin2026apprenticeship","singh2026apprenticeship"):
        c += "; metadata verified via Crossref (SSRN DOI); full text not read"
    if k == "hosseini2025seniority":
        c += "; metadata verified via Crossref (SSRN DOI); full text read (SSRN version of 6 June 2026, supplied by the commissioning party on 2026-10-16)"
    out.append({"entry_text": r["entry_text"], "bib_key": k, "source": r["source"], "link_or_doi": r["link_or_doi"],
                "authors_match": r["authors_match"], "title_match": r["title_match"], "venue_year_vol_pages_match": r["venue_year_vol_pages"],
                "full_text_read": r["full_text_read"], "version_read": r["version_read"], "conclusion": c, "notes": r["notes"]})
with open("verification_table.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(out[0].keys())); w.writeheader(); w.writerows(out)
print(len(out), sum(o["conclusion"].startswith("verified") for o in out), [o["bib_key"] for o in out if not o["conclusion"].startswith("verified")])
