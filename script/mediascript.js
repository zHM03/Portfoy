document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth <= 600;
  const animatedText = document.querySelector(".animated-text");
  const arrow = document.querySelector(".arrow");
  const lines = document.querySelectorAll(".line");

  let isVisible = false;

  if (isMobile) {
    animatedText.style.opacity = 0;
    animatedText.style.transition = "opacity 0.6s ease";

    function showAnimatedText() {
      if (!isVisible) {
        animatedText.style.opacity = 1;
        animatedText.classList.add("visible");
        lines.forEach((line, i) => {
          setTimeout(() => line.classList.add("visible"), i * 200);
        });
        isVisible = true;
      }
    }

    function hideAnimatedText() {
      if (isVisible) {
        animatedText.style.opacity = 0;
        animatedText.classList.remove("visible");
        lines.forEach(line => line.classList.remove("visible"));
        isVisible = false;
      }
    }

    function handleScroll() {
      const triggerPoint = window.innerHeight * 0.8;
      const elementTop = animatedText.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        showAnimatedText();
      } else {
        hideAnimatedText();
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Sayfa yüklendiğinde de kontrol et

    arrow.addEventListener("click", () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });
  }
});