<script setup lang="ts">
const config = useRuntimeConfig()

const pageTitle = `${config.public.siteName} ${config.public.siteSlogan && `- ${config.public.siteSlogan}`}`

useHead({
  link: [{ rel: 'canonical', href: config.public.siteUrl }],
})

useSeoMeta({
  title: pageTitle,
  description: config.public.siteDescriptionMeta,
  ogLocale: 'id_ID',
  ogType: 'website',
  ogTitle: pageTitle,
  ogDescription: config.public.siteDescriptionMeta,
  ogUrl: config.public.siteUrl,
  ogSiteName: config.public.siteName,
  ogImageUrl: config.public.siteThumbnailUrl,
  ogImageWidth: config.public.siteThumbnailWidth,
  ogImageHeight: config.public.siteThumbnailHeight,
  ogImageType: 'image/png',
  twitterCard: 'summary_large_image',
  twitterSite: config.public.twitterMetaName,
  twitterCreator: config.public.twitterMetaUsername,
  twitterTitle: pageTitle,
  twitterDescription: config.public.siteDescriptionMeta,
  twitterImage: config.public.siteThumbnailUrl,
  keywords: config.public.siteKeywords,
})
</script>

<template>
  <div>
    <HomeSection1 />
    <ClientOnly>
      <LazyHomeSection2 />
      <LazyHomeSection3 />
    </ClientOnly>
  </div>
</template>
