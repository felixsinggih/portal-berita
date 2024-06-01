import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const data = await $fetch(`/api/categories`)
  const docs = data as CategorySitemap

  const sitemap = new SitemapStream({
    hostname: `${config.public.siteUrl}/category/`,
  })

  for (const doc of docs.data.categories.nodes) {
    sitemap.write({
      url: doc.slug,
      lastmod: new Date(doc.posts.nodes[0].modified).toISOString(),
      changefreq: 'daily',
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
