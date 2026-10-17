"""Compare frozen parts of main.tex with the baseline (task 法普-20261016-02, rule 二.2-3).
Usage: python check_frozen.py <baseline main.tex> <new main.tex> [--allow-titlepage]
--allow-titlepage: the title page is compared and reported, but a difference does not fail the check
(return slip 法普-20261016-02 round 1, section 4, permits the version line and the title-page disclosure)."""
import re, sys
b, n = (open(p, encoding="utf-8").read() for p in sys.argv[1:3])
allow_tp = "--allow-titlepage" in sys.argv[3:]
def envs(s, name):
    return re.findall(r"\\begin\{%s\}.*?\\end\{%s\}" % (name, name), s, flags=re.S)
ok = True
for name in ["proposition", "lemma", "corollary", "table", "figure", "abstract", "titlepage"]:
    eb, en = envs(b, name), envs(n, name)
    same = eb == en
    if not (name == "titlepage" and allow_tp):
        ok &= same
    print(f"{name:12s} baseline {len(eb):2d} new {len(en):2d} identical={same}")
def appA(s):
    return s[s.index("\\section{Proofs}"):s.index("\\section{Parameters}")]
same = appA(b) == appA(n); ok &= same
print("Appendix A identical =", same, len(appA(b)))
for pat in [r"\\input\{[^}]+\}", r"\\includegraphics[^}]+\}"]:
    same = re.findall(pat, b) == re.findall(pat, n); ok &= same
    print(pat, "identical =", same)
print("FROZEN OK" if ok else "FROZEN DIFFERS")
