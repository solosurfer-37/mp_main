document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider-image');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  const imageCount = images.length;

  function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageCount - 1;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < imageCount - 1) ? currentIndex + 1 : 0;
    updateSlider();
  });
  function updateSlider() {
  const offset = -(currentIndex * (100 / imageCount));
  slider.style.transform = `translateX(${offset}%)`;
  }

});

















