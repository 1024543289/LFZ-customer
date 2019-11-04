import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Login from './moudels/Login'
import User from './moudels/User'
import Index from './moudels/Index'
import Order from './moudels/Order'
import Address from './moudels/Address'
import Address_add from './moudels/Address_add'
import Product from './moudels/Product'
import shopcar from './moudels/shopcar'


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Login,
    User,
    Index,
    Order,
    Address,
    Address_add,
    Product,
    shopcar
  }
})
