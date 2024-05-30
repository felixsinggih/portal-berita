<script setup lang="ts">
import { getCategoryPostsBySlug } from '~/services/wpgraphql/getCategoryPostsBySlug'

const props = defineProps({
  slug: String,
})

const config = useRuntimeConfig()

const { data } = await getCategoryPostsBySlug(props.slug as string, Number(config.public.postsLimit))
const res = (await data.value) as Posts
</script>

<template>
  <div class="space-y-6">
    <div class="grid lg:grid-cols-2 gap-6 pt-6">
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>

    <LazyCategoryLoadMore
      :slug="slug as string"
      :info="res.data.posts.pageInfo"
    />
  </div>
</template>
