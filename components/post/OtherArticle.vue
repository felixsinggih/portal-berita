<script setup lang="ts">
import categoryPostsInExcludeQuery from '~/services/wpgraphql/queries/categoryPostsInExcludeQuery'

const props = defineProps<{
  postId: number
  slug: string
  categories: PostCategory[]
}>()

const config = useRuntimeConfig()

const postCategories: number[] = props.categories.map(category => category.categoryId)
const query = categoryPostsInExcludeQuery(postCategories.toString(), props.postId, 9)
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `other-articles-in-post-${props.slug}`,
  cache: 'default',
})
const res = computed(() => data.value as Posts)
</script>

<template>
  <div>
    <Heading class="mb-4">
      Artikel Lainnya
    </Heading>

    <div v-if="pending">
      <LoadingPostsCardSmall />
    </div>

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>

    <div v-else class="space-y-6">
      <PostItemCardSmall
        v-for="post in res.data.posts.nodes.slice(3)"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
