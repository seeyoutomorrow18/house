<template>
    <div class="HousePrices">
        <ul>
            <li>
                <p class="type-name">
                    <font class="font39">上周全市成交量</font>
                    <span class="data-tage">
                        <i class="icon-up"></i>
                        <font class="num">19.61%</font>
                    </span>
                </p>
                <p class="numBottom">
                    <font class="font120red">
                        969
                    </font>
                    <font class="fontblack">套</font>
                </p>
            </li>
            <li class="border">
                <p class="type-name">
                    <font class="font39">上周全市成交量</font>
                    <span class="data-tage">
                        <i class="icon-up"></i>
                        <font class="num">4.74%</font>
                    </span>
                </p>
                <p class="numBottom">
                    <font class="font120blue">
                        23424
                    </font>
                    <font class="fontblack">元/m²</font>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.HousePrices{
    margin-bottom: 30.2px;
        ul{
        align-items: center;
        display: flex;
        padding: 0 13.889px;
        li{
            flex: 1;
            .type-name{
                align-items: center;
                display: flex;
                margin-bottom: 10.417px;
                .font39{
                    color: #666;
                    font-size:  12px;
                }
                span{
                    color: #f35454;
                }
                .data-tage{
                    background: #fff;
                    border-radius: 50%;
                    line-height: normal;
                    margin-left: 6.25px;
                    min-width: 41px;
                    overflow: hidden;
                    padding: 3px 4px;
                    text-align: center;
                    i{
                        background-image: url('../../public/img/up.png');
                        background-size: 100% 100%;
                    }
                    .icon-up{
                        display: inline-block;
                        height: 9px;
                        margin-right: 2.43px;
                        width: 8.33px;
                    }
                }
            }
            .numBottom{
                display: table-cell;
                line-height: normal;
                vertical-align: text-bottom;
                .font120red{
                    color: #f35454;
                    font-size: 36px;
                    font-weight: 700;
                    line-height: normal;
                }
                .font120blue{
                    color: #1a4165;
                    font-size: 36px;
                    font-weight: 700;
                    line-height: normal;
                }
                .fontblack{
                    color: #666;
                    line-height: normal;
                }
            }
        }
        .border{
        border-left: 1px solid #e1e1e1;
        box-sizing: border-box;
        padding-left: 27.778px;
        }
    }
}
</style>

