document.addEventListener("DOMContentLoaded", () => {
  // Sayfa fade-in efekti
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 1;
  }, 100);

  // Sadece mobilde yazı aşağı kayınca göster
  if (window.innerWidth <= 768) {
    const text = document.querySelector('.hero .text');

    const revealOnScroll = () => {
      const rect = text.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        text.classList.add('visible');
        window.removeEventListener('scroll', revealOnScroll);
      }
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
