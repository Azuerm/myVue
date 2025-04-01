<template>
    <div class="app">
        <button class="logout" @click="isShow = true">退出按钮</button>
        <!-- :visible.sync 等价于  :visible + @update:visible -->
        <BaseDialog :visible.sync="isShow"></BaseDialog>
        <BaseInput :nameValue.sync="nameValue"></BaseInput>
    </div>
</template>

<script>
import BaseDialog from './components/BaseDialog.vue'
import BaseInput from './components/BaseInput.vue'
export default {
    data() {
        return {
            isShow: false,
            nameValue:'小红'
        }
    },
    components:{
        BaseDialog,
        BaseInput
    }
}
</script>

<style>

</style>