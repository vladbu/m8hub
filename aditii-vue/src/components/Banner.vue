<template>
    <carousel class="banner" :perPage="1" :autoplay="true" :autoplayTimeout="3000" :paginationActiveColor="'rgba(255, 255, 255, 0.5)'"> 
        <slide class="slide">
            <img src="../assets/img/banner1.png" alt="">
            <div>
                <h2>Cowhide standart crew 1</h2>
                <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. 
                    This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
                <button>shop now</button>
            </div>
        </slide>
        <slide class="slide">
            <img src="../assets/img/banner1.png" alt="">
            <div>
                <h2>Cowhide standart crew 1</h2>
                <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. 
                    This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
                <button>shop now</button>
            </div>
        </slide>
        <slide class="slide">
            <img src="../assets/img/banner1.png" alt="">
            <div>
                <h2>Cowhide standart crew 1</h2>
                <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. 
                    This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
                <button>shop now</button>
            </div>
        </slide>
        <slide class="slide">
            <img src="../assets/img/banner1.png" alt="">
            <div>
                <h2>Cowhide standart crew 1</h2>
                <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. 
                    This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
                <button>shop now</button>
            </div>
        </slide>
        <slide class="slide">
            <img src="../assets/img/banner1.png" alt="">
            <div>
                <h2>Cowhide standart crew 1</h2>
                <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. 
                    This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
                <button>shop now</button>
            </div>
        </slide>
    </carousel>  
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .banner {
        display: flex;
        text-align: center;
        padding: 5%;
    }
    .banner .slide {
        justify-content: center;
        text-align: initial;
    }
    .banner .slide div {
        padding: 0 10%;
    }
    .banner .slide h2 {
        font-family: BebasNeue;
        text-transform: uppercase;
        font-size: 4em;
    }
    .banner .slide p {
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        margin: 5% 0;
    }
    .banner .slide button {
        padding: 2% 2% 1% 2%;
        background: none;
        border: .3vh solid white;
        border-radius: .7vh; 
        text-transform: uppercase;
        font-weight: 800;
        font-size: 2em;
        color: white;
        cursor: pointer;
    }

    @media screen and (min-width: 940px) {
        .banner .slide {
            display: grid;
            grid-template-columns: repeat(2, 40%);
    }

    }
    @media only screen and (max-width: 630px) {
        .banner .slide {
            display: grid;
            grid-template-columns: 1fr;
        }
    }
</style>
