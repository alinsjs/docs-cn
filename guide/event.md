
# 事件

## 1. 基础使用

在 Alins JSX中，我们使用HTML一样的事件名称，同时具有一样的event对象

除此之外，onclick中除了可以传入函数，还可以传入js表达式作为事件，传入的js表达式不会立即执行，而是在事件触发时执行。

我们通过一个例子来看一下

<CodeBox/>

```jsx
function logClient(event){
    console.log('Position is', event.clientX, event.clientY);
}
<button $mount='#App'
    onclick={logClient}
    onmouseleave={console.log('Mouse Leave!')}
>Click Me</button>;
```

## 2. $e对象

使用表达式的作为事件函数的时候，可以使用 `$e` 变量来使用 event 对象，如下：

<CodeBox/>

```jsx
<button $mount='#App'
    onclick={console.log('ClientX = ', $e.clientX)}
>Click Me</button>;
```

## 3. 事件装饰器

事件装饰器用于修饰事件的行为，有以下几种：`prevent、stop、capture、once、self、pure`。

### 3.1 prevent

prevent 用于阻止事件的默认行为，内部调用了 event.preventDefault

<CodeBox/>

```jsx
function click(){
    console.log('Prevent checkbox checked!');
}
<div $mount='#App'>
    Normal: <input type='checkbox'/><br/>
    Prevent And Log: <input onclick:prevent={click} type='checkbox'/><br/>
    Only Prevent: <input onclick:prevent type='checkbox'/>
</div>
```

### 3.2 stop

stop 用于阻止事件冒泡，内部调用了 event.stopPropagation

<CodeBox/>

```jsx
function click(from: string){
    console.log(`Click from ${from}!`);
}
<div $mount='#App'>
    <div onclick={click('parent')}>
        Normal: 
        <button onclick={click('child')}>Click Me!</button>
    </div>
    <div onclick={click('parent')}>
        StopPropagation With Log: 
        <button onclick:stop={click('child')}>Click Me!</button>
    </div>
    <div onclick={click('parent')}>
        Only StopPropagation: 
        <button onclick:stop>Click Me!</button>
    </div>
</div>
```

### 3.3 capture

capture 用于开启事件捕获，当携带时，会将事件的 useCapture 传入 true

<CodeBox/>

```jsx
function click(from: string){
    console.log(`Click from ${from}!`);
}
<div $mount='#App'>
    <div onclick={click('parent')}>
        Normal: <button onclick={click('child')}>Click Me!</button>
    </div>
    <div onclick:capture={click('parent')}>
        With Capture: <button onclick:capture={click('child')}>Click Me!</button>
    </div>
</div>
```

### 3.4 once

once 表示事件仅仅触发一次

<CodeBox/>

```jsx
function click(){
    console.log('Clicked, try again!');
}
<div $mount='#App'>
    <div>
        Normal: <button onclick={click}>Click Me!</button>
    </div>
    <div>
        Only Once: <button onclick:once={click}>Click Me!</button>
    </div>
</div>
```

### 3.5 self

self 表示仅仅 event.target 为当前dom元素时才触发

<CodeBox/>

```jsx
function click(from: string){
    console.log(`Click from ${from}!`);
}
<div $mount='#App'>
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

### pure

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
<div $mount='#App'>
    <div>
        Normal [Won't Log Click From]: 
        <button onclick={click('child1')}>Click Me!</button>
    </div>
    <div>
        With Pure: <button onclick:pure={click('child2')}>Click Me!</button>
    </div>
</div>
```
