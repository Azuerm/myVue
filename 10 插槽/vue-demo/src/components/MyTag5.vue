<template>
    <div class="">
        <div class="my-tag">
            <input v-if="isEidt" ref="inp" v-focus class="input" type="text" placeholder="输入标签" @blur="isEidt = false" :value="value" @keyup.enter="handleEnter"/>
            <!-- 双击dblclick -->
            <div @dblclick="handleClick" v-else class="text"  >
                {{ value }}
            </div>
        </div>
    </div>
</template>

<script>
// my-tag标签封装：1.创建组件
// 2.实现功能
//  (1)双击显示，并且自动聚焦 @dblclick 自动聚焦：1.$nextTick => $ref获得dom，进行focus聚焦 2.封装v-focus自定义指令
//  (2)失去焦点，隐藏输入框 @blur 改变isEidt
//  (3)回显标签信息； 回显标签信息是通过父组件传递过来；v-model实现功能：v-mode => :value 和 @input；组件内容通过props接收，:value设置给输入框
//  (4)内容修改了，回车 => 修改标签信息； @keyup.enter，触发事件；$emit('input', e.target.value)
export default {
    name: 'vueName',
    data() {
        return {
            isEidt: false
        }
    },
    props: {
        value: String
    },
    methods: {
        handleClick() {
            // 双击切换显示状态 （vue异步更新dom）
            this.isEidt = true
            // 等dom更新完了，再获得焦点
            // this.$nextTick( () => {
            //     this.$refs.inp.focus()
            // })
        },
        handleEnter(e) {
            // 非空处理
            if(e.target.value.trim() === '') return alert('标签内容不能为空')
            // 子传父，将回车时，输入框的内容给父组件更新
            // 由于父组件是v-model触发事件，需要触发input事件
            // e.target 是触发事件的事件源
            this.$emit('input', e.target.value)
            // 提交完毕，关闭输入状态
            this.isEidt = false
        }
    }
}
</script>

<style scoped lang="less">
     .my-tag {
        cursor: pointer;

        .input {
            appearance: none;
            outline: none;
            border: 1px solid #ccc;
            width: 100px;
            height: 40px;
            box-sizing: border-box;
            padding: 10px;
            color: #666;

            &::placeholder {
                color: #666;
            }
        }
    }
</style>