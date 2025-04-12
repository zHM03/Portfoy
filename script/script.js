document.addEventListener("DOMContentLoaded", () => {
  // Sayfa fade-in efekti
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 1;
  }, 100);

  // Mobilde scroll ile .line yazılarını göster / en üste çıkınca gizle
  if (window.innerWidth <= 768) {
    const lines = document.querySelectorAll('.line');

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();

        if (scrollTop > 20 && rect.top < window.innerHeight - 100) {
          line.classList.add('visible');
        } else if (scrollTop <= 20) {
          line.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    lines.forEach((line) => {
      line.classList.remove('visible');
    });
  }

  // Menü toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  // Proje kutularına tıklama animasyonu
  const projects = document.querySelectorAll(".project-card");

  projects.forEach(project => {
    project.addEventListener("click", () => {
      project.classList.add("clicked");
      setTimeout(() => project.classList.remove("clicked"), 300);
    });
  });

  // Hero yazısını göster (isteğe bağlı)
  const animateHeroText = () => {
    const heroText = document.querySelector('.hero .animated-text');
    if (heroText) {
      heroText.classList.add('visible');
    }
  };

  setTimeout(animateHeroText, 1000);

  // Varsayılan dili yükle
  switchLanguage("tr");

  // Dil menüsüne tıklanabilirlik ekle
  document.querySelectorAll("#dropdownContent a").forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = e.target.getAttribute("data-lang");
      switchLanguage(lang);
    });
  });
});

const translations = {
  tr: {
    siteTitle: "Hisham Portföy",
    home: "Anasayfa",
    projects: "Projeler",
    about: "Hakkımda",
    contact: "İletişim",
    greeting: "Ben Hisham",
    line1: "Yazılım geliştirme yolculuğunda aktif olarak ilerleyen bir geliştiriciyim.",
    line2: "HTML, CSS ve JavaScript ile web arayüzleri oluşturabiliyor; aynı zamanda Python dilinde ileri seviye bilgiye sahibim.",
    line3: "Masaüstü uygulamaları geliştirmenin yanı sıra veritabanı yönetimi konusunda da deneyimliyim.",
    line4: "Ayrıca botlar geliştirerek topluluk yönetimini kolaylaştıran çözümler sundum.",
    line5: "Hem bireysel hem de ekip projelerinde yer aldım; öğrenmeye ve yeni teknolojilere adapte olmaya büyük önem veriyorum.",
    line6: "Hedefim, kullanıcı dostu ve işlevsel yazılımlar geliştirerek yazılım alanında kalıcı projelere imza atmak.",
    footer: "© 2025 HM. Tüm hakları saklıdır."
  },
  en: {
    siteTitle: "Hisham Portfolio",
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    greeting: "I'm Hisham",
    line1: "I'm an active developer on the path of software development.",
    line2: "I can build web interfaces with HTML, CSS, and JavaScript; and I have advanced knowledge of Python.",
    line3: "I develop desktop applications and have experience in database management.",
    line4: "I’ve also created bots to simplify community management.",
    line5: "I've been involved in both individual and team projects; I value learning and adapting to new technologies.",
    line6: "My goal is to develop user-friendly and functional software and leave a lasting impact in the tech world.",
    footer: "© 2025 HM. All rights reserved."
  },
  de: {
    siteTitle: "Hisham Portfolio",
    home: "Startseite",
    projects: "Projekte",
    about: "Über mich",
    contact: "Kontakt",
    greeting: "Ich bin Hisham",
    line1: "Ich bin ein aktiver Entwickler auf dem Weg der Softwareentwicklung.",
    line2: "Ich kann Web-Oberflächen mit HTML, CSS und JavaScript erstellen und habe fortgeschrittene Kenntnisse in Python.",
    line3: "Ich entwickle Desktop-Anwendungen und habe Erfahrung im Datenbankmanagement.",
    line4: "Ich habe auch Bots entwickelt, um die Community-Verwaltung zu erleichtern.",
    line5: "Ich war sowohl in Einzel- als auch in Teamprojekten tätig und lege großen Wert auf Lernen und Anpassung.",
    line6: "Mein Ziel ist es, benutzerfreundliche und funktionale Software zu entwickeln und einen bleibenden Eindruck in der Softwarewelt zu hinterlassen.",
    footer: "© 2025 HM. Alle Rechte vorbehalten."
  },
  ar: {
    siteTitle: "محفظة هشام",
    home: "الرئيسية",
    projects: "المشاريع",
    about: "من أنا",
    contact: "اتصل",
    greeting: "أنا هشام",
    line1: "أنا مطور أعمل بنشاط في رحلة تطوير البرمجيات.",
    line2: "أستطيع إنشاء واجهات ويب باستخدام إتش تي إم إل و سي إس إس و جافا سكريبت، وأمتلك معرفة متقدمة بلغة بايثون.",
    line3: "أطور تطبيقات سطح المكتب ولدي خبرة في إدارة قواعد البيانات.",
    line4: "قمت أيضًا بتطوير بوتات لتسهيل إدارة المجتمعات.",
    line5: "شاركت في مشاريع فردية وجماعية وأولي أهمية كبيرة للتعلم والتكيف مع التقنيات الجديدة.",
    line6: "هدفي هو تطوير برامج سهلة الاستخدام وعملية وترك بصمة دائمة في مجال البرمجيات.",
    footer: "© 2025 HM. جميع الحقوق محفوظة."
  }
};

const switchLanguage = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
};
