<script setup>
import testCom from './components/test-com.vue'
import { onMounted, ref } from 'vue';
// 模版引用(可以获取dom，也可以获取组件)
// 1.调用ref函数，生成一个ref对象
// 2.通过ref标识，进行绑定
// 3.通过ref对象.value 即可访问到绑定的元素(必须渲染完成后，才能拿到)
const inp = ref(null)
// 生命周期钩子 onMounted
// onMounted(() => {
//   console.log(inp.value)
//   inp.value.focus()
// })
const clickFn = () => {
  inp.value.focus()
}
// ---------------
const testRef = ref(null)
const getCom = () => {
  console.log(testRef.value)
  console.log(testRef.value.count)
  testRef.value.sayHi()
}
</script>
<template>
  <div class="">
    <input ref="inp" type="text">
    <button @click="clickFn">点击让输入框聚焦</button>
  </div>
  <testCom  ref="testRef"></testCom>
  <button @click="getCom">获取组件</button>
</template>

<style scoped lang="less"></style>