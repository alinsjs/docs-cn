<!--
 * @Author: chenzhongsheng
 * @Date: 2023-10-10 07:43:01
 * @Description: Coding something
-->
# TODO-LIST Demo

以下为一个todo list的demo程序，比较完整的演示了Alins的核心功能，你也可以在[演练场](https://alinsjs.github.io/playground/#56)中自由使用：

<CodeBox/>

```tsx
function List () {
    const list = ['todo1'];
    let value = '';
    return <div>
        <div>
            <input type="text" value={value}/>
            <button onclick={list.push(value)}>add</button>
        </div>
        <For data={list}>
            <Item item={$item} index={$index}>
                <button onclick={list.splice($index, 1)}>delete</button>
            </Item>
        </For>
    </div>;
}

function Item ({item, index}, children) {
    let done = false;
    return <div style={{
        textDecoration: done ? 'line-through' : 'none',
        color: done ? '#888' : 'inherit',
    }}>
        <span>{index + 1}: {item}</span>
        <button onclick={ done = !done }>{done ? 'undo' : 'done'}</button>
        {children}
    </div>;
}

<List $mount='#App'/>;
```