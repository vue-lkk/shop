<template>
    <div id="hy-swiper">
        <div class="swiper"
         @touchstart='touchStart'
         @touchmove='touchMove'
         @touchend='touchEnd'>
            <slot></slot>
        </div>

        <!-- <div class="prev" @click="previous">上一张</div>
        <div class="next" @click="next">下一张</div> -->
        
        <div class="indicator">
            <div v-for="(item,index) in slideCount"
             class="indicator-item"
             :class="{active:index === currentIndex - 1}"
             :key="index">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Swiper',
    props:{
        timeInterval:{ //时间间隔
            type:Number,
            default:3000
        },
        animationTime: {
            type:Number,
            default:500
        },
        moveRatio: {
            type:Number,
            default:0.25
        },
        showScroll: {
            type:Boolean,
            default:true
        }
    },
    data() {
        return {
            slideCount: 0,
            totalWidth:0,
            swiperStyle: {},
            currentIndex:1,
            scrolling:false
        }
    },
    mounted() {
        setTimeout(() => {
            this.handleDom()
            this.startTimer()
        },this.timeInterval)
    },
    methods:{
        //获取元素,复制元素,插入元素,获取宽度,获取style属性,设置显示第一个
        handleDom() {
           let swiperEl = document.querySelector('.swiper'); //获取父元素
           let slideEls = swiperEl.getElementsByClassName('slide'); //获取子元素

           this.slideCount = slideEls.length;//获取子元素的长度

           if(this.slideCount > 1) { //如果图片个数大于1张在前后添加图片
               let cloneFirst = slideEls[0].cloneNode(true); //复制第一个元素
               let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);//复制最后一个元素

               swiperEl.insertBefore(cloneLast,slideEls[0]);//insertBefore()在第一个前面插入复制的"最后一个"元素
               swiperEl.appendChild(cloneFirst);//appendChild() 在最后加入复制的"第一个"元素

               this.totalWidth = swiperEl.offsetWidth; //获取到宽度
               this.swiperStyle = swiperEl.style;  //获取到style属性
           }
           //显示第一个
           this.setTransform(-this.totalWidth);  //默认情况下显示index = 1的图片
        },
        //开始定时器
        startTimer() {
            this.playTimer = window.setInterval(() => {
                this.currentIndex++;  
                this.scrollContent(-this.currentIndex * this.totalWidth);
            },this.timeInterval)
        },
        //清除定时器
        stopTimer() {
            window.clearInterval(this.playTimer);
        },
        //轮播的步骤过程:
        //是否正在滚动,动画过渡,移动图片,调整图片位置,动画结束后不在滚动
        scrollContent(currentPosition) {
            this.scrolling = true;
            //注意：'transform ' 后面一定要记得加空格
            this.swiperStyle.transition = 'transform ' + this.animationTime + 'ms'
            //移动
            this.setTransform(currentPosition);
            //图片位置
            this.checkPosition();
            this.scrolling = false;
        },
        //移动距离
        setTransform(position) {
            this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
        },
        //位置调整
        checkPosition(){
            window.setTimeout(() => {
               this.swiperStyle.transition = '0ms';
               if(this.currentIndex >= this.slideCount + 1) {//因为前面增加了图片,所以这里要加1
                   this.currentIndex = 1;
                   this.setTransform(-this.currentIndex * this.totalWidth);
               }else if(this.currentIndex <= 0) {
                   this.currentIndex = this.slideCount;
                   this.setTransform(-this.currentIndex * this.totalWidth);
               }
               //
            //  this.$emit('transitionEnd',this.currentIndex - 1)
            },this.animationTime) 
        },

        /**
         * 拖动事件处理
         * 
         */
        touchStart(e) {
            if(this.scrolling) return;
            this.stopTimer();
            this.startX = e.touches[0].pageX;
        },
        touchMove(e) {
            this.currentX = e.touches[0].pageX;
            this.distance = this.currentX - this.startX;
            let currentPosition = -this.currentIndex * this.totalWidth;
            let moveDistance = this.distance + currentPosition;
            //console.log(moveDistance)
            this.setTransform(moveDistance);
        },
        touchEnd() {
            let currentMove = Math.abs(this.distance);
            if(this.distance === 0){
                return
            }else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
                this.currentIndex--
            }else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
                this.currentIndex++
            }
            this.scrollContent(-this.currentIndex * this.totalWidth);
            this.startTimer()
        },

        /**
         * 控制上一个，下一个
         */
        previous() {
            this.changeItem(-1);
        },
        next() {
            this.changeItem(1);
        },
        changeItem(num) {
            this.stopTimer();
            this.currentIndex += num;
            this.scrollContent(-this.currentIndex * this.totalWidth);
            this.startTimer();
        }
    }
}
</script>

<style scoped>
#hy-swiper {
    overflow: hidden;
    position: relative;
    
}
.swiper {
display: flex;
}
.indicator{
    display: flex;
    justify-content: center;
    bottom: 8px;
    width: 100%;
    position: absolute;
    z-index: 9;

}
.indicator-item{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: 0 5px;
    background-color:white;
}
.active{
    background-color: red;
}
.prev,.next{
    position: relative;;
    width: 60px;
    height: 30px;
    line-height: 30px;
    background: orange;
    opacity: 0.5;
    
}
.prev{
    top: -120px;
}
.next{
    top: -150px;
    float: right;
    right: 0px;
}
</style>