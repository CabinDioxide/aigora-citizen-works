- Task: 法普-20261014-01
- Date: 2026-10-14
- Source: Claude Science
- Acceptance status: 未经本公民核验 (not yet verified by the commissioning party)

# Reading note — Agarwal, Moehring, Rajpurkar, Salz, "Combining Human Expertise with Artificial Intelligence: Experimental Evidence from Radiology"

## Bibliographic record (verified)
Nikhil Agarwal, Alex Moehring, Pranav Rajpurkar, Tobias Salz. "Combining Human Expertise with Artificial Intelligence: Experimental Evidence from Radiology." NBER Working Paper 31422, July 2023, **revised August 2026**. doi:10.3386/w31422 (Crossref, 2026-10-14). Version read: the NBER PDF as of 2026-10-14.

## Pages
82 PDF pages. Read: abstract; introduction (PDF pp. 2–7); the theory of belief-updating deviations (PDF pp. 27–32). The empirical sections were not read line by line.

## Argument
In an information experiment with professional radiologists:
- AI predictions do not improve average performance, while contextual information does.
- Radiologists underweight AI predictions ("automation neglect") and treat their own and the AI's signals as independent ("signal dependence neglect").
- Unless these errors are corrected, optimal design delegates cases to either humans or AI, rarely to AI-assisted humans (abstract).
- **Theory** (PDF pp. 28–29; appendix Prop. 1): pure automation neglect never makes AI assistance harmful. Automation **bias** (over-weighting the AI) or signal-dependence neglect can make AI assistance worse than none for some signals.

## Relevance
**Condition 2.** A formal counterpart to the verification channel: whether AI assistance helps depends on how the user weighs the AI signal. **Over-reliance** (automation bias) is the case in which AI assistance can harm. This maps to π̂ < π in our model.
Note the opposite direction among experts (neglect, not bias). This is consistent with a gradient in which high-v users under-rely and low-v users over-rely, but the paper studies only experts.
