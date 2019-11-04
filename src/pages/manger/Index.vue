<template>
  <div class="index">
    <div class="header">
      <div class="h-icon" style="font-size:24px;color:#444;margin-right:1em;"><van-icon name="wap-nav"/></div>
      <div class="search"><van-search style="width:250px;" placeholder="请输入搜索关键词"/></div>
      <div class="h-icon" style="font-size:24px;color:#444;margin-right:1em;"><van-icon name="scan" /></div>
    </div>
    <div class="swipe">
      <van-swipe :autoplay="3000" indicator-color="white" >
        <van-swipe-item><img src="../images/lb1.jpg"></van-swipe-item>
        <van-swipe-item><img src="../images/lb2.jpg"></van-swipe-item>
        <van-swipe-item><img src="../images/lb3.jpg"></van-swipe-item>
        <van-swipe-item><img src="../images/lb4.jpg"></van-swipe-item>
      </van-swipe>
    </div>
    <van-grid class="category" :column-num="3" icon-size="50px">
      <van-grid-item
        @click="toProductListHandler(c.id,index)"
        v-for="(c,index) in categories"
        :key="c.id"
        :icon="c.icon"
        :text="c.name"
      />
    </van-grid>
    <div class="tongzhi">
      <van-notice-bar
        text="双十一来袭，当天全场商品满300减50！满500元，即可获得抽奖一次，一等奖999元水果代金券（全品类通用），快来选购吧！"
        left-icon="volume-o"
      />
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
  data(){
    return {

    }
  },
  created(){
    this.getCategoey()
  },
  computed: {
    //状态
    ...mapState("Login",["info"]),
    ...mapState("Index",["categories"])
  },
  methods:{
    //动作
    ...mapActions("Index",["getCategoey"]),
    //跳转到产品列表
    toProductListHandler(id,activeKey){
      this.$router.push({path:'product_list',query:{id,activeKey}})
    }
  }
}
</script>

<style>
  .swipe {
    padding: 0 0.5em;
  }
  .swipe img {
    width: 100%;
    border-radius: 10px;
  }
  .header {
    padding: .5em;
    display:flex;
    line-height: 40px;
  }
  .header van-search {
    padding: 0;
  }
  .h-icon {
    margin-top: .3em;
  }
  .search {
    margin-right: 1.5em;
  }
  .category {
    margin-top: 2em;
  }
  .tongzhi {
    margin-top: 1.5em;
  }
</style>