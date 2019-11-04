import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import './plugins/vant.js'
import './icon/style.css'
import './icon/iconfont'
import { Grid, GridItem } from 'vant';

//全局注册自定义组件
import FullLayout from './components/FullLayout'
import OrderItem from './components/OrderItem'
import AddressItem from './components/AddressItem'
import ProductItem from './components/ProductItem'
Vue.component('briup-fulllayout',FullLayout)
Vue.component('briup-order-item',OrderItem)
Vue.component('briup-address-item',AddressItem)
Vue.component('briup-product-item',ProductItem)
//全局注册过滤器
Vue.filter('datefmt',function(val){
  if(val){
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
  }
  return val;
})

Vue.use(Grid).use(GridItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
