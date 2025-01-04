<script setup lang="ts">
import type { ButtonVariants } from '../button'

const { buttonVariant: variant = 'outline' } = defineProps<{
  buttonVariant?: ButtonVariants['variant']
}>()

const { t } = useI18n()

const color = useColorMode()

const isDark = computed(() => color.value === 'dark')
const tooltipText = computed(() => `${t('tooltipText')} ${isDark.value ? t('theme.light') : t('theme.dark')}`)

function toggleDark() {
  color.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <!-- <Tooltip :text="tooltipText" visible-on-click> -->
  <UiButton size="icon" :variant :aria-label="tooltipText" @click="toggleDark">
    <span class="i-mdi:weather-sunny dark:i-mdi:weather-night text-xl" />
  </UiButton>
  <!-- </Tooltip> -->
</template>

<i18n lang="json">
{
	"en": {
		"tooltipText": "Change to",
		"theme": {
			"light": "Light theme",
			"dark": "Dark theme"
		}
	},
	"ru": {
		"tooltipText": "Поменять на",
		"theme": {
			"light": "Светлую тему",
			"dark": "Тёмную тему"
		}
	}
}
</i18n>
