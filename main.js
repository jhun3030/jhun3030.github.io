`use strict`;

// Make navbar transparent when scroll is on the top
const navBar = document.querySelector(`#navbar`);
const navBarHeight = navbar.getBoundingClientRect().height;

document.addEventListener(`scroll`, function () {
  console.log(window.scrollY);
  console.log(`navbar height ${navBarHeight}`);
  if (window.scrollY > navBarHeight) {
    navBar.classList.add(`navbar--dark`);
  } else {
    navBar.classList.remove(`navbar--dark`);
  }
});
