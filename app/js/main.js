const setHeightToMobileNavMenu = () => {
  const $navMenu = document.getElementById('nav-menu');
  if (window.innerWidth <= 1024) {
    const height = window.innerHeight //Instead of 100vh value. Mobile viewport bug fix
    $navMenu.style.height = `${height}px`
  } else {
    $navMenu.style.height = 'unset'
  }
}

window.addEventListener('load', () => {
  //Constants
  const $navLinks = document.querySelectorAll('.nav-menu-list__item a'),
        $nameFormField = document.getElementById('name-field'),
        $header = document.getElementById('header'),
        $mainLogo = document.getElementById('main-logo'),
        $copyright = document.getElementById('copyright');

  const heightOfPromoSection = document.getElementById('promo').offsetHeight,
        heightOfStickyHeader = 65;
  //End constants

  //Event listeners
  document.addEventListener('scroll', stickyHeaderHandler)

  $mainLogo.addEventListener('click', clickHandler)

  for (const link of $navLinks) {
    link.addEventListener("click", clickHandler);
  }
  //End event listeners
  //--------------------------------------------------------------------------------------
  $copyright.innerHTML = `© INTERKIT - ${new Date().getFullYear()}`
  //--------------------------------------------------------------------------------------
  //Functions
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

  function stickyHeaderHandler() {
    return window.scrollY >= heightOfPromoSection - heightOfStickyHeader ?
      $header.classList.add("header-fixed") :
      $header.classList.remove("header-fixed")
  }
  //End functions

  //Init
  setHeightToMobileNavMenu()

  // SVGInject(document.querySelectorAll("img.injectable"), {
  //   beforeInject: function (img, svg) {
  //     console.log(img.offsetWidth, img.offsetHeight, img.src )
  //     svg.setAttribute('width', img.offsetWidth)
  //     svg.setAttribute('height', img.offsetHeight)
  //     svg.setAttribute('viewBox', `0 0 ${img.offsetWidth * 1.8} ${img.offsetHeight * 1.8}`)
  //   }
  // });
  //End init
})

window.addEventListener('resize', setHeightToMobileNavMenu)

