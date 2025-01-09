<template>
  <div class="readme-content">
    <div class="readme-content">
      <ContentList v-slot="{ list }">
        <ContentDoc v-for="doc in list" :key="doc._path" :path="doc._path" />
      </ContentList>
    </div>
  </div>
</template>
