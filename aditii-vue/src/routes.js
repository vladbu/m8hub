import Home from './components/pages/Home.vue'
import Category from './components/pages/Category.vue'
import Test from './components/pages/Test.vue'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/category/:categoryName',
    component: Category
  },
  {
    path: '/test',
    component: Test
  }
]