import Vue from 'vue'
import App from './App.vue'
import { Swipe, SwipeItem } from 'vant';


Vue.use(Swipe).use(SwipeItem)
/* 引入vant样式 */
 import '../node_modules/vant/lib/index.css';
import './css/base.css'

/* 引入rem布局有效 */
import 'lib-flexible/flexible'

/* 解决移动端延迟问题 */
import FastClick from 'fastclick'
FastClick.attach(document.body) ;

/* 引入axios */
import axios from 'axios'
Vue.prototype.$axios =  axios;  
Vue.config.productionTip = false

/* 导出路由 */
import router from './router'
new Vue({
  router,
  render: h => h(App),
  created() {
    console.log(router)
  },
}).$mount('#app')
