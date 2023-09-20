/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 00:53:27
 * @Description: Coding something
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const isProd = true;

const version = '0.0.31'

export default defineConfig({
  title: `Alins Docs(v${version})`,
  description: "The most elegant and concise WebUI framework",
  base: isProd ? '/docs-cn/': '/',
  outDir: './docs',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://shiyix.cn/images/alins.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:title', content: ogTitle }],
    // ['meta', { property: 'og:image', content: ogImage }],
    // ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: "The most elegant and concise WebUI framework" }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@alins_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      // 'script', {src: `https://unpkg.com/alins-compiler-web@${version}`}
      'script', { 
        src: isProd ? `https://unpkg.com/alins-compiler-web@${version}`
          : `/alins-compiler-web.iife.min.js`
      },
    ],
    ['link', { rel: 'stylesheet', href: isProd 
      ? 'https://unpkg.com/easy-icon@1.1.0/offline/css/easy-icon.css'
      : `/easy-icon.offline.css` 
    }],
    
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.usefathom.com/script.js',
    //     'data-site': 'CBDFBSLI',
    //     'data-spa': 'auto',
    //     defer: '',
    //   },
    // ],
  ],
  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://alinsjs.github.io/docs' },
  },
  themeConfig: {
    logo: 'https://shiyix.cn/images/alins.png',
    siteTitle: `Alins`,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/intro' },
      { text: '生态', link: '/ecosystem/plugin' },
      { text: '演练场', link: 'https://alinsjs.github.io/playground' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            {
              text: '简介',
              link: '/guide/intro',
            },
            {
              text: '对比',
              link: '/guide/compare',
            },
            {
              text: '快速上手',
              link: '/guide/quick-start',
            },
            {
              text: '概念',
              link: '/guide/concept',
            },
          ]
        },
        {
          text: '使用手册',
          items: [
            {
              text: 'JSX扩展',
              link: '/guide/jsx',
            },
            {
              text: '事件',
              link: '/guide/event',
            },
            {
              text: 'class',
              link: '/guide/class',
            },
            {
              text: 'style',
              link: '/guide/style',
            },
            {
              text: '生命周期',
              link: '/guide/lifecycle',
            },
            {
              text: '响应式数据',
              link: '/guide/reactive',
            },
            {
              text: '计算数据',
              link: '/guide/computed',
            },
            {
              text: '数据绑定',
              link: '/guide/binding',
            },
            {
              text: '组件与单向数据流',
              link: '/guide/component',
            },
            {
              text: '逻辑块',
              link: '/guide/logic',
            },
            {
              text: '编译规则',
              link: '/guide/rule',
            },
            // ! 暂时不暴露api需要考虑编译器兼容
            // {
            //   text: 'API',
            //   link: '/guide/api',
            // },
            {
              text: '状态管理',
              link: '/guide/store',
            },
            {
              text: '自定义渲染器',
              link: '/guide/render',
            },
          ]
        },
        {
          text: '附录',
          items: [
            {
              text: '查询手册',
              link: '/guide/quick',
            },
            {
              text: '工具链接',
              link: '/guide/libs',
            },
          ]
        },
      ],
      '/ecosystem/': [
        {
          text: '周边生态',
          items: [
            {
              text: '构建工具插件',
              link: '/ecosystem/plugin',
            },
            {
              text: 'Web编译器',
              link: '/ecosystem/web-compiler',
            },
            {
              text: 'Alins Standalone',
              link: '/ecosystem/standalone',
            },
            {
              text: '工具库',
              link: '/ecosystem/lib',
            },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alinsjs/alins' }
    ],
    footer: {
      message: 'Alins 2022-present',
      copyright: '@github/alinsjs',
    }
  }
})
