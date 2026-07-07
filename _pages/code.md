---
layout: page
title: Code
permalink: /code/
description: Open-source code released alongside our publications for full reproducibility.
nav: true
nav_order: 5
---

<div class="container mt-3">
  <p class="text-muted mb-5">
    We release the code behind our studies so that results can be inspected and
    reproduced. Each entry links to a public repository and the paper it accompanies.
  </p>

  <div class="card mb-4 z-depth-1">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between align-items-start flex-wrap">
        <h4 class="fw-bold mb-2">ACES — Adaptive Conformal Early-warning System</h4>
        <span class="badge bg-secondary align-self-center mb-2">MIT License</span>
      </div>

      <p class="text-secondary mb-3">
        Reproduction code for <em>"Calibration, not loss design, governs
        prediction-interval quality: an adaptive conformal early-warning system
        for algal-bloom forecasting."</em> The benchmark crosses five
        heteroscedastic loss families with three forecasting backbones (Mamba,
        GRU, inverted Transformer), pairs every predictor with raw,
        split-conformal, and online adaptive-conformal calibration, and evaluates
        an early-warning decision layer on the calibrated intervals. The central
        finding: the calibration layer — not the training loss — governs
        prediction-interval quality under distribution shift.
      </p>

      <p class="text-muted small mb-3">
        <i class="fas fa-database me-1"></i>
        Uses publicly available observations from the Korean national
        water-quality monitoring network
        (<a href="https://water.nier.go.kr" target="_blank" rel="noopener">water.nier.go.kr</a>),
        Geum River basin, 2021–2024. Raw records are not redistributed; see the
        repository README for the preprocessing pipeline.
      </p>

      <a href="https://github.com/donghyunlee-ai/aces-hab-forecasting"
         class="btn btn-outline-dark btn-sm" target="_blank" rel="noopener">
        <i class="fab fa-github me-1"></i> View on GitHub
      </a>
    </div>
  </div>

</div>
