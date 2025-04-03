<template>
    <div class="">
        <div class="my-tag">
            <input v-if="isShow" :value="value" class="input" type="text" placeholder="输入标签" @blur="isShow = false" @keyup.enter="handleChage" v-focus/>
            <div v-else class="text" @dblclick="isShow = true">
                <slot> {{ value }}</slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vueName',
    data() {
        return {
            isShow: false,
        }
    },
    props: {
        value: String
    },
    methods: {
        handleChage(e) {
            this.$emit('input', e.target.value)
            this.isShow = false
        }
    },
    directives: {
        focus : {
            inserted: function(el) {
                el.focus()
            }
        }
    }
}
</script>

<style scoped lang="less"></style>