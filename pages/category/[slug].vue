<script setup lang="ts">
import { getCategory } from '~/services/wpgraphql/getCategory'

const route = useRoute()

const { data } = await getCategory(route.params.slug as string)
const res = (await data.value) as Category
</script>

<template>
  <div>
    <CategoryHeader
      :title="res.data.category.name"
      :description="res.data.category.seo.metaDesc ?? res.data.category.description"
    />

    <CategoryPosts :slug="res.data.category.slug" />
  </div>
</template>
