<template>
    <div style="border: 3px solid #000; margin: 10px;">
        我是OneSon组件
        <!-- 3.渲染使用 -->
         {{ title }}
        
        <button @click="changeFn">修改title</button>
    </div>
</template>

<script>
export default {
    // 2.通过props进行接受
    props: ['title'],
    methods: {
        changeFn() {
            // 2.1 通过 $emit，向父组件发送消息通知
            this.$emit('changeTitle','小黄哈哈哈哈哈')
        }
    }

}
</script>

<style>

</style>