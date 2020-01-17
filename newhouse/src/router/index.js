import Vue from 'vue'

/* 引入路由模块 */
import  VueRouter from 'vue-router'
Vue.use(VueRouter)

/* 引入模块 */
import Home from '../page/Home.vue'
import Map from '../page/Map.vue'
import Widen from '../page/Widen.vue'
import Mine from '../page/Mine.vue'
import Set from '../page/Set.vue'
import Search from '../page/search.vue'
import Details from '../page/details.vue'
/* 配置参数设置 */
const router = new VueRouter({
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home,
          
        },
        {
            name:'searh',
            path:'/searh',
            component:Search,
            meta:{
                requiresAuth:true,
                isok:true
            }
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            name:'details',
            path:'/details',
            component:Details,
            meta:{
                requiresAuth:true,
                isok:true
            }
        },
        {
            name:'map',
            path:'/map',
            component:Map,
           
        },
        
        {
            name:'widen',
            path:'/widen',
            component:Widen,
          
        },
        {
            name:'mine',
            path:'/mine',
            component:Mine,
           
        },
        {
            name:'set',
            path:'/set',
            component:Set,
            meta:{requiresAuth:true}
        },
    ]
})

export default router