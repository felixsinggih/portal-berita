<script setup lang="ts">
import { getCategoryPostsInExclude } from '~/services/wpgraphql/getCategoryPostsInExclude'

const props = defineProps<{
  postId: number
  categories: PostCategory[]
}>()

const postCategories: number[] = props.categories.map(category => category.categoryId)

const { data } = await getCategoryPostsInExclude(postCategories.toString(), props.postId, 9)
const res = (await data.value) as Posts
</script>

<template>
  <div>
    <Heading class="mb-4">
      Artikel Lainnya
    </Heading>

    <div class="space-y-6">
      <PostCardSmall
        v-for="post in res.data.posts.nodes.slice(3)"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
