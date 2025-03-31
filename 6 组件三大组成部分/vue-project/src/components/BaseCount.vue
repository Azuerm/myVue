<template>
    <div class="base-count">
        <button @click="count--" :disabled="count <= 1 ">-</button>
        <span>{{ count }}</span>
        <button @click="count++">+</button>
    </div>
</template>

<script>
export default {
    // data选项必须是一个函数 -> 保证每一个组件实例，维护独立的一份数据对象
    data() {
        console.log('data函数执行了')
        return {
            count: 2
        }
        // 每次执行都得到了一份独立的数据对象
    }
}
</script>

<style scoped>
.base-count {
    margin: 20px;
}
span {
    margin: 20px;
}
</style>