<script setup lang="ts">
import categoryQuery from '~/services/wpgraphql/queries/categoryQuery'

const route = useRoute()
const config = useRuntimeConfig()

const query = categoryQuery(route.params.slug as string)
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `category-${route.params.slug}`,
})
const res = data.value as Category

if (!res.data.category) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const pageTitle = `${res.data.category.name} - ${config.public.siteName}`
const pageDescription = res.data.category.seo.metaDesc !== '' ? res.data.category.seo.metaDesc : res.data.category.name

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/category/${res.data.category.slug}` }],
})

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogLocale: 'id_ID',
  ogType: 'website',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: `${config.public.siteUrl}/category/${res.data.category.slug}`,
  ogSiteName: config.public.siteName,
  ogImageUrl: config.public.siteThumbnailUrl,
  ogImageWidth: config.public.siteThumbnailWidth,
  ogImageHeight: config.public.siteThumbnailHeight,
  ogImageType: `image/${config.public.siteThumbnailImageType}` as ImageMimeType,
  twitterCard: 'summary_large_image',
  twitterSite: config.public.twitterMetaName,
  twitterCreator: config.public.twitterMetaUsername,
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: config.public.siteThumbnailUrl,
  keywords: res.data.category.seo.focuskw !== '?' ? res.data.category.seo.focuskw : res.data.category.name,
})

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [{
    '@type': 'ListItem',
    'position': 1,
    'name': 'Home',
    'item': {
      '@type': 'WebSite',
      '@id': config.public.siteUrl,
      'name': 'Home',
    },
  }, {
    '@type': 'ListItem',
    'position': 2,
    'name': pageTitle,
    'item': {
      '@type': 'WebPage',
      '@id': `${config.public.siteUrl}/category/${res.data.category.slug}`,
      'name': pageTitle,
    },
  }],
}))
</script>

<template>
  <div class="space-y-6">
    <div v-if="pending">
      Loading...
    </div>

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>

    <CategoryHeader
      v-else
      :title="res.data.category.name"
      :description="res.data.category.seo.metaDesc ?? res.data.category.description"
    />

    <LazyCategoryPosts :slug="res.data.category.slug" />
  </div>
</template>
