import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const data = await $fetch(`/api/authors`)
  const docs = data as AuthorSitemap

  const sitemap = new SitemapStream({
    hostname: `${config.public.siteUrl}/author/`,
  })

  for (const doc of docs.data.users.nodes) {
    sitemap.write({
      url: doc.slug,
      lastmod: new Date(doc.posts.nodes[0].modified).toISOString(),
      changefreq: 'daily',
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
