<script setup lang="ts">
defineProps<{
  title: string
  slug: string
  date: string
  categories: PostCategory[]
  author: PostAuthor
}>()
</script>

<template>
  <div class="space-y-4">
    <!-- Breadcrumbs -->
    <Breadcrumbs
      :title="title"
      :categories="categories"
    />

    <!-- Post Title -->
    <h1 class="text-2xl lg:text-4xl font-bold leading-relaxed tracking-tight text-gray-800 dark:text-gray-200" v-html="title" />

    <div>
      <!-- Author -->
      <div class="flex items-center space-x-3">
        <NuxtImg
          :src="author.node.avatar.url"
          width="40"
          height="40"
          :alt="author.node.name"
          class="rounded"
        />
        <div>
          <span class="mr-1 text-gray-600 dark:text-gray-200">Jurnalis:</span>
          <a :href="`/author/${author.node.slug}`" class="text-gray-800 dark:text-gray-200">
            {{ author.node.name }}
          </a>
        </div>
      </div>

      <!-- Post Date -->
      <div class="pt-2 flex items-center text-gray-600 dark:text-gray-200">
        <Icon name="bi:calendar2-fill" />
        <span class="ms-1 text-sm">
          <p>{{ dateTimeFormatter(date) }}</p>
        </span>
      </div>
    </div>

    <!-- Share Button Group -->
    <ShareButtonGroup
      :title="title"
      :slug="slug"
    />
  </div>
</template>
