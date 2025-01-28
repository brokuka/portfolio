export default function useNavigation() {
  const { t } = useI18n({ useScope: 'global' })

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
    componentType: item.disabled ? 'div' : Link,
    componentProps: item.disabled ? {} : { to: item.to },
    classes: cn('block w-full p-3 flex items-center justify-between lg:justify-initial', {
      'pointer-events-none gap-2': item.disabled,
    }),
  })))

  return { navigationConfig, title: TITLE }
}
