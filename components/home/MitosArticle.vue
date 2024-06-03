<script setup lang="ts">
import searchQuery from '~/services/wpgraphql/queries/searchQuery'

const config = useRuntimeConfig()

const query = searchQuery('mitos', 5)
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `mitos-article`,
  cache: 'default',
})
const res = computed(() => data.value as Posts)
</script>

<template>
  <div>
    <Heading class="mb-4">
      <a href="/terkini">
        Topik Khusus
      </a>
    </Heading>

    <div v-if="pending">
      <LoadingPostsCardSmall />
    </div>

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>

    <div v-else class="space-y-6">
      <PostItemCardSmall
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
