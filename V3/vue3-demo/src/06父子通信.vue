<script setup>
// 父传子
// 1.给子组件，添加属性的方式传值
// 2.在子组件，通过props接收
// 子传父
// 1.在子组件内部，emit触发事件（编译器宏获取emit事件）
// 2.在父组件，通过 @ 箭头

// 局部组件(导入进来就能用)
import sonCom from './components/son-com.vue'
import { ref } from 'vue';
const money = ref(100)
const getMoney = () => {
  money.value += 10
}
const changeFn = (newMoney) => {
  money.value = newMoney
}
</script>
<template>
  <div class="">
    <h3>
      父组件 -- {{ money }}
      <button @click="getMoney">挣钱</button>
    </h3>
    <!-- 给子组件，添加属性的方式传值 -->
    <sonCom 
      car="宝马车" 
      :money="money" 
      @changeMoney="changeFn">
    </sonCom>
  </div>
</template>

<style scoped lang="less"></style>