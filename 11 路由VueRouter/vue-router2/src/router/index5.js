import Vue from 'vue'
import VueRouter from 'vue-router'

import Find from '@/views/Find.vue'
import Friend from '@/views/Friend.vue'
import My from '@/views/My.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {path:'/find', component: Find},
        {path:'/my', component: My},
        {path: '/friend',component: Friend}
    ],
    // link自定义高亮类名
    linkActiveClass: 'active', //模糊匹配的类名
    linkExactActiveClass: 'exact-active'  // 精确匹配的类名
})

export default router