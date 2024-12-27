export default function useNavigation() {
  const { t } = useI18n()

  const TITLE = '@brokuka'

  const ITEMS = computed(() => ([
    {
      name: t('navigation.home'),
      to: '/',
    },
    {
      name: t('navigation.projects'),
      to: '/projects',
    },
    {
      name: t('navigation.blog'),
      to: '/blog',
      disabled: true,
    },
  ]))

  const Link = defineNuxtLink({})

  const navigationConfig = computed(() => ITEMS.value.map(item => ({
    ...item,
    componentType: item.disabled ? 'span' : Link,
    componentProps: item.disabled ? {} : { to: item.to },
    classes: cn('block w-full p-3', {
      'flex items-center gap-2 pointer-events-none': item.disabled,
    }),
  })))

  return { navigationConfig, title: TITLE }
}
