"""Option A check (task 法普-20261016-02): compare outputs regenerated in a workspace copy
with the files in the granted replication directory. PDFs are compared with /CreationDate,
/ModDate and trailer /ID removed. Usage: python compare_outputs.py <granted_repl> <copy_repl>"""
import re, sys, hashlib
from pathlib import Path
G, W = Path(sys.argv[1]), Path(sys.argv[2])
def norm(p):
    b = p.read_bytes()
    if p.suffix == ".pdf":
        b = re.sub(rb"/(CreationDate|ModDate) \(D:[^)]*\)", b"", b)
        b = re.sub(rb"/ID \[<[0-9a-fA-F]+> ?<[0-9a-fA-F]+>\]", b"", b)
    return hashlib.sha256(b).hexdigest()
paths = []
for d in ["code", "model", "output", "figures"]:
    paths += sorted(p.relative_to(G) for p in (G / d).rglob("*") if p.is_file())
paths += [Path("params.csv")] + sorted(p.relative_to(G) for p in (G / "paper").glob("*_table.tex"))
same = diff = 0; diffs = []
for rel in paths:
    if (W / rel).exists() and norm(G / rel) == norm(W / rel): same += 1
    else: diff += 1; diffs.append(str(rel))
extra = sorted(str(p.relative_to(W)) for d in ["code","model","output","figures"] for p in (W/d).rglob("*") if p.is_file() and not (G/p.relative_to(W)).exists())
print(f"identical {same}, differ {diff}: {diffs}")
print("files only in copy:", extra)
