import { defineConfig } from 'vitepress'
import { devDependencies } from '../../package.json'

export default defineConfig({
  lang: 'ru-RU',
  title: 'Оферта',
  description: 'Оферта на заключение договора оказания архитектурных и проектных услуг',
  sitemap: {
    hostname: 'https://xn--80apagfo9e.xn--p1ai/oferta/'
  },

  lastUpdated: true,
  appearance: true,

  // https://vitepress.dev/reference/site-config#base
  base: '/oferta/',
  // cleanUrls: true,

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/ink-kin/oferta_swet_clishina/edit/master/docs/:path',
      text: 'Редактировать эту страницу',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ink-kin/klishina-oferta-jpg' }
    ],

    footer: {
      message: 'Оферта. MIT License.',
      copyright: 'Copyright © 2025',
    },
  },
})

function nav() {
  return [
      { text: 'Оферта', link: '/oferta' },
      { text: 'Контент', link: '/part-example' }]
}

function sidebarGuide() {
  return [
    {text: 'Документы',
        items: [
          { text: 'Оферта', link: '/oferta' },
          { text: 'Контент', link: '/part-example' },
          { text: 'Письмо', link: '/letter' }
        ]
      }
  ]
}
