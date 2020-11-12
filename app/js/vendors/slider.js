new Splide('.splide', {
  type: 'fade',
  rewind: true,
  perPage: 1,
  autoplay: true,
  pauseOnHover: false,
  interval: 2000,
  classes: {
    arrows: 'splide__arrows slider-block__arrows',
    pagination: 'splide__pagination slider-block-pagination',
    page: 'splide__pagination__page slider-block-pagination__item'
  },
}).mount();

