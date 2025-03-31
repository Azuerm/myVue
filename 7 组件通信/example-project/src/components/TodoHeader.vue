<template>
    <div class="todo-header">
         <!-- 输入框 -->
        <header class="header">
            <h1>小黑记事本</h1>
            <input @keyup.enter="handleAdd" placeholder="请输入任务" class="new-todo" v-model="todoName" />
            <button class="add"  @click="handleAdd">添加任务</button>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoName: ''
        }
    },
    methods: {
        handleAdd() {
            // console.log(this.todoName)
            if (this.todoName.trim() === '') {
                alert('任务名称不能为空')
                return
            }
            this.$emit('add', this.todoName)
            this.todoName = ''
        }
    }
}
</script>

<style scoped>
.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo {
  padding: 16px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>