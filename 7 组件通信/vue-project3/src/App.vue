<template>
    <div class="app">
        我是App组件 <button @click="change">修改数据</button>
        <SonA></SonA>
        <SonB></SonB>
    </div>

</template>

<script>
import SonA from './components/SonA.vue'
import SonB from './components/SonB.vue'
export default {
    // 1.父组件provide提供数据
    provide() {
        return {
            color: this.color,
            userInfo: this.userInfo
        }
    },
    data () {
        return {
            color:'pink',   // 简单类型 - 非响应式
            userInfo: {  // 复杂类型-响应式-推荐
                name:' 小黑',
                age:18
            }
        }
    },
    methods: {
        change() {
            this.color = 'pinkhot'
            this.userInfo.name = '李四'
        }
    },
    components: {
        SonA,
        SonB
    }
}
</script>

<style>
.app {
    text-align: center;
    font-size: 20px;
    width: 600px;
    height: 600px;
    border: 2px solid red;
}
</style>