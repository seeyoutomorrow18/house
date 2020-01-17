<template>
<div>
    <div class="banner-box">
        <div class="mint-swipe">
            <div class="mint-swipe-items-wrap">
                <div class="mint-swipe-item">
                    <div class="bannerimgbox">
                        <img class="bannerimg" :src="goodlist.ImageUrl" lazy="loaded">
                    </div>
                </div>
            </div>
            <font class="hosuetitle" v-text="this.goodlist.GoodsEstate"></font>
            <span class="indexbox">共15张</span>
        </div>
    </div>
</div>
</template>

<script>

export default {
    props:[ "goodlist"],
        data:function(){
        return {
            goodLsit:''
        }
    },
    created(){
        console.log(this.goodlist,'sadasd');
        this.goodLsit=this.goodlist;
    }
}
</script>

<style lang='scss' scoped>
.banner-box{
    height: 210.063px;
    position: relative;
    width: 100%;
    .mint-swipe {
    border-radius: 1.37px;
    height: 100%;
    overflow: hidden;
    width: 100%;
        .mint-swipe-items-wrap{
            height: 100%;
            overflow: hidden;
            position: relative;
            -webkit-transform: none;
            display: block;
            transform: none;
            .mint-swipe-item{
                border-radius: 1.389px;
                height: 100%;
                overflow: hidden;
                width: 100%;
                position: relative;
                .bannerimgbox{
                    display: block;
                    height: 100%;
                    width: 100%;
                    border-radius: 1.389px;
                    overflow: hidden;
                    .bannerimg{
                        display: block;
                        height: 100%;
                        width: 100%;
                    }
                }
            }

        }
        .hosuetitle{
            bottom: 19.092px;
            color: #fff;
            font-size: 18px;
            left: 13.194px;
            position: absolute;
        }
        .indexbox{
            background: rgba(0,0,0,.4);
            border-radius: 9.7225px;
            bottom: 19.09725px;
            color: #fff;
            font-size:12px;
            line-height: normal;
            padding: 4.513875px 10.695px;
            position: absolute;
            right: .35185rem;
        }
    }
}

</style>