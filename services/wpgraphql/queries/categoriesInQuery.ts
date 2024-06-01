export default function categoriesInQuery(
  categoriesSlug: any,
) {
  const query = `{
    categories(where: {slug: [${categoriesSlug}]}) {
      nodes {
        categoryId
        name
        slug
        count
        seo {
          metaDesc
          breadcrumbs {
            text
            url
          }
          canonical
          focuskw
          metaKeywords
        }
        posts(first: 1) {
          nodes {
            slug
            modified
          }
        }
      }
    }
  }`

  return query
}
