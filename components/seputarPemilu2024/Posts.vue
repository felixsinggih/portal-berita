<script setup lang="ts">
import tagPostsSlugInQuery from '~/services/wpgraphql/queries/tagPostsSlugInQuery'

const config = useRuntimeConfig()

const tags = ['seputar-pemilu-2024', 'pemilu-2024']
const query = tagPostsSlugInQuery(JSON.stringify(tags), Number(config.public.postsLimit))
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `page-seputar-pemilu-2024-posts`,
  cache: 'default',
})
const res = computed(() => data.value as Posts)
</script>

<template>
  <div class="space-y-6">
    <div v-if="pending">
      <LoadingPostsCard />
    </div>

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>

    <div v-else class="grid lg:grid-cols-2 gap-6">
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
