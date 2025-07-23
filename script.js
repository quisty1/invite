// Появление элементов при прокрутке
function revealOnScroll() {
  const fadeIns = document.querySelectorAll('.fade-in');
  const slideIns = document.querySelectorAll('.slide-in');

  [...fadeIns, ...slideIns].forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top <= window.innerHeight - 100;

    if (inView) {
      el.style.animationDelay = '0s';
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
