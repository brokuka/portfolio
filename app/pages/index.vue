<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})

const SKILLS = computed(() => ([
  {
    title: t('skills.programmingLanguages'),
    items: ['JavaScript / TypeScript'],
  },
  {
    title: t('skills.frameworks'),
    items: ['Vue (+ Nuxt)', 'Express.js, Nitro'],
  },
  {
    title: t('skills.additionalTechnologies'),
    items: [`CSS + ${t('skills.preprocessors')}`, 'Git', 'Docker, PostgreSQL, MongoDB'],
  },
  {
    title: t('skills.languages.title'),
    items: [t('skills.languages.language_1')],
  },
]))

const ABOUT = computed(() => [
  t('about.paragraphs.paragraph_1'),
  t('about.paragraphs.paragraph_2'),
])

const EXPERIENCES = computed(() => [
  {
    company: 'Freelance',
    about: t('experience.items.experience_1.about'),
    from: '...',
    to: '2022',
    position: 'FrontEnd',
    stack: ['jQuery', 'SCSS', 'Gulp'],
    achievement: t('experience.items.experience_1.achievement'),
  },
  {
    company: 'OKNOinjapan',
    about: t('experience.items.experience_2.about'),
    from: '2022',
    to: '2023',
    position: 'FrontEnd',
    stack: ['NuxtJS', 'Tailwind', 'I18N', 'Pinia'],
    achievement: t('experience.items.experience_2.achievement'),
  },
])
</script>

<template>
  <IndexProfile />

  <SharedSection href="skills" :title="t('skills.title')">
    <ul>
      <li v-for="skill in SKILLS" :key="skill.title" class="not-last:mb-3">
        <span class="mb-2 block">&#8226; {{ skill.title }}</span>

        <ul class="pl-5">
          <li v-for="item in skill.items" :key="item" class="not-last:mb-1">
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </SharedSection>

  <SharedSection href="seniority" :title="t('seniority.title')">
    {{ t('seniority.text') }}
  </SharedSection>

  <SharedSection href="about" :title="t('about.title')">
    <p v-for="text in ABOUT" :key="text" class="text-base/6 not-last:mb-3">
      {{ text }}
    </p>
  </SharedSection>

  <SharedSection href="experience" :title="t('experience.title')">
    <IndexTimeline v-for="experience in EXPERIENCES" :key="experience.company" class="pb-2 not-last:mb-3 not-last-border-b" v-bind="experience" />
  </SharedSection>
</template>

<i18n lang="json">
{
	"en": {
		"skills": {
			"title": "Skills",
			"programmingLanguages": "Programming languages",
			"frameworks": "Frameworks",
			"additionalTechnologies": "Additional technologies",
			"preprocessors": "preprocessors",
			"languages": {
				"title": "Languages",
				"language_1": "English - B2"
			}
		},
		"seniority": {
			"title": "Seniority",
			"text": "1.5+ years of commercial development experience"
		},
		"about": {
			"title": "About",
			"paragraphs": {
				"paragraph_1": "Passionate about web technologies, particularly frontend and Vue.js. I love creating beautiful and functional interfaces that make interacting with web applications enjoyable and efficient. Using Nuxt.js, I develop scalable and high-performance solutions that meet modern standards.",
				"paragraph_2": "In my work, it's important to me that the entire team wants to create a high-quality, modern product. I would be happy to work in a company that also loves technology."
			}
		},
		"experience": {
			"title": "Experience",
			"items": {
				"experience_1": {
					"about": "Not an easy start to a big journey..",
					"achievement": "These were the first steps that allowed me to master the basics of HTML, CSS, and JavaScript. Over time, I began to use more advanced technologies and tools, such as jQuery, SCSS, and Gulp, to improve the quality of my skills."
				},
				"experience_2": {
					"about": "Delivery of Japanese products to Russia",
					"achievement": "Creating an online store from scratch and migrating functionality from an old website to a new platform. Designing and structuring for more convenient programming. Working on the interface and solving for the best UX. Enhancing teamwork experience and communication with project colleagues."
				}
			}
		}
	},
	"ru": {
		"skills": {
			"title": "Навыки",
			"programmingLanguages": "Языки программирования",
			"frameworks": "Фреймворки",
			"additionalTechnologies": "Дополнительные технологии",
			"preprocessors": "препроцессоры",
			"languages": {
				"title": "Языки",
				"language_1": "Английский - B2"
			}
		},
		"seniority": {
			"title": "Стаж",
			"text": "1.5+ года опыта коммерческой разработки"
		},
		"about": {
			"title": "Обо мне",
			"paragraphs": {
				"paragraph_1": "Увлечен веб-технологиями, в частности фронтендом и Vue.js. Я люблю создавать красивые и функциональные интерфейсы, которые делают взаимодействие с веб-приложениями приятным и эффективным. С помощью Nuxt.js я разрабатываю масштабируемые и производительные решения, которые соответствуют современным стандартам.",
				"paragraph_2": "В работе для меня важно, чтобы вся команда хотела сделать качественный современный продукт. Буду рад работать в компании, где также любят технологии."
			}
		},
		"experience": {
			"title": "Опыт",
			"items": {
				"experience_1": {
					"about": "Не простое начало в большой путь..",
					"achievement": "Это были первые шаги, которые позволили мне освоить основы HTML, CSS и JavaScript. Со временем я начал использовать более продвинутые технологии и инструменты, такие как jQuery, SCSS и Gulp, чтобы улучшить качество своих навыков."
				},
				"experience_2": {
					"about": "Доставка японских продуктов в Россию",
					"achievement": "Создание интернет магазина с нуля и перенос функционала из старого сайта на новый движок. Проектирование и структурирование для более удобного программирования. Работа с интерфейсом, решение лучшего UX. Повышение опыта работы в команде и связи с коллегами по проекту."
				}
			}
		}
	}
}
</i18n>
