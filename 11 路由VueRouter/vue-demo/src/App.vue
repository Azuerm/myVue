<template>
    <div class="h5-wrapper">
        <!-- 包裹了keep-alive，一级路由匹配的组件都会被缓存  Layout组件(被缓存) - 多两个生命周期钩子
            -activated    激活时，组件被看到时触发
            -deactivated  失活时，离开页面组件看不见时触发
          ArticleDetail组件(未被缓存) -->
         <!-- 需求：现在只要把Layout组件缓存  :include="组件名数组"-->
        <!-- <keep-alive :include="[LayoutPage]">
            <router-view></router-view>
        </keep-alive> -->
        <keep-alive :include="keepArray">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "h5-wrapper",
    data() {
        return {
            keepArray:['LayoutPage']
        }
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
    .content {
        margin-bottom: 51px;
    }

    .tabbar {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        display: flex;
        background: #fff;
        border-top: 1px solid #e4e4e4;

        a {
            flex: 1;
            text-decoration: none;
            font-size: 14px;
            color: #333;
            -webkit-tap-highlight-color: transparent;

            &.router-link-active {
                color: #fa0;
            }
        }
    }
}
</style>