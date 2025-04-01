<template>
    <div>
        <!-- <BaseSelect
        :cityId="selectId" 
        @changeId="selectId = $event"></BaseSelect> -->
        
        <!-- v-model -> :value + @input -->
        <BaseSelect
        v-model="selectId" ></BaseSelect>
        <BaseInput v-model="inputValue"></BaseInput>
    </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
import BaseInput from './components/BaseInput.vue'
export default {
    data() {
        return {
            selectId: '102',
            inputValue: '小黑'
        }
    },
    components: {
        BaseSelect,
        BaseInput
    }
}
</script>

<style>

</style>