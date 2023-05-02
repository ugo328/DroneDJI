
const navbar = document.querySelector('nav');
const hamburgerButton = document.querySelector('.menu-btn');
const navbarUl = document.querySelector('.ul-nav');
const navContainer = document.querySelector(".nav-container");
let menuOpened = false;

navbarUl.classList.add('hidden');

hamburgerButton.addEventListener('click', (e) => {
  
  if (!menuOpened) {
    hamburgerButton.classList.add('open');
    // navbarUl.style.height = '100%';
    menuOpened = true;

  } else {
    hamburgerButton.classList.remove('open');
    // navbarUl.style.height = '0%';
    menuOpened = false;
  }

  navbarUl.classList.toggle('hidden');
});
