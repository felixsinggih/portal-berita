export default function mediaItemsQuery(limit: number) {
  const query = `{
    mediaItems(first: ${limit}, where: {orderby: {field: MODIFIED, order: DESC}}) {
      nodes {
        sourceUrl
        parent {
          node {
            uri
          }
        }
      }
    }
  }`

  return query
}
