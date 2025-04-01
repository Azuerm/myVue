<template>
    <div class="baseA">
        我是SonA组件
        <GrandSon></GrandSon>
    </div>
</template>

<script>
import GrandSon from './GrandSon.vue'
export default{
    components: {
        GrandSon
    }
}
</script>

<style scoped>
div {
    width: 300px;
    height: 300px;
    border: 2px solid #000;
    text-align: center;
    font-size: 18px;
    margin: 20px;
}
</style>