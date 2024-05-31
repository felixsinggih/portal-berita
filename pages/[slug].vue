<script setup lang="ts">
import { getPost } from '~/services/wpgraphql/getPost'

const route = useRoute()
const config = useRuntimeConfig()

const { data } = await getPost(route.params.slug as string)
const res = (await data.value) as Post

if (!res.data.post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const pageTitle = res.data.post.seo.title ?? res.data.post.title
const pageDescription = res.data.post.seo.metaDesc !== '' ? res.data.post.seo.metaDesc : res.data.post.title
const thumbnailUrl = res.data.post.featuredImage ? (res.data.post.featuredImage.node.mediaDetails.sizes ? res.data.post.featuredImage.node.mediaDetails.sizes[0].sourceUrl : res.data.post.featuredImage.node.mediaItemUrl) : config.public.siteThumbnailUrl
const thumbnailWidth = res.data.post.featuredImage ? (res.data.post.featuredImage.node.mediaDetails.sizes ? res.data.post.featuredImage.node.mediaDetails.sizes[0].width : res.data.post.featuredImage.node.mediaDetails.width) : config.public.siteThumbnailWidth
const thumbnailHeight = res.data.post.featuredImage ? (res.data.post.featuredImage.node.mediaDetails.sizes ? res.data.post.featuredImage.node.mediaDetails.sizes[0].height : res.data.post.featuredImage.node.mediaDetails.height) : config.public.siteThumbnailHeight
const thumbnailType = res.data.post.featuredImage ? (res.data.post.featuredImage.node.mediaDetails.sizes ? res.data.post.featuredImage.node.mediaDetails.sizes[0].mimeType : res.data.post.featuredImage.node.mimeType) : `image/${config.public.siteThumbnailImageType}` as ImageMimeType

const arrTag: string[] = res.data.post.tags ? res.data.post.tags.nodes.map(tag => tag.name) : [config.public.siteName as string]
const categories = res.data.post.categories.nodes
const breadcrumbListItem2Name = `${categories[0].slug !== 'headline' ? categories[0].name : categories[1].name} - ${config.public.siteName}`

useHead({
  link: [
    { rel: 'canonical', href: `${config.public.siteUrl}/${res.data.post.slug}` },
    { rel: 'author', href: `${config.public.siteUrl}/author/${res.data.post.author.node.slug}` },
  ],
  meta: [
    { name: 'originalTitle', content: res.data.post.title },
    { name: 'thumbnailUrl', content: thumbnailUrl },
    { name: 'pubdate', content: new Date(res.data.post.date).toISOString() },
  ],
})

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogLocale: 'id_ID',
  ogType: 'article',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: `${config.public.siteUrl}/${res.data.post.slug}`,
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
  keywords: res.data.post.seo.focuskw ? `${res.data.post.seo.focuskw},${arrTag.toString()}` : arrTag.toString(),
  author: res.data.post.author.node.name,

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
    'name': breadcrumbListItem2Name,
    'item': {
      '@type': 'WebPage',
      '@id': `${config.public.siteUrl}/category/${categories[0].slug !== 'headlines' ? categories[0].slug : categories[1].slug}`,
      'name': breadcrumbListItem2Name,
    },
  }, {
    '@type': 'ListItem',
    'position': 3,
    'name': pageTitle,
    'item': {
      '@type': 'WebPage',
      '@id': `${config.public.siteUrl}/${res.data.post.slug}`,
      'name': pageTitle,
    },
  }],
}))

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'headline': res.data.post.seo.title ?? res.data.post.title,
  'url': `${config.public.siteUrl}/${res.data.post.slug}`,
  'image': thumbnailUrl,
  'thumbnailUrl': thumbnailUrl,
}))

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': `${config.public.siteUrl}/${res.data.post.slug}`,
  },
  'headline': res.data.post.seo.title ?? res.data.post.title,
  'image': {
    '@type': 'ImageObject',
    'url': thumbnailUrl,
  },
  'datePublished': new Date(res.data.post.date).toISOString(),
  'dateModified': new Date(res.data.post.modified).toISOString(),
  'author': {
    '@type': 'Person',
    'name': res.data.post.author.node.name,
    'url': `${config.public.siteUrl}/author/${res.data.post.author.node.slug}`,
  },
  'publisher': {
    '@type': 'Organization',
    'name': config.public.siteName,
    'logo': {
      '@type': 'ImageObject',
      'url': config.public.siteLogoUrl,
    },
  },
  'description': res.data.post.seo.metaDesc !== '' ? res.data.post.seo.metaDesc : res.data.post.title,
}))
</script>

<template>
  <div class="space-y-6">
    <!-- Post Header -->
    <PostHeader
      :title="res.data.post.title"
      :slug="res.data.post.slug"
      :date="res.data.post.date"
      :categories="res.data.post.categories.nodes"
      :author="res.data.post.author"
    />

    <!-- Main Content & Right Sidebar -->
    <div class="flex flex-col gap-6 lg:flex-row">
      <!-- Main Content -->
      <div class="w-full shrink-0 lg:w-3/5 text-gray-800 dark:text-gray-200">
        <!-- Post Content -->
        <div class="w-full mx-auto text-wrap">
          <LazyPostContent
            :content="res.data.post.content"
          />
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="lg:sticky lg:top-20 lg:w-2/5 lg:self-start">
        <div class="space-y-6">
          <!-- Other Article -->
          <LazyPostOtherArticle
            :post-id="res.data.post.postId"
            :categories="res.data.post.categories.nodes"
          />

          <!-- Latest Article -->
          <LazyPostLatestArticleExclude :post-id="res.data.post.postId" />
        </div>
      </div>
    </div>
  </div>
</template>
