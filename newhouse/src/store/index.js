import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex' ;

// 使用store
Vue.use(Vuex) 

import cart from './cart'
import cmmon from './cmmon'

// 实例化一个store
let store = new Vuex.Store({
    modules:{
        cart,
        cmmon
    }
})

// 把store导出并注册Vue实例
export default store
