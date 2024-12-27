import fs from 'node:fs'
// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path'

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  components: {
    dirs: [
      {
        path: '~/components/pages',
        pathPrefix: true,
      },
      '~/components',
    ],
  },

  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  devtools: { enabled: true },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  features: {
    inlineStyles: false,
  },

  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
    'template-copyright',
    '@nuxt/icon',
    'nuxt-time',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  icon: {
    collections: ['mdi'],
  },

  compatibilityDate: '2024-12-09',

  colorMode: {
    classSuffix: '',
  },

  i18n: {
    locales: ['en', 'ru'],
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
    defaultLocale: 'en',
  },
})
