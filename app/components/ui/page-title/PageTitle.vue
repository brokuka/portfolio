<script setup lang="ts">
defineProps<{
  subtitle?: string
}>()

const slot = defineSlots<{
  default: []
  subtitle: []
}>()
</script>

<template>
  <div>
    <h3 v-if="subtitle" class="mb-2 flex text-xs text-primary/95 font-medium lg:text-sm">
      {{ subtitle }}
    </h3>

    <slot v-else-if="slot.subtitle" name="subtitle" />

    <h2 class="flex text-3xl font-medium">
      <slot />
    </h2>
  </div>
</template>
