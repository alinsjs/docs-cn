<!--
 * @Author: tackchen
 * @Date: 2022-10-23 21:15:35
 * @Description: Coding something
-->

<p align="center">
    <img src='https://shiyix.cn/alins.png' width='100px'/>
</p> 

<p align="center">
    <a href="https://www.github.com/alinsjs/alins/stargazers" target="_black">
        <img src="https://img.shields.io/github/stars/alinsjs/alins?logo=github" alt="stars" />
    </a>
    <a href="https://www.github.com/alinsjs/alins/network/members" target="_black">
        <img src="https://img.shields.io/github/forks/alinsjs/alins?logo=github" alt="forks" />
    </a>
    <a href="https://www.npmjs.com/package/alins" target="_black">
        <img src="https://img.shields.io/npm/v/alins?logo=npm" alt="version" />
    </a>
    <a href="https://www.npmjs.com/package/alins" target="_black">
        <img src="https://img.shields.io/npm/dm/alins?color=%23ffca28&logo=npm" alt="downloads" />
    </a>
    <a href="https://www.jsdelivr.com/package/npm/alins" target="_black">
        <img src="https://data.jsdelivr.com/v1/package/npm/alins/badge" alt="jsdelivr" />
    </a>
</p>

<p align="center">
    <a href="https://github.com/theajack" target="_black">
        <img src="https://img.shields.io/badge/Author-%20theajack%20-7289da.svg?&logo=github" alt="author" />
    </a>
    <a href="https://www.github.com/alinsjs/alins/blob/master/LICENSE" target="_black">
        <img src="https://img.shields.io/github/license/alinsjs/alins?color=%232DCE89&logo=github" alt="license" />
    </a>
    <a href="https://cdn.jsdelivr.net/npm/alins"><img src="https://img.shields.io/bundlephobia/minzip/alins.svg" alt="Size"></a>
    <a href="https://github.com/alinsjs/alins/search?l=javascript"><img src="https://img.shields.io/github/languages/top/alinsjs/alins.svg" alt="TopLang"></a>
    <a href="https://github.com/alinsjs/alins/issues"><img src="https://img.shields.io/github/issues-closed/alinsjs/alins.svg" alt="issue"></a>
    <a href="https://www.github.com/alinsjs/alins"><img src="https://img.shields.io/librariesio/dependent-repos/npm/alins.svg" alt="Dependent"></a>
</p>

### ???? [Alins](https://github.com/alinsjs/alins): `Al`l-`in`-j`s` web ui???????????? jsx/template/vdom/css/html

**[English](https://github.com/alinsjs/alins/blob/master/README.md) | [??????](https://alinsjs.github.io/docs-cn) | [????????????](https://github.com/alinsjs/alins/blob/master/helper/version.md) | [????????????/??????](https://github.com/alinsjs/alins/issues/new) | [Gitee](https://gitee.com/alinsjs/alins) | [?????????](https://theajack.github.io/message-board/?app=alins)**

## 0 ????????????

### 0.1 npm

```
npm i alins
```

```js
import {div} from 'alins';
div('Hello World!').mount();
```

### 0.2 cdn

```html
<script src="https://cdn.jsdelivr.net/npm/alins"></script>
<script>
  Alins.div('Hello World!').mount();
</script>
```

## 1. ??????

Alins ????????? All-in-js web ui ????????????????????????????????????????????? js/ts ???????????????????????????????????? dom/css/state ??????????????? web ?????????????????????dom???css?????????????????????????????????

1. ???vdom??????????????????????????????dom/textNode???dom????????????
2. alins-style css-in-js?????????????????????/???????????????/??????????????????
3. ????????????????????????
4. ??????for,if,show,switch,model?????????
5. ??????computed???watch
6. ??????????????? + ????????????
7. ?????????ts??????

???????????????????????????[????????????](https://shiyix.cn/alins)

## 2. ????????????

### 2.1. ????????? [????????????](https://shiyix.cn/jsbox?github=alinsjs.docs.samples/count.js)

```js
import { button, comp, click, $, mount } from 'alins';

function Count () {
    const count = $(0);
    return button(
        click(() => {count.value++;}),
        $`Count is ${count}`
    );
}

comp(Count).mount();
```

### 2.2. ??????????????????+model?????? [????????????](https://shiyix.cn/jsbox?github=alinsjs.docs.samples/model.js)

```js
import {
    button, comp, prop, click, $, input, span,
} from '../alins';

export function Count () {
    const count = $(0);
    return [
        span('??????count'),
        input.model(count, 'number'),
        comp(CountProps)(prop({value: count})),
        button('add', click(() => {count.value++;})),
    ];
};

export function CountProps ({props}) {
    return span($`Count is ${props.value}`);
}

comp(Count).mount();
```

## 3. todolist [????????????](https://shiyix.cn/jsbox?github=alinsjs.docs.samples/todo-list.js)

```js
import {comp, button, div, input, click, $} from '../alins';
import {style} from '../alins-style';


export function todoList () {
    const edit = $('');
    const list = $([]);
    const addItem = () => {
        list.push({content: edit.value, done: false});
        edit.value = '';
    };
    const removeItem = (index) => { list.splice(index.value, 1); };
    const finishItem = (item) => { item.done = !item.done.value; };

    const itemStyle = (item) => {
        return style.textDecoration(() => item.done.value ? 'line-through' : 'none')
            .color(() => item.done.value ? '#888' : '#222');
    }

    return [
        input.model(edit),
        button('??????', click(addItem)),
        div('.todo-list',
            div.for(list)((item, index) => [
                itemStyle(item),
                $`${() => index.value + 1}:${item.content}`,
                button('??????', click(removeItem).args(index)),
                button(
                    $`${() => item.done.value ? '??????' : '??????'}`,
                    click(finishItem).args(item)
                ),
            ]),
        ),
    ];
}
comp(todoList).mount();
```

## 4. css in js [????????????](https://shiyix.cn/jsbox?github=alinsjs.docs.samples/style.js)

```js
import {
    div, $ , button, hover, click, input, cls
} from 'alins';
import {css, style} from '../alins-style';

function Style () {
    const num = $(30);
    const active = $(false);

    css('.main')(
        style({
            color: '#888',
            marginLeft: $`${num}px`,
        }),
        ['&.active', style.fontSize(num)],
        ['.child', style.marginTop(num)]
    ).mount();

    return div(`parent.main`,
        cls({active}),
        hover('color: #f44'),
        input.model(num, 'number'),
        button('toggle active', click(() => active.value = !active.value)),
        div('child.child'),
    );
}

comp(Style).mount();
```