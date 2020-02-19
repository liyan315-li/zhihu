import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import artDet from '../views/art_det.vue'
import Comment from '../views/comment.vue'
import Mine from '../views/mine.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/artDet',
    name: 'artDet',
    component: artDet
  },
  {
    path: '/Comment',
    name: 'Comment',
    component: Comment
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
