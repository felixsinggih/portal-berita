<script setup lang="ts">

</script>

<template>
  <div class="w-full py-10 px-6 text-center bg-white border border-gray-200 rounded shadow dark:bg-slate-950 dark:border-gray-700 space-y-4">
    <div class="flex justify-center animate-pulse">
      <div class="rounded w-1/4 h-8 bg-gray-300 dark:bg-gray-600" />
    </div>

    <div class="animate-pulse space-y-2">
      <div class="flex justify-center ">
        <div class="rounded w-3/4 h-5 bg-gray-300 dark:bg-gray-600" />
      </div>
      <div class="flex justify-center ">
        <div class="rounded w-3/5 h-5 bg-gray-300 dark:bg-gray-600" />
      </div>
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
              <span class="ms-1 animate-pulse rounded w-24 h-4 bg-gray-300 dark:bg-gray-600" />
            </div>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>
