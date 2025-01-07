<script setup lang="ts">
interface Props {
  company: string
  about: string
  from: string
  to: string
  position: string
  stack: string[]
  achievement: string
  url?: string
}

const { about, achievement, company, from, position, stack, to } = defineProps<Props>()
</script>

<template>
  <div class="flex gap-3">
    <div class="relative flex flex-col justify-between">
      <div class="z-2 grid h-10 w-11 place-items-center border rounded-full bg-background text-sm">
        {{ from }}
      </div>

      <div class="relative left-1/2 my-2 w-px flex-1 bg-gray-300 -translate-x-1/2">
        <span class="absolute top-1/2 inline-block text-sm tracking-widest -right-5 -translate-y-1/2 -rotate-90">
          {{ position }}
        </span>
      </div>

      <span class="z-2 grid h-10 w-11 place-items-center border rounded-full bg-background text-sm">
        {{ to }}
      </span>
    </div>

    <div class="p-2 pl-0">
      <div class="mb-3">
        <h3 class="mb-1 text-xl font-700">
          {{ company }}
        </h3>

        <span class="text-sm lg:text-base">{{ about }}</span>
      </div>

      <div class="flex gap-1">
        <UiBadge v-for="tech in stack" :key="tech" variant="secondary">
          {{ tech }}
        </UiBadge>
      </div>

      <p class="mt-3 not-last:mb-2">
        {{ achievement }}
      </p>
    </div>
  </div>
</template>
