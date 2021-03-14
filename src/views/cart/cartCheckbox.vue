<template>
    <div>
        <img v-if="isChecked" src="../../assets/img/多选 直角 (1).png" alt="" >
        <img v-else src="../../assets/img/多选 直角.png" alt="" >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'CartCheckbox',
    props:{
        isChecked:{
            type:Boolean,
            default() {
               return false
            }
        }
    }

}
</script>

<style scoped>
    img{
    width: 30px;
    }
</style>