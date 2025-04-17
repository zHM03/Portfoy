document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth <= 600;
  const animatedText = document.querySelector(".animated-text");
  const arrow = document.querySelector(".arrow");
  const lines = document.querySelectorAll(".line");

  let isVisible = false;
  let lastScrollY = window.scrollY;

  animatedText.style.display = "none";

  function showAnimatedText() {
    if (!isVisible) {
      animatedText.style.display = "block";
      setTimeout(() => {
        animatedText.classList.add("visible");
        lines.forEach((line, i) => {
          setTimeout(() => line.classList.add("visible"), i * 200);
        });
      }, 10);
      isVisible = true;
    }
  }

  function hideAnimatedText() {
    if (isVisible) {
      animatedText.classList.remove("visible");
      lines.forEach(line => line.classList.remove("visible"));
      setTimeout(() => {
        animatedText.style.display = "none";
      }, 600);
      isVisible = false;
    }
  }

  if (isMobile) {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        showAnimatedText();
      } else if (currentScrollY < lastScrollY) {
        hideAnimatedText();
      }

      lastScrollY = currentScrollY;
    });
  }

  // Gelişmiş: Scroll bitince çalıştıran fonksiyon
  function onScrollEnd(callback, timeout = 150) {
    let isScrolling;
    window.addEventListener("scroll", function () {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        callback();
      }, timeout);
    }, { passive: true });
  }

  arrow.addEventListener("click", () => {
    // Scroll başlasın
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });

    // Scroll bitince çalışacak fonksiyonu tanımla
    onScrollEnd(() => {
      showAnimatedText();
    });
  });
});