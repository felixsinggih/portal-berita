import authorsQuery from '~/services/wpgraphql/queries/authorsQuery'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const query = authorsQuery()
  const data = await $fetch(`${config.public.graphqlEndpoint}?query=${query}`)
  return data
})
