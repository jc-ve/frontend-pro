"use strict";

const form = document.querySelector(".form");
const inputEmail = document.querySelector(".form__input");
const inputCheckbox = document.querySelector(".checkbox__input");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const alert = Swal.mixin({
  confirmButtonColor: "#111827",
});

let isValid;

const formSubmit = (e) => {
  e.preventDefault();

  isValid =
    inputEmail.value === 0 ||
    (emailRegExp.test(inputEmail.value) && inputCheckbox.checked);

  !isValid
    ? alert.fire({
        text: "Make sure to enter a valid email and agree to our terms.",
        icon: "error",
      })
    : alert.fire({
        text: "Successfully signed up.",
        icon: "success",
      });
};

form.addEventListener("submit", formSubmit);
