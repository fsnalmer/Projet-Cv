(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Scroll reveal animations (content stays readable even if this fails)
  var animatedEls = document.querySelectorAll("[data-animate]");
  function revealAll() {
    animatedEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
  try {
    if ("IntersectionObserver" in window && animatedEls.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px" }
      );
      animatedEls.forEach(function (el) { observer.observe(el); });
    } else {
      revealAll();
    }
  } catch (err) {
    revealAll();
  }
  // Safety net: guarantee every section is visible shortly after load,
  // even if the observer missed an element (e.g. short page, last section).
  window.addEventListener("load", function () {
    setTimeout(revealAll, 1200);
  });

  // Download CV: fall back to the public Canva source if the local PDF
  // is not yet published in assets/CV_Grynko_Noah.pdf
  var downloadBtn = document.getElementById("downloadCvBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function (e) {
      var localHref = downloadBtn.getAttribute("href");
      fetch(localHref, { method: "HEAD" })
        .then(function (res) {
          if (!res.ok) throw new Error("CV PDF not found");
        })
        .catch(function () {
          e.preventDefault();
          window.open("https://www.canva.com/d/AcoY9K9Nh6Hb4m0", "_blank", "noopener");
        });
    });
  }
})();
