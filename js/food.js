/* ============================================================
   1. CATEGORY FILTER
   ============================================================ */
function foodFilter(category, btn) {
  // Update active tab
  document.querySelectorAll('.food-ftab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const items = document.querySelectorAll('.food-card-item');
  let visibleCount = 0;

  items.forEach((item, index) => {
    const cat = item.dataset.cat;
    const match = category === 'all' || cat === category;

    if (match) {
      item.classList.remove('hidden');
      // Stagger re-appear animation
      item.classList.remove('visible');
      setTimeout(() => item.classList.add('visible'), index * 70);
      visibleCount++;
    } else {
      item.classList.add('hidden');
      item.classList.remove('visible');
    }
  });

  // Toggle no-results message
  const noResults = document.getElementById('foodNoResults');
  if (noResults) {
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }
}

/* ============================================================
   2. SCROLL REVEAL — Intersection Observer for food cards
   ============================================================ */
function initFoodScrollReveal() {
  const cards = document.querySelectorAll('.food-card-item');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('hidden')) {
          const allVisible = Array.from(cards).filter(c => !c.classList.contains('hidden'));
          const idx = allVisible.indexOf(entry.target);
          const delay = (idx % 3) * 90;

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach(card => observer.observe(card));
}

/* ============================================================
   3. ANIMATED STAT COUNTERS
   Counts up the numbers in .f-stat-num on scroll into view
   ============================================================ */
function initStatCounters() {
  const stats = document.querySelectorAll('.f-stat-num');

  const parseTarget = (text) => {
    // Strips "+" or "," and returns numeric value
    return parseInt(text.replace(/[^0-9]/g, ''), 10);
  };

  const formatNum = (val, original) => {
    if (original.includes('+')) return val.toLocaleString() + '+';
    return val.toLocaleString();
  };

  const animateCounter = (el) => {
    const original = el.textContent.trim();
    const target = parseTarget(original);
    if (!target || el.dataset.counted) return;

    el.dataset.counted = 'true';
    const duration = 1600;
    const step = 16;
    const totalSteps = duration / step;
    let current = 0;

    const timer = setInterval(() => {
      current += target / totalSteps;
      if (current >= target) {
        el.textContent = formatNum(target, original);
        clearInterval(timer);
      } else {
        el.textContent = formatNum(Math.floor(current), original);
      }
    }, step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  stats.forEach(el => observer.observe(el));
}

/* ============================================================
   4. KEYBOARD SUPPORT — filter tabs accessible via keyboard
   ============================================================ */
function initFilterKeyboard() {
  document.querySelectorAll('.food-ftab').forEach(tab => {
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        foodFilter(tab.dataset.filter, tab);
      }
    });
  });
}

/* ============================================================
   5. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initFoodScrollReveal();
  initStatCounters();
  initFilterKeyboard();
});