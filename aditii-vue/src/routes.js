import Home from './components/pages/Home.vue'
import Category from './components/pages/Category.vue'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/category/:categoryName',
    component: Category
  }
]