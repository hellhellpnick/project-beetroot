import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Training from '../views/Training.vue'
import Training2 from '../views/Training2.vue'
import About from '../views/About.vue'
import Movie from '../views/Movie.vue'
import Posts from '../views/Posts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/posts:pid',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/training',
    name: 'Training',
    component: Training
  },
  {
    path: '/training2',
    name: 'Training2',
    component: Training2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
