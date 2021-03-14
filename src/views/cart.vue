<template>
    <div class="cart">
        <NavBar class="center">
            <div slot="center">购物车({{length}})</div>
        </NavBar>
        <Scroll :pullingUp='true' class="content" ref='scroll'>
            <cartList></cartList>
        </Scroll>
        <carBottomBar></carBottomBar>
    </div>
</template>

<script>
import NavBar from '../components/navbar'
import Scroll from '../components/common/scroll'
import cartList from '../views/cart/cartList'
import carBottomBar from '../views/cart/carbottombar'

import {mapGetters} from 'vuex'
export default {
    name:'cart',
    components:{
        NavBar,
        Scroll,
        cartList,
        carBottomBar
    },
    computed:{  
        // cartLength() {
        //   return  this.$store.getters.cartlength
        // }
        //利用辅助函数mapGetters(数组方式)
        // ...mapGetters(['cartlength'])
        //利用辅助函数mapGetters(对象方式)
        ...mapGetters({
            length:'cartlength'
        })
    },
    activated() {
        this.$refs.scroll.refresh()
    }
    
}
</script>

<style scoped>
    .cart{
        height: 100vh;
    }
    .center{
        position: relative;
        z-index: 99;
        background-image: linear-gradient(to top left,red,orange);
        background-color: red;
        font-size: 18px;
        color: white;
    }
    .content{
        height:calc(100vh - 93px - 44px);
        overflow: hidden;
    }
</style>