"use strict";

const btnControl = document.querySelector(".btn--control");
const btnIndicator = document.querySelector(".btn__indicator");

const slideIndicator = () => {
  btnIndicator.classList.toggle("active");
};

btnControl.addEventListener("click", slideIndicator);
