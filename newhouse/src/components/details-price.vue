<template>
    <section class="housing-price">
        <div  class="title-box">
            <h1  class="title">房价走势</h1>
        </div>
        <ul  class="data-box">
            <li  class="lastweek">
                <p  class="type-name">
                    <font  class="font39" v-text="'上周'+this.goodlist.AreaName+'均价'"></font>
                    <span  class="data-tag bggreen">
                        <i  class="icon"></i>
                        <font  class="number">0%</font>
                    </span>
                </p>
                <p  class="numberbottom">
                    <font  class="font120blue" v-text="this.goodlist.HaAveragePrice"></font>
                    <font  class="unit">元/m²</font>
                </p>
            </li>
        </ul>
    </section>
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
.housing-price{
    background: #fff;
    margin-bottom: 10.417px;
    padding: 14.236px 0 22.569px;
    .title-box {
        align-items: center;
        display: flex;
        margin-bottom: 20.384px;
        .title{
            color: #333;
            font-size: 21px;
            font-weight: 700;
            height: 27.766px;
            line-height: 27.766px;
            margin: 0;
            padding-left: 13.889px;
        }
    }
    .data-box{
        align-items: center;
        display: flex;
        padding: 0 13.889px;
        .lastweek{
            flex: 1;
            padding-left:12.153px;
            .type-name{
                align-items: center;
                display: flex;
                margin-bottom: 10.417px;
                .font39{
                    color: #666;
                    font-size: 11.11125‬px;
                    margin-right: .03704rem;
                }
                .bggreen{
                    box-sizing: border-box;
                    color: #1bbd1b;
                }
                .data-tag{
                    align-items: center;
                    background: #fff;
                    border-radius: 2.1px;
                    display: flex;
                    line-height: normal;
                    margin-left:6.25px;
                    min-width: 41.67px;
                    overflow: hidden;
                    padding: 2.778px 3.819px;
                    text-align: center;
                    .icon{
                        background-image: url('../../public/img/down.png');
                        background-size: 100% 100%;
                        display: inline-block;
                        height: 9.719px;
                        margin-right: 2.430px;
                        width: 6.983px;
                    }
                    .number{
                        font-size: 12.5px;
                        line-height: normal;
                    }
                }
            }
            .numberbottom{
                display: table-cell;
                line-height: normal;
                vertical-align: text-bottom;
                .font120blue{
                    color: #1a4165;
                    font-size: 24.3px;
                    font-weight: 700;
                    line-height: normal;
                }
                .unit{
                    color: #666;
                    line-height: normal;
                }
            }
        }
    }
}
</style>