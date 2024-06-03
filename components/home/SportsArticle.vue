<script setup lang="ts">
import categoryPostsInQuery from '~/services/wpgraphql/queries/categoryPostsInQuery'

const config = useRuntimeConfig()

// * Sports
const categories = [40899]
const query = categoryPostsInQuery(categories, 13)
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `sports-article`,
})
const res = data.value as Posts
</script>

<template>
  <div>
    <Heading class="mb-4">
      <a href="/terkini">
        Olahraga
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
