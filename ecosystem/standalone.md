<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# alins-standalone

Alins 提供了一个免编译的工具包，通过一些 API 的调用，可以实现完整的Alins应用功能，但是无法使用jsx语法。

## 1. 安装使用

npm 安装使用

```
npm i alins-standalone
```

```js
import {/**import**/} from 'alins-standalone';
```

```js
<script src='https://unpkg.com/alins-standalone'></script>
<script> 
    window.Alins;
</script>
```


## 2. API

alins-standalone 导出了如下的API，基本使用与alins一致

```js
import {
    ref,
    react,
    watch,
    computed,
    If,
    ElseIf,
    Else,
    Switch,
    Case,
    Default,
    For,
    Async,
    Show,
    Dom,
    Component,
} from 'alins-standalone';
```

我们使用cdn方式，通过一个例子来了解一下

<CodeBox :iframe='true' :height='40' :html='true'/>

```html
<script src='https://unpkg.com/alins-standalone'></script>
<script> 
    const {react, computed, Dom} = window.Alins
    let count = react(1);
    let countAdd1 = computed(()=>count.v+1);
    Dom('button', {
        $mount: document.body,
        onclick: ()=>count.v++,
    }, [
        react`count is ${count}; countAdd1 is ${countAdd1}`
    ]);
</script>
```

注：第二个 react 使用表示将字符串与响应式数据进行拼接，返回一个数组。你也可以直接使用数组形式

```js
['count is ', count, '; countAdd1 is ', countAdd1]
```

其他API具体使用可以参考 [alins-standalone.d.ts](https://unpkg.com/alins-standalone/dist/alins-standalone.d.ts)