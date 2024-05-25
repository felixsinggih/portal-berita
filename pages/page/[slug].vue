<script setup lang="ts">
import { getPage } from '~/services/wpgraphql/getPage'

const route = useRoute()

const { data } = await getPage(route.params.slug as string)
const res = (await data.value) as Page
</script>

<template>
  <div>
    <div class="space-y-6">
      <Breadcrumbs :title="res.data.page.title" />

      <!-- Title -->
      <h1
        class="text-2xl lg:text-4xl font-bold leading-relaxed tracking-tight text-gray-800 dark:text-gray-200"
        v-html="res.data.page.title"
      />

      <!-- Share Button -->
      <ShareButtonGroup
        :title="res.data.page.title"
        :slug="res.data.page.slug"
      />
    </div>

    <div>
      <div class="flex flex-col gap-6 lg:flex-row">
        <!-- Main Content -->
        <div class="w-full shrink-0 lg:w-3/5 text-gray-800 dark:text-gray-200">
          <!-- Post Content -->
          <div class="w-full mx-auto text-wrap">
            <LazyPostContent
              :content="res.data.page.content"
            />
          </div>
        </div>

        <!-- Right Sidebar -->
        <div class="lg:sticky lg:top-20 lg:w-2/5 lg:self-start">
          <div class="space-y-6">
            <PostsInPage />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
