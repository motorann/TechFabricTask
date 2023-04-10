function validateForm(formSelector) {
  const formElement = document.querySelector(formSelector);
  const inputs = Array.from(formElement.querySelectorAll('input'));
  let validationByRequiredOption = {
    attribute: 'required',
    isValid: (input) => input.value.trim() !== '',
    errorMessage: 'This field is required*',
  };
  let validationEmailOption = {
    isEmail: (input) => input.getAttribute('type') === 'email',
    isValid: (input) => input.value.match('@'),
    errorMessage: 'Invalid email address*',
  };

  formElement.setAttribute('novalidate', '');

  formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    let isFormValid = true;

    /* this.querySelectorAll('.form-txt').forEach((formElement) => {
      const input = formElement.querySelector('input'); */
    inputs.forEach(function (input, index) {
      let isInputValid = true;

      if (
        input.hasAttribute(validationByRequiredOption.attribute) &&
        !validationByRequiredOption.isValid(input)
      ) {
        formElement.querySelectorAll('.error')[index].textContent =
          validationByRequiredOption.errorMessage;
        isInputValid = false;
        isFormValid = false;
      } else if (
        validationEmailOption.isEmail(input) &&
        !validationEmailOption.isValid(input)
      ) {
        formElement.querySelectorAll('.error')[index].textContent =
          validationEmailOption.errorMessage;
        isInputValid = false;
        isFormValid = false;
      }

      if (isInputValid) {
        formElement.querySelectorAll('.error')[index].textContent = '';
      }
    });

    if (isFormValid) {
      window.location.href = './game.html';
      /*       window.location.href = '/path'; */
    }
  });
}

validateForm('#form-account');
