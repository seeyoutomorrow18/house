import Vue from 'vue'
import App from './App.vue'

/* 引入vant样式 */
/* import 'vant/lib/index.css'; */

import './css/base.css'

/* 引入rem布局有效 */
import 'lib-flexible/flexible'

/* 解决移动端延迟问题 */
import FastClick from 'fastclick'
FastClick.attach(document.body) ;

/* 引入axios */
import axios from 'axios'
Vue.prototype.$axios =  axios;  

/* 引入Vuex */
import store from './store'

Vue.config.productionTip = false

/* 导出路由 */
import router from './router'

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
   /*  console.log(store) */
  },
}).$mount('#app')
