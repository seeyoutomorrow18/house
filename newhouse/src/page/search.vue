<template>
<div>
    <WidenTop ></WidenTop>
    <search-list></search-list>
 </div>   
</template>

<script>


import WidenTop from '../components/WidenSearch'
import searchList from '../components/searchList'

export default {
    components:{
        WidenTop,
        searchList
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