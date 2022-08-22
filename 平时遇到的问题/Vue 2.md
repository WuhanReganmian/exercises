# node-sass版本对应
`尽量别用node-sass`  
| NodeJS | Supported node-sass version |
|  :----:  | :----:  |
| Node 17 |	7.0+ |
| Node 16 |	6.0+ |
| Node 15 |	5.0+, <7.0 |
| Node 14 |	4.14+ |
| Node 13 |	4.13+, <5.0 |
| Node 12 |	4.12+ |
| Node 11 |	4.10+, <5.0 |
| Node 10 |	4.9+, <6.0 |
| Node 8 |	4.5.3+, <5.0 |
| Node <8 |	<5.0 |

[参考](https://www.npmjs.com/package/node-sass)  

# vue-router动态添加的路由不能手动删除
[参考](https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465)  
```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history',
  routes: []
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // the relevant part
}

export default router
```

# vue extend继承插入slot
带数值的：  
```
const slotTemplate = `<div><h4>This is the slot content</h4>{{message}}</div>`;
const renderer = Vue.compile(slotTemplate)
const slotContent = {
  data(){
    return {
      message: "some data in the slot"
    }
  },
  render: renderer.render,
  staticRenderFns: renderer.staticRenderFns
}

const instance = new Slide();
instance.$slots.default = [instance.$createElement(slotContent)];
instance.$mount("#container");

```
纯html：  
```
const slotTemplate = `<div><h4>This is the slot content</h4></div>`
const instance = new Slide();
instance.$slots.default = [instance.$createElement(Vue.compile(slotTemplate))];
instance.$mount("#container");
```
[参考](https://stackoverflow.com/questions/43041145/vue-pass-slot-template-to-extended-component)

# jsx中slot写法  
```
<el-popover
  placement="top"
  trigger="hover"
  content="用户在该域下不存在"
  scopedSlots={{ reference: () => <img src={noDataImg} alt="" style="display: block;width: 20px;height:20px" /> }}>
</el-popover>
```
