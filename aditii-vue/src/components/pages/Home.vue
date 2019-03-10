<template>
    <div>
        <banner/>
        <categories/>
        <products/>
    </div>
</template>

<script>
import Banner from '../Banner.vue'
import Categories from '../Categories.vue'
import Products from '../Products.vue'

export default {
    components: {
        Banner,
        Categories,
        Products,
    }
}
</script>

<style>

</style>
