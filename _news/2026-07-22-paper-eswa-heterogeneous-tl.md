---
layout: post
title: 📜 [Paper] Heterogeneous Transfer Learning for Infectious Disease Forecasting published in ESWA (IF=9.4, Top 5%)
date: 2026-07-22 09:00:00
inline: false
---

🎉 Our paper, "Heterogeneous transfer learning for robust infectious disease forecasting: A data-centric approach," has been published in **Expert Systems with Applications (SCIE, IF = 9.4, JCR Top 5.0%)**, Vol. 332, 133728.

This is a single-authored paper by **Prof. Donghyun Lee**. Congratulations! 🎊

---

### Why this matters

Epidemic forecasting models are usually trained on a single country's data. That is not only a matter of *volume* — even with years of records, one country cannot supply enough **diversity** to capture the non-stationary dynamics of an outbreak. Models trained this way often end up with prediction errors roughly equal to the data's own standard deviation, which means close to no real predictive skill.

### What we did

Instead of searching for a better architecture, this study takes a **data-centric** view and asks a counterintuitive question: *should we pre-train on countries that look **unlike** the target?*

- **Data**: 1,143 days of COVID-19 records across **30 countries**
- **Source selection**: source countries chosen by **Dynamic Time Warping (DTW)** distance
- **Backbone**: Temporal Convolutional Network (TCN)

### Key findings

- The Heterogeneous TL framework reached **RMSE/SD = 0.37** and **R² = 0.82** — a **40% RMSE reduction** over the individual TCN baseline.
- Wilcoxon signed-rank tests (N = 30 countries) confirmed significant gains over all individual models (p < .001), Random TL (p = .009), and Homogeneous TL (p < .001).
- A heterogeneity ablation splitting sources into four DTW-distance quartiles showed the **most dissimilar quartile (Q4) cut RMSE by 12.1%** versus the most similar (Q1, p = .008), while Q1–Q3 were statistically indistinguishable from one another.

The benefit of heterogeneity is therefore **not monotonic** — it concentrates in the genuinely dissimilar sources rather than growing steadily with distance. Strategic data heterogeneity, in other words, is a resource to be selected for, not just more data to pile on.

---

**Citation**: Lee, D. (2026). Heterogeneous transfer learning for robust infectious disease forecasting: A data-centric approach. _Expert Systems with Applications_, 332, 133728.

- [Publisher Link (DOI)](https://doi.org/10.1016/j.eswa.2026.133728)
