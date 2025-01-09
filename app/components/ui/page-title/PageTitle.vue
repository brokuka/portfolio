<script setup lang="ts">
defineProps<{
  subtitle?: string
  reverse?: boolean
}>()

const slot = defineSlots<{
  default: []
  subtitle: []
}>()
</script>

<template>
  <div
    class="flex flex-col gap-2" :class="{
      'flex-col-reverse': reverse,
    }"
  >
    <h3 v-if="subtitle" class="flex text-xs text-primary/95 font-medium lg:text-sm">
      {{ subtitle }}
    </h3>

    <slot v-else-if="slot.subtitle" name="subtitle" />

    <h2 class="flex text-3xl font-medium">
      <slot />
    </h2>
  </div>
</template>
