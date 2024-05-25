import { graphqlRequest } from './graphqlRequest'

export async function getCategory(
  categorySlug: string,
) {
  const query = `{
    category(id: "${categorySlug}", idType: SLUG) {
      categoryId
      name
      slug
      count
      description
      seo {
        metaDesc
        focuskw
      }
    }
  }`

  const { data } = await graphqlRequest(query)
  return { data }
}
