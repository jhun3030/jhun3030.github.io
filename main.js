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
  const link = target.dataset.link;
  if (link === undefined) {
    return;
  }
  console.log(link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: `smooth` });
});
