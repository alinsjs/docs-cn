<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# Web编译器

Alins提供了一个可供开发调试使用的浏览器环境的编译器，由于直接在浏览器环境进行的编译，所以不建议在生产环境直接使用。

## 1. 使用

将以下代码保存在 html 文件中便可以直接在浏览器环境编译运行alins应用：

<CodeBox :iframe='true' :height='60' :html='true'/>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src='https://unpkg.com/alins-compiler-web'></script>
    <script type='text/alins'> 
        let count = 1;
        <button onclick={count++} $mount='body'>
            count is {count}
        </button>;
    </script>
</body>
</html>
```

## 2. type属性

Web编译器可以识别三种 type, `text/alins`, `text/babel`, `text/jsx`, 将其中的代码进行编译执行。

## 3. import属性

可以使用 import 属性指定 alins 的引入方式，可选值有:

1. esm: 表示使用 import 语句引入alins
2. cjs: 表示使用 require 方法引入alins
3. iife 表示从 window.Alins引入alins，默认值为 iife

使用方式如下

```html
<script type='text/alins' import="esm"> 
    let count = 1;
    <button onclick={count++} $mount='body'>
        count is {count}
    </button>;
</script>
```

## 4. ts属性

ts 属性用于是否使用 typescript

开启方式如下

```html
<script type='text/alins' ts> 
    let count: number = 1;
    <button onclick={count++} $mount='body'>
        count is {count}
    </button>;
</script>
```


