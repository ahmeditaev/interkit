const $navLinks = document.querySelectorAll('.nav-menu-list__item a')
const $nameFormField = document.getElementById('name-field')
const $scrollToTopButton = document.getElementById('scroll-to-top')
const heightOfPromoSection = document.getElementById('promo').offsetHeight

//Appearance or disappearance of the scroll top button
document.addEventListener('scroll', () => {
  window.scrollY >= heightOfPromoSection ?
    $scrollToTopButton.style.opacity = '1' :
    $scrollToTopButton.style.opacity = '0'
})

//Scroll to top event
$scrollToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  scroll({
    top: 0,
    behavior: "smooth"
  });
})

//Click handler for each nav links
for (const link of $navLinks) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const isFormSection = this.getAttribute("href") === '#form'
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });

  setTimeout(() => {
    isFormSection && $nameFormField.focus()
  }, 1000)
}

