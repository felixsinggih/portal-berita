<script setup lang="ts">
import { getCategoryPostsBySlug } from '~/services/wpgraphql/getCategoryPostsBySlug'

const { data } = await getCategoryPostsBySlug('headline', 5)
const res = (await data.value) as Posts
</script>

<template>
  <CarouselPost :posts="res" />
</template>
