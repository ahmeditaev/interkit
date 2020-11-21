const $navLinks = document.querySelectorAll('.nav-menu-list__item a')
const $nameFormField = document.getElementById('name-field')

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

