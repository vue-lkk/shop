<template>
    <div class="goods">
        <goodItem v-for="(item,index) in goods" 
        :key="index" :goodItem='item'></goodItem>
    </div>
</template>

<script>
import goodItem from '../home/goodItem'
export default {
    name:'goods',
    props:{
        goods:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
        goodItem
    }
}
</script>

<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        
    }
</style>