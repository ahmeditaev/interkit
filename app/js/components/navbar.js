const header = document.querySelector('.header')
const navToggler = document.querySelector('.nav-toggler')
const navMenu = document.querySelector('.nav-menu-list')
const navLinks = document.querySelectorAll('.nav-menu-list__item')

const allEventListeners = () => {
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

const togglerClick = () => {
  navToggler.classList.toggle('is-open');
  navMenu.classList.toggle('is-open');

  navMenu.classList.contains('is-open') ?
    document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'unset'
}

const navLinkClick = () => {
  if (navMenu.classList.contains('is-open')) {
    navToggler.click();
  }
}

allEventListeners()