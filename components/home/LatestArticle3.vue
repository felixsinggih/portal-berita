<script setup lang="ts">
import categoryPostsNotInQuery from '~/services/wpgraphql/queries/categoryPostsNotInQuery'

const config = useRuntimeConfig()

// * Berita Ngapak [10 Pertama], Kilas Jateng, Olahraga, Lifestyle
const categories = [30566, 30422, 67600, 30421, 49023, 67602, 67603, 30423, 67601, 49075, 57402, 40899, 49679]
const query = categoryPostsNotInQuery(categories, 13)
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `latest-article-3`,
  cache: 'default',
})
const res = computed(() => data.value as Posts)
</script>

<template>
  <div>
    <Heading class="lg:hidden mb-4">
      <a href="/terkini">
        Terkini di {{ config.public.siteName }}
      </a>
    </Heading>

    <div v-if="pending">
      <LoadingPostsCardSmall />
    </div>

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>

    <div v-else class="space-y-6">
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
