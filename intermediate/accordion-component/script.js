"use strict";

const faq = document.querySelector(".faq__list");
const questions = document.querySelectorAll(".faq__item");

const showAnswer = (e) => {
  const clicked = e.target.closest(".faq__item");
  questions.forEach((question) => question.classList.remove("active"));
  clicked.classList.toggle("active");
};

faq.addEventListener("click", showAnswer);
