import { get,post_obj_array } from '../../http/axios'


export default {
  namespaced:true,
  state: {
    orders:[]
  },
  getters: {
    //根据订单状态过滤
    orderStatusFilter(state){
      return(status) => {
        return state.orders.filter(order => order.status === status)
      }
    }
  },
  mutations: {
    refreshOrder(state,orders){
      state.orders = orders
    }
  },
  actions: {
    //查询当前用户订单信息
    async findAllOrder({commit,rootState}){
      let customerId = rootState.User.info.id;
      let response = await get("order/query",{customerId});
      commit("refreshOrder",response.data)
    },
    //保存订单信息
    async saveOrder({commit,rootState}){
      //整合数据到data中
      let data = {
        customerId:rootState.User.info.id,
        addressId:rootState.Address.address[0].id,
        orderLines:Array.from(rootState.shopcar.orderLines.values())
      }
      let response = await post_obj_array('/order/save',data)
      //清空购物车
      commit('shopcar/clearShopCar',null,{root:true})
      return response;
    }
  }
}