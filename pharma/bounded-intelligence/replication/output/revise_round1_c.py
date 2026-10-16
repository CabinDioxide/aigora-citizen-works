# Revision round 1 (2026-10-15), part C: Section 4 (illustration), Section 5 (evidence),
# Section 6 (implications), Section 7 (predictions) and the conclusion.
import sys
p = 'paper/main.tex'; s = open(p).read()
R = []

# ---- Section 4: verification channel, pointwise vs summary index
R.append((r"""Figure~\ref{fig:verification} reports four cases, summarised by the ratio of mean $EV/y$ in the bottom quintile to that in the top quintile:
\begin{itemize}[itemsep=0pt]
\item \emph{common verification capacity} (set at the population mean): 1.37;
\item \emph{verification rising with income}: 0.24, with 8\% of households excluded;
\item \emph{verification rising with income plus overconfidence}: $-0.09$, meaning the bottom quintile loses on average; 8\% of households, all at the bottom of the distribution, are strictly worse off;
\item \emph{plus default intermediated verification}, with $n=200$ clients against the threshold $n^*=49$: 2.53, with no losers.
\end{itemize}

Figure~\ref{fig:sensitivity}(a) varies the verification gradient and the degree of overconfidence. The bottom-to-top ratio falls below one in 75\% of the cells. Figure~\ref{fig:sensitivity}(b) varies the number of clients per intermediary under default routing. Progressivity fails only in the column with the fewest clients ($n=10<n^*$), which is 12.5\% of cells.""",
r"""Figure~\ref{fig:verification} reports four cases, each with two measures. The model's definition of inclusive gains is pointwise: $EV(y)/y$ must be non-increasing at every income. We check it at every point of the grid. We also report a summary index, the ratio of mean $EV/y$ in the bottom quintile to that in the top quintile. An index above one does not imply that the definition holds.
\begin{itemize}[itemsep=0pt]
\item \emph{Common verification capacity} (set at the population mean): index 1.37, but the definition fails. The effective price, 0.39, exceeds $(1-\eta)R(y_L)=0.21$, so relative gains rise with income near the bottom, as Proposition~\ref{prop:verification}(a) states; $EV/y$ increases on 24\% of grid steps.
\item \emph{Verification rising with income}: index 0.24; $EV/y$ increases on 57\% of grid steps; 8\% of households are excluded.
\item \emph{Verification rising with income plus overconfidence}: index $-0.09$, meaning the bottom quintile loses on average; $EV/y$ increases on 65\% of grid steps; 8\% of households, all at the bottom of the distribution, are strictly worse off.
\item \emph{Plus default intermediated verification}, with $n=200$ clients against the threshold $n^*=49$: index 2.53, the definition holds at every grid point, and there are no losers.
\end{itemize}

Figure~\ref{fig:sensitivity}(a) varies the verification gradient and the degree of overconfidence without an intermediary. The index falls below one in 75\% of the cells, and the pointwise definition holds in none of them. In the 16 cells with an index above one, relative gains still rise with income near the bottom, because the effective price there exceeds $(1-\eta)R(y_L)$. Figure~\ref{fig:sensitivity}(b) varies the number of clients per intermediary under default routing. The index is below one only in the column with the fewest clients ($n=10$; 12.5\% of cells). The pointwise definition holds in every cell with $n\ge50$ and fails in every cell with $n\le25$. The column $n=25$ has an index of 1.62 but violates the definition, as Proposition~\ref{prop:verification}(d) predicts, because $25<n^*=49$. The summary index alone would not have shown this."""))
R.append((r"\caption{Sensitivity of the bottom/top-quintile ratio of $EV/y$; values above one are relatively progressive. (a) No intermediary;",
          r"\caption{Sensitivity analysis. Cell values are the summary index, the bottom/top-quintile ratio of mean $EV/y$. An asterisk marks cells in which $EV/y$ is non-increasing at every grid point, which is the model's definition; an index above one without an asterisk is not inclusive in the model's sense. (a) No intermediary;"))

