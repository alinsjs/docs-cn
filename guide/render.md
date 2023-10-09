# 自定义渲染器

Alins 虽然是直接操作DOM元素，但是也做了一层可选的UI抽象层，使得开发者可以通过修改render函数或者自定义渲染元素来进行自定义渲染或者跨平台开发。

## 1. 自定义render函数

通过Alins提供的useRenderer函数可以自定义渲染函数，自定义渲染函数之后Alins内部会启用UI抽象层，最终通过开发者自定义的render函数将UI抽象层渲染到任意对象上。

以下是一个使用 console.log 打印 UI抽象层的例子：

<CodeBox :iframe='true' :height='60'></CodeBox>

```jsx
import { useRenderer, CustomElement } from 'alins';

function start(){
    const root = useRenderer({
        render (node: CustomElement) {
            const prefix = new Array(node.deep).fill('  ').join('');
            const text = `${node.innerText}`;
            console.log(`${prefix}${node.tagName || 'text'}: ${text.trim()}`);
        }
    });
    let v = 0;
    const v2 = v * 2;
    <div $mount={root}>
        value = {v}
        <div>value * 2 = {v2}</div>
    </div>;
    function loopRender () {
        v ++;
        console.clear();
        root.render();
        setTimeout(() => {requestAnimationFrame(loopRender);}, 1000);
    }
    loopRender();
}
<button onclick={start} $mount='#App'>Start</button>
```

## 2. 使用canvas作为容器

我们也可以使用canvas作为容器渲染 Alins 的UI抽象层，这在某些以canvas作为基础的场景中十分有用，如 H5游戏引擎、小游戏环境等。

<CodeBox :iframe='true' :height='390' />

```jsx
import { useRenderer, CustomElement } from 'alins';

function start(e){
    e.target.remove();

    let msg = 'Hello World';
    
    let canvas;
    <div $mount='#App'>
        <canvas $ref={canvas} style='border: 1px solid #666;'></canvas>
        <div>msg = {msg}</div>
        <button onclick={msg += '!'}>Click Me </button>
    </div>;

    const ctx = initCanvasCtx(canvas);

    const root = useRenderer({
        render (element: CustomElement) {
            const parent = element.parentElement || { deep: 0 }; // @static
            if (!parent.textLeft) parent.textLeft = 10;
            ctx.fillText(element.textContent, parent.textLeft, (parent.deep - 1)  * 15 + 10);
            parent.textLeft += (ctx.measureText(element.textContent).width);
            return el => {el.textLeft = 0;};
        },
    });

    <div $mount={root}>
        msg = {msg}
    </div>;
    loopRender();

    function loopRender () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        root.render();
        requestAnimationFrame(loopRender);
    }
}

<button onclick={start} $mount='#App'>Start</button>

function initCanvasCtx (canvas, size = 300) {
    const scale = window.devicePixelRatio;
    canvas.width = canvas.height = size * scale;
    canvas.style.width = canvas.style.height = `${size}px`;
    canvas.style.backgroundColor = '#333';
    const ctx = canvas.getContext('2d');
    ctx.font = `${15 * scale}px Microsoft Sans Serif`;
    ctx.fillStyle = '#eee';
    ctx.textBaseline = 'top';
    return ctx;
}
```

## 3. 自定义抽象层

开发者可以通过Alins提供的接口来自定义抽象层，首先通过实现 IElement 接口来自定义UI元素类，然后通过调用`defineRenderer`方法来自定义抽象层和渲染器。

<CodeBox :iframe='true' :height='60'></CodeBox>

