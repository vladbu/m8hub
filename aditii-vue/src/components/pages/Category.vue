<template>
    <section class="category">
        <h3>{{ $route.params.categoryName }}</h3>
    </section>
</template>

<script>
    export default {
        data: function () {
            return {
                
            }
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
