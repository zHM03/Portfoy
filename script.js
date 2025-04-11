document.addEventListener("DOMContentLoaded", () => {
  // Sayfa fade-in efekti
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 1;
  }, 100);

  // Sadece mobilde yazı aşağı kayınca göster
  if (window.innerWidth <= 768) {
    const lines = document.querySelectorAll('.hero .line'); // 'line' sınıfındaki tüm öğeleri seçiyoruz

    const revealOnScroll = () => {
      lines.forEach((line, index) => {
        const rect = line.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          line.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // İlk yüklemede de kontrol et
  }

  // Menü toggle
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Proje kutularına tıklama animasyonu
  const projects = document.querySelectorAll(".project");

  projects.forEach(project => {
    project.addEventListener("click", () => {
      project.classList.add("clicked");
      setTimeout(() => project.classList.remove("clicked"), 300);
    });
  });
});