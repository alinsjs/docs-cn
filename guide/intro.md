<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-08 13:17:31
 * @Description: Coding something
-->
# 简介

## 什么是Alins?

Alins 为 All-in-js 的简写，Alins是一款极致纯粹、简洁、优雅的Web UI框架。秉持0-API、Less is More 的开发理念，旨在帮助开发者摆脱UI框架繁杂的API调用困境，以最直观、最纯粹、最贴近vanillajs的开发方式，开发高性能的响应式Web应用程序，同时具有极小的打包体积。

您只需要了解jsx的书写规则（类似html的语法）便可以几乎没有任何阻碍的开发 alins web应用。下面是一个最基本的计数器示例：

<CodeBox />

```jsx
let count = 1;
<button onclick={count++} $mount='#App'>
    count is {count}
</button>;
```

上面的示例展示了 Alins 的两个核心特点：

- Jsx：Alins使用jsx（一种类似html语法的js语法扩展，用于描述ui）描述UI，并且自定义了部分特殊属性、扩展了jsx语法。

- 响应性：不同于其他框架的响应式功能，Alins无需引入任何响应式API，Alins编译器会在编译阶段追踪和标记响应式数据，配合运行时的响应式设计，使得alins应用最细粒度更新ui的响应式能力。

基于Alins强大的编译器功能和运行时的响应式设计，使得开发者可以仅仅使用最纯粹的jsx开发响应式应用，没有任何的响应式API引入，没有任何多余增加心智负担的语法。并且具有极高的性能和极小的打包体积。

除此之外，Alins未采用vdom，另外得益于细粒度的响应式绑定，alins可以以最小的成本最细粒度的变更引用了该响应式数据的dom元素。

上面的例子中，如果你不喜欢 `$mount` 属性，也可以使用 appendChild 来完成挂载节点，只不过会多书写一点代码：

<CodeBox />

```js
let count = 1;
document.getElementById('App').appendChild(
  <button onclick={count++}>
      count is {count}
  </button>
);
```

::: tip
预备知识：
文档接下来的内容会假设你对 HTML、CSS 和 JavaScript 已经基本熟悉。如果你对前端开发完全陌生，最好不要直接从一个框架开始进行入门学习——最好是掌握了基础知识再回到这里。你可以通过这篇 [JavaScript 概述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_overview)来检验你的 JavaScript 知识水平。如果之前有其他框架的经验会很有帮助，但也不是必须的。
:::