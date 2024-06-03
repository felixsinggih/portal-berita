<script setup lang="ts">
import authorPostsQuery from '~/services/wpgraphql/queries/authorPostsQuery'

const props = defineProps({
  slug: String,
})

const config = useRuntimeConfig()

const query = authorPostsQuery(props.slug as string, Number(config.public.postsLimit))
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `author-${props.slug}-posts`,
  cache: 'default',
})
const res = computed(() => data.value as Posts)
</script>

<template>
  <div class="space-y-6">
    <div v-if="pending">
      <LoadingPostsCard />
    </div>

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>

    <div v-else class="grid lg:grid-cols-2 gap-6">
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
