<script setup lang="ts">
const config = useRuntimeConfig()

const pageTitle = `Terkini - ${config.public.siteName}`

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/terkini` }],
})

useSeoMeta({
  title: pageTitle,
  description: config.public.siteDescriptionMeta,
  ogLocale: 'id_ID',
  ogType: 'website',
  ogTitle: pageTitle,
  ogDescription: config.public.siteDescriptionMeta,
  ogUrl: `${config.public.siteUrl}/terkini`,
  ogSiteName: config.public.siteName,
  ogImageUrl: config.public.siteThumbnailUrl,
  ogImageWidth: config.public.siteThumbnailWidth,
  ogImageHeight: config.public.siteThumbnailHeight,
  ogImageType: `image/${config.public.siteThumbnailImageType}` as ImageMimeType,
  twitterCard: 'summary_large_image',
  twitterSite: config.public.twitterMetaName,
  twitterCreator: config.public.twitterMetaUsername,
  twitterTitle: pageTitle,
  twitterDescription: config.public.siteDescriptionMeta,
  twitterImage: config.public.siteThumbnailUrl,
  keywords: config.public.terkiniDescriptionMeta,
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
      '@id': `${config.public.siteUrl}/terkini`,
      'name': pageTitle,
    },
  }],
}))
</script>

<template>
  <div class="space-y-6">
    <CategoryHeader
      title="Terkini"
    />

    <LazyTerkiniPosts />
  </div>
</template>
