import { groq } from "next-sanity"

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

export const reviewsQuery = groq`
  *[
    _type == "article" &&
    articleType == "review"
  ] | order(publishedAt desc) {
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

export const relatedArticlesQuery = groq`
  *[
    _type == "article" &&
    slug.current != $slug
  ]
  | order(publishedAt desc)[0...3] {
    _id,
    title,
    excerpt,
    slug,
    publishedAt,
    articleType,
    mainImage,
  }
`

export const featuredReviewQuery = groq`
  *[
    _type == "article" &&
    articleType == "review" &&
    featuredInCategory == true
  ][0] {
    _id,
    title,
    excerpt,
    slug,
    publishedAt,
    articleType,
    featured,
    featuredInCategory,
    mainImage,
  }
`

export const articlesByTypeQuery = groq`
  *[
    _type == "article" &&
    articleType == $articleType
  ]
  | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    slug,
    publishedAt,
    articleType,
    featured,
    featuredInCategory,
    mainImage,
  }
`

export const featuredArticleByTypeQuery = groq`
  *[
    _type == "article" &&
    articleType == $articleType &&
    featuredInCategory == true
  ][0] {
    _id,
    title,
    excerpt,
    slug,
    publishedAt,
    articleType,
    featured,
    featuredInCategory,
    mainImage,
  }
`