<template>
  <div id="app">
    <c-header/>
    <banner/>
    <categories/>
    <products/>
    <c-footer/>
  </div>
</template>

<script>
import CHeader from './components/CHeader.vue'
import Banner from './components/Banner.vue'
import Categories from './components/Categories.vue'
import Products from './components/Products.vue'
import CFooter from './components/CFooter.vue'

export default {
  components: {
    CHeader,
    Banner,
    Categories,
    Products,
    CFooter
  }
}
</script>

<style>
  @import url('../node_modules/hamburgers/dist/hamburgers.css');
  @import url('https://fonts.googleapis.com/css?family=Lobster');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300');
  @font-face {
    font-family: BebasNeue;
    src: url(./assets/fonts/BebasNeue-Regular.otf);
    margin-top: 100px;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
  body {
    background-color: #3dc6b4;
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
  h2, 
  h3, 
  button, 
  nav a {
    font-family: BebasNeue;
    text-transform: uppercase;
  }
  input, 
  button {
      outline: none;
  }
  .glide__bullet {
    border: none;
  }
  .glide__bullet[class*=active] {
    opacity: .5;
  }
  .show__nav {
    display: flex !important; 
    flex-direction: column !important;
  }
</style>
