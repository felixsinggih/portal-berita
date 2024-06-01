import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const data = await $fetch(`/api/media-items`)
  const docs = data as MediaItems

  const sitemap = new SitemapStream({
    hostname: config.public.siteUrl,
  })

  for (const doc of docs.data.mediaItems.nodes) {
    sitemap.write({
      url: doc.parent.node.uri,
      img: [{
        url: doc.sourceUrl,
      }],
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
