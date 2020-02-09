<template>
    <div class="header-icon" @click="$router.back() " >
        <slot name="retreat"></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .header-icon{
        float: left;
        width: 12%;
        height: 45.83px;
        text-align: center;
        line-height: 50px;
        font-size: 25px;
    }
</style>