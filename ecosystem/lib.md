<!--
 * @Author: chenzhongsheng
 * @Date: 2023-09-17 16:33:22
 * @Description: Coding something
-->
# 周边工具

目前 Alins 处于起步阶段，相关工具库正在开发中，如有兴趣，欢迎开发者参与其中：

1. [alins-router](https://github.com/alinsjs/alins-router)
2. [alins-ui](https://github.com/alinsjs/alins-ui)
3. [alins-v](https://github.com/alinsjs/alins-v)

## Next Version TODO

- [ ] Branch 内存占用问题
- [ ] For 类型提示
- [ ] Async Data 类型标注
- [ ] alins-router - 官方路由库 （尽可能通用 能够直接使用原生js调用）
- [ ] alins-ui - 官方ui库
- [ ] alins-style style 标签优化 处理 提高css可用性, style 值类型声明 （能够使用reactive库配合着使用原生js使用）
- [ ] alins-style 支持兼容性扩展
- [ ] alins-ssr - 服务端渲染（尽可能通用 能够直接使用原生js调用）
- [ ] 增加 变量声明和函数参数的 @reactive，增加 @static 注释
- [ ] For 支持解构
- [ ] 新增 Frag 组件，定位是用于可以挂载属性的 <></>
- [ ] For Object 支持
- [ ] $if $elif $else $case $default 属性支持
- [ ] source-map 支持
- [ ] 编译器代码重构 - 分两步编译 第一步进行jsx解析；第二部进行alins reactive； 支持 ssr
- [ ] 运行时代码重构 - 优化内存空间占用和运行时间
- [ ] 生命周期优化，支持组件内使用；+ 语法糖 $remove:el,xxx();
- [ ] 完善测试