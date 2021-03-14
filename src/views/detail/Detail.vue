<template>
    <div id="detail">
        <navbar class="nav">
            <div slot="left" @click="back">
                <img src="../../assets/img/上一级.png" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titel" :key="index" 
                class="title-item" :class="{active:index == curretnIndex}" 
                @click="change(index)">{{item}}</div>
            </div>
        </navbar>
        <scroll  ref="scroll" :probeType='3'
            :pullUpLoad='true'  @homeScroll='detailScroll'>
            <DetailSwiper :swiperImage='topImage' 
            @swiperload='swiperload'></DetailSwiper>
            <DetailDaseInfo :goods='goods'></DetailDaseInfo>
            <DetailShop :shop='shop'></DetailShop>
            <DetilInfo :detailImage='detailImage' @shopLoad='shopLoad'>
            </DetilInfo>
            <div class="options" ref="options">参数</div>
            <div class="comment" ref="comment">评论</div>
            <Goods :goods='recommed' ref="goods"></Goods>
        </scroll>
        <DottomBar class="bottomBar" @addCart ='addCart'></DottomBar>
        <BackTop @click.native="backTop" v-show='isShow'></BackTop>
        <Toast :message='message' :show='show' ref="toast"></Toast>
    </div>
</template>

<script>
import navbar from '../../components/navbar'
import DetailSwiper from '../../components/DetailSwiper'
import DetailDaseInfo from '../detail/DetailDaseInfo'
import DetailShop from '../detail/DetailShop'
import scroll from '../../components/common/scroll'
import DetilInfo from '../detail/DetailInfo'
import Goods from '../home/goods'
import DottomBar from '../detail/bottomBar'
import BackTop from '../../components/common/backTop'
import Toast from '../../components/common/Toast/toast'

import {getDetail,goods,shop,getRecommend} from '../../network/detailAxios'
// import {throttle} from '../../components/common/utils'
import {itemListenerMixin,backTopMixin} from '../../components/common/mixin'

import {mapActions}  from 'vuex'

export default {
    name:'Detail',
    data() {
        return{
            iid:null,
            titel:['商品','参数','评论','推荐'],
            curretnIndex:0,
            topImage:[],
            goods:{},
            shop:{},
            detailImage:[],
            recommed:[],
            mixinOn:null,
            offTop:[],
            message:'',
            show:false
            
        }
    },
    mixins:[itemListenerMixin,backTopMixin],
    mounted() {
       
    },
    //因为这里没有缓存，不在keep-alive中,使用不能使用这个周期函数
    deactivated() {

    },
    distoryed() {
        this.$bus.$off('imageLoad',this.detailOn)
    },
    components:{
        navbar,
        DetailSwiper,
        DetailDaseInfo,
        DetailShop,
        scroll,
        DetilInfo,
        Goods,
        DottomBar,
        BackTop,
        Toast
    },
    
    methods:{
         ...mapActions(['addCart']),
        back() {
            this.$router.back()
        },
        change(index) {
            this.curretnIndex = index
            this.$refs.scroll.scroll(0,-this.offTop[index],50)
            
        },
        oninput(event) {
            console.log(event)
            this.message =  event.target.value
        },
        swiperload() {
            this.$refs.scroll.refresh()
        },
        shopLoad() {
            this.$refs.scroll.refresh()
            
            this.offTop = []
            this.offTop.push(0)
            this.offTop.push(this.$refs.options.offsetTop - 44)
            this.offTop.push(this.$refs.comment.offsetTop- 44)
            this.offTop.push(this.$refs.goods.$el.offsetTop- 44)
            this.offTop.push(Number.MAX_VALUE)
           
            
        },
       
        detailScroll(position){
            // console.log(position.y)
           let positionY = -position.y;
           for(let i = 0; i < this.offTop.length;i++){
               if(this.curretnIndex !==i && (positionY >= this.offTop[i] && positionY < this.offTop[i+1])){
                   this.curretnIndex = i
               }
           }
        
            // //返回顶部显示与隐藏
            // if( Math.abs(position.y) > 1000) {
            //     this.isShow = true
            // }else{
            //     this.isShow = false
            // }
            // 混入 判断返回顶部显示与隐藏
            this.showTop(position)
        },
        addCart() {
            const product = {}
            product.image = this.topImage[0];
            product.desc = this.goods.desc;
            product.lowPrice = this.goods.lowPrice;
            product.title = this.goods.title;
            product.iid = this.iid
            // console.log(product)
            //方式一：dispatch
            // this.$store.dispatch('addCart',product).then(res => {
            //     this.message = res
            //     this.show = true
            //     setTimeout(() =>{
            //         this.message = 'res'
            //         this.show = false      
            //     },2000)
            // })


            //方式二：封装toast插件
             this.$store.dispatch('addCart',product).then(res => {
                    this.$toast.Show(res,2000)
            }).catch(err => {
                    this.$toast.Show(err)
            })
            

            //方式三：...mapActions映射
            // this.addCart().then(res => {
            //     this.message = res
            //     this.show = true
                
            //     setTimeout(() =>{
            //         this.message = 'res'
            //         this.show = false
                    
            //     },2000)
            // })
            
        }
    },
    created() {
        this.iid = this.$route.params.iid
        getDetail(this.iid).then(res => {
            console.log(res)
            var data = res.result
            //获取轮播图图片
            this.topImage = data.itemInfo.topImages
            // 获取商品信息
            this.goods = new  goods(data.itemInfo,data.columns,data.shopInfo.services)
            // console.log(this.goods)
            //获取店铺信息
            this.shop = new shop(data.shopInfo)
            // console.log(this.shop)
            //详情图片
            this.detailImage = data.detailInfo.detailImage
            console.log(this.detailImage)

        });

        getRecommend().then(res =>{
            console.log(res)
            this.recommed = res.data.list
            
        })       
    },
    updated() {
    
    },
    computed:{
       
    }
}
</script>

<style scoped>
    #detail{
        position: relative;
        height: 100vh;
        z-index: 999;
        background-color: #fff;
        overflow: hidden;
    }
    .nav{
        position: relative;
        z-index: 99;
        background-color: #fff;
    }
    img{
        width: 35px;
        margin-top: 3px;
    }
    .title{
        display:flex;
        font-size: 14px;
        justify-content: space-between;
    }
    .title-item{
        flex: 1;
    }
    .active{
        color: rgb(64, 158, 221);
    }
    .wrapper{
        height: calc(100% - 93px);
    }
    .options{
        height: 500px;
    }
    .comment{
        height: 300px;
    }
    .bottomBar{
        height: 49px;
        position: absolute;
        left: 0;
        right: 0;
        background-color: #fff;
        display: flex;
       text-align: center;

       
    }
</style>