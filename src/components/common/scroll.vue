<template>
    <div class="wrapper"  ref="wrapper">
        <div class="content123">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'BScroll',
    props:{
        probeType:{
            type:Number,
            default() {
                return 0
            }
        },
        pullUpLoad:{
            type:Boolean,
            default() {
                return false
            }
        }
    },
    data() {
        return {
            Scroll:null
        }
    },
    mounted() {  //在created()里拿不到this.$refs.wrapper
        //配置
        this.Scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
            click:true
        });
        //侦听滚动
        this.Scroll.on('scroll',(position) =>{
                this.$emit('homeScroll',position)
                
        });
        //上拉
        this.Scroll.on('pullingUp',() => {
            this.$emit('homeUpMore')

        })
    },
    methods:{
        scroll(x,y,time) {
            this.Scroll.scrollTo(x,y,time)
        },
        refresh() {
            // console.log('999')
            this.Scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>