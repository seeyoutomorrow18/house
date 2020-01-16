<template>
    <div class="collect clearfix">
        <div class="collecttop clearfix">
            <Retreat v-slot:retreat >
            <van-icon name="arrow-left" />
            </Retreat>
            <div class="seek">
                <span><van-icon name="search" /></span>
                <input type="text" placeholder="楼盘搜索">
            </div>
            <Emoji v-slot:emoji>
            完成
            </Emoji>
        </div>

        <div class="contentList clearfix">
            <div class="flex-box clearfix">
                <div class="leftbox fl">
                    <span class="collectborder"><van-icon name="passed" size="21" color="blue" /></span>
                </div>
                <div class="housecatair fl">
                    <div class="imgbox">
                        <img src="https://resource.apyfc.com/UploadImage/1/1/5002/2019/5/2019-05-11/201905111652274298635.jpg" alt="">
                    </div>
                    <div class="hosueinfo">
                        <p class="main_title">金地卓越松湖悦湾</p>
                        <p class="arear">东莞市东坑镇</p>
                        <p class="house-price">17000元/m²</p>
                    </div>
                </div>
            </div>
            
            <div class="flex-box clearfix">
                <div class="leftbox fl">
                    <span class="collectborder"><van-icon name="passed" size="21" color="blue" /></span>
                </div>
                <div class="housecatair fl">
                    <div class="imgbox">
                        <img src="https://resource.apyfc.com/UploadImage/1/1/5002/2019/5/2019-05-11/201905111652274298635.jpg" alt="">
                    </div>
                    <div class="hosueinfo">
                        <p class="main_title">金地卓越松湖悦湾</p>
                        <p class="arear">东莞市东坑镇</p>
                        <p class="house-price">17000元/m²</p>
                    </div>
                </div>
            </div>
            <div class="mescroll-upwarp">
                <p class="upwarp-nodata">-- 没有更多了 --</p>
            </div>
        </div>
        
        <div class="collectfooter">
            <div class="checkallbox">
                <span><van-icon name="passed" size="21" color="blue" /></span>
                <p>全选</p>
            </div>
            <div class="delectbox">删去</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);

import Retreat from '../components/Retreat'
import Emoji from '../components/Emoji'
export default {
    components:{
        Retreat,
        Emoji

    },
    async created(){
        let {data }= await this.$axios.get('https://newhouseapi.apyfc.com/api/Selected/IndexV2') 
        console.log(data,"11111111111111")
    }
}
</script>

<style lang="scss" scoped>
    .collect{
        width: 100%;
        
       /*  position: relative; */
        .collecttop{
            .seek{
                height: 45.83px;
                padding: 8.5px 0 ;
                width: 76%;
                float: left;
                span{
                    width: 8%;
                    height: 27px;
                    border-radius:50% 0 0   50%  ;
                    float: left;
                    text-align: center;
                    line-height: 35px;
                    background: #ccc;
                    .van-icon-search{
                        width: 6px;
                        height: 7px;
                        font-size: 16px;
                    }
                }
                input{
                    width: 92%;
                    height: 27px;
                    // background: #ccc;
                    background: pink;
                    padding-left: 7px;
                    //border-radius: 10% 0 10%  0 ;
                    float: left;
                }
                
            }
        }
        .contentList{
            padding: 0 13.5px;
            width: 100%;
            .flex-box{
                width: 100%;
                display: flex ;
                justify-content: center;
                border-bottom: 1px solid #ccc;
                .leftbox{
                    width: 15%;
                    height: 120.42px;
                   /*  background: pink; */
                    display: flex ;
                    flex-direction: column;
                    justify-content: center ;
                    span{
                        width: 22px;
                        height: 22px;
                        display: block;
                        line-height: 20.83px;
                        border-radius: 50%;
                    }
                    .collectborder{
                        border: 1px solid #ccc;
                    }
                }
                .housecatair{
                    width: 85%;
                    height: 120.42px;
                    padding: 13px 0 ;
                    display: flex ;
                    justify-content: flex-start;
                    /* float: left; */
                    .imgbox{
                        width: 125px;
                        height: 83px;
                        margin-right: 13px;
                        img{
                            width: 100%;
                            height: 100% ;
                        }
                    }
                    .hosueinfo{
                        display: flex;
                        flex-direction: column;
                        justify-content:space-around;
                        .main_title{
                            height: 21px;
                            font-size: 15.6px;
                            font-weight: 700;
                            color: #333;
                        }
                        .arear{
                            font-size: 12px;
                            color: #000;
                        }
                        .house-price {
                            color: #f25353;
                            font-size: 17.7px;
                            line-height: normal;
                        }
                    }
                }
            }
            .mescroll-upwarp{
                height: 54px;
                padding: 7px 0 24px 0 ;
                text-align: center;
                color: #808080;
                font-size: 13px;
            }
        }
        .collectfooter{
            width: 100%;
            height: 51.38px;
            padding-left: 13.5px;
            position: absolute;
            bottom: 0;
            z-index: 20000;
            display: flex ;
            justify-content: flex-start;
           
            .checkallbox{
                width: 70%;
                height: 100%;
                display: flex ;
                justify-content: flex-start ;
                 align-items: center;
                span{
                    width: 21.83px;
                    height: 21.83px;
                    border-radius: 50%;
                    border: 1px solid #ccc;
                }
                p{
                    width: 36px;
                    height: 26px;
                    margin-left: 12px;
                    font-size: 17.7px ;
                    color: #000;
                }
            }
            .delectbox{
                width: 30%;
                height: 100%;
                font-size: 17.7px;
                background: #3f9ef7;
                text-align: center;
                line-height: 51.38px;;
                color: #fff;
            }
        }
        
    }
    
</style>