import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// 导入持久化插件
import persist from 'pinia-plugin-persistedstate'
const pinia = createPinia() // 创建pinia实例
const app = createApp(App)  // 创建根实例

app.use(pinia.use(persist))  // pinia插件的安装配置
app.mount('#app') // 视图的挂载
