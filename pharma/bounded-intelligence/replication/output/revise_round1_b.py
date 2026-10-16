# Revision round 1 (2026-10-15), part B: Propositions 6-8, the joint economy and Table 1.
import sys
p = 'paper/main.tex'; s = open(p).read()
R = []

# ---- Proposition 6 environment and statement, Corollary 1
R.append((r"""Before AI, the alternative way to perform entry tasks costs $\bar p>p_c$. Novices are in excess supply, so $w_N=0$, and they cannot pay upfront training fees. The expert premium $W$ depends on $p_c$ but not on the stock of experts, as in the small-sector structure of Section~\ref{sec:tech}; if $W$ fell with the stock, $a^*$ would solve a fixed point. The subsidy is lump-sum financed.

\begin{proposition}[Apprenticeship externality]\label{prop:apprentice}
Market apprenticeship is $a^m=G(p_c)$, which falls from $G(\bar p)$ before AI to $G(p_c)$ after. The efficient rate is $a^*=G(p_c+\beta W(p_c))>a^m$. The steady-state share of each cohort holding $t$ equals the apprenticeship rate. The per-cohort welfare loss is $\int_{p_c}^{p_c+\beta W}(p_c+\beta W-\kappa)\,dG(\kappa)>0$. A per-apprentice subsidy $s^*=\beta W(p_c)$ restores the optimum, and $s=\bar p-p_c$ keeps the cohort share of $t$-holders at its pre-AI level. With $G$ uniform, the gap $a^*-a^m=\beta W/\bar\kappa$ and the loss $(\beta W)^2/(2\bar\kappa)$ both rise as $p_c$ falls.
\end{proposition}""",
r"""Before AI, the alternative way to perform entry tasks costs $\bar p>p_c$. Novices are in excess supply, so $w_N=0$, and they cannot pay upfront training fees. The expert premium $W$ depends on $p_c$ but not on the stock of experts, as in the small-sector structure of Section~\ref{sec:tech}; if $W$ fell with the stock, $a^*$ would solve a fixed point. The subsidy is lump-sum financed. We assume $W(p_c)>0$, so that holding $t$ pays, and $p_c<\bar\kappa$, so that some supervision costs exceed the AI price; $G$ has a density $g>0$ on $[0,\bar\kappa]$.

Apprentices learn alongside an expert of the previous cohort, and each expert can supervise at most $m$ apprentices. Let $T_{t-1}$ be the share of the previous cohort that holds $t$. At most $mT_{t-1}$ novices of cohort $t$ can be apprenticed, so the share of cohort $t$ that acquires $t$ is
\begin{equation}\label{eq:capacity}
T_t=\min\{a_t,\ mT_{t-1}\},
\end{equation}
where $a_t$ is firms' demand for apprentices.

\begin{proposition}[Apprenticeship externality]\label{prop:apprentice}
Suppose mentor capacity does not bind, $mT_{t-1}\ge a^*$. Market apprenticeship is $a^m=G(p_c)$, which falls from $G(\bar p)$ before AI to $G(p_c)$ after. The efficient rate is $a^*=G(p_c+\beta W(p_c))>a^m$, and the share of cohort $t$ holding $t$ equals the apprenticeship rate. The per-cohort welfare loss is $\int_{p_c}^{\min\{p_c+\beta W,\bar\kappa\}}(p_c+\beta W-\kappa)\,dG(\kappa)>0$. A per-apprentice subsidy $s^*=\beta W(p_c)$ restores the optimum. A subsidy $s=\bar p-p_c$ keeps the cohort share of $t$-holders at its pre-AI level $G(\bar p)$, provided $mT_{t-1}\ge G(\bar p)$. If $G$ is uniform on $[0,\bar\kappa]$ and $p_c+\beta W(p_c)\le\bar\kappa$, then the gap $a^*-a^m=\beta W/\bar\kappa$ and the loss $(\beta W)^2/(2\bar\kappa)$ both rise as $p_c$ falls.
\end{proposition}

The proposition shows that the \emph{external} value of an apprenticeship, the discounted premium $\beta W(p_c)$ that the novice carries away, rises as AI cheapens entry tasks. It does not say that the total social value $p_c+\beta W(p_c)$ of an apprenticeship rises: that requires $1+\beta W'(p_c)<0$, a condition on how steeply the expert premium responds to the AI price, which the model does not pin down.

When capacity binds, \eqref{eq:capacity} links cohorts.

\begin{corollary}[Mentor capacity and persistence]\label{cor:capacity}
Let $T_t=\min\{a_t,mT_{t-1}\}$.
\begin{enumerate}[label=(\roman*),itemsep=0pt]
\item A stationary share $T>0$ with constant demand $a>0$ requires $m\ge1$; with $m\ge1$ it is $T=a$.
\item Suppose $m\ge1$, $T_0=a_H$, demand falls to $a_L<a_H$ for cohort~1 and returns to $a_H$ from cohort~2 on. Then $T_t=\min\{a_H,\,m^{t-1}a_L\}$ for $t\ge1$. With $m=1$ the fall is permanent. With $m>1$ the share returns to $a_H$ after $\lceil\ln(a_H/a_L)/\ln m\rceil$ further cohorts.
\item In (ii), the cumulative shortfall $\sum_{t\ge1}(a_H-T_t)$ exceeds the one-cohort fall $a_H-a_L$ if and only if $ma_L<a_H$.
\item With $m<1$, $T_t\le m^tT_0$, so the share declines geometrically whatever firms' demand.
\end{enumerate}
\end{corollary}

Part~(iii) is the cross-generation amplification. One cohort's lost apprenticeships remove mentors for the next cohort, so a temporary fall in demand has a cumulative cost larger than its direct cost whenever capacity is tight. Proposition~\ref{prop:apprentice} and the subsidy result require capacity to be slack. Where capacity binds, a subsidy that restores demand restores the share only gradually, at the rate $m$."""))

