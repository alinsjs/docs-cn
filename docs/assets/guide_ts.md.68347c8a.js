import{_ as s,o as a,c as n,S as l}from"./chunks/framework.94c9b175.js";const d=JSON.parse('{"title":"Typescript 使用实践","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ts.md","filePath":"guide/ts.md"}'),p={name:"guide/ts.md"},o=l(`<h1 id="typescript-使用实践" tabindex="-1">Typescript 使用实践 <a class="header-anchor" href="#typescript-使用实践" aria-label="Permalink to &quot;Typescript 使用实践&quot;">​</a></h1><p>目前，由于编辑器插件正在规划中，暂时对于typescript类型支持主要是依赖编辑器对tsx文件的支持，所以对于Alins中部分自定义的语法并不能很好的支持，但是我们可以有一些实践来规避ts的静态检查报错</p><h2 id="jsx-props" tabindex="-1">JSX.Props <a class="header-anchor" href="#jsx-props" aria-label="Permalink to &quot;JSX.Props&quot;">​</a></h2><p>当对组件使用诸如 <code>$for</code>, <code>$if</code> 之类的自定义属性时，typescript 会抛出一个属性不存在的异常，我们可以使用 JSX.Props 属性来规避。同时可以使用 JSX.Children 来指定子元素的参数类型</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$for</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">item</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">$item</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#A6ACCD;">$index</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Component</span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">}:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">JSX</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Props</span><span style="color:#89DDFF;">&lt;{</span><span style="color:#F07178;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">JSX</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">Children</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="js-label-定义变量" tabindex="-1">JS Label 定义变量 <a class="header-anchor" href="#js-label-定义变量" aria-label="Permalink to &quot;JS Label 定义变量&quot;">​</a></h2><p>当使用 <code>$:</code>, <code>_:</code>, <code>shallow:</code> 定义变量时，由于ts并不能识别，所以在tsx文件中需要手动声明一下变量，如下</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> aaaa</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> aaaa </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="ts-ignore" tabindex="-1">ts-ignore <a class="header-anchor" href="#ts-ignore" aria-label="Permalink to &quot;ts-ignore&quot;">​</a></h2><p>对于一些ts代码中的其他扫描报错，可以使用 <code>// @ts-ignore</code> 注释跳过</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// @ts-ignore</span></span>
<span class="line"><span style="color:#FFCB6B;">mount</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,11),e=[o];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{d as __pageData,A as default};
