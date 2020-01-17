<template>
    <div  class="bottom_nav">
        <ul  class="flex-nav">
            <li  class="bottom-nav-item">
                <img  src="../../public/img/star.png">
                <font >收藏</font>
            </li>
            <li  class="bottom-nav-item">
                <img  src="../../public/img/phone.png">
                <font >客服咨询</font>
            </li>
            <li  class="bottom-nav-baobei">立即推荐</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang='scss' scoped>
.bottom_nav {
    background: #fff;
    border-top: 1px solid #f6f6f6;
    box-sizing: border-box;
    height: 50.375px;
    width: 100%;
    .flex-nav{
        align-items: center;
        display: flex;
        height: 100%;
       .bottom-nav-item {
            color: #333;
            text-align: center;
            width: 63.351px;
            img{
                display: block;
                height: 20.828px;
                margin: 0 auto;
                width: 20.828px;
            }
        }
        .bottom-nav-baobei {
            background: #3f9ef7;
            color: #fff;
            flex: 1;
            font-size: 17.774px;
            height: 100%;
            line-height: 51.375px;
            text-align: center;
        }
    }
    
}
</style>