```jsx
import { IElement, defineRenderer, ILifeListener } from 'alins';

const ElementType = {
    Element: 0,
    Text: 1,
    Empty: 2,
    Frag: 3,
};

class LogElement implements IElement {
    static Root: null|LogElement = null;
    type = ElementType.Element;
    style = {}; // mock
    tagName = '';
    className = '';
    innerText = '';
    get textContent () {return this.innerText;};
    set textContent (v) {this.innerText = v;}
    deep = 0;
    get prefix () {
        return new Array(this.deep).fill('--').join('');
    }
    addEventListener () {};
    removeEventListener () {};
    setAttribute () {};
    removeAttribute () {};
    getAttribute () {return '';};
    classList = {
        add () {},
        remove () {}
    };
    constructor (type, text = '', tag = '') {
        this.type = type;
        this.tagName = tag;
        this.innerText = text;
        if (tag === 'Root') LogElement.Root = this;
    }
    parentElement: LogElement|null = null;
    get parentNode () {return this.parentElement;};
    removeCallList: any[] = [];
    remove () {
        const children = this.parentElement?.children;
        if (children) {
            children.splice(children.indexOf(this), 1);
            this.removeCallList.forEach(call => call(this));
        }
    }
    get innerHTML () {return this.innerText;}
    get outerHTML () {return this.innerText;}
    children: LogElement[] = [];
    get childNodes () {
        return this.childNodes;
    }
    mountCallList: any[] = [];
    appendChild (child: LogElement) {
        this.children.push(child);
        child.mountCallList.forEach(call => call(child));
    }
    get nextSibling () {
        return this.parentElement?.children[this.index + 1] || null;
    }
    insertBefore (node, child) {
        if (child.parentElement !== this) {
            throw new Error('insertBefore error');
        }
        this.parentElement?.children.splice(child.index - 1, 0, node);
        child.mountCallList.forEach(call => call(child));
        return node;
    }
    get index () {
        const parent = this.parentElement;
        return !parent ? -1 : parent.children.indexOf(this);
    }
    render () {
        const text = `${this.innerText}`;
        if (this.type === ElementType.Text) {
            text && console.log(`${this.prefix}text: ${text.trim()}`);
        } else if (this.type === ElementType.Element) {
            console.log(`${this.prefix}${this.tagName}: ${text.trim()}`);
            this.children.forEach(item => {
                item.deep = this.deep + 1;
                item.render();
            });
        }
    }
}

function start(){
    defineRenderer({
        querySelector (selector) {return selector === '#Root' ? LogElement.Root : null;},
        createElement (tag = '') {
            return new LogElement(ElementType.Element, '', tag);
        },
        createTextNode (text) {
            return new LogElement(ElementType.Text, text);
        },
        createEmptyMountNode () {
            return new LogElement(ElementType.Empty);
        },
        createFragment () {
            return new LogElement(ElementType.Frag);
        },
        isFragment (node) {
            return node.type === ElementType.Frag;
        },
        isElement (node) {
            return node.type === ElementType.Element || node.type === ElementType.Text;
        },
        onMounted (parent: LogElement, node: LogElement, mounted: ILifeListener<void|ILifeListener>) {
            node.mountCallList.push(mounted);
        },
        onRemoved (parent: LogElement, node: LogElement, removed: ILifeListener) {
            node.removeCallList.push(removed);
        },
    });

    const Root = new LogElement(ElementType.Element, '', 'Root');

    let v = 0;
    const v2 = v * 2;

    <div $mount='#Root'>
        value = {v}
        <div>value * 2 = {v2}</div>
    </div>;

    function loopRender () {
        v ++;
        console.clear();
        Root.render();
        setTimeout(() => {requestAnimationFrame(loopRender);}, 1000);
    }

    loopRender();
}

<button onclick={start} $mount='#App'>Start</button>
```

## 4. Nodejs 中使用

在nodejs中使用需要首先将jsx文件通过alins相关插件编译成js文件。

本例中使用 babel + [babel-plugin-alins](https://www.npmjs.com/package/babel-plugin-alins) 编译

### 4.1 环境准备

首先npm init初始化环境，然后安装以下包

```
npm i @babel/core @babel/node alins babel-preset-alins -D
```

配置 babel.config.json

```json
{
    "presets": [ ["alins", {"importType": "cjs"}] ]
}
```

新建 index.jsx

```jsx
const { version } = require('alins');
console.log('Hello Alins! v = ', version);
```

package.json 增加脚本：

```json
"scripts": {
    "dev": "babel-node ./index.jsx"
},
```

然后执行 `npm run dev`，看到打印了 Hello Alins! 就表示安装成功了。

### 4.2 自定义渲染器

将index.jsx中文件修改为以下代码：

```jsx
const { useRenderer } = require('alins');

const root = useRenderer({
    render (node) {
        const prefix = new Array(node.deep).fill('  ').join('');
        const text = `${node.innerText}`;
        console.log(`${prefix}${node.tagName || 'text'}: ${text.trim()}`);
    }
});
let v = 0;
const v2 = v * 2;
<div $mount={root}>
        value = {v}
    <div>value * 2 = {v2}</div>
</div>;
function loopRender () {
    v ++;
    console.clear();
    root.render();
    setTimeout(loopRender, 1000);
}
loopRender();
```

然后执行 `npm run dev`，就可以看到在控制台中打印的ui了