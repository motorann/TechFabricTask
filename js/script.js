'use script';

/********************************
 * Global Parameters
 *****************************/
const formElement = document.querySelector('#form-account');
const inputs = Array.from(formElement.querySelectorAll('input'));

/********************************
 * Check if Input is Empty
 *****************************/
const validateFillInput = function (input) {
  let isValid;
  const error = input.parentElement.querySelector('.form-text__error');

  /*  validation on required attribute and empty input  */
  if (input.hasAttribute('required') && input.value.trim() === '') {
    error.textContent = 'This field is required';
    isValid = false;
  } else {
    isValid = true;
  }
  /* Sending boolean value */
  return isValid;
};

/********************************
 * Check if Email is Normal
 *****************************/
const validateEmail = function (input) {
  let isValid;
  const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const error = input.parentElement.querySelector('.form-text__error');

  /* checking only input[type='email']  */
  if (
    input.getAttribute('type') === 'email' &&
    !input.value.match(validRegex)
  ) {
    error.textContent = 'Invalid email address';
    isValid = false;
  } else {
    isValid = true;
  }
  /* Sending boolean value */
  return isValid;
};

/********************************
 * MAIN CODE
 *****************************/

// apply custom validate and remove default parameters
formElement.setAttribute('novalidate', '');

formElement.addEventListener('submit', function (e) {
  e.preventDefault();

  let isFormValid = true;

  /* if we'll have many inputs with data */
  inputs.forEach(function (input) {
    /* isInputValid is boolean */
    let isInputValid;
    isInputValid = validateEmail(input);
    isInputValid = isInputValid && validateFillInput(input);

    /* if the current input is completely valid, remove an error message */
    if (isInputValid) {
      input.parentElement.querySelector('.form-text__error').textContent = '';
    }
    /* form is valid when both inputs are valid */
    isFormValid = isFormValid && isInputValid;
  });

  /*  if the form is valid,
      put a user name to local storage and
      redirect to game webpage */
  if (isFormValid) {
    localStorage.setItem('name', formElement.querySelector('#name').value);
    window.location.href = 'game.html';
  }
});
