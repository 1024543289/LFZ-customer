import Vue from 'vue'
import VueRouter from 'vue-router'
import Manger from '../pages/manger/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'manger',
    component: Manger,
    children:[{
      path:"index",
      component: () => import('../pages/manger/Index.vue')
    },{
      path:"product_list",
      component: () => import('../pages/manger/product/List.vue')
    },{
      path:"order",
      component: () => import('../pages/manger/Order.vue')
    },{
      path:"user",
      component: () => import('../pages/manger/User.vue')
    },{
      path:"confirm_order",
      component: () => import('../pages/manger/order/ConfirmOrder.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../pages/Address.vue')
  },
  {
    path: '/address_add',
    name: 'address_add',
    component: () => import('../pages/Address_add.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
