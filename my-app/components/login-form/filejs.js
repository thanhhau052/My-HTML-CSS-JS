const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const form = document.querySelector("form");

function showError(input, message) {
  input.value = input.value.trim();
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}
function showSuccess(input) {
  input.value = input.value.trim();
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      showError(input, "Not empty");
    } else {
      showSuccess(input);
    }
    return isEmptyError;
  });
}

function checkEmail(input) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();

  let isEmailError = !regexEmail.test(input.value);
  if (isEmailError) {
    showError(input, "Email Invalid");
  } else {
    showSuccess(input);
  }
  return isEmailError;
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Min characters must be less than ${min}`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Max characters must be greater than ${max}`);
    return true;
  }
  showSuccess(input);
  return false;
}
function checkMatchPasswordError(passwordInput, cfPasswordInput) {
  if (passwordInput.value !== cfPasswordInput.value) {
    showError(cfPasswordInput, "Password does not match");
    return false;
  }
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault; // stop submit event
  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isEmailError = checkEmail(email);
  let isUsernameLengthError = checkLengthError(username, 2, 10);
  let isPasswordLengthError = checkLengthError(password, 8);
  let isMatchError = checkMatchPasswordError(password, confirmPassword);
  if (
    isEmailError ||
    isUsernameLengthError ||
    isPasswordLengthError ||
    isMatchError
  ) {
    // do nothing
  } else {
    // logic, call API
  }
});
