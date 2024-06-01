export default function categoriesQuery() {
  const query = `{
    categories(first: 100) {
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
