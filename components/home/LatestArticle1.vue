<script setup lang="ts">
import categoryPostsInQuery from '~/services/wpgraphql/queries/categoryPostsInQuery'

const config = useRuntimeConfig()

// * Berita Ngapak [10 Pertama], Kilas jateng
const categories = [30566, 30422, 67600, 30421, 49023, 67602, 67603, 30423, 67601, 49075, 57402]
const query = categoryPostsInQuery(categories, 13)
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
        Terkini di {{ config.public.siteName }}
      </a>
    </Heading>

    <div class="space-y-6">
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
