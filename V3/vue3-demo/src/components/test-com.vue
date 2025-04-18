<script setup>
const count = 999
const sayHi = () => {
  console.log('你好')
}
defineExpose({
  count,
  sayHi
})
</script>

<template>
  <div>
    我是用于测试的组件 -- {{ count }}
  </div>
</template>