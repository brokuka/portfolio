<script setup lang="ts">
const { navigationConfig, title } = useNavigation()

const isSheetOpen = ref(false)

function closeSheet(disabled?: boolean) {
  if (disabled) {
    return
  }

  isSheetOpen.value = false
}
</script>

<template>
  <nav
    class="fixed inset-x-1/2 bottom-5 w-fit flex gap-2 border rounded-md bg-accent p-1 shadow-card lg:hidden -translate-x-1/2"
  >
    <UiSheet v-model:open="isSheetOpen" class="p-0">
      <UiSheetTrigger as-child>
        <UiButton variant="ghost" size="icon">
          <span class="i-mdi:menu text-xl" />
        </UiButton>
      </UiSheetTrigger>

      <UiSheetContent class="w-[70%] p-0 sm:w-[540px]" side="left">
        <NuxtLink to="/" external>
          <UiRadiantText class="border-b p-2 text-2xl font-bold" @click="closeSheet">
            {{ title }}
          </UiRadiantText>
        </NuxtLink>

        <UiScrollArea class="min-h-10 w-full">
          <nav>
            <ul>
              <li
                v-for="config in navigationConfig" :key="config.name"
                @click="closeSheet(config.disabled)"
              >
                <Component :is="config.componentType" :class="config.classes" v-bind="config.componentProps">
                  <span v-if="config.disabled" class="i-mdi:lock" />

                  {{ config.name }}
                </Component>
              </li>
            </ul>
          </nav>
        </UiScrollArea>
      </UiSheetContent>
    </UiSheet>

    <UiColorMode button-variant="ghost" />
    <UiLocaleMode button-variant="ghost" />
  </nav>
</template>

<style scoped>
.router-link-active {
  @apply bg-accent border-r-3 border-primary;
}
</style>
