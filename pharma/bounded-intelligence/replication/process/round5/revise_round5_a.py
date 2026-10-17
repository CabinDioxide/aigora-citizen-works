"""Round-5 expansion of main.tex (task 法普-20261016-02).
Every anchor is located in the ORIGINAL text and must occur exactly once;
all edits are then applied together, from the end of the file backwards.
Usage: python revise_round5_a.py <path/to/main.tex>"""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from inserts_part1 import INS as I1
from inserts_part2 import INS as I2, PENDA_OLD, PENDA_NEW, APPD_OLD, APPD_NEW, APPE_ITEM
INS = {**I1, **I2}
path = pathlib.Path(sys.argv[1])
src = path.read_text(encoding="utf-8")

LIT77 = ("\n\nWe also note that the chapter's conclusion (p.~322) states that AI relaxes the constraints "
         "``that once kept knowledge dispersed and localized, favoring decentralization''. The direction "
         "stated there is the reverse of the chapter's own argument. We cite the argument of "
         "\\S\\S12.4--12.5, not that sentence.")
LIT83 = ("\n\nA typographical point: the printed statement of part~2 of Garicano's Proposition reads "
         "``If $C<z_{AI}$ (Entry is unprofitable)''. The accompanying proof makes clear that $C\\ge z_{AI}$ "
         "is meant (p.~35).")
# (anchor, mode, text): mode in {'before','after','replace'}
OPS = [
 ("\\paragraph{What is and is not claimed.}", "before", INS['intro_example']),
 ("\\section{Related literature and positioning}", "before", INS['intro_plan']),
 ("and how that interacts with conditions 2--5." + LIT77, "replace",
  "and how that interacts with conditions 2--5." + INS['lit_fn1']),
 ("contrasts who receives the gains from lower $C$ in the two regimes." + LIT83, "replace",
  "contrasts who receives the gains from lower $C$ in the two regimes." + INS['lit_fn2']),
 ("the share of each new cohort that acquires the scarce complement does not fall.\n\n", "after", INS['model_guide']),
 ("\\subsection{Technology of need-solving}\\label{sec:tech}\n\n", "after", INS['tech_a']),
 ("It is decided by who holds $t$.\n", "after", INS['tech_post']),
 ("\\label{sec:regime}\n\n", "after", INS['c1_a']),
 ("community workers and households themselves.\n", "after", INS['c1_post']),
 ("\\label{sec:verification}\n\n", "after", INS['c2_a']),
 ("\\begin{proposition}[Verification channel]", "before", INS['c2_key']),
 ("the calibration of users' beliefs about AI accuracy, and the density of intermediaries.\n", "after", INS['c2_post']),
 ("\\label{sec:autonomy}\n\n", "after", INS['c3_a']),
 ("the cost of specifying, verifying and paying for a new task, and the density of local intermediaries.\n", "after", INS['c3_post']),
 ("\\label{sec:market}\n\n", "after", INS['c4_a']),
 ("access-fee structures faced by intermediaries, and the foreign-owned share of AI supply.\n", "after", INS['c4_post']),
 ("\\label{sec:apprentice}\n\n", "after", INS['c5_a']),
 ("a condition on how steeply the expert premium responds to the AI price, which the model does not pin down.\n", "after", INS['c5_post6']),
 ("restores the share only gradually, at the rate $\\chi$.\n", "after", INS['c5_postcor']),
 ("entry cohorts, and the wage premium for tacit expertise.\n", "after", INS['c5_post']),
 ("\\label{sec:liability}\n\n", "after", INS['liab_a']),
 ("because a community-rated premium would weaken the incentive to verify, which the model does not represent.\n", "after", INS['liab_post']),
 ("\\begin{table}[t]\\centering\\small\n\\caption{Conditions, observables and instrument classes}", "before", INS['synth_post']),
 ("\\section{Quantitative illustration}\\label{sec:quant}", "before", INS['counter']),
 (PENDA_OLD, "replace", PENDA_NEW),
 (APPD_OLD, "replace", APPD_NEW),
 ("\\item \\textbf{Independent citation verification:}", "before", APPE_ITEM),
 ("The gap widens as AI cheapens entry tasks, because the external value of an apprenticeship", "replace",
  "With a uniform distribution of supervision costs, the gap widens as AI cheapens entry tasks, because the external value of an apprenticeship"),
 ("It adds a ``scissors'' property: the gap between the market and the efficient rate widens as AI cheapens entry tasks,", "replace",
  "It adds a ``scissors'' property: with a uniform distribution of supervision costs, the gap between the market and the efficient rate widens as AI cheapens entry tasks,"),
 ("It is an existence result: with $q=0$ and verification capacities far below $v_I$, every household for which intermediation is efficient buys it.", "replace",
  "It is an existence result: with $q=0$, a household buys intermediation if and only if $\\theta(v)(1-v)\\ge1-v_I$, so whether under-demand occurs depends on $\\theta$ and on how far $v$ lies below $v_I$."),
]
edits = []
for anchor, mode, text in OPS:
    n = src.count(anchor)
    assert n == 1, (n, anchor[:80])
    i = src.index(anchor)
    if mode == "before":   edits.append((i, i, text))
    elif mode == "after":  edits.append((i + len(anchor), i + len(anchor), text))
    else:                  edits.append((i, i + len(anchor), text))
edits.sort(key=lambda e: e[0])
for a, b in zip(edits, edits[1:]):
    assert a[1] <= b[0], "overlapping edits"
out = src
for s, e, t in sorted(edits, key=lambda e: -e[0]):
    out = out[:s] + t + out[e:]
path.write_text(out, encoding="utf-8")
print(f"APPLIED {len(OPS)} EDITS; {len(src)} -> {len(out)} chars")
