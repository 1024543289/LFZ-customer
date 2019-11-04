<template>
  <div class="wrapper">
    <div class="header">
      <van-icon size="22px" name="arrow-left" @click="backHandler"/>
      <div class="text"><span>添加收货地址</span></div>
    </div>
    
    <div class="form">
      <van-cell-group>
        <van-field v-text="this.info.id" style="display:none;" />
        <van-field v-model="form.telephone" placeholder="请输入手机号码" />
        <van-field v-model="form.province" placeholder="请输入省份" />
        <van-field v-model="form.city" placeholder="请输入城市" />
        <van-field v-model="form.area" placeholder="请输入区/县" />
        <van-field v-model="form.address" placeholder="请输入详细地址" />
      </van-cell-group>
      {{form}}
    </div>
    <div class="btn">
      <van-button type="info" size="large" @click="saveHandler">保存</van-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data(){
    return {
      form:{
        
      }
    }
  },
  created(){
    //将顾客ID赋值给表单
    this.form = {
      customerId:this.info.id
    }
  },
  computed: {
    ...mapState("User",["info"])
  },
  methods: {
    //普通方法
    backHandler(){
      this.$router.go(-1)
    },
    //保存
    saveHandler(){
      this.addressSaveOrUpdate(this.form)
      .then((response) => {
        if(response.status === 200){
          this.$notify({ type: 'success', message: '添加地址成功' });
          this.form = {};
          this.backHandler();
        }
      })
    },
    //突变
    ...mapActions("Address_add",["addressSaveOrUpdate"])
  }
}
</script>
<style scoped>
  .header {
    padding: .5em;
    background: #42a8fc;
    display: flex;
    height: 35px;
    line-height: 35px;
    color: white;
  }
  .text {
    margin-left: 110px;
  }
  .form {
    margin-top: 1em;
  }
  .btn {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>