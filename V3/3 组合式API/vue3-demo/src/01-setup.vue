<!-- <script>
// setup
// 1.执行时机，比beforeCreate还要早
// 2.setup函数中，获取不到this(this还是undefined)
// 3.数据和函数，需要在setup最后return，才能模版中应用
// 4.通过setup语法糖简化代码
  export default {
    setup () {
      // console.log('setup函数', this)  // undefined
      // 数据
      const message = 'hello Vue3'
      // 函数
      const logMessage = () => {
        console.log(message)
      }

      return {
        message,
        logMessage
      }
    },
    beforeCreate() {
      console.log('beforeCreate函数')
    }
  }
</script> -->
<script setup>
  const message = 'this is message'
  const logMessage = () => {
    console.log(message)
  }
</script>

<template>
 <div class="">
  {{ message }}
  <button @click="logMessage">按钮</button>
 </div>
</template>
 
<style scoped lang="less">
</style>