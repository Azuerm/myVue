<template>
    <div>
        <input v-model="msg1" type="text"> <br><br>
        <!-- 模版中获取事件的形参 -> $event 获得 -->
        <input :value="msg2" @input="msg2 = $event.target.value" type="text"> <br><br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg1: '',
            msg2: ''
        }
    }
}
</script>

<style>

</style>