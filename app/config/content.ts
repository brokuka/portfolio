import type { ModuleOptions } from '@nuxt/content'

export default <Partial<ModuleOptions>> {
  highlight: {
    // themes: ['material-theme-lighter', 'vitesse-dark'],
    theme: {
      default: 'material-theme-lighter',
      dark: 'vitesse-dark',
    },
  },
}
