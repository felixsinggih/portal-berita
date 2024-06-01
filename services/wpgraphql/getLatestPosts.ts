import { graphqlRequest } from './graphqlRequest'
import latestPostsQuery from './queries/latestPostsQuery'

export async function getLatestPosts(
  limit: number,
  endCursor: string | null = null,
) {
  const query = latestPostsQuery(limit, endCursor)

  const { data } = await graphqlRequest(query)
  return { data }
}
