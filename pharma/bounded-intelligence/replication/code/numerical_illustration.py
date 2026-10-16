"""Calibrated *illustration* (not an estimate) for 'Bounded Intelligence and Inclusive Growth'.

Task 法普-20261014-01 · Claude Science · 未经本公民核验.
Run:  python numerical_illustration.py
Writes: ../figures/fig1..fig5 (.png, .pdf), ../output/numbers.json, ../output/sensitivity_*.csv,
        ../output/params_used.csv. Deterministic (no random draws).
All parameter values and their sources are in ../params.csv; values marked 'assumption'
are normalisations or illustrative choices, not estimates.
"""
import json, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import numpy as np
import pandas as pd
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from model_lib import (w_of_pc, t_share, income_grid, ev_household, inclusion_index,
                       relative_slope, nonincreasing, wages_nonautonomous, wages_autonomous,
                       apprenticeship, risk_premium)

HERE = Path(__file__).resolve().parent
FIG = HERE.parent / "figures"; OUT = HERE.parent / "output"
FIG.mkdir(exist_ok=True); OUT.mkdir(exist_ok=True)
P = pd.read_csv(HERE.parent / "params.csv").set_index("name")["value"].astype(float).to_dict()
NUM = {}

plt.rcParams.update({"font.size": 8, "axes.titlesize": 8, "axes.labelsize": 8,
                     "xtick.labelsize": 7, "ytick.labelsize": 7, "legend.fontsize": 7,
                     "axes.spines.top": False, "axes.spines.right": False,
                     "font.family": "DejaVu Sans", "savefig.dpi": 300})
C_FOCAL, C2, C3, C4, GREY = "#1b4f8a", "#d08c2f", "#6a9f58", "#8c5aa8", "#9a9a9a"

def save(fig, name):
    for ext in ("png", "pdf"):
        fig.savefig(FIG / f"{name}.{ext}", bbox_inches="tight")
    plt.close(fig)

# ------------------------------------------------------------------ Figure 1 (Prop. 1)
alpha = P["alpha"]
pc = np.linspace(0.01, 1.5, 300)
fig, axes = plt.subplots(1, 2, figsize=(6.5, 2.4))
for sig, col in [(0.3, C2), (P["sigma"], C_FOCAL), (0.8, C3)]:
    sh = t_share(pc, alpha, sig); sh = np.where(sh > 0, sh, np.nan)   # sector shuts down at p_c >= alpha^(-s/(1-s))
    axes[0].plot(pc, sh, color=col, lw=1.6 if sig == P["sigma"] else 1.0,
                 label=f"σ = {sig:g}")
    w = w_of_pc(pc, alpha, sig)
    axes[1].plot(pc, w / w_of_pc(1.0, alpha, sig), color=col, lw=1.6 if sig == P["sigma"] else 1.0)
st_hi = 1 - alpha**1.5 * pc**(1 - 1.5)
axes[0].plot(pc, np.where(st_hi > 0, st_hi, np.nan), color=GREY, ls="--", lw=1.0, label="σ = 1.5 (outside model; admissible p_c only)")
axes[0].set(xlabel="price of AI-supplied cognition, p_c", ylabel="value share of conversion input t",
            title="With complements (σ<1), t's share → 1 as p_c → 0")
axes[0].legend(frameon=False, loc="lower left")
axes[1].set(xlabel="price of AI-supplied cognition, p_c", ylabel="t-wage relative to p_c = 1",
            title="The t-wage rises as p_c falls, but stays bounded")
for ax in axes: ax.margins(0.03)
fig.tight_layout(); save(fig, "fig1_value_shift")
NUM["P1_wbar_over_w1_sigma_base"] = float(w_of_pc(1e-9, alpha, P["sigma"]) / w_of_pc(1.0, alpha, P["sigma"]))
NUM["P1_tshare_at_pc_0.1"] = float(t_share(0.1, alpha, P["sigma"]))
NUM["P1_tshare_at_pc_1"] = float(t_share(1.0, alpha, P["sigma"]))

