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
