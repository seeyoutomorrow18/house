<template>
    <div class="emoji">
        <slot name="emoji"></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .emoji{
        width: 12%;
        height: 45.83px;
        line-height: 45.83px;
        text-align: center ;
        font-size: 15.6px;
        color: #666;
        float: right;
    }
</style>