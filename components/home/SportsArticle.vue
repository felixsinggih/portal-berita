<script setup lang="ts">
import { getCategoryPostsIn } from '~/services/wpgraphql/getCategoryPostsIn'

const { data } = await getCategoryPostsIn([40899], 4, null)
const res = (await data.value) as Posts
</script>

<template>
  <div>
    <Heading class="mb-4">
      <a href="/terkini">
        Olahraga
      </a>
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
