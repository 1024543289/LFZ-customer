<template>
  <div class="order">
    <van-nav-bar title="我的订单" />
    <van-tabs v-model="active">
      <van-tab title="全部订单">
        <briup-order-item v-for="order in orders" :key="order.id" :data='order'></briup-order-item>
      </van-tab>
      <van-tab title="待支付">
        <briup-order-item v-for="order in orderStatusFilter('待支付')" :key="order.id" :data="order"></briup-order-item>
      </van-tab>
      <van-tab title="待服务">
        <briup-order-item v-for="order in orderStatusFilter('待派单')" :key="order.id" :data="order"></briup-order-item>
        <briup-order-item v-for="order in orderStatusFilter('待接单')" :key="order.id" :data="order"></briup-order-item>
        <briup-order-item v-for="order in orderStatusFilter('待服务')" :key="order.id" :data="order"></briup-order-item>
      </van-tab>
      <van-tab title="待确认">
        <briup-order-item v-for="order in orderStatusFilter('待确认')" :key="order.id" :data="order"></briup-order-item>
      </van-tab>
      <van-tab title="已完成">
        <briup-order-item v-for="order in orderStatusFilter('已完成')" :key="order.id" :data="order"></briup-order-item>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  data(){
    return {
      active:0
    }
  },
  created(){
    this.findAllOrder()
  },
  computed: {
    ...mapState("Order",["orders"]),
    ...mapGetters('Order',['orderStatusFilter'])
  },
  methods: {
    //突变
    //动作
    ...mapActions("Order",["findAllOrder"])
  }
}
</script>

<style>
  .header {
    text-align: center;
    padding: .7em;
    font-size: 18px;
    border-bottom: 1px solid #ededed;
  }
  .order {
    padding: .5em;
  }
  .order ul {
    border-bottom: 1px solid #ededed;
    margin-bottom: 5px;
    padding: 10px;
  }
</style>