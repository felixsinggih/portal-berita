<script setup lang="ts">
import { getPost } from '~/services/wpgraphql/getPost'

const route = useRoute()
const { data } = await getPost(route.params.slug as string)
const responseData = ref<Post>(data.value as Post)

useSeoMeta({
  title: responseData.value.data.post.seo.title,
  description: responseData.value.data.post.seo.metaDesc,
})

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
}))

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
}))
</script>

<template>
  <div>
    <h1>{{ responseData?.data.post.title }}</h1>
    <div v-html="responseData?.data.post.content" />
  </div>
</template>
