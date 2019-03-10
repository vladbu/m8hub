<template>
    <section class="category">
        <h3>{{ $route.params.categoryName }}</h3>
        <product-card v-for="product in products" :title="product.title" :price="product.price" :quantity="product.quantity" :image="product.image" :key="product.id"/>
    </section>
</template>

<script>
    import ProductCard from '../ProductCard.vue'

    export default {
        components: {
            ProductCard
        },
        data: function () {
            return {
                products: []
            }
        },
        beforeCreate(){
            fetch(`https://test-proj.free.beeceptor.com/${this.$route.params.categoryName}`)
                .then((response) => {
                    alert(response.status);
                    alert(response.json());
                    return response.json();
                })
                .then((products)=>{
                    this.products = products
                })
        }
    }
</script>

<style scoped>
    section.category {
        padding: 1%;
        background-color: white;
        box-shadow: 0px 2px 8px 0px rgba(0,0,0,.2);
        color: #afafaf;
    }
</style>
