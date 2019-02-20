let banner = new Glide('.banner', {
    type: 'carousel',
    autoplay: 4000,
    hoverpause: true,
}).mount();
let categories = new Glide('.categories', {
    type: 'carousel',
    perView: 3,
    breakpoints: {
        1024: {
            perView: 2
        },
        686: {
            perView: 1
        }
    },
    autoplay: 4000,
    hoverpause: false
}).mount();

let hamburger = document.querySelector('.hamburger'),
    nav = document.querySelectorAll('nav a');

hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('is-active') == true) {
        hamburger.classList.remove('is-active');
        nav.forEach(element => {
            element.classList.remove('show__nav');
        });
    } else {
        hamburger.classList.add('is-active');
        nav.forEach(element => {
            element.classList.add('show__nav');
        });
    }
});