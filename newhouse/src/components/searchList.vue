<template>
    <div class="beforeList">
    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2"  @change='price()'/>
        <van-dropdown-item v-model="value3" :options="option3"  @change='house()'/>
        <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>
        <ul>
            <li v-for="item in houseData"  :key='item.GoodsCode'  @click='details(item.GoodsCode,)'>
                <div class="imgbox">
                    <img :src="item.ImageUrl" lazy="loaded">
                </div>
                <div class="hosueinfo">
                    <p class="main_title" >{{item.GoodsEstate}}</p>
                    <p class="area-content">
                        <span class="area_text" v-text="item.CityName+`.`+item.AreaName"></span>
                        <span class="tagbox redbg" v-text="item.Postmark"></span>
                    </p>
                    <p class="adress-text">
                        <span v-text="item.CoreValue+'/'"></span>
                        <span v-text="item.R_AcreageRangeName+'/'"></span>
                        <span v-text="item.R_HouseTypeName"></span>
                    </p>
                    <p class="house-price" v-text="item.AveragePrice"></p>
                </div>
            </li>
        </ul>
        <div class="button">
            <input type="button" :class="{active:Prev}" value='   上一页    ' id='prev' @click="prev() ">
            <input type="text" name="" id="page" v-model="page" @keyup.13="To()">
            <input type="button" :class="{active:Next}" value='   下一页   ' id='next' @click="next()">
        </div>
</div>
</template>

<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);

export default {
    data(){
        return {
            houseData:[],
            num:20,
            page:1,
            Prev:false,
            Next:false,
            min:0,
            max:25000,
            //条件
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0,

            option1: [
                { text: '区域', value: 0 },
                { text: '北京', value: 1 },
                { text: '太原', value: 2 },
                { text: '广州', value: 3 },
                { text: '西安', value: 4 },
                { text: '大连', value: 5 },
                { text: '三亚', value: 6 },
                { text: '桂林', value: 7 },
                { text: '贵港', value: 8 },

            ],
            option2: [
                { text: '价格', value: 0 },
                { text: '10000元/㎡以下', value: 1 },
                { text: '10000元/㎡-15000元/㎡', value: 2 },
                { text: '15000元/㎡-20000元/㎡', value: 3 },
                { text: '20000元/㎡-25000元/㎡', value: 4 },
                { text: '25000元/㎡-30000元/㎡', value: 5 },
                { text: '30000元/㎡以上', value:6 },


            ],
            option3: [
                { text: '商铺', value: 0 },
                { text: '不限', value: 1 },
                { text: '一房', value: 2 },
                { text: '二房', value: 3 },
                { text: '三房', value: 4 },
                { text: '四房', value: 5 },

            ],
            option4: [
                { text: '更多', value: 0 },
                { text: '没有更多了', value: 1 },
            ],
        }
    },

    async created(){

        let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`);
        this.houseData=data
        this.prev();
        this.next();
        this.To()
    },
    methods:{
        details(GoodsCode){
           this.$router.push({path:'/details',query:{GoodsCode}})
        },
        async prev(){
            this.Next=false;
            this.Prev=true
            this.page--
            if(this.page<=7&&this.page>0){
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`);

                this.houseData=data
            }else{
                this.page=1
            }
        },
        async next(){
            this.Prev=false
            this.Next=true;
            this.page++
            if(this.page<=7&&this.page>0){
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`);

                this.houseData=data
            }else{
                this.page=7
            }
        },
        async To(){
            if(this.page<=7&&this.page>0){
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`);

                this.houseData=data
            }
           
        },
        async price(){
            console.log(66666);
            
            if(this.value2==1){
                console.log(1);
                
                this.min=0;
                this.max=10000;
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`); 
                this.houseData=data
            }else if(this.value2==2){
                console.log(2);

                this.min=10000;
                this.max=15000;
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`); 
                this.houseData=data
            }else if(this.value2==3){
                console.log(3);

                this.min=15000;
                this.max=20000;
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`); 
                this.houseData=data
            }else if(this.value2==4){
                console.log(3);

                this.min=20000;
                this.max=25000;
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`); 
                this.houseData=data
            }else if(this.value2==5){
                this.min=25000;
                this.max=30000;
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`); 
                this.houseData=data
            }else if(this.value2==6){
                this.min=30000;
                this.max=60000;
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`); 
                this.houseData=data
            }
        },
        async house(){
            if(this.value3==1){
                console.log(1);
                
                this.min=0;
                this.max=10000;
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`); 
                this.houseData=data
            }else if(this.value3==2){
                console.log(2);

                this.min=10000;
                this.max=15000;
                let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`); 
                this.houseData=data
            }            
        }
    }
}
</script>


<style lang='scss' scoped>
.beforeList{
    padding: 0 13.54px;
    .van-dropdown-menu{
        box-shadow: inset 0 0.18519rem 0.37037rem -0.23148rem rgba(66,60,60,.2);

    }
            .van-dropdown-item__option {
            text-align: center;
        }
    ul{
        li{
            align-items: center;
            background: #fff;
            display: flex;
            padding: 13.194px 0;
            .imgbox {
                border-radius: 3px;
                height: 85px;
                margin-right: 13.888px;
                overflow: hidden;
                position: relative;
                width:36%;
                img{
                    display: block;
                    height: 100%;
                    width: 100%;
                }
                span{
                    background: linear-gradient(270deg,#f25353,#f3886b);
                    border-radius:3px 0 3px 0;
                    color: #fff;
                    display: block;
                    font-size: 12px;
                    left: 0;
                    line-height: normal;
                    padding: 3.5px 0;
                    position: absolute;
                    text-align: center;
                    top: 0;
                    width: 44%;
                }
            }
            .hosueinfo{
                display: flex;
                flex: 1;
                flex-direction: column;
                height: 93.0555px;
                justify-content: space-between;
                overflow: hidden;
                .main_title{
                    color: #333;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .area-content{
                    align-items: center;
                    display: flex;
                    .area_text{
                        color: #999;
                        font-size: 12px;
                        line-height: normal;
                        margin-right: 5.20875px;
                    }
                    .redbg{
                        background: #f35454;
                        margin-right: 5.20875px;
                    }
                    .tagbox{
                        border-radius: 2.1px;
                        color: #fff;
                        font-size: 10.41675px;
                        line-height: normal;
                        padding: 2.1px 3px;
                    }
                }
                .adress-text{
                    color: #999;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .house-price{
                    color: #f25353;
                    font-size: 18px;
                    line-height: normal;
                }
            }
        }
    }
    .button{
        display: flex;
        width: 100%;
        height: 30px;
        justify-content: space-around;
        align-items: center;
        .active{
            background: #1989fa;
        }
        #prev,#next{
            display: block;
            height: 30px;
            border-radius: 8px;
        }
        #page{
            width: 30%;
            height: 30px;
            border:1px solid #1989fa;
            border-radius:8px ;
            text-align: center;
            line-height: 30px;
        }
    }
}
</style>