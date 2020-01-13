<template>
    <ul>
        <li>
            <span>规划</span>
            <p>羡慕！东莞这5镇区身价又要涨了！又一批更新单元划定方案获批…</p>
        </li>
        <li>
            <span>热点</span>
            <p>价格有洼地 东莞客前往惠州置业！</p>
        </li>
        <li>
            <span>热点</span>
            <p>价格有洼地 东莞客前往惠州置业！</p>
        </li>
        <li>
            <span>热点</span>
            <p>价格有洼地 东莞客前往惠州置业！</p>
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style lang='scss' scoped>
ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    margin: 0 .36111rem;
    li{
        align-items: center;
        display: flex;
        margin: .22222rem 0;
        span{
            border: 1px solid rgba(254,153,20,.3);
            border-radius: .05556rem;
            box-sizing: border-box;
            color: #fe9914;
            display: block;
            font-size: .27778rem;
            line-height: normal;
            margin-right: .15741rem;
            padding: .06481rem 0;
            position: relative;
            text-align: center;
            width: 1.52778rem;
        }
        p{
            color: #333;
            flex: 1;
            font-size: .37037rem;
            max-width: 285px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>