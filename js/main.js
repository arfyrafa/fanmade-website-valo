// ---------- Mobile nav toggle ----------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
  }

  // ---------- Hero boot-in sequence (one orchestrated moment) ----------
  // Elements with .boot fade/slide in on page load, staggered via .d1-.d4
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll('.boot').forEach(el => el.classList.add('in'));
    }, 80);
  });

  // ---------- AOS (scroll reveal) ----------
  if (window.AOS) {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,      // reveal once — avoids the "everything re-fades on every scroll" default
      offset: 80,
    });
  }
});
