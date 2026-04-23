document.getElementById('footer').innerHTML = `
  <footer class="site-footer py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <img src="../images/logo.png" alt="Pak Trends" height="45" class="mb-3">
          <p class="footer-desc">Exploring Pakistan's culture, cities & lifestyle — one story at a time.</p>
        </div>
        <div class="col-md-4">
          <h6 class="footer-heading">Quick Links</h6>
          <ul class="footer-links">
            <li><a href="../index.html">Home</a></li>
            <li><a href="cities.html">Cities</a></li>
            <li><a href="food.html">Food</a></li>
            <li><a href="culture.html">Culture</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h6 class="footer-heading">Connect</h6>
          <div class="footer-socials">
            <a href="#" class="footer-social-link"><i class="bi bi-instagram"></i></a>
            <a href="#" class="footer-social-link"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="footer-social-link"><i class="bi bi-github"></i></a>
          </div>
        </div>
      </div>
      <hr class="footer-divider">
      <p class="footer-bottom text-center mb-0">
        Designed with 💚 by <strong>Nayab Naeem</strong> &copy; 2026 — Pak Trends
      </p>
    </div>
  </footer>
`;
      // Navbar for all webpages 
      
const isSubPage = window.location.pathname.includes('/pages/');
const base = isSubPage ? '../' : '';

document.getElementById('navbar').innerHTML = `
  <nav class="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
    <div class="container">
      <a class="navbar-brand" href="${base}index.html">
        <img src="${base}images/logo.png" alt="Pak Trends" height="50">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          <li class="nav-item"><a class="nav-link" href="${base}index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="${base}pages/cities.html">Cities</a></li>
          <li class="nav-item"><a class="nav-link" href="${base}pages/food.html">Food</a></li>
          <li class="nav-item"><a class="nav-link" href="${base}pages/culture.html">Culture</a></li>
          <li class="nav-item ms-2"><a class="btn btn-success px-4" href="${base}pages/signin.html">Sign In</a></li>
        </ul>
      </div>
    </div>
  </nav>
`;

// ===== AUTO ACTIVE LINK =====
const currentPage = window.location.pathname.split('/').pop();

document.querySelectorAll('.nav-link').forEach(link => {
  const linkPage = link.getAttribute('href').split('/').pop();
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});

  // Animated counter for stats section
  (function () {
    const counters = document.querySelectorAll('.stat-number');
    const duration = 2000; // total animation time in ms

    const animateCount = (el) => {
      const target = parseInt(el.dataset.target, 10) || 0;
      const suffix = el.dataset.suffix || '';
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // ease-out cubic for a smooth deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = value + (progress === 1 ? suffix : '');
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    // Trigger when stats section enters viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target); // run only once
        }
      });
    }, { threshold: 0.4 });

    counters.forEach((c) => observer.observe(c));
  })();

