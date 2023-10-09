<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:38:24
 * @Description: Coding something
-->

# 编译规则

本章节中介绍一些Alins中的语法规则。

## 1. 属性简写

Alins中的属性可以简写，有以下几种情况:

1. 对于 普通属性，当属性值是一个变量时，可以使用 : 来简写，如 `name={userName}` 可以简写为 `name:userName`
2. 对于 普通属性，当属性名与变量名一致时，可以使用给属性名加 $ 前缀，然后省略属性值，如 `src={src}` 可以简写为 `$src`
3. 对于 $mount 属性使用 ID选择器，如`$mount='#App'`，可以简写为 `$:App`
   
以下是一个汇总的实例：

<CodeBox/>

```jsx
let msg = 'Hello';
function modifyMsg(e){
    msg += '!';
    console.log(e.target.outerHTML);
}
<button 
    $:App
    $msg 
    msg2:msg 
    onclick:modifyMsg>
        Modify Msg
</button>;
```

## 2. Computed Set 标签

Alins 中的计算数据也支持 set 方法，可以使用 set标签来指定，如下：

<CodeBox/>

```jsx
let a = 1;
let b = a + 1; set: v => a = v + 1;
<div $mount='#App'>
    <button onclick={b++}>Modify B</button>
    <div>a={a}; b={b}</div>
</div>;
```

## 3. Watch 标签

Alins中支持监听响应式数据的变化，可以通过 watch 标签来实现：

<CodeBox/>

```jsx
let a = 1;
const b = a + 1;
const c = {
    a: a + 2
};

watch: a, (newValue, oldValue) => {
    console.log('a changed:', newValue, oldValue);
};
watch: a + 1, (newValue, oldValue) => {
    console.log('a + 1 changed:', newValue, oldValue);
};
watch: () => a * 2, (newValue, oldValue) => {
    console.log('a * 2 changed:', newValue, oldValue);
};
watch: b, (newValue, oldValue) => {
    console.log('b changed:', newValue, oldValue);
};
watch: c, (newValue, oldValue, prop) => {
    console.log('c changed:', newValue, oldValue, prop);
};

<button $mount='#App' onclick={a++}>Modify A</button>;
```

## 4. 静态和动态数据

Alins 默认会进行静态数据和动态数据的判断，但是如果你需要手动指定类型，也可以通过注释或标签的方式实现。具体使用哪种写法，可以根据个人的喜好决定。

### 4.1 注释

使用 `@static` 注释修饰的变量会被强制标记为静态数据，使用 `@reactive` 注释修饰的变量会被强制标记为响应式数据。使用 `@shallow` 注释修饰的变量会被强制标记为浅响应式数据

当修饰多个变量声明时，可以加 括号 表示选择哪些变量。

<CodeBox/>

```jsx
let name1 = 1; // @static
name1 ++;
// static coment mark a variable as static data even if the value changes

let a = 1,b = 1,c = 1; // @static(a)
a++; b++; c++;

let name2 = 2; // @reactive
// reactive comment mark a variable as reactive data even if the value does not change

let d = 1,e = 1,f = 1; // @reactive(d)

const shallowReactive = {a:1}; // @shallow
// shallow comment mark a variable as shallow reactive data

<div $mount='#App'>Click output to view the compilation product</div>
```

注释也可以在变量之前书写，如：

```jsx
// @static
let name1 = 1;
```

注释也可以用来修饰 import 语句

```jsx
// @static
import {data} from './data';
```

### 4.2 标签

通过 `_` 和 `$` 标签也可以 分别强制声明静态数据和响应式数据，作用与 let 一致

<CodeBox/>

```jsx
_: name1 = 1; // @static
name1 ++;

$: name2 = 2;

<div $mount='#App'>Click output to view the compilation product</div>
```

### 4.3 浅响应式数据

[浅响应式数据](./reactive.html)仅对对象类型有效，表示仅仅对第一层属性进行响应式监听。

可以通过注释、js标签两种方式来标记浅响应式数据

<CodeBox/>

```jsx
const data1 = {a:{b:1}}; // @shallow

shallow: data2 = {a:{b:1}};
$$: data3 = {a:{b:1}};

<div $mount='#App'>Click output to view the compilation product</div>
```

## 5. 静态域

静态域中的声明的所有变量都会被强制标记为静态数据，所有变量、计算数据、逻辑语句都会被编译器跳过。静态域中的JSX、强制标记响应式数据不会受到影响。静态域对象可以是 函数、if语句、switch语句、for语句、块作用域、标签。

### 5.1 注释声明

可以使用 @static-scope 声明一个静态域：

<CodeBox/>

```jsx
// @static-scope
function foo(){
    let name = '';
    name ++;
}
// @static-scope
if(true){
    let name = '';
    name ++;
}
// @static-scope
switch(1){
    case 1: {
        let name = '';
        name ++;
    };break;
}
// @static-scope
for(let i=0; i<1; i++){
    let name = '';
    name ++;
}
// @static-scope
{
    let name = '';
    name ++; 
};
// @static-scope
test: () => {
    let name = '';
    name ++; 
};
<div $mount='#App'>Click output to view the compilation product</div>;
```

### 5.2 标签声明

也可以通过 static_scope 标签声明一个静态作用域

<CodeBox/>

```jsx
static_scope: {
    let name = '';
    name ++;
};
static_scope: if(true){
    let name = '';
    name ++;
}
<div $mount='#App'>Click output to view the compilation product</div>;
```

## 6. 响应式逻辑块

Alins并不会将所有的 if 和 switch 语句都编译为 If 或 Switch 逻辑块，**仅当 if 或 switch 语句的分支中有JSX赋值语句或JSX return语句时才会进行逻辑块编译**，但是由于 js 语法十分灵活，在编译阶段无法覆盖所有场景，所以对于增加了响应式逻辑块的编译规则来供开发者决定是否需要强制开启逻辑块编译。

可以使用 `@reactive` 注释标记 或 使用 `$:` 标签标记响应式逻辑块，使用方式如下：

<CodeBox/>

```jsx
function fnJSX (content, toggle) {
    return <button onclick={toggle}>{content}</button>
}

let flag = false;
const toggle = () => flag = !flag;

function Main () {
    // @reactive
    if (flag) return fnJSX('flag = true', toggle);
    return fnJSX('flag = false', toggle);
}
function Main2 () {
    $: if (flag) return fnJSX('flag = true', toggle);
    return fnJSX('flag = false', toggle);
}
<Main $mount='#App'/>;
<Main2 $mount='#App'/>;
```

## 7. 生命周期标签

在组件中除了可以使用生命周期属性之外，还可以使用生命周期标签来定义生命周期函数，使用方式如下：

<CodeBox/>

```jsx
function Component(){
    let ref;
    created: dom => {
        console.log('created', dom.className);
    };
    appended: dom => {
        console.log('appended', dom.className);
    };
    mounted: dom => {
        console.log('mounted', dom.className);
    };
    removed: dom => {
        console.log('removed', dom.className);
    };
    return <div $ref={ref} class='component-dom'>
        <button onclick={ref.remove()}>Remove Component</button>
    </div>
}
<Component $mount='#App'/>
```