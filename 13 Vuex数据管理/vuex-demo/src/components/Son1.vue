<template>
 <div class="box">
    <h1>Son1 子组件</h1>
    从vuex中获取的值：<label>{{ $store.state.count }}</label>
    <br>
    <button @click="handleAdd">值 + 1</button>
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
    handleAdd () {
      // 错误代码(vue默认不会监测，监测需要成本)
      // this.$store.state.count++
      // console.log(this.$store.state.count)
      // 通过mutations核心概念，进行修改数据
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
