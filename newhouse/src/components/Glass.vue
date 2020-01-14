<template>
    <div class="glass" >
        <slot name="search"></slot>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .glass{
        width: 45.83px;
        height: 45.83px;
        text-align: center;
        line-height: 45.83px;
        float: right;
        font-size: 25px;
    }
</style>