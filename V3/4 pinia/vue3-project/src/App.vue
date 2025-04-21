<script setup>
import { storeToRefs } from 'pinia'
import Son1Com from './components/Son1Com.vue'
import Son2Com from './components/Son2Com.vue'
import { useCounterStore } from '@/store/counter'
import {useChannelStore} from '@/store/channel'
const counterStore = useCounterStore()  // 不能直接解构，会丢失数据的响应式
const channelStore = useChannelStore()

// 此时，直接解构，不处理，数据会丢失响应式
const {count, msg} = storeToRefs(counterStore)
const { channelList } = storeToRefs(channelStore)
// 方法
const { getList } = channelStore
</script>

<template>
  <div>
    <h3>App.vue根组件 - {{ count }} - {{ msg }}</h3>
    <Son1Com></Son1Com>
    <Son2Com></Son2Com>
    <hr>
    <button @click="getList">获取频道的数据</button>
    <ul>
      <li v-for="item in channelList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
