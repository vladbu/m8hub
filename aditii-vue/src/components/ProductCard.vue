<template>
     <div class="product">
        <img :src="image" alt="">
        <h3> {{ title }} </h3>
            <div>
                <h3> $ {{ price }} </h3>
                <button v-if="quantity <= 0" disabled> not awaible </button>
                <button v-else v-on:click="buy(price)"> buy now </button>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped>
    div.product {
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,.2);
        width: 200px;
        padding: 5%;
        border-bottom: solid #3cc395 5px;
        text-align: center;
        font-size: 1.7em;
    }
    div.product img {
        max-width: 100%;
    }
    div.product div button {
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
    div.product div button:disabled {
        background-color: red
    }
    div.product div > * {
        display: inline;
    }
</style>
