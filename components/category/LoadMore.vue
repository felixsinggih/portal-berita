<script setup lang="ts">
import { getCategoryPostsBySlug } from '~/services/wpgraphql/getCategoryPostsBySlug'

const props = defineProps<{
  slug: string
  info: PageInfo
}>()

const config = useRuntimeConfig()
const posts = ref<PostItem[]>([])
const pageInfo = ref<PageInfo>(props.info)
const loading = ref<boolean>(false)

async function loadMore() {
  loading.value = true
  const { data } = await getCategoryPostsBySlug(props.slug as string, Number(config.public.postsLimit), pageInfo.value.endCursor)
  const res = (await data.value) as Posts
  posts.value = [...posts.value, ...res.data.posts.nodes]
  pageInfo.value = res.data.posts.pageInfo
  loading.value = false
}
</script>

<template>
  <div class="space-y-6">
    <div class="grid lg:grid-cols-2 gap-6">
      <PostItemCard
        v-for="post in posts"
        :key="post.slug"
        :post="post"
      />
    </div>

    <div class="lg:col-span-2 flex items-center justify-center">
      <button class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700" :disabled="loading" @click="loadMore">
        <div v-if="!loading" class="space-y-1">
          <Icon name="bi:arrow-down-circle" class="size-4" />
          Muat lainnya
        </div>
        <div v-if="loading" class="space-y-1">
          <Icon name="svg-spinners:270-ring" class="size-4" />
          Sedang memuat...
          <span class="sr-only">Loading...</span>
        </div>
      </button>
    </div>
  </div>
</template>
