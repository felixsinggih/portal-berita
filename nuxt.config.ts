/* eslint-disable node/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-jsonld',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],
  googleFonts: {
    families: {
      'Open Sans': true,
    },
  },
  runtimeConfig: {
    googlePropertyId: process.env.GOOGLE_PROPERTY_ID,
    googleApplicationCredentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    public: {
      graphqlEndpoint: process.env.GRAPHQL_ENDPOINT,
      siteUrl: process.env.SITE_URL,
      siteName: process.env.SITE_NAME,
      siteSlogan: process.env.SITE_SLOGAN,
      siteDescriptionMeta: process.env.SITE_DESCRIPTION_META,
      siteKeywords: process.env.SITE_KEYWORDS,
      siteLogoUrl: process.env.SITE_LOGO_URL,
      siteThumbnailUrl: process.env.SITE_THUMBNAIL_URL,
      siteThumbnailWidth: process.env.SITE_THUMBNAIL_WIDTH,
      siteThumbnailHeight: process.env.SITE_THUMBNAIL_HEIGHT,
      siteThumbnailImageType: process.env.SITE_THUMBNAIL_IMAGE_TYPE,
      terpopulerDescriptionMeta: process.env.TERPOPULER_DESCRIPTION_META,
      terkiniDescriptionMeta: process.env.TERKINI_DESCRIPTION_META,
      twitterMetaName: process.env.TWITTER_META_NAME,
      twitterMetaUsername: process.env.TWITTER_META_USERNAME,
      pulicationName: process.env.PUBLICATION_NAME,
      urlFacebook: process.env.URL_FACEBOOK,
      urlTwitter: process.env.URL_TWITTER,
      urlInstagram: process.env.URL_INSTAGRAM,
      urlYoutube: process.env.URL_YOUTUBE,
      urlTiktok: process.env.URL_TIKTOK,
      postsLimit: process.env.POSTS_LIMIT,
      googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION,
    },
  },
})
