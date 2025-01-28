<script setup lang="ts">
import type { ButtonVariants } from '../button'
import { modeConfig } from '.'

const { buttonVariant: variant = 'outline', withText } = defineProps<{
  buttonVariant?: ButtonVariants['variant']
  withText?: boolean
}>()

const { t, locale, setLocale } = useI18n({
  useScope: 'local',
})

const isEnglishLocale = computed(() => locale.value === 'en')
const tooltipText = computed(() => t('tooltipText'))

function toggleLanguage() {
  const reverseLocale = isEnglishLocale.value ? 'ru' : 'en'

  setLocale(reverseLocale)
}

const { classes, componentProps } = modeConfig(withText)
</script>

<template>
  <SharedTooltip :text="tooltipText" visible-on-click>
    <UiButton v-bind="componentProps" :variant :aria-label="tooltipText" :class="classes" @click="toggleLanguage">
      <span>{{ locale.toUpperCase() }}</span>

      <span v-if="withText" class="text-xs font-medium">{{ t('text') }}</span>
    </UiButton>
  </SharedTooltip>
</template>

<i18n lang="json">
{
	"en": {
		"text": "Language",
		"tooltipText": "Change to Russian language"
	},
	"ru": {
		"text": "Язык",
		"tooltipText": "Поменять на Английский язык"
	}
}
</i18n>
