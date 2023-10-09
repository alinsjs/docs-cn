# 数据绑定

引用了响应式数据的一切对象都会具有响应式能力，如DOM元素、属性、样式等，所有的响应式元素都会最细粒度触发更新，如文本内容的变更只会对绑定的TextNode进行更新，响应式样式只会对单个样式进行更新等。

响应式数据绑定的基础用法我们在上面两章节中已经做了比较详细的介绍。

本章节中主要介绍一下双向数据绑定。

## 1. value属性

对于使用value属性的输入类型dom元素，如果value属性值是一个变量，那么该变量会直接被标记为响应式数据，且与输入元素进行双向绑定，当变量更新时，会更新dom元素，当dom元素输入变更时，也会修改变量的值

接下来举几个例子

### 1.1 input和textarea

<CodeBox/>

```jsx
let value = 'Hello';
<div $mount='#App'>
    <input value={value} /><br/>
    <textarea value={value}></textarea>
    <div>Content = "{value}"</div>
</div>
```

### 1.2. number和range

当变量是数字类型时，Alins会自动将双向绑定的模式设置为数字模式，即后续会将输入元素的值转为数字类型赋值给绑定的变量。

<CodeBox/>

```jsx
let a = 1, b = 2;
<div $mount='#App'>
    <div>
        <input type='number' value={a}/>
        <input type='range' value={a}/>
    </div>
    <div>
        <input type='number' value={b}/>
        <input type='range' value={b}/>
    </div>
    <div> a + b = {a + b}</div>
</div>
```

### 1.3. select

<CodeBox/>

```jsx
let selected = 'Apple';
<div $mount='#App'>
    <select value={selected}>
        <option>Apple</option>
        <option>Banana</option>
        <option>Orange</option>
    </select>
    <div>Selected Fruit: {selected}</div>
</div>
```

#### bool类型

与1.3中介绍的数字类型自动转换一样，布尔类型的变量双向绑定也会进行自动转换

<CodeBox/>

```jsx
let selected = true;
<div $mount='#App'>
    <select value={selected}>
        <option>true</option>
        <option>false</option>
    </select>
    <div>True of False: {selected}; type = {typeof selected}</div>
</div>
```

## 2. checked属性

对于checkbox类型的input元素，Alins会将`checked`属性作为绑定目标，当checked属性值是一个变量时，则将改变量标记为响应式变量且与input元素进行双向绑定

<CodeBox/>

```js
let checked = false;
<div $mount='#App'>
    <input type='checkbox' checked={checked} />
    <div> checked = {checked}; type = {typeof checked}</div>
</div>
```

## 3. 类型装饰器

在 1.2和1.3 中介绍了，当变量类型为数字类型和布尔类型时，双向绑定会自动进行数据类型的转化。

那么如果变量的初始类型不是预期的数据类型的时候呢？这个时候我们可以使用类型装饰器来进行强制数据类型转化。

### 3.1 number装饰器

<CodeBox/>

```jsx
let a = 1, b = '';
<div $mount='#App'>
    <input value={a}/>
    <input value:number={b}/>
    <div> a + b = {a + b}</div>
</div>
```

### 3.2 boolean装饰器

<CodeBox/>

```jsx
let selected = 'true';
<div $mount='#App'>
    <select value:boolean={selected}>
        <option>true</option>
        <option>false</option>
    </select>
    <div>True of False: {selected}; type = {typeof selected}</div>
</div>
```

注：其实还有一个 string装饰器，但是由于默认的模式就是字符串模式，所以这个装饰器可以不用关注