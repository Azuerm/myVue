<template>
    <div class="baseA">
        我是组件C- 接收方
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
    created() {

        Bus.$on('sendMsg', (msg) => {
            // console.log(msg)
            this.msg = msg
            
        })
    },
    data() {
        return {
            msg:''
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
    background-color: pink;
}
</style>