(function () {
  function initRevealObserver() {
    var elements = Array.prototype.slice.call(
      document.querySelectorAll("[data-reveal]"),
    );

    if (!elements.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach(function (element) {
        element.setAttribute("data-revealed", "true");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.setAttribute("data-revealed", "true");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach(function (element) {
      observer.observe(element);
    });
  }

  function initStickyNav() {
    var stickyNav = document.querySelector("[data-sticky-nav]");

    if (!(stickyNav instanceof HTMLElement)) {
      return;
    }

    function syncVisibility() {
      var visible = window.scrollY > 88;

      stickyNav.classList.toggle("translate-y-0", visible);
      stickyNav.classList.toggle("opacity-100", visible);
      stickyNav.classList.toggle("-translate-y-4", !visible);
      stickyNav.classList.toggle("opacity-0", !visible);
    }

    syncVisibility();
    window.addEventListener("scroll", syncVisibility, { passive: true });
  }

  function initAnalyticsTracking() {
    document.addEventListener("click", function (event) {
      var target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      var link = target.closest("a[data-track-event]");

      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      var eventName = link.dataset.trackEvent;

      if (!eventName || typeof window.gtag !== "function") {
        return;
      }

      window.gtag("event", eventName, {
        label: link.dataset.trackLabel || link.href,
        href: link.href,
      });
    });
  }

  function init() {
    initRevealObserver();
    initStickyNav();
    initAnalyticsTracking();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
