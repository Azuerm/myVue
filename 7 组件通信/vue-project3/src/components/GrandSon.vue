<template>
    <div class="son">
        我是GrandSon组件
       <p> {{ color }} - {{ userInfo.name }} - {{ userInfo.age }}</p>
    </div>
</template>

<script>
export default {
    // 2.子/孙组件inject取值使用
    inject: ['color','userInfo']
}
</script>

<style scoped>
.son{
    width: 150px;
    height: 150px;
    border: 2px solid #000;
    text-align: center;
    font-size: 18px;
    margin: 10px auto;
}
</style>