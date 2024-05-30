<script setup lang="ts">
import { getLatestPosts } from '~/services/wpgraphql/getLatestPosts'

const { data } = await getLatestPosts(6)
const res = (await data.value) as Posts
</script>

<template>
  <div>
    <Heading class="mb-4">
      Terkini
    </Heading>

    <div class="space-y-6">
      <PostItemCardSmall
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
