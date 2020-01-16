<template>
    <div class="topheader">
        <Retreat v-slot:retreat >
            <van-icon name="arrow-left" />
        </Retreat>
        <slot name='title'/>
        <Glass v-slot:spot>
            <van-icon name="more-o" />
        </Glass>
    </div>
</template>

<script>
import Retreat from './Retreat'
import Glass from './Glass'

export default {
    components:{
        Retreat,
        Glass

    } 
}
</script>

<style lang='scss' scoped>
    .topheader{
        text-align: center ;
        line-height: 45px;
        font-size: 20px;
        font-family: "微软雅黑" ;
        background: rgba($color: #000000, $alpha: 0);
        color: #333 ;
        z-index: 19999;
    }
</style>