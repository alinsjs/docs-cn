/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 00:53:27
 * @Description: Coding something
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const isProd = true;

export default defineConfig({
  title: "Alins Docs",
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
      // 'script', { src: },
      'script', { 
        src: isProd ? 'https://cdn.jsdelivr.net/npm/alins-compiler-web'
          : `/alins-compiler-web.iife.min.js`
      },
    ],
    ['link', { rel: 'stylesheet', href: isProd 
      ? 'https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon.css'
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
    siteTitle: 'Alins',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/intro' },
      { text: 'API', link: '/api/' },
      { text: '生态', link: '/ecosystem/plugin' },
      { text: '演练场', link: 'https://alinsjs.github.io/playground' },
      { text: 'Github', link: 'https://github.com/alinsjs/alins' },
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
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            {
              text: '概述',
              link: '/api/index',
            },
          ]
        }
      ],
      '/ecosystem/': [
        {
          text: '周边生态',
          items: [
            {
              text: '插件',
              link: '/ecosystem/plugin',
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
