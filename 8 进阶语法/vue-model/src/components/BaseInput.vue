<template>
    <div>
        <input type="text" :value="value" @input="handleChange">
    </div>
</template>

<script>
export default {
    props:{
        value: String
    },
    methods: {
        handleChange (e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style scoped>
div {
    margin: 30px;
    width: 200px;
    height: 30px;
    background-color: pink;
}
</style>