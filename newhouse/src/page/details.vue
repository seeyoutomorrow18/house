<template> 
<div>
    <WidenTop v-slot:title>嘉霖·深湾1号</WidenTop>
    <Main></Main>
</div>
</template>

<script>
import WidenTop from '../components/details-WIden'
import Main from '../components/details-main'


export default {
    components:{
        WidenTop,
        Main
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
</style>