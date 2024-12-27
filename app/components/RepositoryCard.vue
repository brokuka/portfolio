<script setup lang="ts">
const { repository } = defineProps<{
  repository: TransformedRepository
}>()

const { t } = useI18n({
  useScope: 'local',
})

const { name, description, url, stars, lastUpdate, starsLink, github } = repository
</script>

<template>
  <UiCard>
    <div class="flex items-center justify-between px-6 pt-2">
      <Tooltip :text="t('tooltip.lastUpdate')">
        <div class="flex cursor-default items-center gap-2">
          <Icon name="mdi:calendar-refresh" size="20" />

          <NuxtTime :datetime="lastUpdate" />
        </div>
      </Tooltip>

      <div class="flex items-center">
        <Tooltip :text="t('tooltip.gitHubStars')">
          <UiButton class="w-fit gap-0.5 px-2" variant="ghost" as-child>
            <NuxtLink :to="starsLink" target="_blank">
              {{ formatNumber(stars) }}

              <Icon name="mdi:star" size="18" class="shrink-0 text-yellow" />
            </NuxtLink>
          </UiButton>
        </Tooltip>

        <Tooltip :text="t('tooltip.gitHubRepository')">
          <UiButton variant="ghost" size="icon" as-child>
            <NuxtLink :to="github" target="_blank">
              <Icon name="mdi:github" size="24" />
            </NuxtLink>
          </UiButton>
        </Tooltip>
      </div>
    </div>

    <UiCardHeader class="pt-4">
      <UiCardTitle>
        <NuxtLink :to="github" target="_blank">
          {{ name }}
        </NuxtLink>
      </UiCardTitle>

      <UiCardDescription>{{ description }}</UiCardDescription>
    </UiCardHeader>

    <UiCardFooter class="grid gap-2">
      <UiButton class="w-full" as-child>
        <NuxtLink :to="url" target="_blank">
          {{ t('viewDemo') }}
        </NuxtLink>
      </UiButton>
    </UiCardFooter>
  </UiCard>
</template>

<i18n lang="json">
{
	"en": {
		"tooltip": {
			"lastUpdate": "Last update",
			"gitHubStars": "GitHub Stars",
			"gitHubRepository": "GitHub Repository"
		},
		"viewDemo": "View Demo"
	},
	"ru": {
		"tooltip": {
			"lastUpdate": "Последний раз обновлён",
			"gitHubStars": "GitHub звёзды",
			"gitHubRepository": "GitHub репозиторий"
		},
		"viewDemo": "Посмотреть демо"
	}
}
</i18n>
