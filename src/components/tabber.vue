<template>
    <div class = 'tab'>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name:'tabber',
}
</script>

<style scoped>
.tab{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(to top right, rgb(110, 7, 12), rgb(87, 7, 133));
    display: flex;
   box-shadow: -1px 0px 8px rgb(82, 81, 80);
}
</style>