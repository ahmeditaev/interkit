const mainSlider = new Splide('.splide', {
  type: 'fade',
  rewind: true,
  perPage: 1,
  autoplay: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  drag: false,
  interval: 2000,
  classes: {
    arrows: 'splide__arrows slider-block__arrows',
    pagination: 'splide__pagination slider-block-pagination',
    page: 'splide__pagination__page slider-block-pagination__item'
  },
})

mainSlider.on( 'autoplay:play', function() {
  const currentIndexOfSlide = mainSlider.index
  const $root = mainSlider.root
  const $paginationListButtons = $root.querySelectorAll(`.slider-block-pagination li button` )
  const classNameForFilledButtons = 'fill-bg'

  if (currentIndexOfSlide > 0 && currentIndexOfSlide <= $paginationListButtons.length - 1) {
    $paginationListButtons[currentIndexOfSlide - 1].classList.add(classNameForFilledButtons)
  } else {
    $paginationListButtons.forEach((item) => item.classList.remove(classNameForFilledButtons) )
  }

} );

mainSlider.mount();