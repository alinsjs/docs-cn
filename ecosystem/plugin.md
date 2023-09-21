<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# 构建工具插件

Alins 目前支持以下主流构建工具

以下工具名称皆为 npm 包名，安装方式统一如下

```
npm i <package_name>
```

## 1. [vite-plugin-alins](https://www.npmjs.com/package/vite-plugin-alins)

```js
// vite.config.js
import { defineConfig } from 'vite'
import alins from 'vite-plugin-alins'

export default defineConfig({
  plugins: [alins()],
})
```

## 2. [rollup-plugin-alins](https://www.npmjs.com/package/rollup-plugin-alins)

```js
// rollup.config.js
import alins from 'rollup-plugin-alins'
 
export default {
  plugins: [
    alins()
  ]
}
```

## 3. [esbuild-plugin-alins](https://www.npmjs.com/package/esbuild-plugin-alins)

```js
import { build } from 'esbuild'
import alins from 'esbuild-plugin-alins'

build({
  plugins: [alins()],
});
```

## 4. [alins-loader](https://www.npmjs.com/package/alins-loader)

```js
module.exports = {
    module: {
        rules: [{
            test: /\.[jt]sx$/,
            use: [
                {loader: 'alins-loader'},
            ]
        }]
    }
};
```

### 您也可以基于以下工具自行定制开发工具

## 5. [alins-compiler-node](https://www.npmjs.com/package/alins-compiler-node)

alins-compiler-node 是nodejs环境下的 alins 编译器，上述的所有插件皆是封装该工具实现的编译功能，使用方式如下：

```js
const {parseAlins} = require('alins-compiler-node');
const code = 'let a=1; a++;';
const result = parseAlins(code);
```

parseAlins 方法一个可选的配置项，其中有三个可选属性：

1. ts：是否支持 typescript 编译，默认为false
2. importType：引入alins的方式，可选值有 esm、cjs、iife。默认值为 esm，表示使用import语句引入alins
3. filename：当前code模块文件名，默认会自动生成

```js
const {parseAlins} = require('alins-compiler-node');
const code = 'let a=1; a++;';
const result = parseAlins(code, {
    ts: false,
    importType: 'esm',
    filename: 'test.tsx',
});
```

## 6. [alins-compiler-core](https://www.npmjs.com/package/alins-compiler-core)

编译器核心模块，基本上开发者无需使用该模块。

该模块可以生成一个通用的babel插件，支持web和nodejs环境下使用，上文的alins-compiler-node以及后续章节的web编译器都是依赖这个模块。

```js
import {createBabelPluginAlins} from 'alins-compiler-core';
const babelPlugin = createBabelPluginAlins();
```

## 7. [babel-preset-alins](https://www.npmjs.com/package/babel-preset-alins)

Alins babel 预设，自带jsx和typescript转译功能，安装好之后，在 babel.config.json 或 babel.config.js 中使用：

```js
{
  "presets": [ "alins" ]
}
```

支持携带 importType、ts、jsx 参数，importType、ts参数含义与5中一致；jsx参数表示是否开启jsx转译，默认为true

```js
{
  "presets": [
    ["alins", {
      "importType": "esm",
      "ts": false,
      "jsx": true
    }]
  ]
}
```

## 8. [babel-plugin-alins](https://www.npmjs.com/package/babel-plugin-alins)

Alins babel 插件，不包含jsx和typescript转译功能，需要自行安装对应的插件，建议直接使用 [babel-preset-alins](https://www.npmjs.com/package/babel-preset-alins)

安装好之后，在 babel.config.json 或 babel.config.js 中使用：

```js
{
  "plugins": [ "alins" ]
}
```

支持携带 importType 参数，与5中含义一致，默认值为esm

```js
{
  "plugins": [
    ["alins", {
      "importType": "esm"
    }]
  ]
}
```

## 9. [eslint-config-alins](https://www.npmjs.com/package/eslint-config-alins)

Alins eslint config模块，安装好之后，在 .eslintrc 文件中配置：

```js
{
  "extends": "alins"
}
```