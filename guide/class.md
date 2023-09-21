<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-09 15:17:24
 * @Description: Coding something
-->
# HTML类名

HTML类名在Alins中与普通属性使用有一定差异。

## 1. 使用字符串

使用字符串作为class属性值时，去普通属性值并无多大差异：

<CodeBox/>

```jsx
function logClass(e){
    console.log(e.target.className);
}
let className = 'v1 v2';
<div $$App>
    <button class='a b' onclick={logClass}>静态字符串</button>
    <button class={className} onclick={logClass}>字符串变量</button>
    <button class={`a ${className}`} onclick={logClass}>字符串模版</button>
</div>;
```

## 2. 使用对象

Alins 中可以使用对象作为class属性值，对象的键表示class类名，对象的值为布尔值，表示属性是否生效

<CodeBox/>

```jsx
const classObject = {
    a: true,
    a1: false,
    a2: true
};
function logClass(e){
    console.log(e.target.className);
}
<button $$App 
    class={classObject}
    onclick={logClass}>
    Log Class
</button>
```

## 3. 使用布尔表达式

class属性值也可以可以使用布尔表达式

<CodeBox/>

```jsx
let a1Flag = false;
let a2Count = 2;
function logClass(e){
    console.log(e.target.className);
}
<button $$App 
    class={{
        a: true,
        a1: a1Flag,
        a2: a2Count > 1
    }}
    onclick={logClass}>
    Log Class
</button>
```

## 4. 单属性类名

使用`class:`前缀的属性表示单属性类名，单属性类名的属性名`class:`后面的部分表示类名，单属性类名的值为布尔类型，表示是否需要使用类名。单属性类名可以与class属性同时存在。

<CodeBox/>

```jsx
function logClass(e){
    console.log(e.target.className);
}
<button $$App
    class='a1 a2' 
    class:a3={true}
    class:a4={2 < 1}
    onclick={logClass}>
    Log Class
</button>
```