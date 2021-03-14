<template>
    <div class="show" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
    name:'Toast',
    // props:{
    //     message:{
    //         type:String,
    //         default() {
    //             return 'kkkkkkk'
    //         }
    //     },
    //     show:{
    //         type:Boolean,
    //         default() {
    //             return true
    //         }
    //     }
    // },
    data() {
        return{
            message:'',
            isShow:false,

        }
    },
    methods:{
        // 默认time=1000
        Show(message='默认提示文字',time=1000) {
            this.message = message; 
            this.isShow = true;
            setTimeout(() =>{
                    this.isShow = false
                     this.message = 'res'     
            },time)
        }
    }

}
</script>

<style scoped>
    .show{
        position:fixed;
        top: 50%;
        left: 50%;
        padding:5px 10px;
        color: white;
        transform: translate(-50%,-50%);
        background-color: rgba(0, 0, 0, .7);
        z-index: 999;
       
    }
</style>