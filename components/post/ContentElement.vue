<script setup lang="ts">
const props = defineProps<{
  element: string
  index: number
}>()

const getInnerHTML = computed(() => {
  if (typeof props.element === 'string')
    return props.index === 0 ? props.element.replace('lazy', 'eager') : props.element

  return props.element
})
</script>

<template>
  <div v-html="getInnerHTML" />
</template>
