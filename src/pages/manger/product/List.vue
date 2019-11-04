<template>
  <briup-fulllayout title="产品列表">
    <div class="product_list">
      <van-row>
        <!-- 侧边栏导航 -->
        <van-col :span="4">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item @click="categoryId=c.id" :title="c.name" v-for="c in categories" :key="c.id" />
          </van-sidebar>
        </van-col>
        <!-- 右侧产品 -->
        <van-col :span="20">
          <div class="right-content">
            <briup-product-item v-for="p in productCategoryFilter(categoryId)" :key="p.id" :data='p'>

            </briup-product-item>
          </div>
        </van-col>
      </van-row>
      <!-- 底部 -->
      <van-row class="car">
        <van-col :span="6">总额&emsp;￥{{total}}</van-col>
        <van-col :offset="12" :span="5" @click="toConfirmOrderHandler">立即下单</van-col>
      </van-row>
    </div>
  </briup-fulllayout>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data(){
    return {
      activeKey:0,
      categoryId:''
    }
  },
  computed: {
    ...mapState('Index',['categories']),
    ...mapState('Product',['products']),
    ...mapGetters('Product',['productCategoryFilter']),
    ...mapGetters('shopcar',['total'])
  },
  created(){
    //查询栏目
    this.getCategoey();
    //查询产品
    this.queryProduct({page:0,pageSize:10});
    this.categoryId = this.$route.query.id;
    this.activeKey = this.$route.query.activeKey;
  },
  methods: {
    //突变
    ...mapActions('Index',['getCategoey']),
    ...mapActions('Product',['queryProduct']),
    //点击立即下单，跳转到订单详情界面
    toConfirmOrderHandler(){
      this.$router.push({path:'/confirm_order'})
    }
  }
}
</script>
<style scoped>
.car {
  position: fixed;
  bottom: 0;
  height: 4em;
  line-height: 4em;
  width: 100%;
  background-color: rgb(55, 188, 233);
  color: #ffffff;
  text-align: center;
}
</style>