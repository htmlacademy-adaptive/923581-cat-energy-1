//==== Модуь работы с меню (бургер)

let iconMenu = document.querySelector('.icon-menu');
let navMain = document.querySelector('.header');

navMain.classList.remove('header--nojs');

iconMenu.addEventListener('click', function () {
  if (navMain.classList.contains('menu--opened')) {
    navMain.classList.remove('menu--opened');
    navMain.classList.add('menu--closed');
  } else {
    navMain.classList.remove('menu--closed');
    navMain.classList.add('menu--opened');
  }
});
