# 逻辑块

使用Alins中的逻辑块可以很方便的进行UI逻辑的管理。逻辑组件的数据都是通过 data 属性进行指定。

## 1. If 组件

## 2. if 语法

## 3. Switch 组件

Switch 组件逻辑与js的switch语句差不多，用于根据一个变量的值来选择分则执行。Switch的判断条件使用 data 属性传入，条件分支使用 Case 组件接收，条件的值也是使用 data 属性传入。Default 组件用于处理 Switch 的默认条件分支。

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

## 4. switch 语句

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

## 5. For 组件

For 组件用于渲染数组，支持数组的增删改操作的响应式支持。

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

你可以使用 item属性 自定已 $item 命名，也可以使用 index属性 自定义 $index 名称:

```jsx
<For data:list name='person' index='id'>
    <div>{id+1}: name={person.name}; age={person.age};</div>
</For>
```

## 6. map 函数

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

## 7. Async 组件

Async 组件用于描述一个异步组件，异步组件已经在 [组件](./component) 章节中介绍过了，这里不再重复。

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

function Componnt(){
    // You can specify the name of the $data through the name attribute: name='persion'
    return <Async data={mockFetch()} name='person'>
        <div>name={person.name}; age={person.age}</div>
    </Async>;
}

<button onclick={<Componnt $$App/>} $$App>
    Mount Async Component
</button>
```

你可以通过 name 属性修改返回值 $data 的命名，如：

```jsx
<Async data={mockFetch()} name='person'>
    <div>name={person.name}; age={person.age}</div>
</Async>
```

## 8. Show 组件

Show 组件用于控制UI是否显示。与If的区别在于隐藏的组件依旧存在于DOM树上，只是通过样式隐藏。

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

## 9. $show 属性

通过 $show 属性也可以达到和 Show 组件一样的效果

<CodeBox/>

```jsx
let show: boolean = false;
<div $$App>
    <button onclick={show = !show}>Toggle Show</button>
    <div $show:show>Show Element 2</div>
</div>
```

        