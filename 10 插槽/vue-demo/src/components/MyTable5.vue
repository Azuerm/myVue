<template>
    <table class="my-table">
        <thead>
            <tr>
                <slot name="head"></slot>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in data" :key="item.id">
               <slot name="body" :item="item" :index="index"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script>
// my-table表格组件的封装
// 1.数据不能写死，动态传递表达渲染的数据 props
// 2.结构不能写死 - 多处结构自定义  【具名插槽】 ; (1)表头自定义 (2)主体支持自定义
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    methods: {}
}
</script>

<style scoped lang="less">
.my-table {
    width: 100%;
    border-spacing: 0;

    img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        vertical-align: middle;
    }

    th {
        background: #f5f5f5;
        border-bottom: 2px solid #069;
    }

    td {
        border-bottom: 1px dashed #ccc;
    }

    td,
    th {
        text-align: center;
        padding: 10px;
        transition: all 0.5s;

        &.red {
            color: red;
        }
    }

    .none {
        height: 100px;
        line-height: 100px;
        color: #999;
    }
}
</style>