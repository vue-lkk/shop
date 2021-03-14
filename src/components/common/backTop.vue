<template>
    <div class="back">
        <img src="../../assets/img/回到顶部.png" alt="">
        <div class="backtop">顶部</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .back {
        position: fixed;
        right: 10px;
        bottom: 80px;
    }
    .back img{
        width: 30px;
    }
    .backtop{
        margin-left: 3px;
        font-size: 12px;
        color: gray;
    }
</style>