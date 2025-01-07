<script setup lang="ts">
defineProps<{
  href?: string
  title: string
}>()
</script>

<template>
  <section :id="href" class="not-last:mb-7">
    <UiAnchorTitle :href :title />

    <slot />
  </section>
</template>
