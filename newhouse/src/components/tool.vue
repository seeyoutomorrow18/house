<template>
    <div class="tool-nav-content">
        <ul>
            <li>
                <img src="../../public/img/buy.png" alt="">
                <h2>房贷计算</h2>
            </li>
            <li>
                <img src="../../public/img/buy1.png" alt="">
                <h2>购房资格</h2>
            </li>
            <li>
                <img src="../../public/img/buy2.png" alt="">
                <h2>购房知识</h2>
            </li>
            <li>
                <img src="../../public/img/buy3.png" alt="">
                <h2>购房参谋</h2>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang='scss' scoped>
.tool-nav-content{
    height: 50.689px;
    padding-bottom: .31481rem;
    width: 100%;
    padding:0 13.542px;
    ul{
        display: flex;
        height: 100%;
        justify-content: space-around;
        width: 100%;
        li{
            flex: 1;
            img{
                display: block;
                height: .55556rem;
                margin: 0 auto;
                width: .55556rem;
            }
            h2{
                color: #333;
                font-size: .33333rem;
                font-weight: 540;
                height: .7963rem;
                line-height: .7963rem;
                text-align: center;
            }
        }
    }
}
</style>