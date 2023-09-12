<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-08 22:04:59
 * @Description: Coding something
-->
# JSX扩展

Alins 采用 JSX描述UI，但是在JSX的基础上做了一些扩展，以使其可以实现更加强大的能力。本章节目的就是介绍一些Alins中对JSX做的一些扩展

## 1.JSX返回值

不同于React中JSX返回一个React Component，在Alins中，JSX渲染函数会返回原生的DOM元素或者DocumentFragment元素，所以我们可以使用如下语句向App元素中添加一个元素：

<CodeBox/>

```jsx
document.getElementById('App').appendChild(
    <div>Hello World!</div>
)
```

从编译产物中可以看出，JSX对象被转换成了一个 `_$ce` 函数执行，返回结果是一个DOM元素。JSX使得我们可以像书写HTML代码一样在JS中书写UI。

### 返回 DocumentFragment

通过使用一个空的JSX标签，可以返回一个 DocumentFragment 对象

<CodeBox/>

```jsx
const frag = <>
    <div>Div 1</div>
    <div>Div 2</div>
</>;
console.log('Frag is a ', frag.constructor.name);
document.getElementById('App').appendChild(frag);
```

## 2.$mount属性

`$mount` 属性用于将JSX对象生成的DOM元素挂在到目标节点上，可以理解为 .appendChild 方法的语法糖，如第一小节中的例子等价于下面使用 $mount 属性的写法

<CodeBox/>

```jsx
<div $mount='#App'>Hello World!</div>
```

$mount 属性的值是一个HTML选择器，用于选择DOM元素，与appendChild效果一样，但是代码会简练很多，书写负担也会减少很多。

当然 `$mount` 属性值也可以是另外一个JSX对象，如下：

<CodeBox/>

```jsx
const parent = <div $mount='#App'>Parent</div>;
<div $mount={parent}>Child</div>
```

注：空JSX标签不支持 $mount 属性

## 3.$$前缀

**对于ID选择器，我们可以将$mount='#App'更进一步简写为 $$App**，$$ 前缀表示当前属性为$mount 且后面跟的是一个ID，示例如下

<CodeBox/>

```jsx
<div $$App>Hello World!</div>
```

当然，如果您觉得这样不是很有必要这样包裹，您也可以使用最原始的 `$mount='#App'`，他们的作用是完全一致的。

在下面的教程中，为了代码的简练，我们将会采用 `$$App` 的写法来挂载元素。

注：`$$body` 是一个特殊的属性，表示将元素挂载到 document.body 上。

## 4.JSX表达式

JSX表达式是使用花括号包裹的JS代码，用来嵌入JS逻辑到UI中，为UI提供了极高的灵活性和扩展性

以下是一个使用JSX表达式插入html属性和html内容的例子

<CodeBox/>

```jsx
const msg = 'World';
<div title={`Hello ${msg}!`} $$App>{`Hello ${msg}!`}</div>;
```

## 5.JSX事件

### 5.1 基础使用

在 Alins JSX中，我们使用HTML一样的事件名称，同时具有一样的event对象

除此之外，onclick中除了可以传入函数，还可以传入js表达式作为事件，传入的js表达式不会立即执行，而是在事件触发时执行。

我们通过一个例子来看一下

<CodeBox/>

```jsx
function logClient(event){
    console.log('Position is', event.clientX, event.clientY);
}
<button $$App
    onclick={logClient}
    onmouseleave={console.log('Mouse Leave!')}
>Click Me</button>;
```

### 5.2 $e对象

使用表达式的作为事件函数的时候，可以使用 `$e` 变量来使用 event 对象，如下：

<CodeBox/>

```jsx
<button $$App
    onclick={console.log('ClientX = ', $e.clientX)}
>Click Me</button>;
```

### 5.3 事件装饰器

事件装饰器用于修饰事件的行为，有以下几种：`prevent、stop、capture、once、self、pure`。

#### prevent

prevent 用于阻止事件的默认行为，内部调用了 event.preventDefault

<CodeBox/>

