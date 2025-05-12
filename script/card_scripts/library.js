const translations = {
  tr: {

  },
  en: {
    details: "Details",
  },
  de: {
    details: "Details",
  },
  ar: {
    details: "التفاصيل",
  }
};

function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  document.getElementById("dropdownBtn").textContent = lang.toUpperCase();
  localStorage.setItem('language', lang); // Dil tercihini kaydediyoruz
}

document.querySelectorAll(".dropdown-content a").forEach((a) => {
  a.addEventListener("click", () => {
    const lang = a.getAttribute("data-lang");
    updateLanguage(lang);
  });
});

// Sayfa yüklendiğinde dil tercihini kontrol et
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('language') || 'tr'; // Varsayılan olarak Türkçe
  updateLanguage(savedLang);
});
