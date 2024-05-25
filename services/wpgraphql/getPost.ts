import { graphqlRequest } from './graphqlRequest'

export async function getPost(postSlug: string) {
  const query = `{
    post(
      id: "${postSlug}",
      idType: SLUG
    ) {
      author {
        node {
          name
          slug
          avatar {
            url
          }
        }
      }
      content(format: RENDERED)
      postId
      slug
      date
      modified
      title(format: RENDERED)
      categories {
        nodes {
          categoryId
          name
          slug
        }
      }
      tags {
        nodes {
          tagId
          name
          slug
        }
      }
      featuredImage {
        node {
          mediaItemUrl
          mimeType
          altText
          caption(format: RENDERED)
          mediaDetails {
            height
            width
            sizes(include: LARGE) {
              name
              sourceUrl
              width
              height
              mimeType
            }
          }
        }
      }
      seo {
        metaDesc
        focuskw
        title
      }
      lastEditedBy {
        node {
          name
          slug
          avatar {
            url
          }
        }
      }
    }
  }`

  const { data } = await graphqlRequest(query)
  return { data }
}
