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
const buttonType = formSupportFriends.querySelector('.support-friends__buttons_choice_option');
const buttonsType = buttonType.querySelectorAll('.support-friends__button');
const buttonSum = formSupportFriends.querySelector('.support-friends__buttons_choice_sum');
const buttonsSum = buttonSum.querySelectorAll('.support-friends__button');

function choiceButton(button) {
  button.classList.add('support-friends__button_active');
}

function changeButton(button) {
  button.classList.remove('support-friends__button_active');
}

function createListeners(arr) {
  arr.forEach((item) => {
    item.addEventListener('click', () => {
      arr.forEach((btn) => {
        changeButton(btn);
      });
      choiceButton(item);
    });
  });
}

createListeners(buttonsType);
createListeners(buttonsSum);

// header
const hamburgerMenu = document.querySelector('.hamburger_role_menu');
const popupBurger = document.querySelector('.popup_role_burger');
const popupBurgerCloseButton = popupBurger.querySelector('.popup__close');

const closePopup = (popup) => {
  popup.classList.remove('popup_active');
};

const openPopup = (popup) => {
  popup.classList.add('popup_active');
};

hamburgerMenu.addEventListener('click', () => {
  openPopup(popupBurger);
});

popupBurgerCloseButton.addEventListener('click', () => {
  closePopup(popupBurger);
});

// drop-menu
const hamburgerDrop = document.querySelector('.hamburger_role_drop-menu');
const dropMenu = document.querySelector('.drop-menu');

const toggleDropMenu = () => {
  const condition =
    dropMenu.classList.contains('drop-menu_active') &&
    hamburgerDrop.classList.contains('hamburger_active');
  if (condition) {
    dropMenu.classList.remove('drop-menu_active');
    hamburgerDrop.classList.remove('hamburger_active');
  } else {
    dropMenu.classList.add('drop-menu_active');
    hamburgerDrop.classList.add('hamburger_active');
  }
};

hamburgerDrop.addEventListener('click', () => {
  toggleDropMenu();
});
