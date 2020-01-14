<template>
<div class="main">
    <Widen-top></Widen-top>
    <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201903/11/201903111437124340.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201903/11/201903111436347744.png" alt="">
            </van-swipe-item>
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201903/11/201903111434240526.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201904/12/201904121610161124.jpg" alt="">
        </van-swipe-item>
    </van-swipe>
    <navigation v-slot:title-housePrice v-slot:icon>
        <h1>房价走势</h1>
        <i></i>
    </navigation>
    <HouserPrices></HouserPrices>
    <bannerLsit></bannerLsit>
    <navigation v-slot:title-housePrice>
        <h1>热门楼盘</h1>
    </navigation>
    <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201903/11/201903111437124340.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201903/11/201903111436347744.png" alt="">
            </van-swipe-item>
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201903/11/201903111434240526.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201904/12/201904121610161124.jpg" alt="">
        </van-swipe-item>
    </van-swipe>
    <navigation v-slot:title-housePrice v-slot:icon>
        <h1>新房头条</h1>
        <i></i>
    </navigation>
    <new-house></new-house>
    <navigation v-slot:title-housePrice>
        <h1>购房工具</h1>
    </navigation>
    <Tool></Tool>
    <navigation v-slot:title-housePrice>
        <h1>小超优惠</h1>
    </navigation>
    <van-swipe :autoplay="3000" indicator-color="red">
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201903/11/201903111437124340.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201903/11/201903111436347744.png" alt="">
            </van-swipe-item>
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201903/11/201903111434240526.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="https://www.apyfc.com/uploadfiles/201904/12/201904121610161124.jpg" alt="">
        </van-swipe-item>
    </van-swipe>
    <Banner></Banner>
    <navigation v-slot:title-housePrice>
        <h1>推荐楼盘</h1>
    </navigation>
    <recommEnd></recommEnd>
    <houseBanner></houseBanner>
    <recommEnd></recommEnd>
    <see-more></see-more>
</div>
</template>
<script>
import WidenTop from '../components/WidenTop-home'
import HouserPrices from '../components/HousePrices'
import bannerLsit from '../components/bannerlist'
import navigation from '../components/navigation'
import newHouse from '../components/new-house'
import Tool from '../components/tool';
import Banner from '../components/banner';
import recommEnd from '../components/recommend'
import houseBanner from '../components/house-banner'
import seeMore from '../components/seemore'

export default {
    components:{
        WidenTop,
        HouserPrices,
        bannerLsit,
        navigation,
        newHouse,
        Tool,
        Banner,
        recommEnd,
        houseBanner,
        seeMore
    }
}
</script>

<style lang="scss" scoped>
.van-swipe{
    width: 92.784%;
    margin: 10px auto;
    margin-bottom:28px; 
    .van-swipe-item{
        img{
            width: 347px;
            height:153.14px;
        }
    }
}
    
</style>