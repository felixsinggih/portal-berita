export default function authorsQuery() {
  const query = `{
    users(first: 100) {
      nodes {
        name
        slug
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
