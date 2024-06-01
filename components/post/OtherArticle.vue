<script setup lang="ts">
import categoryPostsInExcludeQuery from '~/services/wpgraphql/queries/categoryPostsInExcludeQuery'

const props = defineProps<{
  postId: number
  categories: PostCategory[]
}>()

const config = useRuntimeConfig()

const postCategories: number[] = props.categories.map(category => category.categoryId)
const query = categoryPostsInExcludeQuery(postCategories.toString(), props.postId, 9)
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
      Artikel Lainnya
    </Heading>

    <div class="space-y-6">
      <PostItemCardSmall
        v-for="post in res.data.posts.nodes.slice(3)"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
