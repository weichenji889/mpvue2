import Vue from 'vue'
import App from './app'
// 设置 vue 提示功能关闭
Vue.config.productionTip = false;
//申明当前组件类型

App.mpType = 'app'  // 应用

const app = new Vue(App)

//挂载整个应用
app.$mount()
