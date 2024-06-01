<script setup lang="ts">
import searchQuery from '~/services/wpgraphql/queries/searchQuery'

const config = useRuntimeConfig()

const query = searchQuery('mitos', 5)
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
})
const res = data.value as Posts
</script>

<template>
  <div>
    <Heading class="mb-4">
      <a href="/terkini">
        Topik Khusus
      </a>
    </Heading>

    <div class="space-y-6">
      <PostItemCardSmall
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