# ---- Section 4: apprenticeship anchoring and capacity
R.append((r"The size of the fall in apprenticeship is anchored, for illustration only, to the 13--19\% range of the descriptive employment gaps for 22--25-year-olds reported in different versions of \citet[pp.~1--3, August 2026 version]{brynjolfsson2025canaries}.",
          r"The size of the fall in apprenticeship is anchored, for illustration only, to the range of estimates for 22--25-year-olds in AI-exposed occupations in \citet[August 2026 version, pp.~2--3]{brynjolfsson2025canaries}: the regression estimates of 13\% and 16\% headlined in earlier versions, and the descriptive shortfall of 19\% in the August 2026 version."))
R.append((r"Figure~\ref{fig:apprentice} shows the scissors effect: as $p_c$ falls, the market rate falls and the gap to the efficient rate widens.",
r"""Figure~\ref{fig:apprentice} shows the scissors effect: as $p_c$ falls, the market rate falls and the gap to the efficient rate widens. At the illustrated point $W=0.25>0$ and $p_c+\beta W=0.763\le\bar\kappa=1$, so the uniform closed forms of Proposition~\ref{prop:apprentice} apply.

\paragraph{Mentor capacity.} Figure~\ref{fig:capacity} applies Corollary~\ref{cor:capacity}. Starting from the pre-AI share of 0.80, demand falls to the market rate 0.672 for one cohort and then returns to 0.80, as it would if the subsidy $s=\bar p-p_c$ were introduced one cohort late. With $\chi=1.2$ apprentices per expert, the share recovers in the next cohort and the cumulative shortfall equals the one-cohort fall, 0.128. With $\chi=1.05$, recovery takes four cohorts and the cumulative shortfall is 0.30. With $\chi=1$ the fall is permanent: the shortfall is 0.128 in every cohort, 1.41 over the eleven cohorts shown. With $\chi=0.95$ the share declines in every cohort, to 0.40 by the eleventh, whatever firms' demand.

\begin{figure}[t]\centering
\includegraphics[width=0.58\textwidth]{fig6_mentor_capacity.pdf}
\caption{Corollary~\ref{cor:capacity}. Share of each cohort holding $t$ after one cohort of low apprenticeship demand (0.672 instead of 0.80), for four values of mentor capacity $\chi$ (apprentices per expert). Illustrative.}\label{fig:capacity}
\end{figure}

\paragraph{Joint economy.} The baseline of Proposition~\ref{prop:synthesis} uses the consumer calibration above, with default intermediated verification and $n=200$, and adds the factor side. Holdings are $\tau(y)=0.2y$, so $\tau(y)/y$ is constant. Knowledge rises linearly in the income rank from 0.2 to 0.8. The AI change lowers $p_c$ from 1 to 0.5, which raises the per-unit wage $w$ by 0.33; it raises $z_A$ from 0.3 to 0.6; and it doubles density from $D=1$ to $D=2$, with $C(D)=0.05+0.1/D$. Apprenticeship is as above, with $s=0.128$ and $\chi=1.2$. All conditions hold, and $\Gamma(y)/y$ is non-increasing at every grid point (Figure~\ref{fig:joint}a).

Table~\ref{tab:necessity} reports eight constructions in which one condition fails. In each, the code checks that the maintained assumptions and the other conditions hold. Two results stand out. First, the knowledge item of C3 matters. With knowledge falling from 0.8 to 0.2 across the income rank and only $z_A$ changing (holdings scaled to $\tau(y)=10y$ so that the factor part dominates), $\Gamma(y)/y$ rises on 76\% of grid steps, although every holder is employed and $\tau(y)/y$ is constant. Second, the default item of C2 did not matter in this calibration. With the intermediary offered only as a voluntary purchase, under-demand arises only for households with $v$ close to $v_I$, who are at the top of the distribution, and the definition still holds. The C2 failure in the table is therefore the absence of intermediated verification. Among 400 random parameter draws, 255 satisfy every condition, and in each of them the conclusion holds.

\begin{figure}[t]\centering
\includegraphics[width=\textwidth]{fig7_joint_economy.pdf}
\caption{Proposition~\ref{prop:synthesis}. (a) Baseline joint economy in which C1--C5 hold: total gain relative to income and its consumer and factor-income parts. (b) Gain relative to income when one of C1--C4 fails, scaled to a maximum absolute value of one for comparability; parameters in Table~\ref{tab:necessity} and \texttt{code/prop8.py}. Illustrative.}\label{fig:joint}
\end{figure}

\input{necessity_table.tex}"""))
R.append((r"With $\lambda(y)=1/y$ and the baseline error exposure, the average risk premium is 1.94 in the bottom income decile and 0.06 in the top decile, in units of the median household's willingness to pay. This is the downward-sloping term of Proposition~\ref{prop:liability}.",
          r"With $\lambda(y)=1/y$ and the baseline error exposure $\pi(y)=e(1-v(y))$, the average risk premium is 1.94 in the bottom income decile and 0.06 in the top decile, in units of the median household's willingness to pay. With $\pi$ held at its population mean, as in Proposition~\ref{prop:liability}(i), the averages are 2.02 and 0.17. This is the downward-sloping term of Proposition~\ref{prop:liability}."))

