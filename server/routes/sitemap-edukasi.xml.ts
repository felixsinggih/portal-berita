import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const category = 'edukasi'
  const data = await $fetch(`/api/category/${category}?limit=100`)
  const docs = data as Posts

  const sitemap = new SitemapStream({
    hostname: config.public.siteUrl,
  })

  for (const doc of docs.data.posts.nodes) {
    sitemap.write({
      url: doc.slug,
      lastmod: new Date(doc.modified).toISOString(),
      news: {
        publication: {
          name: config.public.siteName,
          language: 'id',
        },
        publication_date: new Date(doc.date).toISOString(),
        title: doc.title,
      },
      changefreq: 'daily',
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
