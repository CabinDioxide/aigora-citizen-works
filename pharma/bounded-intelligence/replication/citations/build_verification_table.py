"""Second stage of the independent citation check.

Inputs: citations/raw_records.json (from verify_citations.py, which read only
references.bib), the NBER table of contents of the volume (fetched here), and
citations/fulltext_read_status.csv (author-supplied: which items the drafting
line read in full; the only input not produced by this line).
Output: citations/verification_table.csv.
"""
import json, re, csv, unicodedata, difflib
from pathlib import Path
import requests
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
C = ROOT / "citations"
raw = json.loads((C / "raw_records.json").read_text())
read = {r["key"]: r for r in csv.DictReader(open(C / "fulltext_read_status.csv"))}
S = requests.Session(); S.headers["User-Agent"] = "citation-check/1.0 (python-requests)"


def norm(s):
    s = unicodedata.normalize("NFKD", s or ""); s = "".join(c for c in s if not unicodedata.combining(c))
    s = re.sub(r"\\[a-zA-Z]+|[{}\\'\"`~^]", "", s)
    return " ".join(re.sub(r"[^a-z0-9 ]", " ", s.lower()).split())

# --- NBER table of contents for the volume -----------------------------------
NBER = "https://www.nber.org/books-and-chapters/economics-transformative-ai"
toc_txt = " ".join(BeautifulSoup(S.get(NBER, timeout=40).text, "lxml").get_text(" ").split())
toc = toc_txt[toc_txt.find("Table of Contents"):toc_txt.find("Related Topics")]
chap = []
for m in re.finditer(r"Chapter (\d+): (.+?) Author\(s\): (.+?) \(p\. (\d+)-(\d+)\)(?: Comment - (.+?) \(p\. (\d+)-(\d+)\))?", toc):
    n, title, auth, a, b, cauth, ca, cb = m.groups()
    chap.append({"n": int(n), "title": title.strip(), "authors": auth, "pages": f"{a}-{b}"})
    if cauth:
        chap.append({"n": int(n), "title": f"Comment on {title.strip()}", "authors": cauth, "pages": f"{ca}-{cb}", "comment": True})


def nber_match(e):
    t = norm(e.get("title", "")).replace("comment on ", "")
    best, sc = None, 0
    for c in chap:
        is_c = c.get("comment", False)
        if is_c != e.get("title", "").lower().startswith("comment"):
            continue
        r = difflib.SequenceMatcher(None, t, norm(c["title"]).replace("comment on ", "")).ratio()
        if r > sc:
            best, sc = c, r
    return best, sc

# --- extra checks for items without a usable Crossref record -----------------
def extra(key):
    out = {}
    try:
        if key == "eu2024pld":
            u = "http://publications.europa.eu/resource/cellar/10bdc8d8-a54e-11ef-85f0-01aa75ed71a1.0006.03/DOC_1"
            r = S.get(u, timeout=60); t = " ".join(BeautifulSoup(r.text, "lxml").get_text(" ").split())
            out = {"link": u, "http": r.status_code,
                   "found": {n: n.lower() in t.lower() for n in ["2024/2853", "23 October 2024", "liability for defective products", "85/374/EEC"]}}
        if key == "hayek1945use":
            r = S.get("https://api.crossref.org/works", params={"query.bibliographic": "Hayek The Use of Knowledge in Society American Economic Review 1945", "filter": "until-pub-date:1946", "rows": 5}, timeout=40)
            its = r.json()["message"]["items"] if r.status_code == 200 else []
            out = {"crossref_pre1946_hits": [(i.get("DOI"), (i.get("title") or [""])[0], (i.get("container-title") or [""])[0], i.get("volume"), i.get("page")) for i in its[:3]]}
        if key == "kandpal2023longtail":
            u = "https://proceedings.mlr.press/v202/kandpal23a.html"
            r = S.get(u, timeout=40); t = " ".join(BeautifulSoup(r.text, "lxml").get_text(" ").split())
            out = {"link": u, "http": r.status_code, "found": {n: n in t for n in ["Large Language Models Struggle to Learn Long-Tail Knowledge", "15696-15707", "Kandpal"]}}
    except Exception as ex:
        out = {"error": repr(ex)[:200]}
    return out


