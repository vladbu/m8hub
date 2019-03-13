<template>
    <carousel class="categories" :perPageCustom="[[100, 1], [700, 2], [1024, 3]]" :autoplay="true" :paginationEnabled="false">
        <slide class="slide">
            <img src="../assets/img/categories1.png" alt="">
            <div>
                <h2>branded shoes</h2>
                <button>shop</button>
            </div>
        </slide>
        <slide class="slide">
            <img src="../assets/img/categories2.png" alt="">
            <div>
                <h2>branded tshirts</h2>
                <button>shop</button>
            </div>
        </slide>
        <slide class="slide">
            <img src="../assets/img/categories3.png" alt="">
            <div>
                <h2>branded shorts</h2>
                <button>shop</button>
            </div>
        </slide>
    </carousel>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .categories {
        padding: 0 1%;
        background: white;
        box-shadow: 0px 2px 8px 0px rgba(0,0,0,.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #afafaf;
    }
    .categories .slide {
        height: 150px;
        padding: 1% 0;
        border-right: 1px solid rgba(175, 175, 175, .3);
        display: flex;
        justify-content: center;
    }
    .categories .slide img {
        height: 100%;
        margin: 0 0 0 10%;
    }
    .categories .slide div {
        width: 100px;
        margin-left: 5%;
    }
    .categories .slide h2 {
        font-family: BebasNeue;
        font-size: 2.5em;
    }
    .categories .slide button {
        font-size: 2em;
        text-transform: uppercase;
        color: white;
        background-color: #3cc395;
        border-radius: 5px;
        border: solid 0px;
        padding: 5% 10% 0% 10%;
        cursor: pointer;
    }
    .categories button.glide__arrow {
        height: 25vh;
        width: 50px;
        border: none;
        cursor: pointer;
    }
    .categories button.glide__arrow--left {
        background: url(../assets/img/arrow_left.png) center no-repeat;
        background-size: contain;
    }
    .categories button.glide__arrow--right {
        background: url(../assets/img/arrow_right.png) center no-repeat;
        background-size: contain;
    }
    @media only screen and (max-width: 940px) {
        .categories button.glide__arrow {
            display: none;
        }
    }
    @media only screen and (max-width: 630px) {
        .categories button.glide__arrow {
            display: none;
        }
    }
</style>
