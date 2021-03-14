<template>
    <div v-if="Object.keys(goods).length !== 0" class="info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="new-price">{{goods.price}}</span>
            <span class="old-price">{{goods.oldPrice}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length- 1].name}}</span>
        </div>
        <div class="info-services">
            <span v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index - 1].icon" alt="">
                <span class="text">{{goods.services[index - 1].name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailDaseInfo',
    props:{
        goods:{
            type:Object,
        default() {
            {}
        }
    }
        
    }
}
</script>

<style scoped>
 .info{
    background-color: bisque;
    padding: 15px 10px;
    border-bottom: 5px solid #ccc;
 }

 .info-price{
     height: 44px;
    line-height: 44px;
 }
 .new-price{
     font-size: 18px;
     color: red;  
 }
 .old-price{
     position: relative;
     font-size: 12px;
     color: #ccc;
     text-decoration-line:line-through;
 }
 .info-price .old-price::after{
     position: absolute;
     display: inline-block;
     top: -10px;
     right: -53px;
     width: 50px;
     height: 20px;
     text-align: center;
     line-height: 20px;
     content:'优惠价';
     display: block;
     color: white;
     border-radius:10px;
     background-color: red;
     font-size: 12px;
 }
 .info-other{
     display: flex;
     text-align: center;
     padding: 10px 0;
     border-bottom: 2px solid #ccc;
 }
 .info-other span{
     flex: 1;
 }
 .info-services{
     display: flex;
     height: 30px;
     line-height: 30px;
     overflow: hidden;
 }
 .info-services>span{
     flex: 1;
 }
 .info-services img{
     width: 20px;
     vertical-align: middle;
     justify-content:space-around;
 }
 .info-services .text{
     font-size: 12px;
 }
</style>