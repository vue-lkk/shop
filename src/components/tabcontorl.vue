<template>
    <div class="tabcontorl">
        <div class="tab-item" :class="{isActive : countrrent == index}"
         v-for="(item,index) in title" :key="index" @click="titleColor(index)" >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'tabcontorl',
    props:{
        title:Array,
        default() {
            return []
        }
    },
    data() {
        return {
            countrrent:0
        }
    },
    methods:{
        titleColor(index) {
            this.countrrent = index;
            this.$emit('tabcontorlClick',index)
        }
    }
}
</script>

<style scoped>
    .tabcontorl{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        font-weight: 700;
        background-color: white;
        z-index: 9;
    }
    
    .tab-item{
        flex: 1;
        
    }
    .tab-item span {
        padding:  5px ;
    }
     .isActive span {
         border-bottom: 2px solid rgb(212, 55, 7) ;

     }
    .isActive{
        color: rgb(24, 169, 236); 
    }
</style>