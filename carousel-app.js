const slides = document.querySelectorAll(".carousel-item");
const totalSlide = slides.length;
let index = 0;
document.querySelector(".prev-btn").addEventListener("click", movetoPrevSlide);
document.querySelector(".next-btn").addEventListener("click", movetoNextSlide);
function hideAll() {
  for (let slide of slides) {
    slide.classList.remove('visible')
  }
}
function movetoPrevSlide() {
  hideAll();
  if (index === 0) {
    index = totalSlide - 1;
  }else{
    index--;
  }
  slides[index].classList.add("visible");
}
function movetoNextSlide() {
    hideAll();
  if (index === totalSlide - 1) {
    index = 0;
  } else {
    index++;
  }
  slides[index].classList.add("visible");
}
