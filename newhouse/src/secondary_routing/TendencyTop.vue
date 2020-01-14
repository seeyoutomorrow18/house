<template>
    <div class="">
        <div class="topheader">
        <Retreat v-slot:retreat>
            <van-icon name="arrow-left" />
        </Retreat>
        数据超市
        <Glass v-slot:search>
            <van-icon name="search" />
        </Glass>
    </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);

import Retreat from '../components/Retreat'
import Glass from '../components/Glass'
export default {
    components:{
         Retreat,
        Glass
    }
}
</script>
 
 <style lang="scss" scoped>
 
 </style>