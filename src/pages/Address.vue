<template>
  <div >
    <div class="header">
      <van-button 
        style="margin-right:67px;font-size:18px;color:#5675f9;"
        type="default" 
        size="small" 
        url="http://localhost:8081/#/user">
        <van-icon name="arrow-left"/>&nbsp;返回
      </van-button>
      <div style="font-size:20px;">地址列表</div>
    </div>
    <div class="box">
      <div class="address" v-for="a in address">
        <span style="font-size:20px;">{{info.name}}</span>
        <span>{{a.telephone}}</span><br>
        <span>{{a.province}}</span>&nbsp;
        <span>{{a.city}}</span>&nbsp;
        <span>{{a.area}}</span>&nbsp;
        <span>{{a.address}}</span>
        <div class="icon">
          <van-icon name="delete"/>&nbsp;
          <van-icon name="edit"/>
        </div>
      </div>
      <div class="icon">
        <van-icon name="delete"/>&nbsp;
        <van-icon name="edit"/>
      </div>
    </div>
    <div class="btn">
      <van-button type="info" size="large" @click="addAddressHandler">添加地址</van-button>
    </div>
  </div>
  <!-- <div></div> -->
  
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data(){
    return {

    }
  },
  created(){
    this.addressFindByCustomerId(this.info.id)
  },
  computed: {
    //状态
    ...mapState("Address",["address"]),
    ...mapState("User",["info"]),
  },
  methods: {
    //动作
    ...mapActions("Address",["addressFindByCustomerId"]),
    //普通方法
    addAddressHandler(){
      this.$router.push("/address_add")
    }
  }
}
</script>
<style scoped>
  .header {
    display: flex;
    padding: .5em;
    border-bottom: 1px solid #ededed;
  }
  .address {
    color: #333;
    border-bottom: 1px solid #ededed;
    padding: 0 0 1em 0;
  }
  .btn {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .box {
    padding: 1em;
  }
  .icon {
    font-size: 20px;
    line-height: 62px;
    text-align: center;
    float: right;
  }
</style>