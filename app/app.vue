<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  @apply font-serif;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<i18n lang="json">
{
	"en": {
		"navigation": {
			"home": "Home",
			"projects": "Projects",
			"blog": "Blog"
		}
	},
	"ru": {
		"navigation": {
			"home": "Главная",
			"projects": "Проекты",
			"blog": "Блог"
		}
	}
}
</i18n>
