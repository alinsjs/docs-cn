# 计算属性

依赖了响应式数据的变量会被标记为计算数据，计算数据默认只读，也可以通过 set 语法设置计算数据的赋值行为，后续章节中会详细介绍。

计算数据也是响应式数据，当计算数据依赖的响应式数据发生变更时，计算数据也会触发更新且触发依赖它的其他元素进行更新。

计算属性的定义形式非常灵活，可以是js表达式、函数、对象等，同时计算属性又非常易于理解，与js的使用方式完全一致。

## 1. js表达式和函数

<CodeBox/>

```jsx
let count = 1;
let countAdd2 = count + 2;
let countAdd3 = countAdd2 + 1;
function countMultiply2 () {
    return count * 2
}
<div $mount='#App'>
    <button onclick={count++}>
        click:{count}
    </button>
    <div>count + 2 = {countAdd2}</div>
    <div>count + 3 = {countAdd3}</div>
    <div>count + 4 = {countAdd3 + 1}</div>
    <div>count * 2 = {countMultiply2}</div>
    <div>count * 2 = {countMultiply2()}</div>
    <div>count * 4 = {countMultiply2() * 2}</div>
</div>
```

## 2. 对象

使用对象作为计算属性时，也没有什么需要特殊注意的，按照原生js的写法来写就可以。

<CodeBox/>

```jsx
let count = 1;
const object1 = {
    countAdd2: count + 1
};
const object2 = {
    countAdd3: object1.countAdd2 + 1
};
<div $mount='#App'>
    <button onclick={count++}>
        click:{count}
    </button>
    <div>object1.countAdd2 = {object1.countAdd2}</div>
    <div>object2.countAdd3 = {object2.countAdd3}</div>
</div>;
```