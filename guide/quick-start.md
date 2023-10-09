# 快速上手

## 1.1 命令行创建

```
npm create alins
```

按照步骤执行完成之后，执行以下命令便可以安装运行起来了

```
cd <project>
npm i
npm run dev
```

您也可以直接克隆 [模版代码仓库](https://github.com/alinsjs/ebuild-template-alins)

## 1.2 使用Web编译器

<CodeBox :iframe='true' :height='60' :html='true' :pure='true'/>

```html
<script src='https://unpkg.com/alins-compiler-web'></script>
<script type='text/alins'> 
    let count = 1;
    <button onclick={count++} $mount='body'>
        count is {count}
    </button>;
</script>
```

注：
1. 该方式不建议在生产环境使用
2. 可以使用 type='text/babel'，这样可以获得编辑器自带的语法高亮

您也可以在 [演练场](https://alinsjs.github.io/playground/#48) 中自由使用，演练场也是使用Web编译器
