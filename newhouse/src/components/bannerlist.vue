<template>
    <div>
        <div class="bannerlist">
            <div class="imgbox">
                <img data-v-d8c0b53e="" alt="" src="https://www.apyfc.com/uploadfiles/201905/14/201905141808289868.jpg" lazy="loaded">
            </div>
            <div class="imgbox">
                <img data-v-d8c0b53e="" alt="" src="https://www.apyfc.com/uploadfiles/201905/14/201905141808142802.jpg" lazy="loaded">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang='scss' scoped>
.bannerlist{
    display: flex;
    justify-content: space-between;
    margin-bottom: 34.375px;
    padding: 0 13.54px;
    .imgbox{
        border-radius: 2.1px;
        height: 100%;
        overflow: hidden;
        width:45%;
        img{
            height: 100%;
            width: 100%;
        }
    }
}
</style>