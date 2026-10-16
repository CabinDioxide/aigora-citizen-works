"""Revision round 2 (task 法普-20261016-01), part c: paper/main.tex. Claude Science · 未经本公民核验.
Answers the round-2 return note (退回单-法普-20261014-01-第2轮), sections 2 and 3. Each (old, new) pair must
occur exactly once in main.tex; nothing is written unless all pairs match.
"""
import json
from pathlib import Path
R = Path(__file__).resolve().parent.parent
EDITS = json.loads(r'''[
[
"{\\large Revised draft (revision round~1), 15 October 2026}",
"{\\large Revised draft (revision round~2), 16 October 2026}"
],
[
"These reviews found errors in Propositions~2, 6 and~8 and missing assumptions in Propositions~3 and~7. This revision corrects them; the revised propositions have not yet been re-reviewed.",
"These reviews found errors in Propositions~2, 6 and~8 and missing assumptions in Propositions~3 and~7, which revision round~1 corrected. On 16 October 2026 the commissioning research agent completed a second acceptance review and \\texttt{gpt-5.6-terra} a second review of the revised formal results. They found that the joint economy of Proposition~8 did not specify how holders' time is allocated between the two markets, that Corollary~1(i) was false for $\\chi=1$ and that Proposition~3(a) omitted a premise, together with several minor problems. This revision (round~2) corrects them; the propositions as revised in round~2 have not yet been re-reviewed."
],
[
"In one economy that combines factor prices and a task market, five conditions",
"In a joint economy in which holders of conversion inputs divide their time in fixed proportions between need-solving and a task market, five conditions"
],
[
"Each condition can fail alone and break the result. A fall",
"Each of the five conditions, taken as a whole, can fail alone and break the result. A fall"
],
[
"and the task market of Proposition~\\ref{prop:autonomy} in one economy, states the conditions precisely in that economy, and proves that they are jointly sufficient for inclusive gains there. For each condition it gives a parameterisation in which that condition alone fails and inclusiveness breaks; these parameterisations are constructed and checked numerically.",
"and the task market of Proposition~\\ref{prop:autonomy} in a joint economy in which each unit of the conversion input divides its time in a fixed proportion between the two markets, states the conditions precisely in that economy, and proves that they are jointly sufficient for inclusive gains there. For each of the five conditions C1--C5, taken as a whole, it gives a parameterisation in which that condition alone fails and inclusiveness breaks; these parameterisations are constructed and checked numerically. Necessity is not shown for the separate components of a condition."
],
[
"\\citet{agarwal2023radiology} show in an experiment with radiologists that whether AI assistance helps depends on how users weight the AI signal. Over-weighting (automation bias) can make assistance harmful, while experts in their sample under-weight it.",
"\\citet{agarwal2023radiology} study an experiment with professional radiologists. In their model, a user who over-weights the AI signal (automation bias) makes a worse decision with AI assistance than without it for some signal realisations (p.~28 and appendix Proposition~1), whereas the radiologists in their sample under-weight AI predictions (abstract)."
],
[
"If $r_h\\le k_t$, holders supply, and their premium over opportunity cost is",
"If $r_h\\le k_t$, holders supply (a tie $r_h=k_t$ is resolved in favour of holders), and their premium over opportunity cost is"
],
[
"If $r_h\\le k_t$, holders supply at $\\min\\{w,k_t\\}$ and their premium is $\\min\\{w,k_t\\}-r_h\\le k_t$.",
"If $r_h\\le k_t$, holders supply at $\\min\\{w,k_t\\}$ and their premium is $\\min\\{w,k_t\\}-r_h\\le k_t$. At a tie $r_h=k_t\\le w$ both sides have the same cost; the tie rule assigns supply to holders, and the price $k_t$ and the holders' premium of zero are the same under either assignment."
],
[
"\\item \\emph{Common verification capacity.} Absolute gains are non-decreasing in income. If some households are rationed",
"\\item \\emph{Common verification capacity.} Suppose $p_e<P_0$. Absolute gains are non-decreasing in income. If some households are rationed"
],
[
"(a) With constant $p_e<P_0$, the gain $EV$ is zero,",
"(a) By assumption $p_e<P_0$. With this constant effective price, the gain $EV$ is zero,"
],
[
"If $\\eta\\ge1$, $(1-\\eta)R\\le0<p_e$, so the condition cannot hold.\n",
"If $\\eta\\ge1$, $(1-\\eta)R\\le0<p_e$, so the condition cannot hold. The premise $p_e<P_0$ is needed for the necessity half: if $p_e\\ge P_0$, no entrant buys AI and incumbents gain nothing, so $EV/y\\equiv0$ is non-increasing although $p_e\\ge P_0>R(y_L)>(1-\\eta)R(y_L)$.\n"
],
[
"its admissible part is $\\big(\\max\\{0,R(y)-\\pi(y)L\\},\\,R(y)-\\theta\\pi(y)L\\big]$.",
"its admissible part is $\\big(R(y)-\\pi(y)L,\\,R(y)-\\theta\\pi(y)L\\big]$ if $R(y)-\\pi(y)L\\ge0$, and $\\big[0,\\,R(y)-\\theta\\pi(y)L\\big]$ if $R(y)-\\pi(y)L<0$."
],
[
"Its intersection with $p\\ge0$ is non-empty if and only if its upper end $R-\\theta\\pi L$ is non-negative.",
"Its intersection with $p\\ge0$ is non-empty if and only if its upper end $R-\\theta\\pi L$ is non-negative. If $R-\\pi L\\ge0$, the intersection is the interval itself. If $R-\\pi L<0$, it is $[0,R-\\theta\\pi L]$, closed at zero because $p=0$ lies strictly above the lower end; in particular, when $R=\\theta\\pi L$ it is $\\{0\\}$."
],
[
"per unit of $z_A$: all employed wages rise, low-knowledge wages most, and the change differs across holders.",
"per unit of $z_A$: no employed wage falls, wages of employed holders with $z_j<1$ rise, low-knowledge wages most, and the change differs across holders."
],
[
"Finally $\\partial w_j/\\partial z_A=1-z_j\\ge0$.",
"Finally $\\partial w_j/\\partial z_A=1-z_j\\ge0$, with equality only at $z_j=1$."
],
[
"falls with $p_c$ by Proposition~\\ref{prop:valueshift}; non-experts earn $\\omega$.",
"falls with $p_c$ by Proposition~\\ref{prop:valueshift}; non-experts earn $\\omega$. Earnings in old age are discounted by the factor $\\beta\\in(0,1)$ per generation; the strict inequalities in Proposition~\\ref{prop:apprentice} require $\\beta>0$."
],
[
"Strictness: $W>0$ and $p_c<\\bar\\kappa$ give",
"Strictness: $\\beta>0$, $W>0$ and $p_c<\\bar\\kappa$ give"
],
[
"\\item A stationary share $T>0$ with constant demand $a>0$ requires $\\chi\\ge1$; with $\\chi\\ge1$ it is $T=a$.",
"\\item Let demand be constant at $a>0$. A positive stationary share requires $\\chi\\ge1$. If $\\chi>1$, the stationary share is unique and equals $a$. If $\\chi=1$, every $T\\in(0,a]$ is stationary, and the share stays at $\\min\\{a,T_0\\}$, the level set by its initial value; this is the permanence in~(ii)."
],
[
"(i) If $T=\\min\\{a,\\chi T\\}>0$ is stationary and $\\chi<1$, then $\\chi T<T$ and $T=\\min\\{a,\\chi T\\}\\le\\chi T<T$, a contradiction. With $\\chi\\ge1$, $\\chi T\\ge T$, so $T=a$.",
"(i) Stationarity means $T=\\min\\{a,\\chi T\\}$. If $\\chi<1$ and $T>0$, then $T\\le\\chi T<T$, a contradiction. If $\\chi>1$ and $0<T<a$, stationarity requires $T=\\chi T$, which is impossible for $T>0$; and $T=a$ is stationary because $\\chi a>a$. If $\\chi=1$, $\\min\\{a,T\\}=T$ for every $T\\in(0,a]$, and from any $T_0>0$ the path is $T_t=\\min\\{a,T_0\\}$ for $t\\ge1$."
],
[
"To combine them we place them in one economy.",
"To combine them we place them in a joint economy in which holders divide their time between the two markets in a fixed proportion."
],
[
"\\paragraph{The joint economy.} Household $y$ holds $\\tau(y)\\ge0$ units of $t$. Each unit embodies knowledge $z(y)\\in[0,1]$, the same for all units a household holds. In each period a unit supplies conversion services to the need-solving sector of Section~\\ref{sec:tech}, which pays $w(p_c)$ (Proposition~\\ref{prop:valueshift}), and handles one opportunity in the task market of Section~\\ref{sec:autonomy}, which pays $w_j$ with $z_j=z(y)$ (Proposition~\\ref{prop:autonomy}). The two activities are additively separable. This is a modelling simplification. It lets the factor-price channel and the task channel act on the same holdings, so that $\\tau(y)$ in Proposition~\\ref{prop:valueshift} and the mass of holders in Proposition~\\ref{prop:autonomy} are the same object.",
"\\paragraph{The joint economy.} Household $y$ holds $\\tau(y)\\ge0$ units of $t$. Each unit embodies knowledge $z(y)\\in[0,1]$, the same for all units a household holds, and has one unit of time per period. Time is allocated in an exogenously fixed proportion $\\varphi\\in(0,1)$. The share $\\varphi$ supplies conversion services to the need-solving sector of Section~\\ref{sec:tech}, which pays $w(p_c)$ per unit of time (Proposition~\\ref{prop:valueshift}), so a unit of $t$ earns $\\varphi\\,w(p_c)$ there. The share $1-\\varphi$ is spent in the task market of Section~\\ref{sec:autonomy}: the unit handles $1-\\varphi$ opportunities at the wage $w_j$ per opportunity, with $z_j=z(y)$ (Proposition~\\ref{prop:autonomy}), and earns $(1-\\varphi)\\,w_j$. The mass of holder time in the task market, the counterpart of $H$ in Proposition~\\ref{prop:autonomy}, is $H=(1-\\varphi)\\int\\tau(y)\\,dF(y)$, where $F$ is the income distribution, and we maintain $\\mu>H$.\n\nThis allocation is feasible without changing either market. In Proposition~\\ref{prop:valueshift}, $w(p_c)$ is fixed by the zero-profit condition and does not depend on the quantity of $t$ supplied, so moving part of each unit's time to the task market changes the scale of the need-solving sector but not its wage. In Proposition~\\ref{prop:autonomy}, wages are set opportunity by opportunity and do not depend on how many opportunities a holder handles, and $\\mu>H$ keeps compute slack. Three points are assumed rather than derived. First, $(p,p_c,z_A,D)$ is an exogenously given parameter vector: we do not model how one AI improvement moves its components together, nor any relation between the density $D$ and holdings $\\tau$; $D$ is set by how the intermediary layer is established. Second, holders do not choose $\\varphi$; that case is not treated. Third, the fixed allocation remains a modelling simplification, not a general-equilibrium treatment of the two markets. It lets the factor-price channel and the task channel act on the same holdings."
],
[
"\\Gamma(y)=EV_{\\text{cons}}(y)+\\tau(y)\\,g(y),\\qquad g(y)=\\underbrace{w(p_c^1)-w(p_c^0)}_{\\Delta w_P}+\\underbrace{w_T^1(z(y))-w_T^0(z(y))}_{\\Delta w_T(y)},",
"\\Gamma(y)=EV_{\\text{cons}}(y)+\\tau(y)\\,g(y),\\qquad g(y)=\\varphi\\,\\underbrace{\\big[w(p_c^1)-w(p_c^0)\\big]}_{\\Delta w_P}+(1-\\varphi)\\,\\underbrace{\\big[w_T^1(z(y))-w_T^0(z(y))\\big]}_{\\Delta w_T(y)},"
],
[
"A fall in $p_c$ changes the wage per unit of $t$ by the same amount",
"A fall in $p_c$ changes the need-solving wage per unit of time by the same amount"
],
[
"In the joint economy, suppose $R(y_L)\\le P_0$",
"In the joint economy with time share $\\varphi\\in(0,1)$ and $\\mu>H$, suppose $R(y_L)\\le P_0$"
],
[
"With $\\Delta w_P\\ge0$, $\\Delta z_A\\ge0$ and $C(D^0)\\ge C(D^1)$, the per-unit gain $g(y)$ is therefore non-negative and non-increasing.",
"With $\\Delta w_P\\ge0$, $\\Delta z_A\\ge0$ and $C(D^0)\\ge C(D^1)$, the per-unit gain $g(y)=\\varphi\\Delta w_P+(1-\\varphi)\\Delta w_T(y)$ is therefore non-negative and non-increasing, because $\\varphi$ and $1-\\varphi$ are positive constants."
],
[
"Each is checked by evaluating every condition and the conclusion on an income grid, which is a numerical verification of the stated examples, not a general proof.",
"Each is checked by evaluating every condition and the conclusion on an income grid, which is a numerical verification of the stated examples, not a general proof. Weak necessity is shown for each of C1--C5 as a whole, not for the separate items within a condition. In particular, no construction makes default routing or pooled liability fail alone within C2, and in the calibration of Section~\\ref{sec:quant} voluntary routing does not break the conclusion."
],
[
"\\emph{Factor-income part.} By C3, AI is non-autonomous in both states.",
"\\emph{Factor-income part.} The time allocation is feasible: the need-solving wage $w(p_c^k)$ is fixed by zero profit whatever the quantity $\\varphi\\int\\tau\\,dF$ of $t$ supplied, and at most $H=(1-\\varphi)\\int\\tau\\,dF<\\mu$ opportunities are staffed in the task market, so $r^*=0$ in both states as in Proposition~\\ref{prop:autonomy}(i). By C3, AI is non-autonomous in both states."
],
[
"(Proposition~\\ref{prop:valueshift}(i)), $g(y)=\\Delta w_P+\\Delta w_T(y)$ is non-negative and non-increasing.",
"(Proposition~\\ref{prop:valueshift}(i)), $g(y)=\\varphi\\Delta w_P+(1-\\varphi)\\Delta w_T(y)$ is non-negative and non-increasing, since multiplying by the positive constants $\\varphi$ and $1-\\varphi$ preserves both properties."
],
[
"The eight parameterisations of Table~\\ref{tab:necessity} are defined in \\texttt{code/prop8.py}.",
"The eight parameterisations of Table~\\ref{tab:necessity} are defined in \\texttt{code/prop8.py}, with $\\varphi=0.5$; the baseline conclusion is also checked at $\\varphi=0.25$ and $\\varphi=0.75$."
],
[
"with default intermediated verification and $n=200$, and adds the factor side.",
"with default intermediated verification and $n=200$, and adds the factor side. Holders spend half their time in each market, $\\varphi=0.5$, and compute capacity $\\mu=50$ is well above $H=0.13$."
],
[
"All conditions hold, and $\\Gamma(y)/y$ is non-increasing at every grid point (Figure~\\ref{fig:joint}a).",
"All conditions hold, and $\\Gamma(y)/y$ is non-increasing at every grid point (Figure~\\ref{fig:joint}a). The same holds with $\\varphi=0.25$ and with $\\varphi=0.75$."
],
[
"Table~\\ref{tab:necessity} reports eight constructions in which one condition fails.",
"Table~\\ref{tab:necessity} reports eight constructions in which one of C1--C5 fails. In the four that target C1 and C3, holdings are scaled up so that the factor part is not dominated by the consumer part."
],
[
"(holdings scaled to $\\tau(y)=10y$ so that the factor part dominates)",
"(holdings $\\tau(y)=20y$)"
],
[
"Among 400 random parameter draws, 255 satisfy every condition",
"Among 400 random parameter draws at $\\varphi=0.5$, 255 satisfy every condition"
],
[
"(b) Gain relative to income when one of C1--C4 fails,",
"Time share $\\varphi=0.5$. (b) Gain relative to income when one of C1--C4 fails,"
],
[
"expert radiologists in \\citet[abstract]{agarwal2023radiology}",
"professional radiologists in \\citet[abstract]{agarwal2023radiology}"
],
[
"In a deployment randomised at the clinician level and stratified by clinic (p.~7), across 39,849 visits, 106 clinicians and 15 clinics (p.~2),",
"In a pragmatic cluster-assigned deployment (p.~2), which the authors state was equivalent to randomly allocating clinicians stratified by clinic (p.~7, fn.~2), across 39,849 visits, 106 clinicians and 15 clinics (p.~3),"
],
[
"and several authors are employed by the AI supplier.",
"and several authors are affiliated with the AI supplier, which also funded the study (pp.~1, 10)."
],
[
"In a joint economy that combines the factor-price and task channels,",
"In a joint economy in which holders of conversion inputs divide their time in fixed proportions between the factor-price and task channels,"
],
[
"In the model each condition can fail alone and break the result.",
"In the model each of these five conditions, taken as a whole, can fail alone and break the result; necessity is not shown for their separate components."
],
[
"the additive form of the joint economy,",
"the fixed, exogenous time allocation of the joint economy and its treatment of $(p,p_c,z_A,D)$ as an exogenous vector,"
],
[
"runs 63 symbolic and numerical checks; its output ends with ``CHECKS 63/63 COMPLETE''",
"runs 73 symbolic and numerical checks; its output ends with ``CHECKS 73/73 COMPLETE''"
],
[
"\\caption{Coverage of \\texttt{verify\\_propositions.py} (revision round~1).}",
"\\caption{Coverage of \\texttt{verify\\_propositions.py} (revision round~2).}"
],
[
"Proposition~2 & 5 & No-trade condition, Bertrand equilibrium conditions and the premium bound on a $21^3$ grid of $(w,r_h,k_t)$; premium flat in $w$; limit $k_t\\to0$.",
"Proposition~2 & 6 & No-trade condition, Bertrand equilibrium conditions and the premium bound on a $21^3$ grid of $(w,r_h,k_t)$; premium flat in $w$; limit $k_t\\to0$; the tie $r_h=k_t$."
],
[
"Proposition~3 & 17 & (a) the threshold in both directions;",
"Proposition~3 & 19 & (a) the threshold in both directions, and the premise $p_e<P_0$ by counterexample;"
],
[
"(c) losers, the interval, $\\pi=0$ and $p\\ge0$;",
"(c) losers, the interval, $\\pi=0$, $p\\ge0$ and the boundary $R=\\theta\\pi L$;"
],
[
"Proposition~4 & 5 & Derivatives symbolically;",
"Proposition~4 & 6 & Derivatives symbolically, including $z_j=1$;"
],
[
"Proposition~6, Corollary~1 & 11 & Closed forms symbolically; the support and interior conditions by counterexample; the capacity law of motion for $\\chi=1$, $\\chi>1$ and $\\chi<1$.",
"Proposition~6, Corollary~1 & 14 & Closed forms symbolically; the support and interior conditions by counterexample; the capacity law of motion and the set of stationary shares for $\\chi=1$, $\\chi>1$ and $\\chi<1$."
],
[
"Proposition~8 & 11 & Baseline conditions and conclusion; sufficiency on 400 random draws; the eight weak-necessity constructions of Table~\\ref{tab:necessity}.",
"Proposition~8 & 14 & Baseline conditions and conclusion; the baseline at $\\varphi\\in\\{0.25,0.5,0.75\\}$; sufficiency on 400 random draws; the eight weak-necessity constructions of Table~\\ref{tab:necessity} ($\\varphi=0.5$)."
],
[
"\\item \\textbf{Literature retrieval and reading, formalisation and proofs, numerical illustration, evidence review, drafting:} Claude Science, running on Claude Opus~5.5 (\\texttt{claude-opus-5-5}).",
"\\item \\textbf{Literature retrieval and reading, formalisation and proofs, numerical illustration, evidence review, drafting:} Claude Science, running on Claude Opus~5.5 (\\texttt{claude-opus-5-5}). Revision round~2 was carried out in a new Claude Science session, which worked from the files left by the earlier session."
],
[
"This revision (round~1) corrects all of these; Proposition~8 and Proposition~6 were revised as the commissioning party specified. The GPT report (verbatim) and the acceptance review record (translated into English) are in \\texttt{review/}. The revised propositions have not yet been re-reviewed.",
"Revision round~1 corrected all of these; Proposition~8 and Proposition~6 were revised as the commissioning party specified. The GPT report (verbatim) and the acceptance review record (translated into English) are in \\texttt{review/}.\n\\item \\textbf{Second acceptance review and second non-Claude review (16 October 2026):} the commissioning research agent completed a second acceptance review, and \\texttt{gpt-5.6-terra}, through the same tool, a second review of the revised formal results. They found that the joint economy of Proposition~8 did not specify how holders' time is allocated between the need-solving sector and the task market; that Corollary~1(i) was false for $\\chi=1$; and that Proposition~3(a) omitted the premise $p_e<P_0$. Minor problems were the left endpoint in Proposition~3(c), the wording of Proposition~4(i) when $z_j=1$, the undefined discount factor $\\beta$ in Section~\\ref{sec:apprentice}, a missing tie rule in Proposition~2, and wording in the abstract, introduction and conclusion. The acceptance review also found that a page reference it had itself supplied in round~1 was wrong (\\citealp{korom2025penda}, p.~3, not p.~2), and recommended two wording changes in the evidence section. This revision (round~2) corrects all of these; Proposition~8 was revised with the fixed time share specified by the commissioning party. The second GPT report (verbatim), the second acceptance record and the commissioning party's check of new evidence entries (both translated into English) are in \\texttt{review/}. The propositions as revised in round~2 have not yet been re-reviewed."
]
]''')
p = R / "paper" / "main.tex"; t = p.read_text()
for i, (old, new) in enumerate(EDITS):
    n = t.count(old); assert n == 1, (i, n, old[:90])
    t = t.replace(old, new)
p.write_text(t)
print(f"REVISE ROUND2 C OK: {len(EDITS)} replacements")
