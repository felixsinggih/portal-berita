<script setup lang="ts">
defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div class="w-full py-10 px-6 text-center bg-white border border-gray-200 rounded shadow dark:bg-slate-950 dark:border-gray-700 space-y-4">
    <h5 class="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
      {{ title }}
    </h5>

    <div class="leading-relaxed text-gray-600 dark:text-gray-300">
      {{ description }}
    </div>

    <div class="flex items-center justify-center text-gray-800 dark:text-gray-200 text-sm lg:text-base">
      <nav class="flex">
        <ol class="inline-flex items-center space-x-1 md:space-x-2">
          <li class="inline-flex items-center">
            <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
              <Icon name="bi:house" class="me-2.5" />
              Beranda
            </a>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <Icon name="bi:chevron-right" class="text-gray-400 mx-1" />
              <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {{ title }}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>
