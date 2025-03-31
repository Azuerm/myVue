<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @del="handleDel"></TodoMain>
    <TodoFooter :list="list" @clear="handleClear"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  data () {
    return {
        list: JSON.parse(localStorage.getItem('list')) || [
            {id:1,name:'跑步'},
            {id:2,name:'洗澡睡觉'},
            {id:3,name:'天天开心'},
            {id:4,name:'跳绳'}
        ]
    }
  },
  methods: {
    handleAdd(todoName) {
        console.log(todoName)
        this.list.unshift({id: +new Date(), name: todoName})
    },
    handleDel(id) {
        this.list = this.list.filter( item => item.id !== id)
    },
    handleClear() {
        this.list =[]
    }
  },
  watch: {
    list: {
        deep:true,
        handler(newValue) {
            localStorage.setItem('list',JSON.stringify(newValue))
        }
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  }
}
</script>

<style>

</style>
