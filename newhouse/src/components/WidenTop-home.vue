<template>
    <div class="topheader">
        <Retreat v-slot:retreat>
            <van-icon name="arrow-left" />
        </Retreat>
        新房超
        <Glass v-slot:search>
            <van-icon name="search" />
        </Glass>
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

<style lang="scss" scoped>
    .topheader{
        position: fixed;
        top:0;
        right: 0;
        left: 0;
        text-align: center ;
        line-height: 45px;
        font-size: 20px;
        font-family: "微软雅黑" ;
        font-weight: 700 ;
        color: #333 ;
        border-bottom: 1px solid #f6f6f6;
        box-sizing: border-box;
        background: #fff;
        z-index: 888;
    }
</style>