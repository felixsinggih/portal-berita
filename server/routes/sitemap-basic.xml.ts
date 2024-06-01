import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const data = await $fetch(`/api/latest?limit=1`)
  const docs = data as Posts
  const lastArticle = docs.data.posts.nodes[0]

  const sitemap = new SitemapStream()

  sitemap.write({
    url: config.public.siteUrl,
    lastmod: new Date(lastArticle.modified).toISOString(),
    changefreq: 'daily',
    priority: 0.1,
  })
  sitemap.end()

  return streamToPromise(sitemap)
})
