import{_ as p,E as e,o as t,c,J as n,k as s,a as o,S as l}from"./chunks/framework.94c9b175.js";const b=JSON.parse('{"title":"样式","description":"","frontmatter":{},"headers":[],"relativePath":"guide/style.md","filePath":"guide/style.md"}'),D={name:"guide/style.md"},r=s("h1",{id:"样式",tabindex:"-1"},[o("样式 "),s("a",{class:"header-anchor",href:"#样式","aria-label":'Permalink to "样式"'},"​")],-1),F=s("p",null,"style属性在Alins中与普通属性使用有一定差异。",-1),y=s("h2",{id:"_1-使用字符串",tabindex:"-1"},[o("1. 使用字符串 "),s("a",{class:"header-anchor",href:"#_1-使用字符串","aria-label":'Permalink to "1. 使用字符串"'},"​")],-1),i=s("p",null,"使用字符串作为style属性值时，与普通属性值并无多大差异：",-1),C=l(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> style </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">color: #4f4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">color: #f44</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">静态字符串</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">字符串变量</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">font-size:20px;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">字符串模版</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><h2 id="_2-使用对象" tabindex="-1">2. 使用对象 <a class="header-anchor" href="#_2-使用对象" aria-label="Permalink to &quot;2. 使用对象&quot;">​</a></h2><p>Alins 中可以使用对象作为style属性值，当使用对象时，<code>样式名称必须为小驼峰形式</code>。且对于数值类型，如果单位是 px，则可以省略末尾的px</p>`,3),A=l(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> style </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#f44</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">fontSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 此处单位默认为px</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">fontWeight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bold</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">Alins is AWESOME!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><h2 id="_3-使用js表达式" tabindex="-1">3. 使用js表达式 <a class="header-anchor" href="#_3-使用js表达式" aria-label="Permalink to &quot;3. 使用js表达式&quot;">​</a></h2><p>style属性值也可以可以使用js表达式</p>`,3),d=l(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> redNumber </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> fontSize </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">rgb(</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">redNumber</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">, 50, 50)</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        fontSize</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">fontWeight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">bold</span><span style="color:#89DDFF;">\`</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}}&gt;</span><span style="color:#A6ACCD;">Alins is AWESOME!</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><h2 id="_4-单属性样式" tabindex="-1">4. 单属性样式 <a class="header-anchor" href="#_4-单属性样式" aria-label="Permalink to &quot;4. 单属性样式&quot;">​</a></h2><p>使用<code>style:</code>前缀的属性表示单属性样式，单属性样式的属性名<code>style:</code>后面的部分表示样式名，单属性样式的值表示样式值。单属性样式可以与style属性同时存在。单属性样式的样式名称也需要使用小驼峰形式。</p>`,3),_=l(`<div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">$mount</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#App</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">color: #f44;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">fontSize</span><span style="color:#89DDFF;">={</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">fontWeight</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bold</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Alins is AWESOME!</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,1);function h(E,g,u,m,v,f){const a=e("CodeBox");return t(),c("div",null,[r,F,y,i,n(a),C,n(a),A,n(a),d,n(a),_])}const x=p(D,[["render",h]]);export{b as __pageData,x as default};