```jsx
function click(){
    console.log('Prevent checkbox checked!');
}
<div $$App>
    Normal: <input type='checkbox'/><br/>
    Prevent And Alert: <input onclick:prevent={click} type='checkbox'/><br/>
    Only Prevent: <input onclick:prevent type='checkbox'/>
</div>
```

#### stop

stop 用于阻止事件冒泡，内部调用了 event.stopPropagation

<CodeBox/>

```jsx
function click(from: string){
    console.log(`Click from ${from}!`);
}
<div $$App>
    <div onclick={click('parent')}>
        Normal: 
        <button onclick={click('child')}>Click Me!</button>
    </div>
    <div onclick={click('parent')}>
        StopPropagation With Alert: 
        <button onclick:stop={click('child')}>Click Me!</button>
    </div>
    <div onclick={click('parent')}>
        Only StopPropagation: 
        <button onclick:stop>Click Me!</button>
    </div>
</div>
```

#### capture

capture 用于开启事件捕获，当携带时，会将事件的 useCapture 传入 true

<CodeBox/>

```jsx
function click(from: string){
    console.log(`Click from ${from}!`);
}
<div $$App>
    <div onclick={click('parent')}>
        Normal: <button onclick={click('child')}>Click Me!</button>
    </div>
    <div onclick:capture={click('parent')}>
        With Capture: <button onclick:capture={click('child')}>Click Me!</button>
    </div>
</div>
```

#### once

once 表示事件仅仅触发一次

<CodeBox/>

```jsx
function click(){
    console.log('Clicked, try again!');
}
<div $$App>
    <div>
        Normal: <button onclick={click}>Click Me!</button>
    </div>
    <div>
        Only Once: <button onclick:once={click}>Click Me!</button>
    </div>
</div>
```

#### self

self 表示仅仅 event.target 为当前dom元素时才触发

<CodeBox/>

```jsx
function click(from: string){
    console.log(`Click from ${from}!`);
}
<div $$App>
    <div onclick={click('parent')}>
        Normal: 
        <button onclick={click('child')}>Click Me!</button>
    </div>
    <div onclick:self={click('parent')}>
        With Self: 
        <button onclick={click('child')}>Click Me!</button>
    </div>
</div>

```

#### pure

pure 是一个编译时的装饰器，用于保留事件的原始值，不要对其进行编译。

<CodeBox/>

```jsx
function click(from: string){
    console.log(`Execute click from ${from}`)
    // The pure decorator is used to keep event expressions from being compiled
    return ()=>{
        console.log(`Click from ${from}!`);
    }
}
<div $$App>
    <div>
        Normal [Won't Log Click From]: 
        <button onclick={click('child1')}>Click Me!</button>
    </div>
    <div>
        With Pure: <button onclick:pure={click('child2')}>Click Me!</button>
    </div>
</div>
```

## 6.$ref属性

`$ref` 属性用于引用JSX对象返回的DOM元素，当然您也可以直接使用JSX对象的值作为DOM元素，但是在某些嵌套层级较深的UI中，会显得不是那么优雅

$ref 使用方式如下：

<CodeBox/>

```jsx
let ref;
<div $$App>
    Parent
    <button $ref={ref} 
        onclick={console.log(ref.textContent)} 
    >Click Me!</button>
</div>
```

注：在ref声明之后马上使用，会得到一个 undefined，ref引用的初始化时机在 created 生命周期函数之后，我们会在后续章节中介绍生命周期。

## 7.$html属性

使用 `$html` 属性，可以设置DOM元素的html样式。**值的注意的是，设置 $html 之后，该DOM元素的孩子节点全部失效。**

<CodeBox/>

```jsx
const html = 'This is <h1>h1 title</h1>';
<div $html={html} $$App>内部元素将失效</div>;
```

## 8.$attributes属性

`$attributes` 属性用于聚合HTML属性，可以使用对象批量设置属性，如下所示

<CodeBox/>

```jsx
const data={
    name: 'TestName',
    value: 'TestValue',
}
function logAttributes(e){
    const attrs = e.target.attributes;
    for(let item of attrs){
        console.log(`${item.name}=${item.value}`);
    }
}
<button $$App
    inner-attr="test"
    $attributes={data}
    onclick={logAttributes} 
>Click Me!</button>
```