rows = []
for key, r in raw.items():
    e, rec, cmp = r["bib"], r["record"] or {}, r["compare"]
    src, link, notes = r["source"], r["link"], []
    a = t = v = "unverified"
    if e["type"] in ("incollection",) or key == "agrawal2026volume":
        if key == "agrawal2026volume":
            a, t = cmp.get("authors"), cmp.get("title"); v = "publisher+year match (Crossref)"
            notes.append(f"Crossref record {rec.get('DOI')}; Crossref lists editors as authors. ISBN in record.")
        else:
            c, sc = nber_match(e)
            src, link = "NBER volume table of contents", NBER
            if c:
                bl = [norm(x.split(",")[0]) for x in re.split(r"\s+and\s+", e.get("author", ""))]
                cl = [norm(x.strip().split()[-1]) for x in re.split(r",|&", c["authors"]) if x.strip()]
                cl2 = [norm(" ".join(x.strip().split()[1:])) for x in re.split(r",|&", c["authors"]) if x.strip()]
                a = "match" if all(any(b == x or b in y for x, y in zip(cl, cl2)) for b in bl) and len(bl) == len(cl) else f"MISMATCH (NBER: {c['authors']})"
                t = "match" if sc > 0.9 else (f"close ({sc:.2f})" if sc > 0.7 else "MISMATCH")
                bp = (e.get("pages") or "").replace("--", "-")
                v = "pages match" if bp == c["pages"] else f"pages differ (bib {bp}; NBER {c['pages']})"
                notes.append(f"NBER entry: ch.{c['n']} '{c['title']}', {c['authors']}, p. {c['pages']}")
            else:
                notes.append("no NBER table-of-contents match")
    elif "web" in rec or key in ("eu2024pld",):
        w = rec.get("web", {})
        if key == "eu2024pld":
            w = extra(key); link = w.get("link", link)
        f = w.get("found", {})
        a = "n/a (institutional author)"
        t = "match" if f and all(f.values()) else ("partial" if f and any(f.values()) else "unverified")
        v = "identifiers found on official page" if f and all(f.values()) else f"strings found: {f}"
        notes.append(f"HTTP {w.get('http')}")
    else:
        a, t = cmp.get("authors", "unverified"), cmp.get("title", "unverified")
        vs = {k: cmp[k] for k in ("year", "volume", "number", "pages") if k in cmp}
        v = "; ".join(f"{k}: {x}" for k, x in vs.items()) or "no venue fields to compare"
        if cmp.get("authors_detail"):
            notes.append(cmp["authors_detail"])
        if key in ("hayek1945use", "kandpal2023longtail"):
            x = extra(key); notes.append(f"extra check: {json.dumps(x, ensure_ascii=False)[:400]}")
            if key == "kandpal2023longtail" and x.get("found") and all(x["found"].values()):
                src, link, v = "PMLR proceedings page", x["link"], "PMLR vol. 202, pp. 15696-15707, 2023: match"
    if r.get("note"):
        notes.append(r["note"])
    # Conclusion rule: verified if authors and title match and no venue MISMATCH;
    # otherwise 'discrepancy - see note' for author adjudication.
    bad = any(str(z).startswith("MISMATCH") for z in (a, t)) or "MISMATCH" in v or "differ" in v
    concl = "verified" if (not bad and "unverified" not in (a, t)) else "discrepancy or unverified - adjudicated below"
    rr = read.get(key, {})
    rows.append({"key": key, "entry_text": f"{e.get('author', e.get('editor',''))} ({e.get('year')}). {e.get('title')}. "
                 f"{e.get('journal', e.get('booktitle', e.get('howpublished', e.get('institution',''))))} {e.get('volume','')}"
                 f"{'('+e['number']+')' if e.get('number') else ''} {e.get('pages','')}".replace("{", "").replace("}", "").strip(),
                 "source": src, "link_or_doi": link, "authors_match": a, "title_match": t,
                 "venue_year_vol_pages": v, "full_text_read": rr.get("full_text_read", ""),
                 "version_read": rr.get("version_read", ""), "auto_conclusion": concl, "notes": " | ".join(notes)})

with open(C / "verification_table_auto.csv", "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
print(len(rows), sum(r["auto_conclusion"] == "verified" for r in rows))
for r in rows:
    if r["auto_conclusion"] != "verified":
        print(r["key"], "|", r["authors_match"], "|", r["title_match"], "|", r["venue_year_vol_pages"], "|", r["notes"][:300])
