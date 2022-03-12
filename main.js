`use strict`;

// Make navbar transparent when scroll is on the top
const navBar = document.querySelector(`#navbar`);
const navBarHeight = navbar.getBoundingClientRect().height;

document.addEventListener(`scroll`, function () {
  if (window.scrollY > navBarHeight) {
    navBar.classList.add(`navbar--dark`);
  } else {
    navBar.classList.remove(`navbar--dark`);
  }
});

// Handle scrolling when tapping on the navbar menu
const scrolling = function (selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: `smooth` });
};

const navbarMenu = document.querySelector(`.navbar__menu`);
navbarMenu.addEventListener(`click`, function (event) {
  const target = event.target;
  // console.log(target);
  const link = target.dataset.link;
  // console.log(link);
  if (link === undefined) {
    return;
  }
  scrolling(link);
});

// transparent home smooth
const home = document.querySelector(`.home__container`);
const homeHeight = home.getBoundingClientRect().height;

const controlOpacity = function () {
  console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = `${1 - window.scrollY / homeHeight}`;
  return 1 - window.scrollY / homeHeight;
};

document.addEventListener(`scroll`, controlOpacity);

// Show arrow button when scrolling down
const arrowUp = document.querySelector(`.arrow-up`);
document.addEventListener(`scroll`, function () {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add(`visible`);
  } else {
    arrowUp.classList.remove(`visible`);
  }
});

// Click on the "arrow up" button
arrowUp.addEventListener(`click`, function () {
  scrolling(`#home`);
});

// Projects
const workBtnContainer = document.querySelector(`.work__categories`);
const projectContainer = document.querySelector(`.work__projects`);
const projects = document.querySelectorAll(`.project`);
console.log(projects);

workBtnContainer.addEventListener(`click`, function (e) {
  const filter = e.target.dataset.filter;
  console.log(filter);
});

document.querySelectorAll(`.disabled`).addEventListener(`click`, function () {
  alert(`Comming Soon!`);
});
