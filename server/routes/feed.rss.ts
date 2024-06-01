import RSS from 'rss'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  // wrap everything in a try catch block
  try {
    const data = await $fetch(`/api/latest?limit=100`)
    const posts = data as PostsWithExcerpt

    // create new rss feed this will be our channel tag with website title and url
    const feed = new RSS({
      title: config.public.siteName,
      description: config.public.siteDescriptionMeta,
      site_url: config.public.siteUrl,
      feed_url: `${config.public.siteUrl}/feed.rss`,
      image_url: config.public.siteLogoUrl,
      pubDate: new Date(),
      language: 'id-ID',
      copyright: `All rights reserved ${new Date().getFullYear()}`,
    })

    // loop over each posts
    for (const post of posts.data.posts.nodes) {
      // add item tag to our rss feed with correct data
      feed.item({
        title: post.title,
        url: `${config.public.siteUrl}/${post.slug}`,
        author: post.author.node.name,
        date: post.date,
        categories: [post.categories.nodes[0].name],
        description: `${post.excerpt}`,
      })
    }
    const feedString = feed.xml({ indent: true }) // This returns the XML as a string.

    event.node.res.setHeader('content-type', 'text/xml') // we need to tell nitro to return this as a xml file
    event.node.res.end(feedString) // send the HTTP response
  }
  catch (e) {
    // return an error
    return e
  }
})
