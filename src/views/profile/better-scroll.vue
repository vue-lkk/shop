<template>
    <div class="wrapper" ref="kk">
        <ul class="content">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
        </ul>
    </div>
</template>

<script>
import scroll from 'better-scroll'
export default {
    name:'betterScroll',
    data() {
        return {
            bs:null
        }
    },
    //组件创建完调用
    created() {

    },
    mounted() {
        this.bs = new scroll(this.$refs.kk,{
            probeType:3,  //0123
            click:true,
            pullUpLoad:true
        })
        this.bs.on('scroll',(position) => {
            // console.log(position)
        })
        this.bs.on('pullingUp',() => {
            console.log('上拉加载...')

            setTimeout(() => {
                this.bs.finishPullUp()
            },2000)
        })
    }
    
}
</script>

<style scoped>
    .wrapper{
        height: 300px;
        background-color: gold;
        overflow: hidden;
    }
</style>