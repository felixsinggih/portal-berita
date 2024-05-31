<script setup lang="ts">
import { getTagPostsSlugIn } from '~/services/wpgraphql/getTagPostsSlugIn'

const config = useRuntimeConfig()

const tags = ['seputar-pemilu-2024', 'pemilu-2024']
const { data } = await getTagPostsSlugIn(JSON.stringify(tags), Number(config.public.postsLimit))
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
