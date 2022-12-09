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
  partners: {
    breakpoints: {
      300: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 57,
      },
    },
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
const formSupportFriends = document.querySelector('.support-friends__form');
const buttonType = formSupportFriends.querySelector('.support-friends__buttons__type');
const buttonsType = buttonType.querySelectorAll('.support-friends__button');
const buttonSum = formSupportFriends.querySelector('.support-friends__buttons__sum');
const buttonsSum = buttonSum.querySelectorAll('.support-friends__button');

function choiceButton(button) {
  button.classList.add('support-friends__button__active');
}

function changeButton(button) {
  button.classList.remove('support-friends__button__active');
}

function createListeners(arr) {
  arr.forEach(function (item) {
    item.addEventListener('click', function () {
      arr.forEach(function (btn) {
        changeButton(btn);
      });
      choiceButton(item);
    });
  });
}

createListeners(buttonsType);
createListeners(buttonsSum);
