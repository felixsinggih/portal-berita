<script setup lang="ts">
import categoryPostsBySlugQuery from '~/services/wpgraphql/queries/categoryPostsBySlugQuery'

const config = useRuntimeConfig()

const query = categoryPostsBySlugQuery('headline', Number(config.public.postsLimit))
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `featured-article`,
  cache: 'default',
})
const res = computed(() => data.value as Posts)
</script>

<template>
  <div>
    <div v-if="pending">
      <div>Loading</div>
    </div>

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>

    <CarouselPost v-else :posts="res" />
  </div>
</template>
