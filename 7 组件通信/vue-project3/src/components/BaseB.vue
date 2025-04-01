<template>
    <div class="baseB">
        我是组件B -发送方
        <p><button @click="clickSend">发送通知</button></p>
    </div>
</template>

<script>
import Bus from '@/utils/EventBus'
export default {
    methods: {
        clickSend() {
            // 3.B组件发送方，触发事件的方式传递参数（发布消息）
            Bus.$emit('sendMsg', '今日晴天，适合交流')
        }
    }
}
</script>

<style scoped>
div {
    width: 200px;
    height: 200px;
    border: 2px solid #000;
    text-align: center;
    font-size: 18px;
    margin: 20px;
}
</style>