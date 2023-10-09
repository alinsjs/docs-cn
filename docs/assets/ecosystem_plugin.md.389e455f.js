import{_ as s,o as a,c as n,S as l}from"./chunks/framework.94c9b175.js";const A=JSON.parse('{"title":"构建工具插件","description":"","frontmatter":{},"headers":[],"relativePath":"ecosystem/plugin.md","filePath":"ecosystem/plugin.md"}'),p={name:"ecosystem/plugin.md"},o=l(`<h1 id="构建工具插件" tabindex="-1">构建工具插件 <a class="header-anchor" href="#构建工具插件" aria-label="Permalink to &quot;构建工具插件&quot;">​</a></h1><p>Alins 目前支持以下主流构建工具</p><p>以下工具名称皆为 npm 包名，安装方式统一如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i &lt;package_name&gt;</span></span></code></pre></div><h2 id="_1-vite-plugin-alins" tabindex="-1">1. <a href="https://www.npmjs.com/package/vite-plugin-alins" target="_blank" rel="noreferrer">vite-plugin-alins</a> <a class="header-anchor" href="#_1-vite-plugin-alins" aria-label="Permalink to &quot;1. [vite-plugin-alins](https://www.npmjs.com/package/vite-plugin-alins)&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// vite.config.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> alins </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vite-plugin-alins</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">alins</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="_2-rollup-plugin-alins" tabindex="-1">2. <a href="https://www.npmjs.com/package/rollup-plugin-alins" target="_blank" rel="noreferrer">rollup-plugin-alins</a> <a class="header-anchor" href="#_2-rollup-plugin-alins" aria-label="Permalink to &quot;2. [rollup-plugin-alins](https://www.npmjs.com/package/rollup-plugin-alins)&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// rollup.config.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> alins </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rollup-plugin-alins</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">alins</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="_3-esbuild-plugin-alins" tabindex="-1">3. <a href="https://www.npmjs.com/package/esbuild-plugin-alins" target="_blank" rel="noreferrer">esbuild-plugin-alins</a> <a class="header-anchor" href="#_3-esbuild-plugin-alins" aria-label="Permalink to &quot;3. [esbuild-plugin-alins](https://www.npmjs.com/package/esbuild-plugin-alins)&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">build</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">esbuild</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> alins </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">esbuild-plugin-alins</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">build</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#82AAFF;">alins</span><span style="color:#A6ACCD;">()]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_4-alins-loader" tabindex="-1">4. <a href="https://www.npmjs.com/package/alins-loader" target="_blank" rel="noreferrer">alins-loader</a> <a class="header-anchor" href="#_4-alins-loader" aria-label="Permalink to &quot;4. [alins-loader](https://www.npmjs.com/package/alins-loader)&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">jt</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">sx</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">loader</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alins-loader</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            ]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h3 id="您也可以基于以下工具自行定制开发工具" tabindex="-1">您也可以基于以下工具自行定制开发工具 <a class="header-anchor" href="#您也可以基于以下工具自行定制开发工具" aria-label="Permalink to &quot;您也可以基于以下工具自行定制开发工具&quot;">​</a></h3><h2 id="_5-alins-compiler-node" tabindex="-1">5. <a href="https://www.npmjs.com/package/alins-compiler-node" target="_blank" rel="noreferrer">alins-compiler-node</a> <a class="header-anchor" href="#_5-alins-compiler-node" aria-label="Permalink to &quot;5. [alins-compiler-node](https://www.npmjs.com/package/alins-compiler-node)&quot;">​</a></h2><p>alins-compiler-node 是nodejs环境下的 alins 编译器，上述的所有插件皆是封装该工具实现的编译功能，使用方式如下：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">parseAlins</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alins-compiler-node</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> code </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">let a=1; a++;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parseAlins</span><span style="color:#A6ACCD;">(code)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>parseAlins 方法一个可选的配置项，其中有三个可选属性：</p><ol><li>ts：是否支持 typescript 编译，默认为false</li><li>importType：引入alins的方式，可选值有 esm、cjs、iife。默认值为 esm，表示使用import语句引入alins</li><li>filename：当前code模块文件名，默认会自动生成</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">parseAlins</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alins-compiler-node</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> code </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">let a=1; a++;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">parseAlins</span><span style="color:#A6ACCD;">(code</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">importType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">esm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">filename</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.tsx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_6-alins-compiler-core" tabindex="-1">6. <a href="https://www.npmjs.com/package/alins-compiler-core" target="_blank" rel="noreferrer">alins-compiler-core</a> <a class="header-anchor" href="#_6-alins-compiler-core" aria-label="Permalink to &quot;6. [alins-compiler-core](https://www.npmjs.com/package/alins-compiler-core)&quot;">​</a></h2><p>编译器核心模块，基本上开发者无需使用该模块。</p><p>该模块可以生成一个通用的babel插件，支持web和nodejs环境下使用，上文的alins-compiler-node以及后续章节的web编译器都是依赖这个模块。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">createBabelPluginAlins</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alins-compiler-core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> babelPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createBabelPluginAlins</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="_7-babel-preset-alins" tabindex="-1">7. <a href="https://www.npmjs.com/package/babel-preset-alins" target="_blank" rel="noreferrer">babel-preset-alins</a> <a class="header-anchor" href="#_7-babel-preset-alins" aria-label="Permalink to &quot;7. [babel-preset-alins](https://www.npmjs.com/package/babel-preset-alins)&quot;">​</a></h2><p>Alins babel 预设，自带jsx和typescript转译功能，安装好之后，在 babel.config.json 或 babel.config.js 中使用：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">presets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [ </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>支持携带 importType、ts、jsx 参数，importType、ts参数含义与5中一致；jsx参数表示是否开启jsx转译，默认为true</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">presets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">    [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">importType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">esm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="_8-babel-plugin-alins" tabindex="-1">8. <a href="https://www.npmjs.com/package/babel-plugin-alins" target="_blank" rel="noreferrer">babel-plugin-alins</a> <a class="header-anchor" href="#_8-babel-plugin-alins" aria-label="Permalink to &quot;8. [babel-plugin-alins](https://www.npmjs.com/package/babel-plugin-alins)&quot;">​</a></h2><p>Alins babel 插件，不包含jsx和typescript转译功能，需要自行安装对应的插件，建议直接使用 <a href="https://www.npmjs.com/package/babel-preset-alins" target="_blank" rel="noreferrer">babel-preset-alins</a></p><p>安装好之后，在 babel.config.json 或 babel.config.js 中使用：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [ </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>支持携带 importType 参数，与5中含义一致，默认值为esm</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">plugins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">    [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alins</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">importType</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">esm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="_9-eslint-config-alins" tabindex="-1">9. <a href="https://www.npmjs.com/package/eslint-config-alins" target="_blank" rel="noreferrer">eslint-config-alins</a> <a class="header-anchor" href="#_9-eslint-config-alins" aria-label="Permalink to &quot;9. [eslint-config-alins](https://www.npmjs.com/package/eslint-config-alins)&quot;">​</a></h2><p>Alins eslint config模块，安装好之后，在 .eslintrc 文件中配置：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">extends</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alins</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,37),e=[o];function t(c,r,i,D,y,F){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};
