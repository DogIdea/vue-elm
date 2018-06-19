// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import axios from 'axios';

import './common/stylus/index.styl';
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.prototype.$axios = axios;

const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
];
// 创建路由实例
const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active',
  scrollBehavior:() => ({
    y:0
  })
});
// 重定向代替原来的router.go
router.push('/goods');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
