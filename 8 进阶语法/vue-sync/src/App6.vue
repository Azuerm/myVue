<template>
    <div class="app" >
        <BaseFrom5 ref="baseFrom"></BaseFrom5>
        <button @click="handleGet">获取数据</button>
        <button @click="handleReset">重置数据</button>
    </div>
  </template>
  
  <script>
  import BaseFrom5 from './components/BaseFrom5.vue'
  export default {
    methods: {
        handleGet() {
            console.log(this.$refs.baseFrom.getValues())
            
        },
        handleReset() {
            this.$refs.baseFrom.resultValue()
        }
    },
    components: {
        BaseFrom5
    }
  }
  </script>
  
  <style>

  </style>