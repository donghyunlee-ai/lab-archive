---
layout: page
title: Projects & Capabilities
permalink: /projects/
description: R&D capabilities and strategic partnerships of the Donghyun Lee AI Group.
nav: true
nav_order: 4
horizontal: false
---

<div class="container mt-4">
  <div class="row">
    <div class="col-12">
      <h3 class="mb-4">🚀 R&D Capabilities</h3>
      <p class="mb-5 text-muted">
        We provide specialized AI solutions and consulting services for government agencies and industries.<br>
        Our expertise spans across trustworthy AI development, full-stack system implementation, and data-driven policy analysis.
      </p>

      <div class="row">
        <div class="col-md-6 mb-5">
          <div class="d-flex align-items-start">
            <div class="icon-box me-3">
              <i class="fas fa-shield-alt fa-2x text-primary"></i>
            </div>
            <div>
              <h5 class="fw-bold">Trustworthy AI & XAI</h5>
              <p class="text-secondary">
                Development of explainable (XAI) and robust AI models. <br>
                Verification of AI reliability for mission-critical applications.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-5">
          <div class="d-flex align-items-start">
            <div class="icon-box me-3">
              <i class="fas fa-cogs fa-2x text-success"></i>
            </div>
            <div>
              <h5 class="fw-bold">MLOps & Pipeline Engineering</h5>
              <p class="text-secondary">
                Building end-to-end machine learning pipelines. <br>
                Automating model training, deployment, and monitoring systems.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-5">
          <div class="d-flex align-items-start">
            <div class="icon-box me-3">
              <i class="fas fa-server fa-2x text-info"></i>
            </div>
            <div>
              <h5 class="fw-bold">Full-Stack Development</h5>
              <p class="text-secondary">
                Developing web-based dashboards for data visualization. <br>
                Backend infrastructure design for stable AI service serving.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-5">
          <div class="d-flex align-items-start">
            <div class="icon-box me-3">
              <i class="fas fa-chart-line fa-2x text-warning"></i>
            </div>
            <div>
              <h5 class="fw-bold">Data Analysis & Consulting</h5>
              <p class="text-secondary">
                Advanced statistical analysis and predictive modeling. <br>
                Providing data-driven insights for policy making and strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<hr class="my-4">

<div class="container mb-5">
  <div class="row">
    <div class="col-12">
      <div class="p-4 bg-light rounded-3 border">
        <h4>🤝 Partnership Inquiry</h4>
        <p class="mt-2">
          We welcome proposals for <strong>joint research, industrial projects, and technical consulting.</strong><br>
          If you are looking for a professional AI R&D partner, please feel free to contact us.
        </p>
        <p class="mt-3 mb-0">
          <i class="fas fa-envelope me-2"></i> 
          <strong>Email:</strong> <a href="mailto:donghyun.lee@hufs.ac.kr" class="text-decoration-none text-dark fw-bold">donghyun.lee [at] hufs.ac.kr</a>
        </p>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="row mb-4">
    <div class="col-12 text-center">
      <h3>Clients & Partners</h3>
      <p class="text-muted small">Trusted by leading institutions and organizations.</p>
    </div>
  </div>
  
  <div class="row align-items-center justify-content-center grayscale-logos text-center">
    
    <div class="col-6 col-sm-4 col-lg-2 mb-4">
      {% include figure.liquid loading="lazy" path="assets/img/partners/logo_kei.png" class="img-fluid logo-img" %}
    </div>

    <div class="col-6 col-sm-4 col-lg-2 mb-4">
      {% include figure.liquid loading="lazy" path="assets/img/partners/logo_nrf.png" class="img-fluid logo-img" %}
    </div>

    <div class="col-6 col-sm-4 col-lg-2 mb-4">
      {% include figure.liquid loading="lazy" path="assets/img/partners/logo_ktl.svg" class="img-fluid logo-img" %}
    </div>

    <div class="col-6 col-sm-4 col-lg-2 mb-4">
      {% include figure.liquid loading="lazy" path="assets/img/partners/logo_krivet.png" class="img-fluid logo-img" %}
    </div>

    <div class="col-6 col-sm-4 col-lg-2 mb-4">
      {% include figure.liquid loading="lazy" path="assets/img/partners/logo_kisti.png" class="img-fluid logo-img" %}
    </div>

    <div class="col-6 col-sm-4 col-lg-2 mb-4">
      {% include figure.liquid loading="lazy" path="assets/img/partners/logo_bistep.png" class="img-fluid logo-img" %}
    </div>

    <div class="col-6 col-sm-4 col-lg-2 mb-4">
      {% include figure.liquid loading="lazy" path="assets/img/partners/logo_niwdc.png" class="img-fluid logo-img" %}
    </div>

    <div class="col-6 col-sm-4 col-lg-2 mb-4">
      {% include figure.liquid loading="lazy" path="assets/img/partners/logo_osp.png" class="img-fluid logo-img" %}
    </div>

    <div class="col-6 col-sm-4 col-lg-2 mb-4">
      {% include figure.liquid loading="lazy" path="assets/img/partners/logo_smc.png" class="img-fluid logo-img" %}
    </div>

  </div>
</div>

<style>
  /* 로고 흑백 효과 및 정돈 */
  .grayscale-logos .logo-img {
    filter: grayscale(100%);
    opacity: 0.5;
    transition: all 0.3s ease;
    max-height: 50px; /* 로고 높이를 조금 줄여서 세련되게 */
    width: auto;
    object-fit: contain;
  }
  
  /* 호버 시 컬러 복구 */
  .grayscale-logos .logo-img:hover {
    filter: grayscale(0%);
    opacity: 1;
  }

  /* 텍스트 가독성 조정 */
  .text-secondary {
    font-size: 0.95rem;
    line-height: 1.5;
  }
</style>
