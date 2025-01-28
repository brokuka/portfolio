import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  presets: [
    presetUno(),
    presetAnimations(),
    presetShadcn({
      color: 'blue',
    }),
    presetIcons({
      customizations: {
        iconCustomizer(collection, icon, props) {
          props.width = '20px'
          props.height = '20px'
        },
      },
      collections: {
        custom: FileSystemIconLoader(
          './public/assets/icons',
        ),
      },
    }),
    presetWebFonts({
      fonts: {
        serif: 'Inter:400,500,700',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'components/**/*.{js,ts}',
      ],
    },
  },
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
