// popup форма успешно отправлена
const popupForm = document.querySelector('.popup_role_form');
const popupFormCloseButton = popupForm.querySelector('.popup__close');
const form = document.querySelector('.connection__form');
const formName = form.querySelector("[name='name']");
const formEmail = form.querySelector("[name='email']");
const formTextarea = form.querySelector("[name='main-text']");
const formCheckbox = form.querySelector("[name='approval']");

const closePopup = (popup) => {
  popup.classList.remove('popup_active');
};

const openPopup = (popup) => {
  popup.classList.add('popup_active');
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formName.value = '';
  formEmail.value = '';
  formTextarea.value = '';
  formCheckbox.checked = false;
  openPopup(popupForm);
});

popupForm.addEventListener('click', (e) => {
  if (e.target === popupForm || e.target === popupFormCloseButton) closePopup(popupForm);
});

// burger-menu
const hamburgerMenu = document.querySelector('.hamburger_role_menu');
const popupBurger = document.querySelector('.popup_role_burger');
const popupBurgerCloseButton = popupBurger.querySelector('.popup__close');

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
  const condition = dropMenu.classList.contains('drop-menu_active') && hamburgerDrop.classList.contains('hamburger_active');
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
