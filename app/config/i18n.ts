import type { ModuleOptions } from '@nuxtjs/i18n'

export default <ModuleOptions> {
  locales: ['en', 'ru'],
  vueI18n: './i18n.config.ts',
  strategy: 'no_prefix',
  defaultLocale: 'en',
}
