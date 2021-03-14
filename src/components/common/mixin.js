import { throttle } from '../common/utils'

//混入的规则如果是周期函数会合并，但是在methods中不能合并，会覆盖
//混入（取消事件总线）
export const itemListenerMixin = {
    //保存的函数也可以拿过来
    data() {
        return {
            // mixinOn: null
        }
    },
    mounted() {
        const refresh = throttle(this.$refs.scroll.refresh, 500)
        this.mixinOn = () => {
            refresh()
        }
        this.$bus.$on('imgload', this.mixinOn)
            // console.log('混入')
    }

}



//混入（返回顶部）
export const backTopMixin = {
    data() {
        return {
            isShow: false,
        }
    },
    methods: {
        backTop() {
            this.$refs.scroll.scroll(0, 0, 500)
        },
        showTop(position) {
            //返回顶部显示与隐藏
            if (Math.abs(position.y) > 1000) {
                this.isShow = true
            } else {
                this.isShow = false
            }
        }
    }
}