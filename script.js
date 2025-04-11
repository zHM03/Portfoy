// Sayfa fade-in efekti
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 1;
  }, 100);
});

// Proje kutusuna tıklanınca animasyon (bounce efekti gibi)
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
  project.addEventListener("click", () => {
    project.classList.add("clicked");
    setTimeout(() => project.classList.remove("clicked"), 300);
  });
});