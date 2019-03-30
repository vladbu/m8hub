import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ArtObject from './views/ArtObject.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/artObject/:artObjectLink',
      name: 'artObject',
      component: ArtObject
    }
  ]
})
