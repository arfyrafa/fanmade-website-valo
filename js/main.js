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

  const navLinks = document.querySelectorAll('.nav-links a');
  const sectionIds = [...document.querySelectorAll('section[id], header[id]')].map((section) => section.id);

  const setActiveNav = (targetId) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const hash = href.startsWith('#') ? href.slice(1) : '';
      const isActive = hash && hash === targetId;

      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href') || '';
      if (!href.startsWith('#')) return;

      const targetId = href.slice(1);
      setActiveNav(targetId);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        event.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const scrollSpy = () => {
    const scrollPosition = window.scrollY + 180;
    let currentId = '';

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < bottom) {
        currentId = id;
      }
    });

    if (currentId) {
      setActiveNav(currentId);
    }
  };

  window.addEventListener('scroll', scrollSpy, { passive: true });
  scrollSpy();

  // ---------- Hero boot-in sequence (one orchestrated moment) ----------
  // Elements with .boot fade/slide in on page load, staggered via .d1-.d4
  requestAnimationFrame(() => {
    setTimeout(() => {
      document.querySelectorAll('.boot').forEach(el => el.classList.add('in'));
    }, 80);
  });

  // ---------- Weapon tabs ----------
  const weaponTabs = document.querySelectorAll('.weapon-tab');
  const weaponPanels = document.querySelectorAll('.weapon-panel');

  weaponTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;

      weaponTabs.forEach((btn) => {
        const isActive = btn === tab;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
      });

      weaponPanels.forEach((panel) => {
        panel.classList.toggle('active', panel.id === target);
      });
    });
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
