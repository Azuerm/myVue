// 这里存放的是 vuex相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'
// 插件安装
Vue.use(Vuex)
// 创建仓库（空仓库）
const store = new Vuex.Store({
  // 严格模式(有利于初学者，检测不规范的代码 => 上线时需要关闭)
  strict: true,
  // 通过state可以提供数据 -> 所有组件共享的数据（类似于vue组件中的data；data是自己的组件，state是组件共享的数据）
  state: {
    title: '仓库大标题',
    count: 100
  }
})
// 导出给main.js使用
export default store
