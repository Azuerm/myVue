<template>
    <div style="border: 3px solid #000; margin: 10px;">
        我是App组件
        <!-- 1.通过给组件标签，添加属性的方式，传值 -->
         <!-- 2.2 父组件对消息进行监听 -->
        <OneSon :title="myTitle" @changeTitle="handleChange"></OneSon>
    </div>
</template>
<script>
import OneSon from './components/OneSon.vue'
export default {
    data() {
        return {
            myTitle: '小张加油哈哈哈哈哈哈哈哈哈，喜欢'
        }
    },
    components: {
        OneSon: OneSon
    },
    methods: {
        // 2.3.提供处理函数,提供逻辑
        handleChange(newTitle) {
            console.log(newTitle)
            this.myTitle = newTitle
        }
    }
}
</script>

<style>

</style>