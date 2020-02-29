import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import( '../views/Main.vue'),children:[
      {path: '/goods',component: () => import( '../views/Goods.vue')},
      {path: '/evaluation',component: () => import( '../views/Evaluation.vue')},
      {path: '/merchants',component: () => import( '../views/Merchants.vue')},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
