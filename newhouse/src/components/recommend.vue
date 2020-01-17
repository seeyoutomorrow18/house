<template>
    <div class="beforeList">
        <ul>
            <li v-for="(item) in houseData"  :key='item.goodsCode' @click='details(item.goodsCode,)'>
                <div class="imgbox">
                    <img :src="item.imageUrl" lazy="loaded">
                    <span>推荐看房</span>
                </div>
                <div class="hosueinfo">
                    <p class="main_title" v-text="item.goodsEstate"></p>
                    <p class="area-content">
                        <span class="area_text" v-text="item.cityName+`.`+item.areaName"></span>
                        <span class="tagbox redbg" v-text="item.postmark"></span>
                    </p>
                    <p class="adress-text">
                        <span v-text="item.coreValue+'/'"></span>
                        <span v-text="item.r_AcreageRangeName+'/'"></span>
                        <span v-text="item.r_HouseTypeName"></span>
                    </p>
                    <p class="house-price" v-text="item.averagePrice"></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data(){
        return {
            houseData:[]
        }
    },

    async created(){
        let {data}=await this.$axios.get('https://newhouseapi.apyfc.com/api/Selected/IndexV2');
        console.log(data);
        this.houseData=data.data.houseData.splice(0,10);
        console.log(this.houseData,'564554');
        
    },
    methods:{
                details(GoodsCode){
           this.$router.push({path:'/details',query:{GoodsCode}})
        },
    }
}
</script>


<style lang='scss' scoped>
.beforeList{
    padding: 0 13.54px;
    ul{
        li{
            align-items: center;
            background: #fff;
            display: flex;
            padding: 13.194px 0;
            .imgbox {
                border-radius: 3px;
                height: 100%;
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
                    font-size: 15.625px;
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
}
</style>