# ---- Section 5: evidence
R.append((r"In \citet{otis2026uneven}, 640 Kenyan entrepreneurs were randomised to a GPT-4 business assistant.",
          r"In \citet{otis2026uneven}, 640 Kenyan entrepreneurs (p.~3) were randomised to a GPT-4 business assistant."))
R.append((r"The authors trace the difference to which pieces of advice were selected and implemented, not to the questions asked (pp.~3--4).",
          r"The authors trace the difference to which pieces of advice were selected and implemented, not to the questions asked (pp.~3--4). In the model this is a gradient in verification capacity: the low performers' effective price was higher because they were less able to screen the advice they received."))
R.append((r"The authors also report a residual difference in effective use by education (pp.~3--4). In the NBER working-paper version of \citet{brynjolfsson2025work}, resolutions per hour rose by 34\% for the lowest pre-AI skill quintile and by about zero for the highest, among 5,179 agents (pp.~15--16, Fig.~5).",
          r"The authors also report a residual difference in effective use by education (pp.~3--4): participants ``must still evaluate, select, and integrate AI-generated content'' (p.~4). In the NBER working-paper version of \citet{brynjolfsson2025work}, resolutions per hour rose by 34\% for the lowest pre-AI skill quintile and by about zero for the highest (pp.~15--16, Fig.~5), among 5,179 agents (abstract; p.~11)."))
R.append((r"\emph{Calibration.} Non-expert users overestimate the accuracy of LLM answers \citep[arXiv v2, pp.~12--13]{steyvers2025know}. This supports $\theta<1$ at low $v$, but the study does not measure the gradient across $v$.",
          r"\emph{Calibration.} Non-expert users overestimate the accuracy of LLM answers, and longer explanations raise their confidence without raising accuracy \citep[arXiv v2, pp.~12--13; 301 participants, p.~8]{steyvers2025know}. This supports $\theta<1$ at low $v$, but the study does not measure the gradient across $v$. Against a uniform reading of $\theta<1$, expert radiologists in \citet[abstract]{agarwal2023radiology} \emph{under}-weight AI predictions. The model's $\theta(v)$ rising in $v$ is compatible with both findings only if over-reliance is concentrated among users with low verification capacity, which neither study tests."))
R.append((r"\emph{Intermediated verification.} In a clinician-level randomised deployment across 39,849 visits, 106 clinicians and 15 clinics, clinicians with an AI safety net made 16.0\% fewer diagnostic errors (95\% CI 6.9--24.2) and 12.7\% fewer treatment errors (6.8--18.3) \citep[Table~3, p.~16]{korom2025penda}. Patient-reported outcomes did not differ significantly (p.~3), and several authors are employed by the AI supplier.",
          r"\emph{Intermediated verification.} In a deployment randomised at the clinician level and stratified by clinic (p.~7), across 39,849 visits, 106 clinicians and 15 clinics (p.~2), clinicians with an AI safety net made 16.0\% fewer diagnostic errors (95\% CI 6.9--24.2) and 12.7\% fewer treatment errors (6.8--18.3) \citep[Table~3, p.~16]{korom2025penda}. This is the intermediated channel of Proposition~\ref{prop:verification}(d): the AI output reaches the patient through a trained person who checks it. Patient-reported outcomes did not differ significantly (3.8\% versus 4.3\% not feeling better; p.~3), and several authors are employed by the AI supplier. The study does not report effects by clinician skill in the sections we read, so it cannot speak to the density condition."))
