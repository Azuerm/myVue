<template>
    <div class="App">
        <!-- 我是结构 -->
        <!-- vue2中有且只有一个根元素 -->
         <div class="box" @click="fn"></div>
    </div>
</template>

<script>
    // 导出的是当前组件的配置项
    // 里面可以提供 data(特殊)、methods、computed、watch、生命周期八大钩子
    export default {
        created () {
            console.log('我是created')
        },
        methods: {
            fn () {
                alert('你好')
            }
        }
    }
</script>


<style lang="less">
    /* 让组件支持less */
    /* （1） style标签，lang="less" 开启less功能 ,ctrl+c 停止服务
    // （2）装包： yarn add less less-loader -D(开发依赖) */
.App {
    width: 400px;
    height: 400px;
    background-color: pink;
}
.App .box {
    width: 100px;
    height: 100px;
    background-color: skyblue;
}
</style>