<script setup lang="ts">
const props = defineProps<{
  post: PostItem
}>()

const config = useRuntimeConfig()
const imageUrl = props.post.featuredImage ? props.post.featuredImage.node.sourceUrl : `${config.public.siteThumbnailUrl}`
const altText = props.post.featuredImage ? props.post.featuredImage.node.altText : `${config.public.siteName}`
</script>

<template>
  <div class="flex items-center space-x-4">
    <div class="w-1/3">
      <a :href="`/${post.slug}`">
        <NuxtImg
          :src="imageUrl" :alt="altText" width="242" height="160"
          class="rounded w-full h-28 sm:h-32 2xl:h-40 object-cover"
        />
      </a>
    </div>
    <div class="w-2/3">
      <div class="space-y-1">
        <a
          :href="`/${post.slug}`" class="text-base sm:text-lg xl:text-xl leading-tight sm:leading-relaxed font-medium sm:font-bold text-gray-800 dark:text-gray-200 hover:underline"
          v-html="post.title"
        />
        <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          {{ dateFormatter(post.date) }}
        </p>
      </div>
    </div>
  </div>
</template>
