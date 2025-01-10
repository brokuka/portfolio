<script setup lang="ts">
const route = useRoute('projects-project')
const { t } = useI18n()

if (!route.params.project) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>

<template>
  <NuxtLink class="group mb-3 w-fit inline-flex items-center gap-4 p-1.5" to="/projects">
    <span class="i-mdi-keyboard-backspace inline-block text-2xl transition-transform group-hover:-translate-x-5px" />
    {{ t('toBack') }}
  </NuxtLink>

  <ContentDoc v-slot="{ doc }">
    <ContentRenderer :value="doc" class="mdc" />
  </ContentDoc>
</template>

<style scoped>
.mdc:deep() {
  h1 {
    @apply flex text-3xl font-medium;
  }

  h3 {
    @apply text-xl my-3;
  }

  pre {
    @apply border-2 rounded-sm max-w-3xl mb-2;
  }

  pre > code {
    @apply block p-2 bg-accent/30;
  }

  li > a,
  p > a {
    @apply underline text-primary;
  }

  ul {
    @apply list-disc-inside pl-4;
  }

  ol {
    @apply mb-4;
  }

  p {
    @apply mb-4;
  }

  h2 {
    @apply mt-6 mb-4 pb-2 border-b text-2xl;
  }

  hr {
    @apply my-4 border-t-4;
  }

  blockquote > p {
    @apply border-primary border-x-4 pl-4 py-2 bg-accent;
  }

  li > code,
  p > code {
    @apply bg-accent p-1 rounded-md text-sm;
  }

  blockquote > p > code {
    @apply p-1 rounded-md text-sm bg-primary text-white;
  }

  li:has(code) {
    @apply not-last:mb-1;
  }
}
</style>

<i18n lang="json">
{
	"en": {
		"toBack": "Back to projects"
	},
	"ru": {
		"toBack": "Назад к проектам"
	}
}
</i18n>
