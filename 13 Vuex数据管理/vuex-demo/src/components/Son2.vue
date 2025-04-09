<template>
  <div class="box">
    <h1>Son2 子组件</h1>
    <!-- 从vuex中获取的值：<label>{{ $store.state.count }}</label> -->
    从vuex中获取的值：<label>{{ count }}</label>
    <br>
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
    <button @click="changeTitle('你好')">改标题</button>
    <button @click="changeCountAction(888)">一秒后改成888</button>
    <hr>
    <div> {{ filterList }} </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  data () {
    return {
    }
  },
  computed: {
    // mapState 和 mapGetters 都是映射属性
    ...mapState(['count']),
    ...mapGetters(['filterList'])
  },
  methods: {
    // mapMutations 和 mapActions都是映射方法
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapActions(['changeCountAction'])
  }
}
</script>
<style scoped lang="css">
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
