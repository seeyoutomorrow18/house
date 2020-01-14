<template>
  <div class="sysmessage">
    <div class="sysleft"></div>
    <div class="sysright">
        <van-swipe style="height: 52px;" vertical :autoplay="3000"  :show-indicators="false">
          <van-swipe-item>
              <div class="ellipsis">系统信息：很高兴认识你，现在您可以享受更多的数据服务和便利！</div>
          </van-swipe-item>
          <van-swipe-item>
              <div class="ellipsis">系统信息：欢迎进入数据超，在这里开启数据赋能通道吧！</div>
          </van-swipe-item>
        </van-swipe>
    </div>
        
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
export default {};
</script>

<style lang="scss" scoped>
    .sysmessage{
        height:52px;
        padding: 0 13.5px;
        .sysleft{
            background: url(../../public/img/sys.png) 0 50%;
            background-repeat: no-repeat;
            background-size: 2.00926rem .55556rem;
            width: 28%;
            height: 52px;
            float: left;
        }
        .sysright{
            float: left;
            width: 72%;
            line-height: 52px;
            .ellipsis{
                width: 80%;
                color: #415065 ;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>