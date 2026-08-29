import { MetadataRoute } from "next"
import { client } from "@/sanity/lib/client"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await client.fetch(`
    *[
      _type == "article" &&
      publishedAt != null &&
      seo.noIndex != true
    ] | order(publishedAt desc) {
  "slug": slug.current,
  articleType,
  publishedAt
}
  `)

  const categories = [
    "aktualnosci",
    "testy",
    "rankingi",
    "porownania",
    "poradniki",
  ]

  const articleTypePaths: Record<string, string> = {
  news: "aktualnosci",
  review: "testy",
  comparison: "porownania",
  ranking: "rankingi",
  guide: "poradniki",
}

  return [
    {
      url: "https://www.decklab.pl",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...categories.map((category) => ({
      url: `https://www.decklab.pl/${category}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    ...articles.map((article: any) => ({
  url: `https://www.decklab.pl/${articleTypePaths[article.articleType]}/${article.slug}`,
  lastModified: article.publishedAt,
  changeFrequency: "monthly" as const,
  priority: 0.7,
})),
  ]
}