<template>
  <div class="login">
    <img src="./images/timg.jpg" alt="图片丢了" style="width:100%"> 
    <div id="content">
      <van-cell-group>
        <van-field
          v-model="userVM.username"
          clearable
          label="用户名"
          left-icon="user-o"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
        <van-field
          v-model="userVM.password"
          type="password"
          label="密码"
          left-icon="closed-eye"
          placeholder="请输入密码"
          
        />
      </van-cell-group> 
      <div id="paddword">
        <van-checkbox v-model="checked" style="font-size:16px;" shape="square">记住密码</van-checkbox>
        <a href="#">忘记密码？</a>
      </div>
      <van-button type="primary" size="large" @click="loginHandler" style="height:40px;line-height:40px;">登录</van-button>
      <div style="text-align: center;color:#777;">
        <p>使用第三方登录</p>
      </div>
      <div style="margin-top:1.5em;">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-QQ"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhifubao"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibo"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  data() {
    return {
      userVM:{
        username:"",
        password:"",
        type:"customer"
      },
      checked: false
    }
  },
  created() {

  },
  computed: {
    
  },
  methods:{
    //突变
    //动作
    ...mapActions("User",["userLogin"]),
    //普通方法
    //1.登录按钮
    loginHandler() {
      this.userLogin(this.userVM)
      .then((response) => {
        if(response.status === 200){
          this.$router.push("index")
        }
      })
    }

  }
}
</script>

<style>
  #content {
    padding: 3em 2em;
  }
  #paddword {
    display: flex;
    margin: 1em 0;
  }
  #paddword a {
   margin-left: 100px;
   text-align: center;
  }
</style>