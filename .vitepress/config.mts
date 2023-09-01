/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 00:53:27
 * @Description: Coding something
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Alins Docs",
  description: "The most elegant and concise WebUI framework",

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
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'CBDFBSLI',
        'data-spa': 'auto',
        defer: '',
      },
    ],
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
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api' },
      { text: '演练场', link: '/playground' },
      { text: '生态', link: '/ecosystem' },
      { text: '关于', link: '/about' },
      { text: 'alins', link: '/alins' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            {
              text: 'Why Vite',
              link: '/guide/why',
            },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            {
              text: 'Why Vite',
              link: '/guide/why',
            },
          ]
        }
      ],
      '/ecosystem/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Why Vite',
              link: '/guide/why',
            },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Alins 2022-present',
      copyright: '@github/alinsjs',
    }
  }
})
