import { graphqlRequest } from './graphqlRequest'

export async function getPage(
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

  const { data } = await graphqlRequest(query)
  return { data }
}
