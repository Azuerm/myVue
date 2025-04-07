import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Search from '@/views/SearchPage.vue'
import NotFound from '@/views/NotFound.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    // 一旦求换成history模式，地址栏就没有#，需要后台配置访问规则
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {name: 'search', path: '/search/:words?', component: Search},
        {path: '*', component: NotFound}
    ]
})

export default router