- Task: 法普-20261016-02
- Date: 2026-10-16
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Response to the overreach review of the round-5 text

The review (`overreach_review_raw.md`) was run before the final edits. A separate call to a Claude model (`claude-sonnet-5`, the same model family as the author line) received only the formal statements and one section at a time, and no other context. It looked for one failure: explanatory sentences that claim more than the formal results prove. It returned 16 flags in total; the introduction and Section 3.5 had none. Fourteen flags led to corrections and two did not; separately, three sentences that predate round 5 were corrected. The disposition of each flag follows.

| Section | Flagged sentence (short) | Disposition |
|---|---|---|
| 3.1 | smaller σ makes the share respond more | Fixed: now "Where p_c ≥ α". |
| 3.1 | w̄ rises with σ | Fixed: the one-line reason is now given (the exponent falls with σ and 1−α<1). Checked in `check_text_derivations.py` T3. |
| 3.1 | summary sentence | Fixed: the qualifier is carried through. |
| 3.2 | "the premise places both decision rights and the complementarity premium on the dispersed side" | Not changed. This sentence predates round 5. It is stated as a combination with an external result (Brynjolfsson & Hitzig's Prop. 2) and an explicit premise, and the new text says that the step to decision rights rests on these, not on Prop. 2 of this paper. |
| 3.2 | premium rises with k_t | Fixed: "up to the cap w(p_c)". |
| 3.2 | premium larger the higher k_t | Fixed: "weakly larger … never exceeds w(p_c) − r_h". |
| 3.2 | users pay at most what they pay in Regime H | Fixed: now states P_C ≤ w(p_c) against holders receiving w(p_c) in Regime H. |
| 3.3 | "with q=0 and verification capacities far below v_I, every household … buys it" | Fixed. This sentence **predates round 5** and overstates Prop. 3(e), because whether such a household buys depends on θ. It now reads: with q=0 a household buys if and only if θ(v)(1−v) ≥ 1−v_I. Listed in the revision note. |
| 3.3 | clinic: "only if three things hold" | Fixed: "if" (part (d) is sufficient only). |
| 3.3 | clinic: patients "will skip it" | Fixed: "may skip it, depending on the fee". |
| 3.4 | every improvement in what AI solves reaches her | Fixed: the exception z_j = 1 is now stated. |
| 3.6 | scissors widens the gap (no uniform-G qualifier) | Fixed in the new text. The same unqualified statement **predates round 5** in the introduction and the literature section; both now carry "with a uniform distribution of supervision costs". Listed in the revision note. |
| 3.7 | risk premium rises with λ and L | Fixed: λ is attributed to the proof of Prop. 7, and L to the small-risk approximation only. |
| 3.8 | "A rise in z_A changes the task wage by (1−z(y))Δz_A" | Not changed. The sentence predates round 5. In context it describes the joint economy under the employment and non-autonomy conditions of C3, which the next paragraph states. |
| 3.9 | cumulative cost exceeds direct cost with capacity just above one | Fixed: "whenever χa_L < a_H". |
| 3.9 | f lowers domestic welfare | Fixed: "lowers the domestic welfare gain from a cost decline". The same fix is made in Section 3.5. |
