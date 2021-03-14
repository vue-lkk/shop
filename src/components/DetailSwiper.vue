<template>
        <Swiper class="detail-swiper">
            <SwiperItem v-for="(item,index) in swiperImage" :key="index">
                <img :src="item" alt="" @load="imgLoad">
            </SwiperItem>
        </Swiper>
</template>

<script>
import Swiper from '../components/common/Swiper'
import SwiperItem from '../components/common/SwiperItem'

export default {
    name:'DetailSwiper',
    props:{
        swiperImage:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
        imgLoad() {
            this.$emit('swiperload')
        }
    }
}
</script>

<style scoped>
.detail-swiper{
    height: 300px;
   
}
</style>