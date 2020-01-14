<template>
    <div class="beforeList">
        <ul>
            <li>
                <div class="imgbox">
                    <img src="https://resource.apyfc.com/UploadImage/NewHouse/1/5002/2018/8/2018-08-28/201808281156259077791.png" lazy="loaded">
                    <span>推荐看房</span>
                </div>
                <div class="hosueinfo">
                    <p class="main_title">盛和雅胜</p>
                    <p class="area-content">
                        <span class="area_text">东莞市.横沥镇</span>
                        <span class="tagbox redbg">东莞东部快速干线</span>
                    </p>
                    <p class="adress-text">
                        <span>路网四通八达/</span>
                        <span>99-308㎡/</span>
                        <span>3-4房</span>
                    </p>
                    <p class="house-price">15500元/㎡</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang='scss' scoped>
.beforeList{
    padding: 0 .36111rem;
    ul{
        li{
            align-items: center;
            background: #fff;
            display: flex;
            padding: .35185rem 0;
            .imgbox {
                border-radius: .08333rem;
                height: 2.22222rem;
                margin-right: .37037rem;
                overflow: hidden;
                position: relative;
                width: 3.33333rem;
                img{
                    display: block;
                    height: 100%;
                    width: 100%;
                }
                span{
                    background: linear-gradient(270deg,#f25353,#f3886b);
                    border-radius: .08333rem 0 .08333rem 0;
                    color: #fff;
                    display: block;
                    font-size: .30556rem;
                    left: 0;
                    line-height: normal;
                    padding: .09259rem 0;
                    position: absolute;
                    text-align: center;
                    top: 0;
                    width: 1.57407rem;
                }
            }
            .hosueinfo{
                display: flex;
                flex: 1;
                flex-direction: column;
                height: 2.48148rem;
                justify-content: space-between;
                overflow: hidden;
                .main_title{
                    color: #333;
                    font-size: .41667rem;
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
                        font-size: .30556rem;
                        line-height: normal;
                        margin-right: .13889rem;
                    }
                    .redbg{
                        background: #f35454;
                        margin-right: .13889rem;
                    }
                    .tagbox{
                        border-radius: .05556rem;
                        color: #fff;
                        font-size: .27778rem;
                        line-height: normal;
                        padding: .05556rem .09259rem;
                    }
                }
                .adress-text{
                    color: #999;
                    font-size: .33333rem;
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