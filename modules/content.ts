import fsp from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('build:before', async () => {
      const contentDir = path.join(process.cwd(), 'content/projects')
      await fsp.mkdir(contentDir, { recursive: true })

      await Promise.all(['shop-api-client', 'shop-api-server'].map(async (name) => {
        const response = await fetch(`https://raw.githubusercontent.com/brokuka/${name}/main/README.md`)
        await fsp.writeFile(path.join(contentDir, `${name}.md`), await response.text())
      }))
    })
  },
})
