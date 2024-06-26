type ImageMimeType = 'image/jpeg' | 'image/png' | 'image/gif' | null | undefined

// * fix
// TODO have deprecated fields
interface Category {
  data: {
    category: {
      categoryId: number
      name: string
      slug: string
      count: number
      description: string
      seo: {
        metaDesc: string
        focuskw: string
      }
    }
  }
}

// * fix
interface Page {
  data: {
    page: {
      slug: string
      title: string
      content: string
      date: string
      featuredImage: {
        node: {
          altText: string
          mediaItemUrl: string
          mediaDetails: {
            height: number
            width: number
          }
          mimeType: ImageMimeType
        }
      }
      seo: {
        metaDesc: string
        focuskw: string
      }
    }
  }
}

// * fix
// TODO have deprecated fields
interface Post {
  data: {
    post: {
      author: PostAuthor
      content: string
      postId: number
      slug: string
      date: string
      modified: string
      title: string
      categories: {
        nodes: PostCategory[]
      }
      tags: {
        nodes: PostTag[]
      }
      featuredImage: {
        node: {
          mediaItemUrl: string
          mimeType: ImageMimeType
          altText: string
          caption: string
          mediaDetails: {
            height: number
            width: number
            sizes: MediaDetailSize[]
          }
        }
      }
      seo: {
        metaDesc: string
        focuskw: string
        title: string
      }
      lastEditedBy: PostLastEditedBy
    }
  }
}

interface PostAuthor {
  node: {
    name: string
    slug: string
    avatar: {
      url: string
    }
  }
}

interface PostLastEditedBy {
  node: {
    name: string
    slug: string
    avatar: {
      url: string
    }
  }
}

interface PostCategory {
  categoryId: number
  name: string
  slug: string
}

interface PostTag {
  tagId: number
  name: string
  slug: string
}

interface MediaDetailSize {
  name: string
  sourceUrl: string
  width: number
  height: number
  mimeType: ImageMimeType
}

// * fix
interface Posts {
  data: {
    posts: {
      nodes: PostItem[]
      pageInfo: PageInfo
    }
  }
}

interface PostsWithExcerpt {
  data: {
    posts: {
      nodes: [
        PostList & {
          excerpt: string | null
        },
      ]
      pageInfo: PageInfo
    }
  }
}

interface Tag {
  tagId: number
  name: string
  slug: string
  count: number
  seo: {
    metaDesc: string
    focuskw: string
  }
}

// * fix
// TODO have deprecated fields
interface Author {
  data: {
    user: {
      userId: number
      name: string
      firstName: string
      slug: string
      description: string
      avatar: {
        url: string
      }
      seo: {
        title: string
        metaDesc: string
        social: {
          facebook: string
          instagram: string
          linkedIn: string
          twitter: string
          youTube: string
        }
      }
    }
  }
}

// Load More
interface PostItem {
  author: {
    node: {
      id: string
      name: string
      firstName: string
      slug: string
      avatar: {
        url: string
      }
    }
  }
  slug: string
  date: string
  modified: string
  title: string
  categories: {
    nodes: PostCategory[]
  }
  featuredImage: FeaturedImage
}

interface PageInfo {
  endCursor: string
  hasNextPage: boolean
  hasPreviousPage: boolean
  startCursor: string
}

// Sitemap
interface Sitemap {
  loc: string
  lastmod: string
  news: {
    title: string
    publicationName: string
    publicationLanguage: string
    date: string
  }
}

interface CategorySitemap {
  data: {
    categories: {
      nodes: {
        categoryId: number
        name: string
        slug: string
        count: number
        seo: {
          metaDesc: string
          breadcrumbs: [
            {
              text: string
              url: string
            },
          ]
          canonical: string
          focuskw: string
          metaKeywords: string
        }
        posts: {
          nodes: [
            {
              slug: string
              modified: string
            },
          ]
        }
      }[]
    }
  }
}

interface AuthorSitemap {
  data: {
    users: {
      nodes: {
        name: string
        slug: string
        posts: {
          nodes: [
            {
              slug: string
              modified: string
            },
          ]
        }
      }[]
    }
  }
}

interface MediaItems {
  data: {
    mediaItems: {
      nodes:
      {
        sourceUrl: string
        parent: {
          node: {
            uri: string
          }
        }
      }[]
    }
  }
}

interface FeaturedImage {
  node: {
    sourceUrl: string
    altText: string
  }
}
