<template>
    <a href="#" class="bottom-box" @click.prevent="$router.push('/searh')">
        <button class="bottom-btn">想了解更多，请点击这里</button>
    </a>
</template>

<script>
export default {
    
}
</script>

<style lang='scss' scoped>
.bottom-box{
    padding: 13.5px 21px;
    &:visited{
        color: inherit;
    }
    .bottom-btn{
        background: #f6f6f6;
        border-radius: 1%;
        color: #999;
        font-size: 15px;
        min-height: 45.833px;
        width:85%;
    }
}
</style>