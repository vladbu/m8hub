<template>
    <section class="products-container">
        <h2>Featured products</h2>
        <div class="products" id="products">
            <div class="product">
                <!-- <div v-for="product in products" class="product"> -->
                <!-- <div class="product">
                    <img :src="product.image" alt=""> -->
                    <img src="../assets/img/product1.png" alt="">
                    <h3>product.title</h3>
                        <div>
                            <h3>$ product.price </h3>
                            <!-- <button v-if="product.quantity === 0" disabled>not awaible</button> -->
                            <!-- <button v-else v-on:click="buy(product.price)">buy now</button> -->
                            <button>buy now</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
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
    div.products div.product {
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,.2);
        width: 200px;
        padding: 5%;
        border-bottom: solid #3cc395 5px;
        text-align: center;
        font-size: 1.7em;
    }
    div.products div.product img {
        max-width: 100%;
    }
    div.products div.product div button {
        font-size: 1em;
        text-transform: uppercase;
        color: white;
        background-color: #3cc395;
        border-radius: 5px;
        border: solid 0px;
        margin: 0 0 -1% 5%;
        padding: 3% 5% 0% 5%;
        cursor: pointer;
    }
    div.products div.product div button:disabled {
        background-color: red
    }
    div.products div.product div > * {
        display: inline;
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