# ---- Proposition 7
R.append((r"""With CARA risk aversion $\lambda(y)>0$ decreasing in income, and with an error probability $\pi$ and loss $L$ that do not depend on the liability regime, a household that bears its own error risk pays a risk premium $RP(y)$ on top of $\pi L$.

\begin{proposition}[Liability]\label{prop:liability}
$RP(y)$ is strictly decreasing in $y$. It therefore adds a downward-sloping term to the effective-price schedule and, by Lemma~\ref{lem:schedule}, pushes toward regressivity. With pooled liability at loading $\ell$, households weakly prefer pooling if and only if $RP(y)\ge\ell\pi L$, which holds for an interval at the bottom of the distribution. Under pooling, the term drops out of the gradient conditions.
\end{proposition}""",
r"""Let households have CARA risk aversion $\lambda(y)>0$, decreasing in income. An acted-upon error occurs with probability $\pi\in(0,1)$ and causes loss $L>0$; neither depends on the liability regime. A household that bears its own error risk pays, on top of $\pi L$, the risk premium
\[
RP(y)=\lambda(y)^{-1}\ln\!\big(1-\pi+\pi e^{\lambda(y)L}\big)-\pi L .
\]
Under pooled liability the household pays a premium $(1+\ell)\pi L$, with loading $\ell\ge0$, and bears no risk. The premium is experience-rated: it is charged at the household's own error probability.

\begin{proposition}[Liability]\label{prop:liability}
\begin{enumerate}[label=(\roman*),itemsep=0pt]
\item For given $(\pi,L)$, $RP(y)$ is positive and strictly decreasing in $y$. It adds a downward-sloping term to the effective-price schedule and, by Lemma~\ref{lem:schedule}, pushes toward regressivity.
\item A household weakly prefers pooling if and only if $RP(y)\ge\ell\pi L$. With $\pi$ common to all households, the set of households that prefer pooling is, if non-empty, an interval at the bottom of the income distribution.
\item Pooling removes the risk-premium term from the effective-price schedule. Where the error probability varies with income, $\pi(y)=e(1-v(y))$, the pooled premium $(1+\ell)\pi(y)L$ keeps the income gradient of the expected loss. That gradient is the verification channel of Proposition~\ref{prop:verification}, scaled by $1+\ell$, and is handled there.
\end{enumerate}
\end{proposition}

Part~(iii) states what pooling does and does not do. It removes the part of the regressive term that comes from risk aversion. It does not remove the part that comes from unequal verification capacity, unless premiums were charged at the population-average error probability; we do not assume that, because a community-rated premium would weaken the incentive to verify, which the model does not represent."""))

