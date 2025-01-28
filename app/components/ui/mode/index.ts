export { default as ColorMode } from './ColorMode.vue'
export { default as LocaleMode } from './LocaleMode.vue'

export function modeConfig(withText: boolean) {
  return {
    componentProps: withText ? {} : { size: 'icon' } as const,
    classes: cn({ 'flex flex-col h-fit gap-0.5 p-1': withText }),
  }
}
