const switchLanguage = (lang) => {
  localStorage.setItem("selectedLanguage", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const dropdownBtn = document.getElementById("dropdownBtn");
  if (dropdownBtn) dropdownBtn.textContent = lang.toUpperCase();

  if (lang === "ar") {
    document.body.classList.add("arabic");
  } else {
    document.body.classList.remove("arabic");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "tr";
  switchLanguage(savedLang);

  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  const dropdownBtn = document.getElementById("dropdownBtn");
  if (dropdownBtn) dropdownBtn.textContent = savedLang.toUpperCase();

  // Dil seçimi
  document.querySelectorAll("#dropdownContent a").forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute("data-lang");
      switchLanguage(lang);
    });
  });

  // Hamburger menü işlevi
  const hamburger = document.getElementById("hamburger");
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    document.querySelectorAll(".menu-links a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  }
});