# ------------------------------------------------------------------ Figure 2 (Prop. 3)
y, qs = income_grid(n=int(P["n_grid"]), s=P["income_lognormal_sd"])
base = dict(r=P["r"], eta=P["eta"], P0=P["P0"], p=P["p_ai"], e=P["e"], L=P["L"])
def v_of(qs, lo, hi): return lo + (hi - lo) * qs
def th_of(v, lo): return lo + (1 - lo) * v
v_het = v_of(qs, P["v_lo"], P["v_hi"])
v_hom = np.full_like(qs, v_het.mean())
interm = dict(vI=P["v_I"], m=P["m_I"], F=P["F_I"], n=P["n_I"])
cases = {
    "(a) common verification capacity": ev_household(y, v=v_hom, **base),
    "(b) verification rises with income": ev_household(y, v=v_het, **base),
    "(c) (b) + overconfidence at low v": ev_household(y, v=v_het, theta=th_of(v_het, P["theta_lo"]), **base),
    "(d) (c) + default intermediated verification": ev_household(
        y, v=v_het, theta=th_of(v_het, P["theta_lo"]), intermediary=interm, default_routing=True, **base),
}
fig, axes2 = plt.subplots(2, 2, figsize=(6.5, 4.6), sharey=True, sharex=True)
axes = axes2.ravel()
summary = []
for ax, (lab, res) in zip(axes, cases.items()):
    rel = res["EV"] / y
    ax.axhline(0, color=GREY, lw=0.6)
    ax.plot(qs * 100, rel, color=C_FOCAL, lw=1.4)
    los = res["EV"] < -1e-12
    if los.any():
        ax.fill_between(qs * 100, rel, 0, where=los, color="#c0392b", alpha=0.25, lw=0)
    ii = inclusion_index(y, res["EV"], qs); sl = relative_slope(y, res["EV"]); pw = nonincreasing(res["EV"] / y)
    ax.set_title(lab, loc="left")
    ax.text(0.97, 0.95, f"bottom/top quintile = {ii:.2f}\npointwise EV/y non-increasing: {'yes' if pw['ok'] else 'no'}\nlosers = {100*los.mean():.0f}%",
            transform=ax.transAxes, ha="right", va="top", fontsize=7)
    if ax in axes2[1]: ax.set_xlabel("income percentile")
    summary.append(dict(case=lab, inclusion_index=ii, rel_slope=sl, loser_share=float(los.mean()),
                        pointwise_nonincreasing=pw["ok"], share_grid_increasing=pw["share_increasing"],
                        mean_EV=float(res["EV"].mean()),
                        share_AI=float(np.isin(res["choice"], [2, 3]).mean())))
for ax in axes2[:, 0]: ax.set_ylabel("gain from AI / income (EV/y)")
fig.tight_layout(); save(fig, "fig2_verification_channel")
NUM["P3_cases"] = summary
y0 = (P["P0"] / P["r"])**(1 / P["eta"])
NUM["P3_incumbent_share"] = float((y >= y0).mean())
NUM["P3_pe_threshold_(1-eta)R(yL)"] = float((1 - P["eta"]) * P["r"] * y[0]**P["eta"])
NUM["P3_n_star"] = float(P["F_I"] / ((1 - P["eta"]) * P["r"] * y[0]**P["eta"] - P["p_ai"] - P["m_I"] - P["e"] * (1 - P["v_I"]) * P["L"]))

# ------------------------------------------------------------------ Figure 3 sensitivity
grad = np.round(np.linspace(0.0, 0.7, 8), 2)          # v_hi - v_lo
thlo = np.round(np.linspace(0.3, 1.0, 8), 2)
vmid = 0.5 * (P["v_lo"] + P["v_hi"])
M1 = np.zeros((len(thlo), len(grad))); L1 = np.zeros_like(M1); PW1 = np.zeros_like(M1, dtype=bool)
for i, t in enumerate(thlo):
    for j, g in enumerate(grad):
        vv = v_of(qs, vmid - g / 2, vmid + g / 2)
        res = ev_household(y, v=vv, theta=th_of(vv, t), **base)
        M1[i, j] = inclusion_index(y, res["EV"], qs); L1[i, j] = (res["EV"] < -1e-12).mean()
        PW1[i, j] = nonincreasing(res["EV"] / y)["ok"]
nsz = np.array([10, 25, 50, 100, 200, 400, 800, 1600])
M2 = np.zeros((len(thlo), len(nsz))); PW2 = np.zeros_like(M2, dtype=bool)
for i, t in enumerate(thlo):
    for j, n in enumerate(nsz):
        res = ev_household(y, v=v_het, theta=th_of(v_het, t), intermediary=dict(interm, n=n),
                           default_routing=True, **base)
        M2[i, j] = inclusion_index(y, res["EV"], qs)
        PW2[i, j] = nonincreasing(res["EV"] / y)["ok"]
