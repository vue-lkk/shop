<template>
    <div class="tab-item" @click="tabitemClick" >  
        <div v-if="!isActive"><slot name="tab-item"></slot></div>
        <div v-else><slot name="tab-item-active"></slot></div>
        <div :style="isStyle"><slot name="tab-text"></slot></div>
    </div>
</template>

<script>
export default {
    name:'tabberItem',
    props:{
        path:String,
        color:{
            type:String,
            default() {
              return orange
            }
        }
    },
    data() {
        return{
           
        }
    },
    methods:{
        tabitemClick() {
            this.$router.push(this.path)
        },
        
    },
    computed:{
        isStyle() {
          return  this.isActive ? {color:this.color} :''
        },
        isActive(){
            // indexOf：查找
            return this.$route.path.indexOf(this.path) !== -1
        },
    }
}
</script>

<style scoped>
    .tab-item{
        flex: 1;
        height: 45px;
        text-align: center;
        padding: 5px 0px 2px;
        color: white;
        
    } 
    .tab-item img{
        width: 30px;
        height: 25px;
        vertical-align: middle;
    }
</style>