# 对比

Alins 秉持0Api的开发理念，采用jsx描述ui，在可以拥有强大的响应式能力的同时，又不需要引入任何额外的api，可以极大的提升开发者的开发效率，降低代码的理解成本。

同时Alins也具有极小的运行时体积和打包体积，并且具有不俗的性能。

我们从以下几个方面与主流框架做一下对比

## 源码与打包产物

我们以上文中的计数器示例作为试验应用，以 alins，vue，react分别实现相同的功能，源码如下：

<CodeCompare/>

```jsx
let count = 1;
<button onclick={count++} $mount='#App'>
    count is {count}
</button>;
```

<div>

  ```vue
  <script setup>
  import { ref } from 'vue'
  const count = ref(0)
  </script>

  <template>
    <button @click="count++">
      count is {{ count }}
    </button>
  </template>
  ```

  ```js
  import { createApp } from 'vue'
  import Counter from './counter.vue'
  const app = createApp(Counter)
  app.mount('#app')
  ```

</div>

```jsx
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Main () {
    const [count, setCount] = useState(1);
    return <button onClick={()=>setCount(count ++)}>
        count is {count}
    </button>;
}

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);
```


再看一下编译产物的对比：

<CodeCompare/>

```js
import { _$$ } from "alins";
let count = _$$.r(1);
_$$.ce("button", {
  onclick: () => count.v++,
  $mount: "#App"
}, "count is ", count);
```


```js
/* Analyzed bindings: {
  "ref": "setup-const",
  "count": "setup-ref"
} */
import { 
    toDisplayString as _toDisplayString, 
    openBlock as _openBlock, 
    createElementBlock as _createElementBlock 
} from "vue"

import { ref } from 'vue'

const __sfc__ = {
  __name: 'App',
  setup(__props) {

const count = ref(0)

return (_ctx, _cache) => {
    return (_openBlock(), _createElementBlock("button", {
            onClick: _cache[0] || (_cache[0] = $event => (count.value++))
        }, " count is " + _toDisplayString(count.value), 1 /* TEXT */))
    }
}

}
__sfc__.__file = "src/App.vue"
export default __sfc__
```

```js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
function Main() {
  const [count, setCount] = useState(1);
  return /*#__PURE__*/_jsxs("button", {
    onClick: () => setCount(count++),
    children: ["count is ", count]
  });
}
ReactDOM.render( /*#__PURE__*/_jsx(Main, {}), document.getElementById('app'));
```

综合源码体积、打包代码体积和框架运行时体积，整理出表格

|       |      alins      |  vue3 | react |
| :----: | :----: | :----: | :----: | 
| 源码体积     | 90byte | 281byte | 302byte |
| 编译产物体积  | 140byte | 620byte | 435byte |
| 运行时体积   |   26.6kb    | 474kb | 139kb |

::: tip
该比较仅针对当前计数器示例，仅作参考
:::