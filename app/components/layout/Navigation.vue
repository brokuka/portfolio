<script setup lang="ts">
const { navigationConfig, title } = useNavigation()
</script>

<template>
  <aside class="fixed inset-y-0 left-0 flex flex-col border border-b-none border-l-none border-t-none">
    <div class="hidden w-64 flex-1 flex-col lg:flex">
      <NuxtLink to="/" external>
        <h1 class="border-b p-2 text-2xl font-bold">
          <UiRadiantText>{{ title }}</UiRadiantText>
        </h1>
      </NuxtLink>

      <UiScrollArea class="min-h-10 max-lg:hidden">
        <nav>
          <ul>
            <li v-for="config in navigationConfig" :key="config.name">
              <Component :is="config.componentType" :class="config.classes" v-bind="config.componentProps">
                <span v-if="config.disabled" class="i-mdi:lock" />

                {{ config.name }}
              </Component>
            </li>
          </ul>
        </nav>
      </UiScrollArea>

      <div class="mt-auto flex items-center gap-3 border border-b-none border-l-none border-r-none p-3 shadow">
        <UiColorMode />
        <UiLocaleMode />
      </div>
    </div>
  </aside>
</template>

<style scoped>
.router-link-active {
  @apply bg-accent border-r-3 border-primary;
}
</style>
