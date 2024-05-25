<script setup lang="ts">
import { getCategoryPostsIn } from '~/services/wpgraphql/getCategoryPostsIn'

const config = useRuntimeConfig()

// * Berita Ngapak [10 Pertama], Kilas jateng
const categories = [30566, 30422, 67600, 30421, 49023, 67602, 67603, 30423, 67601, 49075, 57402]
const { data } = await getCategoryPostsIn(categories, 13)
const res = (await data.value) as Posts
</script>

<template>
  <div>
    <Heading class="mb-4">
      <a href="/terkini">
        Terkini di {{ config.public.siteName }}
      </a>
    </Heading>

    <div class="space-y-6">
      <PostCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