# ---- Proposition 8: joint economy and statement
R.append((r"""\subsection{Synthesis}\label{sec:synthesis}

\begin{proposition}[Joint sufficiency; weak individual necessity]\label{prop:synthesis}
Let a household's current gain be its consumer gain plus its factor-income gain as a holder of $t$. Suppose:
\begin{itemize}[itemsep=0pt]
\item[] (C1) Regime~H holds and $\tau(y)/y$ is non-increasing;
\item[] (C2) verification is intermediated: (d1) and (d3) of Proposition~\ref{prop:verification}(d) hold, with default routing under overconfidence and pooled liability;
\item[] (C3) AI is non-autonomous and $C(D)<s_{\min}$, so that every holder's wage change is common and non-negative;
\item[] (C4) pass-through and access fees preserve (d2) and $n\ge n^*(A)$ in every catchment;
\item[] (C5) the apprenticeship subsidy satisfies $s\ge\bar p-p_c$.
\end{itemize}
Then current gains relative to income are non-increasing in income, and the next cohort's share of $t$-holders does not fall. Conversely, for each condition there is a parameterisation satisfying the others in which its failure alone makes gains non-inclusive. For C3 and C4 the failure works through the factor-income and consumer components respectively: C1 with a negative common wage change makes the factor gain relative to income increasing, and C2 without (d2) leaves the bottom of the schedule unprotected. The conditions are not individually necessary in every parameterisation.
\end{proposition}""",
r"""\subsection{Synthesis in a joint economy}\label{sec:synthesis}

Propositions~\ref{prop:valueshift} and~\ref{prop:autonomy} describe two markets for the services of conversion-input holders. To combine them we place them in one economy.

\paragraph{The joint economy.} Household $y$ holds $\tau(y)\ge0$ units of $t$. Each unit embodies knowledge $z(y)\in[0,1]$, the same for all units a household holds. In each period a unit supplies conversion services to the need-solving sector of Section~\ref{sec:tech}, which pays $w(p_c)$ (Proposition~\ref{prop:valueshift}), and handles one opportunity in the task market of Section~\ref{sec:autonomy}, which pays $w_j$ with $z_j=z(y)$ (Proposition~\ref{prop:autonomy}). The two activities are additively separable. This is a modelling simplification. It lets the factor-price channel and the task channel act on the same holdings, so that $\tau(y)$ in Proposition~\ref{prop:valueshift} and the mass of holders in Proposition~\ref{prop:autonomy} are the same object.

\paragraph{The AI change.} The AI change is the move from a pre-AI state $(p_c^0,z_A^0,D^0)$, in which households have no AI service, to a post-AI state $(p_c^1,z_A^1,D^1)$ with $p_c^1\le p_c^0$, $z_A^1\ge z_A^0$ and $D^1\ge D^0$, in which households can buy the AI service of Section~\ref{sec:verification} at posted price $p$. The improvement can therefore be a fall in the price of codifiable cognition, a rise in what AI solves alone, a denser conversion layer, or any combination. Household $y$'s gain is
\begin{equation}\label{eq:G}
G(y)=EV_{\text{cons}}(y)+\tau(y)\,g(y),\qquad g(y)=\underbrace{w(p_c^1)-w(p_c^0)}_{\Delta w_P}+\underbrace{w_T^1(z(y))-w_T^0(z(y))}_{\Delta w_T(y)},
\end{equation}
where $EV_{\text{cons}}$ is the consumer gain of Proposition~\ref{prop:verification} and $w_T^k$ is the task-market wage in state $k$. The two shocks enter differently. A fall in $p_c$ changes the wage per unit of $t$ by the same amount $\Delta w_P\ge0$ for every holder. A rise in $z_A$ changes the task wage by $(1-z(y))\Delta z_A$, which differs across holders (Proposition~\ref{prop:autonomy}(i)). A rise in $D$ changes it by $C(D^0)-C(D^1)$, the same for every holder who is employed in both states. The next cohort's share of $t$-holders is $T_1=\min\{G(p_c+s),\,mT_0\}$, with $T_0=G(\bar p)$ (equation~\eqref{eq:capacity}).

\begin{proposition}[Joint sufficiency; weak individual necessity]\label{prop:synthesis}
In the joint economy, suppose $R(y_L)\le P_0$ and $(1-\eta)R(y_L)-p-m-e(1-v_I)L>0$, and:
\begin{itemize}[itemsep=0pt]
\item[] (C1) Regime~H holds, $\tau(y)\ge0$ and $\tau(y)/y$ is non-increasing;
\item[] (C2) intermediated verification is offered; (d1) and (d3) of Proposition~\ref{prop:verification}(d) hold; intermediation is the default channel if $\theta<1$; and liability is pooled (Proposition~\ref{prop:liability});
\item[] (C3) AI is non-autonomous in both states; $C(D^0)<s^0_{\min}\equiv z_A^0+(1-z_A^0)\min_y z(y)$; and knowledge $z(y)$ is non-decreasing in income;
\item[] (C4) after pass-through and access fees, (d2$_A$) of Proposition~\ref{prop:market} holds, that is $n\ge n^*(A)$, in every catchment;
\item[] (C5) the apprenticeship subsidy satisfies $s\ge\bar p-p_c$, and mentor capacity satisfies $m\ge1$.
\end{itemize}
Then $G(y)/y$ is non-increasing in $y$, and $T_1\ge T_0$: the next cohort's share of $t$-holders does not fall. Conversely, for each of C1--C5 there is a parameterisation of the joint economy in which the maintained assumptions and all other conditions hold, that condition fails, and either $G(y)/y$ increases on an interval or $T_1<T_0$. The conditions are not individually necessary in every parameterisation.
\end{proposition}

\paragraph{How the conditions combine.} The consumer part and the factor-income part are handled separately. For the consumer part, C2 supplies (d1) and (d3), C4 supplies (d2$_A$), and Proposition~\ref{prop:verification}(d) gives $EV_{\text{cons}}(y)/y$ non-increasing. For the factor-income part, the first two items of C3 keep every holder employed in both states, so the task wage is linear in knowledge and $\Delta w_T(y)=(1-z(y))\Delta z_A+[C(D^0)-C(D^1)]$. The third item of C3 makes $1-z(y)$ non-increasing in income. With $\Delta w_P\ge0$, $\Delta z_A\ge0$ and $C(D^0)\ge C(D^1)$, the per-unit gain $g(y)$ is therefore non-negative and non-increasing. C1 makes $\tau(y)/y$ non-negative and non-increasing. The product of two non-negative, non-increasing functions is non-increasing, and so is the sum of the two parts.

The third item of C3 is needed because a rise in $z_A$ raises low-knowledge wages most. If knowledge fell with income, a rise in $z_A$ would raise the wages of richer holders most, and the factor-income part could become regressive even with $\tau(y)/y$ constant. Section~\ref{sec:quant} constructs such a case. The second item is needed because holders who are not employed before the change gain less from a denser conversion layer than those who are. The first is needed because, under autonomy, a rise in $z_A$ lowers holders' wages (Proposition~\ref{prop:autonomy}(ii)), and a negative per-unit gain multiplied by a decreasing $\tau(y)/y$ is increasing.

For the next cohort, C5 gives $G(p_c+s)\ge G(\bar p)=T_0$ and $mT_0\ge T_0$, so $T_1\ge T_0$. The distribution of $t$ within the next cohort across incomes is not modelled.

The sufficiency part is proved in Appendix~\ref{app:proofs}. The weak-necessity parameterisations are constructed in the code and reported in Section~\ref{sec:quant} (Table~\ref{tab:necessity}). Each is checked by evaluating every condition and the conclusion on an income grid, which is a numerical verification of the stated examples, not a general proof."""))

