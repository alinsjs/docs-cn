<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# 周边工具

目前 Alins 处于起步阶段，相关工具库正在开发中，如有兴趣，欢迎开发者参与其中：

目前有以下规划：

1. [alins-router](https://github.com/alinsjs/alins-router): 路由库
2. [alins-v](https://github.com/alinsjs/alins-v): 表单校验库
3. [alins-ui](https://github.com/alinsjs/alins-ui): UI库（基于material design 或 antd）
4. [alins-style](https://github.com/alinsjs/alins-style): 完整css-in-js方案
5. [alins-ssr](https://github.com/alinsjs/alins-ssr): 服务端渲染
6. [alins-html](https://github.com/alinsjs/alins-html): 模版编译方案支持，基于html文件和语法，最贴近html语义
7. [alins-vsc](https://github.com/alinsjs/alins-vsc): Alins vscode 插件，支持部分jsx不支持的语法高亮和智能提示，如 For 组件中的 $item 和自定义item。alins-html 智能提示
8.  [alins-animate](https://github.com/alinsjs/alins-animate): 动画支持
9.  [alins-use](https://github.com/alinsjs/alins-use): 工具合集
10. [alins-term](https://github.com/alinsjs/alins-term): 自定义nodejs渲染器实现终端绘制UI
11. [alins-canvas](https://github.com/alinsjs/alins-term): 自定义canvas渲染器实现基于canvas绘制UI
12. [alins-native](https://github.com/alinsjs/alins-native): 基于alins实现跨端方案

## Next Version TODO

- [ ] alins-router - 官方路由库 （尽可能通用 能够直接使用原生js调用）
- [ ] alins-ui - 官方ui库
- [ ] alins-style style 标签优化 处理 提高css可用性, style 值类型声明 （能够使用reactive库配合着使用原生js使用）
- [ ] alins-style 支持兼容性扩展
- [ ] alins-ssr - 服务端渲染（尽可能通用 能够直接使用原生js调用）
- [ ] 增加 变量声明和函数参数的 @reactive，增加 @static 注释
- [ ] For 支持解构
- [ ] For Object 支持
- [ ] source-map 支持
- [ ] 编译器代码重构 - 分两步编译 第一步进行jsx解析；第二部进行alins reactive； 支持 ssr
- [ ] 运行时代码重构 - 优化内存空间占用和运行时间
- [ ] 完善测试
- [ ] Branch 内存占用问题
- [ ] For 类型提示
- [ ] Async Data 类型标注
- [ ] alins-vsc
- [ ] 大列表排序时移动dom元素优化性能
- [ ] 模版语法支持 html 文件作为模版语言
- [ ] computed 重构；dirty 标记。优化 const b = a++; 逻辑