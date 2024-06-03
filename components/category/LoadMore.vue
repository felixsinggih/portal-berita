<script setup lang="ts">
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
  try {
    const { data } = await useFetch(`/api/category/${props.slug}?limit=${config.public.postsLimit}&endCursor=${pageInfo.value.endCursor}`)
    const res = computed(() => data.value as Posts)
    posts.value = [...posts.value, ...res.value.data.posts.nodes]
    pageInfo.value = res.value.data.posts.pageInfo
  }
  catch (error) {
    // console.error(error)
  }
  finally {
    loading.value = false
  }
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
      <button
        :class="[loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700']"
        class="inline-flex items-center text-white font-medium rounded text-sm px-5 py-2"
        :disabled="loading"
        @click="loadMore"
      >
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
