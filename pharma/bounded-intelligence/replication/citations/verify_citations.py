"""Independent citation verification.

This script reads ONLY paper/references.bib. It does not read main.tex or any
reading note. For each entry it retrieves an external bibliographic record
(Crossref by DOI or bibliographic query, arXiv API, Federal Register API, or the
official web page of a legal text), then compares authors, title, venue, year,
volume and pages field by field. Output: citations/raw_records.json and
citations/auto_compare.csv. The final table is assembled by
build_verification_table.py.
"""
import json, re, time, unicodedata, difflib, csv, sys
from pathlib import Path
import requests, bibtexparser

ROOT = Path(__file__).resolve().parents[1]
BIB = ROOT / "paper" / "references.bib"
OUT = ROOT / "citations"
S = requests.Session()
S.headers["User-Agent"] = "citation-check/1.0 (python-requests)"


def get(url, **kw):
    for i in range(3):
        try:
            r = S.get(url, timeout=40, **kw)
            if r.status_code == 429:
                time.sleep(5 * (i + 1)); continue
            return r
        except Exception as ex:  # network error
            err = ex; time.sleep(3)
    return None


def norm(s):
    s = unicodedata.normalize("NFKD", s or "")
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"\\[a-zA-Z]+|[{}\\'\"`~^]", "", s)
    return re.sub(r"[^a-z0-9 ]", " ", s.lower()).split()


def sim(a, b):
    return difflib.SequenceMatcher(None, " ".join(norm(a)), " ".join(norm(b))).ratio()


def bib_entries():
    lib = bibtexparser.parse_string(BIB.read_text())
    out = []
    for e in lib.entries:
        f = {k: v.value for k, v in e.fields_dict.items()}
        f["ID"], f["type"] = e.key, e.entry_type
        out.append(f)
    return out


def lastnames(field):
    if not field:
        return []
    names = [n.strip() for n in re.split(r"\s+and\s+", field)]
    ln = []
    for n in names:
        n = n.strip("{}")
        ln.append((n.split(",")[0] if "," in n else n.split()[-1]).strip())
    return [" ".join(norm(x)) for x in ln]


def crossref_doi(doi):
    r = get(f"https://api.crossref.org/works/{doi}")
    if r is None or r.status_code != 200:
        return None, f"https://doi.org/{doi}", f"Crossref HTTP {getattr(r,'status_code',None)}"
    m = r.json()["message"]
    return m, f"https://doi.org/{doi}", "Crossref works/{doi}"


def crossref_query(q, rows=5, extra=""):
    r = get("https://api.crossref.org/works", params={"query.bibliographic": q, "rows": rows} | ({"filter": extra} if extra else {}))
    if r is None or r.status_code != 200:
        return []
    return r.json()["message"]["items"]


def arxiv_id(e):
    m = re.search(r"arXiv:(\d{4}\.\d{4,5})(v\d+)?", e.get("howpublished", ""))
    return (m.group(1), m.group(2) or "") if m else (None, None)


def arxiv_rec(aid, ver=""):
    r = get("http://export.arxiv.org/api/query", params={"id_list": aid + ver})
    if r is None or r.status_code != 200:
        return None
    from lxml import etree
    ns = {"a": "http://www.w3.org/2005/Atom"}
    t = etree.fromstring(r.content)
    en = t.find("a:entry", ns)
    if en is None:
        return None
    return {
        "title": " ".join(en.findtext("a:title", namespaces=ns).split()),
        "authors": [a.findtext("a:name", namespaces=ns) for a in en.findall("a:author", ns)],
        "published": en.findtext("a:published", namespaces=ns),
        "updated": en.findtext("a:updated", namespaces=ns),
        "id": en.findtext("a:id", namespaces=ns),
    }


def from_crossref(m):
    return {
        "title": " ".join((m.get("title") or [""])[0].split()),
        "authors": [(a.get("family") or a.get("name") or "") for a in m.get("author", [])],
        "editors": [(a.get("family") or "") for a in m.get("editor", [])],
        "venue": (m.get("container-title") or [""])[0] if m.get("container-title") else m.get("publisher", ""),
        "publisher": m.get("publisher", ""),
        "year": str((m.get("issued", {}).get("date-parts") or [[None]])[0][0]),
        "volume": m.get("volume", ""), "issue": m.get("issue", ""), "pages": m.get("page", ""),
        "type": m.get("type", ""), "DOI": m.get("DOI", ""),
    }


def compare(e, rec):
    res = {}
    ba = lastnames(e.get("author") or e.get("editor"))
    ra = [" ".join(norm(x)) for x in (rec.get("authors") or rec.get("editors") or [])]
    if ba and ra:
        res["authors"] = "match" if ba == ra else ("order/subset differs" if set(ba) & set(ra) else "MISMATCH")
        if ba != ra:
            res["authors_detail"] = f"bib={ba} record={ra}"
    else:
        res["authors"] = "n/a in record"
    ts = sim(e.get("title", ""), rec.get("title", ""))
    res["title_sim"] = round(ts, 3)
    res["title"] = "match" if ts > 0.9 else ("close" if ts > 0.7 else "MISMATCH")
    for k_b, k_r in [("year", "year"), ("volume", "volume"), ("pages", "pages"), ("number", "issue")]:
        vb, vr = (e.get(k_b) or "").replace("--", "-"), (rec.get(k_r) or "")
        if vb and vr:
            res[k_b] = "match" if vb.strip() == vr.strip() else f"MISMATCH (record {vr})"
        elif vb:
            res[k_b] = "not in record"
    return res


