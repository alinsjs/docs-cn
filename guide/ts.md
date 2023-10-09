<!--
 * @Author: chenzhongsheng
 * @Date: 2023-10-09 20:05:08
 * @Description: Coding something
-->
# Typescript 使用实践

目前，由于编辑器插件正在规划中，暂时对于typescript类型支持主要是依赖编辑器对tsx文件的支持，所以对于Alins中部分自定义的语法并不能很好的支持，但是我们可以有一些实践来规避ts的静态检查报错

## JSX.Props

当对组件使用诸如 `$for`, `$if` 之类的自定义属性时，typescript 会抛出一个属性不存在的异常，我们可以使用 JSX.Props 属性来规避。同时可以使用 JSX.Children 来指定子元素的参数类型

```tsx
let arr = [1,2,3];

<div $mount='#App'>
    <Component $for={arr} item={$item}>
        <span>{$index}</span>
    </Component>
</div>

function Component({item}: JSX.Props<{item: number}>, children: JSX.Children){
    return <div>{item} {children}</div>;
}
```

## JS Label 定义变量

当使用 `$:`, `_:`, `shallow:` 定义变量时，由于ts并不能识别，所以在tsx文件中需要手动声明一下变量，如下

```tsx
declare let aaaa: number;
$: aaaa = 1;
```

## ts-ignore

对于一些ts代码中的其他扫描报错，可以使用 `// @ts-ignore` 注释跳过

```tsx
// @ts-ignore
mount: <div></div>, '#App';
```