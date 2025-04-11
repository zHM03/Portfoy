document.addEventListener("DOMContentLoaded", () => {
  // Sayfa fade-in efekti
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 1;
  }, 100);

  // Sadece mobilde scroll olursa .line yazılarını göster
  if (window.innerWidth <= 768) {
    const lines = document.querySelectorAll('.line');

    const revealOnScroll = () => {
      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          line.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    // İlk yüklemede kontrol etmiyoruz -> sadece scroll sonrası görünür
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

  // Sayfa açılışında hero yazısını göster (mobilde bu animasyon istenmiyorsa silebilirsin)
  const animateHeroText = () => {
    const heroText = document.querySelector('.hero .animated-text');
    if (heroText) {
      heroText.classList.add('visible');
    }
  };

  setTimeout(animateHeroText, 1000);
});