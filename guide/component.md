# 组件与单向数据流

Alins 组件的使用与 JSX 组件基本一致，组件本身是一个返回 JSX对象的函数，所以组件返回的也是原生DOM元素。组件的第一个参数为属性，第二个参数为组件内的元素。

组件内部的代码只会被执行一次，绑定数据的变更只会导致细粒度的元素更新，整个组件不会被重新渲染。组件仅仅作为UI逻辑的组织形式。

## 1. 属性

组件函数的第一个参数为组件传入的所有属性。

<CodeBox/>

```jsx
function Component(props){
    return <div>
        a = {props.a}; b = {props.b};
    </div>;
}

let a = 1, b = 2;
<div $mount='#App'>
    <Component a={a} b={b} />
    <button onclick={()=>{
        a ++;
        b ++;
    }}>Increase Data</button>
</div>
```

### 属性解构

属性的传入和使用都支持使用属性解构，并且不会使属性丢失响应式能力。

<CodeBox/>

```jsx
function Component({a, b}){
    return <div>
        a = {a}; b = {b};
    </div>;
}

let data = {a: 1, b: 2};
<div $mount='#App'>
    <Component {...data} />
    <button onclick={()=>{
        data.a ++;
        data.b ++;
    }}>Increase Data</button>
</div>
```

## 2. JSX扩展属性

Alins组件不支持以下JSX扩展属性：$attributes、$html、$ref，因为这几个属性是直接作用于DOM元素上的。组件由于本身并不直接表示DOM元素，所以无法使用上述属性。

由于组件的返回值可以是DOM元素或者 DocumentFragment，而 DocumentFragment 在 mounted和removed监听上存在一定局限性，所以 Alins 对于生命周期属性做了一些处理。当返回值是DOM元素时，直接作用于组件返回值；当返回值是 DocumentFragment，作用于第一个是DOM元素的子节点。

组件使用$mount 以及 生命周期属性例子如下：

<CodeBox/>

```jsx
function Component () {
    let dom;
    return <div $ref={dom}>
        <span>Hello!</span>
        <button onclick={dom.remove()}>Remove</button>
    </div>;
}

<Component $mount='#App'
    $mounted={(dom) => {console.log('mounted', dom.tagName);}}
    $appended={(dom) => {console.log('appended', dom.tagName);}}
    $removed={(dom) => {console.log('removed', dom.tagName);}}
    $created={(dom) => {console.log('created', dom.tagName);}}
></Component>;
```

## 3. 子节点

组件内部可以添加子节点，子节点会被传入组件函数的第二个参数，是一个节点数组，可以插入到组件函数的返回值JSX对象中。

<CodeBox/>

```jsx
function Counter ({count}, children) {
    return <div>
        <span>Count is {count}</span>
        {children}
    </div>;
}

let count = 0;
<Counter $mount='#App' count={count}>
    <button onclick={count ++}>Increase Count</button>
</Counter>;
```

## 4. 异步组件

异步函数也可以作为组件使用，我们称为`异步组件`，Alins遇到异步组件时，会先生成一个空节点作为锚点返回，在异步组件执行完毕返回真正的节点时，再替换掉锚点。

<CodeBox/>

```jsx
function mockFetch(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve({name: 'Bob', age: 10})
        }, 1000)
    });
}

async function Component(){
    const data = await mockFetch();
    return <div>name={data.name}; age={data.age}</div>
}

<button onclick={<Component $mount='#App'/>} $mount='#App'>
    Mount Async Component
</button>
```

## 5. 单向数据流

Alins遵循单向数据流原则，父组件传入子组件的数据也具有响应式，但是无法在子组件中变更，如果需要在子组件中修改父组件数据，可以通过传递方法进行修改，也可以使用后续章节中介绍到的状态共享方案。

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
