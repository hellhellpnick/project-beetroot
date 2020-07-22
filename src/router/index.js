import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import About from '../views/About.vue'
import Movies from '../views/Movies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true,
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      auth: true,
      title: 'About'
    }
  },
  {
    path: '/movie/:pid',
    name: 'Movie',
    component: Movie,
    meta: {
      auth: true,
      title: 'Movie'
    }
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies,
    meta: {
      auth: true,
      title: 'Movies'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
