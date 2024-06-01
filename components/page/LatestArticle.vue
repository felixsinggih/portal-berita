<script setup lang="ts">
import latestPostsQuery from '~/services/wpgraphql/queries/latestPostsQuery'

const config = useRuntimeConfig()

const query = latestPostsQuery(6)
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
      Terkini
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
