"""Build LaTeX appendix tables from params.csv and search_results.json. Task 法普-20261014-01."""
import json, pandas as pd
from pathlib import Path
R = Path(__file__).resolve().parent.parent
esc = lambda s: str(s).replace('&', r'\&').replace('%', r'\%').replace('_', r'\_').replace('#', r'\#').replace('^', r'\^{}').replace('≈', r'$\approx$').replace('θ', r'$\theta$').replace('σ', r'$\sigma$').replace('η', r'$\eta$').replace('κ', r'$\kappa$').replace('−', '-').replace('×', r'$\times$')
d = pd.read_csv(R / 'params.csv')
rows = [r"\small\begin{longtable}{p{0.14\textwidth}p{0.07\textwidth}p{0.33\textwidth}p{0.36\textwidth}}",
        r"\caption{Parameters of the illustration (\texttt{params.csv}). ``assumption'' marks normalisations or illustrative choices, not estimates.}\label{tab:params}\\",
        r"\toprule name & value & source (page) & role / note\\ \midrule\endfirsthead\toprule name & value & source (page) & role / note\\ \midrule\endhead"]
for _, x in d.iterrows():
    rows.append(f"{esc(x['name'])} & {x['value']:g} & {esc(x['source'])} ({esc(x['page_or_table'])}) & {esc(x['role'])}{'; ' + esc(x['note']) if isinstance(x['note'], str) and x['note'] else ''}\\\\")
rows.append(r"\bottomrule\end{longtable}")
(R / 'paper' / 'params_table.tex').write_text("\n".join(rows) + "\n")
S = json.load(open(R / 'search_results.json'))
rows = [r"\small\begin{longtable}{p{0.08\textwidth}p{0.55\textwidth}p{0.14\textwidth}p{0.12\textwidth}}",
        r"\caption{Search strings run on 14 October 2026. Full screening log in \texttt{search\_log.md}.}\label{tab:search}\\",
        r"\toprule database & query string & filter & screened\\ \midrule\endfirsthead\toprule database & query string & filter & screened\\ \midrule\endhead"]
for s in S:
    if s['items']:
        rows.append(f"{esc(s['src'])} & \\texttt{{{esc(s['q'])}}} & {esc(s['yr'])} & top {len(s['items'])}\\\\")
rows.append(r"\bottomrule\end{longtable}")
(R / 'paper' / 'search_table.tex').write_text("\n".join(rows) + "\n")
print("TABLES OK")

# ---- Table 2 (revision round 1): weak-necessity constructions of Proposition 8, from numbers.json
import json as _json
_num = _json.loads((R / "output" / "numbers.json").read_text())
_rows = _num["P8_necessity"]; _suf = _num["P8_sufficiency"]
# the footnote's statements about phi = 0.25 and 0.75 are asserted against numbers.json (revision round 3, option A)
_o = _num["P8_necessity_other_phi"]
assert all(r_["ok"] for r_ in _o["0.75"])
assert [r_["name"] for r_ in _o["0.25"] if not r_["ok"]] == ["C1 fails: tau(y) proportional to y^2"]
assert next(r_ for r_ in _o["0.25"] if r_["name"].startswith("C1"))["G_over_y_nonincreasing"]
_lines = [r"\begin{table}[t]\centering\small",
          r"\caption{Proposition~\ref{prop:synthesis}: weak-necessity constructions in the joint economy. Time share $\varphi=0.5$. Each row changes the baseline (all conditions hold) so that one of C1--C5 fails. In the four rows that target C1 and C3, holdings are $\tau(y)=\tau_0(y)/(1-\varphi)$ for a reference profile $\tau_0$, so that task-market holder time $(1-\varphi)\tau$ does not depend on $\varphi$; the values shown are for $\varphi=0.5$. ``Others hold'' and ``target fails'' are evaluated by code. The last two columns report the share of income-grid steps on which $\Gamma(y)/y$ increases, and the next cohort's $t$-share $T_1$ against $T_0=0.80$.}\label{tab:necessity}",
          r"\begin{tabular}{p{0.50\textwidth}cccc}", r"\toprule",
          r"Construction & Others hold & Target fails & Grid share increasing & $T_1$\\", r"\midrule",
          r"Baseline (C1--C5 hold) & -- & -- & 0.000 & 0.800\\"]
_LABEL = {
    "C1 fails: tau(y) proportional to y^2": r"C1 fails: $\tau(y)=0.4y^2$, so $\tau(y)/y$ rises",
    "C2 fails: no intermediated verification offered": r"C2 fails: no intermediated verification offered",
    "C3 fails (autonomy): AI becomes autonomous; only z_A changes": r"C3 fails (autonomy): AI becomes autonomous; only $z_A$ changes; $\tau(y)=4y^{1/2}$, $z=0.5$",
    "C3 fails (C(D) >= s_min): low-z holders unemployed before; only D changes": r"C3 fails ($C(D^0)\ge s^0_{\min}$): low-$z$ holders not employed before; only $D$ changes; $\tau(y)=4y$",
    "C3 fails (z(y) decreasing): only z_A changes": r"C3 fails ($z(y)$ decreasing): only $z_A$ changes; $\tau(y)=20y$",
    "C4 fails: access fee A=30 pushes n below n*(A)": r"C4 fails: access fee $A=30$, so $n=200<n^*(A)=345$",
    "C5 fails: no apprenticeship subsidy": r"C5 fails: no apprenticeship subsidy ($s=0$)",
    "C5 fails: mentor capacity m=0.9 < 1": r"C5 fails: mentor capacity $\chi=0.9<1$",
}
for _r in _rows:
    _lines.append(f"{_LABEL.get(_r['name'], esc(_r['name']))} & {'yes' if _r['others_hold'] else 'no'} & {'yes' if _r['target_fails'] else 'no'} & {_r['share_increasing']:.3f} & {_r['T1']:.3f}\\\\")
_lines += [r"\bottomrule", r"\end{tabular}",
           r"\par\smallskip\raggedright\footnotesize Sufficiency check: of " + str(_suf["draws"]) + r" random parameter draws, " + str(_suf["satisfying_all"]) +
           r" satisfy all conditions, and in all " + str(_suf["conclusion_holds"]) + r" of these $\Gamma(y)/y$ is non-increasing at every grid point and $T_1\ge T_0$. At the baseline, the conclusion also holds for $\varphi\in\{0.25,0.5,0.75\}$. Under the holdings rule, all eight constructions hold at $\varphi=0.75$. At $\varphi=0.25$ the C1 row does not break the conclusion ($\Gamma(y)/y$ is non-increasing at every grid point; largest increment $-2.9\times10^{-4}$), and the other seven hold.",
           r"\end{table}"]
(R / "paper" / "necessity_table.tex").write_text("\n".join(_lines) + "\n")
print("NECESSITY TABLE OK")
