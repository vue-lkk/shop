<template>
    <div class="cart-list">
        <cartListItem v-for="(item,index) in cartList" :key="index" :product='item'></cartListItem>
    </div>
    
</template>

<script>
import {mapGetters} from 'vuex'
import cartListItem from '../cart/cartListItem'

export default {
    name:'cartList',
    components:{
        cartListItem
    },
    computed:{
        ...mapGetters(['cartList'])
    }
}
</script>

<style scoped>

</style>