const formDiv = document.querySelector('#formDiv');
const notifyBtn = document.querySelector('#notify_btn');
const inputField = document.querySelector('#emailField');
const invalidEmailMessage = document.querySelector('#invalid-email');

let isValid = true;
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

notifyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputField.value) {
    isValid = regex.test(inputField.value);
    if (!isValid) {
      formDiv.classList.remove('gap-y-4');
      formDiv.classList.add('gap-y-12');
      invalidEmailMessage.classList.remove('invisible');
      inputField.classList.add('border-fmSecondaryLightRed');
    }
  } else {
    formDiv.classList.remove('gap-y-4');
    invalidEmailMessage.classList.remove('invisible');
    inputField.classList.add('border-fmSecondaryLightRed');
    formDiv.classList.add('gap-y-12');
  }
});

inputField.addEventListener('input', () => {
  formDiv.classList.remove('gap-y-12');
  invalidEmailMessage.classList.add('invisible');
  inputField.classList.remove('border-fmSecondaryLightRed');
  formDiv.classList.add('gap-y-4');
});
