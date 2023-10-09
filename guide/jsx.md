<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-08 22:04:59
 * @Description: Coding something
-->
# JSX扩展

Alins 采用 JSX描述UI，但是在JSX的基础上做了一些扩展，以使其可以实现更加强大的能力。本章节目的就是介绍Alins中对JSX做的一些扩展。

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

### Frag 标签

您也可以通过 Frag 标签来返回一个 DocumentFragment，好处是使用 Frag 可以挂载属性。而空标签不可以

<CodeBox/>

```jsx
const frag = <Frag>
    <div>Div 1</div>
    <div>Div 2</div>
</Frag>;
console.log('Frag is a ', frag.constructor.name);
document.getElementById('App').appendChild(frag);
```

注：Frag标签挂载属性时，后续章节中介绍到的所有的属性都只会作用于第一个子元素，生命周期只会作用于第一个子节点。

## 2.$mount属性

`$mount` 属性用于将JSX对象生成的DOM元素挂载到目标节点上，可以理解为 .appendChild 方法的语法糖，如第一小节中的例子等价于下面使用 $mount 属性的写法

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

## 3.JSX表达式

JSX表达式是使用花括号包裹的JS代码，用来嵌入JS逻辑到UI中，为UI提供了极高的灵活性和扩展性

以下是一个使用JSX表达式插入html属性和html内容的例子

<CodeBox/>

```jsx
const msg = 'World';
<div title={`Hello ${msg}!`} $mount='#App'>{`Hello ${msg}!`}</div>;
```

## 4.$ref属性

`$ref` 属性用于引用JSX对象返回的DOM元素，当然您也可以直接使用JSX对象的值作为DOM元素，但是在某些嵌套层级较深的UI中，会显得不是那么优雅

$ref 使用方式如下：

<CodeBox/>

```jsx
let ref;
<div $mount='#App'>
    Parent
    <button $ref={ref} 
        onclick={console.log(ref.textContent)} 
    >Click Me!</button>
</div>
```

注：

1. 在ref声明之后马上使用，会得到一个 undefined，ref引用的初始化时机在 created 生命周期函数之后，我们会在后续章节中介绍生命周期。
2. onclick属性表示添加一个事件，可以是js表达式或函数，下一章节中将会详细介绍

## 5.$html属性

使用 `$html` 属性，可以设置DOM元素的html样式。**值的注意的是，设置 $html 之后，该DOM元素的孩子节点全部失效。**

<CodeBox/>

```jsx
const html = 'This is <h1>h1 title</h1>';
<div $html={html} $mount='#App'>内部元素将失效</div>;
```

## 6.$attributes属性

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
<button $mount='#App'
    inner-attr="test"
    $attributes={data}
    onclick={logAttributes} 
>Click Me!</button>
```

## 7.动态节点

由于Alins本质就是直接操作Dom，所以创建动态节点也非常直观，就是直接挂载JSX元素既可以，举一个例子

<CodeBox/>

```jsx
let parent, _id = 1;
function addChild(e){
    <div $mount={parent}>Dynamic Node {_id++}</div>;
    // Or use $mount={e.target.parentElement}
}
<div $ref={parent} style='border: 1px solid #555' $mount='#App'>
    <button onclick={addChild}>Add Child</button>
</div>
```

**注：此处的 _id 变量使用了下划线前缀，用于标识一个静态数据，不然id++会被标识为计算数据从而发生响应式变更**
