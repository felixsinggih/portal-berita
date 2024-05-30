<script setup lang="ts">
import { getSearch } from '~/services/wpgraphql/getSearch'

const { data } = await getSearch('mitos', 5)
const res = (await data.value) as Posts
</script>

<template>
  <div>
    <Heading class="mb-4">
      <a href="/terkini">
        Topik Khusus
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
