<template>
 <div>
    <!-- 2.在使用组件时，在组件标签内填入内容 -->
    <MyDialog>
        <div>你确定要删除吗</div>
    </MyDialog>
    <MyDialog>你确认要退出吗</MyDialog>
 </div>
</template>
 
<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {
    }
  },
  methods: {},
  components: {
    MyDialog
  }
}
</script>
 
<style scoped >
body {
    background-color: #b3b3b3;
}
</style>