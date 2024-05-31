<script setup lang="ts">
import { getPostsByslugIn } from '~/services/wpgraphql/getPostsByslugIn'

const { data: urls } = await useFetch('/api/popular')
const { data } = await getPostsByslugIn(JSON.stringify(urls.value).replaceAll('/', ''), 7)
const res = (await data.value) as Posts
</script>

<template>
  <div class="space-y-4">
    <Heading>
      <a href="/terpopuler">
        Terpopuler
      </a>
    </Heading>

    <div v-for="(post, i) in res.data.posts.nodes" :key="post.slug" class="flex items-center mb-2">
      <span class="text-2xl text-gray-800 dark:text-gray-200 font-bold italic opacity-70 me-3">#{{ i + 1 }}</span>
      <a :href="`/${post.slug}`" class="font-semibold xl:font-bold text-gray-800 dark:text-gray-200 hover:underline">
        {{ post.title }}
      </a>
    </div>
  </div>
</template>
