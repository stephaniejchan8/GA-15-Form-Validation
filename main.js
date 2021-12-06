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

// Prevent form being submitted to back end when user submits (as we are only working in front end)
document.querySelector('#application-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Run function to get user input and validate
  getInput();
});

let validation;
const errors = document.createElement('ul');
errors.id = 'errors';
const validationArray = [];


function getInput() {
  // Obtain user input 
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;


  // Clean data
  const firstNameClean = firstName.trim();
  console.log(firstNameClean);
  console.log(firstNameClean.length);
  // Validate user input
  validateInput();

  function validateInput() {
    // Check if first name is at least 2 characters
    if (firstNameClean.length < 3) {
      validation = document.createElement('li');
      validation.textContent = 'First name must be at least 2 characters.';
      validationArray.push(validation);
      console.log(validationArray[0]);
    }
    // Check if last name is at least 2 characters
    if (lastName.length < 3) {
      validation = document.createElement('li');
      validation.textContent = 'Last name must be at least 2 characters.';
      validationArray.push(validation);
    }
  }
}