<template>
    <footer>
        <section class="map">
            <div>
                <h2>featured sale</h2>
                <a href="#">Alexis Hudson</a>
                <a href="#">American Apparel</a>
                <a href="#">Ben Sherman</a>
                <a href="#">Big Buddha</a>
                <a href="#">Chanel</a>
                <a href="#">Christian Audigier</a>
                <a href="#">Coach</a>
                <a href="#">Cole Haan</a>
            </div>
            <div>
                <h2>mens store</h2>
                <a href="#">Alexis Hudson</a>
                <a href="#">American Apparel</a>
                <a href="#">Ben Sherman</a>
                <a href="#">Big Buddha</a>
                <a href="#">Chanel</a>
                <a href="#">Christian Audigier</a>
                <a href="#">Coach</a>
                <a href="#">Cole Haan</a>
            </div>
            <div>
                <h2>womens store</h2>
                <a href="#">Alexis Hudson</a>
                <a href="#">American Apparel</a>
                <a href="#">Ben Sherman</a>
                <a href="#">Big Buddha</a>
                <a href="#">Chanel</a>
                <a href="#">Christian Audigier</a>
                <a href="#">Coach</a>
                <a href="#">Cole Haan</a>
            </div>
            <div>
                <h2>quick links</h2>
                <a href="#">Alexis Hudson</a>
                <a href="#">American Apparel</a>
                <a href="#">Ben Sherman</a>
                <a href="#">Big Buddha</a>
                <a href="#">Chanel</a>
                <a href="#">Christian Audigier</a>
                <a href="#">Coach</a>
                <a href="#">Cole Haan</a>
            </div>
        </section>
        <section class="copyright">
            Copyright © 2013 Css Author
        </section>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    footer {
        padding-top: 1%;
    }
    footer h2 {
        text-transform: uppercase;
        margin: 5% 0;
    }
    footer section.map {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        justify-content: center;
    }
    footer section.map a {
        display: block;
        margin: .2em;
    }
    footer section.copyright {
        margin-top: 1%;
        padding: .5%;
        text-align: center;
        background-color: #2da89b;
    }
    @media screen and (min-width: 940px) {
        footer section.map {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    @media only screen and (max-width: 940px) {
        footer section.map {
            grid-template-columns: repeat(2, 1fr);
            font-size: 1.7em;
        }
    }
    @media only screen and (max-width: 630px) {
        footer section.map {
            grid-template-columns: 1fr;
            font-size: 2em;
        }
    }
</style>
