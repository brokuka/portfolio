<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const id = useId()
</script>

<template>
  <div
    :class="cn('relative h-96 overflow-hidden border border-gray-400 rounded-xl border-dashed opacity-75', props.class)"
  >
    <svg class="absolute inset-0 size-full stroke-gray-900/10 dark:stroke-white/10" fill="none">
      <defs>
        <pattern :id x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
        </pattern>
      </defs>

      <rect stroke="none" :fill="`url(#${id})`" width="100%" height="100%" />
    </svg>

    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <slot />
    </div>
  </div>
</template>
