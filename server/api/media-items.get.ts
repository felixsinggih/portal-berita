import mediaItemsQuery from '~/services/wpgraphql/queries/mediaItemsQuery'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const query = mediaItemsQuery(100)
  const data = await $fetch(`${config.public.graphqlEndpoint}?query=${query}`)
  return data
})
