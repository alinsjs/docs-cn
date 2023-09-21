import{_ as e,o,c as l,S as c}from"./chunks/framework.3dadb9de.js";const _=JSON.parse('{"title":"查询手册","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quick.md","filePath":"guide/quick.md"}'),a={name:"guide/quick.md"},t=c('<h1 id="查询手册" tabindex="-1">查询手册 <a class="header-anchor" href="#查询手册" aria-label="Permalink to &quot;查询手册&quot;">​</a></h1><p>本章节简要的汇总一下 Alins 中的核心jsx属性和语法规则，主要目的是为了帮助开发者快速查找 Alins 的使用方式。如果您是第一次阅读该文档，建议先阅读具体介绍的章节，了解各个属性和语法规则的详细介绍和示例。</p><p><strong>这里的列表包含了几乎所有Alins概念，所以这里罗列的并不都是必须的，包含了一些 Alins 的高阶使用。</strong></p><ol><li><a href="./jsx.html">$mounted</a>: 用于挂载dom元素到指定元素</li><li><a href="./jsx.html">$$ID</a>: <code>$mounted=&#39;#ID&#39;</code> 的简写</li><li><a href="./jsx.html">事件</a>: 与原生dom的事件命名一致，如 <code>onclick、onmousedown</code>。同时事件值支持js表达式，此时可以使用 $e 变量来访问 event对象，如 <code>onclick={console.log($e.clientX)}</code></li><li><a href="./jsx.html">事件装饰器</a>: <code>prevent、stop、capture、once、self、pure</code>, 使用方式：<code>onclick:stop={console.log(1)}</code></li><li><a href="./jsx.html">$ref</a>: 引用dom元素</li><li><a href="./jsx.html">$html</a>: 设置innerHTML</li><li><a href="./jsx.html">$attributes</a>: 使用对象批量设置属性</li><li><a href="./jsx.html">Fragment</a>: 使用空标签和 Frag 标签都可以创建DocumentFragment</li><li><a href="./class.html">单属性类名</a>: <code>class:a={true}</code></li><li><a href="./style.html">单属性样式</a>: <code>class:color=&#39;#f44&#39;</code></li><li><a href="./lifecycle.html">生命周期</a>: $created，$appended，$mounted，$removed</li><li><a href="./binding.html">数据绑定装饰器</a>: 转换绑定的数据类型, 如 <code>value:number={str}</code></li><li><a href="./component.html">组价</a>: 组件入参为 props和children</li><li><a href="./logic.html">逻辑块</a>: <code>if、switch</code>语法；map函数；<code>If、Switch、For、Show、Async</code>逻辑组件；<code>$show</code>,<code>$if</code>,<code>$switch</code>,<code>$for</code>,<code>$async</code> 属性</li><li><a href="./rule.html">set语法糖</a>: 用于设置computed的set 如：<code>let b=a+1;set: v=&gt;{a=v-1;}</code></li><li><a href="./rule.html">watch语法糖</a>: 监听数据变更，如：<code>watch: a, (...args)=&gt;{console.log(args)}</code></li><li><a href="./rule.html">属性简写</a>: <code>name={name}</code> 等价于 <code>name:name</code> 等价于 <code>$name</code></li><li><a href="./rule.html">变量命名</a>: $ 开头表示强制定义响应式数据， _ 开头表示强制定义静态数据</li><li><a href="./rule.html">注释标注</a>: <code>@reactive, @static，@shallow，@static-scope</code>，其中@reactive, @static可以携带参数</li><li><a href="./rule.html">标签</a>: $: 可以声明响应式数据，_: 可以声明静态数据，static_scope: 可以声明静态作用域</li><li><a href="./store.html">状态共享</a>: <code>createStore</code> API</li><li><a href="./render.html">自定义渲染器</a>: <code>useRenderer</code>, <code>defineRenderer</code> API</li></ol>',4),i=[t];function r(d,s,h,n,m,f){return o(),l("div",null,i)}const p=e(a,[["render",r]]);export{_ as __pageData,p as default};
