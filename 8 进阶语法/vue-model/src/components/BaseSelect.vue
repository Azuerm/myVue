<template>
    <div>
        <!-- :value="cityId" -->
        <select :value="value" @change="handelChange"> 
            <option value="101">北京</option>
            <option value="102">上海</option>
            <option value="103">武汉</option>
            <option value="104">深圳</option>
            <option value="105">广州</option>
        </select>
    </div>

</template>

<script>
export default{
    props: {
        // cityId: String
        value: String
    },
    methods: {
        handelChange(e) {
            // console.log(e.target.value)
            // this.$emit('changeId', e.target.value)
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style>

</style>