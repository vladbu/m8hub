<template>
    <header>
        <h1>Aditii</h1>
        <form action="" class="search">
            <input type="text" >
            <button></button>
        </form>
        <div class="cart" id="cart">
            <button></button>
            <h3 class="total"> total $</h3>
        </div>
        <nav>
            <button class="hamburger hamburger--spin" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button> 
            <a href="#">home</a>
            <a href="#">sale</a>
            <a href="#">handbags</a>
            <a href="#">wallets</a>
            <a href="#">accessories</a>
            <a href="#">mens store</a>
            <a href="#">shoes</a>
            <a href="#">vintage</a>
            <a href="#">services</a>
            <a href="#">contact us</a>
        </nav>        
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    header {
        width: 100%;
        background-color: white;
        grid-column-gap: 1%;
    }
    header h1 {
        font-family: 'Lobster', cursive;
        color: #3cc3b5;
        justify-self: center;
        font-size: 3em;
    }
    header form.search {
        margin: 2% 0;
        padding: .5%;
        font-size: 1em;
        display: flex;
        border: .1vh solid #e1e1e1;
    }
    header form.search > * {
        height: 100%;
    }
    header form.search input[type=text] {
        width: 95%;
        border: none
    }
    header form.search button {
        width: 5%;
        border: none;
        background: url(../assets/img/search.png) center no-repeat;
        background-size: contain;
        cursor: pointer;
    }
    header div.cart {
        justify-self: center;
        display: flex;
        align-items: center;
    }
    header div.cart button {
        height: 40px;
        width: 40px;
        margin: 5% 0;
        border: none;
        background: url(../assets/img/basket.png) center no-repeat;
        background-size: contain;
        cursor: pointer;
    }
    header div.cart h3 {
        margin-top: 10%;
        font-size: 2em;
        color: #afafaf;
        margin-left: 6%;
    }
    nav {
        
        background-color: #4ccfc1;
        box-shadow: 0px 2px 8px 0px rgba(0,0,0,.2);
        text-transform: uppercase;
        padding: 1%;
        font-weight: 400;
        text-align: center;
    }
    nav a {
        font-size: 2em;
        word-spacing: 10px;
        display: inline;
    }
    nav a::after {
        content: ' | '
    }
    nav a:last-of-type::after {
        content: none;
    }

    @media screen and (min-width: 940px) {
        header {
            display: grid;
            grid-template-columns: .5fr 2fr .5fr;
        }
        header h1 {
            margin: 5% 0;
        }
        nav {
            grid-column: 1/4;
        }
        header nav button.hamburger {
            display: none;
        }
    }
    @media only screen and (max-width: 940px) {
        header {
            display: grid;
            grid-template-rows: 1fr;
            text-align: center;
        }
        header h1 {
            width: 100%;
        }
        header form.search {
            height: 5vw;
        }
        
        header nav button.hamburger {
            display: block;
        }
        header nav .hamburger-inner, 
        header nav .hamburger-inner::after, 
        header nav .hamburger-inner::before,
        header nav .hamburger--spin.is-active .hamburger-inner,
        header nav .hamburger--spin.is-active .hamburger-inner::after,
        header nav .hamburger--spin.is-active .hamburger-inner::before {
            background-color: white
        }
        nav a {
            display: none;
            font-size: 3.5em;
        }
        header nav a::after {
            content: none;
        }
    }


</style>
