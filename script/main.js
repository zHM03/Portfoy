// Dil seçimini dinleyen ve hamburger menüsünün konumunu değiştiren JavaScript kodu
const switchLanguage = (lang) => {
  localStorage.setItem("selectedLanguage", lang);
  document.documentElement.lang = lang;

  // Dil çevirisini uygulama
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Dil dropdown butonunu güncelleme
  const dropdownBtn = document.getElementById("dropdownBtn");
  if (dropdownBtn) dropdownBtn.textContent = lang.toUpperCase();

  // Arapça dilini seçtiğimizde hamburger menüsünü sola almak için
  if (lang === "ar") {
    document.body.classList.add("arabic"); // Arapça dilinde class ekliyoruz
  } else {
    document.body.classList.remove("arabic"); // Diğer dillerde kaldırıyoruz
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Kaydedilen dili yükleme veya varsayılan olarak "tr" dilini ayarlama
  const savedLang = localStorage.getItem("selectedLanguage") || "tr";
  switchLanguage(savedLang);

  // Hamburger menüsünü açma/kapama
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Menü öğelerine tıklayınca menüyü kapatma
  document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });

  // Dil seçimini dropdown üzerinden yapma
  document.querySelectorAll("#dropdownContent a").forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute("data-lang");
      switchLanguage(lang);
    });
  });
});
