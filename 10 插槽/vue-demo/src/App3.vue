<template>
 <div>
    <MyDialog>
        <!-- 需要template标签 包裹需要分发的结构，包成一个整体 -->
        <template v-slot:head>
            <div>我是大标题</div>
        </template>
        <template v-slot:content>
            <div>我是内容</div>
        </template>
        <template #footer>
            <button>确定</button>
            <button>取消</button>
        </template>
    </MyDialog>
 </div>
</template>
 
<script>
import MyDialog from './components/MyTable4.vue'
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