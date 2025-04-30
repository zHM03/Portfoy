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
      details: "Details"
    },
    ar: {
      siteTitle: "مذكرة هشام",
      home: "الرئيسية",
      projects: "المشاريع",
      about: "عنّي",
      contact: "اتصل",
      footer: "© 2025 HM. جميع الحقوق محفوظة.",
      h2: "مشاريعي",
      discordBot: "بوت للديسكورد",
      discordBotDesc: "بوت بيسو هو بوت مساعد متعدد الاستخدامات تم تطويره لمنصة الديسكورد. يقدم للمستخدمين تتبع الألعاب والمحتوى الترفيهي وخدمات المعلومات، مما يوفر تجربة تفاعلية ووظيفية.",
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
  