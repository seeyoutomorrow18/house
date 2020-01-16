<template> 
<div>
<Widen-top class="top"></Widen-top>
<div class="main">
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
    <navigation v-slot:Hot-property>
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
    <navigation v-slot:new-headlines v-slot:icon >
        <h1>新房头条</h1>
        <i></i>
    </navigation>
    <new-house></new-house>
     <navigation v-slot:Tools>
        <h1>购房工具</h1>
    </navigation>
    <Tool></Tool>
    <navigation v-slot:discounts>
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
    <navigation v-slot:recommend>
        <h1>推荐楼盘</h1>
    </navigation>
    <recommEnd></recommEnd>
   <houseBanner></houseBanner>
   <recommEndtwo></recommEndtwo>
    <see-more></see-more> 
</div>
</div>
</template>
<script>
import WidenTop from '../components/home-Widen'
import HouserPrices from '../components/HousePrices'
import bannerLsit from '../components/bannerlist'
import navigation from '../components/navigation'
import newHouse from '../components/new-house'
import Tool from '../components/tool';
import Banner from '../components/banner';
import recommEnd from '../components/recommend'
import recommEndtwo from '../components/recommend2'

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
        seeMore,
        recommEndtwo
    }
}
</script>

<style lang="scss" scoped>
.top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
body,html,.main{
        background: #fff;
}
.main{
    margin-top: 15%;
    margin-bottom: 20%;
}
.van-swipe{
    width: 92.784%;
    margin: 10px auto;
    margin-bottom:28px; 
    .van-swipe-item{
        width: 100%;
        height: 100%;
        img{
            width:100%;
            height:100%;
        }
    }
}
    
</style>