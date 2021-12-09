// 1. Respond to the submit event on the form
// 2. Get the user input
// 3. Validate user input
//    Validations to add
//    - First and last name must be at least 2 characters
//    - Phone number must be valid length (10) and numbers only
//    - Course must be selected (you might want to have a look at `required` attribute of form inputs)
//    - Past experience should be at least 50 characters
// 4. When validation fails
//    - add `li` element with validation text to `ul#errors` element
//    - add `aria-invalid="true"` to the invalid fields

// Declare variable to store validation messages
let validationArray;

// Create ul (with id 'errors') to push validation messages to
const errors = document.createElement('ul');
errors.id = 'errors';

// Create JS variable of form DOM
const applicationForm = document.querySelector('#application-form');

// Submit form event listener
applicationForm.addEventListener('submit', function (e) {
  // Prevent form being submitted to back end when user submits (as we are only working in front end)
  e.preventDefault();

  // Empty validationArray of previous error messages
  validationArray = [];
  obtainInput('#firstName');
  obtainInput('#lastName');
  obtainInput('#phone');
  obtainInput('#course');
  obtainInput('#pastExperience');
  printError();
});

// Obtain user input and clean data
function obtainInput(id) {
  const input = document.querySelector(id);
  const inputValue = document.querySelector(id).value.trim();
  validateInput(inputValue, id, input);
}

// Validate user input
function validateInput(inputValue, string, element) {
  let message;
  // Check that first name input is at least 2 characters
  if (string === "#firstName" && inputValue.length < 3) {
    message = 'First name must be at least 2 characters.';
  } // Check that last name input is at least 2 characters
  else if (string === "#lastName" && inputValue.length < 3) {
    message = 'Last name must be at least 2 characters.';
  } // Check that phone number input is exactly 10 characters and contains numbers only
  else if (string === "#phone" && (inputValue.length !== 10 || (!+inputValue || !Number.isInteger(+inputValue)))) {
    message = "Phone number must be 10 number characters."
  } // Check that a valid course was selected
  else if (string === '#course' && inputValue === "Select One") {
    message = "Please select a valid course.";
  } // Check that past experience input is at least 50 characters
  else if (string === '#pastExperience' && inputValue.length <= 50) {
    message = "Past experience should be at least 50 characters.";
  } // If user input is invalid, create error message and set aria-invalid to true
  if (message !== undefined) {
    createError(message);
    element.setAttribute('aria-invalid', 'true');
  } // if user input is valid, set aria-invalid to false
  else {
    element.setAttribute('aria-invalid', 'false');
  }
}

// Create li with a specific validation message and push it into validationArray
const createError = (errorMessage) => {
  const validation = document.createElement('li');
  validation.textContent = errorMessage;
  validationArray.push(validation);
}

// Display error messages at top of form
const printError = () => {
  applicationForm.insertAdjacentElement('afterbegin', errors);
  // Remove all error messages from last submit
  while (errors.firstChild) {
    errors.removeChild(errors.firstChild);
  }
  for (let i = 0; i < validationArray.length; i++) {
    errors.appendChild(validationArray[i]);
  }
}
