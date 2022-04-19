# Invalid VNode type: Symbol()
组件打包node版本过高；或者开发者下包的node版本过高导致。

# 变量绑定在Vue原型上
```
// main.js
import App from './App.vue'
import { markRaw } from 'vue'

const app = createApp(App)
// 如果不需要双向绑定则使用markRow
app.config.globalProperties.$map = markRaw({})
```
```
// 需使用的文件
import { getCurrentInstance, onMounted } from 'vue'

onMounted(() => {
  let { proxy } = getCurrentInstance()
  map = proxy.$map.value
  console.log(map)
})
```
