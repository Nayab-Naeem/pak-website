/* ============================================================
   CULTURE.JS — Pak Trends Culture Page
   Author: Nayab Naeem
   ============================================================ */

/* ============================================================
   1. TOGGLE READ MORE / READ LESS
   ============================================================ */
function toggleText(element) {
  const parent = element.closest('.culture-content');
  const shortText = parent.querySelector('.short-text');
  const longText = parent.querySelector('.long-text');

  if (longText.classList.contains('d-none')) {
    // Show long text
    shortText.style.opacity = '0';
    shortText.style.maxHeight = '0';
    setTimeout(() => {
      shortText.classList.add('d-none');
      longText.classList.remove('d-none');
      longText.style.opacity = '0';
      longText.style.maxHeight = '0';
      
      setTimeout(() => {
        longText.style.transition = 'all 0.4s ease';
        longText.style.opacity = '1';
        longText.style.maxHeight = '1000px';
      }, 10);
    }, 200);
    element.textContent = 'Read less';
    element.classList.add('active');
  } else {
    // Show short text
    longText.style.opacity = '0';
    longText.style.maxHeight = '0';
    setTimeout(() => {
      longText.classList.add('d-none');
      shortText.classList.remove('d-none');
      shortText.style.opacity = '0';
      shortText.style.maxHeight = '0';
      
      setTimeout(() => {
        shortText.style.transition = 'all 0.4s ease';
        shortText.style.opacity = '1';
        shortText.style.maxHeight = '500px';
      }, 10);
    }, 200);
    element.textContent = 'Read more';
    element.classList.remove('active');
  }
}

/* ============================================================
   2. INTERSECTION OBSERVER FOR SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const sections = document.querySelectorAll('.culture-section');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
  });
}

/* ============================================================
   3. SMOOTH SCROLL BEHAVIOR
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ============================================================
   4. LAZY LOAD IMAGES
   ============================================================ */
function initLazyLoad() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('.culture-section-img').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

/* ============================================================
   5. HIGHLIGHT TAG ANIMATION
   ============================================================ */
function animateHighlightTags() {
  const tags = document.querySelectorAll('.highlight-tag');
  tags.forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    tag.style.animation = `popIn 0.5s ease ${0.1 * index}s forwards`;
  });
}

/* ============================================================
   6. PAGE INITIALIZATION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initSmoothScroll();
  initLazyLoad();
  animateHighlightTags();

  // Add animation for culture rows
  const rows = document.querySelectorAll('.culture-row');
  rows.forEach((row, index) => {
    row.style.animationDelay = `${0.2 * index}s`;
  });
});

/* ============================================================
   7. ADD CSS ANIMATION FOR TAGS
   ============================================================ */
const style = document.createElement('style');
style.textContent = `
  @keyframes popIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);

/* ============================================================
   8. HANDLE WINDOW RESIZE
   ============================================================ */
window.addEventListener('resize', () => {
  // Any resize-specific logic can go here
});
