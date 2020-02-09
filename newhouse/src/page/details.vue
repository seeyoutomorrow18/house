<template> 
<div >
    <WidenTop :goodlist='goodlist' v-slot:title></WidenTop>
    <Main :goodlist='goodlist'></Main>
  
    <div  class="bottom_nav">
        <ul  class="flex-nav">
            <li  class="bottom-nav-item" @click="hite">
                <img v-if="!select" src="../../public/img/star.png">
                <img v-else src="../../public/img/xinxin.png">
                <font >收藏</font>
            </li>
            <li  class="bottom-nav-item">
                <img  src="../../public/img/phone.png">
                <font >客服咨询</font>
            </li>
            <li  class="bottom-nav-baobei">立即推荐</li>
            
        </ul>
    </div>

</div>
</template>

<script>
import WidenTop from '../components/details-WIden'
import Main from '../components/details-main'


export default {

    data:function(){
        return {
            goodlist:'',
            select:'false'
        }
        
    },
    components:{
        WidenTop,
        Main,
    },
    computed:{
        cartlist(){
            return this.$store.state.cart.cartlist
        },
       
        
    },
    methods:{
        locating(GoodsCode){
            return this.cartlist.some(item=>{
                return item.GoodsCode == GoodsCode
            })
        },
        hite(){
            this.select = !this.select 
            let { GoodsCode ,ImageUrl , GoodsEstate ,AreaFullname ,AveragePrice } = this.goodlist
            if(this.select && !this.locating(GoodsCode)){
                this.$store.dispatch('addition',{
                    GoodsCode ,ImageUrl , GoodsEstate ,AreaFullname ,AveragePrice ,status : "1"
                })
                
            }else{
               
                this.$store.dispatch('expurgate',{GoodsCode})
            }
           
        }
    },
    async created(){
       this.$store.dispatch('render')
       let {data} =await this.$axios.get('http://localhost:3000/goods/detail',{
           params:{
               GoodsCode:this.$route.query.GoodsCode
           }
        });
        this.goodlist=data[0]
        this.select = this.locating(this.$route.query.GoodsCode)
    }
}
</script>

<style lang="scss" scoped>
    .topheader{
    position: fixed;
    top:0;
    right: 0;
    left: 0;
}
.bottom_nav{
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
}

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