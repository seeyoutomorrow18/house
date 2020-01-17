<template>
    <div class="g-window">
        <div class="m-container">
            <div class="header-box">
                <div class="setting-icon">
                    <van-icon name="chat-o" />  
                </div>
                <div class="message-icon"  @click="$router.push('/set')">
                    <van-icon name="setting-o" />
                </div>
                
            </div>

            <main class="mainbg">
                <div class="bluebg">
                    <div class="userimgbox">
                        <img src="http://www.apyfc.com/assets/img/default/img_head_big.png" alt="">
                        <div class="name">{{text}}</div>
                    </div>
                </div>
                <ul class="mine-nav-box">
                    <li>
                        <img src="../../public/img/mine1.png" alt="">
                        <h1>房产消息</h1>
                    </li>
                    <li>
                        <img src="../../public/img/mine2.png" alt="">
                        <h1>优惠券</h1>
                    </li>
                    <li @click="$router.push('/collect')">
                        <img src="../../public/img/mine3.png" alt="">
                        <h1>我的收藏</h1>
                    </li>
                    <li >
                        <img src="../../public/img/mine4.png" alt="">
                        <h1>我的报备</h1>
                    </li>
                    <li>
                        <img src="../../public/img/mine5.png" alt="">
                        <h1>我的互动</h1>
                    </li>
                </ul>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            text:''
        }
    },
   
   created(){
       this.text = localStorage.getItem('username')
       console.log(this.text)
   }
}
</script>

<style lang="scss" scoped>
    .g-window{
        height:100% ;
        .m-container{
            .header-box{
                height: 45.83px;
                background: #3F9EF7;
                .setting-icon{
                    float: right;
                    width: 45.83px;
                    height: 45.83px;
                    .van-icon-chat-o{
                        color: #fff;
                        opacity: .3;
                        width: 30px;
                        height: 30px;
                        font-size: 23px;
                        margin-top: 10px;
                        float: right;
                    }
                }
                .message-icon{
                    float: right;
                    width: 40.83px;
                    height: 45.83px;
                    margin-right: 5px;
                    .van-icon-setting-o{
                        color: #fff;
                        opacity: .8;
                        width: 20px;
                        height: 30px;
                        font-size: 23px;
                         margin-top: 10px;
                         float: right;
                    }
                }
            }
            .mainbg{
                .bluebg{
                    background: #3F9EF7;
                    height: 135.48px;
                   
                    .userimgbox{
                        padding: 7px 0 0 27px;
                        height: 55px;
                        img{
                            width: 48.25px;
                            height: 48.25px;
                            margin-right: 16px;
                            border-radius: 50%;
                            float: left;
                        }
                        .name{
                            float: left;
                            line-height: 55px;
                            font-size: 15.6px;
                        }
                    }
                    
                }
                .mine-nav-box{
                        width: 100%;
                        height: 91px;
                        display: flex ;
                        justify-items: center;
                        align-items: center;
                        li{
                            float: left;
                            height: 56px;
                            width: 20%;
                            text-align: center;
                            img{
                                width: 31.23px;
                                height: 31.23px;
                            }

                            h1{
                                margin-top: 7px;
                            }
                        }
                    }
            }
        }
    }
</style>