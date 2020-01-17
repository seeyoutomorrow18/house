<template>
    <div class="beforeList">
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

export default {
    data(){
        return {
            houseData:[],
            num:20,
            page:1,
            Prev:false,
            Next:false,
            min:0,
            max:25000
        }
    },

    async created(){

        let {data}=await this.$axios.get(`http://localhost:3000/goods/list?min=${this.min}&max=${this.max}&page=${this.page}&num=${this.num}`);
        this.houseData=data
        console.log(this.houseData,'564554');
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
            console.log(this.Next);
            
            
            this.Prev=true
            console.log(this.Prev);
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
            console.log(this.Prev);

            this.Next=true;
            console.log(this.Next);
            
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
           
        }
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