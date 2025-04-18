<script setup>
// 1.reactive：接收一个对象类型的数据，返回一个响应式的对象
// import {reactive} from 'vue'
// const state = reactive({
//   count: 100
// })
// const setCount = () => {
//   state.count++
// }
// 2.ref：接收简单类型 或 复杂类型，返回一个响应式的对象
//    本质：是在原有传入数据的基础上，外层包了一层对象，包成了复杂数据类型
//    底层，包成复杂类型之后，在借助reactive实现的响应式
//    注意点：1.在脚本script中访问数据，需要通过 .value 
//    2.在template中，.value不需要加(帮我们扒了一层)
import { ref } from 'vue'
const count = ref(0)
console.log(count.value)
const setCount = () => {
  count.value++
}
</script>
<template>
 <div class="">
  {{ count}}
  <button @click="setCount">+1</button>
 </div>
</template>
 
<style scoped lang="less">
</style>