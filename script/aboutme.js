const translations = {
  tr: {
    home: "Anasayfa",
    projects: "Projeler",
    about: "Hakkımda",
    contact: "İletişim",
    about_title: "Hakkımda",
    about_paragraph: `Merhaba! Ben Hisham, yazılım geliştirmeye tutkuyla bağlı bir geliştiriciyim. Kod yazmaya olan ilgim, küçük otomasyonlarla başladığım yolculuğun zamanla profesyonel bir tutkuya dönüşmesiyle pekişti. Bugün geldiğim noktada; hem kullanıcı odaklı web arayüzleri geliştiriyor hem de Python diliyle masaüstü uygulamalar ve bot çözümleri üretiyorum.

HTML, CSS ve JavaScript kullanarak modern, responsive web siteleri hazırlıyor; Python ile ise hem veri işleme hem de veritabanı tabanlı uygulamalar geliştiriyorum. Toplulukları kolaylaştıran, yönetimi destekleyen botlar geliştirerek yazılımın sadece bireysel değil, sosyal alanlara da katkı sağlayabileceğini deneyimledim.

Yalnız çalışmanın disiplini kadar ekip ruhunun da gücüne inanıyorum. Bu nedenle hem bireysel projelerde hem de ekip çalışmalarında yer almaktan keyif alıyorum. Yeni teknolojileri öğrenmek benim için sadece bir gereklilik değil, aynı zamanda motivasyon kaynağı.

Yazılım dünyasında iz bırakacak, sürdürülebilir ve kullanıcı dostu projeler geliştirmek en büyük hedefim. Eğer sen de teknolojiye olan ilgini paylaşmak ya da bir projede birlikte çalışmak istersen, iletişim kurmaktan memnuniyet duyarım!`,
    footer: "© 2025 HM. Tüm hakları saklıdır."
  },
  en: {
    home: "Home",
    projects: "Projects",
    about: "About Me",
    contact: "Contact",
    about_title: "About Me",
    about_paragraph: `Hello! I'm Hisham, a passionate software developer. My interest in coding began with small automations and eventually grew into a professional passion. Today, I develop user-focused web interfaces and create desktop applications and bots using Python.

I build modern, responsive websites with HTML, CSS, and JavaScript, and develop database-based applications and data processing tools in Python. By creating bots that support community management, I’ve experienced how software contributes not only individually but also socially.

I believe in both the discipline of working alone and the power of team spirit. That’s why I enjoy taking part in both individual and collaborative projects. Learning new technologies is not just a necessity for me — it's a source of motivation.

My biggest goal is to develop sustainable and user-friendly projects that leave a mark in the software world. If you also want to share your interest in technology or work on a project together, I’d be happy to connect!`,
    footer: "© 2025 HM. All rights reserved."
  },
  de: {
    home: "Startseite",
    projects: "Projekte",
    about: "Über mich",
    contact: "Kontakt",
    about_title: "Über mich",
    about_paragraph: `Hallo! Ich bin Hisham, ein leidenschaftlicher Softwareentwickler. Mein Interesse an der Programmierung begann mit kleinen Automatisierungen und entwickelte sich mit der Zeit zu einer professionellen Leidenschaft. Heute entwickle ich benutzerorientierte Weboberflächen sowie Desktop-Anwendungen und Bot-Lösungen mit Python.

Ich erstelle moderne, responsive Webseiten mit HTML, CSS und JavaScript und entwickle datenbankbasierte Anwendungen mit Python. Durch die Entwicklung von Bots, die Communitys unterstützen, habe ich erfahren, dass Software nicht nur individuell, sondern auch sozial einen Beitrag leisten kann.

Ich glaube sowohl an die Disziplin des Alleinarbeitens als auch an die Kraft des Teamgeists. Deshalb arbeite ich gerne sowohl an Einzelprojekten als auch im Team. Neue Technologien zu lernen ist für mich nicht nur notwendig, sondern auch eine Quelle der Motivation.

Mein größtes Ziel ist es, nachhaltige und benutzerfreundliche Projekte zu entwickeln, die in der Softwarewelt einen bleibenden Eindruck hinterlassen. Wenn du auch Interesse an Technologie hast oder gemeinsam an einem Projekt arbeiten möchtest, freue ich mich auf deine Nachricht!`,
    footer: "© 2025 HM. Alle Rechte vorbehalten."
  },
  ar: {
    home: "الرئيسية",
    projects: "المشاريع",
    about: "عنّي",
    contact: "تواصل",
    about_title: "عنّي",
    about_paragraph: `مرحبًا! أنا هشام، مطور برمجيات شغوف. بدأت اهتمامي بالبرمجة من خلال بعض الأتمتة الصغيرة، ثم تطور لاحقًا ليصبح شغفًا مهنيًا. اليوم، أطور واجهات ويب تركز على المستخدم، وأقوم بإنشاء تطبيقات سطح مكتب وحلول بوت باستخدام لغة بيثون.

أقوم بإنشاء مواقع ويب حديثة وسريعة الاستجابة باستخدام هت مل وسي سس وجافا سكربت، وأطور تطبيقات قائمة على قواعد البيانات باستخدام بيثون. من خلال إنشاء بوتات تسهل إدارة المجتمعات، اكتشفت أن البرمجة يمكن أن تساهم ليس فقط على المستوى الفردي بل الاجتماعي أيضًا.

أؤمن بانضباط العمل الفردي وقوة العمل الجماعي. لذلك، أستمتع بالمشاركة في المشاريع الفردية والجماعية على حد سواء. تعلم التقنيات الجديدة ليس مجرد ضرورة بالنسبة لي، بل مصدر إلهام.

هدفي الأكبر هو تطوير مشاريع مستدامة وسهلة الاستخدام تترك بصمة في عالم البرمجيات. إذا كنت مهتمًا أيضًا بالتكنولوجيا أو ترغب في العمل على مشروع مشترك، فسيسعدني التواصل معك!`,
    footer: "© 2025 HM. جميع الحقوق محفوظة."
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.getElementById("dropdownBtn").innerText = lang.toUpperCase();
}

document.querySelectorAll("[data-lang]").forEach(langEl => {
  langEl.addEventListener("click", () => {
    const lang = langEl.getAttribute("data-lang");
    setLanguage(lang);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.about-title').classList.add('visible');
  document.querySelector('.about-p').classList.add('visible');
});
document.addEventListener("DOMContentLoaded", () => {
  setLanguage("tr");
});