pd.DataFrame(M1, index=thlo, columns=grad).to_csv(OUT / "sensitivity_gradient_bias.csv")
pd.DataFrame(L1, index=thlo, columns=grad).to_csv(OUT / "sensitivity_gradient_bias_losers.csv")
pd.DataFrame(M2, index=thlo, columns=nsz).to_csv(OUT / "sensitivity_density_bias.csv")
pd.DataFrame(PW1, index=thlo, columns=grad).to_csv(OUT / "sensitivity_gradient_bias_pointwise.csv")
pd.DataFrame(PW2, index=thlo, columns=nsz).to_csv(OUT / "sensitivity_density_bias_pointwise.csv")
from matplotlib.colors import TwoSlopeNorm
fig, axes = plt.subplots(1, 2, figsize=(7.4, 3.2))
vmax = max(np.nanmax(M1), np.nanmax(M2)); vmin = min(np.nanmin(M1), np.nanmin(M2))
norm = TwoSlopeNorm(vcenter=1.0, vmin=min(vmin, 0.5), vmax=max(vmax, 1.5))
for ax, M, PW, xt, xl, ttl in [(axes[0], M1, PW1, grad, "verification gradient (v at top − v at bottom)",
                            "(a) No intermediary: steeper verification\ngradient and stronger bias → regressive"),
                           (axes[1], M2, PW2, nsz, "clients per intermediary, n",
                            "(b) Default intermediary: enough clients\nper intermediary restores progressivity")]:
    im = ax.imshow(M, origin="lower", cmap="RdBu", norm=norm, aspect="auto")
    ax.set_xticks(range(len(xt))); ax.set_xticklabels([f"{x:g}" for x in xt])
    ax.set_yticks(range(len(thlo))); ax.set_yticklabels([f"{x:g}" for x in thlo])
    ax.set_xlabel(xl); ax.set_title(ttl, loc="left")
    for i in range(M.shape[0]):
        for j in range(M.shape[1]):
            ax.text(j, i, f"{M[i,j]:.2f}" + ("*" if PW[i, j] else ""), ha="center", va="center", fontsize=5.5,
                    color="white" if abs(M[i, j] - 1) > 0.6 else "black")
axes[0].set_ylabel("perception factor at lowest v (1 = unbiased)")
cb = fig.colorbar(im, ax=axes, shrink=0.85); cb.set_label("bottom/top quintile EV/y ratio (summary index)\n* = EV/y non-increasing at every grid point")
save(fig, "fig3_sensitivity")
NUM["P3_sens_min_index_noI"] = float(M1.min()); NUM["P3_sens_max_index_noI"] = float(M1.max())
NUM["P3_sens_share_cells_regressive_noI"] = float((M1 < 1).mean())
NUM["P3_sens_share_cells_regressive_withI"] = float((M2 < 1).mean())
NUM["P3_sens_share_cells_pointwise_noI"] = float(PW1.mean()); NUM["P3_sens_share_cells_pointwise_withI"] = float(PW2.mean())
NUM["P3_sens_cells_index_gt1_but_not_pointwise_noI"] = int(((M1 > 1) & ~PW1).sum()); NUM["P3_sens_cells_index_gt1_but_not_pointwise_withI"] = int(((M2 > 1) & ~PW2).sum())
NUM["P3_sens_pointwise_withI_by_n"] = {int(n): bool(PW2[:, j].all()) for j, n in enumerate(nsz)}

# ------------------------------------------------------------------ Figure 4 (Prop. 4)
z = np.linspace(0, 1, 201)
fig, ax = plt.subplots(1, 1, figsize=(3.4, 2.5))
for D, ls in [(P["D_low"], "-"), (P["D_high"], "--")]:
    ax.plot(z, wages_nonautonomous(z, P["zA"], D, P["c0"], P["c1"]), color=C_FOCAL, ls=ls,
            label=f"non-autonomous AI, density D = {D:g}")
ax.plot(z, wages_autonomous(z, P["zA"]), color=C2, label="autonomous AI (any D)")
ax.set(xlabel="worker's knowledge z", ylabel="wage per period",
       title="Denser conversion layer raises and compresses wages\nonly when AI is non-autonomous")
