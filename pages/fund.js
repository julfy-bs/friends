const popupForm = document.querySelector('.popup-form');
const popupProfileCloseButton = popupForm.querySelector('.popup__close');
const form = document.querySelector('.connection__form');
const formName = form.querySelector('[name=\'name\']');
const formEmail = form.querySelector('[name=\'email\']');
const formTextarea = form.querySelector('[name=\'main-text\']');
const formCheckbox = form.querySelector('[name=\'approval\']');



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
  if (e.target === popupForm || e.target === popupProfileCloseButton) closePopup(popupForm);
});
