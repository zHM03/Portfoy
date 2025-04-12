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

        // Scroll aşağı doğru yapıldıkça yazılar görünür
        if (scrollTop > 20 && rect.top < window.innerHeight - 100) {
          line.classList.add('visible');
        } else if (scrollTop <= 20) {
          line.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Sayfa yüklendikten sonra, ilk başta tüm .line öğeleri gizlenir
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
});