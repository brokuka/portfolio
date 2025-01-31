<script setup lang="ts">
import { X } from 'lucide-vue-next'
import {
  DialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '~/utils/common'
import { type SheetVariants, sheetVariants } from '.'

interface SheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: SheetVariants['side']
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, side, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 data-[state=closed]:animate-out data-[state=open]:animate-in bg-black/80 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
    />

    <DialogContent :class="cn(sheetVariants({ side }), props.class)" v-bind="{ ...forwarded, ...$attrs }">
      <slot />

      <DialogClose class="absolute right-2 top-1.5" as-child>
        <UiButton variant="outline" size="icon">
          <span class="i-mdi:close text-xl" />
        </UiButton>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
