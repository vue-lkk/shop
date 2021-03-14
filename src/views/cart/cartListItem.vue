<template>
    <div class="cart">
        <div class="item-selector">
            <CartCheckbox :isChecked='product.checked' @click.native="checked"></CartCheckbox>
        </div>
        <div>
            <img :src="product.image" alt="" @load="cartImg">
        </div>
        <div class="text">
            <span class="title">{{product.title}}</span>
            <span class="desc">{{product.desc}}</span>
            <div class="price">
                <div class="left">{{product.lowPrice}}</div> 
                <div class="right">X{{product.count}}</div>
            </div>
        </div>
        
    </div>
</template>

<script>
import CartCheckbox from '../cart/cartCheckbox'
export default {
    name:'cartListItem',
    props:{
        product:{
            type:Object,
            ddefault() {
                {}
            }
        }
    },
    components:{
        CartCheckbox
    },
    methods:{
        cartImg() {
            this.$emit('cartImg')
        },
        checked() {
            this.product.checked = !this.product.checked
        }
    }
}
</script>

<style scoped>
    .cart{
        height:120px ;
        background-color:white;
        overflow: hidden;
        border-bottom: 1px solid #ccc;
    }
    .item-selector{
        width: 50px;
        text-align: center;
        float: left;
        height: 100%;
        line-height: 120px;
    }
    img{
        width: 120px;
        height: 100px;
        margin-top: 10px;
        border-radius: 5px;
        float: left;
        overflow: hidden;
        
    }
    
    .text span{
        width: 180px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        float: left;
        margin-left: 10px;
       

    }
    .text .title{
        margin-top: 10px;
    }
    .text .desc{
        margin-top:5px;
        font-size: 12px;
    }
   
</style>