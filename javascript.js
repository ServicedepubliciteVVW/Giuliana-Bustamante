let index = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === n);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length; // Cuando llega al final, vuelve a la primera imagen
  showSlide(index);
}

setInterval(nextSlide, 5000); // Cambia cada 5 segundos
