<template>
    <div class="shop">
        <div class="shop-logo">
            <img :src="shop.logo" alt="">
            <span>{{shop.name}}</span>
        </div>
        <div class="shop-detail">
            <div class="left">
                <span>
                    <span>{{shop.cSells | change}}</span>
                    <div>总销量</div>
                </span>
                <span>
                    <span>{{shop.cGoods}}</span>
                <div>宝贝</div>
                </span>
            </div>
            <div class="rigth">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailShop',
    props:{
        shop:{
            type:Object,
            default() {
                return{}
            }
        }
    },
    filters:{
        change(cSell) {
            var sell = cSell / 10000 
            sell = sell.toFixed(1)
            return cSell > 10000 ? sell + '万' : cSell
        }
    }
}
</script>

<style scoped>
.shop{
    height: 200px;

}
.shop-logo{
    height: 100px;
    line-height: 100px;
    padding: 0 0 0 10px;
}
.shop img{
    width: 50px;
    border: 1px solid orange;
    border-radius: 25px;
    vertical-align: middle;
}
.shop-detail{
    display: flex;
}
.left{
    display: flex;
    flex: 1;
    justify-content: space-around;
    text-align: center;
}
.rigth{
    flex: 1;
}
.left>span{
    flex: 1;
}
</style>