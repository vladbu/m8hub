<template>
        <section class="banner">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <li class="glide__slide">
                    <img src="../assets/img/banner1.png" alt="">
                    <div>
                        <h2>Cowhide standart crew 1</h2>
                        <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. 
                            This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
                        <button>shop now</button>
                    </div>
                </li>
                <!-- <li class="glide__slide">
                    <img src="../assets/img/banner1.png" alt="">
                    <div>
                        <h2>Cowhide standart crew 2</h2>
                        <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. 
                            This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
                        <button>shop now</button>
                    </div>
                </li>
                <li class="glide__slide">
                    <img src="../assets/img/banner1.png" alt="">
                    <div>
                        <h2>Cowhide standart crew 3</h2>
                        <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. 
                            This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
                        <button>shop now</button>
                    </div>
                </li>
                <li class="glide__slide">
                    <img src="../assets/img/banner1.png" alt="">
                    <div>
                        <h2>Cowhide standart crew 4</h2>
                        <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. 
                            This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
                        <button>shop now</button>
                    </div>
                </li>
                <li class="glide__slide">
                    <img src="../assets/img/banner1.png" alt="">
                    <div>
                        <h2>Cowhide standart crew 5</h2>
                        <p>White coloured, short-sleeved, printed T-shirt for men by Levi's. 
                            This crew-neck T-shirt is made of organic cotton and comes in a regular fit. </p>
                        <button>shop now</button>
                    </div>
                </li> -->
            </ul>
            <div class="glide__bullets" data-glide-el="controls[nav]">
                <button class="glide__bullet" data-glide-dir="=0"></button>
                <button class="glide__bullet" data-glide-dir="=1"></button>
                <button class="glide__bullet" data-glide-dir="=2"></button>
                <button class="glide__bullet" data-glide-dir="=3"></button>
                <button class="glide__bullet" data-glide-dir="=4"></button>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    
}
</script>

<style scoped>
    section.banner {
        display: flex;
        text-align: center;
        padding: 5%;
    }
    section.banner li.glide__slide {
        justify-items: center;
        text-align: initial;
    }
    section.banner li.glide__slide div {
        padding: 0 10%;
    }
    section.banner li.glide__slide h2 {
        font-family: BebasNeue;
        text-transform: uppercase;
        font-size: 4em;
    }
    section.banner li.glide__slide p {
        font-family: 'Open Sans', sans-serif;
        font-weight: 300;
        margin: 5% 0;
    }
    section.banner li.glide__slide button {
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
    section.banner div.glide__bullets {
        margin-top: 5%;
    }
    section.banner div.glide__bullets button.glide__bullet {
        border-radius: 50%;
        width: 10px;
        height: 10px;
    }

    @media screen and (min-width: 940px) {
        section.banner li.glide__slide {
            display: grid;
            grid-template-columns: repeat(2, 40%);
    }

    }
    @media only screen and (max-width: 630px) {
        section.banner li.glide__slide {
            display: grid;
            grid-template-columns: 1fr;
        }
    }
</style>
