/**
 * 启动前的加载，注入，实例化
 */

//拦截请求 使用 mockData提供的模拟接口数据
//为了提供虚拟数据 和mock.js一起使用(里面Mock 使用import 引入mock.js)
import Mock from './vendor/mock.js'
import MockData from './vendor/mock_data.js'

import Vue from 'vue' //引入
import Router from 'vue-router'
import VueResource  from 'vue-resource'
import FastClick from 'fastclick'
import Vum from './vendor/vum.js'

import VueBus from './vendor/vue-bus.js'

//加载组件
import Index from './contents/Index'

import ArrearsDetails from './contents/ArrearsDetails'
import OwnerPhone from './contents/OwnerPhone'
import QueryBuild from './contents/QueryBuild'
import RoomArrears from './contents/RoomArrears'

Vue.config.debug = true;
Vue.use(Router);
Vue.use(VueResource);
Vue.use(Vum);
Vue.use(VueBus);


//配置全局组件
//这是配置vue-resource 的请求

//发送PUT, PATCH, DELETE请求时以HTTP post的方式发送 并设置请求头 的X-HTTP-Method-Override
Vue.http.options.emulateHTTP = true;
//	将request body以application/x-www-form-urlencoded    content type发送
Vue.http.options.emulateJSON = true;
//表示跨域请求时是否需要使用凭证 （设置跨域）
Vue.http.options.credientials = false;

//创建根组件
let App = Vue.extend();
//创建路由
let router = new Router();
//路由映射
router.map({
    '/': {
        name: 'index',
        component: Index
    },
    '/arrearsDetails': {
        component: ArrearsDetails
    },
    '/ownerPhone': {
        component: OwnerPhone
    },
    '/queryBuild': {
        component: QueryBuild
    },
    '/roomArrears': {
        component: RoomArrears
    }
});
//启动路由
router.start(App, '#app');
Vum.router(router);

FastClick.attach(document.body);
