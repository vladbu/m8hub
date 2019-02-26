<template>
    <section class="categories" data-parallax="scroll">
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<"></button>
        </div>
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide">
                    <img src="../assets/img/categories1.png" alt="">
                    <div>
                        <h2>branded shoes</h2>
                        <button>shop</button>
                    </div>
                </li>
                <li class="glide__slide">
                    <img src="../assets/img/categories2.png" alt="">
                    <div>
                        <h2>branded tshirts</h2>
                        <button>shop</button>
                    </div>
                </li>
                <li class="glide__slide">
                    <img src="../assets/img/categories3.png" alt="">
                    <div>
                        <h2>branded shorts</h2>
                        <button>shop</button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    section.categories {
        padding: 0 1%;
        background: white;
        box-shadow: 0px 2px 8px 0px rgba(0,0,0,.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #afafaf;
    }
    section.categories li.glide__slide {
        height: 150px;
        padding: 1% 0;
        border-right: 1px solid rgba(175, 175, 175, .3);
        display: flex;
    }
    section.categories li.glide__slide img {
        height: 100%;
        margin: 0 0 0 10%;
    }
    section.categories li.glide__slide div {
        width: 100px;
        margin-left: 5%;
    }
    section.categories li.glide__slide h2 {
        font-family: BebasNeue;
        font-size: 2.5em;
    }
    section.categories li.glide__slide button {
        font-size: 2em;
        text-transform: uppercase;
        color: white;
        background-color: #3cc395;
        border-radius: 5px;
        border: solid 0px;
        padding: 5% 10% 0% 10%;
        cursor: pointer;
    }
    section.categories button.glide__arrow {
        height: 25vh;
        width: 50px;
        border: none;
        cursor: pointer;
    }
    section.categories button.glide__arrow--left {
        background: url(../assets/img/arrow_left.png) center no-repeat;
        background-size: contain;
    }
    section.categories button.glide__arrow--right {
        background: url(../assets/img/arrow_right.png) center no-repeat;
        background-size: contain;
    }
    @media only screen and (max-width: 940px) {
        section.categories button.glide__arrow {
            display: none;
        }
    }
    @media only screen and (max-width: 630px) {
        section.categories button.glide__arrow {
            display: none;
        }
    }
</style>
