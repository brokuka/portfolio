<script setup lang="ts">
const { data } = await useFetch('/api/repositories')

const { t } = useI18n({
  useScope: 'local',
})

const route = useRoute()

const isPathRoot = computed(() => !Object.keys(route.params).length)
</script>

<template>
  <template v-if="isPathRoot">
    <UiPageTitle :subtitle="t('page.subtitle')">
      {{ t('page.title') }}
    </UiPageTitle>

    <div v-if="data?.length" class="grid cols-[repeat(auto-fill,_minmax(300px,_1fr))] mt-10 gap-3">
      <ProjectsRepositoryCard v-for="repository in data" :key="repository.id" :repository />
    </div>
  </template>

  <NuxtPage v-else />
</template>

<i18n lang="json">
{
	"en": {
		"page": {
			"title": "Projects",
			"subtitle": "Here is My projects"
		}
	},
	"ru": {
		"page": {
			"title": "Проекты",
			"subtitle": "Здесь показаны мои проекты"
		}
	}
}
</i18n>
