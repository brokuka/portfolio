<script setup lang="ts">
defineProps<{
  text: string
  visibleOnClick?: boolean
}>()
</script>

<template>
  <UiTooltipProvider>
    <UiTooltip :disable-closing-trigger="visibleOnClick">
      <UiTooltipTrigger as-child>
        <slot />
      </UiTooltipTrigger>

      <UiTooltipContent>
        {{ text }}
      </UiTooltipContent>
    </UiTooltip>
  </UiTooltipProvider>
</template>
