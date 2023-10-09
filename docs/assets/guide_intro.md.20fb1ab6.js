import{_ as p,E as e,o as t,c,J as a,k as s,a as o,S as l}from"./chunks/framework.94c9b175.js";const E=JSON.parse('{"title":"简介","description":"","frontmatter":{},"headers":[],"relativePath":"guide/intro.md","filePath":"guide/intro.md"}'),r={name:"guide/intro.md"},D=s("h1",{id:"简介",tabindex:"-1"},[o("简介 "),s("a",{class:"header-anchor",href:"#简介","aria-label":'Permalink to "简介"'},"​")],-1),y=s("h2",{id:"什么是alins",tabindex:"-1"},[o("什么是Alins? "),s("a",{class:"header-anchor",href:"#什么是alins","aria-label":'Permalink to "什么是Alins?"'},"​")],-1),A=s("p",null,"Alins 为 All-in-js 的简写，Alins是一款极致纯粹、简洁、优雅的Web UI框架。秉持0-API、Less is More 的开发理念，旨在帮助开发者摆脱UI框架繁杂的API调用困境，以最直观、最纯粹、最贴近vanillajs的开发方式，开发高性能的响应式Web应用程序，同时具有极小的打包体积。",-1),F=s("p",null,"您只需要了解jsx的书写规则（类似html的语法）便可以几乎没有任何阻碍的开发 alins web应用。下面是一个最基本的计数器示例：",-1),C=l(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++} </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    count is </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><p>上面的示例展示了 Alins 的两个核心特点：</p><ul><li><p>Jsx：Alins使用jsx（一种类似html语法的js语法扩展，用于描述ui）描述UI，并且自定义了部分特殊属性、扩展了jsx语法。</p></li><li><p>响应性：不同于其他框架的响应式功能，Alins无需引入任何响应式API，Alins编译器会在编译阶段追踪和标记响应式数据，配合运行时的响应式设计，使得alins应用最细粒度更新ui的响应式能力。</p></li></ul><p>基于Alins强大的编译器功能和运行时的响应式设计，使得开发者可以仅仅使用最纯粹的jsx开发响应式应用，没有任何的响应式API引入，没有任何多余增加心智负担的语法。并且具有极高的性能和极小的打包体积。</p><p>除此之外，Alins未采用vdom，另外得益于细粒度的响应式绑定，alins可以以最小的成本最细粒度的变更引用了该响应式数据的dom元素。</p><h2 id="_2-纯粹的js和jsx" tabindex="-1">2. 纯粹的JS和JSX <a class="header-anchor" href="#_2-纯粹的js和jsx" aria-label="Permalink to &quot;2. 纯粹的JS和JSX&quot;">​</a></h2><p>上面的例子中，如果你不喜欢 <code>$mount</code> 和 <code>{count ++}</code> 属性，也可以使用 appendChild 来完成挂载节点，使用函数作为事件的值，只不过会多书写一点代码：</p>`,7),i=l(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      count is </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_3-无编译直接运行" tabindex="-1">3. 无编译直接运行 <a class="header-anchor" href="#_3-无编译直接运行" aria-label="Permalink to &quot;3. 无编译直接运行&quot;">​</a></h2><p>Alins生态提供了 <a href="./../ecosystem/standalone.html">alins-standalone</a> 来进行浏览器环境的直接使用 Alins 的核心运行时功能，通过一些 API 的调用，可以实现完整的Alins应用功能，但是无法使用jsx语法。</p><p>不同于 Alins <a href="./../ecosystem/web-compiler.html">Web编译器</a>，alins-standalone可以直接用于生产环境，</p>`,4),d=l(`<div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">computed</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Dom</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">join</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alins-standalone</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> countAdd1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">v </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">Dom</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">button</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">$mount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">onclick</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">v</span><span style="color:#89DDFF;">++,</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">count is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">; countAdd1 is </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">countAdd1</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>预备知识： 文档接下来的内容会假设你对 HTML、CSS 和 JavaScript 已经基本熟悉。如果你对前端开发完全陌生，最好不要直接从一个框架开始进行入门学习——最好是掌握了基础知识再回到这里。你可以通过这篇 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_overview" target="_blank" rel="noreferrer">JavaScript 概述</a>来检验你的 JavaScript 知识水平。如果之前有其他框架的经验会很有帮助，但也不是必须的。</p></div>`,2);function _(u,h,m,g,b,f){const n=e("CodeBox");return t(),c("div",null,[D,y,A,F,a(n),C,a(n),i,a(n,{iframe:!0,height:60,html:!0,standalone:!0}),d])}const S=p(r,[["render",_]]);export{E as __pageData,S as default};