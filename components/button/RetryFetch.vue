<script setup lang="ts">
defineProps<{ retry: any }>()
</script>

<template>
  <div class="flex items-center justify-center p-10 bg-white border border-gray-200 rounded shadow dark:bg-slate-950 dark:border-gray-700">
    <div class="text-gray-800 dark:text-gray-200 text-center space-y-4">
      <h1 class="font-bold text-xl">
        Oops! Terjadi masalah.
      </h1>

      <button class="p-3 text-white bg-blue-300 dark:bg-blue-400 rounded-full" @click="retry">
        <Icon name="bi:arrow-clockwise" class="size-10" />
      </button>

      <p class="text-lg">
        Silahkan coba lagi.
      </p>
    </div>
  </div>
</template>
