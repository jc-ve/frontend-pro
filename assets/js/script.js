"use strict";
// Selectors
const containerProject = document.querySelector(".projects-container");
const year = document.querySelector(".year");

const body = document.querySelector("body");
const btnSwitch = document.querySelector(".btn--mode");
const btnScroll = document.querySelector(".btn--scroll");
const iconBtn = document.querySelector(".btn-icon");

// Setting dark mode
const switchBtnIcon = function () {
  iconBtn.getAttribute("name") === "moon"
    ? iconBtn.setAttribute("name", "sunny")
    : iconBtn.setAttribute("name", "moon");
};

const darkMode = function () {
  body.classList.toggle("dark-mode");
  btnSwitch.classList.toggle("btn--light");
  switchBtnIcon();
};

btnSwitch.addEventListener("click", darkMode);

// Scroll to top
const hideBtnScroll = function () {
  btnScroll.style.display = "none";
  btnScroll.style.visibility = "hidden";
  btnScroll.style.opacity = 0;
};

const showBtnScroll = function () {
  btnScroll.style.display = "flex";
  btnScroll.style.visibility = "visible";
  btnScroll.style.opacity = 1;
};

const watchScroll = function () {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? showBtnScroll()
    : hideBtnScroll();
};

const scrollToTop = function () {
  body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

window.addEventListener("scroll", watchScroll);
btnScroll.addEventListener("click", scrollToTop);

// Display Projects
const getProject = () => {
  fetch("https://cdn.jsdelivr.net/gh/jc-ve/projects-data@latest/codewell.json")
    .then((res) => res.json())
    .then((data) => {
      displayProjects(data);
    })
    .catch((err) => {
      containerProject.innerHTML = `<p>No data retrieved. ${err}</p>`;
    });
};

getProject();

const displayProjects = (projects) => {
  projects.forEach(({ title, projLink, codeLink, imgLink, skills }) => {
    let skillsContainer = [];

    skills.forEach((skill) => {
      skillsContainer.push(
        `<span class="card__skill card__skill--${skill.toLowerCase()}">${skill}</span>`
      );
    });

    const html = `
  <div class="card">
    <img
      src="${imgLink}"
      alt="${title} preview image"
      class="card__img"
      loading="lazy"
    />

    <div class="card__body">
      <div class="card__skills">
        ${skillsContainer.join("")}
      </div>
      <div class="card__text">
        <a href="${projLink}" target="_blank" class="card__title">${title}</a>
      </div>
      <div class="card__links">
        <a href="${projLink}" target="_blank" class="btn btn--full">View Project</a>
        <a href="${codeLink}" target="_blank" class="btn btn--icon" aria-label="Link for code">
          <ion-icon name="code-slash-outline"></ion-icon>
        </a>
      </div>
    </div>
  </div>
    `;
    containerProject.insertAdjacentHTML("beforeend", html);
  });
};
displayProjects();
// Setting year
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
