import{_ as p,E as e,o as t,c,J as a,k as s,a as o,S as l}from"./chunks/framework.94c9b175.js";const b=JSON.parse('{"title":"生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"guide/lifecycle.md","filePath":"guide/lifecycle.md"}'),r={name:"guide/lifecycle.md"},D=s("h1",{id:"生命周期",tabindex:"-1"},[o("生命周期 "),s("a",{class:"header-anchor",href:"#生命周期","aria-label":'Permalink to "生命周期"'},"​")],-1),F=s("p",null,"Alins 元素有以下四个声明周期属性，$created，$appended，$mounted，$removed。生命周期属性值只接受函数。",-1),y=s("h2",{id:"_1-created",tabindex:"-1"},[o("1. $created "),s("a",{class:"header-anchor",href:"#_1-created","aria-label":'Permalink to "1. $created"'},"​")],-1),A=s("p",null,"$created 表示dom元素刚刚被创建，此时dom元素的属性还没有被添加。使用方式如下",-1),C=l('<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">created</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">dom</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outerHTML</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">parent=</span><span style="color:#89DDFF;">${</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#89DDFF;">}`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$created</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">created</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><h2 id="_2-appended" tabindex="-1">2. $appended <a class="header-anchor" href="#_2-appended" aria-label="Permalink to &quot;2. $appended&quot;">​</a></h2><p>$appended 表示dom元素已经被挂载到父元素节点上，但此时dom元素不一定被挂载到文档树上。使用方式如下：</p>',3),i=l(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">appended</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">dom</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outerHTML</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">parent=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tagName</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">parent.parent=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$appended</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">appended</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_3-mounted" tabindex="-1">3. $mounted <a class="header-anchor" href="#_3-mounted" aria-label="Permalink to &quot;3. $mounted&quot;">​</a></h2><p>$mounted 表示dom元素已经被挂载到文档树上。使用方式如下：</p>`,3),d=l(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mounted</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">dom</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outerHTML</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">parent=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tagName</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">parent.parent=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tagName</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mounted</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">mounted</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><p>$mounted 可以返回一个函数作为 $removed 生命周期函数，表示dom节点从文档树中移除。</p>`,3),m=l(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ref</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mounted</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">dom</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outerHTML</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">parent=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tagName</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">parent.parent=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tagName</span><span style="color:#89DDFF;">}\`</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">dom</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Removed: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">$mounted</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">mounted</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Remove Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="_4-removed" tabindex="-1">4. $removed <a class="header-anchor" href="#_4-removed" aria-label="Permalink to &quot;4. $removed&quot;">​</a></h2><p>$removed 表示dom节点从文档树中移除。</p>`,3),_=l(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> ref</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">removed</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">dom</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Removed: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">dom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$$App</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">$removed</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">removed</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Remove Hello</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,1);function h(u,g,E,$,v,f){const n=e("CodeBox");return t(),c("div",null,[D,F,y,A,a(n),C,a(n),i,a(n),d,a(n),m,a(n),_])}const x=p(r,[["render",h]]);export{b as __pageData,x as default};