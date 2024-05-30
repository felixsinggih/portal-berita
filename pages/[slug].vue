<script setup lang="ts">
import { getPost } from '~/services/wpgraphql/getPost'

const route = useRoute()
const { data } = await getPost(route.params.slug as string)
const res = ref<Post>(data.value as Post)

useSeoMeta({
  title: res.value.data.post.seo.title,
  description: res.value.data.post.seo.metaDesc,
})

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
}))

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
}))
</script>

<template>
  <div class="space-y-6">
    <!-- Post Header -->
    <PostHeader
      :title="res.data.post.title"
      :slug="res.data.post.slug"
      :date="res.data.post.date"
      :categories="res.data.post.categories.nodes"
      :author="res.data.post.author"
    />

    <!-- Main Content & Right Sidebar -->
    <div class="flex flex-col gap-6 lg:flex-row">
      <!-- Main Content -->
      <div class="w-full shrink-0 lg:w-3/5 text-gray-800 dark:text-gray-200">
        <!-- Post Content -->
        <div class="w-full mx-auto text-wrap">
          <LazyPostContent
            :content="res.data.post.content"
          />
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="lg:sticky lg:top-20 lg:w-2/5 lg:self-start">
        <div class="space-y-6">
          <PostsOther
            :post-id="res.data.post.postId"
            :categories="res.data.post.categories.nodes"
          />

          <PostsLatestExclude :post-id="res.data.post.postId" />
        </div>
      </div>
    </div>
  </div>
</template>
