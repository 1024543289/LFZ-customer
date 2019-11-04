<template>
  <div class="layout">
    <router-view></router-view>
    <div>
      <van-tabbar v-model="active" @change="tabChangeHandler">
        <van-tabbar-item name="/index" icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item name="/order" icon="balance-list-o">订单</van-tabbar-item>
        <van-tabbar-item name="/user" icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data(){
    return {
      active:0
    }
  },
  created(){
    if(this.token){
      this.getInfo(this.token)
    } else {
      this.$toast("token搞没了")
      //跳转到登录页
      this.$router.push("/login")
    }
  },
  computed:{
    ...mapState("User",["token","info"])
  },
  methods:{
    tabChangeHandler(path){
      this.$router.push({path})
    },
    ...mapActions("User",["getInfo"])
  }
}
</script>

<style>

</style>