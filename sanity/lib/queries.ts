import { groq } from 'next-sanity'

export const articlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    slug,
    publishedAt,
    articleType,
    featured,
    mainImage,
  }
`
export const articleQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    excerpt,
    body,
    faq,
    products[]->{
        name,
        model,
        slug,
        brand->{
            name
        }
    },
    publishedAt,
    articleType,
    mainImage,
    author->{
      name,
      avatar
    }
  }
`