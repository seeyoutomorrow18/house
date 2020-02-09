import axios from "axios"

export default {
    state:{
        cartlist:'',
        selectcar:false
    },
   
    mutations:{
        /* calking(state){
            this.selectcar = state.cartlist.every(ele=>ele.status=='1')
            console.log(this.selectcar,'全选按钮在vuex是否可行')

        }, */
        /* 首次渲染数据 */
        affixion(state,data){
            state.cartlist = data
        },
        /* 是否选中 */
        revamp(state,target){
            let { GoodsCode,status } =target
            state.cartlist.forEach(element => {
                if(element.GoodsCode == GoodsCode){
                    element.status = status  
                }
            });
        },
        /* 删除 */
        droplist(state){
            state.cartlist = state.cartlist.filter(ele=>ele.status==false)
        },
        /* 勾选 */
        ticked1(state){
            state.cartlist.forEach(ele=>ele.status = '1')
        },
        /* 不勾选 */
        ticked2(state){
            state.cartlist.forEach(ele=>ele.status = '0')
        },
        /* 添加 */
        group(state,data){
            console.log(data)
            state.cartlist.push(data)
        }
    },
    actions:{
        /* 首次渲染发送请求 */
        async render(context){
            let {data} = await axios.get('http://localhost:3000/goods/carlist')
            context.commit('affixion',data)
        },
        /* 修改状态 */
        modification(context,target){
            let { GoodsCode,status } =target 
            axios.put('http://localhost:3000/goods/carlist',{
                GoodsCode,status
            })
            context.commit('revamp',target)
        },
        /* 删除请求 */
        expurgate(context,data){
            console.log(data)
            axios.delete('http://localhost:3000/goods/carlist',{data:data})
            context.commit('droplist')
        },
        /* 全选11 */
        deselectall(context,data){
            axios.put('http://localhost:3000/goods/select',data)
            context.commit('ticked1')
        },
        /* 全选22 */
        deselectall1(context,data){
            axios.put('http://localhost:3000/goods/select1',data)
            context.commit('ticked2')
        },
        /* 添加收藏 */
        addition(context,data){
            console.log('添加',data)
            axios.post('http://localhost:3000/goods/carlist',data)
            context.commit('group',data)
        }
    }
}