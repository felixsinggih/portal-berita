<script setup lang="ts">
import postsBySlugInQuery from '~/services/wpgraphql/queries/postsBySlugInQuery'

const config = useRuntimeConfig()

const { data: urls } = await useFetch('/api/popular')

const query = postsBySlugInQuery(JSON.stringify(urls.value).replaceAll('/', ''), 7)
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
})
const res = data.value as Posts
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
