const translations = {
  tr: {
    siteTitle: "Hisham Portföy",
    home: "Anasayfa",
    projects: "Projeler",
    about: "Hakkımda",
    contact: "İletişim",
    line1: "< Ben Hisham >",
    line2: "Anadolu Üniversitesi bilgisayar programcılığı bölümü mezunuyum.",
    line3: "Aynı zamanda Nova IT’den aldığım eğitimlerle yazılım geliştirme yetkinliğimi ileri seviyeye taşıdım.",
    line4: "HTML, CSS ve JavaScript teknolojileriyle modern ve kullanıcı dostu web arayüzleri tasarlayabiliyorum.",
    line5: "Ayrıca botlar geliştirerek topluluk yönetimini kolaylaştıran çözümler sundum.",
    line6: "Python programlama dilinde ileri düzey bilgiye sahibim; bu sayede masaüstü uygulamaları geliştirmenin yanı sıra veritabanı yönetimi konusunda da etkin çözümler üretebiliyorum.",
    line7: "Ayrıca, çeşitli platformlar için botlar geliştirerek topluluk yönetimini kolaylaştıran projelere katkı sağladım.",
    line8: "Hedefim, kullanıcı deneyimini ön planda tutan, yenilikçi ve kalıcı projelere imza atarak yazılım dünyasında güçlü bir iz bırakmak.",
    footer: "© 2025 HM. Tüm hakları saklıdır."
  },
  en: {
    siteTitle: "Hisham Portfolio",
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    line1: "< I'm Hisham >",
    line2: "I am a graduate of Anadolu University in the field of Computer Programming.",
    line3: "I have enhanced my software development skills through training at Nova IT.",
    line4: "I actively continue my journey in software development by participating in both individual and team projects.",
    line5: "I am skilled in creating modern and user-friendly web interfaces using HTML, CSS, and JavaScript.",
    line6: "With advanced knowledge of Python, I develop desktop applications and manage databases efficiently.",
    line7: "I have also developed bots to facilitate community management across various platforms.",
    line8: "My goal is to leave a lasting mark in the software industry by delivering innovative and user-focused projects.",
    footer: "© 2025 HM. All rights reserved."
  },
  de: {
    siteTitle: "Hisham Portfolio",
    home: "Startseite",
    projects: "Projekte",
    about: "Über mich",
    contact: "Kontakt",
    line1: "< Ich bin Hisham >",
    line2: "Ich habe mein Studium im Bereich Computerprogrammierung an der Anadolu Universität abgeschlossen.",
    line3: "Durch meine Ausbildung bei Nova IT habe ich meine Fähigkeiten in der Softwareentwicklung weiter verbessert.",
    line4: "Ich setze meine Laufbahn in der Softwareentwicklung aktiv fort, sowohl in Einzel- als auch in Teamprojekten.",
    line5: "Ich beherrsche die Erstellung moderner und benutzerfreundlicher Weboberflächen mit HTML, CSS und JavaScript.",
    line6: "Mit fortgeschrittenen Kenntnissen in Python entwickle ich Desktop-Anwendungen und verwalte Datenbanken effizient.",
    line7: "Außerdem habe ich Bots entwickelt, die die Verwaltung digitaler Communities auf verschiedenen Plattformen erleichtern.",
    line8: "Mein Ziel ist es, durch innovative und benutzerzentrierte Projekte einen bleibenden Eindruck in der Softwarebranche zu hinterlassen.",
    footer: "© 2025 HM. Alle Rechte vorbehalten."
  },
  ar: {
    siteTitle: "محفظة هشام",
    home: "الرئيسية",
    projects: "المشاريع",
    about: "عنّي",
    contact: "تواصل",
    line1: "< أنا هشام >",
    line2: "أنا خريج جامعة الأناضول في تخصص برمجة الحاسوب.",
    line3: "وقد طورت مهاراتي في تطوير البرمجيات من خلال التدريب في نوفا إيت.",
    line4: "أمتلك مهارات متقدمة في إنشاء واجهات ويب حديثة وسهلة الاستخدام باستخدام إتش تي إم إل و سي إس إس و جافا سكريبت.",
    line5: "كما قمت بتطوير روبوتات تساعد في إدارة المجتمعات الرقمية.",
    line6: "بفضل معرفتي المتقدمة بلغة بايثون، أستطيع تطوير تطبيقات سطح المكتب وإدارة قواعد البيانات بكفاءة.",
    line7: "قمت أيضًا بتطوير روبوتات ساعدت في تسهيل إدارة المجتمعات عبر منصات متعددة.",
    line8: "هدفي هو ترك بصمة قوية في مجال البرمجيات من خلال تقديم مشاريع مبتكرة تركز على تجربة المستخدم.",
    footer: "© 2025 HM. جميع الحقوق محفوظة."
  }
};

const switchLanguage = (lang) => {
  localStorage.setItem("selectedLanguage", lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.classList.remove('lang-tr', 'lang-en', 'lang-de', 'lang-ar');
  document.documentElement.classList.add(`lang-${lang}`);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || `[Missing Translation: ${key}]`;
  });

  const dropdownBtn = document.getElementById("dropdownBtn");
  if (dropdownBtn) dropdownBtn.textContent = lang.toUpperCase();

  if (lang === "ar") {
    document.body.classList.add("arabic");
  } else {
    document.body.classList.remove("arabic");
  }

  const lines = document.querySelectorAll(".line");
  lines.forEach((line) => {
    line.style.animation = "none";
    void line.offsetWidth;
    line.style.animation = "";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "tr";
  switchLanguage(savedLang);

  document.querySelectorAll("#dropdownContent a").forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute("data-lang");
      switchLanguage(lang);
    });
  });
});
