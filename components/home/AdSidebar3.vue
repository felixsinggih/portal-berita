<script setup lang="ts">
import pageQuery from '~/services/wpgraphql/queries/pageQuery'

const config = useRuntimeConfig()

const query = pageQuery('ads-banner-3')
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `ads-banner-3`,
})
const res = data.value as Page
</script>

<template>
  <LazyCarouselImage :page="res" />
</template>
