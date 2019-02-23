// banner slider
let banner = new Glide('.banner', {
    type: 'carousel',
    autoplay: 4000,
    hoverpause: true,
}).mount();
// categories slider
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

// menu button for mobile
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

// products
let products = new Vue({
    el: '#products',
    data: {
        products: [
            {
                title: 'branded shoe',
                price: '$300',
                image: './img/product1.png'
            },
            {
                title: 'branded tees',
                price: '$300',
                image: './img/product2.png'
            },
            {
                title: 'branded tees',
                price: '$300',
                image: './img/product3.png'
            },
            {
                title: 'branded wallet',
                price: '$300',
                image: './img/product4.png'
            },
            {
                title: 'ems woman bag',
                price: '$300',
                image: './img/product5.png'
            },
            {
                title: 'branded cargos',
                price: '$300',
                image: './img/product6.png'
            },

        ],    
    },
});