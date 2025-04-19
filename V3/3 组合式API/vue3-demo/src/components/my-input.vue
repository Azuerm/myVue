<script setup>
// defineProps({
//   modelValue: String
// })
// const emit = defineEmits(['update:modelValue'])
import { defineModel } from 'vue'
// 相当于props接收参数
const modelValue = defineModel()
</script>

<template>
 <div class="">
  <!-- <input 
    type="text"
    :value="modelValue"
    @input="e => emit('update:modelValue', e.target.value)"
    > -->
  <input 
    type="text"
    :value="modelValue"
    @input="e => modelValue = e.target.value"
    >
 </div>
</template>
  
<style scoped lang="less">
</style>