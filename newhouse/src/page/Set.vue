<template>
  <div class="setcontent">
    <div class="settop">
      <Retreat v-slot:retreat>
        <van-icon name="arrow-left" />
      </Retreat>设置
      <Glass v-slot:search></Glass>
    </div>

    <ul>
        <li>
            <div class="fl">实名认证</div>
            <div class="fr">
                未认证  
                <span>
                    <van-icon name="arrow" />
                </span>  
                
            </div>
        </li>
        <li>
            <div class="fl">密码设置 </div>
            <div class="fr">
                 
                <span>
                    <van-icon name="arrow" />
                </span>  
                
            </div>
        </li>
        <li>
            <div class="fl">关联账号</div>
            <div class="fr">
            </div>
        </li>
    </ul>
    <div class="logoiout">退出登录</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);

import Retreat from "../components/Retreat";
import Glass from "../components/Glass";

export default {
    components:{
        Retreat,
        Glass
    }
};
</script>

<style lang="scss" scoped>
    .setcontent{
        height: 100% ;
        position: relative;
        .settop{
            height: 50px;
            text-align: center ;
            line-height: 50px;
            font-size: 20px;
            font-family: "微软雅黑" ;
            font-weight: 700 ;
            color: #333 ;
            border-bottom: 1px solid #ccc;
            background: #fff;
        }
        ul{
            height: 172px;
            background: #fff;
            li{
                height: 57px;
                border-top: 1px solid #e0e0e0 ;
                padding: 0 13.5px;
                line-height: 57px;
                font-size: 14px;
                .fl{
                    width: 30%;
                }
                .fr{
                    width: 70%;
                    text-align: right;
                   
                    .van-icon-arrow{
                        vertical-align: -20%;
                        display:inline-block;
                        font-size: 16px;
                        margin-left: 5px;
                    }
                }
            }
        }
        .logoiout{
            width: 100%;
            height: 52px;
            line-height: 52px;
            text-align: center ;
            background: #fff;
            position: absolute;
            z-index:20000;
            bottom: 0px;
            font-size: 15.6px;
        }
    }
</style>