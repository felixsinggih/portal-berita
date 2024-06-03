<script setup lang="ts">
import postsBySlugInQuery from '~/services/wpgraphql/queries/postsBySlugInQuery'

const config = useRuntimeConfig()

const { data: urls } = await useFetch('/api/popular', {
  method: 'get',
  key: 'google-popular-urls',
  cache: 'default',
})

const query = postsBySlugInQuery(JSON.stringify(urls.value).replaceAll('/', ''), 7)
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `popular-articles`,
  cache: 'default',
})
const res = computed(() => data.value as Posts)
</script>

<template>
  <div class="space-y-4">
    <Heading>
      <a href="/terpopuler">
        Terpopuler
      </a>
    </Heading>

    <div v-if="pending">
      <LoadingHomePopularArticles />
    </div>

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>

    <div v-for="(post, i) in res.data.posts.nodes" v-else :key="post.slug" class="flex items-center mb-2">
      <span class="text-2xl text-gray-800 dark:text-gray-200 font-bold italic opacity-70 me-3">#{{ i + 1 }}</span>
      <a :href="`/${post.slug}`" class="font-semibold xl:font-bold text-gray-800 dark:text-gray-200 hover:underline">
        {{ post.title }}
      </a>
    </div>
  </div>
</template>
