<template>
    <div class="app">
       <HnHeader></HnHeader>
       <HnMain></HnMain>
       <HnFoot></HnFoot>
    </div>
</template>

<script>
    import HnHeader from './components/HnHeader.vue';
    import HnMain from './components/HnMain.vue';
    import HnFoot from './components/HnFoot.vue';
    export default {
        components: {
            HnHeader: HnHeader,
            HnMain: HnMain,
            HnFoot: HnFoot
        }
    }
</script>

<style>
    .app {
        width: 500px;
        height: 700px;
        background-color: skyblue;
        margin: 0 auto;
    }
</style>   