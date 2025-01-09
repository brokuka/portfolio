<script setup lang="ts">
const { href } = defineProps<{
  href?: string
  title: string
}>()

const Link = resolveComponent('NuxtLink')

const titleConfig = {
  componentType: href ? Link : 'h3',
  isLink: Boolean(href),
  componentProps: href ? { to: `#${href}` } : {},
}
</script>

<template>
  <Component :is="titleConfig.componentType" class="group relative mb-5 w-fit flex gap-2 text-2xl" v-bind="titleConfig.componentProps">
    <span v-if="titleConfig.isLink" class="absolute top-1/2 hidden color-primary opacity-0 -left-7 lg:block -translate-y-1/2 group-focus-visible:opacity-100 group-hover:opacity-100">#</span>

    <span class="font-medium">{{ title }}</span>
  </Component>
</template>
