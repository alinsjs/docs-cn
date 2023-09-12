<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {compileCode, download, copy} from '../utils/alins-compiler';
import eveit from 'eveit'

import hljs from 'highlight.js/lib/core';

const blockRef = ref();
const codeRef = ref();
const compileRef = ref();

let code = ref('');
let name = ref('运行结果');
let info = ref('');

let logs = ref([] as string[]);

let showCompileResult = ref(false);

let timer: any = null;

function setInfo(text: string) {
    info.value = text;

    clearTimeout(timer);
    timer = setTimeout(()=>{
        info.value = '';
    }, 2000)
}

const id = `id_${Math.random().toString().substring(2)}`;

let runCode = ()=>{};

function downloadHtml(){
    download(code.value);
    setInfo('下载示例成功!');
}

function copyCode(){
    copy(code.value);
    setInfo('复制成功!');
}

function openInPlayground(){
    console.log(code.value);
    eveit.emit('playground-code', {code: code.value})
}

onMounted(async ()=>{
    const codeEle = blockRef.value.nextSibling;
    const codeDom = codeEle.querySelector('code');

    if(!codeDom) return;
    
    code.value = codeDom.textContent;

    codeRef.value.appendChild(codeEle);
    // @ts-ignore
    const compileCodeResult = await compileCode(code.value);

    const mockConsole = {
        log(...args: any[]){logs.value.push(args.map((item)=>{
            return typeof item === 'object' ? JSON.stringify(item): item
        }).join(' '));},
        clear(){logs.value = []},
    }
    const resultCode = compileCodeResult.replace(/import *\{(.*?)\} *from *['"]alins['"]/g, 'const {$1} = window.Alins');

    const fn = new Function('console', resultCode.replace('#App', `#${id}`).replace(/\.getElementById\(['"]App['"]\)/i, `.getElementById('${id}')`));

    runCode = ()=>{
        document.getElementById(id)!.innerHTML = '';
        fn(mockConsole);
        mockConsole.clear();
        setInfo('刷新成功!');
    }

    fn(mockConsole);

    const highlightedCode = hljs.highlight(
        compileCodeResult,
        { language: 'javascript' }
    );
    compileRef.value.innerHTML = highlightedCode.value;
})
</script>

<template>
    <div class="code-block" ref="blockRef">
        <div ref="codeRef"></div>
        <div class="code-title">
            <span style="font-weight: bold;">{{ name }} 
                <span @click="showCompileResult=!showCompileResult"
                     class="compiler-toggle">{{showCompileResult ? '隐藏':'显示'}}编译产物</span>
            </span>
            <span style="color:#4c4">{{ info }}</span>
            <span class='editor-btns'>
                <i @click="openInPlayground" title="在试验场中打开" class="ei-code"></i>
                <i @click="copyCode" title="复制代码" class="ei-copy"></i>
                <i @click="downloadHtml" title='下载示例' class="ei-download-alt"></i>
                <i @click="runCode" title='刷新结果' class="ei-refresh"></i>
            </span>
        </div>
        <div ref="resultRef" class="result-box" :id="id"></div>
        <div v-show="logs.length > 0" class="result-box console-result">
            <i title='Clear Console' class="ei-times" @click="logs=[]"></i>
            <div class="console-item" v-for="item in logs">{{ item }}</div>
        </div>
        <pre v-show="showCompileResult" ref="compileRef" class="result-box compile-result"></pre>
    </div>
</template>

<style lang="less">
.code-block {
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    padding-bottom: 15px;
    .code-title{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .editor-btns{
            display: flex;
            gap: 10px;
            padding-right: 5px;
            font-size: 18px;
            i{
                cursor: pointer;
                transition: color .1s linear;
                &:hover{
                    color: var(--vp-c-brand-light);
                }
            }
        }
        .compiler-toggle{
            color: var(--vp-c-brand-lighter);
            font-weight: normal;
            margin-left: 5px;
            text-decoration: underline;
            font-size: 13px;
            cursor: pointer;
            &:hover{
                color: var(--vp-c-brand);
            }
        }
    }
}
.result-box{
    padding: 15px;
    background-color: #171717;
    overflow: auto;
    color: #eee;
    button, input, select{
        margin: 5px;
        padding: 4px 8px;
        background-color: #222;
        border: none;
        border-radius: 1px;
        outline: none;
        color: #fff;
        border: 1px solid #666;
        border-radius: 5px;
    }
    button, select{
        cursor: pointer;
        &:hover {
            background-color: #333;
        }
    }
    button:active{
        background-color: #444;
    }
    &.compile-result, &.console-result{
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 0;
        border-top: 1px solid #333;
    }
    &.console-result{
        position: relative;
        padding: 5px 15px;;
        .ei-times{
            font-size: 18px;
            position: absolute;
            cursor: pointer;
            top: 5px;
            right: 5px;
            &:hover{
                color: #f44;
            }
        }
        .console-item{
            font-size: 13px;
            line-height: 15px;
            color: #ccc;
            padding: 3px 0;
            border-bottom: 1px solid #333;
            word-break: break-all;
            &:last-child{
                border-color: transparent;
            }
        }
    }
}
</style>
