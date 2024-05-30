import { graphqlRequest } from './graphqlRequest'

export async function getPostsByslugIn(
  postSlugArray: any,
  limit: number,
) {
  const query = `{
    posts(
      where: {nameIn: ${postSlugArray}, orderby: {field: NAME_IN, order: ASC}}
            first: ${limit}
    ) {
      nodes {
        author {
          node {
            id
            name
            firstName
            slug
            avatar {
              url
            }
          }
        }
        slug
        date
        modified
        title(format: RENDERED)
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText    
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }`

  const { data } = await graphqlRequest(query)
  return { data }
}
