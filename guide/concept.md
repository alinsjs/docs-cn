<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-09 00:59:16
 * @Description: Coding something
-->
# 概念

本章节将介绍一下 Alins 中的核心概念和相关原理。

## JSX

[JSX](https://react.dev/learn/writing-markup-with-jsx#jsx-putting-markup-into-javascript)是一种基于JavaScript的语法扩展，与HTML十分相似，首先被用在 React 中来描述用户界面。Alins也采用JSX来描述UI。

在本文中，我们不对JSX做过多的介绍。只是介绍Alins中与React中的JSX差异之处。如果您不了解JSX，也不必担心，只需要对HTML有一定的了解也可以无阻碍的学习接下来的教程，如果需要对JSX有更进一步的了解，也可以移步至[React JSX](https://react.dev/learn/writing-markup-with-jsx#jsx-putting-markup-into-javascript)。

## 响应式数据

Alins 会在编译阶段将每一个发生了变更的变量标记为响应式数据，响应式数据是Alins强大响应式能力的基础，一切引用的响应式数据的对象都会具有响应式能力，同时，支持对响应式数据进行监听数据变更。Alins响应式的基础是`Proxy API`。

```jsx
let count = 0;
count ++; // count 此时会被标记为响应式数据
```

## 计算数据

依赖了响应式数据的变量会被标记为计算数据，计算数据默认只读，也可以通过 set 语法设置计算数据的赋值行为，后续章节中会详细介绍。

计算数据也是响应式数据，当计算数据依赖的响应式数据发生变更时，计算数据也会触发更新且触发依赖它的其他元素进行更新。

```jsx
let count = 0;
let countAdd1 = count + 1;
count ++; // countAdd1 此时会被标记为计算数据
```

## 数据绑定

引用了响应式数据的一切对象都会具有响应式能力，如DOM元素、属性、样式等，所有的响应式元素都会最细粒度触发更新，如文本内容的变更只会对绑定的TextNode进行更新，响应式样式只会对单个样式进行更新等。

数据绑定仅仅需要使用最原始的jsx表达式即可，如下就完成了相关元素的数据绑定，当count变更时，所有的响应式绑定对象都会发生对应的更新：

<CodeBox/>

```jsx
let count = 0;
function increaseCount(e){
    count ++;
    console.log(e.target.outerHTML);
}
<button $mount='#App'
    onclick={increaseCount} 
    count-attr={count} 
    class={`count-${count}`}
>
    Counst is {count}
</button>;
```

注：$mount='#App' 表示将元素挂载到 id为 App 的元素上，后续章节中会有介绍

### 双向绑定

同时对于输入类型元素，如Input、Select、TextArea等输入类型元素，无需额外的属性或语法，Alins天然支持双向数据绑定，并且支持绑定数据的类型判断和自动转换。

<CodeBox/>

```jsx
let count = 0;
function increaseCount(e){
    count ++;
}
<div $mount='#App'>
    <input value={count} />
    <button onclick={increaseCount}>
        Counst is {count}
    </button>
</div>
```


## 组件与单向数据流

Alins 组件的使用与 JSX 组件基本一致，组件本身是一个返回 JSX对象的函数，所以组件返回的也是原生DOM元素。组件的第一个参数为属性，第二个参数为组件内的元素。

组件内部的代码只会被执行一次，绑定数据的变更只会导致细粒度的元素更新，整个组件不会被重新渲染。组件仅仅作为UI逻辑的组织形式。

以下是一个组件的基础示例：

<CodeBox/>

```jsx
function Component(props, children){
    return <span>
        {children} {props.msg}!
    </span>;
}
<Component msg='World' $mount='#App'>
    <span>Hello</span> 
</Component>
```

### 单向数据流

Alins遵循单向数据流原则，父组件传入子组件的数据也具有响应式，但是无法在子组件中变更，如果需要在子组件中修改父组件数据，可以通过传递方法进行修改，也可以使用后续章节中介绍到的状态共享方案。

**注：组件中的props也支持解构使用**

<CodeBox/>

```jsx
function Component({msg, modifyMsg}, children){
    return <div>
        <div>msg = {msg}</div>
        <button onclick={msg += '!'}>子组件直接修改msg[无效]</button>
        <button onclick={modifyMsg()}>子组件通过方法修改msg</button>
        {children}
    </div>
}

let msg = 'Hello';
function modifyMsg(){
    msg += '!';
}
<Component msg={msg} modifyMsg={modifyMsg} $mount='#App'>
    <button onclick={msg += '!'}>父组件修改msg</button>
</Component>
```

## 编译器与运行时

Alins 主要分为编译器和运行时两部分。

编译器底层由Babel提供支持，负责将 jsx/tsx 代码编译为js代码，在此过程中，Alins会解析处理代码中自定义的JSX扩展和响应式数据等逻辑，将其转换为最终能直接运行在浏览器中的代码。

运行时负责运行编译产物，对响应式数据、数据绑定、逻辑语句等进行处理，使应用能够正确的运行，运行时的响应式基础是Proxy API。

Alins的运行时不包含 VDom，JSX元素会被直接生成真实的DOM元素，Alins最大的特点与优点在于，每一个响应式绑定都是以最小的粒度进行的，所以在数据发生变更的时候，对应的元素可以以单个 TextNode、类名、单个样式进行更新，每一次更新操作都可以确保以最小的成本完成。