import{_ as p,E as t,o as e,c,J as a,k as s,a as l,S as o}from"./chunks/framework.3dadb9de.js";const E=JSON.parse('{"title":"计算属性","description":"","frontmatter":{},"headers":[],"relativePath":"guide/computed.md","filePath":"guide/computed.md"}'),r={name:"guide/computed.md"},D=s("h1",{id:"计算属性",tabindex:"-1"},[l("计算属性 "),s("a",{class:"header-anchor",href:"#计算属性","aria-label":'Permalink to "计算属性"'},"​")],-1),F=s("p",null,"依赖了响应式数据的变量会被标记为计算数据，计算数据默认只读，也可以通过 set 语法设置计算数据的赋值行为，后续章节中会详细介绍。",-1),y=s("p",null,"计算数据也是响应式数据，当计算数据依赖的响应式数据发生变更时，计算数据也会触发更新且触发依赖它的其他元素进行更新。",-1),C=s("p",null,"计算属性的定义形式非常灵活，可以是js表达式、函数、对象等，同时计算属性又非常易于理解，与js的使用方式完全一致。",-1),A=s("h2",{id:"_1-js表达式和函数",tabindex:"-1"},[l("1. js表达式和函数 "),s("a",{class:"header-anchor",href:"#_1-js表达式和函数","aria-label":'Permalink to "1. js表达式和函数"'},"​")],-1),i=o(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> countAdd2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> countAdd3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> countAdd2 </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">countMultiply2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        click:</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">count + 2 = </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">countAdd2</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">count + 3 = </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">countAdd3</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">count + 4 = </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">countAdd3 </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">count * 2 = </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">countMultiply2</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">count * 2 = </span><span style="color:#89DDFF;">{</span><span style="color:#82AAFF;">countMultiply2</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">count * 4 = </span><span style="color:#89DDFF;">{</span><span style="color:#82AAFF;">countMultiply2</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_2-对象" tabindex="-1">2. 对象 <a class="header-anchor" href="#_2-对象" aria-label="Permalink to &quot;2. 对象&quot;">​</a></h2><p>使用对象作为计算属性时，也没有什么需要特殊注意的，按照原生js的写法来写就可以。</p>`,3),d=o(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> object1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">countAdd2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> object2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">countAdd3</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> object1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">countAdd2 </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        click:</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">object1.countAdd2 = </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">object1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">countAdd2</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">object2.countAdd3 = </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">object2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">countAdd3</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div>`,1);function u(_,g,h,v,m,b){const n=t("CodeBox");return e(),c("div",null,[D,F,y,C,A,a(n),i,a(n),d])}const f=p(r,[["render",u]]);export{E as __pageData,f as default};
