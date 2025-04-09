import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      // 购物车数据 [{}]
      list: []
    }
  },
  // 只要要操作state里面的数据，就要在mutation里面
  mutations: {
    updateList (state, newList) {
      state.list = newList
    },
    updateCount (state, obj) {
      // 根据id找到对应的对象，更新count属性即可
      const goods = state.list.find(item => item.id === obj.id)
      goods.count = obj.newCount
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      context.commit('updateList', res.data)
    },
    async updateCountAsync (context, obj) {
      // // 将修改更新同步到后台服务器
      const res = await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount
      })
      // 将修改更新同步到 vuex
      context.commit('updateCount', {
        id: obj.id,
        newCount: obj.newCount
      })
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => {
        return sum + item.count
      }, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => {
        return sum + item.count * item.price
      }, 0)
    }
  }
}
