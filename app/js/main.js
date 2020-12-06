const $navLinks = document.querySelectorAll('.nav-menu-list__item a')
const $nameFormField = document.getElementById('name-field')
const heightOfPromoSection = document.getElementById('promo').offsetHeight
const $header = document.getElementById('header')
const $mainLogo = document.getElementById('main-logo')
const $copyright = document.getElementById('copyright')

const heightOfStickyHeader = 65;

$copyright.innerHTML = `© INTERKIT - ${new Date().getFullYear()}`

$mainLogo.addEventListener('click', clickHandler)

document.addEventListener('scroll', () => {
  return window.scrollY >= heightOfPromoSection - heightOfStickyHeader ?
    $header.classList.add("header-fixed") :
    $header.classList.remove("header-fixed")
})

//Click handler for each nav links
for (const link of $navLinks) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const isFormSection = this.getAttribute("href") === '#form'
  const href = this.getAttribute("href");
  let offsetTop = document.querySelector(href).offsetTop;

  if (this.getAttribute('href') !== "#about") {
    offsetTop = offsetTop - heightOfStickyHeader
  }

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });

  setTimeout(() => {
    isFormSection && $nameFormField.focus()
  }, 1000)
}

