const translations = {
  tr: {
    home: "Anasayfa",
    projects: "Projeler",
    about: "Hakkımda",
    contact: "İletişim",
    footer: "© 2025 HM. Tüm hakları saklıdır.",
    h2: "Projelerim",
    discordBot: "DISCORD BOT",
    discordBotDesc: "Bisooo Bot, Discord platformu için geliştirilmiş çok yönlü bir yardımcı bottur. Kullanıcılara oyun takibi, eğlence içerikleri ve bilgi servisleri sunarak hem işlevsellik hem de etkileşim odaklı bir deneyim sağlar.",
    kitapYonetim: "Kitap Yönetim Sistemi",
    library: "Bu proje, kullanıcıların kitap ekleyip arayabileceği, filtreleyip listeleyebileceği bir kitap yönetim sistemidir. Kitap bilgileri JSON formatında saklanır ve kullanıcılar yıl, tür gibi kriterlere göre hızlıca arama ve filtreleme yapabilir.",
    details: "Detaylar",
    details: "Detaylar"
  },
  en: {
    home: "Home",
    projects: "Projects",
    about: "About Me",
    contact: "Contact",
    footer: "© 2025 HM. All rights reserved.",
    h2: "My Projects",
    discordBot: "DISCORD BOT",
    discordBotDesc: "Bisooo Bot is a versatile assistant bot developed for the Discord platform. It provides users with game tracking, entertainment content, and information services, offering both functionality and an interactive experience.",
    kitapYonetim: "Library Management System",
    library: "This project is a library management system where users can add, search, filter, and list books. Book data is stored in JSON format, and users can quickly search and filter by criteria such as year or genre.",
    details: "Details"
  },
  de: {
    home: "Startseite",
    projects: "Projekte",
    about: "Über mich",
    contact: "Kontakt",
    footer: "© 2025 HM. Alle Rechte vorbehalten.",
    h2: "Meine Projekte",
    discordBot: "DISCORD BOT",
    discordBotDesc: "Bisooo Bot ist ein vielseitiger Assistenten-Bot, der für die Discord-Plattform entwickelt wurde. Er bietet den Nutzern Spielverfolgung, Unterhaltung und Informationsdienste und bietet sowohl Funktionalität als auch Interaktivität.",
    kitapYonetim: "Büchermanagementsystem",
    library: "Dieses Projekt ist ein Büchermanagementsystem, in dem Benutzer Bücher hinzufügen, suchen, filtern und auflisten können. Buchdaten werden im JSON-Format gespeichert und können nach Jahr oder Genre gefiltert werden.",
    details: "Details"
  },
  ar: {
    siteTitle: "مذكرة هشام",
    home: "الرئيسية",
    projects: "المشاريع",
    about: "عنّي",
    contact: "تواصل",
    footer: "© 2025 HM. جميع الحقوق محفوظة.",
    h2: "مشاريعي",
    discordBot: "بوت للديسكورد",
    discordBotDesc: "بوت بيسو هو بوت مساعد متعدد الاستخدامات تم تطويره لمنصة الديسكورد. يقدم للمستخدمين تتبع الألعاب والمحتوى الترفيهي وخدمات المعلومات، مما يوفر تجربة تفاعلية ووظيفية.",
    kitapYonetim: "نظام إدارة الكتب",
    library: "هذا المشروع هو نظام لإدارة الكتب يمكن للمستخدمين من خلاله إضافة الكتب والبحث عنها وتصفيتها. يتم تخزين معلومات الكتب بصيغة JSON ويمكن البحث حسب السنة أو النوع.",
    details: "التفاصيل"
  }
};

function setLanguage(language) {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (translations[language] && translations[language][key]) {
      element.innerText = translations[language][key];
    }
  });
}

// Language switcher
document.querySelectorAll('[data-lang]').forEach((item) => {
  item.addEventListener('click', (e) => {
    const language = e.target.getAttribute('data-lang');
    setLanguage(language);
    document.getElementById("dropdownBtn").innerText = e.target.innerText;
  });
});

// Default language
setLanguage('tr');
