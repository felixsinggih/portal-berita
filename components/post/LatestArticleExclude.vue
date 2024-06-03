<script setup lang="ts">
import latestPostsExcludeQuery from '~/services/wpgraphql/queries/latestPostsExcludeQuery'

const props = defineProps<{
  postId: number
  slug: string
}>()

const config = useRuntimeConfig()

const query = latestPostsExcludeQuery(props.postId, 6)
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `lastest-articles-in-post-${props.slug}`,
  cache: 'default',
})
const res = computed(() => data.value as Posts)
</script>

<template>
  <div>
    <Heading class="mb-4">
      Terkini
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
