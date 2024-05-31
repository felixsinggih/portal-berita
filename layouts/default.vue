<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  meta: [
    { name: 'googlebot', content: 'index, follow' },
    { name: 'googlebot-news', content: 'index, follow' },
  ],
})

useSeoMeta({
  robots: 'index, follow',
  googleSiteVerification: config.public.googleSiteVerification,
  publisher: config.public.siteName,
})

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': config.public.siteName,
  'url': config.public.siteUrl,
  'logo': `${config.public.siteLogoUrl}`,
  'sameAs': [
    config.public.urlFacebook,
    config.public.urlTwitter,
    config.public.urlInstagram,
    config.public.urlYoutube,
    config.public.urlTiktok,
  ],
}))
</script>

<template>
  <div class="flex flex-col min-h-screen antialiased bg-white dark:bg-gray-900 font-openSans">
    <Navbar />
    <div class="w-full flex-grow">
      <main class="max-w-screen-xl mx-auto p-4">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>
