<script setup lang="ts">
defineProps({
  to: String,
})
</script>

<template>
  <a :href="to" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent border-b border-gray-200 dark:border-gray-800 lg:border-0">
    <slot />
  </a>
</template>
