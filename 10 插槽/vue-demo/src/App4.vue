<template>
 <div class="">
    <MyTable :data="list">
        <!-- 3.通过template #插槽名="变量名" 接收 -->
        <template #default="obj">
            <button @click="del(obj.row.id)">删除</button>
        </template>
    </MyTable>
    <MyTable :data="list2">
        <template #default="{row}">
            <!-- 直接解构 -->
            <button @click="show(row)">查看</button>
        </template>
    </MyTable>
 </div>
</template>
 
<script>
import MyTable from './components/MyTable4.vue'
export default {
  name: 'vueName',
  data () {
    return {
        list:[
            {id:1,name:'张小花',age:18},
            {id:2,name:'张三',age:22},
            {id:3,name:'李四',age:18},
            {id:4,name:'王五',age:38}
        ],
        list2:[
            {id:1,name:'张小',age:18},
            {id:2,name:'张小三',age:22},
            {id:3,name:'李四无',age:18},
            {id:4,name:'王五无',age:38}
        ]
    }
  },
  methods: {
    del(id) {
        console.log(id)
        this.list = this.list.filter( item => item.id !== id)
    },
    show (row) {
        alert(`姓名：${row.name};年纪：${row.age}`)
        
    }
  },
  components: {
    MyTable
  }
}
</script>
 
<style scoped lang="less">
</style>