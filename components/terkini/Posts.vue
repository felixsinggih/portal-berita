<script setup lang="ts">
import latestPostsQuery from '~/services/wpgraphql/queries/latestPostsQuery'

const config = useRuntimeConfig()

const query = latestPostsQuery(Number(config.public.postsLimit))
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `page-terkini-posts`,
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
      {{ config.graphqlEndpoint }}
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>

    <LazyTerkiniLoadMore :info="res.data.posts.pageInfo" />
  </div>
</template>
