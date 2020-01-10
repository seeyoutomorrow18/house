import Vue from 'vue'
import App from './App.vue'

/* 引入vant样式 */
/* import 'vant/lib/index.css'; */

/* 引入rem布局有效 */
import 'lib-flexible/flexible'

/* 解决移动端延迟问题 */
import FastClick from 'fastclick'
FastClick.attach(document.body) ;

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