# ---- Table 1 rows
R.append((r"3 Autonomy, packaging & $z_A$, $C(D)$ & Share of tasks needing a human act; cost of specifying and paying for a task &",
          r"3 Autonomy, packaging & $z_A$, $C(D)$, $z(y)$ & Share of tasks needing a human act; cost of specifying and paying for a task; knowledge gradient of holders by income &"))
R.append((r"5 Apprenticeship & $a^m$, $a^*$, $W$ & Apprenticeship and supervised-practice intensity; entry-cohort employment &",
          r"5 Apprenticeship & $a^m$, $a^*$, $W$, $m$ & Apprenticeship and supervised-practice intensity; mentor-to-apprentice ratios; entry-cohort employment &"))
R.append((r"4 Pricing & $\rho$, $A$, $f$ &", r"4 Pricing & $\rho$, $A$, $f$, $n^*(A)$ &"))

for a, b in R:
    if s.count(a) != 1:
        sys.exit(f"NO UNIQUE MATCH ({s.count(a)}): {a[:90]}")
    s = s.replace(a, b)
if r"\newtheorem{corollary}" not in s:
    s = s.replace(r"\newtheorem{lemma}{Lemma}", r"\newtheorem{lemma}{Lemma}" + "\n" + r"\newtheorem{corollary}{Corollary}", 1)
open(p, 'w').write(s); print('part B applied', len(R))
