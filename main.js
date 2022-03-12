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
  navbarMenu.classList.remove(`open`);
  scrolling(link);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(`.navbar__toggle-btn`);
navbarToggleBtn.addEventListener(`click`, function () {
  navbarMenu.classList.toggle(`open`);
});

// transparent home smooth
const home = document.querySelector(`.home__container`);
const homeHeight = home.getBoundingClientRect().height;

const controlOpacity = function () {
  // console.log(1 - window.scrollY / homeHeight);
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

workBtnContainer.addEventListener(`click`, function (e) {
  const filter = e.target.dataset.filter ? e.target.dataset.filter : e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous istem and select the new item
  const active = document.querySelector(`.category__btn.selected`);
  active.classList.remove(`selected`);
  const target = e.target.nodeName === `BUTTON` ? e.target : e.target.parentNode;
  target.classList.add(`selected`);

  projectContainer.classList.add(`anim-out`);

  setTimeout(function () {
    projects.forEach(function (project) {
      // console.log(project.dataset.type);
      if (filter === `*` || filter === project.dataset.type) {
        project.classList.remove(`invisible`);
      } else {
        project.classList.add(`invisible`);
      }
    });
    projectContainer.classList.remove(`anim-out`);
  }, 300);
});
