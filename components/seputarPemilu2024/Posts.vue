<script setup lang="ts">
import tagPostsSlugInQuery from '~/services/wpgraphql/queries/tagPostsSlugInQuery'

const config = useRuntimeConfig()

const tags = ['seputar-pemilu-2024', 'pemilu-2024']
const query = tagPostsSlugInQuery(JSON.stringify(tags), Number(config.public.postsLimit))
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
})
const res = data.value as Posts
</script>

<template>
  <div class="space-y-6">
    <div class="grid lg:grid-cols-2 gap-6">
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
