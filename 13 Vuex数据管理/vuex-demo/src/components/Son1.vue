<template>
 <div class="box">
    <h1>Son1 子组件</h1>
    从vuex中获取的值：<label>{{ $store.state.count }}</label>
    <br>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleAdd(10)">值 + 10</button>
    <button @click="changeTitle">改标题</button>
    <button @click="handleChange">一秒后修改成666</button>
    <hr>
    <div>{{ $store.state.list }}</div>
    <div>{{ $store.getters.filterList }}</div>
 </div>
</template>
<script>
export default {
  name: 'Son1Com',
  data () {
    return {
    }
  },
  methods: {
    handleAdd (n) {
      // 错误代码(vue默认不会监测，监测需要成本)
      // this.$store.state.count++
      // console.log(this.$store.state.count)
      // 通过mutations核心概念，进行修改数据
      // 需要提交调用mutations
      // this.$store.commit('addCount')
      // console.log(n)
      // 调用带参数的mutation函数
      this.$store.commit('addCount', {
        count: n,
        msg: '哈哈'
      })
    },
    changeTitle () {
      this.$store.commit('changeTitle', 'hhhhh')
    },
    handleChange () {
      // 调用action
      // this.$store.dispatch('action名字', 额外参数)
      this.$store.dispatch('changeCountAction', 666)
    }
  }
}
</script>
<style scoped lang="css">
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
