(function () {
  'use strict';

  /* ---------------- Theme (dark/light) toggle ---------------- */
  var THEME_KEY = 'snh-theme';
  var root = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');

  function getPreferredTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  }

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  /* ---------------- Mobile nav toggle ---------------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', '메뉴 열기');
      });
    });
  }

  /* ---------------- Header shadow on scroll ---------------- */
  var header = document.getElementById('siteHeader');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Scroll reveal ---------------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------------- Stat counter animation ---------------- */
  var statEls = document.querySelectorAll('.stat-number[data-count]');

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var duration = 1400;
    var startTime = null;

    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(eased * target);
      el.textContent = current.toLocaleString('ko-KR');
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('ko-KR');
      }
    }

    window.requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && statEls.length) {
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statEls.forEach(function (el) {
      statObserver.observe(el);
    });
  } else {
    statEls.forEach(function (el) {
      el.textContent = el.getAttribute('data-count');
    });
  }
})();
