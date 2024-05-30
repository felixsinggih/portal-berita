<script setup lang="ts">
import { getLatestPostsExclude } from '~/services/wpgraphql/getLatestPostsExclude'

const props = defineProps<{
  postId: number
}>()

const { data } = await getLatestPostsExclude(props.postId, 6)
const res = (await data.value) as Posts
</script>

<template>
  <div>
    <Heading class="mb-4">
      Terkini
    </Heading>

    <div class="space-y-6">
      <PostCardSmall
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
