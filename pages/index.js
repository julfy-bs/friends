const swiperOptions = {
  default: {
    pagination: {
      el: '',
      type: 'bullets',
      clickable: true,
    },
    navigation: {},
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    autoHeight: true,
  },
};
const screenWidth = window.screen.width;
const carouselElements = document.querySelectorAll('.carousel');

if (screenWidth <= 425) {
  swiperOptions.blog = swiperOptions.default;
}

function getSwiperOptions(name) {
  return swiperOptions[name];
}

function initSwiper(element) {
  const swiperElement = element.querySelector('.swiper');
  const nextEl = element.querySelector('.carousel__arrow_type_next');
  const prevEl = element.querySelector('.carousel__arrow_type_prev');
  const paginationEl = element.querySelector('.swiper-pagination');
  const { carousel } = element.dataset;
  const options = getSwiperOptions(carousel);
  if (!options) {
    return null;
  }

  if (nextEl && prevEl) {
    options.navigation = {
      nextEl,
      prevEl,
    };
  }

  if (paginationEl) {
    options.pagination.el = paginationEl;
  }

  // eslint-disable-next-line no-undef
  const swiper = new Swiper(swiperElement, options);
  return swiper;
}

carouselElements.forEach(initSwiper);
