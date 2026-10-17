> Public excerpt, 2026-10-17. This file contains only the referee report that gpt-5.6-terra wrote at the end of its run (Codex command line, read-only sandbox), reproduced verbatim. The rest of the run record (the model reading working files) is kept by AIgora Society and not published. Absolute local file paths in the report were replaced with `replication/`, `<project-root>/` or `<home>/`.

## Referee report

Line references are to the revised [main.tex](replication/paper/main.tex).

### Earlier 13 flags

| Flag | Status | Line | Finding |
|---|---|---:|---|
| 1 | Fixed | 216 | Exclusion now requires \(R(y)<p_e(y)\). |
| 2 | Fixed | 222 | Evidence is now said to be compatible with, not identify, the verification channel. |
| 3 | Fixed | 249 | Gain is limited to employed holders. |
| 4 | Fixed | 259 | Adds \(C(D)<z_A\) and states the excluded autonomous case. |
| 5 | Fixed | 281 | Limits rent retention to \(\rho<1\). |
| 6 | Fixed | 311 | Adds the interior condition and truncation qualification. |
| 7 | Fixed | 329 | Uses \(\chi a_L<a_H\); recovery claim is limited to \(\chi>1\). |
| 8 | Fixed | 341 | On reconsideration, \(p_c\) is a defensible gross private value of a trainee to the firm—the avoided AI-task cost when the novice wage is zero. |
| 9 | Fixed | 341 | Invented “one or two” and “a year” clinic magnitudes are removed. |
| 10 | Fixed | 420 | Clearly distinguishes the illustrative list from formal C1–C5 sufficiency. |
| 11 | Fixed | 444 | Decline in wages is weak, strict only for \(z_j>0\). |
| 12 | Fixed | 446 | Failure is conditional on crossing the new threshold. |
| 13 | Fixed | 450 | Guarantee is lost only if the relevant formal condition fails. |

### Revision-request items

| Item | Status | Line(s) | Finding |
|---|---|---:|---|
| 1 | Fixed | 159 | No unsupported assignment of surplus to users. |
| 2 | Fixed | 311 | Interior-support qualification added. |
| 3 | Fixed | 259 | Employment and \(C(D)<z_A\) qualifications added. |
| 4 | Fixed | 420 | Omitted C1–C5 components and pooled-loss substitution stated. |
| 5 | Fixed | 216 | Correct exclusion condition. |
| 6 | Fixed | 222 | No field identification claim. |
| 7 | Fixed | 249 | Restricted to employed holders. |
| 8 | Fixed | 281 | Restricted to incomplete pass-through. |
| 9 | Fixed | 329 | Correct persistence/recovery conditions. |
| 10 | Fixed | 341 | Clinic-specific quantities removed. |
| 11 | Fixed | 444 | Weak/strict distinction added. |
| 12 | Fixed | 446 | Threshold-crossing qualification added. |
| 13 | Fixed | 450 | Conditional guarantee wording added. |
| 14 | Fixed | 373 | Experience rating is correctly presented as a modelling choice, not a moral-hazard implication. |
| 15 | Fixed | 293 | Ide citation now gives pp. 3 and 9. |
| 16 | Fixed | 89, 171, 224, 533 | “Participants/users” replaces unsupported “non-experts.” |
| 17 | Fixed | 279 | Income and entry/variety channels have separate pages. |
| 18 | Fixed | 97, 255, 539 | Kogan wording is associational; entrant result is attributed to the abstract. |
| 19 | Fixed | 224 | Penda’s iteration/active-deployment condition and exact 20%/40% figures are added. |
| 20 | Fixed | 444, 446 | Capability loss is conditional (“may”); human-in-the-loop inference is explicitly the authors’ reading. |

No changed sentence newly converts a sufficient result into a necessary one, attributes joint conditions to one parameter, globalizes the \(\varphi=0.5\) weak-necessity constructions, or adds clinic-specific numbers.

### New minor flags

- **Minor — L287:** “open-source models, **which any provider can host**” is not reported in the supplied [Demirer–Fradkin–Tadelis reading note](replication/reading_notes/demirer_fradkin_tadelis_2026_jep.md).  
  Correct: “Controlling for benchmark intelligence, open-source models are about 90% cheaper than closed-source ones…”

- **Minor — L287:** “the standard contract also has no access fee, \(A=0\)” needs the provider-layer qualifier. The note supports \(A=0\) only as an interpretation of standard API access at that layer, not of downstream intermediary contracts.  
  Correct: “On our reading, standard API access has no **provider-level** fixed access charge (\(A=0\) at that layer); it does not identify the access fees faced by downstream intermediaries or negotiated contracts.”

### Condition 4 / Demirer–Fradkin–Tadelis

The price decline, 90% conditional open-source discount, usage pricing, discounts for large buyers, OpenRouter scope, and absence of end-user pass-through estimates all stay within the reading note. The discussion correctly treats these facts as indirect evidence bearing on \(\rho\), not an estimate of \(\rho\); it also preserves the absence claim for clinic-facing \(A\). The two wording fixes above are needed to keep the mapping strictly layer-specific.

**No major problem remains.**
