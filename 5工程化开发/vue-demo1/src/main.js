// 文件核心作用：导入App.vue,基于App.vue创建结构渲染index.html

// 1. 导入核心包 vue
import Vue from 'vue'

// 2.导入 App.vue 根组件
import App from './App.vue'

// 提示：当前处于什么环境 （生成环境/开发环境）
Vue.config.productionTip = false

// 3. Vue实例化，提供render方法 -> 作用：基于App.vue 创建结构 渲染index.html
new Vue({
    // el:'#app', 作用：和.$mount('选择器')作用一致，用于指定vue所管理的容器
    // render: h => h(App),
    // 相当于
    render: (createElement) => {
        // 基于App创建元素结构
        return createElement(App)
    }
}).$mount('#app')
