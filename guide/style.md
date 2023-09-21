<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-09 15:17:24
 * @Description: Coding something
-->
# 样式

style属性在Alins中与普通属性使用有一定差异。

## 1. 使用字符串

使用字符串作为style属性值时，去普通属性值并无多大差异：

<CodeBox/>

```jsx
let style = 'color: #4f4';
<div $$App>
    <div style='color: #f44'>静态字符串</div>
    <div style={style}>字符串变量</div>
    <div style={`font-size:20px;${style}`}>字符串模版</div>
</div>;
```

## 2. 使用对象

Alins 中可以使用对象作为style属性值，当使用对象时，`样式名称必须为小驼峰形式`。且对于数值类型，如果单位是 px，则可以省略末尾的px

<CodeBox/>

```jsx
const style = {
    color: '#f44',
    fontSize: 20, // 此处单位默认为px
    fontWeight: 'bold',
};
<div $$App>
    <div style={style}>Alins is COOL!</div>
</div>;
```

## 3. 使用js表达式

style属性值也可以可以使用js表达式

<CodeBox/>

```jsx
let redNumber = 255;
let fontSize = 20;

<div $$App>
    <div style={{
        color: `rgb(${redNumber}, 50, 50)`,
        fontSize,
        fontWeight: `bold`,
    }}>Alins is COOL!</div>
</div>;
```

## 4. 单属性样式

使用`style:`前缀的属性表示单属性样式，单属性样式的属性名`style:`后面的部分表示样式名，单属性样式的值表示样式值。单属性样式可以与style属性同时存在。单属性样式的样式名称也需要使用小驼峰形式。

<CodeBox/>

```jsx
<div $$App
    style='color: #f44;' 
    style:fontSize={20}
    style:fontWeight='bold'>
    Alins is COOL!
</div>
```