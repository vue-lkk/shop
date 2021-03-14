<template>
    <div v-if="Object.keys(detailImage).length !== 0" class="shopInfo">
        <span class="text">{{detailImage[0].key}}</span>
        <span></span>
        <div  v-for="(item,index) in detailImage[0].list" :key="index">
            <img :src="item" alt="" @load="imageLoad">
        </div>
    </div>
</template>

<script>
export default {
    name:'DetilInfo',
    props:{
        detailImage:{
            type:Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            counter:0,
            detailImagelength:0
        }
    },
    methods:{
        imageLoad() {
            if(++this.counter === this.detailImagelength){
                 this.$emit('shopLoad')
                 console.log(1)
            }
           
        }
    },
    watch:{
        detailImage() {
            this.detailImagelength = this.detailImage[0].list.length 
        }
    }

}
</script>
<style scoped>
.shopInfo .text{
    display: block;
    text-align: center;
    padding: 10px 0;
}
 .shopInfo img{
     width: 100%;
 }
</style>