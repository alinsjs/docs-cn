<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-08 22:04:06
 * @Description: Coding something
-->
# 响应式数据

在 Alins 中，每一个被修改过的数据都会被标记为响应式数据，使用到了响应式数据的JSX对象都会被赋予响应式能力，响应式目标对象可以是属性、样式、类、文本、HTML、逻辑等各种对象。

## 1. 文本

下面是一个简单的响应式文本内容

<CodeBox/>

```jsx
let msg = 'Alins';
<button onclick={msg+='!'} $mount='#App'>
    Hello {msg}
</button>
```

在这个例子中，我们使用上一章节介绍的直接使用js表达式作为事件，修改了msg的值，所以msg在编译阶段就会被标记为响应式数据，而`Button`元素的文本内容也就会变为响应式对象，在msg修改的时候自动最细粒度地发生了更新。

## 2. HTML

响应式HTML与响应式文本类似，不过是对象变成了HTML内容：

<CodeBox/>

```jsx
let html = 'This is<h1>H1 Title<h1>';
<div $mount='#App'>
    <button onclick={html=html.replace(/[hH]1/g, 'h3')}>Change HTML</button>
    <div $html={html}/>
</div>
```

## 3. 属性

以下是一个响应式属性的例子：

<CodeBox/>

```jsx
let msg = 'Hello';
function onclick(e){
    msg += '!';
    console.log('Msg Attribute = ', e.target.getAttribute('msg'))
}
<button msg={msg} onclick={onclick} $mount='#App'>
    Click Me!
</button>
```

注：前面章节中提到的 `$attributes` 属性也完全支持响应式数据

<CodeBox/>

```jsx
let name = 'alins';
function logAttributes(e){
    name += '!';
    console.log(e.target.outerHTML);
}
<button $mount='#App'
    inner-attr="test"
    $attributes={`name=${name}&value=framework`}
    onclick={logAttributes} 
>Click Me!</button>
```

## 4. 属性enable

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
<button msg={{value: msg, enable}} onclick={onclick} $mount='#App'>
    Click Me!
</button>
```

## 5. 类名

类名的响应式绑定非常灵活，可以是字符串、对象以及单属性类名

### 5.1 字符串类名

<CodeBox/>

```jsx
const classList = [];
let index = 0;
function addClass (e) {
    classList.push(`a${index++}`);
    console.log(e.target.className);
}
<button $mount='#App'
    class={`a ${classList.join(' ')}`}
    onclick={addClass}
>Add Class</button>;
```

### 5.2 对象

使用对象绑定类时，对象的键为类名，值为是否启用该类名

<CodeBox/>

```jsx
let a1Flag = false;
let a2Count = 0;
function toggleClass(e){
    a1Flag = !a1Flag;
    a2Count ++;
    console.log(e.target.className)
}
<button class={{
    a: true,
    a1: a1Flag,
    a2: a2Count % 2 === 0
}}
onclick={toggleClass} $mount='#App'>
    Toggle Class
</button>;
```

### 5.3 单属性类名

单属性类名可以与以上两种使用方式共同存在，且单属性类名的优先级最高：

<CodeBox/>

```jsx
const classList = ['a1'];
let a2Flag = false;
let i = 1;
function toggleClass(e){
    classList.push(`n${i++}`)
    a2Flag = !a2Flag;
    console.log(e.target.className)
}
<button $mount='#App'
    class={`a ${classList.join(' ')}`}
    class:a2={a2Flag}
    class:a3={true}
    onclick={toggleClass}
>Toggle Class a2</button>;
```


## 6. 样式

样式的响应式绑定非常灵活，可以是字符串、对象以及单属性样式

### 6.1 字符串样式

<CodeBox/>

```jsx
let redNumber = 100;
let fontSize = 14;

<div $mount='#App'>
    <button onclick={() => {
        redNumber += 10;
        fontSize ++;
    }}>Modify Style</button>
    <div style={`
        color: rgb(${redNumber}, 100, 100); 
        font-size: ${fontSize}px;
        font-weight: bold;
    `}>Alins is AWESOME!</div>
</div>;
```

注：字符串样式中，样式名以 `-` 分割，与css样式名保持一致

### 6.2 对象

使用对象绑定样式时，对象的键为样式名，值为样式的值

<CodeBox/>

```jsx
let redNumber = 100;
let fontSize = 14;
function modifyStyle(){
    redNumber += 10;
    fontSize ++;
}
<div $mount='#App'>
    <button onclick={modifyStyle}>Modify Style</button>
    <div style={{
        color: `rgb(${redNumber}, 100, 100)`,
        fontSize,
        fontWeight: `bold`,
    }}>Alins is AWESOME!</div>
</div>;
```

注：使用对象绑定样式时：

1. 样式名称需要使用小驼峰形式
2. 对于数值类型的值（如fontSize），如果单位是 px，则可以省略末尾的px

### 6.3 单属性样式

单属性样式可以与以上两种使用方式共同存在，且单属性样式的优先级最高

<CodeBox/>

```jsx
let redNumber = 100;
let fontSize = 14;
function modifyStyle(){
    redNumber += 10;
    fontSize ++;
}
<div $mount='#App'>
    <button onclick={modifyStyle}>Modify Style</button>
    <div 
        style={`color: rgb(${redNumber}, 100, 100)`}
        style:fontSize={fontSize}
        style:fontWeight='bold'
    >Alins is AWESOME!</div>
</div>
```

## 7. 浅响应式数据

Alins 对对象类型进行响应式处理时，会对对象进行深度监听，即会递归遍历对象的所有层次的属性，这在某些场景下可能会造成不必要的性能损失

浅响应式数据仅对对象类型有效，表示仅仅对第一层属性进行响应式监听。这在某些嵌套层数很深的对象且只关注第一层属性变更的场景可以有效的提升性能。

浅响应式数据的声明会在 [编译规则](./rule.html) 章节部分的 4.4 小节中介绍。此处仅做