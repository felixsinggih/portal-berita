<script setup lang="ts">
import pageQuery from '~/services/wpgraphql/queries/pageQuery'

const config = useRuntimeConfig()

const query = pageQuery('ads-banner-1')
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `ads-banner-1`,
  cache: 'default',
})
const res = computed(() => data.value as Page)
</script>

<template>
  <div>
    <div v-if="pending">
      <div>Loading</div>
    </div>

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>

    <LazyCarouselImage v-else :page="res" />
  </div>
</template>
