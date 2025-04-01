<template>
 <div class="app">
    <!-- 是否在编辑状态 -->
    <div v-if="isShowEdit">
        <input type="text" v-model="editValue" ref="inp">
        <button>确定</button>
    </div>
    <!-- 默认状态 -->
    <div v-else>
        <span>{{ title }}</span>
        <button @click="handleEdit">编辑</button>
    </div>
 </div>
</template>
 
<script>
export default {
  name: 'vueName',
  data () {
    return {
        isShowEdit: false,
        title: '大标题',
        editValue: ''
    }
  },
  methods: {
        handleEdit() {
            // 1.显示输入框（异步dom更新）
            this.isShowEdit = true
            // 2.让输入框获取焦点 （$nextTick等dom更新完，立即执行准备的函数体）
            // console.log(this.$refs.inp) //  undefined
            // // 因为vue异步更新dom
            // this.$refs.inp.focus()

            this.$nextTick( () => {
                console.log(this.$refs.inp)
                this.$refs.inp.focus()
            })

            // setTimeout( () => {
            //     this.$refs.inp.focus()
            // },1000)
        }
    }
}
</script>
 
<style scoped lang="less">
</style>