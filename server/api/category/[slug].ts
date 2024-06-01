import categoryPostsBySlugQuery from '~/services/wpgraphql/queries/categoryPostsBySlugQuery'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const slug = getRouterParam(event, 'slug')
  const { limit, endCursor } = getQuery(event)

  const query = categoryPostsBySlugQuery(slug as string, Number(limit), endCursor as string | null)
  const data = await $fetch(`${config.public.graphqlEndpoint}?query=${query}`)
  return data
})
