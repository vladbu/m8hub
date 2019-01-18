window.onload = function aboutCarousel() {
        let aboutItems = document.querySelectorAll('.about-carousel, .about-hidden');
        for (let i = 0; i < aboutItems.length; i++) {
            setInterval(aboutItems[i].classList.add('about-visible'), 500+i*50);
            console.log(aboutItems);
        }
}
