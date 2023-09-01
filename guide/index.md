# Getting Started

## Overview

Alins 为 All-in-js 的简写，Alins是一款极致纯粹、简洁、优雅的Web UI框架。秉持0-API、all-in-js 的开发理念，旨在帮助开发者摆脱UI框架繁杂的API调用困境，以最直观、最纯粹、最贴近vanillajs的开发方式，开发高性能的响应式Web应用程序，同时具有极小的打包体积。

下面是一个最基本的计数器示例

```jsx
let count = 1;
<button onclick={count++} $mount='#app'>
    count is {count}
</button>;
```

没错，以上就是所有的代码，仅仅是最纯粹的jsx，每一个标点符号都是必须的，没有任何的响应式API引入，没有任何多余增加心智负担的语法。

对比一下 vue和react的相同功能实现

vue:

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

react:

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

```js
import { _$$ } from "alins";
let count = _$$.r({
  v: 1
});
_$$.ce("button", {
  onclick: () => count.v++,
  $mount: "#App"
}, "count:", count);
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