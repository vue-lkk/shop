<template>
    <div class="good-item" @click="toDetail">
        <!-- v-lazy='showImage' -->
        <img :src="showImage" alt="" @load="imageLoad">
        <div class="text">
            <p>{{goodItem.title}}</p>
            <span class="left">{{'￥' + goodItem.price}}</span>
            <span class="right">{{goodItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'goodItem',
    props:{
        goodItem:{
            type:Object,
            default() {
                return {}
            }
        }
    },
    methods:{
        imageLoad() {
            //事件总件
           this.$bus.$emit('imgload')
        },
        toDetail() {
            this.$router.push('/detail/' + this.goodItem.iid)
        }
    },
    computed:{
        showImage() {
            return this.goodItem.image ||  this.goodItem.show.img
        }
    }
}
</script>

<style scoped>
    .good-item{
        width: 48%;
        
    }
    .good-item img{
        width: 100%;
        border-radius: 5px;
    }
    .good-item .text{
        padding: 8px;
        height:36px;
        position: relative;
        overflow: hidden;
        
       
    }
    .text span{
        margin-top: 3px;
    }
    .good-item .text p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        
    }
    .good-item .text .left{
        position: absolute;
        left: 20px;
        color: red;
        font-size: 14px;

    }
    .good-item .text .right{
        position: absolute;
        right: 66px;
        width: 10px;
        text-align: center;
        margin-left: 10px;
        color: gold;
        font-size: 12px;
    }
    .good-item .text .right::after{
        position: absolute;
        top:0px;
        left: 26px;
        font-size: 10px;
        height: 16px;
        width: 40px;
        content: '+收藏';
        display: inline-block;
        font-size: 10px;
        border-bottom-left-radius: 8px;
        border: 1px solid orange;
        font-size: 12px;
    }
   
</style>