<script setup lang="ts">
import authorPostsQuery from '~/services/wpgraphql/queries/authorPostsQuery'

const props = defineProps({
  slug: String,
})

const config = useRuntimeConfig()

const query = authorPostsQuery(props.slug as string, Number(config.public.postsLimit))
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `author-${props.slug}-posts`,
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
