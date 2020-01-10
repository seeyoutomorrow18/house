import Vue from 'vue'

/* 引入路由模块 */
import  VueRouter from 'vue-router'
Vue.use(VueRouter)

/* 引入模块 */
import Home from '../page/Home.vue'
import Map from '../page/Map.vue'
import Widen from '../page/Widen.vue'
import Mine from '../page/Mine.vue'


/* 配置参数设置 */
const router = new VueRouter({
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path:'/',
            redirect:'/home'
        },
        {
            name:'map',
            path:'/map',
            component:Map
        },
        {
            name:'widen',
            path:'/widen',
            component:Widen
        },
        {
            name:'mine',
            path:'/mine',
            component:Mine
        },
    ]
})

export default router