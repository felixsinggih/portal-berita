export async function graphqlRequest(query: string) {
  const config = useRuntimeConfig()

  const { data } = await useFetch(config.public.graphqlEndpoint, {
    method: 'get',
    query: {
      query,
    },
    transform(data) {
      return data
    },
  })

  return { data }
}
