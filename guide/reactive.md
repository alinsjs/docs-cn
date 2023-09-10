<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-08 22:04:06
 * @Description: Coding something
-->
# 响应式数据

在 Alins 中，每一个被修改过的数据都会被标记为响应式数据，使用到了响应式数据的JSX对象都会被赋予响应式能力，响应式目标对象可以是属性、样式、类、文本、HTML、逻辑等各种对象。

## 1. 响应式文本

下面是一个简单的响应式文本内容

<CodeBox/>

```jsx
let msg = 'Alins';
<button onclick={msg+='!'} $$App>
    Hello {msg}
</button>
```

在这个例子中，我们使用上一章节介绍的直接使用js表达式作为事件，修改了msg的值，所以msg在编译阶段就会被标记为响应式数据，而`Button`元素的文本内容也就会变为响应式对象，在msg修改的时候自动最细粒度的发生了更新。

## 2. 响应式属性

以下是一个响应式属性的例子：

<CodeBox/>

```jsx
let msg = 'Hello';
function onclick(e){
    msg += '!';
    console.log('Msg Attribute = ', e.target.getAttribute('msg'))
}
<button msg={msg} onclick={onclick} $$App>
    Click Me!
</button>
```

## 3. 属性是否可见

属性接受传入一个 value和enable属性的对象，我们可以通过enable属性来控制HTML属性是否生效，示例如下：

<CodeBox/>

```jsx
let msg = 'Hello';
let enable = false;
function onclick(e){
    msg += '!';
    enable = !enable;
    console.log('Msg Attribute = ', e.target.getAttribute('msg'))
}
<button msg={{value: msg, enable}} onclick={onclick} $$App>
    Click Me!
</button>
```

## 4. 响应式HTML

响应式HTML与响应式文本类似，不过是对象变成了HTML内容：

<CodeBox/>

```jsx
let html = 'This is<h1>H1 Title<h1>';
<div $$App>
    <button onclick={html=html.replace(/[hH]1/g, 'h3')}>Change HTML</button>
    <div $html={html}/>
</div>
```

## 5. 