ax.legend(frameon=False, loc="upper center", bbox_to_anchor=(0.5, -0.18), ncol=3); ax.margins(0.03)
fig.tight_layout(); save(fig, "fig4_autonomy_packaging")
wl = wages_nonautonomous(np.array([0.2, 0.8]), P["zA"], P["D_low"], P["c0"], P["c1"])
wh = wages_nonautonomous(np.array([0.2, 0.8]), P["zA"], P["D_high"], P["c0"], P["c1"])
NUM["P4_ratio_w08_w02_Dlow"] = float(wl[1] / wl[0]); NUM["P4_ratio_w08_w02_Dhigh"] = float(wh[1] / wh[0])
NUM["P4_C_Dlow"] = P["c0"] + P["c1"] / P["D_low"]; NUM["P4_C_Dhigh"] = P["c0"] + P["c1"] / P["D_high"]

# ------------------------------------------------------------------ Figure 5 (Prop. 6)
pcs = np.linspace(0.3, P["pbar"], 200)
W = w_of_pc(pcs, alpha, P["sigma"]) - P["omega"]
am, ast, loss = apprenticeship(pcs, W, P["beta_gen"], P["kbar"])
am_pre = P["pbar"] / P["kbar"]
fig, axes = plt.subplots(1, 2, figsize=(6.5, 2.4))
axes[0].plot(pcs, am, color=C_FOCAL, lw=1.6, label="market apprenticeship $a^m$")
axes[0].plot(pcs, ast, color=C3, lw=1.2, label="efficient apprenticeship $a^*$")
lo_dec, hi_dec = P["entry_decline_lo"], P["entry_decline_hi"]
axes[0].axvspan(P["pbar"] * (1 - hi_dec), P["pbar"] * (1 - lo_dec), color=GREY, alpha=0.2, lw=0)
axes[0].text(P["pbar"] * (1 - 0.5 * (lo_dec + hi_dec)), 0.33,
             "13–19% fall in\nmarket rate", ha="center", fontsize=6.5)
axes[0].set(xlabel="AI price for entry tasks, p_c", ylabel="share of cohort apprenticed",
            title="Cheaper AI cuts apprenticeship below the efficient rate")
axes[0].legend(frameon=False, loc="upper left")
axes[1].plot(pcs, loss, color=C_FOCAL, lw=1.6)
axes[1].set(xlabel="AI price for entry tasks, p_c", ylabel="welfare loss per cohort",
            title="The loss grows as p_c falls (scissors effect)")
for ax in axes: ax.margins(0.03)
fig.tight_layout(); save(fig, "fig5_apprenticeship")
mid = P["pbar"] * (1 - 0.5 * (lo_dec + hi_dec))
Wmid = float(w_of_pc(mid, alpha, P["sigma"]) - P["omega"])
a_mid, ast_mid, loss_mid = apprenticeship(np.array([mid]), np.array([Wmid]), P["beta_gen"], P["kbar"])
NUM["P6_pc_mid"] = mid; NUM["P6_W_mid"] = Wmid
NUM["P6_am_pre"] = am_pre; NUM["P6_am_mid"] = float(a_mid[0]); NUM["P6_ast_mid"] = float(ast_mid[0])
NUM["P6_loss_mid"] = float(loss_mid[0]); NUM["P6_subsidy_opt_mid"] = P["beta_gen"] * Wmid
NUM["P6_subsidy_keep_preAI_share_mid"] = P["pbar"] - mid

# ------------------------------------------------------------------ Prop. 7 numbers
lam = P["lambda0"] / y
rp = risk_premium(lam, P["e"] * (1 - v_het), P["L"])
NUM["P7_RP_bottom_decile_mean"] = float(rp[qs <= 0.1].mean())
NUM["P7_RP_top_decile_mean"] = float(rp[qs >= 0.9].mean())
rp_fixed = risk_premium(lam, P["e"] * (1 - v_het.mean()), P["L"])
NUM["P7_RP_bottom_decile_mean_fixed_pi"] = float(rp_fixed[qs <= 0.1].mean()); NUM["P7_RP_top_decile_mean_fixed_pi"] = float(rp_fixed[qs >= 0.9].mean())

