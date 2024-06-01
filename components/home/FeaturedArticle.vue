<script setup lang="ts">
import categoryPostsBySlugQuery from '~/services/wpgraphql/queries/categoryPostsBySlugQuery'

const config = useRuntimeConfig()

const query = categoryPostsBySlugQuery('headline', Number(config.public.postsLimit))
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
})
const res = data.value as Posts
</script>

<template>
  <CarouselPost :posts="res" />
</template>
