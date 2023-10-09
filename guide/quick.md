<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# 查询手册

本章节简要地汇总一下 Alins 中的核心jsx属性和语法规则，主要目的是为了帮助开发者快速查找 Alins 的使用方式。如果您是第一次阅读该文档，建议先阅读具体介绍的章节，了解各个属性和语法规则的详细介绍和示例。

**这里的列表包含了几乎所有Alins概念，所以这里罗列的并不都是必须的，包含了一些 Alins 的高阶使用。**

1. [$mount](./jsx): 用于挂载dom元素到指定元素
2. [事件](./jsx): 与原生dom的事件命名一致，如 `onclick、onmousedown`。同时事件值支持js表达式，此时可以使用 $e 变量来访问 event对象，如 `onclick={console.log($e.clientX)}`
3. [事件装饰器](./jsx): `prevent、stop、capture、once、self、pure`, 使用方式：`onclick:stop={console.log(1)}`
4. [$ref](./jsx): 引用dom元素
5. [$html](./jsx): 设置innerHTML
6. [$attributes](./jsx): 使用对象批量设置属性
7. [Fragment](./jsx): 使用空标签和 Frag 标签都可以创建DocumentFragment
8. [单属性类名](./class): `class:a={true}`
9.  [单属性样式](./style): `class:color='#f44'`
10. [生命周期](./lifecycle): $created，$appended，$mounted，$removed
11. [双向绑定装饰器](./binding): 转换绑定的数据类型, 如 `value:number={str}`
12. [组价](./component): 组件入参为 props和children
13. [逻辑块](./logic): `if、switch`语法；map函数；`If、Switch、For、Show、Async`逻辑组件；`$show`,`$if`,`$switch`,`$for`,`$async` 属性
14. [set语法糖](./rule): 用于设置computed的set 如：`let b=a+1;set: v=>{a=v-1;}`
15. [watch语法糖](./rule): 监听数据变更，如：`watch: a, (...args)=>{console.log(args)}`
16. [属性简写](./rule): `name={name}` 等价于 `name:name` 等价于 `$name`
17. [注释标注](./rule): `@reactive, @static，@shallow，@static-scope`，其中@reactive, @static可以携带参数
18. [标签](./rule): $: 可以声明响应式数据，_: 可以声明静态数据，static_scope: 可以声明静态作用域
19. [状态共享](./store): `createStore` API
20. [自定义渲染器](./render): `useRenderer`, `defineRenderer` API