# ------------------------------------------------------------------ Figure 6 (Prop. 6 corollary: mentor capacity)
aH, aL = NUM["P6_am_pre"], NUM["P6_am_mid"]
caps = [0.95, 1.0, 1.05, 1.2]
fig, ax = plt.subplots(1, 1, figsize=(3.6, 2.5))
paths = {}
for mc, col in zip(caps, [C2, C_FOCAL, C3, C4]):
    T = [aH]
    demand = [aL] + [aH] * 10                 # one cohort with low demand, then demand restored
    for a_ in demand:
        T.append(min(a_, mc * T[-1]))
    paths[mc] = T
    ax.plot(range(len(T)), T, marker="o", ms=2.5, lw=1.2, color=col, label=f"χ = {mc:g}")
ax.axhline(aH, color=GREY, lw=0.6, ls=":")
ax.set(xlabel="cohort", ylabel="share of cohort holding t",
       title="One cohort of low apprenticeship demand:\npersistence depends on mentor capacity χ")
ax.legend(frameon=False, fontsize=6.5, loc="lower left"); ax.margins(0.03)
fig.tight_layout(); save(fig, "fig6_mentor_capacity")
NUM["P6cor_paths"] = {str(k): [round(x, 4) for x in v] for k, v in paths.items()}
NUM["P6cor_recovery_cohorts"] = {str(mc): int(np.ceil(np.log(aH / aL) / np.log(mc))) for mc in caps if mc > 1}
NUM["P6cor_cum_shortfall"] = {str(k): float(sum(aH - x for x in v[1:])) for k, v in paths.items()}

# ------------------------------------------------------------------ Figure 7 (Prop. 8: joint economy)
import prop8
fig, axes = plt.subplots(1, 2, figsize=(6.6, 2.6), sharey=False)
Pb = dict(prop8.BASE); rb = prop8.evaluate(Pb)
axes[0].plot(rb["qs"] * 100, rb["G"] / rb["y"], color=C_FOCAL, lw=1.6, label="total Γ/y (C1-C5 hold)")
axes[0].plot(rb["qs"] * 100, rb["cons"]["EV"] / rb["y"], color=C2, lw=1.0, ls="--", label="consumer part")
axes[0].plot(rb["qs"] * 100, rb["tau"] * rb["g"] / rb["y"], color=C3, lw=1.0, ls="-.", label="factor-income part")
axes[0].set(xlabel="income percentile", ylabel="gain / income", title="(a) Baseline joint economy")
axes[0].legend(frameon=False, fontsize=6.5)
rows = prop8.run_necessity()
sel = [r_ for r_ in rows if r_["target"] in ("C1", "C2", "C3", "C4")]
cols = [C2, C3, C4, "#c0392b", "#7f7f7f", "#2e8b57"]
for r_, col in zip(sel, cols):
    P_ = prop8.necessity_params(r_["name"]); res_ = prop8.evaluate(P_)
    gy = res_["G"] / res_["y"]
    axes[1].plot(res_["qs"] * 100, gy / np.nanmax(np.abs(gy)), color=col, lw=1.0, label=r_["name"].split(":")[0].replace("C(D) >= s_min", "C(D⁰) ≥ s_min"))
axes[1].set(xlabel="income percentile", ylabel="Γ/y (scaled to max |Γ/y| = 1)",
            title="(b) One condition fails at a time")
axes[1].legend(frameon=False, fontsize=5.5, loc="lower right")
fig.tight_layout(); save(fig, "fig7_joint_economy")
NUM["P8_necessity"] = [{k: (round(v, 4) if isinstance(v, float) else v) for k, v in r_.items()} for r_ in rows]
NUM["P8_baseline_conditions"] = prop8.group(prop8.conditions(Pb, rb))
NUM["P8_baseline_dwP"] = rb["dwP"]
NUM["P8_sufficiency"] = prop8.run_sufficiency(400)
NUM["P8_phi"] = prop8.BASE["phi"]
NUM["P8_necessity_other_phi"] = {str(ph_): [{k: (round(v, 4) if isinstance(v, float) else v) for k, v in r_.items()} for r_ in prop8.run_necessity(ph_)] for ph_ in (0.25, 0.75)}
NUM["P8_phi_checks"] = [{k: (round(v, 4) if isinstance(v, float) else v) for k, v in r_.items()} for r_ in prop8.run_phi_checks()]

pd.DataFrame(summary).to_csv(OUT / "fig2_cases.csv", index=False)
(OUT / "numbers.json").write_text(json.dumps(NUM, indent=2, ensure_ascii=False))
print(json.dumps(NUM, indent=2, ensure_ascii=False))
print("ILLUSTRATION COMPLETE")
