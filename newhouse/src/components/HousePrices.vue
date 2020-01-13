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
    margin-bottom: .80556rem;
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
                    font-size: .2963rem;
                    margin-right: .03704rem;
                }
                span{
                    color: #f35454;
                }
                .data-tage{
                    background: #fff;
                    border-radius: .05556rem;
                    line-height: normal;
                    margin-left: .16667rem;
                    min-width: 1.11111rem;
                    overflow: hidden;
                    padding: .07407rem .10185rem;
                    text-align: center;
                    i{
                        background-image: url('../../public/img/up.png');
                        background-size: 100% 100%;
                    }
                    .icon-up{
                        display: inline-block;
                        height: .24074rem;
                        margin-right: .06481rem;
                        width: .22222rem;
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

