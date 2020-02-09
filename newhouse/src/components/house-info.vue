<template>
    <ul>
        <li class="item-info">
            <font>洋房</font>
            <font class="redcolor" v-text="this.goodlist.HaAveragePrice"></font>
            <font class="redcolor font21">元/m²</font>
            <font class="Acreage-right" v-text="this.goodlist.R_AcreageRangeName"></font>
            <font v-text="this.goodlist.R_HouseTypeName"></font>
        </li>
        <li class="item-info">
            <font>别墅</font>
            <font class="redcolor">待售</font>
            <font class="redcolor font21" >元/m²</font>
            <font class="Acreage-right" v-text="this.goodlist.R_AcreageRangeName" ></font>
            <font v-text="this.goodlist.R_HouseTypeName"></font>
        </li>
        <li class="item-info-adress item-info">
            <font>地址</font>
            <p class="addresstext" v-text="this.goodlist.ProvinceName+' '+this.goodlist.CityName+' '+this.goodlist.AreaName"></p>
            <i class="adress-icon"></i>
        </li>
    </ul>
</template>
    
<script>

export default {
    props:[ "goodlist"],
    data:function(){
        return {
            goodLsit:''
        }
    },
        created(){
        console.log(this.goodlist,'sadasd');
        this.goodLsit=this.goodlist;
    }
}
</script>

<style lang='scss' scoped>
ul{
    background: #fff;
    margin-bottom: 10.417px;
    padding: 20.834px 13.532px 13.889px 13.889px;
    .item-info{
        color: #666;
        font-size: 14px;
        line-height: normal;
        margin-bottom: 10.417px;
        .redcolor{
            color: #f35454;
            font-size: 18px;
            margin-left: 10.417px;
        }
        .font21{
            font-size: 12.5px;
            margin: 0 14.583px 0 0;
        }
        .Acreage-right{
            margin-right: 12.153px;
        }
        .addresstext{
            color: #3f9ef7;
            flex: 1;
            font-size: 14px;
            margin: 0 14.583px 0 13.449px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .adress-icon{
                background-image: url('../../public/img/adress.png');
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: .32407rem .32407rem;
                display: block;
                height: 24.297px;
                width: 24.297px;
        }

    }
    .item-info-adress{
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
}
</style>