R.append((r"\paragraph{Condition 3.} \citet[pp.~34--35]{garicano2026comment} cites radiology as a case where non-autonomy keeps a person in each slot.",
          r"\paragraph{Condition 3.} \citet[pp.~34--35]{garicano2026comment} cites radiology as a case where non-autonomy keeps a person in each slot. His packaging cost covers ``specifying the job, providing the right data, verifying the result, and making it safe to pay for'' (p.~35), which is the object $C(D)$ of Proposition~\ref{prop:autonomy}."))
R.append((r"On the tax side, \citet{acemoglu2020tax} estimate effective tax rates of 25.5\% on labour and about 10\% on equipment and software in the 2010s (NBER WP, pp.~2, 25).",
          r"On the tax side, \citet{acemoglu2020tax} estimate effective tax rates of 25.5\% on labour (33.5\% including the implicit taxes of means-tested programmes) and about 10\% on equipment and software in the 2010s (NBER WP, pp.~2, 25)."))
R.append((r"\emph{Absent:} no measurement of packaging cost, and no evidence linking intermediary density to the creation of AI-addressable tasks.",
          r"\emph{Absent:} no measurement of packaging cost, no evidence linking intermediary density to the creation of AI-addressable tasks, and no measurement of how the knowledge of conversion-input holders varies with income, the third item of C3."))
R.append((r"\paragraph{Condition 5.} \citet{brynjolfsson2025canaries} report, in the August 2026 version,",
          r"\paragraph{Condition 5.} \citet{brynjolfsson2025canaries} report, in the August 2026 version,"))
R.append((r"Earlier versions headlined regression estimates of 13\% and 16\% (p.~3).",
          r"Earlier versions headlined regression estimates of 13\% (July 2025 data) and 16\% (September 2025 data) (p.~3). The same paper reports faster employment growth for experienced workers in occupations involving tacit knowledge (p.~3), which is consistent with the premise that experience carries a complement AI does not supply."))
R.append((r"\emph{Absent:} we found no direct measurement of apprenticeship intensity under AI adoption.",
          r"\emph{Absent:} we found no direct measurement of apprenticeship intensity under AI adoption, and no evidence on mentor-to-apprentice ratios, the capacity $\chi$ of Corollary~\ref{cor:capacity}."))
R.append((r"The Swedish Patient Injury Act compensates injury where it is ``övervägande sannolikt'' (more likely than not) caused by care that could have been avoided (§6)",
          r"The Swedish Patient Injury Act compensates injury where there is ``övervägande sannolikhet'' (a preponderance of probability) that it was caused by care that could have been avoided (§6)"))

# ---- Section 6: implications
R.append((r"By Proposition~\ref{prop:verification}(e), the intermediated channel restores progressivity under overconfidence only when it is the default rather than an optional purchase, and only where the number of clients per intermediary exceeds $n^*$.",
          r"By Proposition~\ref{prop:verification}(d), the intermediated channel restores progressivity only where it serves every household for which it is efficient, the number of clients per intermediary exceeds $n^*(A)$, and the self-verifying households above the cutoff satisfy (d3). By part~(e), making the channel the default secures the first of these where a voluntary market would leave efficient users unserved."))
R.append((r"instruments that lower the packaging cost $C(D)$ act through Proposition~\ref{prop:autonomy}(i), but only while AI is non-autonomous.",
          r"instruments that lower the packaging cost $C(D)$ act through Proposition~\ref{prop:autonomy}(i), but only while AI is non-autonomous and while holders are employed before and after the change. Where the AI improvement raises $z_A$, the gain is progressive only where holders' knowledge does not fall with income (Proposition~\ref{prop:synthesis}, C3)."))
