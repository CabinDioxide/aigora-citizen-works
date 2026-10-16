# One-off edit script: applies the corrections accepted from review round 3 to paper/main.tex.
p = 'paper/main.tex'; s = open(p).read()
R = [
(r"In Regime~C (codified), the situation of \citet[\S12.4.3]{brynjolfsson2026hayek}, $t$ can be codified into a protected asset owned by a central firm and reproduced at marginal cost $k_t\ge0$.",
 r"In Regime~C (codified), the situation of \citet[\S12.4.3]{brynjolfsson2026hayek}, $t$ can be codified into a protected asset owned by a central firm and reproduced at marginal cost $k_t\ge0$. Holders supply $t$-services at opportunity cost $r_h\ge0$, and the two sources are perfect substitutes."),
(r"In Regime~H, dispersed holders receive $w(p_c)\tau(y)$, which rises as $p_c$ falls. In Regime~C, the price of $t$-services is capped at $k_t$ whenever $k_t<w(p_c)$, and holders' income from $t$ is at most $k_t\tau(y)$. The premium $w(p_c)-k_t$ per unit accrues to the owner of the codified asset whenever that owner can price at $w(p_c)$. As $k_t\to0$, holders' income from $t$ vanishes whatever $p_c$ is.",
 r"In Regime~H, dispersed holders receive $w(p_c)\tau(y)$, which rises as $p_c$ falls. In Regime~C, with a single owner of the codified asset and Bertrand competition, the price of $t$-services is $P_C=\min\{w(p_c),\max\{r_h,k_t\}\}$. Holders' premium over their opportunity cost is $\max\{0,\min\{w(p_c),k_t\}-r_h\}\le k_t$ per unit, and it does not rise as $p_c$ falls once $w(p_c)\ge k_t$. If $k_t<r_h$, holders are undercut, the owner earns $\min\{w(p_c),r_h\}-k_t$ per unit, and the remainder $w(p_c)-P_C$ accrues to users of $t$-services. As $k_t\to0$, holders' premium vanishes whatever $p_c$ is."),
(r"In Regime~C, Bertrand competition between holders and the reproduced asset, which supplies the same service at cost $k_t$, caps the price at $k_t$ whenever $k_t<w(p_c)$. A protected monopoly owner faces willingness to pay $w(p_c)$ and earns $w(p_c)-k_t$ per unit. $\square$",
 r"In Regime~C, holders (cost $r_h$) and the owner of the reproduced asset (cost $k_t$) Bertrand-compete to supply a service that users value at $w(p_c)$. The lower-cost side wins at a price equal to the higher of the two costs, capped at $w(p_c)$; this gives $P_C$. If $r_h<k_t$, holders serve the market at $\min\{w,k_t\}$ and their premium is $\min\{w,k_t\}-r_h\le k_t$. Otherwise they are undercut and earn no premium, and the owner's margin is $\min\{w,r_h\}-k_t$. An earlier draft stated that the owner earns $w(p_c)-k_t$. That holds only if the owner can price-discriminate or integrates downstream, which the model does not assume; the error was found in independent review (round 3). $\square$"),
(r"or $P_0-p_e(y)$ for incumbents. Households with",
 r"or $P_0-p_e(y)$ for incumbents who switch to AI (those with $p_e(y)\le P_0$; incumbents with $p_e(y)>P_0$ keep the professional and gain zero). Households with"),
(r"If $\eta\ge1$, no positive effective price satisfies this condition.",
 r"(Were $\eta\ge1$, which the maintained assumption $\eta<1$ excludes, no positive effective price would satisfy it.)"),
(r"Under non-autonomy every opportunity needs a human. Under autonomy an opportunity can also be completed by AI alone.",
 r"Under non-autonomy every opportunity needs a human. Under autonomy an opportunity can also be completed by AI alone. Entrepreneurs observe $z_j$ and compete for each holder, so zero profit holds type by type. Agents are risk-neutral and non-employed holders earn zero."),
(r"A lower packaging cost accrues to compute owners, and a higher $z_A$ lowers wages.",
 r"A lower packaging cost accrues to compute owners, and a higher $z_A$ lowers wages. Every holder with $z_j>0$ is employed."),
(r"so low-density catchments lose the guarantee of Proposition~\ref{prop:verification}(d).",
 r"so low-density catchments lose the guarantee of Proposition~\ref{prop:verification}(d). This comparative static holds the usage price $p$ fixed and requires a positive denominator. If the supplier sets $(p,A)$ jointly and lowers $p$ when it raises $A$, the net effect on $n^*$ is ambiguous."),
(r"Before AI, the alternative way to perform entry tasks costs $\bar p>p_c$.",
 r"Before AI, the alternative way to perform entry tasks costs $\bar p>p_c$. Novices are in excess supply, so $w_N=0$, and they cannot pay upfront training fees. The expert premium $W$ depends on $p_c$ but not on the stock of experts, as in the small-sector structure of Section~\ref{sec:tech}; if $W$ fell with the stock, $a^*$ would solve a fixed point. The subsidy is lump-sum financed."),
(r"With CARA risk aversion $\lambda(y)$ decreasing in income,",
 r"With CARA risk aversion $\lambda(y)>0$ decreasing in income, and with an error probability $\pi$ and loss $L$ that do not depend on the liability regime,"),
(r"households prefer pooling if and only if $RP(y)\ge\ell\pi L$",
 r"households weakly prefer pooling if and only if $RP(y)\ge\ell\pi L$"),
# Proposition 8: separate proximate conditions (C1, C2, C5) from primitive conditions (C3, C4)
(r"\item[] (C1) Regime~H holds and the factor-income gain relative to income is non-increasing;",
 r"\item[] (C1) Regime~H holds and $\tau(y)/y$ is non-increasing;"),
(r"\item[] (C2) the effective-price schedule satisfies Lemma~\ref{lem:schedule} (e.g.\ (d1)--(d3), with default routing under overconfidence and pooled liability);",
 r"\item[] (C2) verification is intermediated: (d1) and (d3) of Proposition~\ref{prop:verification}(d) hold, with default routing under overconfidence and pooled liability;"),
(r"\item[] (C3) AI is non-autonomous and $C(D)<s_{\min}$;",
 r"\item[] (C3) AI is non-autonomous and $C(D)<s_{\min}$, so that every holder's wage change is common and non-negative;"),
(r"Conversely, for each condition there is a parameterisation satisfying the others in which its failure alone makes gains non-inclusive. The conditions are not individually necessary in every parameterisation.",
 r"Conversely, for each condition there is a parameterisation satisfying the others in which its failure alone makes gains non-inclusive. For C3 and C4 the failure works through the factor-income and consumer components respectively: C1 with a negative common wage change makes the factor gain relative to income increasing, and C2 without (d2) leaves the bottom of the schedule unprotected. The conditions are not individually necessary in every parameterisation."),
(r"and the factor-income component, which is non-negative by C3 and non-increasing by C1.",
 r"and the factor-income component $\Delta w\,\tau(y)/y$, which is non-increasing because C3 makes $\Delta w$ common and non-negative and C1 makes $\tau(y)/y$ non-increasing. (A common $\Delta w<0$ would reverse the monotonicity; this is why C3 is needed separately, as the round-3 review pointed out.)"),
]
for a, b in R:
    assert s.count(a) == 1, a[:80]
    s = s.replace(a, b)
open(p, 'w').write(s)
print('applied', len(R))
