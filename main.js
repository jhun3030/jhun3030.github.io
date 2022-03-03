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
const navbarMenu = document.querySelector(`.navbar__menu`);
navbarMenu.addEventListener(`click`, function (event) {
  const target = event.target;
  // console.log(target);
  const link = target.dataset.link;
  // console.log(link);
  if (link === undefined) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: `smooth` });
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

// arrow button
const arrow = document.querySelector(`.arrow_btn`);
arrow.addEventListener('click', function () {
  const scrollToHome = document.querySelector(`#home`);
  scrollToHome.scrollIntoView({ behavior: `smooth` });
});
