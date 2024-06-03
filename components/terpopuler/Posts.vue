<script setup lang="ts">
import postsBySlugInQuery from '~/services/wpgraphql/queries/postsBySlugInQuery'

const config = useRuntimeConfig()

const { data: urls } = await useFetch('/api/popular-full', {
  method: 'get',
  key: 'google-terpopuler-urls',
  cache: 'default',
})

const query = postsBySlugInQuery(JSON.stringify(urls.value).replaceAll('/', ''), 20)
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `page-terpopuler-posts`,
  cache: 'default',
})
const res = computed(() => data.value as Posts)
</script>

<template>
  <div>
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
