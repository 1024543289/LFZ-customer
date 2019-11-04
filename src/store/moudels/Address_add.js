import { get, post_json,post } from '../../http/axios'

export default {
  namespaced:true,
  state: {

  },
  mutations: {

  },
  actions: {
    //1.添加地址
    async addressSaveOrUpdate(context,payload){
      let response = await post("/address/saveOrUpdate",payload)
      return response
    }
  }
}