<script setup lang="ts">
defineProps<{
  title: string
  categories?: PostCategory[] | null
}>()
</script>

<template>
  <nav class="flex">
    <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li class="inline-flex items-center">
        <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          <Icon name="bi:house" class="w-4 h-4 me-2.5" />
          Beranda
        </a>
      </li>

      <li v-if="categories">
        <div class="flex items-center">
          <Icon name="bi:chevron-right" class="text-gray-400 mx-1" />
          <a
            :href="`/category/${categories[0].slug === 'headline' ? categories[1].slug : categories[0].slug}`"
            class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
          >
            {{ categories[0].slug === 'headline' ? categories[1].name : categories[0].name }}
          </a>
        </div>
      </li>

      <li aria-current="page" class="hidden lg:flex">
        <div class="flex items-center">
          <Icon name="bi:chevron-right" class="text-gray-400 mx-1" />
          <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
            {{ title }}
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>
