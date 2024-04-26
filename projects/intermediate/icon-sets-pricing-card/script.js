"use strict";

const listPricingPlan = document.querySelector(".pricing__plan");
const itemsPricingPlan = document.querySelectorAll(".pricing__item");
const contentsPricingPlan = document.querySelectorAll(".pricing__body");

const showPlan = (e) => {
  const clicked = e.target.closest(".pricing__item");

  if (!clicked) return;

  // Remove active classes
  itemsPricingPlan.forEach((item) => item.classList.remove("active"));
  contentsPricingPlan.forEach((content) => content.classList.remove("active"));

  clicked.classList.add("active");

  document
    .querySelector(`.pricing__body--${clicked.dataset.plan}`)
    .classList.add("active");
};

listPricingPlan.addEventListener("click", showPlan);
