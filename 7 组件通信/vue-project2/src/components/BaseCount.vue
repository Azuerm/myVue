<template>
  <div class="base-count">
    <button @click="handleSub">-</button>
    <span>{{ count }}</span>
    <button @click="handleAdd">+</button>
  </div>
</template>

<script>
export default {
  // 1.自己的数据随便改 （谁的数据 谁负责）
//   data () {
//     return {
//       count: 100,
//     }
//   },
  // 2.prop传过来的数据（外部的数据）， 不能直接修改
  props: {
    count: Number
    // 报错，第三行和第五行在改count
  },
  methods: {
    handleSub() {
        // 子传父
        this.$emit('changeCount',this.count - 1)
    },
    handleAdd() {
        this.$emit('changeCount',this.count + 1)
    }
  }
 
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>