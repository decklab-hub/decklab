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

  return [
    {
      url: "https://decklab.pl",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...categories.map((category) => ({
      url: `https://decklab.pl/${category}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),

    ...articles.map((article: any) => ({
      url: `https://decklab.pl/artykuly/${article.slug}`,
      lastModified: article.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}