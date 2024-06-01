import { useAsyncData, useFetch } from 'nuxt/app'
import latestPostsQuery from '~/services/wpgraphql/queries/latestPostsQuery'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  // const req = await readBody(event)
  // const { limit, endCursor } = req

  const { limit, endCursor } = getQuery(event)

  const query = latestPostsQuery(Number(limit), endCursor as string | null)
  // const query = `{
  //   posts(where: {orderby: {field: DATE, order: DESC}},
  //     after: "${endCursor}"
  //     first: ${limit}
  //   ) {
  //     nodes {
  //       author {
  //         node {
  //           id
  //           name
  //           firstName
  //           slug
  //           avatar {
  //             url
  //           }
  //         }
  //       }
  //       slug
  //       date
  //       modified
  //       title(format: RENDERED)
  //       categories {
  //         nodes {
  //           name
  //           slug
  //         }
  //       }
  //       featuredImage {
  //         node {
  //           sourceUrl
  //           altText
  //         }
  //       }
  //     }
  //     pageInfo {
  //       endCursor
  //       hasNextPage
  //       hasPreviousPage
  //       startCursor
  //     }
  //   }
  // }`

  // const { data } = await useFetch(config.public.graphqlEndpoint, {
  //   method: 'get',
  //   query: {
  //     query,
  //   },
  //   transform(data) {
  //     return data
  //   },
  // })

  const data = await $fetch(`${config.public.graphqlEndpoint}?query=${query}`)

  // const { data } = await useAsyncData(async () => await $fetch(`${config.public.graphqlEndpoint}?query=${query}`))

  return data
})
