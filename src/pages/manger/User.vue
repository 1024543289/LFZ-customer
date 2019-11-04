<template>
  <div class="user">
    <div class="img" style="background:#4696f9;height:220px;">
      <div style="text-align:right;padding:0.5em;">
        <span style="color:white;font-size:1.2em;">设置</span>
      </div>
      <div style="text-align:center;">
        <van-image
          round
          width="100px"
          height="100px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          fit="cover"
          style="border:4px solid #ddd"
        />
        <div><span style="color:white;font-size:1.5em;">{{info.name}}</span></div>
        <div style="height:0.5em;"></div>
        <div><span style="color:white;font-size:1em;">余额：899元</span></div>
      </div>
    </div>
    <div class="list">
      <ul>
        <li @click="toAddressHandler"><van-icon name="wap-home-o"/>&emsp;地址管理</li>
        <li><van-icon name="gold-coin-o"/>&emsp;余额体现</li>
        <li><van-icon name="credit-pay"/>&emsp;银行卡</li>
      </ul>
    </div>
    <div class="btn">
      <van-button class="btn_exit" type="warning" @click="logoutHandler" size="large">退出</van-button>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  date() {
    return {

    }
  },
  created(){
  },
  computed: {
    //状态
    ...mapState("User",["info","token"])
  },
  methods: {
    //动作
    ...mapActions("User",["getInfo","userLogout"]),
    //普通方法
    //1.退出
    logoutHandler(){
      this.userLogout()
      .then((response) => {
        if(response.status === 200){
          this.$router.push("/login")
        }
      })
    },
    //2.跳转地址管理
    toAddressHandler(id){
      this.$router.push({
        path:"/address",
      })
    }
  }
}
</script>
  
<style>
  .user {
    height: 550px;
    position: relative;
  }
  .btn {
    text-align:center;
    position: absolute;
    bottom: 0;
    width: 75%;
    margin-left: 40px;
  }
  .btn_exit {
    border-radius: 5px;
    height: 40px;
    line-height: 40px;
  }
  .list {
    text-align: left;
    padding: 1em;
  }
  .list li {
    font-size: 16px;
    color: #555;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ededed;
    margin-bottom: .5em;
  }
</style>