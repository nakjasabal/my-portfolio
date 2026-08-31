(function () {
  "use strict";

  const STORAGE_KEY = "portfolio-theme";

  /* ---------- Theme Toggle ---------- */
  function initTheme() {
    const toggle = document.querySelector(".theme-toggle");
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");

    applyTheme(theme);

    if (toggle) {
      toggle.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
      });
    }

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.setAttribute("aria-label", theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환");
    }
  }

  /* ---------- Mobile Navigation ---------- */
  function initNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");
    const links = document.querySelectorAll(".nav-link");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "메뉴 열기");
      });
    });
  }

  /* ---------- Header Scroll Effect ---------- */
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Scroll Reveal ---------- */
  function initReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* ---------- Stats Counter ---------- */
  function initStatsCounter() {
    const values = document.querySelectorAll(".stat-value[data-count]");
    if (!values.length) return;

    const animate = (el) => {
      const target = parseInt(el.getAttribute("data-count"), 10);
      const duration = 1400;
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased).toLocaleString();
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target.toLocaleString();
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    values.forEach((el) => observer.observe(el));
  }

  /* ---------- Resource Filter Tabs ---------- */
  function initResourceFilter() {
    const tabs = document.querySelectorAll(".tab[data-filter]");
    const cards = document.querySelectorAll(".resource-card[data-category]");
    if (!tabs.length || !cards.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const filter = tab.getAttribute("data-filter");

        tabs.forEach((t) => {
          const isActive = t === tab;
          t.classList.toggle("is-active", isActive);
          t.setAttribute("aria-selected", String(isActive));
        });

        cards.forEach((card) => {
          const category = card.getAttribute("data-category");
          const show = filter === "all" || category === filter;
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* ---------- Active Nav on Scroll ---------- */
  function initActiveNav() {
    const sections = document.querySelectorAll("section[id], main > section");
    const navLinks = document.querySelectorAll(".nav-link[href^='#']");
    if (!sections.length || !navLinks.length) return;

    const sectionMap = [];
    navLinks.forEach((link) => {
      const id = link.getAttribute("href").slice(1);
      const section = document.getElementById(id) || document.querySelector(`[id="${id}"]`);
      if (section) sectionMap.push({ id, link, section });
    });

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = sectionMap[0];

      sectionMap.forEach((item) => {
        if (item.section.offsetTop <= scrollPos) current = item;
      });

      navLinks.forEach((link) => link.classList.remove("is-active"));
      if (current) current.link.classList.add("is-active");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initNav();
    initHeaderScroll();
    initReveal();
    initStatsCounter();
    initResourceFilter();
    initActiveNav();
  });
})();
