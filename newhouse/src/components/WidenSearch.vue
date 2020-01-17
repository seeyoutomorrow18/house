<template>
<div class="top">


    <div class="topheader">
        <Retreat v-slot:retreat >
            <van-icon name="arrow-left" />
        </Retreat>
        <van-search placeholder="请输入搜索关键词"  v-model="value"/>
    </div>
    <Sort></Sort>
</div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Search } from 'vant';

Vue.use(Search);
Vue.use(Icon);

import Retreat from './Retreat'
import Sort from './sort'
export default {
    data:function(){
        return {
            value:''
        }
    },
    components:{
        Retreat,
        Sort
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
        width: 100%;
        img{
            width: 60%;
            height: 50%;
        }
        .van-search{
            height: 100%;
            padding: 4px;
        }
        .van-search__content{
            border-radius: 15.62px;
        }
    }
</style>