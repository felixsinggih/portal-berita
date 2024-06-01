<script setup lang="ts">
import authorQuery from '~/services/wpgraphql/queries/authorQuery'

const route = useRoute()
const config = useRuntimeConfig()

const query = authorQuery(route.params.slug as string)
const { data } = await useFetch(`${config.public.graphqlEndpoint}`, {
  method: 'get',
  query: {
    query,
  },
})
const res = data.value as Author

if (!res.data.user) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const authorName = res.data.user.seo.title ?? res.data.user.name
const authorDesc = res.data.user.seo.metaDesc ?? res.data.user.description

const pageTitle = `Artikel dari ${authorName} - ${config.public.siteName}`

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/author/${res.data.user.slug}` }],
})

useSeoMeta({
  title: pageTitle,
  description: authorDesc,
  ogLocale: 'id_ID',
  ogType: 'website',
  ogTitle: pageTitle,
  ogDescription: authorDesc,
  ogUrl: `${config.public.siteUrl}/author/${res.data.user.slug}`,
  ogSiteName: config.public.siteName,
  ogImageUrl: res.data.user.avatar.url,
  twitterCard: 'summary_large_image',
  twitterSite: config.public.twitterMetaName,
  twitterCreator: config.public.twitterMetaUsername,
  twitterTitle: pageTitle,
  twitterDescription: authorDesc,
  twitterImage: res.data.user.avatar.url,
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
      '@id': `${config.public.siteUrl}/author/${res.data.user.slug}`,
      'name': pageTitle,
    },
  }],
}))
</script>

<template>
  <div class="space-y-6">
    <!-- Author Card -->
    <div class="w-full py-10 px-6 space-y-2 text-center bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-center">
        <NuxtImg
          :src="res.data.user.avatar.url"
          width="140"
          height="140"
          :alt="res.data.user.name"
          class="rounded"
        />
      </div>

      <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
        {{ authorName }}
      </h1>

      <h2 class="tracking-tight text-gray-600 dark:text-gray-300">
        {{ authorDesc }}
      </h2>

      <!-- Social Media -->
      <div class="flex items-center justify-center text-gray-600 dark:text-gray-200 space-x-2">
        <!-- Facebook -->
        <a v-if="res.data.user.seo.social.facebook" :href="res.data.user.seo.social.facebook" target="_blank">
          <Icon name="bi:facebook" />
        </a>

        <!-- Instagram -->
        <a v-if="res.data.user.seo.social.instagram" :href="res.data.user.seo.social.instagram" target="_blank">
          <Icon name="bi:instagram" />
        </a>

        <!-- Youtube -->
        <a v-if="res.data.user.seo.social.youTube" :href="res.data.user.seo.social.youTube" target="_blank">
          <Icon name="bi:youtube" />
        </a>

        <!-- Twitter -->
        <a v-if="res.data.user.seo.social.twitter" :href="res.data.user.seo.social.twitter" target="_blank">
          <Icon name="bi:twitter-x" />
        </a>

        <!-- Linkedin -->
        <a v-if="res.data.user.seo.social.linkedIn" :href="res.data.user.seo.social.linkedIn" target="_blank">
          <Icon name="bi:linkedin" />
        </a>
      </div>
    </div>

    <!-- Posts -->
    <div class="space-y-4">
      <h5 class=" text-gray-800 dark:text-gray-200 font-bold leading-relaxed text-lg sm:text-2xl">
        Artikel dari {{ authorName }}
      </h5>

      <LazyAuthorPosts :slug="res.data.user.slug" />
    </div>
  </div>
</template>
