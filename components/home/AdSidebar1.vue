<script setup lang="ts">
import { getPage } from '~/services/wpgraphql/getPage'

const { data } = await getPage('ads-banner-1')
const res = (await data.value) as Page
</script>

<template>
  <LazyCarouselImage :page="res" />
</template>
