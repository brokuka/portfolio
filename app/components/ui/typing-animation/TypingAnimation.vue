<script setup lang="ts">
const { words, speed = 150, pauseTime = 1500 } = defineProps<{
  words: string[]
  speed?: number
  pauseTime?: number
}>()

const state = ref({
  wordIndex: 0,
  charIndex: -1,
  isDeleting: false,
  isPaused: false,
})

const interval = ref<NodeJS.Timeout | null>(null)
const deleteTimeout = ref<NodeJS.Timeout | null>(null)

watch(
  () => words,
  () => {
    // Clear both interval and deletion timeout
    if (interval.value) {
      clearInterval(interval.value)
      interval.value = null
    }

    if (deleteTimeout.value) {
      clearTimeout(deleteTimeout.value)
      deleteTimeout.value = null
    }

    state.value = {
      wordIndex: 0,
      charIndex: -1,
      isDeleting: false,
      isPaused: false,
    }

    startInterval()
  },
)

const currentWord = computed(() =>
  words[state.value.wordIndex] || '',
)

const displayText = computed(() => {
  const { charIndex, isDeleting } = state.value
  return isDeleting
    ? currentWord.value.slice(0, charIndex)
    : currentWord.value.slice(0, charIndex + 1)
})

const isBlinking = computed(() =>
  state.value.charIndex === -1
  || state.value.isPaused,
)

function startInterval() {
  if (interval.value) {
    clearInterval(interval.value)
    interval.value = null
  }

  interval.value = setInterval(() => {
    const { wordIndex, charIndex, isDeleting, isPaused } = state.value

    if (isPaused)
      return

    if (!isDeleting && charIndex === currentWord.value.length) {
      state.value.isPaused = true

      deleteTimeout.value = setTimeout(() => {
        state.value.isPaused = false
        state.value.isDeleting = true
      }, pauseTime)

      return
    }

    if (isDeleting && charIndex <= 0) {
      state.value.isDeleting = false
      state.value.charIndex = -1
      state.value.wordIndex = (wordIndex + 1) % words.length
      return
    }

    state.value.charIndex += isDeleting ? -1 : 1
  }, speed)
}

onMounted(() => {
  startInterval()
})

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value)
    interval.value = null
  }

  if (deleteTimeout.value) {
    clearTimeout(deleteTimeout.value)
    deleteTimeout.value = null
  }
})
</script>

<template>
  <span>{{ displayText }}<span class="cursor" :class="{ blinking: isBlinking }">|</span></span>
</template>

<style scoped>
.cursor {
  opacity: 0.7;
}

.cursor.blinking {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
</style>
