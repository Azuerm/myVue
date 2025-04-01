<template>
    <form action="">
        账号： <input type="text" v-model="account">
        <br>
        <br>
        密码： <input type="password" v-model="password">
    </form>
</template>
 
<script>
export default {
  data () {
    return {
        account:'',
        password:''
    }
  },
  methods: {
    // 方法1：收集表单元素，返回一个对象
    getValues() {
        return {
            account : this.account,
            password: this.password
        }
    },
    // 方法2：重置
    resultValue() {
        this.account = ''
        this.password = ''
    }
  }
}
</script>
 
<style scoped lang="less">
</style>