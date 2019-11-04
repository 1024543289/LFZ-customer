<template>
  <div class="order_item">
    <van-row class="header"> 
      <van-col span="12" class="number">订单编号：{{data.id}}</van-col>
      <van-col span="12" class="status">{{data.status}}</van-col>
    </van-row>
    <van-row>
      <van-col :span="6" class="img">
        <img src="../assets/service.png" alt="">
      </van-col>
      <van-col :span="16" :offset="2" class="title">
        <p>{{data.customerId}}</p>
      </van-col>
    </van-row>
    <div class="message">
      <div>下单时间：{{data.orderTime | datefmt }}</div>
      <div v-if='data.address'>收货地址：{{data.address.province}} {{data.address.city}} {{data.address.area}} {{data.address.address}}</div>
      <div v-if='data.address'>联系方式：{{data.address.telephone}}</div>
    </div>
    <div class="text-right">
      合计￥ {{data.total}}
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data:{type:Object}
  }
}
</script>
<style scoped>
.order_item {
  padding: .5em;
  /* border-radius: 5px; */
  background: #ffffff;
  border-bottom: 1px solid #666;
}
.order_item .header {
  line-height: 2.5em;
  font-size: 14px;
  margin-bottom: 1em;
}
.order_item .header .status {
  text-align: right;
  font-size: 12px;
  color: #fd621f;
}
.order_item .header .number {
  text-align: left;
}
.order_item img {
  width: 100%;
  border-radius: 3px;
}
.title {
  font-size: 14px;
}
.message {
  font-size: 14px;
  margin-top: 1em;
}
.img {
  width: 70px;
}
.text-right {
  font-size: 14px;
}
</style>