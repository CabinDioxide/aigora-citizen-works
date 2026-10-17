"""Independent check of the one reference added in task 法普-20261016-02 (2026-10-17).
Reads ONLY the bib entry (never the paper text), queries Crossref and resolves the DOI at doi.org,
and writes one row in the format of citations/verification_table.csv.
Usage: python verify_new_entry_round5.py <references.bib> <key> <out_row.csv> <out_raw.json>"""
import re, sys, json, csv, requests, unicodedata
bib, key, out_row, out_raw = sys.argv[1:5]
src = open(bib, encoding="utf-8").read()
m = re.search(r"@\w+\{%s,(.*?)\n\}" % re.escape(key), src, re.S); assert m, key
f = dict((k.strip().lower(), v.strip()) for k, v in re.findall(r"(\w+)\s*=\s*\{(.*?)\},?\s*\n", m.group(1) + "\n", re.S))
doi = f["doi"]
cr = requests.get(f"https://api.crossref.org/works/{doi}", timeout=60).json()["message"]
head = requests.head(f"https://doi.org/{doi}", allow_redirects=False, timeout=60)
norm = lambda x: re.sub(r"[^a-z0-9]", "", unicodedata.normalize("NFKD", re.sub(r"[{}]", "", x)).lower())
bib_auth = [a.split(",")[0].strip() for a in f["author"].split(" and ")]
cr_auth = [a.get("family", "") for a in cr.get("author", [])]
cr_given = [a.get("given", "") for a in cr.get("author", [])]
res = {
 "authors": [norm(a) for a in bib_auth] == [norm(a) for a in cr_auth],
 "title": norm(f["title"]) == norm(cr["title"][0]),
 "journal": norm(f["journal"]) == norm(cr["container-title"][0]),
 "year": f["year"] == str(cr.get("issued", {}).get("date-parts", [[None]])[0][0]),
 "volume": f["volume"] == cr.get("volume"), "issue": f["number"] == cr.get("issue"),
 "pages": f["pages"].replace("--", "-") == cr.get("page"),
 "doi_resolves": head.status_code in (301, 302, 303),
}
json.dump({"bib_fields": f, "crossref": {k: cr.get(k) for k in ["DOI","title","container-title","volume","issue","page","issued","author","publisher","type"]},
           "doi_org_status": head.status_code, "doi_org_location": head.headers.get("Location"), "checks": res}, open(out_raw, "w"), ensure_ascii=False, indent=1)
entry = f"{' and '.join(f['author'].split(' and '))} ({f['year']}). {re.sub(r'[{}]','',f['title'])}. {f['journal']} {f['volume']}({f['number']}): {f['pages']}"
row = [entry, key, "Crossref works/{doi}; doi.org", f"https://doi.org/{doi}",
       "match" if res["authors"] else "MISMATCH", "match" if res["title"] else "MISMATCH",
       "match" if all(res[k] for k in ["journal","year","volume","issue","pages"]) else "MISMATCH",
       "yes (authors' preprint of 12 June 2026, in full)", "authors' preprint 2026-06-12 (andreyfradkin.com); journal PDF not obtainable (Cloudflare challenge)",
       "verified" if all(res.values()) else "CHECK", f"Crossref authors: {'; '.join(g+' '+fa for g,fa in zip(cr_given,cr_auth))}; doi.org HTTP {head.status_code}; page numbers cited in the paper refer to the preprint"]
with open(out_row, "w", newline="", encoding="utf-8") as fh: csv.writer(fh).writerow(row)
print(res); print(row[-3:])
