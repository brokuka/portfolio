<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const ANIMATE_WORDS = computed(() => ([t('animateWords.word_1'), t('animateWords.word_2')]))

const SOCIALS = computed(() => ([
  {
    hint: 'GitHub',
    icon: 'mdi:github',
    href: 'https://github.com/brokuka',
  },
  {
    hint: 'Telegram',
    classes: 'text-[#24A1DE]',
    icon: 'mdi:telegram',
    href: 'https://t.me/brokuka',
  },
  {
    hint: t('socials.mail'),
    icon: 'mdi:email',
    href: 'mailto:erik.manukyan2010@yandex.ru',
  },
]))
</script>

<template>
  <div class="mb-10 flex items-center justify-center gap-3 lg:mb-15 lg:justify-initial">
    <UiPlaceholder class="h-30 w-30 shrink-0 rounded-full lg:h-70 lg:w-70">
      <div class="i-mdi:sunglasses text-6xl md:text-9xl" />
    </UiPlaceholder>

    <div class="flex flex-col gap-3">
      <UiPageTitle>
        <span class="text-xl lg:text-3xl">{{ t('fullName') }}</span>

        <template #subtitle>
          <div class="text-sm">
            Front-End
            <UiTypingAnimation :words="ANIMATE_WORDS" />
          </div>
        </template>
      </UiPageTitle>

      <div class="flex gap-2">
        <Tooltip v-for="social in SOCIALS" :key="social.hint" :text="social.hint">
          <UiButton variant="ghost" size="icon" as-child :aria-label="social.hint">
            <NuxtLink :to="social.href" target="_blank">
              <Icon :class="social.classes" :name="social.icon" size="20" />
            </NuxtLink>
          </UiButton>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
	"en": {
		"fullName": "Ernest Manukyan",
		"animateWords": {
			"word_1": "Engineer",
			"word_2": "Enjoyer"
		},
		"socials": {
			"mail": "E-mail"
		}
	},
	"ru": {
		"fullName": "Манукян Эрнест",
		"animateWords": {
			"word_1": "Разработчик",
			"word_2": "Любитель"
		},
		"socials": {
			"mail": "Почта"
		}
	}
}
</i18n>
