<template>
    <div class="topheader">
        <Retreat v-slot:retreat >
            <van-icon name="arrow-left" />
        </Retreat>
        涨知识
        <Glass v-slot:search></Glass>
    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);

import Retreat from './Retreat'
import Glass from './Glass'
export default {
    components:{
        Retreat,
        Glass

    }
}
</script>

<style lang="scss" >
    .topheader{
        text-align: center ;
        line-height: 45px;
        font-size: 20px;
        font-family: "微软雅黑" ;
       background: #fff;
        color: #333 ;
    }
</style>