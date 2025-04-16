document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth <= 600;  // Ekran genişliği 600px ve altı ise mobil kabul et
  const animatedText = document.querySelector(".animated-text");
  const arrow = document.querySelector(".arrow");
  const lines = document.querySelectorAll(".line");

  let isVisible = false;
  let lastScrollY = window.scrollY;

  // Sayfa yüklendiğinde animasyonu gizle
  animatedText.style.display = "none"; // Başlangıçta animasyonu gizle

  // Animasyonu göstermek için fonksiyon
  function showAnimatedText() {
    if (!isVisible) {
      animatedText.style.display = "block"; // Göster
      setTimeout(() => {
        animatedText.classList.add("visible");
        lines.forEach((line, i) => {
          setTimeout(() => line.classList.add("visible"), i * 200);
        });
      }, 20);
      isVisible = true;
    }
  }

  // Animasyonu gizlemek için fonksiyon
  function hideAnimatedText() {
    if (isVisible) {
      animatedText.classList.remove("visible");
      lines.forEach(line => line.classList.remove("visible"));
      setTimeout(() => {
        animatedText.style.display = "none"; // Animasyonu gizle
      }, 600);
      isVisible = false;
    }
  }

  // Eğer mobil cihaz ise scroll hareketini dinle
  if (isMobile) {
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        showAnimatedText(); // Aşağı kaydırınca animasyonu göster
      } else if (currentScrollY < lastScrollY) {
        hideAnimatedText(); // Yukarı kaydırınca animasyonu gizle
      }

      lastScrollY = currentScrollY;
    });
  }

  // Ok simgesine tıklanınca animasyonu hemen göster ve sayfayı hızlıca kaydır
  arrow.addEventListener("click", () => {
    showAnimatedText();  // Animasyonu hemen göster
    window.scrollTo({
      top: animatedText.offsetTop - 20,  // Animasyonun olduğu yere kaydır
      behavior: "smooth"  // Kaydırmayı yumuşak yap
    });
  });
});
