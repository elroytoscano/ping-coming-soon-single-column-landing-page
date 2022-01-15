const inputField = document.querySelector('#emailField');
const notifyBtn = document.querySelector('#notify_btn');
const invalidEmailMessage = document.querySelector('#invalid-email');

let isValid = true;
let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

notifyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputField.value) {
    isValid = regex.test(inputField.value);
    if (!isValid) {
      invalidEmailMessage.classList.remove('invisible');
      inputField.classList.add('border-fmSecondaryLightRed');
    }
  } else {
    invalidEmailMessage.classList.remove('invisible');
    inputField.classList.add('border-fmSecondaryLightRed');
  }
});

inputField.addEventListener('input', () => {
  invalidEmailMessage.classList.add('invisible');
  inputField.classList.remove('border-fmSecondaryLightRed');
});
