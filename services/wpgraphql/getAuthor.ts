import { graphqlRequest } from './graphqlRequest'

export async function getAuthor(
  authorSlug: string,
) {
  const query = `{
    user(id: "${authorSlug}", idType: SLUG) {
      userId
      name
      firstName
      slug
      description
      avatar(size: 256) {
        url
      }
      seo {
        title
        metaDesc
        social {
          facebook
          instagram
          linkedIn
          twitter
          youTube
        }
      }
    }
  }`

  const { data } = await graphqlRequest(query)
  return { data }
}
