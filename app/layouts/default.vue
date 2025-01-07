<template>
  <LayoutNavigation />

  <main class="flex flex-1 flex-col px-2 py-5 lg:pl-75 lg:pr-2">
    <slot />
  </main>

  <LayoutMobileNavigation />
</template>
