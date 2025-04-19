<script setup>
import { inject } from 'vue'
const themeColor = inject('theme-color')
const count = inject('count')
const changeCount = inject('changeCount')
const clickFn = () => {
  changeCount(1000)
}
</script> 
<template>
 <div class="">
  <h2>我是底层组件 -- {{ themeColor }} -- {{ count }}</h2>
  <button @click="clickFn">更新count</button>
 </div>
</template>
 
<style scoped lang="less">
</style>