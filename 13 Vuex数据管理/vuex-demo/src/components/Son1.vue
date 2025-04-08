<template>
 <div class="box">
    <h1>Son1 子组件</h1>
    从vuex中获取的值：<label></label>
    <br>
    <button>值 + 1</button>
 </div>
</template>
<script>
export default {
  name: 'Son1Com',
  data () {
    return {
    }
  },
  methods: {}
}
</script>
<style scoped lang="css">
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
