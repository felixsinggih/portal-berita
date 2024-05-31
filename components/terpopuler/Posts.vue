<script setup lang="ts">
import { getPostsByslugIn } from '~/services/wpgraphql/getPostsByslugIn'

const { data: urls } = await useFetch('/api/popular-full')
const { data } = await getPostsByslugIn(JSON.stringify(urls.value).replaceAll('/', ''), 20)
const res = (await data.value) as Posts
</script>

<template>
  <div>
    <div class="grid lg:grid-cols-2 gap-6">
      <PostItemCard
        v-for="post in res.data.posts.nodes"
        :key="post.slug"
        :post="post"
      />
    </div>
  </div>
</template>
