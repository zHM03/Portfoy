document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth <= 600;  // Ekran genişliği 600px ve altı ise mobil kabul et
  const animatedText = document.querySelector(".animated-text");
  const arrow = document.querySelector(".arrow");
  const lines = document.querySelectorAll(".line");

  let isVisible = false;
  let lastScrollY = window.scrollY;

  // Sayfa yüklendiğinde animasyonu gizle
  animatedText.style.display = "none";

  // Animasyonu göstermek için fonksiyon
  function showAnimatedText(callback) {
    if (!isVisible) {
      animatedText.style.display = "block";
      setTimeout(() => {
        animatedText.classList.add("visible");
        lines.forEach((line, i) => {
          setTimeout(() => line.classList.add("visible"), i * 200);
        });
        if (typeof callback === "function") {
          setTimeout(callback, lines.length * 200 + 100);  // Animasyonlar bittikten sonra çağır
        }
      }, 20);
      isVisible = true;
    } else {
      if (typeof callback === "function") callback(); // Zaten görünüyorsa direkt kaydır
    }
  }

  // Animasyonu gizlemek için fonksiyon
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

  // Eğer mobil cihaz ise scroll hareketini dinle
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

  // Ok simgesine tıklanınca animasyonu göster ve sayfanın en altına kaydır
  arrow.addEventListener("click", () => {
    showAnimatedText(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });
  });
});