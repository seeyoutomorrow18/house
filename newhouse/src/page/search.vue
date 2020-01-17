<template>
<div>
    <WidenTop :value='value' :search='search()' ></WidenTop>
    <search-list></search-list>
 </div>   
</template>

<script>


import WidenTop from '../components/WidenSearch'
import searchList from '../components/searchList'

export default {
    data:function(){
        return {
            value:'',
            page:1,
            num:20,
            houseData:[]
        }
    },
    components:{
        WidenTop,
        searchList
    },
        methods:{
        async search(){
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?page=${this.page}&num=${this.num}&dim=${this.value}`);

                this.houseData=data
        }
    }
}
</script>

<style lang='scss' scoped>
body,html{
    background: #fff;
}
.top{
    position: fixed;
    top:0;
    right: 0;
    left: 0;
    z-index: 999;
}
.topheader{
    position: fixed;
    top:0;
    right: 0;
    left: 0;
    z-index: 999;
}
.beforeList{
    margin-top: 13%;
    margin-bottom: 13%;
}
</style>