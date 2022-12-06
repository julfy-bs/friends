const swiperOptions = {
  default: {
    pagination: {
      el: '',
      type: 'bullets',
      clickable: true,
    },
    navigation: {},
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

/* Форма Поддержать Друзей */
const buttonType = document.querySelector('.support-friends__buttons__type');
const buttonsType = buttonType.querySelectorAll('.support-friends__button');
const buttonSum = document.querySelector('.support-friends__buttons__sum');
const buttonsSum = buttonSum.querySelectorAll('.support-friends__button');

function choiceButton(button) {
  button.classList.add('support-friends__button__active');
}

function changeButton(button) {
  button.classList.remove('support-friends__button__active');
}

/* Меняется кнопка типа */
buttonType.addEventListener('click', function(e){
  for (let i = 0; i < buttonsType.length; i++) {
   changeButton(buttonsType[i]);
  }
  choiceButton(e.target);
})


/* Меняется кнопка суммы */
buttonSum.addEventListener('click', function(e){
  for (let i = 0; i < buttonsSum.length; i++) {
   changeButton(buttonsSum[i]);
  }
  choiceButton(e.target);
})
