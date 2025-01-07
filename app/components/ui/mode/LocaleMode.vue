<script setup lang="ts">
import type { ButtonVariants } from '../button'

const { buttonVariant: variant = 'outline' } = defineProps<{
  buttonVariant?: ButtonVariants['variant']
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
</script>

<template>
  <SharedTooltip :text="tooltipText" visible-on-click>
    <UiButton size="icon" :variant :aria-label="tooltipText" @click="toggleLanguage">
      {{ locale.toUpperCase() }}
    </UiButton>
  </SharedTooltip>
</template>

<i18n lang="json">
{
	"en": {
		"tooltipText": "Change to Russian language"
	},
	"ru": {
		"tooltipText": "Поменять на Английский язык"
	}
}
</i18n>
