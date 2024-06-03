<script setup lang="ts">
import authorQuery from '~/services/wpgraphql/queries/authorQuery'

const route = useRoute()
const config = useRuntimeConfig()

const query = authorQuery(route.params.slug as string)
const { data, pending, error } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
  key: `author-${route.params.slug}`,
  cache: 'default',
})
const res = computed(() => data.value as Author)

if (!res.value.data.user) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const authorName = res.value.data.user.seo.title ?? res.value.data.user.name
const authorDesc = res.value.data.user.seo.metaDesc ?? res.value.data.user.description

const pageTitle = `Artikel dari ${authorName} - ${config.public.siteName}`

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/author/${res.value.data.user.slug}` }],
})

useSeoMeta({
  title: pageTitle,
  description: authorDesc,
  ogLocale: 'id_ID',
  ogType: 'website',
  ogTitle: pageTitle,
  ogDescription: authorDesc,
  ogUrl: `${config.public.siteUrl}/author/${res.value.data.user.slug}`,
  ogSiteName: config.public.siteName,
  ogImageUrl: res.value.data.user.avatar.url,
  twitterCard: 'summary_large_image',
  twitterSite: config.public.twitterMetaName,
  twitterCreator: config.public.twitterMetaUsername,
  twitterTitle: pageTitle,
  twitterDescription: authorDesc,
  twitterImage: res.value.data.user.avatar.url,
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
      '@id': `${config.public.siteUrl}/author/${res.value.data.user.slug}`,
      'name': pageTitle,
    },
  }],
}))
</script>

<template>
  <div class="space-y-6">
    <div v-if="pending">
      <LoadingPostsCard />
    </div>

    <div v-else-if="error">
      Error: {{ error.message }}
    </div>

    <!-- Author Card -->
    <AuthorHeader
      v-else
      :author="res"
    />

    <!-- Posts -->
    <div class="space-y-4">
      <h5 v-if="authorName" class=" text-gray-800 dark:text-gray-200 font-bold leading-relaxed text-lg sm:text-2xl">
        Artikel dari {{ authorName }}
      </h5>

      <LazyAuthorPosts :slug="res.data.user.slug" />
    </div>
  </div>
</template>
