export default function authorQuery(
  authorSlug: string,
) {
  const query = `{
    user(id: "${authorSlug}", idType: SLUG) {
      userId
      name
      firstName
      slug
      description
      avatar(size: 256) {
        url
      }
      seo {
        title
        metaDesc
        social {
          facebook
          instagram
          linkedIn
          twitter
          youTube
        }
      }
    }
  }`

  return query
}
