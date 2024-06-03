<script setup lang="ts">
import postsBySlugInQuery from '~/services/wpgraphql/queries/postsBySlugInQuery'

const config = useRuntimeConfig()

const { data: urls } = await useFetch('/api/popular-full', {
  method: 'get',
  key: 'google-terpopuler-urls',
})

const query = postsBySlugInQuery(JSON.stringify(urls.value).replaceAll('/', ''), 20)
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `page-terpopuler-posts`,
})
const res = data.value as Posts
</script>

<template>
  <div>
    <div class="grid lg:grid-cols-2 gap-6">
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
