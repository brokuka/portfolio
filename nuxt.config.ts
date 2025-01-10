import { content, i18n } from './app/config/index'

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    typedPages: true,
  },

  features: {
    inlineStyles: false,
  },

  components: {
    dirs: [
      {
        path: '~/components/page',
        pathPrefix: true,
      },
      '~/components',
    ],
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  routeRules: {
    '/projects/**': {
      prerender: true,
    },
  },

  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    'template-copyright',
    'nuxt-time',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  compatibilityDate: '2024-12-09',

  colorMode: {
    classSuffix: '',
  },

  i18n,
  content,
})
