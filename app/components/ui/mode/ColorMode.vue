<script setup lang="ts">
import type { ButtonVariants } from '../button'
import { modeConfig } from '.'

const { buttonVariant: variant = 'outline', withText } = defineProps<{
  buttonVariant?: ButtonVariants['variant']
  withText?: boolean
}>()

const { t } = useI18n()

const color = useColorMode()

const isDark = computed(() => color.value === 'dark')
const tooltipText = computed(() => `${t('tooltipText')} ${isDark.value ? t('theme.light') : t('theme.dark')}`)

function toggleDark() {
  color.preference = isDark.value ? 'light' : 'dark'
}

const { classes, componentProps } = modeConfig(withText)
</script>

<template>
  <SharedTooltip :text="tooltipText" visible-on-click>
    <UiButton
      v-bind="componentProps"
      :class="classes" :variant :aria-label="tooltipText" @click="toggleDark"
    >
      <span class="i-mdi:weather-sunny dark:i-mdi:weather-night text-xl" />

      <span v-if="withText" class="text-xs font-medium">{{ t('theme.text') }}</span>
    </UiButton>
  </SharedTooltip>
</template>

<i18n lang="json">
{
	"en": {
		"tooltipText": "Change to",
		"theme": {
			"text": "Theme",
			"light": "Light theme",
			"dark": "Dark theme"
		}
	},
	"ru": {
		"tooltipText": "Поменять на",
		"theme": {
			"text": "Тема",
			"light": "Светлую тему",
			"dark": "Тёмную тему"
		}
	}
}
</i18n>
