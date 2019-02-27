<template>
    <section class="products-container">
        <h2>Featured products</h2>
        <div class="products">
           <product-card v-for="product in products" :title="product.title" :price="product.price" :quantity="product.quantity" :image="product.image" :key="product.id"/>
        </div>
    </section>
</template>

<script>
    import ProductCard from './ProductCard.vue'

    export default {
        components: {
            ProductCard
        },
        data: function() {
            return {
                products: [
                    {
                        title: 'branded shoe',
                        price: 300,
                        quantity: 0,
                        image: require('../assets/img/product1.png'),
                        id: 1
                    },
                    {
                        title: 'branded tees',
                        price: 100,
                        quantity: 2,
                        image: require('../assets/img/product2.png'),
                        id: 2
                    },
                    {
                        title: 'branded tees',
                        price: 120,
                        quantity: 6,
                        image: require('../assets/img/product3.png'),
                        id: 3
                    },
                    {
                        title: 'branded wallet',
                        price: 420,
                        quantity: 0,
                        image: require('../assets/img/product4.png'),
                        id: 4
                    },
                    {
                        title: 'ems woman bag',
                        price: 500,
                        quantity: 1,
                        image: require('../assets/img/product5.png'),
                        id: 5
                    },
                    {
                        title: 'branded cargos',
                        price: 299,
                        quantity: 0,
                        image: require('../assets/img/product6.png'),
                        id: 6
                    },

                ], 
            }
        },
    }
</script>

<style scoped>
    section.products-container {
        display: flex;
        flex-direction: column;
    }
    section.products-container h2 {
        font-family: BebasNeue;
        font-size: 2em;
        padding: 1% 5vw;
    }
    div.products {
        padding: 5%;
        background-color: white;
        color: #afafaf;
        text-transform: uppercase;
        justify-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 940px) {
        section.products-container div.products {
            padding-bottom: 10%;    
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 10%;
        }
    }

    @media only screen and (max-width: 940px) {
            section.products-container div.products {
            padding-bottom: 25%;    
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 10%;
        }

    }
    @media only screen and (max-width: 630px) {
        section.products-container div.products {
            padding-bottom: 25%;    
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1%;
        }
    }
</style>