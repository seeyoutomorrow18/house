<template>
<div class="top">


    <div class="topheader">
        <Retreat v-slot:retreat >
            <van-icon name="arrow-left" />
        </Retreat>
        <van-search placeholder="请输入搜索关键词" v-model="value" @keyup.13="search()"/>
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
    props:['value'],
    data:function(){
        return {
            page:1,
            num:20,
            houseData:[]
        }
    },
    components:{
        Retreat,
        Sort
    },
    methods:{
        async search(){
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?page=1&num=10&dim=1`);

                this.houseData=data
        }
    },

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