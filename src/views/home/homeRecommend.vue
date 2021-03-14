<template>
    <div class="recommend">
        <div v-for="(item,index) in recommed" :key="index" class="recommend-item"  >
            <a :href="item.link">
                <img :src="item.image" alt="" @load="recommendLoad">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'homeRecommend',
    props:{
        recommed:{
            type:Array,
            default() {
                return []
            }
        }
    },
    methods:{
        recommendLoad() {
            this.$emit('recommendLoad')
            
        }
    }
}
</script>

<style scoped>
    .recommend{
        display:flex;   
        text-align:center;
        padding: 10px 0px 25px;
        border-bottom: 8px solid #ccc;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 70px;
        height: 70px;
    }
</style>