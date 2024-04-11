"use strict";

const elModal = document.getElementById("modal");
const elScores = document.getElementById("modal-scores");
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

const selectRating = () => {};

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
btnCancel.addEventListener("click", closeModal);