def web_check(url, needles):
    r = get(url)
    if r is None:
        return {"http": None}
    txt = r.text if "text" in r.headers.get("content-type", "") or "json" in r.headers.get("content-type", "") else ""
    if not txt and r.content[:4] == b"%PDF":
        try:
            import io, pypdf
            txt = " ".join((p.extract_text() or "") for p in pypdf.PdfReader(io.BytesIO(r.content)).pages[:6])
        except Exception:
            txt = ""
    flat = " ".join(txt.split())
    return {"http": r.status_code, "found": {n: (n.lower() in flat.lower()) for n in needles}}


def main():
    entries = bib_entries()
    raw = {}
    for e in entries:
        key = e["ID"]; rec = None; src = ""; link = ""; note = ""
        doi = e.get("doi")
        aid, ver = arxiv_id(e)
        try:
            if doi:
                m, link, src = crossref_doi(doi)
                if m:
                    rec = from_crossref(m)
                elif doi.startswith("10.2139/ssrn"):
                    note = "SSRN DOI not resolvable via Crossref from sandbox"
            elif aid:
                a = arxiv_rec(aid, ver)
                link = f"https://arxiv.org/abs/{aid}{ver}"; src = "arXiv API"
                if a:
                    rec = {"title": a["title"], "authors": [x.split()[-1] for x in a["authors"]],
                           "year": a["published"][:4], "venue": "arXiv", "arxiv_published": a["published"],
                           "arxiv_updated": a["updated"]}
            elif key == "cms2023pfs":
                r = get("https://www.federalregister.gov/api/v1/documents/2023-24184.json")
                j = r.json() if r is not None and r.status_code == 200 else {}
                rec = {"title": j.get("title", ""), "year": (j.get("publication_date") or "")[:4],
                       "pages": f"{j.get('start_page')}-{j.get('end_page')}", "volume": str(j.get("volume", "")),
                       "publication_date": j.get("publication_date"), "document_number": j.get("document_number")}
                link = j.get("html_url", "https://www.federalregister.gov/d/2023-24184"); src = "Federal Register API"
            elif key == "eu2024pld":
                link = "http://publications.europa.eu/resource/celex/32024L2853"; src = "Publications Office (CELEX)"
                rec = {"web": web_check(link, ["2024/2853", "23 October 2024", "liability for defective products", "85/374/EEC"])}
            elif key == "sweden1996patient":
                link = e["url"]; src = "riksdagen.se"
                rec = {"web": web_check(link, ["Patientskadelag", "1996:799"])}
            elif key == "utah2020so15":
                link = "https://www.utcourts.gov/content/dam/committees/regulatory_reform/agendas/May%2023,%202025%20Regulatory%20Reform%20Committee%20Meeting%20Materials.pdf"
                src = "utcourts.gov"
                rec = {"web": web_check(link, ["Standing Order No. 15", "Office of Legal Services Innovation", "August 14, 2020"])}
            elif key == "brynjolfsson2025canaries":
                link = e["url"]; src = "Stanford Digital Economy Lab"
                rec = {"web": web_check(link, ["Canaries in the Coal Mine", "Brynjolfsson", "Chandar", "Chen"])}
            else:
                # chapters, the volume, Hayek, Kandpal: bibliographic query
                q = " ".join([e.get("title", ""), e.get("author", e.get("editor", "")).split(",")[0], e.get("booktitle", ""), e.get("year", "")])
                items = crossref_query(q, rows=5)
                best = max(items, key=lambda m: sim(e.get("title", ""), (m.get("title") or [""])[0]), default=None)
                src = "Crossref query.bibliographic"
                if best is not None and sim(e.get("title", ""), (best.get("title") or [""])[0]) > 0.6:
                    rec = from_crossref(best); link = f"https://doi.org/{best['DOI']}"
                else:
                    note = "no Crossref record with similar title"
                if rec is None and key == "kandpal2023longtail":
                    r = get("http://export.arxiv.org/api/query", params={"search_query": 'ti:"Large Language Models Struggle to Learn Long-Tail Knowledge"', "max_results": 2})
                    if r is not None and r.status_code == 200:
                        m = re.search(r"<id>http://arxiv.org/abs/([^<]+)</id>", r.text)
                        if m:
                            a = arxiv_rec(m.group(1).split("v")[0])
                            rec = {"title": a["title"], "authors": [x.split()[-1] for x in a["authors"]], "year": a["published"][:4], "venue": "arXiv (PMLR version not in Crossref)"}
                            link = f"https://arxiv.org/abs/{m.group(1)}"; src = "arXiv API (title search)"
        except Exception as ex:
            note = f"error: {ex!r}"
        cmp = compare(e, rec) if rec and "web" not in rec else ({} if not rec else {"web": rec["web"]})
        raw[key] = {"bib": e, "source": src, "link": link, "record": rec, "compare": cmp, "note": note}
        print(key, src, "|", json.dumps(cmp)[:160], note, flush=True)
        time.sleep(0.4)
    (OUT / "raw_records.json").write_text(json.dumps(raw, indent=1, ensure_ascii=False))


if __name__ == "__main__":
    main()
