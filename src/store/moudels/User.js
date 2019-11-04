import { get, post_json,post } from '../../http/axios'
import {setToken,getToken,removeToken} from '../../utils/auth'

export default {
  namespaced: true,
  state: {
    info:{},
    token:getToken()
  },
  mutations: {
    refreshInfo(state,info){
      state.info = info;
    },
    refreshToken(state,token){
      state.token = token;
    }
  },
  actions: {
    //1.登录,拿token
    async userLogin(context,userVM){
      let response = await post_json("/user/login",userVM);
      let token = response.data.token;
      //(1)将token缓存到本地，localStorage
      setToken(token);
      //(2)将token维护到状态机中
      context.commit("refreshToken",token)
      // context.dispatch("getInfo",token);
      return response
    },
    //2.用token获取用户基本信息
    async getInfo (context,token){
      let response = await get("/user/info",{token});
      context.commit("refreshInfo",response.data)
    },
    //3.退出登录
    async userLogout(context){
      let response = await post("/user/logout");
      //清理本地缓存
      removeToken();
      //清理状态机store
      context.commit("refreshInfo",'');
      context.commit("refreshToken",{});
      return response
    }
  }
}