<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-28 09:30:56
 * @Description: Coding something
-->

# alins-reactive

alins-reactive 为 alins 的响应式基础库，提供了一些创建和监听响应式数据的API，可以独立于alins使用。

## 安装

```
npm i alins-reactive
```

## 主要 API 汇总

```js
import {
    ref,
    reactive,
    computed,
    watch,
    createStore,
    observe,
    isReactive,
    isRef,
    createProxy,
    watchRef,
    watchArray,
} from 'alins-reactive';
```

其他的API和类型声明的导出可以参考 [alins-reactive.d.ts](https://unpkg.com/alins-reactive/dist/alins-reactive.d.ts)

## 基础使用

<CodeBox :no-compile='true'/>

```js
import {ref, computed, watch} from 'alins-reactive';
const count = ref(1);
const countAdd1 = computed(() => count.v + 1);

const button = document.createElement('button');
button.onclick = () => { count.v ++; };
document.getElementById('App').appendChild(button);

const update = () => { button.innerText = `count = ${count.v}, count+1=${countAdd1.v}` };
update();
watch(count, update);
```

其他的API使用可以参考 [alins-reactive.d.ts](https://unpkg.com/alins-reactive/dist/alins-reactive.d.ts)
