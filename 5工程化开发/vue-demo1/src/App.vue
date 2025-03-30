<template>
    <div class="App">
        <!-- 头部组件 -->
        <MyHeader></MyHeader>
        <!-- 主体组件 -->
        <MyMain></MyMain>
        <!-- 底部组件 -->
        <MyFoot></MyFoot>
        <!-- 如果 M有Foot + tab 出不来 -> 需要配置vscode -> 设置中搜索trigger on tab -->
    </div>
</template>

<script>
// 导入需要注册的文件
// import 组件对象 from 'vue路径'
import MyHeader from './components/MyHeader.vue'
import MyMain from './components/MyMain.vue'
import MyFoot from './components/MyFoot.vue'
export default {
    // 局部注册
    components: {
        // '组件名': '组件对象'
        MyHeader: MyHeader,
        MyMain,
        MyFoot
    }
}
</script>

<style>
.App {
    width: 600px;
    height: 700px;
    background-color: skyblue;
    margin: 0 auto;
    padding: 20px;
}
</style>