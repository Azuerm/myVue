<script setup>
import { useCounterStore } from '@/store/counter'
const counterStore = useCounterStore()
</script>

<template>
  <div>
    我是Son2.vue - {{ counterStore.count }} - <button @click="counterStore.subCount">-</button>
  </div>
</template>

<style scoped></style>