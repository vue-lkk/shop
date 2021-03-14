<template>
    <div class="carBar">
        <CartCheckbox class="checked" :isChecked='isAll' @click.native="checked"></CartCheckbox>
        <span>全选</span>
        <div class="totle">
            合计:{{totle}}
        </div>
        <div class="match" @click="macth">
            去计算:({{matchs}})
        </div>
    </div>
</template>

<script>
import CartCheckbox from '../cart/cartCheckbox'
export default {
    name:'carBottomBar',
    components:{
        CartCheckbox
    },
    computed:{
        totle() {
            return "￥" + this.$store.state.cartList.filter(item => {
                return item.checked
            }).reduce((prevalue,item) => {
                return prevalue + item.lowPrice * item.count
            },0).toFixed(2)
        },
        matchs(){
           return this.$store.state.cartList.filter(item => item.checked).length
        },
        isAll() {
            // return !(this.$store.state.cartList.filter(item => !item.checked).length)
            if(this.$store.state.cartList.length === 0) return false
            return !this.$store.state.cartList.find(item => !item.checked)
        }
    },
    methods:{
        checked() {
            if(this.isAll){
                // this.$store.state.cartList.filter(item => item.checked = false)
                this.$store.state.cartList.forEach(item => item.checked = false)
            }else{ 
                this.$store.state.cartList.filter(item => item.checked = true)
            }
        },
        macth() {
            if(this.matchs) {
                this.$toast.Show('请稍等...')
            }else{
                this.$toast.Show('请选择要购买的商品！')
            }
        }
    }
}
</script>

<style scoped>
    .carBar{
        position: relative;
        height: 44px;
        
        background-image: linear-gradient(to top left,rgb(233, 34, 44),rgb(138, 215, 245));
        /* top: -47px; */
        color: white;
    }
    .checked{
        position: absolute;
        top: 6px;
        left: 10px;
        

    }
    .carBar span {
        position: absolute;
        top: 12px;
        left: 46px;
    }
    .totle{
        position: absolute;
        height: 44px;
        line-height: 44px;
        left: 110px;

    }
    .match{
        position: absolute;
        top: 12px;
        right: 40px;
    }
    
</style>