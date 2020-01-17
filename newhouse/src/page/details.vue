<template> 
<div >
    <WidenTop :goodlist='goodlist' v-slot:title></WidenTop>
    <Main :goodlist='goodlist'></Main>
    <Nav></Nav>
</div>
</template>

<script>
import WidenTop from '../components/details-WIden'
import Main from '../components/details-main'
import Nav from '../components/details-nav'

export default {

    data:function(){
        return {
            goodlist:'',
        }
        
    },
    components:{
        WidenTop,
        Main,
        Nav
    },
    async created(){
        console.log(this.$route.query.GoodsCode,'ssss');
       let {data} =await this.$axios.get('http://localhost:3000/goods/detail',{
           params:{
               GoodsCode:this.$route.query.GoodsCode
           }
        });
        this.goodlist=data[0]
        console.log(data ," adasdasd");
        
        
           

    }
}
</script>

<style scoped>
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
</style>