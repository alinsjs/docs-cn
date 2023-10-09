<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# 生命周期

Alins 元素有以下四个声明周期属性，$created，$appended，$mounted，$removed。生命周期属性值只接受函数。

## 1. $created

$created 表示dom元素刚刚被创建，此时dom元素的属性还没有被添加。使用方式如下

<CodeBox/>

```jsx
function created(dom) {
    console.log(dom.outerHTML, `parent=${dom.parentElement}`);
}
<div $created={created} name='hello' $mount='#App'>Hello</div>;
```

## 2. $appended

$appended 表示dom元素已经被挂载到父元素节点上，但此时dom元素不一定被挂载到文档树上。使用方式如下：

<CodeBox/>

```jsx
function appended(dom) {
    console.log(
        dom.outerHTML, 
        `parent=${dom.parentElement.tagName}`, 
        `parent.parent=${dom.parentElement.parentElement}`
    );
}
<div $mount='#App'>
    <div $appended={appended} name='hello'>Hello</div>
</div>
```

## 3. $mounted

$mounted 表示dom元素已经被挂载到文档树上。使用方式如下：

<CodeBox/>

```jsx
function mounted(dom) {
    console.log(
        dom.outerHTML, 
        `parent=${dom.parentElement.tagName}`, 
        `parent.parent=${dom.parentElement.parentElement.tagName}`
    );
}
<div $mount='#App'>
    <div $mounted={mounted} name='hello'>Hello</div>
</div>
```

### 返回值

$mounted 可以返回一个函数作为 $removed 生命周期函数，表示dom节点从文档树中移除。

<CodeBox/>

```jsx
let ref;
function mounted(dom) {
    console.log(
        dom.outerHTML, 
        `parent=${dom.parentElement.tagName}`, 
        `parent.parent=${dom.parentElement.parentElement.tagName}`
    );
    return dom => {console.log(`Removed: ${dom.innerHTML}`)}
}
<div $mount='#App'>
    <div $ref={ref} $mounted={mounted} name='hello'>Hello</div>
    <button onclick={ref.remove()}>Remove Hello</button>
</div>
```

## 4. $removed

$removed 表示dom节点从文档树中移除。

<CodeBox/>

```jsx
let ref;
function removed(dom) {
    console.log(`Removed: ${dom.innerHTML}`);
}
<div $mount='#App'>
    <div $ref={ref} $removed={removed} name='hello'>Hello</div>
    <button onclick={ref.remove()}>Remove Hello</button>
</div>
```

## 5. 组件内使用

组件内可以借助编译规则脱离JSX属性、在js逻辑中声明生命周期函数，具体使用请见 [编译规则](./rule.html) 章第 7 小节