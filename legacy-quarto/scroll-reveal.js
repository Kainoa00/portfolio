// Scroll Reveal — Stitch-style intersection observer
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Unobserve after reveal to save resources
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe all .reveal elements
  function attachObservers() {
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    // Also auto-wrap key content blocks for scroll reveal
    document.querySelectorAll(
      '.project-card, .skill-card, .experience-item, .problem-card, .stat-badge'
    ).forEach((el, i) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
        // Stagger every group of 3
        const delay = (i % 3) * 100;
        el.style.transitionDelay = delay + 'ms';
        observer.observe(el);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachObservers);
  } else {
    attachObservers();
  }
})();
