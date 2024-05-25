import { graphqlRequest } from './graphqlRequest'

export async function getCategoryPostsInExclude(
  categoryIdArr: any,
  excludeId: number,
  limit: number,
  endCursor: string | null = null,
) {
  const query = `{
    posts(
      where: {categoryIn: [${categoryIdArr}], notIn: "${excludeId}", orderby: {field: DATE, order: DESC}}
      after: "${endCursor}"
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
