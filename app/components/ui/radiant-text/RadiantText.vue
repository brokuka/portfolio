<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

interface Props {
  class?: HTMLAttributes['class']
  radiantWidth?: number
  duration?: number
}

const { radiantWidth = 100, duration = 10, ...props } = defineProps<Props>()

const styleVar = computed(() => {
  return {
    '--radiant-anim-duration': `${duration}s`,
    '--radiant-width': `${radiantWidth}px`,
  }
})
</script>

<template>
  <p
    :style="styleVar" :class="cn(
      'mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70',
      // Radiant effect
      'radiant-animation bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--radiant-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',
      // Radiant gradient
      'bg-gradient-to-r from-transparent via-black via-50% to-transparent  dark:via-white',
      props.class,
    )
    "
  >
    <slot />
  </p>
</template>

<style scoped>
@keyframes radiant {
  0%,
  90%,
  100% {
    background-position: calc(-100% - var(--radiant-width)) 0;
  }

  30%,
  60% {
    background-position: calc(100% + var(--radiant-width)) 0;
  }
}

.radiant-animation {
  animation: radiant var(--radiant-anim-duration) infinite;
}
</style>
