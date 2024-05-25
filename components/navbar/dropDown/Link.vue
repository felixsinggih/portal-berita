<script setup lang="ts">
defineProps({
  to: String,
})
</script>

<template>
  <a :href="to" class="relative flex select-none items-center rounded-sm px-2 py-1.5 outline-none transition-colors focus:bg-white focus:text-black hover:bg-gray-200 focus:dark:bg-slate-950 focus:dark:text-white hover:dark:bg-gray-800">
    <slot />
  </a>
</template>
