<template>
<div>
    <Topbanner :goodlist='goodlist'></Topbanner>
    <div class="details-main-content">
        <HouseInfo :goodlist='goodlist'></HouseInfo>
        <Welfare ></Welfare>
        <Price :goodlist='goodlist'></Price>
        <ToolBox></ToolBox>
    </div>
</div>
</template>

<script>
import Topbanner from './Top-banner'
import HouseInfo from './house-info'
import Welfare from './welfare-content'
import Price from './details-price'
import ToolBox from './tool-box'

export default {
    props:[ "goodlist"],

    components:{
        HouseInfo,
        Topbanner,
        Welfare,
        Price,
        ToolBox,
    }
}
</script>

<style lang='scss' scoped>
.details-main-content{
    border-radius: 8.33325px;
    overflow: hidden;
    position: relative;
    top: -10.4165px;
    width: 100%;
}

</style>