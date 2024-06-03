<script setup lang="ts">

</script>

<template>
  <div v-for="index in 7" :key="index" class="flex items-center mb-2">
    <span class="text-2xl text-gray-800 dark:text-gray-200 font-extrabold italic opacity-70 me-3">{{ index }}</span>
    <div class="w-full h-6 rounded bg-gray-400 dark:bg-gray-600 animate-pulse" />
  </div>
</template>
