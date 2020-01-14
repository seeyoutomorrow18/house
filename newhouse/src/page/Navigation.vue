<template>
  <div class="swap">
    <router-view />
    <div class="nav-box">
        <ul>
          <li v-for="item in naviga" :key="item.name">
            <a href="#" 
            :class="{active:item.path == cur}"
            @click.prevent="goto(item.path)"
            v-if="!$route.meta.requiresAuth"
            >
              <van-icon :name="item.icon" />
              <span>{{ item.text }}</span>
            </a>
          </li>
          <!-- <li>
            <a href="#">
              <van-icon name="location-o" />
              <span>地图找房</span>
            </a>
          </li>
          <li>
            <a href="#">
              <van-icon name="coupon-o" />
              <span>涨知识</span>
            </a>
          </li>
          <li>
            <a href="#">
              <van-icon name="manager-o" />
              <span>我的</span>
            </a>
          </li> -->
        </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);
export default {
  data() {
    return {
      cur:'/home',
      naviga:[
          {
            "text":"首页",
            "icon":"wap-home-o",
            "name":"home",
            "path":"/home",
            "meta":{}
          },

          {
            "text":"地图找房",
            "icon":"location-o",
            "name":"map",
            "path":"/map"
          },
          {
            "text":"涨知识",
            "icon":"coupon-o",
            "name":"widen",
            "path":"/widen"
          },
          {
            "text":"我的",
            "icon":"manager-o",
            "name":"mine",
            "path":"/mine"
          }
      ],
     
    };
  },
  created(){
  console.log(this.$route)
  this.cur = this.$route.path;
  },
  methods:{
    goto(path){
      this.$router.push(path)
      this.cur = path
    }
  }
};
</script>

<style lang="scss" scoped>
.swap{
  width: 100%;
  height: 100%;
  margin-bottom: 80px;
}
  .nav-box{
    width: 100%;
    height: 51.38px;
    position: fixed;
    background: #fff;
    bottom: 0;
    right: 0;
    left:0;
    z-index: 1000;
    background: #FFF;
    ul{
      height: 51.38px;
      text-align: center;
      li{
        float: left;
        width: 24%;
        height: 51.38px;
       
        a{
           color: #333;
          .van-icon{
            width: 26px;
            height: 26px;
            font-size: 26px;
            
          }
          span{
            display: block;
          }
        }
        .active{
          color: #3F9EF7;
        }
      }
    }
  }
</style>