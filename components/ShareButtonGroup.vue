<script setup lang="ts">
defineProps<{
  title: string
  slug: string
}>()
</script>

<template>
  <div class="flex items-center space-x-3">
    <div class="text-gray-800 dark:text-gray-200 font-semibold">
      Bagikan:
    </div>

    <div class="space-x-2">
      <!-- Facebook Share -->
      <a
        :href="`https://www.facebook.com/sharer.php?u=https%3A%2F%2Fserayunews.com%2F${slug}`"
        target="_blank" rel="noreferrer"
        class="p-2 inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 rounded dark:bg-blue-700 dark:hover:bg-blue-800"
      >
        <Icon name="bi:facebook" class="size-4" />
        <span class="sr-only">Share to facebook</span>
      </a>

      <!-- Twitter Share -->
      <a
        :href="`https://twitter.com/intent/tweet?text=${title.replaceAll(' ', '+')}&amp;url=https%3A%2F%2Fserayunews.com%2F${slug}%2F&amp;via=Serayu+News`"
        target="_blank" rel="noreferrer"
        class="p-2 inline-flex items-center text-white bg-gray-700 hover:bg-gray-800 rounded dark:bg-gyar-800 dark:hover:bg-gray-700"
      >
        <Icon name="bi:twitter-x" class="size-4" />
        <span class="sr-only">Share to X</span>
      </a>

      <!-- Whatsapp Share -->
      <a
        :href="`https://api.whatsapp.com/send?text=${title.replaceAll(' ', '+')} %0A%0A https://serayunews.com/${slug}`"
        target="_blank"
        class="p-2 inline-flex items-center text-white bg-green-400 hover:bg-green-500 rounded dark:bg-green-500 dark:hover:bg-green-600"
      >
        <Icon name="bi:whatsapp" class="size-4" />
        <span class="sr-only">Share to whatsapp</span>
      </a>

      <!-- Telegram Share -->
      <a
        :href="`https://telegram.me/share/url?url=https://serayunews.com/${slug}/&amp;text=${title.replaceAll(' ', '+')}`"
        target="_blank"
        class="p-2 inline-flex items-center text-white bg-sky-400 hover:bg-sky-500 rounded dark:bg-sky-500 dark:hover:bg-sky-600"
      >
        <Icon name="bi:telegram" class="size-4" />
        <span class="sr-only">Share to telegram</span>
      </a>
    </div>
  </div>
</template>
