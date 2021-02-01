// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口js： 创建Vue实例
// - 打包入口js文件，后期全部打包形成一个app.js在主页index.html中

import Vue from 'vue'
import App from './App'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { //将组件映射成标签
    App //App: App
  },
  template: '<App/>' //模板，最终会插入到el所匹配的页面中的div里
})
