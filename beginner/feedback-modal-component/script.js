"use strict";

// Elements
const elModal = document.getElementById("modal");
const elScores = document.getElementsByName("modal__score");
const elScore = document.getElementById("score");
const elMessage = document.getElementById("message");

// Buttons
const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const btnCancel = document.getElementById("btn-cancel");
const btnSubmit = document.getElementById("btn-submit");

const closeModal = () => {
  elModal.classList.add("hide");
};

const openModal = () => {
  elModal.classList.contains("hide")
    ? elModal.classList.remove("hide")
    : elModal.classList.add("active");
};

const showMessage = () => {
  elMessage.classList.add("active");
};

const selectRating = (e) => {
  e.preventDefault();

  elScores.forEach((score) => {
    if (score.checked) {
      elScore.textContent = score.value;
      closeModal();
      showMessage();
    }
  });
};

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
btnCancel.addEventListener("click", closeModal);
elModal.addEventListener("submit", selectRating);
