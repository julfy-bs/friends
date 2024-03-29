const popupForm = document.querySelector('.popup_role_form');
const popupFormCloseButton = popupForm.querySelector('.popup__close');
const form = document.querySelector('.connection__form');
const formName = form.querySelector('[name="name"]');
const formEmail = form.querySelector('[name="email"]');
const formTextarea = form.querySelector('[name="main-text"]');
const formCheckbox = form.querySelector('[name="approval"]');

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

// donation
const formElement = document.querySelector('.donation-form');
const paymentMethodControls = formElement.querySelectorAll('[name="paymentMethod"]');
const bankCardElement = formElement.querySelector('.donation-form__bank-card');
const errorElement = formElement.querySelector('.donation-from__error');

function clearError() {
  errorElement.textContent = '';
  errorElement.setAttribute('hidden', 'true');
}

function validateForm(formData) {
  const paymentMethod = formData.get('paymentMethod');
  if (!paymentMethod) {
    errorElement.textContent = 'Выберите способ оплаты';
    errorElement.removeAttribute('hidden');
  }
}

function handleDonationForm(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  validateForm(data);
}

function showBankCard() {
  bankCardElement.removeAttribute('hidden');
}

function hideBankCard() {
  bankCardElement.setAttribute('hidden', 'true');
}

function handlePaymentMethod({ target }) {
  clearError();
  const { value: paymentMethod } = target;
  if (paymentMethod === 'visaMir') {
    showBankCard();
  } else {
    hideBankCard();
  }
}

function listenPaymentMethod(element) {
  element.addEventListener('input', handlePaymentMethod);
}

function initDonationForm(element) {
  element.addEventListener('submit', handleDonationForm);
  paymentMethodControls.forEach(listenPaymentMethod);
}

initDonationForm(formElement);

// Форма Подписки - сброс поля ввода - объявление
const subscForm = document.querySelector('.subscription__form');
const subscClearBtn = document.querySelector('.subscription__clear');
const subscrEmailInput = document.querySelector('.subscription__input');

// Форма Подписки - сброс поля ввода - реализация
function showClearBtn() {
  subscClearBtn.classList.add('subscription__clear_enabled');
}

function hideClearBtn() {
  subscClearBtn.classList.remove('subscription__clear_enabled');
}

function remainClearBtn() {
  if (subscrEmailInput.value === '') {
    hideClearBtn();
  }
}

function cleanInput() {
  subscrEmailInput.value = '';
  hideClearBtn();
}

subscForm.addEventListener('reset', cleanInput);
subscrEmailInput.addEventListener('focusin', showClearBtn);
subscrEmailInput.addEventListener('focusout', remainClearBtn);
