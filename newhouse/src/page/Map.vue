<template>
  <div class="box widencontent">
      <div class="widennav clearfix">
          <div 
          class="swiper-slide"
          v-for="(item,index) in datalist" 
          :key="item" 
          @click="goto(index)"
          :class="{nacli : item == cur}">{{item  }}
          <span class="nav-border" :class="{border : item == cur}"></span></div>
      </div>
      
    <ul id="slider" class="slider">
        <li v-for="(src,index) in 6"
        :key="src + index"
        :src="src"
        @touchstart="touchstart"
        @touchmove="touchmove" >{{src }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
        cur: "热点",
      datalist:["热点","信息","数据","规划","拍地","政策"],
      startPointX: 0,
      changePointX: 0,
      showIndex: 0
    };
  },
  methods: {
      goto(item){
          this.show(item)
      },
    show(index) {
       this.cur = this.datalist[index]
      if(0<= index < 5){
          this.changePointX = this.startPointX;
          let slider = document.getElementById("slider");
          let target = slider.offsetWidth/6
          slider.style.marginLeft = `-${target * index}px`;
      }
    },
    touchstart(e) {
      this.startPointX = e.changedTouches[0].pageX;
    },
    touchmove(e) {
      if (this.startPointX == this.changePointX) {
        return;
      }
      let currPointX = e.changedTouches[0].pageX;
      let leftSlide = this.startPointX - currPointX;
      if (leftSlide > 30 && this.showIndex < this.datalist.length - 1) {
        this.show(++this.showIndex);
      } else if (leftSlide < -30 && this.showIndex > 0) {
        this.show(--this.showIndex);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
    .widencontent{
        width: 100% ;
        overflow: hidden;
        .widennav{
            border-bottom: 1px solid #ccc;
            .swiper-slide{
                float: left;
                width: 16.66%;
                height: 41.66px;
                line-height: 41.66px;
                text-align: center;
                font-size: 15px ;
                color: #333;
                position: relative;
                .nav-border{
                    width: 21px;
                    height: 3.5px;
                    display: block;
                    position: absolute;
                    left: 50% ;
                    margin-left:-11px;

                }
                .border{
                    background: #3f9ef7 ;
                }
            }
            .nacli{
                font-weight: 700 ;
                font-size: 16px;
            }
        }
        .slider{
            width: 600%;
            li{
                width: 16.66%;
                min-height: 580px;
                padding: 0px;
                float: left;
                text-align: center;
                /* background: pink; */
            }
        }

    }



</style>