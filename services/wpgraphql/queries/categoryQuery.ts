export default function categoryQuery(
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

  return query
}
