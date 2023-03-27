const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[index].classList.add('active');
  
  if (index === 0) {
    prevButton.classList.add('hide');
  } else {
    prevButton.classList.remove('hide');
  }
  
  if (index === slides.length - 1) {
    nextButton.classList.add('hide');
  } else {
    nextButton.classList.remove('hide');
  }
}

prevButton.addEventListener('click', () => {
  currentIndex--;
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  showSlide(currentIndex);
});

showSlide(currentIndex);
