import { SitemapIndexStream, streamToPromise } from 'sitemap'
import categoriesInQuery from '~/services/wpgraphql/queries/categoriesInQuery'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const sitemapIndex = new SitemapIndexStream({})

  const sitemapBasic = await $fetch(`/api/latest?limit=1`) as Posts

  const categories = [
    'advertorial',
    'banjarnegara',
    'banyumas',
    'bisnis',
    'cilacap',
    'edukasi',
    'ekonomi',
    'entertainment',
    'health',
    'hukumkriminal',
    'inspirasi',
    'internasional',
    'kebumen',
    'kilas-jateng',
    'kuliner',
    'lifestyle',
    'muara-kata',
    'nasional',
    'news',
    'opini',
    'otomotif',
    'pariwisata',
    'peristiwa',
    'politik',
    'purbalingga',
    'sport',
    'tekno',
    'tips-trick',
    'travel',
    'wonosobo',
    'ngapak-diaspora',
    'cek-fakta',
  ]
  const sitemapCategories = await $fetch(`/api/categories`) as CategorySitemap

  // Add sitemaps to the index
  sitemapIndex.write({ url: `${config.public.siteUrl}/sitemap-basic.xml`, lastmod: new Date(sitemapBasic.data.posts.nodes[0].modified).toISOString() })
  sitemapIndex.write({ url: `${config.public.siteUrl}/sitemap-feeds.xml`, lastmod: new Date(sitemapBasic.data.posts.nodes[0].modified).toISOString() })

  // Sitemap Categories
  for (const sitemap of sitemapCategories.data.categories.nodes) {
    if (categories.includes(sitemap.slug)) {
      sitemapIndex.write({ url: `${config.public.siteUrl}/sitemap-${sitemap.slug}.xml`, lastmod: new Date(sitemap.posts.nodes[0].modified).toISOString() })
    }
  }

  sitemapIndex.write({ url: `${config.public.siteUrl}/sitemap-authors.xml`, lastmod: new Date(sitemapBasic.data.posts.nodes[0].modified).toISOString() })
  sitemapIndex.write({ url: `${config.public.siteUrl}/sitemap-images.xml`, lastmod: new Date(sitemapBasic.data.posts.nodes[0].modified).toISOString() })

  sitemapIndex.end()

  const xml = await streamToPromise(sitemapIndex)

  return xml
})
