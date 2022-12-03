function initSwiper(element) {
  const swiperElement = element.querySelector('.swiper');
  const nextEl = element.querySelector('.carousel__arrow_type_next');
  const prevEl = element.querySelector('.carousel__arrow_type_prev');
  const paginationEl = element.querySelector('.swiper-pagination');
  // eslint-disable-next-line no-undef
  const swiper = new Swiper(swiperElement, {
    pagination: {
      el: paginationEl,
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl,
      prevEl,
    },
    loop: true,
    spaceBetween: 30,
    // TODO: uncomment
    // autoplay: {
    //   delay: 15000,
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
  });
  return swiper;
}

const carouselElements = document.querySelectorAll('.carousel');
carouselElements.forEach(initSwiper);