R.append((r"a per-apprentice subsidy of at least $\bar p-p_c$ acts on $a^m$ (Proposition~\ref{prop:apprentice}).",
          r"a per-apprentice subsidy of at least $\bar p-p_c$ acts on $a^m$ (Proposition~\ref{prop:apprentice}). It does so fully only where mentor capacity is slack. Where capacity binds, instruments that raise the number of apprentices each expert can supervise act on $\chi$, and a delay in restoring demand has a cumulative cost (Corollary~\ref{cor:capacity})."))
R.append((r"The model values an apprenticeship at $\beta W(p_c)$, which rises as AI cheapens entry tasks.",
          r"The external value of an apprenticeship in the model is $\beta W(p_c)$, which rises as AI cheapens entry tasks."))
R.append((r"If the objective is to remove the regressive risk-premium term, no-fault compensation with mandatory insurance acts through Proposition~\ref{prop:liability}(iii).",
          r"If the objective is to remove the regressive risk-premium term, no-fault compensation with mandatory insurance acts through Proposition~\ref{prop:liability}(iii). It removes the risk premium; the income gradient of the expected loss remains and is addressed through condition~2."))

# ---- Section 7: one prediction from the corollary
R.append((r"\item \emph{Visible versus unobserved checking",
          r"""\item \emph{Mentor capacity and persistence (condition 5).} Where mentor-to-apprentice ratios are tight, a temporary fall in entry hiring into AI-exposed occupations should be followed by a slower recovery of training places than where ratios are slack, even after demand for entrants recovers (Corollary~\ref{cor:capacity}).
\item \emph{Visible versus unobserved checking"""))

# ---- Conclusion
R.append((r"""If AI supplies codifiable cognition but not conversion inputs, the gains from its spread follow the conversion inputs. In our model they are inclusive under five conditions and one supporting condition:
\begin{itemize}[itemsep=0pt]
\item conversion inputs are held widely;
\item the effective price, including the loss from errors the user fails to catch, does not fall less for those least able to check;
\item AI remains non-autonomous and packaging needs into tasks is cheap;
\item cost declines reach users;
\item tacit knowledge keeps being reproduced through apprenticeship;
\item error risk is pooled.
\end{itemize}
A fall in the posted price of AI alone can be regressive. Verification provided as a default by intermediaries at sufficient density restores relative progressivity. The model's main limitations are its small-sector partial-equilibrium structure, the reduced-form treatment of verification capacity and overconfidence, and the premise itself.""",
r"""If AI supplies codifiable cognition but not conversion inputs, the gains from its spread follow the conversion inputs. In a joint economy that combines the factor-price and task channels, the gains are relatively progressive, and the next cohort's share of conversion-input holders does not fall, when the following conditions hold together:
\begin{itemize}[itemsep=0pt]
\item conversion inputs are held widely, with holdings no more concentrated than income;
\item verification of AI output is intermediated and reaches by default everyone for whom it is efficient, and error risk is pooled;
\item AI remains non-autonomous, packaging needs into tasks is cheap enough to keep holders employed, and holders' knowledge does not fall with income;
\item cost declines and access fees leave each intermediary with more clients than the density threshold;
\item apprenticeship is subsidised enough to offset cheaper AI, and mentor capacity is at least one apprentice per expert.
\end{itemize}
In the model each condition can fail alone and break the result. A fall in the posted price of AI alone can be regressive. Intermediated verification restores relative progressivity only together with routing and the residual gradient condition; density alone does not. When mentor capacity binds, a temporary fall in apprenticeship persists across cohorts. The model's main limitations are its small-sector partial-equilibrium structure, the additive form of the joint economy, the reduced-form treatment of verification capacity and overconfidence, the unmodelled distribution of $t$ across incomes within the next cohort, and the premise itself."""))

for a, b in R:
    if s.count(a) != 1:
        sys.exit(f"NO UNIQUE MATCH ({s.count(a)}): {a[:90]}")
    s = s.replace(a, b)
open(p, 'w').write(s); print('part C applied', len(R))
