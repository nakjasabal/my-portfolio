const body = document.body;
const themeButton = document.querySelector('.theme-button');

if (localStorage.getItem('theme') === 'dark') body.classList.add('dark');
themeButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('[data-count]').forEach((counter) => {
      const target = Number(counter.dataset.count);
      const start = performance.now();
      const duration = 1200;
      const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    });
    statObserver.unobserve(entry.target);
  });
}, { threshold: 0.45 });
document.querySelectorAll('.stats-inner').forEach((element) => statObserver.observe(element));

document.querySelector('.menu-button').addEventListener('click', (event) => {
  const isOpen = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!isOpen));
  document.querySelector('.desktop-nav').classList.toggle('mobile-open', !isOpen);
});
