<template>
    <div>
        <div class="bar-left">
            <div>
                <i><img src="../../assets/img/客服.png" alt=""></i>
                <span>客服</span>
            </div>
            <div>
                <i><img src="../../assets/img/店铺.png" alt=""></i>
                <span>店铺</span>
            </div>
            <div>
                <i><img class="last" src="../../assets/img/收藏.png" alt=""></i>
                <span>收藏</span>
            </div>
        </div>
        <div class="cart" @click="addToCart">
                <i></i>
                <span>加入购物车</span>
        </div>
        <div class="bar-rigth">
            <div></div>
            <div>购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DottomBar',
    methods:{
        addToCart() {
            this.$emit('addCart')
        }
    }
}
</script>

 <style scoped>
 .bar-left{
     display: flex;
     flex: 1;
     text-align:center;
 }
 .bar-left>div{
     flex: 1;
 }
  .bar-left img{
      vertical-align: middle;
      width: 30px;
  }
   .bar-left .last{
       width: 33px;
   }
  .bar-left span{
      display: inline-block;
      width: 60px;
      font-size: 12px;
  }
 .cart{
     width: 90px;
     background-color: rgb(238, 180, 20);
     line-height: 49px;
     color: white;
     border-top-left-radius: 20px;
 }
 .bar-rigth{
     width: 90px;
     background-color: rgb(202, 7, 7);
     line-height: 49px;
    color: white;
    border-bottom-right-radius:20px;
 }
 </style>