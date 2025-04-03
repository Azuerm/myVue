<template>
    <div class="">
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
    </div>
</template>

<script>
export default {
    props: {
        data: Array
    }
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
        transition: all .5s;

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