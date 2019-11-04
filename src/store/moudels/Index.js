import { get, post_json } from '../../http/axios'

export default {
  namespaced:true,
  state: {
    categories:{}
  },
  mutations: {
    refreshCategory(state,categories){
      state.categories = categories
    }
  },
  actions: {
    async getCategoey(context){
      let response = await get("category/findAll")
      context.commit("refreshCategory",response.data)
    }
  }
}