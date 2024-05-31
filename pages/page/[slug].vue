<script setup lang="ts">
import { getPage } from '~/services/wpgraphql/getPage'

const route = useRoute()
const config = useRuntimeConfig()

const { data } = await getPage(route.params.slug as string)
const res = (await data.value) as Page

if (!res.data.page) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const pageTitle = `${res.data.page.title} - ${config.public.siteName}`
const pageDescription = res.data.page.seo.metaDesc !== '' ? res.data.page.seo.metaDesc : res.data.page.title
const thumbnailUrl = res.data.page.featuredImage ? res.data.page.featuredImage.node.mediaItemUrl : config.public.siteThumbnailUrl
const thumbnailWidth = res.data.page.featuredImage ? res.data.page.featuredImage.node.mediaDetails.width : config.public.siteThumbnailWidth
const thumbnailHeight = res.data.page.featuredImage ? res.data.page.featuredImage.node.mediaDetails.width : config.public.siteThumbnailHeight
const thumbnailType = res.data.page.featuredImage ? res.data.page.featuredImage.node.mimeType : `image/${config.public.siteThumbnailImageType}` as ImageMimeType

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/page/${res.data.page.slug}` }],
})

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogLocale: 'id_ID',
  ogType: 'article',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: `${config.public.siteUrl}/page/${res.data.page.slug}`,
  ogSiteName: config.public.siteName,
  ogImageUrl: thumbnailUrl,
  ogImageWidth: thumbnailWidth,
  ogImageHeight: thumbnailHeight,
  ogImageType: thumbnailType,
  twitterCard: 'summary_large_image',
  twitterSite: config.public.twitterMetaName,
  twitterCreator: config.public.twitterMetaUsername,
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: thumbnailUrl,
})

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'url': config.public.siteUrl,
  'potentialAction': {
    '@type': 'SearchAction',
    'target': `${config.public.siteUrl}/search?keyword={search_term_string}`,
    'query': 'required name=search_term_string',
  },
}))
</script>

<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="space-y-6">
      <Breadcrumbs :title="res.data.page.title" />

      <!-- Title -->
      <h1
        class="text-2xl lg:text-4xl font-bold leading-relaxed tracking-tight text-gray-800 dark:text-gray-200"
        v-html="res.data.page.title"
      />

      <!-- Share Button -->
      <ShareButtonGroup
        :title="res.data.page.title"
        :slug="res.data.page.slug"
      />
    </div>

    <!-- Main Content & Right Sidebar -->
    <div class="flex flex-col gap-6 lg:flex-row">
      <!-- Main Content -->
      <div class="w-full shrink-0 lg:w-3/5 text-gray-800 dark:text-gray-200">
        <!-- Post Content -->
        <div class="w-full mx-auto text-wrap">
          <LazyPostContent
            :content="res.data.page.content"
          />
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="lg:sticky lg:top-20 lg:w-2/5 lg:self-start">
        <div class="space-y-6">
          <!-- Latest Article -->
          <LazyPageLatestArticle />
        </div>
      </div>
    </div>
  </div>
</template>
