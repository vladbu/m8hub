let carousel = {
    carouselWrapper: document.querySelector('div.about-carousel-wrapper'),
    radio: document.querySelectorAll('div.about-carousel-wrapper input'),
    carouselImage: document.getElementById('carouselImage'),
    changeSrc: (e) => {
        this.carouselImage.src = `./img/aboutCarousel${e.value}.png`;
    }
}

for (let i = 0; i < carousel.radio.length; i++) {
    carousel.radio[i].addEventListener('change', function(){
        carousel.changeSrc(carousel.radio[i]);
    });
};
