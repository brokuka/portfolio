<script setup lang="ts">
const { data } = await useFetch('/api/repositories')

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <UiPageTitle :subtitle="t('page.subtitle')">
    {{ t('page.title') }}
  </UiPageTitle>

  <div v-if="data?.length" class="grid cols-[repeat(auto-fill,_minmax(300px,_1fr))] mt-10 gap-3">
    <ProjectsRepositoryCard v-for="repository in data" :key="repository.id" :repository />
  </div>
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
