<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  
    <tabber>
      <tabberItem path='/home' color='red'>
        <div slot="tab-item"><img src="./assets/img/home.png" alt=""></div>
        <div slot="tab-item-active"><img src="./assets/img/home (1).png" alt=""></div>
        <div slot="tab-text">首页</div>
      </tabberItem>
      <tabberItem path='/profile' color='red'>
        <div slot="tab-item"><img src="./assets/img/详情.png" alt="xian"></div>
        <div slot="tab-item-active"><img src="./assets/img/详情 (1).png" alt=""></div>
        <div slot="tab-text">详情</div>
      </tabberItem>
      <tabberItem path='/cart' color='red'>
        <div slot="tab-item"><img src="./assets/img/cart arrow down.png" alt=""></div>
        <div slot="tab-item-active"><img src="./assets/img/cart arrow down (1).png" alt=""></div>
        <div slot="tab-text">购物车</div>
      </tabberItem>
      <tabberItem path='/me' color='red'>
        <div slot="tab-item"><img src="./assets/img/个人.png" alt=""></div>
        <div slot="tab-item-active"><img src="./assets/img/个人 (1).png" alt=""></div>
        <div slot="tab-text">个人</div>
      </tabberItem>
    </tabber>
  </div>
</template>

<script>
import tabber from '@/components/tabber';
import tabberItem from './components/tabberItem'

export default {
  name: 'App',
  data() {
    return{
    }
  },
  components:{
    tabber,
    tabberItem
  }
  
}
</script>

<style>
  @import './assets/css/base.css'
</style>
