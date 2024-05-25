<script setup lang="ts">
import { getCategoryPostsNotIn } from '~/services/wpgraphql/getCategoryPostsNotIn'

const config = useRuntimeConfig()

// * Berita Ngapak [10 Pertama], Kilas Jateng, Olahraga, Lifestyle
const categories = [30566, 30422, 67600, 30421, 49023, 67602, 67603, 30423, 67601, 49075, 57402, 40899, 49679]
const { data } = await getCategoryPostsNotIn(categories, 12)
const res = (await data.value) as Posts
</script>

<template>
  <div>
    <Heading class="lg:hidden mb-4">
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
