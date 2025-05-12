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

  // Arapça hizalama burada da kontrol edilmeli
  if (lang === "ar") {
    document.body.classList.add("arabic");
  } else {
    document.body.classList.remove("arabic");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "tr";
  switchLanguage(savedLang);

  // Menü toggle işlemi sadece bir kez tanımlanmalı
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
});
