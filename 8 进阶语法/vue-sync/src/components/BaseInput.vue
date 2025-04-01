<template>
    <div>
        姓名：
        <input type="text" :value="nameValue">
        <button @click="change">清除名字</button>
    </div>
</template>

<script>
export default {
    props: {
        nameValue: String
    },
    methods: {
        change() {
            this.$emit('update:nameValue', '')
        }
    }
}
</script>

<style>

</style>