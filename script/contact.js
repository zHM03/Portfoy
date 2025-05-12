const translations = {
  tr: {
    home: "Anasayfa",
    projects: "Projeler",
    about: "Hakkımda",
    contact: "İletişim",
    name: "Adınız",
    email: "E-posta",
    subject: "Konu",
    message: "Mesaj",
    send: "Gönder",
    footer: "© 2025 HM. Tüm hakları saklıdır.",
  },
  en: {
    home: "Home",
    projects: "Projects",
    about: "About Me",
    contact: "Contact",
    name: "Your Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send",
    footer: "© 2025 HM. All rights reserved.",
  },
  de: {
    home: "Startseite",
    projects: "Projekte",
    about: "Über mich",
    contact: "Kontakt",
    name: "Ihr Name",
    email: "E-Mail",
    subject: "Betreff",
    message: "Nachricht",
    send: "Senden",
    footer: "© 2025 HM. Alle Rechte vorbehalten.",
  },
  ar: {
    home: "الرئيسية",
    projects: "المشاريع",
    about: "عنّي",
    contact: "تواصل",
    name: "اسمك",
    email: "البريد الإلكتروني",
    subject: "الموضوع",
    message: "رسالة",
    send: "إرسال",
    footer: "© 2025 HM. جميع الحقوق محفوظة.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownContent = document.getElementById("dropdownContent");

  // Sayfa yüklendiğinde, varsa kaydedilen dili uygula
  const savedLang = localStorage.getItem("selectedLanguage") || "tr";
  applyTranslations(savedLang);
  dropdownBtn.textContent = savedLang.toUpperCase();

  dropdownContent.addEventListener("click", (e) => {
    const lang = e.target.getAttribute("data-lang");
    if (lang && translations[lang]) {
      localStorage.setItem("selectedLanguage", lang); // Seçilen dil kaydediliyor
      dropdownBtn.textContent = lang.toUpperCase();
      applyTranslations(lang);

      if (lang === "ar") {
        document.body.setAttribute("dir", "rtl");
      } else {
        document.body.removeAttribute("dir");
      }
    }
  });
});

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];

    if (translation) {
      el.textContent = translation;
    } else {
      el.textContent = `[Missing Translation: ${key}]`;  // Eksik çeviri gösterme
      console.warn(`Missing translation for key: ${key} in language: ${lang}`);
    }
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const status = document.getElementById("formStatus");

  fetch("https://formspree.io/f/mldbbqwq", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        status.style.color = "green";
        status.innerHTML = "Mesajınız başarıyla gönderildi!";
        // Başarı ikonu ekleme
        status.innerHTML += ' <span class="success-icon">✔</span>';
        form.reset();
      } else {
        response.json().then(data => {
          status.style.color = "red";
          if (data.errors) {
            status.innerHTML = data.errors.map(error => error.message).join(", ");
          } else {
            status.innerHTML = "Mesaj gönderilirken bir sorun oluştu.";
          }
        });
      }
    })
    .catch(error => {
      status.style.color = "red";
      status.innerHTML = "Bağlantı hatası. Lütfen tekrar deneyin.";
    });
});
