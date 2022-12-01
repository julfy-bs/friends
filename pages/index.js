function initSwiper(element) {
  const swiperElement = element.querySelector('.swiper');
  // eslint-disable-next-line no-undef
  const swiper = new Swiper(swiperElement);
  return swiper;
}

const carouselElements = document.querySelectorAll('[data-carousel]');
carouselElements.forEach(initSwiper);
