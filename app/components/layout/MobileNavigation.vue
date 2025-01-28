<script setup lang="ts">
import { useEventListener, useWindowScroll } from '@vueuse/core'

const { t, locale } = useI18n()

const { navigationConfig } = useNavigation()
const { y, directions } = useWindowScroll({ behavior: 'smooth' })
const isLocaleChanged = ref(false)

const isDrawerOpen = ref(false)
const isNavigationHide = ref(false)
const lastY = ref(y.value)

function navigationVisibility() {
  if (window.innerWidth > 1024) {
    isDrawerOpen.value = false
    window.removeEventListener('scroll', navigationVisibility)
    return
  }

  if (window.innerWidth <= 1024) {
    window.addEventListener('scroll', navigationVisibility)
  }

  if (!y.value || lastY.value === 0 && y.value !== lastY.value) {
    lastY.value = y.value
    return
  }

  lastY.value = y.value
  isNavigationHide.value = !isLocaleChanged.value ? directions.bottom : false
}

const handlers = {
  scroll: navigationVisibility,
  resize: navigationVisibility,
} satisfies Record<string, EventListenerOrEventListenerObject>

Object.entries(handlers).forEach(([event, handler]) => {
  useEventListener(window, event, handler)
})

watch(locale, (newLocale) => {
  if (newLocale) {
    isLocaleChanged.value = true

    setInterval(() => isLocaleChanged.value = false, 100)
  }
})
</script>

<template>
  <nav
    class="fixed bottom-0 z-2 grid auto-cols-fr grid-flow-col w-fit w-full justify-around border-t bg-background p-1 shadow-card transition-transform-300 lg:hidden"
    :class="{ 'translate-y-full': isNavigationHide }"
  >
    <UiDrawer v-model:open="isDrawerOpen">
      <UiDrawerTrigger as-child>
        <UiButton class="h-fit flex flex-col gap-0.5 p-1" variant="ghost">
          <span class="i-mdi:menu text-xl font-bold" />
          <span class="text-xs font-medium">{{ t('title') }}</span>
        </UiButton>
      </UiDrawerTrigger>

      <UiDrawerContent>
        <UiDrawerHeader aria-describedby="undefined">
          <UiDrawerTitle>{{ t('title') }}</UiDrawerTitle>
        </UiDrawerHeader>

        <UiDrawerFooter>
          <ul>
            <li
              v-for="config in navigationConfig" :key="config.name"
              @click="!config.disabled && (isDrawerOpen = false)"
            >
              <Component :is="config.componentType" :class="config.classes" v-bind="config.componentProps">
                <div class="flex items-center gap-2">
                  <span v-if="config.disabled" class="i-mdi:lock" />
                  {{ config.name }}
                </div>

                <span v-if="!config.disabled" class="i-custom:arrow-back rotate-180" />
              </Component>
            </li>
          </ul>
        </UiDrawerFooter>
      </UiDrawerContent>
    </UiDrawer>

    <UiColorMode button-variant="ghost" with-text />
    <UiLocaleMode button-variant="ghost" with-text />
  </nav>
</template>

<i18n lang="json">
{
	"en": {
		"title": "Navigation"
	},
	"ru": {
		"title": "Навигация"
	}
}
</i18n>
