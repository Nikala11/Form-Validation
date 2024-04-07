// First Name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

// Last name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");

// Phone
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");

// Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

// Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

// Verify Password
let verifyPasswordInput = document.getElementById("verify-password");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyVerifyPasswordError = document.getElementById("empty-verify-password");

// Submit
let submitButton = document.getElementById("submit-button");

// Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");

// Text verification (if input contains only text)
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{3,}$/;
  return regex.test(text);
};

// Email verification
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};

// Phone number verification
const phoneVerify = (number) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(number);
};

// Password Verification
const passwordVerify = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",/?]).{8,}$/;
  return regex.test(password) && password.length >= 8;
};

// For empty input - accepts(input, empty error for that input and other errors)
const emptyUpdate = (inputReference, emptyErrorReference, otherErrorReference) => {
  if (!inputReference.value) {
    // Input is null/empty
    emptyErrorReference.classList.add("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    // Input has some content
    emptyErrorReference.classList.add("hide");
  }
};

// For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};

// For no errors
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};

// First name
firstNameInput.addEventListener("input", () => {
  if (textVerify(firstNameInput.value)) {
    // If verification returns true
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    // For false
    errorUpdate(firstNameInput, firstNameError);
    // Empty checker
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
  }
});

// Last name
lastNameInput.addEventListener("input", () => {
  if (textVerify(lastNameInput.value)) {
    // If verification returns true
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
  } else {
    // For false
    errorUpdate(lastNameInput, lastNameError);
    // Empty checker
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
  }
});

// Phone
phoneInput.addEventListener("input", () => {
  if (phoneVerify(phoneInput.value)) {
    // If verification returns true
    phoneError.classList.add("hide");
    validInput(phoneInput);
  } else {
    // For false
    errorUpdate(phoneInput, phoneError);
    // Empty checker
    emptyUpdate(phoneInput, emptyPhoneError, phoneError);
  }
});

// Email
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    // If verification returns true
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    // For false
    errorUpdate(emailInput, emailError);
    // Empty checker
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});

// Password
passwordInput.addEventListener("input", () => {
  if (passwordVerify(passwordInput.value)) {
    // If verification is true
    passwordError.classList.add("hide");
    validInput(passwordInput);
  } else {
    // For false
    errorUpdate(passwordInput, passwordError);
    // Empty checker
    emptyUpdate(passwordInput, emptyPasswordError, passwordError);
  }
});

// Verify password
verifyPasswordInput.addEventListener("input", () => {
  if (verifyPasswordInput.value === passwordInput.value) {
    // If verification is true
    verifyPasswordError.classList.add("hide");
    validInput(verifyPasswordInput);
  } else {
    // For false
    errorUpdate(verifyPasswordInput, verifyPasswordError);
    // Empty checker
    emptyUpdate(passwordInput, emptyVerifyPasswordError, verifyPasswordError);
  }
});

// Submit button
submitButton.addEventListener("click", () => {
  if (validClasses.length == 6 && invalidClasses.length == 0) {
    // If all fields are filled in correctly
    alert("Success");
  } else {
    // If there's an incorrect field
    alert("Error");
  }
});
