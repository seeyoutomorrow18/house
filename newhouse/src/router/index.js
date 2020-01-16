import Vue from 'vue'

/* 引入路由模块 */
import  VueRouter from 'vue-router'
Vue.use(VueRouter)

/* 引入axios */


/* 引入模块 */
import Home from '../page/Home.vue'
import Map from '../page/Map.vue'
import Widen from '../page/Widen.vue'
import Mine from '../page/Mine.vue'
import Set from '../page/Set.vue'
import Collect from '../page/Collect.vue'
import Login from '../page/Login.vue'
import Reg from '../page/Reg.vue'
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
            name:'details',
            path:'/details',
            component:Details,
          
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
            meta:{requiresAuth:true}
        },
        {
            name:'set',
            path:'/set',
            component:Set,
            meta:{
                requiresAuth:true,
                isok:true
            }
        },
        {
            name:'collect',
            path:'/collect',
            component:Collect,
            meta:{
                requiresAuth:true,
                isok:true
            }
        },
        {
            name:'login',
            path:'/login',
            component:Login,
            meta:{
                isok:true
            }
        },
        {
            name:'reg',
            path:'/reg',
            component:Reg,
            meta:{
                isok:true
            }
        },
    ]
})

// 全局路由守卫
router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth){
        // 获取token 
        let Authorization = localStorage.getItem('Authorization')
       
        if(Authorization){
            // 登录放行
            next()
            // 放松校正请求
            router.app.$axios.get('http://localhost:3000/verify',{
                headers:{
                    Authorization
                }
            }).then(({data})=>{
                
                if(data == false){
                    next({
                        path:'/login',
                        query:{
                            redirectUrl:to.fullPath
                        }
        
                    })
                }
            })


        }else{
            // 未登录跳转登录页
            console.log('路由拦截mime')
            //router.push('/login')
            next({
                path:'/login',
                query:{
                    redirectUrl:to.fullPath
                }

            })
        }
    }else{
        next()
    }
   
})


export default router