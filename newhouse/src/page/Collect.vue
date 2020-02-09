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
            <Emoji v-slot:emoji  @click.native="alter" >
            {{ text }}
            </Emoji>
        </div>

        <div class="contentList clearfix">
            <div class="flex-box clearfix" v-for="item in cartlist" :key="item.GoodsCode" @click='details(item.GoodsCode,)'>
                <div class="leftbox fl" v-if="condition">
                    <span :class="{collectborder:!Number(item.status)}" @click="hit(item.GoodsCode)" >
                        <van-icon name="passed" size="21" color="blue" v-if="Number(item.status)" />
                    </span>

                </div>
                <div class="housecatair fl">
                    <div class="imgbox">
                        <img :src="item.ImageUrl" alt="">
                    </div>
                    <div class="hosueinfo">
                        <p class="main_title">{{ item.GoodsEstate }}</p>
                        <p class="arear">{{ item.AreaFullname }}</p>
                        <p class="house-price">{{ item.AveragePrice }}</p>
                    </div>
                </div>
            </div>
            
            
            <div class="mescroll-upwarp">
                <p class="upwarp-nodata">-- 没有更多了 --</p>
            </div>
        </div>
        
        <div class="collectfooter" v-if="condition">
            <div class="checkallbox">
                <span 
                :class="{borderspan:!checkall1}" 
                @click="handover" >
                    <van-icon name="passed" size="21" color="blue" 
                    v-if="checkall1" /></span>
                <p>全选</p> 
            </div>
            <div class="delectbox" @click="cancel">删去</div>
           
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
    data(){
        return{
            text:'管理',
            condition:false,
            checkall:false
           /*  cartlist:[
                {
                   "GoodsCode" : "201808161027002262906", 
                   "ImageUrl" : "https://resource.apyfc.com/UploadImage/NewHouse/1/5002/2018/8/2018-08-28/201808281156259077791.png",
                   "GoodsEstate" : "盛和雅颂",
                   "AreaFullname" : "东莞市横沥镇",
                   "AveragePrice" : "15500元/㎡",
                   "status": "0",
                },
                {
                   "GoodsCode" : "201808161027002262907", 
                   "ImageUrl" : "https://resource.apyfc.com/UploadImage/1/1/5002/2019/9/2019-09-25/201909251013259703620.jpg",
                   "GoodsEstate" : "盛和雅颂",
                   "AreaFullname" : "东莞市横沥镇",
                   "AveragePrice" : "15500元/㎡",
                   "status": "0",
                },
                {
                   "GoodsCode" : "201808161027002262908", 
                   "ImageUrl" : "https://resource.apyfc.com/UploadImage/1/1/5002/2019/10/2019-10-09/201910091541508754355.jpg",
                   "GoodsEstate" : "盛和雅颂",
                   "AreaFullname" : "东莞市横沥镇",
                   "AveragePrice" : "15500元/㎡",
                   "status": "0",
                },
                {
                   "GoodsCode" : "2018081610270022629055", 
                   "ImageUrl" : "https://resource.apyfc.com/UploadImage/1/1/5002/2019/10/2019-10-09/201910091541508754355.jpg",
                   "GoodsEstate" : "盛和雅颂",
                   "AreaFullname" : "东莞市横沥镇",
                   "AveragePrice" : "15500元/㎡",
                   "status": "0",
                }
            ] */
        }
    },
    computed:{
        cartlist(){
            return this.$store.state.cart.cartlist
        },
        checkall1(){
            return this.cartlist.every(ele=>ele.status=='1')
        }
    },
    methods: {
        alter(){
            this.condition = !this.condition
            if(this.condition){
                this.text = '完成'
            }else{
                this.text = '管理'
            }
        },
        details(GoodsCode){
           this.$router.push({path:'/details',query:{GoodsCode}})
        },
        handover(){
            this.checkall = !this.checkall
            if(this.checkall){
                this.$store.dispatch('deselectall',this.filtrate())
            }else{
                this.$store.dispatch('deselectall1',this.filtrate())
            }
            
        },
        find(GoodsCode){
            return this.cartlist.find(item=>{
                return item.GoodsCode == GoodsCode
            })
        },
        filters(){
            // return this.cartlist.filter(ele=>ele.status==1)
            let o = {}
            let data = this.cartlist.filter(ele=>ele.status==1)
            data.forEach((element) => {
                o[element.GoodsCode] = element.GoodsCode
            });
            return o
        },
        filtrate(){
            let min = []
            this.cartlist.map(ele=>{
                min.push(ele.GoodsCode)
            })
            return  min
        },
        hit(GoodsCode){
            
            let { status } = this.find(GoodsCode)
            if(status == 1 ){
                status = String(0) 
                //console.log(status,"勾变不购")
            }else if(status == 0){
                status = String(1) 
                //console.log(status,"不勾变购")
            }
            this.$store.dispatch('modification',{GoodsCode,status})
            /* console.log(list,"找到") */
        },
        cancel(){
            this.$store.dispatch('expurgate',this.filters())
            //console.log(this.filters(),"222")
        }
    },
    async created(){
        this.$store.dispatch('render')
    }
}
</script>

<style lang="scss" scoped>
    .collect{
        width: 100%;
        background: #fff;
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
                    background: #f6f6f6 ;
                    .van-icon-search{
                        width: 6px;
                        height: 7px;
                        font-size: 16px;
                    }
                }
                input{
                    width: 92%;
                    height: 27px;
                    background: #f6f6f6 ;
                    padding-left: 7px;
                    border-radius:   0 13px  13px 0    ;
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
            background: #fff;
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
                    
                }
                .borderspan{
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