<template>
    <ul class="welfare-content">
        <li class="flex">
            <font class="name">福利</font>
            <ul class="welfare-list">
                <li class="welfare-item">
                    <span  class="tag">超人福利</span>
                    <p class="welfare-text">一键登陆，钜惠福利等着你</p>
                    <i  class="right-icon"></i>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style lang='scss' scoped>
.welfare-content{
    background: #fff;
    margin-bottom: 10.417px;
    padding: 16.320px 0 16.666px 13.889px;
    .flex{
        display: flex;
        .name{
            color: #666;
            font-size: 14.583375px;
            line-height: normal;
            margin-right: 14.931px;
        }
        .welfare-list{
            flex: 1;
            overflow: hidden;
            .welfare-item{
                align-items: center;
                display: flex;
                margin-bottom: 5.208px;
                position: relative;
                .tag{
                    background: #feeeee;
                    border-radius: 8px;
                    color: #f35454;
                    font-size: 9.375px;
                    line-height: normal;
                    margin-right: 8.681px;
                    padding: 3.472px 4.861px;
                }
                .welfare-text{
                    color: #333;
                    flex: 1;
                    font-size: 14px;
                    margin-right: 50px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .right-icon{
                    background-image: url('../../public/img/qingjin.png');
                    background-position: 50%;
                    background-repeat: no-repeat;
                    background-size: 8.6805px 14.23px;
                    display: block;
                    height: 21.516px;
                    position: absolute;
                    right: 5.208px;
                    top: 0;
                    width: 21.516px;
                }
            }
        }
    }
}
</style>