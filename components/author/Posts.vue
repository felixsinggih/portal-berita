<script setup lang="ts">
import { getAuthorPosts } from '~/services/wpgraphql/getAuthorPosts'

const props = defineProps({
  slug: String,
})

const config = useRuntimeConfig()

const { data } = await getAuthorPosts(props.slug, Number(config.public.postsLimit))
const res = (await data.value) as Posts
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
