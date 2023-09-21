# 逻辑块

使用Alins中的逻辑块可以很方便的进行UI逻辑的管理。逻辑组件的数据都是通过 data 属性进行指定。

## 1. If 逻辑

If 用于表达分支逻辑，当匹配到某条件时，显示对应的UI。If 逻辑可以使用组件、属性、语句三种形式来表达，具体使用方式视开发者喜好决定。

### 1.1 组件

If组件 的判断条件使用 data 属性传入。支持布尔值和布尔表达式，使用如下

<CodeBox/>

```jsx
let count: number = 0;
const add = () => {count++};
<div $$App>
    <If data={count > 3}>
        <div>Now count > 3</div>
    </If>
    <ElseIf data={count > 2}>
        <button onclick:add>continue[count>2]</button>
    </ElseIf>
    <Else>
        <button onclick:add>count={count}</button>
    </Else>
</div>;
```

### 1.2 属性

可以使用 $if、$elseif、$else 属性来完成If逻辑的实现:

<CodeBox/>

```jsx
let count: number = 0;
const add = () => {count++};
<div $$App>
    <div $if={count>3}>Now count > 3</div>
    <button $elseif={count > 2} onclick:add>continue[count>2]</button>
    <button $else onclick:add>count={count}</button>
</div>;
```

注：if逻辑的属性和组件可以任意混合使用：

<CodeBox/>

```jsx
let count: number = 0;
const add = () => {count++};
<div $$App>
    <div $if={count>3}>Now count > 3</div>
    <ElseIf data={count > 2}>
        <button onclick:add>continue[count>2]</button>
    </ElseIf>
    <button $else onclick:add>count={count}</button>
</div>;
```


### 1.3 语句

Alins 会将js的`if`语句编译成一个If逻辑组件，功能与If组件一致

<CodeBox/>

```jsx
function Main () {
    let count: number = 0;
    const add = () => {count++};
    if (count > 3) {
        return <div>Now count > 3</div>;
    } else if (count > 2){
        return <button onclick:add>continue[count>2]</button>;
    }
    return <button onclick:add>count={count}</button>
}
<Main $$App/>;
```

## 2. Switch 逻辑

Switch 逻辑与js的switch语句差不多，用于根据一个变量的值来选择分则执行。Switch 逻辑可以使用组件、属性、语句三种形式来表达

### 2.1 组件

Switch组件的判断条件使用 data 属性传入，条件分支使用 Case 组件接收，条件的值也是使用 data 属性传入。Default 组件用于处理 Switch 的默认条件分支。

Case 的data属性支持传入数组，表示同时匹配多个值。

<CodeBox/>

```jsx
function Main () {
    let count = 0;
    const add = () => {count++;};
    return <Switch data={count}>
        <Case data={[1,2]}>
            <button onclick={add}>Count is 1 or 2:{count}</button>
        </Case>
        <Case data={3}>
            <button onclick={add}>Count is 3[count=3]</button>
        </Case>
        <Case data={4}>
            <button onclick={add}>Now Count = 4</button>
        </Case>
        <Default>
            <button onclick={add}>Other Count:{count}</button>
        </Default>
    </Switch>;
}
<Main $$App/>;
```

同时 Case 组件支持 break 属性，用于表示是否立即跳出 Switch 逻辑。默认值为true。

<CodeBox/>

```jsx
function Main () {
    let count = 0;
    const add = () => {count++;};
    return <Switch data={count}>
        <Case data={1} break={false}>
            <button onclick={add}>Count is 1</button>
        </Case>
        <Case data={2}>
            <button onclick={add}>Count is 1 or 2:{count}</button>
        </Case>
        <Default>
            <button onclick={add}>Other Count:{count}</button>
        </Default>
    </Switch>;
}
<Main $$App/>;
```

### 3.2 属性

可以使用 $switch、$case、$default 属性来完成If逻辑的实现:

<CodeBox/>

```jsx
function Main () {
    let count = 0;
    const add = () => {count++;};
    return <div $switch={count}>
        <Case data={1} break={false}>
            <button onclick={add}>Count is 1</button>
        </Case>
        <button $case={2} onclick={add}>Count is 1 or 2:{count}</button>
        <Default>
            <button onclick={add}>Other Count:{count}</button>
        </Default>
    </div>;
}
<Main $$App/>;
```

注：switch逻辑的属性和组件可以任意混合使用：

<CodeBox/>

```jsx
function Main () {
    let count = 0;
    const add = () => {count++;};
    return <div $switch={count}>
        <button $case={1} $break={false} onclick={add}>Count is 1</button>
        <button $case={2} onclick={add}>Count is 1 or 2:{count}</button>
        <button $default onclick={add}>Other Count:{count}</button>
    </div>;
}
<Main $$App/>;
```

### 3.3 语句

Alins 会将js的`switch`语句编译成一个Switch逻辑组件，功能与Switch组件一致

