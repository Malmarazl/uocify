import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import SearchResults from '@/views/SearchResults'
import Playlist from '@/views/Playlist'
import Login from '@/views/Login/Login'
import Register from '@/views/Login/Register'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

  const routes = [
  {
      path: '/',
      name:'home',
      component: Home
  },  
  {
    path: '/login',
    name:'login',
    component: Login
  },
  {
    path: '/register',
    name:'register',
    component: Register
  },        
  {
    path: '/search/:q',
    name:'search',
    component: SearchResults
  },
  {
    path: '/playlist/:q',
    name:'playlist',
    component: Playlist
  },
  {
      path: '*',
      name:'notfound',
      component: NotFound
  }    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router