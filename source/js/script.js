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

function slide(){
    let slideValue = document.getElementById("slider").value;
    document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
    console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");
}