<CodeBox/>

```jsx
function Main () {
    let count = 0;
    const add = () => {count++;};
    switch (count) {
        case 1:
        case 2:
            return <button onclick={add}>Count is 1 or 2:{count}</button>;
        case 3: return <button onclick={add}>Count is 3[count=3]</button>;
        case 4: return <button onclick={add}>Now Count = 4</button>;
    }
    return <button onclick={add}>Other Count:{count}</button>;
}
<Main $$App/>;
```

## 4. For 逻辑

For 逻辑用于渲染数组，支持数组的增删改操作的响应式支持。For 逻辑可以使用组件、属性、map函数三种形式来表达

### 4.1 For 组件

For 组件使用data属性传入数组，使用方式如下：

<CodeBox/>

```jsx
const list = [{name: 'Bob', age: 10}, {name: 'Alice', age: 11}]
let age = 10;
<div $$App>
    <button onclick={
        list.unshift({name: 'Tom', age: age++})
    }>Add Person</button>
    <For data:list>
        <div>{$index+1}: name={$item.name}; age={$item.age};</div>
    </For>
</div>;
```

你可以使用 item属性 自定义 $item 命名，也可以使用 index属性 自定义 $index 名称:

```jsx
<For data:list name='person' index='id'>
    <div>{id+1}: name={person.name}; age={person.age};</div>
</For>
```

### 4.2 属性

使用 $for 属性也可以表达 for 逻辑：

<CodeBox/>

```jsx
const list = [{name: 'Bob', age: 10}, {name: 'Alice', age: 11}]
let age = 10;
<div $$App>
    <button onclick={
        list.unshift({name: 'Tom', age: age++})
    }>Add Person</button>
    <div $for={list}>{$index+1}: name={$item.name}; age={$item.age};</div>
</div>;
```

你可以使用 $item属性 自定义 $item 命名，也可以使用 $index属性 自定义 $index 名称:

```jsx
<div $for={list} $item='person' $index='id'>
    {id+1}: name={person.name}; age={person.age};
</div>
```

## 4.3 map 函数

数组自带的map函数与 For组件具有相同的作用：

<CodeBox/>

```jsx
const list = [{name: 'Bob', age: 10}, {name: 'Alice', age: 11}]
let age = 10;
<div $$App>
    <button onclick={
        list.unshift({name: 'Tom', age: age++})
    }>Add Person</button>
    <button onclick={list[1].age ++}>Modify Second Person Age</button>
    {list.map((item, index) => (
        <div>{index+1}: name={item.name}; age={item.age};</div>
    ))}
</div>;
```

## 5. Async 逻辑

Async 逻辑用于描述一个异步组件，异步组件已经在 [组件](./component) 章节中介绍过了，这里不再重复。Async 逻辑可以使用组件、属性两种形式来表达

### 5.1 组件

异步组件中使用 $data 接受异步返回的数据，使用方式如下：

<CodeBox/>

```jsx
function mockFetch(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({name: 'Bob', age: 10})
        }, 1000)
    });
}

function Component(){
    return <Async data={mockFetch()}>
        <div>name={$data.name}; age={$data.age}</div>
    </Async>;
}

<button onclick={<Component $$App/>} $$App>
    Mount Async Component
</button>
```

你可以通过 name 属性修改返回值 $data 的命名，如：

```jsx
<Async data={mockFetch()} name='person'>
    <div>name={person.name}; age={person.age}</div>
</Async>
```

### 5.2 属性

可以使用 $async 属性描述异步逻辑，使用方式如下：

<CodeBox/>

```jsx
function mockFetch(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({name: 'Bob', age: 10})
        }, 1000)
    });
}

function Component(){
    return <div $async={mockFetch()}>
        name={$data.name}; age={$data.age}
    </div>;
}

<button onclick={<Component $$App/>} $$App>
    Mount Async Component
</button>
```

你可以通过 $name 属性修改返回值 $data 的命名，如：

```jsx
<div $async={mockFetch()} $name='person'>
    name={person.name}; age={person.age}
</div>;
```

## 6. Show 逻辑

Show 逻辑用于控制UI是否显示。与If的区别在于隐藏的组件依旧存在于DOM树上，只是通过样式隐藏。Show 逻辑可以使用组件、属性两种形式来表达

### 6.1 组件

<CodeBox/>

```jsx
let show: boolean = false;
<div $$App>
    <button onclick={show = !show}>Toggle Show</button>
    <Show data={show}>
        <div>Show Element</div>
    </Show>
</div>
```

## 6.2 $show 属性

通过 $show 属性也可以达到和 Show 组件一样的效果

<CodeBox/>

```jsx
let show: boolean = false;
<div $$App>
    <button onclick={show = !show}>Toggle Show</button>
    <div $show:show>Show Element 2</div>
</div>
```

        