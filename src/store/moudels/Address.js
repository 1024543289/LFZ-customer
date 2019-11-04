import { get, post_json,post } from '../../http/axios'

export default {
  namespaced:true,
  state: {
    address:{}
  },
  mutations: {
    refreshAddress(state,address){
      state.address = address
    }
  },
  actions: {
    //1.根据顾客ID查询地址信息
    async addressFindByCustomerId(context,id){
      let response = await get("/address/findByCustomerId",{id})
      context.commit("refreshAddress",response.data)
    }
  }
}