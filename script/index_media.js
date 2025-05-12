document.addEventListener("DOMContentLoaded", () => {
  // Mobilde scroll ile .line yazılarını göster / en üste çıkınca gizle
  if (window.innerWidth <= 768) {
    const lines = document.querySelectorAll('.line');

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      lines.forEach((line) => {
        const rect = line.getBoundingClientRect();

        if (scrollTop > 20 && rect.top < window.innerHeight - 100) {
          line.classList.add('visible');
        } else if (scrollTop <= 20) {
          line.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    lines.forEach((line) => {
      line.classList.remove('visible');
    });

    // Mobilde .arrow div'ine tıklanınca alta kaydır
    const arrow = document.querySelector('.arrow');
    if (arrow) {
      arrow.addEventListener('click', () => {
        window.scrollBy({ top: window.innerHeight / 1, behavior: 'smooth'
        });
      });
    }
  }

  const animateHeroText = () => {
    const heroText = document.querySelector('.hero .animated-text');
    if (heroText) {
      heroText.classList.add('visible');
    }
  };
  setTimeout(animateHeroText, 1000);
});
