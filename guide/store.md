<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# 状态管理

Alins 内置了状态管理功能，可以用来进行跨组件的数据共享，也可以用来集中管理应用中的数据。AlinsStore 具有非常强大的响应式能力以及友好的类型支持。

## 1. createStore

您可以使用 `createStore` 创建一个数据仓库，接受一个json类型的参数，参数有以下三个属性：

1. state：该参数是一个函数，返回值表示数据仓库的初始数据。
2. getters：用于定义一些计算属性。
3. actions：相当于数据仓库的方法，可以用来修改数据仓库中的数据，也可以通过返回值用来表示响应式数据。

createStore 返回值是一个函数，函数返回值是一个 Store 实例，通过调用这个函数用来使用数据仓库。

基本使用如下：

<CodeBox/>

```jsx
import { createStore } from 'alins';
const useStore = createStore({
    state: () => ({
        count: 0,
    }),
    actions: {
        increase () {
            this.count ++;
        },
        countAddX (x: number) {
            return this.count + x;
        }
    },
    getters: {
        countAdd2 () {
            return this.count + 2;
        },
        getCountAddX () {
            return this.countAddX(3);
        }
    }
});

const store = useStore();

<div $$App>
    <div>Count = {store.count}</div>
    <div>countAdd2 = {store.countAdd2}</div>
    <div>countAddX = {store.countAddX(4)}</div>
    <div>getCountAddX = {store.getCountAddX}</div>
    <button onclick={store.increase}>Increase Count</button>
</div>;
```

## 2. 监听数据变更

可以使用Store实例的 `$watch` api 来监听状态变更，可以使用字符串直接监听 state和getter，也可以监听函数的返回值的数据变更。

<CodeBox/>

```jsx
import { createStore } from 'alins';
const useStore = createStore({
    state: () => ({
        count: 0,
    }),
    actions: {
        increase () {
            this.count ++;
        },
        countAddX (x: number) {
            return this.count + x;
        }
    },
    getters: {
        countAdd2 () {
            return this.count + 2;
        },
        getCountAddX () {
            return this.countAddX(3);
        }
    }
});
const store = useStore();
store.$watch('count', (newValue, oldValue) => {
    console.log('store.count change', newValue, oldValue);
});
store.$watch('countAdd2', (newValue, oldValue) => {
    console.log('store.countAdd2 change', newValue, oldValue);
});
store.$watch(() => store.countAddX(4), (newValue, oldValue) => {
    console.log('store.countAddX(4) change', newValue, oldValue);
});
<div $$App>
    <div>Count = {store.count}</div>
    <div>countAdd2 = {store.countAdd2}</div>
    <div>countAddX = {store.countAddX(4)}</div>
    <div>getCountAddX = {store.getCountAddX}</div>
    <button onclick={store.increase}>Increase Count</button>
</div>;
```

对于对象类型，也可以使用字符串通过操作符来监听属性变更

<CodeBox/>

```jsx
import { createStore } from 'alins';
const useStore = createStore({
    state: () => ({
        person: {
            name: 'tack',
            age: 1,
        }
    }),
    actions: {
        increase () {
            this.person.age ++;
        }
    }
});
const store = useStore();
store.$watch('person.age', (newValue, oldValue) => {
    console.log('person.age change', newValue, oldValue);
});
<div $$App>
    <div>Age = {store.person.age}</div>
    <button onclick={store.increase}>Increase Age</button>
</div>;
```