export default function pageQuery(
  uri: string,
) {
  const query = `{
    page(id: "${uri}", idType: URI) {
      slug
      title
      date
      content(format: RENDERED)
      featuredImage {
        node {
          altText
          mediaItemUrl
          mediaDetails {
            height
            width
          }
          mimeType
        }
      }
      seo {
        metaDesc
        focuskw
      }
    }
  }`

  return query
}
