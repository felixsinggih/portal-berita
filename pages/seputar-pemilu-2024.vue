<script setup lang="ts">
const config = useRuntimeConfig()
const pageTitle = `Seputar Pemilu 2024 - ${config.public.siteName}`

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/seputar-pemilu-2024` }],
})

useSeoMeta({
  title: pageTitle,
  description: 'Seputar Pemilu 2024',
  ogLocale: 'id_ID',
  ogType: 'website',
  ogTitle: pageTitle,
  ogDescription: 'Seputar Pemilu 2024',
  ogUrl: `${config.public.siteUrl}/seputar-pemilu-2024`,
  ogSiteName: config.public.siteName,
  ogImageUrl: 'https://serayunews.pw/wp-content/uploads/2023/11/seputar-pemilu-2024.jpeg',
  ogImageWidth: 1280,
  ogImageHeight: 660,
  ogImageType: 'image/jpeg',
  twitterCard: 'summary_large_image',
  twitterSite: config.public.twitterMetaName,
  twitterCreator: config.public.twitterMetaUsername,
  twitterTitle: pageTitle,
  twitterDescription: 'Seputar Pemilu 2024',
  twitterImage: 'https://serayunews.pw/wp-content/uploads/2023/11/seputar-pemilu-2024.jpeg',
  keywords: 'pemilu, pemilu 2024',
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
      '@id': `${config.public.siteUrl}/seputar-pemilu-2024`,
      'name': pageTitle,
    },
  }],
}))
</script>

<template>
  <div class="space-y-6">
    <CategoryHeader
      title="Seputar Pemilu 2024"
    />

    <LazySeputarPemilu2024Posts />
  </div>
</template>
