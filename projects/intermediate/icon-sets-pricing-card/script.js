"use strict";

const listPricingPlan = document.querySelector(".pricing__plan");
const itemsPricingPlan = document.querySelectorAll(".pricing__item");

const showPlan = (e) => {
  const clicked = e.target.closest(".pricing__item");
  itemsPricingPlan.forEach((item) => item.classList.remove("active"));
};

listPricingPlan.addEventListener("click", showPlan);
