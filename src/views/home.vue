<template>
<div id="home">
    <navbar class="home-nav"><div slot="center">购物</div></navbar>
    <tabcontorl :title="['精选','新款','流行']" 
    @tabcontorlClick='change' ref="tabTop1"  
    class="isActives1" v-show="isfixed" ></tabcontorl>
    
    <Scroll ref="scroll" :probeType='3' :pullUpLoad='true'
     @homeScroll='scroll' @homeUpMore='plullUpMore'>
        <homeRecommend :recommed="recommends" 
        @recommendLoad="homeRecommendLoad"></homeRecommend>
        <feature></feature>
        
        <tabcontorl :title="['精选','新款','流行']" 
        @tabcontorlClick='change' ref="tabTop2" ></tabcontorl>
        <goods :goods="goods[changeName].list"></goods>
    
    </Scroll>
    <!-- 回到顶部 -->
    <backTop @click.native="backTop" v-show='isShow'></backTop>

       
    

</div>
    
</template>

<script>
import navbar from '../components/navbar'
import homeRecommend from '../views/home/homeRecommend'
import feature from '../views/home/feature'
import tabcontorl from '../components/tabcontorl'
import goods from './home/goods'
import Scroll from '../components/common/scroll'
import backTop from '../components/common/backTop'

import {getHomemultidata,getHomeGoods} from '../network/homeAxios'
// import {throttle} from '../components/common/utils'
import {itemListenerMixin,backTopMixin} from '../components/common/mixin'

export default {
    name:'home',
    data() {
        return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]},
            },
            changeName:'pop',
            offsetTop:0,
            isfixed:false,
            saveY:0,
            mixinOn:null
        } 
    },
    components:{
        navbar,
        homeRecommend,
        feature,
        tabcontorl,
        goods,
        Scroll,
        backTop
    },
    created(){
        this.getHomemultidata()
 
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

    },
    mixins:[itemListenerMixin,backTopMixin],
    mounted() {
        
        this.homeRecommendLoad()

    },
    activated() {
        this.$refs.scroll.scroll(0,this.saveY,0)
        this.$refs.scroll.refresh()
    },
    deactivated(){
        this.saveY = this.$refs.scroll.Scroll.y
        this.$bus.$off('imgload',this.homeOn)
    },
    methods:{
        //事件监听
        change(index) {
            switch(index) {
                case 0:
                    this.changeName = 'pop'
                    break 
                case 1:
                    this.changeName = 'new'
                    break
                case 2:
                    this.changeName = 'sell'
            }
            this.$refs.tabTop1.countrrent = index;  
            this.$refs.tabTop2.countrrent = index;  
        },
        //返回顶部
        scroll(position){
            // 判断返回顶部显示与隐藏
            // if( Math.abs(position.y) > 1000) {
            //     this.isShow = true
            // }else{
            //     this.isShow = false
            // }
            // 混入 判断返回顶部显示与隐藏
            this.showTop(position)
            
            //吸顶
            if(Math.abs(position.y) > this.offsetTop){
                this.isfixed = true
            }else{
                this.isfixed = false
            }
        },
        homeRecommendLoad(){
            this.offsetTop = this.$refs.tabTop2.$el.offsetTop
           

        },
        //节流(抽取)
        // throttle(func,aboutTime) {
        //     let time =null;
        //     return function () {
        //         if(time) clearTimeout(time) 
        //         time = setTimeout(() => {
        //             func.apply(this)
        //         }, aboutTime);
        //     }
        // },
        //上拉加载更多
        plullUpMore() {
            // console.log('上拉加载更多')
            this.getHomeGoods(this.changeName)
            this.$refs.scroll.Scroll.finishPullUp() 
        },

        //网络请求
        getHomemultidata() {
            getHomemultidata().then(res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
            console.log(this.banners)
            console.log(this.recommends)
            })
        },

        getHomeGoods(type) {
            let page =  this.goods[type].page + 1;     
            getHomeGoods(type,page).then(res => {
                // console.log(res)
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1  

            })
        },





        plusHome() {
            this.$store.commit('plus')
        },
        reduceHome() {
            this.$store.commit('reduce')
        },
        addfive(count) {
            this.$store.commit('addcount',count)
        },
        // update(){
        //     this.$store.dispatch('update',{
        //         message:'cccc',
        //         success:function() {
        //             console.log('提交成功')
        //         }
        //     })
        // }
         update(){
            this.$store.dispatch('update','参数').then(res => console.log(res))
        },
        // 模块A
        updateA() {
            this.$store.commit('updateA','lisi')
        }
    },
    
    
}
</script>

<style scoped>
    #home{
        position: relative;
        height: 100vh;
    }
    .home-nav{
        background-image: linear-gradient(to  left top, rgb(110, 7, 12), rgb(87, 7, 133));
        color: white;
        font-size: 26px;
    }
    .wrapper{
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        height: calc(100vh - 93px);
        overflow: hidden;
        
    }
 
  .isActives1{
      position: relative;
      z-index: 99;

  }
</style>