<script setup lang="ts">
const props = defineProps<{
  author: Author
}>()

const authorName = props.author.data.user.seo.title ?? props.author.data.user.name
const authorDesc = props.author.data.user.seo.metaDesc ?? props.author.data.user.description
</script>

<template>
  <div class="w-full py-10 px-6 space-y-2 text-center bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-center">
      <NuxtImg
        :src="author.data.user.avatar.url"
        width="140"
        height="140"
        :alt="author.data.user.name"
        class="rounded"
      />
    </div>

    <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
      {{ authorName }}
    </h1>

    <h2 class="tracking-tight text-gray-600 dark:text-gray-300">
      {{ authorDesc }}
    </h2>

    <!-- Social Media -->
    <div class="flex items-center justify-center text-gray-600 dark:text-gray-200 space-x-2">
      <!-- Facebook -->
      <a v-if="author.data.user.seo.social.facebook" :href="author.data.user.seo.social.facebook" target="_blank">
        <Icon name="bi:facebook" />
      </a>

      <!-- Instagram -->
      <a v-if="author.data.user.seo.social.instagram" :href="author.data.user.seo.social.instagram" target="_blank">
        <Icon name="bi:instagram" />
      </a>

      <!-- Youtube -->
      <a v-if="author.data.user.seo.social.youTube" :href="author.data.user.seo.social.youTube" target="_blank">
        <Icon name="bi:youtube" />
      </a>

      <!-- Twitter -->
      <a v-if="author.data.user.seo.social.twitter" :href="author.data.user.seo.social.twitter" target="_blank">
        <Icon name="bi:twitter-x" />
      </a>

      <!-- Linkedin -->
      <a v-if="author.data.user.seo.social.linkedIn" :href="author.data.user.seo.social.linkedIn" target="_blank">
        <Icon name="bi:linkedin" />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
