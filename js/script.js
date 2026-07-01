// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Ano no rodapé
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Animação de entrada ao rolar a página
const revealEls = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));

// Vitrine de parceiros: revezamento do destaque
const partnerItems = document.querySelectorAll('.partner-item');
if (partnerItems.length > 1) {
  let activeIndex = 0;
  setInterval(() => {
    partnerItems[activeIndex].classList.remove('is-active');
    activeIndex = (activeIndex + 1) % partnerItems.length;
    partnerItems[activeIndex].classList.add('is-active');
  }, 2200);
}
