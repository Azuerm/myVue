// 这里存放的是 vuex相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'
// 插件安装
Vue.use(Vuex)
// 创建仓库（空仓库）
const store = new Vuex.Store({
  // 严格模式(有利于初学者，检测不规范的代码 => 上线时需要关闭)
  strict: true,
  // 1.通过state可以提供数据 -> 所有组件共享的数据（类似于vue组件中的data；data是自己的组件，state是组件共享的数据）
  state: {
    title: '仓库大标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 2.通过 mutations 可以提供修改数据的方法
  mutations: {
    // 所有mutation函数，第一个参数，都是 state
    // 注意：mutation参数有且只能有一个，如果需要多个参数，包装成一个对象或者数组
    addCount (state, obj) {
      console.log(obj)
      // 修改数据
      state.count += obj.count
    },
    subCount (state, n) {
      state.count -= n
    },
    changeCount (state, newCount) {
      state.count = newCount
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    }
  },
  // 3.actions 处理异步,注意：不能直接操作state，操作state还是需要commit mutation
  actions: {
    // context 上下文(此处未分模块，可以当成store仓库)
    // context.commit('mutation名字', 额外参数)
    changeCountAction (context, num) {
      // 这里是setTimeout模拟异步，以后大部分场景是发请求
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  // 4.getters 类似于计算属性computed；只能设置，不能修改，修改需要通过mutations
  getters: {
    // 1.形参第一个参数就是 state
    // 2.必须有返回值，返回值就是getters的值
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },
  // 5.模块
  modules: {
    user,
    setting
  }
})
// 导出给main.js使用
export default store
