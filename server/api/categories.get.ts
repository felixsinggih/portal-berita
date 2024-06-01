import categoriesQuery from '~/services/wpgraphql/queries/categoriesQuery'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const query = categoriesQuery()
  const data = await $fetch(`${config.public.graphqlEndpoint}?query=${query}`)
  return data
})
