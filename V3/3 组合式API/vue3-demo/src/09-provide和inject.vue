<script setup>
import centerCom from '@/components/center-com.vue'
import { provide } from 'vue';
import { ref } from 'vue';
// 1.跨层传递普通数据
provide('theme-color', 'pink')
// 2.跨层传递响应式数据
const count = ref(100)
provide('count', count)
setTimeout(() => {
  count.value = 500
}, 2000)
// 3.跨层传递函数 => 给子孙后代传递可以修改数据的方法
provide('changeCount', (newCount) => {
  count.value = newCount
})
</script>

<template>
 <div class="">
  <h1>我是顶层组件</h1>
  <centerCom></centerCom>
 </div>
</template>
  
<style scoped lang="less">
</style>