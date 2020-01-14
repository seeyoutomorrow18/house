<template>
  <div class="note-box">
    <van-swipe :autoplay="3500" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://datamarketapi.apyfc.com/UploadFiles/Common/201909/09/201909091605241106.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://datamarketapi.apyfc.com/UploadFiles/Common/201811/17/201811170931007695.jpg"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://datamarketapi.apyfc.com/UploadFiles/Common/201811/17/201811170929143358.jpg"
          alt
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);

export default {
  components: {}
};
</script>
 
<style lang="scss" scoped>
.note-box {
  width: 100%;
  height: 162px;
  padding: 0 13.5px;
  .van-swipe {
      width: 100%;
    img {
        width: 100%;
      height: 162px;
    }
  }
}
</style>