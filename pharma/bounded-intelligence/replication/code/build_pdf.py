"""Compile paper/main.tex with tectonic using a local directory bundle that is filled on demand.

Task 法普-20261014-01 · Claude Science · 未经本公民核验.
Why: in the authoring sandbox tectonic's own TLS client could not validate certificates, while
Python's requests could. This script fetches exactly the TeX files tectonic asks for from the
public tectonic bundle (tlextras-2022.0r0) by HTTP range requests into a local directory, then
re-runs tectonic until it succeeds. On a normal machine `tectonic -X compile main.tex` suffices.
Usage: python build_pdf.py [bundle_dir]
"""
import gzip, re, subprocess, sys, os
from pathlib import Path
import requests

BASE = "https://data1b.fullyjustified.net/tlextras-2022.0r0.tar"
PAPER = Path(__file__).resolve().parent.parent / "paper"
BDIR = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(os.environ.get("TMPDIR", "/tmp")) / "texbundle"
BDIR.mkdir(parents=True, exist_ok=True)
S = requests.Session()
idx_path = BDIR.parent / "bundle_index.txt"
if not idx_path.exists():
    idx_path.write_text(gzip.decompress(S.get(BASE + ".index.gz", timeout=120).content).decode())
INDEX = {}
for line in idx_path.read_text().splitlines():
    parts = line.rsplit(" ", 2)
    if len(parts) == 3:
        INDEX[parts[0]] = (int(parts[1]), int(parts[2]))

def fetch(name):
    if name not in INDEX or (BDIR / name).exists():
        return False
    off, ln = INDEX[name]
    r = S.get(BASE, headers={"Range": f"bytes={off}-{off+ln-1}"}, timeout=120)
    (BDIR / name).write_bytes(r.content)
    return True

fetch("SHA256SUM")
pat = re.compile(r"(?:file [`'\"]?|`)([A-Za-z0-9_.\-]+\.(?:sty|cls|tex|def|cfg|fd|clo|bst|tfm|pfb|enc|map|ltx|ini|fmt|vf|cnf|code\.tex|dfu|lua|otf|ttf|bbx|cbx|ldf|xdy|pro))['\"]?")
env = dict(os.environ, TECTONIC_CACHE_DIR=str(BDIR.parent / "tectonic_cache"))
for it in range(600):
    p = subprocess.run(["tectonic", "-X", "compile", "--bundle", str(BDIR), "main.tex"],
                       cwd=PAPER, capture_output=True, text=True, env=env)
    log = p.stdout + p.stderr
    if p.returncode == 0:
        (PAPER.parent / "output" / "tectonic_log.txt").write_text(log)
        print(f"PDF BUILT after {it+1} runs; bundle files: {len(list(BDIR.iterdir()))}")
        break
    names = set(pat.findall(log))
    # tectonic reports missing bundle files as: "unable to open ..." / "not found"
    names |= set(re.findall(r"[\"'`]([A-Za-z0-9_.\-]+)[\"'`] not (?:found|available)", log))
    names |= {m + ".tfm" for m in re.findall(r"=([A-Za-z0-9_.\-]+)(?: at [0-9.]+pt)? not loadable", log)}
    names |= {m for m in re.findall(r"([A-Za-z0-9_.\-]+\.(?:pfb|enc|map|otf|ttf)) ", log)}
    new = [n for n in names if fetch(n)]
    if not new:
        (PAPER.parent / "output" / "tectonic_log.txt").write_text(log)
        print("STUCK; last log tail:\n" + log[-2500:])
        break
    if it % 20 == 0:
        print(f"run {it}: fetched {len(new)} e.g. {new[:5]}")
