let myCarousel = document.querySelector('#showcaseCarouselControls');
let myModalEl = document.getElementById('showcaseModal');

myModalEl.addEventListener('show.bs.modal', function (event) {
    const trigger = event.relatedTarget;
    let bsCarousel = bootstrap.Carousel.getInstance(myCarousel);
    bsCarousel.to(trigger.dataset.bsSlideTo);
})

